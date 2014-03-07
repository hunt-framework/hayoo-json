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
        "word": "pulse-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinding to PulseAudio Simple API (original documentation:\n  \u003ca\u003ehttp://freedesktop.org/software/pulseaudio/doxygen/simple_8h.html\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eplayback example(output 440Hz sine wave for 10 seconds):\n\u003c/p\u003e\u003cpre\u003e\n  main=do\n      s\u003c-simpleNew Nothing \"example\" Play Nothing \"this is an example application\"\n          (SampleSpec (F32 LittleEndian) 44100 1) Nothing Nothing\n      simpleWrite s ([sin $ 2*pi*440*(t/44100)|t\u003c-[1..44100*10]] :: [Float])\n      simpleDrain s\n      simpleFree s\n\u003c/pre\u003e\u003cp\u003erecording example(record for 10 seconds):\n\u003c/p\u003e\u003cpre\u003e\n  main=do\n      s\u003c-simpleNew Nothing \"example\" Record Nothing \"this is an example application\"\n          (SampleSpec (F32 LittleEndian) 44100 1) Nothing Nothing\n      xs\u003c-simpleRead s $ 44100*10 :: IO [Float]\n      simpleFree s\n\u003c/pre\u003e\u003cp\u003eNote that recording starts when \u003ccode\u003e\u003ca\u003esimpleNew\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "Simple",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Binding to PulseAudio Simple API original documentation http freedesktop.org software pulseaudio doxygen simple h.html playback example output Hz sine wave for seconds main do simpleNew Nothing example Play Nothing this is an example application SampleSpec F32 LittleEndian Nothing Nothing simpleWrite sin pi Float simpleDrain simpleFree recording example record for seconds main do simpleNew Nothing example Record Nothing this is an example application SampleSpec F32 LittleEndian Nothing Nothing xs simpleRead IO Float simpleFree Note that recording starts when simpleNew is called",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Simple",
          "package": "pulse-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emax length, target length, prebuffer, minimum request, fragment size\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "BufferAttr",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#BufferAttr",
          "type": "data"
        },
        "index": {
          "description": "max length target length prebuffer minimum request fragment size",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "BufferAttr",
          "package": "pulse-simple",
          "partial": "Buffer Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:BufferAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelPan",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#ChannelPan",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelPan",
          "package": "pulse-simple",
          "partial": "Channel Pan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:ChannelPan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelPosition",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelPosition",
          "package": "pulse-simple",
          "partial": "Channel Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:ChannelPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Compression",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#Compression",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Compression",
          "package": "pulse-simple",
          "partial": "Compression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Compression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Direction",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Direction",
          "package": "pulse-simple",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Endian",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#Endian",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Endian",
          "package": "pulse-simple",
          "partial": "Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Endian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "SampleFormat",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "SampleFormat",
          "package": "pulse-simple",
          "partial": "Sample Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:SampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "SampleSpec",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#SampleSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "SampleSpec",
          "package": "pulse-simple",
          "partial": "Sample Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:SampleSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Simple",
          "package": "pulse-simple",
          "source": "src/Sound-Pulse-Simple.html#Simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Simple",
          "package": "pulse-simple",
          "partial": "Simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ALaw",
          "package": "pulse-simple",
          "signature": "ALaw",
          "source": "src/Sound-Pulse-Simple.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ALaw",
          "package": "pulse-simple",
          "partial": "ALaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ALaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "BigEndian",
          "package": "pulse-simple",
          "signature": "BigEndian",
          "source": "src/Sound-Pulse-Simple.html#Endian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "BigEndian",
          "package": "pulse-simple",
          "partial": "Big Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:BigEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "BufferAttr",
          "package": "pulse-simple",
          "signature": "BufferAttr (Maybe Int) (Maybe Int) (Maybe Int) (Maybe Int) (Maybe Int)",
          "source": "src/Sound-Pulse-Simple.html#BufferAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "BufferAttr",
          "package": "pulse-simple",
          "partial": "Buffer Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:BufferAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelAux",
          "package": "pulse-simple",
          "signature": "ChannelAux Int",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelAux",
          "package": "pulse-simple",
          "partial": "Channel Aux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFront",
          "package": "pulse-simple",
          "signature": "ChannelFront ChannelPan",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFront",
          "package": "pulse-simple",
          "partial": "Channel Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to PA_CHANNEL_POSITION_FRONT_LEFT_OF_CENTER\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFrontCenterLeft",
          "package": "pulse-simple",
          "signature": "ChannelFrontCenterLeft",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "description": "equivalent to PA CHANNEL POSITION FRONT LEFT OF CENTER",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFrontCenterLeft",
          "package": "pulse-simple",
          "partial": "Channel Front Center Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFrontCenterLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFrontCenterRight",
          "package": "pulse-simple",
          "signature": "ChannelFrontCenterRight",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelFrontCenterRight",
          "package": "pulse-simple",
          "partial": "Channel Front Center Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFrontCenterRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elow frequency effects\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelLFE",
          "package": "pulse-simple",
          "signature": "ChannelLFE",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "description": "low frequency effects",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelLFE",
          "package": "pulse-simple",
          "partial": "Channel LFE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelLFE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelMono",
          "package": "pulse-simple",
          "signature": "ChannelMono",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelMono",
          "package": "pulse-simple",
          "partial": "Channel Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelNormal",
          "package": "pulse-simple",
          "signature": "ChannelNormal ChannelPan",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelNormal",
          "package": "pulse-simple",
          "partial": "Channel Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelRear",
          "package": "pulse-simple",
          "signature": "ChannelRear ChannelPan",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelRear",
          "package": "pulse-simple",
          "partial": "Channel Rear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelRear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSideLeft",
          "package": "pulse-simple",
          "signature": "ChannelSideLeft",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSideLeft",
          "package": "pulse-simple",
          "partial": "Channel Side Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSideLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSideRight",
          "package": "pulse-simple",
          "signature": "ChannelSideRight",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSideRight",
          "package": "pulse-simple",
          "partial": "Channel Side Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSideRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSubwoofer",
          "package": "pulse-simple",
          "signature": "ChannelSubwoofer",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelSubwoofer",
          "package": "pulse-simple",
          "partial": "Channel Subwoofer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSubwoofer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopCenter",
          "package": "pulse-simple",
          "signature": "ChannelTopCenter",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopCenter",
          "package": "pulse-simple",
          "partial": "Channel Top Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopFront",
          "package": "pulse-simple",
          "signature": "ChannelTopFront ChannelPan",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopFront",
          "package": "pulse-simple",
          "partial": "Channel Top Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopRear",
          "package": "pulse-simple",
          "signature": "ChannelTopRear ChannelPan",
          "source": "src/Sound-Pulse-Simple.html#ChannelPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "ChannelTopRear",
          "package": "pulse-simple",
          "partial": "Channel Top Rear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopRear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bit float in [-1,1]\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "F32",
          "package": "pulse-simple",
          "signature": "F32 Endian",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit float in",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "F32",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:F32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "LittleEndian",
          "package": "pulse-simple",
          "signature": "LittleEndian",
          "source": "src/Sound-Pulse-Simple.html#Endian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "LittleEndian",
          "package": "pulse-simple",
          "partial": "Little Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:LittleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "MuLaw",
          "package": "pulse-simple",
          "signature": "MuLaw",
          "source": "src/Sound-Pulse-Simple.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "MuLaw",
          "package": "pulse-simple",
          "partial": "Mu Law",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:MuLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "PanCenter",
          "package": "pulse-simple",
          "signature": "PanCenter",
          "source": "src/Sound-Pulse-Simple.html#ChannelPan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "PanCenter",
          "package": "pulse-simple",
          "partial": "Pan Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "PanLeft",
          "package": "pulse-simple",
          "signature": "PanLeft",
          "source": "src/Sound-Pulse-Simple.html#ChannelPan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "PanLeft",
          "package": "pulse-simple",
          "partial": "Pan Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "PanRight",
          "package": "pulse-simple",
          "signature": "PanRight",
          "source": "src/Sound-Pulse-Simple.html#ChannelPan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "PanRight",
          "package": "pulse-simple",
          "partial": "Pan Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Play",
          "package": "pulse-simple",
          "signature": "Play",
          "source": "src/Sound-Pulse-Simple.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Play",
          "package": "pulse-simple",
          "partial": "Play",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Raw",
          "package": "pulse-simple",
          "signature": "Raw",
          "source": "src/Sound-Pulse-Simple.html#Compression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Raw",
          "package": "pulse-simple",
          "partial": "Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.Pulse.Simple",
          "name": "Record",
          "package": "pulse-simple",
          "signature": "Record",
          "source": "src/Sound-Pulse-Simple.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "Record",
          "package": "pulse-simple",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16 bit signed\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "S16",
          "package": "pulse-simple",
          "signature": "S16 Endian",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit signed",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "S16",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e24 bit signed\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "S24",
          "package": "pulse-simple",
          "signature": "S24 Endian",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit signed",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "S24",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e24 bit signed padded to 32 bit\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "S2432",
          "package": "pulse-simple",
          "signature": "S2432 Endian",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit signed padded to bit",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "S2432",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S2432"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bit signed\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "S32",
          "package": "pulse-simple",
          "signature": "S32 Endian",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit signed",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "S32",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat, sampling rate, #channels\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "SampleSpec",
          "package": "pulse-simple",
          "signature": "SampleSpec SampleFormat Int Int",
          "source": "src/Sound-Pulse-Simple.html#SampleSpec",
          "type": "function"
        },
        "index": {
          "description": "format sampling rate channels",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "SampleSpec",
          "package": "pulse-simple",
          "partial": "Sample Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:SampleSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8 bit unsigned (optionally compressed using \u003ccode\u003e\u003ca\u003eCompression\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "U8",
          "package": "pulse-simple",
          "signature": "U8 Compression",
          "source": "src/Sound-Pulse-Simple.html#SampleFormat",
          "type": "function"
        },
        "index": {
          "description": "bit unsigned optionally compressed using Compression",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "U8",
          "package": "pulse-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:U8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock until playback buffer is completely consumed.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleDrain",
          "package": "pulse-simple",
          "signature": "Simple -\u003e IO ()",
          "source": "src/Sound-Pulse-Simple.html#simpleDrain",
          "type": "function"
        },
        "index": {
          "description": "Block until playback buffer is completely consumed",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleDrain",
          "normalized": "Simple-\u003eIO()",
          "package": "pulse-simple",
          "partial": "Drain",
          "signature": "Simple-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleDrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush playback buffer.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleFlush",
          "package": "pulse-simple",
          "signature": "Simple -\u003e IO ()",
          "source": "src/Sound-Pulse-Simple.html#simpleFlush",
          "type": "function"
        },
        "index": {
          "description": "Flush playback buffer",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleFlush",
          "normalized": "Simple-\u003eIO()",
          "package": "pulse-simple",
          "partial": "Flush",
          "signature": "Simple-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleFree",
          "package": "pulse-simple",
          "signature": "Simple -\u003e IO ()",
          "source": "src/Sound-Pulse-Simple.html#simpleFree",
          "type": "function"
        },
        "index": {
          "description": "Close the connection",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleFree",
          "normalized": "Simple-\u003eIO()",
          "package": "pulse-simple",
          "partial": "Free",
          "signature": "Simple-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet current latency in microseconds.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleGetLatency",
          "package": "pulse-simple",
          "signature": "Simple -\u003e IO Integer",
          "source": "src/Sound-Pulse-Simple.html#simpleGetLatency",
          "type": "function"
        },
        "index": {
          "description": "Get current latency in microseconds",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleGetLatency",
          "normalized": "Simple-\u003eIO Integer",
          "package": "pulse-simple",
          "partial": "Get Latency",
          "signature": "Simple-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleGetLatency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish connection to pulseaudio server. You usually don't need to specify optional fields.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleNew",
          "package": "pulse-simple",
          "signature": "Maybe String-\u003e String-\u003e Direction-\u003e Maybe String-\u003e String-\u003e SampleSpec-\u003e Maybe [ChannelPosition]-\u003e Maybe BufferAttr-\u003e IO Simple",
          "type": "function"
        },
        "index": {
          "description": "Establish connection to pulseaudio server You usually don need to specify optional fields",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleNew",
          "normalized": "Maybe String-\u003eString-\u003eDirection-\u003eMaybe String-\u003eString-\u003eSampleSpec-\u003eMaybe[ChannelPosition]-\u003eMaybe BufferAttr-\u003eIO Simple",
          "package": "pulse-simple",
          "partial": "New",
          "signature": "Maybe String-\u003eString-\u003eDirection-\u003eMaybe String-\u003eString-\u003eSampleSpec-\u003eMaybe[ChannelPosition]-\u003eMaybe BufferAttr-\u003eIO Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from buffer. (non-blocking if specified # of samples already exist in the internal buffer)\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleRead",
          "package": "pulse-simple",
          "signature": "Simple-\u003e Int-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Read from buffer non-blocking if specified of samples already exist in the internal buffer",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleRead",
          "normalized": "Simple-\u003eInt-\u003eIO[a]",
          "package": "pulse-simple",
          "partial": "Read",
          "signature": "Simple-\u003eInt-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead raw data from buffer.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleReadRaw",
          "package": "pulse-simple",
          "signature": "Simple -\u003e Int -\u003e IO ByteString",
          "source": "src/Sound-Pulse-Simple.html#simpleReadRaw",
          "type": "function"
        },
        "index": {
          "description": "Read raw data from buffer",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleReadRaw",
          "normalized": "Simple-\u003eInt-\u003eIO ByteString",
          "package": "pulse-simple",
          "partial": "Read Raw",
          "signature": "Simple-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleReadRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to buffer. (blocks until buffer is \u003cem\u003ealmost\u003c/em\u003e consumed)\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleWrite",
          "package": "pulse-simple",
          "signature": "Simple -\u003e [a] -\u003e IO ()",
          "source": "src/Sound-Pulse-Simple.html#simpleWrite",
          "type": "function"
        },
        "index": {
          "description": "Write to buffer blocks until buffer is almost consumed",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleWrite",
          "normalized": "Simple-\u003e[a]-\u003eIO()",
          "package": "pulse-simple",
          "partial": "Write",
          "signature": "Simple-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite raw data to buffer.\n\u003c/p\u003e",
          "module": "Sound.Pulse.Simple",
          "name": "simpleWriteRaw",
          "package": "pulse-simple",
          "signature": "Simple -\u003e ByteString -\u003e IO ()",
          "source": "src/Sound-Pulse-Simple.html#simpleWriteRaw",
          "type": "function"
        },
        "index": {
          "description": "Write raw data to buffer",
          "hierarchy": "Sound Pulse Simple",
          "module": "Sound.Pulse.Simple",
          "name": "simpleWriteRaw",
          "normalized": "Simple-\u003eByteString-\u003eIO()",
          "package": "pulse-simple",
          "partial": "Write Raw",
          "signature": "Simple-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleWriteRaw"
      }
    }
  ]
]