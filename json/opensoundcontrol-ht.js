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
        "word": "opensoundcontrol-ht"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "File",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound OpenSoundControl Transport File",
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "File",
          "package": "opensoundcontrol-ht",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe File transport handle data type.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "T",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-File.html#T",
          "type": "data"
        },
        "index": {
          "description": "The File transport handle data type",
          "hierarchy": "Sound OpenSoundControl Transport File",
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "T",
          "package": "opensoundcontrol-ht",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-File.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a command file.\nAll \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e calls are answered with \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "open",
          "package": "opensoundcontrol-ht",
          "signature": "OSC -\u003e FilePath -\u003e IO T",
          "source": "src/Sound-OpenSoundControl-Transport-File.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open command file All recv calls are answered with msg",
          "hierarchy": "Sound OpenSoundControl Transport File",
          "module": "Sound.OpenSoundControl.Transport.File",
          "name": "open",
          "normalized": "OSC-\u003eFilePath-\u003eIO T",
          "package": "opensoundcontrol-ht",
          "signature": "OSC-\u003eFilePath-\u003eIO T",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-File.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OpenSoundControl.Transport.Monad.ByteString",
          "name": "ByteString",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-Monad-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound OpenSoundControl Transport Monad ByteString",
          "module": "Sound.OpenSoundControl.Transport.Monad.ByteString",
          "name": "ByteString",
          "package": "opensoundcontrol-ht",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sent messages to a ByteString.\nAll \u003ccode\u003erecv\u003c/code\u003e calls are answered with \u003ccode\u003emsg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.ByteString",
          "name": "run",
          "package": "opensoundcontrol-ht",
          "signature": "OSC -\u003e T () -\u003e ByteString",
          "source": "src/Sound-OpenSoundControl-Transport-Monad-ByteString.html#run",
          "type": "function"
        },
        "index": {
          "description": "Write sent messages to ByteString All recv calls are answered with msg",
          "hierarchy": "Sound OpenSoundControl Transport Monad ByteString",
          "module": "Sound.OpenSoundControl.Transport.Monad.ByteString",
          "name": "run",
          "normalized": "OSC-\u003eT()-\u003eByteString",
          "package": "opensoundcontrol-ht",
          "signature": "OSC-\u003eT()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-ByteString.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRun a generic Transport monad action in the IO monad\nusing the IO transport types, e.g. TCP, UDP, or File.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "IO",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-Monad-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Run generic Transport monad action in the IO monad using the IO transport types e.g TCP UDP or File",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "IO",
          "package": "opensoundcontrol-ht",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "T",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-Monad-IO.html#T",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "T",
          "package": "opensoundcontrol-ht",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract over the underlying transport protocol.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "Transport",
          "package": "opensoundcontrol-ht",
          "type": "class"
        },
        "index": {
          "description": "Abstract over the underlying transport protocol",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "Transport",
          "package": "opensoundcontrol-ht",
          "partial": "Transport",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#t:Transport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive and decode an OSC packet.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "recv",
          "package": "opensoundcontrol-ht",
          "signature": "m OSC",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Receive and decode an OSC packet",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "recv",
          "package": "opensoundcontrol-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode and send an OSC packet.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "send",
          "package": "opensoundcontrol-ht",
          "signature": "OSC -\u003e m ()",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#send",
          "type": "function"
        },
        "index": {
          "description": "Encode and send an OSC packet",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "send",
          "normalized": "OSC-\u003ea()",
          "package": "opensoundcontrol-ht",
          "signature": "OSC-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ewaitFor\u003c/a\u003e\u003c/code\u003e for variant matching on address string of messages.\n\u003c/p\u003e",
          "module": "[\"Sound.OpenSoundControl.Transport.Monad.IO\",\"Sound.OpenSoundControl.Transport.Monad\"]",
          "name": "wait",
          "package": "opensoundcontrol-ht",
          "signature": "String -\u003e m OSC",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#wait",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:wait\",\"http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#v:wait\"]"
        },
        "index": {
          "description": "waitFor for variant matching on address string of messages",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "wait",
          "normalized": "String-\u003ea OSC",
          "package": "opensoundcontrol-ht",
          "signature": "String-\u003em OSC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an OSC message where the supplied function does not give\n   Nothing, discarding intervening messages.\n\u003c/p\u003e",
          "module": "[\"Sound.OpenSoundControl.Transport.Monad.IO\",\"Sound.OpenSoundControl.Transport.Monad\"]",
          "name": "waitFor",
          "package": "opensoundcontrol-ht",
          "signature": "(OSC -\u003e Maybe a) -\u003e m a",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#waitFor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:waitFor\",\"http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#v:waitFor\"]"
        },
        "index": {
          "description": "Wait for an OSC message where the supplied function does not give Nothing discarding intervening messages",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "waitFor",
          "normalized": "(OSC-\u003eMaybe a)-\u003eb a",
          "package": "opensoundcontrol-ht",
          "partial": "For",
          "signature": "(OSC-\u003eMaybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:waitFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBracket Open Sound Control communication.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "with",
          "package": "opensoundcontrol-ht",
          "signature": "IO t -\u003e T t a -\u003e IO a",
          "source": "src/Sound-OpenSoundControl-Transport-Monad-IO.html#with",
          "type": "function"
        },
        "index": {
          "description": "Bracket Open Sound Control communication",
          "hierarchy": "Sound OpenSoundControl Transport Monad IO",
          "module": "Sound.OpenSoundControl.Transport.Monad.IO",
          "name": "with",
          "normalized": "IO a-\u003eT a b-\u003eIO b",
          "package": "opensoundcontrol-ht",
          "signature": "IO t-\u003eT t a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad-IO.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad class for monads that are able to do or simulate communication\nvia Open Sound Control.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "Monad",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad class for monads that are able to do or simulate communication via Open Sound Control",
          "hierarchy": "Sound OpenSoundControl Transport Monad",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "Monad",
          "package": "opensoundcontrol-ht",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "C",
          "package": "opensoundcontrol-ht",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Sound OpenSoundControl Transport Monad",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "C",
          "package": "opensoundcontrol-ht",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive and decode an OSC packet.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "recv",
          "package": "opensoundcontrol-ht",
          "signature": "m OSC",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#recv",
          "type": "method"
        },
        "index": {
          "description": "Receive and decode an OSC packet",
          "hierarchy": "Sound OpenSoundControl Transport Monad",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "recv",
          "package": "opensoundcontrol-ht",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode and send an OSC packet.\n\u003c/p\u003e",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "send",
          "package": "opensoundcontrol-ht",
          "signature": "OSC -\u003e m ()",
          "source": "src/Sound-OpenSoundControl-Transport-Monad.html#send",
          "type": "method"
        },
        "index": {
          "description": "Encode and send an OSC packet",
          "hierarchy": "Sound OpenSoundControl Transport Monad",
          "module": "Sound.OpenSoundControl.Transport.Monad",
          "name": "send",
          "normalized": "OSC-\u003ea()",
          "package": "opensoundcontrol-ht",
          "signature": "OSC-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/opensoundcontrol-ht/docs/Sound-OpenSoundControl-Transport-Monad.html#v:send"
      }
    }
  ]
]