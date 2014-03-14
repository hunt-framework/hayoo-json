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
        "word": "blank-canvas"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "Blank",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "Blank",
          "package": "blank-canvas",
          "partial": "Blank",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "Canvas",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Canvas.html#Canvas",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "Canvas",
          "package": "blank-canvas",
          "partial": "Canvas",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e is our abstact handle into a specific 2d-context inside a browser.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "Context",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Context.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Context is our abstact handle into specific d-context inside browser",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "Context",
          "package": "blank-canvas",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Event from Browser, the code is event-type specific.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "Event",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Events.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Basic Event from Browser the code is event-type specific",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "Event",
          "package": "blank-canvas",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEventName\u003c/a\u003e\u003c/code\u003e mirrors event names from jquery, where 'map toLower (show name)' gives\n the jquery event name.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "EventName",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "data"
        },
        "index": {
          "description": "EventName mirrors event names from jquery where map toLower show name gives the jquery event name",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "EventName",
          "package": "blank-canvas",
          "partial": "Event Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:EventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEventQueue is a STM channel (\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e) of \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es.\n Intentionally, \u003ccode\u003e\u003ca\u003eEventQueue\u003c/a\u003e\u003c/code\u003e is not abstract.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "EventQueue",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Events.html#EventQueue",
          "type": "type"
        },
        "index": {
          "description": "EventQueue is STM channel TChan of Event Intentionally EventQueue is not abstract",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "EventQueue",
          "package": "blank-canvas",
          "partial": "Event Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:EventQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen an event is sent to the application, it always has a name.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "NamedEvent",
          "package": "blank-canvas",
          "source": "src/Graphics-Blank-Events.html#NamedEvent",
          "type": "data"
        },
        "index": {
          "description": "When an event is sent to the application it always has name",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "NamedEvent",
          "package": "blank-canvas",
          "partial": "Named Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#t:NamedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "Event",
          "package": "blank-canvas",
          "signature": "Event",
          "source": "src/Graphics-Blank-Events.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "Event",
          "package": "blank-canvas",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "KeyDown",
          "package": "blank-canvas",
          "signature": "KeyDown",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "KeyDown",
          "package": "blank-canvas",
          "partial": "Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:KeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "KeyPress",
          "package": "blank-canvas",
          "signature": "KeyPress",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "KeyPress",
          "package": "blank-canvas",
          "partial": "Key Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:KeyPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "KeyUp",
          "package": "blank-canvas",
          "signature": "KeyUp",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "KeyUp",
          "package": "blank-canvas",
          "partial": "Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:KeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseDown",
          "package": "blank-canvas",
          "signature": "MouseDown",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseDown",
          "package": "blank-canvas",
          "partial": "Mouse Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseEnter",
          "package": "blank-canvas",
          "signature": "MouseEnter",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseEnter",
          "package": "blank-canvas",
          "partial": "Mouse Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseMove",
          "package": "blank-canvas",
          "signature": "MouseMove",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseMove",
          "package": "blank-canvas",
          "partial": "Mouse Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseOut",
          "package": "blank-canvas",
          "signature": "MouseOut",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseOut",
          "package": "blank-canvas",
          "partial": "Mouse Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseOver",
          "package": "blank-canvas",
          "signature": "MouseOver",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseOver",
          "package": "blank-canvas",
          "partial": "Mouse Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "MouseUp",
          "package": "blank-canvas",
          "signature": "MouseUp",
          "source": "src/Graphics-Blank-Events.html#EventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "MouseUp",
          "package": "blank-canvas",
          "partial": "Mouse Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:MouseUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "NamedEvent",
          "package": "blank-canvas",
          "signature": "NamedEvent EventName Event",
          "source": "src/Graphics-Blank-Events.html#NamedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "NamedEvent",
          "package": "blank-canvas",
          "partial": "Named Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:NamedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "arc",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float, Float, Bool) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#arc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "arc",
          "normalized": "(Float,Float,Float,Float,Float,Bool)-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "(Float,Float,Float,Float,Float,Bool)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "beginPath",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#beginPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "beginPath",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Path",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:beginPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "bezierCurveTo",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#bezierCurveTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "bezierCurveTo",
          "normalized": "(Float,Float,Float,Float,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Curve To",
          "signature": "(Float,Float,Float,Float,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:bezierCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblankCanvas is the main entry point into blank-canvas.\n A typical invocation would be\n\u003c/p\u003e\u003cpre\u003emodule Main where\n\nimport Graphics.Blank\n\nmain = blankCanvas 3000 $ \\ context -\u003e do\n        send context $ do\n                moveTo(50,50)\n                lineTo(200,100)\n                lineWidth 10\n                strokeStyle \"red\"\n                stroke()\n\n\u003c/pre\u003e",
          "module": "Graphics.Blank",
          "name": "blankCanvas",
          "package": "blank-canvas",
          "signature": "Int -\u003e (Context -\u003e IO ()) -\u003e IO ()",
          "source": "src/Graphics-Blank.html#blankCanvas",
          "type": "function"
        },
        "index": {
          "description": "blankCanvas is the main entry point into blank-canvas typical invocation would be module Main where import Graphics.Blank main blankCanvas context do send context do moveTo lineTo lineWidth strokeStyle red stroke",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "blankCanvas",
          "normalized": "Int-\u003e(Context-\u003eIO())-\u003eIO()",
          "package": "blank-canvas",
          "partial": "Canvas",
          "signature": "Int-\u003e(Context-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:blankCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "clearRect",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#clearRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "clearRect",
          "normalized": "(Float,Float,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Rect",
          "signature": "(Float,Float,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:clearRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "closePath",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#closePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "closePath",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Path",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:closePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "events",
          "package": "blank-canvas",
          "signature": "Context -\u003e IO EventQueue",
          "source": "src/Graphics-Blank-Context.html#events",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "events",
          "normalized": "Context-\u003eIO EventQueue",
          "package": "blank-canvas",
          "signature": "Context-\u003eIO EventQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "fill",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#fill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "fill",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "fillRect",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#fillRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "fillRect",
          "normalized": "(Float,Float,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Rect",
          "signature": "(Float,Float,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:fillRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "fillStyle",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#fillStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "fillStyle",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Style",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:fillStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "fillText",
          "package": "blank-canvas",
          "signature": "(String, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#fillText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "fillText",
          "normalized": "(String,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Text",
          "signature": "(String,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:fillText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "font",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#font",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "font",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "globalAlpha",
          "package": "blank-canvas",
          "signature": "Float -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#globalAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "globalAlpha",
          "normalized": "Float-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Alpha",
          "signature": "Float-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:globalAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "jsCode",
          "package": "blank-canvas",
          "signature": "Int",
          "source": "src/Graphics-Blank-Events.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "jsCode",
          "package": "blank-canvas",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:jsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "jsMouse",
          "package": "blank-canvas",
          "signature": "Maybe (Int, Int)",
          "source": "src/Graphics-Blank-Events.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "jsMouse",
          "normalized": "Maybe(Int,Int)",
          "package": "blank-canvas",
          "partial": "Mouse",
          "signature": "Maybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:jsMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "lineCap",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#lineCap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "lineCap",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Cap",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:lineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "lineJoin",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#lineJoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "lineJoin",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Join",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:lineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "lineTo",
          "package": "blank-canvas",
          "signature": "(Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#lineTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "lineTo",
          "normalized": "(Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "To",
          "signature": "(Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "lineWidth",
          "package": "blank-canvas",
          "signature": "Float -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#lineWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "lineWidth",
          "normalized": "Float-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Width",
          "signature": "Float-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "miterLimit",
          "package": "blank-canvas",
          "signature": "Float -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#miterLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "miterLimit",
          "normalized": "Float-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Limit",
          "signature": "Float-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:miterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "moveTo",
          "package": "blank-canvas",
          "signature": "(Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#moveTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "moveTo",
          "normalized": "(Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "To",
          "signature": "(Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific event; wait for it if the event is not in queue.\n **Thows away all other events while waiting.**\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "readEvent",
          "package": "blank-canvas",
          "signature": "EventName -\u003e Canvas Event",
          "source": "src/Graphics-Blank-Canvas.html#readEvent",
          "type": "function"
        },
        "index": {
          "description": "read specific event wait for it if the event is not in queue Thows away all other events while waiting",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "readEvent",
          "normalized": "EventName-\u003eCanvas Event",
          "package": "blank-canvas",
          "partial": "Event",
          "signature": "EventName-\u003eCanvas Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:readEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "readEventQueue",
          "package": "blank-canvas",
          "signature": "EventQueue -\u003e IO NamedEvent",
          "source": "src/Graphics-Blank-Events.html#readEventQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "readEventQueue",
          "normalized": "EventQueue-\u003eIO NamedEvent",
          "package": "blank-canvas",
          "partial": "Event Queue",
          "signature": "EventQueue-\u003eIO NamedEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:readEventQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific set of events; wait for it if the event/events is not in queue.\n **Throws away all other non-named events while waiting.**\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "readEvents",
          "package": "blank-canvas",
          "signature": "[EventName] -\u003e Canvas NamedEvent",
          "source": "src/Graphics-Blank-Canvas.html#readEvents",
          "type": "function"
        },
        "index": {
          "description": "read specific set of events wait for it if the event events is not in queue Throws away all other non-named events while waiting",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "readEvents",
          "normalized": "[EventName]-\u003eCanvas NamedEvent",
          "package": "blank-canvas",
          "partial": "Events",
          "signature": "[EventName]-\u003eCanvas NamedEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:readEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "restore",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#restore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "restore",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "rotate",
          "package": "blank-canvas",
          "signature": "Float -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#rotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "rotate",
          "normalized": "Float-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "Float-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "save",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "save",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "scale",
          "package": "blank-canvas",
          "signature": "(Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "scale",
          "normalized": "(Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "(Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a set of Canvas commands to the canvas. Attempts\n to common up as many commands as possible.\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "send",
          "package": "blank-canvas",
          "signature": "Context -\u003e Canvas a -\u003e IO a",
          "source": "src/Graphics-Blank.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends set of Canvas commands to the canvas Attempts to common up as many commands as possible",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "send",
          "normalized": "Context-\u003eCanvas a-\u003eIO a",
          "package": "blank-canvas",
          "signature": "Context-\u003eCanvas a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esize of the canvas\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "size",
          "package": "blank-canvas",
          "signature": "Canvas (Float, Float)",
          "source": "src/Graphics-Blank-Canvas.html#size",
          "type": "function"
        },
        "index": {
          "description": "size of the canvas",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "size",
          "normalized": "Canvas(Float,Float)",
          "package": "blank-canvas",
          "signature": "Canvas(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "stroke",
          "package": "blank-canvas",
          "signature": "() -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#stroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "stroke",
          "normalized": "()-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "()-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "strokeRect",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#strokeRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "strokeRect",
          "normalized": "(Float,Float,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Rect",
          "signature": "(Float,Float,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:strokeRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "strokeStyle",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#strokeStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "strokeStyle",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Style",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:strokeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "strokeText",
          "package": "blank-canvas",
          "signature": "(String, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#strokeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "strokeText",
          "normalized": "(String,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Text",
          "signature": "(String,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:strokeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "textAlign",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#textAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "textAlign",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Align",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:textAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "textBaseline",
          "package": "blank-canvas",
          "signature": "String -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#textBaseline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "textBaseline",
          "normalized": "String-\u003eCanvas()",
          "package": "blank-canvas",
          "partial": "Baseline",
          "signature": "String-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:textBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "transform",
          "package": "blank-canvas",
          "signature": "(Float, Float, Float, Float, Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "transform",
          "normalized": "(Float,Float,Float,Float,Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "(Float,Float,Float,Float,Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "translate",
          "package": "blank-canvas",
          "signature": "(Float, Float) -\u003e Canvas ()",
          "source": "src/Graphics-Blank-Generated.html#translate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "translate",
          "normalized": "(Float,Float)-\u003eCanvas()",
          "package": "blank-canvas",
          "signature": "(Float,Float)-\u003eCanvas()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific event. **Throws away all events not named**\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "tryReadEvent",
          "package": "blank-canvas",
          "signature": "EventName -\u003e Canvas (Maybe Event)",
          "source": "src/Graphics-Blank-Canvas.html#tryReadEvent",
          "type": "function"
        },
        "index": {
          "description": "read specific event Throws away all events not named",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "tryReadEvent",
          "normalized": "EventName-\u003eCanvas(Maybe Event)",
          "package": "blank-canvas",
          "partial": "Read Event",
          "signature": "EventName-\u003eCanvas(Maybe Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:tryReadEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Blank",
          "name": "tryReadEventQueue",
          "package": "blank-canvas",
          "signature": "EventQueue -\u003e IO (Maybe NamedEvent)",
          "source": "src/Graphics-Blank-Events.html#tryReadEventQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "tryReadEventQueue",
          "normalized": "EventQueue-\u003eIO(Maybe NamedEvent)",
          "package": "blank-canvas",
          "partial": "Read Event Queue",
          "signature": "EventQueue-\u003eIO(Maybe NamedEvent)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:tryReadEventQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread a specific set of events. **Throws away all non-named events while waiting.**\n\u003c/p\u003e",
          "module": "Graphics.Blank",
          "name": "tryReadEvents",
          "package": "blank-canvas",
          "signature": "[EventName] -\u003e Canvas (Maybe NamedEvent)",
          "source": "src/Graphics-Blank-Canvas.html#tryReadEvents",
          "type": "function"
        },
        "index": {
          "description": "read specific set of events Throws away all non-named events while waiting",
          "hierarchy": "Graphics Blank",
          "module": "Graphics.Blank",
          "name": "tryReadEvents",
          "normalized": "[EventName]-\u003eCanvas(Maybe NamedEvent)",
          "package": "blank-canvas",
          "partial": "Read Events",
          "signature": "[EventName]-\u003eCanvas(Maybe NamedEvent)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blank-canvas/docs/Graphics-Blank.html#v:tryReadEvents"
      }
    }
  ]
]