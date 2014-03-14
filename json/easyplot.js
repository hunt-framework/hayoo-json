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
        "word": "easyplot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple wrapper to the gnuplot command line utility.\n\u003c/p\u003e\u003cp\u003eTypically you will invoke a plot like so:\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Data2D [Title \"Sample Data\"] [] [(1, 2), (2, 4), ...]\n\u003c/pre\u003e\u003cp\u003eTo plot a function, use the following:\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Function2D [Title \"Sine and Cosine\"] [] (\\x -\u003e sin x * cos x)\n\u003c/pre\u003e\u003cp\u003eThere is also a shortcut available - the following plots the sine function:\n\u003c/p\u003e\u003cpre\u003e plot X11 sin\n\u003c/pre\u003e\u003cp\u003eOutput can go into a file, too (See \u003ccode\u003e\u003ca\u003eTerminalType\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e plot (PNG \"plot.png\") (sin . cos)\n\u003c/pre\u003e\u003cp\u003eHaskell functions are plotted via a set of tuples obtained form the function.\n If you want to make use of gnuplots mighty function plotting functions you can\n pass a \u003ccode\u003e\u003ca\u003eGnuplot2D\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eGnuplot3D\u003c/a\u003e\u003c/code\u003e object to plot.\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Gnuplot2D [Color Blue] [] \"2**cos(x)\"\n\u003c/pre\u003e\u003cp\u003eFor 3D-Plots there is a shortcut available by directly passing a String:\n\u003c/p\u003e\u003cpre\u003e plot X11 \"x*y\"\n\u003c/pre\u003e\u003cp\u003eMultiple graphs can be shown simply by passing a list of these:\n\u003c/p\u003e\u003cpre\u003e plot X11 [ Data2D [Title \"Graph 1\", Color Red] [] [(x, x ** 3) | x \u003c- [-4,-3.9..4]]\n          , Function2D [Title \"Function 2\", Color Blue] [] (\\x -\u003e negate $ x ** 2) ]\n\u003c/pre\u003e\u003cp\u003eFor 3D Graphs it is useful to be able to interact with the graph (See \u003ccode\u003e\u003ca\u003eplot'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGnuplotOption\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e plot' [Interactive] X11 $ Gnuplot3D [Color Magenta] [] \"x ** 2 + y ** 3\"\n\u003c/pre\u003e\u003cp\u003eIf you want to know the command that SimplePlot uses to plot your graph,\n turn on debugging:\n\u003c/p\u003e\u003cpre\u003e plot' [Debug] X11 $ Gnuplot3D [Color Magenta] [] \"x ** 4 + y ** 3\"\n \u003e set term x11 persist; splot x ** 4 + y ** 3 lc rgb \"magenta\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.EasyPlot",
          "name": "EasyPlot",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html",
          "type": "module"
        },
        "index": {
          "description": "simple wrapper to the gnuplot command line utility Typically you will invoke plot like so plot X11 Data2D Title Sample Data To plot function use the following plot X11 Function2D Title Sine and Cosine sin cos There is also shortcut available the following plots the sine function plot X11 sin Output can go into file too See TerminalType plot PNG plot.png sin cos Haskell functions are plotted via set of tuples obtained form the function If you want to make use of gnuplots mighty function plotting functions you can pass Gnuplot2D or Gnuplot3D object to plot plot X11 Gnuplot2D Color Blue cos For D-Plots there is shortcut available by directly passing String plot X11 Multiple graphs can be shown simply by passing list of these plot X11 Data2D Title Graph Color Red Function2D Title Function Color Blue negate For Graphs it is useful to be able to interact with the graph See plot and GnuplotOption plot Interactive X11 Gnuplot3D Color Magenta If you want to know the command that SimplePlot uses to plot your graph turn on debugging plot Debug X11 Gnuplot3D Color Magenta set term x11 persist splot lc rgb magenta",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "EasyPlot",
          "package": "easyplot",
          "partial": "Easy Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Color of a graph.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Color",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "data"
        },
        "index": {
          "description": "The Color of graph",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Color",
          "package": "easyplot",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions which can be used with \u003ccode\u003e\u003ca\u003eplot'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "GnuplotOption",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#GnuplotOption",
          "type": "data"
        },
        "index": {
          "description": "Options which can be used with plot",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "GnuplotOption",
          "package": "easyplot",
          "partial": "Gnuplot Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:GnuplotOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA two dimensional set of data to plot.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Graph2D",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Graph2D",
          "type": "data"
        },
        "index": {
          "description": "two dimensional set of data to plot",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Graph2D",
          "package": "easyplot",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Graph2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA three dimensional set of data to plot.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Graph3D",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Graph3D",
          "type": "data"
        },
        "index": {
          "description": "three dimensional set of data to plot",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Graph3D",
          "package": "easyplot",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Graph3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions on how to render a graph.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Option",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Option",
          "type": "data"
        },
        "index": {
          "description": "Options on how to render graph",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Option",
          "package": "easyplot",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions which are exclusively available for 2D plots.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Option2D",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Option2D",
          "type": "data"
        },
        "index": {
          "description": "Options which are exclusively available for plots",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Option2D",
          "package": "easyplot",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions which are exclusively available for 3D plots.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Option3D",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "data"
        },
        "index": {
          "description": "Options which are exclusively available for plots",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Option3D",
          "package": "easyplot",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the plot function for different kinds of graphs (2D and 3D)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Plot",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Plot",
          "type": "class"
        },
        "index": {
          "description": "Provides the plot function for different kinds of graphs and",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Plot",
          "package": "easyplot",
          "partial": "Plot",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Style of a graph.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Style",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "data"
        },
        "index": {
          "description": "The Style of graph",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Style",
          "package": "easyplot",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminalType determines where the output of gnuplot should go.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "TerminalType",
          "package": "easyplot",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "data"
        },
        "index": {
          "description": "TerminalType determines where the output of gnuplot should go",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "TerminalType",
          "package": "easyplot",
          "partial": "Terminal Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:TerminalType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput on Mac OS X (Aqua Terminal).\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Aqua",
          "package": "easyplot",
          "signature": "Aqua",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output on Mac OS Aqua Terminal",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Aqua",
          "package": "easyplot",
          "partial": "Aqua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Aqua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Black",
          "package": "easyplot",
          "signature": "Black",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Black",
          "package": "easyplot",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Blue",
          "package": "easyplot",
          "signature": "Blue",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Blue",
          "package": "easyplot",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Brown",
          "package": "easyplot",
          "signature": "Brown",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Brown",
          "package": "easyplot",
          "partial": "Brown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line-color for the graph (or if it consist of \u003ccode\u003e\u003ca\u003eDots\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePoints\u003c/a\u003e\u003c/code\u003e the color of these)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Color",
          "package": "easyplot",
          "signature": "Color Color",
          "source": "src/Graphics-EasyPlot.html#Option",
          "type": "function"
        },
        "index": {
          "description": "The line-color for the graph or if it consist of Dots or Points the color of these",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Color",
          "package": "easyplot",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Cyan",
          "package": "easyplot",
          "signature": "Cyan",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Cyan",
          "package": "easyplot",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkBlue",
          "package": "easyplot",
          "signature": "DarkBlue",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkBlue",
          "package": "easyplot",
          "partial": "Dark Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkCyan",
          "package": "easyplot",
          "signature": "DarkCyan",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkCyan",
          "package": "easyplot",
          "partial": "Dark Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkCyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkGreen",
          "package": "easyplot",
          "signature": "DarkGreen",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkGreen",
          "package": "easyplot",
          "partial": "Dark Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkGrey",
          "package": "easyplot",
          "signature": "DarkGrey",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkGrey",
          "package": "easyplot",
          "partial": "Dark Grey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkGrey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkMagenta",
          "package": "easyplot",
          "signature": "DarkMagenta",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkMagenta",
          "package": "easyplot",
          "partial": "Dark Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkOrange",
          "package": "easyplot",
          "signature": "DarkOrange",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkOrange",
          "package": "easyplot",
          "partial": "Dark Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkOrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkRed",
          "package": "easyplot",
          "signature": "DarkRed",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkRed",
          "package": "easyplot",
          "partial": "Dark Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "DarkYellow",
          "package": "easyplot",
          "signature": "DarkYellow",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "DarkYellow",
          "package": "easyplot",
          "partial": "Dark Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a set of tuples.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Data2D",
          "package": "easyplot",
          "signature": "Data2D [Option] [Option2D x y] [(x, y)]",
          "source": "src/Graphics-EasyPlot.html#Graph2D",
          "type": "function"
        },
        "index": {
          "description": "plots set of tuples",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Data2D",
          "normalized": "Data D[Option][Option D a b][(a,b)]",
          "package": "easyplot",
          "partial": "Data",
          "signature": "Data D[Option][Option D x y][(x,y)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Data2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a set of triples.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Data3D",
          "package": "easyplot",
          "signature": "Data3D [Option] [Option3D x y z] [(x, y, z)]",
          "source": "src/Graphics-EasyPlot.html#Graph3D",
          "type": "function"
        },
        "index": {
          "description": "plots set of triples",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Data3D",
          "normalized": "Data D[Option][Option D a b c][(a,b,c)]",
          "package": "easyplot",
          "partial": "Data",
          "signature": "Data D[Option][Option D x y z][(x,y,z)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Data3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprints the command used for running gnuplot.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Debug",
          "package": "easyplot",
          "signature": "Debug",
          "source": "src/Graphics-EasyPlot.html#GnuplotOption",
          "type": "function"
        },
        "index": {
          "description": "prints the command used for running gnuplot",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Debug",
          "package": "easyplot",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata points are real dots (approx the size of a pixel).\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Dots",
          "package": "easyplot",
          "signature": "Dots",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "function"
        },
        "index": {
          "description": "data points are real dots approx the size of pixel",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Dots",
          "package": "easyplot",
          "partial": "Dots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Dots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput into an EPS file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "EPS",
          "package": "easyplot",
          "signature": "EPS FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output into an EPS file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "EPS",
          "package": "easyplot",
          "partial": "EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function only for the given x values\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "For",
          "package": "easyplot",
          "signature": "For [x]",
          "source": "src/Graphics-EasyPlot.html#Option2D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function only for the given values",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "For",
          "normalized": "For[a]",
          "package": "easyplot",
          "partial": "For",
          "signature": "For[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function only for the given x values\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "ForX",
          "package": "easyplot",
          "signature": "ForX [x]",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function only for the given values",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "ForX",
          "normalized": "ForX[a]",
          "package": "easyplot",
          "partial": "For",
          "signature": "ForX[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:ForX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function only for the given y values\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "ForY",
          "package": "easyplot",
          "signature": "ForY [y]",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function only for the given values",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "ForY",
          "normalized": "ForY[a]",
          "package": "easyplot",
          "partial": "For",
          "signature": "ForY[y]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:ForY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a Haskell function \u003ccode\u003ex -\u003e y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Function2D",
          "package": "easyplot",
          "signature": "Function2D [Option] [Option2D x y] (x -\u003e y)",
          "source": "src/Graphics-EasyPlot.html#Graph2D",
          "type": "function"
        },
        "index": {
          "description": "plots Haskell function",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Function2D",
          "normalized": "Function D[Option][Option D a b](a-\u003eb)",
          "package": "easyplot",
          "partial": "Function",
          "signature": "Function D[Option][Option D x y](x-\u003ey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Function2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a Haskell function \u003ccode\u003ex -\u003e y -\u003e z\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Function3D",
          "package": "easyplot",
          "signature": "Function3D [Option] [Option3D x y z] (x -\u003e y -\u003e z)",
          "source": "src/Graphics-EasyPlot.html#Graph3D",
          "type": "function"
        },
        "index": {
          "description": "plots Haskell function",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Function3D",
          "normalized": "Function D[Option][Option D a b c](a-\u003eb-\u003ec)",
          "package": "easyplot",
          "partial": "Function",
          "signature": "Function D[Option][Option D x y z](x-\u003ey-\u003ez)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Function3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput as Graphics Interchange Format into a file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "GIF",
          "package": "easyplot",
          "signature": "GIF FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output as Graphics Interchange Format into file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "GIF",
          "package": "easyplot",
          "partial": "GIF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:GIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a custom function passed to Gnuplot (like \u003ccode\u003ex**2 + 10\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Gnuplot2D",
          "package": "easyplot",
          "signature": "Gnuplot2D [Option] [Option2D x y] String",
          "source": "src/Graphics-EasyPlot.html#Graph2D",
          "type": "function"
        },
        "index": {
          "description": "plots custom function passed to Gnuplot like",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Gnuplot2D",
          "normalized": "Gnuplot D[Option][Option D a b]String",
          "package": "easyplot",
          "partial": "Gnuplot",
          "signature": "Gnuplot D[Option][Option D x y]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Gnuplot2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplots a custom function passed to Gnuplot (like \u003ccode\u003ex*y\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Gnuplot3D",
          "package": "easyplot",
          "signature": "Gnuplot3D [Option] [Option3D x y z] String",
          "source": "src/Graphics-EasyPlot.html#Graph3D",
          "type": "function"
        },
        "index": {
          "description": "plots custom function passed to Gnuplot like",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Gnuplot3D",
          "normalized": "Gnuplot D[Option][Option D a b c]String",
          "package": "easyplot",
          "partial": "Gnuplot",
          "signature": "Gnuplot D[Option][Option D x y z]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Gnuplot3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Green",
          "package": "easyplot",
          "signature": "Green",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Green",
          "package": "easyplot",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Grey",
          "package": "easyplot",
          "signature": "Grey",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Grey",
          "package": "easyplot",
          "partial": "Grey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Impulses",
          "package": "easyplot",
          "signature": "Impulses",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Impulses",
          "package": "easyplot",
          "partial": "Impulses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Impulses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekeeps gnuplot open, so that you can interact with the plot (only usefull with \u003ccode\u003e\u003ca\u003eX11\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Interactive",
          "package": "easyplot",
          "signature": "Interactive",
          "source": "src/Graphics-EasyPlot.html#GnuplotOption",
          "type": "function"
        },
        "index": {
          "description": "keeps gnuplot open so that you can interact with the plot only usefull with X11",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Interactive",
          "package": "easyplot",
          "partial": "Interactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Interactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput into a JPEG file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "JPEG",
          "package": "easyplot",
          "signature": "JPEG FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output into JPEG file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "JPEG",
          "package": "easyplot",
          "partial": "JPEG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:JPEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput as LaTeX.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Latex",
          "package": "easyplot",
          "signature": "Latex FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output as LaTeX",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Latex",
          "package": "easyplot",
          "partial": "Latex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Latex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "LightBlue",
          "package": "easyplot",
          "signature": "LightBlue",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "LightBlue",
          "package": "easyplot",
          "partial": "Light Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "LightGreen",
          "package": "easyplot",
          "signature": "LightGreen",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "LightGreen",
          "package": "easyplot",
          "partial": "Light Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "LightMagenta",
          "package": "easyplot",
          "signature": "LightMagenta",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "LightMagenta",
          "package": "easyplot",
          "partial": "Light Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "LightRed",
          "package": "easyplot",
          "signature": "LightRed",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "LightRed",
          "package": "easyplot",
          "partial": "Light Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoints in the plot are interconnected by lines.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Lines",
          "package": "easyplot",
          "signature": "Lines",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "function"
        },
        "index": {
          "description": "points in the plot are interconnected by lines",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Lines",
          "package": "easyplot",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Linespoints",
          "package": "easyplot",
          "signature": "Linespoints",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Linespoints",
          "package": "easyplot",
          "partial": "Linespoints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Linespoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Magenta",
          "package": "easyplot",
          "signature": "Magenta",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Magenta",
          "package": "easyplot",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Orange",
          "package": "easyplot",
          "signature": "Orange",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Orange",
          "package": "easyplot",
          "partial": "Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput as Portable Document Format into a file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "PDF",
          "package": "easyplot",
          "signature": "PDF FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output as Portable Document Format into file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "PDF",
          "package": "easyplot",
          "partial": "PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput as Portable Network Graphic into file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "PNG",
          "package": "easyplot",
          "signature": "PNG FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output as Portable Network Graphic into file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "PNG",
          "package": "easyplot",
          "partial": "PNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput into a Postscript file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "PS",
          "package": "easyplot",
          "signature": "PS FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output into Postscript file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "PS",
          "package": "easyplot",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata points are little cross symbols.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Points",
          "package": "easyplot",
          "signature": "Points",
          "source": "src/Graphics-EasyPlot.html#Style",
          "type": "function"
        },
        "index": {
          "description": "data points are little cross symbols",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Points",
          "package": "easyplot",
          "partial": "Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea custom color\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "RGB",
          "package": "easyplot",
          "signature": "RGB Int Int Int",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "description": "custom color",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "RGB",
          "package": "easyplot",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function for the specified x range\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Range",
          "package": "easyplot",
          "signature": "Range x x",
          "source": "src/Graphics-EasyPlot.html#Option2D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function for the specified range",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Range",
          "package": "easyplot",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function for the specified x range\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "RangeX",
          "package": "easyplot",
          "signature": "RangeX x x",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function for the specified range",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "RangeX",
          "package": "easyplot",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RangeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots the function for the specified y range\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "RangeY",
          "package": "easyplot",
          "signature": "RangeY y y",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Plots the function for the specified range",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "RangeY",
          "package": "easyplot",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RangeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Red",
          "package": "easyplot",
          "signature": "Red",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Red",
          "package": "easyplot",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput as Scalable Vector Graphic into a file.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "SVG",
          "package": "easyplot",
          "signature": "SVG FilePath",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output as Scalable Vector Graphic into file",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "SVG",
          "package": "easyplot",
          "partial": "SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:SVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the given step-size for plotting along the x-axis\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Step",
          "package": "easyplot",
          "signature": "Step x",
          "source": "src/Graphics-EasyPlot.html#Option2D",
          "type": "function"
        },
        "index": {
          "description": "Uses the given step-size for plotting along the x-axis",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Step",
          "package": "easyplot",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the given step-size for plotting along the x-axis\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "StepX",
          "package": "easyplot",
          "signature": "StepX x",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Uses the given step-size for plotting along the x-axis",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "StepX",
          "package": "easyplot",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:StepX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the given step-size for plotting along the y-axis\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "StepY",
          "package": "easyplot",
          "signature": "StepY y",
          "source": "src/Graphics-EasyPlot.html#Option3D",
          "type": "function"
        },
        "index": {
          "description": "Uses the given step-size for plotting along the y-axis",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "StepY",
          "package": "easyplot",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:StepY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe style for a graph.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Style",
          "package": "easyplot",
          "signature": "Style Style",
          "source": "src/Graphics-EasyPlot.html#Option",
          "type": "function"
        },
        "index": {
          "description": "The style for graph",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Style",
          "package": "easyplot",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe title for a graph in a plot (or a filename like \u003ccode\u003eplot1.dat\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Title",
          "package": "easyplot",
          "signature": "Title String",
          "source": "src/Graphics-EasyPlot.html#Option",
          "type": "function"
        },
        "index": {
          "description": "The title for graph in plot or filename like plot1.dat",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Title",
          "package": "easyplot",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Violet",
          "package": "easyplot",
          "signature": "Violet",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Violet",
          "package": "easyplot",
          "partial": "Violet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "White",
          "package": "easyplot",
          "signature": "White",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "White",
          "package": "easyplot",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput for MS Windows.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "Windows",
          "package": "easyplot",
          "signature": "Windows",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output for MS Windows",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Windows",
          "package": "easyplot",
          "partial": "Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput to the X Window System.\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "X11",
          "package": "easyplot",
          "signature": "X11",
          "source": "src/Graphics-EasyPlot.html#TerminalType",
          "type": "function"
        },
        "index": {
          "description": "Output to the Window System",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "X11",
          "package": "easyplot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:X11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "Yellow",
          "package": "easyplot",
          "signature": "Yellow",
          "source": "src/Graphics-EasyPlot.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "Yellow",
          "package": "easyplot",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a plot to the terminal (i.e. a window will open and your plot can be seen)\n\u003c/p\u003e",
          "module": "Graphics.EasyPlot",
          "name": "plot",
          "package": "easyplot",
          "signature": "plot",
          "source": "src/Graphics-EasyPlot.html#plot",
          "type": "method"
        },
        "index": {
          "description": "Do plot to the terminal i.e window will open and your plot can be seen",
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "plot",
          "package": "easyplot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyPlot",
          "name": "plot'",
          "package": "easyplot",
          "signature": "[GnuplotOption] -\u003e TerminalType -\u003e a -\u003e IO Bool",
          "source": "src/Graphics-EasyPlot.html#plot%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics EasyPlot",
          "module": "Graphics.EasyPlot",
          "name": "plot'",
          "normalized": "[GnuplotOption]-\u003eTerminalType-\u003ea-\u003eIO Bool",
          "package": "easyplot",
          "signature": "[GnuplotOption]-\u003eTerminalType-\u003ea-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:plot-39-"
      }
    }
  ]
]