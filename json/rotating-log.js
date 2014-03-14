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
        "word": "rotating-log"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient logging to a disk-based log file with automatic file\n rotation based on size.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.RotatingLog",
          "name": "RotatingLog",
          "package": "rotating-log",
          "source": "src/System-RotatingLog.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient logging to disk-based log file with automatic file rotation based on size",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "RotatingLog",
          "package": "rotating-log",
          "partial": "Rotating Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA size-limited rotating log.  Log filenames are of the format\n prefix_timestamp.log.\n\u003c/p\u003e",
          "module": "System.RotatingLog",
          "name": "RotatingLog",
          "package": "rotating-log",
          "source": "src/System-RotatingLog.html#RotatingLog",
          "type": "data"
        },
        "index": {
          "description": "size-limited rotating log Log filenames are of the format prefix timestamp.log",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "RotatingLog",
          "package": "rotating-log",
          "partial": "Rotating Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#t:RotatingLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA built-in post-rotate action that moves the finished file to a\n given archive location.\n\u003c/p\u003e",
          "module": "System.RotatingLog",
          "name": "archiveFile",
          "package": "rotating-log",
          "signature": "FilePath-\u003e FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "built-in post-rotate action that moves the finished file to given archive location",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "archiveFile",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "rotating-log",
          "partial": "File",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#v:archiveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a rotating log given a prefix and size limit in bytes.\n\u003c/p\u003e",
          "module": "System.RotatingLog",
          "name": "mkRotatingLog",
          "package": "rotating-log",
          "signature": "String-\u003e Word64-\u003e BufferMode-\u003e (FilePath -\u003e IO ())-\u003e IO RotatingLog",
          "type": "function"
        },
        "index": {
          "description": "Creates rotating log given prefix and size limit in bytes",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "mkRotatingLog",
          "normalized": "String-\u003eWord-\u003eBufferMode-\u003e(FilePath-\u003eIO())-\u003eIO RotatingLog",
          "package": "rotating-log",
          "partial": "Rotating Log",
          "signature": "String-\u003eWord-\u003eBufferMode-\u003e(FilePath-\u003eIO())-\u003eIO RotatingLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#v:mkRotatingLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ca\u003erotatedWrite'\u003c/a\u003e, but doesn't need a UTCTime and obtains it\n with a syscall.\n\u003c/p\u003e",
          "module": "System.RotatingLog",
          "name": "rotatedWrite",
          "package": "rotating-log",
          "signature": "RotatingLog -\u003e ByteString -\u003e IO ()",
          "source": "src/System-RotatingLog.html#rotatedWrite",
          "type": "function"
        },
        "index": {
          "description": "Like rotatedWrite but doesn need UTCTime and obtains it with syscall",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "rotatedWrite",
          "normalized": "RotatingLog-\u003eByteString-\u003eIO()",
          "package": "rotating-log",
          "partial": "Write",
          "signature": "RotatingLog-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#v:rotatedWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites ByteString to a rotating log file.  If this write would exceed the\n size limit, then the file is closed and a new file opened.  This function\n takes a UTCTime to allow a cached time to be used to avoid a system call.\n\u003c/p\u003e\u003cp\u003ePlease note this function does NOT implicitly insert a newline at\n the end of the string you provide. This is so that it can be used\n to log non-textual streams such as binary serialized or compressed\n content.\n\u003c/p\u003e",
          "module": "System.RotatingLog",
          "name": "rotatedWrite'",
          "package": "rotating-log",
          "signature": "RotatingLog -\u003e UTCTime -\u003e ByteString -\u003e IO ()",
          "source": "src/System-RotatingLog.html#rotatedWrite%27",
          "type": "function"
        },
        "index": {
          "description": "Writes ByteString to rotating log file If this write would exceed the size limit then the file is closed and new file opened This function takes UTCTime to allow cached time to be used to avoid system call Please note this function does NOT implicitly insert newline at the end of the string you provide This is so that it can be used to log non-textual streams such as binary serialized or compressed content",
          "hierarchy": "System RotatingLog",
          "module": "System.RotatingLog",
          "name": "rotatedWrite'",
          "normalized": "RotatingLog-\u003eUTCTime-\u003eByteString-\u003eIO()",
          "package": "rotating-log",
          "partial": "Write'",
          "signature": "RotatingLog-\u003eUTCTime-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rotating-log/docs/System-RotatingLog.html#v:rotatedWrite-39-"
      }
    }
  ]
]