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
        "word": "ghci-diagrams"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "DrawDiagrams",
          "package": "ghci-diagrams",
          "source": "src/DrawDiagrams.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "DrawDiagrams",
          "package": "ghci-diagrams",
          "partial": "Draw Diagrams",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e type class encompasses color representations which\n   can be used by the Diagrams library; that is, every function in\n   the Diagrams library which expects a color can take any type\n   which is an instance of \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e.  Instances are provided for both\n   the \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlphaColour\u003c/a\u003e\u003c/code\u003e types from\n   the \u003ca\u003eData.Colour\u003c/a\u003e library.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "Color",
          "package": "ghci-diagrams",
          "type": "class"
        },
        "index": {
          "description": "The Color type class encompasses color representations which can be used by the Diagrams library that is every function in the Diagrams library which expects color can take any type which is an instance of Color Instances are provided for both the Colour and AlphaColour types from the Data.Colour library",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "Color",
          "package": "ghci-diagrams",
          "partial": "Color",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e is the core data type which describes a diagram.\n   \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003es may be constructed, transformed, combined, and\n   ultimately rendered as an image.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "Diagram",
          "package": "ghci-diagrams",
          "type": "data"
        },
        "index": {
          "description": "Diagram is the core data type which describes diagram Diagram may be constructed transformed combined and ultimately rendered as an image",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "Diagram",
          "package": "ghci-diagrams",
          "partial": "Diagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#t:Diagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic 2D points/vectors.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "Point",
          "package": "ghci-diagrams",
          "type": "type"
        },
        "index": {
          "description": "Basic points vectors",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "Point",
          "package": "ghci-diagrams",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar multiplication.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "(*.)",
          "package": "ghci-diagrams",
          "signature": "Double -\u003e Point -\u003e Point",
          "type": "function"
        },
        "index": {
          "description": "Scalar multiplication",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(*.) *.",
          "normalized": "Double-\u003ePoint-\u003ePoint",
          "package": "ghci-diagrams",
          "signature": "Double-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "(\u003c|\u003e)",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e Diagram -\u003e Diagram",
          "source": "src/Diagrams.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Diagram-\u003eDiagram-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003eDiagram-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "(\u003e-\u003c)",
          "package": "ghci-diagrams",
          "signature": "Point -\u003e Point -\u003e Diagram",
          "source": "src/Diagrams.html#%3E-%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(\u003e-\u003c) \u003e-\u003c",
          "normalized": "Point-\u003ePoint-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Point-\u003ePoint-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:-62--45--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "(.*.)",
          "package": "ghci-diagrams",
          "signature": "Point -\u003e Point -\u003e Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(.*.) .*.",
          "normalized": "Point-\u003ePoint-\u003ePoint",
          "package": "ghci-diagrams",
          "signature": "Point-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "(.+.)",
          "package": "ghci-diagrams",
          "signature": "Point -\u003e Point -\u003e Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(.+.) .+.",
          "normalized": "Point-\u003ePoint-\u003ePoint",
          "package": "ghci-diagrams",
          "signature": "Point-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:.-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElementwise addition, subtraction and multiplication for \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "(.-.)",
          "package": "ghci-diagrams",
          "signature": "Point -\u003e Point -\u003e Point",
          "type": "function"
        },
        "index": {
          "description": "Elementwise addition subtraction and multiplication for Point",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "(.-.) .-.",
          "normalized": "Point-\u003ePoint-\u003ePoint",
          "package": "ghci-diagrams",
          "signature": "Point-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:.-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "circle",
          "package": "ghci-diagrams",
          "signature": "Double -\u003e Diagram",
          "source": "src/Diagrams.html#circle",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "circle",
          "normalized": "Double-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Double-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "draw",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e IO ()",
          "source": "src/DrawDiagrams.html#draw",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "draw",
          "normalized": "Diagram-\u003eIO()",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "drawOn",
          "package": "ghci-diagrams",
          "signature": "Int -\u003e Int -\u003e Diagram -\u003e IO ()",
          "source": "src/DrawDiagrams.html#drawOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "drawOn",
          "normalized": "Int-\u003eInt-\u003eDiagram-\u003eIO()",
          "package": "ghci-diagrams",
          "partial": "On",
          "signature": "Int-\u003eInt-\u003eDiagram-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:drawOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "fill",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e c -\u003e Diagram",
          "source": "src/Diagrams.html#fill",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "fill",
          "normalized": "Diagram-\u003ea-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003ec-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "move",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e (Double, Double) -\u003e Diagram",
          "source": "src/Diagrams.html#move",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "move",
          "normalized": "Diagram-\u003e(Double,Double)-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003e(Double,Double)-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "polygon",
          "package": "ghci-diagrams",
          "signature": "[Point] -\u003e Diagram",
          "source": "src/Diagrams.html#polygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "polygon",
          "normalized": "[Point]-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "[Point]-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "polyline",
          "package": "ghci-diagrams",
          "signature": "[Point] -\u003e Diagram",
          "source": "src/Diagrams.html#polyline",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "polyline",
          "normalized": "[Point]-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "[Point]-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:polyline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erect w h\u003c/code\u003e is a rectangle of width \u003ccode\u003ew\u003c/code\u003e and height \u003ccode\u003eh\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "rect",
          "package": "ghci-diagrams",
          "signature": "Double -\u003e Double -\u003e Diagram",
          "type": "function"
        },
        "index": {
          "description": "rect is rectangle of width and height",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "rect",
          "normalized": "Double-\u003eDouble-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Double-\u003eDouble-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e from RGB values using the \u003cem\u003elinear\u003c/em\u003e RGB colour\n with the same gamut as sRGB.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "rgb",
          "package": "ghci-diagrams",
          "signature": "a -\u003e a -\u003e a -\u003e Colour a",
          "type": "function"
        },
        "index": {
          "description": "Constructs Colour from RGB values using the linear RGB colour with the same gamut as sRGB",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "rgb",
          "normalized": "a-\u003ea-\u003ea-\u003eColour a",
          "package": "ghci-diagrams",
          "signature": "a-\u003ea-\u003ea-\u003eColour a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "rotate",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e Double -\u003e Diagram",
          "source": "src/Diagrams.html#rotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "rotate",
          "normalized": "Diagram-\u003eDouble-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003eDouble-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "scale",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e Double -\u003e Diagram",
          "source": "src/Diagrams.html#scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "scale",
          "normalized": "Diagram-\u003eDouble-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003eDouble-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a diagram along the y-axis only.  \u003ccode\u003escaleY s\u003c/code\u003e is equivalent\n   to \u003ccode\u003estretch 1 s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "scaleY",
          "package": "ghci-diagrams",
          "signature": "Double -\u003e Diagram -\u003e Diagram",
          "type": "function"
        },
        "index": {
          "description": "Scale diagram along the y-axis only scaleY is equivalent to stretch",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "scaleY",
          "normalized": "Double-\u003eDiagram-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Double-\u003eDiagram-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:scaleY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "stroke",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e c -\u003e Diagram",
          "source": "src/Diagrams.html#stroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "stroke",
          "normalized": "Diagram-\u003ea-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "Diagram-\u003ec-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DrawDiagrams",
          "name": "strokeWidth",
          "package": "ghci-diagrams",
          "signature": "Diagram -\u003e Double -\u003e Diagram",
          "source": "src/Diagrams.html#strokeWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "strokeWidth",
          "normalized": "Diagram-\u003eDouble-\u003eDiagram",
          "package": "ghci-diagrams",
          "partial": "Width",
          "signature": "Diagram-\u003eDouble-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:strokeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e as a union of subdiagrams which will not be\n   repositioned.  If the subdiagrams overlap, they will appear with\n   the first \u003ccode\u003e\u003ca\u003eDiagram\u003c/a\u003e\u003c/code\u003e on the bottom, and the last on top.\n\u003c/p\u003e",
          "module": "DrawDiagrams",
          "name": "union",
          "package": "ghci-diagrams",
          "signature": "[Diagram] -\u003e Diagram",
          "type": "function"
        },
        "index": {
          "description": "Create Diagram as union of subdiagrams which will not be repositioned If the subdiagrams overlap they will appear with the first Diagram on the bottom and the last on top",
          "hierarchy": "DrawDiagrams",
          "module": "DrawDiagrams",
          "name": "union",
          "normalized": "[Diagram]-\u003eDiagram",
          "package": "ghci-diagrams",
          "signature": "[Diagram]-\u003eDiagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghci-diagrams/docs/DrawDiagrams.html#v:union"
      }
    }
  ]
]