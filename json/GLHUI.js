[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple OpenGL window creator that runs on X.Org with libX11.\n This module allows the creation of different versions of OpenGL contexts\n by initializing with the required versions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The Haskell only has bindings up to OpenGL 3.2 \n    This module is intended to be imported qualified, to avoid clashes with      \n   Prelude functions, e.g.                                                      \n\u003c/p\u003e\u003cpre\u003e import qualified Graphics.UI.GLWindow as Window                            \n\u003c/pre\u003e\u003cp\u003eAs an example, here is a simple module that uses some of these functions     \n   to open a OpenGL 3.2 Context:                                                \n\u003c/p\u003e\u003cpre\u003e module Main where                                                          \n                                                                            \n import Graphics.Rendering.OpenGL                                           \n import qualified Graphics.UI.GLWindow as Window                            \n                                                                            \n myLoop = do clear [ColorBuffer]                                            \n             t \u003c- Window.time                                               \n             clearColor $= Color4 (sin (realToFrac t) * 0.5 + 0.5)          \n                                  (sin (realToFrac (t+1)) * 0.5 + 0.5)      \n                                  (sin (realToFrac (t+2)) * 0.5 +0.5)       \n                                  0                                              \n                                                                            \n main = do Window.init 3 2 -- initializes a OpenGL 3.2 context              \n           Window.loop myLoop -- stops when the ESC key is pressed          \n           Window.kill -- removes the window when the loop stops            \n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-GLWindow.html",
        "fct-type": "module",
        "title": "GLWindow"
      },
      "index": {
        "description": "simple OpenGL window creator that runs on X.Org with libX11 This module allows the creation of different versions of OpenGL contexts by initializing with the required versions Note The Haskell only has bindings up to OpenGL This module is intended to be imported qualified to avoid clashes with Prelude functions e.g import qualified Graphics.UI.GLWindow as Window As an example here is simple module that uses some of these functions to open OpenGL Context module Main where import Graphics.Rendering.OpenGL import qualified Graphics.UI.GLWindow as Window myLoop do clear ColorBuffer Window.time clearColor Color4 sin realToFrac sin realToFrac sin realToFrac main do Window.init initializes OpenGL context Window.loop myLoop stops when the ESC key is pressed Window.kill removes the window when the loop stops",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "GLWindow",
        "normalized": "",
        "package": "GLHUI",
        "partial": "GLWindow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#t:LoopFunc",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-GLWindow.html#LoopFunc",
        "fct-type": "type",
        "title": "LoopFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "LoopFunc",
        "normalized": "",
        "package": "GLHUI",
        "partial": "Loop Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:dtime",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Double",
        "fct-source": "src/Graphics-UI-GLWindow.html#dtime",
        "fct-type": "function",
        "title": "dtime"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "dtime",
        "normalized": "",
        "package": "GLHUI",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:frame",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#frame",
        "fct-type": "function",
        "title": "frame"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "frame",
        "normalized": "",
        "package": "GLHUI",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:height",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "height",
        "normalized": "",
        "package": "GLHUI",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:init",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "Integer -\u003e Integer -\u003e IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "init",
        "normalized": "Integer-\u003eInteger-\u003eIO Integer",
        "package": "GLHUI",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:kill",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO ()",
        "fct-source": "src/Graphics-UI-GLWindow.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "kill",
        "normalized": "IO()",
        "package": "GLHUI",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:loop",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "LoopFunc -\u003e IO ()",
        "fct-source": "src/Graphics-UI-GLWindow.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "loop",
        "normalized": "LoopFunc-\u003eIO()",
        "package": "GLHUI",
        "partial": "",
        "signature": "LoopFunc-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:scrHeight",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#scrHeight",
        "fct-type": "function",
        "title": "scrHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "scrHeight",
        "normalized": "",
        "package": "GLHUI",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:scrWidth",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#scrWidth",
        "fct-type": "function",
        "title": "scrWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "scrWidth",
        "normalized": "",
        "package": "GLHUI",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:setFullscreen",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/Graphics-UI-GLWindow.html#setFullscreen",
        "fct-type": "function",
        "title": "setFullscreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "setFullscreen",
        "normalized": "Bool-\u003eIO()",
        "package": "GLHUI",
        "partial": "Fullscreen",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:time",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Double",
        "fct-source": "src/Graphics-UI-GLWindow.html#time",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "time",
        "normalized": "",
        "package": "GLHUI",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GLHUI/docs/Graphics-UI-GLWindow.html#v:width",
      "description": {
        "fct-module": "Graphics.UI.GLWindow",
        "fct-package": "GLHUI",
        "fct-signature": "IO Integer",
        "fct-source": "src/Graphics-UI-GLWindow.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI GLWindow",
        "module": "Graphics.UI.GLWindow",
        "name": "width",
        "normalized": "",
        "package": "GLHUI",
        "partial": "",
        "signature": ""
      }
    }
  }
]