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
        "word": "Hclip"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esystem clipboard. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hclip",
          "name": "Hclip",
          "package": "Hclip",
          "source": "src/System-Hclip.html",
          "type": "module"
        },
        "index": {
          "description": "system clipboard",
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "Hclip",
          "package": "Hclip",
          "partial": "Hclip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError Types\n\u003c/p\u003e",
          "module": "System.Hclip",
          "name": "ClipboardError",
          "package": "Hclip",
          "source": "src/System-Hclip.html#ClipboardError",
          "type": "data"
        },
        "index": {
          "description": "Error Types",
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "ClipboardError",
          "package": "Hclip",
          "partial": "Clipboard Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#t:ClipboardError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hclip",
          "name": "MiscError",
          "package": "Hclip",
          "signature": "MiscError String",
          "source": "src/System-Hclip.html#ClipboardError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "MiscError",
          "package": "Hclip",
          "partial": "Misc Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:MiscError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hclip",
          "name": "MissingCommands",
          "package": "Hclip",
          "signature": "MissingCommands [String]",
          "source": "src/System-Hclip.html#ClipboardError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "MissingCommands",
          "normalized": "MissingCommands[String]",
          "package": "Hclip",
          "partial": "Missing Commands",
          "signature": "MissingCommands[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:MissingCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hclip",
          "name": "NoTextualData",
          "package": "Hclip",
          "signature": "NoTextualData",
          "source": "src/System-Hclip.html#ClipboardError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "NoTextualData",
          "package": "Hclip",
          "partial": "No Textual Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:NoTextualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hclip",
          "name": "UnsupportedOS",
          "package": "Hclip",
          "signature": "UnsupportedOS String",
          "source": "src/System-Hclip.html#ClipboardError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "UnsupportedOS",
          "package": "Hclip",
          "partial": "Unsupported OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:UnsupportedOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead clipboard contents.\n\u003c/p\u003e",
          "module": "System.Hclip",
          "name": "getClipboard",
          "package": "Hclip",
          "signature": "IO (Either ClipboardError String)",
          "source": "src/System-Hclip.html#getClipboard",
          "type": "function"
        },
        "index": {
          "description": "Read clipboard contents",
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "getClipboard",
          "package": "Hclip",
          "partial": "Clipboard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:getClipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply function to clipboard and return its new contents.\n\u003c/p\u003e",
          "module": "System.Hclip",
          "name": "modifyClipboard",
          "package": "Hclip",
          "signature": "(String -\u003e String) -\u003e IO (Either ClipboardError String)",
          "source": "src/System-Hclip.html#modifyClipboard",
          "type": "function"
        },
        "index": {
          "description": "Apply function to clipboard and return its new contents",
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "modifyClipboard",
          "normalized": "(String-\u003eString)-\u003eIO(Either ClipboardError String)",
          "package": "Hclip",
          "partial": "Clipboard",
          "signature": "(String-\u003eString)-\u003eIO(Either ClipboardError String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:modifyClipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet clipboard contents.\n\u003c/p\u003e",
          "module": "System.Hclip",
          "name": "setClipboard",
          "package": "Hclip",
          "signature": "String -\u003e IO (Either ClipboardError String)",
          "source": "src/System-Hclip.html#setClipboard",
          "type": "function"
        },
        "index": {
          "description": "Set clipboard contents",
          "hierarchy": "System Hclip",
          "module": "System.Hclip",
          "name": "setClipboard",
          "normalized": "String-\u003eIO(Either ClipboardError String)",
          "package": "Hclip",
          "partial": "Clipboard",
          "signature": "String-\u003eIO(Either ClipboardError String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hclip/docs/System-Hclip.html#v:setClipboard"
      }
    }
  ]
]