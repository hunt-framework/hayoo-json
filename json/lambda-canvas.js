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
        "word": "lambda-canvas"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.LambdaCanvas",
          "name": "LambdaCanvas",
          "package": "lambda-canvas",
          "source": "src/Graphics-LambdaCanvas.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "LambdaCanvas",
          "package": "lambda-canvas",
          "partial": "Lambda Canvas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.LambdaCanvas",
          "name": "Point",
          "package": "lambda-canvas",
          "source": "src/Graphics-LambdaCanvas.html#Point",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Point",
          "package": "lambda-canvas",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification of the way the vertices given during \u003ccode\u003erenderPrimitive\u003c/code\u003e are\n interpreted. In the description of the constructors, \u003cem\u003en\u003c/em\u003e is an integer count\n starting at one, and \u003cem\u003eN\u003c/em\u003e is the total number of vertices specified.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "PrimitiveMode",
          "package": "lambda-canvas",
          "type": "data"
        },
        "index": {
          "description": "Specification of the way the vertices given during renderPrimitive are interpreted In the description of the constructors is an integer count starting at one and is the total number of vertices specified",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "PrimitiveMode",
          "package": "lambda-canvas",
          "partial": "Primitive Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#t:PrimitiveMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a connected group of line segments from the first vertex to the\n last, then back to the first. Vertices \u003cem\u003en\u003c/em\u003e and \u003cem\u003en\u003c/em\u003e+1 define line \u003cem\u003en\u003c/em\u003e.\n The last line, however, is defined by vertices \u003cem\u003eN\u003c/em\u003e and 1. \u003cem\u003eN\u003c/em\u003e lines\n are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "LineLoop",
          "package": "lambda-canvas",
          "signature": "LineLoop",
          "type": "function"
        },
        "index": {
          "description": "Draws connected group of line segments from the first vertex to the last then back to the first Vertices and define line The last line however is defined by vertices and lines are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "LineLoop",
          "package": "lambda-canvas",
          "partial": "Line Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:LineLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a connected group of line  segments from the first vertex to the\n last. Vertices \u003cem\u003en\u003c/em\u003e and \u003cem\u003en\u003c/em\u003e+1 define line \u003cem\u003en\u003c/em\u003e. \u003cem\u003eN\u003c/em\u003e-1 lines are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "LineStrip",
          "package": "lambda-canvas",
          "signature": "LineStrip",
          "type": "function"
        },
        "index": {
          "description": "Draws connected group of line segments from the first vertex to the last Vertices and define line lines are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "LineStrip",
          "package": "lambda-canvas",
          "partial": "Line Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:LineStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreats each pair of vertices as an independent line segment. Vertices\n 2\u003cem\u003en\u003c/em\u003e-1 and 2\u003cem\u003en\u003c/em\u003e define line \u003cem\u003en\u003c/em\u003e. \u003cem\u003eN\u003c/em\u003e/2 lines are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "Lines",
          "package": "lambda-canvas",
          "signature": "Lines",
          "type": "function"
        },
        "index": {
          "description": "Treats each pair of vertices as an independent line segment Vertices and define line lines are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Lines",
          "package": "lambda-canvas",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreats each vertex as a single point. Vertex \u003cem\u003en\u003c/em\u003e defines point \u003cem\u003en\u003c/em\u003e.\n \u003cem\u003eN\u003c/em\u003e points are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "Points",
          "package": "lambda-canvas",
          "signature": "Points",
          "type": "function"
        },
        "index": {
          "description": "Treats each vertex as single point Vertex defines point points are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Points",
          "package": "lambda-canvas",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a single, convex polygon. Vertices 1 through \u003cem\u003eN\u003c/em\u003e define this\n polygon.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "Polygon",
          "package": "lambda-canvas",
          "signature": "Polygon",
          "type": "function"
        },
        "index": {
          "description": "Draws single convex polygon Vertices through define this polygon",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Polygon",
          "package": "lambda-canvas",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a connected group of quadrilaterals. One quadrilateral is\ndefined for each pair of vertices presented after the first pair.\n Vertices 2\u003cem\u003en\u003c/em\u003e-1, 2\u003cem\u003en\u003c/em\u003e, 2\u003cem\u003en\u003c/em\u003e+2, and 2\u003cem\u003en\u003c/em\u003e+1 define quadrilateral \u003cem\u003en\u003c/em\u003e.\n \u003cem\u003eN\u003c/em\u003e/2-1 quadrilaterals are drawn. Note that the order in which vertices\n are used to construct a quadrilateral from strip data is different from\n that used with independent data.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "QuadStrip",
          "package": "lambda-canvas",
          "signature": "QuadStrip",
          "type": "function"
        },
        "index": {
          "description": "Draws connected group of quadrilaterals One quadrilateral is defined for each pair of vertices presented after the first pair Vertices and define quadrilateral quadrilaterals are drawn Note that the order in which vertices are used to construct quadrilateral from strip data is different from that used with independent data",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "QuadStrip",
          "package": "lambda-canvas",
          "partial": "Quad Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:QuadStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreats each group of four vertices as an independent quadrilateral.\n Vertices 4\u003cem\u003en\u003c/em\u003e-3, 4\u003cem\u003en\u003c/em\u003e-2, 4\u003cem\u003en\u003c/em\u003e-1, and 4\u003cem\u003en\u003c/em\u003e define quadrilateral \u003cem\u003en\u003c/em\u003e.\n \u003cem\u003eN\u003c/em\u003e/4 quadrilaterals are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "Quads",
          "package": "lambda-canvas",
          "signature": "Quads",
          "type": "function"
        },
        "index": {
          "description": "Treats each group of four vertices as an independent quadrilateral Vertices and define quadrilateral quadrilaterals are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Quads",
          "package": "lambda-canvas",
          "partial": "Quads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:Quads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a connected group of triangles. One triangle is defined for each\n vertex presented after the first two vertices. Vertices 1, \u003cem\u003en\u003c/em\u003e+1, and\n \u003cem\u003en\u003c/em\u003e+2 define triangle \u003cem\u003en\u003c/em\u003e. \u003cem\u003eN\u003c/em\u003e-2 triangles are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "TriangleFan",
          "package": "lambda-canvas",
          "signature": "TriangleFan",
          "type": "function"
        },
        "index": {
          "description": "Draws connected group of triangles One triangle is defined for each vertex presented after the first two vertices Vertices and define triangle triangles are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "TriangleFan",
          "package": "lambda-canvas",
          "partial": "Triangle Fan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:TriangleFan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a connected group of triangles. One triangle is defined for each\n vertex presented after the first two vertices. For odd \u003cem\u003en\u003c/em\u003e, vertices\n \u003cem\u003en\u003c/em\u003e, \u003cem\u003en\u003c/em\u003e+1, and \u003cem\u003en\u003c/em\u003e+2 define triangle \u003cem\u003en\u003c/em\u003e. For even \u003cem\u003en\u003c/em\u003e, vertices \u003cem\u003en\u003c/em\u003e+1,\n \u003cem\u003en\u003c/em\u003e, and \u003cem\u003en\u003c/em\u003e+2 define triangle \u003cem\u003en\u003c/em\u003e. \u003cem\u003eN\u003c/em\u003e-2 triangles are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "TriangleStrip",
          "package": "lambda-canvas",
          "signature": "TriangleStrip",
          "type": "function"
        },
        "index": {
          "description": "Draws connected group of triangles One triangle is defined for each vertex presented after the first two vertices For odd vertices and define triangle For even vertices and define triangle triangles are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "TriangleStrip",
          "package": "lambda-canvas",
          "partial": "Triangle Strip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:TriangleStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreats each triplet of vertices as an independent triangle. Vertices\n \u003cem\u003e3n-2\u003c/em\u003e, \u003cem\u003e3n-1\u003c/em\u003e, and \u003cem\u003e3n\u003c/em\u003e define triangle \u003cem\u003en\u003c/em\u003e. \u003cem\u003eN\\\u003c/em\u003e3/ triangles are drawn.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "Triangles",
          "package": "lambda-canvas",
          "signature": "Triangles",
          "type": "function"
        },
        "index": {
          "description": "Treats each triplet of vertices as an independent triangle Vertices n-2 n-1 and define triangle triangles are drawn",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "Triangles",
          "package": "lambda-canvas",
          "partial": "Triangles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:Triangles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a canvas suitable for animation.\n The drawing block is invoked on each redisplay\n and is passed the current timestamp.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "animate",
          "package": "lambda-canvas",
          "signature": "String -\u003e (POSIXTime -\u003e IO ()) -\u003e IO ()",
          "source": "src/Graphics-LambdaCanvas.html#animate",
          "type": "function"
        },
        "index": {
          "description": "Create canvas suitable for animation The drawing block is invoked on each redisplay and is passed the current timestamp",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "animate",
          "normalized": "String-\u003e(POSIXTime-\u003eIO())-\u003eIO()",
          "package": "lambda-canvas",
          "signature": "String-\u003e(POSIXTime-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:animate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a canvas suitable for drawing a static picture.\n The drawing block is invoked on each redisplay.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "draw",
          "package": "lambda-canvas",
          "signature": "String -\u003e IO () -\u003e IO ()",
          "source": "src/Graphics-LambdaCanvas.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Create canvas suitable for drawing static picture The drawing block is invoked on each redisplay",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "draw",
          "normalized": "String-\u003eIO()-\u003eIO()",
          "package": "lambda-canvas",
          "signature": "String-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a primitive from a set of a vertices on screen.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "put",
          "package": "lambda-canvas",
          "signature": "PrimitiveMode -\u003e [Point] -\u003e IO ()",
          "source": "src/Graphics-LambdaCanvas.html#put",
          "type": "function"
        },
        "index": {
          "description": "Draw primitive from set of vertices on screen",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "put",
          "normalized": "PrimitiveMode-\u003e[Point]-\u003eIO()",
          "package": "lambda-canvas",
          "signature": "PrimitiveMode-\u003e[Point]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an amount of steps and a timestamp, calculate current step number.\n Step numbers begin with 0.\n\u003c/p\u003e",
          "module": "Graphics.LambdaCanvas",
          "name": "stepOf",
          "package": "lambda-canvas",
          "signature": "Integer -\u003e POSIXTime -\u003e a",
          "source": "src/Graphics-LambdaCanvas.html#stepOf",
          "type": "function"
        },
        "index": {
          "description": "Given an amount of steps and timestamp calculate current step number Step numbers begin with",
          "hierarchy": "Graphics LambdaCanvas",
          "module": "Graphics.LambdaCanvas",
          "name": "stepOf",
          "normalized": "Integer-\u003ePOSIXTime-\u003ea",
          "package": "lambda-canvas",
          "partial": "Of",
          "signature": "Integer-\u003ePOSIXTime-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lambda-canvas/docs/Graphics-LambdaCanvas.html#v:stepOf"
      }
    }
  ]
]