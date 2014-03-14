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
        "word": "Chart-gtk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "Gtk",
          "package": "Chart-gtk",
          "source": "src/Graphics-Rendering-Chart-Gtk.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Rendering Chart Gtk",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "Gtk",
          "package": "Chart-gtk",
          "partial": "Gtk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Chart-gtk/docs/Graphics-Rendering-Chart-Gtk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new GTK window displaying a renderable.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "createRenderableWindow",
          "package": "Chart-gtk",
          "signature": "Renderable a -\u003e Int -\u003e Int -\u003e IO Window",
          "source": "src/Graphics-Rendering-Chart-Gtk.html#createRenderableWindow",
          "type": "function"
        },
        "index": {
          "description": "Create new GTK window displaying renderable",
          "hierarchy": "Graphics Rendering Chart Gtk",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "createRenderableWindow",
          "normalized": "Renderable a-\u003eInt-\u003eInt-\u003eIO Window",
          "package": "Chart-gtk",
          "partial": "Renderable Window",
          "signature": "Renderable a-\u003eInt-\u003eInt-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Chart-gtk/docs/Graphics-Rendering-Chart-Gtk.html#v:createRenderableWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a renderable in a gtk window.\n\u003c/p\u003e\u003cp\u003eNote that this is a convenience function that initialises GTK on\n it's first call, but not subsequent calls. Hence it's \n unlikely to be compatible with other code using gtk. In \n that case use createRenderableWindow.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "renderableToWindow",
          "package": "Chart-gtk",
          "signature": "Renderable a -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Rendering-Chart-Gtk.html#renderableToWindow",
          "type": "function"
        },
        "index": {
          "description": "Display renderable in gtk window Note that this is convenience function that initialises GTK on it first call but not subsequent calls Hence it unlikely to be compatible with other code using gtk In that case use createRenderableWindow",
          "hierarchy": "Graphics Rendering Chart Gtk",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "renderableToWindow",
          "normalized": "Renderable a-\u003eInt-\u003eInt-\u003eIO()",
          "package": "Chart-gtk",
          "partial": "To Window",
          "signature": "Renderable a-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Chart-gtk/docs/Graphics-Rendering-Chart-Gtk.html#v:renderableToWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "updateCanvas",
          "package": "Chart-gtk",
          "signature": "Renderable a -\u003e DrawingArea -\u003e IO Bool",
          "source": "src/Graphics-Rendering-Chart-Gtk.html#updateCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Chart Gtk",
          "module": "Graphics.Rendering.Chart.Gtk",
          "name": "updateCanvas",
          "normalized": "Renderable a-\u003eDrawingArea-\u003eIO Bool",
          "package": "Chart-gtk",
          "partial": "Canvas",
          "signature": "Renderable a-\u003eDrawingArea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Chart-gtk/docs/Graphics-Rendering-Chart-Gtk.html#v:updateCanvas"
      }
    }
  ]
]