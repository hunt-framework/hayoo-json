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
        "word": "hcg-minus-cairo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering of \u003ca\u003eData.CG.Minus.Arrow\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Render.CG.Minus.Arrow",
          "name": "Arrow",
          "package": "hcg-minus-cairo",
          "source": "src/Render-CG-Minus-Arrow.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering of Data.CG.Minus.Arrow",
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "Arrow",
          "package": "hcg-minus-cairo",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender \u003ccode\u003e\u003ca\u003eLn\u003c/a\u003e\u003c/code\u003e with solid arrow tip at endpoint.  Arrow tip\n co-ordinates are given by \u003ccode\u003e\u003ca\u003earrow_coord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_ep",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e R -\u003e Ca -\u003e Ln R -\u003e Render ()",
          "source": "src/Render-CG-Minus-Arrow.html#arrow_ep",
          "type": "function"
        },
        "index": {
          "description": "Render Ln with solid arrow tip at endpoint Arrow tip co-ordinates are given by arrow coord",
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_ep",
          "normalized": "R-\u003eR-\u003eCa-\u003eLn R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eR-\u003eCa-\u003eLn R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#v:arrow_ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003earrow_ep\u003c/a\u003e\u003c/code\u003e with draws tip at mid-point of \u003ccode\u003e\u003ca\u003eLn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_mp",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e R -\u003e Ca -\u003e Ln R -\u003e Render ()",
          "source": "src/Render-CG-Minus-Arrow.html#arrow_mp",
          "type": "function"
        },
        "index": {
          "description": "Variant of arrow ep with draws tip at mid-point of Ln",
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_mp",
          "normalized": "R-\u003eR-\u003eCa-\u003eLn R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eR-\u003eCa-\u003eLn R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#v:arrow_mp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_strk",
          "package": "hcg-minus-cairo",
          "signature": "Ca -\u003e Render ()",
          "source": "src/Render-CG-Minus-Arrow.html#arrow_strk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrow_strk",
          "normalized": "Ca-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ca-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#v:arrow_strk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003earrow_ep\u003c/a\u003e\u003c/code\u003e to render \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e as sequence of arrows.\n\u003c/p\u003e",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrows_ep",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e R -\u003e Ca -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus-Arrow.html#arrows_ep",
          "type": "function"
        },
        "index": {
          "description": "Variant of arrow ep to render Ls as sequence of arrows",
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrows_ep",
          "normalized": "R-\u003eR-\u003eCa-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eR-\u003eCa-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#v:arrows_ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003earrow_mp\u003c/a\u003e\u003c/code\u003e to render \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e as sequence of arrows.\n\u003c/p\u003e",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrows_mp",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e R -\u003e Ca -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus-Arrow.html#arrows_mp",
          "type": "function"
        },
        "index": {
          "description": "Variant of arrow mp to render Ls as sequence of arrows",
          "hierarchy": "Render CG Minus Arrow",
          "module": "Render.CG.Minus.Arrow",
          "name": "arrows_mp",
          "normalized": "R-\u003eR-\u003eCa-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eR-\u003eCa-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus-Arrow.html#v:arrows_mp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCG (minus) rendering in terms of \u003ccode\u003e\u003ca\u003eRender\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Render.CG.Minus",
          "name": "Minus",
          "package": "hcg-minus-cairo",
          "source": "src/Render-CG-Minus.html",
          "type": "module"
        },
        "index": {
          "description": "CG minus rendering in terms of Render",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "Minus",
          "package": "hcg-minus-cairo",
          "partial": "Minus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of file types.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "File_Type",
          "package": "hcg-minus-cairo",
          "source": "src/Render-CG-Minus.html#File_Type",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of file types",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "File_Type",
          "package": "hcg-minus-cairo",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#t:File_Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Render.CG.Minus",
          "name": "F_PDF",
          "package": "hcg-minus-cairo",
          "signature": "F_PDF",
          "source": "src/Render-CG-Minus.html#File_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "F_PDF",
          "package": "hcg-minus-cairo",
          "partial": "PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:F_PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Render.CG.Minus",
          "name": "F_SVG",
          "package": "hcg-minus-cairo",
          "signature": "F_SVG",
          "source": "src/Render-CG-Minus.html#File_Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "F_SVG",
          "package": "hcg-minus-cairo",
          "partial": "SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:F_SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003epolygon\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003efill\u003c/code\u003e and \u003ccode\u003estroke\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "area",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e Ca -\u003e Ca -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#area",
          "type": "function"
        },
        "index": {
          "description": "Run polygon on Ls then fill and stroke",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "area",
          "normalized": "R-\u003eCa-\u003eCa-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eCa-\u003eCa-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003earea\u003c/a\u003e\u003c/code\u003e with fixed grey border of width \u003ccode\u003e0.005\u003c/code\u003e and\n grey \u003ccode\u003e0.15\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "area'",
          "package": "hcg-minus-cairo",
          "signature": "Ca -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#area%27",
          "type": "function"
        },
        "index": {
          "description": "Variant of area with fixed grey border of width and grey",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "area'",
          "normalized": "Ca-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ca-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:area-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircle centred at \u003ccode\u003e\u003ca\u003ePt\u003c/a\u003e\u003c/code\u003e with radius \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "circle",
          "package": "hcg-minus-cairo",
          "signature": "Pt R -\u003e R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#circle",
          "type": "function"
        },
        "index": {
          "description": "Circle centred at Pt with radius",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "circle",
          "normalized": "Pt R-\u003eR-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Pt R-\u003eR-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCa\u003c/a\u003e\u003c/code\u003e call to \u003ccode\u003e\u003ca\u003esetSourceRGBA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "colour",
          "package": "hcg-minus-cairo",
          "signature": "Ca -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#colour",
          "type": "function"
        },
        "index": {
          "description": "Ca call to setSourceRGBA",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "colour",
          "normalized": "Ca-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ca-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreyscale call to \u003ccode\u003e\u003ca\u003esetSourceRGBA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "grey",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#grey",
          "type": "function"
        },
        "index": {
          "description": "Greyscale call to setSourceRGBA",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "grey",
          "normalized": "R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003emoveTo\u003c/a\u003e\u003c/code\u003e then sequence of \u003ccode\u003e\u003ca\u003elineTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "line",
          "package": "hcg-minus-cairo",
          "signature": "Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#line",
          "type": "function"
        },
        "index": {
          "description": "Render Ls as moveTo then sequence of lineTo",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "line",
          "normalized": "Ls R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ls R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender nothing.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "nil",
          "package": "hcg-minus-cairo",
          "signature": "Render ()",
          "source": "src/Render-CG-Minus.html#nil",
          "type": "function"
        },
        "index": {
          "description": "Render nothing",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "nil",
          "normalized": "Render()",
          "package": "hcg-minus-cairo",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003epolygon\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e then \u003ccode\u003e\u003ca\u003epen\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estroke\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "outline",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e Ca -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#outline",
          "type": "function"
        },
        "index": {
          "description": "Run polygon on Ls then pen and stroke",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "outline",
          "normalized": "R-\u003eCa-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eCa-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:outline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet line width \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCa\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "pen",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e Ca -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#pen",
          "type": "function"
        },
        "index": {
          "description": "Set line width and Ca",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "pen",
          "normalized": "R-\u003eCa-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eCa-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:pen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender \u003ccode\u003e\u003ca\u003eLs\u003c/a\u003e\u003c/code\u003e as set of square points with \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e dimension.\n Runs \u003ccode\u003e\u003ca\u003efill\u003c/a\u003e\u003c/code\u003e on each square.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "points",
          "package": "hcg-minus-cairo",
          "signature": "R -\u003e Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#points",
          "type": "function"
        },
        "index": {
          "description": "Render Ls as set of square points with dimension Runs fill on each square",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "points",
          "normalized": "R-\u003eLs R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "R-\u003eLs R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e that runs \u003ccode\u003e\u003ca\u003eclosePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "polygon",
          "package": "hcg-minus-cairo",
          "signature": "Ls R -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#polygon",
          "type": "function"
        },
        "index": {
          "description": "Variant of line that runs closePath",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "polygon",
          "normalized": "Ls R-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ls R-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender rectangle given colour \u003ccode\u003e\u003ca\u003eCa\u003c/a\u003e\u003c/code\u003e, upper-left \u003ccode\u003e\u003ca\u003ePt\u003c/a\u003e\u003c/code\u003e and\n \u003cem\u003e(width,height)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "rect",
          "package": "hcg-minus-cairo",
          "signature": "Ca -\u003e Pt R -\u003e (R, R) -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#rect",
          "type": "function"
        },
        "index": {
          "description": "Render rectangle given colour Ca upper-left Pt and width height",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "rect",
          "normalized": "Ca-\u003ePt R-\u003e(R,R)-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ca-\u003ePt R-\u003e(R,R)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender to \u003ccode\u003e\u003ca\u003eFile_Type\u003c/a\u003e\u003c/code\u003e.  (w,h) give the page size.  The\n appropriate extension is appended to \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "render_to_file",
          "package": "hcg-minus-cairo",
          "signature": "File_Type -\u003e (R, R) -\u003e FilePath -\u003e Render () -\u003e IO ()",
          "source": "src/Render-CG-Minus.html#render_to_file",
          "type": "function"
        },
        "index": {
          "description": "Render to File Type give the page size The appropriate extension is appended to FilePath",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "render_to_file",
          "normalized": "File_Type-\u003e(R,R)-\u003eFilePath-\u003eRender()-\u003eIO()",
          "package": "hcg-minus-cairo",
          "signature": "File_Type-\u003e(R,R)-\u003eFilePath-\u003eRender()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:render_to_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender text \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in colour \u003ccode\u003e\u003ca\u003eCa\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ePt\u003c/a\u003e\u003c/code\u003e in font size \u003cem\u003esz\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Render.CG.Minus",
          "name": "text",
          "package": "hcg-minus-cairo",
          "signature": "Ca -\u003e Pt R -\u003e R -\u003e String -\u003e Render ()",
          "source": "src/Render-CG-Minus.html#text",
          "type": "function"
        },
        "index": {
          "description": "Render text String in colour Ca at Pt in font size sz",
          "hierarchy": "Render CG Minus",
          "module": "Render.CG.Minus",
          "name": "text",
          "normalized": "Ca-\u003ePt R-\u003eR-\u003eString-\u003eRender()",
          "package": "hcg-minus-cairo",
          "signature": "Ca-\u003ePt R-\u003eR-\u003eString-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcg-minus-cairo/docs/Render-CG-Minus.html#v:text"
      }
    }
  ]
]