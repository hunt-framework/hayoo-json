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
        "word": "shell-escape"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTyped shell escaping for Bourne Shell and Bash.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ShellEscape",
          "name": "ShellEscape",
          "package": "shell-escape",
          "source": "src/Text-ShellEscape.html",
          "type": "module"
        },
        "index": {
          "description": "Typed shell escaping for Bourne Shell and Bash",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "ShellEscape",
          "package": "shell-escape",
          "partial": "Shell Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bash escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The strings are wrapped in \u003ccode\u003e$'...'\u003c/code\u003e if any\n    bytes within them must be escaped; otherwise, they are left as is.\n    Newlines and other control characters are represented as ANSI escape\n    sequences. High bytes are represented as hex codes. Thus Bash escaped\n    strings will always fit on one line and never contain non-ASCII bytes.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "Bash",
          "package": "shell-escape",
          "source": "src/Text-ShellEscape-Bash.html#Bash",
          "type": "data"
        },
        "index": {
          "description": "Bash escaped ByteString The strings are wrapped in if any bytes within them must be escaped otherwise they are left as is Newlines and other control characters are represented as ANSI escape sequences High bytes are represented as hex codes Thus Bash escaped strings will always fit on one line and never contain non-ASCII bytes",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "Bash",
          "package": "shell-escape",
          "partial": "Bash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Bash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for objects that represent an intermediate state of\n    escaping.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "Escape",
          "package": "shell-escape",
          "source": "src/Text-ShellEscape-Escape.html#Escape",
          "type": "class"
        },
        "index": {
          "description": "type class for objects that represent an intermediate state of escaping",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "Escape",
          "package": "shell-escape",
          "partial": "Escape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bourne Shell escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. An oddity of Bourne shell escaping is\n    the absence of escape codes for newline and other ASCII control\n    characters. These bytes are simply placed literally in single quotes; the\n    effect is that a Bourne Shell escaped string may cover several lines and\n    contain non-ASCII bytes. Runs of bytes that must be escaped are wrapped in\n    \u003ccode\u003e'...'\u003c/code\u003e; bytes that are acceptable as literals in Bourne Shell are left\n    as is.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "Sh",
          "package": "shell-escape",
          "source": "src/Text-ShellEscape-Sh.html#Sh",
          "type": "data"
        },
        "index": {
          "description": "Bourne Shell escaped ByteString An oddity of Bourne shell escaping is the absence of escape codes for newline and other ASCII control characters These bytes are simply placed literally in single quotes the effect is that Bourne Shell escaped string may cover several lines and contain non-ASCII bytes Runs of bytes that must be escaped are wrapped in bytes that are acceptable as literals in Bourne Shell are left as is",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "Sh",
          "package": "shell-escape",
          "partial": "Sh",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Bash escaped intermediate form.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "bash",
          "package": "shell-escape",
          "signature": "ByteString -\u003e Bash",
          "source": "src/Text-ShellEscape-Bash.html#bash",
          "type": "function"
        },
        "index": {
          "description": "Construct Bash escaped intermediate form",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "bash",
          "normalized": "ByteString-\u003eBash",
          "package": "shell-escape",
          "signature": "ByteString-\u003eBash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:bash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "bytes",
          "package": "shell-escape",
          "signature": "t -\u003e ByteString",
          "source": "src/Text-ShellEscape-Escape.html#bytes",
          "type": "method"
        },
        "index": {
          "description": "Yield the escaped ByteString",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "bytes",
          "normalized": "a-\u003eByteString",
          "package": "shell-escape",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into the escaped intermediate form.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "escape",
          "package": "shell-escape",
          "signature": "ByteString -\u003e t",
          "source": "src/Text-ShellEscape-Escape.html#escape",
          "type": "method"
        },
        "index": {
          "description": "Transform ByteString into the escaped intermediate form",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "escape",
          "normalized": "ByteString-\u003ea",
          "package": "shell-escape",
          "signature": "ByteString-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Bourne Shell escaped intermediate form.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "sh",
          "package": "shell-escape",
          "signature": "ByteString -\u003e Sh",
          "source": "src/Text-ShellEscape-Sh.html#sh",
          "type": "function"
        },
        "index": {
          "description": "Construct Bourne Shell escaped intermediate form",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "sh",
          "normalized": "ByteString-\u003eSh",
          "package": "shell-escape",
          "signature": "ByteString-\u003eSh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecover the original \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ShellEscape",
          "name": "unescape",
          "package": "shell-escape",
          "signature": "t -\u003e ByteString",
          "source": "src/Text-ShellEscape-Escape.html#unescape",
          "type": "method"
        },
        "index": {
          "description": "Recover the original ByteString",
          "hierarchy": "Text ShellEscape",
          "module": "Text.ShellEscape",
          "name": "unescape",
          "normalized": "a-\u003eByteString",
          "package": "shell-escape",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:unescape"
      }
    }
  ]
]