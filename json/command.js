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
        "word": "command"
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
          "package": "command",
          "source": "src/System-Command.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Command",
          "package": "command",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions passed to \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e to control how processes are executed.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "CmdOption",
          "package": "command",
          "source": "src/System-Command.html#CmdOption",
          "type": "data"
        },
        "index": {
          "description": "Options passed to command or cmd to control how processes are executed",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CmdOption",
          "package": "command",
          "partial": "Cmd Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#t:CmdOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for specifying what results you want to collect from a process.\n   Values are formed of \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e and tuples of those.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "CmdResult",
          "package": "command",
          "source": "src/System-Command.html#CmdResult",
          "type": "class"
        },
        "index": {
          "description": "class for specifying what results you want to collect from process Values are formed of Stdout Stderr Exit and tuples of those",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "CmdResult",
          "package": "command",
          "partial": "Cmd Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#t:CmdResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e of the process.\n   If you do not collect the exit code, any \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e will cause an exception.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Exit",
          "package": "command",
          "source": "src/System-Command.html#Exit",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the ExitCode of the process If you do not collect the exit code any ExitFailure will cause an exception",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Exit",
          "package": "command",
          "partial": "Exit",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#t:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estderr\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estderr\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Stderr",
          "package": "command",
          "source": "src/System-Command.html#Stderr",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stderr of the process If you are collecting the stderr it will not be echoed to the terminal unless you include EchoStderr",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Stderr",
          "package": "command",
          "partial": "Stderr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#t:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the \u003ccode\u003estdout\u003c/code\u003e of the process.\n   If you are collecting the \u003ccode\u003estdout\u003c/code\u003e, it will not be echoed to the terminal, unless you include \u003ccode\u003e\u003ca\u003eEchoStdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Stdout",
          "package": "command",
          "source": "src/System-Command.html#Stdout",
          "type": "newtype"
        },
        "index": {
          "description": "Collect the stdout of the process If you are collecting the stdout it will not be echoed to the terminal unless you include EchoStdout",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Stdout",
          "package": "command",
          "partial": "Stdout",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#t:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat the \u003ccode\u003estdin\u003c/code\u003e/\u003ccode\u003estdout\u003c/code\u003e/\u003ccode\u003estderr\u003c/code\u003e messages as binary. By default streams use text encoding.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "BinaryPipes",
          "package": "command",
          "signature": "BinaryPipes",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Treat the stdin stdout stderr messages as binary By default streams use text encoding",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "BinaryPipes",
          "package": "command",
          "partial": "Binary Pipes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:BinaryPipes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current directory in the spawned process. By default uses this processes current directory.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Cwd",
          "package": "command",
          "signature": "Cwd FilePath",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Change the current directory in the spawned process By default uses this processes current directory",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Cwd",
          "package": "command",
          "partial": "Cwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Cwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I echo the \u003ccode\u003estderr\u003c/code\u003e? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e unless a \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e result is required.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "EchoStderr",
          "package": "command",
          "signature": "EchoStderr Bool",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Should echo the stderr Defaults to True unless Stderr result is required",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "EchoStderr",
          "package": "command",
          "partial": "Echo Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:EchoStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I echo the \u003ccode\u003estdout\u003c/code\u003e? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e unless a \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e result is required.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "EchoStdout",
          "package": "command",
          "signature": "EchoStdout Bool",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Should echo the stdout Defaults to True unless Stdout result is required",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "EchoStdout",
          "package": "command",
          "partial": "Echo Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:EchoStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the environment variables in the spawned process. By default uses this processes environment.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Env",
          "package": "command",
          "signature": "Env [(String, String)]",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Change the environment variables in the spawned process By default uses this processes environment",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Env",
          "normalized": "Env[(String,String)]",
          "package": "command",
          "partial": "Env",
          "signature": "Env[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "Exit",
          "package": "command",
          "signature": "Exit",
          "source": "src/System-Command.html#Exit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Exit",
          "package": "command",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass the command to the shell without escaping - any arguments will be joined with spaces. By default arguments are escaped properly.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Shell",
          "package": "command",
          "signature": "Shell",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Pass the command to the shell without escaping any arguments will be joined with spaces By default arguments are escaped properly",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Shell",
          "package": "command",
          "partial": "Shell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "Stderr",
          "package": "command",
          "signature": "Stderr",
          "source": "src/System-Command.html#Stderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Stderr",
          "package": "command",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven as the \u003ccode\u003estdin\u003c/code\u003e of the spawned process. By default no \u003ccode\u003estdin\u003c/code\u003e is given.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Stdin",
          "package": "command",
          "signature": "Stdin String",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Given as the stdin of the spawned process By default no stdin is given",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Stdin",
          "package": "command",
          "partial": "Stdin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Stdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "Stdout",
          "package": "command",
          "signature": "Stdout",
          "source": "src/System-Command.html#Stdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Stdout",
          "package": "command",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName to use with \u003ccode\u003etraced\u003c/code\u003e, or \u003ccode\u003e\"\"\u003c/code\u003e for no tracing. By default traces using the name of the executable.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "Traced",
          "package": "command",
          "signature": "Traced String",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Name to use with traced or for no tracing By default traces using the name of the executable",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "Traced",
          "package": "command",
          "partial": "Traced",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:Traced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould I include the \u003ccode\u003estderr\u003c/code\u003e in the exception if the command fails? Defaults to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "WithStderr",
          "package": "command",
          "signature": "WithStderr Bool",
          "source": "src/System-Command.html#CmdOption",
          "type": "function"
        },
        "index": {
          "description": "Should include the stderr in the exception if the command fails Defaults to True",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "WithStderr",
          "package": "command",
          "partial": "With Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:WithStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable arity version of \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eString\u003c/code\u003e arguments are treated as whitespace separated arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e[String]\u003c/code\u003e arguments are treated as literal arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e arguments are used as options.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo take the examples from \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n () \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c myfile.c\"                                  -- compile a file, throwing an exception on failure\n \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c\" [myfile]                              -- run a command, recording the exit code\n (\u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e err) \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -c myfile.c\"                -- run a command, recording the exit code and error output\n \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e out \u003c- \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e \"gcc -MM myfile.c\"                         -- run a command, recording the output\n \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCwd\u003c/a\u003e\u003c/code\u003e \"generated\") \"gcc -c\" [myfile] :: \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e ()         -- run a command in a directory\n\u003c/pre\u003e\u003cp\u003eWhen passing file arguments we use \u003ccode\u003e[myfile]\u003c/code\u003e so that if the \u003ccode\u003emyfile\u003c/code\u003e variable contains spaces they are properly escaped.\n\u003c/p\u003e\u003cp\u003eIf you use \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003edo\u003c/code\u003e block and do not use the result, you may get a compile-time error about being\n   unable to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e. To avoid this error, bind the result to \u003ccode\u003e()\u003c/code\u003e, or include a type signature.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "cmd",
          "package": "command",
          "signature": "args :-\u003e IO r",
          "source": "src/System-Command.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "variable arity version of command String arguments are treated as whitespace separated arguments String arguments are treated as literal arguments CmdOption arguments are used as options To take the examples from command cmd gcc myfile.c compile file throwing an exception on failure Exit cmd gcc myfile run command recording the exit code Exit Stderr err cmd gcc myfile.c run command recording the exit code and error output Stdout out cmd gcc MM myfile.c run command recording the output cmd Cwd generated gcc myfile IO run command in directory When passing file arguments we use myfile so that if the myfile variable contains spaces they are properly escaped If you use cmd inside do block and do not use the result you may get compile-time error about being unable to deduce CmdResult To avoid this error bind the result to or include type signature",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "cmd",
          "normalized": "a-\u003eIO b",
          "package": "command",
          "signature": "args-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a system command. Before running \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e make sure you \u003ccode\u003e\u003ca\u003eneed\u003c/a\u003e\u003c/code\u003e any files\n   that are required by the command.\n\u003c/p\u003e\u003cp\u003eThis function takes a list of options (often just \u003ccode\u003e[]\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003eCmdOption\u003c/a\u003e\u003c/code\u003e for the available\n   options), the name of the executable (either a full name, or a program on the \u003ccode\u003e$PATH\u003c/code\u003e) and\n   a list of arguments. The result is often \u003ccode\u003e()\u003c/code\u003e, but can be a tuple containg any of \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e. Some examples:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",\"myfile.c\"]                          -- compile a file, throwing an exception on failure\n \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",myfile]                     -- run a command, recording the exit code\n (\u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e c, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e err) \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-c\",\"myfile.c\"]   -- run a command, recording the exit code and error output\n \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e out \u003c- \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e [] \"gcc\" [\"-MM\",\"myfile.c\"]            -- run a command, recording the output\n \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e [\u003ccode\u003e\u003ca\u003eCwd\u003c/a\u003e\u003c/code\u003e \"generated\"] \"gcc\" [\"-c\",myfile]               -- run a command in a directory\n\u003c/pre\u003e\u003cp\u003eUnless you retrieve the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003eExit\u003c/a\u003e\u003c/code\u003e, any \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e will throw an error, including\n   the \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e in the exception message. If you capture the \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, that stream will not be echoed to the console,\n   unless you use the option \u003ccode\u003e\u003ca\u003eEchoStdout\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEchoStderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you use \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e inside a \u003ccode\u003edo\u003c/code\u003e block and do not use the result, you may get a compile-time error about being\n   unable to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e. To avoid this error, use \u003ccode\u003e\u003ca\u003ecommand_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "command",
          "package": "command",
          "signature": "[CmdOption] -\u003e String -\u003e [String] -\u003e IO r",
          "source": "src/System-Command.html#command",
          "type": "function"
        },
        "index": {
          "description": "Execute system command Before running command make sure you need any files that are required by the command This function takes list of options often just see CmdOption for the available options the name of the executable either full name or program on the PATH and list of arguments The result is often but can be tuple containg any of Stdout Stderr and Exit Some examples command gcc myfile.c compile file throwing an exception on failure Exit command gcc myfile run command recording the exit code Exit Stderr err command gcc myfile.c run command recording the exit code and error output Stdout out command gcc MM myfile.c run command recording the output command Cwd generated gcc myfile run command in directory Unless you retrieve the ExitCode using Exit any ExitFailure will throw an error including the Stderr in the exception message If you capture the Stdout or Stderr that stream will not be echoed to the console unless you use the option EchoStdout or EchoStderr If you use command inside do block and do not use the result you may get compile-time error about being unable to deduce CmdResult To avoid this error use command",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "command",
          "normalized": "[CmdOption]-\u003eString-\u003e[String]-\u003eIO a",
          "package": "command",
          "signature": "[CmdOption]-\u003eString-\u003e[String]-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecommand\u003c/a\u003e\u003c/code\u003e where you do not require any results, used to avoid errors about being unable\n   to deduce \u003ccode\u003e\u003ca\u003eCmdResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Command",
          "name": "command_",
          "package": "command",
          "signature": "[CmdOption] -\u003e String -\u003e [String] -\u003e IO ()",
          "source": "src/System-Command.html#command_",
          "type": "function"
        },
        "index": {
          "description": "version of command where you do not require any results used to avoid errors about being unable to deduce CmdResult",
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "command_",
          "normalized": "[CmdOption]-\u003eString-\u003e[String]-\u003eIO()",
          "package": "command",
          "signature": "[CmdOption]-\u003eString-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:command_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "fromExit",
          "package": "command",
          "signature": "ExitCode",
          "source": "src/System-Command.html#Exit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "fromExit",
          "package": "command",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:fromExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "fromStderr",
          "package": "command",
          "signature": "String",
          "source": "src/System-Command.html#Stderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "fromStderr",
          "package": "command",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:fromStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Command",
          "name": "fromStdout",
          "package": "command",
          "signature": "String",
          "source": "src/System-Command.html#Stdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Command",
          "module": "System.Command",
          "name": "fromStdout",
          "package": "command",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/command/docs/System-Command.html#v:fromStdout"
      }
    }
  ]
]