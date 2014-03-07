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
        "word": "HSoundFile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "AudioError",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#AudioError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "AudioError",
          "package": "HSoundFile",
          "partial": "Audio Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:AudioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Monad to support error handling.\n",
          "module": "Sound.Base",
          "name": "AudioMonad",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#AudioMonad",
          "type": "type"
        },
        "index": {
          "description": "Monad to support error handling",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "AudioMonad",
          "package": "HSoundFile",
          "partial": "Audio Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:AudioMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "AudioSig",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#AudioSig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "AudioSig",
          "package": "HSoundFile",
          "partial": "Audio Sig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:AudioSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The bit depth, or word length, of audio data.\n",
          "module": "Sound.Base",
          "name": "BitDepth",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#BitDepth",
          "type": "type"
        },
        "index": {
          "description": "The bit depth or word length of audio data",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "BitDepth",
          "package": "HSoundFile",
          "partial": "Bit Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:BitDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A position in a data stream, or a length, in frame values.\n",
          "module": "Sound.Base",
          "name": "FrameCount",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#FrameCount",
          "type": "type"
        },
        "index": {
          "description": "position in data stream or length in frame values",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "FrameCount",
          "package": "HSoundFile",
          "partial": "Frame Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:FrameCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The samplerate value, in samples per second.\n",
          "module": "Sound.Base",
          "name": "SampleRate",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SampleRate",
          "type": "type"
        },
        "index": {
          "description": "The samplerate value in samples per second",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SampleRate",
          "package": "HSoundFile",
          "partial": "Sample Rate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "SndFileInfo",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SndFileInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SndFileInfo",
          "package": "HSoundFile",
          "partial": "Snd File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SndFileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "SndFileType",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SndFileType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SndFileType",
          "package": "HSoundFile",
          "partial": "Snd File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SndFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A single sample of audio data.  Represented normalized to [-1,1]\n",
          "module": "Sound.Base",
          "name": "SoundData",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SoundData",
          "type": "type"
        },
        "index": {
          "description": "single sample of audio data Represented normalized to",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SoundData",
          "package": "HSoundFile",
          "partial": "Sound Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SoundData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "SoundFile",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SoundFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SoundFile",
          "package": "HSoundFile",
          "partial": "Sound File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SoundFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "One frame of audio data, i.e. the sample value for each channel in the data.\n",
          "module": "Sound.Base",
          "name": "SoundFrame",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SoundFrame",
          "type": "type"
        },
        "index": {
          "description": "One frame of audio data i.e the sample value for each channel in the data",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SoundFrame",
          "package": "HSoundFile",
          "partial": "Sound Frame",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#t:SoundFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "SndFileCls",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#SndFileCls",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "SndFileCls",
          "package": "HSoundFile",
          "partial": "Snd File Cls",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:SndFileCls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "appendASig",
          "package": "HSoundFile",
          "signature": "AudioSig -\u003e AudioSig -\u003e AudioSig",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#appendASig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "appendASig",
          "normalized": "AudioSig-\u003eAudioSig-\u003eAudioSig",
          "package": "HSoundFile",
          "partial": "ASig",
          "signature": "AudioSig-\u003eAudioSig-\u003eAudioSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:appendASig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The audio data.\n",
          "module": "Sound.Base",
          "name": "audioData",
          "package": "HSoundFile",
          "signature": "AudioSig -\u003e [SoundFrame]",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#audioData",
          "type": "function"
        },
        "index": {
          "description": "The audio data",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "audioData",
          "normalized": "AudioSig-\u003e[SoundFrame]",
          "package": "HSoundFile",
          "partial": "Data",
          "signature": "AudioSig-\u003e[SoundFrame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:audioData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "concatASig",
          "package": "HSoundFile",
          "signature": "[AudioSig] -\u003e AudioSig",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#concatASig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "concatASig",
          "normalized": "[AudioSig]-\u003eAudioSig",
          "package": "HSoundFile",
          "partial": "ASig",
          "signature": "[AudioSig]-\u003eAudioSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:concatASig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "convert a SndFileCls instance to the SoundFile type.\n",
          "module": "Sound.Base",
          "name": "fromSndFileCls",
          "package": "HSoundFile",
          "signature": "a -\u003e AudioMonad m SoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#fromSndFileCls",
          "type": "function"
        },
        "index": {
          "description": "convert SndFileCls instance to the SoundFile type",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "fromSndFileCls",
          "normalized": "a-\u003eAudioMonad b SoundFile",
          "package": "HSoundFile",
          "partial": "Snd File Cls",
          "signature": "a-\u003eAudioMonad m SoundFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:fromSndFileCls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get the AudioSig from the SndFileCls instance.\n",
          "module": "Sound.Base",
          "name": "getAudioData",
          "package": "HSoundFile",
          "signature": "a -\u003e AudioMonad m AudioSig",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#getAudioData",
          "type": "function"
        },
        "index": {
          "description": "Get the AudioSig from the SndFileCls instance",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "getAudioData",
          "normalized": "a-\u003eAudioMonad b AudioSig",
          "package": "HSoundFile",
          "partial": "Audio Data",
          "signature": "a-\u003eAudioMonad m AudioSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:getAudioData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get the length of audio data, in frames.\n",
          "module": "Sound.Base",
          "name": "getAudioLength",
          "package": "HSoundFile",
          "signature": "a -\u003e AudioMonad m FrameCount",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#getAudioLength",
          "type": "function"
        },
        "index": {
          "description": "Get the length of audio data in frames",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "getAudioLength",
          "normalized": "a-\u003eAudioMonad b FrameCount",
          "package": "HSoundFile",
          "partial": "Audio Length",
          "signature": "a-\u003eAudioMonad m FrameCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:getAudioLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "get a \u003ctt\u003e\u003ca\u003eSndFileInfo\u003c/a\u003e\u003c/tt\u003e with data for the current SoundFile\n",
          "module": "Sound.Base",
          "name": "getSfInfo",
          "package": "HSoundFile",
          "signature": "a -\u003e AudioMonad m SndFileInfo",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#getSfInfo",
          "type": "function"
        },
        "index": {
          "description": "get SndFileInfo with data for the current SoundFile",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "getSfInfo",
          "normalized": "a-\u003eAudioMonad b SndFileInfo",
          "package": "HSoundFile",
          "partial": "Sf Info",
          "signature": "a-\u003eAudioMonad m SndFileInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:getSfInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "get the type of the underlying instance\n",
          "module": "Sound.Base",
          "name": "getSfType",
          "package": "HSoundFile",
          "signature": "a -\u003e SndFileType",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#getSfType",
          "type": "function"
        },
        "index": {
          "description": "get the type of the underlying instance",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "getSfType",
          "normalized": "a-\u003eSndFileType",
          "package": "HSoundFile",
          "partial": "Sf Type",
          "signature": "a-\u003eSndFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:getSfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Interleave a [[\u003ctt\u003e\u003ca\u003eSoundData\u003c/a\u003e\u003c/tt\u003e]] to [\u003ctt\u003e\u003ca\u003eSoundFrame\u003c/a\u003e\u003c/tt\u003e], e.g. [[l1,l2,l3], [r1,r2,r3]] -\u003e [[l1,r1], [l2,r2], [l3, r3]]\n",
          "module": "Sound.Base",
          "name": "interleave",
          "package": "HSoundFile",
          "signature": "[[SoundData]] -\u003e [SoundFrame]",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave SoundData to SoundFrame e.g l1 l2 l3 r1 r2 r3 l1 r1 l2 r2 l3 r3",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "interleave",
          "normalized": "[[SoundData]]-\u003e[SoundFrame]",
          "package": "HSoundFile",
          "signature": "[[SoundData]]-\u003e[SoundFrame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "length of the audio data.\n",
          "module": "Sound.Base",
          "name": "lengthInFrames",
          "package": "HSoundFile",
          "signature": "AudioSig -\u003e FrameCount",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#lengthInFrames",
          "type": "function"
        },
        "index": {
          "description": "length of the audio data",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "lengthInFrames",
          "normalized": "AudioSig-\u003eFrameCount",
          "package": "HSoundFile",
          "partial": "In Frames",
          "signature": "AudioSig-\u003eFrameCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:lengthInFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Base",
          "name": "makeAudioSignal",
          "package": "HSoundFile",
          "signature": "FrameCount -\u003e [SoundFrame] -\u003e AudioSig",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#makeAudioSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "makeAudioSignal",
          "normalized": "FrameCount-\u003e[SoundFrame]-\u003eAudioSig",
          "package": "HSoundFile",
          "partial": "Audio Signal",
          "signature": "FrameCount-\u003e[SoundFrame]-\u003eAudioSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:makeAudioSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convert an interleaved [\u003ctt\u003e\u003ca\u003eSoundData\u003c/a\u003e\u003c/tt\u003e] (e.g., [l1, r1, l2, r2,...]) to [\u003ctt\u003e\u003ca\u003eSoundFrame\u003c/a\u003e\u003c/tt\u003e]\n",
          "module": "Sound.Base",
          "name": "makeFrames",
          "package": "HSoundFile",
          "signature": "Int -\u003e [SoundData] -\u003e [SoundFrame]",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Base.html#makeFrames",
          "type": "function"
        },
        "index": {
          "description": "Convert an interleaved SoundData e.g l1 r1 l2 r2 to SoundFrame",
          "hierarchy": "Sound Base",
          "module": "Sound.Base",
          "name": "makeFrames",
          "normalized": "Int-\u003e[SoundData]-\u003e[SoundFrame]",
          "package": "HSoundFile",
          "partial": "Frames",
          "signature": "Int-\u003e[SoundData]-\u003e[SoundFrame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Base.html#v:makeFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Codecs.WaveFile",
          "name": "WaveChunk",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Codecs-WaveFile.html#WaveChunk",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Codecs WaveFile",
          "module": "Sound.Codecs.WaveFile",
          "name": "WaveChunk",
          "package": "HSoundFile",
          "partial": "Wave Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#t:WaveChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Codecs.WaveFile",
          "name": "WaveFile",
          "package": "HSoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Codecs-WaveFile.html#WaveFile",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Sound Codecs WaveFile",
          "module": "Sound.Codecs.WaveFile",
          "name": "WaveFile",
          "package": "HSoundFile",
          "partial": "Wave File",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#t:WaveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "return a WaveFile from a bytestring (including header)\n",
          "module": "Sound.Codecs.WaveFile",
          "name": "getWaveFile",
          "package": "HSoundFile",
          "signature": "ByteString -\u003e AudioMonad m WaveFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Codecs-WaveFile.html#getWaveFile",
          "type": "function"
        },
        "index": {
          "description": "return WaveFile from bytestring including header",
          "hierarchy": "Sound Codecs WaveFile",
          "module": "Sound.Codecs.WaveFile",
          "name": "getWaveFile",
          "normalized": "ByteString-\u003eAudioMonad a WaveFile",
          "package": "HSoundFile",
          "partial": "Wave File",
          "signature": "ByteString-\u003eAudioMonad m WaveFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#v:getWaveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "determine (based on header information) if the bytestring is a wave file.\n",
          "module": "Sound.Codecs.WaveFile",
          "name": "isWaveFile",
          "package": "HSoundFile",
          "signature": "ByteString -\u003e Bool",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Codecs-WaveFile.html#isWaveFile",
          "type": "function"
        },
        "index": {
          "description": "determine based on header information if the bytestring is wave file",
          "hierarchy": "Sound Codecs WaveFile",
          "module": "Sound.Codecs.WaveFile",
          "name": "isWaveFile",
          "normalized": "ByteString-\u003eBool",
          "package": "HSoundFile",
          "partial": "Wave File",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#v:isWaveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a WaveFile from a SndFileCls\n",
          "module": "[\"Sound.Codecs.WaveFile\",\"Sound.File\"]",
          "name": "toWaveFile",
          "package": "HSoundFile",
          "signature": "a -\u003e AudioMonad m WaveFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-Codecs-WaveFile.html#toWaveFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#v:toWaveFile\",\"http://hackage.haskell.org/package/HSoundFile/docs/Sound-File.html#v:toWaveFile\"]"
        },
        "index": {
          "description": "Create WaveFile from SndFileCls",
          "hierarchy": "Sound Codecs WaveFile",
          "module": "Sound.Codecs.WaveFile",
          "name": "toWaveFile",
          "normalized": "a-\u003eAudioMonad b WaveFile",
          "package": "HSoundFile",
          "partial": "Wave File",
          "signature": "a-\u003eAudioMonad m WaveFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-Codecs-WaveFile.html#v:toWaveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Decode a Lazy ByteString to a SoundFile.  This should be used instead of Data.Binary decode\n to make sure that the correct file format is used.\n",
          "module": "Sound.File",
          "name": "decodeSoundFileBS",
          "package": "HSoundFile",
          "signature": "ByteString -\u003e AudioMonad m SoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-File.html#decodeSoundFileBS",
          "type": "function"
        },
        "index": {
          "description": "Decode Lazy ByteString to SoundFile This should be used instead of Data.Binary decode to make sure that the correct file format is used",
          "hierarchy": "Sound File",
          "module": "Sound.File",
          "name": "decodeSoundFileBS",
          "normalized": "ByteString-\u003eAudioMonad a SoundFile",
          "package": "HSoundFile",
          "partial": "Sound File BS",
          "signature": "ByteString-\u003eAudioMonad m SoundFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-File.html#v:decodeSoundFileBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attempt to decode a soundfile as the specified type.  Return Nothing on failure.\n This function may be faster than using decodeSoundFileBS if the type is known.\n",
          "module": "Sound.File",
          "name": "decodeSoundFileHinted",
          "package": "HSoundFile",
          "signature": "SndFileType -\u003e ByteString -\u003e AudioMonad m SoundFile",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-File.html#decodeSoundFileHinted",
          "type": "function"
        },
        "index": {
          "description": "Attempt to decode soundfile as the specified type Return Nothing on failure This function may be faster than using decodeSoundFileBS if the type is known",
          "hierarchy": "Sound File",
          "module": "Sound.File",
          "name": "decodeSoundFileHinted",
          "normalized": "SndFileType-\u003eByteString-\u003eAudioMonad a SoundFile",
          "package": "HSoundFile",
          "partial": "Sound File Hinted",
          "signature": "SndFileType-\u003eByteString-\u003eAudioMonad m SoundFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-File.html#v:decodeSoundFileHinted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Find the SndFileType of a ByteString.\n This function assumes that at most the file will match one format.  If more than one format matches,\n the first found will be the format used.\n",
          "module": "Sound.File",
          "name": "getType",
          "package": "HSoundFile",
          "signature": "ByteString -\u003e AudioMonad m SndFileType",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-File.html#getType",
          "type": "function"
        },
        "index": {
          "description": "Find the SndFileType of ByteString This function assumes that at most the file will match one format If more than one format matches the first found will be the format used",
          "hierarchy": "Sound File",
          "module": "Sound.File",
          "name": "getType",
          "normalized": "ByteString-\u003eAudioMonad a SndFileType",
          "package": "HSoundFile",
          "partial": "Type",
          "signature": "ByteString-\u003eAudioMonad m SndFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-File.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Attempt to guess the SndFileType from the extension of the file.\nThis does not check that the file actually is valid data.\n",
          "module": "Sound.File",
          "name": "getTypeFromName",
          "package": "HSoundFile",
          "signature": "FilePath -\u003e AudioMonad m SndFileType",
          "source": "http://hackage.haskell.org/package/HSoundFile/docs/src/Sound-File.html#getTypeFromName",
          "type": "function"
        },
        "index": {
          "description": "Attempt to guess the SndFileType from the extension of the file This does not check that the file actually is valid data",
          "hierarchy": "Sound File",
          "module": "Sound.File",
          "name": "getTypeFromName",
          "normalized": "FilePath-\u003eAudioMonad a SndFileType",
          "package": "HSoundFile",
          "partial": "Type From Name",
          "signature": "FilePath-\u003eAudioMonad m SndFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HSoundFile/docs/Sound-File.html#v:getTypeFromName"
      }
    }
  ]
]