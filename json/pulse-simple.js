[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinding to PulseAudio Simple API (original documentation:\n  \u003ca\u003ehttp://freedesktop.org/software/pulseaudio/doxygen/simple_8h.html\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eplayback example(output 440Hz sine wave for 10 seconds):\n\u003c/p\u003e\u003cpre\u003e\n  main=do\n      s\u003c-simpleNew Nothing \"example\" Play Nothing \"this is an example application\"\n          (SampleSpec (F32 LittleEndian) 44100 1) Nothing Nothing\n      simpleWrite s ([sin $ 2*pi*440*(t/44100)|t\u003c-[1..44100*10]] :: [Float])\n      simpleDrain s\n      simpleFree s\n\u003c/pre\u003e\u003cp\u003erecording example(record for 10 seconds):\n\u003c/p\u003e\u003cpre\u003e\n  main=do\n      s\u003c-simpleNew Nothing \"example\" Record Nothing \"this is an example application\"\n          (SampleSpec (F32 LittleEndian) 44100 1) Nothing Nothing\n      xs\u003c-simpleRead s $ 44100*10 :: IO [Float]\n      simpleFree s\n\u003c/pre\u003e\u003cp\u003eNote that recording starts when \u003ccode\u003e\u003ca\u003esimpleNew\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "module",
        "fct-source": "src/Sound-Pulse-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Binding to PulseAudio Simple API original documentation http freedesktop.org software pulseaudio doxygen simple h.html playback example output Hz sine wave for seconds main do simpleNew Nothing example Play Nothing this is an example application SampleSpec F32 LittleEndian Nothing Nothing simpleWrite sin pi Float simpleDrain simpleFree recording example record for seconds main do simpleNew Nothing example Record Nothing this is an example application SampleSpec F32 LittleEndian Nothing Nothing xs simpleRead IO Float simpleFree Note that recording starts when simpleNew is called",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:BufferAttr",
      "description": {
        "fct-descr": "\u003cp\u003emax length, target length, prebuffer, minimum request, fragment size\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#BufferAttr",
        "fct-type": "data",
        "title": "BufferAttr"
      },
      "index": {
        "description": "max length target length prebuffer minimum request fragment size",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "BufferAttr",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Buffer Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:ChannelPan",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPan",
        "fct-type": "data",
        "title": "ChannelPan"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelPan",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Pan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:ChannelPosition",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "data",
        "title": "ChannelPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelPosition",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Compression",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#Compression",
        "fct-type": "data",
        "title": "Compression"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Compression",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Direction",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Direction",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Endian",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#Endian",
        "fct-type": "data",
        "title": "Endian"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Endian",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:SampleFormat",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "data",
        "title": "SampleFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "SampleFormat",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:SampleSpec",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleSpec",
        "fct-type": "data",
        "title": "SampleSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "SampleSpec",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Sample Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#t:Simple",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "data",
        "fct-source": "src/Sound-Pulse-Simple.html#Simple",
        "fct-type": "data",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ALaw",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ALaw",
        "fct-source": "src/Sound-Pulse-Simple.html#Compression",
        "fct-type": "function",
        "title": "ALaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ALaw",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "ALaw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:BigEndian",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "BigEndian",
        "fct-source": "src/Sound-Pulse-Simple.html#Endian",
        "fct-type": "function",
        "title": "BigEndian"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "BigEndian",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Big Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:BufferAttr",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "BufferAttr (Maybe Int) (Maybe Int) (Maybe Int) (Maybe Int) (Maybe Int)",
        "fct-source": "src/Sound-Pulse-Simple.html#BufferAttr",
        "fct-type": "function",
        "title": "BufferAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "BufferAttr",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Buffer Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelAux",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelAux Int",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelAux"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelAux",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Aux",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFront",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelFront ChannelPan",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelFront"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelFront",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Front",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFrontCenterLeft",
      "description": {
        "fct-descr": "\u003cp\u003eequivalent to PA_CHANNEL_POSITION_FRONT_LEFT_OF_CENTER\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelFrontCenterLeft",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelFrontCenterLeft"
      },
      "index": {
        "description": "equivalent to PA CHANNEL POSITION FRONT LEFT OF CENTER",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelFrontCenterLeft",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Front Center Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelFrontCenterRight",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelFrontCenterRight",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelFrontCenterRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelFrontCenterRight",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Front Center Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelLFE",
      "description": {
        "fct-descr": "\u003cp\u003elow frequency effects\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelLFE",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelLFE"
      },
      "index": {
        "description": "low frequency effects",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelLFE",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel LFE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelMono",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelMono",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelMono",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Mono",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelNormal",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelNormal ChannelPan",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelNormal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelNormal",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelRear",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelRear ChannelPan",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelRear"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelRear",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Rear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSideLeft",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelSideLeft",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelSideLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelSideLeft",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Side Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSideRight",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelSideRight",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelSideRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelSideRight",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Side Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelSubwoofer",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelSubwoofer",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelSubwoofer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelSubwoofer",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Subwoofer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopCenter",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelTopCenter",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelTopCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelTopCenter",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Top Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopFront",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelTopFront ChannelPan",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelTopFront"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelTopFront",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Top Front",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:ChannelTopRear",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "ChannelTopRear ChannelPan",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPosition",
        "fct-type": "function",
        "title": "ChannelTopRear"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "ChannelTopRear",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Channel Top Rear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:F32",
      "description": {
        "fct-descr": "\u003cp\u003e32 bit float in [-1,1]\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "F32 Endian",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "F32"
      },
      "index": {
        "description": "bit float in",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "F32",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:LittleEndian",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "LittleEndian",
        "fct-source": "src/Sound-Pulse-Simple.html#Endian",
        "fct-type": "function",
        "title": "LittleEndian"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "LittleEndian",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Little Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:MuLaw",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "MuLaw",
        "fct-source": "src/Sound-Pulse-Simple.html#Compression",
        "fct-type": "function",
        "title": "MuLaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "MuLaw",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Mu Law",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanCenter",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "PanCenter",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPan",
        "fct-type": "function",
        "title": "PanCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "PanCenter",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Pan Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanLeft",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "PanLeft",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPan",
        "fct-type": "function",
        "title": "PanLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "PanLeft",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Pan Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:PanRight",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "PanRight",
        "fct-source": "src/Sound-Pulse-Simple.html#ChannelPan",
        "fct-type": "function",
        "title": "PanRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "PanRight",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Pan Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Play",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Play",
        "fct-source": "src/Sound-Pulse-Simple.html#Direction",
        "fct-type": "function",
        "title": "Play"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Play",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Play",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Raw",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Raw",
        "fct-source": "src/Sound-Pulse-Simple.html#Compression",
        "fct-type": "function",
        "title": "Raw"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Raw",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:Record",
      "description": {
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Record",
        "fct-source": "src/Sound-Pulse-Simple.html#Direction",
        "fct-type": "function",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "Record",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S16",
      "description": {
        "fct-descr": "\u003cp\u003e16 bit signed\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "S16 Endian",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "S16"
      },
      "index": {
        "description": "bit signed",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "S16",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S24",
      "description": {
        "fct-descr": "\u003cp\u003e24 bit signed\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "S24 Endian",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "S24"
      },
      "index": {
        "description": "bit signed",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "S24",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S2432",
      "description": {
        "fct-descr": "\u003cp\u003e24 bit signed padded to 32 bit\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "S2432 Endian",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "S2432"
      },
      "index": {
        "description": "bit signed padded to bit",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "S2432",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:S32",
      "description": {
        "fct-descr": "\u003cp\u003e32 bit signed\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "S32 Endian",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "S32"
      },
      "index": {
        "description": "bit signed",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "S32",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:SampleSpec",
      "description": {
        "fct-descr": "\u003cp\u003eformat, sampling rate, #channels\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "SampleSpec SampleFormat Int Int",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleSpec",
        "fct-type": "function",
        "title": "SampleSpec"
      },
      "index": {
        "description": "format sampling rate channels",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "SampleSpec",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "Sample Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:U8",
      "description": {
        "fct-descr": "\u003cp\u003e8 bit unsigned (optionally compressed using \u003ccode\u003e\u003ca\u003eCompression\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "U8 Compression",
        "fct-source": "src/Sound-Pulse-Simple.html#SampleFormat",
        "fct-type": "function",
        "title": "U8"
      },
      "index": {
        "description": "bit unsigned optionally compressed using Compression",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "U8",
        "normalized": "",
        "package": "pulse-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleDrain",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until playback buffer is completely consumed.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e IO ()",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleDrain",
        "fct-type": "function",
        "title": "simpleDrain"
      },
      "index": {
        "description": "Block until playback buffer is completely consumed",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleDrain",
        "normalized": "Simple-\u003eIO()",
        "package": "pulse-simple",
        "partial": "Drain",
        "signature": "Simple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleFlush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush playback buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e IO ()",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleFlush",
        "fct-type": "function",
        "title": "simpleFlush"
      },
      "index": {
        "description": "Flush playback buffer",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleFlush",
        "normalized": "Simple-\u003eIO()",
        "package": "pulse-simple",
        "partial": "Flush",
        "signature": "Simple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleFree",
      "description": {
        "fct-descr": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e IO ()",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleFree",
        "fct-type": "function",
        "title": "simpleFree"
      },
      "index": {
        "description": "Close the connection",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleFree",
        "normalized": "Simple-\u003eIO()",
        "package": "pulse-simple",
        "partial": "Free",
        "signature": "Simple-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleGetLatency",
      "description": {
        "fct-descr": "\u003cp\u003eGet current latency in microseconds.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e IO Integer",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleGetLatency",
        "fct-type": "function",
        "title": "simpleGetLatency"
      },
      "index": {
        "description": "Get current latency in microseconds",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleGetLatency",
        "normalized": "Simple-\u003eIO Integer",
        "package": "pulse-simple",
        "partial": "Get Latency",
        "signature": "Simple-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleNew",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish connection to pulseaudio server. You usually don't need to specify optional fields.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Maybe String-\u003e String-\u003e Direction-\u003e Maybe String-\u003e String-\u003e SampleSpec-\u003e Maybe [ChannelPosition]-\u003e Maybe BufferAttr-\u003e IO Simple",
        "fct-type": "function",
        "title": "simpleNew"
      },
      "index": {
        "description": "Establish connection to pulseaudio server You usually don need to specify optional fields",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleNew",
        "normalized": "Maybe String-\u003eString-\u003eDirection-\u003eMaybe String-\u003eString-\u003eSampleSpec-\u003eMaybe[ChannelPosition]-\u003eMaybe BufferAttr-\u003eIO Simple",
        "package": "pulse-simple",
        "partial": "New",
        "signature": "Maybe String-\u003eString-\u003eDirection-\u003eMaybe String-\u003eString-\u003eSampleSpec-\u003eMaybe[ChannelPosition]-\u003eMaybe BufferAttr-\u003eIO Simple"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleRead",
      "description": {
        "fct-descr": "\u003cp\u003eRead from buffer. (non-blocking if specified # of samples already exist in the internal buffer)\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple-\u003e Int-\u003e IO [a]",
        "fct-type": "function",
        "title": "simpleRead"
      },
      "index": {
        "description": "Read from buffer non-blocking if specified of samples already exist in the internal buffer",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleRead",
        "normalized": "Simple-\u003eInt-\u003eIO[a]",
        "package": "pulse-simple",
        "partial": "Read",
        "signature": "Simple-\u003eInt-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleReadRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRead raw data from buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleReadRaw",
        "fct-type": "function",
        "title": "simpleReadRaw"
      },
      "index": {
        "description": "Read raw data from buffer",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleReadRaw",
        "normalized": "Simple-\u003eInt-\u003eIO ByteString",
        "package": "pulse-simple",
        "partial": "Read Raw",
        "signature": "Simple-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite to buffer. (blocks until buffer is \u003cem\u003ealmost\u003c/em\u003e consumed)\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleWrite",
        "fct-type": "function",
        "title": "simpleWrite"
      },
      "index": {
        "description": "Write to buffer blocks until buffer is almost consumed",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleWrite",
        "normalized": "Simple-\u003e[a]-\u003eIO()",
        "package": "pulse-simple",
        "partial": "Write",
        "signature": "Simple-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pulse-simple/docs/Sound-Pulse-Simple.html#v:simpleWriteRaw",
      "description": {
        "fct-descr": "\u003cp\u003eWrite raw data to buffer.\n\u003c/p\u003e",
        "fct-module": "Sound.Pulse.Simple",
        "fct-package": "pulse-simple",
        "fct-signature": "Simple -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Sound-Pulse-Simple.html#simpleWriteRaw",
        "fct-type": "function",
        "title": "simpleWriteRaw"
      },
      "index": {
        "description": "Write raw data to buffer",
        "hierarchy": "Sound Pulse Simple",
        "module": "Sound.Pulse.Simple",
        "name": "simpleWriteRaw",
        "normalized": "Simple-\u003eByteString-\u003eIO()",
        "package": "pulse-simple",
        "partial": "Write Raw",
        "signature": "Simple-\u003eByteString-\u003eIO()"
      }
    }
  }
]