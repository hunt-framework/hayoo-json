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
        "word": "tomato-rubato-openal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Tomato.Speakers",
          "name": "Speakers",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "Speakers",
          "package": "tomato-rubato-openal",
          "partial": "Speakers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory block containing audio data.\n Blockwise audio processing may be faster than lazy lists of samples.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "AudioBlock",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html#AudioBlock",
          "type": "type"
        },
        "index": {
          "description": "Memory block containing audio data Blockwise audio processing may be faster than lazy lists of samples",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "AudioBlock",
          "package": "tomato-rubato-openal",
          "partial": "Audio Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#t:AudioBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of an audio block.\n\u003c/p\u003e\u003cp\u003eThe lower the block size, the lower the latency.\n However, if the block size is too low, there will be jitter.\n\u003c/p\u003e\u003cp\u003eRecommended values: 64, 128, 256, 512\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "BlockSize",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html#BlockSize",
          "type": "type"
        },
        "index": {
          "description": "Size of an audio block The lower the block size the lower the latency However if the block size is too low there will be jitter Recommended values",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "BlockSize",
          "package": "tomato-rubato-openal",
          "partial": "Block Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#t:BlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle audio sample.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "Sample",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html#Sample",
          "type": "type"
        },
        "index": {
          "description": "Single audio sample",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "Sample",
          "package": "tomato-rubato-openal",
          "partial": "Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudio sample rate.\n Needs to be one of the \u003ccode\u003e\u003ca\u003estandardSampleRates\u003c/a\u003e\u003c/code\u003e .\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "SampleRate",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html#SampleRate",
          "type": "type"
        },
        "index": {
          "description": "Audio sample rate Needs to be one of the standardSampleRates",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "SampleRate",
          "package": "tomato-rubato-openal",
          "partial": "Sample Rate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#t:SampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing your loudspeakers.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "Speakers",
          "package": "tomato-rubato-openal",
          "source": "src/Sound-Tomato-Speakers.html#Speakers",
          "type": "data"
        },
        "index": {
          "description": "Data type representing your loudspeakers",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "Speakers",
          "package": "tomato-rubato-openal",
          "partial": "Speakers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#t:Speakers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a block of audio data to the speaker queue.\n May block if the speaker has too much pending data.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "playBlock",
          "package": "tomato-rubato-openal",
          "signature": "Speakers -\u003e AudioBlock -\u003e IO ()",
          "source": "src/Sound-Tomato-Speakers.html#playBlock",
          "type": "function"
        },
        "index": {
          "description": "Add block of audio data to the speaker queue May block if the speaker has too much pending data",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "playBlock",
          "normalized": "Speakers-\u003eAudioBlock-\u003eIO()",
          "package": "tomato-rubato-openal",
          "partial": "Block",
          "signature": "Speakers-\u003eAudioBlock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#v:playBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a (possibly) infinite list of samples.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "playSamples",
          "package": "tomato-rubato-openal",
          "signature": "Speakers -\u003e [Sample] -\u003e IO ()",
          "source": "src/Sound-Tomato-Speakers.html#playSamples",
          "type": "function"
        },
        "index": {
          "description": "Play possibly infinite list of samples",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "playSamples",
          "normalized": "Speakers-\u003e[Sample]-\u003eIO()",
          "package": "tomato-rubato-openal",
          "partial": "Samples",
          "signature": "Speakers-\u003e[Sample]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#v:playSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of standard sample rates, from high quality to low quality\n\u003c/p\u003e\u003cpre\u003e standardSampleRates = [44100,22050,11025]\n\u003c/pre\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "standardSampleRates",
          "package": "tomato-rubato-openal",
          "signature": "[SampleRate]",
          "source": "src/Sound-Tomato-Speakers.html#standardSampleRates",
          "type": "function"
        },
        "index": {
          "description": "List of standard sample rates from high quality to low quality standardSampleRates",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "standardSampleRates",
          "normalized": "[SampleRate]",
          "package": "tomato-rubato-openal",
          "partial": "Sample Rates",
          "signature": "[SampleRate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#v:standardSampleRates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a test sine wave.\n Look at the source code to see how the library is used.\n\u003c/p\u003e\u003cp\u003eThis should be a clear sound, similar to a telephone test tone.\n If there is rattling or hissing, you have a problem.\n\u003c/p\u003e\u003cpre\u003e \u003e testSine 440\n\u003c/pre\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "testSine",
          "package": "tomato-rubato-openal",
          "signature": "Frequency -\u003e IO ()",
          "source": "src/Sound-Tomato-Speakers.html#testSine",
          "type": "function"
        },
        "index": {
          "description": "Play test sine wave Look at the source code to see how the library is used This should be clear sound similar to telephone test tone If there is rattling or hissing you have problem testSine",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "testSine",
          "normalized": "Frequency-\u003eIO()",
          "package": "tomato-rubato-openal",
          "partial": "Sine",
          "signature": "Frequency-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#v:testSine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize audio environment.\n\u003c/p\u003e",
          "module": "Sound.Tomato.Speakers",
          "name": "withSpeakers",
          "package": "tomato-rubato-openal",
          "signature": "SampleRate -\u003e BlockSize -\u003e (Speakers -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-Tomato-Speakers.html#withSpeakers",
          "type": "function"
        },
        "index": {
          "description": "Initialize audio environment",
          "hierarchy": "Sound Tomato Speakers",
          "module": "Sound.Tomato.Speakers",
          "name": "withSpeakers",
          "normalized": "SampleRate-\u003eBlockSize-\u003e(Speakers-\u003eIO a)-\u003eIO a",
          "package": "tomato-rubato-openal",
          "partial": "Speakers",
          "signature": "SampleRate-\u003eBlockSize-\u003e(Speakers-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tomato-rubato-openal/docs/Sound-Tomato-Speakers.html#v:withSpeakers"
      }
    }
  ]
]