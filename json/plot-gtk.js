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
        "word": "plot-gtk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnables the display of \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003es interactively through GHCi\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "Gtk",
          "package": "plot-gtk",
          "source": "src/Graphics-Rendering-Plot-Gtk.html",
          "type": "module"
        },
        "index": {
          "description": "Enables the display of Figure interactively through GHCi",
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "Gtk",
          "package": "plot-gtk",
          "partial": "Gtk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "PlotHandle",
          "package": "plot-gtk",
          "source": "src/Graphics-Rendering-Plot-Gtk.html#PlotHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "PlotHandle",
          "package": "plot-gtk",
          "partial": "Plot Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#t:PlotHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclose a plot\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "destroy",
          "package": "plot-gtk",
          "signature": "PlotHandle -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-Gtk.html#destroy",
          "type": "function"
        },
        "index": {
          "description": "close plot",
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "destroy",
          "normalized": "PlotHandle-\u003eIO()",
          "package": "plot-gtk",
          "signature": "PlotHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new figure and display the plot\n     click on the window to save\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "display",
          "package": "plot-gtk",
          "signature": "Figure () -\u003e IO PlotHandle",
          "source": "src/Graphics-Rendering-Plot-Gtk.html#display",
          "type": "function"
        },
        "index": {
          "description": "create new figure and display the plot click on the window to save",
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "display",
          "normalized": "Figure()-\u003eIO PlotHandle",
          "package": "plot-gtk",
          "signature": "Figure()-\u003eIO PlotHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform some actions on the supplied \u003ccode\u003e\u003ca\u003ePlotHandle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "withPlotHandle",
          "package": "plot-gtk",
          "signature": "PlotHandle -\u003e Figure () -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-Gtk.html#withPlotHandle",
          "type": "function"
        },
        "index": {
          "description": "perform some actions on the supplied PlotHandle",
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "withPlotHandle",
          "normalized": "PlotHandle-\u003eFigure()-\u003eIO()",
          "package": "plot-gtk",
          "partial": "Plot Handle",
          "signature": "PlotHandle-\u003eFigure()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#v:withPlotHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite the \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e to disk\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "writePlotHandle",
          "package": "plot-gtk",
          "signature": "PlotHandle -\u003e OutputType -\u003e FilePath -\u003e (Int, Int) -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-Gtk.html#writePlotHandle",
          "type": "function"
        },
        "index": {
          "description": "write the Figure to disk",
          "hierarchy": "Graphics Rendering Plot Gtk",
          "module": "Graphics.Rendering.Plot.Gtk",
          "name": "writePlotHandle",
          "normalized": "PlotHandle-\u003eOutputType-\u003eFilePath-\u003e(Int,Int)-\u003eIO()",
          "package": "plot-gtk",
          "partial": "Plot Handle",
          "signature": "PlotHandle-\u003eOutputType-\u003eFilePath-\u003e(Int,Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-Gtk.html#v:writePlotHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatability module to replace \u003ca\u003eGraphics.Plot\u003c/a\u003e of the \u003ccode\u003ehmatrix\u003c/code\u003e module\n\u003c/p\u003e\u003cp\u003eProvides all functions from hmatrix's \u003ca\u003eGraphics.Plot\u003c/a\u003e as well as \n those functions appended with \u003ccode\u003eH\u003c/code\u003e which return a \u003ccode\u003e\u003ca\u003ePlotHandle\u003c/a\u003e\u003c/code\u003e for\n interactive update.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "HMatrix",
          "package": "plot-gtk",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html",
          "type": "module"
        },
        "index": {
          "description": "Compatability module to replace Graphics.Plot of the hmatrix module Provides all functions from hmatrix Graphics.Plot as well as those functions appended with which return PlotHandle for interactive update",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "HMatrix",
          "package": "plot-gtk",
          "partial": "HMatrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egreyscaleH shows a representation of a matrix as a gray level image.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "greyscaleH",
          "package": "plot-gtk",
          "signature": "Matrix Double -\u003e IO PlotHandle",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#greyscaleH",
          "type": "function"
        },
        "index": {
          "description": "greyscaleH shows representation of matrix as gray level image",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "greyscaleH",
          "normalized": "Matrix Double-\u003eIO PlotHandle",
          "package": "plot-gtk",
          "signature": "Matrix Double-\u003eIO PlotHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:greyscaleH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimshow shows a representation of a matrix as a gray level image.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "imshow",
          "package": "plot-gtk",
          "signature": "Matrix Double -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#imshow",
          "type": "function"
        },
        "index": {
          "description": "imshow shows representation of matrix as gray level image",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "imshow",
          "normalized": "Matrix Double-\u003eIO()",
          "package": "plot-gtk",
          "signature": "Matrix Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:imshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrites a matrix to pgm image file\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "matrixToPGM",
          "package": "plot-gtk",
          "signature": "Matrix Double -\u003e String",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#matrixToPGM",
          "type": "function"
        },
        "index": {
          "description": "writes matrix to pgm image file",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "matrixToPGM",
          "normalized": "Matrix Double-\u003eString",
          "package": "plot-gtk",
          "partial": "To PGM",
          "signature": "Matrix Double-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:matrixToPGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a 3D surface representation of a real matrix.\n\u003c/p\u003e\u003cpre\u003e \u003e mesh (hilb 20)\n\u003c/pre\u003e\u003cp\u003eIn certain versions you can interactively rotate the graphic using the mouse.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mesh",
          "package": "plot-gtk",
          "signature": "Matrix Double -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#mesh",
          "type": "function"
        },
        "index": {
          "description": "Draws surface representation of real matrix mesh hilb In certain versions you can interactively rotate the graphic using the mouse",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mesh",
          "normalized": "Matrix Double-\u003eIO()",
          "package": "plot-gtk",
          "signature": "Matrix Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:mesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom vectors x and y, it generates a pair of matrices to be used as x and y arguments for matrix functions.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "meshdom",
          "package": "plot-gtk",
          "signature": "Vector Double -\u003e Vector Double -\u003e (Matrix Double, Matrix Double)",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#meshdom",
          "type": "function"
        },
        "index": {
          "description": "From vectors and it generates pair of matrices to be used as and arguments for matrix functions",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "meshdom",
          "normalized": "Vector Double-\u003eVector Double-\u003e(Matrix Double,Matrix Double)",
          "package": "plot-gtk",
          "signature": "Vector Double-\u003eVector Double-\u003e(Matrix Double,Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:meshdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplot several vectors against the first\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mplot",
          "package": "plot-gtk",
          "signature": "[Vector Double] -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#mplot",
          "type": "function"
        },
        "index": {
          "description": "plot several vectors against the first",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mplot",
          "normalized": "[Vector Double]-\u003eIO()",
          "package": "plot-gtk",
          "signature": "[Vector Double]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:mplot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplot several vectors against the first\n\u003c/p\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mplotH",
          "package": "plot-gtk",
          "signature": "[Vector Double] -\u003e IO PlotHandle",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#mplotH",
          "type": "function"
        },
        "index": {
          "description": "plot several vectors against the first",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "mplotH",
          "normalized": "[Vector Double]-\u003eIO PlotHandle",
          "package": "plot-gtk",
          "signature": "[Vector Double]-\u003eIO PlotHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:mplotH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a parametric curve. For instance, to draw a spiral we can do something like:\n\u003c/p\u003e\u003cpre\u003e \u003e parametricPlot (\\t-\u003e(t * sin t, t * cos t)) (0,10*pi) 1000\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "parametricPlot",
          "package": "plot-gtk",
          "signature": "(Vector Double -\u003e (Vector Double, Vector Double)) -\u003e (Double, Double) -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#parametricPlot",
          "type": "function"
        },
        "index": {
          "description": "Draws parametric curve For instance to draw spiral we can do something like parametricPlot sin cos pi",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "parametricPlot",
          "normalized": "(Vector Double-\u003e(Vector Double,Vector Double))-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "package": "plot-gtk",
          "partial": "Plot",
          "signature": "(Vector Double-\u003e(Vector Double,Vector Double))-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:parametricPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a parametric curve. For instance, to draw a spiral we can do something like:\n\u003c/p\u003e\u003cpre\u003e \u003e parametricPlot (\\t-\u003e(t * sin t, t * cos t)) (0,10*pi) 1000\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "parametricPlotH",
          "package": "plot-gtk",
          "signature": "(Vector Double -\u003e (Vector Double, Vector Double)) -\u003e (Double, Double) -\u003e Int -\u003e IO PlotHandle",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#parametricPlotH",
          "type": "function"
        },
        "index": {
          "description": "Draws parametric curve For instance to draw spiral we can do something like parametricPlot sin cos pi",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "parametricPlotH",
          "normalized": "(Vector Double-\u003e(Vector Double,Vector Double))-\u003e(Double,Double)-\u003eInt-\u003eIO PlotHandle",
          "package": "plot-gtk",
          "partial": "Plot",
          "signature": "(Vector Double-\u003e(Vector Double,Vector Double))-\u003e(Double,Double)-\u003eInt-\u003eIO PlotHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:parametricPlotH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a list of functions over a desired range and with a desired number of points \n\u003c/p\u003e\u003cpre\u003e \u003e plot [sin, cos, sin.(3*)] (0,2*pi) 1000\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "plot",
          "package": "plot-gtk",
          "signature": "[Vector Double -\u003e Vector Double] -\u003e (Double, Double) -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#plot",
          "type": "function"
        },
        "index": {
          "description": "Draws list of functions over desired range and with desired number of points plot sin cos sin pi",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "plot",
          "normalized": "[Vector Double-\u003eVector Double]-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "package": "plot-gtk",
          "signature": "[Vector Double-\u003eVector Double]-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a list of functions over a desired range and with a desired number of points \n\u003c/p\u003e\u003cpre\u003e \u003e plot [sin, cos, sin.(3*)] (0,2*pi) 1000\n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "plotH",
          "package": "plot-gtk",
          "signature": "[Vector Double -\u003e Vector Double] -\u003e (Double, Double) -\u003e Int -\u003e IO PlotHandle",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#plotH",
          "type": "function"
        },
        "index": {
          "description": "Draws list of functions over desired range and with desired number of points plot sin cos sin pi",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "plotH",
          "normalized": "[Vector Double-\u003eVector Double]-\u003e(Double,Double)-\u003eInt-\u003eIO PlotHandle",
          "package": "plot-gtk",
          "signature": "[Vector Double-\u003eVector Double]-\u003e(Double,Double)-\u003eInt-\u003eIO PlotHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:plotH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the surface represented by the function f in the desired ranges and number of points, internally using \u003ccode\u003e\u003ca\u003emesh\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e let f x y = cos (x + y) \n \u003e splot f (0,pi) (0,2*pi) 50    \n\u003c/pre\u003e",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "splot",
          "package": "plot-gtk",
          "signature": "(Matrix Double -\u003e Matrix Double -\u003e Matrix Double) -\u003e (Double, Double) -\u003e (Double, Double) -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-Rendering-Plot-HMatrix.html#splot",
          "type": "function"
        },
        "index": {
          "description": "Draws the surface represented by the function in the desired ranges and number of points internally using mesh let cos splot pi pi",
          "hierarchy": "Graphics Rendering Plot HMatrix",
          "module": "Graphics.Rendering.Plot.HMatrix",
          "name": "splot",
          "normalized": "(Matrix Double-\u003eMatrix Double-\u003eMatrix Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "package": "plot-gtk",
          "signature": "(Matrix Double-\u003eMatrix Double-\u003eMatrix Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-Rendering-Plot-HMatrix.html#v:splot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDrawingArea\u003c/a\u003e\u003c/code\u003e widget that displays \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "Plot",
          "package": "plot-gtk",
          "source": "src/Graphics-UI-Gtk-Plot.html",
          "type": "module"
        },
        "index": {
          "description": "DrawingArea widget that displays Figure",
          "hierarchy": "Graphics UI Gtk Plot",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "Plot",
          "package": "plot-gtk",
          "partial": "Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-UI-Gtk-Plot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Gtk.Plot",
          "name": "FigureHandle",
          "package": "plot-gtk",
          "source": "src/Graphics-UI-Gtk-Plot.html#FigureHandle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Gtk Plot",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "FigureHandle",
          "package": "plot-gtk",
          "partial": "Figure Handle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-UI-Gtk-Plot.html#t:FigureHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe figure attribute\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "figure",
          "package": "plot-gtk",
          "signature": "Attr DrawingArea FigureState",
          "source": "src/Graphics-UI-Gtk-Plot.html#figure",
          "type": "function"
        },
        "index": {
          "description": "the figure attribute",
          "hierarchy": "Graphics UI Gtk Plot",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "figure",
          "package": "plot-gtk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-UI-Gtk-Plot.html#v:figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new \u003ccode\u003e\u003ca\u003eFigure\u003c/a\u003e\u003c/code\u003e plot\n     click on the window to save\n\u003c/p\u003e",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "plotNew",
          "package": "plot-gtk",
          "signature": "FigureHandle -\u003e IO DrawingArea",
          "source": "src/Graphics-UI-Gtk-Plot.html#plotNew",
          "type": "function"
        },
        "index": {
          "description": "create new Figure plot click on the window to save",
          "hierarchy": "Graphics UI Gtk Plot",
          "module": "Graphics.UI.Gtk.Plot",
          "name": "plotNew",
          "normalized": "FigureHandle-\u003eIO DrawingArea",
          "package": "plot-gtk",
          "partial": "New",
          "signature": "FigureHandle-\u003eIO DrawingArea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plot-gtk/docs/Graphics-UI-Gtk-Plot.html#v:plotNew"
      }
    }
  ]
]