[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTyped shell escaping for Bourne Shell and Bash.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "module",
        "fct-source": "src/Text-ShellEscape.html",
        "fct-type": "module",
        "title": "ShellEscape"
      },
      "index": {
        "description": "Typed shell escaping for Bourne Shell and Bash",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "ShellEscape",
        "normalized": "",
        "package": "shell-escape",
        "partial": "Shell Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Bash",
      "description": {
        "fct-descr": "\u003cp\u003eA Bash escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The strings are wrapped in \u003ccode\u003e$'...'\u003c/code\u003e if any\n    bytes within them must be escaped; otherwise, they are left as is.\n    Newlines and other control characters are represented as ANSI escape\n    sequences. High bytes are represented as hex codes. Thus Bash escaped\n    strings will always fit on one line and never contain non-ASCII bytes.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "data",
        "fct-source": "src/Text-ShellEscape-Bash.html#Bash",
        "fct-type": "data",
        "title": "Bash"
      },
      "index": {
        "description": "Bash escaped ByteString The strings are wrapped in if any bytes within them must be escaped otherwise they are left as is Newlines and other control characters are represented as ANSI escape sequences High bytes are represented as hex codes Thus Bash escaped strings will always fit on one line and never contain non-ASCII bytes",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "Bash",
        "normalized": "",
        "package": "shell-escape",
        "partial": "Bash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Escape",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for objects that represent an intermediate state of\n    escaping.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "class",
        "fct-source": "src/Text-ShellEscape-Escape.html#Escape",
        "fct-type": "class",
        "title": "Escape"
      },
      "index": {
        "description": "type class for objects that represent an intermediate state of escaping",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "Escape",
        "normalized": "",
        "package": "shell-escape",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#t:Sh",
      "description": {
        "fct-descr": "\u003cp\u003eA Bourne Shell escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. An oddity of Bourne shell escaping is\n    the absence of escape codes for newline and other ASCII control\n    characters. These bytes are simply placed literally in single quotes; the\n    effect is that a Bourne Shell escaped string may cover several lines and\n    contain non-ASCII bytes. Runs of bytes that must be escaped are wrapped in\n    \u003ccode\u003e'...'\u003c/code\u003e; bytes that are acceptable as literals in Bourne Shell are left\n    as is.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "data",
        "fct-source": "src/Text-ShellEscape-Sh.html#Sh",
        "fct-type": "data",
        "title": "Sh"
      },
      "index": {
        "description": "Bourne Shell escaped ByteString An oddity of Bourne shell escaping is the absence of escape codes for newline and other ASCII control characters These bytes are simply placed literally in single quotes the effect is that Bourne Shell escaped string may cover several lines and contain non-ASCII bytes Runs of bytes that must be escaped are wrapped in bytes that are acceptable as literals in Bourne Shell are left as is",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "Sh",
        "normalized": "",
        "package": "shell-escape",
        "partial": "Sh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:bash",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Bash escaped intermediate form.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "ByteString -\u003e Bash",
        "fct-source": "src/Text-ShellEscape-Bash.html#bash",
        "fct-type": "function",
        "title": "bash"
      },
      "index": {
        "description": "Construct Bash escaped intermediate form",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "bash",
        "normalized": "ByteString-\u003eBash",
        "package": "shell-escape",
        "partial": "",
        "signature": "ByteString-\u003eBash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:bytes",
      "description": {
        "fct-descr": "\u003cp\u003eYield the escaped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "t -\u003e ByteString",
        "fct-source": "src/Text-ShellEscape-Escape.html#bytes",
        "fct-type": "method",
        "title": "bytes"
      },
      "index": {
        "description": "Yield the escaped ByteString",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "bytes",
        "normalized": "a-\u003eByteString",
        "package": "shell-escape",
        "partial": "",
        "signature": "t-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:escape",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into the escaped intermediate form.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "ByteString -\u003e t",
        "fct-source": "src/Text-ShellEscape-Escape.html#escape",
        "fct-type": "method",
        "title": "escape"
      },
      "index": {
        "description": "Transform ByteString into the escaped intermediate form",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "escape",
        "normalized": "ByteString-\u003ea",
        "package": "shell-escape",
        "partial": "",
        "signature": "ByteString-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:sh",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Bourne Shell escaped intermediate form.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "ByteString -\u003e Sh",
        "fct-source": "src/Text-ShellEscape-Sh.html#sh",
        "fct-type": "function",
        "title": "sh"
      },
      "index": {
        "description": "Construct Bourne Shell escaped intermediate form",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "sh",
        "normalized": "ByteString-\u003eSh",
        "package": "shell-escape",
        "partial": "",
        "signature": "ByteString-\u003eSh"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shell-escape/docs/Text-ShellEscape.html#v:unescape",
      "description": {
        "fct-descr": "\u003cp\u003eRecover the original \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ShellEscape",
        "fct-package": "shell-escape",
        "fct-signature": "t -\u003e ByteString",
        "fct-source": "src/Text-ShellEscape-Escape.html#unescape",
        "fct-type": "method",
        "title": "unescape"
      },
      "index": {
        "description": "Recover the original ByteString",
        "hierarchy": "Text ShellEscape",
        "module": "Text.ShellEscape",
        "name": "unescape",
        "normalized": "a-\u003eByteString",
        "package": "shell-escape",
        "partial": "",
        "signature": "t-\u003eByteString"
      }
    }
  }
]