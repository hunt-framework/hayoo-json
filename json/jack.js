[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "module",
        "fct-source": "src/Sound-JACK-Audio.html",
        "fct-type": "module",
        "title": "Audio"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "Audio",
        "normalized": "",
        "package": "jack",
        "partial": "Audio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#t:Port",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "type",
        "fct-source": "src/Sound-JACK-Audio.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "Port",
        "normalized": "",
        "package": "jack",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#t:Sample",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "type",
        "fct-source": "src/Sound-JACK-Audio.html#Sample",
        "fct-type": "type",
        "title": "Sample"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "Sample",
        "normalized": "",
        "package": "jack",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:getBufferArray",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "Port dir -\u003e NFrames -\u003e IO (StorableArray NFrames Sample)",
        "fct-source": "src/Sound-JACK-Audio.html#getBufferArray",
        "fct-type": "function",
        "title": "getBufferArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "getBufferArray",
        "normalized": "Port a-\u003eNFrames-\u003eIO(StorableArray NFrames Sample)",
        "package": "jack",
        "partial": "Buffer Array",
        "signature": "Port dir-\u003eNFrames-\u003eIO(StorableArray NFrames Sample)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:getBufferPtr",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "Port dir -\u003e NFrames -\u003e IO (Ptr Sample)",
        "fct-source": "src/Sound-JACK-Audio.html#getBufferPtr",
        "fct-type": "function",
        "title": "getBufferPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "getBufferPtr",
        "normalized": "Port a-\u003eNFrames-\u003eIO(Ptr Sample)",
        "package": "jack",
        "partial": "Buffer Ptr",
        "signature": "Port dir-\u003eNFrames-\u003eIO(Ptr Sample)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:mainMono",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "(Sample -\u003e IO Sample) -\u003e IO ()",
        "fct-source": "src/Sound-JACK-Audio.html#mainMono",
        "fct-type": "function",
        "title": "mainMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "mainMono",
        "normalized": "(Sample-\u003eIO Sample)-\u003eIO()",
        "package": "jack",
        "partial": "Mono",
        "signature": "(Sample-\u003eIO Sample)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:mainStereo",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "((Sample, Sample) -\u003e IO (Sample, Sample)) -\u003e IO ()",
        "fct-source": "src/Sound-JACK-Audio.html#mainStereo",
        "fct-type": "function",
        "title": "mainStereo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "mainStereo",
        "normalized": "((Sample,Sample)-\u003eIO(Sample,Sample))-\u003eIO()",
        "package": "jack",
        "partial": "Stereo",
        "signature": "((Sample,Sample)-\u003eIO(Sample,Sample))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withPort",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e String-\u003e (Port dir -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "withPort",
        "normalized": "Client-\u003eString-\u003e(Port a-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
        "package": "jack",
        "partial": "Port",
        "signature": "Client-\u003eString-\u003e(Port dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withProcessMono",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e Port Input -\u003e (Sample -\u003e IO Sample) -\u003e Port Output -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK-Audio.html#withProcessMono",
        "fct-type": "function",
        "title": "withProcessMono"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "withProcessMono",
        "normalized": "Client-\u003ePort Input-\u003e(Sample-\u003eIO Sample)-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Process Mono",
        "signature": "Client-\u003ePort Input-\u003e(Sample-\u003eIO Sample)-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Audio.html#v:withProcessStereo",
      "description": {
        "fct-module": "Sound.JACK.Audio",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e Port Input -\u003e Port Input -\u003e ((Sample, Sample) -\u003e IO (Sample, Sample)) -\u003e Port Output -\u003e Port Output -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK-Audio.html#withProcessStereo",
        "fct-type": "function",
        "title": "withProcessStereo"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Audio",
        "module": "Sound.JACK.Audio",
        "name": "withProcessStereo",
        "normalized": "Client-\u003ePort Input-\u003ePort Input-\u003e((Sample,Sample)-\u003eIO(Sample,Sample))-\u003ePort Output-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Process Stereo",
        "signature": "Client-\u003ePort Input-\u003ePort Input-\u003e((Sample,Sample)-\u003eIO(Sample,Sample))-\u003ePort Output-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "module",
        "fct-source": "src/Sound-JACK-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "jack",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:All",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "type",
        "fct-source": "src/Sound-JACK-Exception.html#All",
        "fct-type": "type",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "All",
        "normalized": "",
        "package": "jack",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:Errno",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Exception.html#Errno",
        "fct-type": "data",
        "title": "Errno"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "Errno",
        "normalized": "",
        "package": "jack",
        "partial": "Errno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatch",
        "fct-type": "data",
        "title": "PortMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "PortMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "Port Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortMismatchKind",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatchKind",
        "fct-type": "data",
        "title": "PortMismatchKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "PortMismatchKind",
        "normalized": "",
        "package": "jack",
        "partial": "Port Mismatch Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:PortRegister",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Exception.html#PortRegister",
        "fct-type": "data",
        "title": "PortRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "PortRegister",
        "normalized": "",
        "package": "jack",
        "partial": "Port Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:Status",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Exception.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "Status",
        "normalized": "",
        "package": "jack",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsErrno",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Exception.html#ThrowsErrno",
        "fct-type": "class",
        "title": "ThrowsErrno"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "ThrowsErrno",
        "normalized": "",
        "package": "jack",
        "partial": "Throws Errno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsPortMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Exception.html#ThrowsPortMismatch",
        "fct-type": "class",
        "title": "ThrowsPortMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "ThrowsPortMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "Throws Port Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsPortRegister",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Exception.html#ThrowsPortRegister",
        "fct-type": "class",
        "title": "ThrowsPortRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "ThrowsPortRegister",
        "normalized": "",
        "package": "jack",
        "partial": "Throws Port Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ThrowsStatus",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Exception.html#ThrowsStatus",
        "fct-type": "class",
        "title": "ThrowsStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "ThrowsStatus",
        "normalized": "",
        "package": "jack",
        "partial": "Throws Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#t:ToString",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Exception.html#ToString",
        "fct-type": "class",
        "title": "ToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "ToString",
        "normalized": "",
        "package": "jack",
        "partial": "To String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:DirectionMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "DirectionMismatch",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatchKind",
        "fct-type": "function",
        "title": "DirectionMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "DirectionMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "Direction Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:Errno",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "Errno Errno",
        "fct-source": "src/Sound-JACK-Exception.html#Errno",
        "fct-type": "function",
        "title": "Errno"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "Errno",
        "normalized": "",
        "package": "jack",
        "partial": "Errno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoErrno",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "NoErrno e",
        "fct-source": "src/Sound-JACK-Exception.html#Errno",
        "fct-type": "function",
        "title": "NoErrno"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "NoErrno",
        "normalized": "",
        "package": "jack",
        "partial": "No Errno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoPortMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "NoPortMismatch e",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatch",
        "fct-type": "function",
        "title": "NoPortMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "NoPortMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "No Port Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoPortRegister",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "NoPortRegister e",
        "fct-source": "src/Sound-JACK-Exception.html#PortRegister",
        "fct-type": "function",
        "title": "NoPortRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "NoPortRegister",
        "normalized": "",
        "package": "jack",
        "partial": "No Port Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:NoStatus",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "NoStatus e",
        "fct-source": "src/Sound-JACK-Exception.html#Status",
        "fct-type": "function",
        "title": "NoStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "NoStatus",
        "normalized": "",
        "package": "jack",
        "partial": "No Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:PortMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "PortMismatch PortMismatchKind",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatch",
        "fct-type": "function",
        "title": "PortMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "PortMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "Port Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:PortRegister",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "PortRegister",
        "fct-source": "src/Sound-JACK-Exception.html#PortRegister",
        "fct-type": "function",
        "title": "PortRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "PortRegister",
        "normalized": "",
        "package": "jack",
        "partial": "Port Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:Status",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "Status StatusSet",
        "fct-source": "src/Sound-JACK-Exception.html#Status",
        "fct-type": "function",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "Status",
        "normalized": "",
        "package": "jack",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:TypeMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "TypeMismatch",
        "fct-source": "src/Sound-JACK-Exception.html#PortMismatchKind",
        "fct-type": "function",
        "title": "TypeMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "TypeMismatch",
        "normalized": "",
        "package": "jack",
        "partial": "Type Mismatch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:errno",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "Errno -\u003e e",
        "fct-source": "src/Sound-JACK-Exception.html#errno",
        "fct-type": "method",
        "title": "errno"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "errno",
        "normalized": "Errno-\u003ea",
        "package": "jack",
        "partial": "",
        "signature": "Errno-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:portMismatch",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "PortMismatchKind -\u003e e",
        "fct-source": "src/Sound-JACK-Exception.html#portMismatch",
        "fct-type": "method",
        "title": "portMismatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "portMismatch",
        "normalized": "PortMismatchKind-\u003ea",
        "package": "jack",
        "partial": "Mismatch",
        "signature": "PortMismatchKind-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:portRegister",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "e",
        "fct-source": "src/Sound-JACK-Exception.html#portRegister",
        "fct-type": "method",
        "title": "portRegister"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "portRegister",
        "normalized": "",
        "package": "jack",
        "partial": "Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:status",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "StatusSet -\u003e e",
        "fct-source": "src/Sound-JACK-Exception.html#status",
        "fct-type": "method",
        "title": "status"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "status",
        "normalized": "StatusSet-\u003ea",
        "package": "jack",
        "partial": "",
        "signature": "StatusSet-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:toString",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "e -\u003e String",
        "fct-source": "src/Sound-JACK-Exception.html#toString",
        "fct-type": "method",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "jack",
        "partial": "String",
        "signature": "e-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-Exception.html#v:toStringWithHead",
      "description": {
        "fct-module": "Sound.JACK.Exception",
        "fct-package": "jack",
        "fct-signature": "All -\u003e String",
        "fct-source": "src/Sound-JACK-Exception.html#toStringWithHead",
        "fct-type": "function",
        "title": "toStringWithHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK Exception",
        "module": "Sound.JACK.Exception",
        "name": "toStringWithHead",
        "normalized": "All-\u003eString",
        "package": "jack",
        "partial": "String With Head",
        "signature": "All-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "module",
        "fct-source": "src/Sound-JACK-MIDI.html",
        "fct-type": "module",
        "title": "MIDI"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "MIDI",
        "normalized": "",
        "package": "jack",
        "partial": "MIDI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:Buffer",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI-MIDI.html#Buffer",
        "fct-type": "data",
        "title": "Buffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "Buffer",
        "normalized": "",
        "package": "jack",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:Port",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "type",
        "fct-source": "src/Sound-JACK-MIDI.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "Port",
        "normalized": "",
        "package": "jack",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#t:RawEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a raw JACK MIDI event\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI-MIDI.html#RawEvent",
        "fct-type": "data",
        "title": "RawEvent"
      },
      "index": {
        "description": "Represents raw JACK MIDI event",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "RawEvent",
        "normalized": "",
        "package": "jack",
        "partial": "Raw Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:clearBuffer",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Buffer Output -\u003e IO ()",
        "fct-source": "src/Sound-JACK-MIDI.html#clearBuffer",
        "fct-type": "function",
        "title": "clearBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "clearBuffer",
        "normalized": "Buffer Output-\u003eIO()",
        "package": "jack",
        "partial": "Buffer",
        "signature": "Buffer Output-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:getBuffer",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Port dir -\u003e NFrames -\u003e IO (Buffer dir)",
        "fct-source": "src/Sound-JACK-MIDI.html#getBuffer",
        "fct-type": "function",
        "title": "getBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "getBuffer",
        "normalized": "Port a-\u003eNFrames-\u003eIO(Buffer a)",
        "package": "jack",
        "partial": "Buffer",
        "signature": "Port dir-\u003eNFrames-\u003eIO(Buffer dir)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:main",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an input and an output, and transforms all input events into output\n   events using the given function\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "(NFrames -\u003e (NFrames, T) -\u003e IO (NFrames, T))-\u003e IO ()",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "Creates an input and an output and transforms all input events into output events using the given function",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "main",
        "normalized": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eIO()",
        "package": "jack",
        "partial": "",
        "signature": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:mainRaw",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an input and an output, and transforms all raw input events into raw output\n   events using the given function\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "(NFrames -\u003e RawEvent -\u003e IO RawEvent)-\u003e IO ()",
        "fct-type": "function",
        "title": "mainRaw"
      },
      "index": {
        "description": "Creates an input and an output and transforms all raw input events into raw output events using the given function",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "mainRaw",
        "normalized": "(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003eIO()",
        "package": "jack",
        "partial": "Raw",
        "signature": "(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for a raw MIDI event.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "NFrames-\u003e ByteString-\u003e RawEvent",
        "fct-type": "function",
        "title": "rawEvent"
      },
      "index": {
        "description": "Smart constructor for raw MIDI event",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "rawEvent",
        "normalized": "NFrames-\u003eByteString-\u003eRawEvent",
        "package": "jack",
        "partial": "Event",
        "signature": "NFrames-\u003eByteString-\u003eRawEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEventBuffer",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "RawEvent -\u003e ByteString",
        "fct-source": "src/Sound-JACK-MIDI.html#rawEventBuffer",
        "fct-type": "function",
        "title": "rawEventBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "rawEventBuffer",
        "normalized": "RawEvent-\u003eByteString",
        "package": "jack",
        "partial": "Event Buffer",
        "signature": "RawEvent-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:rawEventTime",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "RawEvent -\u003e NFrames",
        "fct-source": "src/Sound-JACK-MIDI.html#rawEventTime",
        "fct-type": "function",
        "title": "rawEventTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "rawEventTime",
        "normalized": "RawEvent-\u003eNFrames",
        "package": "jack",
        "partial": "Event Time",
        "signature": "RawEvent-\u003eNFrames"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readEventsFromPort",
      "description": {
        "fct-descr": "\u003cp\u003eReads midi events from an input buffer\nand converts them to a high-level representation.\nMessages are simply ignored if they cannot be parsed.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Port Input -\u003e NFrames -\u003e ExceptionalT e IO (T NFrames T)",
        "fct-source": "src/Sound-JACK-MIDI.html#readEventsFromPort",
        "fct-type": "function",
        "title": "readEventsFromPort"
      },
      "index": {
        "description": "Reads midi events from an input buffer and converts them to high-level representation Messages are simply ignored if they cannot be parsed",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "readEventsFromPort",
        "normalized": "Port Input-\u003eNFrames-\u003eExceptionalT a IO(T NFrames T)",
        "package": "jack",
        "partial": "Events From Port",
        "signature": "Port Input-\u003eNFrames-\u003eExceptionalT e IO(T NFrames T)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readRawEvents",
      "description": {
        "fct-descr": "\u003cp\u003ereads all available MIDI Events on the given PortBuffer\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Buffer Input-\u003e ExceptionalT e IO [RawEvent]",
        "fct-type": "function",
        "title": "readRawEvents"
      },
      "index": {
        "description": "reads all available MIDI Events on the given PortBuffer",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "readRawEvents",
        "normalized": "Buffer Input-\u003eExceptionalT a IO[RawEvent]",
        "package": "jack",
        "partial": "Raw Events",
        "signature": "Buffer Input-\u003eExceptionalT e IO[RawEvent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:readRawEventsFromPort",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Port Input -\u003e NFrames -\u003e ExceptionalT e IO [RawEvent]",
        "fct-source": "src/Sound-JACK-MIDI.html#readRawEventsFromPort",
        "fct-type": "function",
        "title": "readRawEventsFromPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "readRawEventsFromPort",
        "normalized": "Port Input-\u003eNFrames-\u003eExceptionalT a IO[RawEvent]",
        "package": "jack",
        "partial": "Raw Events From Port",
        "signature": "Port Input-\u003eNFrames-\u003eExceptionalT e IO[RawEvent]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:toRawEventFunction",
      "description": {
        "fct-descr": "\u003cp\u003eConverts high level MIDI Event transformation functions into raw MIDI Event transformation functions\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "(NFrames -\u003e (NFrames, T) -\u003e IO (NFrames, T))-\u003e NFrames -\u003e RawEvent -\u003e IO RawEvent",
        "fct-type": "function",
        "title": "toRawEventFunction"
      },
      "index": {
        "description": "Converts high level MIDI Event transformation functions into raw MIDI Event transformation functions",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "toRawEventFunction",
        "normalized": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eNFrames-\u003eRawEvent-\u003eIO RawEvent",
        "package": "jack",
        "partial": "Raw Event Function",
        "signature": "(NFrames-\u003e(NFrames,T)-\u003eIO(NFrames,T))-\u003eNFrames-\u003eRawEvent-\u003eIO RawEvent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:withPort",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e String-\u003e (Port dir -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "withPort",
        "normalized": "Client-\u003eString-\u003e(Port a-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
        "package": "jack",
        "partial": "Port",
        "signature": "Client-\u003eString-\u003e(Port dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:withProcess",
      "description": {
        "fct-descr": "\u003cp\u003esets the process loop of the JACK Client\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e Port Input-\u003e (NFrames -\u003e RawEvent -\u003e IO RawEvent)-\u003e Port Output-\u003e ExceptionalT e IO a-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withProcess"
      },
      "index": {
        "description": "sets the process loop of the JACK Client",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "withProcess",
        "normalized": "Client-\u003ePort Input-\u003e(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003ePort Output-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Process",
        "signature": "Client-\u003ePort Input-\u003e(NFrames-\u003eRawEvent-\u003eIO RawEvent)-\u003ePort Output-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeEvent",
      "description": {
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Buffer Output -\u003e NFrames -\u003e T -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK-MIDI.html#writeEvent",
        "fct-type": "function",
        "title": "writeEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "writeEvent",
        "normalized": "Buffer Output-\u003eNFrames-\u003eT-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Event",
        "signature": "Buffer Output-\u003eNFrames-\u003eT-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeEventsToPort",
      "description": {
        "fct-descr": "\u003cp\u003eClears an output buffer and writes a sequence of events to it.\nThat is, you must only call this function once per callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Port Output -\u003e NFrames -\u003e T NFrames T -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK-MIDI.html#writeEventsToPort",
        "fct-type": "function",
        "title": "writeEventsToPort"
      },
      "index": {
        "description": "Clears an output buffer and writes sequence of events to it That is you must only call this function once per callback",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "writeEventsToPort",
        "normalized": "Port Output-\u003eNFrames-\u003eT NFrames T-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Events To Port",
        "signature": "Port Output-\u003eNFrames-\u003eT NFrames T-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeRawEvent",
      "description": {
        "fct-descr": "\u003cp\u003ewrites a MIDI event to the PortBuffer of a MIDI output or throws eNOBUFS if JackMIDI.buffer is full\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Buffer Output-\u003e RawEvent-\u003e ExceptionalT e IO ()",
        "fct-type": "function",
        "title": "writeRawEvent"
      },
      "index": {
        "description": "writes MIDI event to the PortBuffer of MIDI output or throws eNOBUFS if JackMIDI.buffer is full",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "writeRawEvent",
        "normalized": "Buffer Output-\u003eRawEvent-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Raw Event",
        "signature": "Buffer Output-\u003eRawEvent-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK-MIDI.html#v:writeRawEventsToPort",
      "description": {
        "fct-descr": "\u003cp\u003eClears an output buffer and writes a sequence of events to it.\nThat is, you must only call this function once per callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK.MIDI",
        "fct-package": "jack",
        "fct-signature": "Port Output -\u003e NFrames -\u003e [RawEvent] -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK-MIDI.html#writeRawEventsToPort",
        "fct-type": "function",
        "title": "writeRawEventsToPort"
      },
      "index": {
        "description": "Clears an output buffer and writes sequence of events to it That is you must only call this function once per callback",
        "hierarchy": "Sound JACK MIDI",
        "module": "Sound.JACK.MIDI",
        "name": "writeRawEventsToPort",
        "normalized": "Port Output-\u003eNFrames-\u003e[RawEvent]-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Raw Events To Port",
        "signature": "Port Output-\u003eNFrames-\u003e[RawEvent]-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Jack module defines types and functions that allows you to\nuse the JACK Audio Connection Kit.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "module",
        "fct-source": "src/Sound-JACK.html",
        "fct-type": "module",
        "title": "JACK"
      },
      "index": {
        "description": "The Jack module defines types and functions that allows you to use the JACK Audio Connection Kit",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "JACK",
        "normalized": "",
        "package": "jack",
        "partial": "JACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003eHandles of Jack clients\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Private.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Handles of Jack clients",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Client",
        "normalized": "",
        "package": "jack",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Direction",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK.html#Direction",
        "fct-type": "class",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Direction",
        "normalized": "",
        "package": "jack",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eType argument for Jack input ports\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI.html#Input",
        "fct-type": "data",
        "title": "Input"
      },
      "index": {
        "description": "Type argument for Jack input ports",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Input",
        "normalized": "",
        "package": "jack",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:NFrames",
      "description": {
        "fct-descr": "\u003cp\u003erepresents absolute frame time\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "newtype",
        "fct-source": "src/Sound-JACK-FFI.html#NFrames",
        "fct-type": "newtype",
        "title": "NFrames"
      },
      "index": {
        "description": "represents absolute frame time",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "NFrames",
        "normalized": "",
        "package": "jack",
        "partial": "NFrames",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Output",
      "description": {
        "fct-descr": "\u003cp\u003eType argument for Jack output ports\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI.html#Output",
        "fct-type": "data",
        "title": "Output"
      },
      "index": {
        "description": "Type argument for Jack output ports",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Output",
        "normalized": "",
        "package": "jack",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Port",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-Private.html#Port",
        "fct-type": "data",
        "title": "Port"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Port",
        "normalized": "",
        "package": "jack",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortId",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI.html#PortId",
        "fct-type": "data",
        "title": "PortId"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "PortId",
        "normalized": "",
        "package": "jack",
        "partial": "Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortSet",
      "description": {
        "fct-descr": "\u003cp\u003eA collection of mixed types of ports.\nIt is mainly needed for freeing all allocated ports.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK.html#PortSet",
        "fct-type": "data",
        "title": "PortSet"
      },
      "index": {
        "description": "collection of mixed types of ports It is mainly needed for freeing all allocated ports",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "PortSet",
        "normalized": "",
        "package": "jack",
        "partial": "Port Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:PortType",
      "description": {
        "fct-descr": "\u003cp\u003eJack Port Type\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "class",
        "fct-source": "src/Sound-JACK-Private.html#PortType",
        "fct-type": "class",
        "title": "PortType"
      },
      "index": {
        "description": "Jack Port Type",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "PortType",
        "normalized": "",
        "package": "jack",
        "partial": "Port Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:Process",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "type",
        "fct-source": "src/Sound-JACK-FFI.html#Process",
        "fct-type": "type",
        "title": "Process"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "Process",
        "normalized": "",
        "package": "jack",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:UnknownDirection",
      "description": {
        "fct-descr": "\u003cp\u003eType argument for Jack ports\nwhere we do not know\nwhether it is an input or an output port.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK.html#UnknownDirection",
        "fct-type": "data",
        "title": "UnknownDirection"
      },
      "index": {
        "description": "Type argument for Jack ports where we do not know whether it is an input or an output port",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "UnknownDirection",
        "normalized": "",
        "package": "jack",
        "partial": "Unknown Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#t:UnknownType",
      "description": {
        "fct-descr": "\u003cp\u003eType argument for Jack ports where the type of samples transported by the port\nis unknown.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "data",
        "fct-source": "src/Sound-JACK-FFI.html#UnknownType",
        "fct-type": "data",
        "title": "UnknownType"
      },
      "index": {
        "description": "Type argument for Jack ports where the type of samples transported by the port is unknown",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "UnknownType",
        "normalized": "",
        "package": "jack",
        "partial": "Unknown Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:NFrames",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "NFrames Word32",
        "fct-source": "src/Sound-JACK-FFI.html#NFrames",
        "fct-type": "function",
        "title": "NFrames"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "NFrames",
        "normalized": "",
        "package": "jack",
        "partial": "NFrames",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:activate",
      "description": {
        "fct-descr": "\u003cp\u003eactivates the given Jack client\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#activate",
        "fct-type": "function",
        "title": "activate"
      },
      "index": {
        "description": "activates the given Jack client",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "activate",
        "normalized": "Client-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "",
        "signature": "Client-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:clientClose",
      "description": {
        "fct-descr": "\u003cp\u003ecloses the given Jack client without causing any trouble (hopefully)\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e PortSet -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#clientClose",
        "fct-type": "function",
        "title": "clientClose"
      },
      "index": {
        "description": "closes the given Jack client without causing any trouble hopefully",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "clientClose",
        "normalized": "Client-\u003ePortSet-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Close",
        "signature": "Client-\u003ePortSet-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:connect",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e String -\u003e String -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "connect",
        "normalized": "Client-\u003eString-\u003eString-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "",
        "signature": "Client-\u003eString-\u003eString-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:deactivate",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#deactivate",
        "fct-type": "function",
        "title": "deactivate"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "deactivate",
        "normalized": "Client-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "",
        "signature": "Client-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:disposeClient",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#disposeClient",
        "fct-type": "function",
        "title": "disposeClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "disposeClient",
        "normalized": "Client-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Client",
        "signature": "Client-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:disposePort",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e Port typ dir -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#disposePort",
        "fct-type": "function",
        "title": "disposePort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "disposePort",
        "normalized": "Client-\u003ePort a b-\u003eExceptionalT c IO()",
        "package": "jack",
        "partial": "Port",
        "signature": "Client-\u003ePort typ dir-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:getPorts",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the names of all existing ports.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e IO [String]",
        "fct-type": "function",
        "title": "getPorts"
      },
      "index": {
        "description": "Returns the names of all existing ports",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "getPorts",
        "normalized": "Client-\u003eIO[String]",
        "package": "jack",
        "partial": "Ports",
        "signature": "Client-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:getSampleRate",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e IO Int",
        "fct-source": "src/Sound-JACK.html#getSampleRate",
        "fct-type": "function",
        "title": "getSampleRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "getSampleRate",
        "normalized": "Client-\u003eIO Int",
        "package": "jack",
        "partial": "Sample Rate",
        "signature": "Client-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:handleExceptions",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "ExceptionalT All IO () -\u003e IO ()",
        "fct-source": "src/Sound-JACK.html#handleExceptions",
        "fct-type": "function",
        "title": "handleExceptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "handleExceptions",
        "normalized": "ExceptionalT All IO()-\u003eIO()",
        "package": "jack",
        "partial": "Exceptions",
        "signature": "ExceptionalT All IO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:lastFrameTime",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e IO NFrames",
        "fct-source": "src/Sound-JACK.html#lastFrameTime",
        "fct-type": "function",
        "title": "lastFrameTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "lastFrameTime",
        "normalized": "Client-\u003eIO NFrames",
        "package": "jack",
        "partial": "Frame Time",
        "signature": "Client-\u003eIO NFrames"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makeClientRegistration",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a client registration callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "ClientRegistration arg -\u003e IO (FunPtr (ClientRegistration arg))",
        "fct-source": "src/Sound-JACK.html#makeClientRegistration",
        "fct-type": "function",
        "title": "makeClientRegistration"
      },
      "index": {
        "description": "Create client registration callback FunPtr",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "makeClientRegistration",
        "normalized": "ClientRegistration a-\u003eIO(FunPtr(ClientRegistration a))",
        "package": "jack",
        "partial": "Client Registration",
        "signature": "ClientRegistration arg-\u003eIO(FunPtr(ClientRegistration arg))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makePortConnect",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a port connect callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "PortConnect arg -\u003e IO (FunPtr (PortConnect arg))",
        "fct-source": "src/Sound-JACK.html#makePortConnect",
        "fct-type": "function",
        "title": "makePortConnect"
      },
      "index": {
        "description": "Create port connect callback FunPtr",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "makePortConnect",
        "normalized": "PortConnect a-\u003eIO(FunPtr(PortConnect a))",
        "package": "jack",
        "partial": "Port Connect",
        "signature": "PortConnect arg-\u003eIO(FunPtr(PortConnect arg))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makePortRegistration",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a port registration callback \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "PortRegistration arg -\u003e IO (FunPtr (PortRegistration arg))",
        "fct-source": "src/Sound-JACK.html#makePortRegistration",
        "fct-type": "function",
        "title": "makePortRegistration"
      },
      "index": {
        "description": "Create port registration callback FunPtr",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "makePortRegistration",
        "normalized": "PortRegistration a-\u003eIO(FunPtr(PortRegistration a))",
        "package": "jack",
        "partial": "Port Registration",
        "signature": "PortRegistration arg-\u003eIO(FunPtr(PortRegistration arg))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:makeProcess",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Process arg -\u003e IO (FunPtr (Process arg))",
        "fct-source": "src/Sound-JACK.html#makeProcess",
        "fct-type": "function",
        "title": "makeProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "makeProcess",
        "normalized": "Process a-\u003eIO(FunPtr(Process a))",
        "package": "jack",
        "partial": "Process",
        "signature": "Process arg-\u003eIO(FunPtr(Process arg))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPort",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port UnknownType UnknownDirection -\u003e ExceptionalT e IO (Port typ dir)",
        "fct-source": "src/Sound-JACK.html#narrowPort",
        "fct-type": "function",
        "title": "narrowPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "narrowPort",
        "normalized": "Port UnknownType UnknownDirection-\u003eExceptionalT a IO(Port b c)",
        "package": "jack",
        "partial": "Port",
        "signature": "Port UnknownType UnknownDirection-\u003eExceptionalT e IO(Port typ dir)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPortDirection",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port typ UnknownDirection -\u003e ExceptionalT e IO (Port typ dir)",
        "fct-source": "src/Sound-JACK.html#narrowPortDirection",
        "fct-type": "function",
        "title": "narrowPortDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "narrowPortDirection",
        "normalized": "Port a UnknownDirection-\u003eExceptionalT b IO(Port a c)",
        "package": "jack",
        "partial": "Port Direction",
        "signature": "Port typ UnknownDirection-\u003eExceptionalT e IO(Port typ dir)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:narrowPortType",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port UnknownType dir -\u003e ExceptionalT e IO (Port typ dir)",
        "fct-source": "src/Sound-JACK.html#narrowPortType",
        "fct-type": "function",
        "title": "narrowPortType"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "narrowPortType",
        "normalized": "Port UnknownType a-\u003eExceptionalT b IO(Port c a)",
        "package": "jack",
        "partial": "Port Type",
        "signature": "Port UnknownType dir-\u003eExceptionalT e IO(Port typ dir)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newClient",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a new Jack client.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "String-\u003e String-\u003e ExceptionalT e IO Client",
        "fct-type": "function",
        "title": "newClient"
      },
      "index": {
        "description": "Constructs new Jack client",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "newClient",
        "normalized": "String-\u003eString-\u003eExceptionalT a IO Client",
        "package": "jack",
        "partial": "Client",
        "signature": "String-\u003eString-\u003eExceptionalT e IO Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newClientDefault",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new JACK client with the \u003ccode\u003edefault\u003c/code\u003e server\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "String-\u003e ExceptionalT e IO Client",
        "fct-type": "function",
        "title": "newClientDefault"
      },
      "index": {
        "description": "Creates new JACK client with the default server",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "newClientDefault",
        "normalized": "String-\u003eExceptionalT a IO Client",
        "package": "jack",
        "partial": "Client Default",
        "signature": "String-\u003eExceptionalT e IO Client"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:newPort",
      "description": {
        "fct-descr": "\u003cp\u003eBetter use \u003ccode\u003e\u003ca\u003ewithPort\u003c/a\u003e\u003c/code\u003e that also handles freeing the port.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e String-\u003e ExceptionalT e IO (Port typ dir)",
        "fct-type": "function",
        "title": "newPort"
      },
      "index": {
        "description": "Better use withPort that also handles freeing the port",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "newPort",
        "normalized": "Client-\u003eString-\u003eExceptionalT a IO(Port b c)",
        "package": "jack",
        "partial": "Port",
        "signature": "Client-\u003eString-\u003eExceptionalT e IO(Port typ dir)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:nframesBounds",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "NFrames -\u003e (NFrames, NFrames)",
        "fct-source": "src/Sound-JACK-FFI.html#nframesBounds",
        "fct-type": "function",
        "title": "nframesBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "nframesBounds",
        "normalized": "NFrames-\u003e(NFrames,NFrames)",
        "package": "jack",
        "partial": "Bounds",
        "signature": "NFrames-\u003e(NFrames,NFrames)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:nframesIndices",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "NFrames -\u003e [NFrames]",
        "fct-source": "src/Sound-JACK-FFI.html#nframesIndices",
        "fct-type": "function",
        "title": "nframesIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "nframesIndices",
        "normalized": "NFrames-\u003e[NFrames]",
        "package": "jack",
        "partial": "Indices",
        "signature": "NFrames-\u003e[NFrames]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portById",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e PortId -\u003e IO (Port UnknownType UnknownDirection)",
        "fct-source": "src/Sound-JACK.html#portById",
        "fct-type": "function",
        "title": "portById"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "portById",
        "normalized": "Client-\u003ePortId-\u003eIO(Port UnknownType UnknownDirection)",
        "package": "jack",
        "partial": "By Id",
        "signature": "Client-\u003ePortId-\u003eIO(Port UnknownType UnknownDirection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portByName",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e String -\u003e IO (Port UnknownType UnknownDirection)",
        "fct-source": "src/Sound-JACK.html#portByName",
        "fct-type": "function",
        "title": "portByName"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "portByName",
        "normalized": "Client-\u003eString-\u003eIO(Port UnknownType UnknownDirection)",
        "package": "jack",
        "partial": "By Name",
        "signature": "Client-\u003eString-\u003eIO(Port UnknownType UnknownDirection)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portGetAllConnections",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all the port names a given port is connected to.\n\u003c/p\u003e\u003cp\u003eThis function must not be called from a JACK event callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e Port typ dir -\u003e IO [String]",
        "fct-source": "src/Sound-JACK.html#portGetAllConnections",
        "fct-type": "function",
        "title": "portGetAllConnections"
      },
      "index": {
        "description": "Return all the port names given port is connected to This function must not be called from JACK event callback",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "portGetAllConnections",
        "normalized": "Client-\u003ePort a b-\u003eIO[String]",
        "package": "jack",
        "partial": "Get All Connections",
        "signature": "Client-\u003ePort typ dir-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the full port name, including the \u003ccode\u003eclient_name:\u003c/code\u003e prefix.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port typ dir -\u003e IO String",
        "fct-source": "src/Sound-JACK.html#portName",
        "fct-type": "function",
        "title": "portName"
      },
      "index": {
        "description": "Return the full port name including the client name prefix",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "portName",
        "normalized": "Port a b-\u003eIO String",
        "package": "jack",
        "partial": "Name",
        "signature": "Port typ dir-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:portShortName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the short port name, not including the \u003ccode\u003eclient_name:\u003c/code\u003e prefix.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port typ dir -\u003e IO String",
        "fct-source": "src/Sound-JACK.html#portShortName",
        "fct-type": "function",
        "title": "portShortName"
      },
      "index": {
        "description": "Return the short port name not including the client name prefix",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "portShortName",
        "normalized": "Port a b-\u003eIO String",
        "package": "jack",
        "partial": "Short Name",
        "signature": "Port typ dir-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:quit",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "MVar () -\u003e Client -\u003e PortSet -\u003e IO ()",
        "fct-source": "src/Sound-JACK.html#quit",
        "fct-type": "function",
        "title": "quit"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "quit",
        "normalized": "MVar()-\u003eClient-\u003ePortSet-\u003eIO()",
        "package": "jack",
        "partial": "",
        "signature": "MVar()-\u003eClient-\u003ePortSet-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setClientRegistration",
      "description": {
        "fct-descr": "\u003cp\u003eSet the client registration callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e FunPtr (ClientRegistration arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#setClientRegistration",
        "fct-type": "function",
        "title": "setClientRegistration"
      },
      "index": {
        "description": "Set the client registration callback",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setClientRegistration",
        "normalized": "Client-\u003eFunPtr(ClientRegistration a)-\u003ePtr a-\u003eExceptionalT b IO()",
        "package": "jack",
        "partial": "Client Registration",
        "signature": "Client-\u003eFunPtr(ClientRegistration arg)-\u003ePtr arg-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setOfPort",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port typ dir -\u003e PortSet",
        "fct-source": "src/Sound-JACK.html#setOfPort",
        "fct-type": "function",
        "title": "setOfPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setOfPort",
        "normalized": "Port a b-\u003ePortSet",
        "package": "jack",
        "partial": "Of Port",
        "signature": "Port typ dir-\u003ePortSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setOfPorts",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "[Port typ dir] -\u003e PortSet",
        "fct-source": "src/Sound-JACK.html#setOfPorts",
        "fct-type": "function",
        "title": "setOfPorts"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setOfPorts",
        "normalized": "[Port a b]-\u003ePortSet",
        "package": "jack",
        "partial": "Of Ports",
        "signature": "[Port typ dir]-\u003ePortSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setPortConnect",
      "description": {
        "fct-descr": "\u003cp\u003eSet the port connect callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e FunPtr (PortConnect arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#setPortConnect",
        "fct-type": "function",
        "title": "setPortConnect"
      },
      "index": {
        "description": "Set the port connect callback",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setPortConnect",
        "normalized": "Client-\u003eFunPtr(PortConnect a)-\u003ePtr a-\u003eExceptionalT b IO()",
        "package": "jack",
        "partial": "Port Connect",
        "signature": "Client-\u003eFunPtr(PortConnect arg)-\u003ePtr arg-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setPortRegistration",
      "description": {
        "fct-descr": "\u003cp\u003eSet the port registration callback.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e FunPtr (PortRegistration arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#setPortRegistration",
        "fct-type": "function",
        "title": "setPortRegistration"
      },
      "index": {
        "description": "Set the port registration callback",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setPortRegistration",
        "normalized": "Client-\u003eFunPtr(PortRegistration a)-\u003ePtr a-\u003eExceptionalT b IO()",
        "package": "jack",
        "partial": "Port Registration",
        "signature": "Client-\u003eFunPtr(PortRegistration arg)-\u003ePtr arg-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:setProcess",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e FunPtr (Process arg) -\u003e Ptr arg -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#setProcess",
        "fct-type": "function",
        "title": "setProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "setProcess",
        "normalized": "Client-\u003eFunPtr(Process a)-\u003ePtr a-\u003eExceptionalT b IO()",
        "package": "jack",
        "partial": "Process",
        "signature": "Client-\u003eFunPtr(Process arg)-\u003ePtr arg-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:switchUnknownDirectionPort",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port typ UnknownDirection -\u003e (Port typ Input -\u003e ExceptionalT e IO a) -\u003e (Port typ Output -\u003e ExceptionalT e IO a) -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#switchUnknownDirectionPort",
        "fct-type": "function",
        "title": "switchUnknownDirectionPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "switchUnknownDirectionPort",
        "normalized": "Port a UnknownDirection-\u003e(Port a Input-\u003eExceptionalT b IO c)-\u003e(Port a Output-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
        "package": "jack",
        "partial": "Unknown Direction Port",
        "signature": "Port typ UnknownDirection-\u003e(Port typ Input-\u003eExceptionalT e IO a)-\u003e(Port typ Output-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:switchUnknownTypePort",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Port UnknownType dir -\u003e (Port CFloat dir -\u003e ExceptionalT e IO a) -\u003e (Port EventBuffer dir -\u003e ExceptionalT e IO a) -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#switchUnknownTypePort",
        "fct-type": "function",
        "title": "switchUnknownTypePort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "switchUnknownTypePort",
        "normalized": "Port UnknownType a-\u003e(Port CFloat a-\u003eExceptionalT b IO c)-\u003e(Port EventBuffer a-\u003eExceptionalT b IO c)-\u003eExceptionalT b IO c",
        "package": "jack",
        "partial": "Unknown Type Port",
        "signature": "Port UnknownType dir-\u003e(Port CFloat dir-\u003eExceptionalT e IO a)-\u003e(Port EventBuffer dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:waitForBreak",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "IO ()",
        "fct-source": "src/Sound-JACK.html#waitForBreak",
        "fct-type": "function",
        "title": "waitForBreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "waitForBreak",
        "normalized": "IO()",
        "package": "jack",
        "partial": "For Break",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:waitForBreakAndClose",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e PortSet -\u003e IO ()",
        "fct-source": "src/Sound-JACK.html#waitForBreakAndClose",
        "fct-type": "function",
        "title": "waitForBreakAndClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "waitForBreakAndClose",
        "normalized": "Client-\u003ePortSet-\u003eIO()",
        "package": "jack",
        "partial": "For Break And Close",
        "signature": "Client-\u003ePortSet-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withActivation",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e ExceptionalT e IO () -\u003e ExceptionalT e IO ()",
        "fct-source": "src/Sound-JACK.html#withActivation",
        "fct-type": "function",
        "title": "withActivation"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withActivation",
        "normalized": "Client-\u003eExceptionalT a IO()-\u003eExceptionalT a IO()",
        "package": "jack",
        "partial": "Activation",
        "signature": "Client-\u003eExceptionalT e IO()-\u003eExceptionalT e IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClient",
      "description": {
        "fct-descr": "\u003cp\u003eRun a block of code with a newly allocated client.\nDo not use the client outside the block.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "String-\u003e String-\u003e (Client -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withClient"
      },
      "index": {
        "description": "Run block of code with newly allocated client Do not use the client outside the block",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withClient",
        "normalized": "String-\u003eString-\u003e(Client-\u003eExceptionalT a IO b)-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Client",
        "signature": "String-\u003eString-\u003e(Client-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClientDefault",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "String-\u003e (Client -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withClientDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withClientDefault",
        "normalized": "String-\u003e(Client-\u003eExceptionalT a IO b)-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Client Default",
        "signature": "String-\u003e(Client-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withClientRegistration",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e (String -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#withClientRegistration",
        "fct-type": "function",
        "title": "withClientRegistration"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withClientRegistration",
        "normalized": "Client-\u003e(String-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Client Registration",
        "signature": "Client-\u003e(String-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new port for the given client and delete it after usage.\nThe port manages audio or MIDI data in input or output direction\ndepending on the Port type.\nUsually the required port type can be inferred from following actions\nthat use that port.\n\u003c/p\u003e\u003cp\u003eDo not use the port outside the enclosed block.\n\u003c/p\u003e",
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client-\u003e String-\u003e (Port typ dir -\u003e ExceptionalT e IO a)-\u003e ExceptionalT e IO a",
        "fct-type": "function",
        "title": "withPort"
      },
      "index": {
        "description": "Creates new port for the given client and delete it after usage The port manages audio or MIDI data in input or output direction depending on the Port type Usually the required port type can be inferred from following actions that use that port Do not use the port outside the enclosed block",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withPort",
        "normalized": "Client-\u003eString-\u003e(Port a b-\u003eExceptionalT c IO d)-\u003eExceptionalT c IO d",
        "package": "jack",
        "partial": "Port",
        "signature": "Client-\u003eString-\u003e(Port typ dir-\u003eExceptionalT e IO a)-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPortConnect",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e (PortId -\u003e PortId -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#withPortConnect",
        "fct-type": "function",
        "title": "withPortConnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withPortConnect",
        "normalized": "Client-\u003e(PortId-\u003ePortId-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Port Connect",
        "signature": "Client-\u003e(PortId-\u003ePortId-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withPortRegistration",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e (PortId -\u003e Bool -\u003e IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#withPortRegistration",
        "fct-type": "function",
        "title": "withPortRegistration"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withPortRegistration",
        "normalized": "Client-\u003e(PortId-\u003eBool-\u003eIO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Port Registration",
        "signature": "Client-\u003e(PortId-\u003eBool-\u003eIO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jack/docs/Sound-JACK.html#v:withProcess",
      "description": {
        "fct-module": "Sound.JACK",
        "fct-package": "jack",
        "fct-signature": "Client -\u003e (NFrames -\u003e ExceptionalT Errno IO ()) -\u003e ExceptionalT e IO a -\u003e ExceptionalT e IO a",
        "fct-source": "src/Sound-JACK.html#withProcess",
        "fct-type": "function",
        "title": "withProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound JACK",
        "module": "Sound.JACK",
        "name": "withProcess",
        "normalized": "Client-\u003e(NFrames-\u003eExceptionalT Errno IO())-\u003eExceptionalT a IO b-\u003eExceptionalT a IO b",
        "package": "jack",
        "partial": "Process",
        "signature": "Client-\u003e(NFrames-\u003eExceptionalT Errno IO())-\u003eExceptionalT e IO a-\u003eExceptionalT e IO a"
      }
    }
  }
]