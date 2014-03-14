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
        "word": "HarmTrace-Base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some general parsing utilities used for parsing textual chord\n representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "ChordTokenizer",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-ChordTokenizer.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Some general parsing utilities used for parsing textual chord representations",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "ChordTokenizer",
          "package": "HarmTrace-Base",
          "partial": "Chord Tokenizer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003e (or the removal of a chord addition, \n prefixed by  a \u003ccode\u003e*\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pAddition",
          "package": "HarmTrace-Base",
          "signature": "Parser Addition",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pAddition",
          "type": "function"
        },
        "index": {
          "description": "Parses the Chord Addition or the removal of chord addition prefixed by",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pAddition",
          "package": "HarmTrace-Base",
          "partial": "Addition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pAddition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a list of \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es within parenthesis \n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pAdditions",
          "package": "HarmTrace-Base",
          "signature": "Parser [Addition]",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pAdditions",
          "type": "function"
        },
        "index": {
          "description": "Parses list of Chord Addition within parenthesis",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pAdditions",
          "normalized": "Parser[Addition]",
          "package": "HarmTrace-Base",
          "partial": "Additions",
          "signature": "Parser[Addition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pAdditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e in Harte et al. syntax including possible additions, \n and removal of chord additions. If a chord has no \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e, the \u003ccode\u003eDegree\u003c/code\u003e \n list (if any) is analysed and depending on the \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e (if any) a \n \u003ccode\u003e\u003ca\u003eMaj\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMin\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eAug\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eDim\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e is stored. By default all the \n duration stored in every \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e is 1 (where the unit is application \n dependend, often these are beats, but they can also be eightnotes)\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pChord",
          "package": "HarmTrace-Base",
          "signature": "Parser ChordLabel",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pChord",
          "type": "function"
        },
        "index": {
          "description": "Parses ChordLabel in Harte et al syntax including possible additions and removal of chord additions If chord has no Shorthand the Degree list if any is analysed and depending on the Triad if any Maj Min Aug or Dim Shorthand is stored By default all the duration stored in every Chord is where the unit is application dependend often these are beats but they can also be eightnotes",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pChord",
          "package": "HarmTrace-Base",
          "partial": "Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparses a musical key description, e.g. \u003ccode\u003eC:maj\u003c/code\u003e, or \u003ccode\u003eD:min\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pKey",
          "package": "HarmTrace-Base",
          "signature": "Parser Key",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pKey",
          "type": "function"
        },
        "index": {
          "description": "parses musical key description e.g maj or min",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pKey",
          "package": "HarmTrace-Base",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003eA\u003c/code\u003e, \u003ccode\u003eBb\u003c/code\u003e, or \u003ccode\u003eF#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pRoot",
          "package": "HarmTrace-Base",
          "signature": "Parser Root",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pRoot",
          "type": "function"
        },
        "index": {
          "description": "Parses Root Note e.g Bb or",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pRoot",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a shorthand following Harte et al. syntax, but also the shorthands\n added to the Billboard dataset, e.g. \u003ccode\u003emaj\u003c/code\u003e, \u003ccode\u003emin\u003c/code\u003e, or \u003ccode\u003e9\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pShorthand",
          "package": "HarmTrace-Base",
          "signature": "Parser Shorthand",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pShorthand",
          "type": "function"
        },
        "index": {
          "description": "Parses shorthand following Harte et al syntax but also the shorthands added to the Billboard dataset e.g maj min or",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pShorthand",
          "package": "HarmTrace-Base",
          "partial": "Shorthand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pShorthand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser that parses a string of whitespace-separated \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003es, e.g.\n \u003ccode\u003eC:maj Bb:9(s11);1 E:min7;1 Eb:min7;1 Ab:7;1 D:min7;1 G:7(13);1 C:maj6(9);1\u003c/code\u003e\n The first \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e must be the key of the piece, and the after each chord\n the semicolumn and an Integer representing the duration of the chord must \n be presented\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pSongAbs",
          "package": "HarmTrace-Base",
          "signature": "Parser PieceLabel",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#pSongAbs",
          "type": "function"
        },
        "index": {
          "description": "Parser that parses string of whitespace-separated Chord e.g maj Bb s11 min7 Eb min7 Ab min7 maj6 The first Chord must be the key of the piece and the after each chord the semicolumn and an Integer representing the duration of the chord must be presented",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "pSongAbs",
          "package": "HarmTrace-Base",
          "partial": "Song Abs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:pSongAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop level parser that parsers a string into a \u003ccode\u003e\u003ca\u003ePieceLabel\u003c/a\u003e\u003c/code\u003e and a posibly\n empty list of errors\n\u003c/p\u003e",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "parseChordSeq",
          "package": "HarmTrace-Base",
          "signature": "String -\u003e (PieceLabel, [Error LineColPos])",
          "source": "src/HarmTrace-Base-ChordTokenizer.html#parseChordSeq",
          "type": "function"
        },
        "index": {
          "description": "Top level parser that parsers string into PieceLabel and posibly empty list of errors",
          "hierarchy": "HarmTrace Base ChordTokenizer",
          "module": "HarmTrace.Base.ChordTokenizer",
          "name": "parseChordSeq",
          "normalized": "String-\u003e(PieceLabel,[Error LineColPos])",
          "package": "HarmTrace-Base",
          "partial": "Chord Seq",
          "signature": "String-\u003e(PieceLabel,[Error LineColPos])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-ChordTokenizer.html#v:parseChordSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A set of types and classes for representing musical chords. The \n chord datatypes are based on the unambiguous chord representation presented \n in: Christopher Harte, Mark Sandler and Samer Abdallah (2005), \n \u003cem\u003eSymbolic representation of musical chords: a proposed syntax for text annotations\u003c/em\u003e, \n In: Proceedings of 6th International Conference on Music Information \n Retrieval (\u003ca\u003ehttp://ismir2005.ismir.net/proceedings/1080.pdf\u003c/a\u003e). \n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MusicRep",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html",
          "type": "module"
        },
        "index": {
          "description": "Summary set of types and classes for representing musical chords The chord datatypes are based on the unambiguous chord representation presented in Christopher Harte Mark Sandler and Samer Abdallah Symbolic representation of musical chords proposed syntax for text annotations In Proceedings of th International Conference on Music Information Retrieval http ismir2005.ismir.net proceedings pdf",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MusicRep",
          "package": "HarmTrace-Base",
          "partial": "Music Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA musical \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Accidental",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Accidental",
          "type": "data"
        },
        "index": {
          "description": "musical Accidental",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Accidental",
          "package": "HarmTrace-Base",
          "partial": "Accidental",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervals for additonal chord notes    \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Addition",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Addition",
          "type": "data"
        },
        "index": {
          "description": "Intervals for additonal chord notes",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Addition",
          "package": "HarmTrace-Base",
          "partial": "Addition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Addition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe representation for a single chord \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Chord",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "data"
        },
        "index": {
          "description": "The representation for single chord",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Chord",
          "package": "HarmTrace-Base",
          "partial": "Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord based on relative \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ChordDegree",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#ChordDegree",
          "type": "type"
        },
        "index": {
          "description": "chord based on relative ScaleDegree",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ChordDegree",
          "package": "HarmTrace-Base",
          "partial": "Chord Degree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ChordDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord based on absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e notes\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ChordLabel",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#ChordLabel",
          "type": "type"
        },
        "index": {
          "description": "chord based on absolute Root notes",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ChordLabel",
          "package": "HarmTrace-Base",
          "partial": "Chord Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ChordLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe introduce four chord categories: major chords, minor chords, dominant\n seventh chords, and diminshed seventh chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ClassType",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "data"
        },
        "index": {
          "description": "We introduce four chord categories major chords minor chords dominant seventh chords and diminshed seventh chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ClassType",
          "package": "HarmTrace-Base",
          "partial": "Class Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ClassType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Diatonic scale degrees \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DiatonicDegree",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "data"
        },
        "index": {
          "description": "All Diatonic scale degrees",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DiatonicDegree",
          "package": "HarmTrace-Base",
          "partial": "Diatonic Degree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:DiatonicDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe seven diatonic naturals\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DiatonicNatural",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "data"
        },
        "index": {
          "description": "The seven diatonic naturals",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DiatonicNatural",
          "package": "HarmTrace-Base",
          "partial": "Diatonic Natural",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:DiatonicNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiatonic major intervals used to denote \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Interval",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Diatonic major intervals used to denote Chord Addition",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Interval",
          "package": "HarmTrace-Base",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA musical key consising of a \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Key",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Key",
          "type": "data"
        },
        "index": {
          "description": "musical key consising of Root and Mode",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Key",
          "package": "HarmTrace-Base",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e of a key, which can be major or minor\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Mode",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "The Mode of key which can be major or minor",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Mode",
          "package": "HarmTrace-Base",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA musical note is a pitch (either absolute or relative) posibly modified\n by an \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Note",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Note",
          "type": "data"
        },
        "index": {
          "description": "musical note is pitch either absolute or relative posibly modified by an Accidental",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Note",
          "package": "HarmTrace-Base",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA container type combinint a key and a list of \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "PieceLabel",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#PieceLabel",
          "type": "data"
        },
        "index": {
          "description": "container type combinint key and list of ChordLabel",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "PieceLabel",
          "package": "HarmTrace-Base",
          "partial": "Piece Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:PieceLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresenting absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e notes  \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Root",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Root",
          "type": "type"
        },
        "index": {
          "description": "Representing absolute Root notes",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Root",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey relative scale degrees to abstract from the absolute Root notes\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ScaleDegree",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#ScaleDegree",
          "type": "type"
        },
        "index": {
          "description": "Key relative scale degrees to abstract from the absolute Root notes",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "ScaleDegree",
          "package": "HarmTrace-Base",
          "partial": "Scale Degree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:ScaleDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Shorthand",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "data"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Shorthand",
          "package": "HarmTrace-Base",
          "partial": "Shorthand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Shorthand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e comes in four flavours: major, minor, augmented, dimished, and \n sometimes a chord does not have a triad (e.g. suspended chords, etc.)\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Triad",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "data"
        },
        "index": {
          "description": "Triad comes in four flavours major minor augmented dimished and sometimes chord does not have triad e.g suspended chords etc",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Triad",
          "package": "HarmTrace-Base",
          "partial": "Triad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#t:Triad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "A",
          "package": "HarmTrace-Base",
          "signature": "A",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "A",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Add",
          "package": "HarmTrace-Base",
          "signature": "Add (Note Interval)",
          "source": "src/HarmTrace-Base-MusicRep.html#Addition",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Add",
          "package": "HarmTrace-Base",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Aug",
          "package": "HarmTrace-Base",
          "signature": "Aug",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Aug",
          "package": "HarmTrace-Base",
          "partial": "Aug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Aug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "AugTriad",
          "package": "HarmTrace-Base",
          "signature": "AugTriad",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "AugTriad",
          "package": "HarmTrace-Base",
          "partial": "Aug Triad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:AugTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "B",
          "package": "HarmTrace-Base",
          "signature": "B",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "B",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "C",
          "package": "HarmTrace-Base",
          "signature": "C",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "C",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Chord",
          "package": "HarmTrace-Base",
          "signature": "Chord",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Chord",
          "package": "HarmTrace-Base",
          "partial": "Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "D",
          "package": "HarmTrace-Base",
          "signature": "D",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "D",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Dim",
          "package": "HarmTrace-Base",
          "signature": "Dim",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Dim",
          "package": "HarmTrace-Base",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Dim7",
          "package": "HarmTrace-Base",
          "signature": "Dim7",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Dim7",
          "package": "HarmTrace-Base",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Dim7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "DimClass",
          "package": "HarmTrace-Base",
          "signature": "DimClass",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DimClass",
          "package": "HarmTrace-Base",
          "partial": "Dim Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DimClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "DimTriad",
          "package": "HarmTrace-Base",
          "signature": "DimTriad",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DimTriad",
          "package": "HarmTrace-Base",
          "partial": "Dim Triad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DimTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "DomClass",
          "package": "HarmTrace-Base",
          "signature": "DomClass",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "DomClass",
          "package": "HarmTrace-Base",
          "partial": "Dom Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:DomClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "E",
          "package": "HarmTrace-Base",
          "signature": "E",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "E",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Eleven",
          "package": "HarmTrace-Base",
          "signature": "Eleven",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Eleven",
          "package": "HarmTrace-Base",
          "partial": "Eleven",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Eleven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "F",
          "package": "HarmTrace-Base",
          "signature": "F",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "F",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble flat\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "FF",
          "package": "HarmTrace-Base",
          "signature": "FF",
          "source": "src/HarmTrace-Base-MusicRep.html#Accidental",
          "type": "function"
        },
        "index": {
          "description": "double flat",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "FF",
          "package": "HarmTrace-Base",
          "partial": "FF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:FF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Five",
          "package": "HarmTrace-Base",
          "signature": "Five",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Power chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Five",
          "package": "HarmTrace-Base",
          "partial": "Five",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Five"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflat\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Fl",
          "package": "HarmTrace-Base",
          "signature": "Fl",
          "source": "src/HarmTrace-Base-MusicRep.html#Accidental",
          "type": "function"
        },
        "index": {
          "description": "flat",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Fl",
          "package": "HarmTrace-Base",
          "partial": "Fl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Fl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "G",
          "package": "HarmTrace-Base",
          "signature": "G",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "G",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "HDim7",
          "package": "HarmTrace-Base",
          "signature": "HDim7",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "HDim7",
          "package": "HarmTrace-Base",
          "partial": "HDim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:HDim7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I",
          "package": "HarmTrace-Base",
          "signature": "I",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I1",
          "package": "HarmTrace-Base",
          "signature": "I1",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I1",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I10",
          "package": "HarmTrace-Base",
          "signature": "I10",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I10",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I11",
          "package": "HarmTrace-Base",
          "signature": "I11",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I11",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I12",
          "package": "HarmTrace-Base",
          "signature": "I12",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I12",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I13",
          "package": "HarmTrace-Base",
          "signature": "I13",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I13",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I2",
          "package": "HarmTrace-Base",
          "signature": "I2",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I2",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I3",
          "package": "HarmTrace-Base",
          "signature": "I3",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I3",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I4",
          "package": "HarmTrace-Base",
          "signature": "I4",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I4",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I5",
          "package": "HarmTrace-Base",
          "signature": "I5",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I5",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I6",
          "package": "HarmTrace-Base",
          "signature": "I6",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I6",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I7",
          "package": "HarmTrace-Base",
          "signature": "I7",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I7",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I8",
          "package": "HarmTrace-Base",
          "signature": "I8",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I8",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "I9",
          "package": "HarmTrace-Base",
          "signature": "I9",
          "source": "src/HarmTrace-Base-MusicRep.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "I9",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:I9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "II",
          "package": "HarmTrace-Base",
          "signature": "II",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "II",
          "package": "HarmTrace-Base",
          "partial": "II",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:II"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "III",
          "package": "HarmTrace-Base",
          "signature": "III",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "III",
          "package": "HarmTrace-Base",
          "partial": "III",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:III"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "IV",
          "package": "HarmTrace-Base",
          "signature": "IV",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "IV",
          "package": "HarmTrace-Base",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor unrepresentable scale degrees\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Imp",
          "package": "HarmTrace-Base",
          "signature": "Imp",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "description": "for unrepresentable scale degrees",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Imp",
          "package": "HarmTrace-Base",
          "partial": "Imp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Imp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Key",
          "package": "HarmTrace-Base",
          "signature": "Key",
          "source": "src/HarmTrace-Base-MusicRep.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Key",
          "package": "HarmTrace-Base",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriadic chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj",
          "package": "HarmTrace-Base",
          "signature": "Maj",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Triadic chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj",
          "package": "HarmTrace-Base",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj13",
          "package": "HarmTrace-Base",
          "signature": "Maj13",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj13",
          "package": "HarmTrace-Base",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSixth chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj6",
          "package": "HarmTrace-Base",
          "signature": "Maj6",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Sixth chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj6",
          "package": "HarmTrace-Base",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeventh chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj7",
          "package": "HarmTrace-Base",
          "signature": "Maj7",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Seventh chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj7",
          "package": "HarmTrace-Base",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj9",
          "package": "HarmTrace-Base",
          "signature": "Maj9",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Maj9",
          "package": "HarmTrace-Base",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Maj9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajClass",
          "package": "HarmTrace-Base",
          "signature": "MajClass",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajClass",
          "package": "HarmTrace-Base",
          "partial": "Maj Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajMode",
          "package": "HarmTrace-Base",
          "signature": "MajMode",
          "source": "src/HarmTrace-Base-MusicRep.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajMode",
          "package": "HarmTrace-Base",
          "partial": "Maj Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajTriad",
          "package": "HarmTrace-Base",
          "signature": "MajTriad",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MajTriad",
          "package": "HarmTrace-Base",
          "partial": "Maj Triad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MajTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min",
          "package": "HarmTrace-Base",
          "signature": "Min",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min11",
          "package": "HarmTrace-Base",
          "signature": "Min11",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min11",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min13",
          "package": "HarmTrace-Base",
          "signature": "Min13",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min13",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min6",
          "package": "HarmTrace-Base",
          "signature": "Min6",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min6",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min7",
          "package": "HarmTrace-Base",
          "signature": "Min7",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min7",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min9",
          "package": "HarmTrace-Base",
          "signature": "Min9",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Min9",
          "package": "HarmTrace-Base",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Min9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinClass",
          "package": "HarmTrace-Base",
          "signature": "MinClass",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinClass",
          "package": "HarmTrace-Base",
          "partial": "Min Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinMaj7",
          "package": "HarmTrace-Base",
          "signature": "MinMaj7",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinMaj7",
          "package": "HarmTrace-Base",
          "partial": "Min Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinMaj7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinMode",
          "package": "HarmTrace-Base",
          "signature": "MinMode",
          "source": "src/HarmTrace-Base-MusicRep.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinMode",
          "package": "HarmTrace-Base",
          "partial": "Min Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinTriad",
          "package": "HarmTrace-Base",
          "signature": "MinTriad",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "MinTriad",
          "package": "HarmTrace-Base",
          "partial": "Min Triad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:MinTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor no root\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "N",
          "package": "HarmTrace-Base",
          "signature": "N",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "description": "for no root",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "N",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Nin",
          "package": "HarmTrace-Base",
          "signature": "Nin",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Extended chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Nin",
          "package": "HarmTrace-Base",
          "partial": "Nin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Nin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoAdd",
          "package": "HarmTrace-Base",
          "signature": "NoAdd (Note Interval)",
          "source": "src/HarmTrace-Base-MusicRep.html#Addition",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoAdd",
          "package": "HarmTrace-Base",
          "partial": "No Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoClass",
          "package": "HarmTrace-Base",
          "signature": "NoClass",
          "source": "src/HarmTrace-Base-MusicRep.html#ClassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoClass",
          "package": "HarmTrace-Base",
          "partial": "No Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoTriad",
          "package": "HarmTrace-Base",
          "signature": "NoTriad",
          "source": "src/HarmTrace-Base-MusicRep.html#Triad",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "NoTriad",
          "package": "HarmTrace-Base",
          "partial": "No Triad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:NoTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "None",
          "package": "HarmTrace-Base",
          "signature": "None",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "None",
          "package": "HarmTrace-Base",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Note",
          "package": "HarmTrace-Base",
          "signature": "Note (Maybe Accidental) a",
          "source": "src/HarmTrace-Base-MusicRep.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Note",
          "package": "HarmTrace-Base",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "PieceLabel",
          "package": "HarmTrace-Base",
          "signature": "PieceLabel Key [ChordLabel]",
          "source": "src/HarmTrace-Base-MusicRep.html#PieceLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "PieceLabel",
          "normalized": "PieceLabel Key[ChordLabel]",
          "package": "HarmTrace-Base",
          "partial": "Piece Label",
          "signature": "PieceLabel Key[ChordLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:PieceLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble sharp\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "SS",
          "package": "HarmTrace-Base",
          "signature": "SS",
          "source": "src/HarmTrace-Base-MusicRep.html#Accidental",
          "type": "function"
        },
        "index": {
          "description": "double sharp",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "SS",
          "package": "HarmTrace-Base",
          "partial": "SS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:SS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sev",
          "package": "HarmTrace-Base",
          "signature": "Sev",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sev",
          "package": "HarmTrace-Base",
          "partial": "Sev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esharp \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sh",
          "package": "HarmTrace-Base",
          "signature": "Sh",
          "source": "src/HarmTrace-Base-MusicRep.html#Accidental",
          "type": "function"
        },
        "index": {
          "description": "sharp",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sh",
          "package": "HarmTrace-Base",
          "partial": "Sh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sus2",
          "package": "HarmTrace-Base",
          "signature": "Sus2",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sus2",
          "package": "HarmTrace-Base",
          "partial": "Sus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sus2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuspended chords\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sus4",
          "package": "HarmTrace-Base",
          "signature": "Sus4",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "description": "Suspended chords",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Sus4",
          "package": "HarmTrace-Base",
          "partial": "Sus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Sus4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "Thirteen",
          "package": "HarmTrace-Base",
          "signature": "Thirteen",
          "source": "src/HarmTrace-Base-MusicRep.html#Shorthand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "Thirteen",
          "package": "HarmTrace-Base",
          "partial": "Thirteen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:Thirteen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "V",
          "package": "HarmTrace-Base",
          "signature": "V",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "V",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "VI",
          "package": "HarmTrace-Base",
          "signature": "VI",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "VI",
          "package": "HarmTrace-Base",
          "partial": "VI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:VI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "VII",
          "package": "HarmTrace-Base",
          "signature": "VII",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "VII",
          "package": "HarmTrace-Base",
          "partial": "VII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:VII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor representing unknown roots (used in MIREX)\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "X",
          "package": "HarmTrace-Base",
          "signature": "X",
          "source": "src/HarmTrace-Base-MusicRep.html#DiatonicNatural",
          "type": "function"
        },
        "index": {
          "description": "for representing unknown roots used in MIREX",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "X",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalyses a degree list and returns \u003ccode\u003e\u003ca\u003eMajTriad\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMinTriad\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNoTriad\u003c/a\u003e\u003c/code\u003e if\n the degrees make a chord a major, minor, or no triad, respectivly.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "analyseDegTriad",
          "package": "HarmTrace-Base",
          "signature": "[Addition] -\u003e Triad",
          "source": "src/HarmTrace-Base-MusicRep.html#analyseDegTriad",
          "type": "function"
        },
        "index": {
          "description": "Analyses degree list and returns MajTriad MinTriad or NoTriad if the degrees make chord major minor or no triad respectivly",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "analyseDegTriad",
          "normalized": "[Addition]-\u003eTriad",
          "package": "HarmTrace-Base",
          "partial": "Deg Triad",
          "signature": "[Addition]-\u003eTriad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:analyseDegTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordAdditions",
          "package": "HarmTrace-Base",
          "signature": "[Addition]",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordAdditions",
          "normalized": "[Addition]",
          "package": "HarmTrace-Base",
          "partial": "Additions",
          "signature": "[Addition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordAdditions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordRoot",
          "package": "HarmTrace-Base",
          "signature": "a",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordRoot",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordShorthand",
          "package": "HarmTrace-Base",
          "signature": "Shorthand",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "chordShorthand",
          "package": "HarmTrace-Base",
          "partial": "Shorthand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:chordShorthand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe duration of the chord \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "duration",
          "package": "HarmTrace-Base",
          "signature": "Int",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "description": "the duration of the chord",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "duration",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe index of the chord in the list of tokens\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "getLoc",
          "package": "HarmTrace-Base",
          "signature": "Int",
          "source": "src/HarmTrace-Base-MusicRep.html#Chord",
          "type": "function"
        },
        "index": {
          "description": "the index of the chord in the list of tokens",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "getLoc",
          "package": "HarmTrace-Base",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:getLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003e represents an addition and not \n a degree that has to be removed (*).\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isAddition",
          "package": "HarmTrace-Base",
          "signature": "Addition -\u003e Bool",
          "source": "src/HarmTrace-Base-MusicRep.html#isAddition",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the Chord Addition represents an addition and not degree that has to be removed",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isAddition",
          "normalized": "Addition-\u003eBool",
          "package": "HarmTrace-Base",
          "partial": "Addition",
          "signature": "Addition-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isAddition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eN\u003c/a\u003e\u003c/code\u003e, and False otherwise \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isNone",
          "package": "HarmTrace-Base",
          "signature": "Root -\u003e Bool",
          "source": "src/HarmTrace-Base-MusicRep.html#isNone",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Root is and False otherwise",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isNone",
          "normalized": "Root-\u003eBool",
          "package": "HarmTrace-Base",
          "partial": "None",
          "signature": "Root-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e is not a chord, and False otherwise \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isNoneChord",
          "package": "HarmTrace-Base",
          "signature": "ChordLabel -\u003e Bool",
          "source": "src/HarmTrace-Base-MusicRep.html#isNoneChord",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the ChordLabel is not chord and False otherwise",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isNoneChord",
          "normalized": "ChordLabel-\u003eBool",
          "package": "HarmTrace-Base",
          "partial": "None Chord",
          "signature": "ChordLabel-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isNoneChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is not unknown or none\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isRoot",
          "package": "HarmTrace-Base",
          "signature": "Root -\u003e Bool",
          "source": "src/HarmTrace-Base-MusicRep.html#isRoot",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Root is not unknown or none",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isRoot",
          "normalized": "Root-\u003eBool",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "signature": "Root-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is unknown, and False otherwise \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isUnknown",
          "package": "HarmTrace-Base",
          "signature": "Root -\u003e Bool",
          "source": "src/HarmTrace-Base-MusicRep.html#isUnknown",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the Root is unknown and False otherwise",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "isUnknown",
          "normalized": "Root-\u003eBool",
          "package": "HarmTrace-Base",
          "partial": "Unknown",
          "signature": "Root-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:isUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "keyMode",
          "package": "HarmTrace-Base",
          "signature": "Mode",
          "source": "src/HarmTrace-Base-MusicRep.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "keyMode",
          "package": "HarmTrace-Base",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:keyMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicRep",
          "name": "keyRoot",
          "package": "HarmTrace-Base",
          "signature": "Root",
          "source": "src/HarmTrace-Base-MusicRep.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "keyRoot",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:keyRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo Chord label\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "noneLabel",
          "package": "HarmTrace-Base",
          "signature": "ChordLabel",
          "source": "src/HarmTrace-Base-MusicRep.html#noneLabel",
          "type": "function"
        },
        "index": {
          "description": "No Chord label",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "noneLabel",
          "package": "HarmTrace-Base",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:noneLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify note roots to a single enharmonic representation.\n For instance, D&#9837; becomes C&#9839;, E&#9839; becomes F, and G&#119083; becomes F.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "simplifyRoot",
          "package": "HarmTrace-Base",
          "signature": "Root -\u003e Root",
          "source": "src/HarmTrace-Base-MusicRep.html#simplifyRoot",
          "type": "function"
        },
        "index": {
          "description": "Simplify note roots to single enharmonic representation For instance becomes becomes and becomes",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "simplifyRoot",
          "normalized": "Root-\u003eRoot",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "signature": "Root-\u003eRoot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:simplifyRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, calculates the the \u003ccode\u003e\u003ca\u003eChordDegree\u003c/a\u003e\u003c/code\u003e (i.e. relative, \n \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e) for an absolute \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e using \n \u003ccode\u003e\u003ca\u003etoScaleDegree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toChordDegree",
          "package": "HarmTrace-Base",
          "signature": "Key -\u003e ChordLabel -\u003e ChordDegree",
          "source": "src/HarmTrace-Base-MusicRep.html#toChordDegree",
          "type": "function"
        },
        "index": {
          "description": "Given Key calculates the the ChordDegree i.e relative ScaleDegree based Chord for an absolute ChordLabel using toScaleDegree",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toChordDegree",
          "normalized": "Key-\u003eChordLabel-\u003eChordDegree",
          "package": "HarmTrace-Base",
          "partial": "Chord Degree",
          "signature": "Key-\u003eChordLabel-\u003eChordDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toChordDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e given a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e. This function uses \n \u003ccode\u003eanalyseDegClassType\u003c/code\u003e to analyse a chord and derive the \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toClassType",
          "package": "HarmTrace-Base",
          "signature": "Chord a -\u003e ClassType",
          "source": "src/HarmTrace-Base-MusicRep.html#toClassType",
          "type": "function"
        },
        "index": {
          "description": "Returns the ClassType given Chord This function uses analyseDegClassType to analyse chord and derive the ClassType",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toClassType",
          "normalized": "Chord a-\u003eClassType",
          "package": "HarmTrace-Base",
          "partial": "Class Type",
          "signature": "Chord a-\u003eClassType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toClassType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a Chord into a list of relative degrees (i.e. \u003ccode\u003e\u003ca\u003eAddition\u003c/a\u003e\u003c/code\u003es,\n without the root note).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (Chord (Note Nothing C) HDim7 [Add (Note (Just Sh) I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003e[3b,5b,7b,11#]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (Chord (Note Nothing C) Min13 [NoAdd (Note Nothing I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003e[3b,5,7b,9,13]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoDegreeList (parseData pChord \"D:7(b9)\")\n\u003c/code\u003e\u003c/strong\u003e[3,5,7b,9b]\n\u003c/pre\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toDegreeList",
          "package": "HarmTrace-Base",
          "signature": "Chord a -\u003e [Addition]",
          "source": "src/HarmTrace-Base-MusicRep.html#toDegreeList",
          "type": "function"
        },
        "index": {
          "description": "Transforms Chord into list of relative degrees i.e Addition without the root note toDegreeList Chord Note Nothing HDim7 Add Note Just Sh I11 toDegreeList Chord Note Nothing Min13 NoAdd Note Nothing I11 toDegreeList parseData pChord b9",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toDegreeList",
          "normalized": "Chord a-\u003e[Addition]",
          "package": "HarmTrace-Base",
          "partial": "Degree List",
          "signature": "Chord a-\u003e[Addition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toDegreeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e to either a \u003ccode\u003e\u003ca\u003eMajClass\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMinClass\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNoClass\u003c/a\u003e\u003c/code\u003e \n \u003ccode\u003e\u003ca\u003eClassType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMajMin",
          "package": "HarmTrace-Base",
          "signature": "Triad -\u003e ClassType",
          "source": "src/HarmTrace-Base-MusicRep.html#toMajMin",
          "type": "function"
        },
        "index": {
          "description": "Converts Shorthand to either MajClass MinClass or NoClass ClassType",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMajMin",
          "normalized": "Triad-\u003eClassType",
          "package": "HarmTrace-Base",
          "partial": "Maj Min",
          "signature": "Triad-\u003eClassType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMajMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapplies \u003ccode\u003e\u003ca\u003etoMajMin\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMajMinChord",
          "package": "HarmTrace-Base",
          "signature": "ChordLabel -\u003e ChordLabel",
          "source": "src/HarmTrace-Base-MusicRep.html#toMajMinChord",
          "type": "function"
        },
        "index": {
          "description": "applies toMajMin to Chord",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMajMinChord",
          "normalized": "ChordLabel-\u003eChordLabel",
          "package": "HarmTrace-Base",
          "partial": "Maj Min Chord",
          "signature": "ChordLabel-\u003eChordLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMajMinChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eShorthand\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMode",
          "package": "HarmTrace-Base",
          "signature": "Triad -\u003e Mode",
          "source": "src/HarmTrace-Base-MusicRep.html#toMode",
          "type": "function"
        },
        "index": {
          "description": "Converts Shorthand to Mode",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toMode",
          "normalized": "Triad-\u003eMode",
          "package": "HarmTrace-Base",
          "partial": "Mode",
          "signature": "Triad-\u003eMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003etoSemitone\u003c/a\u003e\u003c/code\u003e returning the 'Note DiatonicNatural' given a \n Integer [0..11] semitone, where 0 represents C. When the integer is out \n of the range [0..11] an error is thrown.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toRoot",
          "package": "HarmTrace-Base",
          "signature": "Int -\u003e Root",
          "source": "src/HarmTrace-Base-MusicRep.html#toRoot",
          "type": "function"
        },
        "index": {
          "description": "The reverse of toSemitone returning the Note DiatonicNatural given Integer semitone where represents When the integer is out of the range an error is thrown",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toRoot",
          "normalized": "Int-\u003eRoot",
          "package": "HarmTrace-Base",
          "partial": "Root",
          "signature": "Int-\u003eRoot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransformes a absolute \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e into a relative \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e, given\n a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toScaleDegree",
          "package": "HarmTrace-Base",
          "signature": "Key -\u003e Root -\u003e ScaleDegree",
          "source": "src/HarmTrace-Base-MusicRep.html#toScaleDegree",
          "type": "function"
        },
        "index": {
          "description": "Transformes absolute Root Note into relative ScaleDegree given Key",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toScaleDegree",
          "normalized": "Key-\u003eRoot-\u003eScaleDegree",
          "package": "HarmTrace-Base",
          "partial": "Scale Degree",
          "signature": "Key-\u003eRoot-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toScaleDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the semitone value [0 .. 11] of a \u003ccode\u003e\u003ca\u003eScaleDegree\u003c/a\u003e\u003c/code\u003e where\n 0 = C, e.g. F# = 6. For the constructors \u003ccode\u003e\u003ca\u003eN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eX\u003c/a\u003e\u003c/code\u003e an error is thrown.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toSemitone",
          "package": "HarmTrace-Base",
          "signature": "Note a -\u003e Int",
          "source": "src/HarmTrace-Base-MusicRep.html#toSemitone",
          "type": "function"
        },
        "index": {
          "description": "Returns the semitone value of ScaleDegree where e.g For the constructors and an error is thrown",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toSemitone",
          "normalized": "Note a-\u003eInt",
          "package": "HarmTrace-Base",
          "partial": "Semitone",
          "signature": "Note a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toSemitone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e and determines the \u003ccode\u003e\u003ca\u003eTriad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) Min [NoAdd (Note (Just Fl) I3),Add (Note Nothing I3)] 0 0)\n\u003c/code\u003e\u003c/strong\u003emaj \n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) HDim7 [Add (Note (Just Sh) I11)] 0 0)\n\u003c/code\u003e\u003c/strong\u003edim\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoTriad (Chord (Note Nothing C) Min [NoAdd (Note (Just Fl) I3)] 0 0)\n\u003c/code\u003e\u003c/strong\u003eNoTriad\n\u003c/pre\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toTriad",
          "package": "HarmTrace-Base",
          "signature": "Chord a -\u003e Triad",
          "source": "src/HarmTrace-Base-MusicRep.html#toTriad",
          "type": "function"
        },
        "index": {
          "description": "Takes Chord and determines the Triad toTriad Chord Note Nothing Min NoAdd Note Just Fl I3 Add Note Nothing I3 maj toTriad Chord Note Nothing HDim7 Add Note Just Sh I11 dim toTriad Chord Note Nothing Min NoAdd Note Just Fl I3 NoTriad",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "toTriad",
          "normalized": "Chord a-\u003eTriad",
          "package": "HarmTrace-Base",
          "partial": "Triad",
          "signature": "Chord a-\u003eTriad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:toTriad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes a scale degree with \u003ccode\u003esem\u003c/code\u003e semitones up\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "transposeSem",
          "package": "HarmTrace-Base",
          "signature": "ScaleDegree -\u003e Int -\u003e ScaleDegree",
          "source": "src/HarmTrace-Base-MusicRep.html#transposeSem",
          "type": "function"
        },
        "index": {
          "description": "Transposes scale degree with sem semitones up",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "transposeSem",
          "normalized": "ScaleDegree-\u003eInt-\u003eScaleDegree",
          "package": "HarmTrace-Base",
          "partial": "Sem",
          "signature": "ScaleDegree-\u003eInt-\u003eScaleDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:transposeSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown Chord label\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicRep",
          "name": "unknownLabel",
          "package": "HarmTrace-Base",
          "signature": "ChordLabel",
          "source": "src/HarmTrace-Base-MusicRep.html#unknownLabel",
          "type": "function"
        },
        "index": {
          "description": "Unknown Chord label",
          "hierarchy": "HarmTrace Base MusicRep",
          "module": "HarmTrace.Base.MusicRep",
          "name": "unknownLabel",
          "package": "HarmTrace-Base",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicRep.html#v:unknownLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: A set of types and classes for representing musical time, mainly\n (but not necessarily) in the context of recognising chords \n from an arbitrary audio source.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "MusicTime",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html",
          "type": "module"
        },
        "index": {
          "description": "Summary set of types and classes for representing musical time mainly but not necessarily in the context of recognising chords from an arbitrary audio source",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "MusicTime",
          "package": "HarmTrace-Base",
          "partial": "Music Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups the three types of VAMP plug-in data: \u003ccode\u003e\u003ca\u003eChordinoData\u003c/a\u003e\u003c/code\u003e, \n \u003ccode\u003e\u003ca\u003eBarTimeTrackData\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eKeyStrengthData\u003c/a\u003e\u003c/code\u003e. See for more information:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.vamp-plugins.org\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://isophonics.net/nnls-chroma\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://omras2.org/SonicAnnotator\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "AudioFeat",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "data"
        },
        "index": {
          "description": "Groups the three types of VAMP plug-in data ChordinoData BarTimeTrackData and KeyStrengthData See for more information http www.vamp-plugins.org http isophonics.net nnls-chroma http omras2.org SonicAnnotator",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "AudioFeat",
          "package": "HarmTrace-Base",
          "partial": "Audio Feat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:AudioFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a musical time stamp, which is a \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e possibly augmented\n with a \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e denoting the position of the time stamp within a bar.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTime",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#BarTime",
          "type": "data"
        },
        "index": {
          "description": "Represents musical time stamp which is NumData possibly augmented with Beat denoting the position of the time stamp within bar",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTime",
          "package": "HarmTrace-Base",
          "partial": "Bar Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTimeTrackData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#BarTimeTrackData",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTimeTrackData",
          "package": "HarmTrace-Base",
          "partial": "Bar Time Track Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BarTimeTrackData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor now, we fix the number of available beats to four, because this is also\n hard-coded into the bar and beat-tracker.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Beat",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "data"
        },
        "index": {
          "description": "For now we fix the number of available beats to four because this is also hard-coded into the bar and beat-tracker",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Beat",
          "package": "HarmTrace-Base",
          "partial": "Beat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:Beat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "BeatChroma",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#BeatChroma",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BeatChroma",
          "package": "HarmTrace-Base",
          "partial": "Beat Chroma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BeatChroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "BeatTrackerData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#BeatTrackerData",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BeatTrackerData",
          "package": "HarmTrace-Base",
          "partial": "Beat Tracker Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:BeatTrackerData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord annotation consists of a\n list with chords and segment boundaries.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordAnnotation",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordAnnotation",
          "type": "type"
        },
        "index": {
          "description": "chord annotation consists of list with chords and segment boundaries",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordAnnotation",
          "package": "HarmTrace-Base",
          "partial": "Chord Annotation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord candidate: an intermediate datatype that matches shorthand, \n chord structure and root note (plus inversion)\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordCand",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "data"
        },
        "index": {
          "description": "chord candidate an intermediate datatype that matches shorthand chord structure and root note plus inversion",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordCand",
          "package": "HarmTrace-Base",
          "partial": "Chord Cand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordCand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chord template is list of \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordStruct",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordStruct",
          "type": "type"
        },
        "index": {
          "description": "chord template is list of NumData",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordStruct",
          "package": "HarmTrace-Base",
          "partial": "Chord Struct",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoData",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoData",
          "package": "HarmTrace-Base",
          "partial": "Chordino Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordinoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents two chroma features and a time stamp. \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoLine",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
          "type": "data"
        },
        "index": {
          "description": "Represents two chroma features and time stamp",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoLine",
          "package": "HarmTrace-Base",
          "partial": "Chordino Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ChordinoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "KeyStrengthData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#KeyStrengthData",
          "type": "type"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "KeyStrengthData",
          "package": "HarmTrace-Base",
          "partial": "Key Strength Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:KeyStrengthData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym is defined for our main numerical representation, this \n allows us to easily change the precision.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "NumData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#NumData",
          "type": "type"
        },
        "index": {
          "description": "type synonym is defined for our main numerical representation this allows us to easily change the precision",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "NumData",
          "package": "HarmTrace-Base",
          "partial": "Num Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:NumData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines a \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003e with a probability.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChord",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
          "type": "data"
        },
        "index": {
          "description": "Combines ChordLabel with probability",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChord",
          "package": "HarmTrace-Base",
          "partial": "Prob Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ProbChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClustering \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003es in a collection of chords that share a key\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChordSeg",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
          "type": "data"
        },
        "index": {
          "description": "Clustering ProbChord in collection of chords that share key",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChordSeg",
          "package": "HarmTrace-Base",
          "partial": "Prob Chord Seg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:ProbChordSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA datatype that wraps around an (musical) datatype, adding information \n about the musical time to this datatype. Musical time is stored as \n a list of \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e time stamps that can optionally be augmented\n with information about the \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e position of the particular time stamp \n inside the bar.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "TimedData",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-MusicTime.html#TimedData",
          "type": "data"
        },
        "index": {
          "description": "datatype that wraps around an musical datatype adding information about the musical time to this datatype Musical time is stored as list of BarTime time stamps that can optionally be augmented with information about the Beat position of the particular time stamp inside the bar",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "TimedData",
          "package": "HarmTrace-Base",
          "partial": "Timed Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#t:TimedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "AudioFeat",
          "package": "HarmTrace-Base",
          "signature": "AudioFeat",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "AudioFeat",
          "package": "HarmTrace-Base",
          "partial": "Audio Feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:AudioFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTime",
          "package": "HarmTrace-Base",
          "signature": "BarTime NumData Beat",
          "source": "src/HarmTrace-Base-MusicTime.html#BarTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "BarTime",
          "package": "HarmTrace-Base",
          "partial": "Bar Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:BarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordCand",
          "package": "HarmTrace-Base",
          "signature": "ChordCand",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordCand",
          "package": "HarmTrace-Base",
          "partial": "Chord Cand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ChordCand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoLine",
          "package": "HarmTrace-Base",
          "signature": "ChordinoLine",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ChordinoLine",
          "package": "HarmTrace-Base",
          "partial": "Chordino Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ChordinoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "Four",
          "package": "HarmTrace-Base",
          "signature": "Four",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Four",
          "package": "HarmTrace-Base",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "NoBeat",
          "package": "HarmTrace-Base",
          "signature": "NoBeat",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "NoBeat",
          "package": "HarmTrace-Base",
          "partial": "No Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:NoBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "One",
          "package": "HarmTrace-Base",
          "signature": "One",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "One",
          "package": "HarmTrace-Base",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChord",
          "package": "HarmTrace-Base",
          "signature": "ProbChord",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "ProbChord",
          "package": "HarmTrace-Base",
          "partial": "Prob Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:ProbChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "Segment",
          "package": "HarmTrace-Base",
          "signature": "Segment",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Segment",
          "package": "HarmTrace-Base",
          "partial": "Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "Three",
          "package": "HarmTrace-Base",
          "signature": "Three",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Three",
          "package": "HarmTrace-Base",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "Time",
          "package": "HarmTrace-Base",
          "signature": "Time NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#BarTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Time",
          "package": "HarmTrace-Base",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "TimedData",
          "package": "HarmTrace-Base",
          "signature": "TimedData",
          "source": "src/HarmTrace-Base-MusicTime.html#TimedData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "TimedData",
          "package": "HarmTrace-Base",
          "partial": "Timed Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:TimedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "Two",
          "package": "HarmTrace-Base",
          "signature": "Two",
          "source": "src/HarmTrace-Base-MusicTime.html#Beat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "Two",
          "package": "HarmTrace-Base",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bass chroma feature\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "bass",
          "package": "HarmTrace-Base",
          "signature": "[NumData]",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
          "type": "function"
        },
        "index": {
          "description": "Returns the bass chroma feature",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "bass",
          "normalized": "[NumData]",
          "package": "HarmTrace-Base",
          "signature": "[NumData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:bass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e timestamp, given a \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "beat",
          "package": "HarmTrace-Base",
          "signature": "BarTime -\u003e Beat",
          "source": "src/HarmTrace-Base-MusicTime.html#beat",
          "type": "function"
        },
        "index": {
          "description": "Returns the NumData timestamp given BarTime",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "beat",
          "normalized": "BarTime-\u003eBeat",
          "package": "HarmTrace-Base",
          "signature": "BarTime-\u003eBeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:beat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "chordLab",
          "package": "HarmTrace-Base",
          "signature": "ChordLabel",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "chordLab",
          "package": "HarmTrace-Base",
          "partial": "Lab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:chordLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "chordStructCC",
          "package": "HarmTrace-Base",
          "signature": "ChordStruct",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "chordStructCC",
          "package": "HarmTrace-Base",
          "partial": "Struct CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:chordStructCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcatenates the \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e timestamps of two \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003es and \n creates a new \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e that stores the first argument. \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "concatTimedData",
          "package": "HarmTrace-Base",
          "signature": "a -\u003e TimedData a -\u003e TimedData a -\u003e TimedData a",
          "source": "src/HarmTrace-Base-MusicTime.html#concatTimedData",
          "type": "function"
        },
        "index": {
          "description": "concatenates the BarTime timestamps of two TimedData and creates new TimedData that stores the first argument",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "concatTimedData",
          "normalized": "a-\u003eTimedData a-\u003eTimedData a-\u003eTimedData a",
          "package": "HarmTrace-Base",
          "partial": "Timed Data",
          "signature": "a-\u003eTimedData a-\u003eTimedData a-\u003eTimedData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:concatTimedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrops the probabilties paired with chordlabels (in a list of \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003es)\n and returns a list of \u003ccode\u003e\u003ca\u003eChordLabel\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "dropProb",
          "package": "HarmTrace-Base",
          "signature": "[TimedData ProbChord] -\u003e [TimedData ChordLabel]",
          "source": "src/HarmTrace-Base-MusicTime.html#dropProb",
          "type": "function"
        },
        "index": {
          "description": "drops the probabilties paired with chordlabels in list of ProbChord and returns list of ChordLabel",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "dropProb",
          "normalized": "[TimedData ProbChord]-\u003e[TimedData ChordLabel]",
          "package": "HarmTrace-Base",
          "partial": "Prob",
          "signature": "[TimedData ProbChord]-\u003e[TimedData ChordLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:dropProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrops the time (with or without \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e) information of a list \n \u003ccode\u003eTimed\u003c/code\u003e data structure \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "dropTimed",
          "package": "HarmTrace-Base",
          "signature": "[TimedData a] -\u003e [a]",
          "source": "src/HarmTrace-Base-MusicTime.html#dropTimed",
          "type": "function"
        },
        "index": {
          "description": "drops the time with or without Beat information of list Timed data structure",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "dropTimed",
          "normalized": "[TimedData a]-\u003e[a]",
          "package": "HarmTrace-Base",
          "partial": "Timed",
          "signature": "[TimedData a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:dropTimed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "getAudioFeatId",
          "package": "HarmTrace-Base",
          "signature": "FilePath",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getAudioFeatId",
          "package": "HarmTrace-Base",
          "partial": "Audio Feat Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getAudioFeatId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the start time stamp\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBarTime",
          "package": "HarmTrace-Base",
          "signature": "TimedData a -\u003e BarTime",
          "source": "src/HarmTrace-Base-MusicTime.html#getBarTime",
          "type": "function"
        },
        "index": {
          "description": "Returns the start time stamp",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBarTime",
          "normalized": "TimedData a-\u003eBarTime",
          "package": "HarmTrace-Base",
          "partial": "Bar Time",
          "signature": "TimedData a-\u003eBarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the start \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeat",
          "package": "HarmTrace-Base",
          "signature": "TimedData a -\u003e Beat",
          "source": "src/HarmTrace-Base-MusicTime.html#getBeat",
          "type": "function"
        },
        "index": {
          "description": "Returns the start Beat",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeat",
          "normalized": "TimedData a-\u003eBeat",
          "package": "HarmTrace-Base",
          "partial": "Beat",
          "signature": "TimedData a-\u003eBeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts  \u003ccode\u003e\u003ca\u003eBarTimeTrackData\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eBeatTrackerData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeatTrack",
          "package": "HarmTrace-Base",
          "signature": "BarTimeTrackData -\u003e BeatTrackerData",
          "source": "src/HarmTrace-Base-MusicTime.html#getBeatTrack",
          "type": "function"
        },
        "index": {
          "description": "Converts BarTimeTrackData into BeatTrackerData",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeatTrack",
          "normalized": "BarTimeTrackData-\u003eBeatTrackerData",
          "package": "HarmTrace-Base",
          "partial": "Beat Track",
          "signature": "BarTimeTrackData-\u003eBeatTrackerData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeatTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeats",
          "package": "HarmTrace-Base",
          "signature": "BarTimeTrackData",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getBeats",
          "package": "HarmTrace-Base",
          "partial": "Beats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getBeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "getChroma",
          "package": "HarmTrace-Base",
          "signature": "ChordinoData",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getChroma",
          "package": "HarmTrace-Base",
          "partial": "Chroma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getChroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the contained datatype \n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getData",
          "package": "HarmTrace-Base",
          "signature": "a",
          "source": "src/HarmTrace-Base-MusicTime.html#TimedData",
          "type": "function"
        },
        "index": {
          "description": "Returns the contained datatype",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getData",
          "package": "HarmTrace-Base",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "getKeys",
          "package": "HarmTrace-Base",
          "signature": "KeyStrengthData",
          "source": "src/HarmTrace-Base-MusicTime.html#AudioFeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getKeys",
          "package": "HarmTrace-Base",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the list of TimeStamps\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getTimeStamps",
          "package": "HarmTrace-Base",
          "signature": "[BarTime]",
          "source": "src/HarmTrace-Base-MusicTime.html#TimedData",
          "type": "function"
        },
        "index": {
          "description": "Returns the list of TimeStamps",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "getTimeStamps",
          "normalized": "[BarTime]",
          "package": "HarmTrace-Base",
          "partial": "Time Stamps",
          "signature": "[BarTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:getTimeStamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "inversionRootCC",
          "package": "HarmTrace-Base",
          "signature": "Root",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "inversionRootCC",
          "package": "HarmTrace-Base",
          "partial": "Root CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:inversionRootCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the next beat, e.g. \u003ccode\u003e nextBeat Two = Three \u003c/code\u003e. \n Following the (current) definition of \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, we still assume 4/4, in the \n future this function should also have the meter as an argument.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "nextBeat",
          "package": "HarmTrace-Base",
          "signature": "Beat -\u003e Beat",
          "source": "src/HarmTrace-Base-MusicTime.html#nextBeat",
          "type": "function"
        },
        "index": {
          "description": "returns the next beat e.g nextBeat Two Three Following the current definition of Beat we still assume in the future this function should also have the meter as an argument",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "nextBeat",
          "normalized": "Beat-\u003eBeat",
          "package": "HarmTrace-Base",
          "partial": "Beat",
          "signature": "Beat-\u003eBeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:nextBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the offset time stamp\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "offset",
          "package": "HarmTrace-Base",
          "signature": "TimedData a -\u003e NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#offset",
          "type": "function"
        },
        "index": {
          "description": "Returns the offset time stamp",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "offset",
          "normalized": "TimedData a-\u003eNumData",
          "package": "HarmTrace-Base",
          "signature": "TimedData a-\u003eNumData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the onset time stamp\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "onset",
          "package": "HarmTrace-Base",
          "signature": "TimedData a -\u003e NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#onset",
          "type": "function"
        },
        "index": {
          "description": "Returns the onset time stamp",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "onset",
          "normalized": "TimedData a-\u003eNumData",
          "package": "HarmTrace-Base",
          "signature": "TimedData a-\u003eNumData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:onset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "originalRootCC",
          "package": "HarmTrace-Base",
          "signature": "Root",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "originalRootCC",
          "package": "HarmTrace-Base",
          "partial": "Root CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:originalRootCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the previous \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, similar to \u003ccode\u003e\u003ca\u003eprevBeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ereturns the next beat, e.g. \u003ccode\u003e nextBeat Two = Three \u003c/code\u003e. \n Following the (current) definition of \u003ccode\u003e\u003ca\u003eBeat\u003c/a\u003e\u003c/code\u003e, we still assume 4/4, in the \n future this function should also have the meter as an argument.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "prevBeat",
          "package": "HarmTrace-Base",
          "signature": "Beat -\u003e Beat",
          "source": "src/HarmTrace-Base-MusicTime.html#prevBeat",
          "type": "function"
        },
        "index": {
          "description": "returns the previous Beat similar to prevBeat returns the next beat e.g nextBeat Two Three Following the current definition of Beat we still assume in the future this function should also have the meter as an argument",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "prevBeat",
          "normalized": "Beat-\u003eBeat",
          "package": "HarmTrace-Base",
          "partial": "Beat",
          "signature": "Beat-\u003eBeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:prevBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "prob",
          "package": "HarmTrace-Base",
          "signature": "NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "prob",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "segChords",
          "package": "HarmTrace-Base",
          "signature": "[TimedData [ProbChord]]",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "segChords",
          "normalized": "[TimedData[ProbChord]]",
          "package": "HarmTrace-Base",
          "partial": "Chords",
          "signature": "[TimedData[ProbChord]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:segChords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "segKey",
          "package": "HarmTrace-Base",
          "signature": "Key",
          "source": "src/HarmTrace-Base-MusicTime.html#ProbChordSeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "segKey",
          "package": "HarmTrace-Base",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:segKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewraps a datatype in \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "setData",
          "package": "HarmTrace-Base",
          "signature": "TimedData a -\u003e b -\u003e TimedData b",
          "source": "src/HarmTrace-Base-MusicTime.html#setData",
          "type": "function"
        },
        "index": {
          "description": "wraps datatype in TimedData",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "setData",
          "normalized": "TimedData a-\u003eb-\u003eTimedData b",
          "package": "HarmTrace-Base",
          "partial": "Data",
          "signature": "TimedData a-\u003eb-\u003eTimedData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:setData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HarmTrace.Base.MusicTime",
          "name": "shorthardCC",
          "package": "HarmTrace-Base",
          "signature": "Shorthand",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordCand",
          "type": "function"
        },
        "index": {
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "shorthardCC",
          "package": "HarmTrace-Base",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:shorthardCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the time stamp of the chroma features\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "time",
          "package": "HarmTrace-Base",
          "signature": "NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
          "type": "function"
        },
        "index": {
          "description": "Returns the time stamp of the chroma features",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "time",
          "package": "HarmTrace-Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNumData\u003c/a\u003e\u003c/code\u003e timestamp, given a \u003ccode\u003e\u003ca\u003eBarTime\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timeStamp",
          "package": "HarmTrace-Base",
          "signature": "BarTime -\u003e NumData",
          "source": "src/HarmTrace-Base-MusicTime.html#timeStamp",
          "type": "function"
        },
        "index": {
          "description": "Returns the NumData timestamp given BarTime",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timeStamp",
          "normalized": "BarTime-\u003eNumData",
          "package": "HarmTrace-Base",
          "partial": "Stamp",
          "signature": "BarTime-\u003eNumData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealternative \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timedData",
          "package": "HarmTrace-Base",
          "signature": "a -\u003e NumData -\u003e NumData -\u003e TimedData a",
          "source": "src/HarmTrace-Base-MusicTime.html#timedData",
          "type": "function"
        },
        "index": {
          "description": "alternative TimedData constructor",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timedData",
          "normalized": "a-\u003eNumData-\u003eNumData-\u003eTimedData a",
          "package": "HarmTrace-Base",
          "partial": "Data",
          "signature": "a-\u003eNumData-\u003eNumData-\u003eTimedData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealternative \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e constructor\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timedDataBT",
          "package": "HarmTrace-Base",
          "signature": "a -\u003e BarTime -\u003e BarTime -\u003e TimedData a",
          "source": "src/HarmTrace-Base-MusicTime.html#timedDataBT",
          "type": "function"
        },
        "index": {
          "description": "alternative TimedData constructor",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "timedDataBT",
          "normalized": "a-\u003eBarTime-\u003eBarTime-\u003eTimedData a",
          "package": "HarmTrace-Base",
          "partial": "Data BT",
          "signature": "a-\u003eBarTime-\u003eBarTime-\u003eTimedData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:timedDataBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the treble chroma feature\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "treb",
          "package": "HarmTrace-Base",
          "signature": "[NumData]",
          "source": "src/HarmTrace-Base-MusicTime.html#ChordinoLine",
          "type": "function"
        },
        "index": {
          "description": "Returns the treble chroma feature",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "treb",
          "normalized": "[NumData]",
          "package": "HarmTrace-Base",
          "signature": "[NumData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:treb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates transforms ChordLabel wrapped in a \u003ccode\u003e\u003ca\u003eProbChord\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTimedData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HarmTrace.Base.MusicTime",
          "name": "updateTPChord",
          "package": "HarmTrace-Base",
          "signature": "(ChordLabel -\u003e ChordLabel) -\u003e TimedData ProbChord -\u003e TimedData ProbChord",
          "source": "src/HarmTrace-Base-MusicTime.html#updateTPChord",
          "type": "function"
        },
        "index": {
          "description": "Updates transforms ChordLabel wrapped in ProbChord and TimedData",
          "hierarchy": "HarmTrace Base MusicTime",
          "module": "HarmTrace.Base.MusicTime",
          "name": "updateTPChord",
          "normalized": "(ChordLabel-\u003eChordLabel)-\u003eTimedData ProbChord-\u003eTimedData ProbChord",
          "package": "HarmTrace-Base",
          "partial": "TPChord",
          "signature": "(ChordLabel-\u003eChordLabel)-\u003eTimedData ProbChord-\u003eTimedData ProbChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-MusicTime.html#v:updateTPChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary: Some general parsing utilities used for parsing textual chord\n representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "Parsing",
          "package": "HarmTrace-Base",
          "source": "src/HarmTrace-Base-Parsing.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Some general parsing utilities used for parsing textual chord representations",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "Parsing",
          "package": "HarmTrace-Base",
          "partial": "Parsing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses UNIX and DOS/WINDOWS line endings including trailing whitespace\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "pLineEnd",
          "package": "HarmTrace-Base",
          "signature": "Parser String",
          "source": "src/HarmTrace-Base-Parsing.html#pLineEnd",
          "type": "function"
        },
        "index": {
          "description": "Parses UNIX and DOS WINDOWS line endings including trailing whitespace",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "pLineEnd",
          "package": "HarmTrace-Base",
          "partial": "Line End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pLineEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an arbitrary times the first parsing combinator until the parsing \n second parsing combinator is encountered. The result of the second parsing\n combinator is ignored.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "pManyTill",
          "package": "HarmTrace-Base",
          "signature": "P st a -\u003e P st b -\u003e P st [a]",
          "source": "src/HarmTrace-Base-Parsing.html#pManyTill",
          "type": "function"
        },
        "index": {
          "description": "Parses an arbitrary times the first parsing combinator until the parsing second parsing combinator is encountered The result of the second parsing combinator is ignored",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "pManyTill",
          "normalized": "P a b-\u003eP a c-\u003eP a[b]",
          "package": "HarmTrace-Base",
          "partial": "Many Till",
          "signature": "P st a-\u003eP st b-\u003eP st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pManyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a specific string\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "pString",
          "package": "HarmTrace-Base",
          "signature": "[a] -\u003e P (Str a state loc) [a]",
          "source": "src/HarmTrace-Base-Parsing.html#pString",
          "type": "function"
        },
        "index": {
          "description": "Parses specific string",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "pString",
          "normalized": "[a]-\u003eP(Str a b c)[a]",
          "package": "HarmTrace-Base",
          "partial": "String",
          "signature": "[a]-\u003eP(Str a state loc)[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:pString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToplevel parser that ignores error-reporting, regardless of there were\n error in the parse\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseData",
          "package": "HarmTrace-Base",
          "signature": "P (Str a s LineColPos) b -\u003e s -\u003e b",
          "source": "src/HarmTrace-Base-Parsing.html#parseData",
          "type": "function"
        },
        "index": {
          "description": "Toplevel parser that ignores error-reporting regardless of there were error in the parse",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseData",
          "normalized": "P(Str a b LineColPos)c-\u003eb-\u003ec",
          "package": "HarmTrace-Base",
          "partial": "Data",
          "signature": "P(Str a s LineColPos)b-\u003es-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is identical to \u003ccode\u003e\u003ca\u003eparseData\u003c/a\u003e\u003c/code\u003e however it will throw an \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when\n the the list with parsing errors is not empty. No, this will not make your\n program more safe. However, in certain cases you really want to be sure\n that parsing has finished without errors. In those cases you should use\n \u003ccode\u003e\u003ca\u003eparseDataSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseDataSafe",
          "package": "HarmTrace-Base",
          "signature": "P (Str a s LineColPos) b -\u003e s -\u003e b",
          "source": "src/HarmTrace-Base-Parsing.html#parseDataSafe",
          "type": "function"
        },
        "index": {
          "description": "This is identical to parseData however it will throw an error when the the list with parsing errors is not empty No this will not make your program more safe However in certain cases you really want to be sure that parsing has finished without errors In those cases you should use parseDataSafe",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseDataSafe",
          "normalized": "P(Str a b LineColPos)c-\u003eb-\u003ec",
          "package": "HarmTrace-Base",
          "partial": "Data Safe",
          "signature": "P(Str a s LineColPos)b-\u003es-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseDataSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToplevel parser that returns both the result as well as a (possibly empty)\n list of error-corrections.\n\u003c/p\u003e",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseDataWithErrors",
          "package": "HarmTrace-Base",
          "signature": "P (Str a s LineColPos) b -\u003e s -\u003e (b, [Error LineColPos])",
          "source": "src/HarmTrace-Base-Parsing.html#parseDataWithErrors",
          "type": "function"
        },
        "index": {
          "description": "Toplevel parser that returns both the result as well as possibly empty list of error-corrections",
          "hierarchy": "HarmTrace Base Parsing",
          "module": "HarmTrace.Base.Parsing",
          "name": "parseDataWithErrors",
          "normalized": "P(Str a b LineColPos)c-\u003eb-\u003e(c,[Error LineColPos])",
          "package": "HarmTrace-Base",
          "partial": "Data With Errors",
          "signature": "P(Str a s LineColPos)b-\u003es-\u003e(b,[Error LineColPos])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HarmTrace-Base/docs/HarmTrace-Base-Parsing.html#v:parseDataWithErrors"
      }
    }
  ]
]