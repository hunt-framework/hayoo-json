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
        "word": "Command"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "Command",
          "package": "Command",
          "source": "src/System-Command.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Command",
          "package": "Command",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "CmdSpec",
          "package": "Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CmdSpec",
          "package": "Command",
          "partial": "Cmd Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#t:CmdSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "CreateProcess",
          "package": "Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CreateProcess",
          "package": "Command",
          "partial": "Create Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#t:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a process\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "ExitCode",
          "package": "Command",
          "source": "src/System-Command.html#ExitCode",
          "type": "data"
        },
        "index": {
          "description": "The result of running process",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "ExitCode",
          "package": "Command",
          "partial": "Exit Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#t:ExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "ProcessHandle",
          "package": "Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "ProcessHandle",
          "package": "Command",
          "partial": "Process Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#t:ProcessHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "StdStream",
          "package": "Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "StdStream",
          "package": "Command",
          "partial": "Std Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#t:StdStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the first action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the second action returning the first action's result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(-\u003e-\u003e)",
          "package": "Command",
          "signature": "m ExitCode -\u003e m a -\u003e m ExitCode",
          "source": "src/System-Command.html#-%3E-%3E",
          "type": "function"
        },
        "index": {
          "description": "Runs the first action Only if the result is successful run the second action returning the first action result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(-\u003e-\u003e) -\u003e-\u003e",
          "normalized": "a ExitCode-\u003ea b-\u003ea ExitCode",
          "package": "Command",
          "signature": "m ExitCode-\u003em a-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-45--62--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the first action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the second action returning its result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(-\u003e\u003e)",
          "package": "Command",
          "signature": "m ExitCode -\u003e m ExitCode -\u003e m ExitCode",
          "source": "src/System-Command.html#-%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Runs the first action Only if the result is successful run the second action returning its result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(-\u003e\u003e) -\u003e\u003e",
          "normalized": "a ExitCode-\u003ea ExitCode-\u003ea ExitCode",
          "package": "Command",
          "signature": "m ExitCode-\u003em ExitCode-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-45--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the first action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the second action returning no result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(-\u003e\u003e\u003e)",
          "package": "Command",
          "signature": "m ExitCode -\u003e m a -\u003e m ()",
          "source": "src/System-Command.html#-%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Runs the first action Only if the result is successful run the second action returning no result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(-\u003e\u003e\u003e) -\u003e\u003e\u003e",
          "normalized": "a ExitCode-\u003ea b-\u003ea()",
          "package": "Command",
          "signature": "m ExitCode-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-45--62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the second action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the first action returning the second action's result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(\u003c-\u003c-)",
          "package": "Command",
          "signature": "m a -\u003e m ExitCode -\u003e m ExitCode",
          "source": "src/System-Command.html#%3C-%3C-",
          "type": "function"
        },
        "index": {
          "description": "Runs the second action Only if the result is successful run the first action returning the second action result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(\u003c-\u003c-) \u003c-\u003c-",
          "normalized": "a b-\u003ea ExitCode-\u003ea ExitCode",
          "package": "Command",
          "signature": "m a-\u003em ExitCode-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-60--45--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the second action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the first action returning its result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(\u003c\u003c-)",
          "package": "Command",
          "signature": "m ExitCode -\u003e m ExitCode -\u003e m ExitCode",
          "source": "src/System-Command.html#%3C%3C-",
          "type": "function"
        },
        "index": {
          "description": "Runs the second action Only if the result is successful run the first action returning its result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(\u003c\u003c-) \u003c\u003c-",
          "normalized": "a ExitCode-\u003ea ExitCode-\u003ea ExitCode",
          "package": "Command",
          "signature": "m ExitCode-\u003em ExitCode-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-60--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the second action.\n\u003c/p\u003e\u003cp\u003eOnly if the result is successful, run the first action returning no result.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "(\u003c\u003c\u003c-)",
          "package": "Command",
          "signature": "m a -\u003e m ExitCode -\u003e m ()",
          "source": "src/System-Command.html#%3C%3C%3C-",
          "type": "function"
        },
        "index": {
          "description": "Runs the second action Only if the result is successful run the first action returning no result",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "(\u003c\u003c\u003c-) \u003c\u003c\u003c-",
          "normalized": "a b-\u003ea ExitCode-\u003ea()",
          "package": "Command",
          "signature": "m a-\u003em ExitCode-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:-60--60--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new pipe.  The returned\n \u003ccode\u003eHandle\u003c/code\u003e will use the default encoding\n and newline translation mode (just\n like \u003ccode\u003eHandle\u003c/code\u003es created by \u003ccode\u003eopenFile\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "CreatePipe",
          "package": "Command",
          "signature": "CreatePipe",
          "type": "function"
        },
        "index": {
          "description": "Create new pipe The returned Handle will use the default encoding and newline translation mode just like Handle created by openFile",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CreatePipe",
          "package": "Command",
          "partial": "Create Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:CreatePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "CreateProcess",
          "package": "Command",
          "signature": "CreateProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CreateProcess",
          "package": "Command",
          "partial": "Create Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:CreateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInherit Handle from parent\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Inherit",
          "package": "Command",
          "signature": "Inherit",
          "type": "function"
        },
        "index": {
          "description": "Inherit Handle from parent",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Inherit",
          "package": "Command",
          "partial": "Inherit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:Inherit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe filename of an executable with a list of arguments\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "RawCommand",
          "package": "Command",
          "signature": "RawCommand FilePath [String]",
          "type": "function"
        },
        "index": {
          "description": "the filename of an executable with list of arguments",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "RawCommand",
          "normalized": "RawCommand FilePath[String]",
          "package": "Command",
          "partial": "Raw Command",
          "signature": "RawCommand FilePath[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:RawCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea command line to execute using the shell\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "ShellCommand",
          "package": "Command",
          "signature": "ShellCommand String",
          "type": "function"
        },
        "index": {
          "description": "command line to execute using the shell",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "ShellCommand",
          "package": "Command",
          "partial": "Shell Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:ShellCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the supplied Handle\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "UseHandle",
          "package": "Command",
          "signature": "UseHandle Handle",
          "type": "function"
        },
        "index": {
          "description": "Use the supplied Handle",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "UseHandle",
          "package": "Command",
          "partial": "Use Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:UseHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all file descriptors except stdin, stdout and stderr in the new process (on Windows, only works if std_in, std_out, and std_err are all Inherit)\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "close_fds",
          "package": "Command",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Close all file descriptors except stdin stdout and stderr in the new process on Windows only works if std in std out and std err are all Inherit",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "close_fds",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:close_fds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutable & arguments, or shell command\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "cmdspec",
          "package": "Command",
          "signature": "CmdSpec",
          "type": "function"
        },
        "index": {
          "description": "Executable arguments or shell command",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "cmdspec",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:cmdspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the most general way to spawn an external process.  The\nprocess can be a command line to be executed by a shell or a raw command\nwith a list of arguments.  The stdin, stdout, and stderr streams of\nthe new process may individually be attached to new pipes, to existing\n\u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es, or just inherited from the parent (the default.)\n\u003c/p\u003e\u003cp\u003eThe details of how to create the process are passed in the\n\u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record.  To make it easier to construct a\n\u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e, the functions \u003ccode\u003e\u003ca\u003eproc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshell\u003c/a\u003e\u003c/code\u003e are supplied that\nfill in the fields with default values which can be overriden as\nneeded.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e(mb_stdin_hdl, mb_stdout_hdl, mb_stderr_hdl, p)\u003c/code\u003e,\nwhere \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003estd_in == CreatePipe\u003c/code\u003e, then \u003ccode\u003emb_stdin_hdl\u003c/code\u003e will be \u003ccode\u003eJust h\u003c/code\u003e,\n   where \u003ccode\u003eh\u003c/code\u003e is the write end of the pipe connected to the child\n   process's \u003ccode\u003estdin\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e otherwise, \u003ccode\u003emb_stdin_hdl == Nothing\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSimilarly for \u003ccode\u003emb_stdout_hdl\u003c/code\u003e and \u003ccode\u003emb_stderr_hdl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, to execute a simple \u003ccode\u003els\u003c/code\u003e command:\n\u003c/p\u003e\u003cpre\u003e   r \u003c- createProcess (proc \"ls\" [])\n\u003c/pre\u003e\u003cp\u003eTo create a pipe from which to read the output of \u003ccode\u003els\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e   (_, Just hout, _, _) \u003c-\n       createProcess (proc \"ls\" []){ std_out = CreatePipe }\n\u003c/pre\u003e\u003cp\u003eTo also set the directory in which to run \u003ccode\u003els\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e   (_, Just hout, _, _) \u003c-\n       createProcess (proc \"ls\" []){ cwd = Just \"\\home\\bob\",\n                                     std_out = CreatePipe }\n\u003c/pre\u003e",
          "module": "System.Command",
          "name": "createProcess",
          "package": "Command",
          "signature": "CreateProcess -\u003e IO (Maybe Handle, Maybe Handle, Maybe Handle, ProcessHandle)",
          "type": "function"
        },
        "index": {
          "description": "This is the most general way to spawn an external process The process can be command line to be executed by shell or raw command with list of arguments The stdin stdout and stderr streams of the new process may individually be attached to new pipes to existing Handle or just inherited from the parent the default The details of how to create the process are passed in the CreateProcess record To make it easier to construct CreateProcess the functions proc and shell are supplied that fill in the fields with default values which can be overriden as needed createProcess returns mb stdin hdl mb stdout hdl mb stderr hdl where if std in CreatePipe then mb stdin hdl will be Just where is the write end of the pipe connected to the child process stdin otherwise mb stdin hdl Nothing Similarly for mb stdout hdl and mb stderr hdl For example to execute simple ls command createProcess proc ls To create pipe from which to read the output of ls Just hout createProcess proc ls std out CreatePipe To also set the directory in which to run ls Just hout createProcess proc ls cwd Just home bob std out CreatePipe",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "createProcess",
          "normalized": "CreateProcess-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessHandle)",
          "package": "Command",
          "partial": "Process",
          "signature": "CreateProcess-\u003eIO(Maybe Handle,Maybe Handle,Maybe Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:createProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process group\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "create_group",
          "package": "Command",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "Create new process group",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "create_group",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:create_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional path to the working directory for the new process\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "cwd",
          "package": "Command",
          "signature": "Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Optional path to the working directory for the new process",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "cwd",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional environment (otherwise inherit from the current process)\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "env",
          "package": "Command",
          "signature": "Maybe [(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Optional environment otherwise inherit from the current process",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "env",
          "normalized": "Maybe[(String,String)]",
          "package": "Command",
          "signature": "Maybe[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a process result.\n A value of \u003ccode\u003e0\u003c/code\u003e denotes success, otherwise, failure.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "exitCode",
          "package": "Command",
          "signature": "Int -\u003e ExitCode",
          "source": "src/System-Command.html#exitCode",
          "type": "function"
        },
        "index": {
          "description": "Construct process result value of denotes success otherwise failure",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "exitCode",
          "normalized": "Int-\u003eExitCode",
          "package": "Command",
          "partial": "Code",
          "signature": "Int-\u003eExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:exitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(\u003c/code\u003e'exitCode exitfail'\u003ccode\u003e)\u003c/code\u003e,\n where \u003cem\u003eexitfail\u003c/em\u003e is implementation-dependent.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "exitFailure",
          "package": "Command",
          "signature": "IO a",
          "source": "src/System-Command.html#exitFailure",
          "type": "function"
        },
        "index": {
          "description": "The computation exitFailure is equivalent to exitWith exitCode exitfail where exitfail is implementation-dependent",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "exitFailure",
          "package": "Command",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:exitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eexitSuccess\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esuccess\u003c/a\u003e\u003c/code\u003e, It terminates the program\n sucessfully.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "exitSuccess",
          "package": "Command",
          "signature": "IO a",
          "source": "src/System-Command.html#exitSuccess",
          "type": "function"
        },
        "index": {
          "description": "The computation exitSuccess is equivalent to exitWith success It terminates the program sucessfully",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "exitSuccess",
          "package": "Command",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:exitSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value that the given process result was constructed with.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "exitValue",
          "package": "Command",
          "signature": "ExitCode -\u003e Int",
          "source": "src/System-Command.html#exitValue",
          "type": "function"
        },
        "index": {
          "description": "Returns the value that the given process result was constructed with",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "exitValue",
          "normalized": "ExitCode-\u003eInt",
          "package": "Command",
          "partial": "Value",
          "signature": "ExitCode-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:exitValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecode\u003c/code\u003e throws \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ecode\u003c/code\u003e.\n Normally this terminates the program, returning \u003ccode\u003ecode\u003c/code\u003e to the\n program's caller.  Before the program terminates, any open or\n semi-closed handles are first closed.\n\u003c/p\u003e\u003cp\u003eA program that fails in any other way is treated as if it had\n called \u003ccode\u003e\u003ca\u003eexitFailure\u003c/a\u003e\u003c/code\u003e.\n A program that terminates successfully without calling \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e\n explicitly is treated as it it had called \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eExitSuccess\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs an \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e is not an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e bypasses\n the error handling in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad and cannot be intercepted by\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003ePrelude\u003c/a\u003e.  However it is a \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e, and can\n be caught using the functions of \u003ca\u003eControl.Exception\u003c/a\u003e.  This means\n that cleanup computations added with \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n (from \u003ca\u003eControl.Exception\u003c/a\u003e) are also executed properly on \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: in GHC, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e should be called from the main program\n thread in order to exit the process.  When called from another\n thread, \u003ccode\u003e\u003ca\u003eexitWith\u003c/a\u003e\u003c/code\u003e will throw an \u003ccode\u003eExitException\u003c/code\u003e as normal, but the\n exception will not cause the process itself to exit.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "exitWith",
          "package": "Command",
          "signature": "ExitCode -\u003e IO a",
          "source": "src/System-Command.html#exitWith",
          "type": "function"
        },
        "index": {
          "description": "Computation exitWith code throws ExitCode code Normally this terminates the program returning code to the program caller Before the program terminates any open or semi-closed handles are first closed program that fails in any other way is treated as if it had called exitFailure program that terminates successfully without calling exitWith explicitly is treated as it it had called exitWith ExitSuccess As an ExitCode is not an IOError exitWith bypasses the error handling in the IO monad and cannot be intercepted by catch from the Prelude However it is SomeException and can be caught using the functions of Control.Exception This means that cleanup computations added with bracket from Control.Exception are also executed properly on exitWith Note in GHC exitWith should be called from the main program thread in order to exit the process When called from another thread exitWith will throw an ExitException as normal but the exception will not cause the process itself to exit",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "exitWith",
          "normalized": "ExitCode-\u003eIO a",
          "package": "Command",
          "partial": "With",
          "signature": "ExitCode-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:exitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a non-blocking version of \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e.  If the process is\n still running, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.  If the process has exited, then\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e e\u003c/code\u003e is returned where \u003ccode\u003ee\u003c/code\u003e is the exit code of the process.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "getProcessExitCode",
          "package": "Command",
          "signature": "ProcessHandle -\u003e IO (Maybe ExitCode)",
          "source": "src/System-Command.html#getProcessExitCode",
          "type": "function"
        },
        "index": {
          "description": "This is non-blocking version of waitForProcess If the process is still running Nothing is returned If the process has exited then Just is returned where is the exit code of the process",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "getProcessExitCode",
          "normalized": "ProcessHandle-\u003eIO(Maybe ExitCode)",
          "package": "Command",
          "partial": "Process Exit Code",
          "signature": "ProcessHandle-\u003eIO(Maybe ExitCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:getProcessExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "inDirectory",
          "package": "Command",
          "signature": "FilePath -\u003e (FilePath -\u003e IO a) -\u003e IO a",
          "source": "src/System-Command.html#inDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "inDirectory",
          "normalized": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "package": "Command",
          "partial": "Directory",
          "signature": "FilePath-\u003e(FilePath-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:inDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "inDirectory'",
          "package": "Command",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/System-Command.html#inDirectory%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "inDirectory'",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "Command",
          "partial": "Directory'",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:inDirectory-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns false if the given process result was constructed with the value \u003ccode\u003e0\u003c/code\u003e, otherwise true.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "isFailure",
          "package": "Command",
          "signature": "ExitCode -\u003e Bool",
          "source": "src/System-Command.html#isFailure",
          "type": "function"
        },
        "index": {
          "description": "Returns false if the given process result was constructed with the value otherwise true",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "isFailure",
          "normalized": "ExitCode-\u003eBool",
          "package": "Command",
          "partial": "Failure",
          "signature": "ExitCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:isFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given process result was constructed with the value \u003ccode\u003e0\u003c/code\u003e, otherwise false.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "isSuccess",
          "package": "Command",
          "signature": "ExitCode -\u003e Bool",
          "source": "src/System-Command.html#isSuccess",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the given process result was constructed with the value otherwise false",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "isSuccess",
          "normalized": "ExitCode-\u003eBool",
          "package": "Command",
          "partial": "Success",
          "signature": "ExitCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:isSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a raw command with arguments.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "proc",
          "package": "Command",
          "signature": "FilePath -\u003e [String] -\u003e CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing raw command with arguments",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "proc",
          "normalized": "FilePath-\u003e[String]-\u003eCreateProcess",
          "package": "Command",
          "signature": "FilePath-\u003e[String]-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ccode\u003e\u003ca\u003erawSystem\u003c/a\u003e\u003c/code\u003e cmd args\u003c/code\u003e runs the operating system command\n \u003ccode\u003ecmd\u003c/code\u003e in such a way that it receives as arguments the \u003ccode\u003eargs\u003c/code\u003e strings\n exactly as given, with no funny escaping or shell meta-syntax expansion.\n It will therefore behave more portably between operating systems than \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe return codes and possible failures are the same as for \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "rawSystem",
          "package": "Command",
          "signature": "String -\u003e [String] -\u003e IO ExitCode",
          "source": "src/System-Command.html#rawSystem",
          "type": "function"
        },
        "index": {
          "description": "The computation rawSystem cmd args runs the operating system command cmd in such way that it receives as arguments the args strings exactly as given with no funny escaping or shell meta-syntax expansion It will therefore behave more portably between operating systems than system The return codes and possible failures are the same as for system",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "rawSystem",
          "normalized": "String-\u003e[String]-\u003eIO ExitCode",
          "package": "Command",
          "partial": "System",
          "signature": "String-\u003e[String]-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:rawSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadProcess forks an external process, reads its standard output\n strictly, blocking until the process terminates, and returns the output\n string.\n\u003c/p\u003e\u003cp\u003eOutput is returned strictly, so this is not suitable for\n interactive applications.\n\u003c/p\u003e\u003cp\u003eThis function throws an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e if the process \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e is\n anything other than \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsers of this function should compile with \u003ccode\u003e-threaded\u003c/code\u003e if they\n want other Haskell threads to keep running while waiting on\n the result of readProcess.\n\u003c/p\u003e\u003cpre\u003e  \u003e readProcess \"date\" [] []\n  \"Thu Feb  7 10:03:39 PST 2008\\n\"\n\u003c/pre\u003e\u003cp\u003eThe arguments are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The command to run, which must be in the $PATH, or an absolute path\n\u003c/li\u003e\u003cli\u003e A list of separate command line arguments to the program\n\u003c/li\u003e\u003cli\u003e A string to pass on the standard input to the program.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Command",
          "name": "readProcess",
          "package": "Command",
          "signature": "FilePath-\u003e [String]-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "readProcess forks an external process reads its standard output strictly blocking until the process terminates and returns the output string Output is returned strictly so this is not suitable for interactive applications This function throws an IOError if the process ExitCode is anything other than ExitSuccess Users of this function should compile with threaded if they want other Haskell threads to keep running while waiting on the result of readProcess readProcess date Thu Feb PST The arguments are The command to run which must be in the PATH or an absolute path list of separate command line arguments to the program string to pass on the standard input to the program",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "readProcess",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO String",
          "package": "Command",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:readProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadProcessWithExitCode creates an external process, reads its\n standard output and standard error strictly, waits until the process\n terminates, and then returns the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e of the process,\n the standard output, and the standard error.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ereadProcess\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadProcessWithExitCode\u003c/a\u003e\u003c/code\u003e are fairly simple wrappers\n around \u003ccode\u003ecreateProcess\u003c/code\u003e.  Constructing variants of these functions is\n quite easy: follow the link to the source code to see how\n \u003ccode\u003ereadProcess\u003c/code\u003e is implemented.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "readProcessWithExitCode",
          "package": "Command",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e IO (ExitCode, String, String)",
          "source": "src/System-Command.html#readProcessWithExitCode",
          "type": "function"
        },
        "index": {
          "description": "readProcessWithExitCode creates an external process reads its standard output and standard error strictly waits until the process terminates and then returns the ExitCode of the process the standard output and the standard error readProcess and readProcessWithExitCode are fairly simple wrappers around createProcess Constructing variants of these functions is quite easy follow the link to the source code to see how readProcess is implemented",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "readProcessWithExitCode",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eIO(ExitCode,String,String)",
          "package": "Command",
          "partial": "Process With Exit Code",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eIO(ExitCode,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:readProcessWithExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command using the shell.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "runCommand",
          "package": "Command",
          "signature": "String -\u003e IO ProcessHandle",
          "type": "function"
        },
        "index": {
          "description": "Runs command using the shell",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "runCommand",
          "normalized": "String-\u003eIO ProcessHandle",
          "package": "Command",
          "partial": "Command",
          "signature": "String-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:runCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the structure of actions stopping at the first failure.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "runExitCodes",
          "package": "Command",
          "signature": "f (m ExitCode) -\u003e m ExitCode",
          "source": "src/System-Command.html#runExitCodes",
          "type": "function"
        },
        "index": {
          "description": "Run the structure of actions stopping at the first failure",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "runExitCodes",
          "normalized": "a(b ExitCode)-\u003eb ExitCode",
          "package": "Command",
          "partial": "Exit Codes",
          "signature": "f(m ExitCode)-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:runExitCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a command using the shell, and returns \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es that may\n     be used to communicate with the process via its \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e,\n     and \u003ccode\u003estderr\u003c/code\u003e respectively. The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es are initially in binary\n     mode; if you need them to be in text mode then use \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "runInteractiveCommand",
          "package": "Command",
          "signature": "String -\u003e IO (Handle, Handle, Handle, ProcessHandle)",
          "type": "function"
        },
        "index": {
          "description": "Runs command using the shell and returns Handle that may be used to communicate with the process via its stdin stdout and stderr respectively The Handle are initially in binary mode if you need them to be in text mode then use hSetBinaryMode",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "runInteractiveCommand",
          "normalized": "String-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "package": "Command",
          "partial": "Interactive Command",
          "signature": "String-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:runInteractiveCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a raw command, and returns \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es that may be used to communicate\n     with the process via its \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003eFor example, to start a process and feed a string to its stdin:\n\u003c/p\u003e\u003cpre\u003e   (inp,out,err,pid) \u003c- runInteractiveProcess \"...\"\n   forkIO (hPutStr inp str)\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es are initially in binary mode; if you need them to be\n    in text mode then use \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "runInteractiveProcess",
          "package": "Command",
          "signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e IO (Handle, Handle, Handle, ProcessHandle)",
          "type": "function"
        },
        "index": {
          "description": "Runs raw command and returns Handle that may be used to communicate with the process via its stdin stdout and stderr respectively For example to start process and feed string to its stdin inp out err pid runInteractiveProcess forkIO hPutStr inp str The Handle are initially in binary mode if you need them to be in text mode then use hSetBinaryMode",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "runInteractiveProcess",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "package": "Command",
          "partial": "Interactive Process",
          "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:runInteractiveProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a raw command, optionally specifying \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es from which to\n     take the \u003ccode\u003estdin\u003c/code\u003e, \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e channels for the new\n     process (otherwise these handles are inherited from the current\n     process).\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es passed to \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e are placed immediately in the \n     closed state.\n\u003c/p\u003e\u003cp\u003eNote: consider using the more general \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e instead of\n     \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "runProcess",
          "package": "Command",
          "signature": "FilePath-\u003e [String]-\u003e Maybe FilePath-\u003e Maybe [(String, String)]-\u003e Maybe Handle-\u003e Maybe Handle-\u003e Maybe Handle-\u003e IO ProcessHandle",
          "type": "function"
        },
        "index": {
          "description": "Runs raw command optionally specifying Handle from which to take the stdin stdout and stderr channels for the new process otherwise these handles are inherited from the current process Any Handle passed to runProcess are placed immediately in the closed state Note consider using the more general createProcess instead of runProcess",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "runProcess",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eMaybe Handle-\u003eMaybe Handle-\u003eMaybe Handle-\u003eIO ProcessHandle",
          "package": "Command",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eMaybe FilePath-\u003eMaybe[(String,String)]-\u003eMaybe Handle-\u003eMaybe Handle-\u003eMaybe Handle-\u003eIO ProcessHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e record for passing to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e,\n representing a command to be passed to the shell.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "shell",
          "package": "Command",
          "signature": "String -\u003e CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "Construct CreateProcess record for passing to createProcess representing command to be passed to the shell",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "shell",
          "normalized": "String-\u003eCreateProcess",
          "package": "Command",
          "signature": "String-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stderr\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "std_err",
          "package": "Command",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stderr",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "std_err",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:std_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdin\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "std_in",
          "package": "Command",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdin",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "std_in",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:std_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to determine stdout\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "std_out",
          "package": "Command",
          "signature": "StdStream",
          "type": "function"
        },
        "index": {
          "description": "How to determine stdout",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "std_out",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:std_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a process result with the value \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "success",
          "package": "Command",
          "signature": "ExitCode",
          "source": "src/System-Command.html#success",
          "type": "function"
        },
        "index": {
          "description": "Construct process result with the value",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "success",
          "package": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003esystem cmd\u003c/code\u003e returns the exit code produced when the\n operating system runs the shell command \u003ccode\u003ecmd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis computation may fail with\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ePermissionDenied\u003c/code\u003e: The process has insufficient privileges to\n      perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eResourceExhausted\u003c/code\u003e: Insufficient resources are available to\n      perform the operation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eUnsupportedOperation\u003c/code\u003e: The implementation does not support\n      system calls.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn Windows, \u003ccode\u003e\u003ca\u003esystem\u003c/a\u003e\u003c/code\u003e passes the command to the Windows command\n interpreter (\u003ccode\u003eCMD.EXE\u003c/code\u003e or \u003ccode\u003eCOMMAND.COM\u003c/code\u003e), hence Unixy shell tricks\n will not work.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "system",
          "package": "Command",
          "signature": "String -\u003e IO ExitCode",
          "source": "src/System-Command.html#system",
          "type": "function"
        },
        "index": {
          "description": "Computation system cmd returns the exit code produced when the operating system runs the shell command cmd This computation may fail with PermissionDenied The process has insufficient privileges to perform the operation ResourceExhausted Insufficient resources are available to perform the operation UnsupportedOperation The implementation does not support system calls On Windows system passes the command to the Windows command interpreter CMD.EXE or COMMAND.COM hence Unixy shell tricks will not work",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "system",
          "normalized": "String-\u003eIO ExitCode",
          "package": "Command",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to terminate the specified process.  This function should\n not be used under normal circumstances - no guarantees are given regarding\n how cleanly the process is terminated.  To check whether the process\n has indeed terminated, use \u003ccode\u003e\u003ca\u003egetProcessExitCode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Unix systems, \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e sends the process the SIGTERM signal.\n On Windows systems, the Win32 \u003ccode\u003eTerminateProcess\u003c/code\u003e function is called, passing\n an exit code of 1.\n\u003c/p\u003e\u003cp\u003eNote: on Windows, if the process was a shell command created by\n \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eshell\u003c/a\u003e\u003c/code\u003e, or created by \u003ccode\u003e\u003ca\u003erunCommand\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003erunInteractiveCommand\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e will only\n terminate the shell, not the command itself.  On Unix systems, both\n processes are in a process group and will be terminated together.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "terminateProcess",
          "package": "Command",
          "signature": "ProcessHandle -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Attempts to terminate the specified process This function should not be used under normal circumstances no guarantees are given regarding how cleanly the process is terminated To check whether the process has indeed terminated use getProcessExitCode On Unix systems terminateProcess sends the process the SIGTERM signal On Windows systems the Win32 TerminateProcess function is called passing an exit code of Note on Windows if the process was shell command created by createProcess with shell or created by runCommand or runInteractiveCommand then terminateProcess will only terminate the shell not the command itself On Unix systems both processes are in process group and will be terminated together",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "terminateProcess",
          "normalized": "ProcessHandle-\u003eIO()",
          "package": "Command",
          "partial": "Process",
          "signature": "ProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:terminateProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the structure of actions stopping at the first failure.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "traverseExitCodes",
          "package": "Command",
          "signature": "(a -\u003e m ExitCode) -\u003e f a -\u003e m ExitCode",
          "source": "src/System-Command.html#traverseExitCodes",
          "type": "function"
        },
        "index": {
          "description": "Traverse the structure of actions stopping at the first failure",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "traverseExitCodes",
          "normalized": "(a-\u003eb ExitCode)-\u003ec a-\u003eb ExitCode",
          "package": "Command",
          "partial": "Exit Codes",
          "signature": "(a-\u003em ExitCode)-\u003ef a-\u003em ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:traverseExitCodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the specified process to terminate, and returns its exit code.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "waitForProcess",
          "package": "Command",
          "signature": "ProcessHandle -\u003e IO ExitCode",
          "source": "src/System-Command.html#waitForProcess",
          "type": "function"
        },
        "index": {
          "description": "Waits for the specified process to terminate and returns its exit code",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "waitForProcess",
          "normalized": "ProcessHandle-\u003eIO ExitCode",
          "package": "Command",
          "partial": "For Process",
          "signature": "ProcessHandle-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Command/docs/System-Command.html#v:waitForProcess"
      }
    }
  ]
]