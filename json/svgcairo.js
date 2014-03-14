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
        "word": "svgcairo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe SVG extension to the Cairo 2D graphics library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "SVG",
          "package": "svgcairo",
          "source": "src/Graphics-Rendering-Cairo-SVG.html",
          "type": "module"
        },
        "index": {
          "description": "The SVG extension to the Cairo graphics library",
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "SVG",
          "package": "svgcairo",
          "partial": "SVG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "SVG",
          "package": "svgcairo",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#SVG",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "SVG",
          "package": "svgcairo",
          "partial": "SVG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#t:SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the width and height of the SVG image.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgGetSize",
          "package": "svgcairo",
          "signature": "SVG-\u003e (Int, Int)",
          "type": "function"
        },
        "index": {
          "description": "Get the width and height of the SVG image",
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgGetSize",
          "normalized": "SVG-\u003e(Int,Int)",
          "package": "svgcairo",
          "partial": "Get Size",
          "signature": "SVG-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgGetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromFile",
          "package": "svgcairo",
          "signature": "FilePath -\u003e IO SVG",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgNewFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromFile",
          "normalized": "FilePath-\u003eIO SVG",
          "package": "svgcairo",
          "partial": "New From File",
          "signature": "FilePath-\u003eIO SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgNewFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromHandle",
          "package": "svgcairo",
          "signature": "Handle -\u003e IO SVG",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgNewFromHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromHandle",
          "normalized": "Handle-\u003eIO SVG",
          "package": "svgcairo",
          "partial": "New From Handle",
          "signature": "Handle-\u003eIO SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgNewFromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromString",
          "package": "svgcairo",
          "signature": "String -\u003e IO SVG",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgNewFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgNewFromString",
          "normalized": "String-\u003eIO SVG",
          "package": "svgcairo",
          "partial": "New From String",
          "signature": "String-\u003eIO SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgNewFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender an SVG file\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003eFalse\u003c/code\u003e if an error was detected.\n On librsvg before 2.22.3, \u003ccode\u003esvgRender\u003c/code\u003e always returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRender",
          "package": "svgcairo",
          "signature": "SVG -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgRender",
          "type": "function"
        },
        "index": {
          "description": "render an SVG file Returns False if an error was detected On librsvg before svgRender always returns True",
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRender",
          "normalized": "SVG-\u003eRender Bool",
          "package": "svgcairo",
          "partial": "Render",
          "signature": "SVG-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromFile",
          "package": "svgcairo",
          "signature": "FilePath -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgRenderFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromFile",
          "normalized": "FilePath-\u003eRender Bool",
          "package": "svgcairo",
          "partial": "Render From File",
          "signature": "FilePath-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgRenderFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromHandle",
          "package": "svgcairo",
          "signature": "Handle -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgRenderFromHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromHandle",
          "normalized": "Handle-\u003eRender Bool",
          "package": "svgcairo",
          "partial": "Render From Handle",
          "signature": "Handle-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgRenderFromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromString",
          "package": "svgcairo",
          "signature": "String -\u003e Render Bool",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#svgRenderFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "svgRenderFromString",
          "normalized": "String-\u003eRender Bool",
          "package": "svgcairo",
          "partial": "Render From String",
          "signature": "String-\u003eRender Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:svgRenderFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromFile",
          "package": "svgcairo",
          "signature": "FilePath -\u003e (SVG -\u003e Render a) -\u003e Render a",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#withSvgFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromFile",
          "normalized": "FilePath-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "package": "svgcairo",
          "partial": "Svg From File",
          "signature": "FilePath-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:withSvgFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromHandle",
          "package": "svgcairo",
          "signature": "Handle -\u003e (SVG -\u003e Render a) -\u003e Render a",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#withSvgFromHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromHandle",
          "normalized": "Handle-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "package": "svgcairo",
          "partial": "Svg From Handle",
          "signature": "Handle-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:withSvgFromHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromString",
          "package": "svgcairo",
          "signature": "String -\u003e (SVG -\u003e Render a) -\u003e Render a",
          "source": "src/Graphics-Rendering-Cairo-SVG.html#withSvgFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Cairo SVG",
          "module": "Graphics.Rendering.Cairo.SVG",
          "name": "withSvgFromString",
          "normalized": "String-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "package": "svgcairo",
          "partial": "Svg From String",
          "signature": "String-\u003e(SVG-\u003eRender a)-\u003eRender a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/svgcairo/docs/Graphics-Rendering-Cairo-SVG.html#v:withSvgFromString"
      }
    }
  ]
]