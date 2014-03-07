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
        "word": "diagrams-gtk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient interface to rendering diagrams directly\n on Gtk widgets using the Cairo backend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Gtk",
          "name": "Gtk",
          "package": "diagrams-gtk",
          "source": "src/Diagrams-Backend-Gtk.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient interface to rendering diagrams directly on Gtk widgets using the Cairo backend",
          "hierarchy": "Diagrams Backend Gtk",
          "module": "Diagrams.Backend.Gtk",
          "name": "Gtk",
          "package": "diagrams-gtk",
          "partial": "Gtk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-gtk/docs/Diagrams-Backend-Gtk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a diagram to a DrawingArea, rescaling to fit the full area.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Gtk",
          "name": "defaultRender",
          "package": "diagrams-gtk",
          "signature": "DrawingArea -\u003e QDiagram Cairo R2 m -\u003e IO ()",
          "source": "src/Diagrams-Backend-Gtk.html#defaultRender",
          "type": "function"
        },
        "index": {
          "description": "Render diagram to DrawingArea rescaling to fit the full area",
          "hierarchy": "Diagrams Backend Gtk",
          "module": "Diagrams.Backend.Gtk",
          "name": "defaultRender",
          "normalized": "DrawingArea-\u003eQDiagram Cairo R a-\u003eIO()",
          "package": "diagrams-gtk",
          "partial": "Render",
          "signature": "DrawingArea-\u003eQDiagram Cairo R m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-gtk/docs/Diagrams-Backend-Gtk.html#v:defaultRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a diagram to a \u003ccode\u003e\u003ca\u003eDrawableClass\u003c/a\u003e\u003c/code\u003e.  No rescaling or\n   transformations will be performed.\n\u003c/p\u003e\u003cp\u003eTypically the diagram will already have been transformed by\n   \u003ccode\u003e\u003ca\u003etoGtkCoords\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Gtk",
          "name": "renderToGtk",
          "package": "diagrams-gtk",
          "signature": "dc-\u003e QDiagram Cairo R2 m-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Render diagram to DrawableClass No rescaling or transformations will be performed Typically the diagram will already have been transformed by toGtkCoords",
          "hierarchy": "Diagrams Backend Gtk",
          "module": "Diagrams.Backend.Gtk",
          "name": "renderToGtk",
          "normalized": "a-\u003eQDiagram Cairo R b-\u003eIO()",
          "package": "diagrams-gtk",
          "partial": "To Gtk",
          "signature": "dc-\u003eQDiagram Cairo R m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-gtk/docs/Diagrams-Backend-Gtk.html#v:renderToGtk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Diagram to the backend coordinates.\n\u003c/p\u003e\u003cp\u003eProvided to Query the diagram with coordinates from a mouse click\n event.\n\u003c/p\u003e\u003cpre\u003e widget `on` buttonPressEvent $ tryEvent $ do\n   click \u003c- eventClick\n   (x,y) \u003c- eventCoordinates\n   let result = runQuery (query $ toGtkCoords myDiagram) (P (x,y))\n   do_something_with result\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etoGtkCoords\u003c/a\u003e\u003c/code\u003e does no rescaling of the diagram, however it is centered in\n the window.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Gtk",
          "name": "toGtkCoords",
          "package": "diagrams-gtk",
          "signature": "QDiagram Cairo R2 m -\u003e QDiagram Cairo R2 m",
          "source": "src/Diagrams-Backend-Gtk.html#toGtkCoords",
          "type": "function"
        },
        "index": {
          "description": "Convert Diagram to the backend coordinates Provided to Query the diagram with coordinates from mouse click event widget on buttonPressEvent tryEvent do click eventClick eventCoordinates let result runQuery query toGtkCoords myDiagram do something with result toGtkCoords does no rescaling of the diagram however it is centered in the window",
          "hierarchy": "Diagrams Backend Gtk",
          "module": "Diagrams.Backend.Gtk",
          "name": "toGtkCoords",
          "normalized": "QDiagram Cairo R a-\u003eQDiagram Cairo R a",
          "package": "diagrams-gtk",
          "partial": "Gtk Coords",
          "signature": "QDiagram Cairo R m-\u003eQDiagram Cairo R m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-gtk/docs/Diagrams-Backend-Gtk.html#v:toGtkCoords"
      }
    }
  ]
]