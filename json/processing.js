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
        "word": "processing"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003cem\u003ebasic\u003c/em\u003e interface is the closest to the original.\n   Although it contains some variations too.\n\u003c/p\u003e\u003cp\u003eFor several reasons, it is recommended to use the \u003cem\u003emid\u003c/em\u003e\n   interface instead, which can be found in the\n   \u003ca\u003eGraphics.Web.Processing.Mid\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Basic",
          "name": "Basic",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "The basic interface is the closest to the original Although it contains some variations too For several reasons it is recommended to use the mid interface instead which can be found in the Graphics.Web.Processing.Mid module",
          "hierarchy": "Graphics Web Processing Basic",
          "module": "Graphics.Web.Processing.Basic",
          "name": "Basic",
          "package": "processing",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessing script producer monad. The context \u003ccode\u003ec\u003c/code\u003e indicates the context\n   of the underlying \u003ccode\u003e\u003ca\u003eProcCode\u003c/a\u003e\u003c/code\u003e. This context restricts the use of certain\n   commands only to places where they are expected.\n\u003c/p\u003e\u003cp\u003eThe commands that you can run under this monad are mostly defined in\n   \u003ca\u003eGraphics.Web.Processing.Interface\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eOnce you have all the commands you want, use \u003ccode\u003e\u003ca\u003erunProcM\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eexecProcM\u003c/a\u003e\u003c/code\u003e\n   to generate the corresponding Processing code under the \u003ccode\u003e\u003ca\u003eProcCode\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Basic",
          "name": "ProcM",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#ProcM",
          "type": "data"
        },
        "index": {
          "description": "Processing script producer monad The context indicates the context of the underlying ProcCode This context restricts the use of certain commands only to places where they are expected The commands that you can run under this monad are mostly defined in Graphics.Web.Processing.Interface Once you have all the commands you want use runProcM or execProcM to generate the corresponding Processing code under the ProcCode type",
          "hierarchy": "Graphics Web Processing Basic",
          "module": "Graphics.Web.Processing.Basic",
          "name": "ProcM",
          "package": "processing",
          "partial": "Proc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#t:ProcM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Processing code using the \u003ccode\u003e\u003ca\u003eProcM\u003c/a\u003e\u003c/code\u003e monad, discarding the final\n   value.\n\u003c/p\u003e\u003cpre\u003e execProcM = snd . runProcM\n\u003c/pre\u003e",
          "module": "Graphics.Web.Processing.Basic",
          "name": "execProcM",
          "package": "processing",
          "signature": "ProcM c a -\u003e ProcCode c",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#execProcM",
          "type": "function"
        },
        "index": {
          "description": "Generate Processing code using the ProcM monad discarding the final value execProcM snd runProcM",
          "hierarchy": "Graphics Web Processing Basic",
          "module": "Graphics.Web.Processing.Basic",
          "name": "execProcM",
          "normalized": "ProcM a b-\u003eProcCode a",
          "package": "processing",
          "partial": "Proc",
          "signature": "ProcM c a-\u003eProcCode c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#v:execProcM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Processing code using the \u003ccode\u003e\u003ca\u003eProcM\u003c/a\u003e\u003c/code\u003e monad.\n   The code output is reduced.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Basic",
          "name": "runProcM",
          "package": "processing",
          "signature": "ProcM c a -\u003e (a, ProcCode c)",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#runProcM",
          "type": "function"
        },
        "index": {
          "description": "Generate Processing code using the ProcM monad The code output is reduced",
          "hierarchy": "Graphics Web Processing Basic",
          "module": "Graphics.Web.Processing.Basic",
          "name": "runProcM",
          "normalized": "ProcM a b-\u003e(b,ProcCode a)",
          "package": "processing",
          "partial": "Proc",
          "signature": "ProcM c a-\u003e(a,ProcCode c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Basic.html#v:runProcM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariables, commands and functions. The \u003cem\u003einterface\u003c/em\u003e to\n   the processing.js API (\u003ca\u003ehttp://processingjs.org/reference\u003c/a\u003e),\n   with some additions, deletions and modifications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Interface",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html",
          "type": "module"
        },
        "index": {
          "description": "Variables commands and functions The interface to the processing.js API http processingjs.org reference with some additions deletions and modifications",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Interface",
          "package": "processing",
          "partial": "Interface",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow keys.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ArrowKey",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "data"
        },
        "index": {
          "description": "Arrow keys",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ArrowKey",
          "package": "processing",
          "partial": "Arrow Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:ArrowKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRGBA colors. Values must be between\n   0 and 255, including in the alpha channel.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Color",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "data"
        },
        "index": {
          "description": "RGBA colors Values must be between and including in the alpha channel",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Color",
          "package": "processing",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of contexts where the user can draw pictures\n   in the screen.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Drawing",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Drawing",
          "type": "class"
        },
        "index": {
          "description": "Class of contexts where the user can draw pictures in the screen",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Drawing",
          "package": "processing",
          "partial": "Drawing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Drawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyboard keys recognized by Processing.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Key",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Keyboard keys recognized by Processing",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Key",
          "package": "processing",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey modifiers.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "KeyModifier",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
          "type": "data"
        },
        "index": {
          "description": "Key modifiers",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "KeyModifier",
          "package": "processing",
          "partial": "Key Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:KeyModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes in this instance form a monad when they are applied\n   to a context \u003ccode\u003ec\u003c/code\u003e. They are used to write Processing\n   code.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ProcMonad",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#ProcMonad",
          "type": "class"
        },
        "index": {
          "description": "Types in this instance form monad when they are applied to context They are used to write Processing code",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ProcMonad",
          "package": "processing",
          "partial": "Proc Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:ProcMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point as a pair of floating point numbers.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Proc_Point",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Proc_Point",
          "type": "type"
        },
        "index": {
          "description": "point as pair of floating point numbers",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Proc_Point",
          "package": "processing",
          "partial": "Proc Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:Proc_Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial keys.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "SpecialKey",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "data"
        },
        "index": {
          "description": "Special keys",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "SpecialKey",
          "package": "processing",
          "partial": "Special Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#t:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "ALT",
          "package": "processing",
          "signature": "ALT",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ALT\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ALT\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ALT",
          "package": "processing",
          "partial": "ALT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ALT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "ArrowKey",
          "package": "processing",
          "signature": "ArrowKey ArrowKey",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ArrowKey\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ArrowKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ArrowKey",
          "package": "processing",
          "partial": "Arrow Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ArrowKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "BACKSPACE",
          "package": "processing",
          "signature": "BACKSPACE",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:BACKSPACE\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:BACKSPACE\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "BACKSPACE",
          "package": "processing",
          "partial": "BACKSPACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:BACKSPACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "CONTROL",
          "package": "processing",
          "signature": "CONTROL",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CONTROL\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:CONTROL\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "CONTROL",
          "package": "processing",
          "partial": "CONTROL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CONTROL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "CharKey",
          "package": "processing",
          "signature": "CharKey Char",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CharKey\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:CharKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "CharKey",
          "package": "processing",
          "partial": "Char Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:CharKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "Color",
          "package": "processing",
          "signature": "Color",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:Color\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Color\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "Color",
          "package": "processing",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "DOWN",
          "package": "processing",
          "signature": "DOWN",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:DOWN\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:DOWN\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "DOWN",
          "package": "processing",
          "partial": "DOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:DOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "ENTER",
          "package": "processing",
          "signature": "ENTER",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ENTER\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ENTER\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ENTER",
          "package": "processing",
          "partial": "ENTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ENTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "ESC",
          "package": "processing",
          "signature": "ESC",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ESC\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ESC\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ESC",
          "package": "processing",
          "partial": "ESC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ESC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "LEFT",
          "package": "processing",
          "signature": "LEFT",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:LEFT\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:LEFT\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "LEFT",
          "package": "processing",
          "partial": "LEFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:LEFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "ModKey",
          "package": "processing",
          "signature": "ModKey KeyModifier Key",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ModKey\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:ModKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ModKey",
          "package": "processing",
          "partial": "Mod Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ModKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "RETURN",
          "package": "processing",
          "signature": "RETURN",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RETURN\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:RETURN\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "RETURN",
          "package": "processing",
          "partial": "RETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RETURN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "RIGHT",
          "package": "processing",
          "signature": "RIGHT",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RIGHT\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:RIGHT\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "RIGHT",
          "package": "processing",
          "partial": "RIGHT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:RIGHT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "SHIFT",
          "package": "processing",
          "signature": "SHIFT",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SHIFT\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:SHIFT\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "SHIFT",
          "package": "processing",
          "partial": "SHIFT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SHIFT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "SpecialKey",
          "package": "processing",
          "signature": "SpecialKey SpecialKey",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SpecialKey\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:SpecialKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "SpecialKey",
          "package": "processing",
          "partial": "Special Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "TAB",
          "package": "processing",
          "signature": "TAB",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:TAB\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:TAB\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "TAB",
          "package": "processing",
          "partial": "TAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:TAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "UP",
          "package": "processing",
          "signature": "UP",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:UP\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:UP\"]"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "UP",
          "package": "processing",
          "partial": "UP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:UP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha channel (opacity).\n 0 means transparent, and 255 opaque.\n\u003c/p\u003e",
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "alphac",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:alphac\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:alphac\"]"
        },
        "index": {
          "description": "Alpha channel opacity means transparent and opaque",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "alphac",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:alphac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an arc.\n\u003c/p\u003e\u003cp\u003eThe arc is drawn following the line of an ellipse\n   between two angles.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "arc",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Draw an arc The arc is drawn following the line of an ellipse between two angles",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "arc",
          "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill the screen with a given color.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "background",
          "package": "processing",
          "signature": "Color -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#background",
          "type": "function"
        },
        "index": {
          "description": "Fill the screen with given color",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "background",
          "normalized": "Color-\u003ea b()",
          "package": "processing",
          "signature": "Color-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eB&#233;zier curve.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "bezier",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Point-\u003e Proc_Point-\u003e Proc_Point-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "zier curve",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "bezier",
          "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:bezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlue channel.\n\u003c/p\u003e",
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "bluec",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:bluec\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:bluec\"]"
        },
        "index": {
          "description": "Blue channel",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "bluec",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:bluec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a circle.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "circle",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Draw circle",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "circle",
          "normalized": "Proc_Point-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude a comment in the current position of the code.\n   You normally don't need to read the processing.js code output,\n   but this function can be useful to analyse or debug it.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "comment",
          "package": "processing",
          "signature": "Text -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Include comment in the current position of the code You normally don need to read the processing.js code output but this function can be useful to analyse or debug it",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "comment",
          "normalized": "Text-\u003ea b()",
          "package": "processing",
          "signature": "Text-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a text in the screen.\n   The color is specified by \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "drawtext",
          "package": "processing",
          "signature": "Proc_Text-\u003e Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Display text in the screen The color is specified by fill",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "drawtext",
          "normalized": "Proc_Text-\u003eProc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Text-\u003eProc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:drawtext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a ellipse.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ellipse",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Draw ellipse",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ellipse",
          "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the filling color.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "fill",
          "package": "processing",
          "signature": "Color -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Set the filling color",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "fill",
          "normalized": "Color-\u003ea b()",
          "package": "processing",
          "signature": "Color-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrames since the beginning of the script execution.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "frameCount",
          "package": "processing",
          "signature": "m c Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#frameCount",
          "type": "function"
        },
        "index": {
          "description": "Frames since the beginning of the script execution",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "frameCount",
          "package": "processing",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:frameCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate number of frames per second.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "getFrameRate",
          "package": "processing",
          "signature": "m c Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#getFrameRate",
          "type": "function"
        },
        "index": {
          "description": "Approximate number of frames per second",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "getFrameRate",
          "package": "processing",
          "partial": "Frame Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:getFrameRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current position of the mouse pointer.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "getMousePoint",
          "package": "processing",
          "signature": "m c Proc_Point",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#getMousePoint",
          "type": "function"
        },
        "index": {
          "description": "Get the current position of the mouse pointer",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "getMousePoint",
          "package": "processing",
          "partial": "Mouse Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:getMousePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreen channel.\n\u003c/p\u003e",
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "greenc",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:greenc\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:greenc\"]"
        },
        "index": {
          "description": "Green channel",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "greenc",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:greenc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution. When the boolean value is \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e,\n   it executes the first monadic argument. Otherwise, it\n   executes the other one. In any case, the result is discarded.\n   See also \u003ccode\u003e\u003ca\u003eif_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ifM",
          "package": "processing",
          "signature": "Proc_Bool -\u003e m c a -\u003e m c b -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ifM",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution When the boolean value is true it executes the first monadic argument Otherwise it executes the other one In any case the result is discarded See also if",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "ifM",
          "normalized": "Proc_Bool-\u003ea b c-\u003ea b d-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Bool-\u003em c a-\u003em c b-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a line.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "line",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Point-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Draw line",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "line",
          "normalized": "Proc_Point-\u003eProc_Point-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Point-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a variable of type \u003ccode\u003e\u003ca\u003eProc_Bool\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, and sets the variable to\n   \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e if the key pressed is the given \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e. Otherwise, the variable is set to \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "matchKey",
          "package": "processing",
          "signature": "Var Proc_Bool -\u003e Key -\u003e m KeyPressed ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#matchKey",
          "type": "function"
        },
        "index": {
          "description": "This function takes variable of type Proc Bool and Key and sets the variable to true if the key pressed is the given Key Otherwise the variable is set to false",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "matchKey",
          "normalized": "Var Proc_Bool-\u003eKey-\u003ea KeyPressed()",
          "package": "processing",
          "partial": "Key",
          "signature": "Var Proc_Bool-\u003eKey-\u003em KeyPressed()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:matchKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNoise random function.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "noise",
          "package": "processing",
          "signature": "Proc_Point -\u003e m c Proc_Float",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#noise",
          "type": "function"
        },
        "index": {
          "description": "Noise random function",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "noise",
          "normalized": "Proc_Point-\u003ea b Proc_Float",
          "package": "processing",
          "signature": "Proc_Point-\u003em c Proc_Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:noise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints a dot.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "point",
          "package": "processing",
          "signature": "Proc_Point-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Prints dot",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "point",
          "normalized": "Proc_Point-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolygon drawer.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "polygon",
          "package": "processing",
          "signature": "[Proc_Point] -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#polygon",
          "type": "function"
        },
        "index": {
          "description": "Polygon drawer",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "polygon",
          "normalized": "[Proc_Point]-\u003ea b()",
          "package": "processing",
          "signature": "[Proc_Point]-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quad is a quadrilateral, a four sided polygon.\n   The first parameter is the first vertex and the\n   subsequent parameters should proceed clockwise or\n   counter-clockwise around the defined shape.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "quad",
          "package": "processing",
          "signature": "Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#quad",
          "type": "function"
        },
        "index": {
          "description": "quad is quadrilateral four sided polygon The first parameter is the first vertex and the subsequent parameters should proceed clockwise or counter-clockwise around the defined shape",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "quad",
          "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a variable with a random number within an interval.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "random",
          "package": "processing",
          "signature": "Var Proc_Float-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Write variable with random number within an interval",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "random",
          "normalized": "Var Proc_Float-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Var Proc_Float-\u003eProc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a rectangle to the screen. A rectangle is a\n   four-sided shape with every angle at ninety degrees.\n   The first parameter set the location, the\n   second sets the width, and the third sets the height.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "rect",
          "package": "processing",
          "signature": "Proc_Point-\u003e Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Draws rectangle to the screen rectangle is four-sided shape with every angle at ninety degrees The first parameter set the location the second sets the width and the third sets the height",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "rect",
          "normalized": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed channel.\n\u003c/p\u003e",
          "module": "[\"Graphics.Web.Processing.Core.Interface\",\"Graphics.Web.Processing.Simple\"]",
          "name": "redc",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:redc\",\"http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:redc\"]"
        },
        "index": {
          "description": "Red channel",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "redc",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:redc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the transformation matrix.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "resetMatrix",
          "package": "processing",
          "signature": "m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#resetMatrix",
          "type": "function"
        },
        "index": {
          "description": "Reset the transformation matrix",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "resetMatrix",
          "normalized": "a b()",
          "package": "processing",
          "partial": "Matrix",
          "signature": "m c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:resetMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a rotation to the following pictures, centered\n   at the current position.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "rotate",
          "package": "processing",
          "signature": "Proc_Float -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Apply rotation to the following pictures centered at the current position",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "rotate",
          "normalized": "Proc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a scaling to the following pictures, centered\n   at the current position.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "scale",
          "package": "processing",
          "signature": "Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Apply scaling to the following pictures centered at the current position",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "scale",
          "normalized": "Proc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeight of the canvas.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "screenHeight",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#screenHeight",
          "type": "function"
        },
        "index": {
          "description": "Height of the canvas",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "screenHeight",
          "package": "processing",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:screenHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of the canvas.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "screenWidth",
          "package": "processing",
          "signature": "Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#screenWidth",
          "type": "function"
        },
        "index": {
          "description": "Width of the canvas",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "screenWidth",
          "package": "processing",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:screenWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the number of frames to be displayed every second.\n   The default rate is 60 frames per second.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "setFrameRate",
          "package": "processing",
          "signature": "Proc_Int -\u003e m Setup ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#setFrameRate",
          "type": "function"
        },
        "index": {
          "description": "Specify the number of frames to be displayed every second The default rate is frames per second",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "setFrameRate",
          "normalized": "Proc_Int-\u003ea Setup()",
          "package": "processing",
          "partial": "Frame Rate",
          "signature": "Proc_Int-\u003em Setup()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:setFrameRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the size of the canvas.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "size",
          "package": "processing",
          "signature": "Proc_Int -\u003e Proc_Int -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#size",
          "type": "function"
        },
        "index": {
          "description": "Set the size of the canvas",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "size",
          "normalized": "Proc_Int-\u003eProc_Int-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Int-\u003eProc_Int-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the drawing color.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "stroke",
          "package": "processing",
          "signature": "Color -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#stroke",
          "type": "function"
        },
        "index": {
          "description": "Set the drawing color",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "stroke",
          "normalized": "Color-\u003ea b()",
          "package": "processing",
          "signature": "Color-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the weight of the lines.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "strokeWeight",
          "package": "processing",
          "signature": "Proc_Int -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#strokeWeight",
          "type": "function"
        },
        "index": {
          "description": "Set the weight of the lines",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "strokeWeight",
          "normalized": "Proc_Int-\u003ea b()",
          "package": "processing",
          "partial": "Weight",
          "signature": "Proc_Int-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:strokeWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the current position.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "translate",
          "package": "processing",
          "signature": "Proc_Float-\u003e Proc_Float-\u003e m c ()",
          "type": "function"
        },
        "index": {
          "description": "Move the current position",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "translate",
          "normalized": "Proc_Float-\u003eProc_Float-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Float-\u003eProc_Float-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triangle is a plane created by connecting three points.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "triangle",
          "package": "processing",
          "signature": "Proc_Point -\u003e Proc_Point -\u003e Proc_Point -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#triangle",
          "type": "function"
        },
        "index": {
          "description": "triangle is plane created by connecting three points",
          "hierarchy": "Graphics Web Processing Core Interface",
          "module": "Graphics.Web.Processing.Core.Interface",
          "name": "triangle",
          "normalized": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003ea b()",
          "package": "processing",
          "signature": "Proc_Point-\u003eProc_Point-\u003eProc_Point-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Interface.html#v:triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of types (\u003ccode\u003eProc_*\u003c/code\u003e types and others), and\n   some functions on these types as well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Types",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of types Proc types and others and some functions on these types as well",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Types",
          "package": "processing",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe drawing loop.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Draw",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Draw",
          "type": "data"
        },
        "index": {
          "description": "The drawing loop",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Draw",
          "package": "processing",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode executed when a key is pressed.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "KeyPressed",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#KeyPressed",
          "type": "data"
        },
        "index": {
          "description": "Code executed when key is pressed",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "KeyPressed",
          "package": "processing",
          "partial": "Key Pressed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:KeyPressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode that is executed when the mouse is clicked.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseClicked",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#MouseClicked",
          "type": "data"
        },
        "index": {
          "description": "Code that is executed when the mouse is clicked",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseClicked",
          "package": "processing",
          "partial": "Mouse Clicked",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:MouseClicked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode that is executed when the mouse is released.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseReleased",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#MouseReleased",
          "type": "data"
        },
        "index": {
          "description": "Code that is executed when the mouse is released",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseReleased",
          "package": "processing",
          "partial": "Mouse Released",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:MouseReleased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003epreamble\u003c/em\u003e is the code that is executed\n   at the beginning of the script.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Preamble",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Preamble",
          "type": "data"
        },
        "index": {
          "description": "The preamble is the code that is executed at the beginning of the script",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Preamble",
          "package": "processing",
          "partial": "Preamble",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Preamble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA piece of Processing code.\n   The type parameter indicates what the\n   context of the code is.\n   This context will allow or disallow\n   the use of certain commands along\n   different events.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcCode",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcCode",
          "type": "data"
        },
        "index": {
          "description": "piece of Processing code The type parameter indicates what the context of the code is This context will allow or disallow the use of certain commands along different events",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcCode",
          "package": "processing",
          "partial": "Proc Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete Processing script.\n\u003c/p\u003e\u003cp\u003eIt consists in several parts, most of them optional.\n\u003c/p\u003e\u003cp\u003eTo generate each part of the code, use the \u003ccode\u003eProcM\u003c/code\u003e monad\n and the functions from the \u003ca\u003eGraphics.Web.Processing.Interface\u003c/a\u003e\n module. Then, run \u003ccode\u003erunProcM\u003c/code\u003e or \u003ccode\u003eexecProcM\u003c/code\u003e to get the\n code result.\n\u003c/p\u003e\u003cp\u003eMore abstract functions generate \u003ccode\u003e\u003ca\u003eProcScript\u003c/a\u003e\u003c/code\u003e values as well.\n See modules \u003ca\u003eGraphics.Web.Processing.Mid\u003c/a\u003e and \u003ca\u003eGraphics.Web.Processing.Simple\u003c/a\u003e\n for two alternative ways.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcScript",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "data"
        },
        "index": {
          "description": "complete Processing script It consists in several parts most of them optional To generate each part of the code use the ProcM monad and the functions from the Graphics.Web.Processing.Interface module Then run runProcM or execProcM to get the code result More abstract functions generate ProcScript values as well See modules Graphics.Web.Processing.Mid and Graphics.Web.Processing.Simple for two alternative ways",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcScript",
          "package": "processing",
          "partial": "Proc Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of Processing value types (\u003ccode\u003eProc_*\u003c/code\u003e types).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eProc_*\u003c/code\u003e types are types from the world of Processing.\n   Some of them are similar to Haskell types, like \u003ccode\u003e\u003ca\u003eProc_Bool\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e. However, they are not equal. \u003ccode\u003eProc_*\u003c/code\u003e types\n   are instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e. However, you should instead use methods from\n   the analog \u003ccode\u003e\u003ca\u003eProc_Eq\u003c/a\u003e\u003c/code\u003e class. \u003ccode\u003eProc_*\u003c/code\u003e types contain expressions instead\n   of values. Think of \u003ccode\u003e2+2\u003c/code\u003e instead of \u003ccode\u003e4\u003c/code\u003e. Under this situation,\n   \u003ccode\u003e2+2 /= 3+1\u003c/code\u003e, since they are different expressions, even if they\n   evaluate to the same value. Actually, you will get \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n   from the evaluation of \u003ccode\u003e2+2 == 3+1\u003c/code\u003e, since the library is smart\n   enough to figure out they have the same value. But, please, don't\n   rely on this. Use the \u003ccode\u003e\u003ca\u003eProc_Eq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProc_Ord\u003c/a\u003e\u003c/code\u003e classes instead.\n   They return Processing boolean expressions instead of \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e values.\n   Anyway, the types of the library will try to force you to use \u003ccode\u003eProc_*\u003c/code\u003e\n   types everywhere.\n\u003c/p\u003e\u003cp\u003eThe reason this library stores expressions instead of values is that\n   it needs to handle things like \u003ccode\u003e2+x\u003c/code\u003e, where \u003ccode\u003ex\u003c/code\u003e is an unknown value.\n   However, an effort is done to ensure that each expression is reduced\n   to its minimum extension.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcType",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcType",
          "type": "class"
        },
        "index": {
          "description": "Class of Processing value types Proc types Proc types are types from the world of Processing Some of them are similar to Haskell types like Proc Bool and Bool However they are not equal Proc types are instance of Eq However you should instead use methods from the analog Proc Eq class Proc types contain expressions instead of values Think of instead of Under this situation since they are different expressions even if they evaluate to the same value Actually you will get True from the evaluation of since the library is smart enough to figure out they have the same value But please don rely on this Use the Proc Eq and Proc Ord classes instead They return Processing boolean expressions instead of Bool values Anyway the types of the library will try to force you to use Proc types everywhere The reason this library stores expressions instead of values is that it needs to handle things like where is an unknown value However an effort is done to ensure that each expression is reduced to its minimum extension",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcType",
          "package": "processing",
          "partial": "Proc Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:ProcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Bool",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Bool",
          "type": "data"
        },
        "index": {
          "description": "Boolean values",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Bool",
          "package": "processing",
          "partial": "Proc Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of characters.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Char",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Char",
          "type": "data"
        },
        "index": {
          "description": "Type of characters",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Char",
          "package": "processing",
          "partial": "Proc Char",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class for \u003ccode\u003eProc_*\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Eq",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Eq",
          "type": "class"
        },
        "index": {
          "description": "Eq class for Proc values",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Eq",
          "package": "processing",
          "partial": "Proc Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point numbers.\n   The provided \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance checks the equality of the\n   internal expression, not the value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Float",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Float",
          "type": "data"
        },
        "index": {
          "description": "Floating point numbers The provided Eq instance checks the equality of the internal expression not the value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Float",
          "package": "processing",
          "partial": "Proc Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of images.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Image",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Image",
          "type": "data"
        },
        "index": {
          "description": "Type of images",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Image",
          "package": "processing",
          "partial": "Proc Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger numbers.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Int",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Int",
          "type": "data"
        },
        "index": {
          "description": "Integer numbers",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Int",
          "package": "processing",
          "partial": "Proc Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class for \u003ccode\u003eProc_*\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Ord",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Ord",
          "type": "class"
        },
        "index": {
          "description": "Ord class for Proc values",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Ord",
          "package": "processing",
          "partial": "Proc Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class, but for \u003ccode\u003eProc_*\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Show",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Show",
          "type": "class"
        },
        "index": {
          "description": "Similar to the Show class but for Proc types",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Show",
          "package": "processing",
          "partial": "Proc Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of textual values.\n\u003c/p\u003e\u003cp\u003eIt is recommended to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e extension.\n   Note that \u003ccode\u003e\u003ca\u003eProc_Text\u003c/a\u003e\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Text",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Proc_Text",
          "type": "data"
        },
        "index": {
          "description": "Type of textual values It is recommended to enable the OverloadedStrings extension Note that Proc Text is an instance of the IsString class",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Proc_Text",
          "package": "processing",
          "partial": "Proc Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Proc_Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn the \u003cem\u003esetup\u003c/em\u003e part, settings like \u003cem\u003esize\u003c/em\u003e or\n   \u003cem\u003eframe rate\u003c/em\u003e are supplied.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Setup",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Setup",
          "type": "data"
        },
        "index": {
          "description": "In the setup part settings like size or frame rate are supplied",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Setup",
          "package": "processing",
          "partial": "Setup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#t:Setup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#||)",
          "package": "processing",
          "signature": "Proc_Bool -\u003e Proc_Bool -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Disjunction",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#||) #||",
          "normalized": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
          "package": "processing",
          "signature": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#&&)",
          "package": "processing",
          "signature": "Proc_Bool -\u003e Proc_Bool -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%26%26",
          "type": "function"
        },
        "index": {
          "description": "Conjunction",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#&&) #&&",
          "normalized": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
          "package": "processing",
          "signature": "Proc_Bool-\u003eProc_Bool-\u003eProc_Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#/=)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%2F%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#/=) #/=",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003c)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003c) #\u003c",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003c=)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3C%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003c=) #\u003c=",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#==)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3D%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#==) #==",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003e)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003e) #\u003e",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003e=)",
          "package": "processing",
          "signature": "a -\u003e a -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%23%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(#\u003e=) #\u003e=",
          "normalized": "a-\u003ea-\u003eProc_Bool",
          "package": "processing",
          "signature": "a-\u003ea-\u003eProc_Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-35--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two text strings.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(+.+)",
          "package": "processing",
          "signature": "Proc_Text -\u003e Proc_Text -\u003e Proc_Text",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#%2B.%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two text strings",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "(+.+) +.+",
          "normalized": "Proc_Text-\u003eProc_Text-\u003eProc_Text",
          "package": "processing",
          "signature": "Proc_Text-\u003eProc_Text-\u003eProc_Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:-43-.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Draw",
          "package": "processing",
          "signature": "Draw",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Draw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Draw",
          "package": "processing",
          "partial": "Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "KeyPressed",
          "package": "processing",
          "signature": "KeyPressed",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#KeyPressed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "KeyPressed",
          "package": "processing",
          "partial": "Key Pressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:KeyPressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseClicked",
          "package": "processing",
          "signature": "MouseClicked",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#MouseClicked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseClicked",
          "package": "processing",
          "partial": "Mouse Clicked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:MouseClicked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseReleased",
          "package": "processing",
          "signature": "MouseReleased",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#MouseReleased",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "MouseReleased",
          "package": "processing",
          "partial": "Mouse Released",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:MouseReleased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Preamble",
          "package": "processing",
          "signature": "Preamble",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Preamble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Preamble",
          "package": "processing",
          "partial": "Preamble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Preamble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcScript",
          "package": "processing",
          "signature": "ProcScript",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "ProcScript",
          "package": "processing",
          "partial": "Proc Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:ProcScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Setup",
          "package": "processing",
          "signature": "Setup",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Setup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "Setup",
          "package": "processing",
          "partial": "Setup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:Setup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty script.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "emptyScript",
          "package": "processing",
          "signature": "ProcScript",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#emptyScript",
          "type": "function"
        },
        "index": {
          "description": "Empty script",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "emptyScript",
          "package": "processing",
          "partial": "Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:emptyScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "false",
          "package": "processing",
          "signature": "Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#false",
          "type": "function"
        },
        "index": {
          "description": "Value of False",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "false",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromBool",
          "package": "processing",
          "signature": "Bool -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#fromBool",
          "type": "function"
        },
        "index": {
          "description": "Cast Bool value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromBool",
          "normalized": "Bool-\u003eProc_Bool",
          "package": "processing",
          "partial": "Bool",
          "signature": "Bool-\u003eProc_Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromChar",
          "package": "processing",
          "signature": "Char -\u003e Proc_Char",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#fromChar",
          "type": "function"
        },
        "index": {
          "description": "Cast Char value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromChar",
          "normalized": "Char-\u003eProc_Char",
          "package": "processing",
          "partial": "Char",
          "signature": "Char-\u003eProc_Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromFloat",
          "package": "processing",
          "signature": "Float -\u003e Proc_Float",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#fromFloat",
          "type": "function"
        },
        "index": {
          "description": "Cast Float value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromFloat",
          "normalized": "Float-\u003eProc_Float",
          "package": "processing",
          "partial": "Float",
          "signature": "Float-\u003eProc_Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromInt",
          "package": "processing",
          "signature": "Int -\u003e Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#fromInt",
          "type": "function"
        },
        "index": {
          "description": "Cast an Int value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromInt",
          "normalized": "Int-\u003eProc_Int",
          "package": "processing",
          "partial": "Int",
          "signature": "Int-\u003eProc_Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromStText",
          "package": "processing",
          "signature": "Text -\u003e Proc_Text",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#fromStText",
          "type": "function"
        },
        "index": {
          "description": "Cast strict Text value",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "fromStText",
          "normalized": "Text-\u003eProc_Text",
          "package": "processing",
          "partial": "St Text",
          "signature": "Text-\u003eProc_Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:fromStText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional value. For example:\n\u003c/p\u003e\u003cpre\u003e if_ (x #\u003e 3) \"X is greater than 3.\"\n              \"X is less than or equal to 3.\"\n\u003c/pre\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "if_",
          "package": "processing",
          "signature": "Proc_Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Graphics-Web-Processing-Core-Types.html#if_",
          "type": "function"
        },
        "index": {
          "description": "Conditional value For example if is greater than is less than or equal to",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "if_",
          "normalized": "Proc_Bool-\u003ea-\u003ea-\u003ea",
          "package": "processing",
          "signature": "Proc_Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:if_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eProc_Int\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProc_Float\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "intToFloat",
          "package": "processing",
          "signature": "Proc_Int -\u003e Proc_Float",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#intToFloat",
          "type": "function"
        },
        "index": {
          "description": "Cast Proc Int to Proc Float",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "intToFloat",
          "normalized": "Proc_Int-\u003eProc_Float",
          "package": "processing",
          "partial": "To Float",
          "signature": "Proc_Int-\u003eProc_Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:intToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eProc_Float\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pfloor",
          "package": "processing",
          "signature": "Proc_Float -\u003e Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#pfloor",
          "type": "function"
        },
        "index": {
          "description": "Calculate the floor of Proc Float",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pfloor",
          "normalized": "Proc_Float-\u003eProc_Int",
          "package": "processing",
          "signature": "Proc_Float-\u003eProc_Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pfloor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pnot",
          "package": "processing",
          "signature": "Proc_Bool -\u003e Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#pnot",
          "type": "function"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pnot",
          "normalized": "Proc_Bool-\u003eProc_Bool",
          "package": "processing",
          "signature": "Proc_Bool-\u003eProc_Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_draw",
          "package": "processing",
          "signature": "Maybe (ProcCode Draw)",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_draw",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_keyPressed",
          "package": "processing",
          "signature": "Maybe (ProcCode KeyPressed)",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_keyPressed",
          "package": "processing",
          "partial": "Pressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_keyPressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_mouseClicked",
          "package": "processing",
          "signature": "Maybe (ProcCode MouseClicked)",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_mouseClicked",
          "package": "processing",
          "partial": "Clicked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_mouseClicked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_mouseReleased",
          "package": "processing",
          "signature": "Maybe (ProcCode MouseReleased)",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_mouseReleased",
          "package": "processing",
          "partial": "Released",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_mouseReleased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_preamble",
          "package": "processing",
          "signature": "ProcCode Preamble",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_preamble",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_preamble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_setup",
          "package": "processing",
          "signature": "ProcCode Setup",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ProcScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "proc_setup",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:proc_setup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound a number to the closest integer.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pround",
          "package": "processing",
          "signature": "Proc_Float -\u003e Proc_Int",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#pround",
          "type": "function"
        },
        "index": {
          "description": "Round number to the closest integer",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pround",
          "normalized": "Proc_Float-\u003eProc_Int",
          "package": "processing",
          "signature": "Proc_Float-\u003eProc_Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a value as a \u003ccode\u003e\u003ca\u003eProc_Text\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pshow",
          "package": "processing",
          "signature": "a -\u003e Proc_Text",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#pshow",
          "type": "method"
        },
        "index": {
          "description": "Render value as Proc Text",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "pshow",
          "normalized": "a-\u003eProc_Text",
          "package": "processing",
          "signature": "a-\u003eProc_Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:pshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a script using \u003ccode\u003e\u003ca\u003erenderScript\u003c/a\u003e\u003c/code\u003e and\n   write it directly in a file.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "renderFile",
          "package": "processing",
          "signature": "FilePath -\u003e ProcScript -\u003e IO ()",
          "source": "src/Graphics-Web-Processing-Core-Types.html#renderFile",
          "type": "function"
        },
        "index": {
          "description": "Render script using renderScript and write it directly in file",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "renderFile",
          "normalized": "FilePath-\u003eProcScript-\u003eIO()",
          "package": "processing",
          "partial": "File",
          "signature": "FilePath-\u003eProcScript-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:renderFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a script as a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "renderScript",
          "package": "processing",
          "signature": "ProcScript -\u003e Text",
          "source": "src/Graphics-Web-Processing-Core-Types.html#renderScript",
          "type": "function"
        },
        "index": {
          "description": "Render script as lazy Text",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "renderScript",
          "normalized": "ProcScript-\u003eText",
          "package": "processing",
          "partial": "Script",
          "signature": "ProcScript-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:renderScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "true",
          "package": "processing",
          "signature": "Proc_Bool",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#true",
          "type": "function"
        },
        "index": {
          "description": "Value of True",
          "hierarchy": "Graphics Web Processing Core Types",
          "module": "Graphics.Web.Processing.Core.Types",
          "name": "true",
          "package": "processing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Types.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule exporting \u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eArrayVar\u003c/a\u003e\u003c/code\u003e type and functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "Var",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Var.html",
          "type": "module"
        },
        "index": {
          "description": "Module exporting Var and ArrayVar type and functions",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "Var",
          "package": "processing",
          "partial": "Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of variables storing arrays.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "ArrayVar",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#ArrayVar",
          "type": "data"
        },
        "index": {
          "description": "Type of variables storing arrays",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "ArrayVar",
          "package": "processing",
          "partial": "Array Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#t:ArrayVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of variables.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "Var",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Type of variables",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "Var",
          "package": "processing",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the array.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "arraySize",
          "package": "processing",
          "signature": "ArrayVar a -\u003e Int",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#arraySize",
          "type": "function"
        },
        "index": {
          "description": "Size of the array",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "arraySize",
          "normalized": "ArrayVar a-\u003eInt",
          "package": "processing",
          "partial": "Size",
          "signature": "ArrayVar a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:arraySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a variable storing an array.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "arrayVarName",
          "package": "processing",
          "signature": "ArrayVar a -\u003e Text",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#arrayVarName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of variable storing an array",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "arrayVarName",
          "normalized": "ArrayVar a-\u003eText",
          "package": "processing",
          "partial": "Var Name",
          "signature": "ArrayVar a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:arrayVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array variable with a starting list of values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "newArrayVar",
          "package": "processing",
          "signature": "[a] -\u003e m Preamble (ArrayVar a)",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#newArrayVar",
          "type": "function"
        },
        "index": {
          "description": "Create new array variable with starting list of values",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "newArrayVar",
          "normalized": "[a]-\u003eb Preamble(ArrayVar a)",
          "package": "processing",
          "partial": "Array Var",
          "signature": "[a]-\u003em Preamble(ArrayVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:newArrayVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new variable with a starting value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "newVar",
          "package": "processing",
          "signature": "a -\u003e m Preamble (Var a)",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#newVar",
          "type": "function"
        },
        "index": {
          "description": "Create new variable with starting value",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "newVar",
          "normalized": "a-\u003eb Preamble(Var a)",
          "package": "processing",
          "partial": "Var",
          "signature": "a-\u003em Preamble(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a component of an array variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "readArrayVar",
          "package": "processing",
          "signature": "ArrayVar a -\u003e Proc_Int -\u003e m c a",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#readArrayVar",
          "type": "function"
        },
        "index": {
          "description": "Read component of an array variable",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "readArrayVar",
          "normalized": "ArrayVar a-\u003eProc_Int-\u003eb c a",
          "package": "processing",
          "partial": "Array Var",
          "signature": "ArrayVar a-\u003eProc_Int-\u003em c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:readArrayVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "readVar",
          "package": "processing",
          "signature": "Var a -\u003e m c a",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Read variable",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "readVar",
          "normalized": "Var a-\u003eb c a",
          "package": "processing",
          "partial": "Var",
          "signature": "Var a-\u003em c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "varName",
          "package": "processing",
          "signature": "Var a -\u003e Text",
          "source": "src/Graphics-Web-Processing-Core-Primal.html#varName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of variable",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "varName",
          "normalized": "Var a-\u003eText",
          "package": "processing",
          "partial": "Name",
          "signature": "Var a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:varName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a component of an array variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "writeArrayVar",
          "package": "processing",
          "signature": "ArrayVar a -\u003e Proc_Int -\u003e a -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#writeArrayVar",
          "type": "function"
        },
        "index": {
          "description": "Write component of an array variable",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "writeArrayVar",
          "normalized": "ArrayVar a-\u003eProc_Int-\u003ea-\u003eb c()",
          "package": "processing",
          "partial": "Array Var",
          "signature": "ArrayVar a-\u003eProc_Int-\u003ea-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:writeArrayVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a new value to a variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "writeVar",
          "package": "processing",
          "signature": "Var a -\u003e a -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Core-Monad.html#writeVar",
          "type": "function"
        },
        "index": {
          "description": "Write new value to variable",
          "hierarchy": "Graphics Web Processing Core Var",
          "module": "Graphics.Web.Processing.Core.Var",
          "name": "writeVar",
          "normalized": "Var a-\u003ea-\u003eb c()",
          "package": "processing",
          "partial": "Var",
          "signature": "Var a-\u003ea-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Core-Var.html#v:writeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOnce created, processing scripts can be included in HTML canvas.\n   To be able to reproduce the animation, you must import the \u003cem\u003eprocessing.js\u003c/em\u003e\n   library, downloadable from \u003ca\u003ehttp://processingjs.org/download\u003c/a\u003e (do not import\n   it from the original link, download it and use your own copy).\n   To import \u003cem\u003eprocessing.js\u003c/em\u003e, use a \u003ccode\u003escript\u003c/code\u003e tag.\n\u003c/p\u003e\u003cpre\u003e \u003cscript src=\"processing.js\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eimportScript\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote from the author: I didn't manage to run a processing animation locally,\u003c/em\u003e\n   \u003cem\u003eso you may have the same issue. Once I uploaded them to my server, they worked\u003c/em\u003e\n   \u003cem\u003ejust fine.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Html",
          "name": "Html",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Html.html",
          "type": "module"
        },
        "index": {
          "description": "Once created processing scripts can be included in HTML canvas To be able to reproduce the animation you must import the processing.js library downloadable from http processingjs.org download do not import it from the original link download it and use your own copy To import processing.js use script tag script src processing.js script See importScript Note from the author didn manage to run processing animation locally so you may have the same issue Once uploaded them to my server they worked just fine",
          "hierarchy": "Graphics Web Processing Html",
          "module": "Graphics.Web.Processing.Html",
          "name": "Html",
          "package": "processing",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault template for visualizing Processing scripts in HTML.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Html",
          "name": "defaultHtml",
          "package": "processing",
          "signature": "FilePath-\u003e FilePath-\u003e Text-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "Default template for visualizing Processing scripts in HTML",
          "hierarchy": "Graphics Web Processing Html",
          "module": "Graphics.Web.Processing.Html",
          "name": "defaultHtml",
          "normalized": "FilePath-\u003eFilePath-\u003eText-\u003eHtml",
          "package": "processing",
          "partial": "Html",
          "signature": "FilePath-\u003eFilePath-\u003eText-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:defaultHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the following HTML element:\n\u003c/p\u003e\u003cpre\u003e \u003cscript src=\"specified path\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eUse it to import the \u003cem\u003eprocessing.js\u003c/em\u003e script,\n   inside the \u003ccode\u003ehead\u003c/code\u003e tag.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Html",
          "name": "importScript",
          "package": "processing",
          "signature": "FilePath-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "Create the following HTML element script src specified path script Use it to import the processing.js script inside the head tag",
          "hierarchy": "Graphics Web Processing Html",
          "module": "Graphics.Web.Processing.Html",
          "name": "importScript",
          "normalized": "FilePath-\u003eHtml",
          "package": "processing",
          "partial": "Script",
          "signature": "FilePath-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:importScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a canvas element which contain a Processing animation.\n   The output is of the following form:\n\u003c/p\u003e\u003cpre\u003e \u003ccanvas data-processing-sources=\"specified path\"\u003e\u003c/canvas\u003e\n\u003c/pre\u003e",
          "module": "Graphics.Web.Processing.Html",
          "name": "procCanvas",
          "package": "processing",
          "signature": "FilePath-\u003e Html",
          "type": "function"
        },
        "index": {
          "description": "Create canvas element which contain Processing animation The output is of the following form canvas data-processing-sources specified path canvas",
          "hierarchy": "Graphics Web Processing Html",
          "module": "Graphics.Web.Processing.Html",
          "name": "procCanvas",
          "normalized": "FilePath-\u003eHtml",
          "package": "processing",
          "partial": "Canvas",
          "signature": "FilePath-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:procCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Processing script and the HTML default template for it\n   to files, using \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefaultHtml\u003c/a\u003e\u003c/code\u003e.\n   All the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es must be relative to where the HTML file is written.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Html",
          "name": "writeHtml",
          "package": "processing",
          "signature": "FilePath-\u003e FilePath-\u003e Text-\u003e FilePath-\u003e ProcScript-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write Processing script and the HTML default template for it to files using renderFile and defaultHtml All the FilePath must be relative to where the HTML file is written",
          "hierarchy": "Graphics Web Processing Html",
          "module": "Graphics.Web.Processing.Html",
          "name": "writeHtml",
          "normalized": "FilePath-\u003eFilePath-\u003eText-\u003eFilePath-\u003eProcScript-\u003eIO()",
          "package": "processing",
          "partial": "Html",
          "signature": "FilePath-\u003eFilePath-\u003eText-\u003eFilePath-\u003eProcScript-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Html.html#v:writeHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements variables which may contain values from\n   types different from the native types (\u003ccode\u003eProc_*\u003c/code\u003e types).\n\u003c/p\u003e\u003cp\u003eTo make a type available to custom variables, it needs to be\n   instantiated in the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class, which is subclass\n   of the \u003ccode\u003e\u003ca\u003eVarLength\u003c/a\u003e\u003c/code\u003e class. These instances are derivables using\n   the \u003ccode\u003eDeriveGeneric\u003c/code\u003e extension. Things you need are: enable the\n   \u003ccode\u003eDeriveGeneric\u003c/code\u003e language extension, import \u003ca\u003eGHC.Generics\u003c/a\u003e, derive\n   a \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instance of your type and then write the following\n   instances (where \u003ccode\u003eFoo\u003c/code\u003e is any type of interest):\n\u003c/p\u003e\u003cpre\u003e instance VarLength Foo\n instance CustomValue Foo\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003eFoo\u003c/code\u003e must be made from other types that are instances\n   of \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e. Also, note that instances of \u003ccode\u003e\u003ca\u003eVarLength\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e can \u003cem\u003enot\u003c/em\u003e be recursive or sum types.\n   An example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import Graphics.Web.Processing.Mid\n import Graphics.Web.Processing.Mid.CustomVar\n import GHC.Generics\n\n data Point = Point Proc_Float Proc_Float\n                deriving Generic\n\n instance VarLength Point\n instance CustomValue Point\n\u003c/pre\u003e\u003cp\u003eTypes instance of the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class can be contained by\n   a special type of variables, called \u003ccode\u003e\u003ca\u003eCustomVar\u003c/a\u003e\u003c/code\u003e (Custom Variable).\n   Functions for custom variables are equal to the function for regular\n   variables, except that they all end in \u003ccode\u003eC\u003c/code\u003e. For example, \u003ccode\u003e\u003ca\u003enewVar\u003c/a\u003e\u003c/code\u003e is\n   called \u003ccode\u003e\u003ca\u003enewVarC\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e\u003cp\u003eThere are also arrays which may contain custom values.\n   See \u003ccode\u003e\u003ca\u003eCustomArrayVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe dependency of this module in several language extensions was\n   the reason to make it separate from the rest of the \u003cem\u003emid\u003c/em\u003e interface\n   where it belongs to. Somehow, it forces the user to use \u003ccode\u003eDeriveGeneric\u003c/code\u003e\n   and import \u003ca\u003eGHC.Generics\u003c/a\u003e to do something useful with it (more than use\n   custom variables for tuples).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomVar",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements variables which may contain values from types different from the native types Proc types To make type available to custom variables it needs to be instantiated in the CustomValue class which is subclass of the VarLength class These instances are derivables using the DeriveGeneric extension Things you need are enable the DeriveGeneric language extension import GHC.Generics derive Generic instance of your type and then write the following instances where Foo is any type of interest instance VarLength Foo instance CustomValue Foo Note that Foo must be made from other types that are instances of CustomValue Also note that instances of VarLength or CustomValue can not be recursive or sum types An example LANGUAGE DeriveGeneric import Graphics.Web.Processing.Mid import Graphics.Web.Processing.Mid.CustomVar import GHC.Generics data Point Point Proc Float Proc Float deriving Generic instance VarLength Point instance CustomValue Point Types instance of the CustomValue class can be contained by special type of variables called CustomVar Custom Variable Functions for custom variables are equal to the function for regular variables except that they all end in For example newVar is called newVarC for custom variables There are also arrays which may contain custom values See CustomArrayVar The dependency of this module in several language extensions was the reason to make it separate from the rest of the mid interface where it belongs to Somehow it forces the user to use DeriveGeneric and import GHC.Generics to do something useful with it more than use custom variables for tuples",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomVar",
          "package": "processing",
          "partial": "Custom Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray variable of custom values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomArrayVar",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomArrayVar",
          "type": "data"
        },
        "index": {
          "description": "Array variable of custom values",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomArrayVar",
          "package": "processing",
          "partial": "Custom Array Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomArrayVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass of custom values, which can be stored in custom variables (\u003ccode\u003e\u003ca\u003eCustomVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomValue",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomValue",
          "type": "class"
        },
        "index": {
          "description": "Typeclass of custom values which can be stored in custom variables CustomVar",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomValue",
          "package": "processing",
          "partial": "Custom Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable with custom values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomVar",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#CustomVar",
          "type": "data"
        },
        "index": {
          "description": "Variable with custom values",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "CustomVar",
          "package": "processing",
          "partial": "Custom Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:CustomVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass of values that can be stored in several\n   native variables (\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "VarLength",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#VarLength",
          "type": "class"
        },
        "index": {
          "description": "Typeclass of values that can be stored in several native variables Var",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "VarLength",
          "package": "processing",
          "partial": "Var Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#t:VarLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the custom array.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "customArraySize",
          "package": "processing",
          "signature": "CustomArrayVar a -\u003e Int",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#customArraySize",
          "type": "function"
        },
        "index": {
          "description": "Size of the custom array",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "customArraySize",
          "normalized": "CustomArrayVar a-\u003eInt",
          "package": "processing",
          "partial": "Array Size",
          "signature": "CustomArrayVar a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:customArraySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eif_\u003c/a\u003e\u003c/code\u003e for custom values.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "ifC",
          "package": "processing",
          "signature": "Proc_Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#ifC",
          "type": "method"
        },
        "index": {
          "description": "Version of if for custom values",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "ifC",
          "normalized": "Proc_Bool-\u003ea-\u003ea-\u003ea",
          "package": "processing",
          "signature": "Proc_Bool-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:ifC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003enewArrayVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "newArrayVarC",
          "package": "processing",
          "signature": "[a] -\u003e m Preamble (CustomArrayVar a)",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#newArrayVarC",
          "type": "method"
        },
        "index": {
          "description": "Version of newArrayVar for custom variables",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "newArrayVarC",
          "normalized": "[a]-\u003eb Preamble(CustomArrayVar a)",
          "package": "processing",
          "partial": "Array Var",
          "signature": "[a]-\u003em Preamble(CustomArrayVar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:newArrayVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003enewVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "newVarC",
          "package": "processing",
          "signature": "a -\u003e m Preamble (CustomVar a)",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#newVarC",
          "type": "method"
        },
        "index": {
          "description": "Version of newVar for custom variables",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "newVarC",
          "normalized": "a-\u003eb Preamble(CustomVar a)",
          "package": "processing",
          "partial": "Var",
          "signature": "a-\u003em Preamble(CustomVar a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:newVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a component of a custom array variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "readArrayVarC",
          "package": "processing",
          "signature": "CustomArrayVar a -\u003e Proc_Int -\u003e m c a",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#readArrayVarC",
          "type": "function"
        },
        "index": {
          "description": "Read component of custom array variable",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "readArrayVarC",
          "normalized": "CustomArrayVar a-\u003eProc_Int-\u003eb c a",
          "package": "processing",
          "partial": "Array Var",
          "signature": "CustomArrayVar a-\u003eProc_Int-\u003em c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:readArrayVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ereadVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "readVarC",
          "package": "processing",
          "signature": "CustomVar a -\u003e m c a",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#readVarC",
          "type": "method"
        },
        "index": {
          "description": "Version of readVar for custom variables",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "readVarC",
          "normalized": "CustomVar a-\u003eb c a",
          "package": "processing",
          "partial": "Var",
          "signature": "CustomVar a-\u003em c a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:readVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate how many native variables are needed\n   to store a value.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "varLength",
          "package": "processing",
          "signature": "a -\u003e Int",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#varLength",
          "type": "method"
        },
        "index": {
          "description": "Calculate how many native variables are needed to store value",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "varLength",
          "normalized": "a-\u003eInt",
          "package": "processing",
          "partial": "Length",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:varLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a component of a custom array variable.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "writeArrayVarC",
          "package": "processing",
          "signature": "CustomArrayVar a -\u003e Proc_Int -\u003e a -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#writeArrayVarC",
          "type": "function"
        },
        "index": {
          "description": "Write component of custom array variable",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "writeArrayVarC",
          "normalized": "CustomArrayVar a-\u003eProc_Int-\u003ea-\u003eb c()",
          "package": "processing",
          "partial": "Array Var",
          "signature": "CustomArrayVar a-\u003eProc_Int-\u003ea-\u003em c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:writeArrayVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003ewriteVar\u003c/a\u003e\u003c/code\u003e for custom variables.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "writeVarC",
          "package": "processing",
          "signature": "CustomVar a -\u003e a -\u003e m c ()",
          "source": "src/Graphics-Web-Processing-Mid-CustomVar.html#writeVarC",
          "type": "method"
        },
        "index": {
          "description": "Version of writeVar for custom variables",
          "hierarchy": "Graphics Web Processing Mid CustomVar",
          "module": "Graphics.Web.Processing.Mid.CustomVar",
          "name": "writeVarC",
          "normalized": "CustomVar a-\u003ea-\u003eb c()",
          "package": "processing",
          "partial": "Var",
          "signature": "CustomVar a-\u003ea-\u003em c()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid-CustomVar.html#v:writeVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProcessing scripting, \u003cem\u003emid\u003c/em\u003e interface.\n   Unlike the \u003cem\u003ebasic\u003c/em\u003e interface (see \u003ca\u003eGraphics.Web.Processing.Basic\u003c/a\u003e)\n   the script is more guided by the types. However, the output is\n   less predictable, since it does some tricks in order to obtain\n   semantics that are more coherent with Haskell. The difference is\n   small, but let's say that this module has more freedom writing\n   the output code. It also applies code optimizations, so the output\n   code may look different (see \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e and\n   \u003ca\u003eGraphics.Web.Processing.Optimize\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHow to work with it?\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eEverything is done within\n   the \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e monad, a state monad that controls the entire script,\n   including the preamble, draw loop, setup, etc.\n   The interaction with the different parts of the script is done\n   via \u003cem\u003eevents\u003c/em\u003e (see \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e). For example, the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e event controls the draw\n   loop.\n\u003c/p\u003e\u003cpre\u003e mouse :: ScriptM Preamble ()\n mouse = do\n   on Setup $ do\n      size screenWidth screenHeight\n      fill $ Color 255 255 255 255\n   on Draw  $ do\n      background $ Color 0 0 0 255\n      p \u003c- getMousePoint\n      circle p 10\n\u003c/pre\u003e\u003cp\u003eNote that to make it work, the context of the script \u003cem\u003emust\u003c/em\u003e be\n   \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInteraction with variables is done via the interface provided by\n   the \u003ca\u003eGraphics.Web.Processing.Core.Var\u003c/a\u003e module.\n   This module defines functions to interact with variables in both the\n   \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e monad and the \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e monad.\n   To store custom types in variables, see the\n   \u003ca\u003eGraphics.Web.Processing.Mid.CustomVar\u003c/a\u003e module (you have to import\n   this module separately).\n\u003c/p\u003e\u003cp\u003eOnce your script is complete, use \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e to get the result\n   code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "Mid",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid.html",
          "type": "module"
        },
        "index": {
          "description": "Processing scripting mid interface Unlike the basic interface see Graphics.Web.Processing.Basic the script is more guided by the types However the output is less predictable since it does some tricks in order to obtain semantics that are more coherent with Haskell The difference is small but let say that this module has more freedom writing the output code It also applies code optimizations so the output code may look different see execScriptM and Graphics.Web.Processing.Optimize How to work with it Everything is done within the ScriptM monad state monad that controls the entire script including the preamble draw loop setup etc The interaction with the different parts of the script is done via events see EventM For example the Draw event controls the draw loop mouse ScriptM Preamble mouse do on Setup do size screenWidth screenHeight fill Color on Draw do background Color getMousePoint circle Note that to make it work the context of the script must be Preamble Interaction with variables is done via the interface provided by the Graphics.Web.Processing.Core.Var module This module defines functions to interact with variables in both the ScriptM monad and the EventM monad To store custom types in variables see the Graphics.Web.Processing.Mid.CustomVar module you have to import this module separately Once your script is complete use execScriptM to get the result code",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "Mid",
          "package": "processing",
          "partial": "Mid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext of an event. The context determines which functions can be used.\n   \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e is not an instance of \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e to avoid using \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e as\n   an event (see \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "Context",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid.html#Context",
          "type": "class"
        },
        "index": {
          "description": "Context of an event The context determines which functions can be used Preamble is not an instance of Context to avoid using Preamble as an event see on",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "Context",
          "package": "processing",
          "partial": "Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad of events. Use \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e to insert an event in a script (\u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e).\n   To write the event code, use the functions in\n   \u003ca\u003eGraphics.Web.Processing.Core.Interface\u003c/a\u003e, since \u003ccode\u003e\u003ca\u003eEventM\u003c/a\u003e\u003c/code\u003e is an instance\n   of \u003ccode\u003e\u003ca\u003eProcMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "EventM",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid.html#EventM",
          "type": "data"
        },
        "index": {
          "description": "Monad of events Use on to insert an event in script ScriptM To write the event code use the functions in Graphics.Web.Processing.Core.Interface since EventM is an instance of ProcMonad",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "EventM",
          "package": "processing",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:EventM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScripter monad. This monad is where Processing code is written.\n   Because of some implementation details, \u003ccode\u003e\u003ca\u003eScriptM\u003c/a\u003e\u003c/code\u003e has a context \u003ccode\u003ec\u003c/code\u003e.\n   However, this context is \u003cem\u003ealways\u003c/em\u003e \u003ccode\u003e\u003ca\u003ePreamble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "ScriptM",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Mid.html#ScriptM",
          "type": "data"
        },
        "index": {
          "description": "Scripter monad This monad is where Processing code is written Because of some implementation details ScriptM has context However this context is always Preamble",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "ScriptM",
          "package": "processing",
          "partial": "Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#t:ScriptM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the scripter monad to get the full Processing script.\n   Use \u003ccode\u003e\u003ca\u003erenderScript\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e to render it.\n\u003c/p\u003e\u003cp\u003eAfter generating the script, the output code is optimized\n   using \u003ccode\u003e\u003ca\u003eoptimizeBySubstitution\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "execScriptM",
          "package": "processing",
          "signature": "ScriptM Preamble () -\u003e ProcScript",
          "source": "src/Graphics-Web-Processing-Mid.html#execScriptM",
          "type": "function"
        },
        "index": {
          "description": "Execute the scripter monad to get the full Processing script Use renderScript or renderFile to render it After generating the script the output code is optimized using optimizeBySubstitution",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "execScriptM",
          "normalized": "ScriptM Preamble()-\u003eProcScript",
          "package": "processing",
          "partial": "Script",
          "signature": "ScriptM Preamble()-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:execScriptM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexecScriptM\u003c/a\u003e\u003c/code\u003e, but skips optimizations.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "execScriptMFast",
          "package": "processing",
          "signature": "ScriptM Preamble () -\u003e ProcScript",
          "source": "src/Graphics-Web-Processing-Mid.html#execScriptMFast",
          "type": "function"
        },
        "index": {
          "description": "Like execScriptM but skips optimizations",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "execScriptMFast",
          "normalized": "ScriptM Preamble()-\u003eProcScript",
          "package": "processing",
          "partial": "Script MFast",
          "signature": "ScriptM Preamble()-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:execScriptMFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an event. Different events are specified by the instances of the\n   \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eFor example, the following code sets the \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e pattern in the setup event (the event\n   that is called once at the beginning of the execution).\n\u003c/p\u003e\u003cpre\u003e on Setup $ fill $ Color 0 0 0 255\n\u003c/pre\u003e",
          "module": "Graphics.Web.Processing.Mid",
          "name": "on",
          "package": "processing",
          "signature": "c -\u003e EventM c () -\u003e ScriptM Preamble ()",
          "source": "src/Graphics-Web-Processing-Mid.html#on",
          "type": "function"
        },
        "index": {
          "description": "Set an event Different events are specified by the instances of the Context class For example the following code sets the fill pattern in the setup event the event that is called once at the beginning of the execution on Setup fill Color",
          "hierarchy": "Graphics Web Processing Mid",
          "module": "Graphics.Web.Processing.Mid",
          "name": "on",
          "normalized": "a-\u003eEventM a()-\u003eScriptM Preamble()",
          "package": "processing",
          "signature": "c-\u003eEventM c()-\u003eScriptM Preamble()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Mid.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCode optimization module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "Optimize",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Optimize.html",
          "type": "module"
        },
        "index": {
          "description": "Code optimization module",
          "hierarchy": "Graphics Web Processing Optimize",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "Optimize",
          "package": "processing",
          "partial": "Optimize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimization by substitution. It looks for commonly repeated operations and\n   create variables for them so they are only calculated once.\n\u003c/p\u003e\u003cp\u003eThis optimization is applied automatically when using \u003ccode\u003eexecScriptM\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLook at the generated to code to see which substitutions have been made.\n   They are delimited by comments, with title \u003cem\u003eSubstitution Optimization settings\u003c/em\u003e.\n   If this is not present, no substitution has been made.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "optimizeBySubstitution",
          "package": "processing",
          "signature": "ProcScript -\u003e ProcScript",
          "source": "src/Graphics-Web-Processing-Optimize.html#optimizeBySubstitution",
          "type": "function"
        },
        "index": {
          "description": "Optimization by substitution It looks for commonly repeated operations and create variables for them so they are only calculated once This optimization is applied automatically when using execScriptM Look at the generated to code to see which substitutions have been made They are delimited by comments with title Substitution Optimization settings If this is not present no substitution has been made",
          "hierarchy": "Graphics Web Processing Optimize",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "optimizeBySubstitution",
          "normalized": "ProcScript-\u003eProcScript",
          "package": "processing",
          "partial": "By Substitution",
          "signature": "ProcScript-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#v:optimizeBySubstitution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimizations are projections. In particular:\n\u003c/p\u003e\u003cpre\u003e let f = optimizeBySubstitution\n in  f x == f (f x)\n\u003c/pre\u003e\u003cp\u003eThis function checks that this equality holds for a given \u003ccode\u003ex\u003c/code\u003e.\n   Apply it to your own script to check that the property is true.\n   Tests has been applied to randomly generated scripts, but for\n   them, \u003ccode\u003ef\u003c/code\u003e &#8776; \u003ccode\u003eid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "prop_optimizeBySubstitution_projection",
          "package": "processing",
          "signature": "ProcScript -\u003e Bool",
          "source": "src/Graphics-Web-Processing-Optimize.html#prop_optimizeBySubstitution_projection",
          "type": "function"
        },
        "index": {
          "description": "Optimizations are projections In particular let optimizeBySubstitution in This function checks that this equality holds for given Apply it to your own script to check that the property is true Tests has been applied to randomly generated scripts but for them id",
          "hierarchy": "Graphics Web Processing Optimize",
          "module": "Graphics.Web.Processing.Optimize",
          "name": "prop_optimizeBySubstitution_projection",
          "normalized": "ProcScript-\u003eBool",
          "package": "processing",
          "partial": "By Substitution",
          "signature": "ProcScript-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Optimize.html#v:prop_optimizeBySubstitution_projection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e models figures in the plane.\n   Then, figures are displayed or animated using\n   a Processing script.\n\u003c/p\u003e\u003cp\u003eFor example, this expression represents a circle\n   of radius 10 centered at the origin:\n\u003c/p\u003e\u003cpre\u003e Circle (0,0) 10\n\u003c/pre\u003e\u003cp\u003eThe origin will be represented at the center of\n   the screen. As opposed to the other modules,\n   \u003cem\u003ey\u003c/em\u003e-coordinates increase to the top, while \u003cem\u003ex\u003c/em\u003e-coordinates\n   still increase to the right.\n\u003c/p\u003e\u003cp\u003eThis is a red rectangle with top-left corner at the origin,\n   10 points height and 10 points width:\n\u003c/p\u003e\u003cpre\u003e FillColor (Color 255 0 0 255) $ Rectangle (0,0) 10 10\n\u003c/pre\u003e\u003cp\u003eTo display several figures together, use the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cpre\u003e Circle (0,0) 10 \u003c\u003e Circle (0,20) 10\n\u003c/pre\u003e\u003cp\u003eIf you just want to display this figure in the target canvas,\n   use \u003ccode\u003e\u003ca\u003edisplayFigure\u003c/a\u003e\u003c/code\u003e. If you want to animate it, use \u003ccode\u003e\u003ca\u003eanimateFigure\u003c/a\u003e\u003c/code\u003e.\n   Animations depend on the number of frames since the beginning of\n   the execution, instead of in the time spent.\n\u003c/p\u003e\u003cp\u003eOnce you have created a processing script (a value of type\n   \u003ccode\u003e\u003ca\u003eProcScript\u003c/a\u003e\u003c/code\u003e), use \u003ccode\u003e\u003ca\u003erenderFile\u003c/a\u003e\u003c/code\u003e to write it to a file. See\n   also the \u003ca\u003eGraphics.Web.Processing.Html\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe default filling color and line color are white and black\n   respectively. Use \u003ccode\u003e\u003ca\u003eFillColor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLineColor\u003c/a\u003e\u003c/code\u003e to change these\n   colors. \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003es are in RGBA format, meaning that they may be\n   transparent (with an alpha value of 0), opaque (with an alpha\n   value of 255) or something in between. Use a fully transparent\n   color to indicate that a Figure should not be filled.\n\u003c/p\u003e\u003cp\u003eYou can apply transformations like translation, rotation and\n   scaling. If \u003ccode\u003ep\u003c/code\u003e is a point and \u003ccode\u003ef\u003c/code\u003e a figure, \u003ccode\u003eTranslate p f\u003c/code\u003e\n   will draw \u003ccode\u003ef\u003c/code\u003e with \u003ccode\u003ep\u003c/code\u003e as the origin of coordinates. Rotations\n   and scalings are always done in respect to the origin, but note\n   that you can modify where the origin is using \u003ccode\u003e\u003ca\u003eTranslate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Simple",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Monoid models figures in the plane Then figures are displayed or animated using Processing script For example this expression represents circle of radius centered at the origin Circle The origin will be represented at the center of the screen As opposed to the other modules coordinates increase to the top while coordinates still increase to the right This is red rectangle with top-left corner at the origin points height and points width FillColor Color Rectangle To display several figures together use the Monoid instance Circle Circle If you just want to display this figure in the target canvas use displayFigure If you want to animate it use animateFigure Animations depend on the number of frames since the beginning of the execution instead of in the time spent Once you have created processing script value of type ProcScript use renderFile to write it to file See also the Graphics.Web.Processing.Html module The default filling color and line color are white and black respectively Use FillColor and LineColor to change these colors Color are in RGBA format meaning that they may be transparent with an alpha value of opaque with an alpha value of or something in between Use fully transparent color to indicate that Figure should not be filled You can apply transformations like translation rotation and scaling If is point and figure Translate will draw with as the origin of coordinates Rotations and scalings are always done in respect to the origin but note that you can modify where the origin is using Translate",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Simple",
          "package": "processing",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow keys.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "ArrowKey",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#ArrowKey",
          "type": "data"
        },
        "index": {
          "description": "Arrow keys",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "ArrowKey",
          "package": "processing",
          "partial": "Arrow Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:ArrowKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRGBA colors. Values must be between\n   0 and 255, including in the alpha channel.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Color",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Color",
          "type": "data"
        },
        "index": {
          "description": "RGBA colors Values must be between and including in the alpha channel",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Color",
          "package": "processing",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monoid of plane figures.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Figure",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "data"
        },
        "index": {
          "description": "The monoid of plane figures",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Figure",
          "package": "processing",
          "partial": "Figure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyboard keys recognized by Processing.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Key",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Keyboard keys recognized by Processing",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Key",
          "package": "processing",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey modifiers.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "KeyModifier",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#KeyModifier",
          "type": "data"
        },
        "index": {
          "description": "Key modifiers",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "KeyModifier",
          "package": "processing",
          "partial": "Key Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:KeyModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path is just a list of points.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Path",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Simple.html#Path",
          "type": "type"
        },
        "index": {
          "description": "path is just list of points",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Path",
          "package": "processing",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point as a pair of floating point numbers.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Proc_Point",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#Proc_Point",
          "type": "type"
        },
        "index": {
          "description": "point as pair of floating point numbers",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Proc_Point",
          "package": "processing",
          "partial": "Proc Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:Proc_Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial keys.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "SpecialKey",
          "package": "processing",
          "source": "src/Graphics-Web-Processing-Core-Interface.html#SpecialKey",
          "type": "data"
        },
        "index": {
          "description": "Special keys",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "SpecialKey",
          "package": "processing",
          "partial": "Special Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#t:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArc. The arc is drawn following the line of\n   an ellipse between two angles.\n   The first argument is the center of the ellipse.\n   The next two arguments are the width and height of\n   the ellipse.\n   The last two arguments are the initial and end\n   angles of the arc.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Arc",
          "package": "processing",
          "signature": "Arc Proc_Point Proc_Float Proc_Float Proc_Float Proc_Float",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Arc The arc is drawn following the line of an ellipse between two angles The first argument is the center of the ellipse The next two arguments are the width and height of the ellipse The last two arguments are the initial and end angles of the arc",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Arc",
          "package": "processing",
          "partial": "Arc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBezier curve. First and last arguments are the initial\n   and end points of the curve. The other points are\n   control points.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Bezier",
          "package": "processing",
          "signature": "Bezier Proc_Point Proc_Point Proc_Point Proc_Point",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Bezier curve First and last arguments are the initial and end points of the curve The other points are control points",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Bezier",
          "package": "processing",
          "partial": "Bezier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Bezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircle centered at the given point and with\n   the specified radius.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Circle",
          "package": "processing",
          "signature": "Circle Proc_Point Proc_Float",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Circle centered at the given point and with the specified radius",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Circle",
          "package": "processing",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEllipse centered at the given point,\n   with width and height also specified.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Ellipse",
          "package": "processing",
          "signature": "Ellipse Proc_Point Proc_Float Proc_Float",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Ellipse centered at the given point with width and height also specified",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Ellipse",
          "package": "processing",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of figures.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Figures",
          "package": "processing",
          "signature": "Figures [Figure]",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "List of figures",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Figures",
          "normalized": "Figures[Figure]",
          "package": "processing",
          "partial": "Figures",
          "signature": "Figures[Figure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Figures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the filling color of a figure.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "FillColor",
          "package": "processing",
          "signature": "FillColor Color Figure",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Set the filling color of figure",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "FillColor",
          "package": "processing",
          "partial": "Fill Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:FillColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine joining a list of points.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Line",
          "package": "processing",
          "signature": "Line Path",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Line joining list of points",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Line",
          "package": "processing",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line color of a figure.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "LineColor",
          "package": "processing",
          "signature": "LineColor Color Figure",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Set the line color of figure",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "LineColor",
          "package": "processing",
          "partial": "Line Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:LineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolygon given a list of vertex.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Polygon",
          "package": "processing",
          "signature": "Polygon Path",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Polygon given list of vertex",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Polygon",
          "package": "processing",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle such that the top-left corner is\n   at the specified point, and its width and\n   height are specified by the other two arguments.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Rectangle",
          "package": "processing",
          "signature": "Rectangle Proc_Point Proc_Float Proc_Float",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Rectangle such that the top-left corner is at the specified point and its width and height are specified by the other two arguments",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Rectangle",
          "package": "processing",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a figure by the given angle in radians.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Rotate",
          "package": "processing",
          "signature": "Rotate Proc_Float Figure",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Rotate figure by the given angle in radians",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Rotate",
          "package": "processing",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a figure by the given x and y factors.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Scale",
          "package": "processing",
          "signature": "Scale Proc_Float Proc_Float Figure",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Scale figure by the given and factors",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Scale",
          "package": "processing",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Text",
          "package": "processing",
          "signature": "Text Proc_Point Proc_Text",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Text",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Text",
          "package": "processing",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a figure in the direction of a vector.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Translate",
          "package": "processing",
          "signature": "Translate Proc_Point Figure",
          "source": "src/Graphics-Web-Processing-Simple.html#Figure",
          "type": "function"
        },
        "index": {
          "description": "Translate figure in the direction of vector",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "Translate",
          "package": "processing",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Processing animation from a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e-valued function.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "animateFigure",
          "package": "processing",
          "signature": "Maybe Int-\u003e Maybe Int-\u003e Int-\u003e Color-\u003e (Proc_Int -\u003e Figure)-\u003e ProcScript",
          "type": "function"
        },
        "index": {
          "description": "Create Processing animation from Figure valued function",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "animateFigure",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003eColor-\u003e(Proc_Int-\u003eFigure)-\u003eProcScript",
          "package": "processing",
          "partial": "Figure",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003eColor-\u003e(Proc_Int-\u003eFigure)-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:animateFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a figure using a Processing script.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "displayFigure",
          "package": "processing",
          "signature": "Maybe Int-\u003e Maybe Int-\u003e Color-\u003e Figure-\u003e ProcScript",
          "type": "function"
        },
        "index": {
          "description": "Display figure using Processing script",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "displayFigure",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eColor-\u003eFigure-\u003eProcScript",
          "package": "processing",
          "partial": "Figure",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eColor-\u003eFigure-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:displayFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFramework to create interactive scripts.\n\u003c/p\u003e\u003cp\u003eNote that is required for the state to be an instance of \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e.\n   More info on how to instantiate a type in the \u003ccode\u003e\u003ca\u003eCustomValue\u003c/a\u003e\u003c/code\u003e class in the\n   \u003ca\u003eGraphics.Web.Processing.Mid.CustomVar\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Graphics.Web.Processing.Simple",
          "name": "interactiveFigure",
          "package": "processing",
          "signature": "Maybe Int-\u003e Maybe Int-\u003e Int-\u003e w-\u003e (w -\u003e Figure)-\u003e (w -\u003e Color)-\u003e (Proc_Int -\u003e w -\u003e w)-\u003e (Proc_Point -\u003e w -\u003e w)-\u003e [(Key, w -\u003e w)]-\u003e ProcScript",
          "type": "function"
        },
        "index": {
          "description": "Framework to create interactive scripts Note that is required for the state to be an instance of CustomValue More info on how to instantiate type in the CustomValue class in the Graphics.Web.Processing.Mid.CustomVar module",
          "hierarchy": "Graphics Web Processing Simple",
          "module": "Graphics.Web.Processing.Simple",
          "name": "interactiveFigure",
          "normalized": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003ea-\u003e(a-\u003eFigure)-\u003e(a-\u003eColor)-\u003e(Proc_Int-\u003ea-\u003ea)-\u003e(Proc_Point-\u003ea-\u003ea)-\u003e[(Key,a-\u003ea)]-\u003eProcScript",
          "package": "processing",
          "partial": "Figure",
          "signature": "Maybe Int-\u003eMaybe Int-\u003eInt-\u003ew-\u003e(w-\u003eFigure)-\u003e(w-\u003eColor)-\u003e(Proc_Int-\u003ew-\u003ew)-\u003e(Proc_Point-\u003ew-\u003ew)-\u003e[(Key,w-\u003ew)]-\u003eProcScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing-Simple.html#v:interactiveFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the \u003cem\u003emid\u003c/em\u003e interface\n   to \u003cem\u003eprocessing\u003c/em\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Web.Processing",
          "name": "Processing",
          "package": "processing",
          "source": "src/Graphics-Web-Processing.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports the mid interface to processing",
          "hierarchy": "Graphics Web Processing",
          "module": "Graphics.Web.Processing",
          "name": "Processing",
          "package": "processing",
          "partial": "Processing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/processing/docs/Graphics-Web-Processing.html#"
      }
    }
  ]
]