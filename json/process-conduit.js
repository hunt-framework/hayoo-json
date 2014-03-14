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
        "word": "process-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "Process",
          "package": "process-conduit",
          "source": "src/Data-Conduit-Process.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "Process",
          "package": "process-conduit",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "CmdSpec",
          "package": "process-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "CmdSpec",
          "package": "process-conduit",
          "partial": "Cmd Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#t:CmdSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "CreateProcess",
          "package": "process-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "CreateProcess",
          "package": "process-conduit",
          "partial": "Create Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#t:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "ProcessHandle",
          "package": "process-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "ProcessHandle",
          "package": "process-conduit",
          "partial": "Process Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#t:ProcessHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "StdStream",
          "package": "process-conduit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "StdStream",
          "package": "process-conduit",
          "partial": "Std Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#t:StdStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pipe.  The returned\n \u003ccode\u003eHandle\u003c/code\u003e will use the default encoding\n and newline translation mode (just\n like \u003ccode\u003eHandle\u003c/code\u003es created by \u003ccode\u003eopenFile\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "CreatePipe",
          "package": "process-conduit",
          "signature": "CreatePipe",
          "type": "function"
        },
        "index": {
          "description": "Create new pipe The returned Handle will use the default encoding and newline translation mode just like Handle created by openFile",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "CreatePipe",
          "package": "process-conduit",
          "partial": "Create Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:CreatePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Process",
          "name": "CreateProcess",
          "package": "process-conduit",
          "signature": "CreateProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "CreateProcess",
          "package": "process-conduit",
          "partial": "Create Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInherit Handle from parent\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "Inherit",
          "package": "process-conduit",
          "signature": "Inherit",
          "type": "function"
        },
        "index": {
          "description": "Inherit Handle from parent",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "Inherit",
          "package": "process-conduit",
          "partial": "Inherit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:Inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe filename of an executable with a list of arguments.\n see \u003ccode\u003e\u003ca\u003eproc\u003c/a\u003e\u003c/code\u003e for the precise interpretation of\n the \u003ccode\u003eFilePath\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "RawCommand",
          "package": "process-conduit",
          "signature": "RawCommand FilePath [String]",
          "type": "function"
        },
        "index": {
          "description": "the filename of an executable with list of arguments see proc for the precise interpretation of the FilePath field",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "RawCommand",
          "normalized": "RawCommand FilePath[String]",
          "package": "process-conduit",
          "partial": "Raw Command",
          "signature": "RawCommand FilePath[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:RawCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea command line to execute using the shell\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "ShellCommand",
          "package": "process-conduit",
          "signature": "ShellCommand String",
          "type": "function"
        },
        "index": {
          "description": "command line to execute using the shell",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "ShellCommand",
          "package": "process-conduit",
          "partial": "Shell Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:ShellCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the supplied Handle\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "UseHandle",
          "package": "process-conduit",
          "signature": "UseHandle Handle",
          "type": "function"
        },
        "index": {
          "description": "Use the supplied Handle",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "UseHandle",
          "package": "process-conduit",
          "partial": "Use Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:UseHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all file descriptors except stdin, stdout and stderr in the new process (on Windows, only works if std_in, std_out, and std_err are all Inherit)\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "close_fds",
          "package": "process-conduit",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Close all file descriptors except stdin stdout and stderr in the new process on Windows only works if std in std out and std err are all Inherit",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "close_fds",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:close_fds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutable & arguments, or shell command\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "cmdspec",
          "package": "process-conduit",
          "signature": "CmdSpec",
          "type": "function"
        },
        "index": {
          "description": "Executable arguments or shell command",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "cmdspec",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:cmdspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit of shell command\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "conduitCmd",
          "package": "process-conduit",
          "signature": "String -\u003e Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Process.html#conduitCmd",
          "type": "function"
        },
        "index": {
          "description": "Conduit of shell command",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "conduitCmd",
          "normalized": "String-\u003eConduit ByteString a ByteString",
          "package": "process-conduit",
          "partial": "Cmd",
          "signature": "String-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:conduitCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit of process\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "conduitProcess",
          "package": "process-conduit",
          "signature": "CreateProcess -\u003e Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Process.html#conduitProcess",
          "type": "function"
        },
        "index": {
          "description": "Conduit of process",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "conduitProcess",
          "normalized": "CreateProcess-\u003eConduit ByteString a ByteString",
          "package": "process-conduit",
          "partial": "Process",
          "signature": "CreateProcess-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:conduitProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process group\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "create_group",
          "package": "process-conduit",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Create new process group",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "create_group",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:create_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional path to the working directory for the new process\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "cwd",
          "package": "process-conduit",
          "signature": "Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Optional path to the working directory for the new process",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "cwd",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional environment (otherwise inherit from the current process)\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "env",
          "package": "process-conduit",
          "signature": "Maybe [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Optional environment otherwise inherit from the current process",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "env",
          "normalized": "Maybe[(String,String)]",
          "package": "process-conduit",
          "signature": "Maybe[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a raw command with arguments.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eFilePath\u003c/code\u003e names the executable, and is interpreted according\n to the platform's standard policy for searching for\n executables. Specifically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e on Unix systems the \u003ccode\u003eexecvp\u003c/code\u003e semantics is used, where if the\n   filename does not contain a slash (\u003ccode\u003e/\u003c/code\u003e) then the \u003ccode\u003ePATH\u003c/code\u003e\n   environment variable is searched for the executable.\n\u003c/li\u003e\u003cli\u003e on Windows systems the Win32 \u003ccode\u003eCreateProcess\u003c/code\u003e semantics is used.\n   Briefly: if the filename does not contain a path, then the\n   directory containing the parent executable is searched, followed\n   by the current directory, then some some standard locations, and\n   finally the current \u003ccode\u003ePATH\u003c/code\u003e.  An \u003ccode\u003e.exe\u003c/code\u003e extension is added if the\n   filename does not already have an extension.  For full details\n   see the documentation for the Windows \u003ccode\u003eSearchPath\u003c/code\u003e API.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Conduit.Process",
          "name": "proc",
          "package": "process-conduit",
          "signature": "FilePath -\u003e [String] -\u003e CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing raw command with arguments The FilePath names the executable and is interpreted according to the platform standard policy for searching for executables Specifically on Unix systems the execvp semantics is used where if the filename does not contain slash then the PATH environment variable is searched for the executable on Windows systems the Win32 CreateProcess semantics is used Briefly if the filename does not contain path then the directory containing the parent executable is searched followed by the current directory then some some standard locations and finally the current PATH An exe extension is added if the filename does not already have an extension For full details see the documentation for the Windows SearchPath API",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "proc",
          "normalized": "FilePath-\u003e[String]-\u003eCreateProcess",
          "package": "process-conduit",
          "signature": "FilePath-\u003e[String]-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a command to be passed to the shell.\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "shell",
          "package": "process-conduit",
          "signature": "String -\u003e CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing command to be passed to the shell",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "shell",
          "normalized": "String-\u003eCreateProcess",
          "package": "process-conduit",
          "signature": "String-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of shell command\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "sourceCmd",
          "package": "process-conduit",
          "signature": "String -\u003e Producer m ByteString",
          "source": "src/Data-Conduit-Process.html#sourceCmd",
          "type": "function"
        },
        "index": {
          "description": "Source of shell command",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "sourceCmd",
          "normalized": "String-\u003eProducer a ByteString",
          "package": "process-conduit",
          "partial": "Cmd",
          "signature": "String-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:sourceCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of process\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "sourceProcess",
          "package": "process-conduit",
          "signature": "CreateProcess -\u003e Producer m ByteString",
          "source": "src/Data-Conduit-Process.html#sourceProcess",
          "type": "function"
        },
        "index": {
          "description": "Source of process",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "sourceProcess",
          "normalized": "CreateProcess-\u003eProducer a ByteString",
          "package": "process-conduit",
          "partial": "Process",
          "signature": "CreateProcess-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:sourceProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stderr\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "std_err",
          "package": "process-conduit",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stderr",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "std_err",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:std_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdin\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "std_in",
          "package": "process-conduit",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdin",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "std_in",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:std_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdout\n\u003c/p\u003e",
          "module": "Data.Conduit.Process",
          "name": "std_out",
          "package": "process-conduit",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdout",
          "hierarchy": "Data Conduit Process",
          "module": "Data.Conduit.Process",
          "name": "std_out",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/Data-Conduit-Process.html#v:std_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.QQ",
          "name": "QQ",
          "package": "process-conduit",
          "source": "src/System-Process-QQ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Process QQ",
          "module": "System.Process.QQ",
          "name": "QQ",
          "package": "process-conduit",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/System-Process-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit of shell command\n\u003c/p\u003e",
          "module": "System.Process.QQ",
          "name": "ccmd",
          "package": "process-conduit",
          "signature": "QuasiQuoter",
          "source": "src/System-Process-QQ.html#ccmd",
          "type": "function"
        },
        "index": {
          "description": "Conduit of shell command",
          "hierarchy": "System Process QQ",
          "module": "System.Process.QQ",
          "name": "ccmd",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/System-Process-QQ.html#v:ccmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand result of (Lazy) ByteString.\n\u003c/p\u003e",
          "module": "System.Process.QQ",
          "name": "cmd",
          "package": "process-conduit",
          "signature": "QuasiQuoter",
          "source": "src/System-Process-QQ.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "Command result of Lazy ByteString",
          "hierarchy": "System Process QQ",
          "module": "System.Process.QQ",
          "name": "cmd",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/System-Process-QQ.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource of shell command\n\u003c/p\u003e",
          "module": "System.Process.QQ",
          "name": "scmd",
          "package": "process-conduit",
          "signature": "QuasiQuoter",
          "source": "src/System-Process-QQ.html#scmd",
          "type": "function"
        },
        "index": {
          "description": "Source of shell command",
          "hierarchy": "System Process QQ",
          "module": "System.Process.QQ",
          "name": "scmd",
          "package": "process-conduit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-conduit/docs/System-Process-QQ.html#v:scmd"
      }
    }
  ]
]