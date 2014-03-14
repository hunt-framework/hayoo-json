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
        "word": "sdl2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "Audio",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Audio.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "Audio",
          "package": "sdl2",
          "partial": "Audio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "audioInit",
          "package": "sdl2",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#audioInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "audioInit",
          "normalized": "CString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Init",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:audioInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "audioQuit",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#audioQuit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "audioQuit",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Quit",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:audioQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "buildAudioCVT",
          "package": "sdl2",
          "signature": "Ptr AudioCVT -\u003e AudioFormat -\u003e Word8 -\u003e CInt -\u003e AudioFormat -\u003e Word8 -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#buildAudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "buildAudioCVT",
          "normalized": "Ptr AudioCVT-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Audio CVT",
          "signature": "Ptr AudioCVT-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:buildAudioCVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "closeAudio",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#closeAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "closeAudio",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:closeAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "closeAudioDevice",
          "package": "sdl2",
          "signature": "AudioDeviceID -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#closeAudioDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "closeAudioDevice",
          "normalized": "AudioDeviceID-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio Device",
          "signature": "AudioDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:closeAudioDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "convertAudio",
          "package": "sdl2",
          "signature": "Ptr AudioCVT -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#convertAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "convertAudio",
          "normalized": "Ptr AudioCVT-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "Ptr AudioCVT-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:convertAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "freeWAV",
          "package": "sdl2",
          "signature": "Ptr Word8 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#freeWAV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "freeWAV",
          "normalized": "Ptr Word-\u003eIO()",
          "package": "sdl2",
          "partial": "WAV",
          "signature": "Ptr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:freeWAV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDeviceName",
          "package": "sdl2",
          "signature": "CInt -\u003e CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Audio.html#getAudioDeviceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDeviceName",
          "normalized": "CInt-\u003eCInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Audio Device Name",
          "signature": "CInt-\u003eCInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getAudioDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDeviceStatus",
          "package": "sdl2",
          "signature": "AudioDeviceID -\u003e IO AudioStatus",
          "source": "src/Graphics-UI-SDL-Audio.html#getAudioDeviceStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDeviceStatus",
          "normalized": "AudioDeviceID-\u003eIO AudioStatus",
          "package": "sdl2",
          "partial": "Audio Device Status",
          "signature": "AudioDeviceID-\u003eIO AudioStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getAudioDeviceStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDriver",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Audio.html#getAudioDriver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioDriver",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Audio Driver",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getAudioDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioStatus",
          "package": "sdl2",
          "signature": "IO AudioStatus",
          "source": "src/Graphics-UI-SDL-Audio.html#getAudioStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getAudioStatus",
          "package": "sdl2",
          "partial": "Audio Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getAudioStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getCurrentAudioDriver",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Audio.html#getCurrentAudioDriver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getCurrentAudioDriver",
          "package": "sdl2",
          "partial": "Current Audio Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getCurrentAudioDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getNumAudioDevices",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#getNumAudioDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getNumAudioDevices",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Audio Devices",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getNumAudioDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "getNumAudioDrivers",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#getNumAudioDrivers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "getNumAudioDrivers",
          "package": "sdl2",
          "partial": "Num Audio Drivers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:getNumAudioDrivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "loadWAV",
          "package": "sdl2",
          "signature": "CString -\u003e Ptr AudioSpec -\u003e Ptr (Ptr Word8) -\u003e Ptr Word32 -\u003e IO (Ptr AudioSpec)",
          "source": "src/Graphics-UI-SDL-Audio.html#loadWAV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "loadWAV",
          "normalized": "CString-\u003ePtr AudioSpec-\u003ePtr(Ptr Word)-\u003ePtr Word-\u003eIO(Ptr AudioSpec)",
          "package": "sdl2",
          "partial": "WAV",
          "signature": "CString-\u003ePtr AudioSpec-\u003ePtr(Ptr Word)-\u003ePtr Word-\u003eIO(Ptr AudioSpec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:loadWAV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "loadWAV_RW",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e CInt -\u003e Ptr AudioSpec -\u003e Ptr (Ptr Word8) -\u003e Ptr Word32 -\u003e IO (Ptr AudioSpec)",
          "source": "src/Graphics-UI-SDL-Audio.html#loadWAV_RW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "loadWAV_RW",
          "normalized": "Ptr RWops-\u003eCInt-\u003ePtr AudioSpec-\u003ePtr(Ptr Word)-\u003ePtr Word-\u003eIO(Ptr AudioSpec)",
          "package": "sdl2",
          "partial": "WAV RW",
          "signature": "Ptr RWops-\u003eCInt-\u003ePtr AudioSpec-\u003ePtr(Ptr Word)-\u003ePtr Word-\u003eIO(Ptr AudioSpec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:loadWAV_RW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "lockAudio",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#lockAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "lockAudio",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:lockAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "lockAudioDevice",
          "package": "sdl2",
          "signature": "AudioDeviceID -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#lockAudioDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "lockAudioDevice",
          "normalized": "AudioDeviceID-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio Device",
          "signature": "AudioDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:lockAudioDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "mixAudio",
          "package": "sdl2",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e Word32 -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#mixAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "mixAudio",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eWord-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "Ptr Word-\u003ePtr Word-\u003eWord-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:mixAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "mixAudioFormat",
          "package": "sdl2",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e AudioFormat -\u003e Word32 -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#mixAudioFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "mixAudioFormat",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio Format",
          "signature": "Ptr Word-\u003ePtr Word-\u003eAudioFormat-\u003eWord-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:mixAudioFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "openAudio",
          "package": "sdl2",
          "signature": "Ptr AudioSpec -\u003e Ptr AudioSpec -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Audio.html#openAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "openAudio",
          "normalized": "Ptr AudioSpec-\u003ePtr AudioSpec-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "Ptr AudioSpec-\u003ePtr AudioSpec-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:openAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "openAudioDevice",
          "package": "sdl2",
          "signature": "CString -\u003e CInt -\u003e Ptr AudioSpec -\u003e Ptr AudioSpec -\u003e CInt -\u003e IO AudioDeviceID",
          "source": "src/Graphics-UI-SDL-Audio.html#openAudioDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "openAudioDevice",
          "normalized": "CString-\u003eCInt-\u003ePtr AudioSpec-\u003ePtr AudioSpec-\u003eCInt-\u003eIO AudioDeviceID",
          "package": "sdl2",
          "partial": "Audio Device",
          "signature": "CString-\u003eCInt-\u003ePtr AudioSpec-\u003ePtr AudioSpec-\u003eCInt-\u003eIO AudioDeviceID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:openAudioDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "pauseAudio",
          "package": "sdl2",
          "signature": "CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#pauseAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "pauseAudio",
          "normalized": "CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:pauseAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "pauseAudioDevice",
          "package": "sdl2",
          "signature": "AudioDeviceID -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#pauseAudioDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "pauseAudioDevice",
          "normalized": "AudioDeviceID-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio Device",
          "signature": "AudioDeviceID-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:pauseAudioDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "unlockAudio",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#unlockAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "unlockAudio",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Audio",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:unlockAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Audio",
          "name": "unlockAudioDevice",
          "package": "sdl2",
          "signature": "AudioDeviceID -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Audio.html#unlockAudioDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Audio",
          "module": "Graphics.UI.SDL.Audio",
          "name": "unlockAudioDevice",
          "normalized": "AudioDeviceID-\u003eIO()",
          "package": "sdl2",
          "partial": "Audio Device",
          "signature": "AudioDeviceID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Audio.html#v:unlockAudioDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "Basic",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Basic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "Basic",
          "package": "sdl2",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "addHintCallback",
          "package": "sdl2",
          "signature": "CString -\u003e HintCallback -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#addHintCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "addHintCallback",
          "normalized": "CString-\u003eHintCallback-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Hint Callback",
          "signature": "CString-\u003eHintCallback-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:addHintCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "clearError",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#clearError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "clearError",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Error",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:clearError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "clearHints",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#clearHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "clearHints",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Hints",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:clearHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "delHintCallback",
          "package": "sdl2",
          "signature": "CString -\u003e HintCallback -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#delHintCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "delHintCallback",
          "normalized": "CString-\u003eHintCallback-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Hint Callback",
          "signature": "CString-\u003eHintCallback-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:delHintCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "getError",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Basic.html#getError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "getError",
          "package": "sdl2",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:getError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "getHint",
          "package": "sdl2",
          "signature": "CString -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Basic.html#getHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "getHint",
          "normalized": "CString-\u003eIO CString",
          "package": "sdl2",
          "partial": "Hint",
          "signature": "CString-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:getHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "getRevision",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Basic.html#getRevision",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "getRevision",
          "package": "sdl2",
          "partial": "Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:getRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "getRevisionNumber",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Basic.html#getRevisionNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "getRevisionNumber",
          "package": "sdl2",
          "partial": "Revision Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:getRevisionNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "getVersion",
          "package": "sdl2",
          "signature": "Ptr Version -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#getVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "getVersion",
          "normalized": "Ptr Version-\u003eIO()",
          "package": "sdl2",
          "partial": "Version",
          "signature": "Ptr Version-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "init",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Basic.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "init",
          "normalized": "Word-\u003eIO CInt",
          "package": "sdl2",
          "signature": "Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "initSubSystem",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Basic.html#initSubSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "initSubSystem",
          "normalized": "Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Sub System",
          "signature": "Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:initSubSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logGetOutputFunction",
          "package": "sdl2",
          "signature": "Ptr LogOutputFunction -\u003e Ptr (Ptr ()) -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#logGetOutputFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logGetOutputFunction",
          "normalized": "Ptr LogOutputFunction-\u003ePtr(Ptr())-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Output Function",
          "signature": "Ptr LogOutputFunction-\u003ePtr(Ptr())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logGetOutputFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logGetPriority",
          "package": "sdl2",
          "signature": "CInt -\u003e IO LogPriority",
          "source": "src/Graphics-UI-SDL-Basic.html#logGetPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logGetPriority",
          "normalized": "CInt-\u003eIO LogPriority",
          "package": "sdl2",
          "partial": "Get Priority",
          "signature": "CInt-\u003eIO LogPriority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logGetPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logResetPriorities",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#logResetPriorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logResetPriorities",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Reset Priorities",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logResetPriorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetAllPriority",
          "package": "sdl2",
          "signature": "LogPriority -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#logSetAllPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetAllPriority",
          "normalized": "LogPriority-\u003eIO()",
          "package": "sdl2",
          "partial": "Set All Priority",
          "signature": "LogPriority-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logSetAllPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetOutputFunction",
          "package": "sdl2",
          "signature": "LogOutputFunction -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#logSetOutputFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetOutputFunction",
          "normalized": "LogOutputFunction-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Set Output Function",
          "signature": "LogOutputFunction-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logSetOutputFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetPriority",
          "package": "sdl2",
          "signature": "CInt -\u003e LogPriority -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#logSetPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "logSetPriority",
          "normalized": "CInt-\u003eLogPriority-\u003eIO()",
          "package": "sdl2",
          "partial": "Set Priority",
          "signature": "CInt-\u003eLogPriority-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:logSetPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "quit",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "quit",
          "normalized": "IO()",
          "package": "sdl2",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "quitSubSystem",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#quitSubSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "quitSubSystem",
          "normalized": "Word-\u003eIO()",
          "package": "sdl2",
          "partial": "Sub System",
          "signature": "Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:quitSubSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "setHint",
          "package": "sdl2",
          "signature": "CString -\u003e CString -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Basic.html#setHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "setHint",
          "normalized": "CString-\u003eCString-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Hint",
          "signature": "CString-\u003eCString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:setHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "setHintWithPriority",
          "package": "sdl2",
          "signature": "CString -\u003e CString -\u003e HintPriority -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Basic.html#setHintWithPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "setHintWithPriority",
          "normalized": "CString-\u003eCString-\u003eHintPriority-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Hint With Priority",
          "signature": "CString-\u003eCString-\u003eHintPriority-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:setHintWithPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "setMainReady",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Basic.html#setMainReady",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "setMainReady",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Main Ready",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:setMainReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Basic",
          "name": "wasInit",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Basic.html#wasInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Basic",
          "module": "Graphics.UI.SDL.Basic",
          "name": "wasInit",
          "normalized": "Word-\u003eIO Word",
          "package": "sdl2",
          "partial": "Init",
          "signature": "Word-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Basic.html#v:wasInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "Enum",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "Enum",
          "package": "sdl2",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "AudioStatus",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#AudioStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "AudioStatus",
          "package": "sdl2",
          "partial": "Audio Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:AudioStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "BlendMode",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#BlendMode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "BlendMode",
          "package": "sdl2",
          "partial": "Blend Mode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:BlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "EventAction",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#EventAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "EventAction",
          "package": "sdl2",
          "partial": "Event Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:EventAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "GLattr",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#GLattr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "GLattr",
          "package": "sdl2",
          "partial": "GLattr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:GLattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "GameControllerAxis",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#GameControllerAxis",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "GameControllerAxis",
          "package": "sdl2",
          "partial": "Game Controller Axis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:GameControllerAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "GameControllerButton",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#GameControllerButton",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "GameControllerButton",
          "package": "sdl2",
          "partial": "Game Controller Button",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:GameControllerButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "HintPriority",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#HintPriority",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "HintPriority",
          "package": "sdl2",
          "partial": "Hint Priority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:HintPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "Keymod",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#Keymod",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "Keymod",
          "package": "sdl2",
          "partial": "Keymod",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:Keymod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "LogPriority",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#LogPriority",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "LogPriority",
          "package": "sdl2",
          "partial": "Log Priority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:LogPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "PowerState",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#PowerState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "PowerState",
          "package": "sdl2",
          "partial": "Power State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:PowerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "RendererFlip",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#RendererFlip",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "RendererFlip",
          "package": "sdl2",
          "partial": "Renderer Flip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:RendererFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "Scancode",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#Scancode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "Scancode",
          "package": "sdl2",
          "partial": "Scancode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:Scancode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "SystemCursor",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Enum.html#SystemCursor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "SystemCursor",
          "package": "sdl2",
          "partial": "System Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#t:SystemCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusPaused",
          "package": "sdl2",
          "signature": "AudioStatus",
          "source": "src/Graphics-UI-SDL-Enum.html#audioStatusPaused",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusPaused",
          "package": "sdl2",
          "partial": "Status Paused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:audioStatusPaused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusPlaying",
          "package": "sdl2",
          "signature": "AudioStatus",
          "source": "src/Graphics-UI-SDL-Enum.html#audioStatusPlaying",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusPlaying",
          "package": "sdl2",
          "partial": "Status Playing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:audioStatusPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusStopped",
          "package": "sdl2",
          "signature": "AudioStatus",
          "source": "src/Graphics-UI-SDL-Enum.html#audioStatusStopped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "audioStatusStopped",
          "package": "sdl2",
          "partial": "Status Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:audioStatusStopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeAdd",
          "package": "sdl2",
          "signature": "BlendMode",
          "source": "src/Graphics-UI-SDL-Enum.html#blendModeAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeAdd",
          "package": "sdl2",
          "partial": "Mode Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:blendModeAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeBlend",
          "package": "sdl2",
          "signature": "BlendMode",
          "source": "src/Graphics-UI-SDL-Enum.html#blendModeBlend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeBlend",
          "package": "sdl2",
          "partial": "Mode Blend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:blendModeBlend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeMod",
          "package": "sdl2",
          "signature": "BlendMode",
          "source": "src/Graphics-UI-SDL-Enum.html#blendModeMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeMod",
          "package": "sdl2",
          "partial": "Mode Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:blendModeMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeNone",
          "package": "sdl2",
          "signature": "BlendMode",
          "source": "src/Graphics-UI-SDL-Enum.html#blendModeNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "blendModeNone",
          "package": "sdl2",
          "partial": "Mode None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:blendModeNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionAddEvent",
          "package": "sdl2",
          "signature": "EventAction",
          "source": "src/Graphics-UI-SDL-Enum.html#eventActionAddEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionAddEvent",
          "package": "sdl2",
          "partial": "Action Add Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventActionAddEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionGetEvent",
          "package": "sdl2",
          "signature": "EventAction",
          "source": "src/Graphics-UI-SDL-Enum.html#eventActionGetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionGetEvent",
          "package": "sdl2",
          "partial": "Action Get Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventActionGetEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionPeekEvent",
          "package": "sdl2",
          "signature": "EventAction",
          "source": "src/Graphics-UI-SDL-Enum.html#eventActionPeekEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventActionPeekEvent",
          "package": "sdl2",
          "partial": "Action Peek Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventActionPeekEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppDidEnterBackground",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppDidEnterBackground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppDidEnterBackground",
          "package": "sdl2",
          "partial": "Type App Did Enter Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppDidEnterBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppDidEnterForeground",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppDidEnterForeground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppDidEnterForeground",
          "package": "sdl2",
          "partial": "Type App Did Enter Foreground",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppDidEnterForeground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppLowMemory",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppLowMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppLowMemory",
          "package": "sdl2",
          "partial": "Type App Low Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppLowMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppTerminating",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppTerminating",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppTerminating",
          "package": "sdl2",
          "partial": "Type App Terminating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppTerminating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppWillEnterBackground",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppWillEnterBackground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppWillEnterBackground",
          "package": "sdl2",
          "partial": "Type App Will Enter Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppWillEnterBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppWillEnterForeground",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeAppWillEnterForeground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeAppWillEnterForeground",
          "package": "sdl2",
          "partial": "Type App Will Enter Foreground",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeAppWillEnterForeground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeClipboardUpdate",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeClipboardUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeClipboardUpdate",
          "package": "sdl2",
          "partial": "Type Clipboard Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeClipboardUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerAxisMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerAxisMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerAxisMotion",
          "package": "sdl2",
          "partial": "Type Controller Axis Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerAxisMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerButtonDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerButtonDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerButtonDown",
          "package": "sdl2",
          "partial": "Type Controller Button Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerButtonDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerButtonUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerButtonUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerButtonUp",
          "package": "sdl2",
          "partial": "Type Controller Button Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerButtonUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceAdded",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerDeviceAdded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceAdded",
          "package": "sdl2",
          "partial": "Type Controller Device Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerDeviceAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceRemapped",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerDeviceRemapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceRemapped",
          "package": "sdl2",
          "partial": "Type Controller Device Remapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerDeviceRemapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceRemoved",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeControllerDeviceRemoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeControllerDeviceRemoved",
          "package": "sdl2",
          "partial": "Type Controller Device Removed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeControllerDeviceRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDollarGesture",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeDollarGesture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDollarGesture",
          "package": "sdl2",
          "partial": "Type Dollar Gesture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeDollarGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDollarRecord",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeDollarRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDollarRecord",
          "package": "sdl2",
          "partial": "Type Dollar Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeDollarRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDropFile",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeDropFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeDropFile",
          "package": "sdl2",
          "partial": "Type Drop File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeDropFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeFingerDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerDown",
          "package": "sdl2",
          "partial": "Type Finger Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeFingerDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeFingerMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerMotion",
          "package": "sdl2",
          "partial": "Type Finger Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeFingerMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeFingerUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFingerUp",
          "package": "sdl2",
          "partial": "Type Finger Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeFingerUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFirstEvent",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeFirstEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeFirstEvent",
          "package": "sdl2",
          "partial": "Type First Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeFirstEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyAxisMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyAxisMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyAxisMotion",
          "package": "sdl2",
          "partial": "Type Joy Axis Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyAxisMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyBallMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyBallMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyBallMotion",
          "package": "sdl2",
          "partial": "Type Joy Ball Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyBallMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyButtonDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyButtonDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyButtonDown",
          "package": "sdl2",
          "partial": "Type Joy Button Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyButtonDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyButtonUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyButtonUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyButtonUp",
          "package": "sdl2",
          "partial": "Type Joy Button Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyButtonUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyDeviceAdded",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyDeviceAdded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyDeviceAdded",
          "package": "sdl2",
          "partial": "Type Joy Device Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyDeviceAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyDeviceRemoved",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyDeviceRemoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyDeviceRemoved",
          "package": "sdl2",
          "partial": "Type Joy Device Removed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyDeviceRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyHatMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeJoyHatMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeJoyHatMotion",
          "package": "sdl2",
          "partial": "Type Joy Hat Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeJoyHatMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeKeyDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeKeyDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeKeyDown",
          "package": "sdl2",
          "partial": "Type Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeKeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeKeyUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeKeyUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeKeyUp",
          "package": "sdl2",
          "partial": "Type Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeKeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeLastEvent",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeLastEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeLastEvent",
          "package": "sdl2",
          "partial": "Type Last Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeLastEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseButtonDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeMouseButtonDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseButtonDown",
          "package": "sdl2",
          "partial": "Type Mouse Button Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeMouseButtonDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseButtonUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeMouseButtonUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseButtonUp",
          "package": "sdl2",
          "partial": "Type Mouse Button Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeMouseButtonUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseMotion",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeMouseMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseMotion",
          "package": "sdl2",
          "partial": "Type Mouse Motion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeMouseMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseWheel",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeMouseWheel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMouseWheel",
          "package": "sdl2",
          "partial": "Type Mouse Wheel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeMouseWheel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMultiGesture",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeMultiGesture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeMultiGesture",
          "package": "sdl2",
          "partial": "Type Multi Gesture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeMultiGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeQuit",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeQuit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeQuit",
          "package": "sdl2",
          "partial": "Type Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeSysWMEvent",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeSysWMEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeSysWMEvent",
          "package": "sdl2",
          "partial": "Type Sys WMEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeSysWMEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeTextEditing",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeTextEditing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeTextEditing",
          "package": "sdl2",
          "partial": "Type Text Editing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeTextEditing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeTextInput",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeTextInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeTextInput",
          "package": "sdl2",
          "partial": "Type Text Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeTextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeUserEvent",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeUserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeUserEvent",
          "package": "sdl2",
          "partial": "Type User Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeUserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeWindowEvent",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#eventTypeWindowEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "eventTypeWindowEvent",
          "package": "sdl2",
          "partial": "Type Window Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:eventTypeWindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisInvalid",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisInvalid",
          "package": "sdl2",
          "partial": "Controller Axis Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisLeftX",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisLeftX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisLeftX",
          "package": "sdl2",
          "partial": "Controller Axis Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisLeftX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisLeftY",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisLeftY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisLeftY",
          "package": "sdl2",
          "partial": "Controller Axis Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisLeftY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisMax",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisMax",
          "package": "sdl2",
          "partial": "Controller Axis Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisRightX",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisRightX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisRightX",
          "package": "sdl2",
          "partial": "Controller Axis Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisRightX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisRightY",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisRightY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisRightY",
          "package": "sdl2",
          "partial": "Controller Axis Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisRightY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisTriggerLeft",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisTriggerLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisTriggerLeft",
          "package": "sdl2",
          "partial": "Controller Axis Trigger Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisTriggerLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisTriggerRight",
          "package": "sdl2",
          "signature": "GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerAxisTriggerRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerAxisTriggerRight",
          "package": "sdl2",
          "partial": "Controller Axis Trigger Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerAxisTriggerRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonA",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonA",
          "package": "sdl2",
          "partial": "Controller Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonB",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonB",
          "package": "sdl2",
          "partial": "Controller Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonBack",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonBack",
          "package": "sdl2",
          "partial": "Controller Button Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadDown",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonDPadDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadDown",
          "package": "sdl2",
          "partial": "Controller Button DPad Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonDPadDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadLeft",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonDPadLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadLeft",
          "package": "sdl2",
          "partial": "Controller Button DPad Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonDPadLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadRight",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonDPadRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadRight",
          "package": "sdl2",
          "partial": "Controller Button DPad Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonDPadRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadUp",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonDPadUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonDPadUp",
          "package": "sdl2",
          "partial": "Controller Button DPad Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonDPadUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonGuide",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonGuide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonGuide",
          "package": "sdl2",
          "partial": "Controller Button Guide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonGuide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonInvalid",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonInvalid",
          "package": "sdl2",
          "partial": "Controller Button Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonLeftShoulder",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonLeftShoulder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonLeftShoulder",
          "package": "sdl2",
          "partial": "Controller Button Left Shoulder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonLeftShoulder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonLeftStick",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonLeftStick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonLeftStick",
          "package": "sdl2",
          "partial": "Controller Button Left Stick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonLeftStick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonMax",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonMax",
          "package": "sdl2",
          "partial": "Controller Button Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonRightShoulder",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonRightShoulder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonRightShoulder",
          "package": "sdl2",
          "partial": "Controller Button Right Shoulder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonRightShoulder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonRightStick",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonRightStick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonRightStick",
          "package": "sdl2",
          "partial": "Controller Button Right Stick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonRightStick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonStart",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonStart",
          "package": "sdl2",
          "partial": "Controller Button Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonX",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonX",
          "package": "sdl2",
          "partial": "Controller Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonY",
          "package": "sdl2",
          "signature": "GameControllerButton",
          "source": "src/Graphics-UI-SDL-Enum.html#gameControllerButtonY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "gameControllerButtonY",
          "package": "sdl2",
          "partial": "Controller Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:gameControllerButtonY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAcceleratedVisual",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAcceleratedVisual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAcceleratedVisual",
          "package": "sdl2",
          "partial": "Attr Accelerated Visual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAcceleratedVisual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumAlphaSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAccumAlphaSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumAlphaSize",
          "package": "sdl2",
          "partial": "Attr Accum Alpha Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAccumAlphaSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumBlueSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAccumBlueSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumBlueSize",
          "package": "sdl2",
          "partial": "Attr Accum Blue Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAccumBlueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumGreenSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAccumGreenSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumGreenSize",
          "package": "sdl2",
          "partial": "Attr Accum Green Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAccumGreenSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumRedSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAccumRedSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAccumRedSize",
          "package": "sdl2",
          "partial": "Attr Accum Red Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAccumRedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAlphaSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrAlphaSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrAlphaSize",
          "package": "sdl2",
          "partial": "Attr Alpha Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrAlphaSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrBlueSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrBlueSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrBlueSize",
          "package": "sdl2",
          "partial": "Attr Blue Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrBlueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrBufferSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrBufferSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrBufferSize",
          "package": "sdl2",
          "partial": "Attr Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextEGL",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrContextEGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextEGL",
          "package": "sdl2",
          "partial": "Attr Context EGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrContextEGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextFlags",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrContextFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextFlags",
          "package": "sdl2",
          "partial": "Attr Context Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrContextFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextMajorVersion",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrContextMajorVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextMajorVersion",
          "package": "sdl2",
          "partial": "Attr Context Major Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrContextMajorVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextMinorVersion",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrContextMinorVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextMinorVersion",
          "package": "sdl2",
          "partial": "Attr Context Minor Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrContextMinorVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextProfileMask",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrContextProfileMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrContextProfileMask",
          "package": "sdl2",
          "partial": "Attr Context Profile Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrContextProfileMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrDepthSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrDepthSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrDepthSize",
          "package": "sdl2",
          "partial": "Attr Depth Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrDepthSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrDoubleBuffer",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrDoubleBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrDoubleBuffer",
          "package": "sdl2",
          "partial": "Attr Double Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrDoubleBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrFramebufferSRGBCapable",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrFramebufferSRGBCapable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrFramebufferSRGBCapable",
          "package": "sdl2",
          "partial": "Attr Framebuffer SRGBCapable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrFramebufferSRGBCapable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrGreenSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrGreenSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrGreenSize",
          "package": "sdl2",
          "partial": "Attr Green Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrGreenSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrMultiSampleBuffers",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrMultiSampleBuffers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrMultiSampleBuffers",
          "package": "sdl2",
          "partial": "Attr Multi Sample Buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrMultiSampleBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrMultiSampleSamples",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrMultiSampleSamples",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrMultiSampleSamples",
          "package": "sdl2",
          "partial": "Attr Multi Sample Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrMultiSampleSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrRedSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrRedSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrRedSize",
          "package": "sdl2",
          "partial": "Attr Red Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrRedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrRetainedBacking",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrRetainedBacking",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrRetainedBacking",
          "package": "sdl2",
          "partial": "Attr Retained Backing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrRetainedBacking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrShareWithCurrentContext",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrShareWithCurrentContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrShareWithCurrentContext",
          "package": "sdl2",
          "partial": "Attr Share With Current Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrShareWithCurrentContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrStencilSize",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrStencilSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrStencilSize",
          "package": "sdl2",
          "partial": "Attr Stencil Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrStencilSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrStereo",
          "package": "sdl2",
          "signature": "GLattr",
          "source": "src/Graphics-UI-SDL-Enum.html#glAttrStereo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glAttrStereo",
          "package": "sdl2",
          "partial": "Attr Stereo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glAttrStereo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagDebug",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glContextFlagDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagDebug",
          "package": "sdl2",
          "partial": "Context Flag Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glContextFlagDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagForwardCompatible",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glContextFlagForwardCompatible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagForwardCompatible",
          "package": "sdl2",
          "partial": "Context Flag Forward Compatible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glContextFlagForwardCompatible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagResetIsolation",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glContextFlagResetIsolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagResetIsolation",
          "package": "sdl2",
          "partial": "Context Flag Reset Isolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glContextFlagResetIsolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagRobustAccess",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glContextFlagRobustAccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glContextFlagRobustAccess",
          "package": "sdl2",
          "partial": "Context Flag Robust Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glContextFlagRobustAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileCompatibility",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glProfileCompatibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileCompatibility",
          "package": "sdl2",
          "partial": "Profile Compatibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glProfileCompatibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileCore",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glProfileCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileCore",
          "package": "sdl2",
          "partial": "Profile Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glProfileCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileES",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#glProfileES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "glProfileES",
          "package": "sdl2",
          "partial": "Profile ES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:glProfileES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityDefault",
          "package": "sdl2",
          "signature": "HintPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#hintPriorityDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityDefault",
          "package": "sdl2",
          "partial": "Priority Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:hintPriorityDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityNormal",
          "package": "sdl2",
          "signature": "HintPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#hintPriorityNormal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityNormal",
          "package": "sdl2",
          "partial": "Priority Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:hintPriorityNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityOverride",
          "package": "sdl2",
          "signature": "HintPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#hintPriorityOverride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "hintPriorityOverride",
          "package": "sdl2",
          "partial": "Priority Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:hintPriorityOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagAudio",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagAudio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagAudio",
          "package": "sdl2",
          "partial": "Flag Audio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagEvents",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagEvents",
          "package": "sdl2",
          "partial": "Flag Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagEverything",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagEverything",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagEverything",
          "package": "sdl2",
          "partial": "Flag Everything",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagEverything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagGameController",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagGameController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagGameController",
          "package": "sdl2",
          "partial": "Flag Game Controller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagGameController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagHaptic",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagHaptic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagHaptic",
          "package": "sdl2",
          "partial": "Flag Haptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagHaptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagJoystick",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagJoystick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagJoystick",
          "package": "sdl2",
          "partial": "Flag Joystick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagJoystick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagNoParachute",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagNoParachute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagNoParachute",
          "package": "sdl2",
          "partial": "Flag No Parachute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagNoParachute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagTimer",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagTimer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagTimer",
          "package": "sdl2",
          "partial": "Flag Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagVideo",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#initFlagVideo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "initFlagVideo",
          "package": "sdl2",
          "partial": "Flag Video",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:initFlagVideo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatCentered",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatCentered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatCentered",
          "package": "sdl2",
          "partial": "Hat Centered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatCentered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatDown",
          "package": "sdl2",
          "partial": "Hat Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeft",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeft",
          "package": "sdl2",
          "partial": "Hat Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeftDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatLeftDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeftDown",
          "package": "sdl2",
          "partial": "Hat Left Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatLeftDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeftUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatLeftUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatLeftUp",
          "package": "sdl2",
          "partial": "Hat Left Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatLeftUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRight",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRight",
          "package": "sdl2",
          "partial": "Hat Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRightDown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatRightDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRightDown",
          "package": "sdl2",
          "partial": "Hat Right Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatRightDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRightUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatRightUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatRightUp",
          "package": "sdl2",
          "partial": "Hat Right Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatRightUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatUp",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#joystickHatUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "joystickHatUp",
          "package": "sdl2",
          "partial": "Hat Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:joystickHatUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodCaps",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodCaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodCaps",
          "package": "sdl2",
          "partial": "Caps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLAlt",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodLAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLAlt",
          "package": "sdl2",
          "partial": "LAlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodLAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLCtrl",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodLCtrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLCtrl",
          "package": "sdl2",
          "partial": "LCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodLCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLGUI",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodLGUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLGUI",
          "package": "sdl2",
          "partial": "LGUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodLGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLShift",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodLShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodLShift",
          "package": "sdl2",
          "partial": "LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodMode",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodMode",
          "package": "sdl2",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodNone",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodNone",
          "package": "sdl2",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodNum",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodNum",
          "package": "sdl2",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRAlt",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodRAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRAlt",
          "package": "sdl2",
          "partial": "RAlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodRAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRCtrl",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodRCtrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRCtrl",
          "package": "sdl2",
          "partial": "RCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodRCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRGUI",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodRGUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRGUI",
          "package": "sdl2",
          "partial": "RGUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodRGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRShift",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodRShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodRShift",
          "package": "sdl2",
          "partial": "RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodReserved",
          "package": "sdl2",
          "signature": "Keymod",
          "source": "src/Graphics-UI-SDL-Enum.html#keymodReserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "keymodReserved",
          "package": "sdl2",
          "partial": "Reserved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:keymodReserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityCritical",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityCritical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityCritical",
          "package": "sdl2",
          "partial": "Priority Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityDebug",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityDebug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityDebug",
          "package": "sdl2",
          "partial": "Priority Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityError",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityError",
          "package": "sdl2",
          "partial": "Priority Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityInfo",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityInfo",
          "package": "sdl2",
          "partial": "Priority Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityPriorities",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityPriorities",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityPriorities",
          "package": "sdl2",
          "partial": "Priority Priorities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityPriorities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityVerbose",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityVerbose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityVerbose",
          "package": "sdl2",
          "partial": "Priority Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityWarn",
          "package": "sdl2",
          "signature": "LogPriority",
          "source": "src/Graphics-UI-SDL-Enum.html#logPriorityWarn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "logPriorityWarn",
          "package": "sdl2",
          "partial": "Priority Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:logPriorityWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxButtonFlagEscapeKeyDefault",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#messageBoxButtonFlagEscapeKeyDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxButtonFlagEscapeKeyDefault",
          "package": "sdl2",
          "partial": "Box Button Flag Escape Key Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:messageBoxButtonFlagEscapeKeyDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxButtonFlagReturnKeyDefault",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#messageBoxButtonFlagReturnKeyDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxButtonFlagReturnKeyDefault",
          "package": "sdl2",
          "partial": "Box Button Flag Return Key Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:messageBoxButtonFlagReturnKeyDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagError",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#messageBoxFlagError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagError",
          "package": "sdl2",
          "partial": "Box Flag Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:messageBoxFlagError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagInformation",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#messageBoxFlagInformation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagInformation",
          "package": "sdl2",
          "partial": "Box Flag Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:messageBoxFlagInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagWarning",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#messageBoxFlagWarning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "messageBoxFlagWarning",
          "package": "sdl2",
          "partial": "Box Flag Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:messageBoxFlagWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateCharged",
          "package": "sdl2",
          "signature": "PowerState",
          "source": "src/Graphics-UI-SDL-Enum.html#powerStateCharged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateCharged",
          "package": "sdl2",
          "partial": "State Charged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:powerStateCharged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateCharging",
          "package": "sdl2",
          "signature": "PowerState",
          "source": "src/Graphics-UI-SDL-Enum.html#powerStateCharging",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateCharging",
          "package": "sdl2",
          "partial": "State Charging",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:powerStateCharging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateNoBattery",
          "package": "sdl2",
          "signature": "PowerState",
          "source": "src/Graphics-UI-SDL-Enum.html#powerStateNoBattery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateNoBattery",
          "package": "sdl2",
          "partial": "State No Battery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:powerStateNoBattery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateOnBattery",
          "package": "sdl2",
          "signature": "PowerState",
          "source": "src/Graphics-UI-SDL-Enum.html#powerStateOnBattery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateOnBattery",
          "package": "sdl2",
          "partial": "State On Battery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:powerStateOnBattery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateUnknown",
          "package": "sdl2",
          "signature": "PowerState",
          "source": "src/Graphics-UI-SDL-Enum.html#powerStateUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "powerStateUnknown",
          "package": "sdl2",
          "partial": "State Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:powerStateUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagAccelerated",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlagAccelerated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagAccelerated",
          "package": "sdl2",
          "partial": "Flag Accelerated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlagAccelerated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagPresentVSync",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlagPresentVSync",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagPresentVSync",
          "package": "sdl2",
          "partial": "Flag Present VSync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlagPresentVSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagSoftware",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlagSoftware",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagSoftware",
          "package": "sdl2",
          "partial": "Flag Software",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlagSoftware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagTargetTexture",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlagTargetTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlagTargetTexture",
          "package": "sdl2",
          "partial": "Flag Target Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlagTargetTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipHorizontal",
          "package": "sdl2",
          "signature": "RendererFlip",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlipHorizontal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipHorizontal",
          "package": "sdl2",
          "partial": "Flip Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlipHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipNone",
          "package": "sdl2",
          "signature": "RendererFlip",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlipNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipNone",
          "package": "sdl2",
          "partial": "Flip None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlipNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipVertical",
          "package": "sdl2",
          "signature": "RendererFlip",
          "source": "src/Graphics-UI-SDL-Enum.html#rendererFlipVertical",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "rendererFlipVertical",
          "package": "sdl2",
          "partial": "Flip Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:rendererFlipVertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode0",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode0",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode1",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode2",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode3",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode3",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode4",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode4",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode5",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode5",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode6",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode6",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode7",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode7",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode8",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode8",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode9",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancode9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancode9",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancode9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeA",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeA",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACBack",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACBack",
          "package": "sdl2",
          "partial": "ACBack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACBookmarks",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACBookmarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACBookmarks",
          "package": "sdl2",
          "partial": "ACBookmarks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACBookmarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACForward",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACForward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACForward",
          "package": "sdl2",
          "partial": "ACForward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACHome",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACHome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACHome",
          "package": "sdl2",
          "partial": "ACHome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACRefresh",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACRefresh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACRefresh",
          "package": "sdl2",
          "partial": "ACRefresh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACRefresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACSearch",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACSearch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACSearch",
          "package": "sdl2",
          "partial": "ACSearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACStop",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeACStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeACStop",
          "package": "sdl2",
          "partial": "ACStop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeACStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAgain",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAgain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAgain",
          "package": "sdl2",
          "partial": "Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAltErase",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAltErase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAltErase",
          "package": "sdl2",
          "partial": "Alt Erase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAltErase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApostrophe",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeApostrophe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApostrophe",
          "package": "sdl2",
          "partial": "Apostrophe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeApostrophe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApp1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeApp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApp1",
          "package": "sdl2",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeApp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApp2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeApp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApp2",
          "package": "sdl2",
          "partial": "App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeApp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApplication",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeApplication",
          "package": "sdl2",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioMute",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAudioMute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioMute",
          "package": "sdl2",
          "partial": "Audio Mute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAudioMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioNext",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAudioNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioNext",
          "package": "sdl2",
          "partial": "Audio Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAudioNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioPlay",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAudioPlay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioPlay",
          "package": "sdl2",
          "partial": "Audio Play",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAudioPlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioPrev",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAudioPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioPrev",
          "package": "sdl2",
          "partial": "Audio Prev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAudioPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioStop",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeAudioStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeAudioStop",
          "package": "sdl2",
          "partial": "Audio Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeAudioStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeB",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeB",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBackslash",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeBackslash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBackslash",
          "package": "sdl2",
          "partial": "Backslash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeBackslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBackspace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeBackspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBackspace",
          "package": "sdl2",
          "partial": "Backspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeBackspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBrightnessDown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeBrightnessDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBrightnessDown",
          "package": "sdl2",
          "partial": "Brightness Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeBrightnessDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBrightnessUp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeBrightnessUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeBrightnessUp",
          "package": "sdl2",
          "partial": "Brightness Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeBrightnessUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeC",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeC",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCalculator",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCalculator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCalculator",
          "package": "sdl2",
          "partial": "Calculator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCalculator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCancel",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCancel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCancel",
          "package": "sdl2",
          "partial": "Cancel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCapsLock",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCapsLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCapsLock",
          "package": "sdl2",
          "partial": "Caps Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCapsLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeClear",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeClear",
          "package": "sdl2",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeClearAgain",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeClearAgain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeClearAgain",
          "package": "sdl2",
          "partial": "Clear Again",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeClearAgain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeComma",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeComma",
          "package": "sdl2",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeComputer",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeComputer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeComputer",
          "package": "sdl2",
          "partial": "Computer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeComputer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCopy",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCopy",
          "package": "sdl2",
          "partial": "Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCrSel",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCrSel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCrSel",
          "package": "sdl2",
          "partial": "Cr Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCrSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCurrencySubunit",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCurrencySubunit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCurrencySubunit",
          "package": "sdl2",
          "partial": "Currency Subunit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCurrencySubunit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCurrencyUnit",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCurrencyUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCurrencyUnit",
          "package": "sdl2",
          "partial": "Currency Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCurrencyUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCut",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeCut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeCut",
          "package": "sdl2",
          "partial": "Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeD",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeD",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDecimalSeparator",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeDecimalSeparator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDecimalSeparator",
          "package": "sdl2",
          "partial": "Decimal Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeDecimalSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDelete",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDelete",
          "package": "sdl2",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDisplaySwitch",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeDisplaySwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDisplaySwitch",
          "package": "sdl2",
          "partial": "Display Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeDisplaySwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeDown",
          "package": "sdl2",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeE",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeE",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEject",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeEject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEject",
          "package": "sdl2",
          "partial": "Eject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeEject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEnd",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEnd",
          "package": "sdl2",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEquals",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeEquals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEquals",
          "package": "sdl2",
          "partial": "Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEqualsAs400",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeEqualsAs400",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEqualsAs400",
          "package": "sdl2",
          "partial": "Equals As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeEqualsAs400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEscape",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeEscape",
          "package": "sdl2",
          "partial": "Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeExSel",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeExSel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeExSel",
          "package": "sdl2",
          "partial": "Ex Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeExSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeExecute",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeExecute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeExecute",
          "package": "sdl2",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF1",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF10",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF10",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF11",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF11",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF12",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF12",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF13",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF13",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF14",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF14",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF15",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF15",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF16",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF16",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF17",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF17",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF17",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF18",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF18",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF18",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF19",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF19",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF19",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF2",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF20",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF20",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF20",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF21",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF21",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF22",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF22",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF22",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF23",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF23",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF24",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF24",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF3",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF3",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF4",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF4",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF5",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF5",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF6",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF6",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF7",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF7",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF8",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF8",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF9",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeF9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeF9",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeF9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeFind",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeFind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeFind",
          "package": "sdl2",
          "partial": "Find",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeG",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeG",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeGrave",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeGrave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeGrave",
          "package": "sdl2",
          "partial": "Grave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeGrave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeH",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeH",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeHelp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeHelp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeHelp",
          "package": "sdl2",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeHome",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeHome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeHome",
          "package": "sdl2",
          "partial": "Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeI",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeI",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInsert",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInsert",
          "package": "sdl2",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational1",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational2",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational3",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational3",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational4",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational4",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational5",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational5",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational6",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational6",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational7",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational7",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational8",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational8",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational9",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeInternational9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeInternational9",
          "package": "sdl2",
          "partial": "International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeInternational9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeJ",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeJ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeJ",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeK",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeK",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumDown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKBDIllumDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumDown",
          "package": "sdl2",
          "partial": "KBDIllum Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKBDIllumDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumToggle",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKBDIllumToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumToggle",
          "package": "sdl2",
          "partial": "KBDIllum Toggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKBDIllumToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumUp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKBDIllumUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKBDIllumUp",
          "package": "sdl2",
          "partial": "KBDIllum Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKBDIllumUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP0",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP0",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP00",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP00",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP00",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP00"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP000",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP000",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP000",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP000"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP1",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP2",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP3",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP3",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP4",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP4",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP5",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP5",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP6",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP6",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP7",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP7",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP8",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP8",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP9",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKP9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKP9",
          "package": "sdl2",
          "partial": "KP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKP9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPA",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPA",
          "package": "sdl2",
          "partial": "KPA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPAmpersand",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPAmpersand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPAmpersand",
          "package": "sdl2",
          "partial": "KPAmpersand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPAmpersand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPAt",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPAt",
          "package": "sdl2",
          "partial": "KPAt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPB",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPB",
          "package": "sdl2",
          "partial": "KPB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPBackspace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPBackspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPBackspace",
          "package": "sdl2",
          "partial": "KPBackspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPBackspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPBinary",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPBinary",
          "package": "sdl2",
          "partial": "KPBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPC",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPC",
          "package": "sdl2",
          "partial": "KPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPClear",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPClear",
          "package": "sdl2",
          "partial": "KPClear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPClearEntry",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPClearEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPClearEntry",
          "package": "sdl2",
          "partial": "KPClear Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPClearEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPColon",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPColon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPColon",
          "package": "sdl2",
          "partial": "KPColon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPColon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPComma",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPComma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPComma",
          "package": "sdl2",
          "partial": "KPComma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPD",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPD",
          "package": "sdl2",
          "partial": "KPD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDBLAmpersand",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPDBLAmpersand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDBLAmpersand",
          "package": "sdl2",
          "partial": "KPDBLAmpersand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPDBLAmpersand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDBLVerticalBar",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPDBLVerticalBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDBLVerticalBar",
          "package": "sdl2",
          "partial": "KPDBLVertical Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPDBLVerticalBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDecimal",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPDecimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDecimal",
          "package": "sdl2",
          "partial": "KPDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDivide",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPDivide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPDivide",
          "package": "sdl2",
          "partial": "KPDivide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPDivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPE",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPE",
          "package": "sdl2",
          "partial": "KPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPEnter",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPEnter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPEnter",
          "package": "sdl2",
          "partial": "KPEnter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPEquals",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPEquals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPEquals",
          "package": "sdl2",
          "partial": "KPEquals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPExclam",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPExclam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPExclam",
          "package": "sdl2",
          "partial": "KPExclam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPExclam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPF",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPF",
          "package": "sdl2",
          "partial": "KPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPGreater",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPGreater",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPGreater",
          "package": "sdl2",
          "partial": "KPGreater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPHash",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPHash",
          "package": "sdl2",
          "partial": "KPHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPHexadecimal",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPHexadecimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPHexadecimal",
          "package": "sdl2",
          "partial": "KPHexadecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPHexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPLess",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPLess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPLess",
          "package": "sdl2",
          "partial": "KPLess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemAdd",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemAdd",
          "package": "sdl2",
          "partial": "KPMem Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemClear",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemClear",
          "package": "sdl2",
          "partial": "KPMem Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemDivide",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemDivide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemDivide",
          "package": "sdl2",
          "partial": "KPMem Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemDivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemMultiply",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemMultiply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemMultiply",
          "package": "sdl2",
          "partial": "KPMem Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemRecall",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemRecall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemRecall",
          "package": "sdl2",
          "partial": "KPMem Recall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemRecall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemStore",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemStore",
          "package": "sdl2",
          "partial": "KPMem Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemSubtract",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMemSubtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMemSubtract",
          "package": "sdl2",
          "partial": "KPMem Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMemSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMinus",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMinus",
          "package": "sdl2",
          "partial": "KPMinus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMultiply",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPMultiply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPMultiply",
          "package": "sdl2",
          "partial": "KPMultiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPOctal",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPOctal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPOctal",
          "package": "sdl2",
          "partial": "KPOctal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPOctal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPercent",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPPercent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPercent",
          "package": "sdl2",
          "partial": "KPPercent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPeriod",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPPeriod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPeriod",
          "package": "sdl2",
          "partial": "KPPeriod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPlus",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPlus",
          "package": "sdl2",
          "partial": "KPPlus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPlusMinus",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPPlusMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPlusMinus",
          "package": "sdl2",
          "partial": "KPPlus Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPPlusMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPower",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPPower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPPower",
          "package": "sdl2",
          "partial": "KPPower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPPower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPSpace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPSpace",
          "package": "sdl2",
          "partial": "KPSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPTab",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPTab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPTab",
          "package": "sdl2",
          "partial": "KPTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPVerticalBar",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPVerticalBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPVerticalBar",
          "package": "sdl2",
          "partial": "KPVertical Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPVerticalBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPXOR",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeKPXOR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeKPXOR",
          "package": "sdl2",
          "partial": "KPXOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeKPXOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeL",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeL",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLAlt",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLAlt",
          "package": "sdl2",
          "partial": "LAlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLCtrl",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLCtrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLCtrl",
          "package": "sdl2",
          "partial": "LCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLGUI",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLGUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLGUI",
          "package": "sdl2",
          "partial": "LGUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLShift",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLShift",
          "package": "sdl2",
          "partial": "LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang1",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang1",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang2",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang3",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang3",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang4",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang4",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang5",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang5",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang6",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang6",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang7",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang7",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang8",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang8",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang9",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLang9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLang9",
          "package": "sdl2",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLang9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeft",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeft",
          "package": "sdl2",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftBrace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLeftBrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftBrace",
          "package": "sdl2",
          "partial": "Left Brace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLeftBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftBracket",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLeftBracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftBracket",
          "package": "sdl2",
          "partial": "Left Bracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLeftBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftParen",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeLeftParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeLeftParen",
          "package": "sdl2",
          "partial": "Left Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeLeftParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeM",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeM",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMail",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMail",
          "package": "sdl2",
          "partial": "Mail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMediaSelect",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMediaSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMediaSelect",
          "package": "sdl2",
          "partial": "Media Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMediaSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMenu",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMenu",
          "package": "sdl2",
          "partial": "Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMinus",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMinus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMinus",
          "package": "sdl2",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMode",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMode",
          "package": "sdl2",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMute",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeMute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeMute",
          "package": "sdl2",
          "partial": "Mute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeN",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeN",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNonUSBackslash",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeNonUSBackslash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNonUSBackslash",
          "package": "sdl2",
          "partial": "Non USBackslash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeNonUSBackslash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNonUSHash",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeNonUSHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNonUSHash",
          "package": "sdl2",
          "partial": "Non USHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeNonUSHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNum",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNum",
          "package": "sdl2",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNumLockClear",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeNumLockClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeNumLockClear",
          "package": "sdl2",
          "partial": "Num Lock Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeNumLockClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeO",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeO",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeOper",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeOper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeOper",
          "package": "sdl2",
          "partial": "Oper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeOper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeOut",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeOut",
          "package": "sdl2",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeP",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeP",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePageDown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePageDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePageDown",
          "package": "sdl2",
          "partial": "Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePageUp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePageUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePageUp",
          "package": "sdl2",
          "partial": "Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePaste",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePaste",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePaste",
          "package": "sdl2",
          "partial": "Paste",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePause",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePause",
          "package": "sdl2",
          "partial": "Pause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePeriod",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePeriod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePeriod",
          "package": "sdl2",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePower",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePower",
          "package": "sdl2",
          "partial": "Power",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePrintScreen",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePrintScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePrintScreen",
          "package": "sdl2",
          "partial": "Print Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePrintScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePrior",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodePrior",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodePrior",
          "package": "sdl2",
          "partial": "Prior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodePrior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeQ",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeQ",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeR",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeR",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRAlt",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRAlt",
          "package": "sdl2",
          "partial": "RAlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRCtrl",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRCtrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRCtrl",
          "package": "sdl2",
          "partial": "RCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRGUI",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRGUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRGUI",
          "package": "sdl2",
          "partial": "RGUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRShift",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRShift",
          "package": "sdl2",
          "partial": "RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeReturn",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeReturn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeReturn",
          "package": "sdl2",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeReturn2",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeReturn2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeReturn2",
          "package": "sdl2",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeReturn2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRight",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRight",
          "package": "sdl2",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightBrace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRightBrace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightBrace",
          "package": "sdl2",
          "partial": "Right Brace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRightBrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightBracket",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRightBracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightBracket",
          "package": "sdl2",
          "partial": "Right Bracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRightBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightParen",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeRightParen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeRightParen",
          "package": "sdl2",
          "partial": "Right Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeRightParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeS",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeS",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeScrollLock",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeScrollLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeScrollLock",
          "package": "sdl2",
          "partial": "Scroll Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeScrollLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSelect",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSelect",
          "package": "sdl2",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSemicolon",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSemicolon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSemicolon",
          "package": "sdl2",
          "partial": "Semicolon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSemicolon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSeparator",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSeparator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSeparator",
          "package": "sdl2",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSlash",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSlash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSlash",
          "package": "sdl2",
          "partial": "Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSleep",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSleep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSleep",
          "package": "sdl2",
          "partial": "Sleep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSpace",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSpace",
          "package": "sdl2",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeStop",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeStop",
          "package": "sdl2",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSysReq",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeSysReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeSysReq",
          "package": "sdl2",
          "partial": "Sys Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeSysReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeT",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeT",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeTab",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeTab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeTab",
          "package": "sdl2",
          "partial": "Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeThousandsSeparator",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeThousandsSeparator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeThousandsSeparator",
          "package": "sdl2",
          "partial": "Thousands Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeThousandsSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeU",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeU",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUndo",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUndo",
          "package": "sdl2",
          "partial": "Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUnknown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUnknown",
          "package": "sdl2",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeUp",
          "package": "sdl2",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeV",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeV",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeVolumeDown",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeVolumeDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeVolumeDown",
          "package": "sdl2",
          "partial": "Volume Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeVolumeDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeVolumeUp",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeVolumeUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeVolumeUp",
          "package": "sdl2",
          "partial": "Volume Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeVolumeUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeW",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeW",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeWWW",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeWWW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeWWW",
          "package": "sdl2",
          "partial": "WWW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeWWW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeX",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeX",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeY",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeY",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeZ",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Enum.html#scancodeZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "scancodeZ",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:scancodeZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorArrow",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorArrow",
          "package": "sdl2",
          "partial": "Cursor Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorCrosshair",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorCrosshair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorCrosshair",
          "package": "sdl2",
          "partial": "Cursor Crosshair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorCrosshair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorHand",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorHand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorHand",
          "package": "sdl2",
          "partial": "Cursor Hand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorHand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorIBeam",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorIBeam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorIBeam",
          "package": "sdl2",
          "partial": "Cursor IBeam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorIBeam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorNo",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorNo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorNo",
          "package": "sdl2",
          "partial": "Cursor No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorNum",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorNum",
          "package": "sdl2",
          "partial": "Cursor Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeAll",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorSizeAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeAll",
          "package": "sdl2",
          "partial": "Cursor Size All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorSizeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNESW",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorSizeNESW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNESW",
          "package": "sdl2",
          "partial": "Cursor Size NESW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorSizeNESW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNS",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorSizeNS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNS",
          "package": "sdl2",
          "partial": "Cursor Size NS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorSizeNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNWSE",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorSizeNWSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeNWSE",
          "package": "sdl2",
          "partial": "Cursor Size NWSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorSizeNWSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeWE",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorSizeWE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorSizeWE",
          "package": "sdl2",
          "partial": "Cursor Size WE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorSizeWE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorWait",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorWait",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorWait",
          "package": "sdl2",
          "partial": "Cursor Wait",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorWaitArrow",
          "package": "sdl2",
          "signature": "SystemCursor",
          "source": "src/Graphics-UI-SDL-Enum.html#systemCursorWaitArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "systemCursorWaitArrow",
          "package": "sdl2",
          "partial": "Cursor Wait Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:systemCursorWaitArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessStatic",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureAccessStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessStatic",
          "package": "sdl2",
          "partial": "Access Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureAccessStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessStreaming",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureAccessStreaming",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessStreaming",
          "package": "sdl2",
          "partial": "Access Streaming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureAccessStreaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessTarget",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureAccessTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureAccessTarget",
          "package": "sdl2",
          "partial": "Access Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureAccessTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateAlpha",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureModulateAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateAlpha",
          "package": "sdl2",
          "partial": "Modulate Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureModulateAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateColor",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureModulateColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateColor",
          "package": "sdl2",
          "partial": "Modulate Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureModulateColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateNone",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#textureModulateNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "textureModulateNone",
          "package": "sdl2",
          "partial": "Modulate None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:textureModulateNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventClose",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventClose",
          "package": "sdl2",
          "partial": "Event Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventEnter",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventEnter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventEnter",
          "package": "sdl2",
          "partial": "Event Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventExposed",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventExposed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventExposed",
          "package": "sdl2",
          "partial": "Event Exposed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventExposed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventFocusGained",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventFocusGained",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventFocusGained",
          "package": "sdl2",
          "partial": "Event Focus Gained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventFocusGained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventFocusLost",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventFocusLost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventFocusLost",
          "package": "sdl2",
          "partial": "Event Focus Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventFocusLost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventHidden",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventHidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventHidden",
          "package": "sdl2",
          "partial": "Event Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventLeave",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventLeave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventLeave",
          "package": "sdl2",
          "partial": "Event Leave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMaximized",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventMaximized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMaximized",
          "package": "sdl2",
          "partial": "Event Maximized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventMaximized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMinimized",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventMinimized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMinimized",
          "package": "sdl2",
          "partial": "Event Minimized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventMinimized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMoved",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventMoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventMoved",
          "package": "sdl2",
          "partial": "Event Moved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventNone",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventNone",
          "package": "sdl2",
          "partial": "Event None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventResized",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventResized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventResized",
          "package": "sdl2",
          "partial": "Event Resized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventResized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventRestored",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventRestored",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventRestored",
          "package": "sdl2",
          "partial": "Event Restored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventRestored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventShown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventShown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventShown",
          "package": "sdl2",
          "partial": "Event Shown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventShown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventSizeChanged",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowEventSizeChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowEventSizeChanged",
          "package": "sdl2",
          "partial": "Event Size Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowEventSizeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagAllowHighDPI",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagAllowHighDPI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagAllowHighDPI",
          "package": "sdl2",
          "partial": "Flag Allow High DPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagAllowHighDPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagBorderless",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagBorderless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagBorderless",
          "package": "sdl2",
          "partial": "Flag Borderless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagBorderless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagForeign",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagForeign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagForeign",
          "package": "sdl2",
          "partial": "Flag Foreign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagForeign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagFullscreen",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagFullscreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagFullscreen",
          "package": "sdl2",
          "partial": "Flag Fullscreen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagFullscreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagFullscreenDesktop",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagFullscreenDesktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagFullscreenDesktop",
          "package": "sdl2",
          "partial": "Flag Fullscreen Desktop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagFullscreenDesktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagHidden",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagHidden",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagHidden",
          "package": "sdl2",
          "partial": "Flag Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagInputFocus",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagInputFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagInputFocus",
          "package": "sdl2",
          "partial": "Flag Input Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagInputFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagInputGrabbed",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagInputGrabbed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagInputGrabbed",
          "package": "sdl2",
          "partial": "Flag Input Grabbed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagInputGrabbed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMaximized",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagMaximized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMaximized",
          "package": "sdl2",
          "partial": "Flag Maximized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagMaximized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMinimized",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagMinimized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMinimized",
          "package": "sdl2",
          "partial": "Flag Minimized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagMinimized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMouseFocus",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagMouseFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagMouseFocus",
          "package": "sdl2",
          "partial": "Flag Mouse Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagMouseFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagOpenGL",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagOpenGL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagOpenGL",
          "package": "sdl2",
          "partial": "Flag Open GL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagOpenGL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagResizable",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagResizable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagResizable",
          "package": "sdl2",
          "partial": "Flag Resizable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagResizable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagShown",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowFlagShown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowFlagShown",
          "package": "sdl2",
          "partial": "Flag Shown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowFlagShown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowPosCentered",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowPosCentered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowPosCentered",
          "package": "sdl2",
          "partial": "Pos Centered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowPosCentered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowPosUndefined",
          "package": "sdl2",
          "signature": "a",
          "source": "src/Graphics-UI-SDL-Enum.html#windowPosUndefined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Enum",
          "module": "Graphics.UI.SDL.Enum",
          "name": "windowPosUndefined",
          "package": "sdl2",
          "partial": "Pos Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Enum.html#v:windowPosUndefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "Event",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Event.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "Event",
          "package": "sdl2",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "addEventWatch",
          "package": "sdl2",
          "signature": "EventFilter -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#addEventWatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "addEventWatch",
          "normalized": "EventFilter-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Event Watch",
          "signature": "EventFilter-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:addEventWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "createColorCursor",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e CInt -\u003e CInt -\u003e IO Cursor",
          "source": "src/Graphics-UI-SDL-Event.html#createColorCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "createColorCursor",
          "normalized": "Ptr Surface-\u003eCInt-\u003eCInt-\u003eIO Cursor",
          "package": "sdl2",
          "partial": "Color Cursor",
          "signature": "Ptr Surface-\u003eCInt-\u003eCInt-\u003eIO Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:createColorCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "createCursor",
          "package": "sdl2",
          "signature": "Ptr Word8 -\u003e Ptr Word8 -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e IO Cursor",
          "source": "src/Graphics-UI-SDL-Event.html#createCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "createCursor",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO Cursor",
          "package": "sdl2",
          "partial": "Cursor",
          "signature": "Ptr Word-\u003ePtr Word-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:createCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "createSystemCursor",
          "package": "sdl2",
          "signature": "SystemCursor -\u003e IO Cursor",
          "source": "src/Graphics-UI-SDL-Event.html#createSystemCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "createSystemCursor",
          "normalized": "SystemCursor-\u003eIO Cursor",
          "package": "sdl2",
          "partial": "System Cursor",
          "signature": "SystemCursor-\u003eIO Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:createSystemCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "delEventWatch",
          "package": "sdl2",
          "signature": "EventFilter -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#delEventWatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "delEventWatch",
          "normalized": "EventFilter-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Event Watch",
          "signature": "EventFilter-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:delEventWatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "eventState",
          "package": "sdl2",
          "signature": "Word32 -\u003e CInt -\u003e IO Word8",
          "source": "src/Graphics-UI-SDL-Event.html#eventState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "eventState",
          "normalized": "Word-\u003eCInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "State",
          "signature": "Word-\u003eCInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:eventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "filterEvents",
          "package": "sdl2",
          "signature": "EventFilter -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#filterEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "filterEvents",
          "normalized": "EventFilter-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Events",
          "signature": "EventFilter-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:filterEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "flushEvent",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#flushEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "flushEvent",
          "normalized": "Word-\u003eIO()",
          "package": "sdl2",
          "partial": "Event",
          "signature": "Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:flushEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "flushEvents",
          "package": "sdl2",
          "signature": "Word32 -\u003e Word32 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#flushEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "flushEvents",
          "normalized": "Word-\u003eWord-\u003eIO()",
          "package": "sdl2",
          "partial": "Events",
          "signature": "Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:flushEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "freeCursor",
          "package": "sdl2",
          "signature": "Cursor -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#freeCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "freeCursor",
          "normalized": "Cursor-\u003eIO()",
          "package": "sdl2",
          "partial": "Cursor",
          "signature": "Cursor-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:freeCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerAddMapping",
          "package": "sdl2",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerAddMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerAddMapping",
          "normalized": "CString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Controller Add Mapping",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerAddMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerClose",
          "package": "sdl2",
          "signature": "GameController -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerClose",
          "normalized": "GameController-\u003eIO()",
          "package": "sdl2",
          "partial": "Controller Close",
          "signature": "GameController-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerEventState",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerEventState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerEventState",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Controller Event State",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAttached",
          "package": "sdl2",
          "signature": "GameController -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetAttached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAttached",
          "normalized": "GameController-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Controller Get Attached",
          "signature": "GameController-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetAttached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAxis",
          "package": "sdl2",
          "signature": "GameController -\u003e GameControllerAxis -\u003e IO Int16",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAxis",
          "normalized": "GameController-\u003eGameControllerAxis-\u003eIO Int",
          "package": "sdl2",
          "partial": "Controller Get Axis",
          "signature": "GameController-\u003eGameControllerAxis-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAxisFromString",
          "package": "sdl2",
          "signature": "CString -\u003e IO GameControllerAxis",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetAxisFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetAxisFromString",
          "normalized": "CString-\u003eIO GameControllerAxis",
          "package": "sdl2",
          "partial": "Controller Get Axis From String",
          "signature": "CString-\u003eIO GameControllerAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetAxisFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetBindForAxis",
          "package": "sdl2",
          "signature": "GameController -\u003e GameControllerAxis -\u003e IO GameControllerButtonBind",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetBindForAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetBindForAxis",
          "normalized": "GameController-\u003eGameControllerAxis-\u003eIO GameControllerButtonBind",
          "package": "sdl2",
          "partial": "Controller Get Bind For Axis",
          "signature": "GameController-\u003eGameControllerAxis-\u003eIO GameControllerButtonBind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetBindForAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetBindForButton",
          "package": "sdl2",
          "signature": "GameController -\u003e GameControllerButton -\u003e IO GameControllerButtonBind",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetBindForButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetBindForButton",
          "normalized": "GameController-\u003eGameControllerButton-\u003eIO GameControllerButtonBind",
          "package": "sdl2",
          "partial": "Controller Get Bind For Button",
          "signature": "GameController-\u003eGameControllerButton-\u003eIO GameControllerButtonBind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetBindForButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetButton",
          "package": "sdl2",
          "signature": "GameController -\u003e GameControllerButton -\u003e IO Word8",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetButton",
          "normalized": "GameController-\u003eGameControllerButton-\u003eIO Word",
          "package": "sdl2",
          "partial": "Controller Get Button",
          "signature": "GameController-\u003eGameControllerButton-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetButtonFromString",
          "package": "sdl2",
          "signature": "CString -\u003e IO GameControllerButton",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetButtonFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetButtonFromString",
          "normalized": "CString-\u003eIO GameControllerButton",
          "package": "sdl2",
          "partial": "Controller Get Button From String",
          "signature": "CString-\u003eIO GameControllerButton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetButtonFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetJoystick",
          "package": "sdl2",
          "signature": "GameController -\u003e IO Joystick",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetJoystick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetJoystick",
          "normalized": "GameController-\u003eIO Joystick",
          "package": "sdl2",
          "partial": "Controller Get Joystick",
          "signature": "GameController-\u003eIO Joystick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetJoystick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetStringForAxis",
          "package": "sdl2",
          "signature": "GameControllerAxis -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetStringForAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetStringForAxis",
          "normalized": "GameControllerAxis-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Get String For Axis",
          "signature": "GameControllerAxis-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetStringForAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetStringForButton",
          "package": "sdl2",
          "signature": "GameControllerButton -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerGetStringForButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerGetStringForButton",
          "normalized": "GameControllerButton-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Get String For Button",
          "signature": "GameControllerButton-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerGetStringForButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerMapping",
          "package": "sdl2",
          "signature": "GameController -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerMapping",
          "normalized": "GameController-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Mapping",
          "signature": "GameController-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerMappingForGUID",
          "package": "sdl2",
          "signature": "JoystickGUID -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerMappingForGUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerMappingForGUID",
          "normalized": "JoystickGUID-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Mapping For GUID",
          "signature": "JoystickGUID-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerMappingForGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerName",
          "package": "sdl2",
          "signature": "GameController -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerName",
          "normalized": "GameController-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Name",
          "signature": "GameController-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerNameForIndex",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerNameForIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerNameForIndex",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Controller Name For Index",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerNameForIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerOpen",
          "package": "sdl2",
          "signature": "CInt -\u003e IO GameController",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerOpen",
          "normalized": "CInt-\u003eIO GameController",
          "package": "sdl2",
          "partial": "Controller Open",
          "signature": "CInt-\u003eIO GameController",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerUpdate",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#gameControllerUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "gameControllerUpdate",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Controller Update",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:gameControllerUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getCursor",
          "package": "sdl2",
          "signature": "IO Cursor",
          "source": "src/Graphics-UI-SDL-Event.html#getCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getCursor",
          "package": "sdl2",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getDefaultCursor",
          "package": "sdl2",
          "signature": "IO Cursor",
          "source": "src/Graphics-UI-SDL-Event.html#getDefaultCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getDefaultCursor",
          "package": "sdl2",
          "partial": "Default Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getDefaultCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getEventFilter",
          "package": "sdl2",
          "signature": "Ptr EventFilter -\u003e Ptr (Ptr ()) -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#getEventFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getEventFilter",
          "normalized": "Ptr EventFilter-\u003ePtr(Ptr())-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Event Filter",
          "signature": "Ptr EventFilter-\u003ePtr(Ptr())-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getEventFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyFromName",
          "package": "sdl2",
          "signature": "CString -\u003e IO Keycode",
          "source": "src/Graphics-UI-SDL-Event.html#getKeyFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyFromName",
          "normalized": "CString-\u003eIO Keycode",
          "package": "sdl2",
          "partial": "Key From Name",
          "signature": "CString-\u003eIO Keycode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getKeyFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyFromScancode",
          "package": "sdl2",
          "signature": "Scancode -\u003e IO Keycode",
          "source": "src/Graphics-UI-SDL-Event.html#getKeyFromScancode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyFromScancode",
          "normalized": "Scancode-\u003eIO Keycode",
          "package": "sdl2",
          "partial": "Key From Scancode",
          "signature": "Scancode-\u003eIO Keycode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getKeyFromScancode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyName",
          "package": "sdl2",
          "signature": "Keycode -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#getKeyName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyName",
          "normalized": "Keycode-\u003eIO CString",
          "package": "sdl2",
          "partial": "Key Name",
          "signature": "Keycode-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getKeyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyboardFocus",
          "package": "sdl2",
          "signature": "IO Window",
          "source": "src/Graphics-UI-SDL-Event.html#getKeyboardFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyboardFocus",
          "package": "sdl2",
          "partial": "Keyboard Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getKeyboardFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyboardState",
          "package": "sdl2",
          "signature": "Ptr CInt -\u003e IO (Ptr Word8)",
          "source": "src/Graphics-UI-SDL-Event.html#getKeyboardState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getKeyboardState",
          "normalized": "Ptr CInt-\u003eIO(Ptr Word)",
          "package": "sdl2",
          "partial": "Keyboard State",
          "signature": "Ptr CInt-\u003eIO(Ptr Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getKeyboardState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getModState",
          "package": "sdl2",
          "signature": "IO Keymod",
          "source": "src/Graphics-UI-SDL-Event.html#getModState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getModState",
          "package": "sdl2",
          "partial": "Mod State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getModState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getMouseFocus",
          "package": "sdl2",
          "signature": "IO Window",
          "source": "src/Graphics-UI-SDL-Event.html#getMouseFocus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getMouseFocus",
          "package": "sdl2",
          "partial": "Mouse Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getMouseFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getMouseState",
          "package": "sdl2",
          "signature": "Ptr CInt -\u003e Ptr CInt -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Event.html#getMouseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getMouseState",
          "normalized": "Ptr CInt-\u003ePtr CInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "Mouse State",
          "signature": "Ptr CInt-\u003ePtr CInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getMouseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getNumTouchDevices",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#getNumTouchDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getNumTouchDevices",
          "package": "sdl2",
          "partial": "Num Touch Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getNumTouchDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getNumTouchFingers",
          "package": "sdl2",
          "signature": "TouchID -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#getNumTouchFingers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getNumTouchFingers",
          "normalized": "TouchID-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Touch Fingers",
          "signature": "TouchID-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getNumTouchFingers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getRelativeMouseMode",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#getRelativeMouseMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getRelativeMouseMode",
          "package": "sdl2",
          "partial": "Relative Mouse Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getRelativeMouseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getRelativeMouseState",
          "package": "sdl2",
          "signature": "Ptr CInt -\u003e Ptr CInt -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Event.html#getRelativeMouseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getRelativeMouseState",
          "normalized": "Ptr CInt-\u003ePtr CInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "Relative Mouse State",
          "signature": "Ptr CInt-\u003ePtr CInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getRelativeMouseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeFromKey",
          "package": "sdl2",
          "signature": "Keycode -\u003e IO Scancode",
          "source": "src/Graphics-UI-SDL-Event.html#getScancodeFromKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeFromKey",
          "normalized": "Keycode-\u003eIO Scancode",
          "package": "sdl2",
          "partial": "Scancode From Key",
          "signature": "Keycode-\u003eIO Scancode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getScancodeFromKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeFromName",
          "package": "sdl2",
          "signature": "CString -\u003e IO Scancode",
          "source": "src/Graphics-UI-SDL-Event.html#getScancodeFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeFromName",
          "normalized": "CString-\u003eIO Scancode",
          "package": "sdl2",
          "partial": "Scancode From Name",
          "signature": "CString-\u003eIO Scancode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getScancodeFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeName",
          "package": "sdl2",
          "signature": "Scancode -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#getScancodeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getScancodeName",
          "normalized": "Scancode-\u003eIO CString",
          "package": "sdl2",
          "partial": "Scancode Name",
          "signature": "Scancode-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getScancodeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getTouchDevice",
          "package": "sdl2",
          "signature": "CInt -\u003e IO TouchID",
          "source": "src/Graphics-UI-SDL-Event.html#getTouchDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getTouchDevice",
          "normalized": "CInt-\u003eIO TouchID",
          "package": "sdl2",
          "partial": "Touch Device",
          "signature": "CInt-\u003eIO TouchID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getTouchDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "getTouchFinger",
          "package": "sdl2",
          "signature": "TouchID -\u003e CInt -\u003e IO (Ptr Finger)",
          "source": "src/Graphics-UI-SDL-Event.html#getTouchFinger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "getTouchFinger",
          "normalized": "TouchID-\u003eCInt-\u003eIO(Ptr Finger)",
          "package": "sdl2",
          "partial": "Touch Finger",
          "signature": "TouchID-\u003eCInt-\u003eIO(Ptr Finger)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:getTouchFinger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "hasEvent",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#hasEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "hasEvent",
          "normalized": "Word-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Event",
          "signature": "Word-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:hasEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "hasEvents",
          "package": "sdl2",
          "signature": "Word32 -\u003e Word32 -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#hasEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "hasEvents",
          "normalized": "Word-\u003eWord-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Events",
          "signature": "Word-\u003eWord-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:hasEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "hasScreenKeyboardSupport",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#hasScreenKeyboardSupport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "hasScreenKeyboardSupport",
          "package": "sdl2",
          "partial": "Screen Keyboard Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:hasScreenKeyboardSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "isGameController",
          "package": "sdl2",
          "signature": "CInt -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#isGameController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "isGameController",
          "normalized": "CInt-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Game Controller",
          "signature": "CInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:isGameController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "isScreenKeyboardShown",
          "package": "sdl2",
          "signature": "Window -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#isScreenKeyboardShown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "isScreenKeyboardShown",
          "normalized": "Window-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Screen Keyboard Shown",
          "signature": "Window-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:isScreenKeyboardShown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "isTextInputActive",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#isTextInputActive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "isTextInputActive",
          "package": "sdl2",
          "partial": "Text Input Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:isTextInputActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickClose",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#joystickClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickClose",
          "normalized": "Joystick-\u003eIO()",
          "package": "sdl2",
          "partial": "Close",
          "signature": "Joystick-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickEventState",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickEventState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickEventState",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Event State",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetAttached",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetAttached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetAttached",
          "normalized": "Joystick-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Get Attached",
          "signature": "Joystick-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetAttached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetAxis",
          "package": "sdl2",
          "signature": "Joystick -\u003e CInt -\u003e IO Int16",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetAxis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetAxis",
          "normalized": "Joystick-\u003eCInt-\u003eIO Int",
          "package": "sdl2",
          "partial": "Get Axis",
          "signature": "Joystick-\u003eCInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetBall",
          "package": "sdl2",
          "signature": "Joystick -\u003e CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetBall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetBall",
          "normalized": "Joystick-\u003eCInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Get Ball",
          "signature": "Joystick-\u003eCInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetBall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetButton",
          "package": "sdl2",
          "signature": "Joystick -\u003e CInt -\u003e IO Word8",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetButton",
          "normalized": "Joystick-\u003eCInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "Get Button",
          "signature": "Joystick-\u003eCInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetDeviceGUID",
          "package": "sdl2",
          "signature": "CInt -\u003e IO JoystickGUID",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetDeviceGUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetDeviceGUID",
          "normalized": "CInt-\u003eIO JoystickGUID",
          "package": "sdl2",
          "partial": "Get Device GUID",
          "signature": "CInt-\u003eIO JoystickGUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetDeviceGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUID",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO JoystickGUID",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetGUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUID",
          "normalized": "Joystick-\u003eIO JoystickGUID",
          "package": "sdl2",
          "partial": "Get GUID",
          "signature": "Joystick-\u003eIO JoystickGUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUIDFromString",
          "package": "sdl2",
          "signature": "CString -\u003e IO JoystickGUID",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetGUIDFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUIDFromString",
          "normalized": "CString-\u003eIO JoystickGUID",
          "package": "sdl2",
          "partial": "Get GUIDFrom String",
          "signature": "CString-\u003eIO JoystickGUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetGUIDFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUIDString",
          "package": "sdl2",
          "signature": "JoystickGUID -\u003e CString -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetGUIDString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetGUIDString",
          "normalized": "JoystickGUID-\u003eCString-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Get GUIDString",
          "signature": "JoystickGUID-\u003eCString-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetGUIDString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetHat",
          "package": "sdl2",
          "signature": "Joystick -\u003e CInt -\u003e IO Word8",
          "source": "src/Graphics-UI-SDL-Event.html#joystickGetHat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickGetHat",
          "normalized": "Joystick-\u003eCInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "Get Hat",
          "signature": "Joystick-\u003eCInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickGetHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickInstanceID",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO JoystickID",
          "source": "src/Graphics-UI-SDL-Event.html#joystickInstanceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickInstanceID",
          "normalized": "Joystick-\u003eIO JoystickID",
          "package": "sdl2",
          "partial": "Instance ID",
          "signature": "Joystick-\u003eIO JoystickID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickInstanceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickName",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#joystickName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickName",
          "normalized": "Joystick-\u003eIO CString",
          "package": "sdl2",
          "partial": "Name",
          "signature": "Joystick-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNameForIndex",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Event.html#joystickNameForIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNameForIndex",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Name For Index",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickNameForIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumAxes",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickNumAxes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumAxes",
          "normalized": "Joystick-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Axes",
          "signature": "Joystick-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickNumAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumBalls",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickNumBalls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumBalls",
          "normalized": "Joystick-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Balls",
          "signature": "Joystick-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickNumBalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumButtons",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickNumButtons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumButtons",
          "normalized": "Joystick-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Buttons",
          "signature": "Joystick-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickNumButtons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumHats",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#joystickNumHats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickNumHats",
          "normalized": "Joystick-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Hats",
          "signature": "Joystick-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickNumHats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickOpen",
          "package": "sdl2",
          "signature": "CInt -\u003e IO Joystick",
          "source": "src/Graphics-UI-SDL-Event.html#joystickOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickOpen",
          "normalized": "CInt-\u003eIO Joystick",
          "package": "sdl2",
          "partial": "Open",
          "signature": "CInt-\u003eIO Joystick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickUpdate",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#joystickUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "joystickUpdate",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Update",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:joystickUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "loadDollarTemplates",
          "package": "sdl2",
          "signature": "TouchID -\u003e Ptr RWops -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#loadDollarTemplates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "loadDollarTemplates",
          "normalized": "TouchID-\u003ePtr RWops-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Dollar Templates",
          "signature": "TouchID-\u003ePtr RWops-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:loadDollarTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "numJoysticks",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#numJoysticks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "numJoysticks",
          "package": "sdl2",
          "partial": "Joysticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:numJoysticks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "peepEvents",
          "package": "sdl2",
          "signature": "Ptr Event -\u003e CInt -\u003e EventAction -\u003e Word32 -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#peepEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "peepEvents",
          "normalized": "Ptr Event-\u003eCInt-\u003eEventAction-\u003eWord-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Events",
          "signature": "Ptr Event-\u003eCInt-\u003eEventAction-\u003eWord-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:peepEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "pollEvent",
          "package": "sdl2",
          "signature": "Ptr Event -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#pollEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "pollEvent",
          "normalized": "Ptr Event-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Event",
          "signature": "Ptr Event-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:pollEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "pumpEvents",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#pumpEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "pumpEvents",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Events",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:pumpEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "pushEvent",
          "package": "sdl2",
          "signature": "Ptr Event -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#pushEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "pushEvent",
          "normalized": "Ptr Event-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Event",
          "signature": "Ptr Event-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:pushEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "quitRequested",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Event.html#quitRequested",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "quitRequested",
          "package": "sdl2",
          "partial": "Requested",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:quitRequested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "recordGesture",
          "package": "sdl2",
          "signature": "TouchID -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#recordGesture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "recordGesture",
          "normalized": "TouchID-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Gesture",
          "signature": "TouchID-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:recordGesture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "registerEvents",
          "package": "sdl2",
          "signature": "CInt -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Event.html#registerEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "registerEvents",
          "normalized": "CInt-\u003eIO Word",
          "package": "sdl2",
          "partial": "Events",
          "signature": "CInt-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:registerEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "saveAllDollarTemplates",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#saveAllDollarTemplates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "saveAllDollarTemplates",
          "normalized": "Ptr RWops-\u003eIO CInt",
          "package": "sdl2",
          "partial": "All Dollar Templates",
          "signature": "Ptr RWops-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:saveAllDollarTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "saveDollarTemplate",
          "package": "sdl2",
          "signature": "GestureID -\u003e Ptr RWops -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#saveDollarTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "saveDollarTemplate",
          "normalized": "GestureID-\u003ePtr RWops-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Dollar Template",
          "signature": "GestureID-\u003ePtr RWops-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:saveDollarTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "setCursor",
          "package": "sdl2",
          "signature": "Cursor -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#setCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "setCursor",
          "normalized": "Cursor-\u003eIO()",
          "package": "sdl2",
          "partial": "Cursor",
          "signature": "Cursor-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:setCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "setEventFilter",
          "package": "sdl2",
          "signature": "EventFilter -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#setEventFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "setEventFilter",
          "normalized": "EventFilter-\u003ePtr()-\u003eIO()",
          "package": "sdl2",
          "partial": "Event Filter",
          "signature": "EventFilter-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:setEventFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "setModState",
          "package": "sdl2",
          "signature": "Keymod -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#setModState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "setModState",
          "normalized": "Keymod-\u003eIO()",
          "package": "sdl2",
          "partial": "Mod State",
          "signature": "Keymod-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:setModState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "setRelativeMouseMode",
          "package": "sdl2",
          "signature": "Bool -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#setRelativeMouseMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "setRelativeMouseMode",
          "normalized": "Bool-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Relative Mouse Mode",
          "signature": "Bool-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:setRelativeMouseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "setTextInputRect",
          "package": "sdl2",
          "signature": "Ptr Rect -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#setTextInputRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "setTextInputRect",
          "normalized": "Ptr Rect-\u003eIO()",
          "package": "sdl2",
          "partial": "Text Input Rect",
          "signature": "Ptr Rect-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:setTextInputRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "showCursor",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#showCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "showCursor",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Cursor",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:showCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "startTextInput",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#startTextInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "startTextInput",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Text Input",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:startTextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "stopTextInput",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#stopTextInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "stopTextInput",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Text Input",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:stopTextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "waitEvent",
          "package": "sdl2",
          "signature": "Ptr Event -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#waitEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "waitEvent",
          "normalized": "Ptr Event-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Event",
          "signature": "Ptr Event-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:waitEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "waitEventTimeout",
          "package": "sdl2",
          "signature": "Ptr Event -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Event.html#waitEventTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "waitEventTimeout",
          "normalized": "Ptr Event-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Event Timeout",
          "signature": "Ptr Event-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:waitEventTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Event",
          "name": "warpMouseInWindow",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Event.html#warpMouseInWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Event",
          "module": "Graphics.UI.SDL.Event",
          "name": "warpMouseInWindow",
          "normalized": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Mouse In Window",
          "signature": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Event.html#v:warpMouseInWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "Filesystem",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Filesystem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "Filesystem",
          "package": "sdl2",
          "partial": "Filesystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "allocRW",
          "package": "sdl2",
          "signature": "IO (Ptr RWops)",
          "source": "src/Graphics-UI-SDL-Filesystem.html#allocRW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "allocRW",
          "package": "sdl2",
          "partial": "RW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:allocRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "freeRW",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Filesystem.html#freeRW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "freeRW",
          "normalized": "Ptr RWops-\u003eIO()",
          "package": "sdl2",
          "partial": "RW",
          "signature": "Ptr RWops-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:freeRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "getBasePath",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Filesystem.html#getBasePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "getBasePath",
          "package": "sdl2",
          "partial": "Base Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:getBasePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "getPrefPath",
          "package": "sdl2",
          "signature": "CString -\u003e CString -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Filesystem.html#getPrefPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "getPrefPath",
          "normalized": "CString-\u003eCString-\u003eIO CString",
          "package": "sdl2",
          "partial": "Pref Path",
          "signature": "CString-\u003eCString-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:getPrefPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE16",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word16",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readBE16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE16",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readBE16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE32",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readBE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE32",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readBE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE64",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word64",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readBE64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readBE64",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readBE64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE16",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word16",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readLE16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE16",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readLE16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE32",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readLE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE32",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readLE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE64",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Word64",
          "source": "src/Graphics-UI-SDL-Filesystem.html#readLE64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "readLE64",
          "normalized": "Ptr RWops-\u003eIO Word",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:readLE64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwClose",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwClose",
          "normalized": "Ptr RWops-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Close",
          "signature": "Ptr RWops-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromConstMem",
          "package": "sdl2",
          "signature": "Ptr () -\u003e CInt -\u003e IO (Ptr RWops)",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwFromConstMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromConstMem",
          "normalized": "Ptr()-\u003eCInt-\u003eIO(Ptr RWops)",
          "package": "sdl2",
          "partial": "From Const Mem",
          "signature": "Ptr()-\u003eCInt-\u003eIO(Ptr RWops)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwFromConstMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromFP",
          "package": "sdl2",
          "signature": "Ptr () -\u003e Bool -\u003e IO (Ptr RWops)",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwFromFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromFP",
          "normalized": "Ptr()-\u003eBool-\u003eIO(Ptr RWops)",
          "package": "sdl2",
          "partial": "From FP",
          "signature": "Ptr()-\u003eBool-\u003eIO(Ptr RWops)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwFromFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromFile",
          "package": "sdl2",
          "signature": "CString -\u003e CString -\u003e IO (Ptr RWops)",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromFile",
          "normalized": "CString-\u003eCString-\u003eIO(Ptr RWops)",
          "package": "sdl2",
          "partial": "From File",
          "signature": "CString-\u003eCString-\u003eIO(Ptr RWops)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromMem",
          "package": "sdl2",
          "signature": "Ptr () -\u003e CInt -\u003e IO (Ptr RWops)",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwFromMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwFromMem",
          "normalized": "Ptr()-\u003eCInt-\u003eIO(Ptr RWops)",
          "package": "sdl2",
          "partial": "From Mem",
          "signature": "Ptr()-\u003eCInt-\u003eIO(Ptr RWops)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwFromMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwRead",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Ptr () -\u003e CSize -\u003e CSize -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwRead",
          "normalized": "Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize",
          "package": "sdl2",
          "partial": "Read",
          "signature": "Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwSeek",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Int64 -\u003e CInt -\u003e IO Int64",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwSeek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwSeek",
          "normalized": "Ptr RWops-\u003eInt-\u003eCInt-\u003eIO Int",
          "package": "sdl2",
          "partial": "Seek",
          "signature": "Ptr RWops-\u003eInt-\u003eCInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwTell",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e IO Int64",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwTell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwTell",
          "normalized": "Ptr RWops-\u003eIO Int",
          "package": "sdl2",
          "partial": "Tell",
          "signature": "Ptr RWops-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwWrite",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Ptr () -\u003e CSize -\u003e CSize -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#rwWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "rwWrite",
          "normalized": "Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize",
          "package": "sdl2",
          "partial": "Write",
          "signature": "Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:rwWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE16",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word16 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeBE16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE16",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeBE16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE32",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word32 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeBE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE32",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeBE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE64",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word64 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeBE64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeBE64",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "BE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeBE64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE16",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word16 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeLE16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE16",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeLE16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE32",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word32 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeLE32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE32",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeLE32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE64",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e Word64 -\u003e IO CSize",
          "source": "src/Graphics-UI-SDL-Filesystem.html#writeLE64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Filesystem",
          "module": "Graphics.UI.SDL.Filesystem",
          "name": "writeLE64",
          "normalized": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "package": "sdl2",
          "partial": "LE",
          "signature": "Ptr RWops-\u003eWord-\u003eIO CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Filesystem.html#v:writeLE64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "Haptic",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Haptic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "Haptic",
          "package": "sdl2",
          "partial": "Haptic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticClose",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticClose",
          "normalized": "Haptic-\u003eIO()",
          "package": "sdl2",
          "partial": "Close",
          "signature": "Haptic-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticDestroyEffect",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticDestroyEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticDestroyEffect",
          "normalized": "Haptic-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Destroy Effect",
          "signature": "Haptic-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticDestroyEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticEffectSupported",
          "package": "sdl2",
          "signature": "Haptic -\u003e Ptr HapticEffect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticEffectSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticEffectSupported",
          "normalized": "Haptic-\u003ePtr HapticEffect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Effect Supported",
          "signature": "Haptic-\u003ePtr HapticEffect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticEffectSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticGetEffectStatus",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticGetEffectStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticGetEffectStatus",
          "normalized": "Haptic-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Get Effect Status",
          "signature": "Haptic-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticGetEffectStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticIndex",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticIndex",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Index",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticName",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticName",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Name",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNewEffect",
          "package": "sdl2",
          "signature": "Haptic -\u003e Ptr HapticEffect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticNewEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNewEffect",
          "normalized": "Haptic-\u003ePtr HapticEffect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "New Effect",
          "signature": "Haptic-\u003ePtr HapticEffect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticNewEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumAxes",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticNumAxes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumAxes",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Axes",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticNumAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumEffects",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticNumEffects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumEffects",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Effects",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticNumEffects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumEffectsPlaying",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticNumEffectsPlaying",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticNumEffectsPlaying",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Effects Playing",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticNumEffectsPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpen",
          "package": "sdl2",
          "signature": "CInt -\u003e IO Haptic",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpen",
          "normalized": "CInt-\u003eIO Haptic",
          "package": "sdl2",
          "partial": "Open",
          "signature": "CInt-\u003eIO Haptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpenFromJoystick",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO Haptic",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticOpenFromJoystick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpenFromJoystick",
          "normalized": "Joystick-\u003eIO Haptic",
          "package": "sdl2",
          "partial": "Open From Joystick",
          "signature": "Joystick-\u003eIO Haptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticOpenFromJoystick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpenFromMouse",
          "package": "sdl2",
          "signature": "IO Haptic",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticOpenFromMouse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpenFromMouse",
          "package": "sdl2",
          "partial": "Open From Mouse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticOpenFromMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpened",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticOpened",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticOpened",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Opened",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticOpened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticPause",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticPause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticPause",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Pause",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticQuery",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CUInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticQuery",
          "normalized": "Haptic-\u003eIO CUInt",
          "package": "sdl2",
          "partial": "Query",
          "signature": "Haptic-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleInit",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticRumbleInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleInit",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rumble Init",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticRumbleInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumblePlay",
          "package": "sdl2",
          "signature": "Haptic -\u003e CFloat -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticRumblePlay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumblePlay",
          "normalized": "Haptic-\u003eCFloat-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rumble Play",
          "signature": "Haptic-\u003eCFloat-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticRumblePlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleStop",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticRumbleStop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleStop",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rumble Stop",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticRumbleStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleSupported",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticRumbleSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRumbleSupported",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rumble Supported",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticRumbleSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRunEffect",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticRunEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticRunEffect",
          "normalized": "Haptic-\u003eCInt-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Run Effect",
          "signature": "Haptic-\u003eCInt-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticRunEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticSetAutocenter",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticSetAutocenter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticSetAutocenter",
          "normalized": "Haptic-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Autocenter",
          "signature": "Haptic-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticSetAutocenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticSetGain",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticSetGain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticSetGain",
          "normalized": "Haptic-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Gain",
          "signature": "Haptic-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticSetGain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticStopAll",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticStopAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticStopAll",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Stop All",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticStopAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticStopEffect",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticStopEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticStopEffect",
          "normalized": "Haptic-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Stop Effect",
          "signature": "Haptic-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticStopEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticUnpause",
          "package": "sdl2",
          "signature": "Haptic -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticUnpause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticUnpause",
          "normalized": "Haptic-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Unpause",
          "signature": "Haptic-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticUnpause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticUpdateEffect",
          "package": "sdl2",
          "signature": "Haptic -\u003e CInt -\u003e Ptr HapticEffect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#hapticUpdateEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "hapticUpdateEffect",
          "normalized": "Haptic-\u003eCInt-\u003ePtr HapticEffect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Update Effect",
          "signature": "Haptic-\u003eCInt-\u003ePtr HapticEffect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:hapticUpdateEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "joystickIsHaptic",
          "package": "sdl2",
          "signature": "Joystick -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#joystickIsHaptic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "joystickIsHaptic",
          "normalized": "Joystick-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Is Haptic",
          "signature": "Joystick-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:joystickIsHaptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "mouseIsHaptic",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#mouseIsHaptic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "mouseIsHaptic",
          "package": "sdl2",
          "partial": "Is Haptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:mouseIsHaptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Haptic",
          "name": "numHaptics",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Haptic.html#numHaptics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Haptic",
          "module": "Graphics.UI.SDL.Haptic",
          "name": "numHaptics",
          "package": "sdl2",
          "partial": "Haptics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Haptic.html#v:numHaptics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Power",
          "name": "Power",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Power.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Power",
          "module": "Graphics.UI.SDL.Power",
          "name": "Power",
          "package": "sdl2",
          "partial": "Power",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Power.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Power",
          "name": "getPowerInfo",
          "package": "sdl2",
          "signature": "Ptr CInt -\u003e Ptr CInt -\u003e IO PowerState",
          "source": "src/Graphics-UI-SDL-Power.html#getPowerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Power",
          "module": "Graphics.UI.SDL.Power",
          "name": "getPowerInfo",
          "normalized": "Ptr CInt-\u003ePtr CInt-\u003eIO PowerState",
          "package": "sdl2",
          "partial": "Power Info",
          "signature": "Ptr CInt-\u003ePtr CInt-\u003eIO PowerState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Power.html#v:getPowerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "Timer",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Timer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "Timer",
          "package": "sdl2",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "addTimer",
          "package": "sdl2",
          "signature": "Word32 -\u003e TimerCallback -\u003e Ptr () -\u003e IO TimerID",
          "source": "src/Graphics-UI-SDL-Timer.html#addTimer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "addTimer",
          "normalized": "Word-\u003eTimerCallback-\u003ePtr()-\u003eIO TimerID",
          "package": "sdl2",
          "partial": "Timer",
          "signature": "Word-\u003eTimerCallback-\u003ePtr()-\u003eIO TimerID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:addTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "delay",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Timer.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "delay",
          "normalized": "Word-\u003eIO()",
          "package": "sdl2",
          "signature": "Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "getPerformanceCounter",
          "package": "sdl2",
          "signature": "IO Word64",
          "source": "src/Graphics-UI-SDL-Timer.html#getPerformanceCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "getPerformanceCounter",
          "package": "sdl2",
          "partial": "Performance Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:getPerformanceCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "getPerformanceFrequency",
          "package": "sdl2",
          "signature": "IO Word64",
          "source": "src/Graphics-UI-SDL-Timer.html#getPerformanceFrequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "getPerformanceFrequency",
          "package": "sdl2",
          "partial": "Performance Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:getPerformanceFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "getTicks",
          "package": "sdl2",
          "signature": "IO Word32",
          "source": "src/Graphics-UI-SDL-Timer.html#getTicks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "getTicks",
          "package": "sdl2",
          "partial": "Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:getTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Timer",
          "name": "removeTimer",
          "package": "sdl2",
          "signature": "TimerID -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Timer.html#removeTimer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Timer",
          "module": "Graphics.UI.SDL.Timer",
          "name": "removeTimer",
          "normalized": "TimerID-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Timer",
          "signature": "TimerID-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Timer.html#v:removeTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Types",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Types",
          "package": "sdl2",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCVT",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCVT",
          "package": "sdl2",
          "partial": "Audio CVT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:AudioCVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCallback",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCallback",
          "package": "sdl2",
          "partial": "Audio Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:AudioCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioDeviceID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#AudioDeviceID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioDeviceID",
          "package": "sdl2",
          "partial": "Audio Device ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:AudioDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioFormat",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#AudioFormat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioFormat",
          "package": "sdl2",
          "partial": "Audio Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:AudioFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioSpec",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioSpec",
          "package": "sdl2",
          "partial": "Audio Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:AudioSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Color",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Color",
          "package": "sdl2",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Cursor",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Cursor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Cursor",
          "package": "sdl2",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "DisplayMode",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "DisplayMode",
          "package": "sdl2",
          "partial": "Display Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:DisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Event",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Event",
          "package": "sdl2",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "EventFilter",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#EventFilter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "EventFilter",
          "package": "sdl2",
          "partial": "Event Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:EventFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Finger",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Finger",
          "package": "sdl2",
          "partial": "Finger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Finger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "FingerID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#FingerID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "FingerID",
          "package": "sdl2",
          "partial": "Finger ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:FingerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GLContext",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#GLContext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GLContext",
          "package": "sdl2",
          "partial": "GLContext",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:GLContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameController",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#GameController",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameController",
          "package": "sdl2",
          "partial": "Game Controller",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:GameController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBind",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBind",
          "package": "sdl2",
          "partial": "Game Controller Button Bind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:GameControllerButtonBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GestureID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#GestureID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GestureID",
          "package": "sdl2",
          "partial": "Gesture ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:GestureID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Haptic",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Haptic",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Haptic",
          "package": "sdl2",
          "partial": "Haptic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Haptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticDirection",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticDirection",
          "package": "sdl2",
          "partial": "Haptic Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:HapticDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticEffect",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticEffect",
          "package": "sdl2",
          "partial": "Haptic Effect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:HapticEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HintCallback",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#HintCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HintCallback",
          "package": "sdl2",
          "partial": "Hint Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:HintCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Joystick",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Joystick",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Joystick",
          "package": "sdl2",
          "partial": "Joystick",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Joystick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickGUID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#JoystickGUID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickGUID",
          "package": "sdl2",
          "partial": "Joystick GUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:JoystickGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#JoystickID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickID",
          "package": "sdl2",
          "partial": "Joystick ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:JoystickID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Keycode",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Keycode",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Keycode",
          "package": "sdl2",
          "partial": "Keycode",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Keycode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Keysym",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Keysym",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Keysym",
          "package": "sdl2",
          "partial": "Keysym",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Keysym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "LogOutputFunction",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#LogOutputFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "LogOutputFunction",
          "package": "sdl2",
          "partial": "Log Output Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:LogOutputFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxButtonData",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxButtonData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxButtonData",
          "package": "sdl2",
          "partial": "Message Box Button Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:MessageBoxButtonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColor",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColor",
          "package": "sdl2",
          "partial": "Message Box Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:MessageBoxColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColorScheme",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColorScheme",
          "package": "sdl2",
          "partial": "Message Box Color Scheme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:MessageBoxColorScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxData",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxData",
          "package": "sdl2",
          "partial": "Message Box Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:MessageBoxData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Palette",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Palette",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Palette",
          "package": "sdl2",
          "partial": "Palette",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "PixelFormat",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "PixelFormat",
          "package": "sdl2",
          "partial": "Pixel Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:PixelFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Point",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Point",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Point",
          "package": "sdl2",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "RWops",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "RWops",
          "package": "sdl2",
          "partial": "RWops",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:RWops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Rect",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Rect",
          "package": "sdl2",
          "partial": "Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Renderer",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Renderer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Renderer",
          "package": "sdl2",
          "partial": "Renderer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Renderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "RendererInfo",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "RendererInfo",
          "package": "sdl2",
          "partial": "Renderer Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:RendererInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Surface",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Surface",
          "package": "sdl2",
          "partial": "Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "SysWMmsg",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#SysWMmsg",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "SysWMmsg",
          "package": "sdl2",
          "partial": "Sys WMmsg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:SysWMmsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Texture",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Texture",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Texture",
          "package": "sdl2",
          "partial": "Texture",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TimerCallback",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#TimerCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TimerCallback",
          "package": "sdl2",
          "partial": "Timer Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:TimerCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TimerID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#TimerID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TimerID",
          "package": "sdl2",
          "partial": "Timer ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:TimerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TouchID",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#TouchID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TouchID",
          "package": "sdl2",
          "partial": "Touch ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:TouchID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Version",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Version",
          "package": "sdl2",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Window",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Types.html#Window",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Window",
          "package": "sdl2",
          "partial": "Window",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCVT",
          "package": "sdl2",
          "signature": "AudioCVT",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioCVT",
          "package": "sdl2",
          "partial": "Audio CVT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:AudioCVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioSpec",
          "package": "sdl2",
          "signature": "AudioSpec",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "AudioSpec",
          "package": "sdl2",
          "partial": "Audio Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:AudioSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Color",
          "package": "sdl2",
          "signature": "Color",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Color",
          "package": "sdl2",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerAxisEvent",
          "package": "sdl2",
          "signature": "ControllerAxisEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerAxisEvent",
          "package": "sdl2",
          "partial": "Controller Axis Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:ControllerAxisEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerButtonEvent",
          "package": "sdl2",
          "signature": "ControllerButtonEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerButtonEvent",
          "package": "sdl2",
          "partial": "Controller Button Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:ControllerButtonEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerDeviceEvent",
          "package": "sdl2",
          "signature": "ControllerDeviceEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "ControllerDeviceEvent",
          "package": "sdl2",
          "partial": "Controller Device Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:ControllerDeviceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "DisplayMode",
          "package": "sdl2",
          "signature": "DisplayMode",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "DisplayMode",
          "package": "sdl2",
          "partial": "Display Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:DisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "DollarGestureEvent",
          "package": "sdl2",
          "signature": "DollarGestureEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "DollarGestureEvent",
          "package": "sdl2",
          "partial": "Dollar Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:DollarGestureEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "DropEvent",
          "package": "sdl2",
          "signature": "DropEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "DropEvent",
          "package": "sdl2",
          "partial": "Drop Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:DropEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Finger",
          "package": "sdl2",
          "signature": "Finger",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Finger",
          "package": "sdl2",
          "partial": "Finger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Finger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindAxis",
          "package": "sdl2",
          "signature": "GameControllerButtonBindAxis",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindAxis",
          "package": "sdl2",
          "partial": "Game Controller Button Bind Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:GameControllerButtonBindAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindButton",
          "package": "sdl2",
          "signature": "GameControllerButtonBindButton",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindButton",
          "package": "sdl2",
          "partial": "Game Controller Button Bind Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:GameControllerButtonBindButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindHat",
          "package": "sdl2",
          "signature": "GameControllerButtonBindHat",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindHat",
          "package": "sdl2",
          "partial": "Game Controller Button Bind Hat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:GameControllerButtonBindHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindNone",
          "package": "sdl2",
          "signature": "GameControllerButtonBindNone",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "GameControllerButtonBindNone",
          "package": "sdl2",
          "partial": "Game Controller Button Bind None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:GameControllerButtonBindNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticCondition",
          "package": "sdl2",
          "signature": "HapticCondition",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticCondition",
          "package": "sdl2",
          "partial": "Haptic Condition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticConstant",
          "package": "sdl2",
          "signature": "HapticConstant",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticConstant",
          "package": "sdl2",
          "partial": "Haptic Constant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticCustom",
          "package": "sdl2",
          "signature": "HapticCustom",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticCustom",
          "package": "sdl2",
          "partial": "Haptic Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticDirection",
          "package": "sdl2",
          "signature": "HapticDirection",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticDirection",
          "package": "sdl2",
          "partial": "Haptic Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticLeftRight",
          "package": "sdl2",
          "signature": "HapticLeftRight",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticLeftRight",
          "package": "sdl2",
          "partial": "Haptic Left Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticLeftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticPeriodic",
          "package": "sdl2",
          "signature": "HapticPeriodic",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticPeriodic",
          "package": "sdl2",
          "partial": "Haptic Periodic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticPeriodic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticRamp",
          "package": "sdl2",
          "signature": "HapticRamp",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "HapticRamp",
          "package": "sdl2",
          "partial": "Haptic Ramp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:HapticRamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyAxisEvent",
          "package": "sdl2",
          "signature": "JoyAxisEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyAxisEvent",
          "package": "sdl2",
          "partial": "Joy Axis Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoyAxisEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyBallEvent",
          "package": "sdl2",
          "signature": "JoyBallEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyBallEvent",
          "package": "sdl2",
          "partial": "Joy Ball Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoyBallEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyButtonEvent",
          "package": "sdl2",
          "signature": "JoyButtonEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyButtonEvent",
          "package": "sdl2",
          "partial": "Joy Button Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoyButtonEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyDeviceEvent",
          "package": "sdl2",
          "signature": "JoyDeviceEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyDeviceEvent",
          "package": "sdl2",
          "partial": "Joy Device Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoyDeviceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyHatEvent",
          "package": "sdl2",
          "signature": "JoyHatEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoyHatEvent",
          "package": "sdl2",
          "partial": "Joy Hat Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoyHatEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickGUID",
          "package": "sdl2",
          "signature": "JoystickGUID",
          "source": "src/Graphics-UI-SDL-Types.html#JoystickGUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "JoystickGUID",
          "package": "sdl2",
          "partial": "Joystick GUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:JoystickGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "KeyboardEvent",
          "package": "sdl2",
          "signature": "KeyboardEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "KeyboardEvent",
          "package": "sdl2",
          "partial": "Keyboard Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:KeyboardEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Keysym",
          "package": "sdl2",
          "signature": "Keysym",
          "source": "src/Graphics-UI-SDL-Types.html#Keysym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Keysym",
          "package": "sdl2",
          "partial": "Keysym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Keysym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxButtonData",
          "package": "sdl2",
          "signature": "MessageBoxButtonData",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxButtonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxButtonData",
          "package": "sdl2",
          "partial": "Message Box Button Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MessageBoxButtonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColor",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColor",
          "package": "sdl2",
          "partial": "Message Box Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MessageBoxColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColorScheme",
          "package": "sdl2",
          "signature": "MessageBoxColorScheme",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxColorScheme",
          "package": "sdl2",
          "partial": "Message Box Color Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MessageBoxColorScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxData",
          "package": "sdl2",
          "signature": "MessageBoxData",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MessageBoxData",
          "package": "sdl2",
          "partial": "Message Box Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MessageBoxData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseButtonEvent",
          "package": "sdl2",
          "signature": "MouseButtonEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseButtonEvent",
          "package": "sdl2",
          "partial": "Mouse Button Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MouseButtonEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseMotionEvent",
          "package": "sdl2",
          "signature": "MouseMotionEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseMotionEvent",
          "package": "sdl2",
          "partial": "Mouse Motion Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MouseMotionEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseWheelEvent",
          "package": "sdl2",
          "signature": "MouseWheelEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MouseWheelEvent",
          "package": "sdl2",
          "partial": "Mouse Wheel Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MouseWheelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "MultiGestureEvent",
          "package": "sdl2",
          "signature": "MultiGestureEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "MultiGestureEvent",
          "package": "sdl2",
          "partial": "Multi Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:MultiGestureEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Palette",
          "package": "sdl2",
          "signature": "Palette",
          "source": "src/Graphics-UI-SDL-Types.html#Palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Palette",
          "package": "sdl2",
          "partial": "Palette",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Palette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "PixelFormat",
          "package": "sdl2",
          "signature": "PixelFormat",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "PixelFormat",
          "package": "sdl2",
          "partial": "Pixel Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:PixelFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Point",
          "package": "sdl2",
          "signature": "Point",
          "source": "src/Graphics-UI-SDL-Types.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Point",
          "package": "sdl2",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "QuitEvent",
          "package": "sdl2",
          "signature": "QuitEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "QuitEvent",
          "package": "sdl2",
          "partial": "Quit Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:QuitEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "RWops",
          "package": "sdl2",
          "signature": "RWops",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "RWops",
          "package": "sdl2",
          "partial": "RWops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:RWops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Rect",
          "package": "sdl2",
          "signature": "Rect",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Rect",
          "package": "sdl2",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "RendererInfo",
          "package": "sdl2",
          "signature": "RendererInfo",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "RendererInfo",
          "package": "sdl2",
          "partial": "Renderer Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:RendererInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Surface",
          "package": "sdl2",
          "signature": "Surface",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Surface",
          "package": "sdl2",
          "partial": "Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "SysWMEvent",
          "package": "sdl2",
          "signature": "SysWMEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "SysWMEvent",
          "package": "sdl2",
          "partial": "Sys WMEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:SysWMEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TextEditingEvent",
          "package": "sdl2",
          "signature": "TextEditingEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TextEditingEvent",
          "package": "sdl2",
          "partial": "Text Editing Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:TextEditingEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TextInputEvent",
          "package": "sdl2",
          "signature": "TextInputEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TextInputEvent",
          "package": "sdl2",
          "partial": "Text Input Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:TextInputEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "TouchFingerEvent",
          "package": "sdl2",
          "signature": "TouchFingerEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "TouchFingerEvent",
          "package": "sdl2",
          "partial": "Touch Finger Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:TouchFingerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "UserEvent",
          "package": "sdl2",
          "signature": "UserEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "UserEvent",
          "package": "sdl2",
          "partial": "User Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:UserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "Version",
          "package": "sdl2",
          "signature": "Version",
          "source": "src/Graphics-UI-SDL-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "Version",
          "package": "sdl2",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "WindowEvent",
          "package": "sdl2",
          "signature": "WindowEvent",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "WindowEvent",
          "package": "sdl2",
          "partial": "Window Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:WindowEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTBuf",
          "package": "sdl2",
          "signature": "Ptr Word8",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTBuf",
          "package": "sdl2",
          "partial": "CVTBuf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTDstFormat",
          "package": "sdl2",
          "signature": "AudioFormat",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTDstFormat",
          "package": "sdl2",
          "partial": "CVTDst Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTDstFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLen",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLen",
          "package": "sdl2",
          "partial": "CVTLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenCvt",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenCvt",
          "package": "sdl2",
          "partial": "CVTLen Cvt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTLenCvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenMult",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenMult",
          "package": "sdl2",
          "partial": "CVTLen Mult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTLenMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenRatio",
          "package": "sdl2",
          "signature": "CDouble",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTLenRatio",
          "package": "sdl2",
          "partial": "CVTLen Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTLenRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTNeeded",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTNeeded",
          "package": "sdl2",
          "partial": "CVTNeeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTRateIncr",
          "package": "sdl2",
          "signature": "CDouble",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTRateIncr",
          "package": "sdl2",
          "partial": "CVTRate Incr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTRateIncr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTSrcFormat",
          "package": "sdl2",
          "signature": "AudioFormat",
          "source": "src/Graphics-UI-SDL-Types.html#AudioCVT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioCVTSrcFormat",
          "package": "sdl2",
          "partial": "CVTSrc Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioCVTSrcFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecCallback",
          "package": "sdl2",
          "signature": "AudioCallback",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecCallback",
          "package": "sdl2",
          "partial": "Spec Callback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecChannels",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecChannels",
          "package": "sdl2",
          "partial": "Spec Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecFormat",
          "package": "sdl2",
          "signature": "AudioFormat",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecFormat",
          "package": "sdl2",
          "partial": "Spec Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecFreq",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecFreq",
          "package": "sdl2",
          "partial": "Spec Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSamples",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSamples",
          "package": "sdl2",
          "partial": "Spec Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSilence",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSilence",
          "package": "sdl2",
          "partial": "Spec Silence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecSilence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSize",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecSize",
          "package": "sdl2",
          "partial": "Spec Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecUserdata",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#AudioSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "audioSpecUserdata",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Spec Userdata",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:audioSpecUserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "colorA",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "colorA",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:colorA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "colorB",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "colorB",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:colorB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "colorG",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "colorG",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:colorG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "colorR",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "colorR",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:colorR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventAxis",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventAxis",
          "package": "sdl2",
          "partial": "Axis Event Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerAxisEventAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventValue",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventValue",
          "package": "sdl2",
          "partial": "Axis Event Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerAxisEventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerAxisEventWhich",
          "package": "sdl2",
          "partial": "Axis Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerAxisEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventButton",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventButton",
          "package": "sdl2",
          "partial": "Button Event Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerButtonEventButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventState",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventState",
          "package": "sdl2",
          "partial": "Button Event State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerButtonEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerButtonEventWhich",
          "package": "sdl2",
          "partial": "Button Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerButtonEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerDeviceEventWhich",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "controllerDeviceEventWhich",
          "package": "sdl2",
          "partial": "Device Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:controllerDeviceEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeDriverData",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeDriverData",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Mode Driver Data",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:displayModeDriverData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeFormat",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeFormat",
          "package": "sdl2",
          "partial": "Mode Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:displayModeFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeH",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeH",
          "package": "sdl2",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:displayModeH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeRefreshRate",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeRefreshRate",
          "package": "sdl2",
          "partial": "Mode Refresh Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:displayModeRefreshRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeW",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#DisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "displayModeW",
          "package": "sdl2",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:displayModeW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventError",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventError",
          "package": "sdl2",
          "partial": "Gesture Event Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventGestureID",
          "package": "sdl2",
          "signature": "GestureID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventGestureID",
          "package": "sdl2",
          "partial": "Gesture Event Gesture ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventGestureID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventNumFingers",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventNumFingers",
          "package": "sdl2",
          "partial": "Gesture Event Num Fingers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventNumFingers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventTouchID",
          "package": "sdl2",
          "signature": "TouchID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventTouchID",
          "package": "sdl2",
          "partial": "Gesture Event Touch ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventTouchID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventX",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventX",
          "package": "sdl2",
          "partial": "Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventY",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dollarGestureEventY",
          "package": "sdl2",
          "partial": "Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dollarGestureEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "dropEventFile",
          "package": "sdl2",
          "signature": "CString",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "dropEventFile",
          "package": "sdl2",
          "partial": "Event File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:dropEventFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "eventTimestamp",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "eventTimestamp",
          "package": "sdl2",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:eventTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "eventType",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "eventType",
          "package": "sdl2",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:eventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerID",
          "package": "sdl2",
          "signature": "FingerID",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerID",
          "package": "sdl2",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:fingerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerPressure",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerPressure",
          "package": "sdl2",
          "partial": "Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:fingerPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerX",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerX",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:fingerX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerY",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Finger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "fingerY",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:fingerY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindAxis",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindAxis",
          "package": "sdl2",
          "partial": "Controller Button Bind Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:gameControllerButtonBindAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindButton",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindButton",
          "package": "sdl2",
          "partial": "Controller Button Bind Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:gameControllerButtonBindButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindHat",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindHat",
          "package": "sdl2",
          "partial": "Controller Button Bind Hat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:gameControllerButtonBindHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindHatMask",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#GameControllerButtonBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "gameControllerButtonBindHatMask",
          "package": "sdl2",
          "partial": "Controller Button Bind Hat Mask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:gameControllerButtonBindHatMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionButton",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionButton",
          "package": "sdl2",
          "partial": "Condition Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionCenter",
          "package": "sdl2",
          "signature": "[Int16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionCenter",
          "normalized": "[Int]",
          "package": "sdl2",
          "partial": "Condition Center",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionDeadband",
          "package": "sdl2",
          "signature": "[Word16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionDeadband",
          "normalized": "[Word]",
          "package": "sdl2",
          "partial": "Condition Deadband",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionDeadband"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionDelay",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionDelay",
          "package": "sdl2",
          "partial": "Condition Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionInterval",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionInterval",
          "package": "sdl2",
          "partial": "Condition Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLeftCoeff",
          "package": "sdl2",
          "signature": "[Int16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLeftCoeff",
          "normalized": "[Int]",
          "package": "sdl2",
          "partial": "Condition Left Coeff",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionLeftCoeff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLeftSat",
          "package": "sdl2",
          "signature": "[Word16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLeftSat",
          "normalized": "[Word]",
          "package": "sdl2",
          "partial": "Condition Left Sat",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionLeftSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionLength",
          "package": "sdl2",
          "partial": "Condition Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionRightCoeff",
          "package": "sdl2",
          "signature": "[Int16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionRightCoeff",
          "normalized": "[Int]",
          "package": "sdl2",
          "partial": "Condition Right Coeff",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionRightCoeff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionRightSat",
          "package": "sdl2",
          "signature": "[Word16]",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConditionRightSat",
          "normalized": "[Word]",
          "package": "sdl2",
          "partial": "Condition Right Sat",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConditionRightSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantAttackLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantAttackLength",
          "package": "sdl2",
          "partial": "Constant Attack Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantAttackLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantAttackLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantAttackLevel",
          "package": "sdl2",
          "partial": "Constant Attack Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantAttackLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantButton",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantButton",
          "package": "sdl2",
          "partial": "Constant Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantDelay",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantDelay",
          "package": "sdl2",
          "partial": "Constant Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantDirection",
          "package": "sdl2",
          "signature": "HapticDirection",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantDirection",
          "package": "sdl2",
          "partial": "Constant Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantFadeLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantFadeLength",
          "package": "sdl2",
          "partial": "Constant Fade Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantFadeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantFadeLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantFadeLevel",
          "package": "sdl2",
          "partial": "Constant Fade Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantFadeLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantInterval",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantInterval",
          "package": "sdl2",
          "partial": "Constant Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantLength",
          "package": "sdl2",
          "partial": "Constant Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantLevel",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticConstantLevel",
          "package": "sdl2",
          "partial": "Constant Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticConstantLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomAttackLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomAttackLength",
          "package": "sdl2",
          "partial": "Custom Attack Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomAttackLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomAttackLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomAttackLevel",
          "package": "sdl2",
          "partial": "Custom Attack Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomAttackLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomButton",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomButton",
          "package": "sdl2",
          "partial": "Custom Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomChannels",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomChannels",
          "package": "sdl2",
          "partial": "Custom Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomData",
          "package": "sdl2",
          "signature": "Ptr Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomData",
          "package": "sdl2",
          "partial": "Custom Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomDelay",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomDelay",
          "package": "sdl2",
          "partial": "Custom Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomDirection",
          "package": "sdl2",
          "signature": "HapticDirection",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomDirection",
          "package": "sdl2",
          "partial": "Custom Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomFadeLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomFadeLength",
          "package": "sdl2",
          "partial": "Custom Fade Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomFadeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomFadeLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomFadeLevel",
          "package": "sdl2",
          "partial": "Custom Fade Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomFadeLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomInterval",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomInterval",
          "package": "sdl2",
          "partial": "Custom Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomLength",
          "package": "sdl2",
          "partial": "Custom Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomPeriod",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomPeriod",
          "package": "sdl2",
          "partial": "Custom Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomSamples",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticCustomSamples",
          "package": "sdl2",
          "partial": "Custom Samples",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticCustomSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionType",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionType",
          "package": "sdl2",
          "partial": "Direction Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticDirectionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionX",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionX",
          "package": "sdl2",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticDirectionX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionY",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionY",
          "package": "sdl2",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticDirectionY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionZ",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticDirectionZ",
          "package": "sdl2",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticDirectionZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticEffectType",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticEffectType",
          "package": "sdl2",
          "partial": "Effect Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticEffectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightLargeMagnitude",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightLargeMagnitude",
          "package": "sdl2",
          "partial": "Left Right Large Magnitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticLeftRightLargeMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightLength",
          "package": "sdl2",
          "partial": "Left Right Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticLeftRightLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightSmallMagnitude",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticLeftRightSmallMagnitude",
          "package": "sdl2",
          "partial": "Left Right Small Magnitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticLeftRightSmallMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicAttackLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicAttackLength",
          "package": "sdl2",
          "partial": "Periodic Attack Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicAttackLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicAttackLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicAttackLevel",
          "package": "sdl2",
          "partial": "Periodic Attack Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicAttackLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicButton",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicButton",
          "package": "sdl2",
          "partial": "Periodic Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicDelay",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicDelay",
          "package": "sdl2",
          "partial": "Periodic Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicDirection",
          "package": "sdl2",
          "signature": "HapticDirection",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicDirection",
          "package": "sdl2",
          "partial": "Periodic Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicFadeLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicFadeLength",
          "package": "sdl2",
          "partial": "Periodic Fade Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicFadeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicFadeLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicFadeLevel",
          "package": "sdl2",
          "partial": "Periodic Fade Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicFadeLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicInterval",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicInterval",
          "package": "sdl2",
          "partial": "Periodic Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicLength",
          "package": "sdl2",
          "partial": "Periodic Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicMagnitude",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicMagnitude",
          "package": "sdl2",
          "partial": "Periodic Magnitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicOffset",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicOffset",
          "package": "sdl2",
          "partial": "Periodic Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicPeriod",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicPeriod",
          "package": "sdl2",
          "partial": "Periodic Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicPhase",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticPeriodicPhase",
          "package": "sdl2",
          "partial": "Periodic Phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticPeriodicPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampAttackLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampAttackLength",
          "package": "sdl2",
          "partial": "Ramp Attack Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampAttackLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampAttackLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampAttackLevel",
          "package": "sdl2",
          "partial": "Ramp Attack Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampAttackLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampButton",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampButton",
          "package": "sdl2",
          "partial": "Ramp Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampDelay",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampDelay",
          "package": "sdl2",
          "partial": "Ramp Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampDirection",
          "package": "sdl2",
          "signature": "HapticDirection",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampDirection",
          "package": "sdl2",
          "partial": "Ramp Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampEnd",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampEnd",
          "package": "sdl2",
          "partial": "Ramp End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampFadeLength",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampFadeLength",
          "package": "sdl2",
          "partial": "Ramp Fade Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampFadeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampFadeLevel",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampFadeLevel",
          "package": "sdl2",
          "partial": "Ramp Fade Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampFadeLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampInterval",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampInterval",
          "package": "sdl2",
          "partial": "Ramp Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampLength",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampLength",
          "package": "sdl2",
          "partial": "Ramp Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampStart",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#HapticEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "hapticRampStart",
          "package": "sdl2",
          "partial": "Ramp Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:hapticRampStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventAxis",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventAxis",
          "package": "sdl2",
          "partial": "Axis Event Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyAxisEventAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventValue",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventValue",
          "package": "sdl2",
          "partial": "Axis Event Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyAxisEventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyAxisEventWhich",
          "package": "sdl2",
          "partial": "Axis Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyAxisEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventBall",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventBall",
          "package": "sdl2",
          "partial": "Ball Event Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyBallEventBall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventWhich",
          "package": "sdl2",
          "partial": "Ball Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyBallEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventXRel",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventXRel",
          "package": "sdl2",
          "partial": "Ball Event XRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyBallEventXRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventYRel",
          "package": "sdl2",
          "signature": "Int16",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyBallEventYRel",
          "package": "sdl2",
          "partial": "Ball Event YRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyBallEventYRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventButton",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventButton",
          "package": "sdl2",
          "partial": "Button Event Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyButtonEventButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventState",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventState",
          "package": "sdl2",
          "partial": "Button Event State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyButtonEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyButtonEventWhich",
          "package": "sdl2",
          "partial": "Button Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyButtonEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyDeviceEventWhich",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyDeviceEventWhich",
          "package": "sdl2",
          "partial": "Device Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyDeviceEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventHat",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventHat",
          "package": "sdl2",
          "partial": "Hat Event Hat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyHatEventHat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventValue",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventValue",
          "package": "sdl2",
          "partial": "Hat Event Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyHatEventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventWhich",
          "package": "sdl2",
          "signature": "JoystickID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joyHatEventWhich",
          "package": "sdl2",
          "partial": "Hat Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joyHatEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "joystickGUID",
          "package": "sdl2",
          "signature": "[Word8]",
          "source": "src/Graphics-UI-SDL-Types.html#JoystickGUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "joystickGUID",
          "normalized": "[Word]",
          "package": "sdl2",
          "partial": "GUID",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:joystickGUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventKeysym",
          "package": "sdl2",
          "signature": "Keysym",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventKeysym",
          "package": "sdl2",
          "partial": "Event Keysym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keyboardEventKeysym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventRepeat",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventRepeat",
          "package": "sdl2",
          "partial": "Event Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keyboardEventRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventState",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventState",
          "package": "sdl2",
          "partial": "Event State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keyboardEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keyboardEventWindowID",
          "package": "sdl2",
          "partial": "Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keyboardEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymKeycode",
          "package": "sdl2",
          "signature": "Keycode",
          "source": "src/Graphics-UI-SDL-Types.html#Keysym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymKeycode",
          "package": "sdl2",
          "partial": "Keycode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keysymKeycode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymMod",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#Keysym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymMod",
          "package": "sdl2",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keysymMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymScancode",
          "package": "sdl2",
          "signature": "Scancode",
          "source": "src/Graphics-UI-SDL-Types.html#Keysym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "keysymScancode",
          "package": "sdl2",
          "partial": "Scancode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:keysymScancode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonButtonID",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxButtonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonButtonID",
          "package": "sdl2",
          "partial": "Box Button Button ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxButtonButtonID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonDataFlags",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxButtonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonDataFlags",
          "package": "sdl2",
          "partial": "Box Button Data Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxButtonDataFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonText",
          "package": "sdl2",
          "signature": "CString",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxButtonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxButtonText",
          "package": "sdl2",
          "partial": "Box Button Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxButtonText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorB",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorB",
          "package": "sdl2",
          "partial": "Box Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorG",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorG",
          "package": "sdl2",
          "partial": "Box Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorR",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorR",
          "package": "sdl2",
          "partial": "Box Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorBackground",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorBackground",
          "package": "sdl2",
          "partial": "Box Color Scheme Color Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorSchemeColorBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonBackground",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonBackground",
          "package": "sdl2",
          "partial": "Box Color Scheme Color Button Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorSchemeColorButtonBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonBorder",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonBorder",
          "package": "sdl2",
          "partial": "Box Color Scheme Color Button Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorSchemeColorButtonBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonSelected",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorButtonSelected",
          "package": "sdl2",
          "partial": "Box Color Scheme Color Button Selected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorSchemeColorButtonSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorText",
          "package": "sdl2",
          "signature": "MessageBoxColor",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxColorScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxColorSchemeColorText",
          "package": "sdl2",
          "partial": "Box Color Scheme Color Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxColorSchemeColorText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataButtons",
          "package": "sdl2",
          "signature": "Ptr MessageBoxButtonData",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataButtons",
          "package": "sdl2",
          "partial": "Box Data Buttons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataButtons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataColorScheme",
          "package": "sdl2",
          "signature": "Ptr MessageBoxColorScheme",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataColorScheme",
          "package": "sdl2",
          "partial": "Box Data Color Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataColorScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataFlags",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataFlags",
          "package": "sdl2",
          "partial": "Box Data Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataMessage",
          "package": "sdl2",
          "signature": "CString",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataMessage",
          "package": "sdl2",
          "partial": "Box Data Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataNumButtons",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataNumButtons",
          "package": "sdl2",
          "partial": "Box Data Num Buttons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataNumButtons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataTitle",
          "package": "sdl2",
          "signature": "CString",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataTitle",
          "package": "sdl2",
          "partial": "Box Data Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataWindow",
          "package": "sdl2",
          "signature": "Window",
          "source": "src/Graphics-UI-SDL-Types.html#MessageBoxData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "messageBoxDataWindow",
          "package": "sdl2",
          "partial": "Box Data Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:messageBoxDataWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventButton",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventButton",
          "package": "sdl2",
          "partial": "Button Event Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventState",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventState",
          "package": "sdl2",
          "partial": "Button Event State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventWhich",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventWhich",
          "package": "sdl2",
          "partial": "Button Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventWindowID",
          "package": "sdl2",
          "partial": "Button Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventX",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventX",
          "package": "sdl2",
          "partial": "Button Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventY",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseButtonEventY",
          "package": "sdl2",
          "partial": "Button Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseButtonEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventState",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventState",
          "package": "sdl2",
          "partial": "Motion Event State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventWhich",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventWhich",
          "package": "sdl2",
          "partial": "Motion Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventWindowID",
          "package": "sdl2",
          "partial": "Motion Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventX",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventX",
          "package": "sdl2",
          "partial": "Motion Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventXRel",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventXRel",
          "package": "sdl2",
          "partial": "Motion Event XRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventXRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventY",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventY",
          "package": "sdl2",
          "partial": "Motion Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventYRel",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseMotionEventYRel",
          "package": "sdl2",
          "partial": "Motion Event YRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseMotionEventYRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventWhich",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventWhich",
          "package": "sdl2",
          "partial": "Wheel Event Which",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseWheelEventWhich"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventWindowID",
          "package": "sdl2",
          "partial": "Wheel Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseWheelEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventX",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventX",
          "package": "sdl2",
          "partial": "Wheel Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseWheelEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventY",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "mouseWheelEventY",
          "package": "sdl2",
          "partial": "Wheel Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:mouseWheelEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventDDist",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventDDist",
          "package": "sdl2",
          "partial": "Gesture Event DDist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventDDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventDTheta",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventDTheta",
          "package": "sdl2",
          "partial": "Gesture Event DTheta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventDTheta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventNumFingers",
          "package": "sdl2",
          "signature": "Word16",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventNumFingers",
          "package": "sdl2",
          "partial": "Gesture Event Num Fingers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventNumFingers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventTouchID",
          "package": "sdl2",
          "signature": "TouchID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventTouchID",
          "package": "sdl2",
          "partial": "Gesture Event Touch ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventTouchID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventX",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventX",
          "package": "sdl2",
          "partial": "Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventY",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "multiGestureEventY",
          "package": "sdl2",
          "partial": "Gesture Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:multiGestureEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "paletteColors",
          "package": "sdl2",
          "signature": "Ptr Color",
          "source": "src/Graphics-UI-SDL-Types.html#Palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "paletteColors",
          "package": "sdl2",
          "partial": "Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:paletteColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "paletteNColors",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Palette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "paletteNColors",
          "package": "sdl2",
          "partial": "NColors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:paletteNColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatAMask",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatAMask",
          "package": "sdl2",
          "partial": "Format AMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatAMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBMask",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBMask",
          "package": "sdl2",
          "partial": "Format BMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatBMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBitsPerPixel",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBitsPerPixel",
          "package": "sdl2",
          "partial": "Format Bits Per Pixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatBitsPerPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBytesPerPixel",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatBytesPerPixel",
          "package": "sdl2",
          "partial": "Format Bytes Per Pixel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatBytesPerPixel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatFormat",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatFormat",
          "package": "sdl2",
          "partial": "Format Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatGMask",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatGMask",
          "package": "sdl2",
          "partial": "Format GMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatGMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatPalette",
          "package": "sdl2",
          "signature": "Ptr Palette",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatPalette",
          "package": "sdl2",
          "partial": "Format Palette",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatRMask",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#PixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pixelFormatRMask",
          "package": "sdl2",
          "partial": "Format RMask",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pixelFormatRMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pointX",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pointX",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pointX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "pointY",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "pointY",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:pointY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rectH",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rectH",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rectH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rectW",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rectW",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rectW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rectX",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rectX",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rectX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rectY",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rectY",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rectY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoFlags",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoFlags",
          "package": "sdl2",
          "partial": "Info Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoMaxTextureHeight",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoMaxTextureHeight",
          "package": "sdl2",
          "partial": "Info Max Texture Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoMaxTextureHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoMaxTextureWidth",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoMaxTextureWidth",
          "package": "sdl2",
          "partial": "Info Max Texture Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoMaxTextureWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoName",
          "package": "sdl2",
          "signature": "CString",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoName",
          "package": "sdl2",
          "partial": "Info Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoNumTextureFormats",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoNumTextureFormats",
          "package": "sdl2",
          "partial": "Info Num Texture Formats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoNumTextureFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoTextureFormats",
          "package": "sdl2",
          "signature": "[Word32]",
          "source": "src/Graphics-UI-SDL-Types.html#RendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rendererInfoTextureFormats",
          "normalized": "[Word]",
          "package": "sdl2",
          "partial": "Info Texture Formats",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rendererInfoTextureFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsClose",
          "package": "sdl2",
          "signature": "FunPtr (Ptr RWops -\u003e IO CInt)",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsClose",
          "normalized": "FunPtr(Ptr RWops-\u003eIO CInt)",
          "package": "sdl2",
          "partial": "Close",
          "signature": "FunPtr(Ptr RWops-\u003eIO CInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsRead",
          "package": "sdl2",
          "signature": "FunPtr (Ptr RWops -\u003e Ptr () -\u003e CSize -\u003e CSize -\u003e IO CSize)",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsRead",
          "normalized": "FunPtr(Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize)",
          "package": "sdl2",
          "partial": "Read",
          "signature": "FunPtr(Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsSeek",
          "package": "sdl2",
          "signature": "FunPtr (Ptr RWops -\u003e Int64 -\u003e CInt -\u003e IO Int64)",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsSeek",
          "normalized": "FunPtr(Ptr RWops-\u003eInt-\u003eCInt-\u003eIO Int)",
          "package": "sdl2",
          "partial": "Seek",
          "signature": "FunPtr(Ptr RWops-\u003eInt-\u003eCInt-\u003eIO Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsSize",
          "package": "sdl2",
          "signature": "FunPtr (Ptr RWops -\u003e IO Int64)",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsSize",
          "normalized": "FunPtr(Ptr RWops-\u003eIO Int)",
          "package": "sdl2",
          "partial": "Size",
          "signature": "FunPtr(Ptr RWops-\u003eIO Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsType",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsType",
          "package": "sdl2",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsWrite",
          "package": "sdl2",
          "signature": "FunPtr (Ptr RWops -\u003e Ptr () -\u003e CSize -\u003e CSize -\u003e IO CSize)",
          "source": "src/Graphics-UI-SDL-Types.html#RWops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "rwopsWrite",
          "normalized": "FunPtr(Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize)",
          "package": "sdl2",
          "partial": "Write",
          "signature": "FunPtr(Ptr RWops-\u003ePtr()-\u003eCSize-\u003eCSize-\u003eIO CSize)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:rwopsWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceClipRect",
          "package": "sdl2",
          "signature": "Rect",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceClipRect",
          "package": "sdl2",
          "partial": "Clip Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceFormat",
          "package": "sdl2",
          "signature": "Ptr PixelFormat",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceFormat",
          "package": "sdl2",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceH",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceH",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfacePixels",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfacePixels",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Pixels",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfacePixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceRefcount",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceRefcount",
          "package": "sdl2",
          "partial": "Refcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceRefcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceUserdata",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceUserdata",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Userdata",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceUserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceW",
          "package": "sdl2",
          "signature": "CInt",
          "source": "src/Graphics-UI-SDL-Types.html#Surface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "surfaceW",
          "package": "sdl2",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:surfaceW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "sysWMEventMsg",
          "package": "sdl2",
          "signature": "SysWMmsg",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "sysWMEventMsg",
          "package": "sdl2",
          "partial": "WMEvent Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:sysWMEventMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventLength",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventLength",
          "package": "sdl2",
          "partial": "Editing Event Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textEditingEventLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventStart",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventStart",
          "package": "sdl2",
          "partial": "Editing Event Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textEditingEventStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventText",
          "package": "sdl2",
          "signature": "[CChar]",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventText",
          "normalized": "[CChar]",
          "package": "sdl2",
          "partial": "Editing Event Text",
          "signature": "[CChar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textEditingEventText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textEditingEventWindowID",
          "package": "sdl2",
          "partial": "Editing Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textEditingEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textInputEventText",
          "package": "sdl2",
          "signature": "[CChar]",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textInputEventText",
          "normalized": "[CChar]",
          "package": "sdl2",
          "partial": "Input Event Text",
          "signature": "[CChar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textInputEventText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "textInputEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "textInputEventWindowID",
          "package": "sdl2",
          "partial": "Input Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:textInputEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventDX",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventDX",
          "package": "sdl2",
          "partial": "Finger Event DX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventDX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventDY",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventDY",
          "package": "sdl2",
          "partial": "Finger Event DY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventDY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventFingerID",
          "package": "sdl2",
          "signature": "FingerID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventFingerID",
          "package": "sdl2",
          "partial": "Finger Event Finger ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventFingerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventPressure",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventPressure",
          "package": "sdl2",
          "partial": "Finger Event Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventTouchID",
          "package": "sdl2",
          "signature": "TouchID",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventTouchID",
          "package": "sdl2",
          "partial": "Finger Event Touch ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventTouchID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventX",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventX",
          "package": "sdl2",
          "partial": "Finger Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventY",
          "package": "sdl2",
          "signature": "CFloat",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "touchFingerEventY",
          "package": "sdl2",
          "partial": "Finger Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:touchFingerEventY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventCode",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventCode",
          "package": "sdl2",
          "partial": "Event Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:userEventCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventData1",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventData1",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Event Data",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:userEventData1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventData2",
          "package": "sdl2",
          "signature": "Ptr ()",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventData2",
          "normalized": "Ptr()",
          "package": "sdl2",
          "partial": "Event Data",
          "signature": "Ptr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:userEventData2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "userEventWindowID",
          "package": "sdl2",
          "partial": "Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:userEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "versionMajor",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "versionMajor",
          "package": "sdl2",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:versionMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "versionMinor",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "versionMinor",
          "package": "sdl2",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:versionMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "versionPatch",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "versionPatch",
          "package": "sdl2",
          "partial": "Patch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:versionPatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventData1",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventData1",
          "package": "sdl2",
          "partial": "Event Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:windowEventData1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventData2",
          "package": "sdl2",
          "signature": "Int32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventData2",
          "package": "sdl2",
          "partial": "Event Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:windowEventData2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventEvent",
          "package": "sdl2",
          "signature": "Word8",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventEvent",
          "package": "sdl2",
          "partial": "Event Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:windowEventEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventWindowID",
          "package": "sdl2",
          "signature": "Word32",
          "source": "src/Graphics-UI-SDL-Types.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Types",
          "module": "Graphics.UI.SDL.Types",
          "name": "windowEventWindowID",
          "package": "sdl2",
          "partial": "Event Window ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Types.html#v:windowEventWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "Video",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL-Video.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "Video",
          "package": "sdl2",
          "partial": "Video",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "allocFormat",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO (Ptr PixelFormat)",
          "source": "src/Graphics-UI-SDL-Video.html#allocFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "allocFormat",
          "normalized": "Word-\u003eIO(Ptr PixelFormat)",
          "package": "sdl2",
          "partial": "Format",
          "signature": "Word-\u003eIO(Ptr PixelFormat)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:allocFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "allocPalette",
          "package": "sdl2",
          "signature": "CInt -\u003e IO (Ptr Palette)",
          "source": "src/Graphics-UI-SDL-Video.html#allocPalette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "allocPalette",
          "normalized": "CInt-\u003eIO(Ptr Palette)",
          "package": "sdl2",
          "partial": "Palette",
          "signature": "CInt-\u003eIO(Ptr Palette)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:allocPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "blitScaled",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e Ptr Surface -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#blitScaled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "blitScaled",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Scaled",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:blitScaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "blitSurface",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e Ptr Surface -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#blitSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "blitSurface",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:blitSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "calculateGammaRamp",
          "package": "sdl2",
          "signature": "CFloat -\u003e Ptr Word16 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#calculateGammaRamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "calculateGammaRamp",
          "normalized": "CFloat-\u003ePtr Word-\u003eIO()",
          "package": "sdl2",
          "partial": "Gamma Ramp",
          "signature": "CFloat-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:calculateGammaRamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "convertPixels",
          "package": "sdl2",
          "signature": "CInt -\u003e CInt -\u003e Word32 -\u003e Ptr () -\u003e CInt -\u003e Word32 -\u003e Ptr () -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#convertPixels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "convertPixels",
          "normalized": "CInt-\u003eCInt-\u003eWord-\u003ePtr()-\u003eCInt-\u003eWord-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Pixels",
          "signature": "CInt-\u003eCInt-\u003eWord-\u003ePtr()-\u003eCInt-\u003eWord-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:convertPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "convertSurface",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr PixelFormat -\u003e Word32 -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#convertSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "convertSurface",
          "normalized": "Ptr Surface-\u003ePtr PixelFormat-\u003eWord-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "Surface",
          "signature": "Ptr Surface-\u003ePtr PixelFormat-\u003eWord-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:convertSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "convertSurfaceFormat",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Word32 -\u003e Word32 -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#convertSurfaceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "convertSurfaceFormat",
          "normalized": "Ptr Surface-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "Surface Format",
          "signature": "Ptr Surface-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:convertSurfaceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createRGBSurface",
          "package": "sdl2",
          "signature": "Word32 -\u003e CInt -\u003e CInt -\u003e CInt -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#createRGBSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createRGBSurface",
          "normalized": "Word-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "RGBSurface",
          "signature": "Word-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createRGBSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createRGBSurfaceFrom",
          "package": "sdl2",
          "signature": "Ptr () -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#createRGBSurfaceFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createRGBSurfaceFrom",
          "normalized": "Ptr()-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "RGBSurface From",
          "signature": "Ptr()-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createRGBSurfaceFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createRenderer",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e Word32 -\u003e IO Renderer",
          "source": "src/Graphics-UI-SDL-Video.html#createRenderer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createRenderer",
          "normalized": "Window-\u003eCInt-\u003eWord-\u003eIO Renderer",
          "package": "sdl2",
          "partial": "Renderer",
          "signature": "Window-\u003eCInt-\u003eWord-\u003eIO Renderer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createSoftwareRenderer",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e IO Renderer",
          "source": "src/Graphics-UI-SDL-Video.html#createSoftwareRenderer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createSoftwareRenderer",
          "normalized": "Ptr Surface-\u003eIO Renderer",
          "package": "sdl2",
          "partial": "Software Renderer",
          "signature": "Ptr Surface-\u003eIO Renderer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createSoftwareRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createTexture",
          "package": "sdl2",
          "signature": "Renderer -\u003e Word32 -\u003e CInt -\u003e CInt -\u003e CInt -\u003e IO Texture",
          "source": "src/Graphics-UI-SDL-Video.html#createTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createTexture",
          "normalized": "Renderer-\u003eWord-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO Texture",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Renderer-\u003eWord-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createTextureFromSurface",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Surface -\u003e IO Texture",
          "source": "src/Graphics-UI-SDL-Video.html#createTextureFromSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createTextureFromSurface",
          "normalized": "Renderer-\u003ePtr Surface-\u003eIO Texture",
          "package": "sdl2",
          "partial": "Texture From Surface",
          "signature": "Renderer-\u003ePtr Surface-\u003eIO Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createTextureFromSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindow",
          "package": "sdl2",
          "signature": "CString -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e Word32 -\u003e IO Window",
          "source": "src/Graphics-UI-SDL-Video.html#createWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindow",
          "normalized": "CString-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eIO Window",
          "package": "sdl2",
          "partial": "Window",
          "signature": "CString-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWord-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindowAndRenderer",
          "package": "sdl2",
          "signature": "CInt -\u003e CInt -\u003e Word32 -\u003e Ptr Window -\u003e Ptr Renderer -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#createWindowAndRenderer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindowAndRenderer",
          "normalized": "CInt-\u003eCInt-\u003eWord-\u003ePtr Window-\u003ePtr Renderer-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window And Renderer",
          "signature": "CInt-\u003eCInt-\u003eWord-\u003ePtr Window-\u003ePtr Renderer-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createWindowAndRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindowFrom",
          "package": "sdl2",
          "signature": "Ptr () -\u003e IO Window",
          "source": "src/Graphics-UI-SDL-Video.html#createWindowFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "createWindowFrom",
          "normalized": "Ptr()-\u003eIO Window",
          "package": "sdl2",
          "partial": "Window From",
          "signature": "Ptr()-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:createWindowFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyRenderer",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#destroyRenderer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyRenderer",
          "normalized": "Renderer-\u003eIO()",
          "package": "sdl2",
          "partial": "Renderer",
          "signature": "Renderer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:destroyRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#destroyTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyTexture",
          "normalized": "Texture-\u003eIO()",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Texture-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:destroyTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#destroyWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "destroyWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:destroyWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "disableScreenSaver",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#disableScreenSaver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "disableScreenSaver",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Screen Saver",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:disableScreenSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "enableScreenSaver",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#enableScreenSaver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "enableScreenSaver",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Screen Saver",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:enableScreenSaver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "enclosePoints",
          "package": "sdl2",
          "signature": "Ptr Point -\u003e CInt -\u003e Ptr Rect -\u003e Ptr Rect -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#enclosePoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "enclosePoints",
          "normalized": "Ptr Point-\u003eCInt-\u003ePtr Rect-\u003ePtr Rect-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Points",
          "signature": "Ptr Point-\u003eCInt-\u003ePtr Rect-\u003ePtr Rect-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:enclosePoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "fillRect",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#fillRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "fillRect",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rect",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:fillRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "fillRects",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e CInt -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#fillRects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "fillRects",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003eCInt-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Rects",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003eCInt-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:fillRects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "freeFormat",
          "package": "sdl2",
          "signature": "Ptr PixelFormat -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#freeFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "freeFormat",
          "normalized": "Ptr PixelFormat-\u003eIO()",
          "package": "sdl2",
          "partial": "Format",
          "signature": "Ptr PixelFormat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:freeFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "freePalette",
          "package": "sdl2",
          "signature": "Ptr Palette -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#freePalette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "freePalette",
          "normalized": "Ptr Palette-\u003eIO()",
          "package": "sdl2",
          "partial": "Palette",
          "signature": "Ptr Palette-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:freePalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "freeSurface",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#freeSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "freeSurface",
          "normalized": "Ptr Surface-\u003eIO()",
          "package": "sdl2",
          "partial": "Surface",
          "signature": "Ptr Surface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:freeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getClipRect",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getClipRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getClipRect",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003eIO()",
          "package": "sdl2",
          "partial": "Clip Rect",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getClipboardText",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getClipboardText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getClipboardText",
          "package": "sdl2",
          "partial": "Clipboard Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getClipboardText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getClosestDisplayMode",
          "package": "sdl2",
          "signature": "CInt -\u003e Ptr DisplayMode -\u003e Ptr DisplayMode -\u003e IO (Ptr DisplayMode)",
          "source": "src/Graphics-UI-SDL-Video.html#getClosestDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getClosestDisplayMode",
          "normalized": "CInt-\u003ePtr DisplayMode-\u003ePtr DisplayMode-\u003eIO(Ptr DisplayMode)",
          "package": "sdl2",
          "partial": "Closest Display Mode",
          "signature": "CInt-\u003ePtr DisplayMode-\u003ePtr DisplayMode-\u003eIO(Ptr DisplayMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getClosestDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getColorKey",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getColorKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getColorKey",
          "normalized": "Ptr Surface-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Color Key",
          "signature": "Ptr Surface-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getColorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getCurrentDisplayMode",
          "package": "sdl2",
          "signature": "CInt -\u003e Ptr DisplayMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getCurrentDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getCurrentDisplayMode",
          "normalized": "CInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Current Display Mode",
          "signature": "CInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getCurrentDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getCurrentVideoDriver",
          "package": "sdl2",
          "signature": "IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getCurrentVideoDriver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getCurrentVideoDriver",
          "package": "sdl2",
          "partial": "Current Video Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getCurrentVideoDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getDesktopDisplayMode",
          "package": "sdl2",
          "signature": "CInt -\u003e Ptr DisplayMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getDesktopDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getDesktopDisplayMode",
          "normalized": "CInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Desktop Display Mode",
          "signature": "CInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getDesktopDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayBounds",
          "package": "sdl2",
          "signature": "CInt -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getDisplayBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayBounds",
          "normalized": "CInt-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Display Bounds",
          "signature": "CInt-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getDisplayBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayMode",
          "package": "sdl2",
          "signature": "CInt -\u003e CInt -\u003e Ptr DisplayMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayMode",
          "normalized": "CInt-\u003eCInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Display Mode",
          "signature": "CInt-\u003eCInt-\u003ePtr DisplayMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayName",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getDisplayName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getDisplayName",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Display Name",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getDisplayName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumDisplayModes",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getNumDisplayModes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumDisplayModes",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Num Display Modes",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getNumDisplayModes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumRenderDrivers",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getNumRenderDrivers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumRenderDrivers",
          "package": "sdl2",
          "partial": "Num Render Drivers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getNumRenderDrivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumVideoDisplays",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getNumVideoDisplays",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumVideoDisplays",
          "package": "sdl2",
          "partial": "Num Video Displays",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getNumVideoDisplays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumVideoDrivers",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getNumVideoDrivers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getNumVideoDrivers",
          "package": "sdl2",
          "partial": "Num Video Drivers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getNumVideoDrivers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getPixelFormatName",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getPixelFormatName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getPixelFormatName",
          "normalized": "Word-\u003eIO CString",
          "package": "sdl2",
          "partial": "Pixel Format Name",
          "signature": "Word-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getPixelFormatName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRGB",
          "package": "sdl2",
          "signature": "Word32 -\u003e Ptr PixelFormat -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRGB",
          "normalized": "Word-\u003ePtr PixelFormat-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO()",
          "package": "sdl2",
          "partial": "RGB",
          "signature": "Word-\u003ePtr PixelFormat-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRGBA",
          "package": "sdl2",
          "signature": "Word32 -\u003e Ptr PixelFormat -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getRGBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRGBA",
          "normalized": "Word-\u003ePtr PixelFormat-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO()",
          "package": "sdl2",
          "partial": "RGBA",
          "signature": "Word-\u003ePtr PixelFormat-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDrawBlendMode",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO Int",
          "source": "src/Graphics-UI-SDL-Video.html#getRenderDrawBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDrawBlendMode",
          "normalized": "Renderer-\u003eIO Int",
          "package": "sdl2",
          "partial": "Render Draw Blend Mode",
          "signature": "Renderer-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRenderDrawBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDrawColor",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getRenderDrawColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDrawColor",
          "normalized": "Renderer-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Render Draw Color",
          "signature": "Renderer-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRenderDrawColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDriverInfo",
          "package": "sdl2",
          "signature": "CInt -\u003e Ptr RendererInfo -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getRenderDriverInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderDriverInfo",
          "normalized": "CInt-\u003ePtr RendererInfo-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Render Driver Info",
          "signature": "CInt-\u003ePtr RendererInfo-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRenderDriverInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderTarget",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO Texture",
          "source": "src/Graphics-UI-SDL-Video.html#getRenderTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderTarget",
          "normalized": "Renderer-\u003eIO Texture",
          "package": "sdl2",
          "partial": "Render Target",
          "signature": "Renderer-\u003eIO Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRenderTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderer",
          "package": "sdl2",
          "signature": "Window -\u003e IO Renderer",
          "source": "src/Graphics-UI-SDL-Video.html#getRenderer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRenderer",
          "normalized": "Window-\u003eIO Renderer",
          "package": "sdl2",
          "partial": "Renderer",
          "signature": "Window-\u003eIO Renderer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRendererInfo",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr RendererInfo -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getRendererInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRendererInfo",
          "normalized": "Renderer-\u003ePtr RendererInfo-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Renderer Info",
          "signature": "Renderer-\u003ePtr RendererInfo-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRendererInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getRendererOutputSize",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getRendererOutputSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getRendererOutputSize",
          "normalized": "Renderer-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Renderer Output Size",
          "signature": "Renderer-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getRendererOutputSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceAlphaMod",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getSurfaceAlphaMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceAlphaMod",
          "normalized": "Ptr Surface-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Alpha Mod",
          "signature": "Ptr Surface-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getSurfaceAlphaMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceBlendMode",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e BlendMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getSurfaceBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceBlendMode",
          "normalized": "Ptr Surface-\u003eBlendMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Blend Mode",
          "signature": "Ptr Surface-\u003eBlendMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getSurfaceBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceColorMod",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getSurfaceColorMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getSurfaceColorMod",
          "normalized": "Ptr Surface-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Color Mod",
          "signature": "Ptr Surface-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getSurfaceColorMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureAlphaMod",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getTextureAlphaMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureAlphaMod",
          "normalized": "Texture-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Alpha Mod",
          "signature": "Texture-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getTextureAlphaMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureBlendMode",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr BlendMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getTextureBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureBlendMode",
          "normalized": "Texture-\u003ePtr BlendMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Blend Mode",
          "signature": "Texture-\u003ePtr BlendMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getTextureBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureColorMod",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e Ptr Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getTextureColorMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getTextureColorMod",
          "normalized": "Texture-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Color Mod",
          "signature": "Texture-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getTextureColorMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getVideoDriver",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getVideoDriver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getVideoDriver",
          "normalized": "CInt-\u003eIO CString",
          "package": "sdl2",
          "partial": "Video Driver",
          "signature": "CInt-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getVideoDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowBrightness",
          "package": "sdl2",
          "signature": "Window -\u003e IO CFloat",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowBrightness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowBrightness",
          "normalized": "Window-\u003eIO CFloat",
          "package": "sdl2",
          "partial": "Window Brightness",
          "signature": "Window-\u003eIO CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowBrightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowData",
          "package": "sdl2",
          "signature": "Window -\u003e CString -\u003e IO (Ptr ())",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowData",
          "normalized": "Window-\u003eCString-\u003eIO(Ptr())",
          "package": "sdl2",
          "partial": "Window Data",
          "signature": "Window-\u003eCString-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowDisplayIndex",
          "package": "sdl2",
          "signature": "Window -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowDisplayIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowDisplayIndex",
          "normalized": "Window-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Display Index",
          "signature": "Window-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowDisplayIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowDisplayMode",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr DisplayMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowDisplayMode",
          "normalized": "Window-\u003ePtr DisplayMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Display Mode",
          "signature": "Window-\u003ePtr DisplayMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowFlags",
          "package": "sdl2",
          "signature": "Window -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowFlags",
          "normalized": "Window-\u003eIO Word",
          "package": "sdl2",
          "partial": "Window Flags",
          "signature": "Window-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowFromID",
          "package": "sdl2",
          "signature": "Word32 -\u003e IO Window",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowFromID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowFromID",
          "normalized": "Word-\u003eIO Window",
          "package": "sdl2",
          "partial": "Window From ID",
          "signature": "Word-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowFromID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowGammaRamp",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr Word16 -\u003e Ptr Word16 -\u003e Ptr Word16 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowGammaRamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowGammaRamp",
          "normalized": "Window-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Gamma Ramp",
          "signature": "Window-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowGammaRamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowGrab",
          "package": "sdl2",
          "signature": "Window -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowGrab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowGrab",
          "normalized": "Window-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Window Grab",
          "signature": "Window-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowGrab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowID",
          "package": "sdl2",
          "signature": "Window -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowID",
          "normalized": "Window-\u003eIO Word",
          "package": "sdl2",
          "partial": "Window ID",
          "signature": "Window-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowMaximumSize",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowMaximumSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowMaximumSize",
          "normalized": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Maximum Size",
          "signature": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowMinimumSize",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowMinimumSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowMinimumSize",
          "normalized": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Minimum Size",
          "signature": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowMinimumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowPixelFormat",
          "package": "sdl2",
          "signature": "Window -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowPixelFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowPixelFormat",
          "normalized": "Window-\u003eIO Word",
          "package": "sdl2",
          "partial": "Window Pixel Format",
          "signature": "Window-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowPixelFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowPosition",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowPosition",
          "normalized": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Position",
          "signature": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowSize",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowSize",
          "normalized": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Size",
          "signature": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowSurface",
          "package": "sdl2",
          "signature": "Window -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowSurface",
          "normalized": "Window-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "Window Surface",
          "signature": "Window-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowTitle",
          "package": "sdl2",
          "signature": "Window -\u003e IO CString",
          "source": "src/Graphics-UI-SDL-Video.html#getWindowTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "getWindowTitle",
          "normalized": "Window-\u003eIO CString",
          "package": "sdl2",
          "partial": "Window Title",
          "signature": "Window-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:getWindowTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glBindTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr CFloat -\u003e Ptr CFloat -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glBindTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glBindTexture",
          "normalized": "Texture-\u003ePtr CFloat-\u003ePtr CFloat-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Bind Texture",
          "signature": "Texture-\u003ePtr CFloat-\u003ePtr CFloat-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glBindTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glCreateContext",
          "package": "sdl2",
          "signature": "Window -\u003e IO GLContext",
          "source": "src/Graphics-UI-SDL-Video.html#glCreateContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glCreateContext",
          "normalized": "Window-\u003eIO GLContext",
          "package": "sdl2",
          "partial": "Create Context",
          "signature": "Window-\u003eIO GLContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glCreateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glDeleteContext",
          "package": "sdl2",
          "signature": "GLContext -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#glDeleteContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glDeleteContext",
          "normalized": "GLContext-\u003eIO()",
          "package": "sdl2",
          "partial": "Delete Context",
          "signature": "GLContext-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glDeleteContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glExtensionSupported",
          "package": "sdl2",
          "signature": "CString -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#glExtensionSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glExtensionSupported",
          "normalized": "CString-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Extension Supported",
          "signature": "CString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glExtensionSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetAttribute",
          "package": "sdl2",
          "signature": "GLattr -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glGetAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetAttribute",
          "normalized": "GLattr-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Get Attribute",
          "signature": "GLattr-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetCurrentContext",
          "package": "sdl2",
          "signature": "IO GLContext",
          "source": "src/Graphics-UI-SDL-Video.html#glGetCurrentContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetCurrentContext",
          "package": "sdl2",
          "partial": "Get Current Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetCurrentContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetCurrentWindow",
          "package": "sdl2",
          "signature": "IO Window",
          "source": "src/Graphics-UI-SDL-Video.html#glGetCurrentWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetCurrentWindow",
          "package": "sdl2",
          "partial": "Get Current Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetCurrentWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetDrawableSize",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#glGetDrawableSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetDrawableSize",
          "normalized": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Drawable Size",
          "signature": "Window-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetDrawableSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetProcAddress",
          "package": "sdl2",
          "signature": "CString -\u003e IO (Ptr ())",
          "source": "src/Graphics-UI-SDL-Video.html#glGetProcAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetProcAddress",
          "normalized": "CString-\u003eIO(Ptr())",
          "package": "sdl2",
          "partial": "Get Proc Address",
          "signature": "CString-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetProcAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetSwapInterval",
          "package": "sdl2",
          "signature": "IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glGetSwapInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glGetSwapInterval",
          "package": "sdl2",
          "partial": "Get Swap Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glGetSwapInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glLoadLibrary",
          "package": "sdl2",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glLoadLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glLoadLibrary",
          "normalized": "CString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Load Library",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glLoadLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glMakeCurrent",
          "package": "sdl2",
          "signature": "Window -\u003e GLContext -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glMakeCurrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glMakeCurrent",
          "normalized": "Window-\u003eGLContext-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Make Current",
          "signature": "Window-\u003eGLContext-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glMakeCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glSetAttribute",
          "package": "sdl2",
          "signature": "GLattr -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glSetAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glSetAttribute",
          "normalized": "GLattr-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Attribute",
          "signature": "GLattr-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glSetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glSetSwapInterval",
          "package": "sdl2",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glSetSwapInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glSetSwapInterval",
          "normalized": "CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Swap Interval",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glSetSwapInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glSwapWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#glSwapWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glSwapWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Swap Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glSwapWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glUnbindTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#glUnbindTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glUnbindTexture",
          "normalized": "Texture-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Unbind Texture",
          "signature": "Texture-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glUnbindTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "glUnloadLibrary",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#glUnloadLibrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "glUnloadLibrary",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Unload Library",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:glUnloadLibrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "hasClipboardText",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#hasClipboardText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "hasClipboardText",
          "package": "sdl2",
          "partial": "Clipboard Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:hasClipboardText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "hasIntersection",
          "package": "sdl2",
          "signature": "Ptr Rect -\u003e Ptr Rect -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#hasIntersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "hasIntersection",
          "normalized": "Ptr Rect-\u003ePtr Rect-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Intersection",
          "signature": "Ptr Rect-\u003ePtr Rect-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:hasIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "hideWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#hideWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "hideWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:hideWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "intersectRect",
          "package": "sdl2",
          "signature": "Ptr Rect -\u003e Ptr Rect -\u003e Ptr Rect -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#intersectRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "intersectRect",
          "normalized": "Ptr Rect-\u003ePtr Rect-\u003ePtr Rect-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Rect",
          "signature": "Ptr Rect-\u003ePtr Rect-\u003ePtr Rect-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:intersectRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "intersectRectAndLine",
          "package": "sdl2",
          "signature": "Ptr Rect -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#intersectRectAndLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "intersectRectAndLine",
          "normalized": "Ptr Rect-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Rect And Line",
          "signature": "Ptr Rect-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:intersectRectAndLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "isScreenSaverEnabled",
          "package": "sdl2",
          "signature": "IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#isScreenSaverEnabled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "isScreenSaverEnabled",
          "package": "sdl2",
          "partial": "Screen Saver Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:isScreenSaverEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "loadBMP",
          "package": "sdl2",
          "signature": "CString -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#loadBMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "loadBMP",
          "normalized": "CString-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "BMP",
          "signature": "CString-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:loadBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "loadBMP_RW",
          "package": "sdl2",
          "signature": "Ptr RWops -\u003e CInt -\u003e IO (Ptr Surface)",
          "source": "src/Graphics-UI-SDL-Video.html#loadBMP_RW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "loadBMP_RW",
          "normalized": "Ptr RWops-\u003eCInt-\u003eIO(Ptr Surface)",
          "package": "sdl2",
          "partial": "BMP RW",
          "signature": "Ptr RWops-\u003eCInt-\u003eIO(Ptr Surface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:loadBMP_RW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "lockSurface",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#lockSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "lockSurface",
          "normalized": "Ptr Surface-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface",
          "signature": "Ptr Surface-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:lockSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "lockTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr Rect -\u003e Ptr (Ptr ()) -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#lockTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "lockTexture",
          "normalized": "Texture-\u003ePtr Rect-\u003ePtr(Ptr())-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Texture-\u003ePtr Rect-\u003ePtr(Ptr())-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:lockTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "lowerBlit",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e Ptr Surface -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#lowerBlit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "lowerBlit",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Blit",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:lowerBlit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "lowerBlitScaled",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e Ptr Surface -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#lowerBlitScaled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "lowerBlitScaled",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Blit Scaled",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003ePtr Surface-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:lowerBlitScaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "mapRGB",
          "package": "sdl2",
          "signature": "Ptr PixelFormat -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#mapRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "mapRGB",
          "normalized": "Ptr PixelFormat-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "package": "sdl2",
          "partial": "RGB",
          "signature": "Ptr PixelFormat-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:mapRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "mapRGBA",
          "package": "sdl2",
          "signature": "Ptr PixelFormat -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#mapRGBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "mapRGBA",
          "normalized": "Ptr PixelFormat-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "package": "sdl2",
          "partial": "RGBA",
          "signature": "Ptr PixelFormat-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:mapRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "masksToPixelFormatEnum",
          "package": "sdl2",
          "signature": "CInt -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e Word32 -\u003e IO Word32",
          "source": "src/Graphics-UI-SDL-Video.html#masksToPixelFormatEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "masksToPixelFormatEnum",
          "normalized": "CInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "package": "sdl2",
          "partial": "To Pixel Format Enum",
          "signature": "CInt-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:masksToPixelFormatEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "maximizeWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#maximizeWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "maximizeWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:maximizeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "minimizeWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#minimizeWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "minimizeWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:minimizeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "pixelFormatEnumToMasks",
          "package": "sdl2",
          "signature": "Word32 -\u003e Ptr CInt -\u003e Ptr Word32 -\u003e Ptr Word32 -\u003e Ptr Word32 -\u003e Ptr Word32 -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#pixelFormatEnumToMasks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "pixelFormatEnumToMasks",
          "normalized": "Word-\u003ePtr CInt-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Format Enum To Masks",
          "signature": "Word-\u003ePtr CInt-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:pixelFormatEnumToMasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "queryTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e Word32 -\u003e Ptr CInt -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#queryTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "queryTexture",
          "normalized": "Texture-\u003eWord-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Texture-\u003eWord-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:queryTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "raiseWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#raiseWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "raiseWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:raiseWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderClear",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderClear",
          "normalized": "Renderer-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Clear",
          "signature": "Renderer-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderCopy",
          "package": "sdl2",
          "signature": "Renderer -\u003e Texture -\u003e Ptr Rect -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderCopy",
          "normalized": "Renderer-\u003eTexture-\u003ePtr Rect-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Copy",
          "signature": "Renderer-\u003eTexture-\u003ePtr Rect-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderCopyEx",
          "package": "sdl2",
          "signature": "Renderer -\u003e Texture -\u003e Ptr Rect -\u003e Ptr Rect -\u003e CDouble -\u003e Ptr Point -\u003e RendererFlip -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderCopyEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderCopyEx",
          "normalized": "Renderer-\u003eTexture-\u003ePtr Rect-\u003ePtr Rect-\u003eCDouble-\u003ePtr Point-\u003eRendererFlip-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Copy Ex",
          "signature": "Renderer-\u003eTexture-\u003ePtr Rect-\u003ePtr Rect-\u003eCDouble-\u003ePtr Point-\u003eRendererFlip-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderCopyEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawLine",
          "package": "sdl2",
          "signature": "Renderer -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawLine",
          "normalized": "Renderer-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Line",
          "signature": "Renderer-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawLines",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Point -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawLines",
          "normalized": "Renderer-\u003ePtr Point-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Lines",
          "signature": "Renderer-\u003ePtr Point-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawPoint",
          "package": "sdl2",
          "signature": "Renderer -\u003e CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawPoint",
          "normalized": "Renderer-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Point",
          "signature": "Renderer-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawPoints",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Point -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawPoints",
          "normalized": "Renderer-\u003ePtr Point-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Points",
          "signature": "Renderer-\u003ePtr Point-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawRect",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawRect",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Rect",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawRects",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderDrawRects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderDrawRects",
          "normalized": "Renderer-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Draw Rects",
          "signature": "Renderer-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderDrawRects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderFillRect",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderFillRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderFillRect",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Fill Rect",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderFillRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderFillRects",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderFillRects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderFillRects",
          "normalized": "Renderer-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Fill Rects",
          "signature": "Renderer-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderFillRects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetClipRect",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#renderGetClipRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetClipRect",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Clip Rect",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderGetClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetLogicalSize",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr CInt -\u003e Ptr CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#renderGetLogicalSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetLogicalSize",
          "normalized": "Renderer-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Logical Size",
          "signature": "Renderer-\u003ePtr CInt-\u003ePtr CInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderGetLogicalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetScale",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr CFloat -\u003e Ptr CFloat -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#renderGetScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetScale",
          "normalized": "Renderer-\u003ePtr CFloat-\u003ePtr CFloat-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Scale",
          "signature": "Renderer-\u003ePtr CFloat-\u003ePtr CFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderGetScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetViewport",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#renderGetViewport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderGetViewport",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO()",
          "package": "sdl2",
          "partial": "Get Viewport",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderGetViewport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderPresent",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#renderPresent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderPresent",
          "normalized": "Renderer-\u003eIO()",
          "package": "sdl2",
          "partial": "Present",
          "signature": "Renderer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderReadPixels",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e Word32 -\u003e Ptr () -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderReadPixels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderReadPixels",
          "normalized": "Renderer-\u003ePtr Rect-\u003eWord-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Read Pixels",
          "signature": "Renderer-\u003ePtr Rect-\u003eWord-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderReadPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetClipRect",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderSetClipRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetClipRect",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Clip Rect",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderSetClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetLogicalSize",
          "package": "sdl2",
          "signature": "Renderer -\u003e CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderSetLogicalSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetLogicalSize",
          "normalized": "Renderer-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Logical Size",
          "signature": "Renderer-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderSetLogicalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetScale",
          "package": "sdl2",
          "signature": "Renderer -\u003e CFloat -\u003e CFloat -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderSetScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetScale",
          "normalized": "Renderer-\u003eCFloat-\u003eCFloat-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Scale",
          "signature": "Renderer-\u003eCFloat-\u003eCFloat-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderSetScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetViewport",
          "package": "sdl2",
          "signature": "Renderer -\u003e Ptr Rect -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#renderSetViewport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderSetViewport",
          "normalized": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Set Viewport",
          "signature": "Renderer-\u003ePtr Rect-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderSetViewport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "renderTargetSupported",
          "package": "sdl2",
          "signature": "Renderer -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#renderTargetSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "renderTargetSupported",
          "normalized": "Renderer-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Target Supported",
          "signature": "Renderer-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:renderTargetSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "restoreWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#restoreWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "restoreWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:restoreWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "saveBMP",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#saveBMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "saveBMP",
          "normalized": "Ptr Surface-\u003eCString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "BMP",
          "signature": "Ptr Surface-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:saveBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "saveBMP_RW",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr RWops -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#saveBMP_RW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "saveBMP_RW",
          "normalized": "Ptr Surface-\u003ePtr RWops-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "BMP RW",
          "signature": "Ptr Surface-\u003ePtr RWops-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:saveBMP_RW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setClipRect",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Rect -\u003e IO Bool",
          "source": "src/Graphics-UI-SDL-Video.html#setClipRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setClipRect",
          "normalized": "Ptr Surface-\u003ePtr Rect-\u003eIO Bool",
          "package": "sdl2",
          "partial": "Clip Rect",
          "signature": "Ptr Surface-\u003ePtr Rect-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setClipRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setClipboardText",
          "package": "sdl2",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setClipboardText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setClipboardText",
          "normalized": "CString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Clipboard Text",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setClipboardText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setColorKey",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e CInt -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setColorKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setColorKey",
          "normalized": "Ptr Surface-\u003eCInt-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Color Key",
          "signature": "Ptr Surface-\u003eCInt-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setColorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setPaletteColors",
          "package": "sdl2",
          "signature": "Ptr Palette -\u003e Ptr Color -\u003e CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setPaletteColors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setPaletteColors",
          "normalized": "Ptr Palette-\u003ePtr Color-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Palette Colors",
          "signature": "Ptr Palette-\u003ePtr Color-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setPaletteColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setPixelFormatPalette",
          "package": "sdl2",
          "signature": "Ptr PixelFormat -\u003e Ptr Palette -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setPixelFormatPalette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setPixelFormatPalette",
          "normalized": "Ptr PixelFormat-\u003ePtr Palette-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Pixel Format Palette",
          "signature": "Ptr PixelFormat-\u003ePtr Palette-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setPixelFormatPalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderDrawBlendMode",
          "package": "sdl2",
          "signature": "Renderer -\u003e BlendMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setRenderDrawBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderDrawBlendMode",
          "normalized": "Renderer-\u003eBlendMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Render Draw Blend Mode",
          "signature": "Renderer-\u003eBlendMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setRenderDrawBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderDrawColor",
          "package": "sdl2",
          "signature": "Renderer -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setRenderDrawColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderDrawColor",
          "normalized": "Renderer-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Render Draw Color",
          "signature": "Renderer-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setRenderDrawColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderTarget",
          "package": "sdl2",
          "signature": "Renderer -\u003e Texture -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setRenderTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setRenderTarget",
          "normalized": "Renderer-\u003eTexture-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Render Target",
          "signature": "Renderer-\u003eTexture-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setRenderTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceAlphaMod",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setSurfaceAlphaMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceAlphaMod",
          "normalized": "Ptr Surface-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Alpha Mod",
          "signature": "Ptr Surface-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setSurfaceAlphaMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceBlendMode",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e BlendMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setSurfaceBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceBlendMode",
          "normalized": "Ptr Surface-\u003eBlendMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Blend Mode",
          "signature": "Ptr Surface-\u003eBlendMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setSurfaceBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceColorMod",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setSurfaceColorMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceColorMod",
          "normalized": "Ptr Surface-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Color Mod",
          "signature": "Ptr Surface-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setSurfaceColorMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfacePalette",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e Ptr Palette -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setSurfacePalette",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfacePalette",
          "normalized": "Ptr Surface-\u003ePtr Palette-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface Palette",
          "signature": "Ptr Surface-\u003ePtr Palette-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setSurfacePalette"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceRLE",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setSurfaceRLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setSurfaceRLE",
          "normalized": "Ptr Surface-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Surface RLE",
          "signature": "Ptr Surface-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setSurfaceRLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureAlphaMod",
          "package": "sdl2",
          "signature": "Texture -\u003e Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setTextureAlphaMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureAlphaMod",
          "normalized": "Texture-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Alpha Mod",
          "signature": "Texture-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setTextureAlphaMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureBlendMode",
          "package": "sdl2",
          "signature": "Texture -\u003e BlendMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setTextureBlendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureBlendMode",
          "normalized": "Texture-\u003eBlendMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Blend Mode",
          "signature": "Texture-\u003eBlendMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setTextureBlendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureColorMod",
          "package": "sdl2",
          "signature": "Texture -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setTextureColorMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setTextureColorMod",
          "normalized": "Texture-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture Color Mod",
          "signature": "Texture-\u003eWord-\u003eWord-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setTextureColorMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowBordered",
          "package": "sdl2",
          "signature": "Window -\u003e Bool -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowBordered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowBordered",
          "normalized": "Window-\u003eBool-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Bordered",
          "signature": "Window-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowBordered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowBrightness",
          "package": "sdl2",
          "signature": "Window -\u003e CFloat -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowBrightness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowBrightness",
          "normalized": "Window-\u003eCFloat-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Brightness",
          "signature": "Window-\u003eCFloat-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowBrightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowData",
          "package": "sdl2",
          "signature": "Window -\u003e CString -\u003e Ptr () -\u003e IO (Ptr ())",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowData",
          "normalized": "Window-\u003eCString-\u003ePtr()-\u003eIO(Ptr())",
          "package": "sdl2",
          "partial": "Window Data",
          "signature": "Window-\u003eCString-\u003ePtr()-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowDisplayMode",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr DisplayMode -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowDisplayMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowDisplayMode",
          "normalized": "Window-\u003ePtr DisplayMode-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Display Mode",
          "signature": "Window-\u003ePtr DisplayMode-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowDisplayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowFullscreen",
          "package": "sdl2",
          "signature": "Window -\u003e Word32 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowFullscreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowFullscreen",
          "normalized": "Window-\u003eWord-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Fullscreen",
          "signature": "Window-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowFullscreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowGammaRamp",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr Word16 -\u003e Ptr Word16 -\u003e Ptr Word16 -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowGammaRamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowGammaRamp",
          "normalized": "Window-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Gamma Ramp",
          "signature": "Window-\u003ePtr Word-\u003ePtr Word-\u003ePtr Word-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowGammaRamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowGrab",
          "package": "sdl2",
          "signature": "Window -\u003e Bool -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowGrab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowGrab",
          "normalized": "Window-\u003eBool-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Grab",
          "signature": "Window-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowGrab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowIcon",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr Surface -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowIcon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowIcon",
          "normalized": "Window-\u003ePtr Surface-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Icon",
          "signature": "Window-\u003ePtr Surface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowIcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowMaximumSize",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowMaximumSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowMaximumSize",
          "normalized": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Maximum Size",
          "signature": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowMinimumSize",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowMinimumSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowMinimumSize",
          "normalized": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Minimum Size",
          "signature": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowMinimumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowPosition",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowPosition",
          "normalized": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Position",
          "signature": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowSize",
          "package": "sdl2",
          "signature": "Window -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowSize",
          "normalized": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Size",
          "signature": "Window-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowTitle",
          "package": "sdl2",
          "signature": "Window -\u003e CString -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#setWindowTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "setWindowTitle",
          "normalized": "Window-\u003eCString-\u003eIO()",
          "package": "sdl2",
          "partial": "Window Title",
          "signature": "Window-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:setWindowTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "showMessageBox",
          "package": "sdl2",
          "signature": "Ptr MessageBoxData -\u003e Ptr CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#showMessageBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "showMessageBox",
          "normalized": "Ptr MessageBoxData-\u003ePtr CInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Message Box",
          "signature": "Ptr MessageBoxData-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:showMessageBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "showSimpleMessageBox",
          "package": "sdl2",
          "signature": "Word32 -\u003e CString -\u003e CString -\u003e Window -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#showSimpleMessageBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "showSimpleMessageBox",
          "normalized": "Word-\u003eCString-\u003eCString-\u003eWindow-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Simple Message Box",
          "signature": "Word-\u003eCString-\u003eCString-\u003eWindow-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:showSimpleMessageBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "showWindow",
          "package": "sdl2",
          "signature": "Window -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#showWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "showWindow",
          "normalized": "Window-\u003eIO()",
          "package": "sdl2",
          "partial": "Window",
          "signature": "Window-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:showWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "unionRect",
          "package": "sdl2",
          "signature": "Ptr Rect -\u003e Ptr Rect -\u003e Ptr Rect -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#unionRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "unionRect",
          "normalized": "Ptr Rect-\u003ePtr Rect-\u003ePtr Rect-\u003eIO()",
          "package": "sdl2",
          "partial": "Rect",
          "signature": "Ptr Rect-\u003ePtr Rect-\u003ePtr Rect-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:unionRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "unlockSurface",
          "package": "sdl2",
          "signature": "Ptr Surface -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#unlockSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "unlockSurface",
          "normalized": "Ptr Surface-\u003eIO()",
          "package": "sdl2",
          "partial": "Surface",
          "signature": "Ptr Surface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:unlockSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "unlockTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#unlockTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "unlockTexture",
          "normalized": "Texture-\u003eIO()",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Texture-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:unlockTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "updateTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr Rect -\u003e Ptr () -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#updateTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "updateTexture",
          "normalized": "Texture-\u003ePtr Rect-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Texture",
          "signature": "Texture-\u003ePtr Rect-\u003ePtr()-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:updateTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "updateWindowSurface",
          "package": "sdl2",
          "signature": "Window -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#updateWindowSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "updateWindowSurface",
          "normalized": "Window-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Surface",
          "signature": "Window-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:updateWindowSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "updateWindowSurfaceRects",
          "package": "sdl2",
          "signature": "Window -\u003e Ptr Rect -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#updateWindowSurfaceRects",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "updateWindowSurfaceRects",
          "normalized": "Window-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Window Surface Rects",
          "signature": "Window-\u003ePtr Rect-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:updateWindowSurfaceRects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "updateYUVTexture",
          "package": "sdl2",
          "signature": "Texture -\u003e Ptr Rect -\u003e Ptr Word8 -\u003e CInt -\u003e Ptr Word8 -\u003e CInt -\u003e Ptr Word8 -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#updateYUVTexture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "updateYUVTexture",
          "normalized": "Texture-\u003ePtr Rect-\u003ePtr Word-\u003eCInt-\u003ePtr Word-\u003eCInt-\u003ePtr Word-\u003eCInt-\u003eIO CInt",
          "package": "sdl2",
          "partial": "YUVTexture",
          "signature": "Texture-\u003ePtr Rect-\u003ePtr Word-\u003eCInt-\u003ePtr Word-\u003eCInt-\u003ePtr Word-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:updateYUVTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "videoInit",
          "package": "sdl2",
          "signature": "CString -\u003e IO CInt",
          "source": "src/Graphics-UI-SDL-Video.html#videoInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "videoInit",
          "normalized": "CString-\u003eIO CInt",
          "package": "sdl2",
          "partial": "Init",
          "signature": "CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:videoInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL.Video",
          "name": "videoQuit",
          "package": "sdl2",
          "signature": "IO ()",
          "source": "src/Graphics-UI-SDL-Video.html#videoQuit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI SDL Video",
          "module": "Graphics.UI.SDL.Video",
          "name": "videoQuit",
          "normalized": "IO()",
          "package": "sdl2",
          "partial": "Quit",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL-Video.html#v:videoQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.SDL",
          "name": "SDL",
          "package": "sdl2",
          "source": "src/Graphics-UI-SDL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI SDL",
          "module": "Graphics.UI.SDL",
          "name": "SDL",
          "package": "sdl2",
          "partial": "SDL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sdl2/docs/Graphics-UI-SDL.html#"
      }
    }
  ]
]