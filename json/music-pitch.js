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
        "word": "music-pitch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbsolute pitch representation.\n\u003c/p\u003e\u003cp\u003eThe canonical pitch representation is frequency in Hertz (Hz). For conversion, see\n \u003ccode\u003e\u003ca\u003eHasFrequency\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Pitch.Absolute",
          "name": "Absolute",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Absolute.html",
          "type": "module"
        },
        "index": {
          "description": "Absolute pitch representation The canonical pitch representation is frequency in Hertz Hz For conversion see HasFrequency",
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "Absolute",
          "package": "music-pitch",
          "partial": "Absolute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of pure octaves.\n\u003c/p\u003e\u003cp\u003eCents are a logarithmic representation of frequency such that\n\u003c/p\u003e\u003cpre\u003e f * (2/1) = frequency (cents f + 1200)    \n\u003c/pre\u003e",
          "module": "Music.Pitch.Absolute",
          "name": "Cents",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Absolute.html#Cents",
          "type": "data"
        },
        "index": {
          "description": "Number of pure octaves Cents are logarithmic representation of frequency such that frequency cents",
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "Cents",
          "package": "music-pitch",
          "partial": "Cents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#t:Cents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of pure fifths.\n\u003c/p\u003e\u003cp\u003eFifths are a logarithmic representation of frequency.\n\u003c/p\u003e\u003cpre\u003e f * (3/2) = frequency (fifths f + 1)    \n\u003c/pre\u003e",
          "module": "Music.Pitch.Absolute",
          "name": "Fifths",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Absolute.html#Fifths",
          "type": "data"
        },
        "index": {
          "description": "Number of pure fifths Fifths are logarithmic representation of frequency frequency fifths",
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "Fifths",
          "package": "music-pitch",
          "partial": "Fifths",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#t:Fifths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "HasFrequency",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Absolute.html#HasFrequency",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "HasFrequency",
          "package": "music-pitch",
          "partial": "Has Frequency",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#t:HasFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute frequency in Hertz.    \n\u003c/p\u003e",
          "module": "Music.Pitch.Absolute",
          "name": "Hertz",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Absolute.html#Hertz",
          "type": "newtype"
        },
        "index": {
          "description": "Absolute frequency in Hertz",
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "Hertz",
          "package": "music-pitch",
          "partial": "Hertz",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#t:Hertz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "Hertz",
          "package": "music-pitch",
          "signature": "Hertz",
          "source": "src/Music-Pitch-Absolute.html#Hertz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "Hertz",
          "package": "music-pitch",
          "partial": "Hertz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#v:Hertz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "cents",
          "package": "music-pitch",
          "signature": "a -\u003e Cents",
          "source": "src/Music-Pitch-Absolute.html#cents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "cents",
          "normalized": "a-\u003eCents",
          "package": "music-pitch",
          "signature": "a-\u003eCents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#v:cents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "fifths",
          "package": "music-pitch",
          "signature": "a -\u003e Fifths",
          "source": "src/Music-Pitch-Absolute.html#fifths",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "fifths",
          "normalized": "a-\u003eFifths",
          "package": "music-pitch",
          "signature": "a-\u003eFifths",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#v:fifths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "frequency",
          "package": "music-pitch",
          "signature": "a -\u003e Hertz",
          "source": "src/Music-Pitch-Absolute.html#frequency",
          "type": "method"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "frequency",
          "normalized": "a-\u003eHertz",
          "package": "music-pitch",
          "signature": "a-\u003eHertz",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#v:frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Absolute",
          "name": "getHertz",
          "package": "music-pitch",
          "signature": "Double",
          "source": "src/Music-Pitch-Absolute.html#Hertz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Absolute",
          "module": "Music.Pitch.Absolute",
          "name": "getHertz",
          "package": "music-pitch",
          "partial": "Hertz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Absolute.html#v:getHertz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Pitch.Intonation",
          "name": "Intonation",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Intonation.html",
          "type": "module"
        },
        "index": {
          "description": "Provides overloaded pitch literals",
          "hierarchy": "Music Pitch Intonation",
          "module": "Music.Pitch.Intonation",
          "name": "Intonation",
          "package": "music-pitch",
          "partial": "Intonation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Intonation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Intonation",
          "name": "Intonation",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Intonation.html#Intonation",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Pitch Intonation",
          "module": "Music.Pitch.Intonation",
          "name": "Intonation",
          "package": "music-pitch",
          "partial": "Intonation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Intonation.html#t:Intonation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Intonation",
          "name": "pure",
          "package": "music-pitch",
          "signature": "Intonation a",
          "source": "src/Music-Pitch-Intonation.html#pure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Intonation",
          "module": "Music.Pitch.Intonation",
          "name": "pure",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Intonation.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Intonation",
          "name": "pythagorean",
          "package": "music-pitch",
          "signature": "Intonation a",
          "source": "src/Music-Pitch-Intonation.html#pythagorean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Intonation",
          "module": "Music.Pitch.Intonation",
          "name": "pythagorean",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Intonation.html#v:pythagorean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Intonation",
          "name": "twelveToneEqual",
          "package": "music-pitch",
          "signature": "Intonation a",
          "source": "src/Music-Pitch-Intonation.html#twelveToneEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Intonation",
          "module": "Music.Pitch.Intonation",
          "name": "twelveToneEqual",
          "package": "music-pitch",
          "partial": "Tone Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Intonation.html#v:twelveToneEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Accidental",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Accidental.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Accidental",
          "package": "music-pitch",
          "partial": "Accidental",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Accidental",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Accidental.html#Accidental",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Accidental",
          "package": "music-pitch",
          "partial": "Accidental",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#t:Accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can be altered.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Alterable",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Accidental.html#Alterable",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can be altered",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "Alterable",
          "package": "music-pitch",
          "partial": "Alterable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#t:Alterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe double flat accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "doubleFlat",
          "package": "music-pitch",
          "signature": "Accidental",
          "source": "src/Music-Pitch-Relative-Accidental.html#doubleFlat",
          "type": "function"
        },
        "index": {
          "description": "The double flat accidental",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "doubleFlat",
          "package": "music-pitch",
          "partial": "Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:doubleFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe double sharp accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "doubleSharp",
          "package": "music-pitch",
          "signature": "Accidental",
          "source": "src/Music-Pitch-Relative-Accidental.html#doubleSharp",
          "type": "function"
        },
        "index": {
          "description": "The double sharp accidental",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "doubleSharp",
          "package": "music-pitch",
          "partial": "Sharp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:doubleSharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe flat accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "flat",
          "package": "music-pitch",
          "signature": "Accidental",
          "source": "src/Music-Pitch-Relative-Accidental.html#flat",
          "type": "function"
        },
        "index": {
          "description": "The flat accidental",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "flat",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the given pitch by one.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "flatten",
          "package": "music-pitch",
          "signature": "a -\u003e a",
          "source": "src/Music-Pitch-Relative-Accidental.html#flatten",
          "type": "method"
        },
        "index": {
          "description": "Decrease the given pitch by one",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "flatten",
          "normalized": "a-\u003ea",
          "package": "music-pitch",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe natural accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "natural",
          "package": "music-pitch",
          "signature": "Accidental",
          "source": "src/Music-Pitch-Relative-Accidental.html#natural",
          "type": "function"
        },
        "index": {
          "description": "The natural accidental",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "natural",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sharp accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "sharp",
          "package": "music-pitch",
          "signature": "Accidental",
          "source": "src/Music-Pitch-Relative-Accidental.html#sharp",
          "type": "function"
        },
        "index": {
          "description": "The sharp accidental",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "sharp",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:sharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the given pitch by one.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "sharpen",
          "package": "music-pitch",
          "signature": "a -\u003e a",
          "source": "src/Music-Pitch-Relative-Accidental.html#sharpen",
          "type": "method"
        },
        "index": {
          "description": "Increase the given pitch by one",
          "hierarchy": "Music Pitch Relative Accidental",
          "module": "Music.Pitch.Relative.Accidental",
          "name": "sharpen",
          "normalized": "a-\u003ea",
          "package": "music-pitch",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Accidental.html#v:sharpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "Interval",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Interval.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "Interval",
          "package": "music-pitch",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval is the difference between two pitches, incuding negative\n intervals.\n\u003c/p\u003e\u003cp\u003eIntervals and pitches can be added using \u003ccode\u003e\u003ca\u003e.+^\u003c/a\u003e\u003c/code\u003e. To get the interval between\n two pitches, use \u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e c .+^ minor third == eb\n f .-. c           == perfect fourth\n\u003c/pre\u003e\u003cp\u003eAdding intervals preserves spelling. For example:\n\u003c/p\u003e\u003cpre\u003e m3 ^+^ _M3 = _P5\n d5 ^+^ _M6 = m10\n\u003c/pre\u003e\u003cp\u003eThe scalar type of intervals are \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003e^*\u003c/a\u003e\u003c/code\u003e to stack intervals\n of a certain type on top of each other. For example \u003ccode\u003e_P5 ^* 2\u003c/code\u003e is a stack\n of 2 perfect fifths. The \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance works as expected for \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enegate\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e, and arbitrarily uses minor seconds for multiplication. If you\n find yourself \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e on intervals, consider switching to \u003ccode\u003e\u003ca\u003e*^\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003enormalized\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIntervals are generally described in terms of \u003ccode\u003e\u003ca\u003eQuality\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e. To\n construct an interval, use the \u003ccode\u003e\u003ca\u003einterval\u003c/a\u003e\u003c/code\u003e constructor, the utility\n constructors \u003ccode\u003e\u003ca\u003emajor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaugmented\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ediminished\u003c/a\u003e\u003c/code\u003e, or the\n interval literals:\n\u003c/p\u003e\u003cpre\u003e m5  == minor   fifth    == interval Minor   5\n _P4 == perfect fourth   == interval Perfect 5\n d5  == diminished fifth == diminish (perfect fifth)\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "Interval",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "An interval is the difference between two pitches incuding negative intervals Intervals and pitches can be added using To get the interval between two pitches use minor third eb perfect fourth Adding intervals preserves spelling For example m3 M3 P5 d5 M6 m10 The scalar type of intervals are Integer using to stack intervals of certain type on top of each other For example P5 is stack of perfect fifths The Num instance works as expected for negate and abs and arbitrarily uses minor seconds for multiplication If you find yourself or signum on intervals consider switching to or normalized Intervals are generally described in terms of Quality and Number To construct an interval use the interval constructor the utility constructors major minor augmented and diminished or the interval literals m5 minor fifth interval Minor P4 perfect fourth interval Perfect d5 diminished fifth diminish perfect fifth",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "Interval",
          "package": "music-pitch",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "Spelling",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Interval.html#Spelling",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "Spelling",
          "package": "music-pitch",
          "partial": "Spelling",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#t:Spelling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A1",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A1",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A2",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A2",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A3",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A3",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A4",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A4",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A5",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A5",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A6",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A6",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A7",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A7",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A8",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_A8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_A8",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_A8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M2",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_M2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M2",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_M2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M3",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_M3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M3",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_M3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M6",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_M6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M6",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_M6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M7",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_M7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_M7",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_M7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P1",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_P1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P1",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_P1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P4",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_P4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P4",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_P4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P5",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_P5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P5",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_P5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P8",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#_P8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "_P8",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:_P8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an augmented interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "augmented",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#augmented",
          "type": "function"
        },
        "index": {
          "description": "Creates an augmented interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "augmented",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:augmented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d1",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d1",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d2",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d2",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d3",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d3",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d4",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d4",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d5",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d5",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d6",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d6",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d7",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d7",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "d8",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#d8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "d8",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:d8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a diminished interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "diminished",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#diminished",
          "type": "function"
        },
        "index": {
          "description": "Creates diminished interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "diminished",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:diminished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a doubly augmented interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "doublyAugmented",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#doublyAugmented",
          "type": "function"
        },
        "index": {
          "description": "Creates doubly augmented interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "doublyAugmented",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "partial": "Augmented",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:doublyAugmented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a doubly diminished interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "doublyDiminished",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#doublyDiminished",
          "type": "function"
        },
        "index": {
          "description": "Creates doubly diminished interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "doublyDiminished",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "partial": "Diminished",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:doublyDiminished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "flats",
          "package": "music-pitch",
          "signature": "Semitones -\u003e Number",
          "source": "src/Music-Pitch-Relative-Interval.html#flats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "flats",
          "normalized": "Semitones-\u003eNumber",
          "package": "music-pitch",
          "signature": "Semitones-\u003eNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:flats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an interval from a quality and number.\n\u003c/p\u003e\u003cp\u003eIf given \u003ccode\u003e\u003ca\u003ePerfect\u003c/a\u003e\u003c/code\u003e with an imperfect number (such as 3 or 7) a major interval is\n returned. If given \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e with a perfect number (such as 5), constructs\n a perfect or diminished interval respectively.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "interval",
          "package": "music-pitch",
          "signature": "Quality -\u003e Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#interval",
          "type": "function"
        },
        "index": {
          "description": "Creates an interval from quality and number If given Perfect with an imperfect number such as or major interval is returned If given Major or Minor with perfect number such as constructs perfect or diminished interval respectively",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "interval",
          "normalized": "Quality-\u003eNumber-\u003eInterval",
          "package": "music-pitch",
          "signature": "Quality-\u003eNumber-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "interval'",
          "package": "music-pitch",
          "signature": "Int -\u003e Int -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#interval%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "interval'",
          "normalized": "Int-\u003eInt-\u003eInterval",
          "package": "music-pitch",
          "signature": "Int-\u003eInt-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:interval-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "intervalDiff",
          "package": "music-pitch",
          "signature": "Interval -\u003e Int",
          "source": "src/Music-Pitch-Relative-Interval.html#intervalDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "intervalDiff",
          "normalized": "Interval-\u003eInt",
          "package": "music-pitch",
          "partial": "Diff",
          "signature": "Interval-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:intervalDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntervallic inversion.\n\u003c/p\u003e\u003cp\u003eThe inversion of a simple interval is determined by the following rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The interval number and the number of its inversion always add up to nine\n   (i.e. 4 + 5 = 9).\n\u003c/li\u003e\u003cli\u003e The inversion of a major interval is a minor interval, and vice versa;\n   the inversion of a perfect interval is also perfect; the inversion of an\n   augmented interval is a diminished interval, and vice versa; the\n   inversion of a doubly augmented interval is a doubly diminished interval,\n   and vice versa.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe inversion of any compound interval is always the same as the inversion\n of the simple interval from which it is compounded, i.e.:\n\u003c/p\u003e\u003cpre\u003e invert = simple . negate\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "invert",
          "package": "music-pitch",
          "signature": "Interval -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#invert",
          "type": "function"
        },
        "index": {
          "description": "Intervallic inversion The inversion of simple interval is determined by the following rules The interval number and the number of its inversion always add up to nine i.e The inversion of major interval is minor interval and vice versa the inversion of perfect interval is also perfect the inversion of an augmented interval is diminished interval and vice versa the inversion of doubly augmented interval is doubly diminished interval and vice versa The inversion of any compound interval is always the same as the inversion of the simple interval from which it is compounded i.e invert simple negate",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "invert",
          "normalized": "Interval-\u003eInterval",
          "package": "music-pitch",
          "signature": "Interval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given interval is compound.\n\u003c/p\u003e\u003cp\u003eA compound interval is either a negative interval, or a positive interval spanning\n more than octave.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isCompound",
          "package": "music-pitch",
          "signature": "Interval -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Interval.html#isCompound",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given interval is compound compound interval is either negative interval or positive interval spanning more than octave",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isCompound",
          "normalized": "Interval-\u003eBool",
          "package": "music-pitch",
          "partial": "Compound",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:isCompound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given interval is negative.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isNegative",
          "package": "music-pitch",
          "signature": "Interval -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Interval.html#isNegative",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given interval is negative",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isNegative",
          "normalized": "Interval-\u003eBool",
          "package": "music-pitch",
          "partial": "Negative",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:isNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given interval is positive.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isPositive",
          "package": "music-pitch",
          "signature": "Interval -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Interval.html#isPositive",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given interval is positive",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isPositive",
          "normalized": "Interval-\u003eBool",
          "package": "music-pitch",
          "partial": "Positive",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:isPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given interval is simple.\n\u003c/p\u003e\u003cp\u003eA simple interval is an positive interval spanning less than one octave.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isSimple",
          "package": "music-pitch",
          "signature": "Interval -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Interval.html#isSimple",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given interval is simple simple interval is an positive interval spanning less than one octave",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "isSimple",
          "normalized": "Interval-\u003eBool",
          "package": "music-pitch",
          "partial": "Simple",
          "signature": "Interval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:isSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "m2",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#m2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "m2",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:m2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "m3",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#m3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "m3",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:m3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "m6",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#m6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "m6",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:m6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "m7",
          "package": "music-pitch",
          "signature": "Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#m7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "m7",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:m7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a major interval.\n   If given a perfect number, constructs a perfect interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "major",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#major",
          "type": "function"
        },
        "index": {
          "description": "Creates major interval If given perfect number constructs perfect interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "major",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a minor interval.\n   If given a perfect number, constructs a diminished interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "minor",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#minor",
          "type": "function"
        },
        "index": {
          "description": "Creates minor interval If given perfect number constructs diminished interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "minor",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number portion of an interval.\n\u003c/p\u003e\u003cp\u003eThe interval number is negative if and only if the interval is negative.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003equality\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eoctaves\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esemitones\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "number",
          "package": "music-pitch",
          "signature": "Interval -\u003e Number",
          "source": "src/Music-Pitch-Relative-Interval.html#number",
          "type": "function"
        },
        "index": {
          "description": "Returns the number portion of an interval The interval number is negative if and only if the interval is negative See also quality octaves and semitones",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "number",
          "normalized": "Interval-\u003eNumber",
          "package": "music-pitch",
          "signature": "Interval-\u003eNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Music.Pitch.Relative.Interval\",\"Music.Pitch.Relative.Number\"]",
          "name": "octave",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#octave",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:octave\",\"http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:octave\"]"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "octave",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a perfect interval.\n   If given an inperfect number, constructs a major interval.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "perfect",
          "package": "music-pitch",
          "signature": "Number -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#perfect",
          "type": "function"
        },
        "index": {
          "description": "Creates perfect interval If given an inperfect number constructs major interval",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "perfect",
          "normalized": "Number-\u003eInterval",
          "package": "music-pitch",
          "signature": "Number-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:perfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate a compound interval into octaves and a simple interval.\n\u003c/p\u003e\u003cpre\u003e (perfect octave)^*x + y = z  iff  (x, y) = separate z\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "separate",
          "package": "music-pitch",
          "signature": "Interval -\u003e (Octaves, Interval)",
          "source": "src/Music-Pitch-Relative-Interval.html#separate",
          "type": "function"
        },
        "index": {
          "description": "Separate compound interval into octaves and simple interval perfect octave iff separate",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "separate",
          "normalized": "Interval-\u003e(Octaves,Interval)",
          "package": "music-pitch",
          "signature": "Interval-\u003e(Octaves,Interval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:separate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "sharps",
          "package": "music-pitch",
          "signature": "Semitones -\u003e Number",
          "source": "src/Music-Pitch-Relative-Interval.html#sharps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "sharps",
          "normalized": "Semitones-\u003eNumber",
          "package": "music-pitch",
          "signature": "Semitones-\u003eNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:sharps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the simple part of an interval.\n\u003c/p\u003e\u003cpre\u003e (perfect octave)^*x + y = z  iff  y = simple z\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Interval",
          "name": "simple",
          "package": "music-pitch",
          "signature": "Interval -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#simple",
          "type": "function"
        },
        "index": {
          "description": "Returns the simple part of an interval perfect octave iff simple",
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "simple",
          "normalized": "Interval-\u003eInterval",
          "package": "music-pitch",
          "signature": "Interval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Interval",
          "name": "spell",
          "package": "music-pitch",
          "signature": "Spelling -\u003e a -\u003e Interval",
          "source": "src/Music-Pitch-Relative-Interval.html#spell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Interval",
          "module": "Music.Pitch.Relative.Interval",
          "name": "spell",
          "normalized": "Spelling-\u003ea-\u003eInterval",
          "package": "music-pitch",
          "signature": "Spelling-\u003ea-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Interval.html#v:spell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "Name",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Name.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "Name",
          "package": "music-pitch",
          "partial": "Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "Name",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "Name",
          "package": "music-pitch",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "A",
          "package": "music-pitch",
          "signature": "A",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "A",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "B",
          "package": "music-pitch",
          "signature": "B",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "B",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "C",
          "package": "music-pitch",
          "signature": "C",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "C",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "D",
          "package": "music-pitch",
          "signature": "D",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "D",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "E",
          "package": "music-pitch",
          "signature": "E",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "E",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "F",
          "package": "music-pitch",
          "signature": "F",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "F",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Name",
          "name": "G",
          "package": "music-pitch",
          "signature": "G",
          "source": "src/Music-Pitch-Relative-Name.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Name",
          "module": "Music.Pitch.Relative.Name",
          "name": "G",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Name.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "Number",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Number.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "Number",
          "package": "music-pitch",
          "partial": "Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number portion of an interval (i.e. second, third, etc).\n\u003c/p\u003e\u003cp\u003eNote that the interval number is always one step larger than number of steps spanned by\n the interval (i.e. a third spans two diatonic steps). Thus \u003ccode\u003enumber\u003c/code\u003e does not distribute\n over addition:\n\u003c/p\u003e\u003cpre\u003e number (a + b) = number a + number b - 1\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Number",
          "name": "Number",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Number.html#Number",
          "type": "data"
        },
        "index": {
          "description": "The number portion of an interval i.e second third etc Note that the interval number is always one step larger than number of steps spanned by the interval i.e third spans two diatonic steps Thus number does not distribute over addition number number number",
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "Number",
          "package": "music-pitch",
          "partial": "Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "fifth",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#fifth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "fifth",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:fifth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "fourth",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#fourth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "fourth",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:fourth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "prime",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#prime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "prime",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:prime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "second",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "second",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "seventh",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#seventh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "seventh",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:seventh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "sixth",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#sixth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "sixth",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:sixth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "third",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#third",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "third",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:third"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Number",
          "name": "unison",
          "package": "music-pitch",
          "signature": "Number",
          "source": "src/Music-Pitch-Relative-Number.html#unison",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Number",
          "module": "Music.Pitch.Relative.Number",
          "name": "unison",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Number.html#v:unison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Pitch.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "partial": "Pitch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard pitch representation.\n\u003c/p\u003e\u003cp\u003eIntervals and pitches can be added using \u003ccode\u003e\u003ca\u003e.+^\u003c/a\u003e\u003c/code\u003e. To get the interval between\n two pitches, use \u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePitches are normally entered using the following literals.\n\u003c/p\u003e\u003cpre\u003e c d e f g a b\n\u003c/pre\u003e\u003cp\u003eNotes with accidentals can be written by adding the \u003ccode\u003es\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e suffices\n (or two for double sharps and flats).\n\u003c/p\u003e\u003cpre\u003e cs, ds, es ...    -- sharp\n cb, db, eb ...    -- flat\n css, dss, ess ... -- double sharp\n cbb, dbb, ebb ... -- double flat\n\u003c/pre\u003e\u003cp\u003eThere is also a convenience syntax for entering pitches one octave up or\n down, using \u003ccode\u003e'\u003c/code\u003e and \u003ccode\u003e_\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cpre\u003e g a b c'\n d c b_ c\n\u003c/pre\u003e\u003cp\u003eBecause of some overloading magic, we can actually write \u003ccode\u003esharp\u003c/code\u003e and\n \u003ccode\u003eflat\u003c/code\u003e as \u003cem\u003epostfix\u003c/em\u003e functions. This gives a better read:\n\u003c/p\u003e\u003cpre\u003e cs == c sharp\n db == c flat\n\u003c/pre\u003e\u003cp\u003eYou can of course use typical functional transformation of pitch as well.\n For example \u003ccode\u003e\u003ca\u003esharpen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eflatten\u003c/a\u003e\u003c/code\u003e are the ordinary (prefix) versions of\n \u003ccode\u003e\u003ca\u003esharp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eflat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e sharpen c             == c sharp       == cs\n flatten d             == d flat        == ds\n (sharpen . sharpen) c == c doubleSharp == css\n (flatten . flatten) d == d doubleFlat  == dss\n\u003c/pre\u003e\u003cp\u003eNote that there is no guarantee that your pitch representation use\n enharmonic equivalence, so \u003ccode\u003ecs == db\u003c/code\u003e may or may not hold.\n\u003c/p\u003e\u003cpre\u003e c .+^ minor third == eb\n f .-. c           == perfect fourth\n\u003c/pre\u003e\u003cp\u003ePitches are described by name, accidental and octave number.\n\u003c/p\u003e\u003cpre\u003e c   == fromIntegral 0\n _P4 == perfect fourth   == interval Perfect 5\n d5  == diminished fifth == diminish (perfect fifth)\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Pitch.html#Pitch",
          "type": "data"
        },
        "index": {
          "description": "Standard pitch representation Intervals and pitches can be added using To get the interval between two pitches use Pitches are normally entered using the following literals Notes with accidentals can be written by adding the or suffices or two for double sharps and flats cs ds es sharp cb db eb flat css dss ess double sharp cbb dbb ebb double flat There is also convenience syntax for entering pitches one octave up or down using and respectively Because of some overloading magic we can actually write sharp and flat as postfix functions This gives better read cs sharp db flat You can of course use typical functional transformation of pitch as well For example sharpen and flatten are the ordinary prefix versions of sharp and flat sharpen sharp cs flatten flat ds sharpen sharpen doubleSharp css flatten flatten doubleFlat dss Note that there is no guarantee that your pitch representation use enharmonic equivalence so cs db may or may not hold minor third eb perfect fourth Pitches are described by name accidental and octave number fromIntegral P4 perfect fourth interval Perfect d5 diminished fifth diminish perfect fifth",
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "partial": "Pitch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#t:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the accidental of a pitch.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eoctaves\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esteps\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esemitones\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "accidental",
          "package": "music-pitch",
          "signature": "Pitch -\u003e Accidental",
          "source": "src/Music-Pitch-Relative-Pitch.html#accidental",
          "type": "function"
        },
        "index": {
          "description": "Returns the accidental of pitch See also octaves and steps and semitones",
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "accidental",
          "normalized": "Pitch-\u003eAccidental",
          "package": "music-pitch",
          "signature": "Pitch-\u003eAccidental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#v:accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is just the identity function, but is useful to fix the type of \u003ccode\u003e\u003ca\u003ePitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "asPitch",
          "package": "music-pitch",
          "signature": "Pitch -\u003e Pitch",
          "source": "src/Music-Pitch-Relative-Pitch.html#asPitch",
          "type": "function"
        },
        "index": {
          "description": "This is just the identity function but is useful to fix the type of Pitch",
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "asPitch",
          "normalized": "Pitch-\u003ePitch",
          "package": "music-pitch",
          "partial": "Pitch",
          "signature": "Pitch-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#v:asPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the name of a pitch.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eoctaves\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003esteps\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esemitones\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "name",
          "package": "music-pitch",
          "signature": "Pitch -\u003e Name",
          "source": "src/Music-Pitch-Relative-Pitch.html#name",
          "type": "function"
        },
        "index": {
          "description": "Returns the name of pitch See also octaves and steps and semitones",
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "name",
          "normalized": "Pitch-\u003eName",
          "package": "music-pitch",
          "signature": "Pitch-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a pitch from name accidental.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "pitch",
          "package": "music-pitch",
          "signature": "Name -\u003e Accidental -\u003e Pitch",
          "source": "src/Music-Pitch-Relative-Pitch.html#pitch",
          "type": "function"
        },
        "index": {
          "description": "Creates pitch from name accidental",
          "hierarchy": "Music Pitch Relative Pitch",
          "module": "Music.Pitch.Relative.Pitch",
          "name": "pitch",
          "normalized": "Name-\u003eAccidental-\u003ePitch",
          "package": "music-pitch",
          "signature": "Name-\u003eAccidental-\u003ePitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Pitch.html#v:pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Quality",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Quality.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Quality",
          "package": "music-pitch",
          "partial": "Quality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that can be augmented.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Augmentable",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Quality.html#Augmentable",
          "type": "class"
        },
        "index": {
          "description": "Class of types that can be augmented",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Augmentable",
          "package": "music-pitch",
          "partial": "Augmentable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#t:Augmentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "HasQuality",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Quality.html#HasQuality",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "HasQuality",
          "package": "music-pitch",
          "partial": "Has Quality",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#t:HasQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval quality is either perfect, major, minor, augmented, and\n diminished. This representation allows for an arbitrary number of\n augmentation or diminishions, so \u003cem\u003eaugmented\u003c/em\u003e is represented by \u003ccode\u003eAugmented\n 1\u003c/code\u003e, \u003cem\u003edoubly augmented\u003c/em\u003e by \u003ccode\u003eAugmented 2\u003c/code\u003e and so on.\n\u003c/p\u003e\u003cp\u003eThe quality of a compound interval is the quality of the simple interval on\n which it is based.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Quality",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "data"
        },
        "index": {
          "description": "Interval quality is either perfect major minor augmented and diminished This representation allows for an arbitrary number of augmentation or diminishions so augmented is represented by Augmented doubly augmented by Augmented and so on The quality of compound interval is the quality of the simple interval on which it is based",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Quality",
          "package": "music-pitch",
          "partial": "Quality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#t:Quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Augmented",
          "package": "music-pitch",
          "signature": "Augmented Integer",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Augmented",
          "package": "music-pitch",
          "partial": "Augmented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:Augmented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Diminished",
          "package": "music-pitch",
          "signature": "Diminished Integer",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Diminished",
          "package": "music-pitch",
          "partial": "Diminished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:Diminished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Major",
          "package": "music-pitch",
          "signature": "Major",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Major",
          "package": "music-pitch",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:Major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Minor",
          "package": "music-pitch",
          "signature": "Minor",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Minor",
          "package": "music-pitch",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:Minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "Perfect",
          "package": "music-pitch",
          "signature": "Perfect",
          "source": "src/Music-Pitch-Relative-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "Perfect",
          "package": "music-pitch",
          "partial": "Perfect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:Perfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the size of this interval by one.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "augment",
          "package": "music-pitch",
          "signature": "a -\u003e a",
          "source": "src/Music-Pitch-Relative-Quality.html#augment",
          "type": "method"
        },
        "index": {
          "description": "Increase the size of this interval by one",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "augment",
          "normalized": "a-\u003ea",
          "package": "music-pitch",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:augment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an offset to a quality.\n\u003c/p\u003e\u003cp\u003eThis is different for perfect and imperfect interals:\n\u003c/p\u003e\u003cp\u003eImperfect   Perfect\n      ===         ===\n -3   dd          ddd\n -2   d           dd\n -1   m           d\n  0   M           P\n  1   a           a\n  2   aa          aa\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "diffToQuality",
          "package": "music-pitch",
          "signature": "Bool -\u003e Int -\u003e Quality",
          "source": "src/Music-Pitch-Relative-Quality.html#diffToQuality",
          "type": "function"
        },
        "index": {
          "description": "Convert an offset to quality This is different for perfect and imperfect interals Imperfect Perfect dd ddd dd aa aa",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "diffToQuality",
          "normalized": "Bool-\u003eInt-\u003eQuality",
          "package": "music-pitch",
          "partial": "To Quality",
          "signature": "Bool-\u003eInt-\u003eQuality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:diffToQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the size of this interval by one.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "diminish",
          "package": "music-pitch",
          "signature": "a -\u003e a",
          "source": "src/Music-Pitch-Relative-Quality.html#diminish",
          "type": "method"
        },
        "index": {
          "description": "Decrease the size of this interval by one",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "diminish",
          "normalized": "a-\u003ea",
          "package": "music-pitch",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:diminish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "invertQuality",
          "package": "music-pitch",
          "signature": "Quality -\u003e Quality",
          "source": "src/Music-Pitch-Relative-Quality.html#invertQuality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "invertQuality",
          "normalized": "Quality-\u003eQuality",
          "package": "music-pitch",
          "partial": "Quality",
          "signature": "Quality-\u003eQuality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:invertQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given quality is \u003cem\u003eaugmented\u003c/em\u003e (including double augmented etc).\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isAugmented",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Quality.html#isAugmented",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given quality is augmented including double augmented etc",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isAugmented",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Augmented",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:isAugmented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given quality is \u003cem\u003ediminished\u003c/em\u003e (including double diminished etc).\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isDiminished",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Quality.html#isDiminished",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given quality is diminished including double diminished etc",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isDiminished",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Diminished",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:isDiminished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given quality is major.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isMajor",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Quality.html#isMajor",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given quality is major",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isMajor",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Major",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:isMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given quality is minor.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isMinor",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Quality.html#isMinor",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given quality is minor",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isMinor",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Minor",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:isMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given quality is perfect.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isPerfect",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Quality.html#isPerfect",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given quality is perfect",
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "isPerfect",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Perfect",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:isPerfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "quality",
          "package": "music-pitch",
          "signature": "a -\u003e Quality",
          "source": "src/Music-Pitch-Relative-Quality.html#quality",
          "type": "method"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "quality",
          "normalized": "a-\u003eQuality",
          "package": "music-pitch",
          "signature": "a-\u003eQuality",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "qualityToDiff",
          "package": "music-pitch",
          "signature": "Bool -\u003e Quality -\u003e Int",
          "source": "src/Music-Pitch-Relative-Quality.html#qualityToDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "qualityToDiff",
          "normalized": "Bool-\u003eQuality-\u003eInt",
          "package": "music-pitch",
          "partial": "To Diff",
          "signature": "Bool-\u003eQuality-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:qualityToDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Quality",
          "name": "replicate'",
          "package": "music-pitch",
          "signature": "a1 -\u003e a -\u003e [a]",
          "source": "src/Music-Pitch-Relative-Quality.html#replicate%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Quality",
          "module": "Music.Pitch.Relative.Quality",
          "name": "replicate'",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "music-pitch",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Quality.html#v:replicate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Semitones",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Semitones",
          "package": "music-pitch",
          "partial": "Semitones",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of intervals that has a number of \u003ccode\u003e\u003ca\u003eOctaves\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasOctaves",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#HasOctaves",
          "type": "class"
        },
        "index": {
          "description": "Class of intervals that has number of Octaves",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasOctaves",
          "package": "music-pitch",
          "partial": "Has Octaves",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:HasOctaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of intervals that can be converted to a number of \u003ccode\u003e\u003ca\u003eSemitones\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasSemitones",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#HasSemitones",
          "type": "class"
        },
        "index": {
          "description": "Class of intervals that can be converted to number of Semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasSemitones",
          "package": "music-pitch",
          "partial": "Has Semitones",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:HasSemitones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of intervals that has a number of \u003ccode\u003e\u003ca\u003eSteps\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasSteps",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#HasSteps",
          "type": "class"
        },
        "index": {
          "description": "Class of intervals that has number of Steps",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "HasSteps",
          "package": "music-pitch",
          "partial": "Has Steps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:HasSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval represented as a number of octaves, including negative\n intervals.\n\u003c/p\u003e\u003cpre\u003e octaves a = semitones a `div` 12\n steps   a = semitones a `mod` 12\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Octaves",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#Octaves",
          "type": "data"
        },
        "index": {
          "description": "An interval represented as number of octaves including negative intervals octaves semitones div steps semitones mod",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Octaves",
          "package": "music-pitch",
          "partial": "Octaves",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:Octaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval represented as a number of semitones, including negative\n intervals, as well as intervals larger than one octave. This representation\n does not take spelling into account, so for example a major third and a\n diminished fourth can not be distinguished.\n\u003c/p\u003e\u003cp\u003eIntervals that name a number of semitones (i.e. \u003ccode\u003e\u003ca\u003esemitone\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etritone\u003c/a\u003e\u003c/code\u003e) does\n not have an unequivocal spelling. To convert these to an interval, a\n \u003ccode\u003eSpelling\u003c/code\u003e must be provided as in:\n\u003c/p\u003e\u003cpre\u003e spell sharps tritone == augmented fourth\n spell flats  tritone == diminished fifth\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Semitones",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#Semitones",
          "type": "data"
        },
        "index": {
          "description": "An interval represented as number of semitones including negative intervals as well as intervals larger than one octave This representation does not take spelling into account so for example major third and diminished fourth can not be distinguished Intervals that name number of semitones i.e semitone tritone does not have an unequivocal spelling To convert these to an interval Spelling must be provided as in spell sharps tritone augmented fourth spell flats tritone diminished fifth",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Semitones",
          "package": "music-pitch",
          "partial": "Semitones",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:Semitones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval represented as a number of steps in the range \u003cem\u003e0 &#8804; x \u003c 12\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e octaves a = semitones a `div` 12\n steps   a = semitones a `mod` 12\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Steps",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative-Semitones.html#Steps",
          "type": "data"
        },
        "index": {
          "description": "An interval represented as number of steps in the range octaves semitones div steps semitones mod",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "Steps",
          "package": "music-pitch",
          "partial": "Steps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#t:Steps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnharmonic non-equivalence.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "(/:=)",
          "package": "music-pitch",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Semitones.html#%2F%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "Enharmonic non-equivalence",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "(/:=) /:=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "music-pitch",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:-47-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnharmonic equivalence.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "(=:=)",
          "package": "music-pitch",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Semitones.html#%3D%3A%3D",
          "type": "function"
        },
        "index": {
          "description": "Enharmonic equivalence",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "(=:=) =:=",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "music-pitch",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:-61-:-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecisely two whole tones, or four semitones.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "ditone",
          "package": "music-pitch",
          "signature": "Semitones",
          "source": "src/Music-Pitch-Relative-Semitones.html#ditone",
          "type": "function"
        },
        "index": {
          "description": "Precisely two whole tones or four semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "ditone",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:ditone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true iff the given interval spans one semitone.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isSemitone",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Semitones.html#isSemitone",
          "type": "function"
        },
        "index": {
          "description": "Returns true iff the given interval spans one semitone",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isSemitone",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Semitone",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:isSemitone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true iff the given interval spans one whole tone (two semitones).\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isTone",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Semitones.html#isTone",
          "type": "function"
        },
        "index": {
          "description": "Returns true iff the given interval spans one whole tone two semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isTone",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Tone",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:isTone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true iff the given interval spans three whole tones (six semitones).\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isTritone",
          "package": "music-pitch",
          "signature": "a -\u003e Bool",
          "source": "src/Music-Pitch-Relative-Semitones.html#isTritone",
          "type": "function"
        },
        "index": {
          "description": "Returns true iff the given interval spans three whole tones six semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "isTritone",
          "normalized": "a-\u003eBool",
          "package": "music-pitch",
          "partial": "Tritone",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:isTritone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of octaves spanned by an interval.\n\u003c/p\u003e\u003cp\u003eThe number of octaves is negative if and only if the interval is\n negative.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e octaves (perfect unison)  =  0\n octaves (d5 ^* 4)         =  2\n octaves (-_P8)            =  -1\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "octaves",
          "package": "music-pitch",
          "signature": "a -\u003e Octaves",
          "source": "src/Music-Pitch-Relative-Semitones.html#octaves",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of octaves spanned by an interval The number of octaves is negative if and only if the interval is negative Examples octaves perfect unison octaves d5 octaves P8",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "octaves",
          "normalized": "a-\u003eOctaves",
          "package": "music-pitch",
          "signature": "a-\u003eOctaves",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:octaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecisely one semitone.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "semitone",
          "package": "music-pitch",
          "signature": "Semitones",
          "source": "src/Music-Pitch-Relative-Semitones.html#semitone",
          "type": "function"
        },
        "index": {
          "description": "Precisely one semitone",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "semitone",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:semitone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of semitones spanned by an interval.\n\u003c/p\u003e\u003cp\u003eThe number of semitones is negative if and only if the interval is\n negative.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e semitones (perfect unison)  =  0\n semitones tritone           =  6\n semitones d5                =  6\n semitones (-_P8)            =  -12\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "semitones",
          "package": "music-pitch",
          "signature": "a -\u003e Semitones",
          "source": "src/Music-Pitch-Relative-Semitones.html#semitones",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of semitones spanned by an interval The number of semitones is negative if and only if the interval is negative Examples semitones perfect unison semitones tritone semitones d5 semitones P8",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "semitones",
          "normalized": "a-\u003eSemitones",
          "package": "music-pitch",
          "signature": "a-\u003eSemitones",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:semitones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of steps is always in the range \u003cem\u003e0 &#8804; x \u003c 12\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e octaves (perfect unison)  =  0\n octaves (d5 ^* 4)         =  2\n octaves (-m7)             =  -1\n\u003c/pre\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "steps",
          "package": "music-pitch",
          "signature": "a -\u003e Steps",
          "source": "src/Music-Pitch-Relative-Semitones.html#steps",
          "type": "method"
        },
        "index": {
          "description": "The number of steps is always in the range Examples octaves perfect unison octaves d5 octaves m7",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "steps",
          "normalized": "a-\u003eSteps",
          "package": "music-pitch",
          "signature": "a-\u003eSteps",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:steps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecisely one whole tone, or two semitones.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "tone",
          "package": "music-pitch",
          "signature": "Semitones",
          "source": "src/Music-Pitch-Relative-Semitones.html#tone",
          "type": "function"
        },
        "index": {
          "description": "Precisely one whole tone or two semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "tone",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:tone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrecisely three whole tones, or six semitones.\n\u003c/p\u003e",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "tritone",
          "package": "music-pitch",
          "signature": "Semitones",
          "source": "src/Music-Pitch-Relative-Semitones.html#tritone",
          "type": "function"
        },
        "index": {
          "description": "Precisely three whole tones or six semitones",
          "hierarchy": "Music Pitch Relative Semitones",
          "module": "Music.Pitch.Relative.Semitones",
          "name": "tritone",
          "package": "music-pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative-Semitones.html#v:tritone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Pitch.Relative",
          "name": "Relative",
          "package": "music-pitch",
          "source": "src/Music-Pitch-Relative.html",
          "type": "module"
        },
        "index": {
          "description": "Provides overloaded pitch literals",
          "hierarchy": "Music Pitch Relative",
          "module": "Music.Pitch.Relative",
          "name": "Relative",
          "package": "music-pitch",
          "partial": "Relative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch-Relative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "source": "src/Music-Pitch.html",
          "type": "module"
        },
        "index": {
          "description": "Provides overloaded pitch literals",
          "hierarchy": "Music Pitch",
          "module": "Music.Pitch",
          "name": "Pitch",
          "package": "music-pitch",
          "partial": "Pitch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-pitch/docs/Music-Pitch.html#"
      }
    }
  ]
]