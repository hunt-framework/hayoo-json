[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some general parsing utilities used for parsing textual chord\n representations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html",
        "fct-type": "module",
        "title": "ChordTokenizer"
      },
      "index": {
        "description": "Summary Some general parsing utilities used for parsing textual chord representations",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "ChordTokenizer",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Tokenizer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pAddition",
      "description": {
        "fct-descr": "\u003cp\u003eParses the a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003e (or the removal of a chord addition, \n prefixed by  a \u003ccode\u003e*\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser Addition",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pAddition",
        "fct-type": "function",
        "title": "pAddition"
      },
      "index": {
        "description": "Parses the Chord Addition or the removal of chord addition prefixed by",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pAddition",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Addition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pAdditions",
      "description": {
        "fct-descr": "\u003cp\u003eParses a list of \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es within parenthesis \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser [Addition]",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pAdditions",
        "fct-type": "function",
        "title": "pAdditions"
      },
      "index": {
        "description": "Parses list of Chord Addition within parenthesis",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pAdditions",
        "normalized": "Parser[Addition]",
        "package": "HarmTrace-Base",
        "partial": "Additions",
        "signature": "Parser[Addition]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pChord",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e in Harte et al. syntax including possible additions, \n and removal of chord additions. If a chord has no \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003eDegree\u003c/code\u003e \n list (if any) is analysed and depending on the \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e (if any) a \n \u003ccode\u003e\u003ca\u003eMaj\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eAug\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e is stored. By default all the \n duration stored in every \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e is 1 (where the unit is application \n dependend, often these are beats, but they can also be eightnotes)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser ChordLabel",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pChord",
        "fct-type": "function",
        "title": "pChord"
      },
      "index": {
        "description": "Parses ChordLabel in Harte et al syntax including possible additions and removal of chord additions If chord has no Shorthand the Degree list if any is analysed and depending on the Triad if any Maj Min Aug or Dim Shorthand is stored By default all the duration stored in every Chord is where the unit is application dependend often these are beats but they can also be eightnotes",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pChord",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pKey",
      "description": {
        "fct-descr": "\u003cp\u003eparses a musical key description, e.g. \u003ccode\u003eC:maj\u003c/code\u003e, or \u003ccode\u003eD:min\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser Key",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pKey",
        "fct-type": "function",
        "title": "pKey"
      },
      "index": {
        "description": "parses musical key description e.g maj or min",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pKey",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pRoot",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eBb\u003c/code\u003e, or \u003ccode\u003eF#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser Root",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pRoot",
        "fct-type": "function",
        "title": "pRoot"
      },
      "index": {
        "description": "Parses Root Note e.g Bb or",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pRoot",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pShorthand",
      "description": {
        "fct-descr": "\u003cp\u003eParses a shorthand following Harte et al. syntax, but also the shorthands\n added to the Billboard dataset, e.g. \u003ccode\u003emaj\u003c/code\u003e, \u003ccode\u003emin\u003c/code\u003e, or \u003ccode\u003e9\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser Shorthand",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pShorthand",
        "fct-type": "function",
        "title": "pShorthand"
      },
      "index": {
        "description": "Parses shorthand following Harte et al syntax but also the shorthands added to the Billboard dataset e.g maj min or",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pShorthand",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Shorthand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pSongAbs",
      "description": {
        "fct-descr": "\u003cp\u003eParser that parses a string of whitespace-separated \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003es, e.g.\n \u003ccode\u003eC:maj Bb:9(s11);1 E:min7;1 Eb:min7;1 Ab:7;1 D:min7;1 G:7(13);1 C:maj6(9);1\u003c/code\u003e\n The first \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e must be the key of the piece, and the after each chord\n the semicolumn and an Integer representing the duration of the chord must \n be presented\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser PieceLabel",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#pSongAbs",
        "fct-type": "function",
        "title": "pSongAbs"
      },
      "index": {
        "description": "Parser that parses string of whitespace-separated Chord e.g maj Bb s11 min7 Eb min7 Ab min7 maj6 The first Chord must be the key of the piece and the after each chord the semicolumn and an Integer representing the duration of the chord must be presented",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "pSongAbs",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Song Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:parseChordSeq",
      "description": {
        "fct-descr": "\u003cp\u003eTop level parser that parsers a string into a \u003ccode\u003e\u003ca\u003ePieceLabel\u003c/a\u003e\u003c/code\u003e and a posibly\n empty list of errors\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.ChordTokenizer",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "String -\u003e (PieceLabel, [Error LineColPos])",
        "fct-source": "src/HarmTrace-Base-ChordTokenizer.html#parseChordSeq",
        "fct-type": "function",
        "title": "parseChordSeq"
      },
      "index": {
        "description": "Top level parser that parsers string into PieceLabel and posibly empty list of errors",
        "hierarchy": "HarmTrace Base ChordTokenizer",
        "module": "HarmTrace.Base.ChordTokenizer",
        "name": "parseChordSeq",
        "normalized": "String-\u003e(PieceLabel,[Error LineColPos])",
        "package": "HarmTrace-Base",
        "partial": "Chord Seq",
        "signature": "String-\u003e(PieceLabel,[Error LineColPos])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A set of types and classes for representing musical chords. The \n chord datatypes are based on the unambiguous chord representation presented \n in: Christopher Harte, Mark Sandler and Samer Abdallah (2005), \n \u003cem\u003eSymbolic representation of musical chords: a proposed syntax for text annotations\u003c/em\u003e, \n In: Proceedings of 6th International Conference on Music Information \n Retrieval (\u003ca\u003ehttp://ismir2005.ismir.net/proceedings/1080.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Base-MusicRep.html",
        "fct-type": "module",
        "title": "MusicRep"
      },
      "index": {
        "description": "Summary set of types and classes for representing musical chords The chord datatypes are based on the unambiguous chord representation presented in Christopher Harte Mark Sandler and Samer Abdallah Symbolic representation of musical chords proposed syntax for text annotations In Proceedings of th International Conference on Music Information Retrieval http ismir2005.ismir.net proceedings pdf",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MusicRep",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Music Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Accidental",
      "description": {
        "fct-descr": "\u003cp\u003eA musical \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Accidental",
        "fct-type": "data",
        "title": "Accidental"
      },
      "index": {
        "description": "musical Accidental",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Accidental",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Accidental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Addition",
      "description": {
        "fct-descr": "\u003cp\u003eIntervals for additonal chord notes    \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Addition",
        "fct-type": "data",
        "title": "Addition"
      },
      "index": {
        "description": "Intervals for additonal chord notes",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Addition",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Addition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Chord",
      "description": {
        "fct-descr": "\u003cp\u003eThe representation for a single chord \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "data",
        "title": "Chord"
      },
      "index": {
        "description": "The representation for single chord",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Chord",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ChordDegree",
      "description": {
        "fct-descr": "\u003cp\u003eA chord based on relative \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ChordDegree",
        "fct-type": "type",
        "title": "ChordDegree"
      },
      "index": {
        "description": "chord based on relative ScaleDegree",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "ChordDegree",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ChordLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA chord based on absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e notes\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ChordLabel",
        "fct-type": "type",
        "title": "ChordLabel"
      },
      "index": {
        "description": "chord based on absolute Root notes",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "ChordLabel",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ClassType",
      "description": {
        "fct-descr": "\u003cp\u003eWe introduce four chord categories: major chords, minor chords, dominant\n seventh chords, and diminshed seventh chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "data",
        "title": "ClassType"
      },
      "index": {
        "description": "We introduce four chord categories major chords minor chords dominant seventh chords and diminshed seventh chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "ClassType",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Class Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:DiatonicDegree",
      "description": {
        "fct-descr": "\u003cp\u003eAll Diatonic scale degrees \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "data",
        "title": "DiatonicDegree"
      },
      "index": {
        "description": "All Diatonic scale degrees",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "DiatonicDegree",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Diatonic Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:DiatonicNatural",
      "description": {
        "fct-descr": "\u003cp\u003eThe seven diatonic naturals\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "data",
        "title": "DiatonicNatural"
      },
      "index": {
        "description": "The seven diatonic naturals",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "DiatonicNatural",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Diatonic Natural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Interval",
      "description": {
        "fct-descr": "\u003cp\u003eDiatonic major intervals used to denote \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "Diatonic major intervals used to denote Chord Addition",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Interval",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eA musical key consising of a \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "musical key consising of Root and Mode",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Key",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e of a key, which can be major or minor\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "The Mode of key which can be major or minor",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Mode",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Note",
      "description": {
        "fct-descr": "\u003cp\u003eA musical note is a pitch (either absolute or relative) posibly modified\n by an \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Note",
        "fct-type": "data",
        "title": "Note"
      },
      "index": {
        "description": "musical note is pitch either absolute or relative posibly modified by an Accidental",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Note",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:PieceLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA container type combinint a key and a list of \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#PieceLabel",
        "fct-type": "data",
        "title": "PieceLabel"
      },
      "index": {
        "description": "container type combinint key and list of ChordLabel",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "PieceLabel",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Piece Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Root",
      "description": {
        "fct-descr": "\u003cp\u003eRepresenting absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e notes  \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Root",
        "fct-type": "type",
        "title": "Root"
      },
      "index": {
        "description": "Representing absolute Root notes",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Root",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ScaleDegree",
      "description": {
        "fct-descr": "\u003cp\u003eKey relative scale degrees to abstract from the absolute Root notes\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ScaleDegree",
        "fct-type": "type",
        "title": "ScaleDegree"
      },
      "index": {
        "description": "Key relative scale degrees to abstract from the absolute Root notes",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "ScaleDegree",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Scale Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Shorthand",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "data",
        "title": "Shorthand"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Shorthand",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Shorthand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Triad",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e comes in four flavours: major, minor, augmented, dimished, and \n sometimes a chord does not have a triad (e.g. suspended chords, etc.)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "data",
        "title": "Triad"
      },
      "index": {
        "description": "Triad comes in four flavours major minor augmented dimished and sometimes chord does not have triad e.g suspended chords etc",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Triad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:A",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "A",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "A",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Add",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Add (Note Interval)",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Addition",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Add",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Aug",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Aug",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Aug"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Aug",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Aug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:AugTriad",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "AugTriad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "function",
        "title": "AugTriad"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "AugTriad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Aug Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:B",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "B",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "B",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:C",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "C",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "C",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Chord",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Chord",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Chord",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:D",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "D",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "D",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Dim",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Dim",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Dim"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Dim",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Dim7",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Dim7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Dim7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Dim7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Dim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DimClass",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "DimClass",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "function",
        "title": "DimClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "DimClass",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Dim Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DimTriad",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "DimTriad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "function",
        "title": "DimTriad"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "DimTriad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Dim Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DomClass",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "DomClass",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "function",
        "title": "DomClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "DomClass",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Dom Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:E",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "E",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "E"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "E",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Eleven",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Eleven",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Eleven"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Eleven",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Eleven",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:F",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "F",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "F",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:FF",
      "description": {
        "fct-descr": "\u003cp\u003edouble flat\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "FF",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Accidental",
        "fct-type": "function",
        "title": "FF"
      },
      "index": {
        "description": "double flat",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "FF",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "FF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Five",
      "description": {
        "fct-descr": "\u003cp\u003ePower chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Five",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Five"
      },
      "index": {
        "description": "Power chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Five",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Five",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Fl",
      "description": {
        "fct-descr": "\u003cp\u003eflat\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Fl",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Accidental",
        "fct-type": "function",
        "title": "Fl"
      },
      "index": {
        "description": "flat",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Fl",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Fl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:G",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "G",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "G"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "G",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:HDim7",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "HDim7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "HDim7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "HDim7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "HDim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "I"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I1",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I1",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I1"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I1",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I10",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I10",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I10"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I10",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I11",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I11",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I11"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I11",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I12",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I12",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I12"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I12",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I13",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I13",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I13"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I13",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I2",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I2",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I2",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I3",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I3",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I3"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I3",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I4",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I4",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I4"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I4",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I5",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I5",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I5"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I5",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I6",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I6",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I6"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I6",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I7",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I8",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I8",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I8"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I8",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I9",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "I9",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Interval",
        "fct-type": "function",
        "title": "I9"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "I9",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:II",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "II",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "II"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "II",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "II",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:III",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "III",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "III"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "III",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "III",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:IV",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "IV",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "IV"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "IV",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Imp",
      "description": {
        "fct-descr": "\u003cp\u003efor unrepresentable scale degrees\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Imp",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "Imp"
      },
      "index": {
        "description": "for unrepresentable scale degrees",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Imp",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Imp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Key",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Key",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Key",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Key",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj",
      "description": {
        "fct-descr": "\u003cp\u003eTriadic chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Maj",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Maj"
      },
      "index": {
        "description": "Triadic chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Maj",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj13",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Maj13",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Maj13"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Maj13",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj6",
      "description": {
        "fct-descr": "\u003cp\u003eSixth chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Maj6",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Maj6"
      },
      "index": {
        "description": "Sixth chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Maj6",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj7",
      "description": {
        "fct-descr": "\u003cp\u003eSeventh chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Maj7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Maj7"
      },
      "index": {
        "description": "Seventh chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Maj7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj9",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Maj9",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Maj9"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Maj9",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajClass",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MajClass",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "function",
        "title": "MajClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MajClass",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajMode",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MajMode",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Mode",
        "fct-type": "function",
        "title": "MajMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MajMode",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajTriad",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MajTriad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "function",
        "title": "MajTriad"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MajTriad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Maj Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min11",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min11",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min11"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min11",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min13",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min13",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min13"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min13",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min6",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min6",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min6"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min6",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min7",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min9",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Min9",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Min9"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Min9",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinClass",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MinClass",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "function",
        "title": "MinClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MinClass",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinMaj7",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MinMaj7",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "MinMaj7"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MinMaj7",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min Maj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinMode",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MinMode",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Mode",
        "fct-type": "function",
        "title": "MinMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MinMode",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinTriad",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "MinTriad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "function",
        "title": "MinTriad"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "MinTriad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Min Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:N",
      "description": {
        "fct-descr": "\u003cp\u003efor no root\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "N",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "for no root",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "N",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Nin",
      "description": {
        "fct-descr": "\u003cp\u003eExtended chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Nin",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Nin"
      },
      "index": {
        "description": "Extended chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Nin",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Nin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoAdd",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NoAdd (Note Interval)",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Addition",
        "fct-type": "function",
        "title": "NoAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "NoAdd",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "No Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoClass",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NoClass",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#ClassType",
        "fct-type": "function",
        "title": "NoClass"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "NoClass",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "No Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoTriad",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NoTriad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Triad",
        "fct-type": "function",
        "title": "NoTriad"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "NoTriad",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "No Triad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:None",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "None",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "None",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Note",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Note (Maybe Accidental) a",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Note",
        "fct-type": "function",
        "title": "Note"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Note",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:PieceLabel",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "PieceLabel Key [ChordLabel]",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#PieceLabel",
        "fct-type": "function",
        "title": "PieceLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "PieceLabel",
        "normalized": "PieceLabel Key[ChordLabel]",
        "package": "HarmTrace-Base",
        "partial": "Piece Label",
        "signature": "PieceLabel Key[ChordLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:SS",
      "description": {
        "fct-descr": "\u003cp\u003edouble sharp\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "SS",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Accidental",
        "fct-type": "function",
        "title": "SS"
      },
      "index": {
        "description": "double sharp",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "SS",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "SS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sev",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Sev",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Sev"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Sev",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Sev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sh",
      "description": {
        "fct-descr": "\u003cp\u003esharp \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Sh",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Accidental",
        "fct-type": "function",
        "title": "Sh"
      },
      "index": {
        "description": "sharp",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Sh",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Sh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sus2",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Sus2",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Sus2"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Sus2",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Sus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sus4",
      "description": {
        "fct-descr": "\u003cp\u003eSuspended chords\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Sus4",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Sus4"
      },
      "index": {
        "description": "Suspended chords",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Sus4",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Sus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Thirteen",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Thirteen",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
        "fct-type": "function",
        "title": "Thirteen"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "Thirteen",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Thirteen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:V",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "V",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "V"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "V",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:VI",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "VI",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "VI"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "VI",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "VI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:VII",
      "description": {
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "VII",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
        "fct-type": "function",
        "title": "VII"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "VII",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "VII",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:X",
      "description": {
        "fct-descr": "\u003cp\u003efor representing unknown roots (used in MIREX)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "X",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "for representing unknown roots used in MIREX",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "X",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:analyseDegTriad",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyses a degree list and returns \u003ccode\u003e\u003ca\u003eMajTriad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMinTriad\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNoTriad\u003c/a\u003e\u003c/code\u003e if\n the degrees make a chord a major, minor, or no triad, respectivly.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[Addition] -\u003e Triad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#analyseDegTriad",
        "fct-type": "function",
        "title": "analyseDegTriad"
      },
      "index": {
        "description": "Analyses degree list and returns MajTriad MinTriad or NoTriad if the degrees make chord major minor or no triad respectivly",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "analyseDegTriad",
        "normalized": "[Addition]-\u003eTriad",
        "package": "HarmTrace-Base",
        "partial": "Deg Triad",
        "signature": "[Addition]-\u003eTriad"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordAdditions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[Addition]",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "chordAdditions"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "chordAdditions",
        "normalized": "[Addition]",
        "package": "HarmTrace-Base",
        "partial": "Additions",
        "signature": "[Addition]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordRoot",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "a",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "chordRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "chordRoot",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordShorthand",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Shorthand",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "chordShorthand"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "chordShorthand",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Shorthand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:duration",
      "description": {
        "fct-descr": "\u003cp\u003ethe duration of the chord \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Int",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "the duration of the chord",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "duration",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:getLoc",
      "description": {
        "fct-descr": "\u003cp\u003ethe index of the chord in the list of tokens\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Int",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Chord",
        "fct-type": "function",
        "title": "getLoc"
      },
      "index": {
        "description": "the index of the chord in the list of tokens",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "getLoc",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isAddition",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003e represents an addition and not \n a degree that has to be removed (*).\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Addition -\u003e Bool",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#isAddition",
        "fct-type": "function",
        "title": "isAddition"
      },
      "index": {
        "description": "Returns true if the Chord Addition represents an addition and not degree that has to be removed",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "isAddition",
        "normalized": "Addition-\u003eBool",
        "package": "HarmTrace-Base",
        "partial": "Addition",
        "signature": "Addition-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isNone",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eN\u003c/a\u003e\u003c/code\u003e, and False otherwise \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root -\u003e Bool",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#isNone",
        "fct-type": "function",
        "title": "isNone"
      },
      "index": {
        "description": "Returns True if the Root is and False otherwise",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "isNone",
        "normalized": "Root-\u003eBool",
        "package": "HarmTrace-Base",
        "partial": "None",
        "signature": "Root-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isNoneChord",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e is not a chord, and False otherwise \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordLabel -\u003e Bool",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#isNoneChord",
        "fct-type": "function",
        "title": "isNoneChord"
      },
      "index": {
        "description": "Returns True if the ChordLabel is not chord and False otherwise",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "isNoneChord",
        "normalized": "ChordLabel-\u003eBool",
        "package": "HarmTrace-Base",
        "partial": "None Chord",
        "signature": "ChordLabel-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isRoot",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is not unknown or none\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root -\u003e Bool",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#isRoot",
        "fct-type": "function",
        "title": "isRoot"
      },
      "index": {
        "description": "Returns True if the Root is not unknown or none",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "isRoot",
        "normalized": "Root-\u003eBool",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": "Root-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is unknown, and False otherwise \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root -\u003e Bool",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#isUnknown",
        "fct-type": "function",
        "title": "isUnknown"
      },
      "index": {
        "description": "Returns True if the Root is unknown and False otherwise",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "isUnknown",
        "normalized": "Root-\u003eBool",
        "package": "HarmTrace-Base",
        "partial": "Unknown",
        "signature": "Root-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:keyMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Mode",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Key",
        "fct-type": "function",
        "title": "keyMode"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "keyMode",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:keyRoot",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#Key",
        "fct-type": "function",
        "title": "keyRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "keyRoot",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:noneLabel",
      "description": {
        "fct-descr": "\u003cp\u003eNo Chord label\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordLabel",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#noneLabel",
        "fct-type": "function",
        "title": "noneLabel"
      },
      "index": {
        "description": "No Chord label",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "noneLabel",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:simplifyRoot",
      "description": {
        "fct-descr": "\u003cp\u003eSimplify note roots to a single enharmonic representation.\n For instance, D&#9837; becomes C&#9839;, E&#9839; becomes F, and G&#119083; becomes F.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root -\u003e Root",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#simplifyRoot",
        "fct-type": "function",
        "title": "simplifyRoot"
      },
      "index": {
        "description": "Simplify note roots to single enharmonic representation For instance becomes becomes and becomes",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "simplifyRoot",
        "normalized": "Root-\u003eRoot",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": "Root-\u003eRoot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toChordDegree",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, calculates the the \u003ccode\u003e\u003ca\u003eChordDegree\u003c/a\u003e\u003c/code\u003e (i.e. relative, \n \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e) for an absolute \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e using \n \u003ccode\u003e\u003ca\u003etoScaleDegree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Key -\u003e ChordLabel -\u003e ChordDegree",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toChordDegree",
        "fct-type": "function",
        "title": "toChordDegree"
      },
      "index": {
        "description": "Given Key calculates the the ChordDegree i.e relative ScaleDegree based Chord for an absolute ChordLabel using toScaleDegree",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toChordDegree",
        "normalized": "Key-\u003eChordLabel-\u003eChordDegree",
        "package": "HarmTrace-Base",
        "partial": "Chord Degree",
        "signature": "Key-\u003eChordLabel-\u003eChordDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toClassType",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e given a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e. This function uses \n \u003ccode\u003eanalyseDegClassType\u003c/code\u003e to analyse a chord and derive the \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Chord a -\u003e ClassType",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toClassType",
        "fct-type": "function",
        "title": "toClassType"
      },
      "index": {
        "description": "Returns the ClassType given Chord This function uses analyseDegClassType to analyse chord and derive the ClassType",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toClassType",
        "normalized": "Chord a-\u003eClassType",
        "package": "HarmTrace-Base",
        "partial": "Class Type",
        "signature": "Chord a-\u003eClassType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toDegreeList",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a Chord into a list of relative degrees (i.e. \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es,\n without the root note).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (Chord (Note Nothing C) HDim7 [Add (Note (Just Sh) I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003e[3b,5b,7b,11#]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (Chord (Note Nothing C) Min13 [NoAdd (Note Nothing I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003e[3b,5,7b,9,13]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (parseData pChord \"D:7(b9)\")\n\u003c/code\u003e\u003c/strong\u003e[3,5,7b,9b]\n\u003c/pre\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Chord a -\u003e [Addition]",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toDegreeList",
        "fct-type": "function",
        "title": "toDegreeList"
      },
      "index": {
        "description": "Transforms Chord into list of relative degrees i.e Addition without the root note toDegreeList Chord Note Nothing HDim7 Add Note Just Sh I11 toDegreeList Chord Note Nothing Min13 NoAdd Note Nothing I11 toDegreeList parseData pChord b9",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toDegreeList",
        "normalized": "Chord a-\u003e[Addition]",
        "package": "HarmTrace-Base",
        "partial": "Degree List",
        "signature": "Chord a-\u003e[Addition]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMajMin",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e to either a \u003ccode\u003e\u003ca\u003eMajClass\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMinClass\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNoClass\u003c/a\u003e\u003c/code\u003e \n \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Triad -\u003e ClassType",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toMajMin",
        "fct-type": "function",
        "title": "toMajMin"
      },
      "index": {
        "description": "Converts Shorthand to either MajClass MinClass or NoClass ClassType",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toMajMin",
        "normalized": "Triad-\u003eClassType",
        "package": "HarmTrace-Base",
        "partial": "Maj Min",
        "signature": "Triad-\u003eClassType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMajMinChord",
      "description": {
        "fct-descr": "\u003cp\u003eapplies \u003ccode\u003e\u003ca\u003etoMajMin\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordLabel -\u003e ChordLabel",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toMajMinChord",
        "fct-type": "function",
        "title": "toMajMinChord"
      },
      "index": {
        "description": "applies toMajMin to Chord",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toMajMinChord",
        "normalized": "ChordLabel-\u003eChordLabel",
        "package": "HarmTrace-Base",
        "partial": "Maj Min Chord",
        "signature": "ChordLabel-\u003eChordLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Triad -\u003e Mode",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toMode",
        "fct-type": "function",
        "title": "toMode"
      },
      "index": {
        "description": "Converts Shorthand to Mode",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toMode",
        "normalized": "Triad-\u003eMode",
        "package": "HarmTrace-Base",
        "partial": "Mode",
        "signature": "Triad-\u003eMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toRoot",
      "description": {
        "fct-descr": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003etoSemitone\u003c/a\u003e\u003c/code\u003e returning the 'Note DiatonicNatural' given a \n Integer [0..11] semitone, where 0 represents C. When the integer is out \n of the range [0..11] an error is thrown.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Int -\u003e Root",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toRoot",
        "fct-type": "function",
        "title": "toRoot"
      },
      "index": {
        "description": "The reverse of toSemitone returning the Note DiatonicNatural given Integer semitone where represents When the integer is out of the range an error is thrown",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toRoot",
        "normalized": "Int-\u003eRoot",
        "package": "HarmTrace-Base",
        "partial": "Root",
        "signature": "Int-\u003eRoot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toScaleDegree",
      "description": {
        "fct-descr": "\u003cp\u003eTransformes a absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e into a relative \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e, given\n a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Key -\u003e Root -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toScaleDegree",
        "fct-type": "function",
        "title": "toScaleDegree"
      },
      "index": {
        "description": "Transformes absolute Root Note into relative ScaleDegree given Key",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toScaleDegree",
        "normalized": "Key-\u003eRoot-\u003eScaleDegree",
        "package": "HarmTrace-Base",
        "partial": "Scale Degree",
        "signature": "Key-\u003eRoot-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toSemitone",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the semitone value [0 .. 11] of a \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e where\n 0 = C, e.g. F# = 6. For the constructors \u003ccode\u003e\u003ca\u003eN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e an error is thrown.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Note a -\u003e Int",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toSemitone",
        "fct-type": "function",
        "title": "toSemitone"
      },
      "index": {
        "description": "Returns the semitone value of ScaleDegree where e.g For the constructors and an error is thrown",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toSemitone",
        "normalized": "Note a-\u003eInt",
        "package": "HarmTrace-Base",
        "partial": "Semitone",
        "signature": "Note a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toTriad",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e and determines the \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) Min [NoAdd (Note (Just Fl) I3),Add (Note Nothing I3)] 0 0)\n\u003c/code\u003e\u003c/strong\u003emaj \n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) HDim7 [Add (Note (Just Sh) I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003edim\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) Min [NoAdd (Note (Just Fl) I3)] 0 0)\n\u003c/code\u003e\u003c/strong\u003eNoTriad\n\u003c/pre\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Chord a -\u003e Triad",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#toTriad",
        "fct-type": "function",
        "title": "toTriad"
      },
      "index": {
        "description": "Takes Chord and determines the Triad toTriad Chord Note Nothing Min NoAdd Note Just Fl I3 Add Note Nothing I3 maj toTriad Chord Note Nothing HDim7 Add Note Just Sh I11 dim toTriad Chord Note Nothing Min NoAdd Note Just Fl I3 NoTriad",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "toTriad",
        "normalized": "Chord a-\u003eTriad",
        "package": "HarmTrace-Base",
        "partial": "Triad",
        "signature": "Chord a-\u003eTriad"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:transposeSem",
      "description": {
        "fct-descr": "\u003cp\u003eTransposes a scale degree with \u003ccode\u003esem\u003c/code\u003e semitones up\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ScaleDegree -\u003e Int -\u003e ScaleDegree",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#transposeSem",
        "fct-type": "function",
        "title": "transposeSem"
      },
      "index": {
        "description": "Transposes scale degree with sem semitones up",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "transposeSem",
        "normalized": "ScaleDegree-\u003eInt-\u003eScaleDegree",
        "package": "HarmTrace-Base",
        "partial": "Sem",
        "signature": "ScaleDegree-\u003eInt-\u003eScaleDegree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:unknownLabel",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown Chord label\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicRep",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordLabel",
        "fct-source": "src/HarmTrace-Base-MusicRep.html#unknownLabel",
        "fct-type": "function",
        "title": "unknownLabel"
      },
      "index": {
        "description": "Unknown Chord label",
        "hierarchy": "HarmTrace Base MusicRep",
        "module": "HarmTrace.Base.MusicRep",
        "name": "unknownLabel",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A set of types and classes for representing musical time, mainly\n (but not necessarily) in the context of recognising chords \n from an arbitrary audio source.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Base-MusicTime.html",
        "fct-type": "module",
        "title": "MusicTime"
      },
      "index": {
        "description": "Summary set of types and classes for representing musical time mainly but not necessarily in the context of recognising chords from an arbitrary audio source",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "MusicTime",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Music Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:AudioFeat",
      "description": {
        "fct-descr": "\u003cp\u003eGroups the three types of VAMP plug-in data: \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eBarTimeTrackData\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eKeyStrengthData\u003c/a\u003e\u003c/code\u003e. See for more information:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.vamp-plugins.org\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://isophonics.net/nnls-chroma\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://omras2.org/SonicAnnotator\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "data",
        "title": "AudioFeat"
      },
      "index": {
        "description": "Groups the three types of VAMP plug-in data ChordinoData BarTimeTrackData and KeyStrengthData See for more information http www.vamp-plugins.org http isophonics.net nnls-chroma http omras2.org SonicAnnotator",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "AudioFeat",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Audio Feat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BarTime",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a musical time stamp, which is a \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e possibly augmented\n with a \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e denoting the position of the time stamp within a bar.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BarTime",
        "fct-type": "data",
        "title": "BarTime"
      },
      "index": {
        "description": "Represents musical time stamp which is NumData possibly augmented with Beat denoting the position of the time stamp within bar",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "BarTime",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Bar Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BarTimeTrackData",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BarTimeTrackData",
        "fct-type": "type",
        "title": "BarTimeTrackData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "BarTimeTrackData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Bar Time Track Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:Beat",
      "description": {
        "fct-descr": "\u003cp\u003eFor now, we fix the number of available beats to four, because this is also\n hard-coded into the bar and beat-tracker.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "data",
        "title": "Beat"
      },
      "index": {
        "description": "For now we fix the number of available beats to four because this is also hard-coded into the bar and beat-tracker",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Beat",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BeatChroma",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BeatChroma",
        "fct-type": "type",
        "title": "BeatChroma"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "BeatChroma",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Beat Chroma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BeatTrackerData",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BeatTrackerData",
        "fct-type": "type",
        "title": "BeatTrackerData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "BeatTrackerData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Beat Tracker Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eA chord annotation consists of a\n list with chords and segment boundaries.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordAnnotation",
        "fct-type": "type",
        "title": "ChordAnnotation"
      },
      "index": {
        "description": "chord annotation consists of list with chords and segment boundaries",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordAnnotation",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Annotation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordCand",
      "description": {
        "fct-descr": "\u003cp\u003eA chord candidate: an intermediate datatype that matches shorthand, \n chord structure and root note (plus inversion)\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "data",
        "title": "ChordCand"
      },
      "index": {
        "description": "chord candidate an intermediate datatype that matches shorthand chord structure and root note plus inversion",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordCand",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Cand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordStruct",
      "description": {
        "fct-descr": "\u003cp\u003eA chord template is list of \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordStruct",
        "fct-type": "type",
        "title": "ChordStruct"
      },
      "index": {
        "description": "chord template is list of NumData",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordStruct",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordinoData",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoData",
        "fct-type": "type",
        "title": "ChordinoData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordinoData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chordino Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordinoLine",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents two chroma features and a time stamp. \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
        "fct-type": "data",
        "title": "ChordinoLine"
      },
      "index": {
        "description": "Represents two chroma features and time stamp",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordinoLine",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chordino Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:KeyStrengthData",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#KeyStrengthData",
        "fct-type": "type",
        "title": "KeyStrengthData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "KeyStrengthData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Key Strength Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:NumData",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym is defined for our main numerical representation, this \n allows us to easily change the precision.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "type",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#NumData",
        "fct-type": "type",
        "title": "NumData"
      },
      "index": {
        "description": "type synonym is defined for our main numerical representation this allows us to easily change the precision",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "NumData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Num Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ProbChord",
      "description": {
        "fct-descr": "\u003cp\u003eCombines a \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e with a probability.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
        "fct-type": "data",
        "title": "ProbChord"
      },
      "index": {
        "description": "Combines ChordLabel with probability",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ProbChord",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Prob Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ProbChordSeg",
      "description": {
        "fct-descr": "\u003cp\u003eClustering \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003es in a collection of chords that share a key\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
        "fct-type": "data",
        "title": "ProbChordSeg"
      },
      "index": {
        "description": "Clustering ProbChord in collection of chords that share key",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ProbChordSeg",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Prob Chord Seg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:TimedData",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype that wraps around an (musical) datatype, adding information \n about the musical time to this datatype. Musical time is stored as \n a list of \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e time stamps that can optionally be augmented\n with information about the \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e position of the particular time stamp \n inside the bar.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "data",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#TimedData",
        "fct-type": "data",
        "title": "TimedData"
      },
      "index": {
        "description": "datatype that wraps around an musical datatype adding information about the musical time to this datatype Musical time is stored as list of BarTime time stamps that can optionally be augmented with information about the Beat position of the particular time stamp inside the bar",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "TimedData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Timed Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:AudioFeat",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "AudioFeat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "function",
        "title": "AudioFeat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "AudioFeat",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Audio Feat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:BarTime",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "BarTime NumData Beat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BarTime",
        "fct-type": "function",
        "title": "BarTime"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "BarTime",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Bar Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ChordCand",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordCand",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "function",
        "title": "ChordCand"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordCand",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chord Cand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ChordinoLine",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordinoLine",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
        "fct-type": "function",
        "title": "ChordinoLine"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ChordinoLine",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chordino Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Four",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Four",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "function",
        "title": "Four"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Four",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Four",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:NoBeat",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NoBeat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "function",
        "title": "NoBeat"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "NoBeat",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "No Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:One",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "One",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "One",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ProbChord",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ProbChord",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
        "fct-type": "function",
        "title": "ProbChord"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "ProbChord",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Prob Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Segment",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Segment",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
        "fct-type": "function",
        "title": "Segment"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Segment",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Three",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Three",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "function",
        "title": "Three"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Three",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Three",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Time",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Time NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#BarTime",
        "fct-type": "function",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Time",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:TimedData",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#TimedData",
        "fct-type": "function",
        "title": "TimedData"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "TimedData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Timed Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Two",
      "description": {
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Two",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#Beat",
        "fct-type": "function",
        "title": "Two"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "Two",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:bass",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the bass chroma feature\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[NumData]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
        "fct-type": "function",
        "title": "bass"
      },
      "index": {
        "description": "Returns the bass chroma feature",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "bass",
        "normalized": "[NumData]",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": "[NumData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:beat",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e timestamp, given a \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "BarTime -\u003e Beat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#beat",
        "fct-type": "function",
        "title": "beat"
      },
      "index": {
        "description": "Returns the NumData timestamp given BarTime",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "beat",
        "normalized": "BarTime-\u003eBeat",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": "BarTime-\u003eBeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:chordLab",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordLabel",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
        "fct-type": "function",
        "title": "chordLab"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "chordLab",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Lab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:chordStructCC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordStruct",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "function",
        "title": "chordStructCC"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "chordStructCC",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Struct CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:concatTimedData",
      "description": {
        "fct-descr": "\u003cp\u003econcatenates the \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e timestamps of two \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003es and \n creates a new \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e that stores the first argument. \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "a -\u003e TimedData a -\u003e TimedData a -\u003e TimedData a",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#concatTimedData",
        "fct-type": "function",
        "title": "concatTimedData"
      },
      "index": {
        "description": "concatenates the BarTime timestamps of two TimedData and creates new TimedData that stores the first argument",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "concatTimedData",
        "normalized": "a-\u003eTimedData a-\u003eTimedData a-\u003eTimedData a",
        "package": "HarmTrace-Base",
        "partial": "Timed Data",
        "signature": "a-\u003eTimedData a-\u003eTimedData a-\u003eTimedData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:dropProb",
      "description": {
        "fct-descr": "\u003cp\u003edrops the probabilties paired with chordlabels (in a list of \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003es)\n and returns a list of \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[TimedData ProbChord] -\u003e [TimedData ChordLabel]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#dropProb",
        "fct-type": "function",
        "title": "dropProb"
      },
      "index": {
        "description": "drops the probabilties paired with chordlabels in list of ProbChord and returns list of ChordLabel",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "dropProb",
        "normalized": "[TimedData ProbChord]-\u003e[TimedData ChordLabel]",
        "package": "HarmTrace-Base",
        "partial": "Prob",
        "signature": "[TimedData ProbChord]-\u003e[TimedData ChordLabel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:dropTimed",
      "description": {
        "fct-descr": "\u003cp\u003edrops the time (with or without \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e) information of a list \n \u003ccode\u003eTimed\u003c/code\u003e data structure \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[TimedData a] -\u003e [a]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#dropTimed",
        "fct-type": "function",
        "title": "dropTimed"
      },
      "index": {
        "description": "drops the time with or without Beat information of list Timed data structure",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "dropTimed",
        "normalized": "[TimedData a]-\u003e[a]",
        "package": "HarmTrace-Base",
        "partial": "Timed",
        "signature": "[TimedData a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getAudioFeatId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "FilePath",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "function",
        "title": "getAudioFeatId"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getAudioFeatId",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Audio Feat Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBarTime",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the start time stamp\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData a -\u003e BarTime",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#getBarTime",
        "fct-type": "function",
        "title": "getBarTime"
      },
      "index": {
        "description": "Returns the start time stamp",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getBarTime",
        "normalized": "TimedData a-\u003eBarTime",
        "package": "HarmTrace-Base",
        "partial": "Bar Time",
        "signature": "TimedData a-\u003eBarTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeat",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the start \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData a -\u003e Beat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#getBeat",
        "fct-type": "function",
        "title": "getBeat"
      },
      "index": {
        "description": "Returns the start Beat",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getBeat",
        "normalized": "TimedData a-\u003eBeat",
        "package": "HarmTrace-Base",
        "partial": "Beat",
        "signature": "TimedData a-\u003eBeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeatTrack",
      "description": {
        "fct-descr": "\u003cp\u003eConverts  \u003ccode\u003e\u003ca\u003eBarTimeTrackData\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eBeatTrackerData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "BarTimeTrackData -\u003e BeatTrackerData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#getBeatTrack",
        "fct-type": "function",
        "title": "getBeatTrack"
      },
      "index": {
        "description": "Converts BarTimeTrackData into BeatTrackerData",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getBeatTrack",
        "normalized": "BarTimeTrackData-\u003eBeatTrackerData",
        "package": "HarmTrace-Base",
        "partial": "Beat Track",
        "signature": "BarTimeTrackData-\u003eBeatTrackerData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeats",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "BarTimeTrackData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "function",
        "title": "getBeats"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getBeats",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Beats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getChroma",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "ChordinoData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "function",
        "title": "getChroma"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getChroma",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Chroma",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getData",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the contained datatype \n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "a",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#TimedData",
        "fct-type": "function",
        "title": "getData"
      },
      "index": {
        "description": "Returns the contained datatype",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getData",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getKeys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "KeyStrengthData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
        "fct-type": "function",
        "title": "getKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getKeys",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getTimeStamps",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the list of TimeStamps\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[BarTime]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#TimedData",
        "fct-type": "function",
        "title": "getTimeStamps"
      },
      "index": {
        "description": "Returns the list of TimeStamps",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "getTimeStamps",
        "normalized": "[BarTime]",
        "package": "HarmTrace-Base",
        "partial": "Time Stamps",
        "signature": "[BarTime]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:inversionRootCC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "function",
        "title": "inversionRootCC"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "inversionRootCC",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:nextBeat",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the next beat, e.g. \u003ccode\u003e nextBeat Two = Three \u003c/code\u003e. \n Following the (current) definition of \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, we still assume 4/4, in the \n future this function should also have the meter as an argument.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Beat -\u003e Beat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#nextBeat",
        "fct-type": "function",
        "title": "nextBeat"
      },
      "index": {
        "description": "returns the next beat e.g nextBeat Two Three Following the current definition of Beat we still assume in the future this function should also have the meter as an argument",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "nextBeat",
        "normalized": "Beat-\u003eBeat",
        "package": "HarmTrace-Base",
        "partial": "Beat",
        "signature": "Beat-\u003eBeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:offset",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the offset time stamp\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData a -\u003e NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#offset",
        "fct-type": "function",
        "title": "offset"
      },
      "index": {
        "description": "Returns the offset time stamp",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "offset",
        "normalized": "TimedData a-\u003eNumData",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": "TimedData a-\u003eNumData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:onset",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the onset time stamp\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData a -\u003e NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#onset",
        "fct-type": "function",
        "title": "onset"
      },
      "index": {
        "description": "Returns the onset time stamp",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "onset",
        "normalized": "TimedData a-\u003eNumData",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": "TimedData a-\u003eNumData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:originalRootCC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Root",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "function",
        "title": "originalRootCC"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "originalRootCC",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Root CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:prevBeat",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the previous \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, similar to \u003ccode\u003e\u003ca\u003eprevBeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ereturns the next beat, e.g. \u003ccode\u003e nextBeat Two = Three \u003c/code\u003e. \n Following the (current) definition of \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, we still assume 4/4, in the \n future this function should also have the meter as an argument.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Beat -\u003e Beat",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#prevBeat",
        "fct-type": "function",
        "title": "prevBeat"
      },
      "index": {
        "description": "returns the previous Beat similar to prevBeat returns the next beat e.g nextBeat Two Three Following the current definition of Beat we still assume in the future this function should also have the meter as an argument",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "prevBeat",
        "normalized": "Beat-\u003eBeat",
        "package": "HarmTrace-Base",
        "partial": "Beat",
        "signature": "Beat-\u003eBeat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:prob",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
        "fct-type": "function",
        "title": "prob"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "prob",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:segChords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[TimedData [ProbChord]]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
        "fct-type": "function",
        "title": "segChords"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "segChords",
        "normalized": "[TimedData[ProbChord]]",
        "package": "HarmTrace-Base",
        "partial": "Chords",
        "signature": "[TimedData[ProbChord]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:segKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Key",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
        "fct-type": "function",
        "title": "segKey"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "segKey",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:setData",
      "description": {
        "fct-descr": "\u003cp\u003ewraps a datatype in \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "TimedData a -\u003e b -\u003e TimedData b",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#setData",
        "fct-type": "function",
        "title": "setData"
      },
      "index": {
        "description": "wraps datatype in TimedData",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "setData",
        "normalized": "TimedData a-\u003eb-\u003eTimedData b",
        "package": "HarmTrace-Base",
        "partial": "Data",
        "signature": "TimedData a-\u003eb-\u003eTimedData b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:shorthardCC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Shorthand",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
        "fct-type": "function",
        "title": "shorthardCC"
      },
      "index": {
        "description": "",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "shorthardCC",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:time",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the time stamp of the chroma features\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "Returns the time stamp of the chroma features",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "time",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timeStamp",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e timestamp, given a \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "BarTime -\u003e NumData",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#timeStamp",
        "fct-type": "function",
        "title": "timeStamp"
      },
      "index": {
        "description": "Returns the NumData timestamp given BarTime",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "timeStamp",
        "normalized": "BarTime-\u003eNumData",
        "package": "HarmTrace-Base",
        "partial": "Stamp",
        "signature": "BarTime-\u003eNumData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timedData",
      "description": {
        "fct-descr": "\u003cp\u003ealternative \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "a -\u003e NumData -\u003e NumData -\u003e TimedData a",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#timedData",
        "fct-type": "function",
        "title": "timedData"
      },
      "index": {
        "description": "alternative TimedData constructor",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "timedData",
        "normalized": "a-\u003eNumData-\u003eNumData-\u003eTimedData a",
        "package": "HarmTrace-Base",
        "partial": "Data",
        "signature": "a-\u003eNumData-\u003eNumData-\u003eTimedData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timedDataBT",
      "description": {
        "fct-descr": "\u003cp\u003ealternative \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "a -\u003e BarTime -\u003e BarTime -\u003e TimedData a",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#timedDataBT",
        "fct-type": "function",
        "title": "timedDataBT"
      },
      "index": {
        "description": "alternative TimedData constructor",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "timedDataBT",
        "normalized": "a-\u003eBarTime-\u003eBarTime-\u003eTimedData a",
        "package": "HarmTrace-Base",
        "partial": "Data BT",
        "signature": "a-\u003eBarTime-\u003eBarTime-\u003eTimedData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:treb",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the treble chroma feature\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[NumData]",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
        "fct-type": "function",
        "title": "treb"
      },
      "index": {
        "description": "Returns the treble chroma feature",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "treb",
        "normalized": "[NumData]",
        "package": "HarmTrace-Base",
        "partial": "",
        "signature": "[NumData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:updateTPChord",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates transforms ChordLabel wrapped in a \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.MusicTime",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "(ChordLabel -\u003e ChordLabel) -\u003e TimedData ProbChord -\u003e TimedData ProbChord",
        "fct-source": "src/HarmTrace-Base-MusicTime.html#updateTPChord",
        "fct-type": "function",
        "title": "updateTPChord"
      },
      "index": {
        "description": "Updates transforms ChordLabel wrapped in ProbChord and TimedData",
        "hierarchy": "HarmTrace Base MusicTime",
        "module": "HarmTrace.Base.MusicTime",
        "name": "updateTPChord",
        "normalized": "(ChordLabel-\u003eChordLabel)-\u003eTimedData ProbChord-\u003eTimedData ProbChord",
        "package": "HarmTrace-Base",
        "partial": "TPChord",
        "signature": "(ChordLabel-\u003eChordLabel)-\u003eTimedData ProbChord-\u003eTimedData ProbChord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some general parsing utilities used for parsing textual chord\n representations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "module",
        "fct-source": "src/HarmTrace-Base-Parsing.html",
        "fct-type": "module",
        "title": "Parsing"
      },
      "index": {
        "description": "Summary Some general parsing utilities used for parsing textual chord representations",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "Parsing",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Parsing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pLineEnd",
      "description": {
        "fct-descr": "\u003cp\u003eParses UNIX and DOS/WINDOWS line endings including trailing whitespace\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "Parser String",
        "fct-source": "src/HarmTrace-Base-Parsing.html#pLineEnd",
        "fct-type": "function",
        "title": "pLineEnd"
      },
      "index": {
        "description": "Parses UNIX and DOS WINDOWS line endings including trailing whitespace",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "pLineEnd",
        "normalized": "",
        "package": "HarmTrace-Base",
        "partial": "Line End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pManyTill",
      "description": {
        "fct-descr": "\u003cp\u003eParses an arbitrary times the first parsing combinator until the parsing \n second parsing combinator is encountered. The result of the second parsing\n combinator is ignored.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "P st a -\u003e P st b -\u003e P st [a]",
        "fct-source": "src/HarmTrace-Base-Parsing.html#pManyTill",
        "fct-type": "function",
        "title": "pManyTill"
      },
      "index": {
        "description": "Parses an arbitrary times the first parsing combinator until the parsing second parsing combinator is encountered The result of the second parsing combinator is ignored",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "pManyTill",
        "normalized": "P a b-\u003eP a c-\u003eP a[b]",
        "package": "HarmTrace-Base",
        "partial": "Many Till",
        "signature": "P st a-\u003eP st b-\u003eP st[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pString",
      "description": {
        "fct-descr": "\u003cp\u003eParses a specific string\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "[a] -\u003e P (Str a state loc) [a]",
        "fct-source": "src/HarmTrace-Base-Parsing.html#pString",
        "fct-type": "function",
        "title": "pString"
      },
      "index": {
        "description": "Parses specific string",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "pString",
        "normalized": "[a]-\u003eP(Str a b c)[a]",
        "package": "HarmTrace-Base",
        "partial": "String",
        "signature": "[a]-\u003eP(Str a state loc)[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseData",
      "description": {
        "fct-descr": "\u003cp\u003eToplevel parser that ignores error-reporting, regardless of there were\n error in the parse\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "P (Str a s LineColPos) b -\u003e s -\u003e b",
        "fct-source": "src/HarmTrace-Base-Parsing.html#parseData",
        "fct-type": "function",
        "title": "parseData"
      },
      "index": {
        "description": "Toplevel parser that ignores error-reporting regardless of there were error in the parse",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "parseData",
        "normalized": "P(Str a b LineColPos)c-\u003eb-\u003ec",
        "package": "HarmTrace-Base",
        "partial": "Data",
        "signature": "P(Str a s LineColPos)b-\u003es-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseDataSafe",
      "description": {
        "fct-descr": "\u003cp\u003eThis is identical to \u003ccode\u003e\u003ca\u003eparseData\u003c/a\u003e\u003c/code\u003e however it will throw an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when\n the the list with parsing errors is not empty. No, this will not make your\n program more safe. However, in certain cases you really want to be sure\n that parsing has finished without errors. In those cases you should use\n \u003ccode\u003e\u003ca\u003eparseDataSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "P (Str a s LineColPos) b -\u003e s -\u003e b",
        "fct-source": "src/HarmTrace-Base-Parsing.html#parseDataSafe",
        "fct-type": "function",
        "title": "parseDataSafe"
      },
      "index": {
        "description": "This is identical to parseData however it will throw an error when the the list with parsing errors is not empty No this will not make your program more safe However in certain cases you really want to be sure that parsing has finished without errors In those cases you should use parseDataSafe",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "parseDataSafe",
        "normalized": "P(Str a b LineColPos)c-\u003eb-\u003ec",
        "package": "HarmTrace-Base",
        "partial": "Data Safe",
        "signature": "P(Str a s LineColPos)b-\u003es-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseDataWithErrors",
      "description": {
        "fct-descr": "\u003cp\u003eToplevel parser that returns both the result as well as a (possibly empty)\n list of error-corrections.\n\u003c/p\u003e",
        "fct-module": "HarmTrace.Base.Parsing",
        "fct-package": "HarmTrace-Base",
        "fct-signature": "P (Str a s LineColPos) b -\u003e s -\u003e (b, [Error LineColPos])",
        "fct-source": "src/HarmTrace-Base-Parsing.html#parseDataWithErrors",
        "fct-type": "function",
        "title": "parseDataWithErrors"
      },
      "index": {
        "description": "Toplevel parser that returns both the result as well as possibly empty list of error-corrections",
        "hierarchy": "HarmTrace Base Parsing",
        "module": "HarmTrace.Base.Parsing",
        "name": "parseDataWithErrors",
        "normalized": "P(Str a b LineColPos)c-\u003eb-\u003e(c,[Error LineColPos])",
        "package": "HarmTrace-Base",
        "partial": "Data With Errors",
        "signature": "P(Str a s LineColPos)b-\u003es-\u003e(b,[Error LineColPos])"
      }
    }
  }
]