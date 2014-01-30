[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDecoder for audio data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.Decode",
        "fct-package": "hsc3-sf",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-Decode.html",
        "fct-type": "module",
        "title": "Decode"
      },
      "index": {
        "description": "Decoder for audio data",
        "hierarchy": "Sound File Decode",
        "module": "Sound.File.Decode",
        "name": "Decode",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e and the number of channels, decode\n a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to set of \u003ccode\u003e\u003ca\u003edeinterleave\u003c/a\u003e\u003c/code\u003ed channels.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Decode",
        "fct-package": "hsc3-sf",
        "fct-signature": "Encoding -\u003e Int -\u003e ByteString -\u003e [[n]]",
        "fct-source": "src/Sound-File-Decode.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Given an Encoding and the number of channels decode ByteString to set of deinterleave channels",
        "hierarchy": "Sound File Decode",
        "module": "Sound.File.Decode",
        "name": "decode",
        "normalized": "Encoding-\u003eInt-\u003eByteString-\u003e[[a]]",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "Encoding-\u003eInt-\u003eByteString-\u003e[[n]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#v:deinterleave",
      "description": {
        "fct-descr": "\u003cp\u003eGiven channel count, deinterleave list to set of channels.\n\u003c/p\u003e\u003cpre\u003e deinterleave 2 [0..9] == [[0,2,4,6,8],[1,3,5,7,9]]\n\u003c/pre\u003e",
        "fct-module": "Sound.File.Decode",
        "fct-package": "hsc3-sf",
        "fct-signature": "Int -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Sound-File-Decode.html#deinterleave",
        "fct-type": "function",
        "title": "deinterleave"
      },
      "index": {
        "description": "Given channel count deinterleave list to set of channels deinterleave",
        "hierarchy": "Sound File Decode",
        "module": "Sound.File.Decode",
        "name": "deinterleave",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncode audio data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.Encode",
        "fct-package": "hsc3-sf",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-Encode.html",
        "fct-type": "module",
        "title": "Encode"
      },
      "index": {
        "description": "Encode audio data",
        "hierarchy": "Sound File Encode",
        "module": "Sound.File.Encode",
        "name": "Encode",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e and a set of channels, \u003ccode\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/code\u003e and encode\n as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Encode",
        "fct-package": "hsc3-sf",
        "fct-signature": "Encoding -\u003e [[n]] -\u003e ByteString",
        "fct-source": "src/Sound-File-Encode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Given Encoding and set of channels interleave and encode as ByteString",
        "hierarchy": "Sound File Encode",
        "module": "Sound.File.Encode",
        "name": "encode",
        "normalized": "Encoding-\u003e[[a]]-\u003eByteString",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "Encoding-\u003e[[n]]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eInterleave channel data, ie. \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e interleave [[0,2..8],[1,3..9]] == [0,1,2,3,4,5,6,7,8,9]\n\u003c/pre\u003e",
        "fct-module": "Sound.File.Encode",
        "fct-package": "hsc3-sf",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Sound-File-Encode.html#interleave",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "Interleave channel data ie concat transpose interleave",
        "hierarchy": "Sound File Encode",
        "module": "Sound.File.Encode",
        "name": "interleave",
        "normalized": "[[a]]-\u003e[a]",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAudio data encodings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "Audio data encodings",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#t:Encoding",
      "description": {
        "fct-descr": "\u003cp\u003eEnemeration of valid audio data encodings.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "data",
        "title": "Encoding"
      },
      "index": {
        "description": "Enemeration of valid audio data encodings",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Double",
      "description": {
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Double",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "function",
        "title": "Double"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Double",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Float",
      "description": {
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Float",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "function",
        "title": "Float"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Float",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear16",
      "description": {
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Linear16",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "function",
        "title": "Linear16"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Linear16",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear32",
      "description": {
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Linear32",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "function",
        "title": "Linear32"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Linear32",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear8",
      "description": {
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Linear8",
        "fct-source": "src/Sound-File-Encoding.html#Encoding",
        "fct-type": "function",
        "title": "Linear8"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "Linear8",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:sizeOf",
      "description": {
        "fct-descr": "\u003cp\u003eBytes per sample at \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.Encoding",
        "fct-package": "hsc3-sf",
        "fct-signature": "Encoding -\u003e Int",
        "fct-source": "src/Sound-File-Encoding.html#sizeOf",
        "fct-type": "function",
        "title": "sizeOf"
      },
      "index": {
        "description": "Bytes per sample at Encoding",
        "hierarchy": "Sound File Encoding",
        "module": "Sound.File.Encoding",
        "name": "sizeOf",
        "normalized": "Encoding-\u003eInt",
        "package": "hsc3-sf",
        "partial": "Of",
        "signature": "Encoding-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write NeXT/Sun format sound files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "module",
        "fct-source": "src/Sound-File-NeXT.html",
        "fct-type": "module",
        "title": "NeXT"
      },
      "index": {
        "description": "Read and write NeXT Sun format sound files",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "NeXT",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Ne XT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:ChannelCount",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of channels at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "type",
        "fct-source": "src/Sound-File-NeXT.html#ChannelCount",
        "fct-type": "type",
        "title": "ChannelCount"
      },
      "index": {
        "description": "Number of channels at Header",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "ChannelCount",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Channel Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:FrameCount",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of frames at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "type",
        "fct-source": "src/Sound-File-NeXT.html#FrameCount",
        "fct-type": "type",
        "title": "FrameCount"
      },
      "index": {
        "description": "Number of frames at Header",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "FrameCount",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Frame Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:Header",
      "description": {
        "fct-descr": "\u003cp\u003eData type encapsulating sound file meta data.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "data",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "data",
        "title": "Header"
      },
      "index": {
        "description": "Data type encapsulating sound file meta data",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "Header",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:SampleRate",
      "description": {
        "fct-descr": "\u003cp\u003eSample rate at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "type",
        "fct-source": "src/Sound-File-NeXT.html#SampleRate",
        "fct-type": "type",
        "title": "SampleRate"
      },
      "index": {
        "description": "Sample rate at Header",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "SampleRate",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Sample Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:Header",
      "description": {
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "Header",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "Header",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:channelCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "ChannelCount",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "function",
        "title": "channelCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "channelCount",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:encoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "Encoding",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "function",
        "title": "encoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "encoding",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:frameCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "FrameCount",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "function",
        "title": "frameCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "frameCount",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:header",
      "description": {
        "fct-descr": "\u003cp\u003eRead sound file meta data.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "FilePath -\u003e IO Header",
        "fct-source": "src/Sound-File-NeXT.html#header",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "Read sound file meta data",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "header",
        "normalized": "FilePath-\u003eIO Header",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "FilePath-\u003eIO Header"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eRead sound file, data is interleaved.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "FilePath -\u003e IO (Header, [[n]])",
        "fct-source": "src/Sound-File-NeXT.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Read sound file data is interleaved",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "read",
        "normalized": "FilePath-\u003eIO(Header,[[a]])",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "FilePath-\u003eIO(Header,[[n]])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:sampleRate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "SampleRate",
        "fct-source": "src/Sound-File-NeXT.html#Header",
        "fct-type": "function",
        "title": "sampleRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "sampleRate",
        "normalized": "",
        "package": "hsc3-sf",
        "partial": "Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite sound file, data is non-interleaved.\n\u003c/p\u003e",
        "fct-module": "Sound.File.NeXT",
        "fct-package": "hsc3-sf",
        "fct-signature": "FilePath -\u003e Header -\u003e [[n]] -\u003e IO ()",
        "fct-source": "src/Sound-File-NeXT.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Write sound file data is non-interleaved",
        "hierarchy": "Sound File NeXT",
        "module": "Sound.File.NeXT",
        "name": "write",
        "normalized": "FilePath-\u003eHeader-\u003e[[a]]-\u003eIO()",
        "package": "hsc3-sf",
        "partial": "",
        "signature": "FilePath-\u003eHeader-\u003e[[n]]-\u003eIO()"
      }
    }
  }
]