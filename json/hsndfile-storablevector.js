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
        "word": "hsndfile-storablevector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some examples for soundfile I/O with \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e. Click the \u003cem\u003eSource\u003c/em\u003e links to access the source code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector.Examples",
          "name": "Examples",
          "package": "hsndfile-storablevector",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some examples for soundfile with Buffer Click the Source links to access the source code",
          "hierarchy": "Sound File Sndfile Buffer StorableVector Examples",
          "module": "Sound.File.Sndfile.Buffer.StorableVector.Examples",
          "name": "Examples",
          "package": "hsndfile-storablevector",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a sound file, normalize the contents and write it back.\n\u003c/p\u003e\u003cp\u003eThe file is read into memory in its entirety, which may not be feasible for large files. No deinterleaving is needed in this case.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector.Examples",
          "name": "normalizeSoundFile",
          "package": "hsndfile-storablevector",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector-Examples.html#normalizeSoundFile",
          "type": "function"
        },
        "index": {
          "description": "Read sound file normalize the contents and write it back The file is read into memory in its entirety which may not be feasible for large files No deinterleaving is needed in this case",
          "hierarchy": "Sound File Sndfile Buffer StorableVector Examples",
          "module": "Sound.File.Sndfile.Buffer.StorableVector.Examples",
          "name": "normalizeSoundFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "hsndfile-storablevector",
          "partial": "Sound File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector-Examples.html#v:normalizeSoundFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, wrapped in a newtype. See \u003ca\u003eSound.File.Sndfile.Buffer.StorableVector.Examples\u003c/a\u003e for some example code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "StorableVector",
          "package": "hsndfile-storablevector",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Buffer instance for Vector wrapped in newtype See Sound.File.Sndfile.Buffer.StorableVector.Examples for some example code",
          "hierarchy": "Sound File Sndfile Buffer StorableVector",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "StorableVector",
          "package": "hsndfile-storablevector",
          "partial": "Storable Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "Buffer",
          "package": "hsndfile-storablevector",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector.html#Buffer",
          "type": "data"
        },
        "index": {
          "description": "Newtype wrapper for Vector",
          "hierarchy": "Sound File Sndfile Buffer StorableVector",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "Buffer",
          "package": "hsndfile-storablevector",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "fromBuffer",
          "package": "hsndfile-storablevector",
          "signature": "Buffer a -\u003e Vector a",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector.html#fromBuffer",
          "type": "function"
        },
        "index": {
          "description": "Extract the Vector from Buffer",
          "hierarchy": "Sound File Sndfile Buffer StorableVector",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "fromBuffer",
          "normalized": "Buffer a-\u003eVector a",
          "package": "hsndfile-storablevector",
          "partial": "Buffer",
          "signature": "Buffer a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector.html#v:fromBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "toBuffer",
          "package": "hsndfile-storablevector",
          "signature": "Vector a -\u003e Buffer a",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector.html#toBuffer",
          "type": "function"
        },
        "index": {
          "description": "Construct Buffer from Vector",
          "hierarchy": "Sound File Sndfile Buffer StorableVector",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "toBuffer",
          "normalized": "Vector a-\u003eBuffer a",
          "package": "hsndfile-storablevector",
          "partial": "Buffer",
          "signature": "Vector a-\u003eBuffer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector.html#v:toBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "withBuffer",
          "package": "hsndfile-storablevector",
          "signature": "(Vector a -\u003e Vector b) -\u003e Buffer a -\u003e Buffer b",
          "source": "src/Sound-File-Sndfile-Buffer-StorableVector.html#withBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile Buffer StorableVector",
          "module": "Sound.File.Sndfile.Buffer.StorableVector",
          "name": "withBuffer",
          "normalized": "(Vector a-\u003eVector b)-\u003eBuffer a-\u003eBuffer b",
          "package": "hsndfile-storablevector",
          "partial": "Buffer",
          "signature": "(Vector a-\u003eVector b)-\u003eBuffer a-\u003eBuffer b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-storablevector/docs/Sound-File-Sndfile-Buffer-StorableVector.html#v:withBuffer"
      }
    }
  ]
]