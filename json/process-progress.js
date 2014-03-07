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
        "word": "process-progress"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.EnvPlus",
          "name": "EnvPlus",
          "package": "process-progress",
          "source": "src/System-Posix-EnvPlus.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix EnvPlus",
          "module": "System.Posix.EnvPlus",
          "name": "EnvPlus",
          "package": "process-progress",
          "partial": "Env Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Posix-EnvPlus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of Posix setEnv/unSetEnv.\n\u003c/p\u003e",
          "module": "System.Posix.EnvPlus",
          "name": "modifyEnv",
          "package": "process-progress",
          "signature": "String -\u003e (Maybe String -\u003e Maybe String) -\u003e IO ()",
          "source": "src/System-Posix-EnvPlus.html#modifyEnv",
          "type": "function"
        },
        "index": {
          "description": "Generalization of Posix setEnv unSetEnv",
          "hierarchy": "System Posix EnvPlus",
          "module": "System.Posix.EnvPlus",
          "name": "modifyEnv",
          "normalized": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eIO()",
          "package": "process-progress",
          "partial": "Env",
          "signature": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Posix-EnvPlus.html#v:modifyEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e`Functions to run a process and manage the type and amount of output\n it generates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process.Progress",
          "name": "Progress",
          "package": "process-progress",
          "source": "src/System-Process-Progress.html",
          "type": "module"
        },
        "index": {
          "description": "Functions to run process and manage the type and amount of output it generates",
          "hierarchy": "System Process Progress",
          "module": "System.Process.Progress",
          "name": "Progress",
          "package": "process-progress",
          "partial": "Progress",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Progress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadProcessChunks\u003c/a\u003e\u003c/code\u003e function is a process reader that returns\n a list (stream) of \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e, which represent chunks of text read\n from \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e code, or an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e.  This\n has the advantage of preserving the order in which these things\n appeared.  The \u003ccode\u003e\u003ca\u003efoldOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldOutputsL\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efoldOutputsR\u003c/a\u003e\u003c/code\u003e\n functions can be used to process the output stream.  The output\n text can be any \u003ccode\u003e\u003ca\u003eNonBlocking\u003c/a\u003e\u003c/code\u003e instance, which needs to be implemented\n using a non-blocking read function like \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process.Read.Chunks",
          "name": "Chunks",
          "package": "process-progress",
          "source": "src/System-Process-Read-Chunks.html",
          "type": "module"
        },
        "index": {
          "description": "The readProcessChunks function is process reader that returns list stream of Output which represent chunks of text read from Stdout Stderr Result code or an Exception This has the advantage of preserving the order in which these things appeared The foldOutput foldOutputsL and foldOutputsR functions can be used to process the output stream The output text can be any NonBlocking instance which needs to be implemented using non-blocking read function like hGetSome",
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Chunks",
          "package": "process-progress",
          "partial": "Chunks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types which can also be used by \u003ccode\u003e\u003ca\u003ereadProcessChunks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Process.Read.Chunks",
          "name": "NonBlocking",
          "package": "process-progress",
          "source": "src/System-Process-Read-Chunks.html#NonBlocking",
          "type": "class"
        },
        "index": {
          "description": "Class of types which can also be used by readProcessChunks",
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "NonBlocking",
          "package": "process-progress",
          "partial": "Non Blocking",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#t:NonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "Output",
          "package": "process-progress",
          "source": "src/System-Process-Read-Chunks.html#Output",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Output",
          "package": "process-progress",
          "partial": "Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "Exception",
          "package": "process-progress",
          "signature": "Exception IOError",
          "source": "src/System-Process-Read-Chunks.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Exception",
          "package": "process-progress",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "Result",
          "package": "process-progress",
          "signature": "Result ExitCode",
          "source": "src/System-Process-Read-Chunks.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Result",
          "package": "process-progress",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "Stderr",
          "package": "process-progress",
          "signature": "Stderr a",
          "source": "src/System-Process-Read-Chunks.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Stderr",
          "package": "process-progress",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "Stdout",
          "package": "process-progress",
          "signature": "Stdout a",
          "source": "src/System-Process-Read-Chunks.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "Stdout",
          "package": "process-progress",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold function for the Output type, dispatches the value\n depending on the constructor.\n\u003c/p\u003e",
          "module": "System.Process.Read.Chunks",
          "name": "foldOutput",
          "package": "process-progress",
          "signature": "(ExitCode -\u003e b) -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e (IOError -\u003e b) -\u003e Output a -\u003e b",
          "source": "src/System-Process-Read-Chunks.html#foldOutput",
          "type": "function"
        },
        "index": {
          "description": "fold function for the Output type dispatches the value depending on the constructor",
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "foldOutput",
          "normalized": "(ExitCode-\u003ea)-\u003e(b-\u003ea)-\u003e(b-\u003ea)-\u003e(IOError-\u003ea)-\u003eOutput b-\u003ea",
          "package": "process-progress",
          "partial": "Output",
          "signature": "(ExitCode-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(IOError-\u003eb)-\u003eOutput a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "foldOutputsL",
          "package": "process-progress",
          "signature": "(b -\u003e ExitCode -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e IOError -\u003e b) -\u003e b -\u003e [Output a] -\u003e b",
          "source": "src/System-Process-Read-Chunks.html#foldOutputsL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "foldOutputsL",
          "normalized": "(a-\u003eExitCode-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eIOError-\u003ea)-\u003ea-\u003e[Output b]-\u003ea",
          "package": "process-progress",
          "partial": "Outputs",
          "signature": "(b-\u003eExitCode-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003eIOError-\u003eb)-\u003eb-\u003e[Output a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutputsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "foldOutputsR",
          "package": "process-progress",
          "signature": "(b -\u003e ExitCode -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e IOError -\u003e b) -\u003e b -\u003e [Output a] -\u003e b",
          "source": "src/System-Process-Read-Chunks.html#foldOutputsR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "foldOutputsR",
          "normalized": "(a-\u003eExitCode-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eIOError-\u003ea)-\u003ea-\u003e[Output b]-\u003ea",
          "package": "process-progress",
          "partial": "Outputs",
          "signature": "(b-\u003eExitCode-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003eIOError-\u003eb)-\u003eb-\u003e[Output a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutputsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "hGetSome",
          "package": "process-progress",
          "signature": "Handle -\u003e LengthType a -\u003e IO a",
          "source": "src/System-Process-Read-Chunks.html#hGetSome",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "hGetSome",
          "normalized": "Handle-\u003eLengthType a-\u003eIO a",
          "package": "process-progress",
          "partial": "Get Some",
          "signature": "Handle-\u003eLengthType a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a process runner which (at the cost of a busy loop) gives\n you the chunks of text read from stdout and stderr interleaved in\n the order they were written, along with any ResourceVanished\n exxception that might occur.  Its interface is similar to\n \u003ccode\u003e\u003ca\u003ereadModifiedProcessWith\u003c/a\u003e\u003c/code\u003e, though the\n implementation is somewhat alarming.\n\u003c/p\u003e",
          "module": "System.Process.Read.Chunks",
          "name": "readProcessChunks",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Chunks.html#readProcessChunks",
          "type": "function"
        },
        "index": {
          "description": "This is process runner which at the cost of busy loop gives you the chunks of text read from stdout and stderr interleaved in the order they were written along with any ResourceVanished exxception that might occur Its interface is similar to readModifiedProcessWith though the implementation is somewhat alarming",
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "readProcessChunks",
          "normalized": "CreateProcess-\u003ea-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Process Chunks",
          "signature": "CreateProcess-\u003ea-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:readProcessChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA test version of readProcessChunks.\n Pipes code here: http:\u003cem/\u003ehpaste.org/76631\n\u003c/p\u003e",
          "module": "System.Process.Read.Chunks",
          "name": "readProcessChunks'",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Chunks.html#readProcessChunks%27",
          "type": "function"
        },
        "index": {
          "description": "test version of readProcessChunks Pipes code here http hpaste.org",
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "readProcessChunks'",
          "normalized": "CreateProcess-\u003ea-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Process Chunks'",
          "signature": "CreateProcess-\u003ea-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:readProcessChunks-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Chunks",
          "name": "toChunks",
          "package": "process-progress",
          "signature": "a -\u003e [a]",
          "source": "src/System-Process-Read-Chunks.html#toChunks",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Process Read Chunks",
          "module": "System.Process.Read.Chunks",
          "name": "toChunks",
          "normalized": "a-\u003e[a]",
          "package": "process-progress",
          "partial": "Chunks",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:toChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome functions brought over from my obsolete progress packages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process.Read.Compat",
          "name": "Compat",
          "package": "process-progress",
          "source": "src/System-Process-Read-Compat.html",
          "type": "module"
        },
        "index": {
          "description": "Some functions brought over from my obsolete progress packages",
          "hierarchy": "System Process Read Compat",
          "module": "System.Process.Read.Compat",
          "name": "Compat",
          "package": "process-progress",
          "partial": "Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a description of a command and then run it.\n\u003c/p\u003e",
          "module": "System.Process.Read.Compat",
          "name": "echo",
          "package": "process-progress",
          "signature": "CmdSpec -\u003e IO () -\u003e IO ()",
          "source": "src/System-Process-Read-Compat.html#echo",
          "type": "function"
        },
        "index": {
          "description": "Output description of command and then run it",
          "hierarchy": "System Process Read Compat",
          "module": "System.Process.Read.Compat",
          "name": "echo",
          "normalized": "CmdSpec-\u003eIO()-\u003eIO()",
          "package": "process-progress",
          "signature": "CmdSpec-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the result code of an output stream, throw an error if\n there isn't exactly one of them.\n\u003c/p\u003e",
          "module": "System.Process.Read.Compat",
          "name": "oneResult",
          "package": "process-progress",
          "signature": "[Output a] -\u003e ExitCode",
          "source": "src/System-Process-Read-Compat.html#oneResult",
          "type": "function"
        },
        "index": {
          "description": "Extract the result code of an output stream throw an error if there isn exactly one of them",
          "hierarchy": "System Process Read Compat",
          "module": "System.Process.Read.Compat",
          "name": "oneResult",
          "normalized": "[Output a]-\u003eExitCode",
          "package": "process-progress",
          "partial": "Result",
          "signature": "[Output a]-\u003eExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:oneResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a task and return the elapsed time along with its result.\n\u003c/p\u003e",
          "module": "System.Process.Read.Compat",
          "name": "timeTask",
          "package": "process-progress",
          "signature": "IO a -\u003e IO (a, NominalDiffTime)",
          "source": "src/System-Process-Read-Compat.html#timeTask",
          "type": "function"
        },
        "index": {
          "description": "Run task and return the elapsed time along with its result",
          "hierarchy": "System Process Read Compat",
          "module": "System.Process.Read.Compat",
          "name": "timeTask",
          "normalized": "IO a-\u003eIO(a,NominalDiffTime)",
          "package": "process-progress",
          "partial": "Task",
          "signature": "IO a-\u003eIO(a,NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:timeTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "Convenience",
          "package": "process-progress",
          "source": "src/System-Process-Read-Convenience.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "Convenience",
          "package": "process-progress",
          "partial": "Convenience",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "collectOutputs",
          "package": "process-progress",
          "signature": "[Output a] -\u003e ([ExitCode], a, a, [IOError])",
          "source": "src/System-Process-Read-Convenience.html#collectOutputs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "collectOutputs",
          "normalized": "[Output a]-\u003e([ExitCode],a,a,[IOError])",
          "package": "process-progress",
          "partial": "Outputs",
          "signature": "[Output a]-\u003e([ExitCode],a,a,[IOError])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:collectOutputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "discardExceptions",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#discardExceptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "discardExceptions",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Exceptions",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "discardOutput",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#discardOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "discardOutput",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Output",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "discardResult",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#discardResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "discardResult",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Result",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "discardStderr",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#discardStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "discardStderr",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Stderr",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "discardStdout",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#discardStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "discardStdout",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Stdout",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "doAll",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doAll",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "All",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "doException",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doException",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Exception",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI don't see much use for this.\n\u003c/p\u003e",
          "module": "System.Process.Read.Convenience",
          "name": "doExit",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doExit",
          "type": "function"
        },
        "index": {
          "description": "don see much use for this",
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doExit",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Exit",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "doOutput",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doOutput",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Output",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "doStderr",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doStderr",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Stderr",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "doStdout",
          "package": "process-progress",
          "signature": "[Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#doStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "doStdout",
          "normalized": "[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Stdout",
          "signature": "[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "dots",
          "package": "process-progress",
          "signature": "LengthType a -\u003e (LengthType a -\u003e IO ()) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#dots",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "dots",
          "normalized": "LengthType a-\u003e(LengthType a-\u003eIO())-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "signature": "LengthType a-\u003e(LengthType a-\u003eIO())-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:dots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "eMessage",
          "package": "process-progress",
          "signature": "String -\u003e a -\u003e m a",
          "source": "src/System-Process-Read-Convenience.html#eMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "eMessage",
          "normalized": "String-\u003ea-\u003eb a",
          "package": "process-progress",
          "partial": "Message",
          "signature": "String-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:eMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "eMessageLn",
          "package": "process-progress",
          "signature": "String -\u003e a -\u003e m a",
          "source": "src/System-Process-Read-Convenience.html#eMessageLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "eMessageLn",
          "normalized": "String-\u003ea-\u003eb a",
          "package": "process-progress",
          "partial": "Message Ln",
          "signature": "String-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:eMessageLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "ePutStr",
          "package": "process-progress",
          "signature": "String -\u003e m ()",
          "source": "src/System-Process-Read-Convenience.html#ePutStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "ePutStr",
          "normalized": "String-\u003ea()",
          "package": "process-progress",
          "partial": "Put Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:ePutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "ePutStrLn",
          "package": "process-progress",
          "signature": "String -\u003e m ()",
          "source": "src/System-Process-Read-Convenience.html#ePutStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "ePutStrLn",
          "normalized": "String-\u003ea()",
          "package": "process-progress",
          "partial": "Put Str Ln",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:ePutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldChars",
          "package": "process-progress",
          "signature": "(a -\u003e IO (Output a)) -\u003e (a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldChars",
          "normalized": "(a-\u003eIO(Output a))-\u003e(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Chars",
          "signature": "(a-\u003eIO(Output a))-\u003e(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldException",
          "package": "process-progress",
          "signature": "(IOError -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldException",
          "normalized": "(IOError-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Exception",
          "signature": "(IOError-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldFailure",
          "package": "process-progress",
          "signature": "(Int -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldFailure",
          "normalized": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Failure",
          "signature": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldFailure'",
          "package": "process-progress",
          "signature": "(Int -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldFailure%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldFailure'",
          "normalized": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Failure'",
          "signature": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldFailure-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldResult",
          "package": "process-progress",
          "signature": "(ExitCode -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldResult",
          "normalized": "(ExitCode-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Result",
          "signature": "(ExitCode-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldStderr",
          "package": "process-progress",
          "signature": "(a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldStderr",
          "normalized": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Stderr",
          "signature": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldStdout",
          "package": "process-progress",
          "signature": "(a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldStdout",
          "normalized": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Stdout",
          "signature": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "foldSuccess",
          "package": "process-progress",
          "signature": "IO (Output a) -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#foldSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "foldSuccess",
          "normalized": "IO(Output a)-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "partial": "Success",
          "signature": "IO(Output a)-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "isException",
          "package": "process-progress",
          "signature": "Output a -\u003e Bool",
          "source": "src/System-Process-Read-Convenience.html#isException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "isException",
          "normalized": "Output a-\u003eBool",
          "package": "process-progress",
          "partial": "Exception",
          "signature": "Output a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "isOutput",
          "package": "process-progress",
          "signature": "Output a -\u003e Bool",
          "source": "src/System-Process-Read-Convenience.html#isOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "isOutput",
          "normalized": "Output a-\u003eBool",
          "package": "process-progress",
          "partial": "Output",
          "signature": "Output a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "isResult",
          "package": "process-progress",
          "signature": "Output a -\u003e Bool",
          "source": "src/System-Process-Read-Convenience.html#isResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "isResult",
          "normalized": "Output a-\u003eBool",
          "package": "process-progress",
          "partial": "Result",
          "signature": "Output a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "isStderr",
          "package": "process-progress",
          "signature": "Output a -\u003e Bool",
          "source": "src/System-Process-Read-Convenience.html#isStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "isStderr",
          "normalized": "Output a-\u003eBool",
          "package": "process-progress",
          "partial": "Stderr",
          "signature": "Output a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "isStdout",
          "package": "process-progress",
          "signature": "Output a -\u003e Bool",
          "source": "src/System-Process-Read-Convenience.html#isStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "isStdout",
          "normalized": "Output a-\u003eBool",
          "package": "process-progress",
          "partial": "Stdout",
          "signature": "Output a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "keepExceptions",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [IOError]",
          "source": "src/System-Process-Read-Convenience.html#keepExceptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "keepExceptions",
          "normalized": "[Output a]-\u003e[IOError]",
          "package": "process-progress",
          "partial": "Exceptions",
          "signature": "[Output a]-\u003e[IOError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "keepOutput",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [a]",
          "source": "src/System-Process-Read-Convenience.html#keepOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "keepOutput",
          "normalized": "[Output a]-\u003e[a]",
          "package": "process-progress",
          "partial": "Output",
          "signature": "[Output a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "keepResult",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [ExitCode]",
          "source": "src/System-Process-Read-Convenience.html#keepResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "keepResult",
          "normalized": "[Output a]-\u003e[ExitCode]",
          "package": "process-progress",
          "partial": "Result",
          "signature": "[Output a]-\u003e[ExitCode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "keepStderr",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [a]",
          "source": "src/System-Process-Read-Convenience.html#keepStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "keepStderr",
          "normalized": "[Output a]-\u003e[a]",
          "package": "process-progress",
          "partial": "Stderr",
          "signature": "[Output a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "keepStdout",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [a]",
          "source": "src/System-Process-Read-Convenience.html#keepStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "keepStdout",
          "normalized": "[Output a]-\u003e[a]",
          "package": "process-progress",
          "partial": "Stdout",
          "signature": "[Output a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeException",
          "package": "process-progress",
          "signature": "(IOError -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mapMaybeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeException",
          "normalized": "(IOError-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Maybe Exception",
          "signature": "(IOError-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeResult",
          "package": "process-progress",
          "signature": "(ExitCode -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mapMaybeResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeResult",
          "normalized": "(ExitCode-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Maybe Result",
          "signature": "(ExitCode-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeStderr",
          "package": "process-progress",
          "signature": "(a -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mapMaybeStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeStderr",
          "normalized": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Maybe Stderr",
          "signature": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeStdout",
          "package": "process-progress",
          "signature": "(a -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mapMaybeStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mapMaybeStdout",
          "normalized": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "Maybe Stdout",
          "signature": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mergeToStderr",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mergeToStderr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mergeToStderr",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "To Stderr",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mergeToStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Convenience",
          "name": "mergeToStdout",
          "package": "process-progress",
          "signature": "[Output a] -\u003e [Output a]",
          "source": "src/System-Process-Read-Convenience.html#mergeToStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "mergeToStdout",
          "normalized": "[Output a]-\u003e[Output a]",
          "package": "process-progress",
          "partial": "To Stdout",
          "signature": "[Output a]-\u003e[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mergeToStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the stream with a prefix added at the beginning of each\n line of stdout and stderr.\n\u003c/p\u003e",
          "module": "System.Process.Read.Convenience",
          "name": "prefixed",
          "package": "process-progress",
          "signature": "a -\u003e a -\u003e [Output a] -\u003e IO [Output a]",
          "source": "src/System-Process-Read-Convenience.html#prefixed",
          "type": "function"
        },
        "index": {
          "description": "Output the stream with prefix added at the beginning of each line of stdout and stderr",
          "hierarchy": "System Process Read Convenience",
          "module": "System.Process.Read.Convenience",
          "name": "prefixed",
          "normalized": "a-\u003ea-\u003e[Output a]-\u003eIO[Output a]",
          "package": "process-progress",
          "signature": "a-\u003ea-\u003e[Output a]-\u003eIO[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:prefixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA perhaps over-engineered set of wrappers around\n readProcessChunks to run processes with a variety of echoing\n options and responses to failure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process.Read.Monad",
          "name": "Monad",
          "package": "process-progress",
          "source": "src/System-Process-Read-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "perhaps over-engineered set of wrappers around readProcessChunks to run processes with variety of echoing options and responses to failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "Monad",
          "package": "process-progress",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot output\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessD",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessD",
          "type": "function"
        },
        "index": {
          "description": "Dot output",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessD",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot output, exception on failure, echo on failure.  Note that\n runProcessVE isn't a useful option, you get the output twice.  VF\n makes more sense.\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessDE",
          "package": "process-progress",
          "signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessDE",
          "type": "function"
        },
        "index": {
          "description": "Dot output exception on failure echo on failure Note that runProcessVE isn useful option you get the output twice VF makes more sense",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessDE",
          "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process DE",
          "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot output and exception on failure\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessDF",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessDF",
          "type": "function"
        },
        "index": {
          "description": "Dot output and exception on failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessDF",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process DF",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line trace only.\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessQ",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessQ",
          "type": "function"
        },
        "index": {
          "description": "Command line trace only",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessQ",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException and echo on failure\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessQE",
          "package": "process-progress",
          "signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessQE",
          "type": "function"
        },
        "index": {
          "description": "Exception and echo on failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessQE",
          "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process QE",
          "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Monad",
          "name": "runProcessQF",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessQF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessQF",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process QF",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun silently\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessS",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessS",
          "type": "function"
        },
        "index": {
          "description": "Run silently",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessS",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException and echo on failure\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessSE",
          "package": "process-progress",
          "signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessSE",
          "type": "function"
        },
        "index": {
          "description": "Exception and echo on failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessSE",
          "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process SE",
          "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException on failure\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessSF",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessSF",
          "type": "function"
        },
        "index": {
          "description": "Exception on failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessSF",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process SF",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho output\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessV",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessV",
          "type": "function"
        },
        "index": {
          "description": "Echo output",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessV",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho output and exception on failure\n\u003c/p\u003e",
          "module": "System.Process.Read.Monad",
          "name": "runProcessVF",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e a -\u003e m [Output a]",
          "source": "src/System-Process-Read-Monad.html#runProcessVF",
          "type": "function"
        },
        "index": {
          "description": "Echo output and exception on failure",
          "hierarchy": "System Process Read Monad",
          "module": "System.Process.Read.Monad",
          "name": "runProcessVF",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process VF",
          "signature": "CreateProcess-\u003ea-\u003em[Output a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessVF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "Verbosity",
          "package": "process-progress",
          "source": "src/System-Process-Read-Verbosity.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "Verbosity",
          "package": "process-progress",
          "partial": "Verbosity",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "defaultVerbosity",
          "package": "process-progress",
          "signature": "Int",
          "source": "src/System-Process-Read-Verbosity.html#defaultVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "defaultVerbosity",
          "package": "process-progress",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:defaultVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "noisier",
          "package": "process-progress",
          "signature": "Int -\u003e m a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#noisier",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "noisier",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "process-progress",
          "signature": "Int-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:noisier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "qBracket",
          "package": "process-progress",
          "signature": "String -\u003e m a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#qBracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "qBracket",
          "normalized": "String-\u003ea b-\u003ea b",
          "package": "process-progress",
          "partial": "Bracket",
          "signature": "String-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "qMessage",
          "package": "process-progress",
          "signature": "String -\u003e a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#qMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "qMessage",
          "normalized": "String-\u003ea-\u003eb a",
          "package": "process-progress",
          "partial": "Message",
          "signature": "String-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "qMessageLn",
          "package": "process-progress",
          "signature": "String -\u003e a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#qMessageLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "qMessageLn",
          "normalized": "String-\u003ea-\u003eb a",
          "package": "process-progress",
          "partial": "Message Ln",
          "signature": "String-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qMessageLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "qPutStr",
          "package": "process-progress",
          "signature": "String -\u003e m ()",
          "source": "src/System-Process-Read-Verbosity.html#qPutStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "qPutStr",
          "normalized": "String-\u003ea()",
          "package": "process-progress",
          "partial": "Put Str",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "qPutStrLn",
          "package": "process-progress",
          "signature": "String -\u003e m ()",
          "source": "src/System-Process-Read-Verbosity.html#qPutStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "qPutStrLn",
          "normalized": "String-\u003ea()",
          "package": "process-progress",
          "partial": "Put Str Ln",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "quieter",
          "package": "process-progress",
          "signature": "Int -\u003e m a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#quieter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "quieter",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "process-progress",
          "signature": "Int-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:quieter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect from the runProcess* functions in Monad based on a verbosity level.\n\u003c/p\u003e",
          "module": "System.Process.Read.Verbosity",
          "name": "runProcess",
          "package": "process-progress",
          "signature": "CreateProcess -\u003e s -\u003e m [Output s]",
          "source": "src/System-Process-Read-Verbosity.html#runProcess",
          "type": "function"
        },
        "index": {
          "description": "Select from the runProcess functions in Monad based on verbosity level",
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "runProcess",
          "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "CreateProcess-\u003es-\u003em[Output s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e that throws an exception on failure.\n\u003c/p\u003e",
          "module": "System.Process.Read.Verbosity",
          "name": "runProcessF",
          "package": "process-progress",
          "signature": "Maybe (s, s) -\u003e CreateProcess -\u003e s -\u003e m [Output s]",
          "source": "src/System-Process-Read-Verbosity.html#runProcessF",
          "type": "function"
        },
        "index": {
          "description": "version of runProcess that throws an exception on failure",
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "runProcessF",
          "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
          "package": "process-progress",
          "partial": "Process",
          "signature": "Maybe(s,s)-\u003eCreateProcess-\u003es-\u003em[Output s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:runProcessF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "verbosity",
          "package": "process-progress",
          "signature": "m Int",
          "source": "src/System-Process-Read-Verbosity.html#verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "verbosity",
          "package": "process-progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Process.Read.Verbosity",
          "name": "withModifiedVerbosity",
          "package": "process-progress",
          "signature": "(Int -\u003e Int) -\u003e m a -\u003e m a",
          "source": "src/System-Process-Read-Verbosity.html#withModifiedVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Process Read Verbosity",
          "module": "System.Process.Read.Verbosity",
          "name": "withModifiedVerbosity",
          "normalized": "(Int-\u003eInt)-\u003ea b-\u003ea b",
          "package": "process-progress",
          "partial": "Modified Verbosity",
          "signature": "(Int-\u003eInt)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:withModifiedVerbosity"
      }
    }
  ]
]