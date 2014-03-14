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
        "word": "synthesizer-midi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "ControllerSelection",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "ControllerSelection",
          "package": "synthesizer-midi",
          "partial": "Controller Selection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "Cons",
          "package": "synthesizer-midi",
          "signature": "Cons Controller (Int -\u003e a) a",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "Cons",
          "normalized": "Cons Controller(Int-\u003ea)a",
          "package": "synthesizer-midi",
          "partial": "Cons",
          "signature": "Cons Controller(Int-\u003ea)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e T y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "channelPressure",
          "normalized": "a-\u003ea-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "y-\u003ey-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e T y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "controllerExponential",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e T y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "controllerLinear",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "filter",
          "package": "synthesizer-midi",
          "signature": "[T a] -\u003e T (T StrictTime [(Controller, Int)]) (T Int a)",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "filter",
          "normalized": "[T a]-\u003eT(T StrictTime[(Controller,Int)])(T Int a)",
          "package": "synthesizer-midi",
          "signature": "[T a]-\u003eT(T StrictTime[(Controller,Int)])(T Int a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "fromChannel",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e arrow (T StrictTime [event]) (T StrictTime [(Controller, Int)])",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#fromChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "fromChannel",
          "normalized": "Channel-\u003ea(T StrictTime[b])(T StrictTime[(Controller,Int)])",
          "package": "synthesizer-midi",
          "partial": "Channel",
          "signature": "Channel-\u003earrow(T StrictTime[event])(T StrictTime[(Controller,Int)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:fromChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e T y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSelection.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSelection",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSelection",
          "name": "pitchBend",
          "normalized": "a-\u003ea-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "y-\u003ey-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSelection.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "ControllerSet",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "ControllerSet",
          "package": "synthesizer-midi",
          "partial": "Controller Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "Controller",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#Controller",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "Controller",
          "package": "synthesizer-midi",
          "partial": "Controller",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Synthesizer.MIDI.CausalIO.ControllerSet\",\"Synthesizer.MIDI.PiecewiseConstant.ControllerSet\"]",
          "name": "Controller",
          "package": "synthesizer-midi",
          "signature": "Controller Controller",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#Controller",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:Controller\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:Controller\"]"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "Controller",
          "package": "synthesizer-midi",
          "partial": "Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Synthesizer.MIDI.CausalIO.ControllerSet\",\"Synthesizer.MIDI.PiecewiseConstant.ControllerSet\"]",
          "name": "PitchBend",
          "package": "synthesizer-midi",
          "signature": "PitchBend",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#Controller",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:PitchBend\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:PitchBend\"]"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "PitchBend",
          "package": "synthesizer-midi",
          "partial": "Pitch Bend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:PitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Synthesizer.MIDI.CausalIO.ControllerSet\",\"Synthesizer.MIDI.PiecewiseConstant.ControllerSet\"]",
          "name": "Pressure",
          "package": "synthesizer-midi",
          "signature": "Pressure",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#Controller",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:Pressure\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:Pressure\"]"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "Pressure",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:Pressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Int -\u003e y -\u003e y -\u003e T arrow (T y)",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "bendWheelPressure",
          "normalized": "Int-\u003ea-\u003ea-\u003eT b(T a)",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Int-\u003ey-\u003ey-\u003eT arrow(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e T arrow y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "channelPressure",
          "normalized": "a-\u003ea-\u003eT b a",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "y-\u003ey-\u003eT arrow y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e T arrow y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "controllerExponential",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eT b a",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eT arrow y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e T arrow y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "controllerLinear",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eT b a",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eT arrow y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "fromChannel",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e T (T StrictTime [event]) (T Controller Int)",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#fromChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "fromChannel",
          "normalized": "Channel-\u003eT(T StrictTime[a])(T Controller Int)",
          "package": "synthesizer-midi",
          "partial": "Channel",
          "signature": "Channel-\u003eT(T StrictTime[event])(T Controller Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:fromChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e T arrow y",
          "source": "src/Synthesizer-MIDI-CausalIO-ControllerSet.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "pitchBend",
          "normalized": "a-\u003ea-\u003eT b a",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "y-\u003ey-\u003eT arrow y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "slice",
          "package": "synthesizer-midi",
          "signature": "Controller-\u003e (Int -\u003e y)-\u003e y-\u003e T arrow y",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO ControllerSet",
          "module": "Synthesizer.MIDI.CausalIO.ControllerSet",
          "name": "slice",
          "normalized": "Controller-\u003e(Int-\u003ea)-\u003ea-\u003eT b a",
          "package": "synthesizer-midi",
          "signature": "Controller-\u003e(Int-\u003ey)-\u003ey-\u003eT arrow y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-ControllerSet.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Process",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Process",
          "package": "synthesizer-midi",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Bank",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#Bank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Bank",
          "package": "synthesizer-midi",
          "partial": "Bank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#t:Bank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Events",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#Events",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Events",
          "package": "synthesizer-midi",
          "partial": "Events",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#t:Events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "GateChunk",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#GateChunk",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "GateChunk",
          "package": "synthesizer-midi",
          "partial": "Gate Chunk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#t:GateChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#Instrument",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#t:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyInstrument",
          "package": "synthesizer-midi",
          "signature": "(Program -\u003e Velocity -\u003e Pitch -\u003e T GateChunk chunk) -\u003e arrow (Events (NoteBoundary (NoteId, Maybe Program))) (T NoteOffList (Events (T NoteOffList chunk)))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#applyInstrument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyInstrument",
          "normalized": "(Program-\u003eVelocity-\u003ePitch-\u003eT GateChunk a)-\u003eb(Events(NoteBoundary(NoteId,Maybe Program)))(T NoteOffList(Events(T NoteOffList a)))",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "signature": "(Program-\u003eVelocity-\u003ePitch-\u003eT GateChunk chunk)-\u003earrow(Events(NoteBoundary(NoteId,Maybe Program)))(T NoteOffList(Events(T NoteOffList chunk)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:applyInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyModulatedInstrument",
          "package": "synthesizer-midi",
          "signature": "(Program -\u003e Velocity -\u003e Pitch -\u003e T (T GateChunk ctrl) chunk) -\u003e arrow (T (Events (NoteBoundary (NoteId, Maybe Program))) ctrl) (T (T NoteOffList ctrl) (Events (T (T NoteOffList ctrl) chunk)))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#applyModulatedInstrument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyModulatedInstrument",
          "normalized": "(Program-\u003eVelocity-\u003ePitch-\u003eT(T GateChunk a)b)-\u003ec(T(Events(NoteBoundary(NoteId,Maybe Program)))a)(T(T NoteOffList a)(Events(T(T NoteOffList a)b)))",
          "package": "synthesizer-midi",
          "partial": "Modulated Instrument",
          "signature": "(Program-\u003eVelocity-\u003ePitch-\u003eT(T GateChunk ctrl)chunk)-\u003earrow(T(Events(NoteBoundary(NoteId,Maybe Program)))ctrl)(T(T NoteOffList ctrl)(Events(T(T NoteOffList ctrl)chunk)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:applyModulatedInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyModulation",
          "package": "synthesizer-midi",
          "signature": "T (T ctrl (T time (T ctrl chunk))) (T time chunk)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#applyModulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "applyModulation",
          "package": "synthesizer-midi",
          "partial": "Modulation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:applyModulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "arrangeStorable",
          "package": "synthesizer-midi",
          "signature": "arrow (T StrictTime (Vector a)) (Vector a)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#arrangeStorable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "arrangeStorable",
          "package": "synthesizer-midi",
          "partial": "Storable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:arrangeStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Int -\u003e y -\u003e y -\u003e T (Events event) (T ShortStrictTime (T y))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "bendWheelPressure",
          "normalized": "Channel-\u003eInt-\u003ea-\u003ea-\u003eT(Events b)(T ShortStrictTime(T a))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Channel-\u003eInt-\u003ey-\u003ey-\u003eT(Events event)(T ShortStrictTime(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e T (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "channelPressure",
          "normalized": "Channel-\u003ea-\u003ea-\u003eT(Events b)(T ShortStrictTime a)",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "Channel-\u003ey-\u003ey-\u003eT(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "constant",
          "package": "synthesizer-midi",
          "signature": "y -\u003e arrow (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "constant",
          "normalized": "a-\u003eb(Events c)(T ShortStrictTime a)",
          "package": "synthesizer-midi",
          "signature": "y-\u003earrow(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e T (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "controllerExponential",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eT(Events b)(T ShortStrictTime a)",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eT(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e T (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "controllerLinear",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eT(Events b)(T ShortStrictTime a)",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eT(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "embedPrograms",
          "package": "synthesizer-midi",
          "signature": "Program -\u003e T (Events (Either Program (NoteBoundary Bool))) (Events (NoteBoundary (Maybe Program)))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#embedPrograms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "embedPrograms",
          "normalized": "Program-\u003eT(Events(Either Program(NoteBoundary Bool)))(Events(NoteBoundary(Maybe Program)))",
          "package": "synthesizer-midi",
          "partial": "Programs",
          "signature": "Program-\u003eT(Events(Either Program(NoteBoundary Bool)))(Events(NoteBoundary(Maybe Program)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:embedPrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "flattenControlSchedule",
          "package": "synthesizer-midi",
          "signature": "arrow (T ctrl (T StrictTime [T ctrl chunk])) (T ctrl (T StrictTime (T ctrl chunk)))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#flattenControlSchedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "flattenControlSchedule",
          "normalized": "a(T b(T StrictTime[T b c]))(T b(T StrictTime(T b c)))",
          "package": "synthesizer-midi",
          "partial": "Control Schedule",
          "signature": "arrow(T ctrl(T StrictTime[T ctrl chunk]))(T ctrl(T StrictTime(T ctrl chunk)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:flattenControlSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "initWith",
          "package": "synthesizer-midi",
          "signature": "(y -\u003e c) -\u003e c -\u003e T (Events y) (T ShortStrictTime c)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#initWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "initWith",
          "normalized": "(a-\u003eb)-\u003eb-\u003eT(Events a)(T ShortStrictTime b)",
          "package": "synthesizer-midi",
          "partial": "With",
          "signature": "(y-\u003ec)-\u003ec-\u003eT(Events y)(T ShortStrictTime c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:initWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "mapMaybe",
          "package": "synthesizer-midi",
          "signature": "(a -\u003e Maybe b) -\u003e arrow (f [a]) (f [b])",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003ec(d[a])(d[b])",
          "package": "synthesizer-midi",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003earrow(f[a])(f[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "noteEvents",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e arrow (Events event) (Events (Either Program (NoteBoundary Bool)))",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#noteEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "noteEvents",
          "normalized": "Channel-\u003ea(Events b)(Events(Either Program(NoteBoundary Bool)))",
          "package": "synthesizer-midi",
          "partial": "Events",
          "signature": "Channel-\u003earrow(Events event)(Events(Either Program(NoteBoundary Bool)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:noteEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e T (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "pitchBend",
          "normalized": "Channel-\u003ea-\u003ea-\u003eT(Events b)(T ShortStrictTime a)",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "Channel-\u003ey-\u003ey-\u003eT(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceCore",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Bank y chunk -\u003e T (Events event) (T StrictTime chunk)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#sequenceCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceCore",
          "normalized": "Channel-\u003eBank a b-\u003eT(Events c)(T StrictTime b)",
          "package": "synthesizer-midi",
          "partial": "Core",
          "signature": "Channel-\u003eBank y chunk-\u003eT(Events event)(T StrictTime chunk)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:sequenceCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulated",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e ModulatedBank y ctrl chunk -\u003e T (T (Events event) ctrl) (T StrictTime chunk)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#sequenceModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulated",
          "normalized": "Channel-\u003eModulatedBank a b c-\u003eT(T(Events d)b)(T StrictTime c)",
          "package": "synthesizer-midi",
          "partial": "Modulated",
          "signature": "Channel-\u003eModulatedBank y ctrl chunk-\u003eT(T(Events event)ctrl)(T StrictTime chunk)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:sequenceModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulatedMultiProgram",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Program -\u003e ModulatedBank y ctrl chunk -\u003e T (T (Events event) ctrl) (T StrictTime chunk)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#sequenceModulatedMultiProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulatedMultiProgram",
          "normalized": "Channel-\u003eProgram-\u003eModulatedBank a b c-\u003eT(T(Events d)b)(T StrictTime c)",
          "package": "synthesizer-midi",
          "partial": "Modulated Multi Program",
          "signature": "Channel-\u003eProgram-\u003eModulatedBank y ctrl chunk-\u003eT(T(Events event)ctrl)(T StrictTime chunk)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:sequenceModulatedMultiProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emay replace the other functions\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulatedMultiProgramVelocityPitch",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Program -\u003e (Program -\u003e Velocity -\u003e Pitch -\u003e T (T GateChunk ctrl) chunk) -\u003e T (T (Events event) ctrl) (T StrictTime chunk)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#sequenceModulatedMultiProgramVelocityPitch",
          "type": "function"
        },
        "index": {
          "description": "may replace the other functions",
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceModulatedMultiProgramVelocityPitch",
          "normalized": "Channel-\u003eProgram-\u003e(Program-\u003eVelocity-\u003ePitch-\u003eT(T GateChunk a)b)-\u003eT(T(Events c)a)(T StrictTime b)",
          "package": "synthesizer-midi",
          "partial": "Modulated Multi Program Velocity Pitch",
          "signature": "Channel-\u003eProgram-\u003e(Program-\u003eVelocity-\u003ePitch-\u003eT(T GateChunk ctrl)chunk)-\u003eT(T(Events event)ctrl)(T StrictTime chunk)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:sequenceModulatedMultiProgramVelocityPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceStorable",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Bank y (Vector a) -\u003e T (Events event) (Vector a)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#sequenceStorable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "sequenceStorable",
          "normalized": "Channel-\u003eBank a(Vector b)-\u003eT(Events c)(Vector b)",
          "package": "synthesizer-midi",
          "partial": "Storable",
          "signature": "Channel-\u003eBank y(Vector a)-\u003eT(Events event)(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:sequenceStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "slice",
          "package": "synthesizer-midi",
          "signature": "(event -\u003e Maybe Int) -\u003e (Int -\u003e y) -\u003e y -\u003e T (Events event) (T ShortStrictTime y)",
          "source": "src/Synthesizer-MIDI-CausalIO-Process.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI CausalIO Process",
          "module": "Synthesizer.MIDI.CausalIO.Process",
          "name": "slice",
          "normalized": "(a-\u003eMaybe Int)-\u003e(Int-\u003eb)-\u003eb-\u003eT(Events a)(T ShortStrictTime b)",
          "package": "synthesizer-midi",
          "signature": "(event-\u003eMaybe Int)-\u003e(Int-\u003ey)-\u003ey-\u003eT(Events event)(T ShortStrictTime y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-CausalIO-Process.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "Real",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#Real",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "Real",
          "package": "synthesizer-midi",
          "partial": "Real",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#t:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "ping",
          "package": "synthesizer-midi",
          "signature": "Instrument s Time Voltage Real (T Real)",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "ping",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingRelease",
          "package": "synthesizer-midi",
          "signature": "Instrument s Time Voltage Real (T Real)",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#pingRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingRelease",
          "package": "synthesizer-midi",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:pingRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingReleaseEnvelope",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e T s Time Real (LazyTime s -\u003e T (Phantom s) (Dimensional Scalar Real) (T Real))",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#pingReleaseEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingReleaseEnvelope",
          "normalized": "Real-\u003eT a Time Real(LazyTime a-\u003eT(Phantom a)(Dimensional Scalar Real)(T Real))",
          "package": "synthesizer-midi",
          "partial": "Release Envelope",
          "signature": "Real-\u003eT s Time Real(LazyTime s-\u003eT(Phantom s)(Dimensional Scalar Real)(T Real))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:pingReleaseEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingReleaseFM",
          "package": "synthesizer-midi",
          "signature": "ModulatedInstrument s Time Real (Signal s Scalar Real (T Real) -\u003e Signal s Voltage Real (T Real))",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#pingReleaseFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingReleaseFM",
          "normalized": "ModulatedInstrument a Time Real(Signal a Scalar Real(T Real)-\u003eSignal a Voltage Real(T Real))",
          "package": "synthesizer-midi",
          "partial": "Release FM",
          "signature": "ModulatedInstrument s Time Real(Signal s Scalar Real(T Real)-\u003eSignal s Voltage Real(T Real))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:pingReleaseFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingStereoDetuneFM",
          "package": "synthesizer-midi",
          "signature": "ModulatedInstrument s Time Real (Signal s Scalar Real (T Real) -\u003e Signal s Scalar Real (T Real) -\u003e Signal s Voltage Real (T (T Real)))",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#pingStereoDetuneFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "pingStereoDetuneFM",
          "normalized": "ModulatedInstrument a Time Real(Signal a Scalar Real(T Real)-\u003eSignal a Scalar Real(T Real)-\u003eSignal a Voltage Real(T(T Real)))",
          "package": "synthesizer-midi",
          "partial": "Stereo Detune FM",
          "signature": "ModulatedInstrument s Time Real(Signal s Scalar Real(T Real)-\u003eSignal s Scalar Real(T Real)-\u003eSignal s Voltage Real(T(T Real)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:pingStereoDetuneFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "string",
          "package": "synthesizer-midi",
          "signature": "ModulatedInstrument s Time Real (Signal s Voltage Real (T (T Real)))",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "string",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "stringReleaseEnvelope",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e T s Time Real (LazyTime s -\u003e T (Phantom s) (Dimensional Scalar Real) (T Real))",
          "source": "src/Synthesizer-MIDI-Dimensional-Example-Instrument.html#stringReleaseEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Example Instrument",
          "module": "Synthesizer.MIDI.Dimensional.Example.Instrument",
          "name": "stringReleaseEnvelope",
          "normalized": "Real-\u003eT a Time Real(LazyTime a-\u003eT(Phantom a)(Dimensional Scalar Real)(T Real))",
          "package": "synthesizer-midi",
          "partial": "Release Envelope",
          "signature": "Real-\u003eT s Time Real(LazyTime s-\u003eT(Phantom s)(Dimensional Scalar Real)(T Real))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Example-Instrument.html#v:stringReleaseEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting MIDI controller and key values\nto something meaningful for signal processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "Value",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional-Value.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for converting MIDI controller and key values to something meaningful for signal processing",
          "hierarchy": "Synthesizer MIDI Dimensional Value",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "Value",
          "package": "synthesizer-midi",
          "partial": "Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "T v y -\u003e (T v y, T v y) -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Dimensional-Value.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Value",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "controllerExponential",
          "normalized": "T a b-\u003e(T a b,T a b)-\u003eInt-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "T v y-\u003e(T v y,T v y)-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "T v y -\u003e (T v y, T v y) -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Dimensional-Value.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Value",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "controllerLinear",
          "normalized": "T a b-\u003e(T a b,T a b)-\u003eInt-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "T v y-\u003e(T v y,T v y)-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert pitch to frequency according to the default tuning\nin MIDI 1.0 Detailed Specification.\n\u003c/p\u003e",
          "module": "[\"Synthesizer.MIDI.Dimensional.Value\",\"Synthesizer.MIDI.Dimensional.ValuePlain\"]",
          "name": "frequencyFromPitch",
          "package": "synthesizer-midi",
          "signature": "Pitch -\u003e Frequency y",
          "source": "src/Synthesizer-MIDI-Dimensional-ValuePlain.html#frequencyFromPitch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#v:frequencyFromPitch\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-ValuePlain.html#v:frequencyFromPitch\"]"
        },
        "index": {
          "description": "Convert pitch to frequency according to the default tuning in MIDI Detailed Specification",
          "hierarchy": "Synthesizer MIDI Dimensional Value",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "frequencyFromPitch",
          "normalized": "Pitch-\u003eFrequency a",
          "package": "synthesizer-midi",
          "partial": "From Pitch",
          "signature": "Pitch-\u003eFrequency y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#v:frequencyFromPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "T v y -\u003e y -\u003e T v y -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Dimensional-Value.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional Value",
          "module": "Synthesizer.MIDI.Dimensional.Value",
          "name": "pitchBend",
          "normalized": "T a b-\u003eb-\u003eT a b-\u003eInt-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "T v y-\u003ey-\u003eT v y-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-Value.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting MIDI controller and key values\nto something meaningful for signal processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "ValuePlain",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional-ValuePlain.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for converting MIDI controller and key values to something meaningful for signal processing",
          "hierarchy": "Synthesizer MIDI Dimensional ValuePlain",
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "ValuePlain",
          "package": "synthesizer-midi",
          "partial": "Value Plain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-ValuePlain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "(T v y, T v y) -\u003e Int -\u003e T v y",
          "source": "src/Synthesizer-MIDI-Dimensional-ValuePlain.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional ValuePlain",
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "controllerExponential",
          "normalized": "(T a b,T a b)-\u003eInt-\u003eT a b",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "(T v y,T v y)-\u003eInt-\u003eT v y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-ValuePlain.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "(T v y, T v y) -\u003e Int -\u003e T v y",
          "source": "src/Synthesizer-MIDI-Dimensional-ValuePlain.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional ValuePlain",
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "controllerLinear",
          "normalized": "(T a b,T a b)-\u003eInt-\u003eT a b",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "(T v y,T v y)-\u003eInt-\u003eT v y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-ValuePlain.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "y -\u003e T v y -\u003e Int -\u003e T v y",
          "source": "src/Synthesizer-MIDI-Dimensional-ValuePlain.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional ValuePlain",
          "module": "Synthesizer.MIDI.Dimensional.ValuePlain",
          "name": "pitchBend",
          "normalized": "a-\u003eT b a-\u003eInt-\u003eT b a",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "y-\u003eT v y-\u003eInt-\u003eT v y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional-ValuePlain.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert MIDI events of a MIDI controller to a control signal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Dimensional",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html",
          "type": "module"
        },
        "index": {
          "description": "Convert MIDI events of MIDI controller to control signal",
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Dimensional",
          "package": "synthesizer-midi",
          "partial": "Dimensional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "AmpSignal",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#AmpSignal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "AmpSignal",
          "package": "synthesizer-midi",
          "partial": "Amp Signal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:AmpSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Bank",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#Bank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Bank",
          "package": "synthesizer-midi",
          "partial": "Bank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:Bank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type ensures that all signals generated from the event list\nshare the same sample rate.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Filter",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#Filter",
          "type": "newtype"
        },
        "index": {
          "description": "This type ensures that all signals generated from the event list share the same sample rate",
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Filter",
          "package": "synthesizer-midi",
          "partial": "Filter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#Instrument",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "LazyTime",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#LazyTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "LazyTime",
          "package": "synthesizer-midi",
          "partial": "Lazy Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:LazyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "ModulatedInstrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#ModulatedInstrument",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "ModulatedInstrument",
          "package": "synthesizer-midi",
          "partial": "Modulated Instrument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:ModulatedInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Signal",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Dimensional.html#Signal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Signal",
          "package": "synthesizer-midi",
          "partial": "Signal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Filter",
          "package": "synthesizer-midi",
          "signature": "Filter (Filter event (T s u t a))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "Filter",
          "package": "synthesizer-midi",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "advanceModulationChunk",
          "package": "synthesizer-midi",
          "signature": "StrictTime -\u003e State (AmpSignal s amp signal) StrictTime",
          "source": "src/Synthesizer-MIDI-Dimensional.html#advanceModulationChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "advanceModulationChunk",
          "normalized": "StrictTime-\u003eState(AmpSignal a b c)StrictTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunk",
          "signature": "StrictTime-\u003eState(AmpSignal s amp signal)StrictTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:advanceModulationChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "advanceModulationChunky",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e State (AmpSignal s amp signal) LazyTime",
          "source": "src/Synthesizer-MIDI-Dimensional.html#advanceModulationChunky",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "advanceModulationChunky",
          "normalized": "LazyTime-\u003eState(AmpSignal a b c)LazyTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunky",
          "signature": "LazyTime-\u003eState(AmpSignal s amp signal)LazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:advanceModulationChunky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "applyModulation",
          "package": "synthesizer-midi",
          "signature": "AmpSignal s amp signal -\u003e Modulator (AmpSignal s amp signal -\u003e body) body",
          "source": "src/Synthesizer-MIDI-Dimensional.html#applyModulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "applyModulation",
          "normalized": "AmpSignal a b c-\u003eModulator(AmpSignal a b c-\u003ed)d",
          "package": "synthesizer-midi",
          "partial": "Modulation",
          "signature": "AmpSignal s amp signal-\u003eModulator(AmpSignal s amp signal-\u003ebody)body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:applyModulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "applyModulator",
          "package": "synthesizer-midi",
          "signature": "Modulator a b -\u003e T StrictTime [a] -\u003e T StrictTime [b]",
          "source": "src/Synthesizer-MIDI-Dimensional.html#applyModulator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "applyModulator",
          "normalized": "Modulator a b-\u003eT StrictTime[a]-\u003eT StrictTime[b]",
          "package": "synthesizer-midi",
          "partial": "Modulator",
          "signature": "Modulator a b-\u003eT StrictTime[a]-\u003eT StrictTime[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:applyModulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Int -\u003e T (Recip u) q -\u003e q -\u003e q -\u003e Filter event s u q (Signal s Scalar q (sig q))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "bendWheelPressure",
          "normalized": "Channel-\u003eInt-\u003eT(Recip a)b-\u003eb-\u003eb-\u003eFilter c d a b(Signal d Scalar b(e b))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Channel-\u003eInt-\u003eT(Recip u)q-\u003eq-\u003eq-\u003eFilter event s u q(Signal s Scalar q(sig q))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e T v y -\u003e T v y -\u003e Filter event s u t (Signal s v y (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "channelPressure",
          "normalized": "Channel-\u003eT a b-\u003eT a b-\u003eFilter c d e f(Signal d a b(T b))",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "Channel-\u003eT v y-\u003eT v y-\u003eFilter event s u t(Signal s v y(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "chunkySizeFromLazyTime",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e T",
          "source": "src/Synthesizer-MIDI-Dimensional.html#chunkySizeFromLazyTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "chunkySizeFromLazyTime",
          "normalized": "LazyTime-\u003eT",
          "package": "synthesizer-midi",
          "partial": "Size From Lazy Time",
          "signature": "LazyTime-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:chunkySizeFromLazyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (T v y, T v y) -\u003e T v y -\u003e Filter event s u t (Signal s v y (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "controllerExponential",
          "normalized": "Channel-\u003eController-\u003e(T a b,T a b)-\u003eT a b-\u003eFilter c d e f(Signal d a b(T b))",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Channel-\u003eController-\u003e(T v y,T v y)-\u003eT v y-\u003eFilter event s u t(Signal s v y(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (T v y, T v y) -\u003e T v y -\u003e Filter event s u t (Signal s v y (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "controllerLinear",
          "normalized": "Channel-\u003eController-\u003e(T a b,T a b)-\u003eT a b-\u003eFilter c d e f(Signal d a b(T b))",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Channel-\u003eController-\u003e(T v y,T v y)-\u003eT v y-\u003eFilter event s u t(Signal s v y(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstrument parameters are:\nvelocity from -1 to 1\n(0 is the normal pressure, no pressure aka NoteOff is not supported),\nfrequency is given in Hertz\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "makeInstrumentSounds",
          "package": "synthesizer-midi",
          "signature": "Bank s Time q signal -\u003e T time [Note] -\u003e T s Time q (T time [signal])",
          "source": "src/Synthesizer-MIDI-Dimensional.html#makeInstrumentSounds",
          "type": "function"
        },
        "index": {
          "description": "Instrument parameters are velocity from to is the normal pressure no pressure aka NoteOff is not supported frequency is given in Hertz",
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "makeInstrumentSounds",
          "normalized": "Bank a Time b c-\u003eT d[Note]-\u003eT a Time b(T d[c])",
          "package": "synthesizer-midi",
          "partial": "Instrument Sounds",
          "signature": "Bank s Time q signal-\u003eT time[Note]-\u003eT s Time q(T time[signal])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:makeInstrumentSounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "piecewiseConstant",
          "package": "synthesizer-midi",
          "signature": "T rate amp (T y) -\u003e T rate amp (sig y)",
          "source": "src/Synthesizer-MIDI-Dimensional.html#piecewiseConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "piecewiseConstant",
          "normalized": "T a b(T c)-\u003eT a b(d c)",
          "package": "synthesizer-midi",
          "partial": "Constant",
          "signature": "T rate amp(T y)-\u003eT rate amp(sig y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:piecewiseConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epitchBend channel range center\u003c/code\u003e:\nemits frequencies on an exponential scale from\n\u003ccode\u003ecenter/range\u003c/code\u003e to \u003ccode\u003ecenter*range\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e T v y -\u003e Filter event s u t (Signal s v y (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#pitchBend",
          "type": "function"
        },
        "index": {
          "description": "pitchBend channel range center emits frequencies on an exponential scale from center range to center range",
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "pitchBend",
          "normalized": "Channel-\u003ea-\u003eT b a-\u003eFilter c d e f(Signal d b a(T a))",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "Channel-\u003ey-\u003eT v y-\u003eFilter event s u t(Signal s v y(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "prepareTones",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Program -\u003e Bank s Time q signal -\u003e Filter event s Time q (T StrictTime [signal])",
          "source": "src/Synthesizer-MIDI-Dimensional.html#prepareTones",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "prepareTones",
          "normalized": "Channel-\u003eProgram-\u003eBank a Time b c-\u003eFilter d a Time b(T StrictTime[c])",
          "package": "synthesizer-midi",
          "partial": "Tones",
          "signature": "Channel-\u003eProgram-\u003eBank s Time q signal-\u003eFilter event s Time q(T StrictTime[signal])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:prepareTones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "renderInstrument",
          "package": "synthesizer-midi",
          "signature": "Bank s Time q signal -\u003e Note -\u003e T s Time q signal",
          "source": "src/Synthesizer-MIDI-Dimensional.html#renderInstrument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "renderInstrument",
          "normalized": "Bank a Time b c-\u003eNote-\u003eT a Time b c",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "signature": "Bank s Time q signal-\u003eNote-\u003eT s Time q signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:renderInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "renderSequence",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T u q -\u003e T StrictTime [Signal s u q (T y)] -\u003e Signal s u q (T y)",
          "source": "src/Synthesizer-MIDI-Dimensional.html#renderSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "renderSequence",
          "normalized": "ChunkSize-\u003eT a b-\u003eT StrictTime[Signal c a b(T d)]-\u003eSignal c a b(T d)",
          "package": "synthesizer-midi",
          "partial": "Sequence",
          "signature": "ChunkSize-\u003eT u q-\u003eT StrictTime[Signal s u q(T y)]-\u003eSignal s u q(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:renderSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "runFilter",
          "package": "synthesizer-midi",
          "signature": "T StrictTime [event] -\u003e Filter event s u t a -\u003e T s u t a",
          "source": "src/Synthesizer-MIDI-Dimensional.html#runFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "runFilter",
          "normalized": "T StrictTime[a]-\u003eFilter a b c d e-\u003eT b c d e",
          "package": "synthesizer-midi",
          "partial": "Filter",
          "signature": "T StrictTime[event]-\u003eFilter event s u t a-\u003eT s u t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:runFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequence",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T v q -\u003e Channel -\u003e Instrument s Time v q (T y) -\u003e Filter event s Time q (Signal s v q (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequence",
          "normalized": "ChunkSize-\u003eT a b-\u003eChannel-\u003eInstrument c Time a b(T d)-\u003eFilter e c Time b(Signal c a b(T d))",
          "package": "synthesizer-midi",
          "signature": "ChunkSize-\u003eT v q-\u003eChannel-\u003eInstrument s Time v q(T y)-\u003eFilter event s Time q(Signal s v q(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceModulated",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T v q -\u003e Channel -\u003e ModulatedInstrument s Time q (AmpSignal s amp ctrl -\u003e Signal s v q (T y)) -\u003e Filter event s Time q (AmpSignal s amp ctrl -\u003e Signal s v q (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#sequenceModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceModulated",
          "normalized": "ChunkSize-\u003eT a b-\u003eChannel-\u003eModulatedInstrument c Time b(AmpSignal c d e-\u003eSignal c a b(T f))-\u003eFilter g c Time b(AmpSignal c d e-\u003eSignal c a b(T f))",
          "package": "synthesizer-midi",
          "partial": "Modulated",
          "signature": "ChunkSize-\u003eT v q-\u003eChannel-\u003eModulatedInstrument s Time q(AmpSignal s amp ctrl-\u003eSignal s v q(T y))-\u003eFilter event s Time q(AmpSignal s amp ctrl-\u003eSignal s v q(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:sequenceModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceModulated2",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T v q -\u003e Channel -\u003e ModulatedInstrument s Time q (AmpSignal s amp0 ctrl0 -\u003e AmpSignal s amp1 ctrl1 -\u003e Signal s v q (T y)) -\u003e Filter event s Time q (AmpSignal s amp0 ctrl0 -\u003e AmpSignal s amp1 ctrl1 -\u003e Signal s v q (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#sequenceModulated2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceModulated2",
          "normalized": "ChunkSize-\u003eT a b-\u003eChannel-\u003eModulatedInstrument c Time b(AmpSignal c d e-\u003eAmpSignal c d e-\u003eSignal c a b(T f))-\u003eFilter g c Time b(AmpSignal c d e-\u003eAmpSignal c d e-\u003eSignal c a b(T f))",
          "package": "synthesizer-midi",
          "partial": "Modulated",
          "signature": "ChunkSize-\u003eT v q-\u003eChannel-\u003eModulatedInstrument s Time q(AmpSignal s amp ctrl-\u003eAmpSignal s amp ctrl-\u003eSignal s v q(T y))-\u003eFilter event s Time q(AmpSignal s amp ctrl-\u003eAmpSignal s amp ctrl-\u003eSignal s v q(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:sequenceModulated2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceMultiModulated",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T v q -\u003e Channel -\u003e ModulatedInstrument s Time q instrument -\u003e Filter event s Time q (Modulator instrument (Signal s v q (T y))) -\u003e Filter event s Time q (Signal s v q (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#sequenceMultiModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceMultiModulated",
          "normalized": "ChunkSize-\u003eT a b-\u003eChannel-\u003eModulatedInstrument c Time b d-\u003eFilter e c Time b(Modulator d(Signal c a b(T f)))-\u003eFilter e c Time b(Signal c a b(T f))",
          "package": "synthesizer-midi",
          "partial": "Multi Modulated",
          "signature": "ChunkSize-\u003eT v q-\u003eChannel-\u003eModulatedInstrument s Time q instrument-\u003eFilter event s Time q(Modulator instrument(Signal s v q(T y)))-\u003eFilter event s Time q(Signal s v q(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:sequenceMultiModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceMultiProgram",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T v q -\u003e Channel -\u003e Program -\u003e [Instrument s Time v q (T y)] -\u003e Filter event s Time q (Signal s v q (T y))",
          "source": "src/Synthesizer-MIDI-Dimensional.html#sequenceMultiProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Dimensional",
          "module": "Synthesizer.MIDI.Dimensional",
          "name": "sequenceMultiProgram",
          "normalized": "ChunkSize-\u003eT a b-\u003eChannel-\u003eProgram-\u003e[Instrument c Time a b(T d)]-\u003eFilter e c Time b(Signal c a b(T d))",
          "package": "synthesizer-midi",
          "partial": "Multi Program",
          "signature": "ChunkSize-\u003eT v q-\u003eChannel-\u003eProgram-\u003e[Instrument s Time v q(T y)]-\u003eFilter event s Time q(Signal s v q(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Dimensional.html#v:sequenceMultiProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "EventList",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "EventList",
          "package": "synthesizer-midi",
          "partial": "Event List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Channel",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Channel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Channel",
          "package": "synthesizer-midi",
          "partial": "Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Controller",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Controller",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Controller",
          "package": "synthesizer-midi",
          "partial": "Controller",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Filter",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Filter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Filter",
          "package": "synthesizer-midi",
          "partial": "Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "LazyTime",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#LazyTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "LazyTime",
          "package": "synthesizer-midi",
          "partial": "Lazy Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:LazyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Note",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Note",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Note",
          "package": "synthesizer-midi",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "NoteBoundary",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#NoteBoundary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "NoteBoundary",
          "package": "synthesizer-midi",
          "partial": "Note Boundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:NoteBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Pitch",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Pitch",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Pitch",
          "package": "synthesizer-midi",
          "partial": "Pitch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Pitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Program",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Program",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Program",
          "package": "synthesizer-midi",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "StrictTime",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#StrictTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "StrictTime",
          "package": "synthesizer-midi",
          "partial": "Strict Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:StrictTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Velocity",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-EventList.html#Velocity",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Velocity",
          "package": "synthesizer-midi",
          "partial": "Velocity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#t:Velocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "AllNotesOff",
          "package": "synthesizer-midi",
          "signature": "AllNotesOff",
          "source": "src/Synthesizer-MIDI-EventList.html#NoteBoundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "AllNotesOff",
          "package": "synthesizer-midi",
          "partial": "All Notes Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:AllNotesOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "Note",
          "package": "synthesizer-midi",
          "signature": "Note Program Pitch Velocity LazyTime",
          "source": "src/Synthesizer-MIDI-EventList.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "Note",
          "package": "synthesizer-midi",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "NoteBoundary",
          "package": "synthesizer-midi",
          "signature": "NoteBoundary Pitch Velocity a",
          "source": "src/Synthesizer-MIDI-EventList.html#NoteBoundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "NoteBoundary",
          "package": "synthesizer-midi",
          "partial": "Note Boundary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:NoteBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "case_",
          "package": "synthesizer-midi",
          "signature": "Maybe a -\u003e (a -\u003e b) -\u003e Maybe b",
          "source": "src/Synthesizer-MIDI-EventList.html#case_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "case_",
          "normalized": "Maybe a-\u003e(a-\u003eb)-\u003eMaybe b",
          "package": "synthesizer-midi",
          "signature": "Maybe a-\u003e(a-\u003eb)-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:case_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "checkNoteEvent",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e event -\u003e Maybe (Either Program (NoteBoundary Bool))",
          "source": "src/Synthesizer-MIDI-EventList.html#checkNoteEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "checkNoteEvent",
          "normalized": "Channel-\u003ea-\u003eMaybe(Either Program(NoteBoundary Bool))",
          "package": "synthesizer-midi",
          "partial": "Note Event",
          "signature": "Channel-\u003eevent-\u003eMaybe(Either Program(NoteBoundary Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:checkNoteEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for specific event,\nreturn its time stamp and remove it.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.EventList",
          "name": "durationRemove",
          "package": "synthesizer-midi",
          "signature": "(body -\u003e Bool) -\u003e T time [body] -\u003e (T time, T time [body])",
          "source": "src/Synthesizer-MIDI-EventList.html#durationRemove",
          "type": "function"
        },
        "index": {
          "description": "Search for specific event return its time stamp and remove it",
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "durationRemove",
          "normalized": "(a-\u003eBool)-\u003eT b[a]-\u003e(T b,T b[a])",
          "package": "synthesizer-midi",
          "partial": "Remove",
          "signature": "(body-\u003eBool)-\u003eT time[body]-\u003e(T time,T time[body])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:durationRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "durationRemoveTB",
          "package": "synthesizer-midi",
          "signature": "(body -\u003e Bool) -\u003e T time [body] -\u003e (T time, T time [body])",
          "source": "src/Synthesizer-MIDI-EventList.html#durationRemoveTB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "durationRemoveTB",
          "normalized": "(a-\u003eBool)-\u003eT b[a]-\u003e(T b,T b[a])",
          "package": "synthesizer-midi",
          "partial": "Remove TB",
          "signature": "(body-\u003eBool)-\u003eT time[body]-\u003e(T time,T time[body])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:durationRemoveTB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "embedProgramState",
          "package": "synthesizer-midi",
          "signature": "Either Program (NoteBoundary Bool) -\u003e State Program (Maybe (NoteBoundary (Maybe Program)))",
          "source": "src/Synthesizer-MIDI-EventList.html#embedProgramState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "embedProgramState",
          "normalized": "Either Program(NoteBoundary Bool)-\u003eState Program(Maybe(NoteBoundary(Maybe Program)))",
          "package": "synthesizer-midi",
          "partial": "Program State",
          "signature": "Either Program(NoteBoundary Bool)-\u003eState Program(Maybe(NoteBoundary(Maybe Program)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:embedProgramState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "embedPrograms",
          "package": "synthesizer-midi",
          "signature": "Program -\u003e T StrictTime [Either Program (NoteBoundary Bool)] -\u003e T StrictTime [NoteBoundary (Maybe Program)]",
          "source": "src/Synthesizer-MIDI-EventList.html#embedPrograms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "embedPrograms",
          "normalized": "Program-\u003eT StrictTime[Either Program(NoteBoundary Bool)]-\u003eT StrictTime[NoteBoundary(Maybe Program)]",
          "package": "synthesizer-midi",
          "partial": "Programs",
          "signature": "Program-\u003eT StrictTime[Either Program(NoteBoundary Bool)]-\u003eT StrictTime[NoteBoundary(Maybe Program)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:embedPrograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "getControllerEvents",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e Filter event (T StrictTime [Int])",
          "source": "src/Synthesizer-MIDI-EventList.html#getControllerEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "getControllerEvents",
          "normalized": "Channel-\u003eController-\u003eFilter a(T StrictTime[Int])",
          "package": "synthesizer-midi",
          "partial": "Controller Events",
          "signature": "Channel-\u003eController-\u003eFilter event(T StrictTime[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:getControllerEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "getInstrumentFromArray",
          "package": "synthesizer-midi",
          "signature": "Array Program instr -\u003e Program -\u003e Program -\u003e instr",
          "source": "src/Synthesizer-MIDI-EventList.html#getInstrumentFromArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "getInstrumentFromArray",
          "normalized": "Array Program a-\u003eProgram-\u003eProgram-\u003ea",
          "package": "synthesizer-midi",
          "partial": "Instrument From Array",
          "signature": "Array Program instr-\u003eProgram-\u003eProgram-\u003einstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:getInstrumentFromArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "getNoteEvents",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Filter event (T StrictTime [Either Program (NoteBoundary Bool)])",
          "source": "src/Synthesizer-MIDI-EventList.html#getNoteEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "getNoteEvents",
          "normalized": "Channel-\u003eFilter a(T StrictTime[Either Program(NoteBoundary Bool)])",
          "package": "synthesizer-midi",
          "partial": "Note Events",
          "signature": "Channel-\u003eFilter event(T StrictTime[Either Program(NoteBoundary Bool)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:getNoteEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe turn the strict time values into lazy ones\naccording to the breaks by our beat.\nHowever for the laziness breaks we ignore the events that are filtered out.\nThat is we loose laziness granularity\nbut hopefully gain efficiency by larger blocks.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.EventList",
          "name": "getSlice",
          "package": "synthesizer-midi",
          "signature": "(event -\u003e Maybe a) -\u003e Filter event (T StrictTime [a])",
          "source": "src/Synthesizer-MIDI-EventList.html#getSlice",
          "type": "function"
        },
        "index": {
          "description": "We turn the strict time values into lazy ones according to the breaks by our beat However for the laziness breaks we ignore the events that are filtered out That is we loose laziness granularity but hopefully gain efficiency by larger blocks",
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "getSlice",
          "normalized": "(a-\u003eMaybe b)-\u003eFilter a(T StrictTime[b])",
          "package": "synthesizer-midi",
          "partial": "Slice",
          "signature": "(event-\u003eMaybe a)-\u003eFilter event(T StrictTime[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:getSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "makeInstrumentArray",
          "package": "synthesizer-midi",
          "signature": "[instr] -\u003e Array Program instr",
          "source": "src/Synthesizer-MIDI-EventList.html#makeInstrumentArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "makeInstrumentArray",
          "normalized": "[a]-\u003eArray Program a",
          "package": "synthesizer-midi",
          "partial": "Instrument Array",
          "signature": "[instr]-\u003eArray Program instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:makeInstrumentArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "matchNoteEvents",
          "package": "synthesizer-midi",
          "signature": "T StrictTime [NoteBoundary (Maybe Program)] -\u003e T StrictTime [Note]",
          "source": "src/Synthesizer-MIDI-EventList.html#matchNoteEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "matchNoteEvents",
          "normalized": "T StrictTime[NoteBoundary(Maybe Program)]-\u003eT StrictTime[Note]",
          "package": "synthesizer-midi",
          "partial": "Note Events",
          "signature": "T StrictTime[NoteBoundary(Maybe Program)]-\u003eT StrictTime[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:matchNoteEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.EventList",
          "name": "matchNoteEventsCore",
          "package": "synthesizer-midi",
          "signature": "(noteBnd -\u003e Maybe (noteBnd -\u003e Bool, LazyTime -\u003e Note)) -\u003e T StrictTime [noteBnd] -\u003e T StrictTime [Note]",
          "source": "src/Synthesizer-MIDI-EventList.html#matchNoteEventsCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI EventList",
          "module": "Synthesizer.MIDI.EventList",
          "name": "matchNoteEventsCore",
          "normalized": "(a-\u003eMaybe(a-\u003eBool,LazyTime-\u003eNote))-\u003eT StrictTime[a]-\u003eT StrictTime[Note]",
          "package": "synthesizer-midi",
          "partial": "Note Events Core",
          "signature": "(noteBnd-\u003eMaybe(noteBnd-\u003eBool,LazyTime-\u003eNote))-\u003eT StrictTime[noteBnd]-\u003eT StrictTime[Note]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-EventList.html#v:matchNoteEventsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "Real",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#Real",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "Real",
          "package": "synthesizer-midi",
          "partial": "Real",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#t:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "amplitudeFromVelocity",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#amplitudeFromVelocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "amplitudeFromVelocity",
          "normalized": "Real-\u003eReal",
          "package": "synthesizer-midi",
          "partial": "From Velocity",
          "signature": "Real-\u003eReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:amplitudeFromVelocity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "chunkSize",
          "package": "synthesizer-midi",
          "signature": "ChunkSize",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#chunkSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "chunkSize",
          "package": "synthesizer-midi",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:chunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "colourNoise",
          "package": "synthesizer-midi",
          "signature": "T Real -\u003e T Real -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#colourNoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "colourNoise",
          "normalized": "T Real-\u003eT Real-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "Noise",
          "signature": "T Real-\u003eT Real-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:colourNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "loopTimeModSine",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real -\u003e Real -\u003e Real -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#loopTimeModSine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "loopTimeModSine",
          "normalized": "Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "Time Mod Sine",
          "signature": "Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:loopTimeModSine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "loopTimeModZigZag",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real -\u003e Real -\u003e Real -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#loopTimeModZigZag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "loopTimeModZigZag",
          "normalized": "Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "Time Mod Zig Zag",
          "signature": "Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:loopTimeModZigZag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "ping",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#ping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "ping",
          "normalized": "Real-\u003eReal-\u003eT Real",
          "package": "synthesizer-midi",
          "signature": "Real-\u003eReal-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:ping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingCausal",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (Vector Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingCausal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingCausal",
          "package": "synthesizer-midi",
          "partial": "Causal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingCausal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingDur",
          "package": "synthesizer-midi",
          "signature": "Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingDur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingDur",
          "package": "synthesizer-midi",
          "partial": "Dur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingRelease",
          "package": "synthesizer-midi",
          "signature": "Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingRelease",
          "package": "synthesizer-midi",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseCausal",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (Vector Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingReleaseCausal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseCausal",
          "package": "synthesizer-midi",
          "partial": "Release Causal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingReleaseCausal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseEnvelope",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e LazyTime -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingReleaseEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseEnvelope",
          "normalized": "Real-\u003eLazyTime-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "Release Envelope",
          "signature": "Real-\u003eLazyTime-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingReleaseEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseEnvelopeCausal",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e T GateChunk (Vector Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingReleaseEnvelopeCausal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingReleaseEnvelopeCausal",
          "normalized": "Real-\u003eT GateChunk(Vector Real)",
          "package": "synthesizer-midi",
          "partial": "Release Envelope Causal",
          "signature": "Real-\u003eT GateChunk(Vector Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingReleaseEnvelopeCausal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingStereoRelease",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#pingStereoRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "pingStereoRelease",
          "package": "synthesizer-midi",
          "partial": "Stereo Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:pingStereoRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "readPianoSample",
          "package": "synthesizer-midi",
          "signature": "IO (Real, T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#readPianoSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "readPianoSample",
          "normalized": "IO(Real,T Real)",
          "package": "synthesizer-midi",
          "partial": "Piano Sample",
          "signature": "IO(Real,T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:readPianoSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "readStringSample",
          "package": "synthesizer-midi",
          "signature": "IO (Real, T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#readStringSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "readStringSample",
          "normalized": "IO(Real,T Real)",
          "package": "synthesizer-midi",
          "partial": "String Sample",
          "signature": "IO(Real,T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:readStringSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampleRate",
          "package": "synthesizer-midi",
          "signature": "a",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampleRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampleRate",
          "package": "synthesizer-midi",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampleReleaseEnvelope",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real -\u003e LazyTime -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampleReleaseEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampleReleaseEnvelope",
          "normalized": "Real-\u003eReal-\u003eLazyTime-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "Release Envelope",
          "signature": "Real-\u003eReal-\u003eLazyTime-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampleReleaseEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSound",
          "package": "synthesizer-midi",
          "signature": "(Real, T Real) -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampledSound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSound",
          "normalized": "(Real,T Real)-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "Sound",
          "signature": "(Real,T Real)-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampledSound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundDetuneStereo",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e (Real, T Real) -\u003e Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampledSoundDetuneStereo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundDetuneStereo",
          "normalized": "Real-\u003e(Real,T Real)-\u003eInstrument Real(T Real)",
          "package": "synthesizer-midi",
          "partial": "Sound Detune Stereo",
          "signature": "Real-\u003e(Real,T Real)-\u003eInstrument Real(T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampledSoundDetuneStereo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundDetuneStereoRelease",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e Real -\u003e (Real, T Real) -\u003e Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampledSoundDetuneStereoRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundDetuneStereoRelease",
          "normalized": "Real-\u003eReal-\u003e(Real,T Real)-\u003eInstrument Real(T Real)",
          "package": "synthesizer-midi",
          "partial": "Sound Detune Stereo Release",
          "signature": "Real-\u003eReal-\u003e(Real,T Real)-\u003eInstrument Real(T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampledSoundDetuneStereoRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundGenerator",
          "package": "synthesizer-midi",
          "signature": "(Real, T Real) -\u003e Real -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampledSoundGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundGenerator",
          "normalized": "(Real,T Real)-\u003eReal-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "Sound Generator",
          "signature": "(Real,T Real)-\u003eReal-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampledSoundGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResample a sampled sound with a smooth loop\nusing our time manipulation algorithm.\nTime is first controlled linearly,\nthen switches to a sine or triangular control.\nLoop start must be large enough in order provide enough spare data\nfor interpolation at the beginning\nand loop start plus length must preserve according space at the end.\nOne period is enough space for linear interpolation.\nThe infinite sound we generate is not just a cycle,\nthat uses bounded space.\nInstead we need to compute all the time.\nIn order to avoid duplicate interpolation,\nwe have merged resampling and time looping.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundTimeLoop",
          "package": "synthesizer-midi",
          "signature": "(Real -\u003e Real -\u003e Real -\u003e Real -\u003e T Real) -\u003e (Real, T Real) -\u003e Real -\u003e Real -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#sampledSoundTimeLoop",
          "type": "function"
        },
        "index": {
          "description": "Resample sampled sound with smooth loop using our time manipulation algorithm Time is first controlled linearly then switches to sine or triangular control Loop start must be large enough in order provide enough spare data for interpolation at the beginning and loop start plus length must preserve according space at the end One period is enough space for linear interpolation The infinite sound we generate is not just cycle that uses bounded space Instead we need to compute all the time In order to avoid duplicate interpolation we have merged resampling and time looping",
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "sampledSoundTimeLoop",
          "normalized": "(Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real)-\u003e(Real,T Real)-\u003eReal-\u003eReal-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "Sound Time Loop",
          "signature": "(Real-\u003eReal-\u003eReal-\u003eReal-\u003eT Real)-\u003e(Real,T Real)-\u003eReal-\u003eReal-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:sampledSoundTimeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softString",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softString",
          "package": "synthesizer-midi",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringCausal",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softStringCausal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringCausal",
          "package": "synthesizer-midi",
          "partial": "String Causal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softStringCausal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringCausalProcess",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e T Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softStringCausalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringCausalProcess",
          "normalized": "Real-\u003eT Real(T Real)",
          "package": "synthesizer-midi",
          "partial": "String Causal Process",
          "signature": "Real-\u003eT Real(T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softStringCausalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelope",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e LazyTime -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softStringReleaseEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelope",
          "normalized": "Real-\u003eLazyTime-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "String Release Envelope",
          "signature": "Real-\u003eLazyTime-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softStringReleaseEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelopeCausal",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e LazyTime -\u003e T Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softStringReleaseEnvelopeCausal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelopeCausal",
          "normalized": "Real-\u003eLazyTime-\u003eT Real",
          "package": "synthesizer-midi",
          "partial": "String Release Envelope Causal",
          "signature": "Real-\u003eLazyTime-\u003eT Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softStringReleaseEnvelopeCausal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelopeCausalProcess",
          "package": "synthesizer-midi",
          "signature": "Real -\u003e T Bool Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#softStringReleaseEnvelopeCausalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "softStringReleaseEnvelopeCausalProcess",
          "normalized": "Real-\u003eT Bool Real",
          "package": "synthesizer-midi",
          "partial": "String Release Envelope Causal Process",
          "signature": "Real-\u003eT Bool Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:softStringReleaseEnvelopeCausalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "stringStereoDetuneFM",
          "package": "synthesizer-midi",
          "signature": "T Real -\u003e T Real -\u003e Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#stringStereoDetuneFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "stringStereoDetuneFM",
          "normalized": "T Real-\u003eT Real-\u003eInstrument Real(T Real)",
          "package": "synthesizer-midi",
          "partial": "Stereo Detune FM",
          "signature": "T Real-\u003eT Real-\u003eInstrument Real(T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:stringStereoDetuneFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "stringStereoFM",
          "package": "synthesizer-midi",
          "signature": "T Real -\u003e Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#stringStereoFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "stringStereoFM",
          "normalized": "T Real-\u003eInstrument Real(T Real)",
          "package": "synthesizer-midi",
          "partial": "Stereo FM",
          "signature": "T Real-\u003eInstrument Real(T Real)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:stringStereoFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "timeModulatedSample",
          "package": "synthesizer-midi",
          "signature": "(Real, T Real) -\u003e T Real -\u003e T Real -\u003e T Real -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#timeModulatedSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "timeModulatedSample",
          "normalized": "(Real,T Real)-\u003eT Real-\u003eT Real-\u003eT Real-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "Modulated Sample",
          "signature": "(Real,T Real)-\u003eT Real-\u003eT Real-\u003eT Real-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:timeModulatedSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "tine",
          "package": "synthesizer-midi",
          "signature": "Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#tine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "tine",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:tine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "tineStereo",
          "package": "synthesizer-midi",
          "signature": "Instrument Real (T Real)",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#tineStereo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "tineStereo",
          "package": "synthesizer-midi",
          "partial": "Stereo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:tineStereo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "toneFromFilteredNoise",
          "package": "synthesizer-midi",
          "signature": "T Real -\u003e T Real -\u003e T Real -\u003e T Real -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#toneFromFilteredNoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "toneFromFilteredNoise",
          "normalized": "T Real-\u003eT Real-\u003eT Real-\u003eT Real-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "From Filtered Noise",
          "signature": "T Real-\u003eT Real-\u003eT Real-\u003eT Real-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:toneFromFilteredNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "toneFromNoise",
          "package": "synthesizer-midi",
          "signature": "T Real -\u003e T Real -\u003e Instrument Real Real",
          "source": "src/Synthesizer-MIDI-Example-Instrument.html#toneFromNoise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Example Instrument",
          "module": "Synthesizer.MIDI.Example.Instrument",
          "name": "toneFromNoise",
          "normalized": "T Real-\u003eT Real-\u003eInstrument Real Real",
          "package": "synthesizer-midi",
          "partial": "From Noise",
          "signature": "T Real-\u003eT Real-\u003eInstrument Real Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Example-Instrument.html#v:toneFromNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert MIDI events of a MIDI controller to a control signal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Generic",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "Convert MIDI events of MIDI controller to control signal",
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Generic",
          "package": "synthesizer-midi",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "Bank",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Generic.html#Bank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Bank",
          "package": "synthesizer-midi",
          "partial": "Bank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#t:Bank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "FilterSequence",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Generic.html#FilterSequence",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "FilterSequence",
          "package": "synthesizer-midi",
          "partial": "Filter Sequence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#t:FilterSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Generic.html#Instrument",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#t:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state action for the time\nshould just return the argument time.\nHowever we need this time (or alternatively another result type)\nfor triggering the \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eadvanceModulationChunk\u003c/a\u003e\u003c/code\u003e.\nWithout this strict evaluation,\nthe drop will be delayed until the control curve is actually needed.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Modulator",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Generic.html#Modulator",
          "type": "data"
        },
        "index": {
          "description": "The state action for the time should just return the argument time However we need this time or alternatively another result type for triggering the drop in advanceModulationChunk Without this strict evaluation the drop will be delayed until the control curve is actually needed",
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Modulator",
          "package": "synthesizer-midi",
          "partial": "Modulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#t:Modulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "Modulator",
          "package": "synthesizer-midi",
          "signature": "forall state . Modulator state (StrictTime -\u003e State state StrictTime) (note -\u003e State state signal)",
          "source": "src/Synthesizer-MIDI-Generic.html#Modulator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "Modulator",
          "normalized": "a b Modulator b(StrictTime-\u003eState b StrictTime)(c-\u003eState b d)",
          "package": "synthesizer-midi",
          "partial": "Modulator",
          "signature": "forall state Modulator state(StrictTime-\u003eState state StrictTime)(note-\u003eState state signal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:Modulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulation",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e State signal LazyTime",
          "source": "src/Synthesizer-MIDI-Generic.html#advanceModulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulation",
          "normalized": "LazyTime-\u003eState a LazyTime",
          "package": "synthesizer-midi",
          "partial": "Modulation",
          "signature": "LazyTime-\u003eState signal LazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:advanceModulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Synthesizer.MIDI.Generic\",\"Synthesizer.MIDI.Storable\"]",
          "name": "advanceModulationChunk",
          "package": "synthesizer-midi",
          "signature": "StrictTime -\u003e State signal StrictTime",
          "source": "src/Synthesizer-MIDI-Generic.html#advanceModulationChunk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:advanceModulationChunk\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:advanceModulationChunk\"]"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulationChunk",
          "normalized": "StrictTime-\u003eState a StrictTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunk",
          "signature": "StrictTime-\u003eState signal StrictTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:advanceModulationChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulationChunkPC",
          "package": "synthesizer-midi",
          "signature": "StrictTime -\u003e State (T StrictTime body) StrictTime",
          "source": "src/Synthesizer-MIDI-Generic.html#advanceModulationChunkPC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulationChunkPC",
          "normalized": "StrictTime-\u003eState(T StrictTime a)StrictTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunk PC",
          "signature": "StrictTime-\u003eState(T StrictTime body)StrictTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:advanceModulationChunkPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulationChunkStrict",
          "package": "synthesizer-midi",
          "signature": "StrictTime -\u003e State signal StrictTime",
          "source": "src/Synthesizer-MIDI-Generic.html#advanceModulationChunkStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "advanceModulationChunkStrict",
          "normalized": "StrictTime-\u003eState a StrictTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunk Strict",
          "signature": "StrictTime-\u003eState signal StrictTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:advanceModulationChunkStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "applyModulation",
          "package": "synthesizer-midi",
          "signature": "signal -\u003e Modulator (signal -\u003e instr, note) (instr, note)",
          "source": "src/Synthesizer-MIDI-Generic.html#applyModulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "applyModulation",
          "normalized": "a-\u003eModulator(a-\u003eb,c)(b,c)",
          "package": "synthesizer-midi",
          "partial": "Modulation",
          "signature": "signal-\u003eModulator(signal-\u003einstr,note)(instr,note)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:applyModulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "applyModulator",
          "package": "synthesizer-midi",
          "signature": "Modulator a b -\u003e T StrictTime [a] -\u003e T StrictTime [b]",
          "source": "src/Synthesizer-MIDI-Generic.html#applyModulator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "applyModulator",
          "normalized": "Modulator a b-\u003eT StrictTime[a]-\u003eT StrictTime[b]",
          "package": "synthesizer-midi",
          "partial": "Modulator",
          "signature": "Modulator a b-\u003eT StrictTime[a]-\u003eT StrictTime[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:applyModulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "errorNoProgram",
          "package": "synthesizer-midi",
          "signature": "Program",
          "source": "src/Synthesizer-MIDI-Generic.html#errorNoProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "errorNoProgram",
          "package": "synthesizer-midi",
          "partial": "No Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:errorNoProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe have to evaluate the head value at each \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e\nin order to avoid growing thunks that lead to a space leak.\n\u003c/p\u003e",
          "module": "[\"Synthesizer.MIDI.Generic\",\"Synthesizer.MIDI.Storable\"]",
          "name": "evaluateVectorHead",
          "package": "synthesizer-midi",
          "signature": "signal -\u003e t -\u003e t",
          "source": "src/Synthesizer-MIDI-Generic.html#evaluateVectorHead",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:evaluateVectorHead\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:evaluateVectorHead\"]"
        },
        "index": {
          "description": "We have to evaluate the head value at each drop in order to avoid growing thunks that lead to space leak",
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "evaluateVectorHead",
          "normalized": "a-\u003eb-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Vector Head",
          "signature": "signal-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:evaluateVectorHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn an event list with bundles of elements\ninto an event list with single events.\nToDo: Move to event-list package?\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Generic",
          "name": "flatten",
          "package": "synthesizer-midi",
          "signature": "T time [signal] -\u003e T time signal",
          "source": "src/Synthesizer-MIDI-Generic.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Turn an event list with bundles of elements into an event list with single events ToDo Move to event-list package",
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "synthesizer-midi",
          "signature": "T time[signal]-\u003eT time signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstant",
          "package": "synthesizer-midi",
          "signature": "T StrictTime y -\u003e sig y",
          "source": "src/Synthesizer-MIDI-Generic.html#piecewiseConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstant",
          "normalized": "T StrictTime a-\u003eb a",
          "package": "synthesizer-midi",
          "partial": "Constant",
          "signature": "T StrictTime y-\u003esig y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:piecewiseConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstantInit",
          "package": "synthesizer-midi",
          "signature": "y -\u003e T StrictTime y -\u003e sig y",
          "source": "src/Synthesizer-MIDI-Generic.html#piecewiseConstantInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstantInit",
          "normalized": "a-\u003eT StrictTime a-\u003eb a",
          "package": "synthesizer-midi",
          "partial": "Constant Init",
          "signature": "y-\u003eT StrictTime y-\u003esig y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:piecewiseConstantInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstantInitWith",
          "package": "synthesizer-midi",
          "signature": "(y -\u003e c) -\u003e c -\u003e T StrictTime [y] -\u003e sig c",
          "source": "src/Synthesizer-MIDI-Generic.html#piecewiseConstantInitWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "piecewiseConstantInitWith",
          "normalized": "(a-\u003eb)-\u003eb-\u003eT StrictTime[a]-\u003ec b",
          "package": "synthesizer-midi",
          "partial": "Constant Init With",
          "signature": "(y-\u003ec)-\u003ec-\u003eT StrictTime[y]-\u003esig c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:piecewiseConstantInitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstrument parameters are:\nvelocity from -1 to 1 (0 is the normal pressure, no pressure aka NoteOff is not supported),\nfrequency is given in Hertz\n\u003c/p\u003e",
          "module": "[\"Synthesizer.MIDI.Generic\",\"Synthesizer.MIDI.Storable\"]",
          "name": "renderInstrument",
          "package": "synthesizer-midi",
          "signature": "Bank y signal -\u003e Note -\u003e signal",
          "source": "src/Synthesizer-MIDI-Generic.html#renderInstrument",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:renderInstrument\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:renderInstrument\"]"
        },
        "index": {
          "description": "Instrument parameters are velocity from to is the normal pressure no pressure aka NoteOff is not supported frequency is given in Hertz",
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "renderInstrument",
          "normalized": "Bank a b-\u003eNote-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "signature": "Bank y signal-\u003eNote-\u003esignal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:renderInstrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Synthesizer.MIDI.Generic\",\"Synthesizer.MIDI.Storable\"]",
          "name": "renderInstrumentIgnoreProgram",
          "package": "synthesizer-midi",
          "signature": "Instrument y signal -\u003e Note -\u003e signal",
          "source": "src/Synthesizer-MIDI-Generic.html#renderInstrumentIgnoreProgram",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:renderInstrumentIgnoreProgram\",\"http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:renderInstrumentIgnoreProgram\"]"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "renderInstrumentIgnoreProgram",
          "normalized": "Instrument a b-\u003eNote-\u003eb",
          "package": "synthesizer-midi",
          "partial": "Instrument Ignore Program",
          "signature": "Instrument y signal-\u003eNote-\u003esignal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:renderInstrumentIgnoreProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "replicateLong",
          "package": "synthesizer-midi",
          "signature": "StrictTime -\u003e y -\u003e sig y",
          "source": "src/Synthesizer-MIDI-Generic.html#replicateLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "replicateLong",
          "normalized": "StrictTime-\u003ea-\u003eb a",
          "package": "synthesizer-midi",
          "partial": "Long",
          "signature": "StrictTime-\u003ey-\u003esig y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:replicateLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequence",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Instrument y signal -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequence",
          "normalized": "Channel-\u003eInstrument a b-\u003eFilterSequence c b",
          "package": "synthesizer-midi",
          "signature": "Channel-\u003eInstrument y signal-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceCore",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Program -\u003e Modulator Note signal -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequenceCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceCore",
          "normalized": "Channel-\u003eProgram-\u003eModulator Note a-\u003eFilterSequence b a",
          "package": "synthesizer-midi",
          "partial": "Core",
          "signature": "Channel-\u003eProgram-\u003eModulator Note signal-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequenceCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceModulated",
          "package": "synthesizer-midi",
          "signature": "ctrl -\u003e Channel -\u003e (ctrl -\u003e Instrument y signal) -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequenceModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceModulated",
          "normalized": "a-\u003eChannel-\u003e(a-\u003eInstrument b c)-\u003eFilterSequence d c",
          "package": "synthesizer-midi",
          "partial": "Modulated",
          "signature": "ctrl-\u003eChannel-\u003e(ctrl-\u003eInstrument y signal)-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequenceModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceModulatedMultiProgram",
          "package": "synthesizer-midi",
          "signature": "ctrl -\u003e Channel -\u003e Program -\u003e [ctrl -\u003e Instrument y signal] -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequenceModulatedMultiProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceModulatedMultiProgram",
          "normalized": "a-\u003eChannel-\u003eProgram-\u003e[a-\u003eInstrument b c]-\u003eFilterSequence d c",
          "package": "synthesizer-midi",
          "partial": "Modulated Multi Program",
          "signature": "ctrl-\u003eChannel-\u003eProgram-\u003e[ctrl-\u003eInstrument y signal]-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequenceModulatedMultiProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceMultiModulated",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e instrument -\u003e Modulator (instrument, Note) (Instrument y signal, Note) -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequenceMultiModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceMultiModulated",
          "normalized": "Channel-\u003ea-\u003eModulator(a,Note)(Instrument b c,Note)-\u003eFilterSequence d c",
          "package": "synthesizer-midi",
          "partial": "Multi Modulated",
          "signature": "Channel-\u003einstrument-\u003eModulator(instrument,Note)(Instrument y signal,Note)-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequenceMultiModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceMultiProgram",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Program -\u003e [Instrument y signal] -\u003e FilterSequence event signal",
          "source": "src/Synthesizer-MIDI-Generic.html#sequenceMultiProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Generic",
          "module": "Synthesizer.MIDI.Generic",
          "name": "sequenceMultiProgram",
          "normalized": "Channel-\u003eProgram-\u003e[Instrument a b]-\u003eFilterSequence c b",
          "package": "synthesizer-midi",
          "partial": "Multi Program",
          "signature": "Channel-\u003eProgram-\u003e[Instrument y signal]-\u003eFilterSequence event signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Generic.html#v:sequenceMultiProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTreat a stream of MIDI events as parallel streams of MIDI controller events.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "ControllerSet",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html",
          "type": "module"
        },
        "index": {
          "description": "Treat stream of MIDI events as parallel streams of MIDI controller events",
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "ControllerSet",
          "package": "synthesizer-midi",
          "partial": "Controller Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "Controller",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#Controller",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "Controller",
          "package": "synthesizer-midi",
          "partial": "Controller",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "Cons",
          "package": "synthesizer-midi",
          "signature": "Cons",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "Cons",
          "package": "synthesizer-midi",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Int -\u003e y -\u003e y -\u003e Filter (T (T y))",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "bendWheelPressure",
          "normalized": "Int-\u003ea-\u003ea-\u003eFilter(T(T a))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Int-\u003ey-\u003ey-\u003eFilter(T(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "bendWheelPressureZip",
          "package": "synthesizer-midi",
          "signature": "Int -\u003e y -\u003e y -\u003e Filter (T (T y))",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#bendWheelPressureZip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "bendWheelPressureZip",
          "normalized": "Int-\u003ea-\u003ea-\u003eFilter(T(T a))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure Zip",
          "signature": "Int-\u003ey-\u003ey-\u003eFilter(T(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:bendWheelPressureZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e Filter (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "channelPressure",
          "normalized": "a-\u003ea-\u003eFilter(T a)",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "y-\u003ey-\u003eFilter(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "checkBendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "(Controller, Int) -\u003e State T (Maybe T)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#checkBendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "checkBendWheelPressure",
          "normalized": "(Controller,Int)-\u003eState T(Maybe T)",
          "package": "synthesizer-midi",
          "partial": "Bend Wheel Pressure",
          "signature": "(Controller,Int)-\u003eState T(Maybe T)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:checkBendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e Filter (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "controllerExponential",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eFilter(T a)",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eFilter(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Controller -\u003e (y, y) -\u003e y -\u003e Filter (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "controllerLinear",
          "normalized": "Controller-\u003e(a,a)-\u003ea-\u003eFilter(T a)",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Controller-\u003e(y,y)-\u003ey-\u003eFilter(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "fromChannel",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Filter event (T Controller Int)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#fromChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "fromChannel",
          "normalized": "Channel-\u003eFilter a(T Controller Int)",
          "package": "synthesizer-midi",
          "partial": "Channel",
          "signature": "Channel-\u003eFilter event(T Controller Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:fromChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "initial",
          "package": "synthesizer-midi",
          "signature": "Map key a",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "initial",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "mapStream",
          "package": "synthesizer-midi",
          "signature": "(T StrictTime [(key, a)] -\u003e T StrictTime [(key, a)]) -\u003e T key a -\u003e T key a",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#mapStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "mapStream",
          "normalized": "(T StrictTime[(a,b)]-\u003eT StrictTime[(a,b)])-\u003eT a b-\u003eT a b",
          "package": "synthesizer-midi",
          "partial": "Stream",
          "signature": "(T StrictTime[(key,a)]-\u003eT StrictTime[(key,a)])-\u003eT key a-\u003eT key a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "maybeController",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e event -\u003e Maybe (Controller, Int)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#maybeController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "maybeController",
          "normalized": "Channel-\u003ea-\u003eMaybe(Controller,Int)",
          "package": "synthesizer-midi",
          "partial": "Controller",
          "signature": "Channel-\u003eevent-\u003eMaybe(Controller,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:maybeController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epitchBend channel range center\u003c/code\u003e:\nemits frequencies on an exponential scale from\n\u003ccode\u003ecenter/range\u003c/code\u003e to \u003ccode\u003ecenter*range\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e Filter (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#pitchBend",
          "type": "function"
        },
        "index": {
          "description": "pitchBend channel range center emits frequencies on an exponential scale from center range to center range",
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "pitchBend",
          "normalized": "a-\u003ea-\u003eFilter(T a)",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "y-\u003ey-\u003eFilter(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "stream",
          "package": "synthesizer-midi",
          "signature": "T StrictTime [(key, a)]",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant ControllerSet",
          "module": "Synthesizer.MIDI.PiecewiseConstant.ControllerSet",
          "name": "stream",
          "normalized": "T StrictTime[(a,b)]",
          "package": "synthesizer-midi",
          "signature": "T StrictTime[(key,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant-ControllerSet.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert MIDI events of a MIDI controller to a control signal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "PiecewiseConstant",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html",
          "type": "module"
        },
        "index": {
          "description": "Convert MIDI events of MIDI controller to control signal",
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "PiecewiseConstant",
          "package": "synthesizer-midi",
          "partial": "Piecewise Constant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Int -\u003e y -\u003e y -\u003e Filter event (T (T y))",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "bendWheelPressure",
          "normalized": "Channel-\u003eInt-\u003ea-\u003ea-\u003eFilter b(T(T a))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Channel-\u003eInt-\u003ey-\u003ey-\u003eFilter event(T(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis one is certainly not as efficient as \u003ccode\u003e\u003ca\u003ebendWheelPressure\u003c/a\u003e\u003c/code\u003e\nsince it first slices the event list\nand then zips the slices together.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "bendWheelPressureZip",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Int -\u003e y -\u003e y -\u003e Filter event (T (T y))",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#bendWheelPressureZip",
          "type": "function"
        },
        "index": {
          "description": "This one is certainly not as efficient as bendWheelPressure since it first slices the event list and then zips the slices together",
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "bendWheelPressureZip",
          "normalized": "Channel-\u003eInt-\u003ea-\u003ea-\u003eFilter b(T(T a))",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure Zip",
          "signature": "Channel-\u003eInt-\u003ey-\u003ey-\u003eFilter event(T(T y))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:bendWheelPressureZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "channelPressure",
          "normalized": "Channel-\u003ea-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "Channel-\u003ey-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "controllerExponential",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "controllerLinear",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "duration",
          "package": "synthesizer-midi",
          "signature": "T y -\u003e LazyTime",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "duration",
          "normalized": "T a-\u003eLazyTime",
          "package": "synthesizer-midi",
          "signature": "T y-\u003eLazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "initWith",
          "package": "synthesizer-midi",
          "signature": "(y -\u003e c) -\u003e c -\u003e T StrictTime [y] -\u003e T c",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#initWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "initWith",
          "normalized": "(a-\u003eb)-\u003eb-\u003eT StrictTime[a]-\u003eT b",
          "package": "synthesizer-midi",
          "partial": "With",
          "signature": "(y-\u003ec)-\u003ec-\u003eT StrictTime[y]-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:initWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epitchBend channel range center\u003c/code\u003e:\nemits frequencies on an exponential scale from\n\u003ccode\u003ecenter/range\u003c/code\u003e to \u003ccode\u003ecenter*range\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-PiecewiseConstant.html#pitchBend",
          "type": "function"
        },
        "index": {
          "description": "pitchBend channel range center emits frequencies on an exponential scale from center range to center range",
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "pitchBend",
          "normalized": "Channel-\u003ea-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "Channel-\u003ey-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "zipWith",
          "package": "synthesizer-midi",
          "signature": "(a -\u003e b -\u003e c) -\u003e T time a -\u003e T time b -\u003e T time c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI PiecewiseConstant",
          "module": "Synthesizer.MIDI.PiecewiseConstant",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eT d a-\u003eT d b-\u003eT d c",
          "package": "synthesizer-midi",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eT time a-\u003eT time b-\u003eT time c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-PiecewiseConstant.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert MIDI events of a MIDI controller to a control signal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Storable",
          "name": "Storable",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Storable.html",
          "type": "module"
        },
        "index": {
          "description": "Convert MIDI events of MIDI controller to control signal",
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "Storable",
          "package": "synthesizer-midi",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "Bank",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Storable.html#Bank",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "Bank",
          "package": "synthesizer-midi",
          "partial": "Bank",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#t:Bank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Storable.html#Instrument",
          "type": "type"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "Instrument",
          "package": "synthesizer-midi",
          "partial": "Instrument",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#t:Instrument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationChunky",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e State (T a) LazyTime",
          "source": "src/Synthesizer-MIDI-Storable.html#advanceModulationChunky",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationChunky",
          "normalized": "LazyTime-\u003eState(T a)LazyTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Chunky",
          "signature": "LazyTime-\u003eState(T a)LazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:advanceModulationChunky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationLazy",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e State (T a) LazyTime",
          "source": "src/Synthesizer-MIDI-Storable.html#advanceModulationLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationLazy",
          "normalized": "LazyTime-\u003eState(T a)LazyTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Lazy",
          "signature": "LazyTime-\u003eState(T a)LazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:advanceModulationLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationStrict",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e State (T a) LazyTime",
          "source": "src/Synthesizer-MIDI-Storable.html#advanceModulationStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "advanceModulationStrict",
          "normalized": "LazyTime-\u003eState(T a)LazyTime",
          "package": "synthesizer-midi",
          "partial": "Modulation Strict",
          "signature": "LazyTime-\u003eState(T a)LazyTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:advanceModulationStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "applyModulation",
          "package": "synthesizer-midi",
          "signature": "T c -\u003e Modulator (T c -\u003e instr, note) (instr, note)",
          "source": "src/Synthesizer-MIDI-Storable.html#applyModulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "applyModulation",
          "normalized": "T a-\u003eModulator(T a-\u003eb,c)(b,c)",
          "package": "synthesizer-midi",
          "partial": "Modulation",
          "signature": "T c-\u003eModulator(T c-\u003einstr,note)(instr,note)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:applyModulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "bendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Int -\u003e y -\u003e y -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-Storable.html#bendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "bendWheelPressure",
          "normalized": "Channel-\u003eInt-\u003ea-\u003ea-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Wheel Pressure",
          "signature": "Channel-\u003eInt-\u003ey-\u003ey-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:bendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "channelPressure",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-Storable.html#channelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "channelPressure",
          "normalized": "Channel-\u003ea-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Pressure",
          "signature": "Channel-\u003ey-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:channelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "chunkSizesFromLazyTime",
          "package": "synthesizer-midi",
          "signature": "LazyTime -\u003e T ChunkSize",
          "source": "src/Synthesizer-MIDI-Storable.html#chunkSizesFromLazyTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "chunkSizesFromLazyTime",
          "normalized": "LazyTime-\u003eT ChunkSize",
          "package": "synthesizer-midi",
          "partial": "Sizes From Lazy Time",
          "signature": "LazyTime-\u003eT ChunkSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:chunkSizesFromLazyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-Storable.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "controllerExponential",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e Controller -\u003e (y, y) -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-Storable.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "controllerLinear",
          "normalized": "Channel-\u003eController-\u003e(a,a)-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "Channel-\u003eController-\u003e(y,y)-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstant",
          "package": "synthesizer-midi",
          "signature": "T StrictTime y -\u003e T y",
          "source": "src/Synthesizer-MIDI-Storable.html#piecewiseConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstant",
          "normalized": "T StrictTime a-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Constant",
          "signature": "T StrictTime y-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:piecewiseConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstantInit",
          "package": "synthesizer-midi",
          "signature": "y -\u003e T StrictTime y -\u003e T y",
          "source": "src/Synthesizer-MIDI-Storable.html#piecewiseConstantInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstantInit",
          "normalized": "a-\u003eT StrictTime a-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Constant Init",
          "signature": "y-\u003eT StrictTime y-\u003eT y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:piecewiseConstantInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstantInitWith",
          "package": "synthesizer-midi",
          "signature": "(y -\u003e c) -\u003e c -\u003e T StrictTime [y] -\u003e T c",
          "source": "src/Synthesizer-MIDI-Storable.html#piecewiseConstantInitWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "piecewiseConstantInitWith",
          "normalized": "(a-\u003eb)-\u003eb-\u003eT StrictTime[a]-\u003eT b",
          "package": "synthesizer-midi",
          "partial": "Constant Init With",
          "signature": "(y-\u003ec)-\u003ec-\u003eT StrictTime[y]-\u003eT c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:piecewiseConstantInitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epitchBend channel range center\u003c/code\u003e:\nemits frequencies on an exponential scale from\n\u003ccode\u003ecenter/range\u003c/code\u003e to \u003ccode\u003ecenter*range\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Storable",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e y -\u003e y -\u003e Filter event (T y)",
          "source": "src/Synthesizer-MIDI-Storable.html#pitchBend",
          "type": "function"
        },
        "index": {
          "description": "pitchBend channel range center emits frequencies on an exponential scale from center range to center range",
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "pitchBend",
          "normalized": "Channel-\u003ea-\u003ea-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "Channel-\u003ey-\u003ey-\u003eFilter event(T y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequence",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e Channel -\u003e Instrument y yv -\u003e Filter event (T yv)",
          "source": "src/Synthesizer-MIDI-Storable.html#sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequence",
          "normalized": "ChunkSize-\u003eChannel-\u003eInstrument a b-\u003eFilter c(T b)",
          "package": "synthesizer-midi",
          "signature": "ChunkSize-\u003eChannel-\u003eInstrument y yv-\u003eFilter event(T yv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceCore",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e Channel -\u003e Program -\u003e Modulator Note (T yv) -\u003e Filter event (T yv)",
          "source": "src/Synthesizer-MIDI-Storable.html#sequenceCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceCore",
          "normalized": "ChunkSize-\u003eChannel-\u003eProgram-\u003eModulator Note(T a)-\u003eFilter b(T a)",
          "package": "synthesizer-midi",
          "partial": "Core",
          "signature": "ChunkSize-\u003eChannel-\u003eProgram-\u003eModulator Note(T yv)-\u003eFilter event(T yv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:sequenceCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceModulated",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e T c -\u003e Channel -\u003e (T c -\u003e Instrument y yv) -\u003e Filter event (T yv)",
          "source": "src/Synthesizer-MIDI-Storable.html#sequenceModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceModulated",
          "normalized": "ChunkSize-\u003eT a-\u003eChannel-\u003e(T a-\u003eInstrument b c)-\u003eFilter d(T c)",
          "package": "synthesizer-midi",
          "partial": "Modulated",
          "signature": "ChunkSize-\u003eT c-\u003eChannel-\u003e(T c-\u003eInstrument y yv)-\u003eFilter event(T yv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:sequenceModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceMultiModulated",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e Channel -\u003e instrument -\u003e Modulator (instrument, Note) (Instrument y yv, Note) -\u003e Filter event (T yv)",
          "source": "src/Synthesizer-MIDI-Storable.html#sequenceMultiModulated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceMultiModulated",
          "normalized": "ChunkSize-\u003eChannel-\u003ea-\u003eModulator(a,Note)(Instrument b c,Note)-\u003eFilter d(T c)",
          "package": "synthesizer-midi",
          "partial": "Multi Modulated",
          "signature": "ChunkSize-\u003eChannel-\u003einstrument-\u003eModulator(instrument,Note)(Instrument y yv,Note)-\u003eFilter event(T yv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:sequenceMultiModulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceMultiProgram",
          "package": "synthesizer-midi",
          "signature": "ChunkSize -\u003e Channel -\u003e Program -\u003e [Instrument y yv] -\u003e Filter event (T yv)",
          "source": "src/Synthesizer-MIDI-Storable.html#sequenceMultiProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Storable",
          "module": "Synthesizer.MIDI.Storable",
          "name": "sequenceMultiProgram",
          "normalized": "ChunkSize-\u003eChannel-\u003eProgram-\u003e[Instrument a b]-\u003eFilter c(T b)",
          "package": "synthesizer-midi",
          "partial": "Multi Program",
          "signature": "ChunkSize-\u003eChannel-\u003eProgram-\u003e[Instrument y yv]-\u003eFilter event(T yv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Storable.html#v:sequenceMultiProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombine pitchbend and modulation in one data type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "BendModulation",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html",
          "type": "module"
        },
        "index": {
          "description": "Combine pitchbend and modulation in one data type",
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "BendModulation",
          "package": "synthesizer-midi",
          "partial": "Bend Modulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebend\u003c/a\u003e\u003c/code\u003e is a frequency factor\nand \u003ccode\u003e\u003ca\u003edepth\u003c/a\u003e\u003c/code\u003e is a modulation depth to be interpreted by the instrument.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#T",
          "type": "data"
        },
        "index": {
          "description": "bend is frequency factor and depth is modulation depth to be interpreted by the instrument",
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "Cons",
          "package": "synthesizer-midi",
          "signature": "Cons",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "Cons",
          "package": "synthesizer-midi",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "bend",
          "package": "synthesizer-midi",
          "signature": "a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "bend",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:bend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "deflt",
          "package": "synthesizer-midi",
          "signature": "T a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#deflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "deflt",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:deflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "depth",
          "package": "synthesizer-midi",
          "signature": "a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "depth",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "force",
          "package": "synthesizer-midi",
          "signature": "T a -\u003e T a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#force",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "force",
          "normalized": "T a-\u003eT a",
          "package": "synthesizer-midi",
          "signature": "T a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "fromBendWheelPressure",
          "package": "synthesizer-midi",
          "signature": "Int -\u003e a -\u003e a -\u003e T -\u003e T a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#fromBendWheelPressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "fromBendWheelPressure",
          "normalized": "Int-\u003ea-\u003ea-\u003eT-\u003eT a",
          "package": "synthesizer-midi",
          "partial": "Bend Wheel Pressure",
          "signature": "Int-\u003ea-\u003ea-\u003eT-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:fromBendWheelPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply the pitch bend by a given factor.\nThis way you can e.g. shift the pitch bend from around 1\nto the actual frequency.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "shift",
          "package": "synthesizer-midi",
          "signature": "a -\u003e T a -\u003e T a",
          "source": "src/Synthesizer-MIDI-Value-BendModulation.html#shift",
          "type": "function"
        },
        "index": {
          "description": "Multiply the pitch bend by given factor This way you can e.g shift the pitch bend from around to the actual frequency",
          "hierarchy": "Synthesizer MIDI Value BendModulation",
          "module": "Synthesizer.MIDI.Value.BendModulation",
          "name": "shift",
          "normalized": "a-\u003eT a-\u003eT a",
          "package": "synthesizer-midi",
          "signature": "a-\u003eT a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendModulation.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "BendWheelPressure",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "BendWheelPressure",
          "package": "synthesizer-midi",
          "partial": "Bend Wheel Pressure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "T",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "T",
          "package": "synthesizer-midi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "Cons",
          "package": "synthesizer-midi",
          "signature": "Cons",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "Cons",
          "package": "synthesizer-midi",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "bend",
          "package": "synthesizer-midi",
          "signature": "T T Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#bend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "bend",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:bend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "bend_",
          "package": "synthesizer-midi",
          "signature": "Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "bend_",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:bend_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "check",
          "package": "synthesizer-midi",
          "signature": "Channel -\u003e event -\u003e State T (Maybe T)",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "check",
          "normalized": "Channel-\u003ea-\u003eState T(Maybe T)",
          "package": "synthesizer-midi",
          "signature": "Channel-\u003eevent-\u003eState T(Maybe T)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "deflt",
          "package": "synthesizer-midi",
          "signature": "T",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#deflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "deflt",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:deflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "pressure",
          "package": "synthesizer-midi",
          "signature": "T T Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#pressure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "pressure",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:pressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "pressure_",
          "package": "synthesizer-midi",
          "signature": "Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "pressure_",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:pressure_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "wheel",
          "package": "synthesizer-midi",
          "signature": "T T Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#wheel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "wheel",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:wheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "wheel_",
          "package": "synthesizer-midi",
          "signature": "Int",
          "source": "src/Synthesizer-MIDI-Value-BendWheelPressure.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value BendWheelPressure",
          "module": "Synthesizer.MIDI.Value.BendWheelPressure",
          "name": "wheel_",
          "package": "synthesizer-midi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value-BendWheelPressure.html#v:wheel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting MIDI controller and key values\nto something meaningful for signal processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Synthesizer.MIDI.Value",
          "name": "Value",
          "package": "synthesizer-midi",
          "source": "src/Synthesizer-MIDI-Value.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for converting MIDI controller and key values to something meaningful for signal processing",
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "Value",
          "package": "synthesizer-midi",
          "partial": "Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value",
          "name": "controllerExponential",
          "package": "synthesizer-midi",
          "signature": "(y, y) -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Value.html#controllerExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "controllerExponential",
          "normalized": "(a,a)-\u003eInt-\u003ea",
          "package": "synthesizer-midi",
          "partial": "Exponential",
          "signature": "(y,y)-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#v:controllerExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value",
          "name": "controllerLinear",
          "package": "synthesizer-midi",
          "signature": "(y, y) -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Value.html#controllerLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "controllerLinear",
          "normalized": "(a,a)-\u003eInt-\u003ea",
          "package": "synthesizer-midi",
          "partial": "Linear",
          "signature": "(y,y)-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#v:controllerLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert pitch to frequency according to the default tuning\nin MIDI 1.0 Detailed Specification.\n\u003c/p\u003e",
          "module": "Synthesizer.MIDI.Value",
          "name": "frequencyFromPitch",
          "package": "synthesizer-midi",
          "signature": "Pitch -\u003e y",
          "source": "src/Synthesizer-MIDI-Value.html#frequencyFromPitch",
          "type": "function"
        },
        "index": {
          "description": "Convert pitch to frequency according to the default tuning in MIDI Detailed Specification",
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "frequencyFromPitch",
          "normalized": "Pitch-\u003ea",
          "package": "synthesizer-midi",
          "partial": "From Pitch",
          "signature": "Pitch-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#v:frequencyFromPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value",
          "name": "pitchBend",
          "package": "synthesizer-midi",
          "signature": "y -\u003e y -\u003e Int -\u003e y",
          "source": "src/Synthesizer-MIDI-Value.html#pitchBend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "pitchBend",
          "normalized": "a-\u003ea-\u003eInt-\u003ea",
          "package": "synthesizer-midi",
          "partial": "Bend",
          "signature": "y-\u003ey-\u003eInt-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#v:pitchBend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Synthesizer.MIDI.Value",
          "name": "velocity",
          "package": "synthesizer-midi",
          "signature": "Velocity -\u003e y",
          "source": "src/Synthesizer-MIDI-Value.html#velocity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Synthesizer MIDI Value",
          "module": "Synthesizer.MIDI.Value",
          "name": "velocity",
          "normalized": "Velocity-\u003ea",
          "package": "synthesizer-midi",
          "signature": "Velocity-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/synthesizer-midi/docs/Synthesizer-MIDI-Value.html#v:velocity"
      }
    }
  ]
]