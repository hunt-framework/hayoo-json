[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a module to control JackMiniMix, a GPL mixer for the Jack Audio Connection Kit using OpenSoundControl (OSC).\n\u003c/p\u003e\u003cp\u003eJackMiniMix was written by Nicholas J Humfrey. \u003ca\u003ehttp://www.aelius.com/njh/jackminimix/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOSC was developed at CNMAT by Adrian Freed and Matt Wright. \u003ca\u003ehttp://opensoundcontrol.org/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe documentation was mostly taken from the source of JackMiniMix by Humfrey.\n\u003c/p\u003e\u003cp\u003eThis module requires that the JackMiniMix program be installed.\n\u003c/p\u003e\u003cp\u003eFor general usage, use the camel case functions; they're easier. The functions with underscores in the name need to be called using the withJackMiniMix function; the camelCase ones already include it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "module",
        "fct-source": "src/Sound-JackMiniMix.html",
        "fct-type": "module",
        "title": "JackMiniMix"
      },
      "index": {
        "description": "This is module to control JackMiniMix GPL mixer for the Jack Audio Connection Kit using OpenSoundControl OSC JackMiniMix was written by Nicholas Humfrey http www.aelius.com njh jackminimix OSC was developed at CNMAT by Adrian Freed and Matt Wright http opensoundcontrol.org The documentation was mostly taken from the source of JackMiniMix by Humfrey This module requires that the JackMiniMix program be installed For general usage use the camel case functions they re easier The functions with underscores in the name need to be called using the withJackMiniMix function the camelCase ones already include it",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "JackMiniMix",
        "normalized": "",
        "package": "JackMiniMix",
        "partial": "Jack Mini Mix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:channelCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of stereo input channels that the mixer has.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/mixer/get_channel_count        - Get the number of channels\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/mixer/channel_count (i)\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e IO OSC",
        "fct-type": "function",
        "title": "channelCount"
      },
      "index": {
        "description": "Returns the number of stereo input channels that the mixer has The OSC message mixer get channel count Get the number of channels replies with mixer channel count",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "channelCount",
        "normalized": "Int-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Count",
        "signature": "Int-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:channel_count",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#channel_count",
        "fct-type": "function",
        "title": "channel_count"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "channel_count",
        "normalized": "a-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:getChannelGain",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the gain (in decibels) of channel.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/get_gain (i)     - Get gain of channel i\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/gain (if)\n\u003c/p\u003e\u003cp\u003echannel is the number of the channel (in range 1 to total number of channels).\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e Int-\u003e IO OSC",
        "fct-type": "function",
        "title": "getChannelGain"
      },
      "index": {
        "description": "Returns the gain in decibels of channel The OSC message mixer channel get gain Get gain of channel replies with mixer channel gain if channel is the number of the channel in range to total number of channels",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "getChannelGain",
        "normalized": "Int-\u003eInt-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Channel Gain",
        "signature": "Int-\u003eInt-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:getChannelLabel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the label (string) of channel number channel.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/get_label (i)    - Get the label of channel i\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/label (is)\n\u003c/p\u003e\u003cp\u003echannel is the number of the channel (in range 1 to total number of channels).\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e Int-\u003e IO OSC",
        "fct-type": "function",
        "title": "getChannelLabel"
      },
      "index": {
        "description": "Returns the label string of channel number channel The OSC message mixer channel get label Get the label of channel replies with mixer channel label is channel is the number of the channel in range to total number of channels",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "getChannelLabel",
        "normalized": "Int-\u003eInt-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Channel Label",
        "signature": "Int-\u003eInt-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:get_channel_gain",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e Int -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#get_channel_gain",
        "fct-type": "function",
        "title": "get_channel_gain"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "get_channel_gain",
        "normalized": "a-\u003eInt-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eInt-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:get_channel_label",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e Int -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#get_channel_label",
        "fct-type": "function",
        "title": "get_channel_label"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "get_channel_label",
        "normalized": "a-\u003eInt-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eInt-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:ping",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#ping",
        "fct-type": "function",
        "title": "ping"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "ping",
        "normalized": "a-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:pingMixer",
      "description": {
        "fct-descr": "\u003cp\u003ePings the mixer to see if it is there.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/ping                           - Check mixer is still there\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/pong\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e IO OSC",
        "fct-type": "function",
        "title": "pingMixer"
      },
      "index": {
        "description": "Pings the mixer to see if it is there The OSC message ping Check mixer is still there replies with pong",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "pingMixer",
        "normalized": "Int-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Mixer",
        "signature": "Int-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:setChannelGain",
      "description": {
        "fct-descr": "\u003cp\u003eSets the gain of channel channel to gain dB.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/set_gain (if)    - Set the gain of channel i to f dB\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/gain (if)\n\u003c/p\u003e\u003cp\u003echannel is the number of the channel (in range 1 to total number of channels).\n\u003c/p\u003e\u003cp\u003egain is the gain (in decibels) to set the channel to (in range -90 to 90 dB).\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e Int-\u003e Double-\u003e IO OSC",
        "fct-type": "function",
        "title": "setChannelGain"
      },
      "index": {
        "description": "Sets the gain of channel channel to gain dB The OSC message mixer channel set gain if Set the gain of channel to dB replies with mixer channel gain if channel is the number of the channel in range to total number of channels gain is the gain in decibels to set the channel to in range to dB",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "setChannelGain",
        "normalized": "Int-\u003eInt-\u003eDouble-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Channel Gain",
        "signature": "Int-\u003eInt-\u003eDouble-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:setChannelLabel",
      "description": {
        "fct-descr": "\u003cp\u003eSets the label (string) of channel number channel to label.\n\u003c/p\u003e\u003cp\u003eThe OSC message:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/set_label (is)   - Set the label of channel i to s\n\u003c/p\u003e\u003cp\u003ereplies with:\n\u003c/p\u003e\u003cp\u003e/mixer/channel/label (is)\n\u003c/p\u003e\u003cp\u003echannel is the number of the channel (in range 1 to total number of channels).\n\u003c/p\u003e\u003cp\u003elabel is the new label for the channel.\n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int-\u003e Int-\u003e String-\u003e IO OSC",
        "fct-type": "function",
        "title": "setChannelLabel"
      },
      "index": {
        "description": "Sets the label string of channel number channel to label The OSC message mixer channel set label is Set the label of channel to replies with mixer channel label is channel is the number of the channel in range to total number of channels label is the new label for the channel",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "setChannelLabel",
        "normalized": "Int-\u003eInt-\u003eString-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "Channel Label",
        "signature": "Int-\u003eInt-\u003eString-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:set_channel_gain",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e Int -\u003e Double -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#set_channel_gain",
        "fct-type": "function",
        "title": "set_channel_gain"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "set_channel_gain",
        "normalized": "a-\u003eInt-\u003eDouble-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eInt-\u003eDouble-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:set_channel_label",
      "description": {
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "t -\u003e Int -\u003e String -\u003e IO OSC",
        "fct-source": "src/Sound-JackMiniMix.html#set_channel_label",
        "fct-type": "function",
        "title": "set_channel_label"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "set_channel_label",
        "normalized": "a-\u003eInt-\u003eString-\u003eIO OSC",
        "package": "JackMiniMix",
        "partial": "",
        "signature": "t-\u003eInt-\u003eString-\u003eIO OSC"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/JackMiniMix/docs/Sound-JackMiniMix.html#v:withJackMiniMix",
      "description": {
        "fct-descr": "\u003cp\u003eBracket JackMiniMix communication. \n\u003c/p\u003e",
        "fct-module": "Sound.JackMiniMix",
        "fct-package": "JackMiniMix",
        "fct-signature": "Int -\u003e (UDP -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Sound-JackMiniMix.html#withJackMiniMix",
        "fct-type": "function",
        "title": "withJackMiniMix"
      },
      "index": {
        "description": "Bracket JackMiniMix communication",
        "hierarchy": "Sound JackMiniMix",
        "module": "Sound.JackMiniMix",
        "name": "withJackMiniMix",
        "normalized": "Int-\u003e(UDP-\u003eIO a)-\u003eIO a",
        "package": "JackMiniMix",
        "partial": "Jack Mini Mix",
        "signature": "Int-\u003e(UDP-\u003eIO a)-\u003eIO a"
      }
    }
  }
]