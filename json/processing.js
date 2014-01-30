[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003cem\u003ebasic\u003c/em\u003e interface is the closest to the original.\n   Although it contains some variations too.\n\u003c/p\u003e\u003cp\u003eFor several reasons, it is recommended to use the \u003cem\u003emid\u003c/em\u003e\n   interface instead, which can be found in the\n   \u003ca\u003eGraphics.Web.Processing.Mid\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Basic",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "The basic interface is the closest to the original Although it contains some variations too For several reasons it is recommended to use the mid interface instead which can be found in the Graphics.Web.Processing.Mid module",
        "hierarchy": "Graphics Web Processing Basic",
        "module": "Graphics.Web.Processing.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "processing",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#t:ProcM",
      "description": {
        "fct-descr": "\u003cp\u003eProcessing script producer monad. The context \u003ccode\u003ec\u003c/code\u003e indicates the context\n   of the underlying \u003ccode\u003e\u003ca\u003eProcCode\u003c/a\u003e\u003c/code\u003e. This context restricts the use of certain\n   commands only to places where they are expected.\n\u003c/p\u003e\u003cp\u003eThe commands that you can run under this monad are mostly defined in\n   \u003ca\u003eGraphics.Web.Processing.Interface\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOnce you have all the commands you want, use \u003ccode\u003e\u003ca\u003erunProcM\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexecProcM\u003c/a\u003e\u003c/code\u003e\n   to generate the corresponding Processing code under the \u003ccode\u003e\u003ca\u003eProcCode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Basic",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#ProcM",
        "fct-type": "data",
        "title": "ProcM"
      },
      "index": {
        "description": "Processing script producer monad The context indicates the context of the underlying ProcCode This context restricts the use of certain commands only to places where they are expected The commands that you can run under this monad are mostly defined in Graphics.Web.Processing.Interface Once you have all the commands you want use runProcM or execProcM to generate the corresponding Processing code under the ProcCode type",
        "hierarchy": "Graphics Web Processing Basic",
        "module": "Graphics.Web.Processing.Basic",
        "name": "ProcM",
        "normalized": "",
        "package": "processing",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#v:execProcM",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate Processing code using the \u003ccode\u003e\u003ca\u003eProcM\u003c/a\u003e\u003c/code\u003e monad, discarding the final\n   value.\n\u003c/p\u003e\u003cpre\u003e execProcM = snd . runProcM\n\u003c/pre\u003e",
        "fct-module": "Graphics.Web.Processing.Basic",
        "fct-package": "processing",
        "fct-signature": "ProcM c a -\u003e ProcCode c",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#execProcM",
        "fct-type": "function",
        "title": "execProcM"
      },
      "index": {
        "description": "Generate Processing code using the ProcM monad discarding the final value execProcM snd runProcM",
        "hierarchy": "Graphics Web Processing Basic",
        "module": "Graphics.Web.Processing.Basic",
        "name": "execProcM",
        "normalized": "ProcM a b-\u003eProcCode a",
        "package": "processing",
        "partial": "Proc",
        "signature": "ProcM c a-\u003eProcCode c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#v:runProcM",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate Processing code using the \u003ccode\u003e\u003ca\u003eProcM\u003c/a\u003e\u003c/code\u003e monad.\n   The code output is reduced.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Basic",
        "fct-package": "processing",
        "fct-signature": "ProcM c a -\u003e (a, ProcCode c)",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#runProcM",
        "fct-type": "function",
        "title": "runProcM"
      },
      "index": {
        "description": "Generate Processing code using the ProcM monad The code output is reduced",
        "hierarchy": "Graphics Web Processing Basic",
        "module": "Graphics.Web.Processing.Basic",
        "name": "runProcM",
        "normalized": "ProcM a b-\u003e(b,ProcCode a)",
        "package": "processing",
        "partial": "Proc",
        "signature": "ProcM c a-\u003e(a,ProcCode c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariables, commands and functions. The \u003cem\u003einterface\u003c/em\u003e to\n   the processing.js API (\u003ca\u003ehttp://processingjs.org/reference\u003c/a\u003e),\n   with some additions, deletions and modifications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html",
        "fct-type": "module",
        "title": "Interface"
      },
      "index": {
        "description": "Variables commands and functions The interface to the processing.js API http processingjs.org reference with some additions deletions and modifications",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Interface",
        "normalized": "",
        "package": "processing",
        "partial": "Interface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:ArrowKey",
      "description": {
        "fct-descr": "\u003cp\u003eArrow keys.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "data",
        "title": "ArrowKey"
      },
      "index": {
        "description": "Arrow keys",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ArrowKey",
        "normalized": "",
        "package": "processing",
        "partial": "Arrow Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eRGBA colors. Values must be between\n   0 and 255, including in the alpha channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "RGBA colors Values must be between and including in the alpha channel",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Color",
        "normalized": "",
        "package": "processing",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Drawing",
      "description": {
        "fct-descr": "\u003cp\u003eClass of contexts where the user can draw pictures\n   in the screen.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Drawing",
        "fct-type": "class",
        "title": "Drawing"
      },
      "index": {
        "description": "Class of contexts where the user can draw pictures in the screen",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Drawing",
        "normalized": "",
        "package": "processing",
        "partial": "Drawing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eKeyboard keys recognized by Processing.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Keyboard keys recognized by Processing",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Key",
        "normalized": "",
        "package": "processing",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:KeyModifier",
      "description": {
        "fct-descr": "\u003cp\u003eKey modifiers.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "data",
        "title": "KeyModifier"
      },
      "index": {
        "description": "Key modifiers",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "KeyModifier",
        "normalized": "",
        "package": "processing",
        "partial": "Key Modifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:ProcMonad",
      "description": {
        "fct-descr": "\u003cp\u003eTypes in this instance form a monad when they are applied\n   to a context \u003ccode\u003ec\u003c/code\u003e. They are used to write Processing\n   code.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#ProcMonad",
        "fct-type": "class",
        "title": "ProcMonad"
      },
      "index": {
        "description": "Types in this instance form monad when they are applied to context They are used to write Processing code",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ProcMonad",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Proc_Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point as a pair of floating point numbers.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Proc_Point",
        "fct-type": "type",
        "title": "Proc_Point"
      },
      "index": {
        "description": "point as pair of floating point numbers",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Proc_Point",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:SpecialKey",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial keys.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "data",
        "title": "SpecialKey"
      },
      "index": {
        "description": "Special keys",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "SpecialKey",
        "normalized": "",
        "package": "processing",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ALT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "ALT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "ALT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ALT",
        "normalized": "",
        "package": "processing",
        "partial": "ALT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ArrowKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "ArrowKey ArrowKey",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "ArrowKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ArrowKey",
        "normalized": "",
        "package": "processing",
        "partial": "Arrow Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:BACKSPACE",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "BACKSPACE",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "BACKSPACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "BACKSPACE",
        "normalized": "",
        "package": "processing",
        "partial": "BACKSPACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CONTROL",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "CONTROL",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "CONTROL"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "CONTROL",
        "normalized": "",
        "package": "processing",
        "partial": "CONTROL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CharKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "CharKey Char",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "CharKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "CharKey",
        "normalized": "",
        "package": "processing",
        "partial": "Char Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:Color",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "Color",
        "normalized": "",
        "package": "processing",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:DOWN",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "DOWN",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "DOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "DOWN",
        "normalized": "",
        "package": "processing",
        "partial": "DOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ENTER",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "ENTER",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "ENTER"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ENTER",
        "normalized": "",
        "package": "processing",
        "partial": "ENTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ESC",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "ESC",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "ESC"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ESC",
        "normalized": "",
        "package": "processing",
        "partial": "ESC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:LEFT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "LEFT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "LEFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "LEFT",
        "normalized": "",
        "package": "processing",
        "partial": "LEFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ModKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "ModKey KeyModifier Key",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "ModKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ModKey",
        "normalized": "",
        "package": "processing",
        "partial": "Mod Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RETURN",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "RETURN",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "RETURN"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "RETURN",
        "normalized": "",
        "package": "processing",
        "partial": "RETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RIGHT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "RIGHT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "RIGHT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "RIGHT",
        "normalized": "",
        "package": "processing",
        "partial": "RIGHT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SHIFT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "SHIFT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "SHIFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "SHIFT",
        "normalized": "",
        "package": "processing",
        "partial": "SHIFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SpecialKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "SpecialKey SpecialKey",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "SpecialKey",
        "normalized": "",
        "package": "processing",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:TAB",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "TAB",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "TAB"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "TAB",
        "normalized": "",
        "package": "processing",
        "partial": "TAB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:UP",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "UP",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "UP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "UP",
        "normalized": "",
        "package": "processing",
        "partial": "UP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:alphac",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha channel (opacity).\n 0 means transparent, and 255 opaque.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "alphac"
      },
      "index": {
        "description": "Alpha channel opacity means transparent and opaque",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "alphac",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:arc",
      "description": {
        "fct-descr": "\u003cp\u003eDraw an arc.\n\u003c/p\u003e\u003cp\u003eThe arc is drawn following the line of an ellipse\n   between two angles.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "arc"
      },
      "index": {
        "description": "Draw an arc The arc is drawn following the line of an ellipse between two angles",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "arc",
        "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:background",
      "description": {
        "fct-descr": "\u003cp\u003eFill the screen with a given color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Color -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#background",
        "fct-type": "function",
        "title": "background"
      },
      "index": {
        "description": "Fill the screen with given color",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "background",
        "normalized": "Color-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Color-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:bezier",
      "description": {
        "fct-descr": "\u003cp\u003eB&#233;zier curve.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Point-\u003e Proc_Point-\u003e Proc_Point-\u003e m c ()",
        "fct-type": "function",
        "title": "bezier"
      },
      "index": {
        "description": "zier curve",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "bezier",
        "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:bluec",
      "description": {
        "fct-descr": "\u003cp\u003eBlue channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "bluec"
      },
      "index": {
        "description": "Blue channel",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "bluec",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:circle",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a circle.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "Draw circle",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "circle",
        "normalized": "Proc_Point-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eInclude a comment in the current position of the code.\n   You normally don't need to read the processing.js code output,\n   but this function can be useful to analyse or debug it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Text -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Include comment in the current position of the code You normally don need to read the processing.js code output but this function can be useful to analyse or debug it",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "comment",
        "normalized": "Text-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Text-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:drawtext",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay a text in the screen.\n   The color is specified by \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Text-\u003e Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "drawtext"
      },
      "index": {
        "description": "Display text in the screen The color is specified by fill",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "drawtext",
        "normalized": "Proc_Text-\u003eProc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Text-\u003eProc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ellipse",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a ellipse.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "ellipse"
      },
      "index": {
        "description": "Draw ellipse",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ellipse",
        "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eSet the filling color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Color -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Set the filling color",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "fill",
        "normalized": "Color-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Color-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:frameCount",
      "description": {
        "fct-descr": "\u003cp\u003eFrames since the beginning of the script execution.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "m c Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#frameCount",
        "fct-type": "function",
        "title": "frameCount"
      },
      "index": {
        "description": "Frames since the beginning of the script execution",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "frameCount",
        "normalized": "",
        "package": "processing",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:getFrameRate",
      "description": {
        "fct-descr": "\u003cp\u003eApproximate number of frames per second.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "m c Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#getFrameRate",
        "fct-type": "function",
        "title": "getFrameRate"
      },
      "index": {
        "description": "Approximate number of frames per second",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "getFrameRate",
        "normalized": "",
        "package": "processing",
        "partial": "Frame Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:getMousePoint",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current position of the mouse pointer.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "m c Proc_Point",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#getMousePoint",
        "fct-type": "function",
        "title": "getMousePoint"
      },
      "index": {
        "description": "Get the current position of the mouse pointer",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "getMousePoint",
        "normalized": "",
        "package": "processing",
        "partial": "Mouse Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:greenc",
      "description": {
        "fct-descr": "\u003cp\u003eGreen channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "greenc"
      },
      "index": {
        "description": "Green channel",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "greenc",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ifM",
      "description": {
        "fct-descr": "\u003cp\u003eConditional execution. When the boolean value is \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e,\n   it executes the first monadic argument. Otherwise, it\n   executes the other one. In any case, the result is discarded.\n   See also \u003ccode\u003e\u003ca\u003eif_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e m c a -\u003e m c b -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ifM",
        "fct-type": "function",
        "title": "ifM"
      },
      "index": {
        "description": "Conditional execution When the boolean value is true it executes the first monadic argument Otherwise it executes the other one In any case the result is discarded See also if",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "ifM",
        "normalized": "Proc_Bool-\u003ea b c-\u003ea b d-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003em c a-\u003em c b-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a line.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Point-\u003e m c ()",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "Draw line",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "line",
        "normalized": "Proc_Point-\u003eProc_Point-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Point-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:matchKey",
      "description": {
        "fct-descr": "\u003cp\u003eThis function takes a variable of type \u003ccode\u003e\u003ca\u003eProc_Bool\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, and sets the variable to\n   \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the key pressed is the given \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e. Otherwise, the variable is set to \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Var Proc_Bool -\u003e Key -\u003e m KeyPressed ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#matchKey",
        "fct-type": "function",
        "title": "matchKey"
      },
      "index": {
        "description": "This function takes variable of type Proc Bool and Key and sets the variable to true if the key pressed is the given Key Otherwise the variable is set to false",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "matchKey",
        "normalized": "Var Proc_Bool-\u003eKey-\u003ea KeyPressed()",
        "package": "processing",
        "partial": "Key",
        "signature": "Var Proc_Bool-\u003eKey-\u003em KeyPressed()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:noise",
      "description": {
        "fct-descr": "\u003cp\u003eNoise random function.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point -\u003e m c Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#noise",
        "fct-type": "function",
        "title": "noise"
      },
      "index": {
        "description": "Noise random function",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "noise",
        "normalized": "Proc_Point-\u003ea b Proc_Float",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003em c Proc_Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:point",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a dot.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e m c ()",
        "fct-type": "function",
        "title": "point"
      },
      "index": {
        "description": "Prints dot",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "point",
        "normalized": "Proc_Point-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:polygon",
      "description": {
        "fct-descr": "\u003cp\u003ePolygon drawer.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "[Proc_Point] -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#polygon",
        "fct-type": "function",
        "title": "polygon"
      },
      "index": {
        "description": "Polygon drawer",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "polygon",
        "normalized": "[Proc_Point]-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "[Proc_Point]-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:quad",
      "description": {
        "fct-descr": "\u003cp\u003eA quad is a quadrilateral, a four sided polygon.\n   The first parameter is the first vertex and the\n   subsequent parameters should proceed clockwise or\n   counter-clockwise around the defined shape.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#quad",
        "fct-type": "function",
        "title": "quad"
      },
      "index": {
        "description": "quad is quadrilateral four sided polygon The first parameter is the first vertex and the subsequent parameters should proceed clockwise or counter-clockwise around the defined shape",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "quad",
        "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:random",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a variable with a random number within an interval.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Var Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "random"
      },
      "index": {
        "description": "Write variable with random number within an interval",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "random",
        "normalized": "Var Proc_Float-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Var Proc_Float-\u003eProc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:rect",
      "description": {
        "fct-descr": "\u003cp\u003eDraws a rectangle to the screen. A rectangle is a\n   four-sided shape with every angle at ninety degrees.\n   The first parameter set the location, the\n   second sets the width, and the third sets the height.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "rect"
      },
      "index": {
        "description": "Draws rectangle to the screen rectangle is four-sided shape with every angle at ninety degrees The first parameter set the location the second sets the width and the third sets the height",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "rect",
        "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:redc",
      "description": {
        "fct-descr": "\u003cp\u003eRed channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "redc"
      },
      "index": {
        "description": "Red channel",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "redc",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:resetMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eReset the transformation matrix.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#resetMatrix",
        "fct-type": "function",
        "title": "resetMatrix"
      },
      "index": {
        "description": "Reset the transformation matrix",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "resetMatrix",
        "normalized": "a b()",
        "package": "processing",
        "partial": "Matrix",
        "signature": "m c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eApply a rotation to the following pictures, centered\n   at the current position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Float -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Apply rotation to the following pictures centered at the current position",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "rotate",
        "normalized": "Proc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eApply a scaling to the following pictures, centered\n   at the current position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "Apply scaling to the following pictures centered at the current position",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "scale",
        "normalized": "Proc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:screenHeight",
      "description": {
        "fct-descr": "\u003cp\u003eHeight of the canvas.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#screenHeight",
        "fct-type": "function",
        "title": "screenHeight"
      },
      "index": {
        "description": "Height of the canvas",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "screenHeight",
        "normalized": "",
        "package": "processing",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:screenWidth",
      "description": {
        "fct-descr": "\u003cp\u003eWidth of the canvas.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#screenWidth",
        "fct-type": "function",
        "title": "screenWidth"
      },
      "index": {
        "description": "Width of the canvas",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "screenWidth",
        "normalized": "",
        "package": "processing",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:setFrameRate",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify the number of frames to be displayed every second.\n   The default rate is 60 frames per second.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int -\u003e m Setup ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#setFrameRate",
        "fct-type": "function",
        "title": "setFrameRate"
      },
      "index": {
        "description": "Specify the number of frames to be displayed every second The default rate is frames per second",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "setFrameRate",
        "normalized": "Proc_Int-\u003ea Setup()",
        "package": "processing",
        "partial": "Frame Rate",
        "signature": "Proc_Int-\u003em Setup()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eSet the size of the canvas.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int -\u003e Proc_Int -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Set the size of the canvas",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "size",
        "normalized": "Proc_Int-\u003eProc_Int-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Int-\u003eProc_Int-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:stroke",
      "description": {
        "fct-descr": "\u003cp\u003eSet the drawing color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Color -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#stroke",
        "fct-type": "function",
        "title": "stroke"
      },
      "index": {
        "description": "Set the drawing color",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "stroke",
        "normalized": "Color-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Color-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:strokeWeight",
      "description": {
        "fct-descr": "\u003cp\u003eSet the weight of the lines.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Int -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#strokeWeight",
        "fct-type": "function",
        "title": "strokeWeight"
      },
      "index": {
        "description": "Set the weight of the lines",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "strokeWeight",
        "normalized": "Proc_Int-\u003ea b()",
        "package": "processing",
        "partial": "Weight",
        "signature": "Proc_Int-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eMove the current position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Float-\u003e Proc_Float-\u003e m c ()",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Move the current position",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "translate",
        "normalized": "Proc_Float-\u003eProc_Float-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Float-\u003eProc_Float-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:triangle",
      "description": {
        "fct-descr": "\u003cp\u003eA triangle is a plane created by connecting three points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Interface",
        "fct-package": "processing",
        "fct-signature": "Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#triangle",
        "fct-type": "function",
        "title": "triangle"
      },
      "index": {
        "description": "triangle is plane created by connecting three points",
        "hierarchy": "Graphics Web Processing Core Interface",
        "module": "Graphics.Web.Processing.Core.Interface",
        "name": "triangle",
        "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of types (\u003ccode\u003eProc_*\u003c/code\u003e types and others), and\n   some functions on these types as well.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Core-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Collection of types Proc types and others and some functions on these types as well",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Types",
        "normalized": "",
        "package": "processing",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Draw",
      "description": {
        "fct-descr": "\u003cp\u003eThe drawing loop.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Draw",
        "fct-type": "data",
        "title": "Draw"
      },
      "index": {
        "description": "The drawing loop",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Draw",
        "normalized": "",
        "package": "processing",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:KeyPressed",
      "description": {
        "fct-descr": "\u003cp\u003eCode executed when a key is pressed.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#KeyPressed",
        "fct-type": "data",
        "title": "KeyPressed"
      },
      "index": {
        "description": "Code executed when key is pressed",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "KeyPressed",
        "normalized": "",
        "package": "processing",
        "partial": "Key Pressed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:MouseClicked",
      "description": {
        "fct-descr": "\u003cp\u003eCode that is executed when the mouse is clicked.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#MouseClicked",
        "fct-type": "data",
        "title": "MouseClicked"
      },
      "index": {
        "description": "Code that is executed when the mouse is clicked",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "MouseClicked",
        "normalized": "",
        "package": "processing",
        "partial": "Mouse Clicked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:MouseReleased",
      "description": {
        "fct-descr": "\u003cp\u003eCode that is executed when the mouse is released.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#MouseReleased",
        "fct-type": "data",
        "title": "MouseReleased"
      },
      "index": {
        "description": "Code that is executed when the mouse is released",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "MouseReleased",
        "normalized": "",
        "package": "processing",
        "partial": "Mouse Released",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Preamble",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003epreamble\u003c/em\u003e is the code that is executed\n   at the beginning of the script.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Preamble",
        "fct-type": "data",
        "title": "Preamble"
      },
      "index": {
        "description": "The preamble is the code that is executed at the beginning of the script",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Preamble",
        "normalized": "",
        "package": "processing",
        "partial": "Preamble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcCode",
      "description": {
        "fct-descr": "\u003cp\u003eA piece of Processing code.\n   The type parameter indicates what the\n   context of the code is.\n   This context will allow or disallow\n   the use of certain commands along\n   different events.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcCode",
        "fct-type": "data",
        "title": "ProcCode"
      },
      "index": {
        "description": "piece of Processing code The type parameter indicates what the context of the code is This context will allow or disallow the use of certain commands along different events",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "ProcCode",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcScript",
      "description": {
        "fct-descr": "\u003cp\u003eA complete Processing script.\n\u003c/p\u003e\u003cp\u003eIt consists in several parts, most of them optional.\n\u003c/p\u003e\u003cp\u003eTo generate each part of the code, use the \u003ccode\u003eProcM\u003c/code\u003e monad\n and the functions from the \u003ca\u003eGraphics.Web.Processing.Interface\u003c/a\u003e\n module. Then, run \u003ccode\u003erunProcM\u003c/code\u003e or \u003ccode\u003eexecProcM\u003c/code\u003e to get the\n code result.\n\u003c/p\u003e\u003cp\u003eMore abstract functions generate \u003ccode\u003e\u003ca\u003eProcScript\u003c/a\u003e\u003c/code\u003e values as well.\n See modules \u003ca\u003eGraphics.Web.Processing.Mid\u003c/a\u003e and \u003ca\u003eGraphics.Web.Processing.Simple\u003c/a\u003e\n for two alternative ways.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "data",
        "title": "ProcScript"
      },
      "index": {
        "description": "complete Processing script It consists in several parts most of them optional To generate each part of the code use the ProcM monad and the functions from the Graphics.Web.Processing.Interface module Then run runProcM or execProcM to get the code result More abstract functions generate ProcScript values as well See modules Graphics.Web.Processing.Mid and Graphics.Web.Processing.Simple for two alternative ways",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "ProcScript",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcType",
      "description": {
        "fct-descr": "\u003cp\u003eClass of Processing value types (\u003ccode\u003eProc_*\u003c/code\u003e types).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eProc_*\u003c/code\u003e types are types from the world of Processing.\n   Some of them are similar to Haskell types, like \u003ccode\u003e\u003ca\u003eProc_Bool\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e. However, they are not equal. \u003ccode\u003eProc_*\u003c/code\u003e types\n   are instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e. However, you should instead use methods from\n   the analog \u003ccode\u003e\u003ca\u003eProc_Eq\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003eProc_*\u003c/code\u003e types contain expressions instead\n   of values. Think of \u003ccode\u003e2+2\u003c/code\u003e instead of \u003ccode\u003e4\u003c/code\u003e. Under this situation,\n   \u003ccode\u003e2+2 /= 3+1\u003c/code\u003e, since they are different expressions, even if they\n   evaluate to the same value. Actually, you will get \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n   from the evaluation of \u003ccode\u003e2+2 == 3+1\u003c/code\u003e, since the library is smart\n   enough to figure out they have the same value. But, please, don't\n   rely on this. Use the \u003ccode\u003e\u003ca\u003eProc_Eq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProc_Ord\u003c/a\u003e\u003c/code\u003e classes instead.\n   They return Processing boolean expressions instead of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values.\n   Anyway, the types of the library will try to force you to use \u003ccode\u003eProc_*\u003c/code\u003e\n   types everywhere.\n\u003c/p\u003e\u003cp\u003eThe reason this library stores expressions instead of values is that\n   it needs to handle things like \u003ccode\u003e2+x\u003c/code\u003e, where \u003ccode\u003ex\u003c/code\u003e is an unknown value.\n   However, an effort is done to ensure that each expression is reduced\n   to its minimum extension.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcType",
        "fct-type": "class",
        "title": "ProcType"
      },
      "index": {
        "description": "Class of Processing value types Proc types Proc types are types from the world of Processing Some of them are similar to Haskell types like Proc Bool and Bool However they are not equal Proc types are instance of Eq However you should instead use methods from the analog Proc Eq class Proc types contain expressions instead of values Think of instead of Under this situation since they are different expressions even if they evaluate to the same value Actually you will get True from the evaluation of since the library is smart enough to figure out they have the same value But please don rely on this Use the Proc Eq and Proc Ord classes instead They return Processing boolean expressions instead of Bool values Anyway the types of the library will try to force you to use Proc types everywhere The reason this library stores expressions instead of values is that it needs to handle things like where is an unknown value However an effort is done to ensure that each expression is reduced to its minimum extension",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "ProcType",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Bool",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Bool",
        "fct-type": "data",
        "title": "Proc_Bool"
      },
      "index": {
        "description": "Boolean values",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Bool",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Char",
      "description": {
        "fct-descr": "\u003cp\u003eType of characters.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Char",
        "fct-type": "data",
        "title": "Proc_Char"
      },
      "index": {
        "description": "Type of characters",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Char",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Eq",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class for \u003ccode\u003eProc_*\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Eq",
        "fct-type": "class",
        "title": "Proc_Eq"
      },
      "index": {
        "description": "Eq class for Proc values",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Eq",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Float",
      "description": {
        "fct-descr": "\u003cp\u003eFloating point numbers.\n   The provided \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance checks the equality of the\n   internal expression, not the value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Float",
        "fct-type": "data",
        "title": "Proc_Float"
      },
      "index": {
        "description": "Floating point numbers The provided Eq instance checks the equality of the internal expression not the value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Float",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Image",
      "description": {
        "fct-descr": "\u003cp\u003eType of images.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Image",
        "fct-type": "data",
        "title": "Proc_Image"
      },
      "index": {
        "description": "Type of images",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Image",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Int",
      "description": {
        "fct-descr": "\u003cp\u003eInteger numbers.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Int",
        "fct-type": "data",
        "title": "Proc_Int"
      },
      "index": {
        "description": "Integer numbers",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Int",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Ord",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class for \u003ccode\u003eProc_*\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Ord",
        "fct-type": "class",
        "title": "Proc_Ord"
      },
      "index": {
        "description": "Ord class for Proc values",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Ord",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Show",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class, but for \u003ccode\u003eProc_*\u003c/code\u003e types.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Show",
        "fct-type": "class",
        "title": "Proc_Show"
      },
      "index": {
        "description": "Similar to the Show class but for Proc types",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Show",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Text",
      "description": {
        "fct-descr": "\u003cp\u003eType of textual values.\n\u003c/p\u003e\u003cp\u003eIt is recommended to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e extension.\n   Note that \u003ccode\u003e\u003ca\u003eProc_Text\u003c/a\u003e\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Text",
        "fct-type": "data",
        "title": "Proc_Text"
      },
      "index": {
        "description": "Type of textual values It is recommended to enable the OverloadedStrings extension Note that Proc Text is an instance of the IsString class",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Proc_Text",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Setup",
      "description": {
        "fct-descr": "\u003cp\u003eIn the \u003cem\u003esetup\u003c/em\u003e part, settings like \u003cem\u003esize\u003c/em\u003e or\n   \u003cem\u003eframe rate\u003c/em\u003e are supplied.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Setup",
        "fct-type": "data",
        "title": "Setup"
      },
      "index": {
        "description": "In the setup part settings like size or frame rate are supplied",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Setup",
        "normalized": "",
        "package": "processing",
        "partial": "Setup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e Proc_Bool -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%7C%7C",
        "fct-type": "function",
        "title": "(#||)"
      },
      "index": {
        "description": "Disjunction",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#||) #||",
        "normalized": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e Proc_Bool -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%26%26",
        "fct-type": "function",
        "title": "(#&&)"
      },
      "index": {
        "description": "Conjunction",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#&&) #&&",
        "normalized": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--47--61-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%2F%3D",
        "fct-type": "method",
        "title": "(#/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#/=) #/=",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--60-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3C",
        "fct-type": "method",
        "title": "(#\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#\u003c) #\u003c",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--60--61-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3C%3D",
        "fct-type": "method",
        "title": "(#\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#\u003c=) #\u003c=",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--61--61-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3D%3D",
        "fct-type": "method",
        "title": "(#==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#==) #==",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--62-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3E",
        "fct-type": "method",
        "title": "(#\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#\u003e) #\u003e",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--62--61-",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e a -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3E%3D",
        "fct-type": "method",
        "title": "(#\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(#\u003e=) #\u003e=",
        "normalized": "a-\u003ea-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003ea-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-43-.-43-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two text strings.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Text -\u003e Proc_Text -\u003e Proc_Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#%2B.%2B",
        "fct-type": "function",
        "title": "(+.+)"
      },
      "index": {
        "description": "Append two text strings",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "(+.+) +.+",
        "normalized": "Proc_Text-\u003eProc_Text-\u003eProc_Text",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Text-\u003eProc_Text-\u003eProc_Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Draw",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Draw",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Draw",
        "fct-type": "function",
        "title": "Draw"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Draw",
        "normalized": "",
        "package": "processing",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:KeyPressed",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "KeyPressed",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#KeyPressed",
        "fct-type": "function",
        "title": "KeyPressed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "KeyPressed",
        "normalized": "",
        "package": "processing",
        "partial": "Key Pressed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:MouseClicked",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "MouseClicked",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#MouseClicked",
        "fct-type": "function",
        "title": "MouseClicked"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "MouseClicked",
        "normalized": "",
        "package": "processing",
        "partial": "Mouse Clicked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:MouseReleased",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "MouseReleased",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#MouseReleased",
        "fct-type": "function",
        "title": "MouseReleased"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "MouseReleased",
        "normalized": "",
        "package": "processing",
        "partial": "Mouse Released",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Preamble",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Preamble",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Preamble",
        "fct-type": "function",
        "title": "Preamble"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Preamble",
        "normalized": "",
        "package": "processing",
        "partial": "Preamble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:ProcScript",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "ProcScript",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "ProcScript"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "ProcScript",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Setup",
      "description": {
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Setup",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Setup",
        "fct-type": "function",
        "title": "Setup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "Setup",
        "normalized": "",
        "package": "processing",
        "partial": "Setup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:emptyScript",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty script.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "ProcScript",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#emptyScript",
        "fct-type": "function",
        "title": "emptyScript"
      },
      "index": {
        "description": "Empty script",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "emptyScript",
        "normalized": "",
        "package": "processing",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:false",
      "description": {
        "fct-descr": "\u003cp\u003eValue of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#false",
        "fct-type": "function",
        "title": "false"
      },
      "index": {
        "description": "Value of False",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "false",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromBool",
      "description": {
        "fct-descr": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Bool -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "Cast Bool value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "fromBool",
        "normalized": "Bool-\u003eProc_Bool",
        "package": "processing",
        "partial": "Bool",
        "signature": "Bool-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromChar",
      "description": {
        "fct-descr": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Char -\u003e Proc_Char",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#fromChar",
        "fct-type": "function",
        "title": "fromChar"
      },
      "index": {
        "description": "Cast Char value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "fromChar",
        "normalized": "Char-\u003eProc_Char",
        "package": "processing",
        "partial": "Char",
        "signature": "Char-\u003eProc_Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromFloat",
      "description": {
        "fct-descr": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Float -\u003e Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#fromFloat",
        "fct-type": "function",
        "title": "fromFloat"
      },
      "index": {
        "description": "Cast Float value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "fromFloat",
        "normalized": "Float-\u003eProc_Float",
        "package": "processing",
        "partial": "Float",
        "signature": "Float-\u003eProc_Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromInt",
      "description": {
        "fct-descr": "\u003cp\u003eCast an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Int -\u003e Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "Cast an Int value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "fromInt",
        "normalized": "Int-\u003eProc_Int",
        "package": "processing",
        "partial": "Int",
        "signature": "Int-\u003eProc_Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromStText",
      "description": {
        "fct-descr": "\u003cp\u003eCast a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Text -\u003e Proc_Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#fromStText",
        "fct-type": "function",
        "title": "fromStText"
      },
      "index": {
        "description": "Cast strict Text value",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "fromStText",
        "normalized": "Text-\u003eProc_Text",
        "package": "processing",
        "partial": "St Text",
        "signature": "Text-\u003eProc_Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:if_",
      "description": {
        "fct-descr": "\u003cp\u003eConditional value. For example:\n\u003c/p\u003e\u003cpre\u003e if_ (x #\u003e 3) \"X is greater than 3.\"\n              \"X is less than or equal to 3.\"\n\u003c/pre\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Graphics-Web-Processing-Core-Types.html#if_",
        "fct-type": "function",
        "title": "if_"
      },
      "index": {
        "description": "Conditional value For example if is greater than is less than or equal to",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "if_",
        "normalized": "Proc_Bool-\u003ea-\u003ea-\u003ea",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:intToFloat",
      "description": {
        "fct-descr": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eProc_Int\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProc_Float\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Int -\u003e Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#intToFloat",
        "fct-type": "function",
        "title": "intToFloat"
      },
      "index": {
        "description": "Cast Proc Int to Proc Float",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "intToFloat",
        "normalized": "Proc_Int-\u003eProc_Float",
        "package": "processing",
        "partial": "To Float",
        "signature": "Proc_Int-\u003eProc_Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pfloor",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eProc_Float\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Float -\u003e Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#pfloor",
        "fct-type": "function",
        "title": "pfloor"
      },
      "index": {
        "description": "Calculate the floor of Proc Float",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "pfloor",
        "normalized": "Proc_Float-\u003eProc_Int",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Float-\u003eProc_Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pnot",
      "description": {
        "fct-descr": "\u003cp\u003eNegation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#pnot",
        "fct-type": "function",
        "title": "pnot"
      },
      "index": {
        "description": "Negation",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "pnot",
        "normalized": "Proc_Bool-\u003eProc_Bool",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003eProc_Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_draw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Maybe (ProcCode Draw)",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_draw"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_draw",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_keyPressed",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Maybe (ProcCode KeyPressed)",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_keyPressed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_keyPressed",
        "normalized": "",
        "package": "processing",
        "partial": "Pressed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_mouseClicked",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Maybe (ProcCode MouseClicked)",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_mouseClicked"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_mouseClicked",
        "normalized": "",
        "package": "processing",
        "partial": "Clicked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_mouseReleased",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Maybe (ProcCode MouseReleased)",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_mouseReleased"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_mouseReleased",
        "normalized": "",
        "package": "processing",
        "partial": "Released",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_preamble",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "ProcCode Preamble",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_preamble"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_preamble",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_setup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "ProcCode Setup",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
        "fct-type": "function",
        "title": "proc_setup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "proc_setup",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pround",
      "description": {
        "fct-descr": "\u003cp\u003eRound a number to the closest integer.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Float -\u003e Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#pround",
        "fct-type": "function",
        "title": "pround"
      },
      "index": {
        "description": "Round number to the closest integer",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "pround",
        "normalized": "Proc_Float-\u003eProc_Int",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Float-\u003eProc_Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pshow",
      "description": {
        "fct-descr": "\u003cp\u003eRender a value as a \u003ccode\u003e\u003ca\u003eProc_Text\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "a -\u003e Proc_Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#pshow",
        "fct-type": "method",
        "title": "pshow"
      },
      "index": {
        "description": "Render value as Proc Text",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "pshow",
        "normalized": "a-\u003eProc_Text",
        "package": "processing",
        "partial": "",
        "signature": "a-\u003eProc_Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:renderFile",
      "description": {
        "fct-descr": "\u003cp\u003eRender a script using \u003ccode\u003e\u003ca\u003erenderScript\u003c/a\u003e\u003c/code\u003e and\n   write it directly in a file.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "FilePath -\u003e ProcScript -\u003e IO ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Types.html#renderFile",
        "fct-type": "function",
        "title": "renderFile"
      },
      "index": {
        "description": "Render script using renderScript and write it directly in file",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "renderFile",
        "normalized": "FilePath-\u003eProcScript-\u003eIO()",
        "package": "processing",
        "partial": "File",
        "signature": "FilePath-\u003eProcScript-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:renderScript",
      "description": {
        "fct-descr": "\u003cp\u003eRender a script as a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "ProcScript -\u003e Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Types.html#renderScript",
        "fct-type": "function",
        "title": "renderScript"
      },
      "index": {
        "description": "Render script as lazy Text",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "renderScript",
        "normalized": "ProcScript-\u003eText",
        "package": "processing",
        "partial": "Script",
        "signature": "ProcScript-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003eValue of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Types",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "Value of True",
        "hierarchy": "Graphics Web Processing Core Types",
        "module": "Graphics.Web.Processing.Core.Types",
        "name": "true",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule exporting \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArrayVar\u003c/a\u003e\u003c/code\u003e type and functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Core-Var.html",
        "fct-type": "module",
        "title": "Var"
      },
      "index": {
        "description": "Module exporting Var and ArrayVar type and functions",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "Var",
        "normalized": "",
        "package": "processing",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#t:ArrayVar",
      "description": {
        "fct-descr": "\u003cp\u003eType of variables storing arrays.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#ArrayVar",
        "fct-type": "data",
        "title": "ArrayVar"
      },
      "index": {
        "description": "Type of variables storing arrays",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "ArrayVar",
        "normalized": "",
        "package": "processing",
        "partial": "Array Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003eType of variables.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "Type of variables",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "Var",
        "normalized": "",
        "package": "processing",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:arraySize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "ArrayVar a -\u003e Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#arraySize",
        "fct-type": "function",
        "title": "arraySize"
      },
      "index": {
        "description": "Size of the array",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "arraySize",
        "normalized": "ArrayVar a-\u003eInt",
        "package": "processing",
        "partial": "Size",
        "signature": "ArrayVar a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:arrayVarName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a variable storing an array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "ArrayVar a -\u003e Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#arrayVarName",
        "fct-type": "function",
        "title": "arrayVarName"
      },
      "index": {
        "description": "Get the name of variable storing an array",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "arrayVarName",
        "normalized": "ArrayVar a-\u003eText",
        "package": "processing",
        "partial": "Var Name",
        "signature": "ArrayVar a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:newArrayVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new array variable with a starting list of values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "[a] -\u003e m Preamble (ArrayVar a)",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#newArrayVar",
        "fct-type": "function",
        "title": "newArrayVar"
      },
      "index": {
        "description": "Create new array variable with starting list of values",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "newArrayVar",
        "normalized": "[a]-\u003eb Preamble(ArrayVar a)",
        "package": "processing",
        "partial": "Array Var",
        "signature": "[a]-\u003em Preamble(ArrayVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:newVar",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new variable with a starting value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "a -\u003e m Preamble (Var a)",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#newVar",
        "fct-type": "function",
        "title": "newVar"
      },
      "index": {
        "description": "Create new variable with starting value",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "newVar",
        "normalized": "a-\u003eb Preamble(Var a)",
        "package": "processing",
        "partial": "Var",
        "signature": "a-\u003em Preamble(Var a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:readArrayVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead a component of an array variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "ArrayVar a -\u003e Proc_Int -\u003e m c a",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#readArrayVar",
        "fct-type": "function",
        "title": "readArrayVar"
      },
      "index": {
        "description": "Read component of an array variable",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "readArrayVar",
        "normalized": "ArrayVar a-\u003eProc_Int-\u003eb c a",
        "package": "processing",
        "partial": "Array Var",
        "signature": "ArrayVar a-\u003eProc_Int-\u003em c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:readVar",
      "description": {
        "fct-descr": "\u003cp\u003eRead a variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "Var a -\u003e m c a",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#readVar",
        "fct-type": "function",
        "title": "readVar"
      },
      "index": {
        "description": "Read variable",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "readVar",
        "normalized": "Var a-\u003eb c a",
        "package": "processing",
        "partial": "Var",
        "signature": "Var a-\u003em c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:varName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "Var a -\u003e Text",
        "fct-source": "src/Graphics-Web-Processing-Core-Primal.html#varName",
        "fct-type": "function",
        "title": "varName"
      },
      "index": {
        "description": "Get the name of variable",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "varName",
        "normalized": "Var a-\u003eText",
        "package": "processing",
        "partial": "Name",
        "signature": "Var a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:writeArrayVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a component of an array variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "ArrayVar a -\u003e Proc_Int -\u003e a -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#writeArrayVar",
        "fct-type": "function",
        "title": "writeArrayVar"
      },
      "index": {
        "description": "Write component of an array variable",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "writeArrayVar",
        "normalized": "ArrayVar a-\u003eProc_Int-\u003ea-\u003eb c()",
        "package": "processing",
        "partial": "Array Var",
        "signature": "ArrayVar a-\u003eProc_Int-\u003ea-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:writeVar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a new value to a variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Core.Var",
        "fct-package": "processing",
        "fct-signature": "Var a -\u003e a -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Core-Monad.html#writeVar",
        "fct-type": "function",
        "title": "writeVar"
      },
      "index": {
        "description": "Write new value to variable",
        "hierarchy": "Graphics Web Processing Core Var",
        "module": "Graphics.Web.Processing.Core.Var",
        "name": "writeVar",
        "normalized": "Var a-\u003ea-\u003eb c()",
        "package": "processing",
        "partial": "Var",
        "signature": "Var a-\u003ea-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOnce created, processing scripts can be included in HTML canvas.\n   To be able to reproduce the animation, you must import the \u003cem\u003eprocessing.js\u003c/em\u003e\n   library, downloadable from \u003ca\u003ehttp://processingjs.org/download\u003c/a\u003e (do not import\n   it from the original link, download it and use your own copy).\n   To import \u003cem\u003eprocessing.js\u003c/em\u003e, use a \u003ccode\u003escript\u003c/code\u003e tag.\n\u003c/p\u003e\u003cpre\u003e \u003cscript src=\"processing.js\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eimportScript\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote from the author: I didn't manage to run a processing animation locally,\u003c/em\u003e\n   \u003cem\u003eso you may have the same issue. Once I uploaded them to my server, they worked\u003c/em\u003e\n   \u003cem\u003ejust fine.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Html",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Html.html",
        "fct-type": "module",
        "title": "Html"
      },
      "index": {
        "description": "Once created processing scripts can be included in HTML canvas To be able to reproduce the animation you must import the processing.js library downloadable from http processingjs.org download do not import it from the original link download it and use your own copy To import processing.js use script tag script src processing.js script See importScript Note from the author didn manage to run processing animation locally so you may have the same issue Once uploaded them to my server they worked just fine",
        "hierarchy": "Graphics Web Processing Html",
        "module": "Graphics.Web.Processing.Html",
        "name": "Html",
        "normalized": "",
        "package": "processing",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:defaultHtml",
      "description": {
        "fct-descr": "\u003cp\u003eDefault template for visualizing Processing scripts in HTML.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Html",
        "fct-package": "processing",
        "fct-signature": "FilePath-\u003e FilePath-\u003e Text-\u003e Html",
        "fct-type": "function",
        "title": "defaultHtml"
      },
      "index": {
        "description": "Default template for visualizing Processing scripts in HTML",
        "hierarchy": "Graphics Web Processing Html",
        "module": "Graphics.Web.Processing.Html",
        "name": "defaultHtml",
        "normalized": "FilePath-\u003eFilePath-\u003eText-\u003eHtml",
        "package": "processing",
        "partial": "Html",
        "signature": "FilePath-\u003eFilePath-\u003eText-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:importScript",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the following HTML element:\n\u003c/p\u003e\u003cpre\u003e \u003cscript src=\"specified path\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eUse it to import the \u003cem\u003eprocessing.js\u003c/em\u003e script,\n   inside the \u003ccode\u003ehead\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Html",
        "fct-package": "processing",
        "fct-signature": "FilePath-\u003e Html",
        "fct-type": "function",
        "title": "importScript"
      },
      "index": {
        "description": "Create the following HTML element script src specified path script Use it to import the processing.js script inside the head tag",
        "hierarchy": "Graphics Web Processing Html",
        "module": "Graphics.Web.Processing.Html",
        "name": "importScript",
        "normalized": "FilePath-\u003eHtml",
        "package": "processing",
        "partial": "Script",
        "signature": "FilePath-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:procCanvas",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a canvas element which contain a Processing animation.\n   The output is of the following form:\n\u003c/p\u003e\u003cpre\u003e \u003ccanvas data-processing-sources=\"specified path\"\u003e\u003c/canvas\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.Web.Processing.Html",
        "fct-package": "processing",
        "fct-signature": "FilePath-\u003e Html",
        "fct-type": "function",
        "title": "procCanvas"
      },
      "index": {
        "description": "Create canvas element which contain Processing animation The output is of the following form canvas data-processing-sources specified path canvas",
        "hierarchy": "Graphics Web Processing Html",
        "module": "Graphics.Web.Processing.Html",
        "name": "procCanvas",
        "normalized": "FilePath-\u003eHtml",
        "package": "processing",
        "partial": "Canvas",
        "signature": "FilePath-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:writeHtml",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a Processing script and the HTML default template for it\n   to files, using \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefaultHtml\u003c/a\u003e\u003c/code\u003e.\n   All the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es must be relative to where the HTML file is written.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Html",
        "fct-package": "processing",
        "fct-signature": "FilePath-\u003e FilePath-\u003e Text-\u003e FilePath-\u003e ProcScript-\u003e IO ()",
        "fct-type": "function",
        "title": "writeHtml"
      },
      "index": {
        "description": "Write Processing script and the HTML default template for it to files using renderFile and defaultHtml All the FilePath must be relative to where the HTML file is written",
        "hierarchy": "Graphics Web Processing Html",
        "module": "Graphics.Web.Processing.Html",
        "name": "writeHtml",
        "normalized": "FilePath-\u003eFilePath-\u003eText-\u003eFilePath-\u003eProcScript-\u003eIO()",
        "package": "processing",
        "partial": "Html",
        "signature": "FilePath-\u003eFilePath-\u003eText-\u003eFilePath-\u003eProcScript-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements variables which may contain values from\n   types different from the native types (\u003ccode\u003eProc_*\u003c/code\u003e types).\n\u003c/p\u003e\u003cp\u003eTo make a type available to custom variables, it needs to be\n   instantiated in the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class, which is subclass\n   of the \u003ccode\u003e\u003ca\u003eVarLength\u003c/a\u003e\u003c/code\u003e class. These instances are derivables using\n   the \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension. Things you need are: enable the\n   \u003ccode\u003eDeriveGeneric\u003c/code\u003e language extension, import \u003ca\u003eGHC.Generics\u003c/a\u003e, derive\n   a \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instance of your type and then write the following\n   instances (where \u003ccode\u003eFoo\u003c/code\u003e is any type of interest):\n\u003c/p\u003e\u003cpre\u003e instance VarLength Foo\n instance CustomValue Foo\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003eFoo\u003c/code\u003e must be made from other types that are instances\n   of \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e. Also, note that instances of \u003ccode\u003e\u003ca\u003eVarLength\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e can \u003cem\u003enot\u003c/em\u003e be recursive or sum types.\n   An example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import Graphics.Web.Processing.Mid\n import Graphics.Web.Processing.Mid.CustomVar\n import GHC.Generics\n\n data Point = Point Proc_Float Proc_Float\n                deriving Generic\n\n instance VarLength Point\n instance CustomValue Point\n\u003c/pre\u003e\u003cp\u003eTypes instance of the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class can be contained by\n   a special type of variables, called \u003ccode\u003e\u003ca\u003eCustomVar\u003c/a\u003e\u003c/code\u003e (Custom Variable).\n   Functions for custom variables are equal to the function for regular\n   variables, except that they all end in \u003ccode\u003eC\u003c/code\u003e. For example, \u003ccode\u003e\u003ca\u003enewVar\u003c/a\u003e\u003c/code\u003e is\n   called \u003ccode\u003e\u003ca\u003enewVarC\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e\u003cp\u003eThere are also arrays which may contain custom values.\n   See \u003ccode\u003e\u003ca\u003eCustomArrayVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe dependency of this module in several language extensions was\n   the reason to make it separate from the rest of the \u003cem\u003emid\u003c/em\u003e interface\n   where it belongs to. Somehow, it forces the user to use \u003ccode\u003eDeriveGeneric\u003c/code\u003e\n   and import \u003ca\u003eGHC.Generics\u003c/a\u003e to do something useful with it (more than use\n   custom variables for tuples).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html",
        "fct-type": "module",
        "title": "CustomVar"
      },
      "index": {
        "description": "This module implements variables which may contain values from types different from the native types Proc types To make type available to custom variables it needs to be instantiated in the CustomValue class which is subclass of the VarLength class These instances are derivables using the DeriveGeneric extension Things you need are enable the DeriveGeneric language extension import GHC.Generics derive Generic instance of your type and then write the following instances where Foo is any type of interest instance VarLength Foo instance CustomValue Foo Note that Foo must be made from other types that are instances of CustomValue Also note that instances of VarLength or CustomValue can not be recursive or sum types An example LANGUAGE DeriveGeneric import Graphics.Web.Processing.Mid import Graphics.Web.Processing.Mid.CustomVar import GHC.Generics data Point Point Proc Float Proc Float deriving Generic instance VarLength Point instance CustomValue Point Types instance of the CustomValue class can be contained by special type of variables called CustomVar Custom Variable Functions for custom variables are equal to the function for regular variables except that they all end in For example newVar is called newVarC for custom variables There are also arrays which may contain custom values See CustomArrayVar The dependency of this module in several language extensions was the reason to make it separate from the rest of the mid interface where it belongs to Somehow it forces the user to use DeriveGeneric and import GHC.Generics to do something useful with it more than use custom variables for tuples",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "CustomVar",
        "normalized": "",
        "package": "processing",
        "partial": "Custom Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomArrayVar",
      "description": {
        "fct-descr": "\u003cp\u003eArray variable of custom values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomArrayVar",
        "fct-type": "data",
        "title": "CustomArrayVar"
      },
      "index": {
        "description": "Array variable of custom values",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "CustomArrayVar",
        "normalized": "",
        "package": "processing",
        "partial": "Custom Array Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomValue",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass of custom values, which can be stored in custom variables (\u003ccode\u003e\u003ca\u003eCustomVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomValue",
        "fct-type": "class",
        "title": "CustomValue"
      },
      "index": {
        "description": "Typeclass of custom values which can be stored in custom variables CustomVar",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "CustomValue",
        "normalized": "",
        "package": "processing",
        "partial": "Custom Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomVar",
      "description": {
        "fct-descr": "\u003cp\u003eVariable with custom values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomVar",
        "fct-type": "data",
        "title": "CustomVar"
      },
      "index": {
        "description": "Variable with custom values",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "CustomVar",
        "normalized": "",
        "package": "processing",
        "partial": "Custom Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:VarLength",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass of values that can be stored in several\n   native variables (\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#VarLength",
        "fct-type": "class",
        "title": "VarLength"
      },
      "index": {
        "description": "Typeclass of values that can be stored in several native variables Var",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "VarLength",
        "normalized": "",
        "package": "processing",
        "partial": "Var Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:customArraySize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the custom array.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "CustomArrayVar a -\u003e Int",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#customArraySize",
        "fct-type": "function",
        "title": "customArraySize"
      },
      "index": {
        "description": "Size of the custom array",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "customArraySize",
        "normalized": "CustomArrayVar a-\u003eInt",
        "package": "processing",
        "partial": "Array Size",
        "signature": "CustomArrayVar a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:ifC",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eif_\u003c/a\u003e\u003c/code\u003e for custom values.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "Proc_Bool -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#ifC",
        "fct-type": "method",
        "title": "ifC"
      },
      "index": {
        "description": "Version of if for custom values",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "ifC",
        "normalized": "Proc_Bool-\u003ea-\u003ea-\u003ea",
        "package": "processing",
        "partial": "",
        "signature": "Proc_Bool-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:newArrayVarC",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003enewArrayVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "[a] -\u003e m Preamble (CustomArrayVar a)",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#newArrayVarC",
        "fct-type": "method",
        "title": "newArrayVarC"
      },
      "index": {
        "description": "Version of newArrayVar for custom variables",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "newArrayVarC",
        "normalized": "[a]-\u003eb Preamble(CustomArrayVar a)",
        "package": "processing",
        "partial": "Array Var",
        "signature": "[a]-\u003em Preamble(CustomArrayVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:newVarC",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003enewVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "a -\u003e m Preamble (CustomVar a)",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#newVarC",
        "fct-type": "method",
        "title": "newVarC"
      },
      "index": {
        "description": "Version of newVar for custom variables",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "newVarC",
        "normalized": "a-\u003eb Preamble(CustomVar a)",
        "package": "processing",
        "partial": "Var",
        "signature": "a-\u003em Preamble(CustomVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:readArrayVarC",
      "description": {
        "fct-descr": "\u003cp\u003eRead a component of a custom array variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "CustomArrayVar a -\u003e Proc_Int -\u003e m c a",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#readArrayVarC",
        "fct-type": "function",
        "title": "readArrayVarC"
      },
      "index": {
        "description": "Read component of custom array variable",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "readArrayVarC",
        "normalized": "CustomArrayVar a-\u003eProc_Int-\u003eb c a",
        "package": "processing",
        "partial": "Array Var",
        "signature": "CustomArrayVar a-\u003eProc_Int-\u003em c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:readVarC",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ereadVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "CustomVar a -\u003e m c a",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#readVarC",
        "fct-type": "method",
        "title": "readVarC"
      },
      "index": {
        "description": "Version of readVar for custom variables",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "readVarC",
        "normalized": "CustomVar a-\u003eb c a",
        "package": "processing",
        "partial": "Var",
        "signature": "CustomVar a-\u003em c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:varLength",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate how many native variables are needed\n   to store a value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#varLength",
        "fct-type": "method",
        "title": "varLength"
      },
      "index": {
        "description": "Calculate how many native variables are needed to store value",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "varLength",
        "normalized": "a-\u003eInt",
        "package": "processing",
        "partial": "Length",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:writeArrayVarC",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a component of a custom array variable.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "CustomArrayVar a -\u003e Proc_Int -\u003e a -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#writeArrayVarC",
        "fct-type": "function",
        "title": "writeArrayVarC"
      },
      "index": {
        "description": "Write component of custom array variable",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "writeArrayVarC",
        "normalized": "CustomArrayVar a-\u003eProc_Int-\u003ea-\u003eb c()",
        "package": "processing",
        "partial": "Array Var",
        "signature": "CustomArrayVar a-\u003eProc_Int-\u003ea-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:writeVarC",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ewriteVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid.CustomVar",
        "fct-package": "processing",
        "fct-signature": "CustomVar a -\u003e a -\u003e m c ()",
        "fct-source": "src/Graphics-Web-Processing-Mid-CustomVar.html#writeVarC",
        "fct-type": "method",
        "title": "writeVarC"
      },
      "index": {
        "description": "Version of writeVar for custom variables",
        "hierarchy": "Graphics Web Processing Mid CustomVar",
        "module": "Graphics.Web.Processing.Mid.CustomVar",
        "name": "writeVarC",
        "normalized": "CustomVar a-\u003ea-\u003eb c()",
        "package": "processing",
        "partial": "Var",
        "signature": "CustomVar a-\u003ea-\u003em c()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProcessing scripting, \u003cem\u003emid\u003c/em\u003e interface.\n   Unlike the \u003cem\u003ebasic\u003c/em\u003e interface (see \u003ca\u003eGraphics.Web.Processing.Basic\u003c/a\u003e)\n   the script is more guided by the types. However, the output is\n   less predictable, since it does some tricks in order to obtain\n   semantics that are more coherent with Haskell. The difference is\n   small, but let's say that this module has more freedom writing\n   the output code. It also applies code optimizations, so the output\n   code may look different (see \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e and\n   \u003ca\u003eGraphics.Web.Processing.Optimize\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHow to work with it?\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEverything is done within\n   the \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e monad, a state monad that controls the entire script,\n   including the preamble, draw loop, setup, etc.\n   The interaction with the different parts of the script is done\n   via \u003cem\u003eevents\u003c/em\u003e (see \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e). For example, the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e event controls the draw\n   loop.\n\u003c/p\u003e\u003cpre\u003e mouse :: ScriptM Preamble ()\n mouse = do\n   on Setup $ do\n      size screenWidth screenHeight\n      fill $ Color 255 255 255 255\n   on Draw  $ do\n      background $ Color 0 0 0 255\n      p \u003c- getMousePoint\n      circle p 10\n\u003c/pre\u003e\u003cp\u003eNote that to make it work, the context of the script \u003cem\u003emust\u003c/em\u003e be\n   \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInteraction with variables is done via the interface provided by\n   the \u003ca\u003eGraphics.Web.Processing.Core.Var\u003c/a\u003e module.\n   This module defines functions to interact with variables in both the\n   \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e monad and the \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e monad.\n   To store custom types in variables, see the\n   \u003ca\u003eGraphics.Web.Processing.Mid.CustomVar\u003c/a\u003e module (you have to import\n   this module separately).\n\u003c/p\u003e\u003cp\u003eOnce your script is complete, use \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e to get the result\n   code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Mid.html",
        "fct-type": "module",
        "title": "Mid"
      },
      "index": {
        "description": "Processing scripting mid interface Unlike the basic interface see Graphics.Web.Processing.Basic the script is more guided by the types However the output is less predictable since it does some tricks in order to obtain semantics that are more coherent with Haskell The difference is small but let say that this module has more freedom writing the output code It also applies code optimizations so the output code may look different see execScriptM and Graphics.Web.Processing.Optimize How to work with it Everything is done within the ScriptM monad state monad that controls the entire script including the preamble draw loop setup etc The interaction with the different parts of the script is done via events see EventM For example the Draw event controls the draw loop mouse ScriptM Preamble mouse do on Setup do size screenWidth screenHeight fill Color on Draw do background Color getMousePoint circle Note that to make it work the context of the script must be Preamble Interaction with variables is done via the interface provided by the Graphics.Web.Processing.Core.Var module This module defines functions to interact with variables in both the ScriptM monad and the EventM monad To store custom types in variables see the Graphics.Web.Processing.Mid.CustomVar module you have to import this module separately Once your script is complete use execScriptM to get the result code",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "Mid",
        "normalized": "",
        "package": "processing",
        "partial": "Mid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eContext of an event. The context determines which functions can be used.\n   \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e is not an instance of \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e to avoid using \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e as\n   an event (see \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#Context",
        "fct-type": "class",
        "title": "Context"
      },
      "index": {
        "description": "Context of an event The context determines which functions can be used Preamble is not an instance of Context to avoid using Preamble as an event see on",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "Context",
        "normalized": "",
        "package": "processing",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:EventM",
      "description": {
        "fct-descr": "\u003cp\u003eMonad of events. Use \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e to insert an event in a script (\u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e).\n   To write the event code, use the functions in\n   \u003ca\u003eGraphics.Web.Processing.Core.Interface\u003c/a\u003e, since \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e is an instance\n   of \u003ccode\u003e\u003ca\u003eProcMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#EventM",
        "fct-type": "data",
        "title": "EventM"
      },
      "index": {
        "description": "Monad of events Use on to insert an event in script ScriptM To write the event code use the functions in Graphics.Web.Processing.Core.Interface since EventM is an instance of ProcMonad",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "EventM",
        "normalized": "",
        "package": "processing",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:ScriptM",
      "description": {
        "fct-descr": "\u003cp\u003eScripter monad. This monad is where Processing code is written.\n   Because of some implementation details, \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e has a context \u003ccode\u003ec\u003c/code\u003e.\n   However, this context is \u003cem\u003ealways\u003c/em\u003e \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#ScriptM",
        "fct-type": "data",
        "title": "ScriptM"
      },
      "index": {
        "description": "Scripter monad This monad is where Processing code is written Because of some implementation details ScriptM has context However this context is always Preamble",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "ScriptM",
        "normalized": "",
        "package": "processing",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:execScriptM",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the scripter monad to get the full Processing script.\n   Use \u003ccode\u003e\u003ca\u003erenderScript\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e to render it.\n\u003c/p\u003e\u003cp\u003eAfter generating the script, the output code is optimized\n   using \u003ccode\u003e\u003ca\u003eoptimizeBySubstitution\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "ScriptM Preamble () -\u003e ProcScript",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#execScriptM",
        "fct-type": "function",
        "title": "execScriptM"
      },
      "index": {
        "description": "Execute the scripter monad to get the full Processing script Use renderScript or renderFile to render it After generating the script the output code is optimized using optimizeBySubstitution",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "execScriptM",
        "normalized": "ScriptM Preamble()-\u003eProcScript",
        "package": "processing",
        "partial": "Script",
        "signature": "ScriptM Preamble()-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:execScriptMFast",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e, but skips optimizations.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "ScriptM Preamble () -\u003e ProcScript",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#execScriptMFast",
        "fct-type": "function",
        "title": "execScriptMFast"
      },
      "index": {
        "description": "Like execScriptM but skips optimizations",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "execScriptMFast",
        "normalized": "ScriptM Preamble()-\u003eProcScript",
        "package": "processing",
        "partial": "Script MFast",
        "signature": "ScriptM Preamble()-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:on",
      "description": {
        "fct-descr": "\u003cp\u003eSet an event. Different events are specified by the instances of the\n   \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eFor example, the following code sets the \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e pattern in the setup event (the event\n   that is called once at the beginning of the execution).\n\u003c/p\u003e\u003cpre\u003e on Setup $ fill $ Color 0 0 0 255\n\u003c/pre\u003e",
        "fct-module": "Graphics.Web.Processing.Mid",
        "fct-package": "processing",
        "fct-signature": "c -\u003e EventM c () -\u003e ScriptM Preamble ()",
        "fct-source": "src/Graphics-Web-Processing-Mid.html#on",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "Set an event Different events are specified by the instances of the Context class For example the following code sets the fill pattern in the setup event the event that is called once at the beginning of the execution on Setup fill Color",
        "hierarchy": "Graphics Web Processing Mid",
        "module": "Graphics.Web.Processing.Mid",
        "name": "on",
        "normalized": "a-\u003eEventM a()-\u003eScriptM Preamble()",
        "package": "processing",
        "partial": "",
        "signature": "c-\u003eEventM c()-\u003eScriptM Preamble()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode optimization module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Optimize",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Optimize.html",
        "fct-type": "module",
        "title": "Optimize"
      },
      "index": {
        "description": "Code optimization module",
        "hierarchy": "Graphics Web Processing Optimize",
        "module": "Graphics.Web.Processing.Optimize",
        "name": "Optimize",
        "normalized": "",
        "package": "processing",
        "partial": "Optimize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#v:optimizeBySubstitution",
      "description": {
        "fct-descr": "\u003cp\u003eOptimization by substitution. It looks for commonly repeated operations and\n   create variables for them so they are only calculated once.\n\u003c/p\u003e\u003cp\u003eThis optimization is applied automatically when using \u003ccode\u003eexecScriptM\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLook at the generated to code to see which substitutions have been made.\n   They are delimited by comments, with title \u003cem\u003eSubstitution Optimization settings\u003c/em\u003e.\n   If this is not present, no substitution has been made.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Optimize",
        "fct-package": "processing",
        "fct-signature": "ProcScript -\u003e ProcScript",
        "fct-source": "src/Graphics-Web-Processing-Optimize.html#optimizeBySubstitution",
        "fct-type": "function",
        "title": "optimizeBySubstitution"
      },
      "index": {
        "description": "Optimization by substitution It looks for commonly repeated operations and create variables for them so they are only calculated once This optimization is applied automatically when using execScriptM Look at the generated to code to see which substitutions have been made They are delimited by comments with title Substitution Optimization settings If this is not present no substitution has been made",
        "hierarchy": "Graphics Web Processing Optimize",
        "module": "Graphics.Web.Processing.Optimize",
        "name": "optimizeBySubstitution",
        "normalized": "ProcScript-\u003eProcScript",
        "package": "processing",
        "partial": "By Substitution",
        "signature": "ProcScript-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#v:prop_optimizeBySubstitution_projection",
      "description": {
        "fct-descr": "\u003cp\u003eOptimizations are projections. In particular:\n\u003c/p\u003e\u003cpre\u003e let f = optimizeBySubstitution\n in  f x == f (f x)\n\u003c/pre\u003e\u003cp\u003eThis function checks that this equality holds for a given \u003ccode\u003ex\u003c/code\u003e.\n   Apply it to your own script to check that the property is true.\n   Tests has been applied to randomly generated scripts, but for\n   them, \u003ccode\u003ef\u003c/code\u003e &#8776; \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Optimize",
        "fct-package": "processing",
        "fct-signature": "ProcScript -\u003e Bool",
        "fct-source": "src/Graphics-Web-Processing-Optimize.html#prop_optimizeBySubstitution_projection",
        "fct-type": "function",
        "title": "prop_optimizeBySubstitution_projection"
      },
      "index": {
        "description": "Optimizations are projections In particular let optimizeBySubstitution in This function checks that this equality holds for given Apply it to your own script to check that the property is true Tests has been applied to randomly generated scripts but for them id",
        "hierarchy": "Graphics Web Processing Optimize",
        "module": "Graphics.Web.Processing.Optimize",
        "name": "prop_optimizeBySubstitution_projection",
        "normalized": "ProcScript-\u003eBool",
        "package": "processing",
        "partial": "By Substitution",
        "signature": "ProcScript-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e models figures in the plane.\n   Then, figures are displayed or animated using\n   a Processing script.\n\u003c/p\u003e\u003cp\u003eFor example, this expression represents a circle\n   of radius 10 centered at the origin:\n\u003c/p\u003e\u003cpre\u003e Circle (0,0) 10\n\u003c/pre\u003e\u003cp\u003eThe origin will be represented at the center of\n   the screen. As opposed to the other modules,\n   \u003cem\u003ey\u003c/em\u003e-coordinates increase to the top, while \u003cem\u003ex\u003c/em\u003e-coordinates\n   still increase to the right.\n\u003c/p\u003e\u003cp\u003eThis is a red rectangle with top-left corner at the origin,\n   10 points height and 10 points width:\n\u003c/p\u003e\u003cpre\u003e FillColor (Color 255 0 0 255) $ Rectangle (0,0) 10 10\n\u003c/pre\u003e\u003cp\u003eTo display several figures together, use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cpre\u003e Circle (0,0) 10 \u003c\u003e Circle (0,20) 10\n\u003c/pre\u003e\u003cp\u003eIf you just want to display this figure in the target canvas,\n   use \u003ccode\u003e\u003ca\u003edisplayFigure\u003c/a\u003e\u003c/code\u003e. If you want to animate it, use \u003ccode\u003e\u003ca\u003eanimateFigure\u003c/a\u003e\u003c/code\u003e.\n   Animations depend on the number of frames since the beginning of\n   the execution, instead of in the time spent.\n\u003c/p\u003e\u003cp\u003eOnce you have created a processing script (a value of type\n   \u003ccode\u003e\u003ca\u003eProcScript\u003c/a\u003e\u003c/code\u003e), use \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e to write it to a file. See\n   also the \u003ca\u003eGraphics.Web.Processing.Html\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe default filling color and line color are white and black\n   respectively. Use \u003ccode\u003e\u003ca\u003eFillColor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLineColor\u003c/a\u003e\u003c/code\u003e to change these\n   colors. \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003es are in RGBA format, meaning that they may be\n   transparent (with an alpha value of 0), opaque (with an alpha\n   value of 255) or something in between. Use a fully transparent\n   color to indicate that a Figure should not be filled.\n\u003c/p\u003e\u003cp\u003eYou can apply transformations like translation, rotation and\n   scaling. If \u003ccode\u003ep\u003c/code\u003e is a point and \u003ccode\u003ef\u003c/code\u003e a figure, \u003ccode\u003eTranslate p f\u003c/code\u003e\n   will draw \u003ccode\u003ef\u003c/code\u003e with \u003ccode\u003ep\u003c/code\u003e as the origin of coordinates. Rotations\n   and scalings are always done in respect to the origin, but note\n   that you can modify where the origin is using \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Monoid models figures in the plane Then figures are displayed or animated using Processing script For example this expression represents circle of radius centered at the origin Circle The origin will be represented at the center of the screen As opposed to the other modules coordinates increase to the top while coordinates still increase to the right This is red rectangle with top-left corner at the origin points height and points width FillColor Color Rectangle To display several figures together use the Monoid instance Circle Circle If you just want to display this figure in the target canvas use displayFigure If you want to animate it use animateFigure Animations depend on the number of frames since the beginning of the execution instead of in the time spent Once you have created processing script value of type ProcScript use renderFile to write it to file See also the Graphics.Web.Processing.Html module The default filling color and line color are white and black respectively Use FillColor and LineColor to change these colors Color are in RGBA format meaning that they may be transparent with an alpha value of opaque with an alpha value of or something in between Use fully transparent color to indicate that Figure should not be filled You can apply transformations like translation rotation and scaling If is point and figure Translate will draw with as the origin of coordinates Rotations and scalings are always done in respect to the origin but note that you can modify where the origin is using Translate",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "processing",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:ArrowKey",
      "description": {
        "fct-descr": "\u003cp\u003eArrow keys.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "data",
        "title": "ArrowKey"
      },
      "index": {
        "description": "Arrow keys",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ArrowKey",
        "normalized": "",
        "package": "processing",
        "partial": "Arrow Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eRGBA colors. Values must be between\n   0 and 255, including in the alpha channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "RGBA colors Values must be between and including in the alpha channel",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Color",
        "normalized": "",
        "package": "processing",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Figure",
      "description": {
        "fct-descr": "\u003cp\u003eThe monoid of plane figures.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "data",
        "title": "Figure"
      },
      "index": {
        "description": "The monoid of plane figures",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Figure",
        "normalized": "",
        "package": "processing",
        "partial": "Figure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eKeyboard keys recognized by Processing.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Keyboard keys recognized by Processing",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Key",
        "normalized": "",
        "package": "processing",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:KeyModifier",
      "description": {
        "fct-descr": "\u003cp\u003eKey modifiers.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "data",
        "title": "KeyModifier"
      },
      "index": {
        "description": "Key modifiers",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "KeyModifier",
        "normalized": "",
        "package": "processing",
        "partial": "Key Modifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA path is just a list of points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "path is just list of points",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Path",
        "normalized": "",
        "package": "processing",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Proc_Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point as a pair of floating point numbers.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Proc_Point",
        "fct-type": "type",
        "title": "Proc_Point"
      },
      "index": {
        "description": "point as pair of floating point numbers",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Proc_Point",
        "normalized": "",
        "package": "processing",
        "partial": "Proc Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:SpecialKey",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial keys.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "data",
        "title": "SpecialKey"
      },
      "index": {
        "description": "Special keys",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "SpecialKey",
        "normalized": "",
        "package": "processing",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ALT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "ALT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "ALT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ALT",
        "normalized": "",
        "package": "processing",
        "partial": "ALT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Arc",
      "description": {
        "fct-descr": "\u003cp\u003eArc. The arc is drawn following the line of\n   an ellipse between two angles.\n   The first argument is the center of the ellipse.\n   The next two arguments are the width and height of\n   the ellipse.\n   The last two arguments are the initial and end\n   angles of the arc.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Arc Proc_Point Proc_Float Proc_Float Proc_Float Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Arc"
      },
      "index": {
        "description": "Arc The arc is drawn following the line of an ellipse between two angles The first argument is the center of the ellipse The next two arguments are the width and height of the ellipse The last two arguments are the initial and end angles of the arc",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Arc",
        "normalized": "",
        "package": "processing",
        "partial": "Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ArrowKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "ArrowKey ArrowKey",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "ArrowKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ArrowKey",
        "normalized": "",
        "package": "processing",
        "partial": "Arrow Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:BACKSPACE",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "BACKSPACE",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "BACKSPACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "BACKSPACE",
        "normalized": "",
        "package": "processing",
        "partial": "BACKSPACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Bezier",
      "description": {
        "fct-descr": "\u003cp\u003eBezier curve. First and last arguments are the initial\n   and end points of the curve. The other points are\n   control points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Bezier Proc_Point Proc_Point Proc_Point Proc_Point",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Bezier"
      },
      "index": {
        "description": "Bezier curve First and last arguments are the initial and end points of the curve The other points are control points",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Bezier",
        "normalized": "",
        "package": "processing",
        "partial": "Bezier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:CONTROL",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "CONTROL",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "CONTROL"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "CONTROL",
        "normalized": "",
        "package": "processing",
        "partial": "CONTROL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:CharKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "CharKey Char",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "CharKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "CharKey",
        "normalized": "",
        "package": "processing",
        "partial": "Char Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eCircle centered at the given point and with\n   the specified radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Circle Proc_Point Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "Circle centered at the given point and with the specified radius",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Circle",
        "normalized": "",
        "package": "processing",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Color",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Color",
        "normalized": "",
        "package": "processing",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:DOWN",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "DOWN",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "DOWN"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "DOWN",
        "normalized": "",
        "package": "processing",
        "partial": "DOWN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ENTER",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "ENTER",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "ENTER"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ENTER",
        "normalized": "",
        "package": "processing",
        "partial": "ENTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ESC",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "ESC",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "ESC"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ESC",
        "normalized": "",
        "package": "processing",
        "partial": "ESC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Ellipse",
      "description": {
        "fct-descr": "\u003cp\u003eEllipse centered at the given point,\n   with width and height also specified.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Ellipse Proc_Point Proc_Float Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Ellipse"
      },
      "index": {
        "description": "Ellipse centered at the given point with width and height also specified",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Ellipse",
        "normalized": "",
        "package": "processing",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Figures",
      "description": {
        "fct-descr": "\u003cp\u003eList of figures.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Figures [Figure]",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Figures"
      },
      "index": {
        "description": "List of figures",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Figures",
        "normalized": "Figures[Figure]",
        "package": "processing",
        "partial": "Figures",
        "signature": "Figures[Figure]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:FillColor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the filling color of a figure.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "FillColor Color Figure",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "FillColor"
      },
      "index": {
        "description": "Set the filling color of figure",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "FillColor",
        "normalized": "",
        "package": "processing",
        "partial": "Fill Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:LEFT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "LEFT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "LEFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "LEFT",
        "normalized": "",
        "package": "processing",
        "partial": "LEFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Line",
      "description": {
        "fct-descr": "\u003cp\u003eLine joining a list of points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Line Path",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "Line joining list of points",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Line",
        "normalized": "",
        "package": "processing",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:LineColor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line color of a figure.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "LineColor Color Figure",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "LineColor"
      },
      "index": {
        "description": "Set the line color of figure",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "LineColor",
        "normalized": "",
        "package": "processing",
        "partial": "Line Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ModKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "ModKey KeyModifier Key",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "ModKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "ModKey",
        "normalized": "",
        "package": "processing",
        "partial": "Mod Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003ePolygon given a list of vertex.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Polygon Path",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "Polygon given list of vertex",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Polygon",
        "normalized": "",
        "package": "processing",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:RETURN",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "RETURN",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "RETURN"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "RETURN",
        "normalized": "",
        "package": "processing",
        "partial": "RETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:RIGHT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "RIGHT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "RIGHT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "RIGHT",
        "normalized": "",
        "package": "processing",
        "partial": "RIGHT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eRectangle such that the top-left corner is\n   at the specified point, and its width and\n   height are specified by the other two arguments.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Rectangle Proc_Point Proc_Float Proc_Float",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "Rectangle such that the top-left corner is at the specified point and its width and height are specified by the other two arguments",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Rectangle",
        "normalized": "",
        "package": "processing",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a figure by the given angle in radians.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Rotate Proc_Float Figure",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Rotate"
      },
      "index": {
        "description": "Rotate figure by the given angle in radians",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Rotate",
        "normalized": "",
        "package": "processing",
        "partial": "Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:SHIFT",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "SHIFT",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
        "fct-type": "function",
        "title": "SHIFT"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "SHIFT",
        "normalized": "",
        "package": "processing",
        "partial": "SHIFT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale a figure by the given x and y factors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Scale Proc_Float Proc_Float Figure",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Scale"
      },
      "index": {
        "description": "Scale figure by the given and factors",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Scale",
        "normalized": "",
        "package": "processing",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:SpecialKey",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "SpecialKey SpecialKey",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
        "fct-type": "function",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "SpecialKey",
        "normalized": "",
        "package": "processing",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:TAB",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "TAB",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
        "fct-type": "function",
        "title": "TAB"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "TAB",
        "normalized": "",
        "package": "processing",
        "partial": "TAB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eText.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Text Proc_Point Proc_Text",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "Text",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Text",
        "normalized": "",
        "package": "processing",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a figure in the direction of a vector.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Translate Proc_Point Figure",
        "fct-source": "src/Graphics-Web-Processing-Simple.html#Figure",
        "fct-type": "function",
        "title": "Translate"
      },
      "index": {
        "description": "Translate figure in the direction of vector",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "Translate",
        "normalized": "",
        "package": "processing",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:UP",
      "description": {
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "UP",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
        "fct-type": "function",
        "title": "UP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "UP",
        "normalized": "",
        "package": "processing",
        "partial": "UP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:alphac",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha channel (opacity).\n 0 means transparent, and 255 opaque.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "alphac"
      },
      "index": {
        "description": "Alpha channel opacity means transparent and opaque",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "alphac",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:animateFigure",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Processing animation from a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e-valued function.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Maybe Int-\u003e Maybe Int-\u003e Int-\u003e Color-\u003e (Proc_Int -\u003e Figure)-\u003e ProcScript",
        "fct-type": "function",
        "title": "animateFigure"
      },
      "index": {
        "description": "Create Processing animation from Figure valued function",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "animateFigure",
        "normalized": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003eColor-\u003e(Proc_Int-\u003eFigure)-\u003eProcScript",
        "package": "processing",
        "partial": "Figure",
        "signature": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003eColor-\u003e(Proc_Int-\u003eFigure)-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:bluec",
      "description": {
        "fct-descr": "\u003cp\u003eBlue channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "bluec"
      },
      "index": {
        "description": "Blue channel",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "bluec",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:displayFigure",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay a figure using a Processing script.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Maybe Int-\u003e Maybe Int-\u003e Color-\u003e Figure-\u003e ProcScript",
        "fct-type": "function",
        "title": "displayFigure"
      },
      "index": {
        "description": "Display figure using Processing script",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "displayFigure",
        "normalized": "Maybe Int-\u003eMaybe Int-\u003eColor-\u003eFigure-\u003eProcScript",
        "package": "processing",
        "partial": "Figure",
        "signature": "Maybe Int-\u003eMaybe Int-\u003eColor-\u003eFigure-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:greenc",
      "description": {
        "fct-descr": "\u003cp\u003eGreen channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "greenc"
      },
      "index": {
        "description": "Green channel",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "greenc",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:interactiveFigure",
      "description": {
        "fct-descr": "\u003cp\u003eFramework to create interactive scripts.\n\u003c/p\u003e\u003cp\u003eNote that is required for the state to be an instance of \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e.\n   More info on how to instantiate a type in the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class in the\n   \u003ca\u003eGraphics.Web.Processing.Mid.CustomVar\u003c/a\u003e module.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Maybe Int-\u003e Maybe Int-\u003e Int-\u003e w-\u003e (w -\u003e Figure)-\u003e (w -\u003e Color)-\u003e (Proc_Int -\u003e w -\u003e w)-\u003e (Proc_Point -\u003e w -\u003e w)-\u003e [(Key, w -\u003e w)]-\u003e ProcScript",
        "fct-type": "function",
        "title": "interactiveFigure"
      },
      "index": {
        "description": "Framework to create interactive scripts Note that is required for the state to be an instance of CustomValue More info on how to instantiate type in the CustomValue class in the Graphics.Web.Processing.Mid.CustomVar module",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "interactiveFigure",
        "normalized": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003ea-\u003e(a-\u003eFigure)-\u003e(a-\u003eColor)-\u003e(Proc_Int-\u003ea-\u003ea)-\u003e(Proc_Point-\u003ea-\u003ea)-\u003e[(Key,a-\u003ea)]-\u003eProcScript",
        "package": "processing",
        "partial": "Figure",
        "signature": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003ew-\u003e(w-\u003eFigure)-\u003e(w-\u003eColor)-\u003e(Proc_Int-\u003ew-\u003ew)-\u003e(Proc_Point-\u003ew-\u003ew)-\u003e[(Key,w-\u003ew)]-\u003eProcScript"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:redc",
      "description": {
        "fct-descr": "\u003cp\u003eRed channel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Web.Processing.Simple",
        "fct-package": "processing",
        "fct-signature": "Proc_Int",
        "fct-source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
        "fct-type": "function",
        "title": "redc"
      },
      "index": {
        "description": "Red channel",
        "hierarchy": "Graphics Web Processing Simple",
        "module": "Graphics.Web.Processing.Simple",
        "name": "redc",
        "normalized": "",
        "package": "processing",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the \u003cem\u003emid\u003c/em\u003e interface\n   to \u003cem\u003eprocessing\u003c/em\u003e. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Web.Processing",
        "fct-package": "processing",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Web-Processing.html",
        "fct-type": "module",
        "title": "Processing"
      },
      "index": {
        "description": "This module re-exports the mid interface to processing",
        "hierarchy": "Graphics Web Processing",
        "module": "Graphics.Web.Processing",
        "name": "Processing",
        "normalized": "",
        "package": "processing",
        "partial": "Processing",
        "signature": ""
      }
    }
  }
]