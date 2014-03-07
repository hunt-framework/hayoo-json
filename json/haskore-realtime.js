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
        "word": "haskore-realtime"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses a pipe\nin order to play CSound music without a temporary score file.\nA temporary orchestra file is necessary, though.\n\u003c/p\u003e\u003cp\u003eIn my tests on a SuSE Linux only CSound5 (but not CSound4)\ncould play via '-odac'.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.Interface.CSound.Play",
          "name": "Play",
          "package": "haskore-realtime",
          "source": "src/Haskore-Interface-CSound-Play.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses pipe in order to play CSound music without temporary score file temporary orchestra file is necessary though In my tests on SuSE Linux only CSound5 but not CSound4 could play via odac",
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "Play",
          "package": "haskore-realtime",
          "partial": "Play",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "play",
          "package": "haskore-realtime",
          "signature": "T out -\u003e T -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#play",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "play",
          "normalized": "T a-\u003eT-\u003eIO()",
          "package": "haskore-realtime",
          "signature": "T out-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playNamedPipe",
          "package": "haskore-realtime",
          "signature": "(String, String) -\u003e FilePath -\u003e Name -\u003e T out -\u003e T -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playNamedPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playNamedPipe",
          "normalized": "(String,String)-\u003eFilePath-\u003eName-\u003eT a-\u003eT-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Named Pipe",
          "signature": "(String,String)-\u003eFilePath-\u003eName-\u003eT out-\u003eT-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playNamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4",
          "package": "haskore-realtime",
          "signature": "FilePath -\u003e (Name, T out, T) -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playV4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4",
          "normalized": "FilePath-\u003e(Name,T a,T)-\u003eIO()",
          "package": "haskore-realtime",
          "signature": "FilePath-\u003e(Name,T out,T)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playV4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4AnonymousPipe",
          "package": "haskore-realtime",
          "signature": "FilePath -\u003e (Name, T, T out) -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playV4AnonymousPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4AnonymousPipe",
          "normalized": "FilePath-\u003e(Name,T,T a)-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Anonymous Pipe",
          "signature": "FilePath-\u003e(Name,T,T out)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playV4AnonymousPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4NamedPipe",
          "package": "haskore-realtime",
          "signature": "FilePath -\u003e (Name, T, T out) -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playV4NamedPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV4NamedPipe",
          "normalized": "FilePath-\u003e(Name,T,T a)-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Named Pipe",
          "signature": "FilePath-\u003e(Name,T,T out)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playV4NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV5",
          "package": "haskore-realtime",
          "signature": "FilePath -\u003e (Name, T out, T) -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playV5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV5",
          "normalized": "FilePath-\u003e(Name,T a,T)-\u003eIO()",
          "package": "haskore-realtime",
          "signature": "FilePath-\u003e(Name,T out,T)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playV5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV5NamedPipe",
          "package": "haskore-realtime",
          "signature": "FilePath -\u003e (Name, T, T out) -\u003e IO ()",
          "source": "src/Haskore-Interface-CSound-Play.html#playV5NamedPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "playV5NamedPipe",
          "normalized": "FilePath-\u003e(Name,T,T a)-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Named Pipe",
          "signature": "FilePath-\u003e(Name,T,T out)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:playV5NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "scorePipe",
          "package": "haskore-realtime",
          "signature": "FilePath",
          "source": "src/Haskore-Interface-CSound-Play.html#scorePipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "scorePipe",
          "package": "haskore-realtime",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:scorePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.CSound.Play",
          "name": "tmpWave",
          "package": "haskore-realtime",
          "signature": "FilePath",
          "source": "src/Haskore-Interface-CSound-Play.html#tmpWave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface CSound Play",
          "module": "Haskore.Interface.CSound.Play",
          "name": "tmpWave",
          "package": "haskore-realtime",
          "partial": "Wave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-CSound-Play.html#v:tmpWave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module used shell-haskell and a pipe\nin order to play MIDI music without temporary files.\nToday it uses \u003ccode\u003eSystem.Process.runInteractiveProcess\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI got this running only with GHC and Linux so far.\nThough it is not satisfying.\nIt seems that \u003ccode\u003etimidity\u003c/code\u003e forks itself away\nso that it doesn't block the prompt of Haskell.\nI assume that because sometimes ghci tries\nto write to the pipe before \u003ccode\u003etimidity\u003c/code\u003e can read it.\nInterestingly if I start \u003ccode\u003etimidity\u003c/code\u003e with an input pipe\nfrom the console it stays synchronously.\n\u003c/p\u003e\u003cp\u003eSome music seems to be to large,\nmaybe larger than a pipe buffer,\nthen the buffer runs over and the replay fails.\nE.g. ChildSong6 is short enough, Kantate147 is too long.\n\u003c/p\u003e\u003cp\u003eUsing a pipe is the only way to play\ninfinite streams of music using an external program.\nIt is no problem to control a MIDI device\nover an unlimited time,\nbut unfortunately the MIDI file format\nuses absolute time points and a file length value.\nThus it is not possible to play infinite MIDI streams\nvia the MIDI file format!\nFor better realtime support on Linux look at the \u003ccode\u003ealsa-midi\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "Play",
          "package": "haskore-realtime",
          "source": "src/Haskore-Interface-MIDI-Play.html",
          "type": "module"
        },
        "index": {
          "description": "This module used shell-haskell and pipe in order to play MIDI music without temporary files Today it uses System.Process.runInteractiveProcess got this running only with GHC and Linux so far Though it is not satisfying It seems that timidity forks itself away so that it doesn block the prompt of Haskell assume that because sometimes ghci tries to write to the pipe before timidity can read it Interestingly if start timidity with an input pipe from the console it stays synchronously Some music seems to be to large maybe larger than pipe buffer then the buffer runs over and the replay fails E.g ChildSong6 is short enough Kantate147 is too long Using pipe is the only way to play infinite streams of music using an external program It is no problem to control MIDI device over an unlimited time but unfortunately the MIDI file format uses absolute time points and file length value Thus it is not possible to play infinite MIDI streams via the MIDI file format For better realtime support on Linux look at the alsa-midi package",
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "Play",
          "package": "haskore-realtime",
          "partial": "Play",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.MIDI.Play",
          "name": "ByteList",
          "package": "haskore-realtime",
          "source": "src/Haskore-Interface-MIDI-Play.html#ByteList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "ByteList",
          "package": "haskore-realtime",
          "partial": "Byte List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#t:ByteList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.MIDI.Play",
          "name": "play",
          "package": "haskore-realtime",
          "signature": "(ChannelProgramPitchTable drum, ChannelProgramTable instr, T time dyn (Note drum instr), T drum instr) -\u003e IO ()",
          "source": "src/Haskore-Interface-MIDI-Play.html#play",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "play",
          "normalized": "(ChannelProgramPitchTable a,ChannelProgramTable b,T c d(Note a b),T a b)-\u003eIO()",
          "package": "haskore-realtime",
          "signature": "(ChannelProgramPitchTable drum,ChannelProgramTable instr,T time dyn(Note drum instr),T drum instr)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.MIDI.Play",
          "name": "playRaw",
          "package": "haskore-realtime",
          "signature": "[String] -\u003e ByteList -\u003e IO ()",
          "source": "src/Haskore-Interface-MIDI-Play.html#playRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "playRaw",
          "normalized": "[String]-\u003eByteList-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Raw",
          "signature": "[String]-\u003eByteList-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#v:playRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.MIDI.Play",
          "name": "playSimple",
          "package": "haskore-realtime",
          "signature": "T -\u003e IO ()",
          "source": "src/Haskore-Interface-MIDI-Play.html#playSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "playSimple",
          "normalized": "T-\u003eIO()",
          "package": "haskore-realtime",
          "partial": "Simple",
          "signature": "T-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#v:playSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.Interface.MIDI.Play",
          "name": "stringCharFromByte",
          "package": "haskore-realtime",
          "signature": "ByteList -\u003e String",
          "source": "src/Haskore-Interface-MIDI-Play.html#stringCharFromByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore Interface MIDI Play",
          "module": "Haskore.Interface.MIDI.Play",
          "name": "stringCharFromByte",
          "normalized": "ByteList-\u003eString",
          "package": "haskore-realtime",
          "partial": "Char From Byte",
          "signature": "ByteList-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-Interface-MIDI-Play.html#v:stringCharFromByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApply actions to event lists\n(starting with time, ending with body)\nat given times.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "TimeBody",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html",
          "type": "module"
        },
        "index": {
          "description": "Apply actions to event lists starting with time ending with body at given times",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "TimeBody",
          "package": "haskore-realtime",
          "partial": "Time Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "T",
          "package": "haskore-realtime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "T",
          "package": "haskore-realtime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "append",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:append\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:append\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "append",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe export this function only for use in \u003ca\u003eHaskore.RealTime.EventList.TimeTime\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "attachTime",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time (time, body)",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#attachTime",
          "type": "function"
        },
        "index": {
          "description": "We export this function only for use in Haskore.RealTime.EventList.TimeTime",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "attachTime",
          "normalized": "T a b-\u003eT a(a,b)",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T time body-\u003eT time(time,body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:attachTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup events that have equal start times\n(that is zero time differences).\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "collectCoincident",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time [body]",
          "type": "function"
        },
        "index": {
          "description": "Group events that have equal start times that is zero time differences",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "haskore-realtime",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "concat",
          "package": "haskore-realtime",
          "signature": "[T time body] -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:concat\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:concat\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "concat",
          "normalized": "[T a b]-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "cons",
          "package": "haskore-realtime",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:cons\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:cons\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "consBody",
          "package": "haskore-realtime",
          "signature": "body -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:consBody\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:consBody\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "consBody",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:consBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "consTime",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:consTime\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:consTime\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "consTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:consTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "cycle",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "cycle",
          "normalized": "T a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "decreaseStart",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:decreaseStart\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:decreaseStart\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "decreaseStart",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Start",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:decreaseStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "delay",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:delay\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:delay\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "delay",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "empty",
          "package": "haskore-realtime",
          "signature": "T time body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:empty\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "empty",
          "package": "haskore-realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse to collectCoincident:\nTurn each \u003ccode\u003ebody\u003c/code\u003e into a separate event.\n\u003c/p\u003e\u003cpre\u003e   xs  ==  flatten (collectCoincident xs)\n\u003c/pre\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "flatten",
          "package": "haskore-realtime",
          "signature": "T time [body] -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "Reverse to collectCoincident Turn each body into separate event xs flatten collectCoincident xs",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "foldr",
          "package": "haskore-realtime",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT a d-\u003ec",
          "package": "haskore-realtime",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "getBodies",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e [body]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "haskore-realtime",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e inserts an event into an event list at the given time.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "insert",
          "package": "haskore-realtime",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "insert inserts an event into an event list at the given time",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "mapBody",
          "package": "haskore-realtime",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapBody\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBody\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapBodyM",
          "package": "haskore-realtime",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapCoincident",
          "package": "haskore-realtime",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the lists of coincident events",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "haskore-realtime",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "mapM",
          "package": "haskore-realtime",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapM\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapM\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "haskore-realtime",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "mapM_",
          "package": "haskore-realtime",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapM_\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapM_\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "haskore-realtime",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "mapTime",
          "package": "haskore-realtime",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapTime\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTime\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "mapTimeTail",
          "package": "haskore-realtime",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapTimeTail\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeTail\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "mapTimeTail",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time Tail",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:mapTimeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "normalize",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "normalize",
          "normalized": "T a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "null",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "null",
          "normalized": "T a b-\u003eBool",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "partition",
          "package": "haskore-realtime",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "haskore-realtime",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Haskore.RealTime.EventList.TimeBody\",\"Haskore.RealTime.EventList.TimeTime\"]",
          "name": "resample",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T i body",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:resample\",\"http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:resample\"]"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "resample",
          "normalized": "a-\u003eT a b-\u003eT c b",
          "package": "haskore-realtime",
          "signature": "time-\u003eT time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next set of routines is more precise.\nIt computes a time table starting with current system time\nand tries to stick to it.\n\u003c/p\u003e\u003cp\u003eSo far, I worked hard to use time differences instead of absolute times\nin order to avoid increasing memory consumption of time numbers\n(which however slows down as time evolves)\nbut the time related functions of the system are absolute,\nso have to make our ones absolute as well.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "run",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#run",
          "type": "function"
        },
        "index": {
          "description": "The next set of routines is more precise It computes time table starting with current system time and tries to stick to it So far worked hard to use time differences instead of absolute times in order to avoid increasing memory consumption of time numbers which however slows down as time evolves but the time related functions of the system are absolute so have to make our ones absolute as well",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "run",
          "normalized": "T a-\u003e(b-\u003ea c)-\u003eT d b-\u003ea[c]",
          "package": "haskore-realtime",
          "signature": "T m-\u003e(body-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runCore",
          "package": "haskore-realtime",
          "signature": "(T time0 body0 -\u003e T time1 body1) -\u003e T m -\u003e (time1 -\u003e body1 -\u003e m a) -\u003e T time0 body0 -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#runCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runCore",
          "normalized": "(T a b-\u003eT a b)-\u003eT c-\u003e(a-\u003eb-\u003ec d)-\u003eT a b-\u003ec[d]",
          "package": "haskore-realtime",
          "partial": "Core",
          "signature": "(T time body-\u003eT time body)-\u003eT m-\u003e(time-\u003ebody-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:runCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first function assumes,\nthat the action does not consume time\nand that the wait command is precise.\nIt is not very useful in practice, but very simple.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runRelative",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#runRelative",
          "type": "function"
        },
        "index": {
          "description": "The first function assumes that the action does not consume time and that the wait command is precise It is not very useful in practice but very simple",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runRelative",
          "normalized": "T a-\u003e(b-\u003ea c)-\u003eT d b-\u003ea[c]",
          "package": "haskore-realtime",
          "partial": "Relative",
          "signature": "T m-\u003e(body-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:runRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runRelativeCore",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (body -\u003e m a) -\u003e T Integer body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#runRelativeCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runRelativeCore",
          "normalized": "T a-\u003e(b-\u003ea c)-\u003eT Integer b-\u003ea[c]",
          "package": "haskore-realtime",
          "partial": "Relative Core",
          "signature": "T m-\u003e(body-\u003em a)-\u003eT Integer body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:runRelativeCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe wait calls are necessarily quantized,\nbut the time passed to the action is not quantized.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runTimeStamp",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (time -\u003e body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#runTimeStamp",
          "type": "function"
        },
        "index": {
          "description": "The wait calls are necessarily quantized but the time passed to the action is not quantized",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runTimeStamp",
          "normalized": "T a-\u003e(b-\u003ec-\u003ea d)-\u003eT b c-\u003ea[d]",
          "package": "haskore-realtime",
          "partial": "Time Stamp",
          "signature": "T m-\u003e(time-\u003ebody-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:runTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis routine is only necessary,\nbecause differences might be too small\nto be noticed in the absolute time values.\nThat is, collectCoincident will split events which actually belong together.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runTimeStampGrouped",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (time -\u003e [body] -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeBody.html#runTimeStampGrouped",
          "type": "function"
        },
        "index": {
          "description": "This routine is only necessary because differences might be too small to be noticed in the absolute time values That is collectCoincident will split events which actually belong together",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "runTimeStampGrouped",
          "normalized": "T a-\u003e(b-\u003e[c]-\u003ea d)-\u003eT b c-\u003ea[d]",
          "package": "haskore-realtime",
          "partial": "Time Stamp Grouped",
          "signature": "T m-\u003e(time-\u003e[body]-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:runTimeStampGrouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "singleton",
          "package": "haskore-realtime",
          "signature": "time -\u003e body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a classification function\nwe splice the event list into lists, each containing the same class.\nAbsolute time stamps are preserved.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "slice",
          "package": "haskore-realtime",
          "signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
          "type": "function"
        },
        "index": {
          "description": "Using classification function we splice the event list into lists each containing the same class Absolute time stamps are preserved",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "slice",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
          "package": "haskore-realtime",
          "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "snoc",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e time -\u003e body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "snoc",
          "normalized": "T a b-\u003ea-\u003eb-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003etime-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe tried hard to compute everything with respect to relative times.\nHowever sometimes we need absolute time values.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "toAbsoluteEventList",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "We tried hard to compute everything with respect to relative times However sometimes we need absolute time values",
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "toAbsoluteEventList",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Absolute Event List",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:toAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewBodyL",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e (body, T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewBodyL",
          "normalized": "T a b-\u003e(b,T a b)",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "T time body-\u003e(body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:viewBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewL",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e Maybe ((time, body), T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewL",
          "normalized": "T a b-\u003eMaybe((a,b),T a b)",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eMaybe((time,body),T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewTimeL",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e Maybe (time, T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeBody",
          "module": "Haskore.RealTime.EventList.TimeBody",
          "name": "viewTimeL",
          "normalized": "T a b-\u003eMaybe(a,T a b)",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T time body-\u003eMaybe(time,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeBody.html#v:viewTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApply actions to event lists\n(starting with time, ending with time)\nat given times.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "TimeTime",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-EventList-TimeTime.html",
          "type": "module"
        },
        "index": {
          "description": "Apply actions to event lists starting with time ending with time at given times",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "TimeTime",
          "package": "haskore-realtime",
          "partial": "Time Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "T",
          "package": "haskore-realtime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "T",
          "package": "haskore-realtime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds times in a left-associative fashion.\nUse this if the time is a strict data type.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "catMaybes",
          "package": "haskore-realtime",
          "signature": "T time (Maybe body) -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "Adds times in left-associative fashion Use this if the time is strict data type",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "catMaybes",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "collectCoincident",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time [body]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "haskore-realtime",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e are essentially the same.\n\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e must use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e in order to work on infinite lists,\nhowever if there are many empty lists,\nsumming of their durations will be done from right to left,\nwhich is inefficient.\nThus we detect subsequent empty lists and merge them from left to right.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "concatNaive",
          "package": "haskore-realtime",
          "signature": "[T time body] -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "concat and concatNaive are essentially the same concat must use foldr in order to work on infinite lists however if there are many empty lists summing of their durations will be done from right to left which is inefficient Thus we detect subsequent empty lists and merge them from left to right",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "concatNaive",
          "normalized": "[T a b]-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Naive",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:concatNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogously to the \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e pair\nwe have to versions of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e,\nwhere the clever implementation sums up pauses\nfrom the beginning to the end.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "filter",
          "package": "haskore-realtime",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "Analogously to the concat concatNaive pair we have to versions of filter where the clever implementation sums up pauses from the beginning to the end",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "flatten",
          "package": "haskore-realtime",
          "signature": "T time [body] -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "foldr",
          "package": "haskore-realtime",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e a -\u003e T time body -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003eb-\u003eT a d-\u003ec",
          "package": "haskore-realtime",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003ea-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start\ntimes.  This is to ensure that it is commutative, a desirable\ncondition for some of the proofs used in secref{equivalence}.\nIt is also necessary to assert a unique representation\nof the performance independent of the structure of the 'Music.T note'.\nThe same function for inserting into a time ordered list with a trailing pause.\nThe strictness annotation is necessary for working with infinite lists.\n\u003c/p\u003e\u003cp\u003eHere are two other functions that are already known for non-padded time lists.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "insert",
          "package": "haskore-realtime",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "Note that merge compares entire events rather than just start times This is to ensure that it is commutative desirable condition for some of the proofs used in secref equivalence It is also necessary to assert unique representation of the performance independent of the structure of the Music.T note The same function for inserting into time ordered list with trailing pause The strictness annotation is necessary for working with infinite lists Here are two other functions that are already known for non-padded time lists",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyHead",
          "package": "haskore-realtime",
          "signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyHead",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "partial": "Body Head",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyInit",
          "package": "haskore-realtime",
          "signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyInit",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Body Init",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyL",
          "package": "haskore-realtime",
          "signature": "(body -\u003e body, T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyL",
          "normalized": "(a-\u003ea,T b a-\u003eT b a)-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "(body-\u003ebody,T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyLast",
          "package": "haskore-realtime",
          "signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyLast",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "haskore-realtime",
          "partial": "Body Last",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyR",
          "package": "haskore-realtime",
          "signature": "(T time0 body -\u003e T time1 body, body -\u003e body) -\u003e T time0 body -\u003e T time1 body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyR",
          "normalized": "(T a b-\u003eT a b,b-\u003eb)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "(T time body-\u003eT time body,body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyTail",
          "package": "haskore-realtime",
          "signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapBodyTail",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Body Tail",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapBodyTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapCoincident",
          "package": "haskore-realtime",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "haskore-realtime",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeHead",
          "package": "haskore-realtime",
          "signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeHead",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time Head",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeInit",
          "package": "haskore-realtime",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeInit",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time Init",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeL",
          "package": "haskore-realtime",
          "signature": "(time -\u003e time, T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeL",
          "normalized": "(a-\u003ea,T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "(time-\u003etime,T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeLast",
          "package": "haskore-realtime",
          "signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeLast",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time Last",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeR",
          "package": "haskore-realtime",
          "signature": "(T time body0 -\u003e T time body1, time -\u003e time) -\u003e T time body0 -\u003e T time body1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "mapTimeR",
          "normalized": "(T a b-\u003eT a b,a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "(T time body-\u003eT time body,time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:mapTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first important function is \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\nwhich merges the events of two lists into a new time order list.\n\u003c/p\u003e",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "merge",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "description": "The first important function is merge which merges the events of two lists into new time order list",
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "merge",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "pause",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "pause",
          "normalized": "a-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "time-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "run",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeTime.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "run",
          "normalized": "T a-\u003e(b-\u003ea c)-\u003eT d b-\u003ea[c]",
          "package": "haskore-realtime",
          "signature": "T m-\u003e(body-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runRelative",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeTime.html#runRelative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runRelative",
          "normalized": "T a-\u003e(b-\u003ea c)-\u003eT d b-\u003ea[c]",
          "package": "haskore-realtime",
          "partial": "Relative",
          "signature": "T m-\u003e(body-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:runRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runTimeStamp",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (time -\u003e body -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeTime.html#runTimeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runTimeStamp",
          "normalized": "T a-\u003e(b-\u003ec-\u003ea d)-\u003eT b c-\u003ea[d]",
          "package": "haskore-realtime",
          "partial": "Time Stamp",
          "signature": "T m-\u003e(time-\u003ebody-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:runTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runTimeStampGrouped",
          "package": "haskore-realtime",
          "signature": "T m -\u003e (time -\u003e [body] -\u003e m a) -\u003e T time body -\u003e m [a]",
          "source": "src/Haskore-RealTime-EventList-TimeTime.html#runTimeStampGrouped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "runTimeStampGrouped",
          "normalized": "T a-\u003e(b-\u003e[c]-\u003ea d)-\u003eT b c-\u003ea[d]",
          "package": "haskore-realtime",
          "partial": "Time Stamp Grouped",
          "signature": "T m-\u003e(time-\u003e[body]-\u003em a)-\u003eT time body-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:runTimeStampGrouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snoc",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e body -\u003e time -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snoc",
          "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
          "package": "haskore-realtime",
          "signature": "T time body-\u003ebody-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snocBody",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snocBody",
          "normalized": "T a b-\u003eb-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "T time body-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:snocBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snocTime",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e time -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "snocTime",
          "normalized": "T a b-\u003ea-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T time body-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:snocTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "toAbsoluteEventList",
          "package": "haskore-realtime",
          "signature": "time -\u003e T time body -\u003e T time body",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "toAbsoluteEventList",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "haskore-realtime",
          "partial": "Absolute Event List",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:toAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewBodyL",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e Maybe (body, T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewBodyL",
          "normalized": "T a b-\u003eMaybe(b,T a b)",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "T time body-\u003eMaybe(body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:viewBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewBodyR",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e Maybe (T time body, body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewBodyR",
          "normalized": "T a b-\u003eMaybe(T a b,b)",
          "package": "haskore-realtime",
          "partial": "Body",
          "signature": "T time body-\u003eMaybe(T time body,body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:viewBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewTimeL",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e (time, T time body)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewTimeL",
          "normalized": "T a b-\u003e(a,T a b)",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T time body-\u003e(time,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:viewTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewTimeR",
          "package": "haskore-realtime",
          "signature": "T time body -\u003e (T time body, time)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime EventList TimeTime",
          "module": "Haskore.RealTime.EventList.TimeTime",
          "name": "viewTimeR",
          "normalized": "T a b-\u003e(T a b,a)",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T time body-\u003e(T time body,time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-EventList-TimeTime.html#v:viewTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ereplace functionality of shell-pipe package\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.RealTime.ShellPipe",
          "name": "ShellPipe",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-ShellPipe.html",
          "type": "module"
        },
        "index": {
          "description": "replace functionality of shell-pipe package",
          "hierarchy": "Haskore RealTime ShellPipe",
          "module": "Haskore.RealTime.ShellPipe",
          "name": "ShellPipe",
          "package": "haskore-realtime",
          "partial": "Shell Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-ShellPipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.ShellPipe",
          "name": "launch",
          "package": "haskore-realtime",
          "signature": "FilePath-\u003e [String]-\u003e IO (Handle, Handle, Handle)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime ShellPipe",
          "module": "Haskore.RealTime.ShellPipe",
          "name": "launch",
          "normalized": "FilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle)",
          "package": "haskore-realtime",
          "signature": "FilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-ShellPipe.html#v:launch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis timer doesn't wait but returns immediately.\nThis is useful for turning real-time processing to non-real-time processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Haskore.RealTime.Timer.Immediate",
          "name": "Immediate",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-Timer-Immediate.html",
          "type": "module"
        },
        "index": {
          "description": "This timer doesn wait but returns immediately This is useful for turning real-time processing to non-real-time processing",
          "hierarchy": "Haskore RealTime Timer Immediate",
          "module": "Haskore.RealTime.Timer.Immediate",
          "name": "Immediate",
          "package": "haskore-realtime",
          "partial": "Immediate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Immediate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer.Immediate",
          "name": "timer",
          "package": "haskore-realtime",
          "signature": "T m",
          "source": "src/Haskore-RealTime-Timer-Immediate.html#timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer Immediate",
          "module": "Haskore.RealTime.Timer.Immediate",
          "name": "timer",
          "package": "haskore-realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Immediate.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer.Posix",
          "name": "Posix",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-Timer-Posix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer Posix",
          "module": "Haskore.RealTime.Timer.Posix",
          "name": "Posix",
          "package": "haskore-realtime",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer.Posix",
          "name": "timer",
          "package": "haskore-realtime",
          "signature": "T IO",
          "source": "src/Haskore-RealTime-Timer-Posix.html#timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer Posix",
          "module": "Haskore.RealTime.Timer.Posix",
          "name": "timer",
          "package": "haskore-realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Posix.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer.Thread",
          "name": "Thread",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-Timer-Thread.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer Thread",
          "module": "Haskore.RealTime.Timer.Thread",
          "name": "Thread",
          "package": "haskore-realtime",
          "partial": "Thread",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Thread.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer.Thread",
          "name": "timer",
          "package": "haskore-realtime",
          "signature": "T IO",
          "source": "src/Haskore-RealTime-Timer-Thread.html#timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer Thread",
          "module": "Haskore.RealTime.Timer.Thread",
          "name": "timer",
          "package": "haskore-realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer-Thread.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "Timer",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-Timer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "Timer",
          "package": "haskore-realtime",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "T",
          "package": "haskore-realtime",
          "source": "src/Haskore-RealTime-Timer.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "T",
          "package": "haskore-realtime",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "Cons",
          "package": "haskore-realtime",
          "signature": "Cons",
          "source": "src/Haskore-RealTime-Timer.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "Cons",
          "package": "haskore-realtime",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "clockTimeToSeconds",
          "package": "haskore-realtime",
          "signature": "ClockTime -\u003e time",
          "source": "src/Haskore-RealTime-Timer.html#clockTimeToSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "clockTimeToSeconds",
          "normalized": "ClockTime-\u003ea",
          "package": "haskore-realtime",
          "partial": "Time To Seconds",
          "signature": "ClockTime-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:clockTimeToSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "clockTimeToWaitTime",
          "package": "haskore-realtime",
          "signature": "Integer -\u003e ClockTime -\u003e Integer",
          "source": "src/Haskore-RealTime-Timer.html#clockTimeToWaitTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "clockTimeToWaitTime",
          "normalized": "Integer-\u003eClockTime-\u003eInteger",
          "package": "haskore-realtime",
          "partial": "Time To Wait Time",
          "signature": "Integer-\u003eClockTime-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:clockTimeToWaitTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "getClockTime",
          "package": "haskore-realtime",
          "signature": "m ClockTime",
          "source": "src/Haskore-RealTime-Timer.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "getClockTime",
          "package": "haskore-realtime",
          "partial": "Clock Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:getClockTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "getTime",
          "package": "haskore-realtime",
          "signature": "T m -\u003e m Integer",
          "source": "src/Haskore-RealTime-Timer.html#getTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "getTime",
          "normalized": "T a-\u003ea Integer",
          "package": "haskore-realtime",
          "partial": "Time",
          "signature": "T m-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "getTimeSeconds",
          "package": "haskore-realtime",
          "signature": "T m -\u003e m time",
          "source": "src/Haskore-RealTime-Timer.html#getTimeSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "getTimeSeconds",
          "normalized": "T a-\u003ea b",
          "package": "haskore-realtime",
          "partial": "Time Seconds",
          "signature": "T m-\u003em time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:getTimeSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "lift",
          "package": "haskore-realtime",
          "signature": "T m -\u003e T (t m)",
          "source": "src/Haskore-RealTime-Timer.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "lift",
          "normalized": "T a-\u003eT(b a)",
          "package": "haskore-realtime",
          "signature": "T m-\u003eT(t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "liftIO",
          "package": "haskore-realtime",
          "signature": "T IO -\u003e T io",
          "source": "src/Haskore-RealTime-Timer.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "liftIO",
          "normalized": "T IO-\u003eT a",
          "package": "haskore-realtime",
          "partial": "IO",
          "signature": "T IO-\u003eT io",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "resolution",
          "package": "haskore-realtime",
          "signature": "Integer",
          "source": "src/Haskore-RealTime-Timer.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "resolution",
          "package": "haskore-realtime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:resolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "wait",
          "package": "haskore-realtime",
          "signature": "T m -\u003e Integer -\u003e m ()",
          "source": "src/Haskore-RealTime-Timer.html#wait",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "wait",
          "normalized": "T a-\u003eInteger-\u003ea()",
          "package": "haskore-realtime",
          "signature": "T m-\u003eInteger-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "waitInt",
          "package": "haskore-realtime",
          "signature": "Int -\u003e m ()",
          "source": "src/Haskore-RealTime-Timer.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "waitInt",
          "normalized": "Int-\u003ea()",
          "package": "haskore-realtime",
          "partial": "Int",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:waitInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "waitUntil",
          "package": "haskore-realtime",
          "signature": "T m -\u003e Integer -\u003e m ()",
          "source": "src/Haskore-RealTime-Timer.html#waitUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "waitUntil",
          "normalized": "T a-\u003eInteger-\u003ea()",
          "package": "haskore-realtime",
          "partial": "Until",
          "signature": "T m-\u003eInteger-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:waitUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Haskore.RealTime.Timer",
          "name": "waitUntilSeconds",
          "package": "haskore-realtime",
          "signature": "T m -\u003e time -\u003e m ()",
          "source": "src/Haskore-RealTime-Timer.html#waitUntilSeconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Haskore RealTime Timer",
          "module": "Haskore.RealTime.Timer",
          "name": "waitUntilSeconds",
          "normalized": "T a-\u003eb-\u003ea()",
          "package": "haskore-realtime",
          "partial": "Until Seconds",
          "signature": "T m-\u003etime-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskore-realtime/docs/Haskore-RealTime-Timer.html#v:waitUntilSeconds"
      }
    }
  ]
]