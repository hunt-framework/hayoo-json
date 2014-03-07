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
        "word": "hemkay-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the loading function.  The supported formats are\nthe following 31-instrument ProTracker variants: M.K., M!K!, FLT4,\nFLT8, 4CHN, 6CHN, 8CHN, 16CH, 32CH.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Hemkay.Loader",
          "name": "Loader",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Loader.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the loading function The supported formats are the following instrument ProTracker variants M.K FLT4 FLT8 CHN CHN CHN CH CH",
          "hierarchy": "Sound Hemkay Loader",
          "module": "Sound.Hemkay.Loader",
          "name": "Loader",
          "package": "hemkay-core",
          "partial": "Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Loader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a song.  Some exception is thrown in case of failure.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Loader",
          "name": "loadModule",
          "package": "hemkay-core",
          "signature": "FilePath -\u003e IO Song",
          "source": "src/Sound-Hemkay-Loader.html#loadModule",
          "type": "function"
        },
        "index": {
          "description": "Load song Some exception is thrown in case of failure",
          "hierarchy": "Sound Hemkay Loader",
          "module": "Sound.Hemkay.Loader",
          "name": "loadModule",
          "normalized": "FilePath-\u003eIO Song",
          "package": "hemkay-core",
          "partial": "Module",
          "signature": "FilePath-\u003eIO Song",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Loader.html#v:loadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the routines to turn a song into a stream of\nfloating point samples.  Some intermediate structures are also made\navailable to allow more fine-grain control over playback.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "Mixer",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the routines to turn song into stream of floating point samples Some intermediate structures are also made available to allow more fine-grain control over playback",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "Mixer",
          "package": "hemkay-core",
          "partial": "Mixer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of a channel upon entering a tick.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "ChannelState",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "data"
        },
        "index": {
          "description": "The state of channel upon entering tick",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "ChannelState",
          "package": "hemkay-core",
          "partial": "Channel State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#t:ChannelState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "ChunkMixState",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html#ChunkMixState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "ChunkMixState",
          "package": "hemkay-core",
          "partial": "Chunk Mix State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#t:ChunkMixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the player upon entering a tick.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "PlayState",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "data"
        },
        "index": {
          "description": "The state of the player upon entering tick",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "PlayState",
          "package": "hemkay-core",
          "partial": "Play State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#t:PlayState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "Sample",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html#Sample",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "Sample",
          "package": "hemkay-core",
          "partial": "Sample",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "SongMixState",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Mixer.html#SongMixState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "SongMixState",
          "package": "hemkay-core",
          "partial": "Song Mix State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#t:SongMixState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "CS",
          "package": "hemkay-core",
          "signature": "CS",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "CS",
          "package": "hemkay-core",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:CS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "PS",
          "package": "hemkay-core",
          "signature": "PS",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "PS",
          "package": "hemkay-core",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "Smp",
          "package": "hemkay-core",
          "signature": "Smp",
          "source": "src/Sound-Hemkay-Mixer.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "Smp",
          "package": "hemkay-core",
          "partial": "Smp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:Smp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csDelayedInstrument",
          "package": "hemkay-core",
          "signature": "Instrument",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csDelayedInstrument",
          "package": "hemkay-core",
          "partial": "Delayed Instrument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csDelayedInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csDelayedPeriod",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csDelayedPeriod",
          "package": "hemkay-core",
          "partial": "Delayed Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csDelayedPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csEffect",
          "package": "hemkay-core",
          "signature": "[Effect]",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csEffect",
          "normalized": "[Effect]",
          "package": "hemkay-core",
          "partial": "Effect",
          "signature": "[Effect]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csFinePorta",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csFinePorta",
          "package": "hemkay-core",
          "partial": "Fine Porta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csFinePorta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csFineTune",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csFineTune",
          "package": "hemkay-core",
          "partial": "Fine Tune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csFineTune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csFineVolumeSlide",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csFineVolumeSlide",
          "package": "hemkay-core",
          "partial": "Fine Volume Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csFineVolumeSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csInstrument",
          "package": "hemkay-core",
          "signature": "Instrument",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csInstrument",
          "package": "hemkay-core",
          "partial": "Instrument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csPanning",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csPanning",
          "package": "hemkay-core",
          "partial": "Panning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csPanning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csPeriod",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csPeriod",
          "package": "hemkay-core",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csPortaDown",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csPortaDown",
          "package": "hemkay-core",
          "partial": "Porta Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csPortaDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csPortaUp",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csPortaUp",
          "package": "hemkay-core",
          "partial": "Porta Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csPortaUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csSampleStep",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csSampleStep",
          "package": "hemkay-core",
          "partial": "Sample Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csSampleStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csSubSample",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csSubSample",
          "package": "hemkay-core",
          "partial": "Sub Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csSubSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTonePortaEnd",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTonePortaEnd",
          "package": "hemkay-core",
          "partial": "Tone Porta End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTonePortaEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTonePortaSpeed",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTonePortaSpeed",
          "package": "hemkay-core",
          "partial": "Tone Porta Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTonePortaSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloAmp",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloAmp",
          "package": "hemkay-core",
          "partial": "Tremolo Amp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTremoloAmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloDiff",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloDiff",
          "package": "hemkay-core",
          "partial": "Tremolo Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTremoloDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloSpeed",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloSpeed",
          "package": "hemkay-core",
          "partial": "Tremolo Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTremoloSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloWave",
          "package": "hemkay-core",
          "signature": "[Float]",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csTremoloWave",
          "normalized": "[Float]",
          "package": "hemkay-core",
          "partial": "Tremolo Wave",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csTremoloWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoAmp",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoAmp",
          "package": "hemkay-core",
          "partial": "Vibrato Amp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csVibratoAmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoSpeed",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoSpeed",
          "package": "hemkay-core",
          "partial": "Vibrato Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csVibratoSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoWave",
          "package": "hemkay-core",
          "signature": "[Float]",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csVibratoWave",
          "normalized": "[Float]",
          "package": "hemkay-core",
          "partial": "Vibrato Wave",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csVibratoWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csVolume",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csVolume",
          "package": "hemkay-core",
          "partial": "Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csVolumeSlide",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csVolumeSlide",
          "package": "hemkay-core",
          "partial": "Volume Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csVolumeSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "csWaveData",
          "package": "hemkay-core",
          "signature": "WaveData",
          "source": "src/Sound-Hemkay-Mixer.html#ChannelState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "csWaveData",
          "package": "hemkay-core",
          "partial": "Wave Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:csWaveData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a song into a series of pattern rows.  This includes\n handling control structures like pattern breaks, delays and loops.\n Order jumps are ignored.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "flattenSong",
          "package": "hemkay-core",
          "signature": "Song -\u003e [[Note]]",
          "source": "src/Sound-Hemkay-Mixer.html#flattenSong",
          "type": "function"
        },
        "index": {
          "description": "Turn song into series of pattern rows This includes handling control structures like pattern breaks delays and loops Order jumps are ignored",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "flattenSong",
          "normalized": "Song-\u003e[[Note]]",
          "package": "hemkay-core",
          "partial": "Song",
          "signature": "Song-\u003e[[Note]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:flattenSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "leftChannel",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "leftChannel",
          "package": "hemkay-core",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:leftChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMix a single chunk given a play state.  It's equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003enextSample\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eprepareMix\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixChunk",
          "package": "hemkay-core",
          "signature": "PlayState -\u003e [Sample]",
          "source": "src/Sound-Hemkay-Mixer.html#mixChunk",
          "type": "function"
        },
        "index": {
          "description": "Mix single chunk given play state It equivalent to unfoldr nextSample prepareMix",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixChunk",
          "normalized": "PlayState-\u003e[Sample]",
          "package": "hemkay-core",
          "partial": "Chunk",
          "signature": "PlayState-\u003e[Sample]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:mixChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMix a whole song in chunks, pairing up the play states with the\n respective chunks.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixSong",
          "package": "hemkay-core",
          "signature": "Song -\u003e [(PlayState, [Sample])]",
          "source": "src/Sound-Hemkay-Mixer.html#mixSong",
          "type": "function"
        },
        "index": {
          "description": "Mix whole song in chunks pairing up the play states with the respective chunks",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixSong",
          "normalized": "Song-\u003e[(PlayState,[Sample])]",
          "package": "hemkay-core",
          "partial": "Song",
          "signature": "Song-\u003e[(PlayState,[Sample])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:mixSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pointer to a float buffer and a number of samples desired\n (n), mix the appropriate amount of the song and return the mix\n state for the remainder or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if finished.  This is the most\n efficient way to render a song.  Note that each sample consists of\n two floats, so the buffer has to be able to hold 2*n floats.  The\n initial song mix state can be simply created by \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eprepareMix\u003c/a\u003e\u003c/code\u003e\n . \u003ccode\u003e\u003ca\u003eperformSong\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixToBuffer",
          "package": "hemkay-core",
          "signature": "Ptr Float -\u003e Int -\u003e SongMixState -\u003e IO (Maybe SongMixState)",
          "source": "src/Sound-Hemkay-Mixer.html#mixToBuffer",
          "type": "function"
        },
        "index": {
          "description": "Given pointer to float buffer and number of samples desired mix the appropriate amount of the song and return the mix state for the remainder or Nothing if finished This is the most efficient way to render song Note that each sample consists of two floats so the buffer has to be able to hold floats The initial song mix state can be simply created by map prepareMix performSong",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "mixToBuffer",
          "normalized": "Ptr Float-\u003eInt-\u003eSongMixState-\u003eIO(Maybe SongMixState)",
          "package": "hemkay-core",
          "partial": "To Buffer",
          "signature": "Ptr Float-\u003eInt-\u003eSongMixState-\u003eIO(Maybe SongMixState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:mixToBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMix a single sample given a chunk mix state.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n at the end of the chunk.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "nextSample",
          "package": "hemkay-core",
          "signature": "ChunkMixState -\u003e Maybe (Sample, ChunkMixState)",
          "source": "src/Sound-Hemkay-Mixer.html#nextSample",
          "type": "function"
        },
        "index": {
          "description": "Mix single sample given chunk mix state Returns Nothing at the end of the chunk",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "nextSample",
          "normalized": "ChunkMixState-\u003eMaybe(Sample,ChunkMixState)",
          "package": "hemkay-core",
          "partial": "Sample",
          "signature": "ChunkMixState-\u003eMaybe(Sample,ChunkMixState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:nextSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a song into a series of play states, one for each tick.\n It's a shorthand for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eperformTicks\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eflattenSong\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "performSong",
          "package": "hemkay-core",
          "signature": "Song -\u003e [PlayState]",
          "source": "src/Sound-Hemkay-Mixer.html#performSong",
          "type": "function"
        },
        "index": {
          "description": "Turn song into series of play states one for each tick It shorthand for performTicks flattenSong",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "performSong",
          "normalized": "Song-\u003e[PlayState]",
          "package": "hemkay-core",
          "partial": "Song",
          "signature": "Song-\u003e[PlayState]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:performSong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list of rows into a list of play states.  Each row gives\n birth to a number of play states equal to the tempo on that row.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "performTicks",
          "package": "hemkay-core",
          "signature": "[[Note]] -\u003e [PlayState]",
          "source": "src/Sound-Hemkay-Mixer.html#performTicks",
          "type": "function"
        },
        "index": {
          "description": "Turn list of rows into list of play states Each row gives birth to number of play states equal to the tempo on that row",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "performTicks",
          "normalized": "[[Note]]-\u003e[PlayState]",
          "package": "hemkay-core",
          "partial": "Ticks",
          "signature": "[[Note]]-\u003e[PlayState]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:performTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a mixer state from a player state.  This basically strips\n away a lot of unnecessary information and throws away the channels\n that don't contribute to the output in the given chunk.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "prepareMix",
          "package": "hemkay-core",
          "signature": "PlayState -\u003e ChunkMixState",
          "source": "src/Sound-Hemkay-Mixer.html#prepareMix",
          "type": "function"
        },
        "index": {
          "description": "Create mixer state from player state This basically strips away lot of unnecessary information and throws away the channels that don contribute to the output in the given chunk",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "prepareMix",
          "normalized": "PlayState-\u003eChunkMixState",
          "package": "hemkay-core",
          "partial": "Mix",
          "signature": "PlayState-\u003eChunkMixState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:prepareMix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current BPM\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "psBPM",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "function"
        },
        "index": {
          "description": "The current BPM",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "psBPM",
          "package": "hemkay-core",
          "partial": "BPM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:psBPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the channels\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "psChannels",
          "package": "hemkay-core",
          "signature": "[ChannelState]",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "function"
        },
        "index": {
          "description": "The state of the channels",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "psChannels",
          "normalized": "[ChannelState]",
          "package": "hemkay-core",
          "partial": "Channels",
          "signature": "[ChannelState]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:psChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current row during its first tick, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in subsequent ticks\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "psRow",
          "package": "hemkay-core",
          "signature": "Maybe [Note]",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "function"
        },
        "index": {
          "description": "The current row during its first tick Nothing in subsequent ticks",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "psRow",
          "normalized": "Maybe[Note]",
          "package": "hemkay-core",
          "partial": "Row",
          "signature": "Maybe[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:psRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current tempo\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "psTempo",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Mixer.html#PlayState",
          "type": "function"
        },
        "index": {
          "description": "The current tempo",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "psTempo",
          "package": "hemkay-core",
          "partial": "Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:psTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Mixer",
          "name": "rightChannel",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "rightChannel",
          "package": "hemkay-core",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:rightChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe frequency at which mixer output should be played back.  For\n the time being, this is a fixed value.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "sampleFrequency",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Mixer.html#sampleFrequency",
          "type": "function"
        },
        "index": {
          "description": "The frequency at which mixer output should be played back For the time being this is fixed value",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "sampleFrequency",
          "package": "hemkay-core",
          "partial": "Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:sampleFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state of the player given the number of channels.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Mixer",
          "name": "startState",
          "package": "hemkay-core",
          "signature": "Int -\u003e PlayState",
          "source": "src/Sound-Hemkay-Mixer.html#startState",
          "type": "function"
        },
        "index": {
          "description": "The initial state of the player given the number of channels",
          "hierarchy": "Sound Hemkay Mixer",
          "module": "Sound.Hemkay.Mixer",
          "name": "startState",
          "normalized": "Int-\u003ePlayState",
          "package": "hemkay-core",
          "partial": "State",
          "signature": "Int-\u003ePlayState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Mixer.html#v:startState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the song structure definitions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "Music",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the song structure definitions",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Music",
          "package": "hemkay-core",
          "partial": "Music",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Effect",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Effect",
          "package": "hemkay-core",
          "partial": "Effect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Instrument",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Instrument",
          "package": "hemkay-core",
          "partial": "Instrument",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Note",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Note",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Note",
          "package": "hemkay-core",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Pattern",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Pattern",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Pattern",
          "package": "hemkay-core",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "PortaParam",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#PortaParam",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "PortaParam",
          "package": "hemkay-core",
          "partial": "Porta Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:PortaParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Song",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Song",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Song",
          "package": "hemkay-core",
          "partial": "Song",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Song"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "WaveData",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#WaveData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "WaveData",
          "package": "hemkay-core",
          "partial": "Wave Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:WaveData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible waveforms of the vibrato and tremolo effects.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "Waveform",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay-Music.html#Waveform",
          "type": "data"
        },
        "index": {
          "description": "The possible waveforms of the vibrato and tremolo effects",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Waveform",
          "package": "hemkay-core",
          "partial": "Waveform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#t:Waveform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Arpeggio",
          "package": "hemkay-core",
          "signature": "Arpeggio Float Float",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Arpeggio",
          "package": "hemkay-core",
          "partial": "Arpeggio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Arpeggio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "FinePanning",
          "package": "hemkay-core",
          "signature": "FinePanning Float",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "FinePanning",
          "package": "hemkay-core",
          "partial": "Fine Panning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:FinePanning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "FinePortamento",
          "package": "hemkay-core",
          "signature": "FinePortamento PortaParam",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "FinePortamento",
          "package": "hemkay-core",
          "partial": "Fine Portamento",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:FinePortamento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "FineTuneControl",
          "package": "hemkay-core",
          "signature": "FineTuneControl Float",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "FineTuneControl",
          "package": "hemkay-core",
          "partial": "Fine Tune Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:FineTuneControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "FineVolumeSlide",
          "package": "hemkay-core",
          "signature": "FineVolumeSlide (Maybe Float)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "FineVolumeSlide",
          "package": "hemkay-core",
          "partial": "Fine Volume Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:FineVolumeSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Instrument",
          "package": "hemkay-core",
          "signature": "Instrument",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Instrument",
          "package": "hemkay-core",
          "partial": "Instrument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "LastDown",
          "package": "hemkay-core",
          "signature": "LastDown",
          "source": "src/Sound-Hemkay-Music.html#PortaParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "LastDown",
          "package": "hemkay-core",
          "partial": "Last Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:LastDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "LastUp",
          "package": "hemkay-core",
          "signature": "LastUp",
          "source": "src/Sound-Hemkay-Music.html#PortaParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "LastUp",
          "package": "hemkay-core",
          "partial": "Last Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:LastUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Note",
          "package": "hemkay-core",
          "signature": "Note",
          "source": "src/Sound-Hemkay-Music.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Note",
          "package": "hemkay-core",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "NoteCut",
          "package": "hemkay-core",
          "signature": "NoteCut Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "NoteCut",
          "package": "hemkay-core",
          "partial": "Note Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:NoteCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "NoteDelay",
          "package": "hemkay-core",
          "signature": "NoteDelay Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "NoteDelay",
          "package": "hemkay-core",
          "partial": "Note Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:NoteDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "OrderJump",
          "package": "hemkay-core",
          "signature": "OrderJump Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "OrderJump",
          "package": "hemkay-core",
          "partial": "Order Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:OrderJump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "PatternBreak",
          "package": "hemkay-core",
          "signature": "PatternBreak Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "PatternBreak",
          "package": "hemkay-core",
          "partial": "Pattern Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:PatternBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "PatternDelay",
          "package": "hemkay-core",
          "signature": "PatternDelay Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "PatternDelay",
          "package": "hemkay-core",
          "partial": "Pattern Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:PatternDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "PatternLoop",
          "package": "hemkay-core",
          "signature": "PatternLoop (Maybe Int)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "PatternLoop",
          "package": "hemkay-core",
          "partial": "Pattern Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:PatternLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Porta",
          "package": "hemkay-core",
          "signature": "Porta Int",
          "source": "src/Sound-Hemkay-Music.html#PortaParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Porta",
          "package": "hemkay-core",
          "partial": "Porta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Porta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Portamento",
          "package": "hemkay-core",
          "signature": "Portamento PortaParam",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Portamento",
          "package": "hemkay-core",
          "partial": "Portamento",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Portamento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "RetrigNote",
          "package": "hemkay-core",
          "signature": "RetrigNote Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "RetrigNote",
          "package": "hemkay-core",
          "partial": "Retrig Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:RetrigNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SampleOffset",
          "package": "hemkay-core",
          "signature": "SampleOffset Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SampleOffset",
          "package": "hemkay-core",
          "partial": "Sample Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SawtoothWave",
          "package": "hemkay-core",
          "signature": "SawtoothWave",
          "source": "src/Sound-Hemkay-Music.html#Waveform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SawtoothWave",
          "package": "hemkay-core",
          "partial": "Sawtooth Wave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SawtoothWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SetBPM",
          "package": "hemkay-core",
          "signature": "SetBPM Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SetBPM",
          "package": "hemkay-core",
          "partial": "Set BPM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SetBPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SetTempo",
          "package": "hemkay-core",
          "signature": "SetTempo Int",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SetTempo",
          "package": "hemkay-core",
          "partial": "Set Tempo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SetTempo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SetTremoloWaveform",
          "package": "hemkay-core",
          "signature": "SetTremoloWaveform Waveform",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SetTremoloWaveform",
          "package": "hemkay-core",
          "partial": "Set Tremolo Waveform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SetTremoloWaveform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SetVibratoWaveform",
          "package": "hemkay-core",
          "signature": "SetVibratoWaveform Waveform",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SetVibratoWaveform",
          "package": "hemkay-core",
          "partial": "Set Vibrato Waveform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SetVibratoWaveform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SetVolume",
          "package": "hemkay-core",
          "signature": "SetVolume Float",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SetVolume",
          "package": "hemkay-core",
          "partial": "Set Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SetVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SineWave",
          "package": "hemkay-core",
          "signature": "SineWave",
          "source": "src/Sound-Hemkay-Music.html#Waveform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SineWave",
          "package": "hemkay-core",
          "partial": "Sine Wave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SineWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Song",
          "package": "hemkay-core",
          "signature": "Song",
          "source": "src/Sound-Hemkay-Music.html#Song",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Song",
          "package": "hemkay-core",
          "partial": "Song",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Song"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "SquareWave",
          "package": "hemkay-core",
          "signature": "SquareWave",
          "source": "src/Sound-Hemkay-Music.html#Waveform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "SquareWave",
          "package": "hemkay-core",
          "partial": "Square Wave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:SquareWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "TonePortamento",
          "package": "hemkay-core",
          "signature": "TonePortamento (Maybe Int)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "TonePortamento",
          "package": "hemkay-core",
          "partial": "Tone Portamento",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:TonePortamento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Tremolo",
          "package": "hemkay-core",
          "signature": "Tremolo (Maybe Int) (Maybe Int)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Tremolo",
          "package": "hemkay-core",
          "partial": "Tremolo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Tremolo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "Vibrato",
          "package": "hemkay-core",
          "signature": "Vibrato (Maybe Int) (Maybe Int)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "Vibrato",
          "package": "hemkay-core",
          "partial": "Vibrato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:Vibrato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "VolumeSlide",
          "package": "hemkay-core",
          "signature": "VolumeSlide (Maybe Float)",
          "source": "src/Sound-Hemkay-Music.html#Effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "VolumeSlide",
          "package": "hemkay-core",
          "partial": "Volume Slide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:VolumeSlide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial effects, at most two per note.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "effect",
          "package": "hemkay-core",
          "signature": "[Effect]",
          "source": "src/Sound-Hemkay-Music.html#Note",
          "type": "function"
        },
        "index": {
          "description": "Special effects at most two per note",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "effect",
          "normalized": "[Effect]",
          "package": "hemkay-core",
          "signature": "[Effect]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA silent instrument that's not equal to any other in a loaded\n song.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "emptyInstrument",
          "package": "hemkay-core",
          "signature": "Instrument",
          "source": "src/Sound-Hemkay-Music.html#emptyInstrument",
          "type": "function"
        },
        "index": {
          "description": "silent instrument that not equal to any other in loaded song",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "emptyInstrument",
          "package": "hemkay-core",
          "partial": "Instrument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:emptyInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFine tune (-log_12 2..log_12 2).\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "fineTune",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "description": "Fine tune log log",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "fineTune",
          "package": "hemkay-core",
          "partial": "Tune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:fineTune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstrument number, needed for equality check.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "ident",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "description": "Instrument number needed for equality check",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "ident",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe instrument of the note, if any.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "instrument",
          "package": "hemkay-core",
          "signature": "Maybe Instrument",
          "source": "src/Sound-Hemkay-Music.html#Note",
          "type": "function"
        },
        "index": {
          "description": "The instrument of the note if any",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "instrument",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruments.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "instruments",
          "package": "hemkay-core",
          "signature": "[Instrument]",
          "source": "src/Sound-Hemkay-Music.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Instruments",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "instruments",
          "normalized": "[Instrument]",
          "package": "hemkay-core",
          "signature": "[Instrument]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:instruments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstrument name.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "name",
          "package": "hemkay-core",
          "signature": "String",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "description": "Instrument name",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "name",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of channels in a song.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "numChannels",
          "package": "hemkay-core",
          "signature": "Song -\u003e Int",
          "source": "src/Sound-Hemkay-Music.html#numChannels",
          "type": "function"
        },
        "index": {
          "description": "The number of channels in song",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "numChannels",
          "normalized": "Song-\u003eInt",
          "package": "hemkay-core",
          "partial": "Channels",
          "signature": "Song-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:numChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePatterns in the order of playback.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "patterns",
          "package": "hemkay-core",
          "signature": "[Pattern]",
          "source": "src/Sound-Hemkay-Music.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Patterns in the order of playback",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "patterns",
          "normalized": "[Pattern]",
          "package": "hemkay-core",
          "signature": "[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:patterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriod of the note (0 for none); the corresponding frequency is 3546894.6/period.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "period",
          "package": "hemkay-core",
          "signature": "Int",
          "source": "src/Sound-Hemkay-Music.html#Note",
          "type": "function"
        },
        "index": {
          "description": "Period of the note for none the corresponding frequency is period",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "period",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Hemkay.Music",
          "name": "periodName",
          "package": "hemkay-core",
          "signature": "Int -\u003e [Char]",
          "source": "src/Sound-Hemkay-Music.html#periodName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "periodName",
          "normalized": "Int-\u003e[Char]",
          "package": "hemkay-core",
          "partial": "Name",
          "signature": "Int-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:periodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSong title.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "title",
          "package": "hemkay-core",
          "signature": "String",
          "source": "src/Sound-Hemkay-Music.html#Song",
          "type": "function"
        },
        "index": {
          "description": "Song title",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "title",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault volume (0..1).\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "volume",
          "package": "hemkay-core",
          "signature": "Float",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "description": "Default volume",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "volume",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of samples; infinite for looped instruments.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "wave",
          "package": "hemkay-core",
          "signature": "WaveData",
          "source": "src/Sound-Hemkay-Music.html#Instrument",
          "type": "function"
        },
        "index": {
          "description": "List of samples infinite for looped instruments",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "wave",
          "package": "hemkay-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:wave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaveforms needed for vibrato and tremolo effects.  The lists are\n infinite.\n\u003c/p\u003e",
          "module": "Sound.Hemkay.Music",
          "name": "waveForms",
          "package": "hemkay-core",
          "signature": "[(Waveform, [Float])]",
          "source": "src/Sound-Hemkay-Music.html#waveForms",
          "type": "function"
        },
        "index": {
          "description": "Waveforms needed for vibrato and tremolo effects The lists are infinite",
          "hierarchy": "Sound Hemkay Music",
          "module": "Sound.Hemkay.Music",
          "name": "waveForms",
          "normalized": "[(Waveform,[Float])]",
          "package": "hemkay-core",
          "partial": "Forms",
          "signature": "[(Waveform,[Float])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay-Music.html#v:waveForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHemkay (An M.K. Player Whose Name Starts with an H) is a simple music\nmodule player that performs all the mixing in Haskell.  It supports\nthe popular ProTracker format and some of its variations with\ndifferent numbers of channels.  This package contains all the device\nindependent mixing routines of the player.\n\u003c/p\u003e\u003cp\u003eImport this module to gain access to all the functionality, i.e. the\nability to load MOD files and serialise them into sound samples in\nvarious ways.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Hemkay",
          "name": "Hemkay",
          "package": "hemkay-core",
          "source": "src/Sound-Hemkay.html",
          "type": "module"
        },
        "index": {
          "description": "Hemkay An M.K Player Whose Name Starts with an is simple music module player that performs all the mixing in Haskell It supports the popular ProTracker format and some of its variations with different numbers of channels This package contains all the device independent mixing routines of the player Import this module to gain access to all the functionality i.e the ability to load MOD files and serialise them into sound samples in various ways",
          "hierarchy": "Sound Hemkay",
          "module": "Sound.Hemkay",
          "name": "Hemkay",
          "package": "hemkay-core",
          "partial": "Hemkay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hemkay-core/docs/Sound-Hemkay.html#"
      }
    }
  ]
]