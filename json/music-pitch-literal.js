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
        "word": "music-pitch-literal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Pitch.Literal",
          "name": "Literal",
          "package": "music-pitch-literal",
          "source": "src/Music-Pitch-Literal.html",
          "type": "module"
        },
        "index": {
          "description": "Provides overloaded pitch literals",
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "Literal",
          "package": "music-pitch-literal",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "IsPitch",
          "package": "music-pitch-literal",
          "source": "src/Music-Pitch-Literal.html#IsPitch",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "IsPitch",
          "package": "music-pitch-literal",
          "partial": "Is Pitch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#t:IsPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePitchL\u003c/a\u003e\u003c/code\u003e types is used to encode a pitch literal. You don't need to\n think about this type unless you are implementing \u003ccode\u003e\u003ca\u003eIsPitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is defined as \u003ccode\u003e(class, alteration, octave)\u003c/code\u003e, where\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eclass\u003c/code\u003e      is a pitch class number in \u003ccode\u003e[0..6]\u003c/code\u003e, starting from C.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ealteration\u003c/code\u003e is the number of semitones, i.e. 0 is natural, 1 for sharp 2 for double sharp, -1 for flat and -2 for double flat.\n       Alteration is in \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e because some pitch representations differ between explicit and explicit accidentals, i.e. a diatonic\n       pitch type may assume \u003ccode\u003e(0,Nothing,4)\u003c/code\u003e to mean C sharp rather than C.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eoctave\u003c/code\u003e     is octave number in scientific pitch notation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMiddle C is represented by the pitch literal \u003ccode\u003e(0, Nothing, 4)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Literal",
          "name": "PitchL",
          "package": "music-pitch-literal",
          "source": "src/Music-Pitch-Literal.html#PitchL",
          "type": "newtype"
        },
        "index": {
          "description": "The PitchL types is used to encode pitch literal You don need to think about this type unless you are implementing IsPitch It is defined as class alteration octave where class is pitch class number in starting from alteration is the number of semitones i.e is natural for sharp for double sharp for flat and for double flat Alteration is in Maybe because some pitch representations differ between explicit and explicit accidentals i.e diatonic pitch type may assume Nothing to mean sharp rather than octave is octave number in scientific pitch notation Middle is represented by the pitch literal Nothing",
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "PitchL",
          "package": "music-pitch-literal",
          "partial": "Pitch",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#t:PitchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "PitchL",
          "package": "music-pitch-literal",
          "signature": "PitchL",
          "source": "src/Music-Pitch-Literal.html#PitchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "PitchL",
          "package": "music-pitch-literal",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:PitchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "a",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "a",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "a'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#a%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "a'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "a''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#a%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "a''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "a_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#a_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "a_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "a__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#a__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "a__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ab",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ab",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ab'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ab%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ab'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ab''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ab%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ab''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ab_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ab_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ab_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ab__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ab__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ab__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "as",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#as",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "as",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "as'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#as%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "as'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "as''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#as%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "as''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "as_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#as_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "as_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "as__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#as__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "as__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "b",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "b",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "b'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#b%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "b'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "b''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#b%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "b''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "b_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#b_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "b_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "b__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#b__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "b__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bb",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bb",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bb'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bb%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bb'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bb''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bb%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bb''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bb_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bb_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bb_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bb__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bb__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bb__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bs",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bs",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bs'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bs'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bs''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bs%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bs''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bs_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bs_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bs_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "bs__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#bs__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "bs__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "c",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "c",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "c'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#c%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "c'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "c''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#c%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "c''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "c_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#c_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "c_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "c__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#c__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "c__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cb",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cb",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cb'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cb%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cb'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cb''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cb%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cb''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cb_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cb_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cb_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cb__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cb__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cb__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cs",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cs",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cs'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cs'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cs''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cs%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cs''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cs_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cs_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cs_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "cs__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#cs__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "cs__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "d",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "d",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "d'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#d%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "d'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "d''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#d%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "d''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "d_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#d_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "d_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "d__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#d__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "d__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "db",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#db",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "db",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "db'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#db%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "db'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "db''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#db%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "db''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "db_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#db_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "db_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "db__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#db__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "db__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ds",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ds",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ds'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ds%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ds'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ds''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ds%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ds''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ds_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ds_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ds_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "ds__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#ds__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "ds__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "e",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#e",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "e",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "e'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#e%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "e'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "e''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#e%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "e''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "e_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#e_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "e_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "e__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#e__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "e__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "eb",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#eb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "eb",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "eb'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#eb%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "eb'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "eb''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#eb%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "eb''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "eb_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#eb_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "eb_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "eb__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#eb__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "eb__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "es",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#es",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "es",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "es'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#es%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "es'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "es''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#es%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "es''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "es_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#es_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "es_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "es__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#es__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "es__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "f",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#f",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "f",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "f'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#f%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "f'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "f''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#f%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "f''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "f_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#f_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "f_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "f__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#f__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "f__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fb",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fb",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fb'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fb%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fb'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fb''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fb%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fb''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fb_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fb_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fb_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fb__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fb__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fb__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fromPitch",
          "package": "music-pitch-literal",
          "signature": "PitchL -\u003e a",
          "source": "src/Music-Pitch-Literal.html#fromPitch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fromPitch",
          "normalized": "PitchL-\u003ea",
          "package": "music-pitch-literal",
          "partial": "Pitch",
          "signature": "PitchL-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fromPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fs",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fs",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fs'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fs'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fs''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fs%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fs''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fs_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fs_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fs_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "fs__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#fs__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "fs__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "g",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "g",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "g'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#g%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "g'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "g''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#g%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "g''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "g_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#g_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "g_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "g__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#g__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "g__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gb",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gb",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gb'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gb%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gb'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gb''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gb%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gb''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gb_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gb_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gb_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gb__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gb__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gb__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "getPitchL",
          "package": "music-pitch-literal",
          "signature": "(Int, Maybe Double, Int)",
          "source": "src/Music-Pitch-Literal.html#PitchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "getPitchL",
          "normalized": "(Int,Maybe Double,Int)",
          "package": "music-pitch-literal",
          "partial": "Pitch",
          "signature": "(Int,Maybe Double,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:getPitchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gs",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gs",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gs'",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gs%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gs'",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gs''",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gs%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gs''",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gs_",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gs_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gs_",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Literal",
          "name": "gs__",
          "package": "music-pitch-literal",
          "signature": "a",
          "source": "src/Music-Pitch-Literal.html#gs__",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Literal",
          "module": "Music.Pitch.Literal",
          "name": "gs__",
          "package": "music-pitch-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs__"
      }
    }
  ]
]