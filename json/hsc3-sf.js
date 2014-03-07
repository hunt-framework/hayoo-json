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
        "word": "hsc3-sf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDecoder for audio data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Decode",
          "name": "Decode",
          "package": "hsc3-sf",
          "source": "src/Sound-File-Decode.html",
          "type": "module"
        },
        "index": {
          "description": "Decoder for audio data",
          "hierarchy": "Sound File Decode",
          "module": "Sound.File.Decode",
          "name": "Decode",
          "package": "hsc3-sf",
          "partial": "Decode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e and the number of channels, decode\n a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to set of \u003ccode\u003e\u003ca\u003edeinterleave\u003c/a\u003e\u003c/code\u003ed channels.\n\u003c/p\u003e",
          "module": "Sound.File.Decode",
          "name": "decode",
          "package": "hsc3-sf",
          "signature": "Encoding -\u003e Int -\u003e ByteString -\u003e [[n]]",
          "source": "src/Sound-File-Decode.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Given an Encoding and the number of channels decode ByteString to set of deinterleave channels",
          "hierarchy": "Sound File Decode",
          "module": "Sound.File.Decode",
          "name": "decode",
          "normalized": "Encoding-\u003eInt-\u003eByteString-\u003e[[a]]",
          "package": "hsc3-sf",
          "signature": "Encoding-\u003eInt-\u003eByteString-\u003e[[n]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven channel count, deinterleave list to set of channels.\n\u003c/p\u003e\u003cpre\u003e deinterleave 2 [0..9] == [[0,2,4,6,8],[1,3,5,7,9]]\n\u003c/pre\u003e",
          "module": "Sound.File.Decode",
          "name": "deinterleave",
          "package": "hsc3-sf",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Sound-File-Decode.html#deinterleave",
          "type": "function"
        },
        "index": {
          "description": "Given channel count deinterleave list to set of channels deinterleave",
          "hierarchy": "Sound File Decode",
          "module": "Sound.File.Decode",
          "name": "deinterleave",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "hsc3-sf",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Decode.html#v:deinterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncode audio data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Encode",
          "name": "Encode",
          "package": "hsc3-sf",
          "source": "src/Sound-File-Encode.html",
          "type": "module"
        },
        "index": {
          "description": "Encode audio data",
          "hierarchy": "Sound File Encode",
          "module": "Sound.File.Encode",
          "name": "Encode",
          "package": "hsc3-sf",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e and a set of channels, \u003ccode\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/code\u003e and encode\n as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Encode",
          "name": "encode",
          "package": "hsc3-sf",
          "signature": "Encoding -\u003e [[n]] -\u003e ByteString",
          "source": "src/Sound-File-Encode.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Given Encoding and set of channels interleave and encode as ByteString",
          "hierarchy": "Sound File Encode",
          "module": "Sound.File.Encode",
          "name": "encode",
          "normalized": "Encoding-\u003e[[a]]-\u003eByteString",
          "package": "hsc3-sf",
          "signature": "Encoding-\u003e[[n]]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave channel data, ie. \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e interleave [[0,2..8],[1,3..9]] == [0,1,2,3,4,5,6,7,8,9]\n\u003c/pre\u003e",
          "module": "Sound.File.Encode",
          "name": "interleave",
          "package": "hsc3-sf",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Sound-File-Encode.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave channel data ie concat transpose interleave",
          "hierarchy": "Sound File Encode",
          "module": "Sound.File.Encode",
          "name": "interleave",
          "normalized": "[[a]]-\u003e[a]",
          "package": "hsc3-sf",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encode.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAudio data encodings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Encoding",
          "name": "Encoding",
          "package": "hsc3-sf",
          "source": "src/Sound-File-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "Audio data encodings",
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Encoding",
          "package": "hsc3-sf",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnemeration of valid audio data encodings.\n\u003c/p\u003e",
          "module": "Sound.File.Encoding",
          "name": "Encoding",
          "package": "hsc3-sf",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "data"
        },
        "index": {
          "description": "Enemeration of valid audio data encodings",
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Encoding",
          "package": "hsc3-sf",
          "partial": "Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#t:Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Encoding",
          "name": "Double",
          "package": "hsc3-sf",
          "signature": "Double",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Double",
          "package": "hsc3-sf",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Encoding",
          "name": "Float",
          "package": "hsc3-sf",
          "signature": "Float",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Float",
          "package": "hsc3-sf",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Encoding",
          "name": "Linear16",
          "package": "hsc3-sf",
          "signature": "Linear16",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Linear16",
          "package": "hsc3-sf",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Encoding",
          "name": "Linear32",
          "package": "hsc3-sf",
          "signature": "Linear32",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Linear32",
          "package": "hsc3-sf",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Encoding",
          "name": "Linear8",
          "package": "hsc3-sf",
          "signature": "Linear8",
          "source": "src/Sound-File-Encoding.html#Encoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "Linear8",
          "package": "hsc3-sf",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:Linear8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBytes per sample at \u003ccode\u003e\u003ca\u003eEncoding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Encoding",
          "name": "sizeOf",
          "package": "hsc3-sf",
          "signature": "Encoding -\u003e Int",
          "source": "src/Sound-File-Encoding.html#sizeOf",
          "type": "function"
        },
        "index": {
          "description": "Bytes per sample at Encoding",
          "hierarchy": "Sound File Encoding",
          "module": "Sound.File.Encoding",
          "name": "sizeOf",
          "normalized": "Encoding-\u003eInt",
          "package": "hsc3-sf",
          "partial": "Of",
          "signature": "Encoding-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-Encoding.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write NeXT/Sun format sound files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.NeXT",
          "name": "NeXT",
          "package": "hsc3-sf",
          "source": "src/Sound-File-NeXT.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write NeXT Sun format sound files",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "NeXT",
          "package": "hsc3-sf",
          "partial": "Ne XT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of channels at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "ChannelCount",
          "package": "hsc3-sf",
          "source": "src/Sound-File-NeXT.html#ChannelCount",
          "type": "type"
        },
        "index": {
          "description": "Number of channels at Header",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "ChannelCount",
          "package": "hsc3-sf",
          "partial": "Channel Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:ChannelCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of frames at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "FrameCount",
          "package": "hsc3-sf",
          "source": "src/Sound-File-NeXT.html#FrameCount",
          "type": "type"
        },
        "index": {
          "description": "Number of frames at Header",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "FrameCount",
          "package": "hsc3-sf",
          "partial": "Frame Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:FrameCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type encapsulating sound file meta data.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "Header",
          "package": "hsc3-sf",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "data"
        },
        "index": {
          "description": "Data type encapsulating sound file meta data",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "Header",
          "package": "hsc3-sf",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample rate at \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "SampleRate",
          "package": "hsc3-sf",
          "source": "src/Sound-File-NeXT.html#SampleRate",
          "type": "type"
        },
        "index": {
          "description": "Sample rate at Header",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "SampleRate",
          "package": "hsc3-sf",
          "partial": "Sample Rate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#t:SampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.NeXT",
          "name": "Header",
          "package": "hsc3-sf",
          "signature": "Header",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "Header",
          "package": "hsc3-sf",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.NeXT",
          "name": "channelCount",
          "package": "hsc3-sf",
          "signature": "ChannelCount",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "channelCount",
          "package": "hsc3-sf",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:channelCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.NeXT",
          "name": "encoding",
          "package": "hsc3-sf",
          "signature": "Encoding",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "encoding",
          "package": "hsc3-sf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.NeXT",
          "name": "frameCount",
          "package": "hsc3-sf",
          "signature": "FrameCount",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "frameCount",
          "package": "hsc3-sf",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:frameCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sound file meta data.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "header",
          "package": "hsc3-sf",
          "signature": "FilePath -\u003e IO Header",
          "source": "src/Sound-File-NeXT.html#header",
          "type": "function"
        },
        "index": {
          "description": "Read sound file meta data",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "header",
          "normalized": "FilePath-\u003eIO Header",
          "package": "hsc3-sf",
          "signature": "FilePath-\u003eIO Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sound file, data is interleaved.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "read",
          "package": "hsc3-sf",
          "signature": "FilePath -\u003e IO (Header, [[n]])",
          "source": "src/Sound-File-NeXT.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read sound file data is interleaved",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "read",
          "normalized": "FilePath-\u003eIO(Header,[[a]])",
          "package": "hsc3-sf",
          "signature": "FilePath-\u003eIO(Header,[[n]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.NeXT",
          "name": "sampleRate",
          "package": "hsc3-sf",
          "signature": "SampleRate",
          "source": "src/Sound-File-NeXT.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "sampleRate",
          "package": "hsc3-sf",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:sampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sound file, data is non-interleaved.\n\u003c/p\u003e",
          "module": "Sound.File.NeXT",
          "name": "write",
          "package": "hsc3-sf",
          "signature": "FilePath -\u003e Header -\u003e [[n]] -\u003e IO ()",
          "source": "src/Sound-File-NeXT.html#write",
          "type": "function"
        },
        "index": {
          "description": "Write sound file data is non-interleaved",
          "hierarchy": "Sound File NeXT",
          "module": "Sound.File.NeXT",
          "name": "write",
          "normalized": "FilePath-\u003eHeader-\u003e[[a]]-\u003eIO()",
          "package": "hsc3-sf",
          "signature": "FilePath-\u003eHeader-\u003e[[n]]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf/docs/Sound-File-NeXT.html#v:write"
      }
    }
  ]
]