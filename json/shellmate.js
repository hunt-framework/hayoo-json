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
        "word": "shellmate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple interface for shell scripting-like tasks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Shell",
          "name": "Shell",
          "package": "shellmate",
          "source": "src/Control-Shell.html",
          "type": "module"
        },
        "index": {
          "description": "Simple interface for shell scripting-like tasks",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "Shell",
          "package": "shellmate",
          "partial": "Shell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Shell",
          "name": "Guard",
          "package": "shellmate",
          "source": "src/Control-Shell.html#Guard",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "Guard",
          "package": "shellmate",
          "partial": "Guard",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#t:Guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for running shell commands. If a command fails, the entire\n   computation is aborted unless \u003ccode\u003emayFail\u003c/code\u003e is used.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "Shell",
          "package": "shellmate",
          "source": "src/Control-Shell.html#Shell",
          "type": "data"
        },
        "index": {
          "description": "Monad for running shell commands If command fails the entire computation is aborted unless mayFail is used",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "Shell",
          "package": "shellmate",
          "partial": "Shell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#t:Shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange working directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "cd",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#cd",
          "type": "function"
        },
        "index": {
          "description": "Change working directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "cd",
          "normalized": "FilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a file. Fails if the source is a directory. If the target is a\n   directory, the source file is copied into that directory using its current\n   name.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "cp",
          "package": "shellmate",
          "signature": "FilePath -\u003e FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#cp",
          "type": "function"
        },
        "index": {
          "description": "Copy file Fails if the source is directory If the target is directory the source file is copied into that directory using its current name",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "cp",
          "normalized": "FilePath-\u003eFilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003eFilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively copy a directory. If the target is a directory that already\n   exists, the source directory is copied into that directory using its\n   current name.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "cpDir",
          "package": "shellmate",
          "signature": "FilePath -\u003e FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#cpDir",
          "type": "function"
        },
        "index": {
          "description": "Recursively copy directory If the target is directory that already exists the source directory is copied into that directory using its current name",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "cpDir",
          "normalized": "FilePath-\u003eFilePath-\u003eShell()",
          "package": "shellmate",
          "partial": "Dir",
          "signature": "FilePath-\u003eFilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:cpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively copy a directory, but omit all files that do not match the\n   give predicate.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "cpFiltered",
          "package": "shellmate",
          "signature": "(FilePath -\u003e Bool) -\u003e FilePath -\u003e FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#cpFiltered",
          "type": "function"
        },
        "index": {
          "description": "Recursively copy directory but omit all files that do not match the give predicate",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "cpFiltered",
          "normalized": "(FilePath-\u003eBool)-\u003eFilePath-\u003eFilePath-\u003eShell()",
          "package": "shellmate",
          "partial": "Filtered",
          "signature": "(FilePath-\u003eBool)-\u003eFilePath-\u003eFilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:cpFiltered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eputStrLn\u003c/code\u003e lifted into Shell for convenience.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "echo",
          "package": "shellmate",
          "signature": "String -\u003e Shell ()",
          "source": "src/Control-Shell.html#echo",
          "type": "function"
        },
        "index": {
          "description": "putStrLn lifted into Shell for convenience",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "echo",
          "normalized": "String-\u003eShell()",
          "package": "shellmate",
          "signature": "String-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Shell",
          "name": "file",
          "package": "shellmate",
          "signature": "FilePath -\u003e a",
          "source": "src/Control-Shell.html#file",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "file",
          "normalized": "FilePath-\u003ea",
          "package": "shellmate",
          "signature": "FilePath-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action on each file in the given directory.\n   This function will traverse any subdirectories of the given as well.\n   File paths are given relative to the given directory; the current working\n   directory is not affected.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "forEachFile",
          "package": "shellmate",
          "signature": "FilePath -\u003e (FilePath -\u003e Shell a) -\u003e Shell [a]",
          "source": "src/Control-Shell.html#forEachFile",
          "type": "function"
        },
        "index": {
          "description": "Perform an action on each file in the given directory This function will traverse any subdirectories of the given as well File paths are given relative to the given directory the current working directory is not affected",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "forEachFile",
          "normalized": "FilePath-\u003e(FilePath-\u003eShell a)-\u003eShell[a]",
          "package": "shellmate",
          "partial": "Each File",
          "signature": "FilePath-\u003e(FilePath-\u003eShell a)-\u003eShell[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:forEachFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a program and return a boolean indicating whether the command\n   succeeded, the output from stdout, and the output from stderr.\n   This command will never fail.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "genericRun",
          "package": "shellmate",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e Shell (Bool, String, String)",
          "source": "src/Control-Shell.html#genericRun",
          "type": "function"
        },
        "index": {
          "description": "Run program and return boolean indicating whether the command succeeded the output from stdout and the output from stderr This command will never fail",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "genericRun",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eShell(Bool,String,String)",
          "package": "shellmate",
          "partial": "Run",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eShell(Bool,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:genericRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an environment variable. Returns the empty string if\n   the variable doesn't exist.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "getEnv",
          "package": "shellmate",
          "signature": "String -\u003e Shell String",
          "source": "src/Control-Shell.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an environment variable Returns the empty string if the variable doesn exist",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "getEnv",
          "normalized": "String-\u003eShell String",
          "package": "shellmate",
          "partial": "Env",
          "signature": "String-\u003eShell String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a Shell computation; if the computation succeeds but returns\n   a false-ish value, the outer Shell computation fails with the given\n   error message.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "guard",
          "package": "shellmate",
          "signature": "String -\u003e guard -\u003e Shell a",
          "source": "src/Control-Shell.html#guard",
          "type": "method"
        },
        "index": {
          "description": "Perform Shell computation if the computation succeeds but returns false-ish value the outer Shell computation fails with the given error message",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "guard",
          "normalized": "String-\u003ea-\u003eShell b",
          "package": "shellmate",
          "signature": "String-\u003eguard-\u003eShell a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO.hPutStr\u003c/code\u003e lifted into Shell for convenience.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "hPutStr",
          "package": "shellmate",
          "signature": "Handle -\u003e String -\u003e Shell ()",
          "source": "src/Control-Shell.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "IO.hPutStr lifted into Shell for convenience",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eShell()",
          "package": "shellmate",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO.hPutStrLn\u003c/code\u003e lifted into Shell for convenience.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "hPutStrLn",
          "package": "shellmate",
          "signature": "Handle -\u003e String -\u003e Shell ()",
          "source": "src/Control-Shell.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "IO.hPutStrLn lifted into Shell for convenience",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eShell()",
          "package": "shellmate",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something *in* the given application's data directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "inAppDirectory",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#inAppDirectory",
          "type": "function"
        },
        "index": {
          "description": "Do something in the given application data directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "inAppDirectory",
          "normalized": "FilePath-\u003eShell a-\u003eShell a",
          "package": "shellmate",
          "partial": "App Directory",
          "signature": "FilePath-\u003eShell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:inAppDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a command in the given working directory, then restore the\n   previous working directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "inDirectory",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#inDirectory",
          "type": "function"
        },
        "index": {
          "description": "Execute command in the given working directory then restore the previous working directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "inDirectory",
          "normalized": "FilePath-\u003eShell a-\u003eShell a",
          "package": "shellmate",
          "partial": "Directory",
          "signature": "FilePath-\u003eShell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:inDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something *in* the user's home directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "inHomeDirectory",
          "package": "shellmate",
          "signature": "Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#inHomeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Do something in the user home directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "inHomeDirectory",
          "normalized": "Shell a-\u003eShell a",
          "package": "shellmate",
          "partial": "Home Directory",
          "signature": "Shell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:inHomeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a command inside a temporary directory. The directory will be\n   cleaned up after the command finishes.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "inTempDirectory",
          "package": "shellmate",
          "signature": "Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#inTempDirectory",
          "type": "function"
        },
        "index": {
          "description": "Performs command inside temporary directory The directory will be cleaned up after the command finishes",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "inTempDirectory",
          "normalized": "Shell a-\u003eShell a",
          "package": "shellmate",
          "partial": "Temp Directory",
          "signature": "Shell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:inTempDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given path lead to a directory?\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "isDirectory",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell Bool",
          "source": "src/Control-Shell.html#isDirectory",
          "type": "function"
        },
        "index": {
          "description": "Does the given path lead to directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "isDirectory",
          "normalized": "FilePath-\u003eShell Bool",
          "package": "shellmate",
          "partial": "Directory",
          "signature": "FilePath-\u003eShell Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given path lead to a file?\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "isFile",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell Bool",
          "source": "src/Control-Shell.html#isFile",
          "type": "function"
        },
        "index": {
          "description": "Does the given path lead to file",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "isFile",
          "normalized": "FilePath-\u003eShell Bool",
          "package": "shellmate",
          "partial": "File",
          "signature": "FilePath-\u003eShell Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:isFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "liftIO",
          "package": "shellmate",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "shellmate",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an environment variable. Returns Nothing if the variable \n   doesn't exist.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "lookupEnv",
          "package": "shellmate",
          "signature": "String -\u003e Shell (Maybe String)",
          "source": "src/Control-Shell.html#lookupEnv",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an environment variable Returns Nothing if the variable doesn exist",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "lookupEnv",
          "normalized": "String-\u003eShell(Maybe String)",
          "package": "shellmate",
          "partial": "Env",
          "signature": "String-\u003eShell(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:lookupEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList the contents of a directory, sans \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e and '..'.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "ls",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell [FilePath]",
          "source": "src/Control-Shell.html#ls",
          "type": "function"
        },
        "index": {
          "description": "List the contents of directory sans and",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "ls",
          "normalized": "FilePath-\u003eShell[FilePath]",
          "package": "shellmate",
          "signature": "FilePath-\u003eShell[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:ls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action that may fail without aborting the entire computation.\n   Forces serialization.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "mayFail",
          "package": "shellmate",
          "signature": "Shell a -\u003e Shell (Either String a)",
          "source": "src/Control-Shell.html#mayFail",
          "type": "function"
        },
        "index": {
          "description": "Perform an action that may fail without aborting the entire computation Forces serialization",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "mayFail",
          "normalized": "Shell a-\u003eShell(Either String a)",
          "package": "shellmate",
          "partial": "Fail",
          "signature": "Shell a-\u003eShell(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:mayFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a directory. Optionally create any required missing directories as\n   well.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "mkdir",
          "package": "shellmate",
          "signature": "Bool -\u003e FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#mkdir",
          "type": "function"
        },
        "index": {
          "description": "Create directory Optionally create any required missing directories as well",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "mkdir",
          "normalized": "Bool-\u003eFilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "Bool-\u003eFilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename a file.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "mv",
          "package": "shellmate",
          "signature": "FilePath -\u003e FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#mv",
          "type": "function"
        },
        "index": {
          "description": "Rename file",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "mv",
          "normalized": "FilePath-\u003eFilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003eFilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to run the first command. If the first command fails, run the\n   second. Forces serialization of the first command.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "orElse",
          "package": "shellmate",
          "signature": "Shell a -\u003e Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Attempt to run the first command If the first command fails run the second Forces serialization of the first command",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "orElse",
          "normalized": "Shell a-\u003eShell a-\u003eShell a",
          "package": "shellmate",
          "partial": "Else",
          "signature": "Shell a-\u003eShell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current working directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "pwd",
          "package": "shellmate",
          "signature": "Shell FilePath",
          "source": "src/Control-Shell.html#pwd",
          "type": "function"
        },
        "index": {
          "description": "Get the current working directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "pwd",
          "package": "shellmate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "rm",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#rm",
          "type": "function"
        },
        "index": {
          "description": "Remove file",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "rm",
          "normalized": "FilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively remove a directory. Follows symlinks, so be careful.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "rmdir",
          "package": "shellmate",
          "signature": "FilePath -\u003e Shell ()",
          "source": "src/Control-Shell.html#rmdir",
          "type": "function"
        },
        "index": {
          "description": "Recursively remove directory Follows symlinks so be careful",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "rmdir",
          "normalized": "FilePath-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:rmdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external command. No globbing, escaping or other external shell\n   magic is performed on either the command or arguments. The program's text\n   output will be returned, and not echoed to the screen.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "run",
          "package": "shellmate",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e Shell String",
          "source": "src/Control-Shell.html#run",
          "type": "function"
        },
        "index": {
          "description": "Execute an external command No globbing escaping or other external shell magic is performed on either the command or arguments The program text output will be returned and not echoed to the screen",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "run",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eShell String",
          "package": "shellmate",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eShell String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an interactive process.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "runInteractive",
          "package": "shellmate",
          "signature": "FilePath -\u003e [String] -\u003e Shell ()",
          "source": "src/Control-Shell.html#runInteractive",
          "type": "function"
        },
        "index": {
          "description": "Run an interactive process",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "runInteractive",
          "normalized": "FilePath-\u003e[String]-\u003eShell()",
          "package": "shellmate",
          "partial": "Interactive",
          "signature": "FilePath-\u003e[String]-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:runInteractive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003erun\u003c/code\u003e, but echoes the command's text output to the screen instead of\n   returning it.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "run_",
          "package": "shellmate",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e Shell ()",
          "source": "src/Control-Shell.html#run_",
          "type": "function"
        },
        "index": {
          "description": "Like run but echoes the command text output to the screen instead of returning it",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "run_",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eShell()",
          "package": "shellmate",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eShell()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Shell computation. The program's working directory  will be restored \n   after executing the computation.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "shell",
          "package": "shellmate",
          "signature": "Shell a -\u003e IO (Either String a)",
          "source": "src/Control-Shell.html#shell",
          "type": "function"
        },
        "index": {
          "description": "Run Shell computation The program working directory will be restored after executing the computation",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "shell",
          "normalized": "Shell a-\u003eIO(Either String a)",
          "package": "shellmate",
          "signature": "Shell a-\u003eIO(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:shell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a command with elevated privileges.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "sudo",
          "package": "shellmate",
          "signature": "FilePath -\u003e [String] -\u003e String -\u003e Shell String",
          "source": "src/Control-Shell.html#sudo",
          "type": "function"
        },
        "index": {
          "description": "Run command with elevated privileges",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "sudo",
          "normalized": "FilePath-\u003e[String]-\u003eString-\u003eShell String",
          "package": "shellmate",
          "signature": "FilePath-\u003e[String]-\u003eString-\u003eShell String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:sudo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something with the given application's data directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "withAppDirectory",
          "package": "shellmate",
          "signature": "String -\u003e (FilePath -\u003e Shell a) -\u003e Shell a",
          "source": "src/Control-Shell.html#withAppDirectory",
          "type": "function"
        },
        "index": {
          "description": "Do something with the given application data directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "withAppDirectory",
          "normalized": "String-\u003e(FilePath-\u003eShell a)-\u003eShell a",
          "package": "shellmate",
          "partial": "App Directory",
          "signature": "String-\u003e(FilePath-\u003eShell a)-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:withAppDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation with a new value for an environment variable.\n   Note that this will *not* affect external commands spawned using \u003ccode\u003eliftIO\u003c/code\u003e\n   or which directory is considered the system temp directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "withEnv",
          "package": "shellmate",
          "signature": "String -\u003e (String -\u003e String) -\u003e Shell a -\u003e Shell a",
          "source": "src/Control-Shell.html#withEnv",
          "type": "function"
        },
        "index": {
          "description": "Run computation with new value for an environment variable Note that this will not affect external commands spawned using liftIO or which directory is considered the system temp directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "withEnv",
          "normalized": "String-\u003e(String-\u003eString)-\u003eShell a-\u003eShell a",
          "package": "shellmate",
          "partial": "Env",
          "signature": "String-\u003e(String-\u003eString)-\u003eShell a-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:withEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something with the user's home directory.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "withHomeDirectory",
          "package": "shellmate",
          "signature": "(FilePath -\u003e Shell a) -\u003e Shell a",
          "source": "src/Control-Shell.html#withHomeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Do something with the user home directory",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "withHomeDirectory",
          "normalized": "(FilePath-\u003eShell a)-\u003eShell a",
          "package": "shellmate",
          "partial": "Home Directory",
          "signature": "(FilePath-\u003eShell a)-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:withHomeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temp directory in the standard system temp directory, do\n   something with it, then remove it.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "withTempDirectory",
          "package": "shellmate",
          "signature": "String -\u003e (FilePath -\u003e Shell a) -\u003e Shell a",
          "source": "src/Control-Shell.html#withTempDirectory",
          "type": "function"
        },
        "index": {
          "description": "Create temp directory in the standard system temp directory do something with it then remove it",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "withTempDirectory",
          "normalized": "String-\u003e(FilePath-\u003eShell a)-\u003eShell a",
          "package": "shellmate",
          "partial": "Temp Directory",
          "signature": "String-\u003e(FilePath-\u003eShell a)-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:withTempDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temp file in the standard system temp directory, do something\n   with it, then remove it.\n\u003c/p\u003e",
          "module": "Control.Shell",
          "name": "withTempFile",
          "package": "shellmate",
          "signature": "String -\u003e (FilePath -\u003e Handle -\u003e Shell a) -\u003e Shell a",
          "source": "src/Control-Shell.html#withTempFile",
          "type": "function"
        },
        "index": {
          "description": "Create temp file in the standard system temp directory do something with it then remove it",
          "hierarchy": "Control Shell",
          "module": "Control.Shell",
          "name": "withTempFile",
          "normalized": "String-\u003e(FilePath-\u003eHandle-\u003eShell a)-\u003eShell a",
          "package": "shellmate",
          "partial": "Temp File",
          "signature": "String-\u003e(FilePath-\u003eHandle-\u003eShell a)-\u003eShell a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellmate/docs/Control-Shell.html#v:withTempFile"
      }
    }
  ]
]