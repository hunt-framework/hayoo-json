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
        "word": "zoom-cache"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBlaze-builder utility functions for writing ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html",
          "type": "module"
        },
        "index": {
          "description": "Blaze-builder utility functions for writing ZoomCache files",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "partial": "Zoom Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in big-endian IEEE 754-2008 binary64 format\n (IEEE 754-1985 double format).\n\u003c/p\u003e",
          "module": "[\"Blaze.ByteString.Builder.ZoomCache\",\"Data.ZoomCache.Codec\"]",
          "name": "fromDouble",
          "package": "zoom-cache",
          "signature": "Double -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromDouble",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromDouble\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromDouble\"]"
        },
        "index": {
          "description": "Serialize Double in big-endian IEEE binary64 format IEEE double format",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromDouble",
          "normalized": "Double-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Double",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in big-endian IEEE 754-2008 binary32 format\n (IEEE 754-1985 single format).\n\u003c/p\u003e",
          "module": "[\"Blaze.ByteString.Builder.ZoomCache\",\"Data.ZoomCache.Codec\"]",
          "name": "fromFloat",
          "package": "zoom-cache",
          "signature": "Float -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromFloat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromFloat\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromFloat\"]"
        },
        "index": {
          "description": "Serialize Float in big-endian IEEE binary32 format IEEE single format",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromFloat",
          "normalized": "Float-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Float",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in variable-length-coding format\n For details of the variable-length coding format, see\n \u003ca\u003eData.ZoomCache.Numeric.Int\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Blaze.ByteString.Builder.ZoomCache\",\"Data.ZoomCache.Codec\"]",
          "name": "fromIntegerVLC",
          "package": "zoom-cache",
          "signature": "Integer -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromIntegerVLC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromIntegerVLC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromIntegerVLC\"]"
        },
        "index": {
          "description": "Serialize an Integer in variable-length-coding format For details of the variable-length coding format see Data.ZoomCache.Numeric.Int",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromIntegerVLC",
          "normalized": "Integer-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Integer VLC",
          "signature": "Integer-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromIntegerVLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e in 32bit big endian format.\n\u003c/p\u003e",
          "module": "[\"Blaze.ByteString.Builder.ZoomCache\",\"Data.ZoomCache.Codec\"]",
          "name": "fromIntegral32be",
          "package": "zoom-cache",
          "signature": "a -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromIntegral32be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromIntegral32be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromIntegral32be\"]"
        },
        "index": {
          "description": "Serialize an Integral in bit big endian format",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromIntegral32be",
          "normalized": "a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Integral",
          "signature": "a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromIntegral32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e as a sequence of two 64bit big endian format\n integers.\n\u003c/p\u003e",
          "module": "[\"Blaze.ByteString.Builder.ZoomCache\",\"Data.ZoomCache.Codec\"]",
          "name": "fromRational64",
          "package": "zoom-cache",
          "signature": "Rational -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromRational64",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromRational64\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromRational64\"]"
        },
        "index": {
          "description": "Serialize Rational as sequence of two bit big endian format integers",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromRational64",
          "normalized": "Rational-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Rational",
          "signature": "Rational-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromRational64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eTimeStamp\u003c/a\u003e\u003c/code\u003e in 64bit big endian format.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromSampleOffset",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e Builder",
          "source": "src/Blaze-ByteString-Builder-ZoomCache.html#fromSampleOffset",
          "type": "function"
        },
        "index": {
          "description": "Serialize TimeStamp in bit big endian format",
          "hierarchy": "Blaze ByteString Builder ZoomCache",
          "module": "Blaze.ByteString.Builder.ZoomCache",
          "name": "fromSampleOffset",
          "normalized": "SampleOffset-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Sample Offset",
          "signature": "SampleOffset-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Blaze-ByteString-Builder-ZoomCache.html#v:fromSampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "OffsetFd",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-IO-OffsetFd.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee IO OffsetFd",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "OffsetFd",
          "package": "zoom-cache",
          "partial": "Offset Fd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-IO-OffsetFd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a POSIX File Descriptor: a variation of \u003ccode\u003eenumFd\u003c/code\u003e that\n supports RandomIO (seek requests).\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "enumFdRandomOBS",
          "package": "zoom-cache",
          "signature": "Int -\u003e Fd -\u003e Enumerator (Offset ByteString) m a",
          "source": "src/Data-Iteratee-IO-OffsetFd.html#enumFdRandomOBS",
          "type": "function"
        },
        "index": {
          "description": "The enumerator of POSIX File Descriptor variation of enumFd that supports RandomIO seek requests",
          "hierarchy": "Data Iteratee IO OffsetFd",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "enumFdRandomOBS",
          "normalized": "Int-\u003eFd-\u003eEnumerator(Offset ByteString)a b",
          "package": "zoom-cache",
          "partial": "Fd Random OBS",
          "signature": "Int-\u003eFd-\u003eEnumerator(Offset ByteString)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-IO-OffsetFd.html#v:enumFdRandomOBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "enumFileRandomOBS",
          "package": "zoom-cache",
          "signature": "Int-\u003e FilePath-\u003e Enumerator (Offset ByteString) m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee IO OffsetFd",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "enumFileRandomOBS",
          "normalized": "Int-\u003eFilePath-\u003eEnumerator(Offset ByteString)a b",
          "package": "zoom-cache",
          "partial": "File Random OBS",
          "signature": "Int-\u003eFilePath-\u003eEnumerator(Offset ByteString)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-IO-OffsetFd.html#v:enumFileRandomOBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of fileDriverFd that supports seeking.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "fileDriverRandomFdOBS",
          "package": "zoom-cache",
          "signature": "Int -\u003e Iteratee (Offset ByteString) m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO-OffsetFd.html#fileDriverRandomFdOBS",
          "type": "function"
        },
        "index": {
          "description": "version of fileDriverFd that supports seeking",
          "hierarchy": "Data Iteratee IO OffsetFd",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "fileDriverRandomFdOBS",
          "normalized": "Int-\u003eIteratee(Offset ByteString)a b-\u003eFilePath-\u003ea b",
          "package": "zoom-cache",
          "partial": "Driver Random Fd OBS",
          "signature": "Int-\u003eIteratee(Offset ByteString)m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-IO-OffsetFd.html#v:fileDriverRandomFdOBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given Iteratee.  This function wraps\n enumFdRandom as a convenience.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "fileDriverRandomOBS",
          "package": "zoom-cache",
          "signature": "Iteratee (Offset ByteString) m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO-OffsetFd.html#fileDriverRandomOBS",
          "type": "function"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumFdRandom as convenience",
          "hierarchy": "Data Iteratee IO OffsetFd",
          "module": "Data.Iteratee.IO.OffsetFd",
          "name": "fileDriverRandomOBS",
          "normalized": "Iteratee(Offset ByteString)a b-\u003eFilePath-\u003ea b",
          "package": "zoom-cache",
          "partial": "Driver Random OBS",
          "signature": "Iteratee(Offset ByteString)m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-IO-OffsetFd.html#v:fileDriverRandomOBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-Offset.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee Offset",
          "module": "Data.Iteratee.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "partial": "Offset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-Offset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a ByteString iteratee on an (Offset ByteString) input stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.Offset",
          "name": "convOffset",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m a -\u003e Iteratee (Offset ByteString) m a",
          "source": "src/Data-Iteratee-Offset.html#convOffset",
          "type": "function"
        },
        "index": {
          "description": "Run ByteString iteratee on an Offset ByteString input stream",
          "hierarchy": "Data Iteratee Offset",
          "module": "Data.Iteratee.Offset",
          "name": "convOffset",
          "normalized": "Iteratee ByteString a b-\u003eIteratee(Offset ByteString)a b",
          "package": "zoom-cache",
          "partial": "Offset",
          "signature": "Iteratee ByteString m a-\u003eIteratee(Offset ByteString)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-Offset.html#v:convOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Offset",
          "name": "takeBS",
          "package": "zoom-cache",
          "signature": "Int -\u003e Iteratee (Offset ByteString) m ByteString",
          "source": "src/Data-Iteratee-Offset.html#takeBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Offset",
          "module": "Data.Iteratee.Offset",
          "name": "takeBS",
          "normalized": "Int-\u003eIteratee(Offset ByteString)a ByteString",
          "package": "zoom-cache",
          "partial": "BS",
          "signature": "Int-\u003eIteratee(Offset ByteString)m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-Offset.html#v:takeBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Offset",
          "name": "tell",
          "package": "zoom-cache",
          "signature": "Iteratee (Offset ByteString) m FileOffset",
          "source": "src/Data-Iteratee-Offset.html#tell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Offset",
          "module": "Data.Iteratee.Offset",
          "name": "tell",
          "package": "zoom-cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-Offset.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee reading of ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.ZoomCache.Seek",
          "name": "Seek",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-ZoomCache-Seek.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee reading of ZoomCache files",
          "hierarchy": "Data Iteratee ZoomCache Seek",
          "module": "Data.Iteratee.ZoomCache.Seek",
          "name": "Seek",
          "package": "zoom-cache",
          "partial": "Seek",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Seek.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.ZoomCache.Seek\",\"Data.Iteratee.ZoomCache\"]",
          "name": "seekTimeStamp",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e Maybe TimeStamp -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ZoomCache-Seek.html#seekTimeStamp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Seek.html#v:seekTimeStamp\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:seekTimeStamp\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache Seek",
          "module": "Data.Iteratee.ZoomCache.Seek",
          "name": "seekTimeStamp",
          "normalized": "CacheFile-\u003eMaybe TimeStamp-\u003eIteratee a b()",
          "package": "zoom-cache",
          "partial": "Time Stamp",
          "signature": "CacheFile-\u003eMaybe TimeStamp-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Seek.html#v:seekTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.ZoomCache.Seek\",\"Data.Iteratee.ZoomCache\"]",
          "name": "seekUTCTime",
          "package": "zoom-cache",
          "signature": "Maybe UTCTime -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ZoomCache-Seek.html#seekUTCTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Seek.html#v:seekUTCTime\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:seekUTCTime\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache Seek",
          "module": "Data.Iteratee.ZoomCache.Seek",
          "name": "seekUTCTime",
          "normalized": "Maybe UTCTime-\u003eIteratee a b()",
          "package": "zoom-cache",
          "partial": "UTCTime",
          "signature": "Maybe UTCTime-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Seek.html#v:seekUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee reading of ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "Utils",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee reading of ZoomCache files",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "Utils",
          "package": "zoom-cache",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readCodec",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e Int -\u003e Iteratee (Offset ByteString) m (Maybe Codec)",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readCodec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readCodec",
          "normalized": "[IdentifyCodec]-\u003eInt-\u003eIteratee(Offset ByteString)a(Maybe Codec)",
          "package": "zoom-cache",
          "partial": "Codec",
          "signature": "[IdentifyCodec]-\u003eInt-\u003eIteratee(Offset ByteString)m(Maybe Codec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 8 bytes as a big-endian Double\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readDouble64be",
          "package": "zoom-cache",
          "signature": "Iteratee s m Double",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readDouble64be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readDouble64be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readDouble64be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian Double",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readDouble64be",
          "package": "zoom-cache",
          "partial": "Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readDouble64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 4 bytes as a big-endian Float\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readFloat32be",
          "package": "zoom-cache",
          "signature": "Iteratee s m Float",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readFloat32be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readFloat32be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readFloat32be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian Float",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readFloat32be",
          "package": "zoom-cache",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 2 bytes as a big-endian signed Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readInt16be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readInt16be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt16be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readInt16be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian signed Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readInt16be",
          "package": "zoom-cache",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 4 bytes as a big-endian signed Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readInt32be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readInt32be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt32be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readInt32be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian signed Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readInt32be",
          "package": "zoom-cache",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 8 bytes as a big-endian signed Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readInt64be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readInt64be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt64be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readInt64be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian signed Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readInt64be",
          "package": "zoom-cache",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 1 byte as a signed Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readInt8",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readInt8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt8\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readInt8\"]"
        },
        "index": {
          "description": "Read byte as signed Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readInt8",
          "package": "zoom-cache",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a variable-length-coded Integer.\n For details of the variable-length coding format, see\n \u003ca\u003eData.ZoomCache.Numeric.Int\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readIntegerVLC",
          "package": "zoom-cache",
          "signature": "Iteratee s m Integer",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readIntegerVLC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readIntegerVLC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readIntegerVLC\"]"
        },
        "index": {
          "description": "Read variable-length-coded Integer For details of the variable-length coding format see Data.ZoomCache.Numeric.Int",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readIntegerVLC",
          "package": "zoom-cache",
          "partial": "Integer VLC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readIntegerVLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 16 bytes as a big-endian Rational, encoded as an 8 byte\n big endian numerator followed by an 8 byte big endian denominator.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readRational64be",
          "package": "zoom-cache",
          "signature": "Iteratee s m Rational",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readRational64be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readRational64be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readRational64be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian Rational encoded as an byte big endian numerator followed by an byte big endian denominator",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readRational64be",
          "package": "zoom-cache",
          "partial": "Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readRational64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 2 bytes as a big-endian unsigned Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readWord16be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readWord16be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord16be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readWord16be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian unsigned Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readWord16be",
          "package": "zoom-cache",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 4 bytes as a big-endian unsigned Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readWord32be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readWord32be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord32be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readWord32be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian unsigned Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readWord32be",
          "package": "zoom-cache",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 8 bytes as a big-endian unsigned Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readWord64be",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readWord64be",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord64be\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readWord64be\"]"
        },
        "index": {
          "description": "Read bytes as big-endian unsigned Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readWord64be",
          "package": "zoom-cache",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 1 byte as an unsigned Integral\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.ZoomCache.Utils\",\"Data.ZoomCache.Codec\"]",
          "name": "readWord8",
          "package": "zoom-cache",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ZoomCache-Utils.html#readWord8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord8\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readWord8\"]"
        },
        "index": {
          "description": "Read byte as an unsigned Integral",
          "hierarchy": "Data Iteratee ZoomCache Utils",
          "module": "Data.Iteratee.ZoomCache.Utils",
          "name": "readWord8",
          "package": "zoom-cache",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache-Utils.html#v:readWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratee reading of ZoomCache files.\n\u003c/p\u003e\u003cp\u003eA typical usage, using the iteratee \u003ccode\u003eiter\u003c/code\u003e to process the level 3 summaries\n   from the track called \"rainfall\":\n\u003c/p\u003e\u003cpre\u003e\n  I.fileDriverRandom (enumCacheFile standardIdentifiers .\n      I.joinI . filterTracksByName [\"rainfall\"] .\n      I.joinI . enumSummaryLevel 3 $ iter) filename\n\u003c/pre\u003e\u003cp\u003eSimilarly, using the iteratee \u003ccode\u003erawIter\u003c/code\u003e to process the raw data from the\n   track called \"rainfall\":\n\u003c/p\u003e\u003cpre\u003e\n  I.fileDriverRandom (enumCacheFile standardIdentifiers .\n      I.joinI . filterTracksByName [\"rainfall\"] .\n      I.joinI . enumPackets $ rawIter) filename\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-ZoomCache.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratee reading of ZoomCache files typical usage using the iteratee iter to process the level summaries from the track called rainfall I.fileDriverRandom enumCacheFile standardIdentifiers I.joinI filterTracksByName rainfall I.joinI enumSummaryLevel iter filename Similarly using the iteratee rawIter to process the raw data from the track called rainfall I.fileDriverRandom enumCacheFile standardIdentifiers I.joinI filterTracksByName rainfall I.joinI enumPackets rawIter filename",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "partial": "Zoom Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "Block",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-ZoomCache.html#Block",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "Block",
          "package": "zoom-cache",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockData",
          "package": "zoom-cache",
          "source": "src/Data-Iteratee-ZoomCache.html#BlockData",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockData",
          "package": "zoom-cache",
          "partial": "Block Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#t:BlockData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "Block",
          "package": "zoom-cache",
          "signature": "Block",
          "source": "src/Data-Iteratee-ZoomCache.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "Block",
          "package": "zoom-cache",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockPacket",
          "package": "zoom-cache",
          "signature": "BlockPacket !PacketSO",
          "source": "src/Data-Iteratee-ZoomCache.html#BlockData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockPacket",
          "package": "zoom-cache",
          "partial": "Block Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:BlockPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockSummary",
          "package": "zoom-cache",
          "signature": "BlockSummary !ZoomSummarySO",
          "source": "src/Data-Iteratee-ZoomCache.html#BlockData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "BlockSummary",
          "package": "zoom-cache",
          "partial": "Block Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:BlockSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkData",
          "package": "zoom-cache",
          "signature": "BlockData",
          "source": "src/Data-Iteratee-ZoomCache.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkData",
          "package": "zoom-cache",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:blkData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkFile",
          "package": "zoom-cache",
          "signature": "CacheFile",
          "source": "src/Data-Iteratee-ZoomCache.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkFile",
          "package": "zoom-cache",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:blkFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-Iteratee-ZoomCache.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "blkTrack",
          "package": "zoom-cache",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:blkTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee of zoom-cache data, after global and track headers\n have been read, or if the \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e has been acquired elsewhere.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlock",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e Enumeratee (Offset ByteString) [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumBlock",
          "type": "function"
        },
        "index": {
          "description": "An iteratee of zoom-cache data after global and track headers have been read or if the CacheFile has been acquired elsewhere",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlock",
          "normalized": "CacheFile-\u003eEnumeratee(Offset ByteString)[Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Block",
          "signature": "CacheFile-\u003eEnumeratee(Offset ByteString)[Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of enumBlock which won't fail with an EofException if the last\n bit is incomplete (perhaps still being written to).\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlockIncomplete",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e Enumeratee (Offset ByteString) [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumBlockIncomplete",
          "type": "function"
        },
        "index": {
          "description": "version of enumBlock which won fail with an EofException if the last bit is incomplete perhaps still being written to",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlockIncomplete",
          "normalized": "CacheFile-\u003eEnumeratee(Offset ByteString)[Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Block Incomplete",
          "signature": "CacheFile-\u003eEnumeratee(Offset ByteString)[Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumBlockIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee of zoom-cache data, after global and track headers\n have been read, or if the \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e has been acquired elsewhere.\n This version skips parsing of all tracks other than the specified \u003ccode\u003e\u003ca\u003eTrackNo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function should only be used in applications where only one track is\n used from a file; if you need to process multiple tracks independently then\n give each an iteratee filtered by filterTracks or filterTracksByName, and\n run these in parallel on the output of \u003ccode\u003e\u003ca\u003eenumCacheFile\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eenumBlock\u003c/a\u003e\u003c/code\u003e.\n Using this function multiple times in parallel will duplicate some parsing.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlockTrackNo",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e TrackNo -\u003e Enumeratee (Offset ByteString) [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumBlockTrackNo",
          "type": "function"
        },
        "index": {
          "description": "An enumeratee of zoom-cache data after global and track headers have been read or if the CacheFile has been acquired elsewhere This version skips parsing of all tracks other than the specified TrackNo This function should only be used in applications where only one track is used from file if you need to process multiple tracks independently then give each an iteratee filtered by filterTracks or filterTracksByName and run these in parallel on the output of enumCacheFile or enumBlock Using this function multiple times in parallel will duplicate some parsing",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumBlockTrackNo",
          "normalized": "CacheFile-\u003eTrackNo-\u003eEnumeratee(Offset ByteString)[Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Block Track No",
          "signature": "CacheFile-\u003eTrackNo-\u003eEnumeratee(Offset ByteString)[Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumBlockTrackNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter raw data\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCTPSO",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(CacheFile, TrackNo, PacketSO)] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumCTPSO",
          "type": "function"
        },
        "index": {
          "description": "Filter raw data",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCTPSO",
          "normalized": "Enumeratee[Offset Block][(CacheFile,TrackNo,PacketSO)]a b",
          "package": "zoom-cache",
          "partial": "CTPSO",
          "signature": "Enumeratee[Offset Block][(CacheFile,TrackNo,PacketSO)]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumCTPSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCTSO",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(CacheFile, TrackNo, ZoomSummarySO)] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumCTSO",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCTSO",
          "normalized": "Enumeratee[Offset Block][(CacheFile,TrackNo,ZoomSummarySO)]a b",
          "package": "zoom-cache",
          "partial": "CTSO",
          "signature": "Enumeratee[Offset Block][(CacheFile,TrackNo,ZoomSummarySO)]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumCTSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee of a zoom-cache file, from the global header onwards.\n The global and track headers will be transparently read, and the \n \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e visible in the \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCacheFile",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e Enumeratee (Offset ByteString) [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumCacheFile",
          "type": "function"
        },
        "index": {
          "description": "An enumeratee of zoom-cache file from the global header onwards The global and track headers will be transparently read and the CacheFile visible in the Block elements",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumCacheFile",
          "normalized": "[IdentifyCodec]-\u003eEnumeratee(Offset ByteString)[Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Cache File",
          "signature": "[IdentifyCodec]-\u003eEnumeratee(Offset ByteString)[Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumCacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter just the raw data\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPacketSOs",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [PacketSO] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumPacketSOs",
          "type": "function"
        },
        "index": {
          "description": "Filter just the raw data",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPacketSOs",
          "normalized": "Enumeratee[Offset Block][PacketSO]a b",
          "package": "zoom-cache",
          "partial": "Packet SOs",
          "signature": "Enumeratee[Offset Block][PacketSO]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumPacketSOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter just the raw data\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPackets",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [Packet] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumPackets",
          "type": "function"
        },
        "index": {
          "description": "Filter just the raw data",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPackets",
          "normalized": "Enumeratee[Offset Block][Packet]a b",
          "package": "zoom-cache",
          "partial": "Packets",
          "signature": "Enumeratee[Offset Block][Packet]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter just the raw data, timestamped by UTC\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPacketsUTC",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [PacketUTC] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumPacketsUTC",
          "type": "function"
        },
        "index": {
          "description": "Filter just the raw data timestamped by UTC",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumPacketsUTC",
          "normalized": "Enumeratee[Offset Block][PacketUTC]a b",
          "package": "zoom-cache",
          "partial": "Packets UTC",
          "signature": "Enumeratee[Offset Block][PacketUTC]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumPacketsUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at all levels\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaries",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [ZoomSummary] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummaries",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at all levels",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaries",
          "normalized": "Enumeratee[Offset Block][ZoomSummary]a b",
          "package": "zoom-cache",
          "partial": "Summaries",
          "signature": "Enumeratee[Offset Block][ZoomSummary]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at all levels\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummariesUTC",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [ZoomSummaryUTC] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummariesUTC",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at all levels",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummariesUTC",
          "normalized": "Enumeratee[Offset Block][ZoomSummaryUTC]a b",
          "package": "zoom-cache",
          "partial": "Summaries UTC",
          "signature": "Enumeratee[Offset Block][ZoomSummaryUTC]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummariesUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at a particular summary level\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaryLevel",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [ZoomSummary] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummaryLevel",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at particular summary level",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaryLevel",
          "normalized": "Int-\u003eEnumeratee[Offset Block][ZoomSummary]a b",
          "package": "zoom-cache",
          "partial": "Summary Level",
          "signature": "Int-\u003eEnumeratee[Offset Block][ZoomSummary]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummaryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at a particular summary level\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummarySOLevel",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [ZoomSummarySO] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummarySOLevel",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at particular summary level",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummarySOLevel",
          "normalized": "Int-\u003eEnumeratee[Offset Block][ZoomSummarySO]a b",
          "package": "zoom-cache",
          "partial": "Summary SOLevel",
          "signature": "Int-\u003eEnumeratee[Offset Block][ZoomSummarySO]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummarySOLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at all levels\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummarySOs",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [ZoomSummarySO] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummarySOs",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at all levels",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummarySOs",
          "normalized": "Enumeratee[Offset Block][ZoomSummarySO]a b",
          "package": "zoom-cache",
          "partial": "Summary SOs",
          "signature": "Enumeratee[Offset Block][ZoomSummarySO]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummarySOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter summaries at a particular summary level\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaryUTCLevel",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [ZoomSummaryUTC] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#enumSummaryUTCLevel",
          "type": "function"
        },
        "index": {
          "description": "Filter summaries at particular summary level",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "enumSummaryUTCLevel",
          "normalized": "Int-\u003eEnumeratee[Offset Block][ZoomSummaryUTC]a b",
          "package": "zoom-cache",
          "partial": "Summary UTCLevel",
          "signature": "Int-\u003eEnumeratee[Offset Block][ZoomSummaryUTC]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:enumSummaryUTCLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter to a given list of track numbers\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "filterTracks",
          "package": "zoom-cache",
          "signature": "[TrackNo] -\u003e Enumeratee [Offset Block] [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#filterTracks",
          "type": "function"
        },
        "index": {
          "description": "Filter to given list of track numbers",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "filterTracks",
          "normalized": "[TrackNo]-\u003eEnumeratee[Offset Block][Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Tracks",
          "signature": "[TrackNo]-\u003eEnumeratee[Offset Block][Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:filterTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter to a given list of track names\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "filterTracksByName",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e [ByteString] -\u003e Enumeratee [Offset Block] [Offset Block] m a",
          "source": "src/Data-Iteratee-ZoomCache.html#filterTracksByName",
          "type": "function"
        },
        "index": {
          "description": "Filter to given list of track names",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "filterTracksByName",
          "normalized": "CacheFile-\u003e[ByteString]-\u003eEnumeratee[Offset Block][Offset Block]a b",
          "package": "zoom-cache",
          "partial": "Tracks By Name",
          "signature": "CacheFile-\u003e[ByteString]-\u003eEnumeratee[Offset Block][Offset Block]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:filterTracksByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse only the global and track headers of a zoom-cache file, returning\n a \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "iterHeaders",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e Iteratee (Offset ByteString) m CacheFile",
          "source": "src/Data-Iteratee-ZoomCache.html#iterHeaders",
          "type": "function"
        },
        "index": {
          "description": "Parse only the global and track headers of zoom-cache file returning CacheFile",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "iterHeaders",
          "normalized": "[IdentifyCodec]-\u003eIteratee(Offset ByteString)a CacheFile",
          "package": "zoom-cache",
          "partial": "Headers",
          "signature": "[IdentifyCodec]-\u003eIteratee(Offset ByteString)m CacheFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:iterHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "wholeTrackSummary",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m (TrackSpec, ZoomSummary)",
          "source": "src/Data-Iteratee-ZoomCache.html#wholeTrackSummary",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "wholeTrackSummary",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a(TrackSpec,ZoomSummary)",
          "package": "zoom-cache",
          "partial": "Track Summary",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m(TrackSpec,ZoomSummary)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:wholeTrackSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ZoomCache",
          "name": "wholeTrackSummaryUTC",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m (TrackSpec, Maybe ZoomSummaryUTC)",
          "source": "src/Data-Iteratee-ZoomCache.html#wholeTrackSummaryUTC",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data Iteratee ZoomCache",
          "module": "Data.Iteratee.ZoomCache",
          "name": "wholeTrackSummaryUTC",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a(TrackSpec,Maybe ZoomSummaryUTC)",
          "package": "zoom-cache",
          "partial": "Track Summary UTC",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m(TrackSpec,Maybe ZoomSummaryUTC)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Iteratee-ZoomCache.html#v:wholeTrackSummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "source": "src/Data-Offset.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Offset",
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "partial": "Offset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Offset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "source": "src/Data-Offset.html#Offset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Offset",
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "partial": "Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Offset.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "signature": "Offset !FileOffset !a",
          "source": "src/Data-Offset.html#Offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Offset",
          "module": "Data.Offset",
          "name": "Offset",
          "package": "zoom-cache",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Offset.html#v:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Offset",
          "name": "unwrapOffset",
          "package": "zoom-cache",
          "signature": "Offset a -\u003e a",
          "source": "src/Data-Offset.html#unwrapOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Offset",
          "module": "Data.Offset",
          "name": "unwrapOffset",
          "normalized": "Offset a-\u003ea",
          "package": "zoom-cache",
          "partial": "Offset",
          "signature": "Offset a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-Offset.html#v:unwrapOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for values of type Bool. Elements of type Bool\nare useful for recording observations of binary events.\n\u003c/p\u003e\u003cp\u003eThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Bool.\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Expected value (double)                                       | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Bool",
          "name": "Bool",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Bool.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for values of type Bool Elements of type Bool are useful for recording observations of binary events This module implements the interfaces documented in Data.ZoomCache.Codec The table below describes the encoding of SummaryData for Bool Expected value double Field encoding formats double big-endian IEEE binary64 IEEE double",
          "hierarchy": "Data ZoomCache Bool",
          "module": "Data.ZoomCache.Bool",
          "name": "Bool",
          "package": "zoom-cache",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the required interfaces and some useful\n functions for developing zoom-cache codecs.\n\u003c/p\u003e\u003cp\u003eTo implement a codec, specify \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSummaryWork\u003c/a\u003e\u003c/code\u003e types, and\n implement the methods of the ZoomReadable and ZoomWritable classes.\n\u003c/p\u003e\u003cp\u003eFor sample implementations, read the source of the provided instances\n \u003ca\u003eData.ZoomCache.Numeric.Int\u003c/a\u003e and \u003ca\u003eData.ZoomCache.Numeric.Double\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "Codec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Codec.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports the required interfaces and some useful functions for developing zoom-cache codecs To implement codec specify SummaryData and SummaryWork types and implement the methods of the ZoomReadable and ZoomWritable classes For sample implementations read the source of the provided instances Data.ZoomCache.Numeric.Int and Data.ZoomCache.Numeric.Double",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "Codec",
          "package": "zoom-cache",
          "partial": "Codec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "Codec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Codec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "Codec",
          "package": "zoom-cache",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify the tracktype corresponding to a given Codec Identifier.\n When parsing a zoom-cache file, the zoom-cache library will try each\n of a given list [\u003ccode\u003eIdentifyTrack\u003c/code\u003e].\n\u003c/p\u003e\u003cp\u003eThe standard zoom-cache instances are provided in \u003ccode\u003estandardIdentifiers\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen developing your own codecs it is not necessary to build a composite\n \u003ccode\u003eIdentifyTrack\u003c/code\u003e functions; it is sufficient to generate one for each new\n codec type. A library of related zoom-cache codecs should export its own\n [\u003ccode\u003eIdentifyTrack\u003c/code\u003e] functions, usually called something like mylibIdentifiers.\n\u003c/p\u003e\u003cp\u003eThese can be generated with \u003ccode\u003eidentifyCodec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#IdentifyCodec",
          "type": "type"
        },
        "index": {
          "description": "Identify the tracktype corresponding to given Codec Identifier When parsing zoom-cache file the zoom-cache library will try each of given list IdentifyTrack The standard zoom-cache instances are provided in standardIdentifiers When developing your own codecs it is not necessary to build composite IdentifyTrack functions it is sufficient to generate one for each new codec type library of related zoom-cache codecs should export its own IdentifyTrack functions usually called something like mylibIdentifiers These can be generated with identifyCodec",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "partial": "Identify Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:IdentifyCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "partial": "Sample Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:SampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "SampleOffsetDiff",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleOffsetDiff",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "SampleOffsetDiff",
          "package": "zoom-cache",
          "partial": "Sample Offset Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:SampleOffsetDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStamp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "partial": "Time Stamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:TimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStampDiff",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "partial": "Time Stamp Diff",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:TimeStampDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Codec",
          "name": "TrackNo",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TrackNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "TrackNo",
          "package": "zoom-cache",
          "partial": "Track No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:TrackNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must specify a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e type,\n and implement all methods of this class.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomReadable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must specify SummaryData type and implement all methods of this class",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "partial": "Zoom Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:ZoomReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA StateT IO monad for writing a ZoomCache file\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomW",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomW",
          "type": "type"
        },
        "index": {
          "description": "StateT IO monad for writing ZoomCache file",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomW",
          "package": "zoom-cache",
          "partial": "Zoom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:ZoomW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must additionally specify a \u003ccode\u003e\u003ca\u003eSummaryWork\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomWritable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must additionally specify SummaryWork type",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "partial": "Zoom Writable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:ZoomWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ZoomWrite class provides \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e, a method to write a\n Haskell value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomWrite",
          "type": "class"
        },
        "index": {
          "description": "The ZoomWrite class provides write method to write Haskell value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "partial": "Zoom Write",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#t:ZoomWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "SO",
          "package": "zoom-cache",
          "signature": "SO",
          "source": "src/Data-ZoomCache-Common.html#SampleOffset",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:SO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:SO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:SO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "SO",
          "package": "zoom-cache",
          "partial": "SO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:SO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\"]",
          "name": "SODiff",
          "package": "zoom-cache",
          "signature": "SODiff",
          "source": "src/Data-ZoomCache-Common.html#SampleOffsetDiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:SODiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:SODiff\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "SODiff",
          "package": "zoom-cache",
          "partial": "SODiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:SODiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "TS",
          "package": "zoom-cache",
          "signature": "TS Double",
          "source": "src/Data-ZoomCache-Common.html#TimeStamp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:TS\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:TS\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:TS\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "TS",
          "package": "zoom-cache",
          "partial": "TS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:TS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "TSDiff",
          "package": "zoom-cache",
          "signature": "TSDiff Double",
          "source": "src/Data-ZoomCache-Common.html#TimeStampDiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:TSDiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:TSDiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:TSDiff\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "TSDiff",
          "package": "zoom-cache",
          "partial": "TSDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:TSDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "appendSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryData a -\u003e SampleOffsetDiff -\u003e SummaryData a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#appendSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Append two SummaryData",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "appendSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:appendSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-decode a list of values\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "deltaDecodeRaw",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Types.html#deltaDecodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-decode list of values",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "deltaDecodeRaw",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Decode Raw",
          "signature": "[a]-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:deltaDecodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-encode a value.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "deltaEncodeRaw",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a -\u003e a",
          "source": "src/Data-ZoomCache-Types.html#deltaEncodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-encode value",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "deltaEncodeRaw",
          "normalized": "SummaryWork a-\u003ea-\u003ea",
          "package": "zoom-cache",
          "partial": "Encode Raw",
          "signature": "SummaryWork a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:deltaEncodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "fromRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromRaw",
          "type": "method"
        },
        "index": {
          "description": "Serialize value of type",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "fromRaw",
          "normalized": "a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a 'SummaryData a'\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "fromSummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Serialize SummaryData",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "fromSummaryData",
          "normalized": "SummaryData a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:fromSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an \u003ccode\u003eIdentifyTrack\u003c/code\u003e function for a given type.\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Identify\"]",
          "name": "identifyCodec",
          "package": "zoom-cache",
          "signature": "a -\u003e IdentifyCodec",
          "source": "src/Data-ZoomCache-Identify.html#identifyCodec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:identifyCodec\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Identify.html#v:identifyCodec\"]"
        },
        "index": {
          "description": "Generate an IdentifyTrack function for given type",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "identifyCodec",
          "normalized": "a-\u003eIdentifyCodec",
          "package": "zoom-cache",
          "partial": "Codec",
          "signature": "a-\u003eIdentifyCodec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:identifyCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new 'SummaryWork a', given an initial timestamp.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "initSummaryWork",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#initSummaryWork",
          "type": "method"
        },
        "index": {
          "description": "Generate new SummaryWork given an initial timestamp",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "initSummaryWork",
          "normalized": "SampleOffset-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Work",
          "signature": "SampleOffset-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:initSummaryWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing, used for dumping values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "prettyRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettyRaw",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing used for dumping values of type",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "prettyRaw",
          "normalized": "a-\u003eString",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:prettyRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing for values of type 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "prettySummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettySummaryData",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing for values of type SummaryData",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "prettySummaryData",
          "normalized": "SummaryData a-\u003eString",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:prettySummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type \u003ccode\u003ea\u003c/code\u003e from a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "readRaw",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m a",
          "source": "src/Data-ZoomCache-Types.html#readRaw",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type from stream of ByteString",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "readRaw",
          "package": "zoom-cache",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type 'SummaryData a' from a stream\n of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "readSummary",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m (SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#readSummary",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type SummaryData from stream of ByteString",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "readSummary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:readSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003esampleOffsetDiff (SO t1) (SO t2) = SODiff (t1 - t2)\u003c/pre\u003e",
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\"]",
          "name": "sampleOffsetDiff",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e SampleOffset -\u003e SampleOffsetDiff",
          "source": "src/Data-ZoomCache-Common.html#sampleOffsetDiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:sampleOffsetDiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:sampleOffsetDiff\"]"
        },
        "index": {
          "description": "sampleOffsetDiff SO t1 SO t2 SODiff t1 t2",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "sampleOffsetDiff",
          "normalized": "SampleOffset-\u003eSampleOffset-\u003eSampleOffsetDiff",
          "package": "zoom-cache",
          "partial": "Offset Diff",
          "signature": "SampleOffset-\u003eSampleOffset-\u003eSampleOffsetDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:sampleOffsetDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003etimeStampDiff (TS t1) (TS t2) = TSDiff (t1 - t2)\u003c/pre\u003e",
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "timeStampDiff",
          "package": "zoom-cache",
          "signature": "TimeStamp -\u003e TimeStamp -\u003e TimeStampDiff",
          "source": "src/Data-ZoomCache-Common.html#timeStampDiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:timeStampDiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:timeStampDiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:timeStampDiff\"]"
        },
        "index": {
          "description": "timeStampDiff TS t1 TS t2 TSDiff t1 t2",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "timeStampDiff",
          "normalized": "TimeStamp-\u003eTimeStamp-\u003eTimeStampDiff",
          "package": "zoom-cache",
          "partial": "Stamp Diff",
          "signature": "TimeStamp-\u003eTimeStamp-\u003eTimeStampDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:timeStampDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "timeStampFromSO",
          "package": "zoom-cache",
          "signature": "Rational -\u003e SampleOffset -\u003e TimeStamp",
          "source": "src/Data-ZoomCache-Common.html#timeStampFromSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:timeStampFromSO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:timeStampFromSO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:timeStampFromSO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "timeStampFromSO",
          "normalized": "Rational-\u003eSampleOffset-\u003eTimeStamp",
          "package": "zoom-cache",
          "partial": "Stamp From SO",
          "signature": "Rational-\u003eSampleOffset-\u003eTimeStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:timeStampFromSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a 'SummaryWork a', generating a 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "toSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryWork a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#toSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Finalize SummaryWork generating SummaryData",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "toSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:toSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe track identifier used for streams of type \u003ccode\u003ea\u003c/code\u003e.\n The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by any instance of\n \u003ccode\u003e\u003ca\u003eZoomReadable\u003c/a\u003e\u003c/code\u003e, so that is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as the\n argument.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "trackIdentifier",
          "package": "zoom-cache",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-ZoomCache-Types.html#trackIdentifier",
          "type": "method"
        },
        "index": {
          "description": "The track identifier used for streams of type The value of the argument should be ignored by any instance of ZoomReadable so that is safe to pass undefined as the argument",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "trackIdentifier",
          "normalized": "a-\u003eByteString",
          "package": "zoom-cache",
          "partial": "Identifier",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:trackIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "unSO",
          "package": "zoom-cache",
          "signature": "Int64",
          "source": "src/Data-ZoomCache-Common.html#SampleOffset",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:unSO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:unSO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:unSO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "unSO",
          "package": "zoom-cache",
          "partial": "SO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:unSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Common\"]",
          "name": "unSODiff",
          "package": "zoom-cache",
          "signature": "Int64",
          "source": "src/Data-ZoomCache-Common.html#SampleOffsetDiff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:unSODiff\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:unSODiff\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "unSODiff",
          "package": "zoom-cache",
          "partial": "SODiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:unSODiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e with the value of \u003ccode\u003ea\u003c/code\u003e occuring at the\n given \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "updateSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e a -\u003e SummaryWork a -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#updateSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Update SummaryData with the value of occuring at the given SampleOffset",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "updateSummaryData",
          "normalized": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:updateSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Codec",
          "name": "write",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e t -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#write",
          "type": "method"
        },
        "index": {
          "description": "Write value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "write",
          "normalized": "TrackNo-\u003ea-\u003eZoomW()",
          "package": "zoom-cache",
          "signature": "TrackNo-\u003et-\u003eZoomW()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Write\"]",
          "name": "writeData",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e a -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#writeData",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:writeData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "writeData",
          "normalized": "TrackNo-\u003ea-\u003eZoomW()",
          "package": "zoom-cache",
          "partial": "Data",
          "signature": "TrackNo-\u003ea-\u003eZoomW()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Write\"]",
          "name": "writeDataTS",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e (TimeStamp, a) -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#writeDataTS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeDataTS\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:writeDataTS\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "writeDataTS",
          "normalized": "TrackNo-\u003e(TimeStamp,a)-\u003eZoomW()",
          "package": "zoom-cache",
          "partial": "Data TS",
          "signature": "TrackNo-\u003e(TimeStamp,a)-\u003eZoomW()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeDataTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Codec\",\"Data.ZoomCache.Write\"]",
          "name": "writeDataVBR",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e (SampleOffset, a) -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#writeDataVBR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeDataVBR\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:writeDataVBR\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Codec",
          "module": "Data.ZoomCache.Codec",
          "name": "writeDataVBR",
          "normalized": "TrackNo-\u003e(SampleOffset,a)-\u003eZoomW()",
          "package": "zoom-cache",
          "partial": "Data VBR",
          "signature": "TrackNo-\u003e(SampleOffset,a)-\u003eZoomW()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Codec.html#v:writeDataVBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used throughout zoom-cache\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Common",
          "name": "Common",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Types used throughout zoom-cache",
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "Common",
          "package": "zoom-cache",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "Global",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "Global",
          "package": "zoom-cache",
          "partial": "Global",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "partial": "Sample Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:SampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "SampleOffsetDiff",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleOffsetDiff",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "SampleOffsetDiff",
          "package": "zoom-cache",
          "partial": "Sample Offset Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:SampleOffsetDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant or Variable samplerate.\n For constant samplerate, timestamps are implied as incrementing by 1/samplerate\n For variable samplerate, explicit timestamps are attached to each datum, encoded\n as a separate block of \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e in the Raw Data packet.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Common",
          "name": "SampleRateType",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleRateType",
          "type": "data"
        },
        "index": {
          "description": "Constant or Variable samplerate For constant samplerate timestamps are implied as incrementing by samplerate For variable samplerate explicit timestamps are attached to each datum encoded as separate block of SampleOffset in the Raw Data packet",
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "SampleRateType",
          "package": "zoom-cache",
          "partial": "Sample Rate Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:SampleRateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStamp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "partial": "Time Stamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:TimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStampDiff",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "partial": "Time Stamp Diff",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:TimeStampDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "TrackNo",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TrackNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "TrackNo",
          "package": "zoom-cache",
          "partial": "Track No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:TrackNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "Version",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "Version",
          "package": "zoom-cache",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "ConstantSR",
          "package": "zoom-cache",
          "signature": "ConstantSR",
          "source": "src/Data-ZoomCache-Common.html#SampleRateType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:ConstantSR\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:ConstantSR\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "ConstantSR",
          "package": "zoom-cache",
          "partial": "Constant SR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:ConstantSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "Global",
          "package": "zoom-cache",
          "signature": "Global",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:Global\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:Global\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "Global",
          "package": "zoom-cache",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "VariableSR",
          "package": "zoom-cache",
          "signature": "VariableSR",
          "source": "src/Data-ZoomCache-Common.html#SampleRateType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:VariableSR\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:VariableSR\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "VariableSR",
          "package": "zoom-cache",
          "partial": "Variable SR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:VariableSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Common",
          "name": "Version",
          "package": "zoom-cache",
          "signature": "Version !Int !Int",
          "source": "src/Data-ZoomCache-Common.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "Version",
          "package": "zoom-cache",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "baseUTC",
          "package": "zoom-cache",
          "signature": "Maybe UTCTime",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:baseUTC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:baseUTC\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "baseUTC",
          "package": "zoom-cache",
          "partial": "UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:baseUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "noTracks",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:noTracks\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:noTracks\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "noTracks",
          "package": "zoom-cache",
          "partial": "Tracks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:noTracks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "timeStampFromUTCTime",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e UTCTime -\u003e TimeStamp",
          "source": "src/Data-ZoomCache-Common.html#timeStampFromUTCTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:timeStampFromUTCTime\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:timeStampFromUTCTime\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "timeStampFromUTCTime",
          "normalized": "UTCTime-\u003eUTCTime-\u003eTimeStamp",
          "package": "zoom-cache",
          "partial": "Stamp From UTCTime",
          "signature": "UTCTime-\u003eUTCTime-\u003eTimeStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:timeStampFromUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eutcTimeFromTimeStamp base (TS ts) = baseUTC + ts\u003c/pre\u003e",
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "utcTimeFromTimeStamp",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e TimeStamp -\u003e UTCTime",
          "source": "src/Data-ZoomCache-Common.html#utcTimeFromTimeStamp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:utcTimeFromTimeStamp\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:utcTimeFromTimeStamp\"]"
        },
        "index": {
          "description": "utcTimeFromTimeStamp base TS ts baseUTC ts",
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "utcTimeFromTimeStamp",
          "normalized": "UTCTime-\u003eTimeStamp-\u003eUTCTime",
          "package": "zoom-cache",
          "partial": "Time From Time Stamp",
          "signature": "UTCTime-\u003eTimeStamp-\u003eUTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:utcTimeFromTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Common\",\"Data.ZoomCache\"]",
          "name": "version",
          "package": "zoom-cache",
          "signature": "Version",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:version\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:version\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Common",
          "module": "Data.ZoomCache.Common",
          "name": "version",
          "package": "zoom-cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Common.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReading of ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Dump",
          "name": "Dump",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Dump.html",
          "type": "module"
        },
        "index": {
          "description": "Reading of ZoomCache files",
          "hierarchy": "Data ZoomCache Dump",
          "module": "Data.ZoomCache.Dump",
          "name": "Dump",
          "package": "zoom-cache",
          "partial": "Dump",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Dump.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpFile",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e TrackNo -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-ZoomCache-Dump.html#zoomDumpFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Dump",
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpFile",
          "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "package": "zoom-cache",
          "partial": "Dump File",
          "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Dump.html#v:zoomDumpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpSummary",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e TrackNo -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-ZoomCache-Dump.html#zoomDumpSummary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Dump",
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpSummary",
          "normalized": "[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "package": "zoom-cache",
          "partial": "Dump Summary",
          "signature": "[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Dump.html#v:zoomDumpSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpSummaryLevel",
          "package": "zoom-cache",
          "signature": "Int -\u003e [IdentifyCodec] -\u003e TrackNo -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-ZoomCache-Dump.html#zoomDumpSummaryLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Dump",
          "module": "Data.ZoomCache.Dump",
          "name": "zoomDumpSummaryLevel",
          "normalized": "Int-\u003e[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "package": "zoom-cache",
          "partial": "Dump Summary Level",
          "signature": "Int-\u003e[IdentifyCodec]-\u003eTrackNo-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Dump.html#v:zoomDumpSummaryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Dump",
          "name": "zoomInfoFile",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e FilePath -\u003e IO ()",
          "source": "src/Data-ZoomCache-Dump.html#zoomInfoFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Dump",
          "module": "Data.ZoomCache.Dump",
          "name": "zoomInfoFile",
          "normalized": "[IdentifyCodec]-\u003eFilePath-\u003eIO()",
          "package": "zoom-cache",
          "partial": "Info File",
          "signature": "[IdentifyCodec]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Dump.html#v:zoomInfoFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ezoom-cache format specification\n\u003c/p\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint16\u003c/code\u003e:  16bit big endian\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint32\u003c/code\u003e:  32bit big endian\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "Format",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Format.html",
          "type": "module"
        },
        "index": {
          "description": "zoom-cache format specification Field encoding formats int16 bit big endian int32 bit big endian double big-endian IEEE binary64 IEEE double",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "Format",
          "package": "zoom-cache",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal header:\n\u003c/p\u003e\u003cpre\u003e\n    0                   1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1| Byte\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Identifier                                                    | 0-3\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 4-7\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Version major (int16)         | Version minor (int16)         | 8-11\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | No. tracks (int32)                                            | 12-15\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Modified Julian Day (intVLC)                                  | 16-\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Seconds since midnight Numerator (intVLC)                     | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Seconds since midnight Denominator (intVLC)                   | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe Universal Time corresponding to data timestamp 0 is uniquely given\nby the fields \u003ca\u003eModified Julian Day\u003c/a\u003e, \u003ca\u003eSeconds since midnight Numerator\u003c/a\u003e\nand \u003ca\u003eSeconds since midnight Denominator\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe Modified Julian Day is a standard count of days, with zero being\nthe day 1858-11-17.\nSeconds since midnight: 0 \u003c= t \u003c= 86401s (because of leap seconds)\n\u003c/p\u003e\u003cp\u003eIf the correspondence to Universal Time is meaningless or unknown when\nwriting data, these fields shall be given the special values 0, 0, 0.\n\u003c/p\u003e\u003cp\u003eWhen reading, a value of 0 for \u003ca\u003eSeconds since midnight Denominator\u003c/a\u003e\nshould be interpreted as no corresponding Universal Time.\n\u003c/p\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint16\u003c/code\u003e:  16bit big endian signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint32\u003c/code\u003e:  32bit big endian signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eintVLC\u003c/code\u003e: Variable-length-coded signed integer\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "globalHeader",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Format.html#globalHeader",
          "type": "function"
        },
        "index": {
          "description": "Global header Byte Identifier Version major int16 Version minor int16 No tracks int32 Modified Julian Day intVLC Seconds since midnight Numerator intVLC Seconds since midnight Denominator intVLC The Universal Time corresponding to data timestamp is uniquely given by the fields Modified Julian Day Seconds since midnight Numerator and Seconds since midnight Denominator The Modified Julian Day is standard count of days with zero being the day Seconds since midnight because of leap seconds If the correspondence to Universal Time is meaningless or unknown when writing data these fields shall be given the special values When reading value of for Seconds since midnight Denominator should be interpreted as no corresponding Universal Time Field encoding formats int16 bit big endian signed integer int32 bit big endian signed integer intVLC Variable-length-coded signed integer",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "globalHeader",
          "package": "zoom-cache",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:globalHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Format",
          "name": "headerMarker",
          "package": "zoom-cache",
          "signature": "Word8",
          "source": "src/Data-ZoomCache-Format.html#headerMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "headerMarker",
          "package": "zoom-cache",
          "partial": "Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:headerMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw Data Packet header:\n\u003c/p\u003e\u003cpre\u003e\n    0                   1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1| Byte\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Identifier                                                    | 0-3\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 4-7\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Track no. (int32)                                             | 8-11\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry Timestamp (int64)                                       | 12-15\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 16-19\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit TImestamp (int64)                                        | 20-23\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 24-27\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Count of data points COUNT (int32)                            | 28-31\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Payload length in bytes (remainder of packet) (int32)         | 32-35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Data ...                                                      | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 40-\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Timestamps ...                                                | TS-\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           |\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eTimestamps block is only present if VBR (datarate numerator is 0)\n\u003c/p\u003e\u003cp\u003eTS = 28 + (COUNT * sizeof(Type))\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "packetHeader",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Format.html#packetHeader",
          "type": "function"
        },
        "index": {
          "description": "Raw Data Packet header Byte Identifier Track no int32 Entry Timestamp int64 Exit TImestamp int64 Count of data points COUNT int32 Payload length in bytes remainder of packet int32 Data Timestamps TS Timestamps block is only present if VBR datarate numerator is TS COUNT sizeof Type",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "packetHeader",
          "package": "zoom-cache",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:packetHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary Data Packet header:\n\u003c/p\u003e\u003cpre\u003e\n    0                   1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1| Byte\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Identifier                                                    | 0-3\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 4-7\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Track no. (int32)                                             | 8-11\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Level (int32)                                                 | 12-15\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry Timestamp (int64)                                       | 16-19\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 20-23\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit Timestamp (int64)                                        | 24-27\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 28-31\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Summary length in bytes (int32)                               | 32-35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Summary Data ...                                              | 36-\n\u003c/pre\u003e\u003cp\u003eSome default encodings of Summary Data are provided in modules\n\u003ca\u003eData.ZoomCache.Numeric.Double\u003c/a\u003e and \u003ca\u003eData.ZoomCache.Numeric.Int\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "summaryHeader",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Format.html#summaryHeader",
          "type": "function"
        },
        "index": {
          "description": "Summary Data Packet header Byte Identifier Track no int32 Level int32 Entry Timestamp int64 Exit Timestamp int64 Summary length in bytes int32 Summary Data Some default encodings of Summary Data are provided in modules Data.ZoomCache.Numeric.Double and Data.ZoomCache.Numeric.Int",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "summaryHeader",
          "package": "zoom-cache",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:summaryHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack header:\n\u003c/p\u003e\u003cpre\u003e\n    0                   1                   2                   3\n    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1| Byte\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Identifier                                                    | 0-3\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 4-7\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Track no. (int32)                                             | 8-11\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Reserved                                                |z|d|v| 12-15\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Datarate numerator (int64)                                    | 16-19\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 20-23\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Datarate denominator (int64)                                  | 24-27\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 28-31\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Length of codec identifier in bytes (int32)                   | 32-35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Codec identifier                                              | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | ...                                                           | 40-\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Length of name in bytes (int32)                               | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Name (UTF-8) ...                                              | ...\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ev\u003c/code\u003e : Variable data rate flag. 0=CBR, 1=VBR\n  \u003ccode\u003ed\u003c/code\u003e : Delta encode flag. 0=Raw values 1=delta encoded values\n  \u003ccode\u003ez\u003c/code\u003e : Zlib encode flag. 0=uncompressed 1=zlib compressed\n\u003c/p\u003e\u003cp\u003eDatarate: numerator 0 indicates variable bitrate (all data values are timestamped)\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "trackHeader",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Format.html#trackHeader",
          "type": "function"
        },
        "index": {
          "description": "Track header Byte Identifier Track no int32 Reserved Datarate numerator int64 Datarate denominator int64 Length of codec identifier in bytes int32 Codec identifier Length of name in bytes int32 Name UTF-8 Variable data rate flag CBR VBR Delta encode flag Raw values delta encoded values Zlib encode flag uncompressed zlib compressed Datarate numerator indicates variable bitrate all data values are timestamped",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "trackHeader",
          "package": "zoom-cache",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:trackHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe major version encoded by this library\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "versionMajor",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Format.html#versionMajor",
          "type": "function"
        },
        "index": {
          "description": "The major version encoded by this library",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "versionMajor",
          "package": "zoom-cache",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:versionMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minor version encoded by this library\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Format",
          "name": "versionMinor",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Format.html#versionMinor",
          "type": "function"
        },
        "index": {
          "description": "The minor version encoded by this library",
          "hierarchy": "Data ZoomCache Format",
          "module": "Data.ZoomCache.Format",
          "name": "versionMinor",
          "package": "zoom-cache",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Format.html#v:versionMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIdentifiers for track types of ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Identify",
          "name": "Identify",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Identify.html",
          "type": "module"
        },
        "index": {
          "description": "Identifiers for track types of ZoomCache files",
          "hierarchy": "Data ZoomCache Identify",
          "module": "Data.ZoomCache.Identify",
          "name": "Identify",
          "package": "zoom-cache",
          "partial": "Identify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Identify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache multichannel API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel.Common",
          "name": "Common",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Multichannel-Common.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache multichannel API",
          "hierarchy": "Data ZoomCache Multichannel Common",
          "module": "Data.ZoomCache.Multichannel.Common",
          "name": "Common",
          "package": "zoom-cache",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Multichannel.Common\",\"Data.ZoomCache.Multichannel\"]",
          "name": "trackTypeMultichannel",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Multichannel-Common.html#trackTypeMultichannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Common.html#v:trackTypeMultichannel\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel.html#v:trackTypeMultichannel\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel Common",
          "module": "Data.ZoomCache.Multichannel.Common",
          "name": "trackTypeMultichannel",
          "package": "zoom-cache",
          "partial": "Type Multichannel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Common.html#v:trackTypeMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache multichannel API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "Internal",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Multichannel-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache multichannel API",
          "hierarchy": "Data ZoomCache Multichannel Internal",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "Internal",
          "package": "zoom-cache",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "identifyCodecMultichannel",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e IdentifyCodec",
          "source": "src/Data-ZoomCache-Multichannel-Internal.html#identifyCodecMultichannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel Internal",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "identifyCodecMultichannel",
          "normalized": "[IdentifyCodec]-\u003eIdentifyCodec",
          "package": "zoom-cache",
          "partial": "Codec Multichannel",
          "signature": "[IdentifyCodec]-\u003eIdentifyCodec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Internal.html#v:identifyCodecMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use setCodecMultichannel instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "mkTrackSpecMultichannel",
          "package": "zoom-cache",
          "signature": "Int -\u003e a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackSpec",
          "source": "src/Data-ZoomCache-Multichannel-Internal.html#mkTrackSpecMultichannel",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use setCodecMultichannel instead",
          "hierarchy": "Data ZoomCache Multichannel Internal",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "mkTrackSpecMultichannel",
          "normalized": "Int-\u003ea-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec Multichannel",
          "signature": "Int-\u003ea-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Internal.html#v:mkTrackSpecMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use setCodecMultichannel instead\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCreate a track map for a stream of a given type, as track no. 1\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "oneTrackMultichannel",
          "package": "zoom-cache",
          "signature": "Int -\u003e a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackMap",
          "source": "src/Data-ZoomCache-Multichannel-Internal.html#oneTrackMultichannel",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use setCodecMultichannel instead Create track map for stream of given type as track no",
          "hierarchy": "Data ZoomCache Multichannel Internal",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "oneTrackMultichannel",
          "normalized": "Int-\u003ea-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "package": "zoom-cache",
          "partial": "Track Multichannel",
          "signature": "Int-\u003ea-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Internal.html#v:oneTrackMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "supportMultichannel",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec] -\u003e [IdentifyCodec]",
          "source": "src/Data-ZoomCache-Multichannel-Internal.html#supportMultichannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel Internal",
          "module": "Data.ZoomCache.Multichannel.Internal",
          "name": "supportMultichannel",
          "normalized": "[IdentifyCodec]-\u003e[IdentifyCodec]",
          "package": "zoom-cache",
          "partial": "Multichannel",
          "signature": "[IdentifyCodec]-\u003e[IdentifyCodec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-Internal.html#v:supportMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for multichannel values of type [a].\n\u003c/p\u003e\u003cp\u003eThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMultichannel SummaryData is simply a concatenation of n blocks of SummaryData\nfor type a.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "List",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Multichannel-List.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for multichannel values of type This module implements the interfaces documented in Data.ZoomCache.Codec Multichannel SummaryData is simply concatenation of blocks of SummaryData for type",
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "List",
          "package": "zoom-cache",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumListDouble",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(TimeStamp, [Double])] m a",
          "source": "src/Data-ZoomCache-Multichannel-List.html#enumListDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumListDouble",
          "normalized": "Enumeratee[Offset Block][(TimeStamp,[Double])]a b",
          "package": "zoom-cache",
          "partial": "List Double",
          "signature": "Enumeratee[Offset Block][(TimeStamp,[Double])]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:enumListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumSummaryListDouble",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [[Summary Double]] m a",
          "source": "src/Data-ZoomCache-Multichannel-List.html#enumSummaryListDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumSummaryListDouble",
          "normalized": "Int-\u003eEnumeratee[Offset Block][[Summary Double]]a b",
          "package": "zoom-cache",
          "partial": "Summary List Double",
          "signature": "Int-\u003eEnumeratee[Offset Block][[Summary Double]]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:enumSummaryListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumSummaryUTCListDouble",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [[SummaryUTC Double]] m a",
          "source": "src/Data-ZoomCache-Multichannel-List.html#enumSummaryUTCListDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumSummaryUTCListDouble",
          "normalized": "Int-\u003eEnumeratee[Offset Block][[SummaryUTC Double]]a b",
          "package": "zoom-cache",
          "partial": "Summary UTCList Double",
          "signature": "Int-\u003eEnumeratee[Offset Block][[SummaryUTC Double]]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:enumSummaryUTCListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumUTCListDouble",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(UTCTime, [Double])] m a",
          "source": "src/Data-ZoomCache-Multichannel-List.html#enumUTCListDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "enumUTCListDouble",
          "normalized": "Enumeratee[Offset Block][(UTCTime,[Double])]a b",
          "package": "zoom-cache",
          "partial": "UTCList Double",
          "signature": "Enumeratee[Offset Block][(UTCTime,[Double])]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:enumUTCListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "wholeTrackSummaryListDouble",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m [Summary Double]",
          "source": "src/Data-ZoomCache-Multichannel-List.html#wholeTrackSummaryListDouble",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "wholeTrackSummaryListDouble",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a[Summary Double]",
          "package": "zoom-cache",
          "partial": "Track Summary List Double",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m[Summary Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:wholeTrackSummaryListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "wholeTrackSummaryUTCListDouble",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m [SummaryUTC Double]",
          "source": "src/Data-ZoomCache-Multichannel-List.html#wholeTrackSummaryUTCListDouble",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data ZoomCache Multichannel List",
          "module": "Data.ZoomCache.Multichannel.List",
          "name": "wholeTrackSummaryUTCListDouble",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a[SummaryUTC Double]",
          "package": "zoom-cache",
          "partial": "Track Summary UTCList Double",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m[SummaryUTC Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-List.html#v:wholeTrackSummaryUTCListDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for multichannel values of type (NList n a).\n\u003c/p\u003e\u003cp\u003eThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMultichannel SummaryData is simply a concatenation of n blocks of SummaryData\nfor type a.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "NList",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Multichannel-NList.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for multichannel values of type NList This module implements the interfaces documented in Data.ZoomCache.Codec Multichannel SummaryData is simply concatenation of blocks of SummaryData for type",
          "hierarchy": "Data ZoomCache Multichannel NList",
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "NList",
          "package": "zoom-cache",
          "partial": "NList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-NList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "summaryNListToList",
          "package": "zoom-cache",
          "signature": "Summary (NList n a) -\u003e [Summary a]",
          "source": "src/Data-ZoomCache-Multichannel-NList.html#summaryNListToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel NList",
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "summaryNListToList",
          "normalized": "Summary(NList a b)-\u003e[Summary b]",
          "package": "zoom-cache",
          "partial": "NList To List",
          "signature": "Summary(NList n a)-\u003e[Summary a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-NList.html#v:summaryNListToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "summaryUTCNListToList",
          "package": "zoom-cache",
          "signature": "SummaryUTC (NList n a) -\u003e [SummaryUTC a]",
          "source": "src/Data-ZoomCache-Multichannel-NList.html#summaryUTCNListToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Multichannel NList",
          "module": "Data.ZoomCache.Multichannel.NList",
          "name": "summaryUTCNListToList",
          "normalized": "SummaryUTC(NList a b)-\u003e[SummaryUTC b]",
          "package": "zoom-cache",
          "partial": "UTCNList To List",
          "signature": "SummaryUTC(NList n a)-\u003e[SummaryUTC a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel-NList.html#v:summaryUTCNListToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache multichannel API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Multichannel",
          "name": "Multichannel",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Multichannel.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache multichannel API",
          "hierarchy": "Data ZoomCache Multichannel",
          "module": "Data.ZoomCache.Multichannel",
          "name": "Multichannel",
          "package": "zoom-cache",
          "partial": "Multichannel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Multichannel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFixed-length lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-NList.html",
          "type": "module"
        },
        "index": {
          "description": "Fixed-length lists",
          "hierarchy": "Data ZoomCache NList",
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "package": "zoom-cache",
          "partial": "NList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-NList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-NList.html#NList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache NList",
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "package": "zoom-cache",
          "partial": "NList",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-NList.html#t:NList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "package": "zoom-cache",
          "signature": "NList n [a]",
          "source": "src/Data-ZoomCache-NList.html#NList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache NList",
          "module": "Data.ZoomCache.NList",
          "name": "NList",
          "normalized": "NList a[b]",
          "package": "zoom-cache",
          "partial": "NList",
          "signature": "NList n[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-NList.html#v:NList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.NList",
          "name": "nListToList",
          "package": "zoom-cache",
          "signature": "NList n a -\u003e [a]",
          "source": "src/Data-ZoomCache-NList.html#nListToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache NList",
          "module": "Data.ZoomCache.NList",
          "name": "nListToList",
          "normalized": "NList a b-\u003e[b]",
          "package": "zoom-cache",
          "partial": "List To List",
          "signature": "NList n a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-NList.html#v:nListToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDelta encoding and decoding of numeric values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "Delta",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Delta.html",
          "type": "module"
        },
        "index": {
          "description": "Delta encoding and decoding of numeric values",
          "hierarchy": "Data ZoomCache Numeric Delta",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "Delta",
          "package": "zoom-cache",
          "partial": "Delta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Delta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-decode a list of numbers\n\u003c/p\u003e\u003cpre\u003e \u003e deltaDecode [1,1,1,-1,2]\n [1,2,3,2,4]\n\u003c/pre\u003e",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "deltaDecode",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Numeric-Delta.html#deltaDecode",
          "type": "function"
        },
        "index": {
          "description": "Delta-decode list of numbers deltaDecode",
          "hierarchy": "Data ZoomCache Numeric Delta",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "deltaDecode",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Decode",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Delta.html#v:deltaDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta encode a list of numbers\n\u003c/p\u003e\u003cpre\u003e \u003e deltaEncode [1,2,3,2,4]\n [1,1,1,-1,2]\n\u003c/pre\u003e",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "deltaEncode",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Numeric-Delta.html#deltaEncode",
          "type": "function"
        },
        "index": {
          "description": "Delta encode list of numbers deltaEncode",
          "hierarchy": "Data ZoomCache Numeric Delta",
          "module": "Data.ZoomCache.Numeric.Delta",
          "name": "deltaEncode",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Encode",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Delta.html#v:deltaEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe minimum and maximum positive, finite floats.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "FloatMinMax",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-FloatMinMax.html",
          "type": "module"
        },
        "index": {
          "description": "The minimum and maximum positive finite floats",
          "hierarchy": "Data ZoomCache Numeric FloatMinMax",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "FloatMinMax",
          "package": "zoom-cache",
          "partial": "Float Min Max",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-FloatMinMax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum finite float.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMax",
          "package": "zoom-cache",
          "signature": "a",
          "source": "src/Data-ZoomCache-Numeric-FloatMinMax.html#floatMax",
          "type": "function"
        },
        "index": {
          "description": "The maximum finite float",
          "hierarchy": "Data ZoomCache Numeric FloatMinMax",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMax",
          "package": "zoom-cache",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-FloatMinMax.html#v:floatMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum denormalized float.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMaxDenorm",
          "package": "zoom-cache",
          "signature": "a",
          "source": "src/Data-ZoomCache-Numeric-FloatMinMax.html#floatMaxDenorm",
          "type": "function"
        },
        "index": {
          "description": "The maximum denormalized float",
          "hierarchy": "Data ZoomCache Numeric FloatMinMax",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMaxDenorm",
          "package": "zoom-cache",
          "partial": "Max Denorm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-FloatMinMax.html#v:floatMaxDenorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum positive, denormalized float.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMin",
          "package": "zoom-cache",
          "signature": "a",
          "source": "src/Data-ZoomCache-Numeric-FloatMinMax.html#floatMin",
          "type": "function"
        },
        "index": {
          "description": "The minimum positive denormalized float",
          "hierarchy": "Data ZoomCache Numeric FloatMinMax",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMin",
          "package": "zoom-cache",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-FloatMinMax.html#v:floatMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum positive, normalized float.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMinNorm",
          "package": "zoom-cache",
          "signature": "a",
          "source": "src/Data-ZoomCache-Numeric-FloatMinMax.html#floatMinNorm",
          "type": "function"
        },
        "index": {
          "description": "The minimum positive normalized float",
          "hierarchy": "Data ZoomCache Numeric FloatMinMax",
          "module": "Data.ZoomCache.Numeric.FloatMinMax",
          "name": "floatMinNorm",
          "package": "zoom-cache",
          "partial": "Min Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-FloatMinMax.html#v:floatMinNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for values of type Float and Double.\nThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\nView the module source for enlightenment.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Float.\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (float)                                                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (float)                                                  | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (float)                                                   | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (float)                                                   | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (float)                                                   | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (float)                                                   | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Double.\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (double)                                                | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (double)                                                 | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (double)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 68-71\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 72-75\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 76-79\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 80-83\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003efloat\u003c/code\u003e:  big-endian IEEE 754-2008 binary32 (IEEE 754-1985 single)\n  \u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric.IEEE754",
          "name": "IEEE754",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-IEEE754.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for values of type Float and Double This module implements the interfaces documented in Data.ZoomCache.Codec View the module source for enlightenment The table below describes the encoding of SummaryData for Float Entry float Exit float Min float Max float Avg float RMS float The table below describes the encoding of SummaryData for Double Entry double Exit double Min double Max double Avg double RMS double Field encoding formats float big-endian IEEE binary32 IEEE single double big-endian IEEE binary64 IEEE double",
          "hierarchy": "Data ZoomCache Numeric IEEE754",
          "module": "Data.ZoomCache.Numeric.IEEE754",
          "name": "IEEE754",
          "package": "zoom-cache",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-IEEE754.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for values of type Int. This module\nimplements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\nView the module source for enlightenment.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Int8:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (int8)  | Exit (int8)   | Min (int8)    | Max (int8)    | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Int16:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (int16)                 | Exit (int16)                  | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int16)                   | Max (int16)                   | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Int32:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (int32)                                                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (int32)                                                  | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int32)                                                   | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (int32)                                                   | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Int64:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (int64)                                                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (int64)                                                  | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (int64)                                                   | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (int64)                                                   | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 68-71\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 72-75\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 76-79\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 80-83\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eSummaryData for Int and Integer is encoded as the following sequence:\n\u003c/p\u003e\u003cpre\u003e\n   Entry (intVLC)\n   Exit (intVLC)\n   Min (intVLC)\n   Max (intVLC)\n   Avg (double)\n   RMS (double)\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint8\u003c/code\u003e:   8bit signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint16\u003c/code\u003e:  16bit big endian signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint32\u003c/code\u003e:  32bit big endian signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint64\u003c/code\u003e:  32bit big endian signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eintVLC\u003c/code\u003e: Variable-length-coded signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003cp\u003eVariable-length coding format:\n\u003c/p\u003e\u003cp\u003ezoom-cache includes a simple variable-length coding scheme for signed integers.\n  When decoding, single bytes are read at a time. If the high bit is set, the\n  next byte is also read. The lower 7 bits of each byte contain data. Decoding\n  continues by reading single bytes until a byte is read with the high bit zero.\n\u003c/p\u003e\u003cp\u003eThe first byte of a variable-length coded integer contain a sign bit and the\n  lowest 6 bits of the value. This byte is encoded as:\n\u003c/p\u003e\u003cpre\u003e\n    0 1 2 3 4 5 6 7\n   +-+-+-+-+-+-+-+-+\n   |s| d[0]-d[5] |c|\n   +-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eSubsequent bytes encode bits 6-12, 13-19, ... of the value:\n\u003c/p\u003e\u003cpre\u003e\n    0 1 2 3 4 5 6 7\n   +-+-+-+-+-+-+-+-+\n   | d[n]-d[n+6] |c|\n   +-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003en = 6, 13, 20, ...\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003es\u003c/code\u003e: sign, 1 = negative, 0 = non-negative\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e: continue flag, 1 = continue reading next byte, 0 = stop\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric.Int",
          "name": "Int",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Int.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for values of type Int This module implements the interfaces documented in Data.ZoomCache.Codec View the module source for enlightenment The table below describes the encoding of SummaryData for Int8 Entry int8 Exit int8 Min int8 Max int8 Avg double RMS double The table below describes the encoding of SummaryData for Int16 Entry int16 Exit int16 Min int16 Max int16 Avg double RMS double The table below describes the encoding of SummaryData for Int32 Entry int32 Exit int32 Min int32 Max int32 Avg double RMS double The table below describes the encoding of SummaryData for Int64 Entry int64 Exit int64 Min int64 Max int64 Avg double RMS double SummaryData for Int and Integer is encoded as the following sequence Entry intVLC Exit intVLC Min intVLC Max intVLC Avg double RMS double Field encoding formats int8 bit signed integer int16 bit big endian signed integer int32 bit big endian signed integer int64 bit big endian signed integer intVLC Variable-length-coded signed integer double big-endian IEEE binary64 IEEE double Variable-length coding format zoom-cache includes simple variable-length coding scheme for signed integers When decoding single bytes are read at time If the high bit is set the next byte is also read The lower bits of each byte contain data Decoding continues by reading single bytes until byte is read with the high bit zero The first byte of variable-length coded integer contain sign bit and the lowest bits of the value This byte is encoded as Subsequent bytes encode bits of the value where sign negative non-negative continue flag continue reading next byte stop",
          "hierarchy": "Data ZoomCache Numeric Int",
          "module": "Data.ZoomCache.Numeric.Int",
          "name": "Int",
          "package": "zoom-cache",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Int.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "Internal",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "Internal",
          "package": "zoom-cache",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "appendSummaryNum",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryData a -\u003e SampleOffsetDiff -\u003e SummaryData a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#appendSummaryNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "appendSummaryNum",
          "normalized": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Num",
          "signature": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:appendSummaryNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "deltaDecodeNum",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#deltaDecodeNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "deltaDecodeNum",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Decode Num",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:deltaDecodeNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "deltaEncodeNum",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#deltaEncodeNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "deltaEncodeNum",
          "normalized": "SummaryWork a-\u003ea-\u003ea",
          "package": "zoom-cache",
          "partial": "Encode Num",
          "signature": "SummaryWork a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:deltaEncodeNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "fromSummaryNum",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Builder",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#fromSummaryNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "fromSummaryNum",
          "normalized": "SummaryData a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Summary Num",
          "signature": "SummaryData a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:fromSummaryNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "initSummaryNumBounded",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#initSummaryNumBounded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "initSummaryNumBounded",
          "normalized": "SampleOffset-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Num Bounded",
          "signature": "SampleOffset-\u003eSummaryWork a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:initSummaryNumBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "mkSummaryNum",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryWork a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#mkSummaryNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "mkSummaryNum",
          "normalized": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Num",
          "signature": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:mkSummaryNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "readSummaryNum",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m (SummaryData a)",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#readSummaryNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "readSummaryNum",
          "package": "zoom-cache",
          "partial": "Summary Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:readSummaryNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "updateSummaryNum",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e a -\u003e SummaryWork a -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Numeric-Internal.html#updateSummaryNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Internal",
          "module": "Data.ZoomCache.Numeric.Internal",
          "name": "updateSummaryNum",
          "normalized": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Num",
          "signature": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Internal.html#v:updateSummaryNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "Types",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "Types",
          "package": "zoom-cache",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "ZoomNum",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Types.html#ZoomNum",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "ZoomNum",
          "package": "zoom-cache",
          "partial": "Zoom Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#t:ZoomNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMean value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numAvg",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numAvg",
          "type": "method"
        },
        "index": {
          "description": "Mean value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numAvg",
          "normalized": "SummaryData a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "Avg",
          "signature": "SummaryData a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue at start of interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numEntry",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numEntry",
          "type": "method"
        },
        "index": {
          "description": "Value at start of interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numEntry",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Entry",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue at end of interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numExit",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numExit",
          "type": "method"
        },
        "index": {
          "description": "Value at end of interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numExit",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Exit",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMax",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMax",
          "type": "method"
        },
        "index": {
          "description": "Maximum value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMax",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Max",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMin",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMin",
          "type": "method"
        },
        "index": {
          "description": "Minimum value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMin",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Min",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMkSummary",
          "package": "zoom-cache",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMkSummary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMkSummary",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Mk Summary",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numMkSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMkSummaryWork",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e Maybe a -\u003e a -\u003e a -\u003e a -\u003e Double -\u003e Double -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMkSummaryWork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numMkSummaryWork",
          "normalized": "SampleOffset-\u003eMaybe a-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Mk Summary Work",
          "signature": "SampleOffset-\u003eMaybe a-\u003ea-\u003ea-\u003ea-\u003eDouble-\u003eDouble-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numMkSummaryWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot mean square value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numRMS",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numRMS",
          "type": "method"
        },
        "index": {
          "description": "Root mean square value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numRMS",
          "normalized": "SummaryData a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "RMS",
          "signature": "SummaryData a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numRMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkEntry",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e Maybe a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkEntry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkEntry",
          "normalized": "SummaryWork a-\u003eMaybe a",
          "package": "zoom-cache",
          "partial": "Work Entry",
          "signature": "SummaryWork a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkExit",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkExit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkExit",
          "normalized": "SummaryWork a-\u003ea",
          "package": "zoom-cache",
          "partial": "Work Exit",
          "signature": "SummaryWork a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkMax",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkMax",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkMax",
          "normalized": "SummaryWork a-\u003ea",
          "package": "zoom-cache",
          "partial": "Work Max",
          "signature": "SummaryWork a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkMin",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkMin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkMin",
          "normalized": "SummaryWork a-\u003ea",
          "package": "zoom-cache",
          "partial": "Work Min",
          "signature": "SummaryWork a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSO",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e SampleOffset",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkSO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSO",
          "normalized": "SummaryWork a-\u003eSampleOffset",
          "package": "zoom-cache",
          "partial": "Work SO",
          "signature": "SummaryWork a-\u003eSampleOffset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSum",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkSum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSum",
          "normalized": "SummaryWork a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "Work Sum",
          "signature": "SummaryWork a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSumSq",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numWorkSumSq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric Types",
          "module": "Data.ZoomCache.Numeric.Types",
          "name": "numWorkSumSq",
          "normalized": "SummaryWork a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "Work Sum Sq",
          "signature": "SummaryWork a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Types.html#v:numWorkSumSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for values of type Word. This module\nimplements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\nView the module source for enlightenment.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Word8:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (word8) | Exit (word8)  | Min (word8)   | Max (word8)   | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Word16:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (word16)                | Exit (word16)                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (word16)                  | Max (word16)                  | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Word32:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (word32)                                                | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (word32)                                                 | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (word32)                                                  | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (word32)                                                  | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for Word64:\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Entry (word64)                                                | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 40-43\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Exit (word64)                                                 | 44-47\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 48-51\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Min (word64)                                                  | 52-55\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 56-59\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Max (word64)                                                  | 60-63\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 64-67\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Avg (double)                                                  | 68-71\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 72-75\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | RMS (double)                                                  | 76-79\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   |                                                               | 80-83\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eSummaryData for Word is encoded as the following sequence, in which the\nvariable-length coded sign bit is always zero:\n\u003c/p\u003e\u003cpre\u003e\n   Entry (intVLC)\n   Exit (intVLC)\n   Min (intVLC)\n   Max (intVLC)\n   Avg (double)\n   RMS (double)\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eword8\u003c/code\u003e:   8bit unsigned integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eword16\u003c/code\u003e:  16bit big endian unsigned integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eword32\u003c/code\u003e:  32bit big endian unsigned integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eword64\u003c/code\u003e:  32bit big endian unsigned integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eintVLC\u003c/code\u003e: Variable-length-coded signed integer\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003edouble\u003c/code\u003e: big-endian IEEE 754-2008 binary64 (IEEE 754-1985 double)\n\u003c/p\u003e\u003cp\u003eFor details of the variable-length coding format, see \u003ca\u003eData.ZoomCache.Numeric.Int\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric.Word",
          "name": "Word",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Word.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for values of type Word This module implements the interfaces documented in Data.ZoomCache.Codec View the module source for enlightenment The table below describes the encoding of SummaryData for Word8 Entry word8 Exit word8 Min word8 Max word8 Avg double RMS double The table below describes the encoding of SummaryData for Word16 Entry word16 Exit word16 Min word16 Max word16 Avg double RMS double The table below describes the encoding of SummaryData for Word32 Entry word32 Exit word32 Min word32 Max word32 Avg double RMS double The table below describes the encoding of SummaryData for Word64 Entry word64 Exit word64 Min word64 Max word64 Avg double RMS double SummaryData for Word is encoded as the following sequence in which the variable-length coded sign bit is always zero Entry intVLC Exit intVLC Min intVLC Max intVLC Avg double RMS double Field encoding formats word8 bit unsigned integer word16 bit big endian unsigned integer word32 bit big endian unsigned integer word64 bit big endian unsigned integer intVLC Variable-length-coded signed integer double big-endian IEEE binary64 IEEE double For details of the variable-length coding format see Data.ZoomCache.Numeric.Int",
          "hierarchy": "Data ZoomCache Numeric Word",
          "module": "Data.ZoomCache.Numeric.Word",
          "name": "Word",
          "package": "zoom-cache",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric-Word.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache numeric API\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "Numeric",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache numeric API",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "Numeric",
          "package": "zoom-cache",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "ZoomNum",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Numeric-Types.html#ZoomNum",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "ZoomNum",
          "package": "zoom-cache",
          "partial": "Zoom Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#t:ZoomNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "enumDouble",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(TimeStamp, Double)] m a",
          "source": "src/Data-ZoomCache-Numeric.html#enumDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "enumDouble",
          "normalized": "Enumeratee[Offset Block][(TimeStamp,Double)]a b",
          "package": "zoom-cache",
          "partial": "Double",
          "signature": "Enumeratee[Offset Block][(TimeStamp,Double)]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:enumDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "enumSummaryDouble",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [Summary Double] m a",
          "source": "src/Data-ZoomCache-Numeric.html#enumSummaryDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "enumSummaryDouble",
          "normalized": "Int-\u003eEnumeratee[Offset Block][Summary Double]a b",
          "package": "zoom-cache",
          "partial": "Summary Double",
          "signature": "Int-\u003eEnumeratee[Offset Block][Summary Double]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:enumSummaryDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "enumSummaryUTCDouble",
          "package": "zoom-cache",
          "signature": "Int -\u003e Enumeratee [Offset Block] [SummaryUTC Double] m a",
          "source": "src/Data-ZoomCache-Numeric.html#enumSummaryUTCDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "enumSummaryUTCDouble",
          "normalized": "Int-\u003eEnumeratee[Offset Block][SummaryUTC Double]a b",
          "package": "zoom-cache",
          "partial": "Summary UTCDouble",
          "signature": "Int-\u003eEnumeratee[Offset Block][SummaryUTC Double]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:enumSummaryUTCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "enumUTCDouble",
          "package": "zoom-cache",
          "signature": "Enumeratee [Offset Block] [(UTCTime, Double)] m a",
          "source": "src/Data-ZoomCache-Numeric.html#enumUTCDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "enumUTCDouble",
          "normalized": "Enumeratee[Offset Block][(UTCTime,Double)]a b",
          "package": "zoom-cache",
          "partial": "UTCDouble",
          "signature": "Enumeratee[Offset Block][(UTCTime,Double)]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:enumUTCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMean value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numAvg",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numAvg",
          "type": "method"
        },
        "index": {
          "description": "Mean value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numAvg",
          "normalized": "SummaryData a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "Avg",
          "signature": "SummaryData a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue at start of interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numEntry",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numEntry",
          "type": "method"
        },
        "index": {
          "description": "Value at start of interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numEntry",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Entry",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue at end of interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numExit",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numExit",
          "type": "method"
        },
        "index": {
          "description": "Value at end of interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numExit",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Exit",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numMax",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMax",
          "type": "method"
        },
        "index": {
          "description": "Maximum value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numMax",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Max",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numMin",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e a",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numMin",
          "type": "method"
        },
        "index": {
          "description": "Minimum value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numMin",
          "normalized": "SummaryData a-\u003ea",
          "package": "zoom-cache",
          "partial": "Min",
          "signature": "SummaryData a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot mean square value in the summary interval\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "numRMS",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Double",
          "source": "src/Data-ZoomCache-Numeric-Types.html#numRMS",
          "type": "method"
        },
        "index": {
          "description": "Root mean square value in the summary interval",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "numRMS",
          "normalized": "SummaryData a-\u003eDouble",
          "package": "zoom-cache",
          "partial": "RMS",
          "signature": "SummaryData a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:numRMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Numeric",
          "name": "rawToDouble",
          "package": "zoom-cache",
          "signature": "ZoomRaw -\u003e [Double]",
          "source": "src/Data-ZoomCache-Numeric.html#rawToDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "rawToDouble",
          "normalized": "ZoomRaw-\u003e[Double]",
          "package": "zoom-cache",
          "partial": "To Double",
          "signature": "ZoomRaw-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:rawToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoercion of numeric Summary to type Summary Double.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "toSummaryDouble",
          "package": "zoom-cache",
          "signature": "Summary a -\u003e Maybe (Summary Double)",
          "source": "src/Data-ZoomCache-Numeric.html#toSummaryDouble",
          "type": "function"
        },
        "index": {
          "description": "Coercion of numeric Summary to type Summary Double",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "toSummaryDouble",
          "normalized": "Summary a-\u003eMaybe(Summary Double)",
          "package": "zoom-cache",
          "partial": "Summary Double",
          "signature": "Summary a-\u003eMaybe(Summary Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:toSummaryDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoercion of numeric SummaryUTC to type SummaryUTC Double.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "toSummaryUTCDouble",
          "package": "zoom-cache",
          "signature": "SummaryUTC a -\u003e Maybe (SummaryUTC Double)",
          "source": "src/Data-ZoomCache-Numeric.html#toSummaryUTCDouble",
          "type": "function"
        },
        "index": {
          "description": "Coercion of numeric SummaryUTC to type SummaryUTC Double",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "toSummaryUTCDouble",
          "normalized": "SummaryUTC a-\u003eMaybe(SummaryUTC Double)",
          "package": "zoom-cache",
          "partial": "Summary UTCDouble",
          "signature": "SummaryUTC a-\u003eMaybe(SummaryUTC Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:toSummaryUTCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "wholeTrackSummaryDouble",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m (Summary Double)",
          "source": "src/Data-ZoomCache-Numeric.html#wholeTrackSummaryDouble",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "wholeTrackSummaryDouble",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a(Summary Double)",
          "package": "zoom-cache",
          "partial": "Track Summary Double",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m(Summary Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:wholeTrackSummaryDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the summary of an entire track.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Numeric",
          "name": "wholeTrackSummaryUTCDouble",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Iteratee [Offset Block] m (SummaryUTC Double)",
          "source": "src/Data-ZoomCache-Numeric.html#wholeTrackSummaryUTCDouble",
          "type": "function"
        },
        "index": {
          "description": "Read the summary of an entire track",
          "hierarchy": "Data ZoomCache Numeric",
          "module": "Data.ZoomCache.Numeric",
          "name": "wholeTrackSummaryUTCDouble",
          "normalized": "TrackNo-\u003eIteratee[Offset Block]a(SummaryUTC Double)",
          "package": "zoom-cache",
          "partial": "Track Summary UTCDouble",
          "signature": "TrackNo-\u003eIteratee[Offset Block]m(SummaryUTC Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Numeric.html#v:wholeTrackSummaryUTCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printing of zoom-cache types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "Pretty",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-printing of zoom-cache types",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "Pretty",
          "package": "zoom-cache",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eGlobal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyGlobal",
          "package": "zoom-cache",
          "signature": "Global -\u003e String",
          "source": "src/Data-ZoomCache-Pretty.html#prettyGlobal",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print Global",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyGlobal",
          "normalized": "Global-\u003eString",
          "package": "zoom-cache",
          "partial": "Global",
          "signature": "Global-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#v:prettyGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e, given a datarate\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettySampleOffset",
          "package": "zoom-cache",
          "signature": "Rational -\u003e SampleOffset -\u003e String",
          "source": "src/Data-ZoomCache-Pretty.html#prettySampleOffset",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print SampleOffset given datarate",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettySampleOffset",
          "normalized": "Rational-\u003eSampleOffset-\u003eString",
          "package": "zoom-cache",
          "partial": "Sample Offset",
          "signature": "Rational-\u003eSampleOffset-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#v:prettySampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eSummarySO\u003c/a\u003e\u003c/code\u003e, given a datarate\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettySummarySO",
          "package": "zoom-cache",
          "signature": "Rational -\u003e SummarySO a -\u003e String",
          "source": "src/Data-ZoomCache-Pretty.html#prettySummarySO",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print SummarySO given datarate",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettySummarySO",
          "normalized": "Rational-\u003eSummarySO a-\u003eString",
          "package": "zoom-cache",
          "partial": "Summary SO",
          "signature": "Rational-\u003eSummarySO a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#v:prettySummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e, given a datarate\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyTimeStamp",
          "package": "zoom-cache",
          "signature": "TimeStamp -\u003e String",
          "source": "src/Data-ZoomCache-Pretty.html#prettyTimeStamp",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print SampleOffset given datarate",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyTimeStamp",
          "normalized": "TimeStamp-\u003eString",
          "package": "zoom-cache",
          "partial": "Time Stamp",
          "signature": "TimeStamp-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#v:prettyTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a \u003ccode\u003e\u003ca\u003eTrackSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyTrackSpec",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e TrackSpec -\u003e String",
          "source": "src/Data-ZoomCache-Pretty.html#prettyTrackSpec",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print TrackSpec",
          "hierarchy": "Data ZoomCache Pretty",
          "module": "Data.ZoomCache.Pretty",
          "name": "prettyTrackSpec",
          "normalized": "TrackNo-\u003eTrackSpec-\u003eString",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "signature": "TrackNo-\u003eTrackSpec-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Pretty.html#v:prettyTrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache track specification\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-TrackSpec.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache track specification",
          "hierarchy": "Data ZoomCache TrackSpec",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use setCodec instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "mkTrackSpec",
          "package": "zoom-cache",
          "signature": "a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackSpec",
          "source": "src/Data-ZoomCache-TrackSpec.html#mkTrackSpec",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use setCodec instead",
          "hierarchy": "Data ZoomCache TrackSpec",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "mkTrackSpec",
          "normalized": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "signature": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:mkTrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use setCodec instead\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCreate a track map for a stream of a given type, as track no. 1\n\u003c/p\u003e",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "oneTrack",
          "package": "zoom-cache",
          "signature": "a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackMap",
          "source": "src/Data-ZoomCache-TrackSpec.html#oneTrack",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use setCodec instead Create track map for stream of given type as track no",
          "hierarchy": "Data ZoomCache TrackSpec",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "oneTrack",
          "normalized": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "package": "zoom-cache",
          "partial": "Track",
          "signature": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:oneTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.TrackSpec\",\"Data.ZoomCache\"]",
          "name": "setCodec",
          "package": "zoom-cache",
          "signature": "a -\u003e TrackSpec -\u003e TrackSpec",
          "source": "src/Data-ZoomCache-TrackSpec.html#setCodec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:setCodec\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:setCodec\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache TrackSpec",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "setCodec",
          "normalized": "a-\u003eTrackSpec-\u003eTrackSpec",
          "package": "zoom-cache",
          "partial": "Codec",
          "signature": "a-\u003eTrackSpec-\u003eTrackSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:setCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.TrackSpec\",\"Data.ZoomCache\"]",
          "name": "setCodecMultichannel",
          "package": "zoom-cache",
          "signature": "Int -\u003e a -\u003e TrackSpec -\u003e TrackSpec",
          "source": "src/Data-ZoomCache-TrackSpec.html#setCodecMultichannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:setCodecMultichannel\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:setCodecMultichannel\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache TrackSpec",
          "module": "Data.ZoomCache.TrackSpec",
          "name": "setCodecMultichannel",
          "normalized": "Int-\u003ea-\u003eTrackSpec-\u003eTrackSpec",
          "package": "zoom-cache",
          "partial": "Codec Multichannel",
          "signature": "Int-\u003ea-\u003eTrackSpec-\u003eTrackSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-TrackSpec.html#v:setCodecMultichannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eZoomCache packet and summary types and interfaces\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "Types",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html",
          "type": "module"
        },
        "index": {
          "description": "ZoomCache packet and summary types and interfaces",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Types",
          "package": "zoom-cache",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal and track headers for a zoom-cache file\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "CacheFile",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "data"
        },
        "index": {
          "description": "Global and track headers for zoom-cache file",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "CacheFile",
          "package": "zoom-cache",
          "partial": "Cache File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:CacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "Codec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Codec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Codec",
          "package": "zoom-cache",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify the tracktype corresponding to a given Codec Identifier.\n When parsing a zoom-cache file, the zoom-cache library will try each\n of a given list [\u003ccode\u003eIdentifyTrack\u003c/code\u003e].\n\u003c/p\u003e\u003cp\u003eThe standard zoom-cache instances are provided in \u003ccode\u003estandardIdentifiers\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen developing your own codecs it is not necessary to build a composite\n \u003ccode\u003eIdentifyTrack\u003c/code\u003e functions; it is sufficient to generate one for each new\n codec type. A library of related zoom-cache codecs should export its own\n [\u003ccode\u003eIdentifyTrack\u003c/code\u003e] functions, usually called something like mylibIdentifiers.\n\u003c/p\u003e\u003cp\u003eThese can be generated with \u003ccode\u003eidentifyCodec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#IdentifyCodec",
          "type": "type"
        },
        "index": {
          "description": "Identify the tracktype corresponding to given Codec Identifier When parsing zoom-cache file the zoom-cache library will try each of given list IdentifyTrack The standard zoom-cache instances are provided in standardIdentifiers When developing your own codecs it is not necessary to build composite IdentifyTrack functions it is sufficient to generate one for each new codec type library of related zoom-cache codecs should export its own IdentifyTrack functions usually called something like mylibIdentifiers These can be generated with identifyCodec",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "partial": "Identify Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:IdentifyCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "Packet",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Packet",
          "package": "zoom-cache",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "PacketSO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "PacketSO",
          "package": "zoom-cache",
          "partial": "Packet SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:PacketSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "partial": "Packet UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:PacketUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary block with samplecounts converted to TimeStamp\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "Summary",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "summary block with samplecounts converted to TimeStamp",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Summary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recorded block of summary data\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "SummarySO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "data"
        },
        "index": {
          "description": "recorded block of summary data",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "SummarySO",
          "package": "zoom-cache",
          "partial": "Summary SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:SummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary block with timestamps converted to UTCTime\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "data"
        },
        "index": {
          "description": "summary block with timestamps converted to UTCTime",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "partial": "Summary UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:SummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "Timestampable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Timestampable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Timestampable",
          "package": "zoom-cache",
          "partial": "Timestampable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:Timestampable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of all track numbers to their \u003ccode\u003e\u003ca\u003eTrackSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "TrackMap",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#TrackMap",
          "type": "type"
        },
        "index": {
          "description": "map of all track numbers to their TrackSpec",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "TrackMap",
          "package": "zoom-cache",
          "partial": "Track Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:TrackMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of the type and name of each track\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "data"
        },
        "index": {
          "description": "specification of the type and name of each track",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:TrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "UTCTimestampable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#UTCTimestampable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "UTCTimestampable",
          "package": "zoom-cache",
          "partial": "UTCTimestampable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:UTCTimestampable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomRaw",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomRaw",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomRaw",
          "package": "zoom-cache",
          "partial": "Zoom Raw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must specify a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e type,\n and implement all methods of this class.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomReadable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must specify SummaryData type and implement all methods of this class",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "partial": "Zoom Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "partial": "Zoom Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummarySO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "partial": "Zoom Summary SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomSummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummaryUTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "partial": "Zoom Summary UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomSummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWork",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomWork",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWork",
          "package": "zoom-cache",
          "partial": "Zoom Work",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must additionally specify a \u003ccode\u003e\u003ca\u003eSummaryWork\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomWritable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must additionally specify SummaryWork type",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "partial": "Zoom Writable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#t:ZoomWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "CacheFile",
          "package": "zoom-cache",
          "signature": "CacheFile",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:CacheFile\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:CacheFile\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "CacheFile",
          "package": "zoom-cache",
          "partial": "Cache File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:CacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "Codec",
          "package": "zoom-cache",
          "signature": "Codec a",
          "source": "src/Data-ZoomCache-Types.html#Codec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Codec\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:Codec\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Codec",
          "package": "zoom-cache",
          "partial": "Codec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "Packet",
          "package": "zoom-cache",
          "signature": "Packet",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Packet\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:Packet\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Packet",
          "package": "zoom-cache",
          "partial": "Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "PacketSO",
          "package": "zoom-cache",
          "signature": "PacketSO",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:PacketSO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:PacketSO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "PacketSO",
          "package": "zoom-cache",
          "partial": "Packet SO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:PacketSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "signature": "PacketUTC",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:PacketUTC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:PacketUTC\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "partial": "Packet UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:PacketUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "Summary",
          "package": "zoom-cache",
          "signature": "Summary",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Summary\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:Summary\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "Summary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "SummarySO",
          "package": "zoom-cache",
          "signature": "SummarySO",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:SummarySO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:SummarySO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "SummarySO",
          "package": "zoom-cache",
          "partial": "Summary SO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:SummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "signature": "SummaryUTC",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:SummaryUTC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:SummaryUTC\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "partial": "Summary UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:SummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "signature": "TrackSpec",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:TrackSpec\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:TrackSpec\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:TrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "ZoomRaw",
          "package": "zoom-cache",
          "signature": "ZoomRaw [a]",
          "source": "src/Data-ZoomCache-Types.html#ZoomRaw",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomRaw\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:ZoomRaw\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomRaw",
          "normalized": "ZoomRaw[a]",
          "package": "zoom-cache",
          "partial": "Zoom Raw",
          "signature": "ZoomRaw[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "signature": "ZoomSummary (Summary a)",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummary\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:ZoomSummary\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "partial": "Zoom Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "signature": "ZoomSummarySO (SummarySO a)",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummarySO\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:ZoomSummarySO\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "partial": "Zoom Summary SO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "signature": "ZoomSummaryUTC (SummaryUTC a)",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummaryUTC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:ZoomSummaryUTC\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "partial": "Zoom Summary UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomSummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWork",
          "package": "zoom-cache",
          "signature": "ZoomWork",
          "source": "src/Data-ZoomCache-Types.html#ZoomWork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "ZoomWork",
          "package": "zoom-cache",
          "partial": "Zoom Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:ZoomWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "appendSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryData a -\u003e SampleOffsetDiff -\u003e SummaryData a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#appendSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Append two SummaryData",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "appendSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:appendSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "before",
          "package": "zoom-cache",
          "signature": "Maybe TimeStamp -\u003e a -\u003e Bool",
          "source": "src/Data-ZoomCache-Types.html#before",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:before\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:before\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "before",
          "normalized": "Maybe TimeStamp-\u003ea-\u003eBool",
          "package": "zoom-cache",
          "signature": "Maybe TimeStamp-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "beforeUTC",
          "package": "zoom-cache",
          "signature": "Maybe UTCTime -\u003e a -\u003e Bool",
          "source": "src/Data-ZoomCache-Types.html#beforeUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:beforeUTC\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:beforeUTC\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "beforeUTC",
          "normalized": "Maybe UTCTime-\u003ea-\u003eBool",
          "package": "zoom-cache",
          "partial": "UTC",
          "signature": "Maybe UTCTime-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:beforeUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "cfGlobal",
          "package": "zoom-cache",
          "signature": "Global",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfGlobal\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:cfGlobal\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "cfGlobal",
          "package": "zoom-cache",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "cfOffsets",
          "package": "zoom-cache",
          "signature": "IntMap FileOffset",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfOffsets\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:cfOffsets\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "cfOffsets",
          "package": "zoom-cache",
          "partial": "Offsets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfOffsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "cfSpecs",
          "package": "zoom-cache",
          "signature": "IntMap TrackSpec",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfSpecs\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:cfSpecs\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "cfSpecs",
          "package": "zoom-cache",
          "partial": "Specs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:cfSpecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "currWork",
          "package": "zoom-cache",
          "signature": "Maybe (SummaryWork a)",
          "source": "src/Data-ZoomCache-Types.html#ZoomWork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "currWork",
          "package": "zoom-cache",
          "partial": "Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:currWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-decode a list of values\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "deltaDecodeRaw",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Types.html#deltaDecodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-decode list of values",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "deltaDecodeRaw",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Decode Raw",
          "signature": "[a]-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:deltaDecodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-encode a value.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "deltaEncodeRaw",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a -\u003e a",
          "source": "src/Data-ZoomCache-Types.html#deltaEncodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-encode value",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "deltaEncodeRaw",
          "normalized": "SummaryWork a-\u003ea-\u003ea",
          "package": "zoom-cache",
          "partial": "Encode Raw",
          "signature": "SummaryWork a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:deltaEncodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether all tracks of a \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e are specified\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "fiFull",
          "package": "zoom-cache",
          "signature": "CacheFile -\u003e Bool",
          "source": "src/Data-ZoomCache-Types.html#fiFull",
          "type": "function"
        },
        "index": {
          "description": "Determine whether all tracks of CacheFile are specified",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "fiFull",
          "normalized": "CacheFile-\u003eBool",
          "package": "zoom-cache",
          "partial": "Full",
          "signature": "CacheFile-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:fiFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "fromRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromRaw",
          "type": "method"
        },
        "index": {
          "description": "Serialize value of type",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "fromRaw",
          "normalized": "a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:fromRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a 'SummaryData a'\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "fromSummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Serialize SummaryData",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "fromSummaryData",
          "normalized": "SummaryData a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:fromSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new 'SummaryWork a', given an initial timestamp.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "initSummaryWork",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#initSummaryWork",
          "type": "method"
        },
        "index": {
          "description": "Generate new SummaryWork given an initial timestamp",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "initSummaryWork",
          "normalized": "SampleOffset-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Work",
          "signature": "SampleOffset-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:initSummaryWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "levels",
          "package": "zoom-cache",
          "signature": "IntMap (SummarySO a)",
          "source": "src/Data-ZoomCache-Types.html#ZoomWork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "levels",
          "package": "zoom-cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:levels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty \u003ccode\u003e\u003ca\u003eCacheFile\u003c/a\u003e\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eGlobal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "mkCacheFile",
          "package": "zoom-cache",
          "signature": "Global -\u003e CacheFile",
          "source": "src/Data-ZoomCache-Types.html#mkCacheFile",
          "type": "function"
        },
        "index": {
          "description": "Create an empty CacheFile using the given Global",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "mkCacheFile",
          "normalized": "Global-\u003eCacheFile",
          "package": "zoom-cache",
          "partial": "Cache File",
          "signature": "Global-\u003eCacheFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:mkCacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetCount",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetCount\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetCount\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetCount",
          "package": "zoom-cache",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetData",
          "package": "zoom-cache",
          "signature": "ZoomRaw",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetData",
          "package": "zoom-cache",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetEntry",
          "package": "zoom-cache",
          "signature": "TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetEntry",
          "package": "zoom-cache",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetExit",
          "package": "zoom-cache",
          "signature": "TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetExit",
          "package": "zoom-cache",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "packetFromPacketSO",
          "package": "zoom-cache",
          "signature": "Rational -\u003e PacketSO -\u003e Packet",
          "source": "src/Data-ZoomCache-Types.html#packetFromPacketSO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetFromPacketSO",
          "normalized": "Rational-\u003ePacketSO-\u003ePacket",
          "package": "zoom-cache",
          "partial": "From Packet SO",
          "signature": "Rational-\u003ePacketSO-\u003ePacket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetFromPacketSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOCount",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOCount\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOCount\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOCount",
          "package": "zoom-cache",
          "partial": "SOCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOData",
          "package": "zoom-cache",
          "signature": "ZoomRaw",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOData",
          "package": "zoom-cache",
          "partial": "SOData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOEntry",
          "package": "zoom-cache",
          "signature": "SampleOffset",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOEntry",
          "package": "zoom-cache",
          "partial": "SOEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOExit",
          "package": "zoom-cache",
          "signature": "SampleOffset",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOExit",
          "package": "zoom-cache",
          "partial": "SOExit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOSampleOffsets",
          "package": "zoom-cache",
          "signature": "[SampleOffset]",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOSampleOffsets\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOSampleOffsets\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOSampleOffsets",
          "normalized": "[SampleOffset]",
          "package": "zoom-cache",
          "partial": "SOSample Offsets",
          "signature": "[SampleOffset]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOSampleOffsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetSOTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetSOTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetSOTrack",
          "package": "zoom-cache",
          "partial": "SOTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetSOTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetTimeStamps",
          "package": "zoom-cache",
          "signature": "[TimeStamp]",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetTimeStamps\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetTimeStamps\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetTimeStamps",
          "normalized": "[TimeStamp]",
          "package": "zoom-cache",
          "partial": "Time Stamps",
          "signature": "[TimeStamp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetTimeStamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetTrack",
          "package": "zoom-cache",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCCount",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCCount\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCCount\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCCount",
          "package": "zoom-cache",
          "partial": "UTCCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCData",
          "package": "zoom-cache",
          "signature": "ZoomRaw",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCData",
          "package": "zoom-cache",
          "partial": "UTCData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCEntry",
          "package": "zoom-cache",
          "signature": "UTCTime",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCEntry",
          "package": "zoom-cache",
          "partial": "UTCEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCExit",
          "package": "zoom-cache",
          "signature": "UTCTime",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCExit",
          "package": "zoom-cache",
          "partial": "UTCExit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCFromPacket",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e Packet -\u003e PacketUTC",
          "source": "src/Data-ZoomCache-Types.html#packetUTCFromPacket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCFromPacket",
          "normalized": "UTCTime-\u003ePacket-\u003ePacketUTC",
          "package": "zoom-cache",
          "partial": "UTCFrom Packet",
          "signature": "UTCTime-\u003ePacket-\u003ePacketUTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCFromPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCFromPacketSO",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e Rational -\u003e PacketSO -\u003e PacketUTC",
          "source": "src/Data-ZoomCache-Types.html#packetUTCFromPacketSO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCFromPacketSO",
          "normalized": "UTCTime-\u003eRational-\u003ePacketSO-\u003ePacketUTC",
          "package": "zoom-cache",
          "partial": "UTCFrom Packet SO",
          "signature": "UTCTime-\u003eRational-\u003ePacketSO-\u003ePacketUTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCFromPacketSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCTimeStamps",
          "package": "zoom-cache",
          "signature": "[UTCTime]",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCTimeStamps\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCTimeStamps\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCTimeStamps",
          "normalized": "[UTCTime]",
          "package": "zoom-cache",
          "partial": "UTCTime Stamps",
          "signature": "[UTCTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCTimeStamps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "packetUTCTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:packetUTCTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "packetUTCTrack",
          "package": "zoom-cache",
          "partial": "UTCTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:packetUTCTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing, used for dumping values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "prettyRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettyRaw",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing used for dumping values of type",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "prettyRaw",
          "normalized": "a-\u003eString",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:prettyRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing for values of type 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "prettySummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettySummaryData",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing for values of type SummaryData",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "prettySummaryData",
          "normalized": "SummaryData a-\u003eString",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:prettySummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type \u003ccode\u003ea\u003c/code\u003e from a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "readRaw",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m a",
          "source": "src/Data-ZoomCache-Types.html#readRaw",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type from stream of ByteString",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "readRaw",
          "package": "zoom-cache",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:readRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type 'SummaryData a' from a stream\n of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "readSummary",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m (SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#readSummary",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type SummaryData from stream of ByteString",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "readSummary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:readSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specDeltaEncode",
          "package": "zoom-cache",
          "signature": "Bool",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specDeltaEncode\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specDeltaEncode\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specDeltaEncode",
          "package": "zoom-cache",
          "partial": "Delta Encode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specDeltaEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specName",
          "package": "zoom-cache",
          "signature": "ByteString",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specName\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specName\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specName",
          "package": "zoom-cache",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specRate",
          "package": "zoom-cache",
          "signature": "Rational",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specRate\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specRate\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specRate",
          "package": "zoom-cache",
          "partial": "Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specSRType",
          "package": "zoom-cache",
          "signature": "SampleRateType",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specSRType\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specSRType\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specSRType",
          "package": "zoom-cache",
          "partial": "SRType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specSRType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specType",
          "package": "zoom-cache",
          "signature": "Codec",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specType\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specType\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specType",
          "package": "zoom-cache",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "specZlibCompress",
          "package": "zoom-cache",
          "signature": "Bool",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specZlibCompress\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:specZlibCompress\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "specZlibCompress",
          "package": "zoom-cache",
          "partial": "Zlib Compress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:specZlibCompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryData",
          "package": "zoom-cache",
          "signature": "(SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryData",
          "package": "zoom-cache",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryEntry",
          "package": "zoom-cache",
          "signature": "TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryEntry",
          "package": "zoom-cache",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryExit",
          "package": "zoom-cache",
          "signature": "TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryExit",
          "package": "zoom-cache",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a SummarySo to a Summary, given a samplerate\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "summaryFromSummarySO",
          "package": "zoom-cache",
          "signature": "Rational -\u003e SummarySO a -\u003e Summary a",
          "source": "src/Data-ZoomCache-Types.html#summaryFromSummarySO",
          "type": "function"
        },
        "index": {
          "description": "Convert SummarySo to Summary given samplerate",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryFromSummarySO",
          "normalized": "Rational-\u003eSummarySO a-\u003eSummary a",
          "package": "zoom-cache",
          "partial": "From Summary SO",
          "signature": "Rational-\u003eSummarySO a-\u003eSummary a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryFromSummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryLevel",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryLevel\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryLevel\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryLevel",
          "package": "zoom-cache",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summarySOData",
          "package": "zoom-cache",
          "signature": "(SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summarySOData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySOData",
          "package": "zoom-cache",
          "partial": "SOData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe duration covered by a summary, in units of 1 / the track's datarate\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "summarySODuration",
          "package": "zoom-cache",
          "signature": "SummarySO a -\u003e SampleOffsetDiff",
          "source": "src/Data-ZoomCache-Types.html#summarySODuration",
          "type": "function"
        },
        "index": {
          "description": "The duration covered by summary in units of the track datarate",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySODuration",
          "normalized": "SummarySO a-\u003eSampleOffsetDiff",
          "package": "zoom-cache",
          "partial": "SODuration",
          "signature": "SummarySO a-\u003eSampleOffsetDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySODuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summarySOEntry",
          "package": "zoom-cache",
          "signature": "SampleOffset",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summarySOEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySOEntry",
          "package": "zoom-cache",
          "partial": "SOEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summarySOExit",
          "package": "zoom-cache",
          "signature": "SampleOffset",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summarySOExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySOExit",
          "package": "zoom-cache",
          "partial": "SOExit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summarySOLevel",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOLevel\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summarySOLevel\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySOLevel",
          "package": "zoom-cache",
          "partial": "SOLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summarySOTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summarySOTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summarySOTrack",
          "package": "zoom-cache",
          "partial": "SOTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summarySOTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryTrack",
          "package": "zoom-cache",
          "partial": "Track",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryUTCData",
          "package": "zoom-cache",
          "signature": "(SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCData\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryUTCData\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCData",
          "package": "zoom-cache",
          "partial": "UTCData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryUTCEntry",
          "package": "zoom-cache",
          "signature": "UTCTime",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCEntry\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryUTCEntry\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCEntry",
          "package": "zoom-cache",
          "partial": "UTCEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryUTCExit",
          "package": "zoom-cache",
          "signature": "UTCTime",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCExit\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryUTCExit\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCExit",
          "package": "zoom-cache",
          "partial": "UTCExit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Summary to a SummaryUTC, given a UTC base time\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCFromSummary",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e Summary a -\u003e SummaryUTC a",
          "source": "src/Data-ZoomCache-Types.html#summaryUTCFromSummary",
          "type": "function"
        },
        "index": {
          "description": "Convert Summary to SummaryUTC given UTC base time",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCFromSummary",
          "normalized": "UTCTime-\u003eSummary a-\u003eSummaryUTC a",
          "package": "zoom-cache",
          "partial": "UTCFrom Summary",
          "signature": "UTCTime-\u003eSummary a-\u003eSummaryUTC a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCFromSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCFromSummarySO",
          "package": "zoom-cache",
          "signature": "UTCTime -\u003e Rational -\u003e SummarySO a -\u003e SummaryUTC a",
          "source": "src/Data-ZoomCache-Types.html#summaryUTCFromSummarySO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCFromSummarySO",
          "normalized": "UTCTime-\u003eRational-\u003eSummarySO a-\u003eSummaryUTC a",
          "package": "zoom-cache",
          "partial": "UTCFrom Summary SO",
          "signature": "UTCTime-\u003eRational-\u003eSummarySO a-\u003eSummaryUTC a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCFromSummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryUTCLevel",
          "package": "zoom-cache",
          "signature": "Int",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCLevel\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryUTCLevel\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCLevel",
          "package": "zoom-cache",
          "partial": "UTCLevel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Types\",\"Data.ZoomCache\"]",
          "name": "summaryUTCTrack",
          "package": "zoom-cache",
          "signature": "TrackNo",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCTrack\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:summaryUTCTrack\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "summaryUTCTrack",
          "package": "zoom-cache",
          "partial": "UTCTrack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:summaryUTCTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "timestamp",
          "package": "zoom-cache",
          "signature": "a -\u003e Maybe TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#timestamp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "timestamp",
          "normalized": "a-\u003eMaybe TimeStamp",
          "package": "zoom-cache",
          "signature": "a-\u003eMaybe TimeStamp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a 'SummaryWork a', generating a 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "toSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryWork a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#toSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Finalize SummaryWork generating SummaryData",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "toSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:toSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe track identifier used for streams of type \u003ccode\u003ea\u003c/code\u003e.\n The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by any instance of\n \u003ccode\u003e\u003ca\u003eZoomReadable\u003c/a\u003e\u003c/code\u003e, so that is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as the\n argument.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "trackIdentifier",
          "package": "zoom-cache",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-ZoomCache-Types.html#trackIdentifier",
          "type": "method"
        },
        "index": {
          "description": "The track identifier used for streams of type The value of the argument should be ignored by any instance of ZoomReadable so that is safe to pass undefined as the argument",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "trackIdentifier",
          "normalized": "a-\u003eByteString",
          "package": "zoom-cache",
          "partial": "Identifier",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:trackIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e with the value of \u003ccode\u003ea\u003c/code\u003e occuring at the\n given \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Types",
          "name": "updateSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e a -\u003e SummaryWork a -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#updateSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Update SummaryData with the value of occuring at the given SampleOffset",
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "updateSummaryData",
          "normalized": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:updateSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Types",
          "name": "utcTimestamp",
          "package": "zoom-cache",
          "signature": "a -\u003e Maybe UTCTime",
          "source": "src/Data-ZoomCache-Types.html#utcTimestamp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache Types",
          "module": "Data.ZoomCache.Types",
          "name": "utcTimestamp",
          "normalized": "a-\u003eMaybe UTCTime",
          "package": "zoom-cache",
          "partial": "Timestamp",
          "signature": "a-\u003eMaybe UTCTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Types.html#v:utcTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault codec implementation for values of type (). Elements of type ()\nare useful for marking events, and variable rate tracks written with\ntype (SampleOffset, ()) are useful for recording times of events.\n\u003c/p\u003e\u003cp\u003eThis module implements the interfaces documented in \u003ca\u003eData.ZoomCache.Codec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eAs elements of type () contain no unique information it is sufficient to\nrecord only a count of elements which occur within each packet.\n\u003c/p\u003e\u003cp\u003eNo raw data is encoded for tracks of type () as the raw data packet header\nalready includes a count of elements. This is implemented by specifying\nconst \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e) as the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e and (return ()) as the reader.\n\u003c/p\u003e\u003cp\u003eThe table below describes the encoding of SummaryData for ().\n\u003c/p\u003e\u003cpre\u003e\n   | ...                                                           |   -35\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n   | Count (int32)                                                 | 36-39\n   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\u003c/pre\u003e\u003cp\u003eField encoding formats:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eint32\u003c/code\u003e:  32bit big endian\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Unit",
          "name": "Unit",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Unit.html",
          "type": "module"
        },
        "index": {
          "description": "Default codec implementation for values of type Elements of type are useful for marking events and variable rate tracks written with type SampleOffset are useful for recording times of events This module implements the interfaces documented in Data.ZoomCache.Codec As elements of type contain no unique information it is sufficient to record only count of elements which occur within each packet No raw data is encoded for tracks of type as the raw data packet header already includes count of elements This is implemented by specifying const mempty as the Builder and return as the reader The table below describes the encoding of SummaryData for Count int32 Field encoding formats int32 bit big endian",
          "hierarchy": "Data ZoomCache Unit",
          "module": "Data.ZoomCache.Unit",
          "name": "Unit",
          "package": "zoom-cache",
          "partial": "Unit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Unit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWriting of ZoomCache files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache.Write",
          "name": "Write",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html",
          "type": "module"
        },
        "index": {
          "description": "Writing of ZoomCache files",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "Write",
          "package": "zoom-cache",
          "partial": "Write",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA StateT IO monad for writing a ZoomCache file\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Write",
          "name": "ZoomW",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomW",
          "type": "type"
        },
        "index": {
          "description": "StateT IO monad for writing ZoomCache file",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "ZoomW",
          "package": "zoom-cache",
          "partial": "Zoom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#t:ZoomW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache.Write",
          "name": "ZoomWHandle",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomWHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "ZoomWHandle",
          "package": "zoom-cache",
          "partial": "Zoom WHandle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#t:ZoomWHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ZoomWrite class provides \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e, a method to write a\n Haskell value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Write",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomWrite",
          "type": "class"
        },
        "index": {
          "description": "The ZoomWrite class provides write method to write Haskell value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "partial": "Zoom Write",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#t:ZoomWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "closeWrite",
          "package": "zoom-cache",
          "signature": "ZoomWHandle -\u003e IO ()",
          "source": "src/Data-ZoomCache-Write.html#closeWrite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:closeWrite\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:closeWrite\"]"
        },
        "index": {
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "closeWrite",
          "normalized": "ZoomWHandle-\u003eIO()",
          "package": "zoom-cache",
          "partial": "Write",
          "signature": "ZoomWHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:closeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce a flush of ZoomCache summary blocks to disk. It is not usually\n necessary to call this function as summary blocks are transparently written\n at regular intervals.\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "flush",
          "package": "zoom-cache",
          "signature": "ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#flush",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:flush\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:flush\"]"
        },
        "index": {
          "description": "Force flush of ZoomCache summary blocks to disk It is not usually necessary to call this function as summary blocks are transparently written at regular intervals",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "flush",
          "normalized": "ZoomW()",
          "package": "zoom-cache",
          "signature": "ZoomW()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a new ZoomCache file for writing, using a specified \u003ccode\u003e\u003ca\u003eTrackMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "openWrite",
          "package": "zoom-cache",
          "signature": "TrackMap-\u003e Maybe UTCTime-\u003e Bool-\u003e FilePath-\u003e IO ZoomWHandle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:openWrite\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:openWrite\"]"
        },
        "index": {
          "description": "Open new ZoomCache file for writing using specified TrackMap",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "openWrite",
          "normalized": "TrackMap-\u003eMaybe UTCTime-\u003eBool-\u003eFilePath-\u003eIO ZoomWHandle",
          "package": "zoom-cache",
          "partial": "Write",
          "signature": "TrackMap-\u003eMaybe UTCTime-\u003eBool-\u003eFilePath-\u003eIO ZoomWHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:openWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the maximum number of data points to buffer for a given track before\n forcing a flush of all buffered data and summaries.\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "setWatermark",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e Int -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#setWatermark",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:setWatermark\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:setWatermark\"]"
        },
        "index": {
          "description": "Set the maximum number of data points to buffer for given track before forcing flush of all buffered data and summaries",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "setWatermark",
          "normalized": "TrackNo-\u003eInt-\u003eZoomW()",
          "package": "zoom-cache",
          "partial": "Watermark",
          "signature": "TrackNo-\u003eInt-\u003eZoomW()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:setWatermark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the maximum number of data points to buffer for a given track before\n forcing a flush of all buffered data and summaries.\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "watermark",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e ZoomW (Maybe Int)",
          "source": "src/Data-ZoomCache-Write.html#watermark",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:watermark\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:watermark\"]"
        },
        "index": {
          "description": "Query the maximum number of data points to buffer for given track before forcing flush of all buffered data and summaries",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "watermark",
          "normalized": "TrackNo-\u003eZoomW(Maybe Int)",
          "package": "zoom-cache",
          "signature": "TrackNo-\u003eZoomW(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:watermark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003eZoomW ()\u003c/code\u003e action on a given file handle, using the specified\n \u003ccode\u003e\u003ca\u003eTrackMap\u003c/a\u003e\u003c/code\u003e specification\n\u003c/p\u003e",
          "module": "[\"Data.ZoomCache.Write\",\"Data.ZoomCache\"]",
          "name": "withFileWrite",
          "package": "zoom-cache",
          "signature": "TrackMap-\u003e Maybe UTCTime-\u003e Bool-\u003e ZoomW ()-\u003e FilePath-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:withFileWrite\",\"http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:withFileWrite\"]"
        },
        "index": {
          "description": "Run ZoomW action on given file handle using the specified TrackMap specification",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "withFileWrite",
          "normalized": "TrackMap-\u003eMaybe UTCTime-\u003eBool-\u003eZoomW()-\u003eFilePath-\u003eIO()",
          "package": "zoom-cache",
          "partial": "File Write",
          "signature": "TrackMap-\u003eMaybe UTCTime-\u003eBool-\u003eZoomW()-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:withFileWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache.Write",
          "name": "write",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e t -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#write",
          "type": "method"
        },
        "index": {
          "description": "Write value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache Write",
          "module": "Data.ZoomCache.Write",
          "name": "write",
          "normalized": "TrackNo-\u003ea-\u003eZoomW()",
          "package": "zoom-cache",
          "signature": "TrackNo-\u003et-\u003eZoomW()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache-Write.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAPI for implementing ZoomCache applications\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache.html",
          "type": "module"
        },
        "index": {
          "description": "API for implementing ZoomCache applications",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomCache",
          "package": "zoom-cache",
          "partial": "Zoom Cache",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal and track headers for a zoom-cache file\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "CacheFile",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#CacheFile",
          "type": "data"
        },
        "index": {
          "description": "Global and track headers for zoom-cache file",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "CacheFile",
          "package": "zoom-cache",
          "partial": "Cache File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:CacheFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "Codec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Codec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "Codec",
          "package": "zoom-cache",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "Global",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#Global",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "Global",
          "package": "zoom-cache",
          "partial": "Global",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify the tracktype corresponding to a given Codec Identifier.\n When parsing a zoom-cache file, the zoom-cache library will try each\n of a given list [\u003ccode\u003eIdentifyTrack\u003c/code\u003e].\n\u003c/p\u003e\u003cp\u003eThe standard zoom-cache instances are provided in \u003ccode\u003estandardIdentifiers\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen developing your own codecs it is not necessary to build a composite\n \u003ccode\u003eIdentifyTrack\u003c/code\u003e functions; it is sufficient to generate one for each new\n codec type. A library of related zoom-cache codecs should export its own\n [\u003ccode\u003eIdentifyTrack\u003c/code\u003e] functions, usually called something like mylibIdentifiers.\n\u003c/p\u003e\u003cp\u003eThese can be generated with \u003ccode\u003eidentifyCodec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#IdentifyCodec",
          "type": "type"
        },
        "index": {
          "description": "Identify the tracktype corresponding to given Codec Identifier When parsing zoom-cache file the zoom-cache library will try each of given list IdentifyTrack The standard zoom-cache instances are provided in standardIdentifiers When developing your own codecs it is not necessary to build composite IdentifyTrack functions it is sufficient to generate one for each new codec type library of related zoom-cache codecs should export its own IdentifyTrack functions usually called something like mylibIdentifiers These can be generated with identifyCodec",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "IdentifyCodec",
          "package": "zoom-cache",
          "partial": "Identify Codec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:IdentifyCodec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "Packet",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Packet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "Packet",
          "package": "zoom-cache",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "PacketSO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#PacketSO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "PacketSO",
          "package": "zoom-cache",
          "partial": "Packet SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:PacketSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#PacketUTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "PacketUTC",
          "package": "zoom-cache",
          "partial": "Packet UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:PacketUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleOffset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "SampleOffset",
          "package": "zoom-cache",
          "partial": "Sample Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:SampleOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant or Variable samplerate.\n For constant samplerate, timestamps are implied as incrementing by 1/samplerate\n For variable samplerate, explicit timestamps are attached to each datum, encoded\n as a separate block of \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e in the Raw Data packet.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "SampleRateType",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#SampleRateType",
          "type": "data"
        },
        "index": {
          "description": "Constant or Variable samplerate For constant samplerate timestamps are implied as incrementing by samplerate For variable samplerate explicit timestamps are attached to each datum encoded as separate block of SampleOffset in the Raw Data packet",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "SampleRateType",
          "package": "zoom-cache",
          "partial": "Sample Rate Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:SampleRateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary block with samplecounts converted to TimeStamp\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "Summary",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "summary block with samplecounts converted to TimeStamp",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "Summary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recorded block of summary data\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "SummarySO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#SummarySO",
          "type": "data"
        },
        "index": {
          "description": "recorded block of summary data",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "SummarySO",
          "package": "zoom-cache",
          "partial": "Summary SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:SummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA summary block with timestamps converted to UTCTime\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#SummaryUTC",
          "type": "data"
        },
        "index": {
          "description": "summary block with timestamps converted to UTCTime",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "SummaryUTC",
          "package": "zoom-cache",
          "partial": "Summary UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:SummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStamp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "TimeStamp",
          "package": "zoom-cache",
          "partial": "Time Stamp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:TimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TimeStampDiff",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "TimeStampDiff",
          "package": "zoom-cache",
          "partial": "Time Stamp Diff",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:TimeStampDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "Timestampable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#Timestampable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "Timestampable",
          "package": "zoom-cache",
          "partial": "Timestampable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:Timestampable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of all track numbers to their \u003ccode\u003e\u003ca\u003eTrackSpec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "TrackMap",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#TrackMap",
          "type": "type"
        },
        "index": {
          "description": "map of all track numbers to their TrackSpec",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "TrackMap",
          "package": "zoom-cache",
          "partial": "Track Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:TrackMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "TrackNo",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Common.html#TrackNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "TrackNo",
          "package": "zoom-cache",
          "partial": "Track No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:TrackNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of the type and name of each track\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#TrackSpec",
          "type": "data"
        },
        "index": {
          "description": "specification of the type and name of each track",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "TrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:TrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "UTCTimestampable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#UTCTimestampable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "UTCTimestampable",
          "package": "zoom-cache",
          "partial": "UTCTimestampable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:UTCTimestampable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "ZoomRaw",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomRaw",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomRaw",
          "package": "zoom-cache",
          "partial": "Zoom Raw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must specify a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e type,\n and implement all methods of this class.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomReadable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must specify SummaryData type and implement all methods of this class",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomReadable",
          "package": "zoom-cache",
          "partial": "Zoom Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomReadable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummary",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomSummary",
          "package": "zoom-cache",
          "partial": "Zoom Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummarySO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomSummarySO",
          "package": "zoom-cache",
          "partial": "Zoom Summary SO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomSummarySO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomSummaryUTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomSummaryUTC",
          "package": "zoom-cache",
          "partial": "Zoom Summary UTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomSummaryUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA StateT IO monad for writing a ZoomCache file\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "ZoomW",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomW",
          "type": "type"
        },
        "index": {
          "description": "StateT IO monad for writing ZoomCache file",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomW",
          "package": "zoom-cache",
          "partial": "Zoom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "ZoomWHandle",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomWHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomWHandle",
          "package": "zoom-cache",
          "partial": "Zoom WHandle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomWHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA codec instance must additionally specify a \u003ccode\u003e\u003ca\u003eSummaryWork\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Types.html#ZoomWritable",
          "type": "class"
        },
        "index": {
          "description": "codec instance must additionally specify SummaryWork type",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomWritable",
          "package": "zoom-cache",
          "partial": "Zoom Writable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomWritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ZoomWrite class provides \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e, a method to write a\n Haskell value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "source": "src/Data-ZoomCache-Write.html#ZoomWrite",
          "type": "class"
        },
        "index": {
          "description": "The ZoomWrite class provides write method to write Haskell value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "ZoomWrite",
          "package": "zoom-cache",
          "partial": "Zoom Write",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#t:ZoomWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "appendSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryData a -\u003e SampleOffsetDiff -\u003e SummaryData a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#appendSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Append two SummaryData",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "appendSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryData a-\u003eSampleOffsetDiff-\u003eSummaryData a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:appendSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-decode a list of values\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "deltaDecodeRaw",
          "package": "zoom-cache",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-ZoomCache-Types.html#deltaDecodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-decode list of values",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "deltaDecodeRaw",
          "normalized": "[a]-\u003e[a]",
          "package": "zoom-cache",
          "partial": "Decode Raw",
          "signature": "[a]-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:deltaDecodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelta-encode a value.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "deltaEncodeRaw",
          "package": "zoom-cache",
          "signature": "SummaryWork a -\u003e a -\u003e a",
          "source": "src/Data-ZoomCache-Types.html#deltaEncodeRaw",
          "type": "method"
        },
        "index": {
          "description": "Delta-encode value",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "deltaEncodeRaw",
          "normalized": "SummaryWork a-\u003ea-\u003ea",
          "package": "zoom-cache",
          "partial": "Encode Raw",
          "signature": "SummaryWork a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:deltaEncodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a value of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "fromRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromRaw",
          "type": "method"
        },
        "index": {
          "description": "Serialize value of type",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "fromRaw",
          "normalized": "a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:fromRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a 'SummaryData a'\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "fromSummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e Builder",
          "source": "src/Data-ZoomCache-Types.html#fromSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Serialize SummaryData",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "fromSummaryData",
          "normalized": "SummaryData a-\u003eBuilder",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:fromSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new 'SummaryWork a', given an initial timestamp.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "initSummaryWork",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#initSummaryWork",
          "type": "method"
        },
        "index": {
          "description": "Generate new SummaryWork given an initial timestamp",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "initSummaryWork",
          "normalized": "SampleOffset-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Work",
          "signature": "SampleOffset-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:initSummaryWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "mkTrackSpec",
          "package": "zoom-cache",
          "signature": "a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackSpec",
          "source": "src/Data-ZoomCache-TrackSpec.html#mkTrackSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "mkTrackSpec",
          "normalized": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "package": "zoom-cache",
          "partial": "Track Spec",
          "signature": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:mkTrackSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a track map for a stream of a given type, as track no. 1\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "oneTrack",
          "package": "zoom-cache",
          "signature": "a -\u003e Bool -\u003e Bool -\u003e SampleRateType -\u003e Rational -\u003e ByteString -\u003e TrackMap",
          "source": "src/Data-ZoomCache-TrackSpec.html#oneTrack",
          "type": "function"
        },
        "index": {
          "description": "Create track map for stream of given type as track no",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "oneTrack",
          "normalized": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "package": "zoom-cache",
          "partial": "Track",
          "signature": "a-\u003eBool-\u003eBool-\u003eSampleRateType-\u003eRational-\u003eByteString-\u003eTrackMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:oneTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing, used for dumping values of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "prettyRaw",
          "package": "zoom-cache",
          "signature": "a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettyRaw",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing used for dumping values of type",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "prettyRaw",
          "normalized": "a-\u003eString",
          "package": "zoom-cache",
          "partial": "Raw",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:prettyRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing for values of type 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "prettySummaryData",
          "package": "zoom-cache",
          "signature": "SummaryData a -\u003e String",
          "source": "src/Data-ZoomCache-Types.html#prettySummaryData",
          "type": "method"
        },
        "index": {
          "description": "Pretty printing for values of type SummaryData",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "prettySummaryData",
          "normalized": "SummaryData a-\u003eString",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SummaryData a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:prettySummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type \u003ccode\u003ea\u003c/code\u003e from a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "readRaw",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m a",
          "source": "src/Data-ZoomCache-Types.html#readRaw",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type from stream of ByteString",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "readRaw",
          "package": "zoom-cache",
          "partial": "Raw",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:readRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iteratee to read one value of type 'SummaryData a' from a stream\n of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "readSummary",
          "package": "zoom-cache",
          "signature": "Iteratee ByteString m (SummaryData a)",
          "source": "src/Data-ZoomCache-Types.html#readSummary",
          "type": "method"
        },
        "index": {
          "description": "An iteratee to read one value of type SummaryData from stream of ByteString",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "readSummary",
          "package": "zoom-cache",
          "partial": "Summary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:readSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIdentifyTrack\u003c/code\u003e functions provided for standard codecs provided\n by the zoom-cache library.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "standardIdentifiers",
          "package": "zoom-cache",
          "signature": "[IdentifyCodec]",
          "source": "src/Data-ZoomCache.html#standardIdentifiers",
          "type": "function"
        },
        "index": {
          "description": "IdentifyTrack functions provided for standard codecs provided by the zoom-cache library",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "standardIdentifiers",
          "normalized": "[IdentifyCodec]",
          "package": "zoom-cache",
          "partial": "Identifiers",
          "signature": "[IdentifyCodec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:standardIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "timestamp",
          "package": "zoom-cache",
          "signature": "a -\u003e Maybe TimeStamp",
          "source": "src/Data-ZoomCache-Types.html#timestamp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "timestamp",
          "normalized": "a-\u003eMaybe TimeStamp",
          "package": "zoom-cache",
          "signature": "a-\u003eMaybe TimeStamp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a 'SummaryWork a', generating a 'SummaryData a'.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "toSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffsetDiff -\u003e SummaryWork a -\u003e SummaryData a",
          "source": "src/Data-ZoomCache-Types.html#toSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Finalize SummaryWork generating SummaryData",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "toSummaryData",
          "normalized": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffsetDiff-\u003eSummaryWork a-\u003eSummaryData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:toSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe track identifier used for streams of type \u003ccode\u003ea\u003c/code\u003e.\n The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by any instance of\n \u003ccode\u003e\u003ca\u003eZoomReadable\u003c/a\u003e\u003c/code\u003e, so that is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as the\n argument.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "trackIdentifier",
          "package": "zoom-cache",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-ZoomCache-Types.html#trackIdentifier",
          "type": "method"
        },
        "index": {
          "description": "The track identifier used for streams of type The value of the argument should be ignored by any instance of ZoomReadable so that is safe to pass undefined as the argument",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "trackIdentifier",
          "normalized": "a-\u003eByteString",
          "package": "zoom-cache",
          "partial": "Identifier",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:trackIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a \u003ccode\u003e\u003ca\u003eSummaryData\u003c/a\u003e\u003c/code\u003e with the value of \u003ccode\u003ea\u003c/code\u003e occuring at the\n given \u003ccode\u003e\u003ca\u003eSampleOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "updateSummaryData",
          "package": "zoom-cache",
          "signature": "SampleOffset -\u003e a -\u003e SummaryWork a -\u003e SummaryWork a",
          "source": "src/Data-ZoomCache-Types.html#updateSummaryData",
          "type": "method"
        },
        "index": {
          "description": "Update SummaryData with the value of occuring at the given SampleOffset",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "updateSummaryData",
          "normalized": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "package": "zoom-cache",
          "partial": "Summary Data",
          "signature": "SampleOffset-\u003ea-\u003eSummaryWork a-\u003eSummaryWork a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:updateSummaryData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ZoomCache",
          "name": "utcTimestamp",
          "package": "zoom-cache",
          "signature": "a -\u003e Maybe UTCTime",
          "source": "src/Data-ZoomCache-Types.html#utcTimestamp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "utcTimestamp",
          "normalized": "a-\u003eMaybe UTCTime",
          "package": "zoom-cache",
          "partial": "Timestamp",
          "signature": "a-\u003eMaybe UTCTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:utcTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to an open ZoomCache file.\n\u003c/p\u003e",
          "module": "Data.ZoomCache",
          "name": "write",
          "package": "zoom-cache",
          "signature": "TrackNo -\u003e t -\u003e ZoomW ()",
          "source": "src/Data-ZoomCache-Write.html#write",
          "type": "method"
        },
        "index": {
          "description": "Write value to an open ZoomCache file",
          "hierarchy": "Data ZoomCache",
          "module": "Data.ZoomCache",
          "name": "write",
          "normalized": "TrackNo-\u003ea-\u003eZoomW()",
          "package": "zoom-cache",
          "signature": "TrackNo-\u003et-\u003eZoomW()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/zoom-cache/docs/Data-ZoomCache.html#v:write"
      }
    }
  ]
]