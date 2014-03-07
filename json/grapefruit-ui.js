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
        "word": "grapefruit-ui"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module declares a subclass of \u003ccode\u003e\u003ca\u003eUIBackend\u003c/a\u003e\u003c/code\u003e with methods that every reasonable UI backend\n    should implement.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Basic",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "This module declares subclass of UIBackend with methods that every reasonable UI backend should implement",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Basic",
          "package": "grapefruit-ui",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subclass of \u003ccode\u003e\u003ca\u003eUIBackend\u003c/a\u003e\u003c/code\u003e which declares basic bricks and boxes.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "BasicUIBackend",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#BasicUIBackend",
          "type": "class"
        },
        "index": {
          "description": "subclass of UIBackend which declares basic bricks and boxes",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "BasicUIBackend",
          "package": "grapefruit-ui",
          "partial": "Basic UIBackend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:BasicUIBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA caption of a widget with an optional hotkey marker.\n\u003c/p\u003e\u003cp\u003eCurrently, this type is not used.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Caption",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Caption",
          "type": "data"
        },
        "index": {
          "description": "caption of widget with an optional hotkey marker Currently this type is not used",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Caption",
          "package": "grapefruit-ui",
          "partial": "Caption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Caption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            output\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` ()\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            a &#8220;window was closed&#8221; event\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Closure",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Closure",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind output type DSignal Of meaning window was closed event",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Closure",
          "package": "grapefruit-ui",
          "partial": "Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            output\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` \u003cem\u003eval\u003c/em\u003e\u003c/code\u003e for some type \u003ccode\u003e\u003cem\u003eval\u003c/em\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            the content of an editor widget\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Content",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Content",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind output type SSignal Of val for some type val meaning the content of an editor widget",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Content",
          "package": "grapefruit-ui",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn orientation of widgets in a box.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Orientation",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Orientation",
          "type": "data"
        },
        "index": {
          "description": "An orientation of widgets in box",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Orientation",
          "package": "grapefruit-ui",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            output\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` ()\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            a stream of button push events\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Push",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Push",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind output type DSignal Of meaning stream of button push events",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Push",
          "package": "grapefruit-ui",
          "partial": "Push",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            input (required)\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` String\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            the caption of a widget\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Text",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Text",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind input required type SSignal Of String meaning the caption of widget",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Text",
          "package": "grapefruit-ui",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            input (required)\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` String\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            the title of a window\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Title",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Title",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind input required type SSignal Of String meaning the title of window",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Title",
          "package": "grapefruit-ui",
          "partial": "Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Closure",
          "package": "grapefruit-ui",
          "signature": "Closure",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Closure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Closure",
          "package": "grapefruit-ui",
          "partial": "Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea caption without a hotkey\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "ColdCaption",
          "package": "grapefruit-ui",
          "signature": "ColdCaption String",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Caption",
          "type": "function"
        },
        "index": {
          "description": "caption without hotkey",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "ColdCaption",
          "package": "grapefruit-ui",
          "partial": "Cold Caption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:ColdCaption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Content",
          "package": "grapefruit-ui",
          "signature": "Content",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Content",
          "package": "grapefruit-ui",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Horizontal",
          "package": "grapefruit-ui",
          "signature": "Horizontal",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Horizontal",
          "package": "grapefruit-ui",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Horizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea caption consisting of a prefix string, a hotkey and a suffix string\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "HotCaption",
          "package": "grapefruit-ui",
          "signature": "HotCaption String Char String",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Caption",
          "type": "function"
        },
        "index": {
          "description": "caption consisting of prefix string hotkey and suffix string",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "HotCaption",
          "package": "grapefruit-ui",
          "partial": "Hot Caption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:HotCaption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Push",
          "package": "grapefruit-ui",
          "signature": "Push",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Push",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Push",
          "package": "grapefruit-ui",
          "partial": "Push",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Text",
          "package": "grapefruit-ui",
          "signature": "Text",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Text",
          "package": "grapefruit-ui",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Title",
          "package": "grapefruit-ui",
          "signature": "Title",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Title",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Title",
          "package": "grapefruit-ui",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Vertical",
          "package": "grapefruit-ui",
          "signature": "Vertical",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "Vertical",
          "package": "grapefruit-ui",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget which aggregates and arbitrary number of other widgets.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "box",
          "package": "grapefruit-ui",
          "signature": "Orientation -\u003e Box UICircuit Widget Widget uiBackend X X",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#box",
          "type": "method"
        },
        "index": {
          "description": "widget which aggregates and arbitrary number of other widgets",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "box",
          "normalized": "Orientation-\u003eBox UICircuit Widget Widget a X X",
          "package": "grapefruit-ui",
          "signature": "Orientation-\u003eBox UICircuit Widget Widget uiBackend X X",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget showing one line of text.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "label",
          "package": "grapefruit-ui",
          "signature": "(SSignal `Of` String))) X",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#label",
          "type": "method"
        },
        "index": {
          "description": "widget showing one line of text",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "label",
          "package": "grapefruit-ui",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor for a single line of text.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "lineEditor",
          "package": "grapefruit-ui",
          "signature": "(SSignal `Of` String)))",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#lineEditor",
          "type": "method"
        },
        "index": {
          "description": "An editor for single line of text",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "lineEditor",
          "package": "grapefruit-ui",
          "partial": "Editor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:lineEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA push button.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "pushButton",
          "package": "grapefruit-ui",
          "signature": "(DSignal `Of` ())))",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#pushButton",
          "type": "method"
        },
        "index": {
          "description": "push button",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "pushButton",
          "normalized": "(DSignal Of())))",
          "package": "grapefruit-ui",
          "partial": "Button",
          "signature": "(DSignal Of())))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:pushButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordinary window.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "window",
          "package": "grapefruit-ui",
          "signature": "(DSignal `Of` ())))",
          "source": "src/Graphics-UI-Grapefruit-Backend-Basic.html#window",
          "type": "method"
        },
        "index": {
          "description": "An ordinary window",
          "hierarchy": "Graphics UI Grapefruit Backend Basic",
          "module": "Graphics.UI.Grapefruit.Backend.Basic",
          "name": "window",
          "normalized": "(DSignal Of())))",
          "package": "grapefruit-ui",
          "signature": "(DSignal Of())))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Basic.html#v:window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Container",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Container",
          "package": "grapefruit-ui",
          "partial": "Container",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Availability",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Availability",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Availability",
          "package": "grapefruit-ui",
          "partial": "Availability",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:Availability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Column",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Column",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Column",
          "package": "grapefruit-ui",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Columns",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Columns",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Columns",
          "package": "grapefruit-ui",
          "partial": "Columns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:Columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ContainerUIBackend",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#ContainerUIBackend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ContainerUIBackend",
          "package": "grapefruit-ui",
          "partial": "Container UIBackend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:ContainerUIBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Elements",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Elements",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Elements",
          "package": "grapefruit-ui",
          "partial": "Elements",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:Elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "HasScrollbars",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#HasScrollbars",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "HasScrollbars",
          "package": "grapefruit-ui",
          "partial": "Has Scrollbars",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:HasScrollbars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ProgressCellDisplay",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#ProgressCellDisplay",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ProgressCellDisplay",
          "package": "grapefruit-ui",
          "partial": "Progress Cell Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:ProgressCellDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Selection",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Selection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Selection",
          "package": "grapefruit-ui",
          "partial": "Selection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:Selection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "TextCellDisplay",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#TextCellDisplay",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "TextCellDisplay",
          "package": "grapefruit-ui",
          "partial": "Text Cell Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#t:TextCellDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Always",
          "package": "grapefruit-ui",
          "signature": "Always",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Availability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Always",
          "package": "grapefruit-ui",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "AsNecessary",
          "package": "grapefruit-ui",
          "signature": "AsNecessary",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Availability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "AsNecessary",
          "package": "grapefruit-ui",
          "partial": "As Necessary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:AsNecessary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Column",
          "package": "grapefruit-ui",
          "signature": "String -\u003e (el -\u003e display) -\u003e Cell uiBackend display -\u003e Column uiBackend el",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Column",
          "normalized": "String-\u003e(a-\u003eb)-\u003eCell c b-\u003eColumn c a",
          "package": "grapefruit-ui",
          "partial": "Column",
          "signature": "String-\u003e(el-\u003edisplay)-\u003eCell uiBackend display-\u003eColumn uiBackend el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Columns",
          "package": "grapefruit-ui",
          "signature": "Columns",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Columns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Columns",
          "package": "grapefruit-ui",
          "partial": "Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Elements",
          "package": "grapefruit-ui",
          "signature": "Elements",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Elements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Elements",
          "package": "grapefruit-ui",
          "partial": "Elements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "HasScrollbars",
          "package": "grapefruit-ui",
          "signature": "HasScrollbars",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#HasScrollbars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "HasScrollbars",
          "package": "grapefruit-ui",
          "partial": "Has Scrollbars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:HasScrollbars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Never",
          "package": "grapefruit-ui",
          "signature": "Never",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Availability",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Never",
          "package": "grapefruit-ui",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ProgressCellDisplay",
          "package": "grapefruit-ui",
          "signature": "ProgressCellDisplay Fraction (Maybe String)",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#ProgressCellDisplay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "ProgressCellDisplay",
          "package": "grapefruit-ui",
          "partial": "Progress Cell Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:ProgressCellDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Selection",
          "package": "grapefruit-ui",
          "signature": "Selection",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#Selection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "Selection",
          "package": "grapefruit-ui",
          "partial": "Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:Selection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "TextCellDisplay",
          "package": "grapefruit-ui",
          "signature": "TextCellDisplay String (RGB Fraction)",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#TextCellDisplay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "TextCellDisplay",
          "package": "grapefruit-ui",
          "partial": "Text Cell Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:TextCellDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "listView",
          "package": "grapefruit-ui",
          "signature": "(SSignal `Of` Seq el)))",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#listView",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "listView",
          "package": "grapefruit-ui",
          "partial": "View",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:listView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "progressCell",
          "package": "grapefruit-ui",
          "signature": "Cell uiBackend ProgressCellDisplay",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#progressCell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "progressCell",
          "package": "grapefruit-ui",
          "partial": "Cell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:progressCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "setView",
          "package": "grapefruit-ui",
          "signature": "(SSignal `Of` Set el)))",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#setView",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "setView",
          "package": "grapefruit-ui",
          "partial": "View",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:setView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "textCell",
          "package": "grapefruit-ui",
          "signature": "Cell uiBackend TextCellDisplay",
          "source": "src/Graphics-UI-Grapefruit-Backend-Container.html#textCell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Backend Container",
          "module": "Graphics.UI.Grapefruit.Backend.Container",
          "name": "textCell",
          "package": "grapefruit-ui",
          "partial": "Cell",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend-Container.html#v:textCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the basic interface to all user interface backends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "Backend",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the basic interface to all user interface backends",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "Backend",
          "package": "grapefruit-ui",
          "partial": "Backend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all user interface backends.\n\u003c/p\u003e\u003cp\u003eA backend is represented by a type. This technique allows the class system to be used to\n        manage different implementations of the same interface. \u003ccode\u003eUIBackend\u003c/code\u003e declares an interface to\n        basic functionality and is implemented by all user interface backends. Subclasses of\n        \u003ccode\u003eUIBackend\u003c/code\u003e extend the basic interface. A backend can be an instance of only some of these\n        subclasses when some functionality is not yet implemented or cannot be provided by the\n        backend. Backend types are typically used as phantom parameters. However, in some cases, an\n        explicit value of a backend type is needed as a function argument. Therefore, a backend is\n        usually a single-value type whose only value is named like the type.\n\u003c/p\u003e\u003cp\u003eAll associated types and methods of \u003ccode\u003eUIBackend\u003c/code\u003e are used internally by Grapefruit and should\n        not be used directly by the user.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "UIBackend",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#UIBackend",
          "type": "class"
        },
        "index": {
          "description": "The class of all user interface backends backend is represented by type This technique allows the class system to be used to manage different implementations of the same interface UIBackend declares an interface to basic functionality and is implemented by all user interface backends Subclasses of UIBackend extend the basic interface backend can be an instance of only some of these subclasses when some functionality is not yet implemented or cannot be provided by the backend Backend types are typically used as phantom parameters However in some cases an explicit value of backend type is needed as function argument Therefore backend is usually single-value type whose only value is named like the type All associated types and methods of UIBackend are used internally by Grapefruit and should not be used directly by the user",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "UIBackend",
          "package": "grapefruit-ui",
          "partial": "UIBackend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#t:UIBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalizes the backend.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "finalize",
          "package": "grapefruit-ui",
          "signature": "uiBackend -\u003e IO ()",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#finalize",
          "type": "method"
        },
        "index": {
          "description": "Finalizes the backend",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "finalize",
          "normalized": "a-\u003eIO()",
          "package": "grapefruit-ui",
          "signature": "uiBackend-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the event handling loop.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "handleEvents",
          "package": "grapefruit-ui",
          "signature": "uiBackend -\u003e IO ()",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#handleEvents",
          "type": "method"
        },
        "index": {
          "description": "Executes the event handling loop",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "handleEvents",
          "normalized": "a-\u003eIO()",
          "package": "grapefruit-ui",
          "partial": "Events",
          "signature": "uiBackend-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#v:handleEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes the backend.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "initialize",
          "package": "grapefruit-ui",
          "signature": "uiBackend -\u003e IO ()",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#initialize",
          "type": "method"
        },
        "index": {
          "description": "Initializes the backend",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "initialize",
          "normalized": "a-\u003eIO()",
          "package": "grapefruit-ui",
          "signature": "uiBackend-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsks the event handling loop to quit.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "requestQuitting",
          "package": "grapefruit-ui",
          "signature": "uiBackend -\u003e IO ()",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#requestQuitting",
          "type": "method"
        },
        "index": {
          "description": "Asks the event handling loop to quit",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "requestQuitting",
          "normalized": "a-\u003eIO()",
          "package": "grapefruit-ui",
          "partial": "Quitting",
          "signature": "uiBackend-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#v:requestQuitting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the placement of top-level windows.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "topLevel",
          "package": "grapefruit-ui",
          "signature": "uiBackend -\u003e Placement Window uiBackend",
          "source": "src/Graphics-UI-Grapefruit-Backend.html#topLevel",
          "type": "method"
        },
        "index": {
          "description": "Yields the placement of top-level windows",
          "hierarchy": "Graphics UI Grapefruit Backend",
          "module": "Graphics.UI.Grapefruit.Backend",
          "name": "topLevel",
          "normalized": "a-\u003ePlacement Window a",
          "package": "grapefruit-ui",
          "partial": "Level",
          "signature": "uiBackend-\u003ePlacement Window uiBackend",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Backend.html#v:topLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for user interface circuits.\n\u003c/p\u003e\u003cp\u003eUI circuits are systems of UI items (for example, widgets). They are similar to ordinary\n    circuits as provided by FRP.Grapefruit.Circuit but have the additional feature of providing\n    parts of user interfaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "Circuit",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Circuit.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for user interface circuits UI circuits are systems of UI items for example widgets They are similar to ordinary circuits as provided by FRP.Grapefruit.Circuit but have the additional feature of providing parts of user interfaces",
          "hierarchy": "Graphics UI Grapefruit Circuit",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "Circuit",
          "package": "grapefruit-ui",
          "partial": "Circuit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Circuit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of user interface circuits.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eitem\u003c/code\u003e parameter is a phantom parameter which says which kind of items the circuit\n        contains. It should be an instance of \u003ccode\u003eItem\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "UICircuit",
          "package": "grapefruit-ui",
          "source": "src/Internal-UICircuit.html#UICircuit",
          "type": "data"
        },
        "index": {
          "description": "The type of user interface circuits The item parameter is phantom parameter which says which kind of items the circuit contains It should be an instance of Item",
          "hierarchy": "Graphics UI Grapefruit Circuit",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "UICircuit",
          "package": "grapefruit-ui",
          "partial": "UICircuit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Circuit.html#t:UICircuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an ordinary circuit into a user interface circuit that contains no items.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "fromCircuit",
          "package": "grapefruit-ui",
          "signature": "Circuit era i o -\u003e UICircuit item uiBackend era i o",
          "source": "src/Internal-UICircuit.html#fromCircuit",
          "type": "function"
        },
        "index": {
          "description": "Converts an ordinary circuit into user interface circuit that contains no items",
          "hierarchy": "Graphics UI Grapefruit Circuit",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "fromCircuit",
          "normalized": "Circuit a b c-\u003eUICircuit d e a b c",
          "package": "grapefruit-ui",
          "partial": "Circuit",
          "signature": "Circuit era i o-\u003eUICircuit item uiBackend era i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Circuit.html#v:fromCircuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a user interface circuit.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003erun\u003c/code\u003e quits when the output signal of the circuit has a first occurence. The universal\n        quantification of the circuit&#8217;s era parameter ensures that the circuit does not use\n        signals which are produced outside the circuit and therefore avoids era mismatches.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "run",
          "package": "grapefruit-ui",
          "signature": "uiBackend-\u003e (forall era.  UICircuit Window uiBackend era i (DSignal era o))-\u003e i-\u003e IO o",
          "type": "function"
        },
        "index": {
          "description": "Runs user interface circuit run quits when the output signal of the circuit has first occurence The universal quantification of the circuit era parameter ensures that the circuit does not use signals which are produced outside the circuit and therefore avoids era mismatches",
          "hierarchy": "Graphics UI Grapefruit Circuit",
          "module": "Graphics.UI.Grapefruit.Circuit",
          "name": "run",
          "normalized": "a-\u003e(b c UICircuit Window a d e(DSignal d f))-\u003ee-\u003eIO f",
          "package": "grapefruit-ui",
          "signature": "uiBackend-\u003e(forall era. UICircuit Window uiBackend era i(DSignal era o))-\u003ei-\u003eIO o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Circuit.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides general support for user interface components.\n\u003c/p\u003e\u003cp\u003eA user interface component is either a user interface item or a user interface circuit. UI items\n    are introduced by \u003ca\u003eGraphics.UI.Grapefruit.Item\u003c/a\u003e and UI circuits by\n    \u003ca\u003eGraphics.UI.Grapefruit.Circuit\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "Comp",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Comp.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides general support for user interface components user interface component is either user interface item or user interface circuit UI items are introduced by Graphics.UI.Grapefruit.Item and UI circuits by Graphics.UI.Grapefruit.Circuit",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "Comp",
          "package": "grapefruit-ui",
          "partial": "Comp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all user interface components.\n\u003c/p\u003e\u003cp\u003eA user interface component is a part of a user interface which communicates with the\n        remainder of the user interface through signals.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "UIComp",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#UIComp",
          "type": "class"
        },
        "index": {
          "description": "The class of all user interface components user interface component is part of user interface which communicates with the remainder of the user interface through signals",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "UIComp",
          "package": "grapefruit-ui",
          "partial": "UIComp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#t:UIComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a circuit after a user interface component.\n\u003c/p\u003e\u003cp\u003eThis does not add any items to the user interface but may add data manipulation and control\n        functionality. \u003ccode\u003e(|\u003c\u003c)\u003c/code\u003e is equivalent to \u003ccode\u003eflip (\u003ccode\u003e\u003ca\u003e\u003e\u003e|\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(|\u003c\u003c)",
          "package": "grapefruit-ui",
          "signature": "Circuit era tmp o -\u003e uiComp item uiBackend era i tmp -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#%7C%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "Puts circuit after user interface component This does not add any items to the user interface but may add data manipulation and control functionality is equivalent to flip",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(|\u003c\u003c) |\u003c\u003c",
          "normalized": "Circuit a b c-\u003ed e f a g b-\u003ed e f a g c",
          "package": "grapefruit-ui",
          "signature": "Circuit era tmp o-\u003euiComp item uiBackend era i tmp-\u003euiComp item uiBackend era i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:-124--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a circuit before a user interface component.\n\u003c/p\u003e\u003cp\u003eThis does not add any items to the user interface but may add data manipulation and\n            control functionality.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(|\u003e\u003e)",
          "package": "grapefruit-ui",
          "signature": "Circuit era i tmp -\u003e uiComp item uiBackend era tmp o -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#%7C%3E%3E",
          "type": "method"
        },
        "index": {
          "description": "Adds circuit before user interface component This does not add any items to the user interface but may add data manipulation and control functionality",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(|\u003e\u003e) |\u003e\u003e",
          "normalized": "Circuit a b c-\u003ed e f a c g-\u003ed e f a b g",
          "package": "grapefruit-ui",
          "signature": "Circuit era i tmp-\u003euiComp item uiBackend era tmp o-\u003euiComp item uiBackend era i o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:-124--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a circuit before a user interface component.\n\u003c/p\u003e\u003cp\u003eThis does not add any items to the user interface but may add data manipulation and control\n        functionality. \u003ccode\u003e(\u003c\u003c|)\u003c/code\u003e is equivalent to \u003ccode\u003eflip (\u003ccode\u003e\u003ca\u003e|\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(\u003c\u003c|)",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era tmp o -\u003e Circuit era i tmp -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#%3C%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Puts circuit before user interface component This does not add any items to the user interface but may add data manipulation and control functionality is equivalent to flip",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(\u003c\u003c|) \u003c\u003c|",
          "normalized": "a b c d e f-\u003eCircuit d g e-\u003ea b c d g f",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era tmp o-\u003eCircuit era i tmp-\u003euiComp item uiBackend era i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:-60--60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a circuit after a user interface component.\n\u003c/p\u003e\u003cp\u003eThis does not add any items to the user interface but may add data manipulation and\n            control functionality.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(\u003e\u003e|)",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era i tmp -\u003e Circuit era tmp o -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#%3E%3E%7C",
          "type": "method"
        },
        "index": {
          "description": "Adds circuit after user interface component This does not add any items to the user interface but may add data manipulation and control functionality",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "(\u003e\u003e|) \u003e\u003e|",
          "normalized": "a b c d e f-\u003eCircuit d f g-\u003ea b c d e g",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era i tmp-\u003eCircuit era tmp o-\u003euiComp item uiBackend era i o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:-62--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a user interface item into a user interface component.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "fromUIItem",
          "package": "grapefruit-ui",
          "signature": "UIItem item uiBackend era i o -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#fromUIItem",
          "type": "method"
        },
        "index": {
          "description": "Converts user interface item into user interface component",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "fromUIItem",
          "normalized": "UIItem a b c d e-\u003ef a b c d e",
          "package": "grapefruit-ui",
          "partial": "UIItem",
          "signature": "UIItem item uiBackend era i o-\u003euiComp item uiBackend era i o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:fromUIItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a feedback loop to a user interface component.\n\u003c/p\u003e\u003cp\u003eThis method is completely analogous to the \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e method of \u003ccode\u003e\u003ca\u003eArrowLoop\u003c/a\u003e\u003c/code\u003e. It is\n            provided because not every instance of \u003ccode\u003eUIComp\u003c/code\u003e is an arrow.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "loop",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era (i, feedback) (o, feedback) -\u003e uiComp item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#loop",
          "type": "method"
        },
        "index": {
          "description": "Adds feedback loop to user interface component This method is completely analogous to the loop method of ArrowLoop It is provided because not every instance of UIComp is an arrow",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "loop",
          "normalized": "a b c d(e,f)(g,f)-\u003ea b c d e g",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era(i,feedback)(o,feedback)-\u003euiComp item uiBackend era i o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a user interface component into a user interface circuit.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "toUICircuit",
          "package": "grapefruit-ui",
          "signature": "uiComp item uiBackend era i o -\u003e UICircuit item uiBackend era i o",
          "source": "src/Graphics-UI-Grapefruit-Comp.html#toUICircuit",
          "type": "method"
        },
        "index": {
          "description": "Converts user interface component into user interface circuit",
          "hierarchy": "Graphics UI Grapefruit Comp",
          "module": "Graphics.UI.Grapefruit.Comp",
          "name": "toUICircuit",
          "normalized": "a b c d e f-\u003eUICircuit b c d e f",
          "package": "grapefruit-ui",
          "partial": "UICircuit",
          "signature": "uiComp item uiBackend era i o-\u003eUICircuit item uiBackend era i o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Comp.html#v:toUICircuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is about creating interfaces of UI items.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "Interfacing",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Interfacing.html",
          "type": "module"
        },
        "index": {
          "description": "This module is about creating interfaces of UI items",
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "Interfacing",
          "package": "grapefruit-ui",
          "partial": "Interfacing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes communication of an item with its environment.\n\u003c/p\u003e\u003cp\u003eAn interfacing is a mapping from native items to circuits. These circuits handle input\n        consumption and output production.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "Interfacing",
          "package": "grapefruit-ui",
          "source": "src/Internal-Interfacing.html#Interfacing",
          "type": "data"
        },
        "index": {
          "description": "Describes communication of an item with its environment An interfacing is mapping from native items to circuits These circuits handle input consumption and output production",
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "Interfacing",
          "package": "grapefruit-ui",
          "partial": "Interfacing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#t:Interfacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input or output, extended with the input or output of an inner component.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "With",
          "package": "grapefruit-ui",
          "source": "src/Internal-Interfacing.html#With",
          "type": "data"
        },
        "index": {
          "description": "An input or output extended with the input or output of an inner component",
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "With",
          "package": "grapefruit-ui",
          "partial": "With",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#t:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Grapefruit.Interfacing\",\"Graphics.UI.Grapefruit.Item\"]",
          "name": "With",
          "package": "grapefruit-ui",
          "signature": "base With inner",
          "source": "src/Internal-Interfacing.html#With",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#v:With\",\"http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:With\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "With",
          "package": "grapefruit-ui",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an interfacing based on signal connectors (consumers and producers).\n\u003c/p\u003e\u003cp\u003eThe input and output are signal records. The only restriction to these records is that their\n        fields must have corresponding fields in the connector records. The order of fields in the\n        signal records may differ from the order of connector fields and there may be connector\n        fields without a corresponding signal field. Connectors, for which no signal field exists,\n        are not performed.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "basic",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem iShape -\u003e ContextProducerRecord nativeItem oShape -\u003e Interfacing nativeItem era (SignalRecord era extIShape) (SignalRecord era extOShape)",
          "source": "src/Internal-Interfacing.html#basic",
          "type": "function"
        },
        "index": {
          "description": "Creates an interfacing based on signal connectors consumers and producers The input and output are signal records The only restriction to these records is that their fields must have corresponding fields in the connector records The order of fields in the signal records may differ from the order of connector fields and there may be connector fields without corresponding signal field Connectors for which no signal field exists are not performed",
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "basic",
          "normalized": "ContextConsumerRecord a b-\u003eContextProducerRecord a c-\u003eInterfacing a d(SignalRecord d e)(SignalRecord d f)",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem iShape-\u003eContextProducerRecord nativeItem oShape-\u003eInterfacing nativeItem era(SignalRecord era extIShape)(SignalRecord era extOShape)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#v:basic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends an interfacing so that the resulting interfacing also adds an inner component to the\n        UI item in question and extends the input and output to contain the input and output of the\n        inner component.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "with",
          "package": "grapefruit-ui",
          "signature": "(nativeItem -\u003e Placement innerItem uiBackend)-\u003e uiComp innerItem uiBackend era innerI innerO-\u003e Interfacing nativeItem era baseI baseO-\u003e Interfacing nativeItem era (baseI `With` innerI) (baseO `With` innerO)",
          "type": "function"
        },
        "index": {
          "description": "Extends an interfacing so that the resulting interfacing also adds an inner component to the UI item in question and extends the input and output to contain the input and output of the inner component",
          "hierarchy": "Graphics UI Grapefruit Interfacing",
          "module": "Graphics.UI.Grapefruit.Interfacing",
          "name": "with",
          "normalized": "(a-\u003ePlacement b c)-\u003ed b c e f g-\u003eInterfacing a e h i-\u003eInterfacing a e(h With f)(i With g)",
          "package": "grapefruit-ui",
          "signature": "(nativeItem-\u003ePlacement innerItem uiBackend)-\u003euiComp innerItem uiBackend era innerI innerO-\u003eInterfacing nativeItem era baseI baseO-\u003eInterfacing nativeItem era(baseI With innerI)(baseO With innerO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Interfacing.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for user interface items.\n\u003c/p\u003e\u003cp\u003eUI items are the building blocks of user interfaces. Typical items are widgets and windows. A UI\n    item may contain another item or a UI circuit which is a system of UI items. An example of the\n    former case is a window which contains a single widget. An example of the latter case is a box\n    widget which contains an arbitrary number of other widgets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Item",
          "package": "grapefruit-ui",
          "source": "src/Graphics-UI-Grapefruit-Item.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for user interface items UI items are the building blocks of user interfaces Typical items are widgets and windows UI item may contain another item or UI circuit which is system of UI items An example of the former case is window which contains single widget An example of the latter case is box widget which contains an arbitrary number of other widgets",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Item",
          "package": "grapefruit-ui",
          "partial": "Item",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA box is a container which can be transformed into an item by putting a user interface\n        component into it.\n\u003c/p\u003e\u003cp\u003eThe component which is put into a box is called the inner component of that box. The\n        parameters \u003ccode\u003einnerItem\u003c/code\u003e and \u003ccode\u003eitem\u003c/code\u003e tell the type of the inner component and the item kind, it\n        is based on.\n\u003c/p\u003e\u003cp\u003eThe interface of an item made from a box is similar to that of an item made from a brick.\n        The only difference is that the interface of the box item covers also the input and the\n        output of the inner component.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Box",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#Box",
          "type": "data"
        },
        "index": {
          "description": "box is container which can be transformed into an item by putting user interface component into it The component which is put into box is called the inner component of that box The parameters innerItem and item tell the type of the inner component and the item kind it is based on The interface of an item made from box is similar to that of an item made from brick The only difference is that the interface of the box item covers also the input and the output of the inner component",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Box",
          "package": "grapefruit-ui",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA brick is an era-independent item with a comfortable record-based interface.\n\u003c/p\u003e\u003cp\u003eThe parameter \u003ccode\u003eiOptRecord\u003c/code\u003e is an optionality record and therefore specifies a set of\n        required and a set of optional fields. When the brick is used, the input fields can be given\n        in any order and optional fields can be left out. Similarily, \u003ccode\u003eoRecord\u003c/code\u003e specifies a set of\n        fields (without optionalities) of whom not all have to be utilized by the user of the brick.\n\u003c/p\u003e\u003cp\u003eA brick has additional input and output fields which are not explicitely mentioned in its\n        type. For an item kind \u003ccode\u003e\u003cem\u003eitem\u003c/em\u003e\u003c/code\u003e, they are given by \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCommonInputOptRecord\u003c/a\u003e\u003c/code\u003e \u003cem\u003eitem\u003c/em\u003e\u003c/code\u003e and\n        \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCommonOutputRecord\u003c/a\u003e\u003c/code\u003e \u003cem\u003eitem\u003c/em\u003e\u003c/code\u003e. Therefore, it is possible to have inputs and outputs common\n        for all bricks of a certain item kind.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Brick",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#Brick",
          "type": "data"
        },
        "index": {
          "description": "brick is an era-independent item with comfortable record-based interface The parameter iOptRecord is an optionality record and therefore specifies set of required and set of optional fields When the brick is used the input fields can be given in any order and optional fields can be left out Similarily oRecord specifies set of fields without optionalities of whom not all have to be utilized by the user of the brick brick has additional input and output fields which are not explicitely mentioned in its type For an item kind item they are given by CommonInputOptRecord item and CommonOutputRecord item Therefore it is possible to have inputs and outputs common for all bricks of certain item kind",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Brick",
          "package": "grapefruit-ui",
          "partial": "Brick",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Brick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field name.\n\u003c/p\u003e\u003cp\u003eTypical properties:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ekind\u003c/dt\u003e\u003cdd\u003e\n            input (optional)\n\u003c/dd\u003e\u003cdt\u003etype\u003c/dt\u003e\u003cdd\u003e\n            \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSSignal\u003c/a\u003e\u003c/code\u003e `\u003ccode\u003e\u003ca\u003eOf\u003c/a\u003e\u003c/code\u003e` Bool\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003emeaning\u003c/dt\u003e\u003cdd\u003e\n            whether a widget is enabled or not\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eDisabled widgets cannot receive user events and are typically displayed in a different\n        style\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "IsEnabled",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#IsEnabled",
          "type": "data"
        },
        "index": {
          "description": "field name Typical properties kind input optional type SSignal Of Bool meaning whether widget is enabled or not Disabled widgets cannot receive user events and are typically displayed in different style",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "IsEnabled",
          "package": "grapefruit-ui",
          "partial": "Is Enabled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:IsEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all kinds of items.\n\u003c/p\u003e\u003cp\u003eInstances of this class serve as phantom parameters of \u003ccode\u003e\u003ca\u003eUIItem\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUICircuit\u003c/a\u003e\u003c/code\u003e and others.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Item",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#Item",
          "type": "class"
        },
        "index": {
          "description": "The class of all kinds of items Instances of this class serve as phantom parameters of UIItem UICircuit and others",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Item",
          "package": "grapefruit-ui",
          "partial": "Item",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe family of item placement types.\n\u003c/p\u003e\u003cp\u003eA placement says where to place a user interface item, for example, to place a widget in a\n        certain box or a window at the top level. \u003ccode\u003eGraphics.UI.Grapefruit.Item\u003c/code\u003e declares two\n        instances of \u003ccode\u003ePlacement\u003c/code\u003e. \u003ccode\u003ePlacement \u003ccode\u003e\u003ca\u003eWidget\u003c/a\u003e\u003c/code\u003e \u003cem\u003euiBackend\u003c/em\u003e\u003c/code\u003e is equivalent to\n        \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWidgetPlacement\u003c/a\u003e\u003c/code\u003e \u003cem\u003euiBackend\u003c/em\u003e\u003c/code\u003e and \u003ccode\u003ePlacement \u003ccode\u003e\u003ca\u003eWindow\u003c/a\u003e\u003c/code\u003e \u003cem\u003euiBackend\u003c/em\u003e\u003c/code\u003e is equivalent to\n        \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWindowPlacement\u003c/a\u003e\u003c/code\u003e \u003cem\u003euiBackend\u003c/em\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Placement",
          "package": "grapefruit-ui",
          "signature": "Placement",
          "type": "function"
        },
        "index": {
          "description": "The family of item placement types placement says where to place user interface item for example to place widget in certain box or window at the top level Graphics.UI.Grapefruit.Item declares two instances of Placement Placement Widget uiBackend is equivalent to WidgetPlacement uiBackend and Placement Window uiBackend is equivalent to WindowPlacement uiBackend",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Placement",
          "package": "grapefruit-ui",
          "partial": "Placement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Placement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of user interface items.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eitem\u003c/code\u003e parameter is a phantom parameter which denotes the kind of the item. It should\n        be an instance of \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "UIItem",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#UIItem",
          "type": "data"
        },
        "index": {
          "description": "The type of user interface items The item parameter is phantom parameter which denotes the kind of the item It should be an instance of Item",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "UIItem",
          "package": "grapefruit-ui",
          "partial": "UIItem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:UIItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe widget item kind.\n\u003c/p\u003e\u003cp\u003eA widget is an item which resides inside a window. Examples of widgets are push buttons,\n        labels and boxes (which contain other widgets themselves).\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Widget",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#Widget",
          "type": "data"
        },
        "index": {
          "description": "The widget item kind widget is an item which resides inside window Examples of widgets are push buttons labels and boxes which contain other widgets themselves",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Widget",
          "package": "grapefruit-ui",
          "partial": "Widget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe window item kind.\n\u003c/p\u003e\u003cp\u003eA window is an item which resides directly on the desktop and typically has a frame with a\n        title and some control buttons. Examples of windows are application windows and dialogs.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Window",
          "package": "grapefruit-ui",
          "source": "src/Internal-UIItem.html#Window",
          "type": "data"
        },
        "index": {
          "description": "The window item kind window is an item which resides directly on the desktop and typically has frame with title and some control buttons Examples of windows are application windows and dialogs",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "Window",
          "package": "grapefruit-ui",
          "partial": "Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn input or output, extended with the input or output of an inner component.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "With",
          "package": "grapefruit-ui",
          "source": "src/Internal-Interfacing.html#With",
          "type": "data"
        },
        "index": {
          "description": "An input or output extended with the input or output of an inner component",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "With",
          "package": "grapefruit-ui",
          "partial": "With",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#t:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "IsEnabled",
          "package": "grapefruit-ui",
          "signature": "IsEnabled",
          "source": "src/Internal-UIItem.html#IsEnabled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "IsEnabled",
          "package": "grapefruit-ui",
          "partial": "Is Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:IsEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a box.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "box",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem (All (CommonInputOptRecord item))-\u003e ContextProducerRecord nativeItem (CommonOutputRecord item)-\u003e (nativeItem -\u003e IO ())-\u003e (Placement item uiBackend -\u003e IO nativeItem)-\u003e (nativeItem -\u003e Placement innerItem uiBackend)-\u003e ContextConsumerRecord nativeItem (All iOptRecord)-\u003e ContextProducerRecord nativeItem oRecord-\u003e Box innerUIComp innerItem item uiBackend iOptRecord oRecord",
          "type": "function"
        },
        "index": {
          "description": "Constructs box",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "box",
          "normalized": "ContextConsumerRecord a(All(CommonInputOptRecord b))-\u003eContextProducerRecord a(CommonOutputRecord b)-\u003e(a-\u003eIO())-\u003e(Placement b c-\u003eIO a)-\u003e(a-\u003ePlacement d c)-\u003eContextConsumerRecord a(All e)-\u003eContextProducerRecord a f-\u003eBox g d b c e f",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem(All(CommonInputOptRecord item))-\u003eContextProducerRecord nativeItem(CommonOutputRecord item)-\u003e(nativeItem-\u003eIO())-\u003e(Placement item uiBackend-\u003eIO nativeItem)-\u003e(nativeItem-\u003ePlacement innerItem uiBackend)-\u003eContextConsumerRecord nativeItem(All iOptRecord)-\u003eContextProducerRecord nativeItem oRecord-\u003eBox innerUIComp innerItem item uiBackend iOptRecord oRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a brick.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "brick",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem (All (CommonInputOptRecord item))-\u003e ContextProducerRecord nativeItem (CommonOutputRecord item)-\u003e (nativeItem -\u003e IO ())-\u003e (Placement item uiBackend -\u003e IO nativeItem)-\u003e ContextConsumerRecord nativeItem (All iOptRecord)-\u003e ContextProducerRecord nativeItem oRecord-\u003e Brick item uiBackend iOptRecord oRecord",
          "type": "function"
        },
        "index": {
          "description": "Constructs brick",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "brick",
          "normalized": "ContextConsumerRecord a(All(CommonInputOptRecord b))-\u003eContextProducerRecord a(CommonOutputRecord b)-\u003e(a-\u003eIO())-\u003e(Placement b c-\u003eIO a)-\u003eContextConsumerRecord a(All d)-\u003eContextProducerRecord a e-\u003eBrick b c d e",
          "package": "grapefruit-ui",
          "signature": "ContextConsumerRecord nativeItem(All(CommonInputOptRecord item))-\u003eContextProducerRecord nativeItem(CommonOutputRecord item)-\u003e(nativeItem-\u003eIO())-\u003e(Placement item uiBackend-\u003eIO nativeItem)-\u003eContextConsumerRecord nativeItem(All iOptRecord)-\u003eContextProducerRecord nativeItem oRecord-\u003eBrick item uiBackend iOptRecord oRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:brick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an item using functionality of an underlying imperative library.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003enativeItem\u003c/code\u003e type variable represents an item type of the underlying library.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "item",
          "package": "grapefruit-ui",
          "signature": "(nativeItem -\u003e IO ())-\u003e (Placement item uiBackend -\u003e IO nativeItem)-\u003e Interfacing nativeItem era i o-\u003e UIItem item uiBackend era i o",
          "type": "function"
        },
        "index": {
          "description": "Constructs an item using functionality of an underlying imperative library The nativeItem type variable represents an item type of the underlying library",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "item",
          "normalized": "(a-\u003eIO())-\u003e(Placement b c-\u003eIO a)-\u003eInterfacing a d e f-\u003eUIItem b c d e f",
          "package": "grapefruit-ui",
          "signature": "(nativeItem-\u003eIO())-\u003e(Placement item uiBackend-\u003eIO nativeItem)-\u003eInterfacing nativeItem era i o-\u003eUIItem item uiBackend era i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a brick into an ordinary user interface component.\n\u003c/p\u003e\u003cp\u003eThe brick is first converted into a UI item which is then converted into the resulting\n        component by applying \u003ccode\u003e\u003ca\u003efromUIItem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type of \u003ccode\u003ejust\u003c/code\u003e states the following properties of the resulting component:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input record covers only fields which are input fields according to the type of\n              the brick or are common input fields of all items of the respective kind.\n\u003c/li\u003e\u003cli\u003e The input record covers all input fields which are marked as required.\n\u003c/li\u003e\u003cli\u003e The output record covers only fields which are output fields according to the type of\n              the brick or are common output fields of all items of the respective kind.\n\u003c/li\u003e\u003cli\u003e The order of fields is arbitrary.\n\u003c/li\u003e\u003cli\u003e The component is not tied to a specific era.\n\u003c/li\u003e\u003cli\u003e All input and output signals use the same era as the component.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDropping certain input or output fields results in the corresponding connectors not being\n        executed.\n\u003c/p\u003e\u003cp\u003eTo make the type variables \u003ccode\u003eextIRecord\u003c/code\u003e and \u003ccode\u003eextORecord\u003c/code\u003e non-ambiguous, the lists of input\n        and output field names have to be known at the call site. For the output field names, this\n        is usually done via pattern matching.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "just",
          "package": "grapefruit-ui",
          "signature": "Brick item uiBackend iOptRecord oRecord -\u003e uiComp item uiBackend era (SignalRecord era extIRecord) (SignalRecord era extORecord)",
          "source": "src/Internal-UIItem.html#just",
          "type": "function"
        },
        "index": {
          "description": "Converts brick into an ordinary user interface component The brick is first converted into UI item which is then converted into the resulting component by applying fromUIItem The type of just states the following properties of the resulting component The input record covers only fields which are input fields according to the type of the brick or are common input fields of all items of the respective kind The input record covers all input fields which are marked as required The output record covers only fields which are output fields according to the type of the brick or are common output fields of all items of the respective kind The order of fields is arbitrary The component is not tied to specific era All input and output signals use the same era as the component Dropping certain input or output fields results in the corresponding connectors not being executed To make the type variables extIRecord and extORecord non-ambiguous the lists of input and output field names have to be known at the call site For the output field names this is usually done via pattern matching",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "just",
          "normalized": "Brick a b c d-\u003ee a b f(SignalRecord f g)(SignalRecord f h)",
          "package": "grapefruit-ui",
          "signature": "Brick item uiBackend iOptRecord oRecord-\u003euiComp item uiBackend era(SignalRecord era extIRecord)(SignalRecord era extORecord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts an inner component into a box and converts the result into an ordinary user interface\n        component.\n\u003c/p\u003e\u003cp\u003eThis function is very similar to \u003ccode\u003e\u003ca\u003ejust\u003c/a\u003e\u003c/code\u003e. In contrast to \u003ccode\u003e\u003ca\u003ejust\u003c/a\u003e\u003c/code\u003e, it takes the inner component\n        as an additional argument and extends the input and output of the resulting component with\n        the input and output of the inner component. Note that the era of the inner component equals\n        the era of the resulting component.\n\u003c/p\u003e\u003cp\u003eApplications of \u003ccode\u003ewith\u003c/code\u003e are usually written infix.\n\u003c/p\u003e",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "with",
          "package": "grapefruit-ui",
          "signature": "Box innerUIComp innerItem item uiBackend iOptRecord oRecord -\u003e innerUIComp innerItem uiBackend era innerI innerO -\u003e uiComp item uiBackend era (SignalRecord era extIRecord `With` innerI) (SignalRecord era extORecord `With` innerO)",
          "source": "src/Internal-UIItem.html#with",
          "type": "function"
        },
        "index": {
          "description": "Puts an inner component into box and converts the result into an ordinary user interface component This function is very similar to just In contrast to just it takes the inner component as an additional argument and extends the input and output of the resulting component with the input and output of the inner component Note that the era of the inner component equals the era of the resulting component Applications of with are usually written infix",
          "hierarchy": "Graphics UI Grapefruit Item",
          "module": "Graphics.UI.Grapefruit.Item",
          "name": "with",
          "normalized": "Box a b c d e f-\u003ea b d g h i-\u003ej c d g(SignalRecord g k With h)(SignalRecord g l With i)",
          "package": "grapefruit-ui",
          "signature": "Box innerUIComp innerItem item uiBackend iOptRecord oRecord-\u003einnerUIComp innerItem uiBackend era innerI innerO-\u003euiComp item uiBackend era(SignalRecord era extIRecord With innerI)(SignalRecord era extORecord With innerO)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grapefruit-ui/docs/Graphics-UI-Grapefruit-Item.html#v:with"
      }
    }
  ]
]