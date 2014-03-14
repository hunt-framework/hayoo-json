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
        "word": "abcnotation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc.Parser",
          "name": "Parser",
          "package": "abcnotation",
          "source": "src/Music-Abc-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Abc Parser",
          "module": "Music.Abc.Parser",
          "name": "Parser",
          "package": "abcnotation",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a module description, returning an error if unsuccessful.\n\u003c/p\u003e",
          "module": "Music.Abc.Parser",
          "name": "parse",
          "package": "abcnotation",
          "signature": "String -\u003e Either ParseError AbcFile",
          "source": "src/Music-Abc-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse module description returning an error if unsuccessful",
          "hierarchy": "Music Abc Parser",
          "module": "Music.Abc.Parser",
          "name": "parse",
          "normalized": "String-\u003eEither ParseError AbcFile",
          "package": "abcnotation",
          "signature": "String-\u003eEither ParseError AbcFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell representation and parser for ABC notation. Based on the 2.1 standard. \n\u003c/p\u003e\u003cp\u003eFor more information see \u003ca\u003ehttp://abcnotation.com\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Abc",
          "name": "Abc",
          "package": "abcnotation",
          "source": "src/Music-Abc.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell representation and parser for ABC notation Based on the standard For more information see http abcnotation.com",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Abc",
          "package": "abcnotation",
          "partial": "Abc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": ":|:",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#%3A%7C%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": ":|:",
          "package": "abcnotation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA full ABC file (2.2).\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "AbcFile",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#AbcFile",
          "type": "data"
        },
        "index": {
          "description": "full ABC file",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "AbcFile",
          "package": "abcnotation",
          "partial": "Abc File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:AbcFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "AbcTune",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#AbcTune",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "AbcTune",
          "package": "abcnotation",
          "partial": "Abc Tune",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:AbcTune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Accidental",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Accidental",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Accidental",
          "package": "abcnotation",
          "partial": "Accidental",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarline, including special barlines and repeats.\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "Barline",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Barline",
          "type": "data"
        },
        "index": {
          "description": "Barline including special barlines and repeats",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Barline",
          "package": "abcnotation",
          "partial": "Barline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Barline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "BeamT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#BeamT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "BeamT",
          "package": "abcnotation",
          "partial": "Beam",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:BeamT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Decoration",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Decoration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Decoration",
          "package": "abcnotation",
          "partial": "Decoration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Decoration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DecorationT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#DecorationT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DecorationT",
          "package": "abcnotation",
          "partial": "Decoration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:DecorationT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbc directive.\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "Directive",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Directive",
          "type": "type"
        },
        "index": {
          "description": "Abc directive",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Directive",
          "package": "abcnotation",
          "partial": "Directive",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Directive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Duration",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Duration",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Duration",
          "package": "abcnotation",
          "partial": "Duration",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DurationT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#DurationT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DurationT",
          "package": "abcnotation",
          "partial": "Duration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:DurationT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a tune, free text or typeset text (2.2.3).\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "Element",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Element",
          "type": "data"
        },
        "index": {
          "description": "Either tune free text or typeset text",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Element",
          "package": "abcnotation",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile header (2.2.2).\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "FileHeader",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#FileHeader",
          "type": "data"
        },
        "index": {
          "description": "File header",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "FileHeader",
          "package": "abcnotation",
          "partial": "File Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "GraceT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#GraceT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "GraceT",
          "package": "abcnotation",
          "partial": "Grace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:GraceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Information",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Information",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Information",
          "package": "abcnotation",
          "partial": "Information",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Information"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "MultiRest",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#MultiRest",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "MultiRest",
          "package": "abcnotation",
          "partial": "Multi Rest",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:MultiRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Music",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Music",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Music",
          "package": "abcnotation",
          "partial": "Music",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Music"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Note",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Note",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Note",
          "package": "abcnotation",
          "partial": "Note",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Octave",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Octave",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Octave",
          "package": "abcnotation",
          "partial": "Octave",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Pitch",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#Pitch",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Pitch",
          "package": "abcnotation",
          "partial": "Pitch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "PitchClass",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "PitchClass",
          "package": "abcnotation",
          "partial": "Pitch Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:PitchClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "RestT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#RestT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "RestT",
          "package": "abcnotation",
          "partial": "Rest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:RestT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "SlurT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#SlurT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "SlurT",
          "package": "abcnotation",
          "partial": "Slur",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:SlurT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TuneBody",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#TuneBody",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TuneBody",
          "package": "abcnotation",
          "partial": "Tune Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:TuneBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TuneHeader",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#TuneHeader",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TuneHeader",
          "package": "abcnotation",
          "partial": "Tune Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:TuneHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TupletT",
          "package": "abcnotation",
          "source": "src/Music-Abc.html#TupletT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TupletT",
          "package": "abcnotation",
          "partial": "Tuplet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#t:TupletT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "A",
          "package": "abcnotation",
          "signature": "A",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "A",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "AbcFile",
          "package": "abcnotation",
          "signature": "AbcFile (Maybe String) (Maybe FileHeader) [Element]",
          "source": "src/Music-Abc.html#AbcFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "AbcFile",
          "normalized": "AbcFile(Maybe String)(Maybe FileHeader)[Element]",
          "package": "abcnotation",
          "partial": "Abc File",
          "signature": "AbcFile(Maybe String)(Maybe FileHeader)[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:AbcFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "AbcTune",
          "package": "abcnotation",
          "signature": "AbcTune TuneHeader TuneBody",
          "source": "src/Music-Abc.html#AbcTune",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "AbcTune",
          "package": "abcnotation",
          "partial": "Abc Tune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:AbcTune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Accent",
          "package": "abcnotation",
          "signature": "Accent",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Accent",
          "package": "abcnotation",
          "partial": "Accent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Area",
          "package": "abcnotation",
          "signature": "Area String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Area",
          "package": "abcnotation",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Arpeggio",
          "package": "abcnotation",
          "signature": "Arpeggio",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Arpeggio",
          "package": "abcnotation",
          "partial": "Arpeggio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Arpeggio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "B",
          "package": "abcnotation",
          "signature": "B",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "B",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Barline",
          "package": "abcnotation",
          "signature": "Barline",
          "source": "src/Music-Abc.html#Barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Barline",
          "package": "abcnotation",
          "partial": "Barline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Barline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Book",
          "package": "abcnotation",
          "signature": "Book String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Book",
          "package": "abcnotation",
          "partial": "Book",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Book"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Breath",
          "package": "abcnotation",
          "signature": "Breath",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Breath",
          "package": "abcnotation",
          "partial": "Breath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Breath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "C",
          "package": "abcnotation",
          "signature": "C",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "C",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Coda",
          "package": "abcnotation",
          "signature": "Coda",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Coda",
          "package": "abcnotation",
          "partial": "Coda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Coda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Composer",
          "package": "abcnotation",
          "signature": "Composer String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Composer",
          "package": "abcnotation",
          "partial": "Composer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Composer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Crescendo",
          "package": "abcnotation",
          "signature": "Crescendo",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Crescendo",
          "package": "abcnotation",
          "partial": "Crescendo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Crescendo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "D",
          "package": "abcnotation",
          "signature": "D",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "D",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DaCapo",
          "package": "abcnotation",
          "signature": "DaCapo",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DaCapo",
          "package": "abcnotation",
          "partial": "Da Capo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DaCapo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DaSegno",
          "package": "abcnotation",
          "signature": "DaSegno",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DaSegno",
          "package": "abcnotation",
          "partial": "Da Segno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DaSegno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Dacoda",
          "package": "abcnotation",
          "signature": "Dacoda",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Dacoda",
          "package": "abcnotation",
          "partial": "Dacoda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Dacoda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Diminuendo",
          "package": "abcnotation",
          "signature": "Diminuendo",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Diminuendo",
          "package": "abcnotation",
          "partial": "Diminuendo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Diminuendo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Discography",
          "package": "abcnotation",
          "signature": "Discography String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Discography",
          "package": "abcnotation",
          "partial": "Discography",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Discography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DottedBarline",
          "package": "abcnotation",
          "signature": "DottedBarline Barline",
          "source": "src/Music-Abc.html#Barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DottedBarline",
          "package": "abcnotation",
          "partial": "Dotted Barline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DottedBarline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DoubleBarline",
          "package": "abcnotation",
          "signature": "DoubleBarline Bool Bool",
          "source": "src/Music-Abc.html#Barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DoubleBarline",
          "package": "abcnotation",
          "partial": "Double Barline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DoubleBarline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DoubleFlat",
          "package": "abcnotation",
          "signature": "DoubleFlat",
          "source": "src/Music-Abc.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DoubleFlat",
          "package": "abcnotation",
          "partial": "Double Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DoubleFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "DoubleSharp",
          "package": "abcnotation",
          "signature": "DoubleSharp",
          "source": "src/Music-Abc.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "DoubleSharp",
          "package": "abcnotation",
          "partial": "Double Sharp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:DoubleSharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Downbow",
          "package": "abcnotation",
          "signature": "Downbow",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Downbow",
          "package": "abcnotation",
          "partial": "Downbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Downbow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Duration",
          "package": "abcnotation",
          "signature": "Duration",
          "source": "src/Music-Abc.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Duration",
          "package": "abcnotation",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "E",
          "package": "abcnotation",
          "signature": "E",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "E",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "EndCrescendo",
          "package": "abcnotation",
          "signature": "EndCrescendo",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "EndCrescendo",
          "package": "abcnotation",
          "partial": "End Crescendo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:EndCrescendo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "EndDiminuendo",
          "package": "abcnotation",
          "signature": "EndDiminuendo",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "EndDiminuendo",
          "package": "abcnotation",
          "partial": "End Diminuendo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:EndDiminuendo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "F",
          "package": "abcnotation",
          "signature": "F",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "F",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Fermata",
          "package": "abcnotation",
          "signature": "Fermata Bool",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Fermata",
          "package": "abcnotation",
          "partial": "Fermata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Fermata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "FileHeader",
          "package": "abcnotation",
          "signature": "FileHeader [Information] [Directive]",
          "source": "src/Music-Abc.html#FileHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "FileHeader",
          "normalized": "FileHeader[Information][Directive]",
          "package": "abcnotation",
          "partial": "File Header",
          "signature": "FileHeader[Information][Directive]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:FileHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "FileUrl",
          "package": "abcnotation",
          "signature": "FileUrl String URI",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "FileUrl",
          "package": "abcnotation",
          "partial": "File Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:FileUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Fine",
          "package": "abcnotation",
          "signature": "Fine",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Fine",
          "package": "abcnotation",
          "partial": "Fine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Fine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Fingering",
          "package": "abcnotation",
          "signature": "Fingering Int",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Fingering",
          "package": "abcnotation",
          "partial": "Fingering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Fingering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Flat",
          "package": "abcnotation",
          "signature": "Flat",
          "source": "src/Music-Abc.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Flat",
          "package": "abcnotation",
          "partial": "Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree text (2.2.3).\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "FreeText",
          "package": "abcnotation",
          "signature": "FreeText String",
          "source": "src/Music-Abc.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Free text",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "FreeText",
          "package": "abcnotation",
          "partial": "Free Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:FreeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "G",
          "package": "abcnotation",
          "signature": "G",
          "source": "src/Music-Abc.html#PitchClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "G",
          "package": "abcnotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Group",
          "package": "abcnotation",
          "signature": "Group String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Group",
          "package": "abcnotation",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "History",
          "package": "abcnotation",
          "signature": "History String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "History",
          "package": "abcnotation",
          "partial": "History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:History"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Instruction",
          "package": "abcnotation",
          "signature": "Instruction Directive",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Instruction",
          "package": "abcnotation",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Invertedturn",
          "package": "abcnotation",
          "signature": "Invertedturn",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Invertedturn",
          "package": "abcnotation",
          "partial": "Invertedturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Invertedturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Invertedturnx",
          "package": "abcnotation",
          "signature": "Invertedturnx",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Invertedturnx",
          "package": "abcnotation",
          "partial": "Invertedturnx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Invertedturnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "InvisibleBarline",
          "package": "abcnotation",
          "signature": "InvisibleBarline Barline",
          "source": "src/Music-Abc.html#Barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "InvisibleBarline",
          "package": "abcnotation",
          "partial": "Invisible Barline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:InvisibleBarline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Key",
          "package": "abcnotation",
          "signature": "Key Key",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Key",
          "package": "abcnotation",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Longphrase",
          "package": "abcnotation",
          "signature": "Longphrase",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Longphrase",
          "package": "abcnotation",
          "partial": "Longphrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Longphrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Lowermordent",
          "package": "abcnotation",
          "signature": "Lowermordent",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Lowermordent",
          "package": "abcnotation",
          "partial": "Lowermordent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Lowermordent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Mediumphrase",
          "package": "abcnotation",
          "signature": "Mediumphrase",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Mediumphrase",
          "package": "abcnotation",
          "partial": "Mediumphrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Mediumphrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Meter",
          "package": "abcnotation",
          "signature": "Meter Meter",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Meter",
          "package": "abcnotation",
          "partial": "Meter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Meter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "MultiRest",
          "package": "abcnotation",
          "signature": "MultiRest",
          "source": "src/Music-Abc.html#MultiRest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "MultiRest",
          "package": "abcnotation",
          "partial": "Multi Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:MultiRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Music",
          "package": "abcnotation",
          "signature": "Music [Note :|: (MultiRest :|: (Barline :|: ()))]",
          "source": "src/Music-Abc.html#Music",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Music",
          "normalized": "Music[Note(MultiRest(Barline()))]",
          "package": "abcnotation",
          "partial": "Music",
          "signature": "Music[Note(MultiRest(Barline()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Music"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Natural",
          "package": "abcnotation",
          "signature": "Natural",
          "source": "src/Music-Abc.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Natural",
          "package": "abcnotation",
          "partial": "Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Notes",
          "package": "abcnotation",
          "signature": "Notes String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Notes",
          "package": "abcnotation",
          "partial": "Notes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Octave",
          "package": "abcnotation",
          "signature": "Octave",
          "source": "src/Music-Abc.html#Octave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Octave",
          "package": "abcnotation",
          "partial": "Octave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Open",
          "package": "abcnotation",
          "signature": "Open",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Open",
          "package": "abcnotation",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Origin",
          "package": "abcnotation",
          "signature": "Origin String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Origin",
          "package": "abcnotation",
          "partial": "Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Parts",
          "package": "abcnotation",
          "signature": "Parts",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Parts",
          "package": "abcnotation",
          "partial": "Parts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Pitch",
          "package": "abcnotation",
          "signature": "Pitch",
          "source": "src/Music-Abc.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Pitch",
          "package": "abcnotation",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Plus",
          "package": "abcnotation",
          "signature": "Plus",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Plus",
          "package": "abcnotation",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "ReferenceNumber",
          "package": "abcnotation",
          "signature": "ReferenceNumber Integer",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "ReferenceNumber",
          "package": "abcnotation",
          "partial": "Reference Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:ReferenceNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Repeat",
          "package": "abcnotation",
          "signature": "Repeat Int Bool Bool",
          "source": "src/Music-Abc.html#Barline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Repeat",
          "package": "abcnotation",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Rhythm",
          "package": "abcnotation",
          "signature": "Rhythm String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Rhythm",
          "package": "abcnotation",
          "partial": "Rhythm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Rhythm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Roll",
          "package": "abcnotation",
          "signature": "Roll",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Roll",
          "package": "abcnotation",
          "partial": "Roll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Segno",
          "package": "abcnotation",
          "signature": "Segno",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Segno",
          "package": "abcnotation",
          "partial": "Segno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Segno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Sharp",
          "package": "abcnotation",
          "signature": "Sharp",
          "source": "src/Music-Abc.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Sharp",
          "package": "abcnotation",
          "partial": "Sharp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Sharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Shortphrase",
          "package": "abcnotation",
          "signature": "Shortphrase",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Shortphrase",
          "package": "abcnotation",
          "partial": "Shortphrase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Shortphrase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Slide",
          "package": "abcnotation",
          "signature": "Slide",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Slide",
          "package": "abcnotation",
          "partial": "Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Snap",
          "package": "abcnotation",
          "signature": "Snap",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Snap",
          "package": "abcnotation",
          "partial": "Snap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Snap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Source",
          "package": "abcnotation",
          "signature": "Source String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Source",
          "package": "abcnotation",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "SymbolLine",
          "package": "abcnotation",
          "signature": "SymbolLine Symbol",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "SymbolLine",
          "package": "abcnotation",
          "partial": "Symbol Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:SymbolLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Tempo",
          "package": "abcnotation",
          "signature": "Tempo Tempo",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Tempo",
          "package": "abcnotation",
          "partial": "Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Tempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Tenuto",
          "package": "abcnotation",
          "signature": "Tenuto",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Tenuto",
          "package": "abcnotation",
          "partial": "Tenuto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Tenuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Thumb",
          "package": "abcnotation",
          "signature": "Thumb",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Thumb",
          "package": "abcnotation",
          "partial": "Thumb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Thumb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Transcription",
          "package": "abcnotation",
          "signature": "Transcription String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Transcription",
          "package": "abcnotation",
          "partial": "Transcription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Transcription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Trill",
          "package": "abcnotation",
          "signature": "Trill",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Trill",
          "package": "abcnotation",
          "partial": "Trill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Trill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TrillBegin",
          "package": "abcnotation",
          "signature": "TrillBegin",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TrillBegin",
          "package": "abcnotation",
          "partial": "Trill Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:TrillBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TrillEnd",
          "package": "abcnotation",
          "signature": "TrillEnd",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TrillEnd",
          "package": "abcnotation",
          "partial": "Trill End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:TrillEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Abc tune.\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "Tune",
          "package": "abcnotation",
          "signature": "Tune AbcTune",
          "source": "src/Music-Abc.html#Element",
          "type": "function"
        },
        "index": {
          "description": "An Abc tune",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Tune",
          "package": "abcnotation",
          "partial": "Tune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Tune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TuneHeader",
          "package": "abcnotation",
          "signature": "TuneHeader [Information]",
          "source": "src/Music-Abc.html#TuneHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TuneHeader",
          "normalized": "TuneHeader[Information]",
          "package": "abcnotation",
          "partial": "Tune Header",
          "signature": "TuneHeader[Information]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:TuneHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "TuneTitle",
          "package": "abcnotation",
          "signature": "TuneTitle String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TuneTitle",
          "package": "abcnotation",
          "partial": "Tune Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:TuneTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Turn",
          "package": "abcnotation",
          "signature": "Turn",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Turn",
          "package": "abcnotation",
          "partial": "Turn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Turn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Turnx",
          "package": "abcnotation",
          "signature": "Turnx",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Turnx",
          "package": "abcnotation",
          "partial": "Turnx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Turnx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeset text (2.2.3).\n\u003c/p\u003e",
          "module": "Music.Abc",
          "name": "TypesetText",
          "package": "abcnotation",
          "signature": "TypesetText String",
          "source": "src/Music-Abc.html#Element",
          "type": "function"
        },
        "index": {
          "description": "Typeset text",
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "TypesetText",
          "package": "abcnotation",
          "partial": "Typeset Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:TypesetText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "UnitNoteLength",
          "package": "abcnotation",
          "signature": "UnitNoteLength Duration",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "UnitNoteLength",
          "package": "abcnotation",
          "partial": "Unit Note Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:UnitNoteLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Upbow",
          "package": "abcnotation",
          "signature": "Upbow",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Upbow",
          "package": "abcnotation",
          "partial": "Upbow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Upbow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Uppermordent",
          "package": "abcnotation",
          "signature": "Uppermordent",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Uppermordent",
          "package": "abcnotation",
          "partial": "Uppermordent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Uppermordent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Voice",
          "package": "abcnotation",
          "signature": "Voice VoiceProps",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Voice",
          "package": "abcnotation",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Voice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Wedge",
          "package": "abcnotation",
          "signature": "Wedge",
          "source": "src/Music-Abc.html#Decoration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Wedge",
          "package": "abcnotation",
          "partial": "Wedge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Wedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "Words",
          "package": "abcnotation",
          "signature": "Words String",
          "source": "src/Music-Abc.html#Information",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "Words",
          "package": "abcnotation",
          "partial": "Words",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:Words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "getDuration",
          "package": "abcnotation",
          "signature": "Rational",
          "source": "src/Music-Abc.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "getDuration",
          "package": "abcnotation",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:getDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "getMultiRest",
          "package": "abcnotation",
          "signature": "Int",
          "source": "src/Music-Abc.html#MultiRest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "getMultiRest",
          "package": "abcnotation",
          "partial": "Multi Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:getMultiRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "getOctave",
          "package": "abcnotation",
          "signature": "Int",
          "source": "src/Music-Abc.html#Octave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "getOctave",
          "package": "abcnotation",
          "partial": "Octave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:getOctave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "getPitch",
          "package": "abcnotation",
          "signature": "(PitchClass, Accidental, Octave)",
          "source": "src/Music-Abc.html#Pitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "getPitch",
          "normalized": "(PitchClass,Accidental,Octave)",
          "package": "abcnotation",
          "partial": "Pitch",
          "signature": "(PitchClass,Accidental,Octave)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:getPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "readAbc",
          "package": "abcnotation",
          "signature": "String -\u003e AbcFile",
          "source": "src/Music-Abc.html#readAbc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "readAbc",
          "normalized": "String-\u003eAbcFile",
          "package": "abcnotation",
          "partial": "Abc",
          "signature": "String-\u003eAbcFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:readAbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Abc",
          "name": "showAbc",
          "package": "abcnotation",
          "signature": "AbcFile -\u003e String",
          "source": "src/Music-Abc.html#showAbc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Abc",
          "module": "Music.Abc",
          "name": "showAbc",
          "normalized": "AbcFile-\u003eString",
          "package": "abcnotation",
          "partial": "Abc",
          "signature": "AbcFile-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/abcnotation/docs/Music-Abc.html#v:showAbc"
      }
    }
  ]
]