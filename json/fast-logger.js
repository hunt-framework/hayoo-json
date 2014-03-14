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
        "word": "fast-logger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger.File",
          "name": "File",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "File",
          "package": "fast-logger",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe spec for logging files\n\u003c/p\u003e",
          "module": "System.Log.FastLogger.File",
          "name": "FileLogSpec",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger-File.html#FileLogSpec",
          "type": "data"
        },
        "index": {
          "description": "The spec for logging files",
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "FileLogSpec",
          "package": "fast-logger",
          "partial": "File Log Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#t:FileLogSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger.File",
          "name": "FileLogSpec",
          "package": "fast-logger",
          "signature": "FileLogSpec",
          "source": "src/System-Log-FastLogger-File.html#FileLogSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "FileLogSpec",
          "package": "fast-logger",
          "partial": "File Log Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:FileLogSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if a log file can be written.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger.File",
          "name": "check",
          "package": "fast-logger",
          "signature": "FileLogSpec -\u003e IO ()",
          "source": "src/System-Log-FastLogger-File.html#check",
          "type": "function"
        },
        "index": {
          "description": "Checking if log file can be written",
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "check",
          "normalized": "FileLogSpec-\u003eIO()",
          "package": "fast-logger",
          "signature": "FileLogSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger.File",
          "name": "log_backup_number",
          "package": "fast-logger",
          "signature": "Int",
          "source": "src/System-Log-FastLogger-File.html#FileLogSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "log_backup_number",
          "package": "fast-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:log_backup_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger.File",
          "name": "log_file",
          "package": "fast-logger",
          "signature": "FilePath",
          "source": "src/System-Log-FastLogger-File.html#FileLogSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "log_file",
          "package": "fast-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:log_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger.File",
          "name": "log_file_size",
          "package": "fast-logger",
          "signature": "Integer",
          "source": "src/System-Log-FastLogger-File.html#FileLogSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "log_file_size",
          "package": "fast-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:log_file_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotating log files.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger.File",
          "name": "rotate",
          "package": "fast-logger",
          "signature": "FileLogSpec -\u003e IO ()",
          "source": "src/System-Log-FastLogger-File.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotating log files",
          "hierarchy": "System Log FastLogger File",
          "module": "System.Log.FastLogger.File",
          "name": "rotate",
          "normalized": "FileLogSpec-\u003eIO()",
          "package": "fast-logger",
          "signature": "FileLogSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger-File.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a fast logging system which\n   scales on multicore environments (i.e. +RTS -N\u003cx\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.FastLogger",
          "name": "FastLogger",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides fast logging system which scales on multicore environments i.e RTS",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "FastLogger",
          "package": "fast-logger",
          "partial": "Fast Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for buffer size of each core.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "BufSize",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger-IO.html#BufSize",
          "type": "type"
        },
        "index": {
          "description": "The type for buffer size of each core",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "BufSize",
          "package": "fast-logger",
          "partial": "Buf Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#t:BufSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog message builder. Use (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e) to append two LogStr in O(1).\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "LogStr",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger-LogStr.html#LogStr",
          "type": "data"
        },
        "index": {
          "description": "Log message builder Use to append two LogStr in",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "LogStr",
          "package": "fast-logger",
          "partial": "Log Str",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#t:LogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of loggers.\n   The number of loggers is the capabilities of GHC RTS.\n   You can specify it with \"+RTS -N\u003cx\u003e\".\n   A buffer is prepared for each capability.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "LoggerSet",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger.html#LoggerSet",
          "type": "data"
        },
        "index": {
          "description": "set of loggers The number of loggers is the capabilities of GHC RTS You can specify it with RTS buffer is prepared for each capability",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "LoggerSet",
          "package": "fast-logger",
          "partial": "Logger Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#t:LoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger",
          "name": "ToLogStr",
          "package": "fast-logger",
          "source": "src/System-Log-FastLogger-LogStr.html#ToLogStr",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "ToLogStr",
          "package": "fast-logger",
          "partial": "To Log Str",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#t:ToLogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default buffer size (4,096 bytes).\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "defaultBufSize",
          "package": "fast-logger",
          "signature": "BufSize",
          "source": "src/System-Log-FastLogger-IO.html#defaultBufSize",
          "type": "function"
        },
        "index": {
          "description": "The default buffer size bytes",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "defaultBufSize",
          "package": "fast-logger",
          "partial": "Buf Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:defaultBufSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlushing log messages in buffers.\n   This function must be called explicitly when the program is\n   being terminated.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "flushLogStr",
          "package": "fast-logger",
          "signature": "LoggerSet -\u003e IO ()",
          "source": "src/System-Log-FastLogger.html#flushLogStr",
          "type": "function"
        },
        "index": {
          "description": "Flushing log messages in buffers This function must be called explicitly when the program is being terminated",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "flushLogStr",
          "normalized": "LoggerSet-\u003eIO()",
          "package": "fast-logger",
          "partial": "Log Str",
          "signature": "LoggerSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:flushLogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eLogStr\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "fromLogStr",
          "package": "fast-logger",
          "signature": "LogStr -\u003e ByteString",
          "source": "src/System-Log-FastLogger-LogStr.html#fromLogStr",
          "type": "function"
        },
        "index": {
          "description": "Converting LogStr to ByteString",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "fromLogStr",
          "normalized": "LogStr-\u003eByteString",
          "package": "fast-logger",
          "partial": "Log Str",
          "signature": "LogStr-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:fromLogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining the length of \u003ccode\u003e\u003ca\u003eLogStr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "logStrLength",
          "package": "fast-logger",
          "signature": "LogStr -\u003e Int",
          "source": "src/System-Log-FastLogger-LogStr.html#logStrLength",
          "type": "function"
        },
        "index": {
          "description": "Obtaining the length of LogStr",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "logStrLength",
          "normalized": "LogStr-\u003eInt",
          "package": "fast-logger",
          "partial": "Str Length",
          "signature": "LogStr-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:logStrLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eLoggerSet\u003c/a\u003e\u003c/code\u003e using a file.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "newFileLoggerSet",
          "package": "fast-logger",
          "signature": "BufSize -\u003e FilePath -\u003e IO LoggerSet",
          "source": "src/System-Log-FastLogger.html#newFileLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Creating new LoggerSet using file",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "newFileLoggerSet",
          "normalized": "BufSize-\u003eFilePath-\u003eIO LoggerSet",
          "package": "fast-logger",
          "partial": "File Logger Set",
          "signature": "BufSize-\u003eFilePath-\u003eIO LoggerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:newFileLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use newFileLoggerSet etc instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eLoggerSet\u003c/a\u003e\u003c/code\u003e.\n   If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is specified to the second argument,\n   stdout is used.\n   Please note that the minimum \u003ccode\u003e\u003ca\u003eBufSize\u003c/a\u003e\u003c/code\u003e is 1.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "newLoggerSet",
          "package": "fast-logger",
          "signature": "BufSize -\u003e Maybe FilePath -\u003e IO LoggerSet",
          "source": "src/System-Log-FastLogger.html#newLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use newFileLoggerSet etc instead Creating new LoggerSet If Nothing is specified to the second argument stdout is used Please note that the minimum BufSize is",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "newLoggerSet",
          "normalized": "BufSize-\u003eMaybe FilePath-\u003eIO LoggerSet",
          "package": "fast-logger",
          "partial": "Logger Set",
          "signature": "BufSize-\u003eMaybe FilePath-\u003eIO LoggerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:newLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eLoggerSet\u003c/a\u003e\u003c/code\u003e using stderr.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "newStderrLoggerSet",
          "package": "fast-logger",
          "signature": "BufSize -\u003e IO LoggerSet",
          "source": "src/System-Log-FastLogger.html#newStderrLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Creating new LoggerSet using stderr",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "newStderrLoggerSet",
          "normalized": "BufSize-\u003eIO LoggerSet",
          "package": "fast-logger",
          "partial": "Stderr Logger Set",
          "signature": "BufSize-\u003eIO LoggerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:newStderrLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eLoggerSet\u003c/a\u003e\u003c/code\u003e using stdout.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "newStdoutLoggerSet",
          "package": "fast-logger",
          "signature": "BufSize -\u003e IO LoggerSet",
          "source": "src/System-Log-FastLogger.html#newStdoutLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Creating new LoggerSet using stdout",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "newStdoutLoggerSet",
          "normalized": "BufSize-\u003eIO LoggerSet",
          "package": "fast-logger",
          "partial": "Stdout Logger Set",
          "signature": "BufSize-\u003eIO LoggerSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:newStdoutLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting a log message to the corresponding buffer.\n   If the buffer becomes full, the log messages in the buffer\n   are written to its corresponding file, stdout, or stderr.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "pushLogStr",
          "package": "fast-logger",
          "signature": "LoggerSet -\u003e LogStr -\u003e IO ()",
          "source": "src/System-Log-FastLogger.html#pushLogStr",
          "type": "function"
        },
        "index": {
          "description": "Writing log message to the corresponding buffer If the buffer becomes full the log messages in the buffer are written to its corresponding file stdout or stderr",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "pushLogStr",
          "normalized": "LoggerSet-\u003eLogStr-\u003eIO()",
          "package": "fast-logger",
          "partial": "Log Str",
          "signature": "LoggerSet-\u003eLogStr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:pushLogStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenewing the internal file information in \u003ccode\u003e\u003ca\u003eLoggerSet\u003c/a\u003e\u003c/code\u003e.\n   This does nothing for stdout and stderr.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "renewLoggerSet",
          "package": "fast-logger",
          "signature": "LoggerSet -\u003e IO ()",
          "source": "src/System-Log-FastLogger.html#renewLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Renewing the internal file information in LoggerSet This does nothing for stdout and stderr",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "renewLoggerSet",
          "normalized": "LoggerSet-\u003eIO()",
          "package": "fast-logger",
          "partial": "Logger Set",
          "signature": "LoggerSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:renewLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlushing the buffers, closing the internal file information\n   and freeing the buffers.\n\u003c/p\u003e",
          "module": "System.Log.FastLogger",
          "name": "rmLoggerSet",
          "package": "fast-logger",
          "signature": "LoggerSet -\u003e IO ()",
          "source": "src/System-Log-FastLogger.html#rmLoggerSet",
          "type": "function"
        },
        "index": {
          "description": "Flushing the buffers closing the internal file information and freeing the buffers",
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "rmLoggerSet",
          "normalized": "LoggerSet-\u003eIO()",
          "package": "fast-logger",
          "partial": "Logger Set",
          "signature": "LoggerSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:rmLoggerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.FastLogger",
          "name": "toLogStr",
          "package": "fast-logger",
          "signature": "msg -\u003e LogStr",
          "source": "src/System-Log-FastLogger-LogStr.html#toLogStr",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Log FastLogger",
          "module": "System.Log.FastLogger",
          "name": "toLogStr",
          "normalized": "a-\u003eLogStr",
          "package": "fast-logger",
          "partial": "Log Str",
          "signature": "msg-\u003eLogStr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fast-logger/docs/System-Log-FastLogger.html#v:toLogStr"
      }
    }
  ]
]