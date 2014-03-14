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
        "word": "setenv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.SetEnv",
          "name": "SetEnv",
          "package": "setenv",
          "source": "src/System-SetEnv.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System SetEnv",
          "module": "System.SetEnv",
          "name": "SetEnv",
          "package": "setenv",
          "partial": "Set Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/setenv/docs/System-SetEnv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetEnv name value\u003c/code\u003e sets the specified environment variable to \u003ccode\u003evalue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Windows setting an environment variable to the \u003cem\u003eempty string\u003c/em\u003e removes\n that environment variable from the environment.  For the sake of\n compatibility we adopt that behavior.  In particular\n\u003c/p\u003e\u003cpre\u003e\n setEnv name \"\"\n\u003c/pre\u003e\u003cp\u003ehas the same effect as\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eunsetEnv\u003c/a\u003e\u003c/code\u003e name\n\u003c/pre\u003e\u003cp\u003eIf you don't care about Windows support and want to set an environment\n variable to the empty string use \u003ccode\u003eSystem.Posix.Env.setEnv\u003c/code\u003e from the \u003ccode\u003eunix\u003c/code\u003e\n package instead.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ename\u003c/code\u003e is the empty string or\n contains an equals sign.\n\u003c/p\u003e",
          "module": "System.SetEnv",
          "name": "setEnv",
          "package": "setenv",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/System-SetEnv.html#setEnv",
          "type": "function"
        },
        "index": {
          "description": "setEnv name value sets the specified environment variable to value On Windows setting an environment variable to the empty string removes that environment variable from the environment For the sake of compatibility we adopt that behavior In particular setEnv name has the same effect as unsetEnv name If you don care about Windows support and want to set an environment variable to the empty string use System.Posix.Env.setEnv from the unix package instead Throws IOException if name is the empty string or contains an equals sign",
          "hierarchy": "System SetEnv",
          "module": "System.SetEnv",
          "name": "setEnv",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "setenv",
          "partial": "Env",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/setenv/docs/System-SetEnv.html#v:setEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunsetEnv name\u003c/code\u003e removes the specified environment variable from the\n environment of the current process.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003ename\u003c/code\u003e is the empty string or\n contains an equals sign.\n\u003c/p\u003e",
          "module": "System.SetEnv",
          "name": "unsetEnv",
          "package": "setenv",
          "signature": "String -\u003e IO ()",
          "source": "src/System-SetEnv.html#unsetEnv",
          "type": "function"
        },
        "index": {
          "description": "unsetEnv name removes the specified environment variable from the environment of the current process Throws IOException if name is the empty string or contains an equals sign",
          "hierarchy": "System SetEnv",
          "module": "System.SetEnv",
          "name": "unsetEnv",
          "normalized": "String-\u003eIO()",
          "package": "setenv",
          "partial": "Env",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/setenv/docs/System-SetEnv.html#v:unsetEnv"
      }
    }
  ]
]