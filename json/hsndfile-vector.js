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
        "word": "hsndfile-vector"
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
          "module": "Sound.File.Sndfile.Buffer.Vector.Examples",
          "name": "Examples",
          "package": "hsndfile-vector",
          "source": "src/Sound-File-Sndfile-Buffer-Vector-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some examples for soundfile with Buffer Click the Source links to access the source code",
          "hierarchy": "Sound File Sndfile Buffer Vector Examples",
          "module": "Sound.File.Sndfile.Buffer.Vector.Examples",
          "name": "Examples",
          "package": "hsndfile-vector",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a sound file, normalize the contents and write it back.\n\u003c/p\u003e\u003cp\u003eThe file is read into memory in its entirety, which may not be feasible for large files. No deinterleaving is needed in this case.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.Vector.Examples",
          "name": "normalizeSoundFile",
          "package": "hsndfile-vector",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Sound-File-Sndfile-Buffer-Vector-Examples.html#normalizeSoundFile",
          "type": "function"
        },
        "index": {
          "description": "Read sound file normalize the contents and write it back The file is read into memory in its entirety which may not be feasible for large files No deinterleaving is needed in this case",
          "hierarchy": "Sound File Sndfile Buffer Vector Examples",
          "module": "Sound.File.Sndfile.Buffer.Vector.Examples",
          "name": "normalizeSoundFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "hsndfile-vector",
          "partial": "Sound File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector-Examples.html#v:normalizeSoundFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, wrapped in a newtype. See \u003ca\u003eSound.File.Sndfile.Buffer.Vector.Examples\u003c/a\u003e for some example code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "Vector",
          "package": "hsndfile-vector",
          "source": "src/Sound-File-Sndfile-Buffer-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Buffer instance for Vector wrapped in newtype See Sound.File.Sndfile.Buffer.Vector.Examples for some example code",
          "hierarchy": "Sound File Sndfile Buffer Vector",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "Vector",
          "package": "hsndfile-vector",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper for \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "Buffer",
          "package": "hsndfile-vector",
          "source": "src/Sound-File-Sndfile-Buffer-Vector.html#Buffer",
          "type": "data"
        },
        "index": {
          "description": "Newtype wrapper for Vector",
          "hierarchy": "Sound File Sndfile Buffer Vector",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "Buffer",
          "package": "hsndfile-vector",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "fromBuffer",
          "package": "hsndfile-vector",
          "signature": "Buffer a -\u003e Vector a",
          "source": "src/Sound-File-Sndfile-Buffer-Vector.html#fromBuffer",
          "type": "function"
        },
        "index": {
          "description": "Extract the Vector from Buffer",
          "hierarchy": "Sound File Sndfile Buffer Vector",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "fromBuffer",
          "normalized": "Buffer a-\u003eVector a",
          "package": "hsndfile-vector",
          "partial": "Buffer",
          "signature": "Buffer a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector.html#v:fromBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "toBuffer",
          "package": "hsndfile-vector",
          "signature": "Vector a -\u003e Buffer a",
          "source": "src/Sound-File-Sndfile-Buffer-Vector.html#toBuffer",
          "type": "function"
        },
        "index": {
          "description": "Construct Buffer from Vector",
          "hierarchy": "Sound File Sndfile Buffer Vector",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "toBuffer",
          "normalized": "Vector a-\u003eBuffer a",
          "package": "hsndfile-vector",
          "partial": "Buffer",
          "signature": "Vector a-\u003eBuffer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector.html#v:toBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "withBuffer",
          "package": "hsndfile-vector",
          "signature": "(Vector a -\u003e Vector b) -\u003e Buffer a -\u003e Buffer b",
          "source": "src/Sound-File-Sndfile-Buffer-Vector.html#withBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File Sndfile Buffer Vector",
          "module": "Sound.File.Sndfile.Buffer.Vector",
          "name": "withBuffer",
          "normalized": "(Vector a-\u003eVector b)-\u003eBuffer a-\u003eBuffer b",
          "package": "hsndfile-vector",
          "partial": "Buffer",
          "signature": "(Vector a-\u003eVector b)-\u003eBuffer a-\u003eBuffer b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsndfile-vector/docs/Sound-File-Sndfile-Buffer-Vector.html#v:withBuffer"
      }
    }
  ]
]