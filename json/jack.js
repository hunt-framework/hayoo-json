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
        "word": "jack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "Audio",
          "package": "jack",
          "source": "src/Sound-JACK-Audio.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "Audio",
          "package": "jack",
          "partial": "Audio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "Port",
          "package": "jack",
          "source": "src/Sound-JACK-Audio.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "Port",
          "package": "jack",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "Sample",
          "package": "jack",
          "source": "src/Sound-JACK-Audio.html#Sample",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "Sample",
          "package": "jack",
          "partial": "Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "getBufferArray",
          "package": "jack",
          "signature": "Port dir -\u003e NFrames -\u003e IO (StorableArray NFrames Sample)",
          "source": "src/Sound-JACK-Audio.html#getBufferArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "getBufferArray",
          "normalized": "Port a-\u003eNFrames-\u003eIO(StorableArray NFrames Sample)",
          "package": "jack",
          "partial": "Buffer Array",
          "signature": "Port dir-\u003eNFrames-\u003eIO(StorableArray NFrames Sample)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:getBufferArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "getBufferPtr",
          "package": "jack",
          "signature": "Port dir -\u003e NFrames -\u003e IO (Ptr Sample)",
          "source": "src/Sound-JACK-Audio.html#getBufferPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "getBufferPtr",
          "normalized": "Port a-\u003eNFrames-\u003eIO(Ptr Sample)",
          "package": "jack",
          "partial": "Buffer Ptr",
          "signature": "Port dir-\u003eNFrames-\u003eIO(Ptr Sample)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:getBufferPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "mainMono",
          "package": "jack",
          "signature": "(Sample -\u003e IO Sample) -\u003e IO ()",
          "source": "src/Sound-JACK-Audio.html#mainMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "mainMono",
          "normalized": "(Sample-\u003eIO Sample)-\u003eIO()",
          "package": "jack",
          "partial": "Mono",
          "signature": "(Sample-\u003eIO Sample)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:mainMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "mainStereo",
          "package": "jack",
          "signature": "((Sample, Sample) -\u003e IO (Sample, Sample)) -\u003e IO ()",
          "source": "src/Sound-JACK-Audio.html#mainStereo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "mainStereo",
          "normalized": "((Sample,Sample)-\u003eIO(Sample,Sample))-\u003eIO()",
          "package": "jack",
          "partial": "Stereo",
          "signature": "((Sample,Sample)-\u003eIO(Sample,Sample))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:mainStereo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Sound.JACK.Audio\",\"Sound.JACK.MIDI\"]",
          "name": "withPort",
          "package": "jack",
          "signature": "Client-\u003e String-\u003e (Port dir -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withPort\",\"http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:withPort\"]"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "withPort",
          "normalized": "Client-\u003eString-\u003e(Port a-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
          "package": "jack",
          "partial": "Port",
          "signature": "Client-\u003eString-\u003e(Port dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "withProcessMono",
          "package": "jack",
          "signature": "Client -\u003e Port Input -\u003e (Sample -\u003e IO Sample) -\u003e Port Output -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK-Audio.html#withProcessMono",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "withProcessMono",
          "normalized": "Client-\u003ePort Input-\u003e(Sample-\u003eIO Sample)-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Process Mono",
          "signature": "Client-\u003ePort Input-\u003e(Sample-\u003eIO Sample)-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withProcessMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Audio",
          "name": "withProcessStereo",
          "package": "jack",
          "signature": "Client -\u003e Port Input -\u003e Port Input -\u003e ((Sample, Sample) -\u003e IO (Sample, Sample)) -\u003e Port Output -\u003e Port Output -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK-Audio.html#withProcessStereo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Audio",
          "module": "Sound.JACK.Audio",
          "name": "withProcessStereo",
          "normalized": "Client-\u003ePort Input-\u003ePort Input-\u003e((Sample,Sample)-\u003eIO(Sample,Sample))-\u003ePort Output-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Process Stereo",
          "signature": "Client-\u003ePort Input-\u003ePort Input-\u003e((Sample,Sample)-\u003eIO(Sample,Sample))-\u003ePort Output-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withProcessStereo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "Exception",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "Exception",
          "package": "jack",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "All",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#All",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "All",
          "package": "jack",
          "partial": "All",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "Errno",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#Errno",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "Errno",
          "package": "jack",
          "partial": "Errno",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "PortMismatch",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#PortMismatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "PortMismatch",
          "package": "jack",
          "partial": "Port Mismatch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "PortMismatchKind",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#PortMismatchKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "PortMismatchKind",
          "package": "jack",
          "partial": "Port Mismatch Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortMismatchKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "PortRegister",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#PortRegister",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "PortRegister",
          "package": "jack",
          "partial": "Port Register",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "Status",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "Status",
          "package": "jack",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "ThrowsErrno",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#ThrowsErrno",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "ThrowsErrno",
          "package": "jack",
          "partial": "Throws Errno",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "ThrowsPortMismatch",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#ThrowsPortMismatch",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "ThrowsPortMismatch",
          "package": "jack",
          "partial": "Throws Port Mismatch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsPortMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "ThrowsPortRegister",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#ThrowsPortRegister",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "ThrowsPortRegister",
          "package": "jack",
          "partial": "Throws Port Register",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsPortRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "ThrowsStatus",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#ThrowsStatus",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "ThrowsStatus",
          "package": "jack",
          "partial": "Throws Status",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "ToString",
          "package": "jack",
          "source": "src/Sound-JACK-Exception.html#ToString",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "ToString",
          "package": "jack",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "DirectionMismatch",
          "package": "jack",
          "signature": "DirectionMismatch",
          "source": "src/Sound-JACK-Exception.html#PortMismatchKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "DirectionMismatch",
          "package": "jack",
          "partial": "Direction Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:DirectionMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "Errno",
          "package": "jack",
          "signature": "Errno Errno",
          "source": "src/Sound-JACK-Exception.html#Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "Errno",
          "package": "jack",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "NoErrno",
          "package": "jack",
          "signature": "NoErrno e",
          "source": "src/Sound-JACK-Exception.html#Errno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "NoErrno",
          "package": "jack",
          "partial": "No Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "NoPortMismatch",
          "package": "jack",
          "signature": "NoPortMismatch e",
          "source": "src/Sound-JACK-Exception.html#PortMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "NoPortMismatch",
          "package": "jack",
          "partial": "No Port Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoPortMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "NoPortRegister",
          "package": "jack",
          "signature": "NoPortRegister e",
          "source": "src/Sound-JACK-Exception.html#PortRegister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "NoPortRegister",
          "package": "jack",
          "partial": "No Port Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoPortRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "NoStatus",
          "package": "jack",
          "signature": "NoStatus e",
          "source": "src/Sound-JACK-Exception.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "NoStatus",
          "package": "jack",
          "partial": "No Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "PortMismatch",
          "package": "jack",
          "signature": "PortMismatch PortMismatchKind",
          "source": "src/Sound-JACK-Exception.html#PortMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "PortMismatch",
          "package": "jack",
          "partial": "Port Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:PortMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "PortRegister",
          "package": "jack",
          "signature": "PortRegister",
          "source": "src/Sound-JACK-Exception.html#PortRegister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "PortRegister",
          "package": "jack",
          "partial": "Port Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:PortRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "Status",
          "package": "jack",
          "signature": "Status StatusSet",
          "source": "src/Sound-JACK-Exception.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "Status",
          "package": "jack",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "TypeMismatch",
          "package": "jack",
          "signature": "TypeMismatch",
          "source": "src/Sound-JACK-Exception.html#PortMismatchKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "TypeMismatch",
          "package": "jack",
          "partial": "Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:TypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "errno",
          "package": "jack",
          "signature": "Errno -\u003e e",
          "source": "src/Sound-JACK-Exception.html#errno",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "errno",
          "normalized": "Errno-\u003ea",
          "package": "jack",
          "signature": "Errno-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "portMismatch",
          "package": "jack",
          "signature": "PortMismatchKind -\u003e e",
          "source": "src/Sound-JACK-Exception.html#portMismatch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "portMismatch",
          "normalized": "PortMismatchKind-\u003ea",
          "package": "jack",
          "partial": "Mismatch",
          "signature": "PortMismatchKind-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:portMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "portRegister",
          "package": "jack",
          "signature": "e",
          "source": "src/Sound-JACK-Exception.html#portRegister",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "portRegister",
          "package": "jack",
          "partial": "Register",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:portRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "status",
          "package": "jack",
          "signature": "StatusSet -\u003e e",
          "source": "src/Sound-JACK-Exception.html#status",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "status",
          "normalized": "StatusSet-\u003ea",
          "package": "jack",
          "signature": "StatusSet-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "toString",
          "package": "jack",
          "signature": "e -\u003e String",
          "source": "src/Sound-JACK-Exception.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "jack",
          "partial": "String",
          "signature": "e-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.Exception",
          "name": "toStringWithHead",
          "package": "jack",
          "signature": "All -\u003e String",
          "source": "src/Sound-JACK-Exception.html#toStringWithHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK Exception",
          "module": "Sound.JACK.Exception",
          "name": "toStringWithHead",
          "normalized": "All-\u003eString",
          "package": "jack",
          "partial": "String With Head",
          "signature": "All-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:toStringWithHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "MIDI",
          "package": "jack",
          "source": "src/Sound-JACK-MIDI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "MIDI",
          "package": "jack",
          "partial": "MIDI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "Buffer",
          "package": "jack",
          "source": "src/Sound-JACK-FFI-MIDI.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "Buffer",
          "package": "jack",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "Port",
          "package": "jack",
          "source": "src/Sound-JACK-MIDI.html#Port",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "Port",
          "package": "jack",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a raw JACK MIDI event\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "RawEvent",
          "package": "jack",
          "source": "src/Sound-JACK-FFI-MIDI.html#RawEvent",
          "type": "data"
        },
        "index": {
          "description": "Represents raw JACK MIDI event",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "RawEvent",
          "package": "jack",
          "partial": "Raw Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:RawEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "clearBuffer",
          "package": "jack",
          "signature": "Buffer Output -\u003e IO ()",
          "source": "src/Sound-JACK-MIDI.html#clearBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "clearBuffer",
          "normalized": "Buffer Output-\u003eIO()",
          "package": "jack",
          "partial": "Buffer",
          "signature": "Buffer Output-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:clearBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "getBuffer",
          "package": "jack",
          "signature": "Port dir -\u003e NFrames -\u003e IO (Buffer dir)",
          "source": "src/Sound-JACK-MIDI.html#getBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "getBuffer",
          "normalized": "Port a-\u003eNFrames-\u003eIO(Buffer a)",
          "package": "jack",
          "partial": "Buffer",
          "signature": "Port dir-\u003eNFrames-\u003eIO(Buffer dir)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:getBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an input and an output, and transforms all input events into output\n   events using the given function\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "main",
          "package": "jack",
          "signature": "(NFrames -\u003e (NFrames, T) -\u003e IO (NFrames, T))-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Creates an input and an output and transforms all input events into output events using the given function",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "main",
          "normalized": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eIO()",
          "package": "jack",
          "signature": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an input and an output, and transforms all raw input events into raw output\n   events using the given function\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "mainRaw",
          "package": "jack",
          "signature": "(NFrames -\u003e RawEvent -\u003e IO RawEvent)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Creates an input and an output and transforms all raw input events into raw output events using the given function",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "mainRaw",
          "normalized": "(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003eIO()",
          "package": "jack",
          "partial": "Raw",
          "signature": "(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:mainRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for a raw MIDI event.\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "rawEvent",
          "package": "jack",
          "signature": "NFrames-\u003e ByteString-\u003e RawEvent",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for raw MIDI event",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "rawEvent",
          "normalized": "NFrames-\u003eByteString-\u003eRawEvent",
          "package": "jack",
          "partial": "Event",
          "signature": "NFrames-\u003eByteString-\u003eRawEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "rawEventBuffer",
          "package": "jack",
          "signature": "RawEvent -\u003e ByteString",
          "source": "src/Sound-JACK-MIDI.html#rawEventBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "rawEventBuffer",
          "normalized": "RawEvent-\u003eByteString",
          "package": "jack",
          "partial": "Event Buffer",
          "signature": "RawEvent-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEventBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "rawEventTime",
          "package": "jack",
          "signature": "RawEvent -\u003e NFrames",
          "source": "src/Sound-JACK-MIDI.html#rawEventTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "rawEventTime",
          "normalized": "RawEvent-\u003eNFrames",
          "package": "jack",
          "partial": "Event Time",
          "signature": "RawEvent-\u003eNFrames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEventTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads midi events from an input buffer\nand converts them to a high-level representation.\nMessages are simply ignored if they cannot be parsed.\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "readEventsFromPort",
          "package": "jack",
          "signature": "Port Input -\u003e NFrames -\u003e ExceptionalT e IO (T NFrames T)",
          "source": "src/Sound-JACK-MIDI.html#readEventsFromPort",
          "type": "function"
        },
        "index": {
          "description": "Reads midi events from an input buffer and converts them to high-level representation Messages are simply ignored if they cannot be parsed",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "readEventsFromPort",
          "normalized": "Port Input-\u003eNFrames-\u003eExceptionalT a IO(T NFrames T)",
          "package": "jack",
          "partial": "Events From Port",
          "signature": "Port Input-\u003eNFrames-\u003eExceptionalT e IO(T NFrames T)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readEventsFromPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereads all available MIDI Events on the given PortBuffer\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "readRawEvents",
          "package": "jack",
          "signature": "Buffer Input-\u003e ExceptionalT e IO [RawEvent]",
          "type": "function"
        },
        "index": {
          "description": "reads all available MIDI Events on the given PortBuffer",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "readRawEvents",
          "normalized": "Buffer Input-\u003eExceptionalT a IO[RawEvent]",
          "package": "jack",
          "partial": "Raw Events",
          "signature": "Buffer Input-\u003eExceptionalT e IO[RawEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readRawEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "readRawEventsFromPort",
          "package": "jack",
          "signature": "Port Input -\u003e NFrames -\u003e ExceptionalT e IO [RawEvent]",
          "source": "src/Sound-JACK-MIDI.html#readRawEventsFromPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "readRawEventsFromPort",
          "normalized": "Port Input-\u003eNFrames-\u003eExceptionalT a IO[RawEvent]",
          "package": "jack",
          "partial": "Raw Events From Port",
          "signature": "Port Input-\u003eNFrames-\u003eExceptionalT e IO[RawEvent]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readRawEventsFromPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts high level MIDI Event transformation functions into raw MIDI Event transformation functions\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "toRawEventFunction",
          "package": "jack",
          "signature": "(NFrames -\u003e (NFrames, T) -\u003e IO (NFrames, T))-\u003e NFrames -\u003e RawEvent -\u003e IO RawEvent",
          "type": "function"
        },
        "index": {
          "description": "Converts high level MIDI Event transformation functions into raw MIDI Event transformation functions",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "toRawEventFunction",
          "normalized": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eNFrames-\u003eRawEvent-\u003eIO RawEvent",
          "package": "jack",
          "partial": "Raw Event Function",
          "signature": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eNFrames-\u003eRawEvent-\u003eIO RawEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:toRawEventFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets the process loop of the JACK Client\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "withProcess",
          "package": "jack",
          "signature": "Client-\u003e Port Input-\u003e (NFrames -\u003e RawEvent -\u003e IO RawEvent)-\u003e Port Output-\u003e ExceptionalT e IO a-\u003e ExceptionalT e IO a",
          "type": "function"
        },
        "index": {
          "description": "sets the process loop of the JACK Client",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "withProcess",
          "normalized": "Client-\u003ePort Input-\u003e(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Process",
          "signature": "Client-\u003ePort Input-\u003e(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:withProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK.MIDI",
          "name": "writeEvent",
          "package": "jack",
          "signature": "Buffer Output -\u003e NFrames -\u003e T -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK-MIDI.html#writeEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "writeEvent",
          "normalized": "Buffer Output-\u003eNFrames-\u003eT-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Event",
          "signature": "Buffer Output-\u003eNFrames-\u003eT-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears an output buffer and writes a sequence of events to it.\nThat is, you must only call this function once per callback.\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "writeEventsToPort",
          "package": "jack",
          "signature": "Port Output -\u003e NFrames -\u003e T NFrames T -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK-MIDI.html#writeEventsToPort",
          "type": "function"
        },
        "index": {
          "description": "Clears an output buffer and writes sequence of events to it That is you must only call this function once per callback",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "writeEventsToPort",
          "normalized": "Port Output-\u003eNFrames-\u003eT NFrames T-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Events To Port",
          "signature": "Port Output-\u003eNFrames-\u003eT NFrames T-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeEventsToPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrites a MIDI event to the PortBuffer of a MIDI output or throws eNOBUFS if JackMIDI.buffer is full\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "writeRawEvent",
          "package": "jack",
          "signature": "Buffer Output-\u003e RawEvent-\u003e ExceptionalT e IO ()",
          "type": "function"
        },
        "index": {
          "description": "writes MIDI event to the PortBuffer of MIDI output or throws eNOBUFS if JackMIDI.buffer is full",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "writeRawEvent",
          "normalized": "Buffer Output-\u003eRawEvent-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Raw Event",
          "signature": "Buffer Output-\u003eRawEvent-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeRawEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears an output buffer and writes a sequence of events to it.\nThat is, you must only call this function once per callback.\n\u003c/p\u003e",
          "module": "Sound.JACK.MIDI",
          "name": "writeRawEventsToPort",
          "package": "jack",
          "signature": "Port Output -\u003e NFrames -\u003e [RawEvent] -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK-MIDI.html#writeRawEventsToPort",
          "type": "function"
        },
        "index": {
          "description": "Clears an output buffer and writes sequence of events to it That is you must only call this function once per callback",
          "hierarchy": "Sound JACK MIDI",
          "module": "Sound.JACK.MIDI",
          "name": "writeRawEventsToPort",
          "normalized": "Port Output-\u003eNFrames-\u003e[RawEvent]-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Raw Events To Port",
          "signature": "Port Output-\u003eNFrames-\u003e[RawEvent]-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeRawEventsToPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Jack module defines types and functions that allows you to\nuse the JACK Audio Connection Kit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.JACK",
          "name": "JACK",
          "package": "jack",
          "source": "src/Sound-JACK.html",
          "type": "module"
        },
        "index": {
          "description": "The Jack module defines types and functions that allows you to use the JACK Audio Connection Kit",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "JACK",
          "package": "jack",
          "partial": "JACK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles of Jack clients\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "Client",
          "package": "jack",
          "source": "src/Sound-JACK-Private.html#Client",
          "type": "data"
        },
        "index": {
          "description": "Handles of Jack clients",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Client",
          "package": "jack",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "Direction",
          "package": "jack",
          "source": "src/Sound-JACK.html#Direction",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Direction",
          "package": "jack",
          "partial": "Direction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType argument for Jack input ports\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "Input",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#Input",
          "type": "data"
        },
        "index": {
          "description": "Type argument for Jack input ports",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Input",
          "package": "jack",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresents absolute frame time\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "NFrames",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#NFrames",
          "type": "newtype"
        },
        "index": {
          "description": "represents absolute frame time",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "NFrames",
          "package": "jack",
          "partial": "NFrames",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:NFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType argument for Jack output ports\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "Output",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#Output",
          "type": "data"
        },
        "index": {
          "description": "Type argument for Jack output ports",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Output",
          "package": "jack",
          "partial": "Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "Port",
          "package": "jack",
          "source": "src/Sound-JACK-Private.html#Port",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Port",
          "package": "jack",
          "partial": "Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "PortId",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#PortId",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "PortId",
          "package": "jack",
          "partial": "Port Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of mixed types of ports.\nIt is mainly needed for freeing all allocated ports.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "PortSet",
          "package": "jack",
          "source": "src/Sound-JACK.html#PortSet",
          "type": "data"
        },
        "index": {
          "description": "collection of mixed types of ports It is mainly needed for freeing all allocated ports",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "PortSet",
          "package": "jack",
          "partial": "Port Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJack Port Type\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "PortType",
          "package": "jack",
          "source": "src/Sound-JACK-Private.html#PortType",
          "type": "class"
        },
        "index": {
          "description": "Jack Port Type",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "PortType",
          "package": "jack",
          "partial": "Port Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "Process",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#Process",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "Process",
          "package": "jack",
          "partial": "Process",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType argument for Jack ports\nwhere we do not know\nwhether it is an input or an output port.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "UnknownDirection",
          "package": "jack",
          "source": "src/Sound-JACK.html#UnknownDirection",
          "type": "data"
        },
        "index": {
          "description": "Type argument for Jack ports where we do not know whether it is an input or an output port",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "UnknownDirection",
          "package": "jack",
          "partial": "Unknown Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:UnknownDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType argument for Jack ports where the type of samples transported by the port\nis unknown.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "UnknownType",
          "package": "jack",
          "source": "src/Sound-JACK-FFI.html#UnknownType",
          "type": "data"
        },
        "index": {
          "description": "Type argument for Jack ports where the type of samples transported by the port is unknown",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "UnknownType",
          "package": "jack",
          "partial": "Unknown Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:UnknownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "NFrames",
          "package": "jack",
          "signature": "NFrames Word32",
          "source": "src/Sound-JACK-FFI.html#NFrames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "NFrames",
          "package": "jack",
          "partial": "NFrames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:NFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eactivates the given Jack client\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "activate",
          "package": "jack",
          "signature": "Client -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#activate",
          "type": "function"
        },
        "index": {
          "description": "activates the given Jack client",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "activate",
          "normalized": "Client-\u003eExceptionalT a IO()",
          "package": "jack",
          "signature": "Client-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:activate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecloses the given Jack client without causing any trouble (hopefully)\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "clientClose",
          "package": "jack",
          "signature": "Client -\u003e PortSet -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#clientClose",
          "type": "function"
        },
        "index": {
          "description": "closes the given Jack client without causing any trouble hopefully",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "clientClose",
          "normalized": "Client-\u003ePortSet-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Close",
          "signature": "Client-\u003ePortSet-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:clientClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "connect",
          "package": "jack",
          "signature": "Client -\u003e String -\u003e String -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "connect",
          "normalized": "Client-\u003eString-\u003eString-\u003eExceptionalT a IO()",
          "package": "jack",
          "signature": "Client-\u003eString-\u003eString-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "deactivate",
          "package": "jack",
          "signature": "Client -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#deactivate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "deactivate",
          "normalized": "Client-\u003eExceptionalT a IO()",
          "package": "jack",
          "signature": "Client-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:deactivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "disposeClient",
          "package": "jack",
          "signature": "Client -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#disposeClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "disposeClient",
          "normalized": "Client-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Client",
          "signature": "Client-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:disposeClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "disposePort",
          "package": "jack",
          "signature": "Client -\u003e Port typ dir -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#disposePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "disposePort",
          "normalized": "Client-\u003ePort a b-\u003eExceptionalT c IO()",
          "package": "jack",
          "partial": "Port",
          "signature": "Client-\u003ePort typ dir-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:disposePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the names of all existing ports.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "getPorts",
          "package": "jack",
          "signature": "Client-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Returns the names of all existing ports",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "getPorts",
          "normalized": "Client-\u003eIO[String]",
          "package": "jack",
          "partial": "Ports",
          "signature": "Client-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:getPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "getSampleRate",
          "package": "jack",
          "signature": "Client -\u003e IO Int",
          "source": "src/Sound-JACK.html#getSampleRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "getSampleRate",
          "normalized": "Client-\u003eIO Int",
          "package": "jack",
          "partial": "Sample Rate",
          "signature": "Client-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:getSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "handleExceptions",
          "package": "jack",
          "signature": "ExceptionalT All IO () -\u003e IO ()",
          "source": "src/Sound-JACK.html#handleExceptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "handleExceptions",
          "normalized": "ExceptionalT All IO()-\u003eIO()",
          "package": "jack",
          "partial": "Exceptions",
          "signature": "ExceptionalT All IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:handleExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "lastFrameTime",
          "package": "jack",
          "signature": "Client -\u003e IO NFrames",
          "source": "src/Sound-JACK.html#lastFrameTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "lastFrameTime",
          "normalized": "Client-\u003eIO NFrames",
          "package": "jack",
          "partial": "Frame Time",
          "signature": "Client-\u003eIO NFrames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:lastFrameTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a client registration callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "makeClientRegistration",
          "package": "jack",
          "signature": "ClientRegistration arg -\u003e IO (FunPtr (ClientRegistration arg))",
          "source": "src/Sound-JACK.html#makeClientRegistration",
          "type": "function"
        },
        "index": {
          "description": "Create client registration callback FunPtr",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "makeClientRegistration",
          "normalized": "ClientRegistration a-\u003eIO(FunPtr(ClientRegistration a))",
          "package": "jack",
          "partial": "Client Registration",
          "signature": "ClientRegistration arg-\u003eIO(FunPtr(ClientRegistration arg))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makeClientRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a port connect callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "makePortConnect",
          "package": "jack",
          "signature": "PortConnect arg -\u003e IO (FunPtr (PortConnect arg))",
          "source": "src/Sound-JACK.html#makePortConnect",
          "type": "function"
        },
        "index": {
          "description": "Create port connect callback FunPtr",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "makePortConnect",
          "normalized": "PortConnect a-\u003eIO(FunPtr(PortConnect a))",
          "package": "jack",
          "partial": "Port Connect",
          "signature": "PortConnect arg-\u003eIO(FunPtr(PortConnect arg))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makePortConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a port registration callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "makePortRegistration",
          "package": "jack",
          "signature": "PortRegistration arg -\u003e IO (FunPtr (PortRegistration arg))",
          "source": "src/Sound-JACK.html#makePortRegistration",
          "type": "function"
        },
        "index": {
          "description": "Create port registration callback FunPtr",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "makePortRegistration",
          "normalized": "PortRegistration a-\u003eIO(FunPtr(PortRegistration a))",
          "package": "jack",
          "partial": "Port Registration",
          "signature": "PortRegistration arg-\u003eIO(FunPtr(PortRegistration arg))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makePortRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "makeProcess",
          "package": "jack",
          "signature": "Process arg -\u003e IO (FunPtr (Process arg))",
          "source": "src/Sound-JACK.html#makeProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "makeProcess",
          "normalized": "Process a-\u003eIO(FunPtr(Process a))",
          "package": "jack",
          "partial": "Process",
          "signature": "Process arg-\u003eIO(FunPtr(Process arg))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makeProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "narrowPort",
          "package": "jack",
          "signature": "Port UnknownType UnknownDirection -\u003e ExceptionalT e IO (Port typ dir)",
          "source": "src/Sound-JACK.html#narrowPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "narrowPort",
          "normalized": "Port UnknownType UnknownDirection-\u003eExceptionalT a IO(Port b c)",
          "package": "jack",
          "partial": "Port",
          "signature": "Port UnknownType UnknownDirection-\u003eExceptionalT e IO(Port typ dir)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "narrowPortDirection",
          "package": "jack",
          "signature": "Port typ UnknownDirection -\u003e ExceptionalT e IO (Port typ dir)",
          "source": "src/Sound-JACK.html#narrowPortDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "narrowPortDirection",
          "normalized": "Port a UnknownDirection-\u003eExceptionalT b IO(Port a c)",
          "package": "jack",
          "partial": "Port Direction",
          "signature": "Port typ UnknownDirection-\u003eExceptionalT e IO(Port typ dir)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPortDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "narrowPortType",
          "package": "jack",
          "signature": "Port UnknownType dir -\u003e ExceptionalT e IO (Port typ dir)",
          "source": "src/Sound-JACK.html#narrowPortType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "narrowPortType",
          "normalized": "Port UnknownType a-\u003eExceptionalT b IO(Port c a)",
          "package": "jack",
          "partial": "Port Type",
          "signature": "Port UnknownType dir-\u003eExceptionalT e IO(Port typ dir)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPortType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new Jack client.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "newClient",
          "package": "jack",
          "signature": "String-\u003e String-\u003e ExceptionalT e IO Client",
          "type": "function"
        },
        "index": {
          "description": "Constructs new Jack client",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "newClient",
          "normalized": "String-\u003eString-\u003eExceptionalT a IO Client",
          "package": "jack",
          "partial": "Client",
          "signature": "String-\u003eString-\u003eExceptionalT e IO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new JACK client with the \u003ccode\u003edefault\u003c/code\u003e server\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "newClientDefault",
          "package": "jack",
          "signature": "String-\u003e ExceptionalT e IO Client",
          "type": "function"
        },
        "index": {
          "description": "Creates new JACK client with the default server",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "newClientDefault",
          "normalized": "String-\u003eExceptionalT a IO Client",
          "package": "jack",
          "partial": "Client Default",
          "signature": "String-\u003eExceptionalT e IO Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newClientDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBetter use \u003ccode\u003e\u003ca\u003ewithPort\u003c/a\u003e\u003c/code\u003e that also handles freeing the port.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "newPort",
          "package": "jack",
          "signature": "Client-\u003e String-\u003e ExceptionalT e IO (Port typ dir)",
          "type": "function"
        },
        "index": {
          "description": "Better use withPort that also handles freeing the port",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "newPort",
          "normalized": "Client-\u003eString-\u003eExceptionalT a IO(Port b c)",
          "package": "jack",
          "partial": "Port",
          "signature": "Client-\u003eString-\u003eExceptionalT e IO(Port typ dir)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "nframesBounds",
          "package": "jack",
          "signature": "NFrames -\u003e (NFrames, NFrames)",
          "source": "src/Sound-JACK-FFI.html#nframesBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "nframesBounds",
          "normalized": "NFrames-\u003e(NFrames,NFrames)",
          "package": "jack",
          "partial": "Bounds",
          "signature": "NFrames-\u003e(NFrames,NFrames)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:nframesBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "nframesIndices",
          "package": "jack",
          "signature": "NFrames -\u003e [NFrames]",
          "source": "src/Sound-JACK-FFI.html#nframesIndices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "nframesIndices",
          "normalized": "NFrames-\u003e[NFrames]",
          "package": "jack",
          "partial": "Indices",
          "signature": "NFrames-\u003e[NFrames]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:nframesIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "portById",
          "package": "jack",
          "signature": "Client -\u003e PortId -\u003e IO (Port UnknownType UnknownDirection)",
          "source": "src/Sound-JACK.html#portById",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "portById",
          "normalized": "Client-\u003ePortId-\u003eIO(Port UnknownType UnknownDirection)",
          "package": "jack",
          "partial": "By Id",
          "signature": "Client-\u003ePortId-\u003eIO(Port UnknownType UnknownDirection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "portByName",
          "package": "jack",
          "signature": "Client -\u003e String -\u003e IO (Port UnknownType UnknownDirection)",
          "source": "src/Sound-JACK.html#portByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "portByName",
          "normalized": "Client-\u003eString-\u003eIO(Port UnknownType UnknownDirection)",
          "package": "jack",
          "partial": "By Name",
          "signature": "Client-\u003eString-\u003eIO(Port UnknownType UnknownDirection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the port names a given port is connected to.\n\u003c/p\u003e\u003cp\u003eThis function must not be called from a JACK event callback.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "portGetAllConnections",
          "package": "jack",
          "signature": "Client -\u003e Port typ dir -\u003e IO [String]",
          "source": "src/Sound-JACK.html#portGetAllConnections",
          "type": "function"
        },
        "index": {
          "description": "Return all the port names given port is connected to This function must not be called from JACK event callback",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "portGetAllConnections",
          "normalized": "Client-\u003ePort a b-\u003eIO[String]",
          "package": "jack",
          "partial": "Get All Connections",
          "signature": "Client-\u003ePort typ dir-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portGetAllConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the full port name, including the \u003ccode\u003eclient_name:\u003c/code\u003e prefix.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "portName",
          "package": "jack",
          "signature": "Port typ dir -\u003e IO String",
          "source": "src/Sound-JACK.html#portName",
          "type": "function"
        },
        "index": {
          "description": "Return the full port name including the client name prefix",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "portName",
          "normalized": "Port a b-\u003eIO String",
          "package": "jack",
          "partial": "Name",
          "signature": "Port typ dir-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the short port name, not including the \u003ccode\u003eclient_name:\u003c/code\u003e prefix.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "portShortName",
          "package": "jack",
          "signature": "Port typ dir -\u003e IO String",
          "source": "src/Sound-JACK.html#portShortName",
          "type": "function"
        },
        "index": {
          "description": "Return the short port name not including the client name prefix",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "portShortName",
          "normalized": "Port a b-\u003eIO String",
          "package": "jack",
          "partial": "Short Name",
          "signature": "Port typ dir-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portShortName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "quit",
          "package": "jack",
          "signature": "MVar () -\u003e Client -\u003e PortSet -\u003e IO ()",
          "source": "src/Sound-JACK.html#quit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "quit",
          "normalized": "MVar()-\u003eClient-\u003ePortSet-\u003eIO()",
          "package": "jack",
          "signature": "MVar()-\u003eClient-\u003ePortSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the client registration callback.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "setClientRegistration",
          "package": "jack",
          "signature": "Client -\u003e FunPtr (ClientRegistration arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#setClientRegistration",
          "type": "function"
        },
        "index": {
          "description": "Set the client registration callback",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setClientRegistration",
          "normalized": "Client-\u003eFunPtr(ClientRegistration a)-\u003ePtr a-\u003eExceptionalT b IO()",
          "package": "jack",
          "partial": "Client Registration",
          "signature": "Client-\u003eFunPtr(ClientRegistration arg)-\u003ePtr arg-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setClientRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "setOfPort",
          "package": "jack",
          "signature": "Port typ dir -\u003e PortSet",
          "source": "src/Sound-JACK.html#setOfPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setOfPort",
          "normalized": "Port a b-\u003ePortSet",
          "package": "jack",
          "partial": "Of Port",
          "signature": "Port typ dir-\u003ePortSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setOfPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "setOfPorts",
          "package": "jack",
          "signature": "[Port typ dir] -\u003e PortSet",
          "source": "src/Sound-JACK.html#setOfPorts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setOfPorts",
          "normalized": "[Port a b]-\u003ePortSet",
          "package": "jack",
          "partial": "Of Ports",
          "signature": "[Port typ dir]-\u003ePortSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setOfPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the port connect callback.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "setPortConnect",
          "package": "jack",
          "signature": "Client -\u003e FunPtr (PortConnect arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#setPortConnect",
          "type": "function"
        },
        "index": {
          "description": "Set the port connect callback",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setPortConnect",
          "normalized": "Client-\u003eFunPtr(PortConnect a)-\u003ePtr a-\u003eExceptionalT b IO()",
          "package": "jack",
          "partial": "Port Connect",
          "signature": "Client-\u003eFunPtr(PortConnect arg)-\u003ePtr arg-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setPortConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the port registration callback.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "setPortRegistration",
          "package": "jack",
          "signature": "Client -\u003e FunPtr (PortRegistration arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#setPortRegistration",
          "type": "function"
        },
        "index": {
          "description": "Set the port registration callback",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setPortRegistration",
          "normalized": "Client-\u003eFunPtr(PortRegistration a)-\u003ePtr a-\u003eExceptionalT b IO()",
          "package": "jack",
          "partial": "Port Registration",
          "signature": "Client-\u003eFunPtr(PortRegistration arg)-\u003ePtr arg-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setPortRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "setProcess",
          "package": "jack",
          "signature": "Client -\u003e FunPtr (Process arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#setProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "setProcess",
          "normalized": "Client-\u003eFunPtr(Process a)-\u003ePtr a-\u003eExceptionalT b IO()",
          "package": "jack",
          "partial": "Process",
          "signature": "Client-\u003eFunPtr(Process arg)-\u003ePtr arg-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "switchUnknownDirectionPort",
          "package": "jack",
          "signature": "Port typ UnknownDirection -\u003e (Port typ Input -\u003e ExceptionalT e IO a) -\u003e (Port typ Output -\u003e ExceptionalT e IO a) -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#switchUnknownDirectionPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "switchUnknownDirectionPort",
          "normalized": "Port a UnknownDirection-\u003e(Port a Input-\u003eExceptionalT b IO c)-\u003e(Port a Output-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
          "package": "jack",
          "partial": "Unknown Direction Port",
          "signature": "Port typ UnknownDirection-\u003e(Port typ Input-\u003eExceptionalT e IO a)-\u003e(Port typ Output-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:switchUnknownDirectionPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "switchUnknownTypePort",
          "package": "jack",
          "signature": "Port UnknownType dir -\u003e (Port CFloat dir -\u003e ExceptionalT e IO a) -\u003e (Port EventBuffer dir -\u003e ExceptionalT e IO a) -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#switchUnknownTypePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "switchUnknownTypePort",
          "normalized": "Port UnknownType a-\u003e(Port CFloat a-\u003eExceptionalT b IO c)-\u003e(Port EventBuffer a-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
          "package": "jack",
          "partial": "Unknown Type Port",
          "signature": "Port UnknownType dir-\u003e(Port CFloat dir-\u003eExceptionalT e IO a)-\u003e(Port EventBuffer dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:switchUnknownTypePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "waitForBreak",
          "package": "jack",
          "signature": "IO ()",
          "source": "src/Sound-JACK.html#waitForBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "waitForBreak",
          "normalized": "IO()",
          "package": "jack",
          "partial": "For Break",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:waitForBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "waitForBreakAndClose",
          "package": "jack",
          "signature": "Client -\u003e PortSet -\u003e IO ()",
          "source": "src/Sound-JACK.html#waitForBreakAndClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "waitForBreakAndClose",
          "normalized": "Client-\u003ePortSet-\u003eIO()",
          "package": "jack",
          "partial": "For Break And Close",
          "signature": "Client-\u003ePortSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:waitForBreakAndClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withActivation",
          "package": "jack",
          "signature": "Client -\u003e ExceptionalT e IO () -\u003e ExceptionalT e IO ()",
          "source": "src/Sound-JACK.html#withActivation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withActivation",
          "normalized": "Client-\u003eExceptionalT a IO()-\u003eExceptionalT a IO()",
          "package": "jack",
          "partial": "Activation",
          "signature": "Client-\u003eExceptionalT e IO()-\u003eExceptionalT e IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withActivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a block of code with a newly allocated client.\nDo not use the client outside the block.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "withClient",
          "package": "jack",
          "signature": "String-\u003e String-\u003e (Client -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run block of code with newly allocated client Do not use the client outside the block",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withClient",
          "normalized": "String-\u003eString-\u003e(Client-\u003eExceptionalT a IO b)-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Client",
          "signature": "String-\u003eString-\u003e(Client-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withClientDefault",
          "package": "jack",
          "signature": "String-\u003e (Client -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withClientDefault",
          "normalized": "String-\u003e(Client-\u003eExceptionalT a IO b)-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Client Default",
          "signature": "String-\u003e(Client-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClientDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withClientRegistration",
          "package": "jack",
          "signature": "Client -\u003e (String -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#withClientRegistration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withClientRegistration",
          "normalized": "Client-\u003e(String-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Client Registration",
          "signature": "Client-\u003e(String-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClientRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new port for the given client and delete it after usage.\nThe port manages audio or MIDI data in input or output direction\ndepending on the Port type.\nUsually the required port type can be inferred from following actions\nthat use that port.\n\u003c/p\u003e\u003cp\u003eDo not use the port outside the enclosed block.\n\u003c/p\u003e",
          "module": "Sound.JACK",
          "name": "withPort",
          "package": "jack",
          "signature": "Client-\u003e String-\u003e (Port typ dir -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
          "type": "function"
        },
        "index": {
          "description": "Creates new port for the given client and delete it after usage The port manages audio or MIDI data in input or output direction depending on the Port type Usually the required port type can be inferred from following actions that use that port Do not use the port outside the enclosed block",
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withPort",
          "normalized": "Client-\u003eString-\u003e(Port a b-\u003eExceptionalT c IO d)-\u003eExceptionalT c IO d",
          "package": "jack",
          "partial": "Port",
          "signature": "Client-\u003eString-\u003e(Port typ dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withPortConnect",
          "package": "jack",
          "signature": "Client -\u003e (PortId -\u003e PortId -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#withPortConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withPortConnect",
          "normalized": "Client-\u003e(PortId-\u003ePortId-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Port Connect",
          "signature": "Client-\u003e(PortId-\u003ePortId-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPortConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withPortRegistration",
          "package": "jack",
          "signature": "Client -\u003e (PortId -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#withPortRegistration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withPortRegistration",
          "normalized": "Client-\u003e(PortId-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Port Registration",
          "signature": "Client-\u003e(PortId-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPortRegistration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.JACK",
          "name": "withProcess",
          "package": "jack",
          "signature": "Client -\u003e (NFrames -\u003e ExceptionalT Errno IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
          "source": "src/Sound-JACK.html#withProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound JACK",
          "module": "Sound.JACK",
          "name": "withProcess",
          "normalized": "Client-\u003e(NFrames-\u003eExceptionalT Errno IO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
          "package": "jack",
          "partial": "Process",
          "signature": "Client-\u003e(NFrames-\u003eExceptionalT Errno IO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withProcess"
      }
    }
  ]
]