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
        "word": "hsc3-sf-hsndfile"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write sound files using hsndfile.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.File.HSndFile",
          "name": "HSndFile",
          "package": "hsc3-sf-hsndfile",
          "source": "src/Sound-File-HSndFile.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write sound files using hsndfile",
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "HSndFile",
          "package": "hsc3-sf-hsndfile",
          "partial": "HSnd File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSound file meta data.\n\u003c/p\u003e",
          "module": "Sound.File.HSndFile",
          "name": "Header",
          "package": "hsc3-sf-hsndfile",
          "source": "src/Sound-File-HSndFile.html#Header",
          "type": "data"
        },
        "index": {
          "description": "Sound file meta data",
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "Header",
          "package": "hsc3-sf-hsndfile",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.HSndFile",
          "name": "Header",
          "package": "hsc3-sf-hsndfile",
          "signature": "Header",
          "source": "src/Sound-File-HSndFile.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "Header",
          "package": "hsc3-sf-hsndfile",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.HSndFile",
          "name": "channelCount",
          "package": "hsc3-sf-hsndfile",
          "signature": "Int",
          "source": "src/Sound-File-HSndFile.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "channelCount",
          "package": "hsc3-sf-hsndfile",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:channelCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.HSndFile",
          "name": "frameCount",
          "package": "hsc3-sf-hsndfile",
          "signature": "Int",
          "source": "src/Sound-File-HSndFile.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "frameCount",
          "package": "hsc3-sf-hsndfile",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:frameCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e of sound file.\n\u003c/p\u003e",
          "module": "Sound.File.HSndFile",
          "name": "header",
          "package": "hsc3-sf-hsndfile",
          "signature": "FilePath -\u003e IO Header",
          "source": "src/Sound-File-HSndFile.html#header",
          "type": "function"
        },
        "index": {
          "description": "Read Header of sound file",
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "header",
          "normalized": "FilePath-\u003eIO Header",
          "package": "hsc3-sf-hsndfile",
          "signature": "FilePath-\u003eIO Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e and audio channel data from sound file.\n\u003c/p\u003e",
          "module": "Sound.File.HSndFile",
          "name": "read",
          "package": "hsc3-sf-hsndfile",
          "signature": "FilePath -\u003e IO (Header, [[Double]])",
          "source": "src/Sound-File-HSndFile.html#read",
          "type": "function"
        },
        "index": {
          "description": "Read Header and audio channel data from sound file",
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "read",
          "normalized": "FilePath-\u003eIO(Header,[[Double]])",
          "package": "hsc3-sf-hsndfile",
          "signature": "FilePath-\u003eIO(Header,[[Double]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.File.HSndFile",
          "name": "sampleRate",
          "package": "hsc3-sf-hsndfile",
          "signature": "Double",
          "source": "src/Sound-File-HSndFile.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound File HSndFile",
          "module": "Sound.File.HSndFile",
          "name": "sampleRate",
          "package": "hsc3-sf-hsndfile",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-sf-hsndfile/docs/Sound-File-HSndFile.html#v:sampleRate"
      }
    }
  ]
]