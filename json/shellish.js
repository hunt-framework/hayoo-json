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
        "word": "shellish"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for shell-like / perl-like programming in Haskell. The stuff in\n here is not pretty, but it does get job done. The functionality provided by\n this module is (unlike standard Haskell filesystem functionality)\n thread-safe: each ShIO maintains its own environment and its own working\n directory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shellish",
          "name": "Shellish",
          "package": "shellish",
          "source": "src/Shellish.html",
          "type": "module"
        },
        "index": {
          "description": "module for shell-like perl-like programming in Haskell The stuff in here is not pretty but it does get job done The functionality provided by this module is unlike standard Haskell filesystem functionality thread-safe each ShIO maintains its own environment and its own working directory",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "Shellish",
          "package": "shellish",
          "partial": "Shellish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "MemTime",
          "package": "shellish",
          "source": "src/Shellish.html#MemTime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "MemTime",
          "package": "shellish",
          "partial": "Mem Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#t:MemTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "RunFailed",
          "package": "shellish",
          "source": "src/Shellish.html#RunFailed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "RunFailed",
          "package": "shellish",
          "partial": "Run Failed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#t:RunFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "ShIO",
          "package": "shellish",
          "source": "src/Shellish.html#ShIO",
          "type": "type"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "ShIO",
          "package": "shellish",
          "partial": "Sh IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#t:ShIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix shorthand for \u003ca\u003erun\u003c/a\u003e. Write \u003ccode\u003e\"command\" # [ \"argument\" ... ]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "(#)",
          "package": "shellish",
          "signature": "String -\u003e [String] -\u003e ShIO String",
          "source": "src/Shellish.html#%23",
          "type": "function"
        },
        "index": {
          "description": "An infix shorthand for run Write command argument",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "(#) #",
          "normalized": "String-\u003e[String]-\u003eShIO String",
          "package": "shellish",
          "signature": "String-\u003e[String]-\u003eShIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functor-lifting function composition.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "(\u003c$$\u003e)",
          "package": "shellish",
          "signature": "(b -\u003e c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "source": "src/Shellish.html#%3C%24%24%3E",
          "type": "function"
        },
        "index": {
          "description": "functor-lifting function composition",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "(\u003c$$\u003e) \u003c$$\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed a)-\u003ec-\u003ed b",
          "package": "shellish",
          "signature": "(b-\u003ec)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:-60--36--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "(\u003c$\u003e)",
          "package": "shellish",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "shellish",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice alias for \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "(\u003c/\u003e)",
          "package": "shellish",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "type": "function"
        },
        "index": {
          "description": "nice alias for combine",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "shellish",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e, for people who like that sort of thing.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "(\u003c.\u003e)",
          "package": "shellish",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "type": "function"
        },
        "index": {
          "description": "Alias to addExtension for people who like that sort of thing",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "shellish",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "MemTime",
          "package": "shellish",
          "signature": "MemTime Rational Double",
          "source": "src/Shellish.html#MemTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "MemTime",
          "package": "shellish",
          "partial": "Mem Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:MemTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "RunFailed",
          "package": "shellish",
          "signature": "RunFailed String Int String",
          "source": "src/Shellish.html#RunFailed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "RunFailed",
          "package": "shellish",
          "partial": "Run Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:RunFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a String to a file.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "appendfile",
          "package": "shellish",
          "signature": "FilePath -\u003e String -\u003e ShIO ()",
          "source": "src/Shellish.html#appendfile",
          "type": "function"
        },
        "index": {
          "description": "Append String to file",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "appendfile",
          "normalized": "FilePath-\u003eString-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eString-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:appendfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a (reasonably) canonic file path to a filesystem object. Based on\n \u003ca\u003ecanonicalizePath\u003c/a\u003e in System.FilePath.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "canonic",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO FilePath",
          "source": "src/Shellish.html#canonic",
          "type": "function"
        },
        "index": {
          "description": "Obtain reasonably canonic file path to filesystem object Based on canonicalizePath in System.FilePath",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "canonic",
          "normalized": "FilePath-\u003eShIO FilePath",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:canonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception in the ShIO monad.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "catch_sh",
          "package": "shellish",
          "signature": "ShIO a -\u003e (e -\u003e ShIO a) -\u003e ShIO a",
          "source": "src/Shellish.html#catch_sh",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception in the ShIO monad",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "catch_sh",
          "normalized": "ShIO a-\u003e(b-\u003eShIO a)-\u003eShIO a",
          "package": "shellish",
          "signature": "ShIO a-\u003e(e-\u003eShIO a)-\u003eShIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:catch_sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to catch any exception (same as\n \u003ccode\u003e... \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e (e :: SomeException) -\u003e ...\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "catchany",
          "package": "shellish",
          "signature": "IO a -\u003e (SomeException -\u003e IO a) -\u003e IO a",
          "source": "src/Shellish.html#catchany",
          "type": "function"
        },
        "index": {
          "description": "helper to catch any exception same as catch SomeException",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "catchany",
          "normalized": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
          "package": "shellish",
          "signature": "IO a-\u003e(SomeException-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:catchany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange current working directory of ShIO. This does *not* change the\n working directory of the process we are running it. Instead, ShIO keeps\n track of its own workking directory and builds absolute paths internally\n instead of passing down relative paths. This may have performance\n repercussions if you are doing hundreds of thousands of filesystem\n operations. You will want to handle these issues differently in those cases.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "cd",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#cd",
          "type": "function"
        },
        "index": {
          "description": "Change current working directory of ShIO This does not change the working directory of the process we are running it Instead ShIO keeps track of its own workking directory and builds absolute paths internally instead of passing down relative paths This may have performance repercussions if you are doing hundreds of thousands of filesystem operations You will want to handle these issues differently in those cases",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "cd",
          "normalized": "FilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:cd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a file. The second path could be a directory, in which case the\n original file name is used, in that directory.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "cp",
          "package": "shellish",
          "signature": "FilePath -\u003e FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#cp",
          "type": "function"
        },
        "index": {
          "description": "Copy file The second path could be directory in which case the original file name is used in that directory",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "cp",
          "normalized": "FilePath-\u003eFilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eFilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy a file, or a directory recursively.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "cp_r",
          "package": "shellish",
          "signature": "FilePath -\u003e FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#cp_r",
          "type": "function"
        },
        "index": {
          "description": "Copy file or directory recursively",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "cp_r",
          "normalized": "FilePath-\u003eFilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eFilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:cp_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "echo",
          "package": "shellish",
          "signature": "String -\u003e ShIO ()",
          "source": "src/Shellish.html#echo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "echo",
          "normalized": "String-\u003eShIO()",
          "package": "shellish",
          "signature": "String-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "echo_err",
          "package": "shellish",
          "signature": "String -\u003e ShIO ()",
          "source": "src/Shellish.html#echo_err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "echo_err",
          "normalized": "String-\u003eShIO()",
          "package": "shellish",
          "signature": "String-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:echo_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho string to standard (error, when using _err variants) output. The _n\n variants do not print a final newline.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "echo_n",
          "package": "shellish",
          "signature": "String -\u003e ShIO ()",
          "source": "src/Shellish.html#echo_n",
          "type": "function"
        },
        "index": {
          "description": "Echo string to standard error when using err variants output The variants do not print final newline",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "echo_n",
          "normalized": "String-\u003eShIO()",
          "package": "shellish",
          "signature": "String-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:echo_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "echo_n_err",
          "package": "shellish",
          "signature": "String -\u003e ShIO ()",
          "source": "src/Shellish.html#echo_n_err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "echo_n_err",
          "normalized": "String-\u003eShIO()",
          "package": "shellish",
          "signature": "String-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:echo_n_err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList directory recursively (like the POSIX utility \u003ca\u003efind\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "find",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO [String]",
          "source": "src/Shellish.html#find",
          "type": "function"
        },
        "index": {
          "description": "List directory recursively like the POSIX utility find",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "find",
          "normalized": "FilePath-\u003eShIO[String]",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the current value of an environment variable. Both empty and\n non-existent variables give empty string as a result.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "getenv",
          "package": "shellish",
          "signature": "String -\u003e ShIO String",
          "source": "src/Shellish.html#getenv",
          "type": "function"
        },
        "index": {
          "description": "Fetch the current value of an environment variable Both empty and non-existent variables give empty string as result",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "getenv",
          "normalized": "String-\u003eShIO String",
          "package": "shellish",
          "signature": "String-\u003eShIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:getenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike filter, but more conveniently used with String lists, where a\n substring match (TODO: also provide regexps, and maybe globs) is expressed as\n  \u003ccode\u003egrep \"needle\" [ \"the\", \"stack\", \"of\", \"hay\" ]\u003c/code\u003e. Boolean\n predicates just like with \u003ca\u003efilter\u003c/a\u003e are supported too:\n \u003ccode\u003egrep (\"fun\" \u003ccode\u003eisPrefixOf\u003c/code\u003e) [...]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "grep",
          "package": "shellish",
          "signature": "pattern -\u003e [hay] -\u003e [hay]",
          "source": "src/Shellish.html#grep",
          "type": "function"
        },
        "index": {
          "description": "Like filter but more conveniently used with String lists where substring match TODO also provide regexps and maybe globs is expressed as grep needle the stack of hay Boolean predicates just like with filter are supported too grep fun isPrefixOf",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "grep",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "shellish",
          "signature": "pattern-\u003e[hay]-\u003e[hay]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:grep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "lastOutput",
          "package": "shellish",
          "signature": "ShIO ByteString",
          "source": "src/Shellish.html#lastOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "lastOutput",
          "package": "shellish",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:lastOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe output of last external command. See \u003ca\u003erun\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "lastStderr",
          "package": "shellish",
          "signature": "ShIO ByteString",
          "source": "src/Shellish.html#lastStderr",
          "type": "function"
        },
        "index": {
          "description": "The output of last external command See run",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "lastStderr",
          "package": "shellish",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:lastStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shellish",
          "name": "lastStdout",
          "package": "shellish",
          "signature": "ShIO ByteString",
          "source": "src/Shellish.html#lastStdout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "lastStdout",
          "package": "shellish",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:lastStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "liftIO",
          "package": "shellish",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "shellish",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList directory contents. Does *not* include \".\" and \"..\", but it does\n include (other) hidden files.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "ls",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO [String]",
          "source": "src/Shellish.html#ls",
          "type": "function"
        },
        "index": {
          "description": "List directory contents Does not include and but it does include other hidden files",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "ls",
          "normalized": "FilePath-\u003eShIO[String]",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:ls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new directory (fails if the directory exists).\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "mkdir",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#mkdir",
          "type": "function"
        },
        "index": {
          "description": "Create new directory fails if the directory exists",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "mkdir",
          "normalized": "FilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:mkdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new directory, including parents (succeeds if the directory\n already exists).\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "mkdir_p",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#mkdir_p",
          "type": "function"
        },
        "index": {
          "description": "Create new directory including parents succeeds if the directory already exists",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "mkdir_p",
          "normalized": "FilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:mkdir_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently a \u003ca\u003erenameFile\u003c/a\u003e wrapper. TODO: Support cross-filesystem\n move. TODO: Support directory paths in the second parameter, like in \u003ca\u003ecp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "mv",
          "package": "shellish",
          "signature": "FilePath -\u003e FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#mv",
          "type": "function"
        },
        "index": {
          "description": "Currently renameFile wrapper TODO Support cross-filesystem move TODO Support directory paths in the second parameter like in cp",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "mv",
          "normalized": "FilePath-\u003eFilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eFilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:mv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the current (ShIO) working directory.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "pwd",
          "package": "shellish",
          "signature": "ShIO String",
          "source": "src/Shellish.html#pwd",
          "type": "function"
        },
        "index": {
          "description": "Obtain the current ShIO working directory",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "pwd",
          "package": "shellish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:pwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Strictly) read file into a String.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "readfile",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO String",
          "source": "src/Shellish.html#readfile",
          "type": "function"
        },
        "index": {
          "description": "Strictly read file into String",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "readfile",
          "normalized": "FilePath-\u003eShIO String",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:readfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a file. Does not fail if the file already is not there. Does fail\n if the file is not a file.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "rm_f",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#rm_f",
          "type": "function"
        },
        "index": {
          "description": "Remove file Does not fail if the file already is not there Does fail if the file is not file",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "rm_f",
          "normalized": "FilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:rm_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA swiss army cannon for removing things. Actually this goes farther than a\n normal rm -rf, as it will circumvent permission problems for the files we\n own. Use carefully.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "rm_rf",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO ()",
          "source": "src/Shellish.html#rm_rf",
          "type": "function"
        },
        "index": {
          "description": "swiss army cannon for removing things Actually this goes farther than normal rm rf as it will circumvent permission problems for the files we own Use carefully",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "rm_rf",
          "normalized": "FilePath-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:rm_rf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an external command. Takes the command name (no shell allowed,\n just a name of something that can be found via \u003ccode\u003ePATH\u003c/code\u003e; FIXME: setenv'd\n \u003ccode\u003ePATH\u003c/code\u003e is not taken into account, only the one inherited from the actual\n outside environment). Nothing is provided on \u003ca\u003estdin\u003c/a\u003e of the process, and\n \u003ca\u003estdout\u003c/a\u003e and \u003ca\u003estderr\u003c/a\u003e are collected and stored. The \u003ca\u003estdout\u003c/a\u003e is returned as\n a result of \u003ca\u003erun\u003c/a\u003e, and complete outputs are available after the fact using\n \u003ca\u003elastStdout\u003c/a\u003e, \u003ca\u003elastStderr\u003c/a\u003e and \u003ca\u003elastOutput\u003c/a\u003e with the last giving an\n interleaving of both, approximately reflecting the times of their arrival --\n basically what \u003ccode\u003e2\u003e&1\u003c/code\u003e would give you in a shell.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "run",
          "package": "shellish",
          "signature": "String -\u003e [String] -\u003e ShIO String",
          "source": "src/Shellish.html#run",
          "type": "function"
        },
        "index": {
          "description": "Execute an external command Takes the command name no shell allowed just name of something that can be found via PATH FIXME setenv PATH is not taken into account only the one inherited from the actual outside environment Nothing is provided on stdin of the process and stdout and stderr are collected and stored The stdout is returned as result of run and complete outputs are available after the fact using lastStdout lastStderr and lastOutput with the last giving an interleaving of both approximately reflecting the times of their arrival basically what would give you in shell",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "run",
          "normalized": "String-\u003e[String]-\u003eShIO String",
          "package": "shellish",
          "signature": "String-\u003e[String]-\u003eShIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an environment variable. The environment is maintained in ShIO\n internally, and is passed to any external commands to be executed.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "setenv",
          "package": "shellish",
          "signature": "String -\u003e String -\u003e ShIO ()",
          "source": "src/Shellish.html#setenv",
          "type": "function"
        },
        "index": {
          "description": "Set an environment variable The environment is maintained in ShIO internally and is passed to any external commands to be executed",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "setenv",
          "normalized": "String-\u003eString-\u003eShIO()",
          "package": "shellish",
          "signature": "String-\u003eString-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:setenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter a ShIO from (Monad)IO. The environment and working directories are\n inherited from the current process-wide values. Any subsequent changes in\n processwide working directory or environment are not reflected in the\n running ShIO.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "shellish",
          "package": "shellish",
          "signature": "ShIO a -\u003e m a",
          "source": "src/Shellish.html#shellish",
          "type": "function"
        },
        "index": {
          "description": "Enter ShIO from Monad IO The environment and working directories are inherited from the current process-wide values Any subsequent changes in processwide working directory or environment are not reflected in the running ShIO",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "shellish",
          "normalized": "ShIO a-\u003eb a",
          "package": "shellish",
          "signature": "ShIO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:shellish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-ShIO in which external command outputs are not echoed. See \u003ca\u003esub\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "silently",
          "package": "shellish",
          "signature": "ShIO a -\u003e ShIO a",
          "source": "src/Shellish.html#silently",
          "type": "function"
        },
        "index": {
          "description": "Create sub-ShIO in which external command outputs are not echoed See sub",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "silently",
          "normalized": "ShIO a-\u003eShIO a",
          "package": "shellish",
          "signature": "ShIO a-\u003eShIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:silently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnter a sub-ShIO. The new ShIO inherits the environment and working\n directory from the current one, but the sub-ShIO cannot affect the current\n one. Exceptions are propagated normally.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "sub",
          "package": "shellish",
          "signature": "ShIO a -\u003e ShIO a",
          "source": "src/Shellish.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Enter sub-ShIO The new ShIO inherits the environment and working directory from the current one but the sub-ShIO cannot affect the current one Exceptions are propagated normally",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "sub",
          "normalized": "ShIO a-\u003eShIO a",
          "package": "shellish",
          "signature": "ShIO a-\u003eShIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing directory?\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "test_d",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO Bool",
          "source": "src/Shellish.html#test_d",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing directory",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "test_d",
          "normalized": "FilePath-\u003eShIO Bool",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:test_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing filesystem object?\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "test_e",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO Bool",
          "source": "src/Shellish.html#test_e",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing filesystem object",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "test_e",
          "normalized": "FilePath-\u003eShIO Bool",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:test_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to an existing file?\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "test_f",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO Bool",
          "source": "src/Shellish.html#test_f",
          "type": "function"
        },
        "index": {
          "description": "Does path point to an existing file",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "test_f",
          "normalized": "FilePath-\u003eShIO Bool",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:test_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path point to a symlink?\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "test_s",
          "package": "shellish",
          "signature": "FilePath -\u003e ShIO Bool",
          "source": "src/Shellish.html#test_s",
          "type": "function"
        },
        "index": {
          "description": "Does path point to symlink",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "test_s",
          "normalized": "FilePath-\u003eShIO Bool",
          "package": "shellish",
          "signature": "FilePath-\u003eShIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:test_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a ShIO computation and collect timing (TODO: and memory) information.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "time",
          "package": "shellish",
          "signature": "ShIO a -\u003e ShIO (MemTime, a)",
          "source": "src/Shellish.html#time",
          "type": "function"
        },
        "index": {
          "description": "Run ShIO computation and collect timing TODO and memory information",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "time",
          "normalized": "ShIO a-\u003eShIO(MemTime,a)",
          "package": "shellish",
          "signature": "ShIO a-\u003eShIO(MemTime,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sub-ShIO in which external command outputs are echoed. See \u003ca\u003esub\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "verbosely",
          "package": "shellish",
          "signature": "ShIO a -\u003e ShIO a",
          "source": "src/Shellish.html#verbosely",
          "type": "function"
        },
        "index": {
          "description": "Create sub-ShIO in which external command outputs are echoed See sub",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "verbosely",
          "normalized": "ShIO a-\u003eShIO a",
          "package": "shellish",
          "signature": "ShIO a-\u003eShIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:verbosely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic-conditional version of the \u003ca\u003ewhen\u003c/a\u003e guard.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "whenM",
          "package": "shellish",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Shellish.html#whenM",
          "type": "function"
        },
        "index": {
          "description": "monadic-conditional version of the when guard",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "whenM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "shellish",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a full path to an executable on \u003ccode\u003ePATH\u003c/code\u003e, if exists. FIXME does not\n respect setenv'd environment and uses \u003ccode\u003ePATH\u003c/code\u003e inherited from the process\n environment.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "which",
          "package": "shellish",
          "signature": "String -\u003e ShIO (Maybe FilePath)",
          "source": "src/Shellish.html#which",
          "type": "function"
        },
        "index": {
          "description": "Get full path to an executable on PATH if exists FIXME does not respect setenv environment and uses PATH inherited from the process environment",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "which",
          "normalized": "String-\u003eShIO(Maybe FilePath)",
          "package": "shellish",
          "signature": "String-\u003eShIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:which"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a temporary directory and pass it as a parameter to a ShIO\n computation. The directory is nuked afterwards.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "withTmpDir",
          "package": "shellish",
          "signature": "(FilePath -\u003e ShIO a) -\u003e ShIO a",
          "source": "src/Shellish.html#withTmpDir",
          "type": "function"
        },
        "index": {
          "description": "Create temporary directory and pass it as parameter to ShIO computation The directory is nuked afterwards",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "withTmpDir",
          "normalized": "(FilePath-\u003eShIO a)-\u003eShIO a",
          "package": "shellish",
          "partial": "Tmp Dir",
          "signature": "(FilePath-\u003eShIO a)-\u003eShIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:withTmpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a String to a file.\n\u003c/p\u003e",
          "module": "Shellish",
          "name": "writefile",
          "package": "shellish",
          "signature": "FilePath -\u003e String -\u003e ShIO ()",
          "source": "src/Shellish.html#writefile",
          "type": "function"
        },
        "index": {
          "description": "Write String to file",
          "hierarchy": "Shellish",
          "module": "Shellish",
          "name": "writefile",
          "normalized": "FilePath-\u003eString-\u003eShIO()",
          "package": "shellish",
          "signature": "FilePath-\u003eString-\u003eShIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shellish/docs/Shellish.html#v:writefile"
      }
    }
  ]
]