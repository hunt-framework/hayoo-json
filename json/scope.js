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
        "word": "scope"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLayers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scope.Layer",
          "name": "Layer",
          "package": "scope",
          "source": "src/Scope-Layer.html",
          "type": "module"
        },
        "index": {
          "description": "Layers",
          "hierarchy": "Scope Layer",
          "module": "Scope.Layer",
          "name": "Layer",
          "package": "scope",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Layer",
          "name": "addLayersFromFile",
          "package": "scope",
          "signature": "FilePath -\u003e Scope ui -\u003e IO (Scope ui)",
          "source": "src/Scope-Layer.html#addLayersFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Layer",
          "module": "Scope.Layer",
          "name": "addLayersFromFile",
          "normalized": "FilePath-\u003eScope a-\u003eIO(Scope a)",
          "package": "scope",
          "partial": "Layers From File",
          "signature": "FilePath-\u003eScope ui-\u003eIO(Scope ui)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Layer.html#v:addLayersFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Layer",
          "name": "plotLayers",
          "package": "scope",
          "signature": "Scope ui -\u003e m (Scope ui)",
          "source": "src/Scope-Layer.html#plotLayers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Layer",
          "module": "Scope.Layer",
          "name": "plotLayers",
          "normalized": "Scope a-\u003eb(Scope a)",
          "package": "scope",
          "partial": "Layers",
          "signature": "Scope ui-\u003em(Scope ui)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Layer.html#v:plotLayers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScope plotting functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scope.Numeric.IEEE754",
          "name": "IEEE754",
          "package": "scope",
          "source": "src/Scope-Numeric-IEEE754.html",
          "type": "module"
        },
        "index": {
          "description": "Scope plotting functions",
          "hierarchy": "Scope Numeric IEEE754",
          "module": "Scope.Numeric.IEEE754",
          "name": "IEEE754",
          "package": "scope",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Numeric-IEEE754.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScope types and interfaces\n\u003c/p\u003e\u003cp\u003eThe coordinate system:\n\u003c/p\u003e\u003cpre\u003e\n           CanvasX 0.0                       CanvasX 1.0    DataX 1.0\n              |                                 |              |\n DataX 0.0    V                                 V              V\n    |\n    V          ---------------------------------   \u003c- CanvasY -1.0\n              |                                 |\n    +---------+---------------------------------+--------------+\n    |         |                                 |              |\n    |         |                                 |              |\n    +---------+---------------------------------+--------------+\n              |                                 |\n               ---------------------------------   \u003c- CanvasY -1.0\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Scope.Types",
          "name": "Types",
          "package": "scope",
          "source": "src/Scope-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Scope types and interfaces The coordinate system CanvasX CanvasX DataX DataX CanvasY CanvasY",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Types",
          "package": "scope",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "CanvasX",
          "package": "scope",
          "source": "src/Scope-Types.html#CanvasX",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "CanvasX",
          "package": "scope",
          "partial": "Canvas",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:CanvasX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "CanvasY",
          "package": "scope",
          "source": "src/Scope-Types.html#CanvasY",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "CanvasY",
          "package": "scope",
          "partial": "Canvas",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:CanvasY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Coordinate",
          "package": "scope",
          "source": "src/Scope-Types.html#Coordinate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Coordinate",
          "package": "scope",
          "partial": "Coordinate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:Coordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DataX",
          "package": "scope",
          "source": "src/Scope-Types.html#DataX",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DataX",
          "package": "scope",
          "partial": "Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:DataX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DataY",
          "package": "scope",
          "source": "src/Scope-Types.html#DataY",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DataY",
          "package": "scope",
          "partial": "Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:DataY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DrawCmd",
          "package": "scope",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DrawCmd",
          "package": "scope",
          "partial": "Draw Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:DrawCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DrawLayer",
          "package": "scope",
          "source": "src/Scope-Types.html#DrawLayer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DrawLayer",
          "package": "scope",
          "partial": "Draw Layer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:DrawLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Layer",
          "package": "scope",
          "source": "src/Scope-Types.html#Layer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Layer",
          "package": "scope",
          "partial": "Layer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA layer plotting function which is given the x position and x width,\n and a previously returned value of type \u003ccode\u003e\u003ca\u003eb\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Scope.Types",
          "name": "LayerFoldFunc",
          "package": "scope",
          "source": "src/Scope-Types.html#LayerFoldFunc",
          "type": "type"
        },
        "index": {
          "description": "layer plotting function which is given the position and width and previously returned value of type",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LayerFoldFunc",
          "package": "scope",
          "partial": "Layer Fold Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:LayerFoldFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA layer plotting function which is just given the x position and x width\n to render the data value of type \u003ccode\u003ea\u003c/code\u003e into.\n\u003c/p\u003e",
          "module": "Scope.Types",
          "name": "LayerMapFunc",
          "package": "scope",
          "source": "src/Scope-Types.html#LayerMapFunc",
          "type": "type"
        },
        "index": {
          "description": "layer plotting function which is just given the position and width to render the data value of type into",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LayerMapFunc",
          "package": "scope",
          "partial": "Layer Map Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:LayerMapFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "LayerPlot",
          "package": "scope",
          "source": "src/Scope-Types.html#LayerPlot",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LayerPlot",
          "package": "scope",
          "partial": "Layer Plot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:LayerPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "RGB",
          "package": "scope",
          "source": "src/Scope-Types.html#RGB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "RGB",
          "package": "scope",
          "partial": "RGB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Scope",
          "package": "scope",
          "source": "src/Scope-Types.html#Scope",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Scope",
          "package": "scope",
          "partial": "Scope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:Scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopeFile",
          "package": "scope",
          "source": "src/Scope-Types.html#ScopeFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopeFile",
          "package": "scope",
          "partial": "Scope File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScopeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopeLayer",
          "package": "scope",
          "source": "src/Scope-Types.html#ScopeLayer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopeLayer",
          "package": "scope",
          "partial": "Scope Layer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScopeLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopePlot",
          "package": "scope",
          "source": "src/Scope-Types.html#ScopePlot",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopePlot",
          "package": "scope",
          "partial": "Scope Plot",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScopePlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopeRender",
          "package": "scope",
          "source": "src/Scope-Types.html#ScopeRender",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopeRender",
          "package": "scope",
          "partial": "Scope Render",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScopeRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScreenX",
          "package": "scope",
          "source": "src/Scope-Types.html#ScreenX",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScreenX",
          "package": "scope",
          "partial": "Screen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScreenX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScreenY",
          "package": "scope",
          "source": "src/Scope-Types.html#ScreenY",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScreenY",
          "package": "scope",
          "partial": "Screen",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:ScreenY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Transform",
          "package": "scope",
          "source": "src/Scope-Types.html#Transform",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Transform",
          "package": "scope",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "View",
          "package": "scope",
          "source": "src/Scope-Types.html#View",
          "type": "data"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "View",
          "package": "scope",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "CanvasX",
          "package": "scope",
          "signature": "CanvasX Double",
          "source": "src/Scope-Types.html#CanvasX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "CanvasX",
          "package": "scope",
          "partial": "Canvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:CanvasX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "CanvasY",
          "package": "scope",
          "signature": "CanvasY Double",
          "source": "src/Scope-Types.html#CanvasY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "CanvasY",
          "package": "scope",
          "partial": "Canvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:CanvasY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DataX",
          "package": "scope",
          "signature": "DataX Double",
          "source": "src/Scope-Types.html#DataX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DataX",
          "package": "scope",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:DataX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "DataY",
          "package": "scope",
          "signature": "DataY Double",
          "source": "src/Scope-Types.html#DataY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "DataY",
          "package": "scope",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:DataY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "FillPoly",
          "package": "scope",
          "signature": "FillPoly [(Double, Double)]",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "FillPoly",
          "normalized": "FillPoly[(Double,Double)]",
          "package": "scope",
          "partial": "Fill Poly",
          "signature": "FillPoly[(Double,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:FillPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Layer",
          "package": "scope",
          "signature": "Layer",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Layer",
          "package": "scope",
          "partial": "Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "LayerFold",
          "package": "scope",
          "signature": "forall b . LayerFold (LayerFoldFunc a b) [DrawLayer] b",
          "source": "src/Scope-Types.html#LayerPlot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LayerFold",
          "normalized": "a b LayerFold(LayerFoldFunc c b)[DrawLayer]b",
          "package": "scope",
          "partial": "Layer Fold",
          "signature": "forall b LayerFold(LayerFoldFunc a b)[DrawLayer]b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:LayerFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "LayerMap",
          "package": "scope",
          "signature": "LayerMap (LayerMapFunc a) [DrawLayer]",
          "source": "src/Scope-Types.html#LayerPlot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LayerMap",
          "normalized": "LayerMap(LayerMapFunc a)[DrawLayer]",
          "package": "scope",
          "partial": "Layer Map",
          "signature": "LayerMap(LayerMapFunc a)[DrawLayer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:LayerMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "LineTo",
          "package": "scope",
          "signature": "LineTo (Double, Double)",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "LineTo",
          "normalized": "LineTo(Double,Double)",
          "package": "scope",
          "partial": "Line To",
          "signature": "LineTo(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:LineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "MoveTo",
          "package": "scope",
          "signature": "MoveTo (Double, Double)",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "MoveTo",
          "normalized": "MoveTo(Double,Double)",
          "package": "scope",
          "partial": "Move To",
          "signature": "MoveTo(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:MoveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Scope",
          "package": "scope",
          "signature": "Scope",
          "source": "src/Scope-Types.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Scope",
          "package": "scope",
          "partial": "Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:Scope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopeFile",
          "package": "scope",
          "signature": "ScopeFile",
          "source": "src/Scope-Types.html#ScopeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopeFile",
          "package": "scope",
          "partial": "Scope File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:ScopeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScopeLayer",
          "package": "scope",
          "signature": "ScopeLayer (Layer a)",
          "source": "src/Scope-Types.html#ScopeLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScopeLayer",
          "package": "scope",
          "partial": "Scope Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:ScopeLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScreenX",
          "package": "scope",
          "signature": "ScreenX Double",
          "source": "src/Scope-Types.html#ScreenX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScreenX",
          "package": "scope",
          "partial": "Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:ScreenX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "ScreenY",
          "package": "scope",
          "signature": "ScreenY Double",
          "source": "src/Scope-Types.html#ScreenY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "ScreenY",
          "package": "scope",
          "partial": "Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:ScreenY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "SetRGB",
          "package": "scope",
          "signature": "SetRGB Double Double Double",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "SetRGB",
          "package": "scope",
          "partial": "Set RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:SetRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "SetRGBA",
          "package": "scope",
          "signature": "SetRGBA Double Double Double Double",
          "source": "src/Scope-Types.html#DrawCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "SetRGBA",
          "package": "scope",
          "partial": "Set RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:SetRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "Transform",
          "package": "scope",
          "signature": "Transform",
          "source": "src/Scope-Types.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "Transform",
          "package": "scope",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "View",
          "package": "scope",
          "signature": "View",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "View",
          "package": "scope",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "b",
          "package": "scope",
          "signature": "a",
          "source": "src/Scope-Types.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "b",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "bounds",
          "package": "scope",
          "signature": "Maybe (TimeStamp, TimeStamp)",
          "source": "src/Scope-Types.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "bounds",
          "normalized": "Maybe(TimeStamp,TimeStamp)",
          "package": "scope",
          "signature": "Maybe(TimeStamp,TimeStamp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "convEnee",
          "package": "scope",
          "signature": "Enumeratee [Offset Block] [a] m ()",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "convEnee",
          "normalized": "Enumeratee[Offset Block][a]b()",
          "package": "scope",
          "partial": "Enee",
          "signature": "Enumeratee[Offset Block][a]m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:convEnee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance from to\n\u003c/p\u003e",
          "module": "Scope.Types",
          "name": "distance",
          "package": "scope",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Scope-Types.html#distance",
          "type": "method"
        },
        "index": {
          "description": "Distance from to",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "distance",
          "normalized": "a-\u003ea-\u003ea",
          "package": "scope",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "dragDX",
          "package": "scope",
          "signature": "Maybe DataX",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "dragDX",
          "package": "scope",
          "partial": "DX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:dragDX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "endTime",
          "package": "scope",
          "signature": "TimeStamp",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "endTime",
          "package": "scope",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:endTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "fd",
          "package": "scope",
          "signature": "Fd",
          "source": "src/Scope-Types.html#ScopeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "fd",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:fd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "filename",
          "package": "scope",
          "signature": "FilePath",
          "source": "src/Scope-Types.html#ScopeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "filename",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "fromDouble",
          "package": "scope",
          "signature": "Double -\u003e a",
          "source": "src/Scope-Types.html#fromDouble",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "fromDouble",
          "normalized": "Double-\u003ea",
          "package": "scope",
          "partial": "Double",
          "signature": "Double-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:fromDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "layerBaseUTC",
          "package": "scope",
          "signature": "Maybe UTCTime",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "layerBaseUTC",
          "package": "scope",
          "partial": "Base UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:layerBaseUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "layerFile",
          "package": "scope",
          "signature": "ScopeFile",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "layerFile",
          "package": "scope",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:layerFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "layerTrackNo",
          "package": "scope",
          "signature": "TrackNo",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "layerTrackNo",
          "package": "scope",
          "partial": "Track No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:layerTrackNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "layers",
          "package": "scope",
          "signature": "[ScopeLayer]",
          "source": "src/Scope-Types.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "layers",
          "normalized": "[ScopeLayer]",
          "package": "scope",
          "signature": "[ScopeLayer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:layers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "m",
          "package": "scope",
          "signature": "Double",
          "source": "src/Scope-Types.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "m",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "mkTSDataTransform",
          "package": "scope",
          "signature": "(TimeStamp, TimeStamp) -\u003e (TimeStamp, TimeStamp) -\u003e Transform DataX",
          "source": "src/Scope-Types.html#mkTSDataTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "mkTSDataTransform",
          "normalized": "(TimeStamp,TimeStamp)-\u003e(TimeStamp,TimeStamp)-\u003eTransform DataX",
          "package": "scope",
          "partial": "TSData Transform",
          "signature": "(TimeStamp,TimeStamp)-\u003e(TimeStamp,TimeStamp)-\u003eTransform DataX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:mkTSDataTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "mkTransform",
          "package": "scope",
          "signature": "(a, a) -\u003e (a, a) -\u003e Transform a",
          "source": "src/Scope-Types.html#mkTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "mkTransform",
          "normalized": "(a,a)-\u003e(a,a)-\u003eTransform a",
          "package": "scope",
          "partial": "Transform",
          "signature": "(a,a)-\u003e(a,a)-\u003eTransform a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:mkTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "plotter",
          "package": "scope",
          "signature": "LayerPlot a",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "plotter",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:plotter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "pointerX",
          "package": "scope",
          "signature": "Maybe CanvasX",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "pointerX",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:pointerX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "rawLayerPlot",
          "package": "scope",
          "signature": "a -\u003e RGB -\u003e LayerPlot (TimeStamp, [a])",
          "source": "src/Scope-Types.html#rawLayerPlot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "rawLayerPlot",
          "normalized": "a-\u003eRGB-\u003eLayerPlot(TimeStamp,[a])",
          "package": "scope",
          "partial": "Layer Plot",
          "signature": "a-\u003eRGB-\u003eLayerPlot(TimeStamp,[a])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:rawLayerPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "renderCmds",
          "package": "scope",
          "signature": "[DrawCmd] -\u003e m ()",
          "source": "src/Scope-Types.html#renderCmds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "renderCmds",
          "normalized": "[DrawCmd]-\u003ea()",
          "package": "scope",
          "partial": "Cmds",
          "signature": "[DrawCmd]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:renderCmds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict a window to within a given range\n\u003c/p\u003e",
          "module": "Scope.Types",
          "name": "restrictRange",
          "package": "scope",
          "signature": "(a, a) -\u003e (a, a) -\u003e (a, a)",
          "source": "src/Scope-Types.html#restrictRange",
          "type": "function"
        },
        "index": {
          "description": "Restrict window to within given range",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "restrictRange",
          "normalized": "(a,a)-\u003e(a,a)-\u003e(a,a)",
          "package": "scope",
          "partial": "Range",
          "signature": "(a,a)-\u003e(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:restrictRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "restrictRange01",
          "package": "scope",
          "signature": "(a, a) -\u003e (a, a)",
          "source": "src/Scope-Types.html#restrictRange01",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "restrictRange01",
          "normalized": "(a,a)-\u003e(a,a)",
          "package": "scope",
          "partial": "Range",
          "signature": "(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:restrictRange01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "scopeCF",
          "package": "scope",
          "signature": "CacheFile",
          "source": "src/Scope-Types.html#ScopeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "scopeCF",
          "package": "scope",
          "partial": "CF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:scopeCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "scopeClose",
          "package": "scope",
          "signature": "Scope ui -\u003e IO (Scope ui)",
          "source": "src/Scope-Types.html#scopeClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "scopeClose",
          "normalized": "Scope a-\u003eIO(Scope a)",
          "package": "scope",
          "partial": "Close",
          "signature": "Scope ui-\u003eIO(Scope ui)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:scopeClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "scopeModifyView",
          "package": "scope",
          "signature": "(View ui -\u003e View ui) -\u003e Scope ui -\u003e Scope ui",
          "source": "src/Scope-Types.html#scopeModifyView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "scopeModifyView",
          "normalized": "(View a-\u003eView a)-\u003eScope a-\u003eScope a",
          "package": "scope",
          "partial": "Modify View",
          "signature": "(View ui-\u003eView ui)-\u003eScope ui-\u003eScope ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:scopeModifyView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "scopeNew",
          "package": "scope",
          "signature": "ui -\u003e Scope ui",
          "source": "src/Scope-Types.html#scopeNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "scopeNew",
          "normalized": "a-\u003eScope a",
          "package": "scope",
          "partial": "New",
          "signature": "ui-\u003eScope ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:scopeNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "scopeUpdate",
          "package": "scope",
          "signature": "Maybe (TimeStamp, TimeStamp) -\u003e Maybe (UTCTime, UTCTime) -\u003e Scope ui -\u003e Scope ui",
          "source": "src/Scope-Types.html#scopeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "scopeUpdate",
          "normalized": "Maybe(TimeStamp,TimeStamp)-\u003eMaybe(UTCTime,UTCTime)-\u003eScope a-\u003eScope a",
          "package": "scope",
          "partial": "Update",
          "signature": "Maybe(TimeStamp,TimeStamp)-\u003eMaybe(UTCTime,UTCTime)-\u003eScope ui-\u003eScope ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:scopeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "startTime",
          "package": "scope",
          "signature": "TimeStamp",
          "source": "src/Scope-Types.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "startTime",
          "package": "scope",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:startTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "summaryLayerPlot",
          "package": "scope",
          "signature": "a -\u003e RGB -\u003e LayerPlot [Summary a]",
          "source": "src/Scope-Types.html#summaryLayerPlot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "summaryLayerPlot",
          "normalized": "a-\u003eRGB-\u003eLayerPlot[Summary a]",
          "package": "scope",
          "partial": "Layer Plot",
          "signature": "a-\u003eRGB-\u003eLayerPlot[Summary a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:summaryLayerPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "toDouble",
          "package": "scope",
          "signature": "a -\u003e Double",
          "source": "src/Scope-Types.html#toDouble",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "toDouble",
          "normalized": "a-\u003eDouble",
          "package": "scope",
          "partial": "Double",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:toDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "transform",
          "package": "scope",
          "signature": "Transform a -\u003e a -\u003e a",
          "source": "src/Scope-Types.html#transform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "transform",
          "normalized": "Transform a-\u003ea-\u003ea",
          "package": "scope",
          "signature": "Transform a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate x by\n\u003c/p\u003e",
          "module": "Scope.Types",
          "name": "translate",
          "package": "scope",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Scope-Types.html#translate",
          "type": "method"
        },
        "index": {
          "description": "Translate by",
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "translate",
          "normalized": "a-\u003ea-\u003ea",
          "package": "scope",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "translateRange",
          "package": "scope",
          "signature": "a -\u003e (a, a) -\u003e (a, a)",
          "source": "src/Scope-Types.html#translateRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "translateRange",
          "normalized": "a-\u003e(a,a)-\u003e(a,a)",
          "package": "scope",
          "partial": "Range",
          "signature": "a-\u003e(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:translateRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "unionBounds",
          "package": "scope",
          "signature": "Maybe (a, a) -\u003e Maybe (a, a) -\u003e Maybe (a, a)",
          "source": "src/Scope-Types.html#unionBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "unionBounds",
          "normalized": "Maybe(a,a)-\u003eMaybe(a,a)-\u003eMaybe(a,a)",
          "package": "scope",
          "partial": "Bounds",
          "signature": "Maybe(a,a)-\u003eMaybe(a,a)-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:unionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "unionRange",
          "package": "scope",
          "signature": "(a, a) -\u003e (a, a) -\u003e (a, a)",
          "source": "src/Scope-Types.html#unionRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "unionRange",
          "normalized": "(a,a)-\u003e(a,a)-\u003e(a,a)",
          "package": "scope",
          "partial": "Range",
          "signature": "(a,a)-\u003e(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:unionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "utcBounds",
          "package": "scope",
          "signature": "Maybe (UTCTime, UTCTime)",
          "source": "src/Scope-Types.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "utcBounds",
          "normalized": "Maybe(UTCTime,UTCTime)",
          "package": "scope",
          "partial": "Bounds",
          "signature": "Maybe(UTCTime,UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:utcBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "view",
          "package": "scope",
          "signature": "View ui",
          "source": "src/Scope-Types.html#Scope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "view",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "viewUI",
          "package": "scope",
          "signature": "ui",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "viewUI",
          "package": "scope",
          "partial": "UI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:viewUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "viewX1",
          "package": "scope",
          "signature": "DataX",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "viewX1",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:viewX1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "viewX2",
          "package": "scope",
          "signature": "DataX",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "viewX2",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:viewX2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "viewY1",
          "package": "scope",
          "signature": "Double",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "viewY1",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:viewY1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "viewY2",
          "package": "scope",
          "signature": "Double",
          "source": "src/Scope-Types.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "viewY2",
          "package": "scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:viewY2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.Types",
          "name": "zoomRange",
          "package": "scope",
          "signature": "CanvasX -\u003e Double -\u003e (a, a) -\u003e (a, a)",
          "source": "src/Scope-Types.html#zoomRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope Types",
          "module": "Scope.Types",
          "name": "zoomRange",
          "normalized": "CanvasX-\u003eDouble-\u003e(a,a)-\u003e(a,a)",
          "package": "scope",
          "partial": "Range",
          "signature": "CanvasX-\u003eDouble-\u003e(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-Types.html#v:zoomRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with Views\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scope.View",
          "name": "View",
          "package": "scope",
          "source": "src/Scope-View.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for dealing with Views",
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "View",
          "package": "scope",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "dataToTimeStamp",
          "package": "scope",
          "signature": "Scope ui -\u003e DataX -\u003e Maybe TimeStamp",
          "source": "src/Scope-View.html#dataToTimeStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "dataToTimeStamp",
          "normalized": "Scope a-\u003eDataX-\u003eMaybe TimeStamp",
          "package": "scope",
          "partial": "To Time Stamp",
          "signature": "Scope ui-\u003eDataX-\u003eMaybe TimeStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:dataToTimeStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "dataToUTC",
          "package": "scope",
          "signature": "Scope ui -\u003e DataX -\u003e Maybe UTCTime",
          "source": "src/Scope-View.html#dataToUTC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "dataToUTC",
          "normalized": "Scope a-\u003eDataX-\u003eMaybe UTCTime",
          "package": "scope",
          "partial": "To UTC",
          "signature": "Scope ui-\u003eDataX-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:dataToUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "timeStampToCanvas",
          "package": "scope",
          "signature": "Scope ui -\u003e TimeStamp -\u003e CanvasX",
          "source": "src/Scope-View.html#timeStampToCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "timeStampToCanvas",
          "normalized": "Scope a-\u003eTimeStamp-\u003eCanvasX",
          "package": "scope",
          "partial": "Stamp To Canvas",
          "signature": "Scope ui-\u003eTimeStamp-\u003eCanvasX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:timeStampToCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "timeStampToData",
          "package": "scope",
          "signature": "Scope ui -\u003e TimeStamp -\u003e Maybe DataX",
          "source": "src/Scope-View.html#timeStampToData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "timeStampToData",
          "normalized": "Scope a-\u003eTimeStamp-\u003eMaybe DataX",
          "package": "scope",
          "partial": "Stamp To Data",
          "signature": "Scope ui-\u003eTimeStamp-\u003eMaybe DataX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:timeStampToData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "utcToCanvas",
          "package": "scope",
          "signature": "Scope ui -\u003e UTCTime -\u003e CanvasX",
          "source": "src/Scope-View.html#utcToCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "utcToCanvas",
          "normalized": "Scope a-\u003eUTCTime-\u003eCanvasX",
          "package": "scope",
          "partial": "To Canvas",
          "signature": "Scope ui-\u003eUTCTime-\u003eCanvasX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:utcToCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign a view so the given DataX appears at CanvasX,\n preserving the current view width.\n\u003c/p\u003e",
          "module": "Scope.View",
          "name": "viewAlign",
          "package": "scope",
          "signature": "CanvasX -\u003e DataX -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewAlign",
          "type": "function"
        },
        "index": {
          "description": "Align view so the given DataX appears at CanvasX preserving the current view width",
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewAlign",
          "normalized": "CanvasX-\u003eDataX-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Align",
          "signature": "CanvasX-\u003eDataX-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewButtonDown",
          "package": "scope",
          "signature": "CanvasX -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewButtonDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewButtonDown",
          "normalized": "CanvasX-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Button Down",
          "signature": "CanvasX-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewButtonDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewButtonMotion",
          "package": "scope",
          "signature": "CanvasX -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewButtonMotion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewButtonMotion",
          "normalized": "CanvasX-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Button Motion",
          "signature": "CanvasX-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewButtonMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewButtonRelease",
          "package": "scope",
          "signature": "View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewButtonRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewButtonRelease",
          "normalized": "View a-\u003eView a",
          "package": "scope",
          "partial": "Button Release",
          "signature": "View ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewButtonRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewDuration",
          "package": "scope",
          "signature": "Scope ui -\u003e View ui -\u003e Maybe TimeStampDiff",
          "source": "src/Scope-View.html#viewDuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewDuration",
          "normalized": "Scope a-\u003eView a-\u003eMaybe TimeStampDiff",
          "package": "scope",
          "partial": "Duration",
          "signature": "Scope ui-\u003eView ui-\u003eMaybe TimeStampDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewEndTime",
          "package": "scope",
          "signature": "Scope ui -\u003e View ui -\u003e Maybe TimeStamp",
          "source": "src/Scope-View.html#viewEndTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewEndTime",
          "normalized": "Scope a-\u003eView a-\u003eMaybe TimeStamp",
          "package": "scope",
          "partial": "End Time",
          "signature": "Scope ui-\u003eView ui-\u003eMaybe TimeStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewEndTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewEndUTC",
          "package": "scope",
          "signature": "Scope ui -\u003e View ui -\u003e Maybe UTCTime",
          "source": "src/Scope-View.html#viewEndUTC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewEndUTC",
          "normalized": "Scope a-\u003eView a-\u003eMaybe UTCTime",
          "package": "scope",
          "partial": "End UTC",
          "signature": "Scope ui-\u003eView ui-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewEndUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewMoveEnd",
          "package": "scope",
          "signature": "View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewMoveEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewMoveEnd",
          "normalized": "View a-\u003eView a",
          "package": "scope",
          "partial": "Move End",
          "signature": "View ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewMoveEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewMoveLeft",
          "package": "scope",
          "signature": "View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewMoveLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewMoveLeft",
          "normalized": "View a-\u003eView a",
          "package": "scope",
          "partial": "Move Left",
          "signature": "View ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewMoveLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewMoveRight",
          "package": "scope",
          "signature": "View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewMoveRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewMoveRight",
          "normalized": "View a-\u003eView a",
          "package": "scope",
          "partial": "Move Right",
          "signature": "View ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewMoveRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewMoveStart",
          "package": "scope",
          "signature": "View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewMoveStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewMoveStart",
          "normalized": "View a-\u003eView a",
          "package": "scope",
          "partial": "Move Start",
          "signature": "View ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewMoveStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewMoveTo",
          "package": "scope",
          "signature": "Double -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewMoveTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewMoveTo",
          "normalized": "Double-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Move To",
          "signature": "Double-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewMoveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewStartTime",
          "package": "scope",
          "signature": "Scope ui -\u003e View ui -\u003e Maybe TimeStamp",
          "source": "src/Scope-View.html#viewStartTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewStartTime",
          "normalized": "Scope a-\u003eView a-\u003eMaybe TimeStamp",
          "package": "scope",
          "partial": "Start Time",
          "signature": "Scope ui-\u003eView ui-\u003eMaybe TimeStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewStartTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewStartUTC",
          "package": "scope",
          "signature": "Scope ui -\u003e View ui -\u003e Maybe UTCTime",
          "source": "src/Scope-View.html#viewStartUTC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewStartUTC",
          "normalized": "Scope a-\u003eView a-\u003eMaybe UTCTime",
          "package": "scope",
          "partial": "Start UTC",
          "signature": "Scope ui-\u003eView ui-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewStartUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewZoomIn",
          "package": "scope",
          "signature": "Double -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewZoomIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewZoomIn",
          "normalized": "Double-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Zoom In",
          "signature": "Double-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewZoomInOn",
          "package": "scope",
          "signature": "CanvasX -\u003e Double -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewZoomInOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewZoomInOn",
          "normalized": "CanvasX-\u003eDouble-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Zoom In On",
          "signature": "CanvasX-\u003eDouble-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewZoomInOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewZoomOut",
          "package": "scope",
          "signature": "Double -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewZoomOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewZoomOut",
          "normalized": "Double-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Zoom Out",
          "signature": "Double-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scope.View",
          "name": "viewZoomOutOn",
          "package": "scope",
          "signature": "CanvasX -\u003e Double -\u003e View ui -\u003e View ui",
          "source": "src/Scope-View.html#viewZoomOutOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scope View",
          "module": "Scope.View",
          "name": "viewZoomOutOn",
          "normalized": "CanvasX-\u003eDouble-\u003eView a-\u003eView a",
          "package": "scope",
          "partial": "Zoom Out On",
          "signature": "CanvasX-\u003eDouble-\u003eView ui-\u003eView ui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scope/docs/Scope-View.html#v:viewZoomOutOn"
      }
    }
  ]
]