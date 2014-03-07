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
        "word": "unix-process-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.LogFile",
          "name": "LogFile",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-LogFile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "LogFile",
          "package": "unix-process-conduit",
          "partial": "Log File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a folder used for totating log files.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.LogFile",
          "name": "RotatingLog",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-LogFile.html#RotatingLog",
          "type": "data"
        },
        "index": {
          "description": "Represents folder used for totating log files Since",
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "RotatingLog",
          "package": "unix-process-conduit",
          "partial": "Rotating Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#t:RotatingLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.LogFile",
          "name": "addChunk",
          "package": "unix-process-conduit",
          "signature": "RotatingLog -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-Conduit-LogFile.html#addChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "addChunk",
          "normalized": "RotatingLog-\u003eByteString-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Chunk",
          "signature": "RotatingLog-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:addChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.LogFile",
          "name": "close",
          "package": "unix-process-conduit",
          "signature": "RotatingLog -\u003e IO ()",
          "source": "src/Data-Conduit-LogFile.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "close",
          "normalized": "RotatingLog-\u003eIO()",
          "package": "unix-process-conduit",
          "signature": "RotatingLog-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.LogFile",
          "name": "defaultMaxTotal",
          "package": "unix-process-conduit",
          "signature": "Word",
          "source": "src/Data-Conduit-LogFile.html#defaultMaxTotal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "defaultMaxTotal",
          "package": "unix-process-conduit",
          "partial": "Max Total",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:defaultMaxTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eRotatingLog\u003c/code\u003e which performs no logging.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.LogFile",
          "name": "dummy",
          "package": "unix-process-conduit",
          "signature": "RotatingLog",
          "source": "src/Data-Conduit-LogFile.html#dummy",
          "type": "function"
        },
        "index": {
          "description": "RotatingLog which performs no logging Since",
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "dummy",
          "package": "unix-process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:dummy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003eRotatingLog\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "[\"Data.Conduit.LogFile\",\"Data.Conduit.Process.Unix\"]",
          "name": "openRotatingLog",
          "package": "unix-process-conduit",
          "signature": "FilePath-\u003e Word-\u003e IO RotatingLog",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:openRotatingLog\",\"http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:openRotatingLog\"]"
        },
        "index": {
          "description": "Create new RotatingLog Since",
          "hierarchy": "Data Conduit LogFile",
          "module": "Data.Conduit.LogFile",
          "name": "openRotatingLog",
          "normalized": "FilePath-\u003eWord-\u003eIO RotatingLog",
          "package": "unix-process-conduit",
          "partial": "Rotating Log",
          "signature": "FilePath-\u003eWord-\u003eIO RotatingLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-LogFile.html#v:openRotatingLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "Unix",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-Process-Unix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "Unix",
          "package": "unix-process-conduit",
          "partial": "Unix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type containing information on a process which will be restarted.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "MonitoredProcess",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-Process-Unix.html#MonitoredProcess",
          "type": "data"
        },
        "index": {
          "description": "Abstract type containing information on process which will be restarted",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "MonitoredProcess",
          "package": "unix-process-conduit",
          "partial": "Monitored Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:MonitoredProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessStatus",
          "package": "unix-process-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessStatus",
          "package": "unix-process-conduit",
          "partial": "Process Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:ProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the child process which handles process cleanup.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessTracker",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-Process-Unix.html#ProcessTracker",
          "type": "data"
        },
        "index": {
          "description": "Represents the child process which handles process cleanup Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessTracker",
          "package": "unix-process-conduit",
          "partial": "Process Tracker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:ProcessTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessTrackerException",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-Process-Unix.html#ProcessTrackerException",
          "type": "data"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "ProcessTrackerException",
          "package": "unix-process-conduit",
          "partial": "Process Tracker Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:ProcessTrackerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a folder used for totating log files.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "RotatingLog",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-LogFile.html#RotatingLog",
          "type": "data"
        },
        "index": {
          "description": "Represents folder used for totating log files Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "RotatingLog",
          "package": "unix-process-conduit",
          "partial": "Rotating Log",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:RotatingLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a child process which is currently being tracked by the cleanup\n child process.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "TrackedProcess",
          "package": "unix-process-conduit",
          "source": "src/Data-Conduit-Process-Unix.html#TrackedProcess",
          "type": "data"
        },
        "index": {
          "description": "Represents child process which is currently being tracked by the cleanup child process Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "TrackedProcess",
          "package": "unix-process-conduit",
          "partial": "Tracked Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#t:TrackedProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "CannotLaunchProcessTracker",
          "package": "unix-process-conduit",
          "signature": "CannotLaunchProcessTracker",
          "source": "src/Data-Conduit-Process-Unix.html#ProcessTrackerException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "CannotLaunchProcessTracker",
          "package": "unix-process-conduit",
          "partial": "Cannot Launch Process Tracker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:CannotLaunchProcessTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "Exited",
          "package": "unix-process-conduit",
          "signature": "Exited ExitCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "Exited",
          "package": "unix-process-conduit",
          "partial": "Exited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:Exited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "Stopped",
          "package": "unix-process-conduit",
          "signature": "Stopped Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "Stopped",
          "package": "unix-process-conduit",
          "partial": "Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:Stopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "Terminated",
          "package": "unix-process-conduit",
          "signature": "Terminated Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "Terminated",
          "package": "unix-process-conduit",
          "partial": "Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:Terminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a new process and execute the given command.\n\u003c/p\u003e\u003cp\u003eThis is a wrapper around with fork() and exec*() syscalls, set up to work\n with \u003ccode\u003econduit\u003c/code\u003e datatypes for standard input, output, and error. If \u003ccode\u003eNothing\u003c/code\u003e\n is provided for any of those arguments, then the original file handles will\n remain open to the child process.\n\u003c/p\u003e\u003cp\u003eIf you would like to simply discard data provided by the child process,\n provide \u003ccode\u003esinkNull\u003c/code\u003e for stdout and/or stderr. To provide an empty input\n stream, use \u003ccode\u003ereturn ()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "forkExecuteFile",
          "package": "unix-process-conduit",
          "signature": "ByteString-\u003e [ByteString]-\u003e Maybe [(ByteString, ByteString)]-\u003e Maybe ByteString-\u003e Maybe (Source IO ByteString)-\u003e Maybe (Sink ByteString IO ())-\u003e Maybe (Sink ByteString IO ())-\u003e IO ProcessHandle",
          "type": "function"
        },
        "index": {
          "description": "Fork new process and execute the given command This is wrapper around with fork and exec syscalls set up to work with conduit datatypes for standard input output and error If Nothing is provided for any of those arguments then the original file handles will remain open to the child process If you would like to simply discard data provided by the child process provide sinkNull for stdout and or stderr To provide an empty input stream use return Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "forkExecuteFile",
          "normalized": "ByteString-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eMaybe ByteString-\u003eMaybe(Source IO ByteString)-\u003eMaybe(Sink ByteString IO())-\u003eMaybe(Sink ByteString IO())-\u003eIO ProcessHandle",
          "package": "unix-process-conduit",
          "partial": "Execute File",
          "signature": "ByteString-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eMaybe ByteString-\u003eMaybe(Source IO ByteString)-\u003eMaybe(Sink ByteString IO())-\u003eMaybe(Sink ByteString IO())-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:forkExecuteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork and execute a subprocess, sending stdout and stderr to the specified\n rotating log.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "forkExecuteLog",
          "package": "unix-process-conduit",
          "signature": "ByteString-\u003e [ByteString]-\u003e Maybe [(ByteString, ByteString)]-\u003e Maybe ByteString-\u003e Maybe (Source IO ByteString)-\u003e RotatingLog-\u003e IO ProcessHandle",
          "type": "function"
        },
        "index": {
          "description": "Fork and execute subprocess sending stdout and stderr to the specified rotating log Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "forkExecuteLog",
          "normalized": "ByteString-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eMaybe ByteString-\u003eMaybe(Source IO ByteString)-\u003eRotatingLog-\u003eIO ProcessHandle",
          "package": "unix-process-conduit",
          "partial": "Execute Log",
          "signature": "ByteString-\u003e[ByteString]-\u003eMaybe[(ByteString,ByteString)]-\u003eMaybe ByteString-\u003eMaybe(Source IO ByteString)-\u003eRotatingLog-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:forkExecuteLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork off the child cleanup process.\n\u003c/p\u003e\u003cp\u003eThis will ideally only be run once for your entire application.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "initProcessTracker",
          "package": "unix-process-conduit",
          "signature": "IO ProcessTracker",
          "source": "src/Data-Conduit-Process-Unix.html#initProcessTracker",
          "type": "function"
        },
        "index": {
          "description": "Fork off the child cleanup process This will ideally only be run once for your entire application Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "initProcessTracker",
          "package": "unix-process-conduit",
          "partial": "Process Tracker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:initProcessTracker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill a process by sending it the KILL (9) signal.\n\u003c/p\u003e\u003cp\u003eSince 0.1.0\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "killProcess",
          "package": "unix-process-conduit",
          "signature": "ProcessHandle -\u003e IO ()",
          "source": "src/Data-Conduit-Process-Unix.html#killProcess",
          "type": "function"
        },
        "index": {
          "description": "Kill process by sending it the KILL signal Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "killProcess",
          "normalized": "ProcessHandle-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Process",
          "signature": "ProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:killProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given command, restarting if the process dies.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "monitorProcess",
          "package": "unix-process-conduit",
          "signature": "(ByteString -\u003e IO ())-\u003e ProcessTracker-\u003e Maybe ByteString-\u003e ByteString-\u003e ByteString-\u003e [ByteString]-\u003e [(ByteString, ByteString)]-\u003e RotatingLog-\u003e (ExitCode -\u003e IO Bool)-\u003e IO MonitoredProcess",
          "type": "function"
        },
        "index": {
          "description": "Run the given command restarting if the process dies",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "monitorProcess",
          "normalized": "(ByteString-\u003eIO())-\u003eProcessTracker-\u003eMaybe ByteString-\u003eByteString-\u003eByteString-\u003e[ByteString]-\u003e[(ByteString,ByteString)]-\u003eRotatingLog-\u003e(ExitCode-\u003eIO Bool)-\u003eIO MonitoredProcess",
          "package": "unix-process-conduit",
          "partial": "Process",
          "signature": "(ByteString-\u003eIO())-\u003eProcessTracker-\u003eMaybe ByteString-\u003eByteString-\u003eByteString-\u003e[ByteString]-\u003e[(ByteString,ByteString)]-\u003eRotatingLog-\u003e(ExitCode-\u003eIO Bool)-\u003eIO MonitoredProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:monitorProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "signalProcessHandle",
          "package": "unix-process-conduit",
          "signature": "Signal -\u003e ProcessHandle -\u003e IO ()",
          "source": "src/Data-Conduit-Process-Unix.html#signalProcessHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "signalProcessHandle",
          "normalized": "Signal-\u003eProcessHandle-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Process Handle",
          "signature": "Signal-\u003eProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:signalProcessHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process.Unix",
          "name": "signalProcessHandleGroup",
          "package": "unix-process-conduit",
          "signature": "Signal -\u003e ProcessHandle -\u003e IO ()",
          "source": "src/Data-Conduit-Process-Unix.html#signalProcessHandleGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "signalProcessHandleGroup",
          "normalized": "Signal-\u003eProcessHandle-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Process Handle Group",
          "signature": "Signal-\u003eProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:signalProcessHandleGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate the process and prevent it from being restarted.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "terminateMonitoredProcess",
          "package": "unix-process-conduit",
          "signature": "MonitoredProcess -\u003e IO ()",
          "source": "src/Data-Conduit-Process-Unix.html#terminateMonitoredProcess",
          "type": "function"
        },
        "index": {
          "description": "Terminate the process and prevent it from being restarted",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "terminateMonitoredProcess",
          "normalized": "MonitoredProcess-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Monitored Process",
          "signature": "MonitoredProcess-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:terminateMonitoredProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to terminate the specified process.  This function should\n not be used under normal circumstances - no guarantees are given regarding\n how cleanly the process is terminated.  To check whether the process\n has indeed terminated, use \u003ccode\u003e\u003ca\u003egetProcessExitCode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e sends the process the SIGTERM signal.\n On Windows systems, the Win32 \u003ccode\u003eTerminateProcess\u003c/code\u003e function is called, passing\n an exit code of 1.\n\u003c/p\u003e\u003cp\u003eNote: on Windows, if the process was a shell command created by\n \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eshell\u003c/a\u003e\u003c/code\u003e, or created by \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003erunInteractiveCommand\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e will only\n terminate the shell, not the command itself.  On Unix systems, both\n processes are in a process group and will be terminated together.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "terminateProcess",
          "package": "unix-process-conduit",
          "signature": "ProcessHandle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Attempts to terminate the specified process This function should not be used under normal circumstances no guarantees are given regarding how cleanly the process is terminated To check whether the process has indeed terminated use getProcessExitCode On Unix systems terminateProcess sends the process the SIGTERM signal On Windows systems the Win32 TerminateProcess function is called passing an exit code of Note on Windows if the process was shell command created by createProcess with shell or created by runCommand or runInteractiveCommand then terminateProcess will only terminate the shell not the command itself On Unix systems both processes are in process group and will be terminated together",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "terminateProcess",
          "normalized": "ProcessHandle-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Process",
          "signature": "ProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:terminateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin tracking the given process. If the \u003ccode\u003e\u003ca\u003eProcessHandle\u003c/a\u003e\u003c/code\u003e refers to a\n closed process, no tracking will occur. If the process is closed, then it\n will be untracked automatically.\n\u003c/p\u003e\u003cp\u003eNote that you \u003cem\u003emust\u003c/em\u003e compile your program with \u003ccode\u003e-threaded\u003c/code\u003e; see\n \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "trackProcess",
          "package": "unix-process-conduit",
          "signature": "ProcessTracker -\u003e ProcessHandle -\u003e IO TrackedProcess",
          "source": "src/Data-Conduit-Process-Unix.html#trackProcess",
          "type": "function"
        },
        "index": {
          "description": "Begin tracking the given process If the ProcessHandle refers to closed process no tracking will occur If the process is closed then it will be untracked automatically Note that you must compile your program with threaded see waitForProcess Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "trackProcess",
          "normalized": "ProcessTracker-\u003eProcessHandle-\u003eIO TrackedProcess",
          "package": "unix-process-conduit",
          "partial": "Process",
          "signature": "ProcessTracker-\u003eProcessHandle-\u003eIO TrackedProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:trackProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly remove the given process from the tracked process list in the\n cleanup process.\n\u003c/p\u003e\u003cp\u003eSince 0.2.1\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "untrackProcess",
          "package": "unix-process-conduit",
          "signature": "TrackedProcess -\u003e IO ()",
          "source": "src/Data-Conduit-Process-Unix.html#untrackProcess",
          "type": "function"
        },
        "index": {
          "description": "Explicitly remove the given process from the tracked process list in the cleanup process Since",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "untrackProcess",
          "normalized": "TrackedProcess-\u003eIO()",
          "package": "unix-process-conduit",
          "partial": "Process",
          "signature": "TrackedProcess-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:untrackProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the specified process to terminate, and returns its exit code.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewaitForProcess\u003c/code\u003e without blocking all the\n     other threads in the system, you must compile the program with\n     \u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process.Unix",
          "name": "waitForProcess",
          "package": "unix-process-conduit",
          "signature": "ProcessHandle -\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Waits for the specified process to terminate and returns its exit code GHC Note in order to call waitForProcess without blocking all the other threads in the system you must compile the program with threaded",
          "hierarchy": "Data Conduit Process Unix",
          "module": "Data.Conduit.Process.Unix",
          "name": "waitForProcess",
          "normalized": "ProcessHandle-\u003eIO ExitCode",
          "package": "unix-process-conduit",
          "partial": "For Process",
          "signature": "ProcessHandle-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unix-process-conduit/docs/Data-Conduit-Process-Unix.html#v:waitForProcess"
      }
    }
  ]
]