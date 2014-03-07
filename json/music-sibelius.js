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
        "word": "music-sibelius"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Score.Import.Sibelius",
          "name": "Sibelius",
          "package": "music-sibelius",
          "source": "src/Music-Score-Import-Sibelius.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "Sibelius",
          "package": "music-sibelius",
          "partial": "Sibelius",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Score.Import.Sibelius",
          "name": "IsSibelius",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#IsSibelius",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "IsSibelius",
          "package": "music-sibelius",
          "partial": "Is Sibelius",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#t:IsSibelius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Music.Score.Import.Sibelius\",\"Music.Sibelius\"]",
          "name": "fromSib",
          "package": "music-sibelius",
          "signature": "SibScore -\u003e Score a",
          "source": "src/Music-Sibelius.html#fromSib",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:fromSib\",\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSib\"]"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "fromSib",
          "normalized": "SibScore-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Sib",
          "signature": "SibScore-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:fromSib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Music.Score.Import.Sibelius\",\"Music.Sibelius\"]",
          "name": "readSib",
          "package": "music-sibelius",
          "signature": "FilePath -\u003e IO (Score a)",
          "source": "src/Music-Sibelius.html#readSib",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSib\",\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:readSib\"]"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "readSib",
          "normalized": "FilePath-\u003eIO(Score a)",
          "package": "music-sibelius",
          "partial": "Sib",
          "signature": "FilePath-\u003eIO(Score a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Music.Score.Import.Sibelius\",\"Music.Sibelius\"]",
          "name": "readSibEither",
          "package": "music-sibelius",
          "signature": "FilePath -\u003e IO (Either String (Score a))",
          "source": "src/Music-Sibelius.html#readSibEither",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSibEither\",\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:readSibEither\"]"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "readSibEither",
          "normalized": "FilePath-\u003eIO(Either String(Score a))",
          "package": "music-sibelius",
          "partial": "Sib Either",
          "signature": "FilePath-\u003eIO(Either String(Score a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSibEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Music.Score.Import.Sibelius\",\"Music.Sibelius\"]",
          "name": "readSibMaybe",
          "package": "music-sibelius",
          "signature": "FilePath -\u003e IO (Maybe (Score a))",
          "source": "src/Music-Sibelius.html#readSibMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSibMaybe\",\"http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:readSibMaybe\"]"
        },
        "index": {
          "hierarchy": "Music Score Import Sibelius",
          "module": "Music.Score.Import.Sibelius",
          "name": "readSibMaybe",
          "normalized": "FilePath-\u003eIO(Maybe(Score a))",
          "package": "music-sibelius",
          "partial": "Sib Maybe",
          "signature": "FilePath-\u003eIO(Maybe(Score a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Score-Import-Sibelius.html#v:readSibMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Sibelius",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Sibelius",
          "package": "music-sibelius",
          "partial": "Sibelius",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "IsSibelius",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#IsSibelius",
          "type": "type"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "IsSibelius",
          "package": "music-sibelius",
          "partial": "Is Sibelius",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:IsSibelius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibArticulation",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibArticulation",
          "package": "music-sibelius",
          "partial": "Sib Articulation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibArticulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibBar",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibBar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibBar",
          "package": "music-sibelius",
          "partial": "Sib Bar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibChord",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibChord",
          "package": "music-sibelius",
          "partial": "Sib Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibClef",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibClef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibClef",
          "package": "music-sibelius",
          "partial": "Sib Clef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibClef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibCrescendoLine",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibCrescendoLine",
          "package": "music-sibelius",
          "partial": "Sib Crescendo Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibCrescendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibDiminuendoLine",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibDiminuendoLine",
          "package": "music-sibelius",
          "partial": "Sib Diminuendo Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibDiminuendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElement",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElement",
          "package": "music-sibelius",
          "partial": "Sib Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibKeySignature",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibKeySignature",
          "package": "music-sibelius",
          "partial": "Sib Key Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibKeySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibNote",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibNote",
          "package": "music-sibelius",
          "partial": "Sib Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibScore",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibScore",
          "package": "music-sibelius",
          "partial": "Sib Score",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibSlur",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibSlur",
          "package": "music-sibelius",
          "partial": "Sib Slur",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibSlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibStaff",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibStaff",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibStaff",
          "package": "music-sibelius",
          "partial": "Sib Staff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibStaff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibText",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibText",
          "package": "music-sibelius",
          "partial": "Sib Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibTimeSignature",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibTimeSignature",
          "package": "music-sibelius",
          "partial": "Sib Time Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibTimeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibTuplet",
          "package": "music-sibelius",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibTuplet",
          "package": "music-sibelius",
          "partial": "Sib Tuplet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#t:SibTuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Accent",
          "package": "music-sibelius",
          "signature": "Accent",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Accent",
          "package": "music-sibelius",
          "partial": "Accent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "DownBow",
          "package": "music-sibelius",
          "signature": "DownBow",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "DownBow",
          "package": "music-sibelius",
          "partial": "Down Bow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:DownBow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Harmonic",
          "package": "music-sibelius",
          "signature": "Harmonic",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Harmonic",
          "package": "music-sibelius",
          "partial": "Harmonic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Harmonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Marcato",
          "package": "music-sibelius",
          "signature": "Marcato",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Marcato",
          "package": "music-sibelius",
          "partial": "Marcato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Marcato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Plus",
          "package": "music-sibelius",
          "signature": "Plus",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Plus",
          "package": "music-sibelius",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibBar",
          "package": "music-sibelius",
          "signature": "SibBar",
          "source": "src/Music-Sibelius.html#SibBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibBar",
          "package": "music-sibelius",
          "partial": "Sib Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibChord",
          "package": "music-sibelius",
          "signature": "SibChord",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibChord",
          "package": "music-sibelius",
          "partial": "Sib Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibClef",
          "package": "music-sibelius",
          "signature": "SibClef",
          "source": "src/Music-Sibelius.html#SibClef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibClef",
          "package": "music-sibelius",
          "partial": "Sib Clef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibClef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibCrescendoLine",
          "package": "music-sibelius",
          "signature": "SibCrescendoLine",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibCrescendoLine",
          "package": "music-sibelius",
          "partial": "Sib Crescendo Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibCrescendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibDiminuendoLine",
          "package": "music-sibelius",
          "signature": "SibDiminuendoLine",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibDiminuendoLine",
          "package": "music-sibelius",
          "partial": "Sib Diminuendo Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibDiminuendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementChord",
          "package": "music-sibelius",
          "signature": "SibElementChord SibChord",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementChord",
          "package": "music-sibelius",
          "partial": "Sib Element Chord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementClef",
          "package": "music-sibelius",
          "signature": "SibElementClef SibClef",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementClef",
          "package": "music-sibelius",
          "partial": "Sib Element Clef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementClef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementCrescendoLine",
          "package": "music-sibelius",
          "signature": "SibElementCrescendoLine SibCrescendoLine",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementCrescendoLine",
          "package": "music-sibelius",
          "partial": "Sib Element Crescendo Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementCrescendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementDiminuendoLine",
          "package": "music-sibelius",
          "signature": "SibElementDiminuendoLine SibDiminuendoLine",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementDiminuendoLine",
          "package": "music-sibelius",
          "partial": "Sib Element Diminuendo Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementDiminuendoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementKeySignature",
          "package": "music-sibelius",
          "signature": "SibElementKeySignature SibKeySignature",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementKeySignature",
          "package": "music-sibelius",
          "partial": "Sib Element Key Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementKeySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementSlur",
          "package": "music-sibelius",
          "signature": "SibElementSlur SibSlur",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementSlur",
          "package": "music-sibelius",
          "partial": "Sib Element Slur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementSlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementText",
          "package": "music-sibelius",
          "signature": "SibElementText SibText",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementText",
          "package": "music-sibelius",
          "partial": "Sib Element Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementTimeSignature",
          "package": "music-sibelius",
          "signature": "SibElementTimeSignature SibTimeSignature",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementTimeSignature",
          "package": "music-sibelius",
          "partial": "Sib Element Time Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementTimeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibElementTuplet",
          "package": "music-sibelius",
          "signature": "SibElementTuplet SibTuplet",
          "source": "src/Music-Sibelius.html#SibElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibElementTuplet",
          "package": "music-sibelius",
          "partial": "Sib Element Tuplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibElementTuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibKeySignature",
          "package": "music-sibelius",
          "signature": "SibKeySignature",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibKeySignature",
          "package": "music-sibelius",
          "partial": "Sib Key Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibKeySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibNote",
          "package": "music-sibelius",
          "signature": "SibNote",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibNote",
          "package": "music-sibelius",
          "partial": "Sib Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibScore",
          "package": "music-sibelius",
          "signature": "SibScore",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibScore",
          "package": "music-sibelius",
          "partial": "Sib Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibSlur",
          "package": "music-sibelius",
          "signature": "SibSlur",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibSlur",
          "package": "music-sibelius",
          "partial": "Sib Slur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibSlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibStaff",
          "package": "music-sibelius",
          "signature": "SibStaff",
          "source": "src/Music-Sibelius.html#SibStaff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibStaff",
          "package": "music-sibelius",
          "partial": "Sib Staff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibStaff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibText",
          "package": "music-sibelius",
          "signature": "SibText",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibText",
          "package": "music-sibelius",
          "partial": "Sib Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibTimeSignature",
          "package": "music-sibelius",
          "signature": "SibTimeSignature",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibTimeSignature",
          "package": "music-sibelius",
          "partial": "Sib Time Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibTimeSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "SibTuplet",
          "package": "music-sibelius",
          "signature": "SibTuplet",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "SibTuplet",
          "package": "music-sibelius",
          "partial": "Sib Tuplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:SibTuplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Staccatissimo",
          "package": "music-sibelius",
          "signature": "Staccatissimo",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Staccatissimo",
          "package": "music-sibelius",
          "partial": "Staccatissimo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Staccatissimo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Staccato",
          "package": "music-sibelius",
          "signature": "Staccato",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Staccato",
          "package": "music-sibelius",
          "partial": "Staccato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Staccato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Tenuto",
          "package": "music-sibelius",
          "signature": "Tenuto",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Tenuto",
          "package": "music-sibelius",
          "partial": "Tenuto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Tenuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "UpBow",
          "package": "music-sibelius",
          "signature": "UpBow",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "UpBow",
          "package": "music-sibelius",
          "partial": "Up Bow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:UpBow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "Wedge",
          "package": "music-sibelius",
          "signature": "Wedge",
          "source": "src/Music-Sibelius.html#SibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "Wedge",
          "package": "music-sibelius",
          "partial": "Wedge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:Wedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "barElements",
          "package": "music-sibelius",
          "signature": "[SibElement]",
          "source": "src/Music-Sibelius.html#SibBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "barElements",
          "normalized": "[SibElement]",
          "package": "music-sibelius",
          "partial": "Elements",
          "signature": "[SibElement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:barElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordAcciaccatura",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordAcciaccatura",
          "package": "music-sibelius",
          "partial": "Acciaccatura",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordAcciaccatura"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordAppoggiatura",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordAppoggiatura",
          "package": "music-sibelius",
          "partial": "Appoggiatura",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordAppoggiatura"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordArticulations",
          "package": "music-sibelius",
          "signature": "[SibArticulation]",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordArticulations",
          "normalized": "[SibArticulation]",
          "package": "music-sibelius",
          "partial": "Articulations",
          "signature": "[SibArticulation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordArticulations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordDoubleTremolos",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordDoubleTremolos",
          "package": "music-sibelius",
          "partial": "Double Tremolos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordDoubleTremolos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordDuration",
          "package": "music-sibelius",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordNotes",
          "package": "music-sibelius",
          "signature": "[SibNote]",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordNotes",
          "normalized": "[SibNote]",
          "package": "music-sibelius",
          "partial": "Notes",
          "signature": "[SibNote]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordSingleTremolos",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordSingleTremolos",
          "package": "music-sibelius",
          "partial": "Single Tremolos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordSingleTremolos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "chordVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "chordVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:chordVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "clefPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibClef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "clefPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:clefPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "clefStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibClef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "clefStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:clefStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "clefVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibClef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "clefVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:clefVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "crescDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "crescDuration",
          "package": "music-sibelius",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:crescDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "crescPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "crescPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:crescPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "crescStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "crescStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:crescStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "crescVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibCrescendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "crescVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:crescVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "dimDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "dimDuration",
          "package": "music-sibelius",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:dimDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "dimPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "dimPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:dimPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "dimStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "dimStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:dimStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "dimVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibDiminuendoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "dimVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:dimVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "doThing",
          "package": "music-sibelius",
          "signature": "m [String] -\u003e m [SibArticulation]",
          "source": "src/Music-Sibelius.html#doThing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "doThing",
          "normalized": "a[String]-\u003ea[SibArticulation]",
          "package": "music-sibelius",
          "partial": "Thing",
          "signature": "m[String]-\u003em[SibArticulation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:doThing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "every",
          "package": "music-sibelius",
          "signature": "(a -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e b",
          "source": "src/Music-Sibelius.html#every",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "every",
          "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "package": "music-sibelius",
          "signature": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:every"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromJust",
          "package": "music-sibelius",
          "signature": "Maybe t -\u003e t",
          "source": "src/Music-Sibelius.html#fromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "music-sibelius",
          "partial": "Just",
          "signature": "Maybe t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromSibBar",
          "package": "music-sibelius",
          "signature": "SibBar -\u003e Score (Maybe a)",
          "source": "src/Music-Sibelius.html#fromSibBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromSibBar",
          "normalized": "SibBar-\u003eScore(Maybe a)",
          "package": "music-sibelius",
          "partial": "Sib Bar",
          "signature": "SibBar-\u003eScore(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSibBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromSibChord",
          "package": "music-sibelius",
          "signature": "SibChord -\u003e Score a",
          "source": "src/Music-Sibelius.html#fromSibChord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromSibChord",
          "normalized": "SibChord-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Sib Chord",
          "signature": "SibChord-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSibChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromSibElem",
          "package": "music-sibelius",
          "signature": "SibElement -\u003e Score a",
          "source": "src/Music-Sibelius.html#fromSibElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromSibElem",
          "normalized": "SibElement-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Sib Elem",
          "signature": "SibElement-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSibElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromSibNote",
          "package": "music-sibelius",
          "signature": "SibNote -\u003e Score a",
          "source": "src/Music-Sibelius.html#fromSibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromSibNote",
          "normalized": "SibNote-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Sib Note",
          "signature": "SibNote-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSibNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "fromSibStaff",
          "package": "music-sibelius",
          "signature": "SibStaff -\u003e Score a",
          "source": "src/Music-Sibelius.html#fromSibStaff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "fromSibStaff",
          "normalized": "SibStaff-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Sib Staff",
          "signature": "SibStaff-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:fromSibStaff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "keyIsOpen",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "keyIsOpen",
          "package": "music-sibelius",
          "partial": "Is Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:keyIsOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "keyMajor",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "keyMajor",
          "package": "music-sibelius",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:keyMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "keyPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "keyPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:keyPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "keySharps",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "keySharps",
          "package": "music-sibelius",
          "partial": "Sharps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:keySharps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "keyVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibKeySignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "keyVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:keyVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "main",
          "package": "music-sibelius",
          "signature": "IO ()",
          "source": "src/Music-Sibelius.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "main",
          "normalized": "IO()",
          "package": "music-sibelius",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "noteAccidental",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "noteAccidental",
          "package": "music-sibelius",
          "partial": "Accidental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:noteAccidental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "noteDiatonicPitch",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "noteDiatonicPitch",
          "package": "music-sibelius",
          "partial": "Diatonic Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:noteDiatonicPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "notePitch",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "notePitch",
          "package": "music-sibelius",
          "partial": "Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:notePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "noteStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "noteStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:noteStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "noteTied",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "noteTied",
          "package": "music-sibelius",
          "partial": "Tied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:noteTied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "readSibArticulation",
          "package": "music-sibelius",
          "signature": "String -\u003e Maybe SibArticulation",
          "source": "src/Music-Sibelius.html#readSibArticulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "readSibArticulation",
          "normalized": "String-\u003eMaybe SibArticulation",
          "package": "music-sibelius",
          "partial": "Sib Articulation",
          "signature": "String-\u003eMaybe SibArticulation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:readSibArticulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "returnMaybe",
          "package": "music-sibelius",
          "signature": "(a -\u003e Maybe b) -\u003e a -\u003e m b",
          "source": "src/Music-Sibelius.html#returnMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "returnMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003ea-\u003ec b",
          "package": "music-sibelius",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:returnMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreComposer",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreComposer",
          "package": "music-sibelius",
          "partial": "Composer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreComposer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreInformation",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreInformation",
          "package": "music-sibelius",
          "partial": "Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreStaffHeight",
          "package": "music-sibelius",
          "signature": "Double",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreStaffHeight",
          "package": "music-sibelius",
          "partial": "Staff Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreStaffHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreStaves",
          "package": "music-sibelius",
          "signature": "[SibStaff]",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreStaves",
          "normalized": "[SibStaff]",
          "package": "music-sibelius",
          "partial": "Staves",
          "signature": "[SibStaff]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreStaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreSystemStaff",
          "package": "music-sibelius",
          "signature": "()",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreSystemStaff",
          "normalized": "()",
          "package": "music-sibelius",
          "partial": "System Staff",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreSystemStaff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreTitle",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreTitle",
          "package": "music-sibelius",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "scoreTransposing",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "scoreTransposing",
          "package": "music-sibelius",
          "partial": "Transposing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:scoreTransposing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "setComposer",
          "package": "music-sibelius",
          "signature": "String -\u003e Score a -\u003e Score a",
          "source": "src/Music-Sibelius.html#setComposer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "setComposer",
          "normalized": "String-\u003eScore a-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Composer",
          "signature": "String-\u003eScore a-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:setComposer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "setInformation",
          "package": "music-sibelius",
          "signature": "String -\u003e Score a -\u003e Score a",
          "source": "src/Music-Sibelius.html#setInformation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "setInformation",
          "normalized": "String-\u003eScore a-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Information",
          "signature": "String-\u003eScore a-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:setInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "setMeta",
          "package": "music-sibelius",
          "signature": "String -\u003e String -\u003e Score a -\u003e Score a",
          "source": "src/Music-Sibelius.html#setMeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "setMeta",
          "normalized": "String-\u003eString-\u003eScore a-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Meta",
          "signature": "String-\u003eString-\u003eScore a-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:setMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "setTitle",
          "package": "music-sibelius",
          "signature": "String -\u003e Score a -\u003e Score a",
          "source": "src/Music-Sibelius.html#setTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "setTitle",
          "normalized": "String-\u003eScore a-\u003eScore a",
          "package": "music-sibelius",
          "partial": "Title",
          "signature": "String-\u003eScore a-\u003eScore a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "slurDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "slurDuration",
          "package": "music-sibelius",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:slurDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "slurPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "slurPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:slurPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "slurStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "slurStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:slurStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "slurVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibSlur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "slurVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:slurVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "staffBars",
          "package": "music-sibelius",
          "signature": "[SibBar]",
          "source": "src/Music-Sibelius.html#SibStaff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "staffBars",
          "normalized": "[SibBar]",
          "package": "music-sibelius",
          "partial": "Bars",
          "signature": "[SibBar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:staffBars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "staffName",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibStaff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "staffName",
          "package": "music-sibelius",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:staffName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "staffShortName",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibStaff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "staffShortName",
          "package": "music-sibelius",
          "partial": "Short Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:staffShortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "textPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "textPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:textPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "textStyle",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "textStyle",
          "package": "music-sibelius",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:textStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "textText",
          "package": "music-sibelius",
          "signature": "String",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "textText",
          "package": "music-sibelius",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:textText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "textVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "textVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:textVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "timeIsAllaBreve",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "timeIsAllaBreve",
          "package": "music-sibelius",
          "partial": "Is Alla Breve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:timeIsAllaBreve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "timeIsCommon",
          "package": "music-sibelius",
          "signature": "Bool",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "timeIsCommon",
          "package": "music-sibelius",
          "partial": "Is Common",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:timeIsCommon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "timePosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "timePosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:timePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "timeValue",
          "package": "music-sibelius",
          "signature": "Rational",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "timeValue",
          "package": "music-sibelius",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:timeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "timeVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTimeSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "timeVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:timeVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "tupletDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "tupletDuration",
          "package": "music-sibelius",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:tupletDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "tupletPlayedDuration",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "tupletPlayedDuration",
          "package": "music-sibelius",
          "partial": "Played Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:tupletPlayedDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "tupletPosition",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "tupletPosition",
          "package": "music-sibelius",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:tupletPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "tupletValue",
          "package": "music-sibelius",
          "signature": "Rational",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "tupletValue",
          "package": "music-sibelius",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:tupletValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Sibelius",
          "name": "tupletVoice",
          "package": "music-sibelius",
          "signature": "Int",
          "source": "src/Music-Sibelius.html#SibTuplet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Sibelius",
          "module": "Music.Sibelius",
          "name": "tupletVoice",
          "package": "music-sibelius",
          "partial": "Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-sibelius/docs/Music-Sibelius.html#v:tupletVoice"
      }
    }
  ]
]