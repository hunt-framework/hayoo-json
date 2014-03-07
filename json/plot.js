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
        "word": "plot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOne line \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e creation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "Simple",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "One line Figure creation",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "Simple",
          "package": "plot",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "Simple",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#Simple",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "Simple",
          "package": "plot",
          "partial": "Simple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#t:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the gridlines\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "grid",
          "package": "plot",
          "signature": "Bool -\u003e m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#grid",
          "type": "function"
        },
        "index": {
          "description": "set the gridlines",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "grid",
          "normalized": "Bool-\u003ea()",
          "package": "plot",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a figure with a single linear-log plot \n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "linlog",
          "package": "plot",
          "signature": "d -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#linlog",
          "type": "function"
        },
        "index": {
          "description": "create figure with single linear-log plot with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "linlog",
          "normalized": "a-\u003eFigure()",
          "package": "plot",
          "signature": "d-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:linlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a figure with a single log-linear plot \n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "loglin",
          "package": "plot",
          "signature": "d -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#loglin",
          "type": "function"
        },
        "index": {
          "description": "create figure with single log-linear plot with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "loglin",
          "normalized": "a-\u003eFigure()",
          "package": "plot",
          "signature": "d-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:loglin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a figure with a single log-log plot \n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "loglog",
          "package": "plot",
          "signature": "d -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#loglog",
          "type": "function"
        },
        "index": {
          "description": "create figure with single log-log plot with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "loglog",
          "normalized": "a-\u003eFigure()",
          "package": "plot",
          "signature": "d-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:loglog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a figure with a single parametric plot over n points\n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "parametric",
          "package": "plot",
          "signature": "(Double -\u003e Double, Double -\u003e Double) -\u003e (Double, Double) -\u003e Int -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#parametric",
          "type": "function"
        },
        "index": {
          "description": "create figure with single parametric plot over points with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "parametric",
          "normalized": "(Double-\u003eDouble,Double-\u003eDouble)-\u003e(Double,Double)-\u003eInt-\u003eFigure()",
          "package": "plot",
          "signature": "(Double-\u003eDouble,Double-\u003eDouble)-\u003e(Double,Double)-\u003eInt-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:parametric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a figure with a single linear plot \n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "plot",
          "package": "plot",
          "signature": "d -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#plot",
          "type": "function"
        },
        "index": {
          "description": "create figure with single linear plot with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "plot",
          "normalized": "a-\u003eFigure()",
          "package": "plot",
          "signature": "d-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use linlog\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003ecreate a figure with a single linear-log plot \n   with lower X and Y axes whose ranges are set from the data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "semilog",
          "package": "plot",
          "signature": "d -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#semilog",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use linlog create figure with single linear-log plot with lower and axes whose ranges are set from the data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "semilog",
          "normalized": "a-\u003eFigure()",
          "package": "plot",
          "signature": "d-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:semilog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the subtitle\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "subtitle",
          "package": "plot",
          "signature": "String -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#subtitle",
          "type": "function"
        },
        "index": {
          "description": "set the subtitle",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "subtitle",
          "normalized": "String-\u003eFigure()",
          "package": "plot",
          "signature": "String-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:subtitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the title\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "title",
          "package": "plot",
          "signature": "String -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#title",
          "type": "function"
        },
        "index": {
          "description": "set the title",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "title",
          "normalized": "String-\u003eFigure()",
          "package": "plot",
          "signature": "String-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the x range from data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xautorange",
          "package": "plot",
          "signature": "m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#xautorange",
          "type": "function"
        },
        "index": {
          "description": "set the range from data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xautorange",
          "normalized": "a()",
          "package": "plot",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:xautorange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the x range from data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xautorangeLog",
          "package": "plot",
          "signature": "m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#xautorangeLog",
          "type": "function"
        },
        "index": {
          "description": "set the range from data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xautorangeLog",
          "normalized": "a()",
          "package": "plot",
          "partial": "Log",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:xautorangeLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the x label\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xlabel",
          "package": "plot",
          "signature": "String -\u003e m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#xlabel",
          "type": "function"
        },
        "index": {
          "description": "set the label",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xlabel",
          "normalized": "String-\u003ea()",
          "package": "plot",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:xlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the x range\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xrange",
          "package": "plot",
          "signature": "Scale -\u003e Double -\u003e Double -\u003e m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#xrange",
          "type": "function"
        },
        "index": {
          "description": "set the range",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "xrange",
          "normalized": "Scale-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "plot",
          "signature": "Scale-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:xrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the y range from data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yautorange",
          "package": "plot",
          "signature": "m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#yautorange",
          "type": "function"
        },
        "index": {
          "description": "set the range from data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yautorange",
          "normalized": "a()",
          "package": "plot",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:yautorange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the y range from data\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yautorangeLog",
          "package": "plot",
          "signature": "m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#yautorangeLog",
          "type": "function"
        },
        "index": {
          "description": "set the range from data",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yautorangeLog",
          "normalized": "a()",
          "package": "plot",
          "partial": "Log",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:yautorangeLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the y label\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "ylabel",
          "package": "plot",
          "signature": "String -\u003e m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#ylabel",
          "type": "function"
        },
        "index": {
          "description": "set the label",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "ylabel",
          "normalized": "String-\u003ea()",
          "package": "plot",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:ylabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the y range\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yrange",
          "package": "plot",
          "signature": "Scale -\u003e Double -\u003e Double -\u003e m ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Simple.html#yrange",
          "type": "function"
        },
        "index": {
          "description": "set the range",
          "hierarchy": "Graphics Rendering Plot Figure Simple",
          "module": "Graphics.Rendering.Plot.Figure.Simple",
          "name": "yrange",
          "normalized": "Scale-\u003eDouble-\u003eDouble-\u003ea()",
          "package": "plot",
          "signature": "Scale-\u003eDouble-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure-Simple.html#v:yrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCreation and manipulation of \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eThe same problem of leaked instances as at \u003ca\u003ehttp://hackage.haskell.org/packages/archive/graphviz/2999.10.0.1/doc/html/Data-GraphViz-Commands.html#t%3AGraphvizCanvas\u003c/a\u003e occurs here.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ewith\u003c/em\u003e, \u003cem\u003eset\u003c/em\u003e, \u003cem\u003eclear\u003c/em\u003e, \u003cem\u003enew\u003c/em\u003e, and \u003cem\u003eadd\u003c/em\u003e are the operations that can\n be performed on various elements of a figure.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eglib\u003c/em\u003e/\u003cem\u003edata-accessor\u003c/em\u003e abstractions (verbs/modifiers) are planned for future implementations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Figure",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure.html",
          "type": "module"
        },
        "index": {
          "description": "Creation and manipulation of Figure The same problem of leaked instances as at http hackage.haskell.org packages archive graphviz doc html Data-GraphViz-Commands.html AGraphvizCanvas occurs here with set clear new and add are the operations that can be performed on various elements of figure glib data-accessor abstractions verbs modifiers are planned for future implementations",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Figure",
          "package": "plot",
          "partial": "Figure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Abscissa",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#Abscissa",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Abscissa",
          "package": "plot",
          "partial": "Abscissa",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Abscissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Annote",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Annote",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Annote",
          "package": "plot",
          "partial": "Annote",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Annote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Axis",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Axis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Axis",
          "package": "plot",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisPosn",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisPosn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisPosn",
          "package": "plot",
          "partial": "Axis Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:AxisPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisSide",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisSide",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisSide",
          "package": "plot",
          "partial": "Axis Side",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:AxisSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisType",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "AxisType",
          "package": "plot",
          "partial": "Axis Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:AxisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bar",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Bar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bar",
          "package": "plot",
          "partial": "Bar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarFormat",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#BarFormat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarFormat",
          "package": "plot",
          "partial": "Bar Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:BarFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarSetting",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#BarSetting",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarSetting",
          "package": "plot",
          "partial": "Bar Setting",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:BarSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Border",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Border",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Border",
          "package": "plot",
          "partial": "Border",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Border"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Color",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Color",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Color",
          "package": "plot",
          "partial": "Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dash",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Dash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dash",
          "package": "plot",
          "partial": "Dash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "DashStyle",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#DashStyle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "DashStyle",
          "package": "plot",
          "partial": "Dash Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:DashStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dataset",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#Dataset",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dataset",
          "package": "plot",
          "partial": "Dataset",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "ErrorSeries",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#ErrorSeries",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "ErrorSeries",
          "package": "plot",
          "partial": "Error Series",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:ErrorSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Figure",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Figure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Figure",
          "package": "plot",
          "partial": "Figure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FigureState",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#FigureState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FigureState",
          "package": "plot",
          "partial": "Figure State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:FigureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Fill",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Fill",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Fill",
          "package": "plot",
          "partial": "Fill",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FontFamily",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#FontFamily",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FontFamily",
          "package": "plot",
          "partial": "Font Family",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:FontFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FontSize",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#FontSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FontSize",
          "package": "plot",
          "partial": "Font Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:FontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FormattedSeries",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#FormattedSeries",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FormattedSeries",
          "package": "plot",
          "partial": "Formatted Series",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:FormattedSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Function",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Function",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Function",
          "package": "plot",
          "partial": "Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Glyph",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Glyph",
          "package": "plot",
          "partial": "Glyph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Glyph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "GridLines",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#GridLines",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "GridLines",
          "package": "plot",
          "partial": "Grid Lines",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:GridLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Head",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Head",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Head",
          "package": "plot",
          "partial": "Head",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Legend",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Legend",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Legend",
          "package": "plot",
          "partial": "Legend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendBorder",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendBorder",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendBorder",
          "package": "plot",
          "partial": "Legend Border",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:LegendBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendLocation",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendLocation",
          "package": "plot",
          "partial": "Legend Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:LegendLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendOrientation",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendOrientation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LegendOrientation",
          "package": "plot",
          "partial": "Legend Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:LegendOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Line",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Line",
          "package": "plot",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LineFormat",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Line.html#LineFormat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LineFormat",
          "package": "plot",
          "partial": "Line Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:LineFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LineWidth",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#LineWidth",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LineWidth",
          "package": "plot",
          "partial": "Line Width",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:LineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Location",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Location",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Location",
          "package": "plot",
          "partial": "Location",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "MinMaxSeries",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#MinMaxSeries",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "MinMaxSeries",
          "package": "plot",
          "partial": "Min Max Series",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:MinMaxSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Ordinate",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#Ordinate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Ordinate",
          "package": "plot",
          "partial": "Ordinate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Ordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Plot",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Plot",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Plot",
          "package": "plot",
          "partial": "Plot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PlotFormats",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#PlotFormats",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PlotFormats",
          "package": "plot",
          "partial": "Plot Formats",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:PlotFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Point",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Point",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Point",
          "package": "plot",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PointFormat",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Figure-Point.html#PointFormat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PointFormat",
          "package": "plot",
          "partial": "Point Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:PointFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PointSize",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#PointSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "PointSize",
          "package": "plot",
          "partial": "Point Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:PointSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SampleData",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#SampleData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SampleData",
          "package": "plot",
          "partial": "Sample Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:SampleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Scale",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Scale",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Scale",
          "package": "plot",
          "partial": "Scale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Series",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Series",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Series",
          "package": "plot",
          "partial": "Series",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SeriesLabel",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesLabel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SeriesLabel",
          "package": "plot",
          "partial": "Series Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:SeriesLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SeriesType",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SeriesType",
          "package": "plot",
          "partial": "Series Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:SeriesType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Surface",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Surface",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Surface",
          "package": "plot",
          "partial": "Surface",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Text",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Text",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Text",
          "package": "plot",
          "partial": "Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Tick",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Tick",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Tick",
          "package": "plot",
          "partial": "Tick",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:Tick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickFormat",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickFormat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickFormat",
          "package": "plot",
          "partial": "Tick Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:TickFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickValues",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickValues",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickValues",
          "package": "plot",
          "partial": "Tick Values",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#t:TickValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Area",
          "package": "plot",
          "signature": "Area",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Area",
          "package": "plot",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Asterisk",
          "package": "plot",
          "signature": "Asterisk",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Asterisk",
          "package": "plot",
          "partial": "Asterisk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Asterisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bar",
          "package": "plot",
          "signature": "Bar",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bar",
          "package": "plot",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarNone",
          "package": "plot",
          "signature": "BarNone",
          "source": "src/Graphics-Rendering-Plot-Types.html#BarSetting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarNone",
          "package": "plot",
          "partial": "Bar None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:BarNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarSpread",
          "package": "plot",
          "signature": "BarSpread",
          "source": "src/Graphics-Rendering-Plot-Types.html#BarSetting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarSpread",
          "package": "plot",
          "partial": "Bar Spread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:BarSpread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarStack",
          "package": "plot",
          "signature": "BarStack",
          "source": "src/Graphics-Rendering-Plot-Types.html#BarSetting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "BarStack",
          "package": "plot",
          "partial": "Bar Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:BarStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bot",
          "package": "plot",
          "signature": "Bot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bot",
          "package": "plot",
          "partial": "Bot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Bot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Box",
          "package": "plot",
          "signature": "Box",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Box",
          "package": "plot",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bullet",
          "package": "plot",
          "signature": "Bullet",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Bullet",
          "package": "plot",
          "partial": "Bullet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Bullet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Candle",
          "package": "plot",
          "signature": "Candle",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Candle",
          "package": "plot",
          "partial": "Candle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Candle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Circle",
          "package": "plot",
          "signature": "Circle",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Circle",
          "package": "plot",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Cross",
          "package": "plot",
          "signature": "Cross",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Cross",
          "package": "plot",
          "partial": "Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dash",
          "package": "plot",
          "signature": "Dash",
          "source": "src/Graphics-Rendering-Plot-Types.html#Dash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dash",
          "package": "plot",
          "partial": "Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "DefaultTickFormat",
          "package": "plot",
          "signature": "DefaultTickFormat",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "DefaultTickFormat",
          "package": "plot",
          "partial": "Default Tick Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:DefaultTickFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Diamond",
          "package": "plot",
          "signature": "Diamond",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Diamond",
          "package": "plot",
          "partial": "Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dot",
          "package": "plot",
          "signature": "Dot",
          "source": "src/Graphics-Rendering-Plot-Types.html#Dash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Dot",
          "package": "plot",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "East",
          "package": "plot",
          "signature": "East",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "East",
          "package": "plot",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FormatFunction",
          "package": "plot",
          "signature": "FormatFunction (Double -\u003e String)",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "FormatFunction",
          "normalized": "FormatFunction(Double-\u003eString)",
          "package": "plot",
          "partial": "Format Function",
          "signature": "FormatFunction(Double-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:FormatFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Hist",
          "package": "plot",
          "signature": "Hist",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Hist",
          "package": "plot",
          "partial": "Hist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Hist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Impulse",
          "package": "plot",
          "signature": "Impulse",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Impulse",
          "package": "plot",
          "partial": "Impulse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Impulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Inside",
          "package": "plot",
          "signature": "Inside",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendOrientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Inside",
          "package": "plot",
          "partial": "Inside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Line",
          "package": "plot",
          "signature": "Line",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Line",
          "package": "plot",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LinePoint",
          "package": "plot",
          "signature": "LinePoint",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "LinePoint",
          "package": "plot",
          "partial": "Line Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:LinePoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Linear",
          "package": "plot",
          "signature": "Linear",
          "source": "src/Graphics-Rendering-Plot-Types.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Linear",
          "package": "plot",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Log",
          "package": "plot",
          "signature": "Log",
          "source": "src/Graphics-Rendering-Plot-Types.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Log",
          "package": "plot",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Lower",
          "package": "plot",
          "signature": "Lower",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisSide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Lower",
          "package": "plot",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Major",
          "package": "plot",
          "signature": "Major",
          "source": "src/Graphics-Rendering-Plot-Types.html#Tick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Major",
          "package": "plot",
          "partial": "Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Minor",
          "package": "plot",
          "signature": "Minor",
          "source": "src/Graphics-Rendering-Plot-Types.html#Tick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Minor",
          "package": "plot",
          "partial": "Minor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "North",
          "package": "plot",
          "signature": "North",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "North",
          "package": "plot",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "NorthEast",
          "package": "plot",
          "signature": "NorthEast",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "NorthEast",
          "package": "plot",
          "partial": "North East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:NorthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "NorthWest",
          "package": "plot",
          "signature": "NorthWest",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "NorthWest",
          "package": "plot",
          "partial": "North West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:NorthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Outside",
          "package": "plot",
          "signature": "Outside",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendOrientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Outside",
          "package": "plot",
          "partial": "Outside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Point",
          "package": "plot",
          "signature": "Point",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Point",
          "package": "plot",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Printf",
          "package": "plot",
          "signature": "Printf String",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Printf",
          "package": "plot",
          "partial": "Printf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Printf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Side",
          "package": "plot",
          "signature": "Side AxisSide",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Side",
          "package": "plot",
          "partial": "Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "South",
          "package": "plot",
          "signature": "South",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "South",
          "package": "plot",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SouthEast",
          "package": "plot",
          "signature": "SouthEast",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SouthEast",
          "package": "plot",
          "partial": "South East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:SouthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SouthWest",
          "package": "plot",
          "signature": "SouthWest",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "SouthWest",
          "package": "plot",
          "partial": "South West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:SouthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Step",
          "package": "plot",
          "signature": "Step",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Step",
          "package": "plot",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickNumber",
          "package": "plot",
          "signature": "TickNumber Int",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickNumber",
          "package": "plot",
          "partial": "Tick Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:TickNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickValues",
          "package": "plot",
          "signature": "TickValues (Vector Double)",
          "source": "src/Graphics-Rendering-Plot-Types.html#TickValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "TickValues",
          "package": "plot",
          "partial": "Tick Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:TickValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Top",
          "package": "plot",
          "signature": "Top",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Top",
          "package": "plot",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Triangle",
          "package": "plot",
          "signature": "Triangle",
          "source": "src/Graphics-Rendering-Plot-Types.html#Glyph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Triangle",
          "package": "plot",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Upper",
          "package": "plot",
          "signature": "Upper",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisSide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Upper",
          "package": "plot",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Value",
          "package": "plot",
          "signature": "Value Double",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Value",
          "package": "plot",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "West",
          "package": "plot",
          "signature": "West",
          "source": "src/Graphics-Rendering-Plot-Types.html#LegendLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "West",
          "package": "plot",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Whisker",
          "package": "plot",
          "signature": "Whisker",
          "source": "src/Graphics-Rendering-Plot-Types.html#SeriesType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "Whisker",
          "package": "plot",
          "partial": "Whisker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:Whisker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "XAxis",
          "package": "plot",
          "signature": "XAxis",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "XAxis",
          "package": "plot",
          "partial": "XAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:XAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "YAxis",
          "package": "plot",
          "signature": "YAxis",
          "source": "src/Graphics-Rendering-Plot-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "YAxis",
          "package": "plot",
          "partial": "YAxis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:YAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an axis to the subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "addAxis",
          "package": "plot",
          "signature": "AxisType -\u003e AxisPosn -\u003e Axis () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#addAxis",
          "type": "function"
        },
        "index": {
          "description": "add an axis to the subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "addAxis",
          "normalized": "AxisType-\u003eAxisPosn-\u003eAxis()-\u003ePlot()",
          "package": "plot",
          "partial": "Axis",
          "signature": "AxisType-\u003eAxisPosn-\u003eAxis()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:addAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "area",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#area",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "area",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an arrow\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "arrow",
          "package": "plot",
          "signature": "Head -\u003e Location -\u003e Location -\u003e Line () -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#arrow",
          "type": "function"
        },
        "index": {
          "description": "add an arrow",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "arrow",
          "normalized": "Head-\u003eLocation-\u003eLocation-\u003eLine()-\u003eAnnote()",
          "package": "plot",
          "signature": "Head-\u003eLocation-\u003eLocation-\u003eLine()-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "bar",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#bar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "bar",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "barSetting",
          "package": "plot",
          "signature": "BarSetting -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#barSetting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "barSetting",
          "normalized": "BarSetting-\u003ePlot()",
          "package": "plot",
          "partial": "Setting",
          "signature": "BarSetting-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:barSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a cairo render that takes the bounding box (in user coordinates)\n       as an argument\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "cairo",
          "package": "plot",
          "signature": "(Double -\u003e Double -\u003e Double -\u003e Double -\u003e Render ()) -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#cairo",
          "type": "function"
        },
        "index": {
          "description": "add cairo render that takes the bounding box in user coordinates as an argument",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "cairo",
          "normalized": "(Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender())-\u003eAnnote()",
          "package": "plot",
          "signature": "(Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eRender())-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:cairo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "candle",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#candle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "candle",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:candle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the axes of a subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearAxes",
          "package": "plot",
          "signature": "Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#clearAxes",
          "type": "function"
        },
        "index": {
          "description": "clear the axes of subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearAxes",
          "normalized": "Plot()",
          "package": "plot",
          "partial": "Axes",
          "signature": "Plot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear an axis of a subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearAxis",
          "package": "plot",
          "signature": "AxisType -\u003e AxisPosn -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#clearAxis",
          "type": "function"
        },
        "index": {
          "description": "clear an axis of subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearAxis",
          "normalized": "AxisType-\u003eAxisPosn-\u003ePlot()",
          "package": "plot",
          "partial": "Axis",
          "signature": "AxisType-\u003eAxisPosn-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the formatting of a line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearBarFormat",
          "package": "plot",
          "signature": "Bar ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#clearBarFormat",
          "type": "function"
        },
        "index": {
          "description": "clear the formatting of line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearBarFormat",
          "normalized": "Bar()",
          "package": "plot",
          "partial": "Bar Format",
          "signature": "Bar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearBarFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the legend\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearLegend",
          "package": "plot",
          "signature": "Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#clearLegend",
          "type": "function"
        },
        "index": {
          "description": "clear the legend",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearLegend",
          "normalized": "Plot()",
          "package": "plot",
          "partial": "Legend",
          "signature": "Plot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the formatting of a line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearLineFormat",
          "package": "plot",
          "signature": "Line ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Line.html#clearLineFormat",
          "type": "function"
        },
        "index": {
          "description": "clear the formatting of line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearLineFormat",
          "normalized": "Line()",
          "package": "plot",
          "partial": "Line Format",
          "signature": "Line()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearLineFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the text entry \n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearText",
          "package": "plot",
          "signature": "Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#clearText",
          "type": "function"
        },
        "index": {
          "description": "clear the text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearText",
          "normalized": "Text()",
          "package": "plot",
          "partial": "Text",
          "signature": "Text()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the text formatting to the default\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearTextFormat",
          "package": "plot",
          "signature": "Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#clearTextFormat",
          "type": "function"
        },
        "index": {
          "description": "set the text formatting to the default",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "clearTextFormat",
          "normalized": "Text()",
          "package": "plot",
          "partial": "Text Format",
          "signature": "Text()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:clearTextFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a rectangle\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "glyph",
          "package": "plot",
          "signature": "Location -\u003e Point () -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#glyph",
          "type": "function"
        },
        "index": {
          "description": "add rectangle",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "glyph",
          "normalized": "Location-\u003ePoint()-\u003eAnnote()",
          "package": "plot",
          "signature": "Location-\u003ePoint()-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:glyph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "hist",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#hist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "hist",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:hist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "impulse",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#impulse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "impulse",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:impulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "line",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#line",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "line",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "linepoint",
          "package": "plot",
          "signature": "a -\u003e b -\u003e c -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#linepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "linepoint",
          "normalized": "a-\u003eb-\u003ec-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003ec-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:linepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new blank \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "newFigure",
          "package": "plot",
          "signature": "Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#newFigure",
          "type": "function"
        },
        "index": {
          "description": "create new blank Figure",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "newFigure",
          "normalized": "Figure()",
          "package": "plot",
          "partial": "Figure",
          "signature": "Figure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:newFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an oval\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "oval",
          "package": "plot",
          "signature": "Fill -\u003e Location -\u003e Location -\u003e Bar () -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#oval",
          "type": "function"
        },
        "index": {
          "description": "add an oval",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "oval",
          "normalized": "Fill-\u003eLocation-\u003eLocation-\u003eBar()-\u003eAnnote()",
          "package": "plot",
          "signature": "Fill-\u003eLocation-\u003eLocation-\u003eBar()-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:oval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "point",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "point",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a rectangle\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "rect",
          "package": "plot",
          "signature": "Fill -\u003e Location -\u003e Location -\u003e Bar () -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#rect",
          "type": "function"
        },
        "index": {
          "description": "add rectangle",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "rect",
          "normalized": "Fill-\u003eLocation-\u003eLocation-\u003eBar()-\u003eAnnote()",
          "package": "plot",
          "signature": "Fill-\u003eLocation-\u003eLocation-\u003eBar()-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "sampleData",
          "package": "plot",
          "signature": "SampleData -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#sampleData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "sampleData",
          "normalized": "SampleData-\u003ePlot()",
          "package": "plot",
          "partial": "Data",
          "signature": "SampleData-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:sampleData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the plot type of all data series\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setAllSeriesTypes",
          "package": "plot",
          "signature": "SeriesType -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setAllSeriesTypes",
          "type": "function"
        },
        "index": {
          "description": "change the plot type of all data series",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setAllSeriesTypes",
          "normalized": "SeriesType-\u003ePlot()",
          "package": "plot",
          "partial": "All Series Types",
          "signature": "SeriesType-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setAllSeriesTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the background colour of the figure\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBackgroundColour",
          "package": "plot",
          "signature": "Color -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#setBackgroundColour",
          "type": "function"
        },
        "index": {
          "description": "set the background colour of the figure",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBackgroundColour",
          "normalized": "Color-\u003eFigure()",
          "package": "plot",
          "partial": "Background Colour",
          "signature": "Color-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBackgroundColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the colour of the bar border\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarBorderColour",
          "package": "plot",
          "signature": "Color -\u003e Bar ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#setBarBorderColour",
          "type": "function"
        },
        "index": {
          "description": "set the colour of the bar border",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarBorderColour",
          "normalized": "Color-\u003eBar()",
          "package": "plot",
          "partial": "Bar Border Colour",
          "signature": "Color-\u003eBar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBarBorderColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the width of the bar border\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarBorderWidth",
          "package": "plot",
          "signature": "LineWidth -\u003e Bar ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#setBarBorderWidth",
          "type": "function"
        },
        "index": {
          "description": "set the width of the bar border",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarBorderWidth",
          "normalized": "LineWidth-\u003eBar()",
          "package": "plot",
          "partial": "Bar Border Width",
          "signature": "LineWidth-\u003eBar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBarBorderWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the colour of the bar\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarColour",
          "package": "plot",
          "signature": "Color -\u003e Bar ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#setBarColour",
          "type": "function"
        },
        "index": {
          "description": "set the colour of the bar",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarColour",
          "normalized": "Color-\u003eBar()",
          "package": "plot",
          "partial": "Bar Colour",
          "signature": "Color-\u003eBar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBarColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the width of the bar\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarWidth",
          "package": "plot",
          "signature": "Width -\u003e Bar ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Bar.html#setBarWidth",
          "type": "function"
        },
        "index": {
          "description": "set the width of the bar",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBarWidth",
          "normalized": "Width-\u003eBar()",
          "package": "plot",
          "partial": "Bar Width",
          "signature": "Width-\u003eBar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBarWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether to draw a boundary around the plot area\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBorder",
          "package": "plot",
          "signature": "Border -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setBorder",
          "type": "function"
        },
        "index": {
          "description": "whether to draw boundary around the plot area",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setBorder",
          "normalized": "Border-\u003ePlot()",
          "package": "plot",
          "partial": "Border",
          "signature": "Border-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the dash style of a line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setDashStyle",
          "package": "plot",
          "signature": "DashStyle -\u003e Line ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Line.html#setDashStyle",
          "type": "function"
        },
        "index": {
          "description": "change the dash style of line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setDashStyle",
          "normalized": "DashStyle-\u003eLine()",
          "package": "plot",
          "partial": "Dash Style",
          "signature": "DashStyle-\u003eLine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setDashStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the data series of the subplot\n\u003c/p\u003e\u003cp\u003eThe data series are either \u003ccode\u003e\u003ca\u003eFormattedSeries\u003c/a\u003e\u003c/code\u003e or plain data series.\n   A plain data series must carry a \u003ccode\u003e\u003ca\u003eSeriesType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA dataset may or may not have an abscissa series, and if so, it is paired\n  with either a list of ordinate series or a single ordinate series.\n\u003c/p\u003e\u003cp\u003eThe abscissa series (if present) is of type 'Vector Double'.\n\u003c/p\u003e\u003cp\u003eAn ordinate series be a function (\u003ccode\u003eDouble -\u003e Double\u003c/code\u003e) or a series of points,\n  a 'Vector Double' with optional error series, y axis preference, and labels.\n\u003c/p\u003e\u003cp\u003eTo specify decoration options for an ordinate series, use the appropriate function, such\n  as \u003ccode\u003elinespoints\u003c/code\u003e, with the ordinate series and decoration formatting (\u003ccode\u003eLineFormat\u003c/code\u003e,\n  \u003ccode\u003ePointFormat\u003c/code\u003e, and \u003ccode\u003eBarFormat\u003c/code\u003e) as arguments.\n\u003c/p\u003e\u003cpre\u003e setDataset (ts,[linespoints (xs,(le,ue),Upper,\"data\") (([Dash,Dash],3,blue),(Diamond,green))])\n\u003c/pre\u003e\u003cp\u003ehas abscissa \u003ccode\u003ets\u003c/code\u003e paired with a list of ordinate series, the single element of which is a\n  \u003ccode\u003e\u003ca\u003eFormattedSeries\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003elinespoints\u003c/code\u003e where the ordinate is \u003ccode\u003exs\u003c/code\u003e with error series \u003ccode\u003ele\u003c/code\u003e and \u003ccode\u003eue\u003c/code\u003e,\n  to be graphed against the upper y-range with label \"data\".  The line element is formatted\n  to be dashed, of width 3, and blue and the point element is to be a green diamond.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setDataset",
          "package": "plot",
          "signature": "a -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setDataset",
          "type": "function"
        },
        "index": {
          "description": "set the data series of the subplot The data series are either FormattedSeries or plain data series plain data series must carry SeriesType dataset may or may not have an abscissa series and if so it is paired with either list of ordinate series or single ordinate series The abscissa series if present is of type Vector Double An ordinate series be function Double Double or series of points Vector Double with optional error series axis preference and labels To specify decoration options for an ordinate series use the appropriate function such as linespoints with the ordinate series and decoration formatting LineFormat PointFormat and BarFormat as arguments setDataset ts linespoints xs le ue Upper data Dash Dash blue Diamond green has abscissa ts paired with list of ordinate series the single element of which is FormattedSeries linespoints where the ordinate is xs with error series le and ue to be graphed against the upper y-range with label data The line element is formatted to be dashed of width and blue and the point element is to be green diamond",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setDataset",
          "normalized": "a-\u003ePlot()",
          "package": "plot",
          "partial": "Dataset",
          "signature": "a-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setDataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the padding of the figure\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFigurePadding",
          "package": "plot",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#setFigurePadding",
          "type": "function"
        },
        "index": {
          "description": "set the padding of the figure",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFigurePadding",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eFigure()",
          "package": "plot",
          "partial": "Figure Padding",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFigurePadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the colour of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontColour",
          "package": "plot",
          "signature": "Color -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontColour",
          "type": "function"
        },
        "index": {
          "description": "set the colour of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontColour",
          "normalized": "Color-\u003eText()",
          "package": "plot",
          "partial": "Font Colour",
          "signature": "Color-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font style of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontFamily",
          "package": "plot",
          "signature": "FontFamily -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontFamily",
          "type": "function"
        },
        "index": {
          "description": "set the font style of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontFamily",
          "normalized": "FontFamily-\u003eText()",
          "package": "plot",
          "partial": "Font Family",
          "signature": "FontFamily-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font size of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontSize",
          "package": "plot",
          "signature": "FontSize -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontSize",
          "type": "function"
        },
        "index": {
          "description": "set the font size of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontSize",
          "normalized": "FontSize-\u003eText()",
          "package": "plot",
          "partial": "Font Size",
          "signature": "FontSize-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font stretch of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontStretch",
          "package": "plot",
          "signature": "Stretch -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontStretch",
          "type": "function"
        },
        "index": {
          "description": "set the font stretch of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontStretch",
          "normalized": "Stretch-\u003eText()",
          "package": "plot",
          "partial": "Font Stretch",
          "signature": "Stretch-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontStretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font style of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontStyle",
          "package": "plot",
          "signature": "FontStyle -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontStyle",
          "type": "function"
        },
        "index": {
          "description": "set the font style of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontStyle",
          "normalized": "FontStyle-\u003eText()",
          "package": "plot",
          "partial": "Font Style",
          "signature": "FontStyle-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font variant of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontVariant",
          "package": "plot",
          "signature": "Variant -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontVariant",
          "type": "function"
        },
        "index": {
          "description": "set the font variant of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontVariant",
          "normalized": "Variant-\u003eText()",
          "package": "plot",
          "partial": "Font Variant",
          "signature": "Variant-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the font weight of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontWeight",
          "package": "plot",
          "signature": "Weight -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setFontWeight",
          "type": "function"
        },
        "index": {
          "description": "set the font weight of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setFontWeight",
          "normalized": "Weight-\u003eText()",
          "package": "plot",
          "partial": "Font Weight",
          "signature": "Weight-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setFontWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the glyph of a point\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setGlyph",
          "package": "plot",
          "signature": "Glyph -\u003e Point ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Point.html#setGlyph",
          "type": "function"
        },
        "index": {
          "description": "change the glyph of point",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setGlyph",
          "normalized": "Glyph-\u003ePoint()",
          "package": "plot",
          "partial": "Glyph",
          "signature": "Glyph-\u003ePoint()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setGlyph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshould gridlines be displayed?\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setGridlines",
          "package": "plot",
          "signature": "Tick -\u003e GridLines -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#setGridlines",
          "type": "function"
        },
        "index": {
          "description": "should gridlines be displayed",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setGridlines",
          "normalized": "Tick-\u003eGridLines-\u003eAxis()",
          "package": "plot",
          "partial": "Gridlines",
          "signature": "Tick-\u003eGridLines-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setGridlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the legend location and orientation\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLegend",
          "package": "plot",
          "signature": "LegendBorder -\u003e LegendLocation -\u003e LegendOrientation -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setLegend",
          "type": "function"
        },
        "index": {
          "description": "set the legend location and orientation",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLegend",
          "normalized": "LegendBorder-\u003eLegendLocation-\u003eLegendOrientation-\u003ePlot()",
          "package": "plot",
          "partial": "Legend",
          "signature": "LegendBorder-\u003eLegendLocation-\u003eLegendOrientation-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the line colour of a line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLineColour",
          "package": "plot",
          "signature": "Color -\u003e Line ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Line.html#setLineColour",
          "type": "function"
        },
        "index": {
          "description": "change the line colour of line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLineColour",
          "normalized": "Color-\u003eLine()",
          "package": "plot",
          "partial": "Line Colour",
          "signature": "Color-\u003eLine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setLineColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the line width of a line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLineWidth",
          "package": "plot",
          "signature": "LineWidth -\u003e Line ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Line.html#setLineWidth",
          "type": "function"
        },
        "index": {
          "description": "change the line width of line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setLineWidth",
          "normalized": "LineWidth-\u003eLine()",
          "package": "plot",
          "partial": "Line Width",
          "signature": "LineWidth-\u003eLine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the plot background colour\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlotBackgroundColour",
          "package": "plot",
          "signature": "Color -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setPlotBackgroundColour",
          "type": "function"
        },
        "index": {
          "description": "set the plot background colour",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlotBackgroundColour",
          "normalized": "Color-\u003ePlot()",
          "package": "plot",
          "partial": "Plot Background Colour",
          "signature": "Color-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setPlotBackgroundColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the padding of the subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlotPadding",
          "package": "plot",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setPlotPadding",
          "type": "function"
        },
        "index": {
          "description": "set the padding of the subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlotPadding",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003ePlot()",
          "package": "plot",
          "partial": "Plot Padding",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setPlotPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the shape of the plots, losing all current plots\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlots",
          "package": "plot",
          "signature": "Int-\u003e Int-\u003e Figure ()",
          "type": "function"
        },
        "index": {
          "description": "set the shape of the plots losing all current plots",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPlots",
          "normalized": "Int-\u003eInt-\u003eFigure()",
          "package": "plot",
          "partial": "Plots",
          "signature": "Int-\u003eInt-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setPlots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the colour of a point\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPointColour",
          "package": "plot",
          "signature": "Color -\u003e Point ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Point.html#setPointColour",
          "type": "function"
        },
        "index": {
          "description": "change the colour of point",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPointColour",
          "normalized": "Color-\u003ePoint()",
          "package": "plot",
          "partial": "Point Colour",
          "signature": "Color-\u003ePoint()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setPointColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the size of a point\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPointSize",
          "package": "plot",
          "signature": "PointSize -\u003e Point ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Point.html#setPointSize",
          "type": "function"
        },
        "index": {
          "description": "change the size of point",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setPointSize",
          "normalized": "PointSize-\u003ePoint()",
          "package": "plot",
          "partial": "Point Size",
          "signature": "PointSize-\u003ePoint()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setPointSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the axis range\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setRange",
          "package": "plot",
          "signature": "AxisType -\u003e AxisSide -\u003e Scale -\u003e Double -\u003e Double -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setRange",
          "type": "function"
        },
        "index": {
          "description": "set the axis range",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setRange",
          "normalized": "AxisType-\u003eAxisSide-\u003eScale-\u003eDouble-\u003eDouble-\u003ePlot()",
          "package": "plot",
          "partial": "Range",
          "signature": "AxisType-\u003eAxisSide-\u003eScale-\u003eDouble-\u003eDouble-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the axis ranges to values based on dataset\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setRangeFromData",
          "package": "plot",
          "signature": "AxisType -\u003e AxisSide -\u003e Scale -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setRangeFromData",
          "type": "function"
        },
        "index": {
          "description": "set the axis ranges to values based on dataset",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setRangeFromData",
          "normalized": "AxisType-\u003eAxisSide-\u003eScale-\u003ePlot()",
          "package": "plot",
          "partial": "Range From Data",
          "signature": "AxisType-\u003eAxisSide-\u003eScale-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setRangeFromData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the plot type of a given data series\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setSeriesType",
          "package": "plot",
          "signature": "Int -\u003e SeriesType -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#setSeriesType",
          "type": "function"
        },
        "index": {
          "description": "set the plot type of given data series",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setSeriesType",
          "normalized": "Int-\u003eSeriesType-\u003ePlot()",
          "package": "plot",
          "partial": "Series Type",
          "signature": "Int-\u003eSeriesType-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setSeriesType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the value of a text entry\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setText",
          "package": "plot",
          "signature": "String -\u003e Text ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Text.html#setText",
          "type": "function"
        },
        "index": {
          "description": "set the value of text entry",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setText",
          "normalized": "String-\u003eText()",
          "package": "plot",
          "partial": "Text",
          "signature": "String-\u003eText()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the tick label format\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTickLabelFormat",
          "package": "plot",
          "signature": "TickFormat -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#setTickLabelFormat",
          "type": "function"
        },
        "index": {
          "description": "set the tick label format",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTickLabelFormat",
          "normalized": "TickFormat-\u003eAxis()",
          "package": "plot",
          "partial": "Tick Label Format",
          "signature": "TickFormat-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setTickLabelFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea list of data labels\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTickLabels",
          "package": "plot",
          "signature": "[String] -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#setTickLabels",
          "type": "function"
        },
        "index": {
          "description": "list of data labels",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTickLabels",
          "normalized": "[String]-\u003eAxis()",
          "package": "plot",
          "partial": "Tick Labels",
          "signature": "[String]-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setTickLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the axis ticks\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTicks",
          "package": "plot",
          "signature": "Tick -\u003e TickValues -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#setTicks",
          "type": "function"
        },
        "index": {
          "description": "format the axis ticks",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "setTicks",
          "normalized": "Tick-\u003eTickValues-\u003eAxis()",
          "package": "plot",
          "partial": "Ticks",
          "signature": "Tick-\u003eTickValues-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:setTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "step",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "step",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd text\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "text",
          "package": "plot",
          "signature": "Location -\u003e Text () -\u003e Annote ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Annotation.html#text",
          "type": "function"
        },
        "index": {
          "description": "add text",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "text",
          "normalized": "Location-\u003eText()-\u003eAnnote()",
          "package": "plot",
          "signature": "Location-\u003eText()-\u003eAnnote()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "whisker",
          "package": "plot",
          "signature": "a -\u003e b -\u003e FormattedSeries",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Data.html#whisker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "whisker",
          "normalized": "a-\u003eb-\u003eFormattedSeries",
          "package": "plot",
          "signature": "a-\u003eb-\u003eFormattedSeries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:whisker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the plot elements of all series\n\u003c/p\u003e\u003cp\u003ethe operation to modify the formats is passed the series index.\n      This allows, for example, colours to be selected from a list\n      that gets indexed by the argument\n\u003c/p\u003e\u003cpre\u003e setColour = withAllSeriesFormats (\\i -\u003e do\n                                         setLineColour $ [black,blue,red,green,yellow] !! i\n                                         setLineWidth 1.0)\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAllSeriesFormats",
          "package": "plot",
          "signature": "(Int -\u003e m ()) -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withAllSeriesFormats",
          "type": "function"
        },
        "index": {
          "description": "format the plot elements of all series the operation to modify the formats is passed the series index This allows for example colours to be selected from list that gets indexed by the argument setColour withAllSeriesFormats do setLineColour black blue red green yellow setLineWidth",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAllSeriesFormats",
          "normalized": "(Int-\u003ea())-\u003ePlot()",
          "package": "plot",
          "partial": "All Series Formats",
          "signature": "(Int-\u003em())-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withAllSeriesFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAnnotations",
          "package": "plot",
          "signature": "Annote () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withAnnotations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAnnotations",
          "normalized": "Annote()-\u003ePlot()",
          "package": "plot",
          "partial": "Annotations",
          "signature": "Annote()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperate on the given axis\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxis",
          "package": "plot",
          "signature": "AxisType -\u003e AxisPosn -\u003e Axis () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withAxis",
          "type": "function"
        },
        "index": {
          "description": "operate on the given axis",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxis",
          "normalized": "AxisType-\u003eAxisPosn-\u003eAxis()-\u003ePlot()",
          "package": "plot",
          "partial": "Axis",
          "signature": "AxisType-\u003eAxisPosn-\u003eAxis()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperate on the axis label\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxisLabel",
          "package": "plot",
          "signature": "Text () -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#withAxisLabel",
          "type": "function"
        },
        "index": {
          "description": "operate on the axis label",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxisLabel",
          "normalized": "Text()-\u003eAxis()",
          "package": "plot",
          "partial": "Axis Label",
          "signature": "Text()-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withAxisLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the axis line\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxisLine",
          "package": "plot",
          "signature": "Line () -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#withAxisLine",
          "type": "function"
        },
        "index": {
          "description": "format the axis line",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withAxisLine",
          "normalized": "Line()-\u003eAxis()",
          "package": "plot",
          "partial": "Axis Line",
          "signature": "Line()-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withAxisLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the bar defaults, must be run before other point modifications\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withBarDefaults",
          "package": "plot",
          "signature": "Bar () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withBarDefaults",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the bar defaults must be run before other point modifications",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withBarDefaults",
          "normalized": "Bar()-\u003eFigure()",
          "package": "plot",
          "partial": "Bar Defaults",
          "signature": "Bar()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withBarDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the grid lines\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withGridLine",
          "package": "plot",
          "signature": "Tick -\u003e Line () -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#withGridLine",
          "type": "function"
        },
        "index": {
          "description": "format the grid lines",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withGridLine",
          "normalized": "Tick-\u003eLine()-\u003eAxis()",
          "package": "plot",
          "partial": "Grid Line",
          "signature": "Tick-\u003eLine()-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withGridLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the heading of the subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withHeading",
          "package": "plot",
          "signature": "Text () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withHeading",
          "type": "function"
        },
        "index": {
          "description": "set the heading of the subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withHeading",
          "normalized": "Text()-\u003ePlot()",
          "package": "plot",
          "partial": "Heading",
          "signature": "Text()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withHeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the legend text\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withLegendFormat",
          "package": "plot",
          "signature": "Text () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withLegendFormat",
          "type": "function"
        },
        "index": {
          "description": "format the legend text",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withLegendFormat",
          "normalized": "Text()-\u003ePlot()",
          "package": "plot",
          "partial": "Legend Format",
          "signature": "Text()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withLegendFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the line defaults, must be run before other line element modifications\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withLineDefaults",
          "package": "plot",
          "signature": "Line () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withLineDefaults",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the line defaults must be run before other line element modifications",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withLineDefaults",
          "normalized": "Line()-\u003eFigure()",
          "package": "plot",
          "partial": "Line Defaults",
          "signature": "Line()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withLineDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the specified subplot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPlot",
          "package": "plot",
          "signature": "(Int, Int) -\u003e Plot () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withPlot",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the specified subplot",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPlot",
          "normalized": "(Int,Int)-\u003ePlot()-\u003eFigure()",
          "package": "plot",
          "partial": "Plot",
          "signature": "(Int,Int)-\u003ePlot()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions all subplots\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPlots",
          "package": "plot",
          "signature": "Plot () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withPlots",
          "type": "function"
        },
        "index": {
          "description": "perform some actions all subplots",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPlots",
          "normalized": "Plot()-\u003eFigure()",
          "package": "plot",
          "partial": "Plots",
          "signature": "Plot()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withPlots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the point defaults, must be run before other point modifications\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPointDefaults",
          "package": "plot",
          "signature": "Point () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withPointDefaults",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the point defaults must be run before other point modifications",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withPointDefaults",
          "normalized": "Point()-\u003eFigure()",
          "package": "plot",
          "partial": "Point Defaults",
          "signature": "Point()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withPointDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the plot elements of a given series\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withSeriesFormat",
          "package": "plot",
          "signature": "Int -\u003e m () -\u003e Plot ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot.html#withSeriesFormat",
          "type": "function"
        },
        "index": {
          "description": "format the plot elements of given series",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withSeriesFormat",
          "normalized": "Int-\u003ea()-\u003ePlot()",
          "package": "plot",
          "partial": "Series Format",
          "signature": "Int-\u003em()-\u003ePlot()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withSeriesFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperate on the sub-title\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withSubTitle",
          "package": "plot",
          "signature": "Text () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withSubTitle",
          "type": "function"
        },
        "index": {
          "description": "operate on the sub-title",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withSubTitle",
          "normalized": "Text()-\u003eFigure()",
          "package": "plot",
          "partial": "Sub Title",
          "signature": "Text()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withSubTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the text defaults, must be run before other text element modifications\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTextDefaults",
          "package": "plot",
          "signature": "Text () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withTextDefaults",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the text defaults must be run before other text element modifications",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTextDefaults",
          "normalized": "Text()-\u003eFigure()",
          "package": "plot",
          "partial": "Text Defaults",
          "signature": "Text()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withTextDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformat the tick labels\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTickLabelsFormat",
          "package": "plot",
          "signature": "Text () -\u003e Axis ()",
          "source": "src/Graphics-Rendering-Plot-Figure-Plot-Axis.html#withTickLabelsFormat",
          "type": "function"
        },
        "index": {
          "description": "format the tick labels",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTickLabelsFormat",
          "normalized": "Text()-\u003eAxis()",
          "package": "plot",
          "partial": "Tick Labels Format",
          "signature": "Text()-\u003eAxis()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withTickLabelsFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoperate on the title\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTitle",
          "package": "plot",
          "signature": "Text () -\u003e Figure ()",
          "source": "src/Graphics-Rendering-Plot-Figure.html#withTitle",
          "type": "function"
        },
        "index": {
          "description": "operate on the title",
          "hierarchy": "Graphics Rendering Plot Figure",
          "module": "Graphics.Rendering.Plot.Figure",
          "name": "withTitle",
          "normalized": "Text()-\u003eFigure()",
          "package": "plot",
          "partial": "Title",
          "signature": "Text()-\u003eFigure()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Figure.html#v:withTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "Render",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering Figure",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "Render",
          "package": "plot",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput file type\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "OutputType",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot-Render-Types.html#OutputType",
          "type": "data"
        },
        "index": {
          "description": "output file type",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "OutputType",
          "package": "plot",
          "partial": "Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#t:OutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PDF",
          "package": "plot",
          "signature": "PDF",
          "source": "src/Graphics-Rendering-Plot-Render-Types.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PDF",
          "package": "plot",
          "partial": "PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PNG",
          "package": "plot",
          "signature": "PNG",
          "source": "src/Graphics-Rendering-Plot-Render-Types.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PNG",
          "package": "plot",
          "partial": "PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:PNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PS",
          "package": "plot",
          "signature": "PS",
          "source": "src/Graphics-Rendering-Plot-Render-Types.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "PS",
          "package": "plot",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Render",
          "name": "SVG",
          "package": "plot",
          "signature": "SVG",
          "source": "src/Graphics-Rendering-Plot-Render-Types.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "SVG",
          "package": "plot",
          "partial": "SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate \u003ccode\u003e\u003ca\u003eFigureState\u003c/a\u003e\u003c/code\u003e from a series of \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e actions\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "newFigureState",
          "package": "plot",
          "signature": "Figure () -\u003e IO FigureState",
          "source": "src/Graphics-Rendering-Plot-Render.html#newFigureState",
          "type": "function"
        },
        "index": {
          "description": "create FigureState from series of Figure actions",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "newFigureState",
          "normalized": "Figure()-\u003eIO FigureState",
          "package": "plot",
          "partial": "Figure State",
          "signature": "Figure()-\u003eIO FigureState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:newFigureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender a \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "render",
          "package": "plot",
          "signature": "Figure ()-\u003e (Int, Int)-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "render Figure",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "render",
          "normalized": "Figure()-\u003e(Int,Int)-\u003eRender()",
          "package": "plot",
          "signature": "Figure()-\u003e(Int,Int)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender a \u003ccode\u003e\u003ca\u003eFigureState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "renderFigureState",
          "package": "plot",
          "signature": "FigureState-\u003e (Int, Int)-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "description": "render FigureState",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "renderFigureState",
          "normalized": "FigureState-\u003e(Int,Int)-\u003eRender()",
          "package": "plot",
          "partial": "Figure State",
          "signature": "FigureState-\u003e(Int,Int)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:renderFigureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify a \u003ccode\u003e\u003ca\u003eFigureState\u003c/a\u003e\u003c/code\u003e with some new actions  \n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "updateFigureState",
          "package": "plot",
          "signature": "FigureState -\u003e Figure () -\u003e FigureState",
          "source": "src/Graphics-Rendering-Plot-Render.html#updateFigureState",
          "type": "function"
        },
        "index": {
          "description": "modify FigureState with some new actions",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "updateFigureState",
          "normalized": "FigureState-\u003eFigure()-\u003eFigureState",
          "package": "plot",
          "partial": "Figure State",
          "signature": "FigureState-\u003eFigure()-\u003eFigureState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:updateFigureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput the \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "writeFigure",
          "package": "plot",
          "signature": "OutputType-\u003e FilePath-\u003e (Int, Int)-\u003e Figure ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "output the Figure",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "writeFigure",
          "normalized": "OutputType-\u003eFilePath-\u003e(Int,Int)-\u003eFigure()-\u003eIO()",
          "package": "plot",
          "partial": "Figure",
          "signature": "OutputType-\u003eFilePath-\u003e(Int,Int)-\u003eFigure()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:writeFigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput the \u003ccode\u003e\u003ca\u003eFigureState\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "writeFigureState",
          "package": "plot",
          "signature": "OutputType-\u003e FilePath-\u003e (Int, Int)-\u003e FigureState-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "output the FigureState",
          "hierarchy": "Graphics Rendering Plot Render",
          "module": "Graphics.Rendering.Plot.Render",
          "name": "writeFigureState",
          "normalized": "OutputType-\u003eFilePath-\u003e(Int,Int)-\u003eFigureState-\u003eIO()",
          "package": "plot",
          "partial": "Figure State",
          "signature": "OutputType-\u003eFilePath-\u003e(Int,Int)-\u003eFigureState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot-Render.html#v:writeFigureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGraphical plots\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot",
          "name": "Plot",
          "package": "plot",
          "source": "src/Graphics-Rendering-Plot.html",
          "type": "module"
        },
        "index": {
          "description": "Graphical plots",
          "hierarchy": "Graphics Rendering Plot",
          "module": "Graphics.Rendering.Plot",
          "name": "Plot",
          "package": "plot",
          "partial": "Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot/docs/Graphics-Rendering-Plot.html#"
      }
    }
  ]
]