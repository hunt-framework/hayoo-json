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
        "word": "hsignal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal.EEG",
          "name": "EEG",
          "package": "hsignal",
          "source": "src/Numeric-Signal-EEG.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Signal EEG",
          "module": "Numeric.Signal.EEG",
          "name": "EEG",
          "package": "hsignal",
          "partial": "EEG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-EEG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal.EEG",
          "name": "loadBDF",
          "package": "hsignal",
          "signature": "FilePath -\u003e IO (Maybe (Multichannel Float))",
          "source": "src/Numeric-Signal-EEG-BDF.html#loadBDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Signal EEG",
          "module": "Numeric.Signal.EEG",
          "name": "loadBDF",
          "normalized": "FilePath-\u003eIO(Maybe(Multichannel Float))",
          "package": "hsignal",
          "partial": "BDF",
          "signature": "FilePath-\u003eIO(Maybe(Multichannel Float))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-EEG.html#v:loadBDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignal processing functions, multichannel datatype\n\u003c/p\u003e\u003cp\u003elink with '-threaded' and run with +RTS -Nn, where n is the number of CPUs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "Multichannel",
          "package": "hsignal",
          "source": "src/Numeric-Signal-Multichannel.html",
          "type": "module"
        },
        "index": {
          "description": "Signal processing functions multichannel datatype link with threaded and run with RTS Nn where is the number of CPUs",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "Multichannel",
          "package": "hsignal",
          "partial": "Multichannel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata type with multiple channels\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "Multichannel",
          "package": "hsignal",
          "source": "src/Numeric-Signal-Multichannel.html#Multichannel",
          "type": "data"
        },
        "index": {
          "description": "data type with multiple channels",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "Multichannel",
          "package": "hsignal",
          "partial": "Multichannel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#t:Multichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of channels\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "channels",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Int",
          "source": "src/Numeric-Signal-Multichannel.html#channels",
          "type": "function"
        },
        "index": {
          "description": "the number of channels",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "channels",
          "normalized": "Multichannel a-\u003eInt",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a multichannel data type\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "createMultichannel",
          "package": "hsignal",
          "signature": "Int-\u003e Int-\u003e [Vector a]-\u003e Multichannel a",
          "type": "function"
        },
        "index": {
          "description": "create multichannel data type",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "createMultichannel",
          "normalized": "Int-\u003eInt-\u003e[Vector a]-\u003eMultichannel a",
          "package": "hsignal",
          "partial": "Multichannel",
          "signature": "Int-\u003eInt-\u003e[Vector a]-\u003eMultichannel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:createMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edetrend the data with a specified window size\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "detrend",
          "package": "hsignal",
          "signature": "Int -\u003e Multichannel Double -\u003e Multichannel Double",
          "source": "src/Numeric-Signal-Multichannel.html#detrend",
          "type": "function"
        },
        "index": {
          "description": "detrend the data with specified window size",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "detrend",
          "normalized": "Int-\u003eMultichannel Double-\u003eMultichannel Double",
          "package": "hsignal",
          "signature": "Int-\u003eMultichannel Double-\u003eMultichannel Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:detrend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewas the data detrended?\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "detrended",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Bool",
          "source": "src/Numeric-Signal-Multichannel.html#detrended",
          "type": "function"
        },
        "index": {
          "description": "was the data detrended",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "detrended",
          "normalized": "Multichannel a-\u003eBool",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:detrended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate the entropy of the phase difference between pairs of channels (fills upper half of matrix)\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "entropy_delta_phase",
          "package": "hsignal",
          "signature": "Multichannel a-\u003e Matrix Double",
          "type": "function"
        },
        "index": {
          "description": "calculate the entropy of the phase difference between pairs of channels fills upper half of matrix",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "entropy_delta_phase",
          "normalized": "Multichannel a-\u003eMatrix Double",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:entropy_delta_phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter the data with the given passband\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "filter",
          "package": "hsignal",
          "signature": "(Int, Int) -\u003e Multichannel a -\u003e Multichannel a",
          "source": "src/Numeric-Signal-Multichannel.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter the data with the given passband",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "filter",
          "normalized": "(Int,Int)-\u003eMultichannel a-\u003eMultichannel a",
          "package": "hsignal",
          "signature": "(Int,Int)-\u003eMultichannel a-\u003eMultichannel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewas the data filtered?\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "filtered",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Maybe (Int, Int)",
          "source": "src/Numeric-Signal-Multichannel.html#filtered",
          "type": "function"
        },
        "index": {
          "description": "was the data filtered",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "filtered",
          "normalized": "Multichannel a-\u003eMaybe(Int,Int)",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eMaybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:filtered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract one channel\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "getChannel",
          "package": "hsignal",
          "signature": "Int -\u003e Multichannel a -\u003e Vector a",
          "source": "src/Numeric-Signal-Multichannel.html#getChannel",
          "type": "function"
        },
        "index": {
          "description": "extract one channel",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "getChannel",
          "normalized": "Int-\u003eMultichannel a-\u003eVector a",
          "package": "hsignal",
          "partial": "Channel",
          "signature": "Int-\u003eMultichannel a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract all channels\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "getChannels",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Array Int (Vector a)",
          "source": "src/Numeric-Signal-Multichannel.html#getChannels",
          "type": "function"
        },
        "index": {
          "description": "extract all channels",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "getChannels",
          "normalized": "Multichannel a-\u003eArray Int(Vector a)",
          "package": "hsignal",
          "partial": "Channels",
          "signature": "Multichannel a-\u003eArray Int(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:getChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate histograms\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "histograms",
          "package": "hsignal",
          "signature": "Array Int (Vector a)-\u003e Int-\u003e (Double, Double)-\u003e Int-\u003e Int-\u003e (Double, Double)-\u003e (Double, Double)-\u003e (Array Int Histogram, Array (Int, Int) Histogram2D)",
          "type": "function"
        },
        "index": {
          "description": "calculate histograms",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "histograms",
          "normalized": "Array Int(Vector a)-\u003eInt-\u003e(Double,Double)-\u003eInt-\u003eInt-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Histogram,Array(Int,Int)Histogram D)",
          "package": "hsignal",
          "signature": "Array Int(Vector a)-\u003eInt-\u003e(Double,Double)-\u003eInt-\u003eInt-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Histogram,Array(Int,Int)Histogram D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:histograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap a function executed concurrently\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "mapConcurrently",
          "package": "hsignal",
          "signature": "(Vector a -\u003e Vector b)-\u003e Multichannel a-\u003e Multichannel b",
          "type": "function"
        },
        "index": {
          "description": "map function executed concurrently",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "mapConcurrently",
          "normalized": "(Vector a-\u003eVector b)-\u003eMultichannel a-\u003eMultichannel b",
          "package": "hsignal",
          "partial": "Concurrently",
          "signature": "(Vector a-\u003eVector b)-\u003eMultichannel a-\u003eMultichannel b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:mapConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate the mutual information of the phase between pairs of channels (fills upper half of matrix)\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "mi_phase",
          "package": "hsignal",
          "signature": "Multichannel a-\u003e Matrix Double",
          "type": "function"
        },
        "index": {
          "description": "calculate the mutual information of the phase between pairs of channels fills upper half of matrix",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "mi_phase",
          "normalized": "Multichannel a-\u003eMatrix Double",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:mi_phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe bits of precision\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "precision",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Int",
          "source": "src/Numeric-Signal-Multichannel.html#precision",
          "type": "function"
        },
        "index": {
          "description": "the bits of precision",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "precision",
          "normalized": "Multichannel a-\u003eInt",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal.Multichannel",
          "name": "readMultichannel",
          "package": "hsignal",
          "signature": "FilePath -\u003e IO (Multichannel a)",
          "source": "src/Numeric-Signal-Multichannel.html#readMultichannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "readMultichannel",
          "normalized": "FilePath-\u003eIO(Multichannel a)",
          "package": "hsignal",
          "partial": "Multichannel",
          "signature": "FilePath-\u003eIO(Multichannel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:readMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe length, in samples\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "samples",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Int",
          "source": "src/Numeric-Signal-Multichannel.html#samples",
          "type": "function"
        },
        "index": {
          "description": "the length in samples",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "samples",
          "normalized": "Multichannel a-\u003eInt",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:samples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe sampling rate\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "sampling_rate",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Int",
          "source": "src/Numeric-Signal-Multichannel.html#sampling_rate",
          "type": "function"
        },
        "index": {
          "description": "the sampling rate",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "sampling_rate",
          "normalized": "Multichannel a-\u003eInt",
          "package": "hsignal",
          "signature": "Multichannel a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:sampling_rate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextract a slice of the data\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "slice",
          "package": "hsignal",
          "signature": "Int-\u003e Int-\u003e Multichannel a-\u003e Multichannel a",
          "type": "function"
        },
        "index": {
          "description": "extract slice of the data",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "slice",
          "normalized": "Int-\u003eInt-\u003eMultichannel a-\u003eMultichannel a",
          "package": "hsignal",
          "signature": "Int-\u003eInt-\u003eMultichannel a-\u003eMultichannel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert the data to a matrix with channels as rows\n\u003c/p\u003e",
          "module": "Numeric.Signal.Multichannel",
          "name": "toMatrix",
          "package": "hsignal",
          "signature": "Multichannel a -\u003e Matrix a",
          "source": "src/Numeric-Signal-Multichannel.html#toMatrix",
          "type": "function"
        },
        "index": {
          "description": "convert the data to matrix with channels as rows",
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "toMatrix",
          "normalized": "Multichannel a-\u003eMatrix a",
          "package": "hsignal",
          "partial": "Matrix",
          "signature": "Multichannel a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:toMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal.Multichannel",
          "name": "writeMultichannel",
          "package": "hsignal",
          "signature": "FilePath -\u003e Multichannel a -\u003e IO ()",
          "source": "src/Numeric-Signal-Multichannel.html#writeMultichannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Signal Multichannel",
          "module": "Numeric.Signal.Multichannel",
          "name": "writeMultichannel",
          "normalized": "FilePath-\u003eMultichannel a-\u003eIO()",
          "package": "hsignal",
          "partial": "Multichannel",
          "signature": "FilePath-\u003eMultichannel a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Multichannel.html#v:writeMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNoise generation functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Signal.Noise",
          "name": "Noise",
          "package": "hsignal",
          "source": "src/Numeric-Signal-Noise.html",
          "type": "module"
        },
        "index": {
          "description": "Noise generation functions",
          "hierarchy": "Numeric Signal Noise",
          "module": "Numeric.Signal.Noise",
          "name": "Noise",
          "package": "hsignal",
          "partial": "Noise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Noise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1/f scale invariant noise\n\u003c/p\u003e",
          "module": "Numeric.Signal.Noise",
          "name": "pinkNoise",
          "package": "hsignal",
          "signature": "Double-\u003e Int-\u003e Int-\u003e Vector Double",
          "type": "function"
        },
        "index": {
          "description": "scale invariant noise",
          "hierarchy": "Numeric Signal Noise",
          "module": "Numeric.Signal.Noise",
          "name": "pinkNoise",
          "normalized": "Double-\u003eInt-\u003eInt-\u003eVector Double",
          "package": "hsignal",
          "partial": "Noise",
          "signature": "Double-\u003eInt-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Noise.html#v:pinkNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate noise from a power spectrum\n\u003c/p\u003e",
          "module": "Numeric.Signal.Noise",
          "name": "powerNoise",
          "package": "hsignal",
          "signature": "Vector Double-\u003e Int-\u003e Vector Double",
          "type": "function"
        },
        "index": {
          "description": "generate noise from power spectrum",
          "hierarchy": "Numeric Signal Noise",
          "module": "Numeric.Signal.Noise",
          "name": "powerNoise",
          "normalized": "Vector Double-\u003eInt-\u003eVector Double",
          "package": "hsignal",
          "partial": "Noise",
          "signature": "Vector Double-\u003eInt-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Noise.html#v:powerNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal.Noise",
          "name": "spatialNoise",
          "package": "hsignal",
          "signature": "Double-\u003e Int-\u003e Int-\u003e Int-\u003e Matrix Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Signal Noise",
          "module": "Numeric.Signal.Noise",
          "name": "spatialNoise",
          "normalized": "Double-\u003eInt-\u003eInt-\u003eInt-\u003eMatrix Double",
          "package": "hsignal",
          "partial": "Noise",
          "signature": "Double-\u003eInt-\u003eInt-\u003eInt-\u003eMatrix Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal-Noise.html#v:spatialNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSignal processing functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Signal",
          "name": "Signal",
          "package": "hsignal",
          "source": "src/Numeric-Signal.html",
          "type": "module"
        },
        "index": {
          "description": "Signal processing functions",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "Signal",
          "package": "hsignal",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal",
          "name": "Convolvable",
          "package": "hsignal",
          "source": "src/Numeric-Signal-Internal.html#Convolvable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "Convolvable",
          "package": "hsignal",
          "partial": "Convolvable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#t:Convolvable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Signal",
          "name": "Filterable",
          "package": "hsignal",
          "source": "src/Numeric-Signal-Internal.html#Filterable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "Filterable",
          "package": "hsignal",
          "partial": "Filterable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#t:Filterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe phase of an analytic signal\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "analytic_phase",
          "package": "hsignal",
          "signature": "Vector (Complex a) -\u003e Vector a",
          "source": "src/Numeric-Signal.html#analytic_phase",
          "type": "function"
        },
        "index": {
          "description": "the phase of an analytic signal",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "analytic_phase",
          "normalized": "Vector(Complex a)-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector(Complex a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:analytic_phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe power (amplitude^2 = v * (conj c)) of an analytic signal\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "analytic_power",
          "package": "hsignal",
          "signature": "Vector (Complex Double) -\u003e Vector a",
          "source": "src/Numeric-Signal.html#analytic_power",
          "type": "function"
        },
        "index": {
          "description": "the power amplitude conj of an analytic signal",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "analytic_power",
          "normalized": "Vector(Complex Double)-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector(Complex Double)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:analytic_power"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean analytic signal is the original signal with Hilbert-transformed signal as imaginary component\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "analytic_signal",
          "package": "hsignal",
          "signature": "Vector Double -\u003e Vector (Complex Double)",
          "source": "src/Numeric-Signal.html#analytic_signal",
          "type": "function"
        },
        "index": {
          "description": "an analytic signal is the original signal with Hilbert-transformed signal as imaginary component",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "analytic_signal",
          "normalized": "Vector Double-\u003eVector(Complex Double)",
          "package": "hsignal",
          "signature": "Vector Double-\u003eVector(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:analytic_signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eauto correlation of two signals\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "auto_correlation",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "auto correlation of two signals",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "auto_correlation",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:auto_correlation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eauto covariance of two signals\n     the auto correlation is computed by dividing the result\n     by the variance\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "auto_covariance",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a-\u003e (a, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "auto covariance of two signals the auto correlation is computed by dividing the result by the variance",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "auto_covariance",
          "normalized": "Int-\u003eVector a-\u003e(a,Vector a)",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003e(a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:auto_covariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea broadband filter\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "broadband_filter",
          "package": "hsignal",
          "signature": "Int-\u003e (Int, Int)-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "broadband filter",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "broadband_filter",
          "normalized": "Int-\u003e(Int,Int)-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003e(Int,Int)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:broadband_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea broadband FIR\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "broadband_fir",
          "package": "hsignal",
          "signature": "Int-\u003e (Int, Int)-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "broadband FIR",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "broadband_fir",
          "normalized": "Int-\u003e(Int,Int)-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003e(Int,Int)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:broadband_fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvolve two containers, output is the size of the second argument, no zero padding\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "convolve",
          "package": "hsignal",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Numeric-Signal-Internal.html#convolve",
          "type": "method"
        },
        "index": {
          "description": "convolve two containers output is the size of the second argument no zero padding",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "convolve",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hsignal",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:convolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecross correlation of two signals\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "cross_correlation",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "cross correlation of two signals",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "cross_correlation",
          "normalized": "Int-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:cross_correlation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecross covariance of two signals\n     the cross correlation is computed by dividing the result\n     by the product of the two standard deviations\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "cross_covariance",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a-\u003e Vector a-\u003e (a, a, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "cross covariance of two signals the cross correlation is computed by dividing the result by the product of the two standard deviations",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "cross_covariance",
          "normalized": "Int-\u003eVector a-\u003eVector a-\u003e(a,a,Vector a)",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a-\u003e(a,a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:cross_covariance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute the cross spectrum\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "cross_spectrum",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a-\u003e Vector a-\u003e Vector (Complex Double)",
          "type": "function"
        },
        "index": {
          "description": "compute the cross spectrum",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "cross_spectrum",
          "normalized": "Int-\u003eVector a-\u003eVector a-\u003eVector(Complex Double)",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a-\u003eVector(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:cross_spectrum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecumulative sum of a series\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "cumulative_sum",
          "package": "hsignal",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Numeric-Signal.html#cumulative_sum",
          "type": "function"
        },
        "index": {
          "description": "cumulative sum of series",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "cumulative_sum",
          "normalized": "Vector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:cumulative_sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe difference between consecutive elements of a vector\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "deriv",
          "package": "hsignal",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Numeric-Signal.html#deriv",
          "type": "function"
        },
        "index": {
          "description": "the difference between consecutive elements of vector",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "deriv",
          "normalized": "Vector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:deriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove a linear trend from data\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "detrend",
          "package": "hsignal",
          "signature": "Int-\u003e Vector Double-\u003e Vector Double",
          "type": "function"
        },
        "index": {
          "description": "remove linear trend from data",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "detrend",
          "normalized": "Int-\u003eVector Double-\u003eVector Double",
          "package": "hsignal",
          "signature": "Int-\u003eVector Double-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:detrend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresample, take one sample every n samples in the original\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "downsample",
          "package": "hsignal",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Numeric-Signal.html#downsample",
          "type": "function"
        },
        "index": {
          "description": "resample take one sample every samples in the original",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "downsample",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:downsample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilters the signal\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "filter",
          "package": "hsignal",
          "signature": "Vector a-\u003e Vector a-\u003e Int-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "filters the signal",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "filter",
          "normalized": "Vector a-\u003eVector a-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproduce an FIR filter\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "fir",
          "package": "hsignal",
          "signature": "Int-\u003e [(a, a)]-\u003e Int-\u003e Int-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "produce an FIR filter",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "fir",
          "normalized": "Int-\u003e[(a,a)]-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003e[(a,a)]-\u003eInt-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edetermine the frequency response of a filter, given a vector of frequencies\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "freqzF",
          "package": "hsignal",
          "signature": "Vector a-\u003e Vector a-\u003e Int-\u003e Vector a-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "determine the frequency response of filter given vector of frequencies",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "freqzF",
          "normalized": "Vector a-\u003eVector a-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:freqzF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edetermine the frequency response of a filter, given a number of points and sampling rate\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "freqzN",
          "package": "hsignal",
          "signature": "Vector a-\u003e Vector a-\u003e Int-\u003e Int-\u003e (Vector a, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "determine the frequency response of filter given number of points and sampling rate",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "freqzN",
          "normalized": "Vector a-\u003eVector a-\u003eInt-\u003eInt-\u003e(Vector a,Vector a)",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a-\u003eInt-\u003eInt-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:freqzN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecoefficients of a Hamming window\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "hamming",
          "package": "hsignal",
          "signature": "Int-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "coefficients of Hamming window",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "hamming",
          "normalized": "Int-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:hamming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWelch (1967) power spectrum density using periodogram/FFT method\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "pwelch",
          "package": "hsignal",
          "signature": "Int-\u003e Int-\u003e Vector Double-\u003e (Vector Double, Vector Double)",
          "type": "function"
        },
        "index": {
          "description": "Welch power spectrum density using periodogram FFT method",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "pwelch",
          "normalized": "Int-\u003eInt-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "package": "hsignal",
          "signature": "Int-\u003eInt-\u003eVector Double-\u003e(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:pwelch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresize the vector to length n by resampling\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "resize",
          "package": "hsignal",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Numeric-Signal.html#resize",
          "type": "function"
        },
        "index": {
          "description": "resize the vector to length by resampling",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "resize",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:resize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estandard FIR filter\n |   FIR filter with grid a power of 2 greater than the order, ramp = grid/16, hamming window\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "standard_fir",
          "package": "hsignal",
          "signature": "Int -\u003e [(a, a)] -\u003e Vector a",
          "source": "src/Numeric-Signal.html#standard_fir",
          "type": "function"
        },
        "index": {
          "description": "standard FIR filter FIR filter with grid power of greater than the order ramp grid hamming window",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "standard_fir",
          "normalized": "Int-\u003e[(a,a)]-\u003eVector a",
          "package": "hsignal",
          "signature": "Int-\u003e[(a,a)]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:standard_fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunwrap the phase of signal (input expected to be within (-pi,pi))\n\u003c/p\u003e",
          "module": "Numeric.Signal",
          "name": "unwrap",
          "package": "hsignal",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Numeric-Signal.html#unwrap",
          "type": "function"
        },
        "index": {
          "description": "unwrap the phase of signal input expected to be within pi pi",
          "hierarchy": "Numeric Signal",
          "module": "Numeric.Signal",
          "name": "unwrap",
          "normalized": "Vector a-\u003eVector a",
          "package": "hsignal",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsignal/docs/Numeric-Signal.html#v:unwrap"
      }
    }
  ]
]