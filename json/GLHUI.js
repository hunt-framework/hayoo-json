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
        "word": "GLHUI"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple OpenGL window creator that runs on X.Org with libX11.\n This module allows the creation of different versions of OpenGL contexts\n by initializing with the required versions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The Haskell only has bindings up to OpenGL 3.2 \n    This module is intended to be imported qualified, to avoid clashes with      \n   Prelude functions, e.g.                                                      \n\u003c/p\u003e\u003cpre\u003e import qualified Graphics.UI.GLWindow as Window                            \n\u003c/pre\u003e\u003cp\u003eAs an example, here is a simple module that uses some of these functions     \n   to open a OpenGL 3.2 Context:                                                \n\u003c/p\u003e\u003cpre\u003e module Main where                                                          \n                                                                            \n import Graphics.Rendering.OpenGL                                           \n import qualified Graphics.UI.GLWindow as Window                            \n                                                                            \n myLoop = do clear [ColorBuffer]                                            \n             t \u003c- Window.time                                               \n             clearColor $= Color4 (sin (realToFrac t) * 0.5 + 0.5)          \n                                  (sin (realToFrac (t+1)) * 0.5 + 0.5)      \n                                  (sin (realToFrac (t+2)) * 0.5 +0.5)       \n                                  0                                              \n                                                                            \n main = do Window.init 3 2 -- initializes a OpenGL 3.2 context              \n           Window.loop myLoop -- stops when the ESC key is pressed          \n           Window.kill -- removes the window when the loop stops            \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.UI.GLWindow",
          "name": "GLWindow",
          "package": "GLHUI",
          "source": "src/Graphics-UI-GLWindow.html",
          "type": "module"
        },
        "index": {
          "description": "simple OpenGL window creator that runs on X.Org with libX11 This module allows the creation of different versions of OpenGL contexts by initializing with the required versions Note The Haskell only has bindings up to OpenGL This module is intended to be imported qualified to avoid clashes with Prelude functions e.g import qualified Graphics.UI.GLWindow as Window As an example here is simple module that uses some of these functions to open OpenGL Context module Main where import Graphics.Rendering.OpenGL import qualified Graphics.UI.GLWindow as Window myLoop do clear ColorBuffer Window.time clearColor Color4 sin realToFrac sin realToFrac sin realToFrac main do Window.init initializes OpenGL context Window.loop myLoop stops when the ESC key is pressed Window.kill removes the window when the loop stops",
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "GLWindow",
          "package": "GLHUI",
          "partial": "GLWindow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "LoopFunc",
          "package": "GLHUI",
          "source": "src/Graphics-UI-GLWindow.html#LoopFunc",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "LoopFunc",
          "package": "GLHUI",
          "partial": "Loop Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#t:LoopFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "dtime",
          "package": "GLHUI",
          "signature": "IO Double",
          "source": "src/Graphics-UI-GLWindow.html#dtime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "dtime",
          "package": "GLHUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:dtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "frame",
          "package": "GLHUI",
          "signature": "IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "frame",
          "package": "GLHUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "height",
          "package": "GLHUI",
          "signature": "IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "height",
          "package": "GLHUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "init",
          "package": "GLHUI",
          "signature": "Integer -\u003e Integer -\u003e IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "init",
          "normalized": "Integer-\u003eInteger-\u003eIO Integer",
          "package": "GLHUI",
          "signature": "Integer-\u003eInteger-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "kill",
          "package": "GLHUI",
          "signature": "IO ()",
          "source": "src/Graphics-UI-GLWindow.html#kill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "kill",
          "normalized": "IO()",
          "package": "GLHUI",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "loop",
          "package": "GLHUI",
          "signature": "LoopFunc -\u003e IO ()",
          "source": "src/Graphics-UI-GLWindow.html#loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "loop",
          "normalized": "LoopFunc-\u003eIO()",
          "package": "GLHUI",
          "signature": "LoopFunc-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "scrHeight",
          "package": "GLHUI",
          "signature": "IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#scrHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "scrHeight",
          "package": "GLHUI",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:scrHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "scrWidth",
          "package": "GLHUI",
          "signature": "IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#scrWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "scrWidth",
          "package": "GLHUI",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:scrWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "setFullscreen",
          "package": "GLHUI",
          "signature": "Bool -\u003e IO ()",
          "source": "src/Graphics-UI-GLWindow.html#setFullscreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "setFullscreen",
          "normalized": "Bool-\u003eIO()",
          "package": "GLHUI",
          "partial": "Fullscreen",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:setFullscreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "time",
          "package": "GLHUI",
          "signature": "IO Double",
          "source": "src/Graphics-UI-GLWindow.html#time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "time",
          "package": "GLHUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.GLWindow",
          "name": "width",
          "package": "GLHUI",
          "signature": "IO Integer",
          "source": "src/Graphics-UI-GLWindow.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI GLWindow",
          "module": "Graphics.UI.GLWindow",
          "name": "width",
          "package": "GLHUI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:width"
      }
    }
  ]
]