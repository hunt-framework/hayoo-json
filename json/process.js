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
        "word": "process"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ca\u003eSystem.Process\u003c/a\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eExecuting an external command.\n\u003c/p\u003e\u003cp\u003eThis module provides a simple interface for executing external commands.\n For a more complex, but more powerful, interface, see the \u003ca\u003eSystem.Process\u003c/a\u003e\n module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Cmd",
          "name": "Cmd",
          "package": "process",
          "source": "src/System-Cmd.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use System.Process instead Executing an external command This module provides simple interface for executing external commands For more complex but more powerful interface see the System.Process module",
          "hierarchy": "System Cmd",
          "module": "System.Cmd",
          "name": "Cmd",
          "package": "process",
          "partial": "Cmd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Cmd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ccode\u003e\u003ca\u003erawSystem\u003c/a\u003e\u003c/code\u003e \u003cem\u003ecmd\u003c/em\u003e \u003cem\u003eargs\u003c/em\u003e\u003c/code\u003e runs the operating system command\n\u003ccode\u003e\u003cem\u003ecmd\u003c/em\u003e\u003c/code\u003e in such a way that it receives as arguments the \u003ccode\u003e\u003cem\u003eargs\u003c/em\u003e\u003c/code\u003e strings\nexactly as given, with no funny escaping or shell meta-syntax expansion.\nIt will therefore behave more portably between operating systems than \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe return codes and possible failures are the same as for \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"System.Cmd\",\"System.Process\"]",
          "name": "rawSystem",
          "package": "process",
          "signature": "String -\u003e [String] -\u003e IO ExitCode",
          "source": "src/System-Process.html#rawSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/process/docs/System-Cmd.html#v:rawSystem\",\"http://hackage.haskell.org/package/process/docs/System-Process.html#v:rawSystem\"]"
        },
        "index": {
          "description": "The computation rawSystem cmd args runs the operating system command cmd in such way that it receives as arguments the args strings exactly as given with no funny escaping or shell meta-syntax expansion It will therefore behave more portably between operating systems than system The return codes and possible failures are the same as for system",
          "hierarchy": "System Cmd",
          "module": "System.Cmd",
          "name": "rawSystem",
          "normalized": "String-\u003e[String]-\u003eIO ExitCode",
          "package": "process",
          "partial": "System",
          "signature": "String-\u003e[String]-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Cmd.html#v:rawSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003esystem cmd\u003c/code\u003e returns the exit code produced when the\noperating system runs the shell command \u003ccode\u003ecmd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation may fail with one of the following\n\u003ccode\u003e\u003ca\u003eIOErrorType\u003c/a\u003e\u003c/code\u003e exceptions:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ePermissionDenied\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\nThe process has insufficient privileges to perform the operation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eResourceExhausted\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\nInsufficient resources are available to perform the operation.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eUnsupportedOperation\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\nThe implementation does not support system calls.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eOn Windows, \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e passes the command to the Windows command\ninterpreter (\u003ccode\u003eCMD.EXE\u003c/code\u003e or \u003ccode\u003eCOMMAND.COM\u003c/code\u003e), hence Unixy shell tricks\nwill not work.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, see \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e for the meaning of exit codes\nwhen the process died as the result of a signal.\n\u003c/p\u003e",
          "module": "[\"System.Cmd\",\"System.Process\"]",
          "name": "system",
          "package": "process",
          "signature": "String -\u003e IO ExitCode",
          "source": "src/System-Process.html#system",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/process/docs/System-Cmd.html#v:system\",\"http://hackage.haskell.org/package/process/docs/System-Process.html#v:system\"]"
        },
        "index": {
          "description": "Computation system cmd returns the exit code produced when the operating system runs the shell command cmd This computation may fail with one of the following IOErrorType exceptions PermissionDenied The process has insufficient privileges to perform the operation ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The implementation does not support system calls On Windows system passes the command to the Windows command interpreter CMD.EXE or COMMAND.COM hence Unixy shell tricks will not work On Unix systems see waitForProcess for the meaning of exit codes when the process died as the result of signal",
          "hierarchy": "System Cmd",
          "module": "System.Cmd",
          "name": "system",
          "normalized": "String-\u003eIO ExitCode",
          "package": "process",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Cmd.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations for creating and interacting with sub-processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process",
          "name": "Process",
          "package": "process",
          "source": "src/System-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Operations for creating and interacting with sub-processes",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "Process",
          "package": "process",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process",
          "name": "CmdSpec",
          "package": "process",
          "source": "src/System-Process-Internals.html#CmdSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "CmdSpec",
          "package": "process",
          "partial": "Cmd Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#t:CmdSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process",
          "name": "CreateProcess",
          "package": "process",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "CreateProcess",
          "package": "process",
          "partial": "Create Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#t:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process",
          "name": "ProcessHandle",
          "package": "process",
          "source": "src/System-Process-Internals.html#ProcessHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "ProcessHandle",
          "package": "process",
          "partial": "Process Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#t:ProcessHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process",
          "name": "StdStream",
          "package": "process",
          "source": "src/System-Process-Internals.html#StdStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "StdStream",
          "package": "process",
          "partial": "Std Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#t:StdStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pipe.  The returned\n \u003ccode\u003eHandle\u003c/code\u003e will use the default encoding\n and newline translation mode (just\n like \u003ccode\u003eHandle\u003c/code\u003es created by \u003ccode\u003eopenFile\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "CreatePipe",
          "package": "process",
          "signature": "CreatePipe",
          "source": "src/System-Process-Internals.html#StdStream",
          "type": "function"
        },
        "index": {
          "description": "Create new pipe The returned Handle will use the default encoding and newline translation mode just like Handle created by openFile",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "CreatePipe",
          "package": "process",
          "partial": "Create Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:CreatePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process",
          "name": "CreateProcess",
          "package": "process",
          "signature": "CreateProcess",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "CreateProcess",
          "package": "process",
          "partial": "Create Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInherit Handle from parent\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "Inherit",
          "package": "process",
          "signature": "Inherit",
          "source": "src/System-Process-Internals.html#StdStream",
          "type": "function"
        },
        "index": {
          "description": "Inherit Handle from parent",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "Inherit",
          "package": "process",
          "partial": "Inherit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:Inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe filename of an executable with a list of arguments.\n see \u003ccode\u003e\u003ca\u003eproc\u003c/a\u003e\u003c/code\u003e for the precise interpretation of\n the \u003ccode\u003eFilePath\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "RawCommand",
          "package": "process",
          "signature": "RawCommand FilePath [String]",
          "source": "src/System-Process-Internals.html#CmdSpec",
          "type": "function"
        },
        "index": {
          "description": "the filename of an executable with list of arguments see proc for the precise interpretation of the FilePath field",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "RawCommand",
          "normalized": "RawCommand FilePath[String]",
          "package": "process",
          "partial": "Raw Command",
          "signature": "RawCommand FilePath[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:RawCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea command line to execute using the shell\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "ShellCommand",
          "package": "process",
          "signature": "ShellCommand String",
          "source": "src/System-Process-Internals.html#CmdSpec",
          "type": "function"
        },
        "index": {
          "description": "command line to execute using the shell",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "ShellCommand",
          "package": "process",
          "partial": "Shell Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:ShellCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the supplied Handle\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "UseHandle",
          "package": "process",
          "signature": "UseHandle Handle",
          "source": "src/System-Process-Internals.html#StdStream",
          "type": "function"
        },
        "index": {
          "description": "Use the supplied Handle",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "UseHandle",
          "package": "process",
          "partial": "Use Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:UseHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new process to run the specified shell command.  If the\n command returns a non-zero exit code, an exception is raised.\n\u003c/p\u003e\u003cp\u003eIf an asynchronous exception is thrown to the thread executing\n \u003ccode\u003ecallCommand\u003c/code\u003e. The forked process will be terminated and\n \u003ccode\u003ecallCommand\u003c/code\u003e will wait (block) until the process has been\n terminated.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "callCommand",
          "package": "process",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Process.html#callCommand",
          "type": "function"
        },
        "index": {
          "description": "Creates new process to run the specified shell command If the command returns non-zero exit code an exception is raised If an asynchronous exception is thrown to the thread executing callCommand The forked process will be terminated and callCommand will wait block until the process has been terminated Since",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "callCommand",
          "normalized": "String-\u003eIO()",
          "package": "process",
          "partial": "Command",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:callCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new process to run the specified command with the given\n arguments, and wait for it to finish.  If the command returns a non-zero\n exit code, an exception is raised.\n\u003c/p\u003e\u003cp\u003eIf an asynchronous exception is thrown to the thread executing\n \u003ccode\u003ecallProcess\u003c/code\u003e. The forked process will be terminated and\n \u003ccode\u003ecallProcess\u003c/code\u003e will wait (block) until the process has been\n terminated.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "callProcess",
          "package": "process",
          "signature": "FilePath -\u003e [String] -\u003e IO ()",
          "source": "src/System-Process.html#callProcess",
          "type": "function"
        },
        "index": {
          "description": "Creates new process to run the specified command with the given arguments and wait for it to finish If the command returns non-zero exit code an exception is raised If an asynchronous exception is thrown to the thread executing callProcess The forked process will be terminated and callProcess will wait block until the process has been terminated Since",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "callProcess",
          "normalized": "FilePath-\u003e[String]-\u003eIO()",
          "package": "process",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:callProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all file descriptors except stdin, stdout and stderr in the new process (on Windows, only works if std_in, std_out, and std_err are all Inherit)\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "close_fds",
          "package": "process",
          "signature": "Bool",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Close all file descriptors except stdin stdout and stderr in the new process on Windows only works if std in std out and std err are all Inherit",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "close_fds",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:close_fds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutable & arguments, or shell command\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "cmdspec",
          "package": "process",
          "signature": "CmdSpec",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Executable arguments or shell command",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "cmdspec",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:cmdspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the most general way to spawn an external process.  The\nprocess can be a command line to be executed by a shell or a raw command\nwith a list of arguments.  The stdin, stdout, and stderr streams of\nthe new process may individually be attached to new pipes, to existing\n\u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es, or just inherited from the parent (the default.)\n\u003c/p\u003e\u003cp\u003eThe details of how to create the process are passed in the\n\u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record.  To make it easier to construct a\n\u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e, the functions \u003ccode\u003e\u003ca\u003eproc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshell\u003c/a\u003e\u003c/code\u003e are supplied that\nfill in the fields with default values which can be overriden as\nneeded.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e(\u003cem\u003emb_stdin_hdl\u003c/em\u003e, \u003cem\u003emb_stdout_hdl\u003c/em\u003e, \u003cem\u003emb_stderr_hdl\u003c/em\u003e, \u003cem\u003eph\u003c/em\u003e)\u003c/code\u003e,\nwhere\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003e\u003ccode\u003e\u003ca\u003estd_in\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eCreatePipe\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, then \u003ccode\u003e\u003cem\u003emb_stdin_hdl\u003c/em\u003e\u003c/code\u003e will be \u003ccode\u003eJust \u003cem\u003eh\u003c/em\u003e\u003c/code\u003e,\n   where \u003ccode\u003e\u003cem\u003eh\u003c/em\u003e\u003c/code\u003e is the write end of the pipe connected to the child\n   process's \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e otherwise, \u003ccode\u003e\u003cem\u003emb_stdin_hdl\u003c/em\u003e == Nothing\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSimilarly for \u003ccode\u003e\u003cem\u003emb_stdout_hdl\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003e\u003cem\u003emb_stderr_hdl\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, to execute a simple \u003ccode\u003els\u003c/code\u003e command:\n\u003c/p\u003e\u003cpre\u003e   r \u003c- createProcess (proc \"ls\" [])\n\u003c/pre\u003e\u003cp\u003eTo create a pipe from which to read the output of \u003ccode\u003els\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e   (_, Just hout, _, _) \u003c-\n       createProcess (proc \"ls\" []){ std_out = CreatePipe }\n\u003c/pre\u003e\u003cp\u003eTo also set the directory in which to run \u003ccode\u003els\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e   (_, Just hout, _, _) \u003c-\n       createProcess (proc \"ls\" []){ cwd = Just \"\\home\\bob\",\n                                     std_out = CreatePipe }\n\u003c/pre\u003e",
          "module": "System.Process",
          "name": "createProcess",
          "package": "process",
          "signature": "CreateProcess -\u003e IO (Maybe Handle, Maybe Handle, Maybe Handle, ProcessHandle)",
          "source": "src/System-Process.html#createProcess",
          "type": "function"
        },
        "index": {
          "description": "This is the most general way to spawn an external process The process can be command line to be executed by shell or raw command with list of arguments The stdin stdout and stderr streams of the new process may individually be attached to new pipes to existing Handle or just inherited from the parent the default The details of how to create the process are passed in the CreateProcess record To make it easier to construct CreateProcess the functions proc and shell are supplied that fill in the fields with default values which can be overriden as needed createProcess returns mb stdin hdl mb stdout hdl mb stderr hdl ph where if std in CreatePipe then mb stdin hdl will be Just where is the write end of the pipe connected to the child process stdin otherwise mb stdin hdl Nothing Similarly for mb stdout hdl and mb stderr hdl For example to execute simple ls command createProcess proc ls To create pipe from which to read the output of ls Just hout createProcess proc ls std out CreatePipe To also set the directory in which to run ls Just hout createProcess proc ls cwd Just home bob std out CreatePipe",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "createProcess",
          "normalized": "CreateProcess-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessHandle)",
          "package": "process",
          "partial": "Process",
          "signature": "CreateProcess-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:createProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process group\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "create_group",
          "package": "process",
          "signature": "Bool",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Create new process group",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "create_group",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:create_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional path to the working directory for the new process\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "cwd",
          "package": "process",
          "signature": "Maybe FilePath",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Optional path to the working directory for the new process",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "cwd",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelegate control-C handling. Use this for interactive console processes to let them handle control-C themselves (see below for details).\n\u003c/p\u003e\u003cp\u003eOn Windows this has no effect.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "delegate_ctlc",
          "package": "process",
          "signature": "Bool",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Delegate control-C handling Use this for interactive console processes to let them handle control-C themselves see below for details On Windows this has no effect Since",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "delegate_ctlc",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:delegate_ctlc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional environment (otherwise inherit from the current process)\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "env",
          "package": "process",
          "signature": "Maybe [(String, String)]",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Optional environment otherwise inherit from the current process",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "env",
          "normalized": "Maybe[(String,String)]",
          "package": "process",
          "signature": "Maybe[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a non-blocking version of \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e.  If the process is\nstill running, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.  If the process has exited, then\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e e\u003c/code\u003e is returned where \u003ccode\u003ee\u003c/code\u003e is the exit code of the process.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, see \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e for the meaning of exit codes\nwhen the process died as the result of a signal.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "getProcessExitCode",
          "package": "process",
          "signature": "ProcessHandle -\u003e IO (Maybe ExitCode)",
          "source": "src/System-Process.html#getProcessExitCode",
          "type": "function"
        },
        "index": {
          "description": "This is non-blocking version of waitForProcess If the process is still running Nothing is returned If the process has exited then Just is returned where is the exit code of the process On Unix systems see waitForProcess for the meaning of exit codes when the process died as the result of signal",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "getProcessExitCode",
          "normalized": "ProcessHandle-\u003eIO(Maybe ExitCode)",
          "package": "process",
          "partial": "Process Exit Code",
          "signature": "ProcessHandle-\u003eIO(Maybe ExitCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:getProcessExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends an interrupt signal to the process group of the given process.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, it sends the group the SIGINT signal.\n\u003c/p\u003e\u003cp\u003eOn Windows systems, it generates a CTRL_BREAK_EVENT and will only work for\n processes created using \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e and setting the \u003ccode\u003e\u003ca\u003ecreate_group\u003c/a\u003e\u003c/code\u003e flag\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "interruptProcessGroupOf",
          "package": "process",
          "signature": "ProcessHandle-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sends an interrupt signal to the process group of the given process On Unix systems it sends the group the SIGINT signal On Windows systems it generates CTRL BREAK EVENT and will only work for processes created using createProcess and setting the create group flag",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "interruptProcessGroupOf",
          "normalized": "ProcessHandle-\u003eIO()",
          "package": "process",
          "partial": "Process Group Of",
          "signature": "ProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:interruptProcessGroupOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a raw command with arguments.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e argument names the executable, and is interpreted according\n to the platform's standard policy for searching for\n executables. Specifically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e on Unix systems the\n   \u003ca\u003eexecvp(3)\u003c/a\u003e\n   semantics is used, where if the executable filename does not\n   contain a slash (\u003ccode\u003e/\u003c/code\u003e) then the \u003ccode\u003ePATH\u003c/code\u003e environment variable is\n   searched for the executable.\n\u003c/li\u003e\u003cli\u003e on Windows systems the Win32 \u003ccode\u003eCreateProcess\u003c/code\u003e semantics is used.\n   Briefly: if the filename does not contain a path, then the\n   directory containing the parent executable is searched, followed\n   by the current directory, then some standard locations, and\n   finally the current \u003ccode\u003ePATH\u003c/code\u003e.  An \u003ccode\u003e.exe\u003c/code\u003e extension is added if the\n   filename does not already have an extension.  For full details\n   see the\n   \u003ca\u003edocumentation\u003c/a\u003e\n   for the Windows \u003ccode\u003eSearchPath\u003c/code\u003e API.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Process",
          "name": "proc",
          "package": "process",
          "signature": "FilePath -\u003e [String] -\u003e CreateProcess",
          "source": "src/System-Process.html#proc",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing raw command with arguments The FilePath argument names the executable and is interpreted according to the platform standard policy for searching for executables Specifically on Unix systems the execvp semantics is used where if the executable filename does not contain slash then the PATH environment variable is searched for the executable on Windows systems the Win32 CreateProcess semantics is used Briefly if the filename does not contain path then the directory containing the parent executable is searched followed by the current directory then some standard locations and finally the current PATH An exe extension is added if the filename does not already have an extension For full details see the documentation for the Windows SearchPath API",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "proc",
          "normalized": "FilePath-\u003e[String]-\u003eCreateProcess",
          "package": "process",
          "signature": "FilePath-\u003e[String]-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadProcess\u003c/code\u003e forks an external process, reads its standard output\n strictly, blocking until the process terminates, and returns the output\n string.\n\u003c/p\u003e\u003cp\u003eIf an asynchronous exception is thrown to the thread executing\n \u003ccode\u003ereadProcess\u003c/code\u003e. The forked process will be terminated and \u003ccode\u003ereadProcess\u003c/code\u003e will\n wait (block) until the process has been terminated.\n\u003c/p\u003e\u003cp\u003eOutput is returned strictly, so this is not suitable for\n interactive applications.\n\u003c/p\u003e\u003cp\u003eThis function throws an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e if the process \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e is\n anything other than \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsers of this function should compile with \u003ccode\u003e-threaded\u003c/code\u003e if they\n want other Haskell threads to keep running while waiting on\n the result of readProcess.\n\u003c/p\u003e\u003cpre\u003e  \u003e readProcess \"date\" [] []\n  \"Thu Feb  7 10:03:39 PST 2008\\n\"\n\u003c/pre\u003e\u003cp\u003eThe arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The command to run, which must be in the $PATH, or an absolute path\n\u003c/li\u003e\u003cli\u003e A list of separate command line arguments to the program\n\u003c/li\u003e\u003cli\u003e A string to pass on the standard input to the program.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Process",
          "name": "readProcess",
          "package": "process",
          "signature": "FilePath-\u003e [String]-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "readProcess forks an external process reads its standard output strictly blocking until the process terminates and returns the output string If an asynchronous exception is thrown to the thread executing readProcess The forked process will be terminated and readProcess will wait block until the process has been terminated Output is returned strictly so this is not suitable for interactive applications This function throws an IOError if the process ExitCode is anything other than ExitSuccess Users of this function should compile with threaded if they want other Haskell threads to keep running while waiting on the result of readProcess readProcess date Thu Feb PST The arguments are The command to run which must be in the PATH or an absolute path list of separate command line arguments to the program string to pass on the standard input to the program",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "readProcess",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO String",
          "package": "process",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:readProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadProcessWithExitCode\u003c/code\u003e creates an external process, reads its\nstandard output and standard error strictly, waits until the process\nterminates, and then returns the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e of the process,\nthe standard output, and the standard error.\n\u003c/p\u003e\u003cp\u003eIf an asynchronous exception is thrown to the thread executing\n\u003ccode\u003ereadProcessWithExitCode\u003c/code\u003e. The forked process will be terminated and\n\u003ccode\u003ereadProcessWithExitCode\u003c/code\u003e will wait (block) until the process has been\nterminated.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereadProcess\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadProcessWithExitCode\u003c/a\u003e\u003c/code\u003e are fairly simple wrappers\naround \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e.  Constructing variants of these functions is\nquite easy: follow the link to the source code to see how\n\u003ccode\u003e\u003ca\u003ereadProcess\u003c/a\u003e\u003c/code\u003e is implemented.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, see \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e for the meaning of exit codes\nwhen the process died as the result of a signal.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "readProcessWithExitCode",
          "package": "process",
          "signature": "FilePath-\u003e [String]-\u003e String-\u003e IO (ExitCode, String, String)",
          "type": "function"
        },
        "index": {
          "description": "readProcessWithExitCode creates an external process reads its standard output and standard error strictly waits until the process terminates and then returns the ExitCode of the process the standard output and the standard error If an asynchronous exception is thrown to the thread executing readProcessWithExitCode The forked process will be terminated and readProcessWithExitCode will wait block until the process has been terminated readProcess and readProcessWithExitCode are fairly simple wrappers around createProcess Constructing variants of these functions is quite easy follow the link to the source code to see how readProcess is implemented On Unix systems see waitForProcess for the meaning of exit codes when the process died as the result of signal",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "readProcessWithExitCode",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(ExitCode,String,String)",
          "package": "process",
          "partial": "Process With Exit Code",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(ExitCode,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:readProcessWithExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command using the shell.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "runCommand",
          "package": "process",
          "signature": "String -\u003e IO ProcessHandle",
          "source": "src/System-Process.html#runCommand",
          "type": "function"
        },
        "index": {
          "description": "Runs command using the shell",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "runCommand",
          "normalized": "String-\u003eIO ProcessHandle",
          "package": "process",
          "partial": "Command",
          "signature": "String-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:runCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command using the shell, and returns \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es that may\n     be used to communicate with the process via its \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e,\n     and \u003ccode\u003estderr\u003c/code\u003e respectively. The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es are initially in binary\n     mode; if you need them to be in text mode then use \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "runInteractiveCommand",
          "package": "process",
          "signature": "String -\u003e IO (Handle, Handle, Handle, ProcessHandle)",
          "source": "src/System-Process.html#runInteractiveCommand",
          "type": "function"
        },
        "index": {
          "description": "Runs command using the shell and returns Handle that may be used to communicate with the process via its stdin stdout and stderr respectively The Handle are initially in binary mode if you need them to be in text mode then use hSetBinaryMode",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "runInteractiveCommand",
          "normalized": "String-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "package": "process",
          "partial": "Interactive Command",
          "signature": "String-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:runInteractiveCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a raw command, and returns \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es that may be used to communicate\n     with the process via its \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003eFor example, to start a process and feed a string to its stdin:\n\u003c/p\u003e\u003cpre\u003e   (inp,out,err,pid) \u003c- runInteractiveProcess \"...\"\n   forkIO (hPutStr inp str)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es are initially in binary mode; if you need them to be\n    in text mode then use \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "runInteractiveProcess",
          "package": "process",
          "signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e IO (Handle, Handle, Handle, ProcessHandle)",
          "type": "function"
        },
        "index": {
          "description": "Runs raw command and returns Handle that may be used to communicate with the process via its stdin stdout and stderr respectively For example to start process and feed string to its stdin inp out err pid runInteractiveProcess forkIO hPutStr inp str The Handle are initially in binary mode if you need them to be in text mode then use hSetBinaryMode",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "runInteractiveProcess",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "package": "process",
          "partial": "Interactive Process",
          "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:runInteractiveProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a raw command, optionally specifying \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es from which to\n     take the \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e channels for the new\n     process (otherwise these handles are inherited from the current\n     process).\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es passed to \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e are placed immediately in the\n     closed state.\n\u003c/p\u003e\u003cp\u003eNote: consider using the more general \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e instead of\n     \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "runProcess",
          "package": "process",
          "signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e Maybe Handle-\u003e Maybe Handle-\u003e Maybe Handle-\u003e IO ProcessHandle",
          "type": "function"
        },
        "index": {
          "description": "Runs raw command optionally specifying Handle from which to take the stdin stdout and stderr channels for the new process otherwise these handles are inherited from the current process Any Handle passed to runProcess are placed immediately in the closed state Note consider using the more general createProcess instead of runProcess",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "runProcess",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eMaybe Handle-\u003eMaybe Handle-\u003eMaybe Handle-\u003eIO ProcessHandle",
          "package": "process",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eMaybe Handle-\u003eMaybe Handle-\u003eMaybe Handle-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a command to be passed to the shell.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "shell",
          "package": "process",
          "signature": "String -\u003e CreateProcess",
          "source": "src/System-Process.html#shell",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing command to be passed to the shell",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "shell",
          "normalized": "String-\u003eCreateProcess",
          "package": "process",
          "signature": "String-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a program \u003ccode\u003e\u003cem\u003ep\u003c/em\u003e\u003c/code\u003e and arguments \u003ccode\u003e\u003cem\u003eargs\u003c/em\u003e\u003c/code\u003e,\n   \u003ccode\u003eshowCommandForUser \u003cem\u003ep\u003c/em\u003e \u003cem\u003eargs\u003c/em\u003e\u003c/code\u003e returns a string suitable for pasting\n   into \u003ccode\u003e/bin/sh\u003c/code\u003e (on Unix systems) or \u003ccode\u003eCMD.EXE\u003c/code\u003e (on Windows).\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "showCommandForUser",
          "package": "process",
          "signature": "FilePath -\u003e [String] -\u003e String",
          "source": "src/System-Process.html#showCommandForUser",
          "type": "function"
        },
        "index": {
          "description": "Given program and arguments args showCommandForUser args returns string suitable for pasting into bin sh on Unix systems or CMD.EXE on Windows",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "showCommandForUser",
          "normalized": "FilePath-\u003e[String]-\u003eString",
          "package": "process",
          "partial": "Command For User",
          "signature": "FilePath-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:showCommandForUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new process to run the specified shell command.\n It does not wait for the program to finish, but returns the \u003ccode\u003e\u003ca\u003eProcessHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "spawnCommand",
          "package": "process",
          "signature": "String -\u003e IO ProcessHandle",
          "source": "src/System-Process.html#spawnCommand",
          "type": "function"
        },
        "index": {
          "description": "Creates new process to run the specified shell command It does not wait for the program to finish but returns the ProcessHandle Since",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "spawnCommand",
          "normalized": "String-\u003eIO ProcessHandle",
          "package": "process",
          "partial": "Command",
          "signature": "String-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:spawnCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new process to run the specified raw command with the given\n arguments. It does not wait for the program to finish, but returns the\n \u003ccode\u003e\u003ca\u003eProcessHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "spawnProcess",
          "package": "process",
          "signature": "FilePath -\u003e [String] -\u003e IO ProcessHandle",
          "source": "src/System-Process.html#spawnProcess",
          "type": "function"
        },
        "index": {
          "description": "Creates new process to run the specified raw command with the given arguments It does not wait for the program to finish but returns the ProcessHandle Since",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "spawnProcess",
          "normalized": "FilePath-\u003e[String]-\u003eIO ProcessHandle",
          "package": "process",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:spawnProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stderr\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "std_err",
          "package": "process",
          "signature": "StdStream",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "How to determine stderr",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "std_err",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:std_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdin\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "std_in",
          "package": "process",
          "signature": "StdStream",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdin",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "std_in",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:std_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdout\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "std_out",
          "package": "process",
          "signature": "StdStream",
          "source": "src/System-Process-Internals.html#CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdout",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "std_out",
          "package": "process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:std_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to terminate the specified process.  This function should\n not be used under normal circumstances - no guarantees are given regarding\n how cleanly the process is terminated.  To check whether the process\n has indeed terminated, use \u003ccode\u003e\u003ca\u003egetProcessExitCode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e sends the process the SIGTERM signal.\n On Windows systems, the Win32 \u003ccode\u003eTerminateProcess\u003c/code\u003e function is called, passing\n an exit code of 1.\n\u003c/p\u003e\u003cp\u003eNote: on Windows, if the process was a shell command created by\n \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eshell\u003c/a\u003e\u003c/code\u003e, or created by \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003erunInteractiveCommand\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e will only\n terminate the shell, not the command itself.  On Unix systems, both\n processes are in a process group and will be terminated together.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "terminateProcess",
          "package": "process",
          "signature": "ProcessHandle -\u003e IO ()",
          "source": "src/System-Process.html#terminateProcess",
          "type": "function"
        },
        "index": {
          "description": "Attempts to terminate the specified process This function should not be used under normal circumstances no guarantees are given regarding how cleanly the process is terminated To check whether the process has indeed terminated use getProcessExitCode On Unix systems terminateProcess sends the process the SIGTERM signal On Windows systems the Win32 TerminateProcess function is called passing an exit code of Note on Windows if the process was shell command created by createProcess with shell or created by runCommand or runInteractiveCommand then terminateProcess will only terminate the shell not the command itself On Unix systems both processes are in process group and will be terminated together",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "terminateProcess",
          "normalized": "ProcessHandle-\u003eIO()",
          "package": "process",
          "partial": "Process",
          "signature": "ProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:terminateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the specified process to terminate, and returns its exit code.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewaitForProcess\u003c/code\u003e without blocking all the\nother threads in the system, you must compile the program with\n\u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(\u003cem\u003eSince: 1.2.0.0\u003c/em\u003e) On Unix systems, a negative value \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e -\u003cem\u003esignum\u003c/em\u003e\u003c/code\u003e\nindicates that the child was terminated by signal \u003ccode\u003e\u003cem\u003esignum\u003c/em\u003e\u003c/code\u003e.\nThe signal numbers are platform-specific, so to test for a specific signal use\nthe constants provided by \u003ca\u003eSystem.Posix.Signals\u003c/a\u003e in the \u003ccode\u003eunix\u003c/code\u003e package.\nNote: core dumps are not reported, use \u003ca\u003eSystem.Posix.Process\u003c/a\u003e if you need this\ndetail.\n\u003c/p\u003e",
          "module": "System.Process",
          "name": "waitForProcess",
          "package": "process",
          "signature": "ProcessHandle -\u003e IO ExitCode",
          "source": "src/System-Process.html#waitForProcess",
          "type": "function"
        },
        "index": {
          "description": "Waits for the specified process to terminate and returns its exit code GHC Note in order to call waitForProcess without blocking all the other threads in the system you must compile the program with threaded Since On Unix systems negative value ExitFailure signum indicates that the child was terminated by signal signum The signal numbers are platform-specific so to test for specific signal use the constants provided by System.Posix.Signals in the unix package Note core dumps are not reported use System.Posix.Process if you need this detail",
          "hierarchy": "System Process",
          "module": "System.Process",
          "name": "waitForProcess",
          "normalized": "ProcessHandle-\u003eIO ExitCode",
          "package": "process",
          "partial": "For Process",
          "signature": "ProcessHandle-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process/docs/System-Process.html#v:waitForProcess"
      }
    }
  ]
]