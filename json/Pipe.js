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
        "word": "Pipe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations for piping data through multiple processes.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e is the most general function, with \u003ccode\u003e\u003ca\u003epipe'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epipeString\u003c/a\u003e\u003c/code\u003e provided\n for convenience purposes.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandlePipe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efilePipe\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003efilePipe'\u003c/a\u003e\u003c/code\u003e are for the common file-to-file\n case and behave somewhat differently.\n\u003c/p\u003e\u003cp\u003eWhenever specifying a path to a process, explicitly specifying the current\n directory is recommended for portability. That is: use \"./foo\" instead of\n \"foo\", for instance.\n\u003c/p\u003e\u003cp\u003eOn Windows, appending \".exe\" to process paths is attempted if the\n invocation fails.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Process.Pipe",
          "name": "Pipe",
          "package": "Pipe",
          "source": "src/System-Process-Pipe.html",
          "type": "module"
        },
        "index": {
          "description": "Operations for piping data through multiple processes pipe is the most general function with pipe and pipeString provided for convenience purposes handlePipe filePipe and filePipe are for the common file-to-file case and behave somewhat differently Whenever specifying path to process explicitly specifying the current directory is recommended for portability That is use foo instead of foo for instance On Windows appending exe to process paths is attempted if the invocation fails",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "Pipe",
          "package": "Pipe",
          "partial": "Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for \u003ccode\u003e\u003ca\u003ehandlePipe\u003c/a\u003e\u003c/code\u003e. Opens the given files in binary\n mode.\n\u003c/p\u003e",
          "module": "System.Process.Pipe",
          "name": "filePipe",
          "package": "Pipe",
          "signature": "FilePath -\u003e [(FilePath, [String])] -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Process-Pipe.html#filePipe",
          "type": "function"
        },
        "index": {
          "description": "convenience function for handlePipe Opens the given files in binary mode",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "filePipe",
          "normalized": "FilePath-\u003e[(FilePath,[String])]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "Pipe",
          "partial": "Pipe",
          "signature": "FilePath-\u003e[(FilePath,[String])]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:filePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efilePipe\u003c/a\u003e\u003c/code\u003e, but the working directory used is the directory component\n of the path to the first file.\n\u003c/p\u003e",
          "module": "System.Process.Pipe",
          "name": "filePipe'",
          "package": "Pipe",
          "signature": "[(FilePath, [String])] -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Process-Pipe.html#filePipe%27",
          "type": "function"
        },
        "index": {
          "description": "Like filePipe but the working directory used is the directory component of the path to the first file",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "filePipe'",
          "normalized": "[(FilePath,[String])]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "Pipe",
          "partial": "Pipe'",
          "signature": "[(FilePath,[String])]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:filePipe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for the common case of piping from a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this is not merely a convenient frontend for \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e and is\n fundamentally different in the following ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A null list of programs is allowed, in which case the contents of the\n   input Handle are simply written to the output Handle.\n\u003c/li\u003e\u003cli\u003e This function is not lazy and returns only when the writing has been\n   completed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Process.Pipe",
          "name": "handlePipe",
          "package": "Pipe",
          "signature": "FilePath -\u003e [(FilePath, [String])] -\u003e Handle -\u003e Handle -\u003e IO ()",
          "source": "src/System-Process-Pipe.html#handlePipe",
          "type": "function"
        },
        "index": {
          "description": "function for the common case of piping from Handle to Handle Note that this is not merely convenient frontend for pipe and is fundamentally different in the following ways null list of programs is allowed in which case the contents of the input Handle are simply written to the output Handle This function is not lazy and returns only when the writing has been completed",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "handlePipe",
          "normalized": "FilePath-\u003e[(FilePath,[String])]-\u003eHandle-\u003eHandle-\u003eIO()",
          "package": "Pipe",
          "partial": "Pipe",
          "signature": "FilePath-\u003e[(FilePath,[String])]-\u003eHandle-\u003eHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:handlePipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePipes the input, using the given writer and reader functions, through all\n the commands named, in the given working directory. Returns the result.\n\u003c/p\u003e\u003cp\u003eAn exception is thrown if the list of programs is empty.\n\u003c/p\u003e\u003cp\u003eThe writer function is called in a \u003ccode\u003eforkIO'\u003c/code\u003ed thread, allowing this to be\n lazy. That thread also calls \u003ccode\u003e\u003ca\u003ewaitForProcess\u003c/a\u003e\u003c/code\u003e when done writing so that the\n processes get terminated cleanly; this means that the runtime should be\n multithreaded, or the call will block all threads and this function may\n deadlock. (In GHC, compile with \u003ccode\u003e-threaded\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eSIGPIPE is ignored in the writer thread. Likewise, any IOExceptions are\n caught and ignored.\n\u003c/p\u003e",
          "module": "System.Process.Pipe",
          "name": "pipe",
          "package": "Pipe",
          "signature": "(Handle -\u003e a -\u003e IO ()) -\u003e (Handle -\u003e IO b) -\u003e FilePath -\u003e [(FilePath, [String])] -\u003e a -\u003e IO b",
          "source": "src/System-Process-Pipe.html#pipe",
          "type": "function"
        },
        "index": {
          "description": "Pipes the input using the given writer and reader functions through all the commands named in the given working directory Returns the result An exception is thrown if the list of programs is empty The writer function is called in forkIO thread allowing this to be lazy That thread also calls waitForProcess when done writing so that the processes get terminated cleanly this means that the runtime should be multithreaded or the call will block all threads and this function may deadlock In GHC compile with threaded SIGPIPE is ignored in the writer thread Likewise any IOExceptions are caught and ignored",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "pipe",
          "normalized": "(Handle-\u003ea-\u003eIO())-\u003e(Handle-\u003eIO b)-\u003eFilePath-\u003e[(FilePath,[String])]-\u003ea-\u003eIO b",
          "package": "Pipe",
          "signature": "(Handle-\u003ea-\u003eIO())-\u003e(Handle-\u003eIO b)-\u003eFilePath-\u003e[(FilePath,[String])]-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for when you don't care about the working\n directory, \u003ccode\u003e\u003ca\u003epipe'\u003c/a\u003e\u003c/code\u003e uses \".\".\n\u003c/p\u003e",
          "module": "System.Process.Pipe",
          "name": "pipe'",
          "package": "Pipe",
          "signature": "(Handle -\u003e a -\u003e IO ()) -\u003e (Handle -\u003e IO b) -\u003e [(FilePath, [String])] -\u003e a -\u003e IO b",
          "source": "src/System-Process-Pipe.html#pipe%27",
          "type": "function"
        },
        "index": {
          "description": "convenience function for when you don care about the working directory pipe uses",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "pipe'",
          "normalized": "(Handle-\u003ea-\u003eIO())-\u003e(Handle-\u003eIO b)-\u003e[(FilePath,[String])]-\u003ea-\u003eIO b",
          "package": "Pipe",
          "signature": "(Handle-\u003ea-\u003eIO())-\u003e(Handle-\u003eIO b)-\u003e[(FilePath,[String])]-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:pipe-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for the common case of piping from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Process.Pipe",
          "name": "pipeString",
          "package": "Pipe",
          "signature": "[(FilePath, [String])] -\u003e String -\u003e IO String",
          "source": "src/System-Process-Pipe.html#pipeString",
          "type": "function"
        },
        "index": {
          "description": "convenience function for the common case of piping from String to String",
          "hierarchy": "System Process Pipe",
          "module": "System.Process.Pipe",
          "name": "pipeString",
          "normalized": "[(FilePath,[String])]-\u003eString-\u003eIO String",
          "package": "Pipe",
          "partial": "String",
          "signature": "[(FilePath,[String])]-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Pipe/docs/System-Process-Pipe.html#v:pipeString"
      }
    }
  ]
]