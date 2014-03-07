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
        "word": "uni-posixutil"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule that should also compile on Windows for blocking sigPIPE on\n Unix, something you need to do to avoid the entire system crashing when\n a pipe is closed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Posixutil.BlockSigPIPE",
          "name": "BlockSigPIPE",
          "package": "uni-posixutil",
          "source": "src/Posixutil-BlockSigPIPE.html",
          "type": "module"
        },
        "index": {
          "description": "Module that should also compile on Windows for blocking sigPIPE on Unix something you need to do to avoid the entire system crashing when pipe is closed",
          "hierarchy": "Posixutil BlockSigPIPE",
          "module": "Posixutil.BlockSigPIPE",
          "name": "BlockSigPIPE",
          "package": "uni-posixutil",
          "partial": "Block Sig PIPE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-BlockSigPIPE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.BlockSigPIPE",
          "name": "blockSigPIPE",
          "package": "uni-posixutil",
          "signature": "IO ()",
          "source": "src/Posixutil-BlockSigPIPE.html#blockSigPIPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil BlockSigPIPE",
          "module": "Posixutil.BlockSigPIPE",
          "name": "blockSigPIPE",
          "normalized": "IO()",
          "package": "uni-posixutil",
          "partial": "Sig PIPE",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-BlockSigPIPE.html#v:blockSigPIPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCalling other programs.\n\u003c/p\u003e\u003cp\u003eThis module now serves basically as an interface to GHC's new\n System.Process module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcess",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ChildProcess.html",
          "type": "module"
        },
        "index": {
          "description": "Calling other programs This module now serves basically as an interface to GHC new System.Process module",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcess",
          "package": "uni-posixutil",
          "partial": "Child Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA running process\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcess",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ChildProcess.html#ChildProcess",
          "type": "data"
        },
        "index": {
          "description": "running process",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcess",
          "package": "uni-posixutil",
          "partial": "Child Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#t:ChildProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus if a process\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcessStatus",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ChildProcess.html#ChildProcessStatus",
          "type": "data"
        },
        "index": {
          "description": "Status if process",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "ChildProcessStatus",
          "package": "uni-posixutil",
          "partial": "Child Process Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#t:ChildProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes configuration options for the process.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "PosixProcess",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ChildProcess.html#PosixProcess",
          "type": "data"
        },
        "index": {
          "description": "Describes configuration options for the process",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "PosixProcess",
          "package": "uni-posixutil",
          "partial": "Posix Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#t:PosixProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ChildProcess",
          "name": "ChildExited",
          "package": "uni-posixutil",
          "signature": "ChildExited ExitCode",
          "source": "src/Posixutil-ChildProcess.html#ChildProcessStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "ChildExited",
          "package": "uni-posixutil",
          "partial": "Child Exited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:ChildExited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ChildProcess",
          "name": "ChildTerminated",
          "package": "uni-posixutil",
          "signature": "ChildTerminated",
          "source": "src/Posixutil-ChildProcess.html#ChildProcessStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "ChildTerminated",
          "package": "uni-posixutil",
          "partial": "Child Terminated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:ChildTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend command arguments\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "appendArguments",
          "package": "uni-posixutil",
          "signature": "[String] -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#appendArguments",
          "type": "function"
        },
        "index": {
          "description": "Append command arguments",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "appendArguments",
          "normalized": "[String]-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "partial": "Arguments",
          "signature": "[String]-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:appendArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet command arguments\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "arguments",
          "package": "uni-posixutil",
          "signature": "[String] -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#arguments",
          "type": "function"
        },
        "index": {
          "description": "Set command arguments",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "arguments",
          "normalized": "[String]-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "signature": "[String]-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a \u003ca\u003echallenge\u003c/a\u003e and \u003ca\u003eresponse\u003c/a\u003e.  This is used as a test\n when the tool starts up, to make sure that everything is\n working properly.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "challengeResponse",
          "package": "uni-posixutil",
          "signature": "(String, String) -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#challengeResponse",
          "type": "function"
        },
        "index": {
          "description": "Set challenge and response This is used as test when the tool starts up to make sure that everything is working properly",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "challengeResponse",
          "normalized": "(String,String)-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "partial": "Response",
          "signature": "(String,String)-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:challengeResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the process' environment.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "environment",
          "package": "uni-posixutil",
          "signature": "[(String, String)] -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#environment",
          "type": "function"
        },
        "index": {
          "description": "Set the process environment",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "environment",
          "normalized": "[(String,String)]-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "signature": "[(String,String)]-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadMsg\u003c/a\u003e\u003c/code\u003e returns lines, otherwise it returs the first input\n that's available\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "linemode",
          "package": "uni-posixutil",
          "signature": "Bool -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#linemode",
          "type": "function"
        },
        "index": {
          "description": "If True readMsg returns lines otherwise it returs the first input that available",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "linemode",
          "normalized": "Bool-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "signature": "Bool-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:linemode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting a new \u003ccode\u003e\u003ca\u003eChildProcess\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "newChildProcess",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e [Config PosixProcess] -\u003e IO ChildProcess",
          "source": "src/Posixutil-ChildProcess.html#newChildProcess",
          "type": "function"
        },
        "index": {
          "description": "Starting new ChildProcess",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "newChildProcess",
          "normalized": "FilePath-\u003e[Config PosixProcess]-\u003eIO ChildProcess",
          "package": "uni-posixutil",
          "partial": "Child Process",
          "signature": "FilePath-\u003e[Config PosixProcess]-\u003eIO ChildProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:newChildProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a string from the ChildProcess\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "readMsg",
          "package": "uni-posixutil",
          "signature": "ChildProcess -\u003e IO String",
          "source": "src/Posixutil-ChildProcess.html#readMsg",
          "type": "function"
        },
        "index": {
          "description": "Reads string from the ChildProcess",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "readMsg",
          "normalized": "ChildProcess-\u003eIO String",
          "package": "uni-posixutil",
          "partial": "Msg",
          "signature": "ChildProcess-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:readMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a String to the ChildProcess, adding a new line\n for line mode.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "sendMsg",
          "package": "uni-posixutil",
          "signature": "ChildProcess -\u003e String -\u003e IO ()",
          "source": "src/Posixutil-ChildProcess.html#sendMsg",
          "type": "function"
        },
        "index": {
          "description": "Sends String to the ChildProcess adding new line for line mode",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "sendMsg",
          "normalized": "ChildProcess-\u003eString-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "Msg",
          "signature": "ChildProcess-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:sendMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a CStringLen\n to the child process.  It does not append a newline.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "sendMsgRaw",
          "package": "uni-posixutil",
          "signature": "ChildProcess -\u003e CStringLen -\u003e IO ()",
          "source": "src/Posixutil-ChildProcess.html#sendMsgRaw",
          "type": "function"
        },
        "index": {
          "description": "Writes CStringLen to the child process It does not append newline",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "sendMsgRaw",
          "normalized": "ChildProcess-\u003eCStringLen-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "Msg Raw",
          "signature": "ChildProcess-\u003eCStringLen-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:sendMsgRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ChildProcess",
          "name": "standarderrors",
          "package": "uni-posixutil",
          "signature": "Bool -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#standarderrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "standarderrors",
          "normalized": "Bool-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "signature": "Bool-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:standarderrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the tool, used in error messages and in the debug file.\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "toolName",
          "package": "uni-posixutil",
          "signature": "String -\u003e Config PosixProcess",
          "source": "src/Posixutil-ChildProcess.html#toolName",
          "type": "function"
        },
        "index": {
          "description": "The name of the tool used in error messages and in the debug file",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "toolName",
          "normalized": "String-\u003eConfig PosixProcess",
          "package": "uni-posixutil",
          "partial": "Name",
          "signature": "String-\u003eConfig PosixProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:toolName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the ChildProcess to exit or be terminated\n\u003c/p\u003e",
          "module": "Posixutil.ChildProcess",
          "name": "waitForChildProcess",
          "package": "uni-posixutil",
          "signature": "ChildProcess -\u003e IO ChildProcessStatus",
          "source": "src/Posixutil-ChildProcess.html#waitForChildProcess",
          "type": "function"
        },
        "index": {
          "description": "Waits for the ChildProcess to exit or be terminated",
          "hierarchy": "Posixutil ChildProcess",
          "module": "Posixutil.ChildProcess",
          "name": "waitForChildProcess",
          "normalized": "ChildProcess-\u003eIO ChildProcessStatus",
          "package": "uni-posixutil",
          "partial": "For Child Process",
          "signature": "ChildProcess-\u003eIO ChildProcessStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ChildProcess.html#v:waitForChildProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis contains functions for copying to and from files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Posixutil.CopyFile",
          "name": "CopyFile",
          "package": "uni-posixutil",
          "source": "src/Posixutil-CopyFile.html",
          "type": "module"
        },
        "index": {
          "description": "This contains functions for copying to and from files",
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "CopyFile",
          "package": "uni-posixutil",
          "partial": "Copy File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyCStringLenToFile",
          "package": "uni-posixutil",
          "signature": "CStringLen -\u003e FilePath -\u003e IO ()",
          "source": "src/Posixutil-CopyFile.html#copyCStringLenToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyCStringLenToFile",
          "normalized": "CStringLen-\u003eFilePath-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "CString Len To File",
          "signature": "CStringLen-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyCStringLenToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyFile",
          "package": "uni-posixutil",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/Posixutil-CopyFile.html#copyFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFile",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "File",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyFileToCStringLen",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e IO CStringLen",
          "source": "src/Posixutil-CopyFile.html#copyFileToCStringLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToCStringLen",
          "normalized": "FilePath-\u003eIO CStringLen",
          "package": "uni-posixutil",
          "partial": "File To CString Len",
          "signature": "FilePath-\u003eIO CStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileToCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyFileToICStringLen",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e IO ICStringLen",
          "source": "src/Posixutil-CopyFile.html#copyFileToICStringLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToICStringLen",
          "normalized": "FilePath-\u003eIO ICStringLen",
          "package": "uni-posixutil",
          "partial": "File To ICString Len",
          "signature": "FilePath-\u003eIO ICStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileToICStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyFileToICStringLenCheck",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e IO (WithError ICStringLen)",
          "source": "src/Posixutil-CopyFile.html#copyFileToICStringLenCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToICStringLenCheck",
          "normalized": "FilePath-\u003eIO(WithError ICStringLen)",
          "package": "uni-posixutil",
          "partial": "File To ICString Len Check",
          "signature": "FilePath-\u003eIO(WithError ICStringLen)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileToICStringLenCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads in a file to a String.  NB - differs from readFile in that this\n is done instantly, so we don't have to worry about semi-closed handles\n hanging around.\n\u003c/p\u003e",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToString",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Posixutil-CopyFile.html#copyFileToString",
          "type": "function"
        },
        "index": {
          "description": "Reads in file to String NB differs from readFile in that this is done instantly so we don have to worry about semi-closed handles hanging around",
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToString",
          "normalized": "FilePath-\u003eIO String",
          "package": "uni-posixutil",
          "partial": "File To String",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a file, catching certain errors\n\u003c/p\u003e",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToStringCheck",
          "package": "uni-posixutil",
          "signature": "FilePath -\u003e IO (WithError String)",
          "source": "src/Posixutil-CopyFile.html#copyFileToStringCheck",
          "type": "function"
        },
        "index": {
          "description": "Read in file catching certain errors",
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileToStringCheck",
          "normalized": "FilePath-\u003eIO(WithError String)",
          "package": "uni-posixutil",
          "partial": "File To String Check",
          "signature": "FilePath-\u003eIO(WithError String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileToStringCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyFileWE",
          "package": "uni-posixutil",
          "signature": "String -\u003e String -\u003e IO (WithError ())",
          "source": "src/Posixutil-CopyFile.html#copyFileWE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyFileWE",
          "normalized": "String-\u003eString-\u003eIO(WithError())",
          "package": "uni-posixutil",
          "partial": "File WE",
          "signature": "String-\u003eString-\u003eIO(WithError())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyFileWE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyICStringLenToFile",
          "package": "uni-posixutil",
          "signature": "ICStringLen -\u003e FilePath -\u003e IO ()",
          "source": "src/Posixutil-CopyFile.html#copyICStringLenToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyICStringLenToFile",
          "normalized": "ICStringLen-\u003eFilePath-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "ICString Len To File",
          "signature": "ICStringLen-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyICStringLenToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.CopyFile",
          "name": "copyStringToFile",
          "package": "uni-posixutil",
          "signature": "String -\u003e FilePath -\u003e IO ()",
          "source": "src/Posixutil-CopyFile.html#copyStringToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyStringToFile",
          "normalized": "String-\u003eFilePath-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "String To File",
          "signature": "String-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyStringToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to a file, catching certain errors.\n (At the moment this is not very helpful, returning messages like\n \"system error\").\n\u003c/p\u003e",
          "module": "Posixutil.CopyFile",
          "name": "copyStringToFileCheck",
          "package": "uni-posixutil",
          "signature": "String -\u003e FilePath -\u003e IO (WithError ())",
          "source": "src/Posixutil-CopyFile.html#copyStringToFileCheck",
          "type": "function"
        },
        "index": {
          "description": "Write to file catching certain errors At the moment this is not very helpful returning messages like system error",
          "hierarchy": "Posixutil CopyFile",
          "module": "Posixutil.CopyFile",
          "name": "copyStringToFileCheck",
          "normalized": "String-\u003eFilePath-\u003eIO(WithError())",
          "package": "uni-posixutil",
          "partial": "String To File Check",
          "signature": "String-\u003eFilePath-\u003eIO(WithError())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-CopyFile.html#v:copyStringToFileCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProcessClasses describes some classes which tools encapsulating\n processes may instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Posixutil.ProcessClasses",
          "name": "ProcessClasses",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ProcessClasses.html",
          "type": "module"
        },
        "index": {
          "description": "ProcessClasses describes some classes which tools encapsulating processes may instance",
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "ProcessClasses",
          "package": "uni-posixutil",
          "partial": "Process Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "CommandTool",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ProcessClasses.html#CommandTool",
          "type": "class"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "CommandTool",
          "package": "uni-posixutil",
          "partial": "Command Tool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#t:CommandTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "SingleInstanceTool",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ProcessClasses.html#SingleInstanceTool",
          "type": "class"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "SingleInstanceTool",
          "package": "uni-posixutil",
          "partial": "Single Instance Tool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#t:SingleInstanceTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "Tool",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ProcessClasses.html#Tool",
          "type": "class"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "Tool",
          "package": "uni-posixutil",
          "partial": "Tool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#t:Tool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "ToolStatus",
          "package": "uni-posixutil",
          "source": "src/Posixutil-ProcessClasses.html#ToolStatus",
          "type": "type"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "ToolStatus",
          "package": "uni-posixutil",
          "partial": "Tool Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#t:ToolStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "evalCmd",
          "package": "uni-posixutil",
          "signature": "String -\u003e t -\u003e IO String",
          "source": "src/Posixutil-ProcessClasses.html#evalCmd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "evalCmd",
          "normalized": "String-\u003ea-\u003eIO String",
          "package": "uni-posixutil",
          "partial": "Cmd",
          "signature": "String-\u003et-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#v:evalCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "execCmd",
          "package": "uni-posixutil",
          "signature": "String -\u003e t -\u003e IO ()",
          "source": "src/Posixutil-ProcessClasses.html#execCmd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "execCmd",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "Cmd",
          "signature": "String-\u003et-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#v:execCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "execOneWayCmd",
          "package": "uni-posixutil",
          "signature": "String -\u003e t -\u003e IO ()",
          "source": "src/Posixutil-ProcessClasses.html#execOneWayCmd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "execOneWayCmd",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "uni-posixutil",
          "partial": "One Way Cmd",
          "signature": "String-\u003et-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#v:execOneWayCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "getToolInstance",
          "package": "uni-posixutil",
          "signature": "IO t",
          "source": "src/Posixutil-ProcessClasses.html#getToolInstance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "getToolInstance",
          "package": "uni-posixutil",
          "partial": "Tool Instance",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#v:getToolInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.ProcessClasses",
          "name": "getToolStatus",
          "package": "uni-posixutil",
          "signature": "t -\u003e IO ToolStatus",
          "source": "src/Posixutil-ProcessClasses.html#getToolStatus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Posixutil ProcessClasses",
          "module": "Posixutil.ProcessClasses",
          "name": "getToolStatus",
          "normalized": "a-\u003eIO ToolStatus",
          "package": "uni-posixutil",
          "partial": "Tool Status",
          "signature": "t-\u003eIO ToolStatus",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-ProcessClasses.html#v:getToolStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSafeSystem.safeSystem executes a command (supplied as a String) and\n returns its exit code.  It differs from System.system in that it does\n NOT stop the world while doing this, so that other threads can run.\n How it works: we use ChildProcess to run the runCommand C program,\n and feed it the command over stdin.  Ugly, but is there a better way?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Posixutil.SafeSystem",
          "name": "SafeSystem",
          "package": "uni-posixutil",
          "source": "src/Posixutil-SafeSystem.html",
          "type": "module"
        },
        "index": {
          "description": "SafeSystem.safeSystem executes command supplied as String and returns its exit code It differs from System.system in that it does NOT stop the world while doing this so that other threads can run How it works we use ChildProcess to run the runCommand program and feed it the command over stdin Ugly but is there better way",
          "hierarchy": "Posixutil SafeSystem",
          "module": "Posixutil.SafeSystem",
          "name": "SafeSystem",
          "package": "uni-posixutil",
          "partial": "Safe System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-SafeSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Posixutil.SafeSystem",
          "name": "safeSystem",
          "package": "uni-posixutil",
          "signature": "String -\u003e IO ExitCode",
          "source": "src/Posixutil-SafeSystem.html#safeSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Posixutil SafeSystem",
          "module": "Posixutil.SafeSystem",
          "name": "safeSystem",
          "normalized": "String-\u003eIO ExitCode",
          "package": "uni-posixutil",
          "partial": "System",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-SafeSystem.html#v:safeSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \"command\", displaying any output using the supplied\n outputSink function.  (This output had better not include\n \"EXITCODE [number]\".)\n\u003c/p\u003e\u003cp\u003eoutputSink is fed output line by line, and without the newlines.\n\u003c/p\u003e",
          "module": "Posixutil.SafeSystem",
          "name": "safeSystemGeneral",
          "package": "uni-posixutil",
          "signature": "String -\u003e (String -\u003e IO ()) -\u003e IO ExitCode",
          "source": "src/Posixutil-SafeSystem.html#safeSystemGeneral",
          "type": "function"
        },
        "index": {
          "description": "Run command displaying any output using the supplied outputSink function This output had better not include EXITCODE number outputSink is fed output line by line and without the newlines",
          "hierarchy": "Posixutil SafeSystem",
          "module": "Posixutil.SafeSystem",
          "name": "safeSystemGeneral",
          "normalized": "String-\u003e(String-\u003eIO())-\u003eIO ExitCode",
          "package": "uni-posixutil",
          "partial": "System General",
          "signature": "String-\u003e(String-\u003eIO())-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-posixutil/docs/Posixutil-SafeSystem.html#v:safeSystemGeneral"
      }
    }
  ]
]