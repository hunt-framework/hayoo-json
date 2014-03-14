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
        "word": "utf8-env"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous information about the system environment, assuming it was\n encoded in UTF-8. To be used as a drop-in replacement for System.Environment\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Environment.UTF8",
          "name": "UTF8",
          "package": "utf8-env",
          "source": "src/System-Environment-UTF8.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous information about the system environment assuming it was encoded in UTF-8 To be used as drop-in replacement for System.Environment",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "UTF8",
          "package": "utf8-env",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e returns a list of the program's command\n line arguments (not including the program name).\n\u003c/p\u003e",
          "module": "System.Environment.UTF8",
          "name": "getArgs",
          "package": "utf8-env",
          "signature": "IO [String]",
          "source": "src/System-Environment-UTF8.html#getArgs",
          "type": "function"
        },
        "index": {
          "description": "Computation getArgs returns list of the program command line arguments not including the program name",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getArgs",
          "normalized": "IO[String]",
          "package": "utf8-env",
          "partial": "Args",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:getArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetEnv\u003c/a\u003e\u003c/code\u003e \u003ccode\u003evar\u003c/code\u003e returns the value\n of the environment variable \u003ccode\u003evar\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThis computation may fail with:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eSystem.IO.Error.isDoesNotExistError\u003c/code\u003e if the environment variable\n    does not exist.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Environment.UTF8",
          "name": "getEnv",
          "package": "utf8-env",
          "signature": "String -\u003e IO String",
          "source": "src/System-Environment-UTF8.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "Computation getEnv var returns the value of the environment variable var This computation may fail with System.IO.Error.isDoesNotExistError if the environment variable does not exist",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getEnv",
          "normalized": "String-\u003eIO String",
          "package": "utf8-env",
          "partial": "Env",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egetEnvironment\u003c/a\u003e\u003c/code\u003e retrieves the entire environment as a\n list of \u003ccode\u003e(key,value)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eIf an environment entry does not contain an \u003ccode\u003e'='\u003c/code\u003e character,\n the \u003ccode\u003ekey\u003c/code\u003e is the whole entry and the \u003ccode\u003evalue\u003c/code\u003e is the empty string.\n\u003c/p\u003e",
          "module": "System.Environment.UTF8",
          "name": "getEnvironment",
          "package": "utf8-env",
          "signature": "IO [(String, String)]",
          "source": "src/System-Environment-UTF8.html#getEnvironment",
          "type": "function"
        },
        "index": {
          "description": "getEnvironment retrieves the entire environment as list of key value pairs If an environment entry does not contain an character the key is the whole entry and the value is the empty string",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getEnvironment",
          "normalized": "IO[(String,String)]",
          "package": "utf8-env",
          "partial": "Environment",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:getEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e returns the name of the program as it was\n invoked.\n\u003c/p\u003e\u003cp\u003eHowever, this is hard-to-impossible to implement on some non-Unix\n OSes, so instead, for maximum portability, we just return the leafname\n of the program as invoked. Even then there are some differences\n between platforms: on Windows, for example, a program invoked as foo\n is probably really \u003ccode\u003eFOO.EXE\u003c/code\u003e, and that is what \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e will return.\n\u003c/p\u003e",
          "module": "System.Environment.UTF8",
          "name": "getProgName",
          "package": "utf8-env",
          "signature": "IO String",
          "source": "src/System-Environment-UTF8.html#getProgName",
          "type": "function"
        },
        "index": {
          "description": "Computation getProgName returns the name of the program as it was invoked However this is hard-to-impossible to implement on some non-Unix OSes so instead for maximum portability we just return the leafname of the program as invoked Even then there are some differences between platforms on Windows for example program invoked as foo is probably really FOO.EXE and that is what getProgName will return",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getProgName",
          "package": "utf8-env",
          "partial": "Prog Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:getProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithArgs\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eargs act\u003c/code\u003e - while executing action \u003ccode\u003eact\u003c/code\u003e, have \u003ccode\u003e\u003ca\u003egetArgs\u003c/a\u003e\u003c/code\u003e\n return \u003ccode\u003eargs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Environment.UTF8",
          "name": "withArgs",
          "package": "utf8-env",
          "signature": "[String] -\u003e IO a -\u003e IO a",
          "source": "src/System-Environment-UTF8.html#withArgs",
          "type": "function"
        },
        "index": {
          "description": "withArgs args act while executing action act have getArgs return args",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "withArgs",
          "normalized": "[String]-\u003eIO a-\u003eIO a",
          "package": "utf8-env",
          "partial": "Args",
          "signature": "[String]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:withArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithProgName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ename act\u003c/code\u003e - while executing action \u003ccode\u003eact\u003c/code\u003e,\n have \u003ccode\u003e\u003ca\u003egetProgName\u003c/a\u003e\u003c/code\u003e return \u003ccode\u003ename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Environment.UTF8",
          "name": "withProgName",
          "package": "utf8-env",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/System-Environment-UTF8.html#withProgName",
          "type": "function"
        },
        "index": {
          "description": "withProgName name act while executing action act have getProgName return name",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "withProgName",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "utf8-env",
          "partial": "Prog Name",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-env/docs/System-Environment-UTF8.html#v:withProgName"
      }
    }
  ]
]