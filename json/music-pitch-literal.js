[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "module",
        "fct-source": "src/Music-Pitch-Literal.html",
        "fct-type": "module",
        "title": "Literal"
      },
      "index": {
        "description": "Provides overloaded pitch literals",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "Literal",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#t:IsPitch",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "class",
        "fct-source": "src/Music-Pitch-Literal.html#IsPitch",
        "fct-type": "class",
        "title": "IsPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "IsPitch",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "Is Pitch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#t:PitchL",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePitchL\u003c/a\u003e\u003c/code\u003e types is used to encode a pitch literal. You don't need to\n think about this type unless you are implementing \u003ccode\u003e\u003ca\u003eIsPitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is defined as \u003ccode\u003e(class, alteration, octave)\u003c/code\u003e, where\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eclass\u003c/code\u003e      is a pitch class number in \u003ccode\u003e[0..6]\u003c/code\u003e, starting from C.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ealteration\u003c/code\u003e is the number of semitones, i.e. 0 is natural, 1 for sharp 2 for double sharp, -1 for flat and -2 for double flat.\n       Alteration is in \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e because some pitch representations differ between explicit and explicit accidentals, i.e. a diatonic\n       pitch type may assume \u003ccode\u003e(0,Nothing,4)\u003c/code\u003e to mean C sharp rather than C.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eoctave\u003c/code\u003e     is octave number in scientific pitch notation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMiddle C is represented by the pitch literal \u003ccode\u003e(0, Nothing, 4)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "newtype",
        "fct-source": "src/Music-Pitch-Literal.html#PitchL",
        "fct-type": "newtype",
        "title": "PitchL"
      },
      "index": {
        "description": "The PitchL types is used to encode pitch literal You don need to think about this type unless you are implementing IsPitch It is defined as class alteration octave where class is pitch class number in starting from alteration is the number of semitones i.e is natural for sharp for double sharp for flat and for double flat Alteration is in Maybe because some pitch representations differ between explicit and explicit accidentals i.e diatonic pitch type may assume Nothing to mean sharp rather than octave is octave number in scientific pitch notation Middle is represented by the pitch literal Nothing",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "PitchL",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "Pitch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:PitchL",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "PitchL",
        "fct-source": "src/Music-Pitch-Literal.html#PitchL",
        "fct-type": "function",
        "title": "PitchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "PitchL",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "Pitch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#a",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "a",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#a%27",
        "fct-type": "function",
        "title": "a'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "a'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#a%27%27",
        "fct-type": "function",
        "title": "a''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "a''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#a_",
        "fct-type": "function",
        "title": "a_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "a_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:a__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#a__",
        "fct-type": "function",
        "title": "a__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "a__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ab",
        "fct-type": "function",
        "title": "ab"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ab",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ab%27",
        "fct-type": "function",
        "title": "ab'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ab'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ab%27%27",
        "fct-type": "function",
        "title": "ab''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ab''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ab_",
        "fct-type": "function",
        "title": "ab_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ab_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ab__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ab__",
        "fct-type": "function",
        "title": "ab__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ab__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#as",
        "fct-type": "function",
        "title": "as"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "as",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#as%27",
        "fct-type": "function",
        "title": "as'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "as'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#as%27%27",
        "fct-type": "function",
        "title": "as''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "as''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#as_",
        "fct-type": "function",
        "title": "as_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "as_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:as__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#as__",
        "fct-type": "function",
        "title": "as__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "as__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#b",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "b",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#b%27",
        "fct-type": "function",
        "title": "b'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "b'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#b%27%27",
        "fct-type": "function",
        "title": "b''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "b''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#b_",
        "fct-type": "function",
        "title": "b_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "b_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:b__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#b__",
        "fct-type": "function",
        "title": "b__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "b__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bb",
        "fct-type": "function",
        "title": "bb"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bb",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bb%27",
        "fct-type": "function",
        "title": "bb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bb'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bb%27%27",
        "fct-type": "function",
        "title": "bb''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bb''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bb_",
        "fct-type": "function",
        "title": "bb_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bb_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bb__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bb__",
        "fct-type": "function",
        "title": "bb__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bb__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bs",
        "fct-type": "function",
        "title": "bs"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bs",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bs%27",
        "fct-type": "function",
        "title": "bs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bs'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bs%27%27",
        "fct-type": "function",
        "title": "bs''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bs''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bs_",
        "fct-type": "function",
        "title": "bs_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bs_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:bs__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#bs__",
        "fct-type": "function",
        "title": "bs__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "bs__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#c",
        "fct-type": "function",
        "title": "c"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "c",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#c%27",
        "fct-type": "function",
        "title": "c'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "c'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#c%27%27",
        "fct-type": "function",
        "title": "c''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "c''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#c_",
        "fct-type": "function",
        "title": "c_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "c_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:c__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#c__",
        "fct-type": "function",
        "title": "c__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "c__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cb",
        "fct-type": "function",
        "title": "cb"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cb",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cb%27",
        "fct-type": "function",
        "title": "cb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cb'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cb%27%27",
        "fct-type": "function",
        "title": "cb''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cb''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cb_",
        "fct-type": "function",
        "title": "cb_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cb_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cb__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cb__",
        "fct-type": "function",
        "title": "cb__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cb__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cs",
        "fct-type": "function",
        "title": "cs"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cs",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cs%27",
        "fct-type": "function",
        "title": "cs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cs'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cs%27%27",
        "fct-type": "function",
        "title": "cs''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cs''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cs_",
        "fct-type": "function",
        "title": "cs_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cs_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:cs__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#cs__",
        "fct-type": "function",
        "title": "cs__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "cs__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#d",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "d",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#d%27",
        "fct-type": "function",
        "title": "d'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "d'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#d%27%27",
        "fct-type": "function",
        "title": "d''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "d''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#d_",
        "fct-type": "function",
        "title": "d_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "d_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:d__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#d__",
        "fct-type": "function",
        "title": "d__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "d__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#db",
        "fct-type": "function",
        "title": "db"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "db",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#db%27",
        "fct-type": "function",
        "title": "db'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "db'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#db%27%27",
        "fct-type": "function",
        "title": "db''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "db''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#db_",
        "fct-type": "function",
        "title": "db_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "db_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:db__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#db__",
        "fct-type": "function",
        "title": "db__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "db__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ds",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ds",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ds%27",
        "fct-type": "function",
        "title": "ds'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ds'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ds%27%27",
        "fct-type": "function",
        "title": "ds''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ds''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ds_",
        "fct-type": "function",
        "title": "ds_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ds_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:ds__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#ds__",
        "fct-type": "function",
        "title": "ds__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "ds__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#e",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "e",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#e%27",
        "fct-type": "function",
        "title": "e'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "e'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#e%27%27",
        "fct-type": "function",
        "title": "e''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "e''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#e_",
        "fct-type": "function",
        "title": "e_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "e_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:e__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#e__",
        "fct-type": "function",
        "title": "e__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "e__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#eb",
        "fct-type": "function",
        "title": "eb"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "eb",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#eb%27",
        "fct-type": "function",
        "title": "eb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "eb'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#eb%27%27",
        "fct-type": "function",
        "title": "eb''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "eb''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#eb_",
        "fct-type": "function",
        "title": "eb_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "eb_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:eb__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#eb__",
        "fct-type": "function",
        "title": "eb__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "eb__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#es",
        "fct-type": "function",
        "title": "es"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "es",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#es%27",
        "fct-type": "function",
        "title": "es'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "es'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#es%27%27",
        "fct-type": "function",
        "title": "es''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "es''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#es_",
        "fct-type": "function",
        "title": "es_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "es_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:es__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#es__",
        "fct-type": "function",
        "title": "es__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "es__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#f",
        "fct-type": "function",
        "title": "f"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "f",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#f%27",
        "fct-type": "function",
        "title": "f'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "f'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#f%27%27",
        "fct-type": "function",
        "title": "f''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "f''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#f_",
        "fct-type": "function",
        "title": "f_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "f_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:f__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#f__",
        "fct-type": "function",
        "title": "f__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "f__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fb",
        "fct-type": "function",
        "title": "fb"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fb",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fb%27",
        "fct-type": "function",
        "title": "fb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fb'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fb%27%27",
        "fct-type": "function",
        "title": "fb''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fb''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fb_",
        "fct-type": "function",
        "title": "fb_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fb_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fb__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fb__",
        "fct-type": "function",
        "title": "fb__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fb__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fromPitch",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "PitchL -\u003e a",
        "fct-source": "src/Music-Pitch-Literal.html#fromPitch",
        "fct-type": "method",
        "title": "fromPitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fromPitch",
        "normalized": "PitchL-\u003ea",
        "package": "music-pitch-literal",
        "partial": "Pitch",
        "signature": "PitchL-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fs",
        "fct-type": "function",
        "title": "fs"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fs",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fs%27",
        "fct-type": "function",
        "title": "fs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fs'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fs%27%27",
        "fct-type": "function",
        "title": "fs''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fs''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fs_",
        "fct-type": "function",
        "title": "fs_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fs_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:fs__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#fs__",
        "fct-type": "function",
        "title": "fs__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "fs__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#g",
        "fct-type": "function",
        "title": "g"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "g",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#g%27",
        "fct-type": "function",
        "title": "g'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "g'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#g%27%27",
        "fct-type": "function",
        "title": "g''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "g''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#g_",
        "fct-type": "function",
        "title": "g_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "g_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:g__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#g__",
        "fct-type": "function",
        "title": "g__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "g__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gb",
        "fct-type": "function",
        "title": "gb"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gb",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gb%27",
        "fct-type": "function",
        "title": "gb'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gb'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gb%27%27",
        "fct-type": "function",
        "title": "gb''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gb''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gb_",
        "fct-type": "function",
        "title": "gb_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gb_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gb__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gb__",
        "fct-type": "function",
        "title": "gb__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gb__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:getPitchL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "(Int, Maybe Double, Int)",
        "fct-source": "src/Music-Pitch-Literal.html#PitchL",
        "fct-type": "function",
        "title": "getPitchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "getPitchL",
        "normalized": "(Int,Maybe Double,Int)",
        "package": "music-pitch-literal",
        "partial": "Pitch",
        "signature": "(Int,Maybe Double,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gs",
        "fct-type": "function",
        "title": "gs"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gs",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs-39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gs%27",
        "fct-type": "function",
        "title": "gs'"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gs'",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs-39--39-",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gs%27%27",
        "fct-type": "function",
        "title": "gs''"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gs''",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs_",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gs_",
        "fct-type": "function",
        "title": "gs_"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gs_",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-pitch-literal/docs/Music-Pitch-Literal.html#v:gs__",
      "description": {
        "fct-module": "Music.Pitch.Literal",
        "fct-package": "music-pitch-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Pitch-Literal.html#gs__",
        "fct-type": "function",
        "title": "gs__"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Pitch Literal",
        "module": "Music.Pitch.Literal",
        "name": "gs__",
        "normalized": "",
        "package": "music-pitch-literal",
        "partial": "",
        "signature": ""
      }
    }
  }
]