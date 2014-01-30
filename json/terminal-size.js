[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGet terminal window height and width without ncurses dependency\n\u003c/p\u003e\u003cp\u003eOnly tested to work on GNU/Linux systems\n\u003c/p\u003e\u003cp\u003eBased on answer by Andreas Hammar at \u003ca\u003ehttp://stackoverflow.com/a/12807521/972985\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminal-Size.html",
        "fct-type": "module",
        "title": "Size"
      },
      "index": {
        "description": "Get terminal window height and width without ncurses dependency Only tested to work on GNU Linux systems Based on answer by Andreas Hammar at http stackoverflow.com",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "Size",
        "normalized": "",
        "package": "terminal-size",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#t:Window",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal window width and height\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminal-Size.html#Window",
        "fct-type": "data",
        "title": "Window"
      },
      "index": {
        "description": "Terminal window width and height",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "Window",
        "normalized": "",
        "package": "terminal-size",
        "partial": "Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:Window",
      "description": {
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "Window",
        "fct-source": "src/System-Console-Terminal-Size.html#Window",
        "fct-type": "function",
        "title": "Window"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "Window",
        "normalized": "",
        "package": "terminal-size",
        "partial": "Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:fdSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet terminal window width and height for a specified file descriptor. If\n it's not attached to a terminal then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Posix\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efdSize stdOutput\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 56, width = 85})\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efd \u003c- openFd \"foo\" ReadWrite (Just stdFileMode) defaultFileFlags\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efdSize fd\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "Fd -\u003e IO (Maybe (Window n))",
        "fct-source": "src/System-Console-Terminal-Size.html#fdSize",
        "fct-type": "function",
        "title": "fdSize"
      },
      "index": {
        "description": "Get terminal window width and height for specified file descriptor If it not attached to terminal then Nothing is returned import System.Console.Terminal.Size import System.Posix fdSize stdOutput Just Window height width fd openFd foo ReadWrite Just stdFileMode defaultFileFlags fdSize fd Nothing",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "fdSize",
        "normalized": "Fd-\u003eIO(Maybe(Window a))",
        "package": "terminal-size",
        "partial": "Size",
        "signature": "Fd-\u003eIO(Maybe(Window n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:hSize",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efdSize\u003c/a\u003e\u003c/code\u003e, but takes \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e (file descriptor).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.IO\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehSize stdout\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 56, width = 85})\n\u003c/pre\u003e",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "Handle -\u003e IO (Maybe (Window n))",
        "fct-source": "src/System-Console-Terminal-Size.html#hSize",
        "fct-type": "function",
        "title": "hSize"
      },
      "index": {
        "description": "Same as fdSize but takes Handle instead of Fd file descriptor import System.Console.Terminal.Size import System.IO hSize stdout Just Window height width",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "hSize",
        "normalized": "Handle-\u003eIO(Maybe(Window a))",
        "package": "terminal-size",
        "partial": "Size",
        "signature": "Handle-\u003eIO(Maybe(Window n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:height",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "!a",
        "fct-source": "src/System-Console-Terminal-Size.html#Window",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "height",
        "normalized": "",
        "package": "terminal-size",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet terminal window width and height for \u003ccode\u003estdout\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport System.Console.Terminal.Size\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esize\n\u003c/code\u003e\u003c/strong\u003eJust (Window {height = 60, width = 112})\n\u003c/pre\u003e",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "IO (Maybe (Window n))",
        "fct-source": "src/System-Console-Terminal-Size.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get terminal window width and height for stdout import System.Console.Terminal.Size size Just Window height width",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "size",
        "normalized": "",
        "package": "terminal-size",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-size/docs/System-Console-Terminal-Size.html#v:width",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminal.Size",
        "fct-package": "terminal-size",
        "fct-signature": "!a",
        "fct-source": "src/System-Console-Terminal-Size.html#Window",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminal Size",
        "module": "System.Console.Terminal.Size",
        "name": "width",
        "normalized": "",
        "package": "terminal-size",
        "partial": "",
        "signature": ""
      }
    }
  }
]