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
        "word": "progressbar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Progress bar\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ProgressBar",
          "name": "ProgressBar",
          "package": "progressbar",
          "source": "src/ProgressBar.html",
          "type": "module"
        },
        "index": {
          "description": "Progress bar",
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "ProgressBar",
          "package": "progressbar",
          "partial": "Progress Bar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgress bar meter.\n\u003c/p\u003e",
          "module": "ProgressBar",
          "name": "Progress",
          "package": "progressbar",
          "source": "src/ProgressBar.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "Progress bar meter",
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "Progress",
          "package": "progressbar",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ProgressBar",
          "name": "Progress",
          "package": "progressbar",
          "signature": "Progress",
          "source": "src/ProgressBar.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "Progress",
          "package": "progressbar",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a progress bar\n\u003c/p\u003e",
          "module": "ProgressBar",
          "name": "mkProgress",
          "package": "progressbar",
          "signature": "Handle -\u003e IO Progress",
          "source": "src/ProgressBar.html#mkProgress",
          "type": "function"
        },
        "index": {
          "description": "Create progress bar",
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "mkProgress",
          "normalized": "Handle-\u003eIO Progress",
          "package": "progressbar",
          "partial": "Progress",
          "signature": "Handle-\u003eIO Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#v:mkProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis finishes the progressbar \u003cem\u003eNOTE\u003c/em\u003e: it is\n unusable after this\n\u003c/p\u003e",
          "module": "ProgressBar",
          "name": "pr_done",
          "package": "progressbar",
          "signature": "IO ()",
          "source": "src/ProgressBar.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "This finishes the progressbar NOTE it is unusable after this",
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "pr_done",
          "normalized": "IO()",
          "package": "progressbar",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#v:pr_done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis increments the progressbar\n\u003c/p\u003e",
          "module": "ProgressBar",
          "name": "pr_inc",
          "package": "progressbar",
          "signature": "IO ()",
          "source": "src/ProgressBar.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "This increments the progressbar",
          "hierarchy": "ProgressBar",
          "module": "ProgressBar",
          "name": "pr_inc",
          "normalized": "IO()",
          "package": "progressbar",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progressbar/docs/ProgressBar.html#v:pr_inc"
      }
    }
  ]
]