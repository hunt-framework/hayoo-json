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
        "word": "vorbiscomment"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "Vorbis",
          "package": "vorbiscomment",
          "source": "src/Codec-Audio-Vorbis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "Vorbis",
          "package": "vorbiscomment",
          "partial": "Vorbis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "AudioInfo",
          "package": "vorbiscomment",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "AudioInfo",
          "package": "vorbiscomment",
          "partial": "Audio Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#t:AudioInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "AudioInfo",
          "package": "vorbiscomment",
          "signature": "AudioInfo",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "AudioInfo",
          "package": "vorbiscomment",
          "partial": "Audio Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:AudioInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "channels",
          "package": "vorbiscomment",
          "signature": "Word8",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "channels",
          "package": "vorbiscomment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:channels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "maxBitrate",
          "package": "vorbiscomment",
          "signature": "Word32",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "maxBitrate",
          "package": "vorbiscomment",
          "partial": "Bitrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:maxBitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "minBitrate",
          "package": "vorbiscomment",
          "signature": "Word32",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "minBitrate",
          "package": "vorbiscomment",
          "partial": "Bitrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:minBitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "nominalBitrate",
          "package": "vorbiscomment",
          "signature": "Word32",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "nominalBitrate",
          "package": "vorbiscomment",
          "partial": "Bitrate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:nominalBitrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "playtime",
          "package": "vorbiscomment",
          "signature": "Maybe Double",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "playtime",
          "package": "vorbiscomment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:playtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "readAudioInfoAndComment",
          "package": "vorbiscomment",
          "signature": "FilePath -\u003e IO (Either String (AudioInfo, [(String, String)]))",
          "source": "src/Codec-Audio-Vorbis.html#readAudioInfoAndComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "readAudioInfoAndComment",
          "normalized": "FilePath-\u003eIO(Either String(AudioInfo,[(String,String)]))",
          "package": "vorbiscomment",
          "partial": "Audio Info And Comment",
          "signature": "FilePath-\u003eIO(Either String(AudioInfo,[(String,String)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:readAudioInfoAndComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Audio.Vorbis",
          "name": "sampleRate",
          "package": "vorbiscomment",
          "signature": "Word32",
          "source": "src/Codec-Audio-Vorbis.html#AudioInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Audio Vorbis",
          "module": "Codec.Audio.Vorbis",
          "name": "sampleRate",
          "package": "vorbiscomment",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vorbiscomment/docs/Codec-Audio-Vorbis.html#v:sampleRate"
      }
    }
  ]
]