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
        "word": "system-argv0"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Argv0",
          "name": "Argv0",
          "package": "system-argv0",
          "source": "src/System-Argv0.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Argv0",
          "module": "System.Argv0",
          "name": "Argv0",
          "package": "system-argv0",
          "partial": "Argv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-argv0/docs/System-Argv0.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet \u003ccode\u003eargv[0]\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e. This is how the program was invoked, and\n might not correspond to any actual file.\n\u003c/p\u003e\u003cp\u003eUse this instead of \u003ccode\u003eSystem.Environment.getProgName\u003c/code\u003e if you want the full\n path, and not just the last component.\n\u003c/p\u003e",
          "module": "System.Argv0",
          "name": "getArgv0",
          "package": "system-argv0",
          "signature": "IO FilePath",
          "source": "src/System-Argv0.html#getArgv0",
          "type": "function"
        },
        "index": {
          "description": "Get argv as FilePath This is how the program was invoked and might not correspond to any actual file Use this instead of System.Environment.getProgName if you want the full path and not just the last component",
          "hierarchy": "System Argv0",
          "module": "System.Argv0",
          "name": "getArgv0",
          "package": "system-argv0",
          "partial": "Argv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-argv0/docs/System-Argv0.html#v:getArgv0"
      }
    }
  ]
]