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
        "word": "terminal-size"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGet terminal window height and width without ncurses dependency\n\u003c/p\u003e\u003cp\u003eOnly tested to work on GNU/Linux systems\n\u003c/p\u003e\u003cp\u003eBased on answer by Andreas Hammar at \u003ca\u003ehttp://stackoverflow.com/a/12807521/972985\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Terminal.Size",
          "name": "Size",
          "package": "terminal-size",
          "source": "src/System-Console-Terminal-Size.html",
          "type": "module"
        },
        "index": {
          "description": "Get terminal window height and width without ncurses dependency Only tested to work on GNU Linux systems Based on answer by Andreas Hammar at http stackoverflow.com",
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "Size",
          "package": "terminal-size",
          "partial": "Size",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal window width and height\n\u003c/p\u003e",
          "module": "System.Console.Terminal.Size",
          "name": "Window",
          "package": "terminal-size",
          "source": "src/System-Console-Terminal-Size.html#Window",
          "type": "data"
        },
        "index": {
          "description": "Terminal window width and height",
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "Window",
          "package": "terminal-size",
          "partial": "Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminal.Size",
          "name": "Window",
          "package": "terminal-size",
          "signature": "Window",
          "source": "src/System-Console-Terminal-Size.html#Window",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "Window",
          "package": "terminal-size",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet terminal window width and height for a specified file descriptor. If\n it's not attached to a terminal then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Posix\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efdSize stdOutput\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 56, width = 85})\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efd \u003c- openFd \"foo\" ReadWrite (Just stdFileMode) defaultFileFlags\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efdSize fd\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "System.Console.Terminal.Size",
          "name": "fdSize",
          "package": "terminal-size",
          "signature": "Fd -\u003e IO (Maybe (Window n))",
          "source": "src/System-Console-Terminal-Size.html#fdSize",
          "type": "function"
        },
        "index": {
          "description": "Get terminal window width and height for specified file descriptor If it not attached to terminal then Nothing is returned import System.Console.Terminal.Size import System.Posix fdSize stdOutput Just Window height width fd openFd foo ReadWrite Just stdFileMode defaultFileFlags fdSize fd Nothing",
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "fdSize",
          "normalized": "Fd-\u003eIO(Maybe(Window a))",
          "package": "terminal-size",
          "partial": "Size",
          "signature": "Fd-\u003eIO(Maybe(Window n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:fdSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efdSize\u003c/a\u003e\u003c/code\u003e, but takes \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e (file descriptor).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.IO\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSize stdout\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 56, width = 85})\n\u003c/pre\u003e",
          "module": "System.Console.Terminal.Size",
          "name": "hSize",
          "package": "terminal-size",
          "signature": "Handle -\u003e IO (Maybe (Window n))",
          "source": "src/System-Console-Terminal-Size.html#hSize",
          "type": "function"
        },
        "index": {
          "description": "Same as fdSize but takes Handle instead of Fd file descriptor import System.Console.Terminal.Size import System.IO hSize stdout Just Window height width",
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "hSize",
          "normalized": "Handle-\u003eIO(Maybe(Window a))",
          "package": "terminal-size",
          "partial": "Size",
          "signature": "Handle-\u003eIO(Maybe(Window n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:hSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminal.Size",
          "name": "height",
          "package": "terminal-size",
          "signature": "a",
          "source": "src/System-Console-Terminal-Size.html#Window",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "height",
          "package": "terminal-size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet terminal window width and height for \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 60, width = 112})\n\u003c/pre\u003e",
          "module": "System.Console.Terminal.Size",
          "name": "size",
          "package": "terminal-size",
          "signature": "IO (Maybe (Window n))",
          "source": "src/System-Console-Terminal-Size.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get terminal window width and height for stdout import System.Console.Terminal.Size size Just Window height width",
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "size",
          "package": "terminal-size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminal.Size",
          "name": "width",
          "package": "terminal-size",
          "signature": "a",
          "source": "src/System-Console-Terminal-Size.html#Window",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminal Size",
          "module": "System.Console.Terminal.Size",
          "name": "width",
          "package": "terminal-size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:width"
      }
    }
  ]
]