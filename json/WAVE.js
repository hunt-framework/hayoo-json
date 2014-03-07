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
        "word": "WAVE"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements reading and writing of the most\n common kinds of WAVE files.  WAVE files are Microsoft\n RIFF audio sample files originally based on the AIFF\n format, and commonly have the .wav filename extension.\n This module currently supports reading and writing\n single-section little-endian PCM audio files containing\n up to 32-bit samples encoded according to the well-known WAVE\n sample encoding.  The interface audio stream format is a\n list of frames of 32-bit (\u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e) left-justified signed\n PCM samples; each frame has one sample per channel.  The\n audio reader and writer are sufficiently lazy that files\n larger than memory can be processed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "source": "src/Data-WAVE.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements reading and writing of the most common kinds of WAVE files WAVE files are Microsoft RIFF audio sample files originally based on the AIFF format and commonly have the wav filename extension This module currently supports reading and writing single-section little-endian PCM audio files containing up to bit samples encoded according to the well-known WAVE sample encoding The interface audio stream format is list of frames of bit Int32 left-justified signed PCM samples each frame has one sample per channel The audio reader and writer are sufficiently lazy that files larger than memory can be processed",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "partial": "WAVE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe header and stream read or written.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "source": "src/Data-WAVE.html#WAVE",
          "type": "data"
        },
        "index": {
          "description": "The header and stream read or written",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "partial": "WAVE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#t:WAVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescriptive information for the audio source.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "WAVEHeader",
          "package": "WAVE",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "data"
        },
        "index": {
          "description": "Descriptive information for the audio source",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVEHeader",
          "package": "WAVE",
          "partial": "WAVEHeader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#t:WAVEHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach sample is a left-justified signed integer, with\n significant bits as given in the header.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "WAVESample",
          "package": "WAVE",
          "source": "src/Data-WAVE.html#WAVESample",
          "type": "type"
        },
        "index": {
          "description": "Each sample is left-justified signed integer with significant bits as given in the header",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVESample",
          "package": "WAVE",
          "partial": "WAVESample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#t:WAVESample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream is a list of frames, each of which is a list of\n samples with one sample per channel.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "WAVESamples",
          "package": "WAVE",
          "source": "src/Data-WAVE.html#WAVESamples",
          "type": "type"
        },
        "index": {
          "description": "stream is list of frames each of which is list of samples with one sample per channel",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVESamples",
          "package": "WAVE",
          "partial": "WAVESamples",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#t:WAVESamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "signature": "WAVE",
          "source": "src/Data-WAVE.html#WAVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVE",
          "package": "WAVE",
          "partial": "WAVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:WAVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WAVE",
          "name": "WAVEHeader",
          "package": "WAVE",
          "signature": "WAVEHeader",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "WAVEHeader",
          "package": "WAVE",
          "partial": "WAVEHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:WAVEHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility routine for working with audio data in floating\n point format.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "doubleToSample",
          "package": "WAVE",
          "signature": "Double -\u003e WAVESample",
          "source": "src/Data-WAVE.html#doubleToSample",
          "type": "function"
        },
        "index": {
          "description": "Utility routine for working with audio data in floating point format",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "doubleToSample",
          "normalized": "Double-\u003eWAVESample",
          "package": "WAVE",
          "partial": "To Sample",
          "signature": "Double-\u003eWAVESample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:doubleToSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the WAVE file at the given path and return the audio data.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "getWAVEFile",
          "package": "WAVE",
          "signature": "String -\u003e IO WAVE",
          "source": "src/Data-WAVE.html#getWAVEFile",
          "type": "function"
        },
        "index": {
          "description": "Read the WAVE file at the given path and return the audio data",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "getWAVEFile",
          "normalized": "String-\u003eIO WAVE",
          "package": "WAVE",
          "partial": "WAVEFile",
          "signature": "String-\u003eIO WAVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:getWAVEFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the WAVE file at the given handle and return the audio data.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "hGetWAVE",
          "package": "WAVE",
          "signature": "Handle -\u003e IO WAVE",
          "source": "src/Data-WAVE.html#hGetWAVE",
          "type": "function"
        },
        "index": {
          "description": "Read the WAVE file at the given handle and return the audio data",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "hGetWAVE",
          "normalized": "Handle-\u003eIO WAVE",
          "package": "WAVE",
          "partial": "Get WAVE",
          "signature": "Handle-\u003eIO WAVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:hGetWAVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given audio data to the given handle as a WAVE file.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "hPutWAVE",
          "package": "WAVE",
          "signature": "Handle -\u003e WAVE -\u003e IO ()",
          "source": "src/Data-WAVE.html#hPutWAVE",
          "type": "function"
        },
        "index": {
          "description": "Write the given audio data to the given handle as WAVE file",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "hPutWAVE",
          "normalized": "Handle-\u003eWAVE-\u003eIO()",
          "package": "WAVE",
          "partial": "Put WAVE",
          "signature": "Handle-\u003eWAVE-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:hPutWAVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given audio data to the given path as a WAVE file.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "putWAVEFile",
          "package": "WAVE",
          "signature": "String -\u003e WAVE -\u003e IO ()",
          "source": "src/Data-WAVE.html#putWAVEFile",
          "type": "function"
        },
        "index": {
          "description": "Write the given audio data to the given path as WAVE file",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "putWAVEFile",
          "normalized": "String-\u003eWAVE-\u003eIO()",
          "package": "WAVE",
          "partial": "WAVEFile",
          "signature": "String-\u003eWAVE-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:putWAVEFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility routine for working with audio data in floating\n point format.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "sampleToDouble",
          "package": "WAVE",
          "signature": "WAVESample -\u003e Double",
          "source": "src/Data-WAVE.html#sampleToDouble",
          "type": "function"
        },
        "index": {
          "description": "Utility routine for working with audio data in floating point format",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "sampleToDouble",
          "normalized": "WAVESample-\u003eDouble",
          "package": "WAVE",
          "partial": "To Double",
          "signature": "WAVESample-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:sampleToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of\n significant bits of left-justified value.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "waveBitsPerSample",
          "package": "WAVE",
          "signature": "Int",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "function"
        },
        "index": {
          "description": "Number of significant bits of left-justified value",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveBitsPerSample",
          "package": "WAVE",
          "partial": "Bits Per Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveBitsPerSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrames per second.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "waveFrameRate",
          "package": "WAVE",
          "signature": "Int",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "function"
        },
        "index": {
          "description": "Frames per second",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveFrameRate",
          "package": "WAVE",
          "partial": "Frame Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveFrameRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf present,\n number of frames in the stream.\n Otherwise, can be (inefficiently)\n inferred from the length of the\n stream.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "waveFrames",
          "package": "WAVE",
          "signature": "Maybe Int",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "function"
        },
        "index": {
          "description": "If present number of frames in the stream Otherwise can be inefficiently inferred from the length of the stream",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveFrames",
          "package": "WAVE",
          "partial": "Frames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WAVE",
          "name": "waveHeader",
          "package": "WAVE",
          "signature": "WAVEHeader",
          "source": "src/Data-WAVE.html#WAVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveHeader",
          "package": "WAVE",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamples per frame.\n\u003c/p\u003e",
          "module": "Data.WAVE",
          "name": "waveNumChannels",
          "package": "WAVE",
          "signature": "Int",
          "source": "src/Data-WAVE.html#WAVEHeader",
          "type": "function"
        },
        "index": {
          "description": "Samples per frame",
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveNumChannels",
          "package": "WAVE",
          "partial": "Num Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveNumChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WAVE",
          "name": "waveSamples",
          "package": "WAVE",
          "signature": "WAVESamples",
          "source": "src/Data-WAVE.html#WAVE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data WAVE",
          "module": "Data.WAVE",
          "name": "waveSamples",
          "package": "WAVE",
          "partial": "Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WAVE/docs/Data-WAVE.html#v:waveSamples"
      }
    }
  ]
]