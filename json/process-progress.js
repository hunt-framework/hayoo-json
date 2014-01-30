[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Posix-EnvPlus.html#",
      "description": {
        "fct-module": "System.Posix.EnvPlus",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-EnvPlus.html",
        "fct-type": "module",
        "title": "EnvPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix EnvPlus",
        "module": "System.Posix.EnvPlus",
        "name": "EnvPlus",
        "normalized": "",
        "package": "process-progress",
        "partial": "Env Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Posix-EnvPlus.html#v:modifyEnv",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of Posix setEnv/unSetEnv.\n\u003c/p\u003e",
        "fct-module": "System.Posix.EnvPlus",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e (Maybe String -\u003e Maybe String) -\u003e IO ()",
        "fct-source": "src/System-Posix-EnvPlus.html#modifyEnv",
        "fct-type": "function",
        "title": "modifyEnv"
      },
      "index": {
        "description": "Generalization of Posix setEnv unSetEnv",
        "hierarchy": "System Posix EnvPlus",
        "module": "System.Posix.EnvPlus",
        "name": "modifyEnv",
        "normalized": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eIO()",
        "package": "process-progress",
        "partial": "Env",
        "signature": "String-\u003e(Maybe String-\u003eMaybe String)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Progress.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e`Functions to run a process and manage the type and amount of output\n it generates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Process.Progress",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Progress.html",
        "fct-type": "module",
        "title": "Progress"
      },
      "index": {
        "description": "Functions to run process and manage the type and amount of output it generates",
        "hierarchy": "System Process Progress",
        "module": "System.Process.Progress",
        "name": "Progress",
        "normalized": "",
        "package": "process-progress",
        "partial": "Progress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadProcessChunks\u003c/a\u003e\u003c/code\u003e function is a process reader that returns\n a list (stream) of \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e, which represent chunks of text read\n from \u003ccode\u003e\u003ca\u003eStdout\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStderr\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e code, or an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e.  This\n has the advantage of preserving the order in which these things\n appeared.  The \u003ccode\u003e\u003ca\u003efoldOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldOutputsL\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efoldOutputsR\u003c/a\u003e\u003c/code\u003e\n functions can be used to process the output stream.  The output\n text can be any \u003ccode\u003e\u003ca\u003eNonBlocking\u003c/a\u003e\u003c/code\u003e instance, which needs to be implemented\n using a non-blocking read function like \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Read-Chunks.html",
        "fct-type": "module",
        "title": "Chunks"
      },
      "index": {
        "description": "The readProcessChunks function is process reader that returns list stream of Output which represent chunks of text read from Stdout Stderr Result code or an Exception This has the advantage of preserving the order in which these things appeared The foldOutput foldOutputsL and foldOutputsR functions can be used to process the output stream The output text can be any NonBlocking instance which needs to be implemented using non-blocking read function like hGetSome",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Chunks",
        "normalized": "",
        "package": "process-progress",
        "partial": "Chunks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#t:NonBlocking",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types which can also be used by \u003ccode\u003e\u003ca\u003ereadProcessChunks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "class",
        "fct-source": "src/System-Process-Read-Chunks.html#NonBlocking",
        "fct-type": "class",
        "title": "NonBlocking"
      },
      "index": {
        "description": "Class of types which can also be used by readProcessChunks",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "NonBlocking",
        "normalized": "",
        "package": "process-progress",
        "partial": "Non Blocking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#t:Output",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "data",
        "fct-source": "src/System-Process-Read-Chunks.html#Output",
        "fct-type": "data",
        "title": "Output"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Output",
        "normalized": "",
        "package": "process-progress",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Exception",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "Exception IOError",
        "fct-source": "src/System-Process-Read-Chunks.html#Output",
        "fct-type": "function",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Exception",
        "normalized": "",
        "package": "process-progress",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Result",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "Result ExitCode",
        "fct-source": "src/System-Process-Read-Chunks.html#Output",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Result",
        "normalized": "",
        "package": "process-progress",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Stderr",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "Stderr a",
        "fct-source": "src/System-Process-Read-Chunks.html#Output",
        "fct-type": "function",
        "title": "Stderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Stderr",
        "normalized": "",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:Stdout",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "Stdout a",
        "fct-source": "src/System-Process-Read-Chunks.html#Output",
        "fct-type": "function",
        "title": "Stdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "Stdout",
        "normalized": "",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutput",
      "description": {
        "fct-descr": "\u003cp\u003eA fold function for the Output type, dispatches the value\n depending on the constructor.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "(ExitCode -\u003e b) -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e (IOError -\u003e b) -\u003e Output a -\u003e b",
        "fct-source": "src/System-Process-Read-Chunks.html#foldOutput",
        "fct-type": "function",
        "title": "foldOutput"
      },
      "index": {
        "description": "fold function for the Output type dispatches the value depending on the constructor",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "foldOutput",
        "normalized": "(ExitCode-\u003ea)-\u003e(b-\u003ea)-\u003e(b-\u003ea)-\u003e(IOError-\u003ea)-\u003eOutput b-\u003ea",
        "package": "process-progress",
        "partial": "Output",
        "signature": "(ExitCode-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(IOError-\u003eb)-\u003eOutput a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutputsL",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "(b -\u003e ExitCode -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e IOError -\u003e b) -\u003e b -\u003e [Output a] -\u003e b",
        "fct-source": "src/System-Process-Read-Chunks.html#foldOutputsL",
        "fct-type": "function",
        "title": "foldOutputsL"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "foldOutputsL",
        "normalized": "(a-\u003eExitCode-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eIOError-\u003ea)-\u003ea-\u003e[Output b]-\u003ea",
        "package": "process-progress",
        "partial": "Outputs",
        "signature": "(b-\u003eExitCode-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003eIOError-\u003eb)-\u003eb-\u003e[Output a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:foldOutputsR",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "(b -\u003e ExitCode -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e (b -\u003e IOError -\u003e b) -\u003e b -\u003e [Output a] -\u003e b",
        "fct-source": "src/System-Process-Read-Chunks.html#foldOutputsR",
        "fct-type": "function",
        "title": "foldOutputsR"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "foldOutputsR",
        "normalized": "(a-\u003eExitCode-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003e(a-\u003eIOError-\u003ea)-\u003ea-\u003e[Output b]-\u003ea",
        "package": "process-progress",
        "partial": "Outputs",
        "signature": "(b-\u003eExitCode-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003e(b-\u003eIOError-\u003eb)-\u003eb-\u003e[Output a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:hGetSome",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "Handle -\u003e LengthType a -\u003e IO a",
        "fct-source": "src/System-Process-Read-Chunks.html#hGetSome",
        "fct-type": "method",
        "title": "hGetSome"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "hGetSome",
        "normalized": "Handle-\u003eLengthType a-\u003eIO a",
        "package": "process-progress",
        "partial": "Get Some",
        "signature": "Handle-\u003eLengthType a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:readProcessChunks",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a process runner which (at the cost of a busy loop) gives\n you the chunks of text read from stdout and stderr interleaved in\n the order they were written, along with any ResourceVanished\n exxception that might occur.  Its interface is similar to\n \u003ccode\u003e\u003ca\u003ereadModifiedProcessWith\u003c/a\u003e\u003c/code\u003e, though the\n implementation is somewhat alarming.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Chunks.html#readProcessChunks",
        "fct-type": "function",
        "title": "readProcessChunks"
      },
      "index": {
        "description": "This is process runner which at the cost of busy loop gives you the chunks of text read from stdout and stderr interleaved in the order they were written along with any ResourceVanished exxception that might occur Its interface is similar to readModifiedProcessWith though the implementation is somewhat alarming",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "readProcessChunks",
        "normalized": "CreateProcess-\u003ea-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Process Chunks",
        "signature": "CreateProcess-\u003ea-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:readProcessChunks-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA test version of readProcessChunks.\n Pipes code here: http:\u003cem/\u003ehpaste.org/76631\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Chunks.html#readProcessChunks%27",
        "fct-type": "function",
        "title": "readProcessChunks'"
      },
      "index": {
        "description": "test version of readProcessChunks Pipes code here http hpaste.org",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "readProcessChunks'",
        "normalized": "CreateProcess-\u003ea-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Process Chunks'",
        "signature": "CreateProcess-\u003ea-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Chunks.html#v:toChunks",
      "description": {
        "fct-module": "System.Process.Read.Chunks",
        "fct-package": "process-progress",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/System-Process-Read-Chunks.html#toChunks",
        "fct-type": "method",
        "title": "toChunks"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Chunks",
        "module": "System.Process.Read.Chunks",
        "name": "toChunks",
        "normalized": "a-\u003e[a]",
        "package": "process-progress",
        "partial": "Chunks",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome functions brought over from my obsolete progress packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Process.Read.Compat",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Read-Compat.html",
        "fct-type": "module",
        "title": "Compat"
      },
      "index": {
        "description": "Some functions brought over from my obsolete progress packages",
        "hierarchy": "System Process Read Compat",
        "module": "System.Process.Read.Compat",
        "name": "Compat",
        "normalized": "",
        "package": "process-progress",
        "partial": "Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:echo",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a description of a command and then run it.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Compat",
        "fct-package": "process-progress",
        "fct-signature": "CmdSpec -\u003e IO () -\u003e IO ()",
        "fct-source": "src/System-Process-Read-Compat.html#echo",
        "fct-type": "function",
        "title": "echo"
      },
      "index": {
        "description": "Output description of command and then run it",
        "hierarchy": "System Process Read Compat",
        "module": "System.Process.Read.Compat",
        "name": "echo",
        "normalized": "CmdSpec-\u003eIO()-\u003eIO()",
        "package": "process-progress",
        "partial": "",
        "signature": "CmdSpec-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:oneResult",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the result code of an output stream, throw an error if\n there isn't exactly one of them.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Compat",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e ExitCode",
        "fct-source": "src/System-Process-Read-Compat.html#oneResult",
        "fct-type": "function",
        "title": "oneResult"
      },
      "index": {
        "description": "Extract the result code of an output stream throw an error if there isn exactly one of them",
        "hierarchy": "System Process Read Compat",
        "module": "System.Process.Read.Compat",
        "name": "oneResult",
        "normalized": "[Output a]-\u003eExitCode",
        "package": "process-progress",
        "partial": "Result",
        "signature": "[Output a]-\u003eExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Compat.html#v:timeTask",
      "description": {
        "fct-descr": "\u003cp\u003eRun a task and return the elapsed time along with its result.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Compat",
        "fct-package": "process-progress",
        "fct-signature": "IO a -\u003e IO (a, NominalDiffTime)",
        "fct-source": "src/System-Process-Read-Compat.html#timeTask",
        "fct-type": "function",
        "title": "timeTask"
      },
      "index": {
        "description": "Run task and return the elapsed time along with its result",
        "hierarchy": "System Process Read Compat",
        "module": "System.Process.Read.Compat",
        "name": "timeTask",
        "normalized": "IO a-\u003eIO(a,NominalDiffTime)",
        "package": "process-progress",
        "partial": "Task",
        "signature": "IO a-\u003eIO(a,NominalDiffTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Read-Convenience.html",
        "fct-type": "module",
        "title": "Convenience"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "Convenience",
        "normalized": "",
        "package": "process-progress",
        "partial": "Convenience",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:collectOutputs",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e ([ExitCode], a, a, [IOError])",
        "fct-source": "src/System-Process-Read-Convenience.html#collectOutputs",
        "fct-type": "function",
        "title": "collectOutputs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "collectOutputs",
        "normalized": "[Output a]-\u003e([ExitCode],a,a,[IOError])",
        "package": "process-progress",
        "partial": "Outputs",
        "signature": "[Output a]-\u003e([ExitCode],a,a,[IOError])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardExceptions",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#discardExceptions",
        "fct-type": "function",
        "title": "discardExceptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "discardExceptions",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Exceptions",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardOutput",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#discardOutput",
        "fct-type": "function",
        "title": "discardOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "discardOutput",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Output",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardResult",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#discardResult",
        "fct-type": "function",
        "title": "discardResult"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "discardResult",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Result",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#discardStderr",
        "fct-type": "function",
        "title": "discardStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "discardStderr",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:discardStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#discardStdout",
        "fct-type": "function",
        "title": "discardStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "discardStdout",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doAll",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doAll",
        "fct-type": "function",
        "title": "doAll"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doAll",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "All",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doException",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doException",
        "fct-type": "function",
        "title": "doException"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doException",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Exception",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doExit",
      "description": {
        "fct-descr": "\u003cp\u003eI don't see much use for this.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doExit",
        "fct-type": "function",
        "title": "doExit"
      },
      "index": {
        "description": "don see much use for this",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doExit",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Exit",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doOutput",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doOutput",
        "fct-type": "function",
        "title": "doOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doOutput",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Output",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doStderr",
        "fct-type": "function",
        "title": "doStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doStderr",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:doStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#doStdout",
        "fct-type": "function",
        "title": "doStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "doStdout",
        "normalized": "[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": "[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:dots",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "LengthType a -\u003e (LengthType a -\u003e IO ()) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#dots",
        "fct-type": "function",
        "title": "dots"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "dots",
        "normalized": "LengthType a-\u003e(LengthType a-\u003eIO())-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "",
        "signature": "LengthType a-\u003e(LengthType a-\u003eIO())-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:eMessage",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e a -\u003e m a",
        "fct-source": "src/System-Process-Read-Convenience.html#eMessage",
        "fct-type": "function",
        "title": "eMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "eMessage",
        "normalized": "String-\u003ea-\u003eb a",
        "package": "process-progress",
        "partial": "Message",
        "signature": "String-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:eMessageLn",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e a -\u003e m a",
        "fct-source": "src/System-Process-Read-Convenience.html#eMessageLn",
        "fct-type": "function",
        "title": "eMessageLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "eMessageLn",
        "normalized": "String-\u003ea-\u003eb a",
        "package": "process-progress",
        "partial": "Message Ln",
        "signature": "String-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:ePutStr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-Process-Read-Convenience.html#ePutStr",
        "fct-type": "function",
        "title": "ePutStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "ePutStr",
        "normalized": "String-\u003ea()",
        "package": "process-progress",
        "partial": "Put Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:ePutStrLn",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-Process-Read-Convenience.html#ePutStrLn",
        "fct-type": "function",
        "title": "ePutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "ePutStrLn",
        "normalized": "String-\u003ea()",
        "package": "process-progress",
        "partial": "Put Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldChars",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(a -\u003e IO (Output a)) -\u003e (a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldChars",
        "fct-type": "function",
        "title": "foldChars"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldChars",
        "normalized": "(a-\u003eIO(Output a))-\u003e(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Chars",
        "signature": "(a-\u003eIO(Output a))-\u003e(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldException",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(IOError -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldException",
        "fct-type": "function",
        "title": "foldException"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldException",
        "normalized": "(IOError-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Exception",
        "signature": "(IOError-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldFailure",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(Int -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldFailure",
        "fct-type": "function",
        "title": "foldFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldFailure",
        "normalized": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Failure",
        "signature": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldFailure-39-",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(Int -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldFailure%27",
        "fct-type": "function",
        "title": "foldFailure'"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldFailure'",
        "normalized": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Failure'",
        "signature": "(Int-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldResult",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(ExitCode -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldResult",
        "fct-type": "function",
        "title": "foldResult"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldResult",
        "normalized": "(ExitCode-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Result",
        "signature": "(ExitCode-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldStderr",
        "fct-type": "function",
        "title": "foldStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldStderr",
        "normalized": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(a -\u003e IO (Output a)) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldStdout",
        "fct-type": "function",
        "title": "foldStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldStdout",
        "normalized": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": "(a-\u003eIO(Output a))-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:foldSuccess",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "IO (Output a) -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#foldSuccess",
        "fct-type": "function",
        "title": "foldSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "foldSuccess",
        "normalized": "IO(Output a)-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "Success",
        "signature": "IO(Output a)-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isException",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "Output a -\u003e Bool",
        "fct-source": "src/System-Process-Read-Convenience.html#isException",
        "fct-type": "function",
        "title": "isException"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "isException",
        "normalized": "Output a-\u003eBool",
        "package": "process-progress",
        "partial": "Exception",
        "signature": "Output a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isOutput",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "Output a -\u003e Bool",
        "fct-source": "src/System-Process-Read-Convenience.html#isOutput",
        "fct-type": "function",
        "title": "isOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "isOutput",
        "normalized": "Output a-\u003eBool",
        "package": "process-progress",
        "partial": "Output",
        "signature": "Output a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isResult",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "Output a -\u003e Bool",
        "fct-source": "src/System-Process-Read-Convenience.html#isResult",
        "fct-type": "function",
        "title": "isResult"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "isResult",
        "normalized": "Output a-\u003eBool",
        "package": "process-progress",
        "partial": "Result",
        "signature": "Output a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "Output a -\u003e Bool",
        "fct-source": "src/System-Process-Read-Convenience.html#isStderr",
        "fct-type": "function",
        "title": "isStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "isStderr",
        "normalized": "Output a-\u003eBool",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": "Output a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:isStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "Output a -\u003e Bool",
        "fct-source": "src/System-Process-Read-Convenience.html#isStdout",
        "fct-type": "function",
        "title": "isStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "isStdout",
        "normalized": "Output a-\u003eBool",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": "Output a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepExceptions",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [IOError]",
        "fct-source": "src/System-Process-Read-Convenience.html#keepExceptions",
        "fct-type": "function",
        "title": "keepExceptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "keepExceptions",
        "normalized": "[Output a]-\u003e[IOError]",
        "package": "process-progress",
        "partial": "Exceptions",
        "signature": "[Output a]-\u003e[IOError]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepOutput",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [a]",
        "fct-source": "src/System-Process-Read-Convenience.html#keepOutput",
        "fct-type": "function",
        "title": "keepOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "keepOutput",
        "normalized": "[Output a]-\u003e[a]",
        "package": "process-progress",
        "partial": "Output",
        "signature": "[Output a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepResult",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [ExitCode]",
        "fct-source": "src/System-Process-Read-Convenience.html#keepResult",
        "fct-type": "function",
        "title": "keepResult"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "keepResult",
        "normalized": "[Output a]-\u003e[ExitCode]",
        "package": "process-progress",
        "partial": "Result",
        "signature": "[Output a]-\u003e[ExitCode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [a]",
        "fct-source": "src/System-Process-Read-Convenience.html#keepStderr",
        "fct-type": "function",
        "title": "keepStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "keepStderr",
        "normalized": "[Output a]-\u003e[a]",
        "package": "process-progress",
        "partial": "Stderr",
        "signature": "[Output a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:keepStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [a]",
        "fct-source": "src/System-Process-Read-Convenience.html#keepStdout",
        "fct-type": "function",
        "title": "keepStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "keepStdout",
        "normalized": "[Output a]-\u003e[a]",
        "package": "process-progress",
        "partial": "Stdout",
        "signature": "[Output a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeException",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(IOError -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mapMaybeException",
        "fct-type": "function",
        "title": "mapMaybeException"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mapMaybeException",
        "normalized": "(IOError-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Maybe Exception",
        "signature": "(IOError-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeResult",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(ExitCode -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mapMaybeResult",
        "fct-type": "function",
        "title": "mapMaybeResult"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mapMaybeResult",
        "normalized": "(ExitCode-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Maybe Result",
        "signature": "(ExitCode-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(a -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mapMaybeStderr",
        "fct-type": "function",
        "title": "mapMaybeStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mapMaybeStderr",
        "normalized": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Maybe Stderr",
        "signature": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mapMaybeStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "(a -\u003e Maybe (Output a)) -\u003e [Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mapMaybeStdout",
        "fct-type": "function",
        "title": "mapMaybeStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mapMaybeStdout",
        "normalized": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "Maybe Stdout",
        "signature": "(a-\u003eMaybe(Output a))-\u003e[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mergeToStderr",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mergeToStderr",
        "fct-type": "function",
        "title": "mergeToStderr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mergeToStderr",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "To Stderr",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:mergeToStdout",
      "description": {
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "[Output a] -\u003e [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#mergeToStdout",
        "fct-type": "function",
        "title": "mergeToStdout"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "mergeToStdout",
        "normalized": "[Output a]-\u003e[Output a]",
        "package": "process-progress",
        "partial": "To Stdout",
        "signature": "[Output a]-\u003e[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Convenience.html#v:prefixed",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the stream with a prefix added at the beginning of each\n line of stdout and stderr.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Convenience",
        "fct-package": "process-progress",
        "fct-signature": "a -\u003e a -\u003e [Output a] -\u003e IO [Output a]",
        "fct-source": "src/System-Process-Read-Convenience.html#prefixed",
        "fct-type": "function",
        "title": "prefixed"
      },
      "index": {
        "description": "Output the stream with prefix added at the beginning of each line of stdout and stderr",
        "hierarchy": "System Process Read Convenience",
        "module": "System.Process.Read.Convenience",
        "name": "prefixed",
        "normalized": "a-\u003ea-\u003e[Output a]-\u003eIO[Output a]",
        "package": "process-progress",
        "partial": "",
        "signature": "a-\u003ea-\u003e[Output a]-\u003eIO[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA perhaps over-engineered set of wrappers around\n readProcessChunks to run processes with a variety of echoing\n options and responses to failure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Read-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "perhaps over-engineered set of wrappers around readProcessChunks to run processes with variety of echoing options and responses to failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "process-progress",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessD",
      "description": {
        "fct-descr": "\u003cp\u003eDot output\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessD",
        "fct-type": "function",
        "title": "runProcessD"
      },
      "index": {
        "description": "Dot output",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessD",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessDE",
      "description": {
        "fct-descr": "\u003cp\u003eDot output, exception on failure, echo on failure.  Note that\n runProcessVE isn't a useful option, you get the output twice.  VF\n makes more sense.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessDE",
        "fct-type": "function",
        "title": "runProcessDE"
      },
      "index": {
        "description": "Dot output exception on failure echo on failure Note that runProcessVE isn useful option you get the output twice VF makes more sense",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessDE",
        "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process DE",
        "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessDF",
      "description": {
        "fct-descr": "\u003cp\u003eDot output and exception on failure\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessDF",
        "fct-type": "function",
        "title": "runProcessDF"
      },
      "index": {
        "description": "Dot output and exception on failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessDF",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process DF",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQ",
      "description": {
        "fct-descr": "\u003cp\u003eCommand line trace only.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessQ",
        "fct-type": "function",
        "title": "runProcessQ"
      },
      "index": {
        "description": "Command line trace only",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessQ",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQE",
      "description": {
        "fct-descr": "\u003cp\u003eException and echo on failure\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessQE",
        "fct-type": "function",
        "title": "runProcessQE"
      },
      "index": {
        "description": "Exception and echo on failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessQE",
        "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process QE",
        "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessQF",
      "description": {
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessQF",
        "fct-type": "function",
        "title": "runProcessQF"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessQF",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process QF",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessS",
      "description": {
        "fct-descr": "\u003cp\u003eRun silently\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessS",
        "fct-type": "function",
        "title": "runProcessS"
      },
      "index": {
        "description": "Run silently",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessS",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessSE",
      "description": {
        "fct-descr": "\u003cp\u003eException and echo on failure\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "Maybe (a, a) -\u003e CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessSE",
        "fct-type": "function",
        "title": "runProcessSE"
      },
      "index": {
        "description": "Exception and echo on failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessSE",
        "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process SE",
        "signature": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessSF",
      "description": {
        "fct-descr": "\u003cp\u003eException on failure\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessSF",
        "fct-type": "function",
        "title": "runProcessSF"
      },
      "index": {
        "description": "Exception on failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessSF",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process SF",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessV",
      "description": {
        "fct-descr": "\u003cp\u003eEcho output\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessV",
        "fct-type": "function",
        "title": "runProcessV"
      },
      "index": {
        "description": "Echo output",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessV",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Monad.html#v:runProcessVF",
      "description": {
        "fct-descr": "\u003cp\u003eEcho output and exception on failure\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Monad",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e a -\u003e m [Output a]",
        "fct-source": "src/System-Process-Read-Monad.html#runProcessVF",
        "fct-type": "function",
        "title": "runProcessVF"
      },
      "index": {
        "description": "Echo output and exception on failure",
        "hierarchy": "System Process Read Monad",
        "module": "System.Process.Read.Monad",
        "name": "runProcessVF",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process VF",
        "signature": "CreateProcess-\u003ea-\u003em[Output a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "module",
        "fct-source": "src/System-Process-Read-Verbosity.html",
        "fct-type": "module",
        "title": "Verbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "Verbosity",
        "normalized": "",
        "package": "process-progress",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:defaultVerbosity",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "Int",
        "fct-source": "src/System-Process-Read-Verbosity.html#defaultVerbosity",
        "fct-type": "function",
        "title": "defaultVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "defaultVerbosity",
        "normalized": "",
        "package": "process-progress",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:noisier",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "Int -\u003e m a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#noisier",
        "fct-type": "function",
        "title": "noisier"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "noisier",
        "normalized": "Int-\u003ea b-\u003ea b",
        "package": "process-progress",
        "partial": "",
        "signature": "Int-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qBracket",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#qBracket",
        "fct-type": "function",
        "title": "qBracket"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "qBracket",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "process-progress",
        "partial": "Bracket",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qMessage",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#qMessage",
        "fct-type": "function",
        "title": "qMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "qMessage",
        "normalized": "String-\u003ea-\u003eb a",
        "package": "process-progress",
        "partial": "Message",
        "signature": "String-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qMessageLn",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#qMessageLn",
        "fct-type": "function",
        "title": "qMessageLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "qMessageLn",
        "normalized": "String-\u003ea-\u003eb a",
        "package": "process-progress",
        "partial": "Message Ln",
        "signature": "String-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qPutStr",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-Process-Read-Verbosity.html#qPutStr",
        "fct-type": "function",
        "title": "qPutStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "qPutStr",
        "normalized": "String-\u003ea()",
        "package": "process-progress",
        "partial": "Put Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:qPutStrLn",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/System-Process-Read-Verbosity.html#qPutStrLn",
        "fct-type": "function",
        "title": "qPutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "qPutStrLn",
        "normalized": "String-\u003ea()",
        "package": "process-progress",
        "partial": "Put Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:quieter",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "Int -\u003e m a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#quieter",
        "fct-type": "function",
        "title": "quieter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "quieter",
        "normalized": "Int-\u003ea b-\u003ea b",
        "package": "process-progress",
        "partial": "",
        "signature": "Int-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:runProcess",
      "description": {
        "fct-descr": "\u003cp\u003eSelect from the runProcess* functions in Monad based on a verbosity level.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "CreateProcess -\u003e s -\u003e m [Output s]",
        "fct-source": "src/System-Process-Read-Verbosity.html#runProcess",
        "fct-type": "function",
        "title": "runProcess"
      },
      "index": {
        "description": "Select from the runProcess functions in Monad based on verbosity level",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "runProcess",
        "normalized": "CreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "CreateProcess-\u003es-\u003em[Output s]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:runProcessF",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunProcess\u003c/a\u003e\u003c/code\u003e that throws an exception on failure.\n\u003c/p\u003e",
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "Maybe (s, s) -\u003e CreateProcess -\u003e s -\u003e m [Output s]",
        "fct-source": "src/System-Process-Read-Verbosity.html#runProcessF",
        "fct-type": "function",
        "title": "runProcessF"
      },
      "index": {
        "description": "version of runProcess that throws an exception on failure",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "runProcessF",
        "normalized": "Maybe(a,a)-\u003eCreateProcess-\u003ea-\u003eb[Output a]",
        "package": "process-progress",
        "partial": "Process",
        "signature": "Maybe(s,s)-\u003eCreateProcess-\u003es-\u003em[Output s]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:verbosity",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "m Int",
        "fct-source": "src/System-Process-Read-Verbosity.html#verbosity",
        "fct-type": "function",
        "title": "verbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "verbosity",
        "normalized": "",
        "package": "process-progress",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/process-progress/docs/System-Process-Read-Verbosity.html#v:withModifiedVerbosity",
      "description": {
        "fct-module": "System.Process.Read.Verbosity",
        "fct-package": "process-progress",
        "fct-signature": "(Int -\u003e Int) -\u003e m a -\u003e m a",
        "fct-source": "src/System-Process-Read-Verbosity.html#withModifiedVerbosity",
        "fct-type": "function",
        "title": "withModifiedVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "System Process Read Verbosity",
        "module": "System.Process.Read.Verbosity",
        "name": "withModifiedVerbosity",
        "normalized": "(Int-\u003eInt)-\u003ea b-\u003ea b",
        "package": "process-progress",
        "partial": "Modified Verbosity",
        "signature": "(Int-\u003eInt)-\u003em a-\u003em a"
      }
    }
  }
]