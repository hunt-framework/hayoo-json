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
        "word": "music-diatonic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements chords.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "Chord",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Chord.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements chords",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "Chord",
          "package": "music-diatonic",
          "partial": "Chord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Chord",
          "name": "Chord",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Chord.html#Chord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "Chord",
          "package": "music-diatonic",
          "partial": "Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#t:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eDiminished\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-3-#5) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "augmentedChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#augmentedChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Diminished Chord rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "augmentedChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:augmentedChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an \u003ccode\u003e\u003ca\u003eAugmented\u003c/a\u003e\u003c/code\u003e Major 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-3-#5-7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "augmentedMajor7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#augmentedMajor7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds an Augmented Major th Chord rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "augmentedMajor7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Major Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:augmentedMajor7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eDiminished\u003c/a\u003e\u003c/code\u003e 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-b5-bb7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "diminished7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#diminished7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Diminished th Chord b3-b5-bb7 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "diminished7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:diminished7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eDiminished\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-b5) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "diminishedChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#diminishedChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Diminished Chord b3-b5 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "diminishedChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:diminishedChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a Dominant 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-3-5-b7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "dominant7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#dominant7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Dominant th Chord b7 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "dominant7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:dominant7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-3-5-7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "major7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#major7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Major th Chord rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "major7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:major7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-3-5) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "majorChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#majorChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Major Chord rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "majorChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:majorChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-5-b7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "minor7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#minor7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Minor th Chord b3-5-b7 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "minor7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:minor7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e Flat 5th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-b5-b7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "minor7thFlat5thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#minor7thFlat5thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Minor Flat th Chord b3-b5-b7 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "minor7thFlat5thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Flat Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:minor7thFlat5thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-5) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "minorChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#minorChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Minor Chord b3-5 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "minorChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:minorChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e Major 7th \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e (1-b3-5-7) rooted at the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "minorMajor7thChord",
          "package": "music-diatonic",
          "signature": "Note -\u003e Chord",
          "source": "src/Music-Diatonic-Chord.html#minorMajor7thChord",
          "type": "function"
        },
        "index": {
          "description": "Builds Minor Major th Chord b3-5-7 rooted at the specified Note",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "minorMajor7thChord",
          "normalized": "Note-\u003eChord",
          "package": "music-diatonic",
          "partial": "Major Chord",
          "signature": "Note-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:minorMajor7thChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the root of the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Chord",
          "name": "root",
          "package": "music-diatonic",
          "signature": "Chord -\u003e Note",
          "source": "src/Music-Diatonic-Chord.html#root",
          "type": "function"
        },
        "index": {
          "description": "Returns the root of the Chord",
          "hierarchy": "Music Diatonic Chord",
          "module": "Music.Diatonic.Chord",
          "name": "root",
          "normalized": "Chord-\u003eNote",
          "package": "music-diatonic",
          "signature": "Chord-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Chord.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements scale degrees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "Degree",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Degree.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements scale degrees",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Degree",
          "package": "music-diatonic",
          "partial": "Degree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Deg",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Degree.html#Deg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Deg",
          "package": "music-diatonic",
          "partial": "Deg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#t:Deg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse these constructors to create \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003es. To alter them, use the \u003ccode\u003e\u003ca\u003eflat\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esharp\u003c/a\u003e\u003c/code\u003e functions along\n with the \u003ccode\u003e\u003ca\u003e$#\u003c/a\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "Degree",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "data"
        },
        "index": {
          "description": "Use these constructors to create Degree To alter them use the flat or sharp functions along with the operator",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Degree",
          "package": "music-diatonic",
          "partial": "Degree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#t:Degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Fifth",
          "package": "music-diatonic",
          "signature": "Fifth",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Fifth",
          "package": "music-diatonic",
          "partial": "Fifth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Fifth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "First",
          "package": "music-diatonic",
          "signature": "First",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "First",
          "package": "music-diatonic",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Fourth",
          "package": "music-diatonic",
          "signature": "Fourth",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Fourth",
          "package": "music-diatonic",
          "partial": "Fourth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Fourth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Second",
          "package": "music-diatonic",
          "signature": "Second",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Second",
          "package": "music-diatonic",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Seventh",
          "package": "music-diatonic",
          "signature": "Seventh",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Seventh",
          "package": "music-diatonic",
          "partial": "Seventh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Seventh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Sixth",
          "package": "music-diatonic",
          "signature": "Sixth",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Sixth",
          "package": "music-diatonic",
          "partial": "Sixth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Sixth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Degree",
          "name": "Third",
          "package": "music-diatonic",
          "signature": "Third",
          "source": "src/Music-Diatonic-Degree.html#Degree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "Third",
          "package": "music-diatonic",
          "partial": "Third",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:Third"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssuming n1 as the tonic, returns the \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of n2.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "degree",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note -\u003e Degree",
          "source": "src/Music-Diatonic-Degree.html#degree",
          "type": "function"
        },
        "index": {
          "description": "Assuming n1 as the tonic returns the Degree of n2",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "degree",
          "normalized": "Note-\u003eNote-\u003eDegree",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote-\u003eDegree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:degree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all the naturally occuring \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003es in s, along with the element that \n corresponds to the \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "degrees",
          "package": "music-diatonic",
          "signature": "s -\u003e [(Degree, n)]",
          "source": "src/Music-Diatonic-Degree.html#degrees",
          "type": "method"
        },
        "index": {
          "description": "Returns all the naturally occuring Degree in along with the element that corresponds to the Degree",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "degrees",
          "normalized": "a-\u003e[(Degree,b)]",
          "package": "music-diatonic",
          "signature": "s-\u003e[(Degree,n)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:degrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003efifth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "dominant",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#dominant",
          "type": "function"
        },
        "index": {
          "description": "An alias for fifth",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "dominant",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:dominant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eFifth\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "fifth",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#fifth",
          "type": "function"
        },
        "index": {
          "description": "Returns the Fifth Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "fifth",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:fifth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "first",
          "package": "music-diatonic",
          "signature": "s -\u003e n",
          "source": "src/Music-Diatonic-Degree.html#first",
          "type": "method"
        },
        "index": {
          "description": "Returns the First Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "first",
          "normalized": "a-\u003eb",
          "package": "music-diatonic",
          "signature": "s-\u003en",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eFourth\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "fourth",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#fourth",
          "type": "function"
        },
        "index": {
          "description": "Returns the Fourth Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "fourth",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:fourth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e that corresponds to \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e d in a scale where the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003etonic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "from",
          "package": "music-diatonic",
          "signature": "Degree -\u003e Note -\u003e Note",
          "source": "src/Music-Diatonic-Degree.html#from",
          "type": "function"
        },
        "index": {
          "description": "Returns the Note that corresponds to Degree in scale where the specified Note is the tonic",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "from",
          "normalized": "Degree-\u003eNote-\u003eNote",
          "package": "music-diatonic",
          "signature": "Degree-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eseventh\u003c/a\u003e\u003c/code\u003e, but only if the \u003ccode\u003e\u003ca\u003eSeventh\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMaj7th\u003c/a\u003e\u003c/code\u003e above the \u003ccode\u003e\u003ca\u003etonic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "leadingTone",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#leadingTone",
          "type": "function"
        },
        "index": {
          "description": "An alias for seventh but only if the Seventh is Maj7th above the tonic",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "leadingTone",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "partial": "Tone",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:leadingTone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ethird\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "mediant",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#mediant",
          "type": "function"
        },
        "index": {
          "description": "An alias for third",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "mediant",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:mediant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eSecond\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "second",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#second",
          "type": "function"
        },
        "index": {
          "description": "Returns the Second Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "second",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eSeventh\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "seventh",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#seventh",
          "type": "function"
        },
        "index": {
          "description": "Returns the Seventh Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "seventh",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:seventh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eSixth\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "sixth",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#sixth",
          "type": "function"
        },
        "index": {
          "description": "Returns the Sixth Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "sixth",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:sixth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003efourth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "subdominant",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#subdominant",
          "type": "function"
        },
        "index": {
          "description": "An alias for fourth",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "subdominant",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:subdominant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esixth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "submediant",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#submediant",
          "type": "function"
        },
        "index": {
          "description": "An alias for sixth",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "submediant",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:submediant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eseventh\u003c/a\u003e\u003c/code\u003e, but only if the \u003ccode\u003e\u003ca\u003eSeventh\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMin7th\u003c/a\u003e\u003c/code\u003e above the \u003ccode\u003e\u003ca\u003etonic\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "subtonic",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#subtonic",
          "type": "function"
        },
        "index": {
          "description": "An alias for seventh but only if the Seventh is Min7th above the tonic",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "subtonic",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:subtonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "supertonic",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#supertonic",
          "type": "function"
        },
        "index": {
          "description": "An alias for second",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "supertonic",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:supertonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eThird\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of s.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "third",
          "package": "music-diatonic",
          "signature": "s -\u003e Maybe n",
          "source": "src/Music-Diatonic-Degree.html#third",
          "type": "function"
        },
        "index": {
          "description": "Returns the Third Degree of",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "third",
          "normalized": "a-\u003eMaybe b",
          "package": "music-diatonic",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:third"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Degree",
          "name": "tonic",
          "package": "music-diatonic",
          "signature": "s -\u003e n",
          "source": "src/Music-Diatonic-Degree.html#tonic",
          "type": "function"
        },
        "index": {
          "description": "An alias for first",
          "hierarchy": "Music Diatonic Degree",
          "module": "Music.Diatonic.Degree",
          "name": "tonic",
          "normalized": "a-\u003eb",
          "package": "music-diatonic",
          "signature": "s-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Degree.html#v:tonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module implements a typeclass for enharmonic equivalence. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Equivalence",
          "name": "Equivalence",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Equivalence.html",
          "type": "module"
        },
        "index": {
          "description": "The module implements typeclass for enharmonic equivalence",
          "hierarchy": "Music Diatonic Equivalence",
          "module": "Music.Diatonic.Equivalence",
          "name": "Equivalence",
          "package": "music-diatonic",
          "partial": "Equivalence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Equivalence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Equivalence",
          "name": "Equiv",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Equivalence.html#Equiv",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Diatonic Equivalence",
          "module": "Music.Diatonic.Equivalence",
          "name": "Equiv",
          "package": "music-diatonic",
          "partial": "Equiv",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Equivalence.html#t:Equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if both as are enharmonically equivalent, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Equivalence",
          "name": "equiv",
          "package": "music-diatonic",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Music-Diatonic-Equivalence.html#equiv",
          "type": "method"
        },
        "index": {
          "description": "Returns True if both as are enharmonically equivalent False otherwise",
          "hierarchy": "Music Diatonic Equivalence",
          "module": "Music.Diatonic.Equivalence",
          "name": "equiv",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "music-diatonic",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Equivalence.html#v:equiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements harmonies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Harmony",
          "name": "Harmony",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Harmony.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements harmonies",
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "Harmony",
          "package": "music-diatonic",
          "partial": "Harmony",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Harmony",
          "name": "Harmony",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Harmony.html#Harmony",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "Harmony",
          "package": "music-diatonic",
          "partial": "Harmony",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#t:Harmony"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003es that compose the specified \u003ccode\u003e\u003ca\u003eHarmony\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Harmony",
          "name": "chords",
          "package": "music-diatonic",
          "signature": "Harmony -\u003e [Chord]",
          "source": "src/Music-Diatonic-Harmony.html#chords",
          "type": "function"
        },
        "index": {
          "description": "Returns the Chord that compose the specified Harmony",
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "chords",
          "normalized": "Harmony-\u003e[Chord]",
          "package": "music-diatonic",
          "signature": "Harmony-\u003e[Chord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#v:chords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eHarmony\u003c/a\u003e\u003c/code\u003e for the specified \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Harmony",
          "name": "harmony",
          "package": "music-diatonic",
          "signature": "Scale -\u003e Harmony",
          "source": "src/Music-Diatonic-Harmony.html#harmony",
          "type": "function"
        },
        "index": {
          "description": "Returns the Harmony for the specified Scale",
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "harmony",
          "normalized": "Scale-\u003eHarmony",
          "package": "music-diatonic",
          "signature": "Scale-\u003eHarmony",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#v:harmony"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the 7ths \u003ccode\u003e\u003ca\u003eHarmony\u003c/a\u003e\u003c/code\u003e for the specified \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Harmony",
          "name": "harmony7",
          "package": "music-diatonic",
          "signature": "Scale -\u003e Harmony",
          "source": "src/Music-Diatonic-Harmony.html#harmony7",
          "type": "function"
        },
        "index": {
          "description": "Returns the ths Harmony for the specified Scale",
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "harmony7",
          "normalized": "Scale-\u003eHarmony",
          "package": "music-diatonic",
          "signature": "Scale-\u003eHarmony",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#v:harmony7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a Roman notation string representing the \u003ccode\u003e\u003ca\u003eDegree\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Harmony",
          "name": "showRoman",
          "package": "music-diatonic",
          "signature": "Chord -\u003e Degree -\u003e String",
          "source": "src/Music-Diatonic-Harmony.html#showRoman",
          "type": "function"
        },
        "index": {
          "description": "Returns Roman notation string representing the Degree of the Chord",
          "hierarchy": "Music Diatonic Harmony",
          "module": "Music.Diatonic.Harmony",
          "name": "showRoman",
          "normalized": "Chord-\u003eDegree-\u003eString",
          "package": "music-diatonic",
          "partial": "Roman",
          "signature": "Chord-\u003eDegree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Harmony.html#v:showRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Interval module implements diatonic intervals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "Interval",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Interval.html",
          "type": "module"
        },
        "index": {
          "description": "The Interval module implements diatonic intervals",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Interval",
          "package": "music-diatonic",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse these constructors to create \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003es. To alter them, use the \u003ccode\u003e\u003ca\u003ediminish\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaugment\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "Interval",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "description": "Use these constructors to create Interval To alter them use the diminish or augment functions",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Interval",
          "package": "music-diatonic",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Maj2nd",
          "package": "music-diatonic",
          "signature": "Maj2nd",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Maj2nd",
          "package": "music-diatonic",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Maj2nd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Maj3rd",
          "package": "music-diatonic",
          "signature": "Maj3rd",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Maj3rd",
          "package": "music-diatonic",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Maj3rd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Maj6th",
          "package": "music-diatonic",
          "signature": "Maj6th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Maj6th",
          "package": "music-diatonic",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Maj6th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Maj7th",
          "package": "music-diatonic",
          "signature": "Maj7th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Maj7th",
          "package": "music-diatonic",
          "partial": "Maj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Maj7th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Min2nd",
          "package": "music-diatonic",
          "signature": "Min2nd",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Min2nd",
          "package": "music-diatonic",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Min2nd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Min3rd",
          "package": "music-diatonic",
          "signature": "Min3rd",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Min3rd",
          "package": "music-diatonic",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Min3rd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Min6th",
          "package": "music-diatonic",
          "signature": "Min6th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Min6th",
          "package": "music-diatonic",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Min6th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Min7th",
          "package": "music-diatonic",
          "signature": "Min7th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Min7th",
          "package": "music-diatonic",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Min7th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Perf4th",
          "package": "music-diatonic",
          "signature": "Perf4th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Perf4th",
          "package": "music-diatonic",
          "partial": "Perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Perf4th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Perf5th",
          "package": "music-diatonic",
          "signature": "Perf5th",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Perf5th",
          "package": "music-diatonic",
          "partial": "Perf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Perf5th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "Unison",
          "package": "music-diatonic",
          "signature": "Unison",
          "source": "src/Music-Diatonic-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "Unison",
          "package": "music-diatonic",
          "partial": "Unison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:Unison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAugments an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e by a semitone. The interval type remains the same.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "augment",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Interval",
          "source": "src/Music-Diatonic-Interval.html#augment",
          "type": "function"
        },
        "index": {
          "description": "Augments an Interval by semitone The interval type remains the same",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "augment",
          "normalized": "Interval-\u003eInterval",
          "package": "music-diatonic",
          "signature": "Interval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:augment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates compound interval (adds an \u003ccode\u003e\u003ca\u003eoctave\u003c/a\u003e\u003c/code\u003e) to the specified \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "compound",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Interval",
          "source": "src/Music-Diatonic-Interval.html#compound",
          "type": "function"
        },
        "index": {
          "description": "Creates compound interval adds an octave to the specified Interval",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "compound",
          "normalized": "Interval-\u003eInterval",
          "package": "music-diatonic",
          "signature": "Interval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiminishes an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e by a semitone. The interval type remains the same.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "diminish",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Interval",
          "source": "src/Music-Diatonic-Interval.html#diminish",
          "type": "function"
        },
        "index": {
          "description": "Diminishes an Interval by semitone The interval type remains the same",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "diminish",
          "normalized": "Interval-\u003eInterval",
          "package": "music-diatonic",
          "signature": "Interval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:diminish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "maj13th",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#maj13th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "maj13th",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:maj13th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "maj9th",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#maj9th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "maj9th",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:maj9th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "min13th",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#min13th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "min13th",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:min13th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "min9th",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#min9th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "min9th",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:min9th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "octave",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#octave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "octave",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:octave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Interval",
          "name": "perf11th",
          "package": "music-diatonic",
          "signature": "Interval",
          "source": "src/Music-Diatonic-Interval.html#perf11th",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "perf11th",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:perf11th"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of semitones in an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "semitones",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Int",
          "source": "src/Music-Diatonic-Interval.html#semitones",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of semitones in an Interval",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "semitones",
          "normalized": "Interval-\u003eInt",
          "package": "music-diatonic",
          "signature": "Interval-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:semitones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of scale steps in an \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Interval",
          "name": "steps",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Int",
          "source": "src/Music-Diatonic-Interval.html#steps",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of scale steps in an Interval",
          "hierarchy": "Music Diatonic Interval",
          "module": "Music.Diatonic.Interval",
          "name": "steps",
          "normalized": "Interval-\u003eInt",
          "package": "music-diatonic",
          "signature": "Interval-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Interval.html#v:steps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module inplements keys.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Key",
          "name": "Key",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Key.html",
          "type": "module"
        },
        "index": {
          "description": "This module inplements keys",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "Key",
          "package": "music-diatonic",
          "partial": "Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Key",
          "name": "Key",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Key.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "Key",
          "package": "music-diatonic",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Key",
          "name": "Signature",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Key.html#Signature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "Signature",
          "package": "music-diatonic",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e that is the key's center.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "center",
          "package": "music-diatonic",
          "signature": "Key -\u003e Note",
          "source": "src/Music-Diatonic-Key.html#center",
          "type": "function"
        },
        "index": {
          "description": "Returns the Note that is the key center",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "center",
          "normalized": "Key-\u003eNote",
          "package": "music-diatonic",
          "signature": "Key-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e based on the specified \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "key",
          "package": "music-diatonic",
          "signature": "Scale -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#key",
          "type": "function"
        },
        "index": {
          "description": "Creates Key based on the specified Scale",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "key",
          "normalized": "Scale-\u003eKey",
          "package": "music-diatonic",
          "signature": "Scale-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e centered around the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "majorKey",
          "package": "music-diatonic",
          "signature": "Note -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#majorKey",
          "type": "function"
        },
        "index": {
          "description": "Creates Major Key centered around the specified Note",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "majorKey",
          "normalized": "Note-\u003eKey",
          "package": "music-diatonic",
          "partial": "Key",
          "signature": "Note-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:majorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e centered around the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "minorKey",
          "package": "music-diatonic",
          "signature": "Note -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#minorKey",
          "type": "function"
        },
        "index": {
          "description": "Creates Major Key centered around the specified Note",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "minorKey",
          "normalized": "Note-\u003eKey",
          "package": "music-diatonic",
          "partial": "Key",
          "signature": "Note-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:minorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the parallel \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e of the specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "parallel",
          "package": "music-diatonic",
          "signature": "Key -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#parallel",
          "type": "function"
        },
        "index": {
          "description": "Returns the parallel Key of the specified Key",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "parallel",
          "normalized": "Key-\u003eKey",
          "package": "music-diatonic",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the relative \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e of the specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "relative",
          "package": "music-diatonic",
          "signature": "Key -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Returns the relative Key of the specified Key",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "relative",
          "normalized": "Key-\u003eKey",
          "package": "music-diatonic",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the relative \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e of the specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "relativeMajor",
          "package": "music-diatonic",
          "signature": "Key -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#relativeMajor",
          "type": "function"
        },
        "index": {
          "description": "Returns the relative Major Key of the specified Key",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "relativeMajor",
          "normalized": "Key-\u003eKey",
          "package": "music-diatonic",
          "partial": "Major",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:relativeMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the relative \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e of the specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "relativeMinor",
          "package": "music-diatonic",
          "signature": "Key -\u003e Key",
          "source": "src/Music-Diatonic-Key.html#relativeMinor",
          "type": "function"
        },
        "index": {
          "description": "Returns the relative Minor Key of the specified Key",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "relativeMinor",
          "normalized": "Key-\u003eKey",
          "package": "music-diatonic",
          "partial": "Minor",
          "signature": "Key-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:relativeMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the details of the  specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e that is used in the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The number of those \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003es used in the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Music.Diatonic.Key",
          "name": "sigDetails",
          "package": "music-diatonic",
          "signature": "Signature -\u003e (Accidental, Int)",
          "source": "src/Music-Diatonic-Key.html#sigDetails",
          "type": "function"
        },
        "index": {
          "description": "Returns the details of the specified Key The Accidental that is used in the Key Signature The number of those Accidental used in the Key Signature",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "sigDetails",
          "normalized": "Signature-\u003e(Accidental,Int)",
          "package": "music-diatonic",
          "partial": "Details",
          "signature": "Signature-\u003e(Accidental,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:sigDetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e of the  specified \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Key",
          "name": "signature",
          "package": "music-diatonic",
          "signature": "Key -\u003e Signature",
          "source": "src/Music-Diatonic-Key.html#signature",
          "type": "function"
        },
        "index": {
          "description": "Returns the Signature of the specified Key",
          "hierarchy": "Music Diatonic Key",
          "module": "Music.Diatonic.Key",
          "name": "signature",
          "normalized": "Key-\u003eSignature",
          "package": "music-diatonic",
          "signature": "Key-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Key.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Note module implements the basic Music.Diatonic musical objects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note\n\u003c/li\u003e\u003cli\u003e Accidental\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Note",
          "name": "Note",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Note.html",
          "type": "module"
        },
        "index": {
          "description": "The Note module implements the basic Music.Diatonic musical objects Note Accidental",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Note",
          "package": "music-diatonic",
          "partial": "Note",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccidentals are rarely used directly. To alter \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003es, use the \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e functions\n   (or their \u003ccode\u003e\u003ca\u003esharp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eflat\u003c/a\u003e\u003c/code\u003e aliases).\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "Accidental",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Note.html#Accidental",
          "type": "data"
        },
        "index": {
          "description": "Accidentals are rarely used directly To alter Note use the raise and lower functions or their sharp and flat aliases",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Accidental",
          "package": "music-diatonic",
          "partial": "Accidental",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#t:Accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse these constructors to create \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003es. To alter them, use the \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e functions\n   (or their \u003ccode\u003e\u003ca\u003esharp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eflat\u003c/a\u003e\u003c/code\u003e aliases).\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "Note",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "data"
        },
        "index": {
          "description": "Use these constructors to create Note To alter them use the raise and lower functions or their sharp and flat aliases",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Note",
          "package": "music-diatonic",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany musical objects have a note at their core (scales, chords, ...). The \u003ccode\u003e\u003ca\u003eNte\u003c/a\u003e\u003c/code\u003e class allows these objects\n   to make use of all the note-manipulating functions.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "Nte",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Note.html#Nte",
          "type": "class"
        },
        "index": {
          "description": "Many musical objects have note at their core scales chords The Nte class allows these objects to make use of all the note-manipulating functions",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Nte",
          "package": "music-diatonic",
          "partial": "Nte",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#t:Nte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to extract a list of notes from something (scale, chord, ...).\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "Nts",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Note.html#Nts",
          "type": "class"
        },
        "index": {
          "description": "Used to extract list of notes from something scale chord",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Nts",
          "package": "music-diatonic",
          "partial": "Nts",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#t:Nts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for \u003ccode\u003e\u003ca\u003enoteMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "($#)",
          "package": "music-diatonic",
          "signature": "(Note -\u003e Note) -\u003e a -\u003e a",
          "source": "src/Music-Diatonic-Note.html#%24%23",
          "type": "method"
        },
        "index": {
          "description": "Operator for noteMap",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "($#) $#",
          "normalized": "(Note-\u003eNote)-\u003ea-\u003ea",
          "package": "music-diatonic",
          "signature": "(Note-\u003eNote)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:-36--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "A",
          "package": "music-diatonic",
          "signature": "A",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "A",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "B",
          "package": "music-diatonic",
          "signature": "B",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "B",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "C",
          "package": "music-diatonic",
          "signature": "C",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "C",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "D",
          "package": "music-diatonic",
          "signature": "D",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "D",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "E",
          "package": "music-diatonic",
          "signature": "E",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "E",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "F",
          "package": "music-diatonic",
          "signature": "F",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "F",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "Flat",
          "package": "music-diatonic",
          "signature": "Flat",
          "source": "src/Music-Diatonic-Note.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Flat",
          "package": "music-diatonic",
          "partial": "Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:Flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "G",
          "package": "music-diatonic",
          "signature": "G",
          "source": "src/Music-Diatonic-Note.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "G",
          "package": "music-diatonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "Natural",
          "package": "music-diatonic",
          "signature": "Natural",
          "source": "src/Music-Diatonic-Note.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Natural",
          "package": "music-diatonic",
          "partial": "Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Note",
          "name": "Sharp",
          "package": "music-diatonic",
          "signature": "Sharp",
          "source": "src/Music-Diatonic-Note.html#Accidental",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "Sharp",
          "package": "music-diatonic",
          "partial": "Sharp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:Sharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the specified \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e upwards to a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e, returning the \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e above.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "above",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#above",
          "type": "function"
        },
        "index": {
          "description": "Applies the specified Interval upwards to Note returning the Note above",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "above",
          "normalized": "Interval-\u003eNote-\u003eNote",
          "package": "music-diatonic",
          "signature": "Interval-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003e applied to the \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "accidental",
          "package": "music-diatonic",
          "signature": "Note -\u003e Accidental",
          "source": "src/Music-Diatonic-Note.html#accidental",
          "type": "function"
        },
        "index": {
          "description": "Return the Accidental applied to the Note",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "accidental",
          "normalized": "Note-\u003eAccidental",
          "package": "music-diatonic",
          "signature": "Note-\u003eAccidental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:accidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the specified \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e downwards to a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e, returning the \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e below.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "below",
          "package": "music-diatonic",
          "signature": "Interval -\u003e Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#below",
          "type": "function"
        },
        "index": {
          "description": "Applies the specified Interval downwards to Note returning the Note below",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "below",
          "normalized": "Interval-\u003eNote-\u003eNote",
          "package": "music-diatonic",
          "signature": "Interval-\u003eNote-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrings a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e to it's most straight forward representation. For example:\n\u003c/p\u003e\u003cpre\u003e canonize (sharp B) == C\n\u003c/pre\u003e",
          "module": "Music.Diatonic.Note",
          "name": "canonize",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#canonize",
          "type": "function"
        },
        "index": {
          "description": "Brings Note to it most straight forward representation For example canonize sharp",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "canonize",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:canonize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of 15 \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003es representing the circle of fifths centered around\n   the specified \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e (which is always the 7th element in the list). For example:\n\u003c/p\u003e\u003cpre\u003e circleOfFifths C = [Gb,Db,Ab,Eb,Bb,F,C,G,D,A,E,B,F#] \n\u003c/pre\u003e",
          "module": "Music.Diatonic.Note",
          "name": "circleOfFifths",
          "package": "music-diatonic",
          "signature": "Note -\u003e [Note]",
          "source": "src/Music-Diatonic-Note.html#circleOfFifths",
          "type": "function"
        },
        "index": {
          "description": "Returns list of Note representing the circle of fifths centered around the specified Note which is always the th element in the list For example circleOfFifths Gb Db Ab Eb Bb",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "circleOfFifths",
          "normalized": "Note-\u003e[Note]",
          "package": "music-diatonic",
          "partial": "Of Fifths",
          "signature": "Note-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:circleOfFifths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e between the two \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "distance",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note -\u003e Interval",
          "source": "src/Music-Diatonic-Note.html#distance",
          "type": "function"
        },
        "index": {
          "description": "Returns the Interval between the two Note",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "distance",
          "normalized": "Note-\u003eNote-\u003eInterval",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "flat",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#flat",
          "type": "function"
        },
        "index": {
          "description": "Alias for lower",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "flat",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowers a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e by a semitone by applying an accidental. \n   The note name stays the same.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "lower",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Lowers Note by semitone by applying an accidental The note name stays the same",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "lower",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrips all \u003ccode\u003e\u003ca\u003eAccidental\u003c/a\u003e\u003c/code\u003es from a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "natural",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#natural",
          "type": "function"
        },
        "index": {
          "description": "Strips all Accidental from Note",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "natural",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the next natural \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e in the cycle:\n\u003c/p\u003e\u003cpre\u003e\n   C -\u003e D -\u003e E -\u003e F -\u003e G -\u003e A -\u003e B \n   ^------------------------------\n\u003c/pre\u003e",
          "module": "Music.Diatonic.Note",
          "name": "next",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#next",
          "type": "function"
        },
        "index": {
          "description": "Returns the next natural Note in the cycle",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "next",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e manipulating function to an instance of the \u003ccode\u003e\u003ca\u003eNte\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "noteMap",
          "package": "music-diatonic",
          "signature": "(Note -\u003e Note) -\u003e a -\u003e a",
          "source": "src/Music-Diatonic-Note.html#noteMap",
          "type": "method"
        },
        "index": {
          "description": "Applies Note manipulating function to an instance of the Nte class",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "noteMap",
          "normalized": "(Note-\u003eNote)-\u003ea-\u003ea",
          "package": "music-diatonic",
          "partial": "Map",
          "signature": "(Note-\u003eNote)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:noteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e combining function to an instance of the \u003ccode\u003e\u003ca\u003eNte\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "notePlus",
          "package": "music-diatonic",
          "signature": "(Note -\u003e Note -\u003e b) -\u003e a -\u003e a -\u003e b",
          "source": "src/Music-Diatonic-Note.html#notePlus",
          "type": "method"
        },
        "index": {
          "description": "Applies Note combining function to an instance of the Nte class",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "notePlus",
          "normalized": "(Note-\u003eNote-\u003ea)-\u003eb-\u003eb-\u003ea",
          "package": "music-diatonic",
          "partial": "Plus",
          "signature": "(Note-\u003eNote-\u003eb)-\u003ea-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:notePlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003es from a \u003ccode\u003e\u003ca\u003eNts\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "notes",
          "package": "music-diatonic",
          "signature": "a -\u003e [Note]",
          "source": "src/Music-Diatonic-Note.html#notes",
          "type": "method"
        },
        "index": {
          "description": "Returns list of Note from Nts instance",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "notes",
          "normalized": "a-\u003e[Note]",
          "package": "music-diatonic",
          "signature": "a-\u003e[Note]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the previous natural \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e in the cycle:\n\u003c/p\u003e\u003cpre\u003e\n   C -\u003e B -\u003e A -\u003e G -\u003e F -\u003e E -\u003e D \n   ^------------------------------\n\u003c/pre\u003e",
          "module": "Music.Diatonic.Note",
          "name": "prev",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Returns the previous natural Note in the cycle",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "prev",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaises a \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e by a semitone by applying an accidental. \n   The note name stays the same.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "raise",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#raise",
          "type": "function"
        },
        "index": {
          "description": "Raises Note by semitone by applying an accidental The note name stays the same",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "raise",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Note",
          "name": "sharp",
          "package": "music-diatonic",
          "signature": "Note -\u003e Note",
          "source": "src/Music-Diatonic-Note.html#sharp",
          "type": "function"
        },
        "index": {
          "description": "Alias for raise",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "sharp",
          "normalized": "Note-\u003eNote",
          "package": "music-diatonic",
          "signature": "Note-\u003eNote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:sharp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes instances of the \u003ccode\u003e\u003ca\u003eNte\u003c/a\u003e\u003c/code\u003e class using the given \u003ccode\u003e\u003ca\u003eInterval\u003c/a\u003e\u003c/code\u003e and \n   tranposition function. A typical use would be:\n\u003c/p\u003e\u003cpre\u003e transpose Min3rd above [D, sharp F, A] == [F,A,C]\n\u003c/pre\u003e",
          "module": "Music.Diatonic.Note",
          "name": "transpose",
          "package": "music-diatonic",
          "signature": "Interval -\u003e (Interval -\u003e Note -\u003e Note) -\u003e a -\u003e a",
          "source": "src/Music-Diatonic-Note.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "Transposes instances of the Nte class using the given Interval and tranposition function typical use would be transpose Min3rd above sharp",
          "hierarchy": "Music Diatonic Note",
          "module": "Music.Diatonic.Note",
          "name": "transpose",
          "normalized": "Interval-\u003e(Interval-\u003eNote-\u003eNote)-\u003ea-\u003ea",
          "package": "music-diatonic",
          "signature": "Interval-\u003e(Interval-\u003eNote-\u003eNote)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Note.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module implements musical qualities. Qualities are generic and are shared between various\n types of musical objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Quality",
          "name": "Quality",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Quality.html",
          "type": "module"
        },
        "index": {
          "description": "The module implements musical qualities Qualities are generic and are shared between various types of musical objects",
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Quality",
          "package": "music-diatonic",
          "partial": "Quality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Qual",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Quality.html#Qual",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Qual",
          "package": "music-diatonic",
          "partial": "Qual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Quality",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Quality",
          "package": "music-diatonic",
          "partial": "Quality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#t:Quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Augmented",
          "package": "music-diatonic",
          "signature": "Augmented",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Augmented",
          "package": "music-diatonic",
          "partial": "Augmented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Augmented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Diminished",
          "package": "music-diatonic",
          "signature": "Diminished",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Diminished",
          "package": "music-diatonic",
          "partial": "Diminished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Diminished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Major",
          "package": "music-diatonic",
          "signature": "Major",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Major",
          "package": "music-diatonic",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Minor",
          "package": "music-diatonic",
          "signature": "Minor",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Minor",
          "package": "music-diatonic",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Neutral",
          "package": "music-diatonic",
          "signature": "Neutral",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Neutral",
          "package": "music-diatonic",
          "partial": "Neutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Neutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Quality",
          "name": "Perfect",
          "package": "music-diatonic",
          "signature": "Perfect",
          "source": "src/Music-Diatonic-Quality.html#Quality",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "Perfect",
          "package": "music-diatonic",
          "partial": "Perfect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:Perfect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the quality of the \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Quality",
          "name": "quality",
          "package": "music-diatonic",
          "signature": "a -\u003e Quality",
          "source": "src/Music-Diatonic-Quality.html#quality",
          "type": "method"
        },
        "index": {
          "description": "Return the quality of the Qual instance",
          "hierarchy": "Music Diatonic Quality",
          "module": "Music.Diatonic.Quality",
          "name": "quality",
          "normalized": "a-\u003eQuality",
          "package": "music-diatonic",
          "signature": "a-\u003eQuality",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Quality.html#v:quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Scale module implements scales.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "Scale",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Scale.html",
          "type": "module"
        },
        "index": {
          "description": "The Scale module implements scales",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "Scale",
          "package": "music-diatonic",
          "partial": "Scale",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Scale",
          "name": "Scale",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Scale.html#Scale",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "Scale",
          "package": "music-diatonic",
          "partial": "Scale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#t:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Scale",
          "name": "Scl",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic-Scale.html#Scl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "Scl",
          "package": "music-diatonic",
          "partial": "Scl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#t:Scl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e pentatonic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "majorPentatonicScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#majorPentatonicScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Major pentatonic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "majorPentatonicScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Pentatonic Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:majorPentatonicScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMajor\u003c/a\u003e\u003c/code\u003e diatonic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "majorScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#majorScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Major diatonic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "majorScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:majorScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e harmonic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "minorHarmonicScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#minorHarmonicScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Minor harmonic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "minorHarmonicScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Harmonic Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:minorHarmonicScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e melodic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "minorMelodicScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#minorMelodicScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Minor melodic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "minorMelodicScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Melodic Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:minorMelodicScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e pentatonic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "minorPentatonicScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#minorPentatonicScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Minor pentatonic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "minorPentatonicScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Pentatonic Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:minorPentatonicScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eMinor\u003c/a\u003e\u003c/code\u003e diatonic \u003ccode\u003e\u003ca\u003eScale\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the tonic.\n\u003c/p\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "minorScale",
          "package": "music-diatonic",
          "signature": "Note -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#minorScale",
          "type": "function"
        },
        "index": {
          "description": "Creates Minor diatonic Scale using the given Note as the tonic",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "minorScale",
          "normalized": "Note-\u003eScale",
          "package": "music-diatonic",
          "partial": "Scale",
          "signature": "Note-\u003eScale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:minorScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Diatonic.Scale",
          "name": "scale",
          "package": "music-diatonic",
          "signature": "a -\u003e Scale",
          "source": "src/Music-Diatonic-Scale.html#scale",
          "type": "method"
        },
        "index": {
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "scale",
          "normalized": "a-\u003eScale",
          "package": "music-diatonic",
          "signature": "a-\u003eScale",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a tetrachord using the given \u003ccode\u003e\u003ca\u003eNote\u003c/a\u003e\u003c/code\u003e as the starting note.\n\u003c/p\u003e\u003cpre\u003e tetrachord G == [G,A,B,C]\n\u003c/pre\u003e",
          "module": "Music.Diatonic.Scale",
          "name": "tetrachord",
          "package": "music-diatonic",
          "signature": "Note -\u003e [Note]",
          "source": "src/Music-Diatonic-Scale.html#tetrachord",
          "type": "function"
        },
        "index": {
          "description": "Returns tetrachord using the given Note as the starting note tetrachord",
          "hierarchy": "Music Diatonic Scale",
          "module": "Music.Diatonic.Scale",
          "name": "tetrachord",
          "normalized": "Note-\u003e[Note]",
          "package": "music-diatonic",
          "signature": "Note-\u003e[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic-Scale.html#v:tetrachord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module is used as a convinient starting point. It re-exports:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eMusic.Diatonic.Note\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eMusic.Diatonic.Interval\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eMusic.Diatonic.Degree\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eMusic.Diatonic.Quality\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eMusic.Diatonic.Equivalence\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Music.Diatonic",
          "name": "Diatonic",
          "package": "music-diatonic",
          "source": "src/Music-Diatonic.html",
          "type": "module"
        },
        "index": {
          "description": "The module is used as convinient starting point It re-exports Music.Diatonic.Note Music.Diatonic.Interval Music.Diatonic.Degree Music.Diatonic.Quality Music.Diatonic.Equivalence",
          "hierarchy": "Music Diatonic",
          "module": "Music.Diatonic",
          "name": "Diatonic",
          "package": "music-diatonic",
          "partial": "Diatonic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-diatonic/docs/Music-Diatonic.html#"
      }
    }
  ]
]