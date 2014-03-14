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
        "word": "alsa-mixer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides bindings to the Advanced Linux Sound Architecture\n (ALSA) library API. The portability of this library is limited to\n systems with ALSA (i.e., Linux systems).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "Mixer",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides bindings to the Advanced Linux Sound Architecture ALSA library API The portability of this library is limited to systems with ALSA i.e Linux systems",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Mixer",
          "package": "alsa-mixer",
          "partial": "Mixer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Channel",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Channel",
          "package": "alsa-mixer",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e represents one of the controls belonging to an ALSA mixer\n element. Each control has a number of playback and capture channels.\n The control may also have a switch and/or a volume capability associated\n with it. The capability can be common to both playback and capture, or\n there can be separate capabilities for each.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "Control",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "data"
        },
        "index": {
          "description": "Control represents one of the controls belonging to an ALSA mixer element Each control has number of playback and capture channels The control may also have switch and or volume capability associated with it The capability can be common to both playback and capture or there can be separate capabilities for each",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Control",
          "package": "alsa-mixer",
          "partial": "Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Mixer",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Mixer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Mixer",
          "package": "alsa-mixer",
          "partial": "Mixer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:Mixer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePerChannel\u003c/a\u003e\u003c/code\u003e represents a capability that with either a separate value for\n each channel or with a common value for all channels.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "PerChannel",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "data"
        },
        "index": {
          "description": "PerChannel represents capability that with either separate value for each channel or with common value for all channels",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "PerChannel",
          "package": "alsa-mixer",
          "partial": "Per Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:PerChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSwitch\u003c/a\u003e\u003c/code\u003e represents a switch capability for controls and channels that can\n be muted and unmuted.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "Switch",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer.html#Switch",
          "type": "type"
        },
        "index": {
          "description": "Switch represents switch capability for controls and channels that can be muted and unmuted",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Switch",
          "package": "alsa-mixer",
          "partial": "Switch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVolume\u003c/a\u003e\u003c/code\u003e represents a volume capability. There may be a separate value per\n channel, but each capability has only one range.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "Volume",
          "package": "alsa-mixer",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "data"
        },
        "index": {
          "description": "Volume represents volume capability There may be separate value per channel but each capability has only one range",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Volume",
          "package": "alsa-mixer",
          "partial": "Volume",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#t:Volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Control",
          "package": "alsa-mixer",
          "signature": "Control",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Control",
          "package": "alsa-mixer",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "FrontCenter",
          "package": "alsa-mixer",
          "signature": "FrontCenter",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "FrontCenter",
          "package": "alsa-mixer",
          "partial": "Front Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:FrontCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "FrontLeft",
          "package": "alsa-mixer",
          "signature": "FrontLeft",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "FrontLeft",
          "package": "alsa-mixer",
          "partial": "Front Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:FrontLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "FrontRight",
          "package": "alsa-mixer",
          "signature": "FrontRight",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "FrontRight",
          "package": "alsa-mixer",
          "partial": "Front Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:FrontRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Joined",
          "package": "alsa-mixer",
          "signature": "Joined",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Joined",
          "package": "alsa-mixer",
          "partial": "Joined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Joined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Last",
          "package": "alsa-mixer",
          "signature": "Last",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Last",
          "package": "alsa-mixer",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "PerChannel",
          "package": "alsa-mixer",
          "signature": "PerChannel",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "PerChannel",
          "package": "alsa-mixer",
          "partial": "Per Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:PerChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "RearCenter",
          "package": "alsa-mixer",
          "signature": "RearCenter",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "RearCenter",
          "package": "alsa-mixer",
          "partial": "Rear Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:RearCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "RearLeft",
          "package": "alsa-mixer",
          "signature": "RearLeft",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "RearLeft",
          "package": "alsa-mixer",
          "partial": "Rear Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:RearLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "RearRight",
          "package": "alsa-mixer",
          "signature": "RearRight",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "RearRight",
          "package": "alsa-mixer",
          "partial": "Rear Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:RearRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "SND_MIXER_SCHN_MONO",
          "package": "alsa-mixer",
          "signature": "SND_MIXER_SCHN_MONO",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "SND_MIXER_SCHN_MONO",
          "package": "alsa-mixer",
          "partial": "SND MIXER SCHN MONO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:SND_MIXER_SCHN_MONO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "SideLeft",
          "package": "alsa-mixer",
          "signature": "SideLeft",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "SideLeft",
          "package": "alsa-mixer",
          "partial": "Side Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:SideLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "SideRight",
          "package": "alsa-mixer",
          "signature": "SideRight",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "SideRight",
          "package": "alsa-mixer",
          "partial": "Side Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:SideRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Unknown",
          "package": "alsa-mixer",
          "signature": "Unknown",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Unknown",
          "package": "alsa-mixer",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Volume",
          "package": "alsa-mixer",
          "signature": "Volume",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Volume",
          "package": "alsa-mixer",
          "partial": "Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "Woofer",
          "package": "alsa-mixer",
          "signature": "Woofer",
          "source": "src/Sound-ALSA-Mixer-Internal.html#Channel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "Woofer",
          "package": "alsa-mixer",
          "partial": "Woofer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:Woofer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "allChannels",
          "package": "alsa-mixer",
          "signature": "[Channel]",
          "source": "src/Sound-ALSA-Mixer-Internal.html#allChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "allChannels",
          "normalized": "[Channel]",
          "package": "alsa-mixer",
          "partial": "Channels",
          "signature": "[Channel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:allChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a given capability, which may be for either playback or capture, or\n common to both, return the capture capability if it exists.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "capture",
          "package": "alsa-mixer",
          "signature": "Either a (Maybe a, Maybe a) -\u003e Maybe a",
          "source": "src/Sound-ALSA-Mixer.html#capture",
          "type": "function"
        },
        "index": {
          "description": "For given capability which may be for either playback or capture or common to both return the capture capability if it exists",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "capture",
          "normalized": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "package": "alsa-mixer",
          "signature": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll channels supported by a \u003ccode\u003e\u003ca\u003ePerChannel\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "channels",
          "package": "alsa-mixer",
          "signature": "PerChannel e -\u003e [Channel]",
          "source": "src/Sound-ALSA-Mixer.html#channels",
          "type": "function"
        },
        "index": {
          "description": "All channels supported by PerChannel object",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "channels",
          "normalized": "PerChannel a-\u003e[Channel]",
          "package": "alsa-mixer",
          "signature": "PerChannel e-\u003e[Channel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a given capability, which may be for either playback or capture, or\n common to both, return the common capability if it exists.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "common",
          "package": "alsa-mixer",
          "signature": "Either a (Maybe a, Maybe a) -\u003e Maybe a",
          "source": "src/Sound-ALSA-Mixer.html#common",
          "type": "function"
        },
        "index": {
          "description": "For given capability which may be for either playback or capture or common to both return the common capability if it exists",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "common",
          "normalized": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "package": "alsa-mixer",
          "signature": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:common"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e objects associated with a particular \u003ccode\u003e\u003ca\u003eMixer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "controls",
          "package": "alsa-mixer",
          "signature": "Mixer -\u003e IO [Control]",
          "source": "src/Sound-ALSA-Mixer.html#controls",
          "type": "function"
        },
        "index": {
          "description": "All the Control objects associated with particular Mixer",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "controls",
          "normalized": "Mixer-\u003eIO[Control]",
          "package": "alsa-mixer",
          "signature": "Mixer-\u003eIO[Control]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:controls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVolume values for each channel in hundredths of\n a decibel.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "dB",
          "package": "alsa-mixer",
          "signature": "PerChannel Integer",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "description": "Volume values for each channel in hundredths of decibel",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "dB",
          "package": "alsa-mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:dB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value associated with a particular channel, if that channel exists.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "getChannel",
          "package": "alsa-mixer",
          "signature": "Channel -\u003e PerChannel x -\u003e IO (Maybe x)",
          "source": "src/Sound-ALSA-Mixer.html#getChannel",
          "type": "function"
        },
        "index": {
          "description": "Get the value associated with particular channel if that channel exists",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getChannel",
          "normalized": "Channel-\u003ePerChannel a-\u003eIO(Maybe a)",
          "package": "alsa-mixer",
          "partial": "Channel",
          "signature": "Channel-\u003ePerChannel x-\u003eIO(Maybe x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the named \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e, if it exists, from the named \u003ccode\u003e\u003ca\u003eMixer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "getControlByName",
          "package": "alsa-mixer",
          "signature": "Mixer-\u003e String-\u003e IO (Maybe Control)",
          "type": "function"
        },
        "index": {
          "description": "Get the named Control if it exists from the named Mixer",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getControlByName",
          "normalized": "Mixer-\u003eString-\u003eIO(Maybe Control)",
          "package": "alsa-mixer",
          "partial": "Control By Name",
          "signature": "Mixer-\u003eString-\u003eIO(Maybe Control)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getControlByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "getJoined",
          "package": "alsa-mixer",
          "signature": "IO e",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getJoined",
          "package": "alsa-mixer",
          "partial": "Joined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getJoined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "getPerChannel",
          "package": "alsa-mixer",
          "signature": "IO [(Channel, e)]",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getPerChannel",
          "normalized": "IO[(Channel,a)]",
          "package": "alsa-mixer",
          "partial": "Per Channel",
          "signature": "IO[(Channel,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getPerChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum and maximum volumes (unitless).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "getRange",
          "package": "alsa-mixer",
          "signature": "IO (Integer, Integer)",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum and maximum volumes unitless",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getRange",
          "normalized": "IO(Integer,Integer)",
          "package": "alsa-mixer",
          "partial": "Range",
          "signature": "IO(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minimum and maximum volumes in\n hundredths of a decibel.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "getRangeDb",
          "package": "alsa-mixer",
          "signature": "IO (Integer, Integer)",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "description": "Returns the minimum and maximum volumes in hundredths of decibel",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "getRangeDb",
          "normalized": "IO(Integer,Integer)",
          "package": "alsa-mixer",
          "partial": "Range Db",
          "signature": "IO(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:getRangeDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "index",
          "package": "alsa-mixer",
          "signature": "Integer",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "index",
          "package": "alsa-mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003ePerChannel\u003c/a\u003e\u003c/code\u003e object has a common value for all channels.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "joined",
          "package": "alsa-mixer",
          "signature": "PerChannel e -\u003e Bool",
          "source": "src/Sound-ALSA-Mixer.html#joined",
          "type": "function"
        },
        "index": {
          "description": "True if the PerChannel object has common value for all channels",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "joined",
          "normalized": "PerChannel a-\u003eBool",
          "package": "alsa-mixer",
          "signature": "PerChannel e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:joined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "joinedChannels",
          "package": "alsa-mixer",
          "signature": "[Channel]",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "joinedChannels",
          "normalized": "[Channel]",
          "package": "alsa-mixer",
          "partial": "Channels",
          "signature": "[Channel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:joinedChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "name",
          "package": "alsa-mixer",
          "signature": "String",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "name",
          "package": "alsa-mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003ePerChannel\u003c/a\u003e\u003c/code\u003e object has a separate value for each channel.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "perChannel",
          "package": "alsa-mixer",
          "signature": "PerChannel e -\u003e Bool",
          "source": "src/Sound-ALSA-Mixer.html#perChannel",
          "type": "function"
        },
        "index": {
          "description": "True if the PerChannel object has separate value for each channel",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "perChannel",
          "normalized": "PerChannel a-\u003eBool",
          "package": "alsa-mixer",
          "partial": "Channel",
          "signature": "PerChannel e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:perChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "perChannels",
          "package": "alsa-mixer",
          "signature": "[Channel]",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "perChannels",
          "normalized": "[Channel]",
          "package": "alsa-mixer",
          "partial": "Channels",
          "signature": "[Channel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:perChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor a given capability, which may be for either playback or capture, or\n common to both, return the playback capability if it exists.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "playback",
          "package": "alsa-mixer",
          "signature": "Either a (Maybe a, Maybe a) -\u003e Maybe a",
          "source": "src/Sound-ALSA-Mixer.html#playback",
          "type": "function"
        },
        "index": {
          "description": "For given capability which may be for either playback or capture or common to both return the playback capability if it exists",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "playback",
          "normalized": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "package": "alsa-mixer",
          "signature": "Either a(Maybe a,Maybe a)-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:playback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value associated with a particular channel, if that channel exists.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "setChannel",
          "package": "alsa-mixer",
          "signature": "Channel -\u003e PerChannel x -\u003e x -\u003e IO ()",
          "source": "src/Sound-ALSA-Mixer.html#setChannel",
          "type": "function"
        },
        "index": {
          "description": "Set the value associated with particular channel if that channel exists",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "setChannel",
          "normalized": "Channel-\u003ePerChannel a-\u003ea-\u003eIO()",
          "package": "alsa-mixer",
          "partial": "Channel",
          "signature": "Channel-\u003ePerChannel x-\u003ex-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:setChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "setJoined",
          "package": "alsa-mixer",
          "signature": "e -\u003e IO ()",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "setJoined",
          "normalized": "a-\u003eIO()",
          "package": "alsa-mixer",
          "partial": "Joined",
          "signature": "e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:setJoined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "setPerChannel",
          "package": "alsa-mixer",
          "signature": "[(Channel, e)] -\u003e IO ()",
          "source": "src/Sound-ALSA-Mixer.html#PerChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "setPerChannel",
          "normalized": "[(Channel,a)]-\u003eIO()",
          "package": "alsa-mixer",
          "partial": "Per Channel",
          "signature": "[(Channel,e)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:setPerChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the minimum and maximum volumes (unitless).\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "setRange",
          "package": "alsa-mixer",
          "signature": "(Integer, Integer) -\u003e IO ()",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "description": "Sets the minimum and maximum volumes unitless",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "setRange",
          "normalized": "(Integer,Integer)-\u003eIO()",
          "package": "alsa-mixer",
          "partial": "Range",
          "signature": "(Integer,Integer)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:setRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "switch",
          "package": "alsa-mixer",
          "signature": "Either Switch (Maybe Switch, Maybe Switch)",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "switch",
          "normalized": "Either Switch(Maybe Switch,Maybe Switch)",
          "package": "alsa-mixer",
          "signature": "Either Switch(Maybe Switch,Maybe Switch)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVolume values for each channel.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "value",
          "package": "alsa-mixer",
          "signature": "PerChannel Integer",
          "source": "src/Sound-ALSA-Mixer.html#Volume",
          "type": "function"
        },
        "index": {
          "description": "Volume values for each channel",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "value",
          "package": "alsa-mixer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Mixer",
          "name": "volume",
          "package": "alsa-mixer",
          "signature": "Either Volume (Maybe Volume, Maybe Volume)",
          "source": "src/Sound-ALSA-Mixer.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "volume",
          "normalized": "Either Volume(Maybe Volume,Maybe Volume)",
          "package": "alsa-mixer",
          "signature": "Either Volume(Maybe Volume,Maybe Volume)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:volume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with the named mixer. An exception will be\n thrown if the named mixer cannot be found. A mixer named \"default\"\n should always exist.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Mixer",
          "name": "withMixer",
          "package": "alsa-mixer",
          "signature": "String -\u003e (Mixer -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Mixer-Internal.html#withMixer",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action with the named mixer An exception will be thrown if the named mixer cannot be found mixer named default should always exist",
          "hierarchy": "Sound ALSA Mixer",
          "module": "Sound.ALSA.Mixer",
          "name": "withMixer",
          "normalized": "String-\u003e(Mixer-\u003eIO a)-\u003eIO a",
          "package": "alsa-mixer",
          "partial": "Mixer",
          "signature": "String-\u003e(Mixer-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-mixer/docs/Sound-ALSA-Mixer.html#v:withMixer"
      }
    }
  ]
]