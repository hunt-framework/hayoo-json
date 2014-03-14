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
        "word": "executable-path"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe documentation of \u003ca\u003eSystem.Environment.getProgName\u003c/a\u003e says that\n\u003c/p\u003e\u003cp\u003e\"However, this is hard-to-impossible to implement on some non-Unix OSes, \nso instead, for maximum portability, we just return the leafname \nof the program as invoked. Even then there are some differences \nbetween platforms: on Windows, for example, a program invoked as \nfoo is probably really FOO.EXE, and that is what \u003ca\u003egetProgName\u003c/a\u003e will \nreturn.\"\n\u003c/p\u003e\u003cp\u003eThis library tries to fix this issue.\nIt also provides some platform-specific functions (most notably getting\nthe path of the application bundle on OSX). Supported operating\nsystems:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Win32 (tested on Windows XP / x86 only)\n\u003c/li\u003e\u003cli\u003e Mac OS X (tested on Leopard / x86 only)\n\u003c/li\u003e\u003cli\u003e Linux\n\u003c/li\u003e\u003cli\u003e FreeBSD (tested on FreeBSD 6.4)\n\u003c/li\u003e\u003cli\u003e *BSD (with procfs mounted, plus fallback for certain shells; untested)\n\u003c/li\u003e\u003cli\u003e Solaris (untested, and probably works on Solaris 10 only) \n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Environment.Executable",
          "name": "Executable",
          "package": "executable-path",
          "source": "src/System-Environment-Executable.html",
          "type": "module"
        },
        "index": {
          "description": "The documentation of System.Environment.getProgName says that However this is hard-to-impossible to implement on some non-Unix OSes so instead for maximum portability we just return the leafname of the program as invoked Even then there are some differences between platforms on Windows for example program invoked as foo is probably really FOO.EXE and that is what getProgName will return This library tries to fix this issue It also provides some platform-specific functions most notably getting the path of the application bundle on OSX Supported operating systems Win32 tested on Windows XP x86 only Mac OS tested on Leopard x86 only Linux FreeBSD tested on FreeBSD BSD with procfs mounted plus fallback for certain shells untested Solaris untested and probably works on Solaris only",
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "Executable",
          "package": "executable-path",
          "partial": "Executable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.Executable",
          "name": "ScriptPath",
          "package": "executable-path",
          "source": "src/System-Environment-Executable.html#ScriptPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "ScriptPath",
          "package": "executable-path",
          "partial": "Script Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#t:ScriptPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eit was (probably) a proper compiled executable\n\u003c/p\u003e",
          "module": "System.Environment.Executable",
          "name": "Executable",
          "package": "executable-path",
          "signature": "Executable FilePath",
          "source": "src/System-Environment-Executable.html#ScriptPath",
          "type": "function"
        },
        "index": {
          "description": "it was probably proper compiled executable",
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "Executable",
          "package": "executable-path",
          "partial": "Executable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:Executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewe are in GHCi\n\u003c/p\u003e",
          "module": "System.Environment.Executable",
          "name": "Interactive",
          "package": "executable-path",
          "signature": "Interactive",
          "source": "src/System-Environment-Executable.html#ScriptPath",
          "type": "function"
        },
        "index": {
          "description": "we are in GHCi",
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "Interactive",
          "package": "executable-path",
          "partial": "Interactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:Interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eit was a script run by runghc/runhaskell\n\u003c/p\u003e",
          "module": "System.Environment.Executable",
          "name": "RunGHC",
          "package": "executable-path",
          "signature": "RunGHC FilePath",
          "source": "src/System-Environment-Executable.html#ScriptPath",
          "type": "function"
        },
        "index": {
          "description": "it was script run by runghc runhaskell",
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "RunGHC",
          "package": "executable-path",
          "partial": "Run GHC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:RunGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.Executable",
          "name": "getExecutablePath",
          "package": "executable-path",
          "signature": "IO FilePath",
          "source": "src/System-Environment-Executable-Linux.html#getExecutablePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "getExecutablePath",
          "package": "executable-path",
          "partial": "Executable Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:getExecutablePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn experimental hack which tries to figure out if the program\n was run with \u003ccode\u003erunghc\u003c/code\u003e or \u003ccode\u003erunhaskell\u003c/code\u003e or \u003ccode\u003eghci\u003c/code\u003e, and then tries to find \n out the directory of the \u003cem\u003esource\u003c/em\u003e (or object file).\n\u003c/p\u003e\u003cp\u003eGHC only.\n\u003c/p\u003e",
          "module": "System.Environment.Executable",
          "name": "getScriptPath",
          "package": "executable-path",
          "signature": "IO ScriptPath",
          "source": "src/System-Environment-Executable.html#getScriptPath",
          "type": "function"
        },
        "index": {
          "description": "An experimental hack which tries to figure out if the program was run with runghc or runhaskell or ghci and then tries to find out the directory of the source or object file GHC only",
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "getScriptPath",
          "package": "executable-path",
          "partial": "Script Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:getScriptPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.Executable",
          "name": "splitExecutablePath",
          "package": "executable-path",
          "signature": "IO (FilePath, FilePath)",
          "source": "src/System-Environment-Executable.html#splitExecutablePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment Executable",
          "module": "System.Environment.Executable",
          "name": "splitExecutablePath",
          "normalized": "IO(FilePath,FilePath)",
          "package": "executable-path",
          "partial": "Executable Path",
          "signature": "IO(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/executable-path/docs/System-Environment-Executable.html#v:splitExecutablePath"
      }
    }
  ]
]