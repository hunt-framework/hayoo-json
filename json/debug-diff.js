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
        "word": "debug-diff"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay the difference between two Haskell values,\n with control over the diff parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "source": "src/Debug-Diff-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Display the difference between two Haskell values with control over the diff parameters",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the diff command\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "source": "src/Debug-Diff-Config.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the diff command",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "signature": "Config",
          "source": "src/Debug-Diff-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "Config",
          "package": "debug-diff",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtra arguments to the diff command.\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "args",
          "package": "debug-diff",
          "signature": "[String]",
          "source": "src/Debug-Diff-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Extra arguments to the diff command",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "args",
          "normalized": "[String]",
          "package": "debug-diff",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiff command; \u003ccode\u003ecolordiff\u003c/code\u003e by default.\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "command",
          "package": "debug-diff",
          "signature": "String",
          "source": "src/Debug-Diff-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Diff command colordiff by default",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "command",
          "package": "debug-diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLines of context, for a unified diff.\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "context",
          "package": "debug-diff",
          "signature": "Maybe Int",
          "source": "src/Debug-Diff-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Lines of context for unified diff",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "context",
          "package": "debug-diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default configuration.\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "defConfig",
          "package": "debug-diff",
          "signature": "Config",
          "source": "src/Debug-Diff-Config.html#defConfig",
          "type": "function"
        },
        "index": {
          "description": "default configuration",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "defConfig",
          "package": "debug-diff",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:defConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a colorized diff between two Haskell values.\n\u003c/p\u003e",
          "module": "[\"Debug.Diff.Config\",\"Debug.Diff\"]",
          "name": "diff",
          "package": "debug-diff",
          "signature": "a -\u003e b -\u003e IO ()",
          "source": "src/Debug-Diff-Config.html#diff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:diff\",\"http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff.html#v:diff\"]"
        },
        "index": {
          "description": "Display colorized diff between two Haskell values",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "diff",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "debug-diff",
          "signature": "a-\u003eb-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay the difference between two Haskell values,\n with control over the diff parameters.\n\u003c/p\u003e",
          "module": "Debug.Diff.Config",
          "name": "diffWith",
          "package": "debug-diff",
          "signature": "Config -\u003e a -\u003e b -\u003e IO ()",
          "source": "src/Debug-Diff-Config.html#diffWith",
          "type": "function"
        },
        "index": {
          "description": "Display the difference between two Haskell values with control over the diff parameters",
          "hierarchy": "Debug Diff Config",
          "module": "Debug.Diff.Config",
          "name": "diffWith",
          "normalized": "Config-\u003ea-\u003eb-\u003eIO()",
          "package": "debug-diff",
          "partial": "With",
          "signature": "Config-\u003ea-\u003eb-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff-Config.html#v:diffWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay a colorized diff between two Haskell values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.Diff",
          "name": "Diff",
          "package": "debug-diff",
          "source": "src/Debug-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "Display colorized diff between two Haskell values",
          "hierarchy": "Debug Diff",
          "module": "Debug.Diff",
          "name": "Diff",
          "package": "debug-diff",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/debug-diff/docs/Debug-Diff.html#"
      }
    }
  ]
]