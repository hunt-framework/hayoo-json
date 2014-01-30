[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple wrapper to the gnuplot command line utility.\n\u003c/p\u003e\u003cp\u003eTypically you will invoke a plot like so:\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Data2D [Title \"Sample Data\"] [] [(1, 2), (2, 4), ...]\n\u003c/pre\u003e\u003cp\u003eTo plot a function, use the following:\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Function2D [Title \"Sine and Cosine\"] [] (\\x -\u003e sin x * cos x)\n\u003c/pre\u003e\u003cp\u003eThere is also a shortcut available - the following plots the sine function:\n\u003c/p\u003e\u003cpre\u003e plot X11 sin\n\u003c/pre\u003e\u003cp\u003eOutput can go into a file, too (See \u003ccode\u003e\u003ca\u003eTerminalType\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e plot (PNG \"plot.png\") (sin . cos)\n\u003c/pre\u003e\u003cp\u003eHaskell functions are plotted via a set of tuples obtained form the function.\n If you want to make use of gnuplots mighty function plotting functions you can\n pass a \u003ccode\u003e\u003ca\u003eGnuplot2D\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eGnuplot3D\u003c/a\u003e\u003c/code\u003e object to plot.\n\u003c/p\u003e\u003cpre\u003e plot X11 $ Gnuplot2D [Color Blue] [] \"2**cos(x)\"\n\u003c/pre\u003e\u003cp\u003eFor 3D-Plots there is a shortcut available by directly passing a String:\n\u003c/p\u003e\u003cpre\u003e plot X11 \"x*y\"\n\u003c/pre\u003e\u003cp\u003eMultiple graphs can be shown simply by passing a list of these:\n\u003c/p\u003e\u003cpre\u003e plot X11 [ Data2D [Title \"Graph 1\", Color Red] [] [(x, x ** 3) | x \u003c- [-4,-3.9..4]]\n          , Function2D [Title \"Function 2\", Color Blue] [] (\\x -\u003e negate $ x ** 2) ]\n\u003c/pre\u003e\u003cp\u003eFor 3D Graphs it is useful to be able to interact with the graph (See \u003ccode\u003e\u003ca\u003eplot'\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eGnuplotOption\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e plot' [Interactive] X11 $ Gnuplot3D [Color Magenta] [] \"x ** 2 + y ** 3\"\n\u003c/pre\u003e\u003cp\u003eIf you want to know the command that SimplePlot uses to plot your graph,\n turn on debugging:\n\u003c/p\u003e\u003cpre\u003e plot' [Debug] X11 $ Gnuplot3D [Color Magenta] [] \"x ** 4 + y ** 3\"\n \u003e set term x11 persist; splot x ** 4 + y ** 3 lc rgb \"magenta\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "module",
        "fct-source": "src/Graphics-EasyPlot.html",
        "fct-type": "module",
        "title": "EasyPlot"
      },
      "index": {
        "description": "simple wrapper to the gnuplot command line utility Typically you will invoke plot like so plot X11 Data2D Title Sample Data To plot function use the following plot X11 Function2D Title Sine and Cosine sin cos There is also shortcut available the following plots the sine function plot X11 sin Output can go into file too See TerminalType plot PNG plot.png sin cos Haskell functions are plotted via set of tuples obtained form the function If you want to make use of gnuplots mighty function plotting functions you can pass Gnuplot2D or Gnuplot3D object to plot plot X11 Gnuplot2D Color Blue cos For D-Plots there is shortcut available by directly passing String plot X11 Multiple graphs can be shown simply by passing list of these plot X11 Data2D Title Graph Color Red Function2D Title Function Color Blue negate For Graphs it is useful to be able to interact with the graph See plot and GnuplotOption plot Interactive X11 Gnuplot3D Color Magenta If you want to know the command that SimplePlot uses to plot your graph turn on debugging plot Debug X11 Gnuplot3D Color Magenta set term x11 persist splot lc rgb magenta",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "EasyPlot",
        "normalized": "",
        "package": "easyplot",
        "partial": "Easy Plot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe Color of a graph.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "The Color of graph",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Color",
        "normalized": "",
        "package": "easyplot",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:GnuplotOption",
      "description": {
        "fct-descr": "\u003cp\u003eOptions which can be used with \u003ccode\u003e\u003ca\u003eplot'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#GnuplotOption",
        "fct-type": "data",
        "title": "GnuplotOption"
      },
      "index": {
        "description": "Options which can be used with plot",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "GnuplotOption",
        "normalized": "",
        "package": "easyplot",
        "partial": "Gnuplot Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Graph2D",
      "description": {
        "fct-descr": "\u003cp\u003eA two dimensional set of data to plot.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Graph2D",
        "fct-type": "data",
        "title": "Graph2D"
      },
      "index": {
        "description": "two dimensional set of data to plot",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Graph2D",
        "normalized": "",
        "package": "easyplot",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Graph3D",
      "description": {
        "fct-descr": "\u003cp\u003eA three dimensional set of data to plot.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Graph3D",
        "fct-type": "data",
        "title": "Graph3D"
      },
      "index": {
        "description": "three dimensional set of data to plot",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Graph3D",
        "normalized": "",
        "package": "easyplot",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option",
      "description": {
        "fct-descr": "\u003cp\u003eOptions on how to render a graph.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Option",
        "fct-type": "data",
        "title": "Option"
      },
      "index": {
        "description": "Options on how to render graph",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Option",
        "normalized": "",
        "package": "easyplot",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option2D",
      "description": {
        "fct-descr": "\u003cp\u003eOptions which are exclusively available for 2D plots.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Option2D",
        "fct-type": "data",
        "title": "Option2D"
      },
      "index": {
        "description": "Options which are exclusively available for plots",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Option2D",
        "normalized": "",
        "package": "easyplot",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Option3D",
      "description": {
        "fct-descr": "\u003cp\u003eOptions which are exclusively available for 3D plots.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "data",
        "title": "Option3D"
      },
      "index": {
        "description": "Options which are exclusively available for plots",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Option3D",
        "normalized": "",
        "package": "easyplot",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Plot",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the plot function for different kinds of graphs (2D and 3D)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "class",
        "fct-source": "src/Graphics-EasyPlot.html#Plot",
        "fct-type": "class",
        "title": "Plot"
      },
      "index": {
        "description": "Provides the plot function for different kinds of graphs and",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Plot",
        "normalized": "",
        "package": "easyplot",
        "partial": "Plot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eThe Style of a graph.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "The Style of graph",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Style",
        "normalized": "",
        "package": "easyplot",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#t:TerminalType",
      "description": {
        "fct-descr": "\u003cp\u003eTerminalType determines where the output of gnuplot should go.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "data",
        "title": "TerminalType"
      },
      "index": {
        "description": "TerminalType determines where the output of gnuplot should go",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "TerminalType",
        "normalized": "",
        "package": "easyplot",
        "partial": "Terminal Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Aqua",
      "description": {
        "fct-descr": "\u003cp\u003eOutput on Mac OS X (Aqua Terminal).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Aqua",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "Aqua"
      },
      "index": {
        "description": "Output on Mac OS Aqua Terminal",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Aqua",
        "normalized": "",
        "package": "easyplot",
        "partial": "Aqua",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Black",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Black",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Black",
        "normalized": "",
        "package": "easyplot",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Blue",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Blue",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Blue",
        "normalized": "",
        "package": "easyplot",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Brown",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Brown",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Brown",
        "normalized": "",
        "package": "easyplot",
        "partial": "Brown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe line-color for the graph (or if it consist of \u003ccode\u003e\u003ca\u003eDots\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePoints\u003c/a\u003e\u003c/code\u003e the color of these)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Color Color",
        "fct-source": "src/Graphics-EasyPlot.html#Option",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "The line-color for the graph or if it consist of Dots or Points the color of these",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Color",
        "normalized": "",
        "package": "easyplot",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Cyan",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Cyan",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Cyan",
        "normalized": "",
        "package": "easyplot",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkBlue",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkBlue",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkBlue",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkCyan",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkCyan",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkCyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkCyan",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkGreen",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkGreen",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkGreen",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkGrey",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkGrey",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkGrey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkGrey",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Grey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkMagenta",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkMagenta",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkMagenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkMagenta",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkOrange",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkOrange",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkOrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkOrange",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkRed",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkRed",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkRed",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:DarkYellow",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "DarkYellow",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "DarkYellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "DarkYellow",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dark Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Data2D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a set of tuples.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Data2D [Option] [Option2D x y] [(x, y)]",
        "fct-source": "src/Graphics-EasyPlot.html#Graph2D",
        "fct-type": "function",
        "title": "Data2D"
      },
      "index": {
        "description": "plots set of tuples",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Data2D",
        "normalized": "Data D[Option][Option D a b][(a,b)]",
        "package": "easyplot",
        "partial": "Data",
        "signature": "Data D[Option][Option D x y][(x,y)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Data3D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a set of triples.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Data3D [Option] [Option3D x y z] [(x, y, z)]",
        "fct-source": "src/Graphics-EasyPlot.html#Graph3D",
        "fct-type": "function",
        "title": "Data3D"
      },
      "index": {
        "description": "plots set of triples",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Data3D",
        "normalized": "Data D[Option][Option D a b c][(a,b,c)]",
        "package": "easyplot",
        "partial": "Data",
        "signature": "Data D[Option][Option D x y z][(x,y,z)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Debug",
      "description": {
        "fct-descr": "\u003cp\u003eprints the command used for running gnuplot.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Debug",
        "fct-source": "src/Graphics-EasyPlot.html#GnuplotOption",
        "fct-type": "function",
        "title": "Debug"
      },
      "index": {
        "description": "prints the command used for running gnuplot",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Debug",
        "normalized": "",
        "package": "easyplot",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Dots",
      "description": {
        "fct-descr": "\u003cp\u003edata points are real dots (approx the size of a pixel).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Dots",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "function",
        "title": "Dots"
      },
      "index": {
        "description": "data points are real dots approx the size of pixel",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Dots",
        "normalized": "",
        "package": "easyplot",
        "partial": "Dots",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:EPS",
      "description": {
        "fct-descr": "\u003cp\u003eOutput into an EPS file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "EPS FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "EPS"
      },
      "index": {
        "description": "Output into an EPS file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "EPS",
        "normalized": "",
        "package": "easyplot",
        "partial": "EPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:For",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function only for the given x values\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "For [x]",
        "fct-source": "src/Graphics-EasyPlot.html#Option2D",
        "fct-type": "function",
        "title": "For"
      },
      "index": {
        "description": "Plots the function only for the given values",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "For",
        "normalized": "For[a]",
        "package": "easyplot",
        "partial": "For",
        "signature": "For[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:ForX",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function only for the given x values\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "ForX [x]",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "ForX"
      },
      "index": {
        "description": "Plots the function only for the given values",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "ForX",
        "normalized": "ForX[a]",
        "package": "easyplot",
        "partial": "For",
        "signature": "ForX[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:ForY",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function only for the given y values\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "ForY [y]",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "ForY"
      },
      "index": {
        "description": "Plots the function only for the given values",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "ForY",
        "normalized": "ForY[a]",
        "package": "easyplot",
        "partial": "For",
        "signature": "ForY[y]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Function2D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a Haskell function \u003ccode\u003ex -\u003e y\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Function2D [Option] [Option2D x y] (x -\u003e y)",
        "fct-source": "src/Graphics-EasyPlot.html#Graph2D",
        "fct-type": "function",
        "title": "Function2D"
      },
      "index": {
        "description": "plots Haskell function",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Function2D",
        "normalized": "Function D[Option][Option D a b](a-\u003eb)",
        "package": "easyplot",
        "partial": "Function",
        "signature": "Function D[Option][Option D x y](x-\u003ey)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Function3D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a Haskell function \u003ccode\u003ex -\u003e y -\u003e z\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Function3D [Option] [Option3D x y z] (x -\u003e y -\u003e z)",
        "fct-source": "src/Graphics-EasyPlot.html#Graph3D",
        "fct-type": "function",
        "title": "Function3D"
      },
      "index": {
        "description": "plots Haskell function",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Function3D",
        "normalized": "Function D[Option][Option D a b c](a-\u003eb-\u003ec)",
        "package": "easyplot",
        "partial": "Function",
        "signature": "Function D[Option][Option D x y z](x-\u003ey-\u003ez)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:GIF",
      "description": {
        "fct-descr": "\u003cp\u003eOutput as Graphics Interchange Format into a file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "GIF FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "GIF"
      },
      "index": {
        "description": "Output as Graphics Interchange Format into file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "GIF",
        "normalized": "",
        "package": "easyplot",
        "partial": "GIF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Gnuplot2D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a custom function passed to Gnuplot (like \u003ccode\u003ex**2 + 10\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Gnuplot2D [Option] [Option2D x y] String",
        "fct-source": "src/Graphics-EasyPlot.html#Graph2D",
        "fct-type": "function",
        "title": "Gnuplot2D"
      },
      "index": {
        "description": "plots custom function passed to Gnuplot like",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Gnuplot2D",
        "normalized": "Gnuplot D[Option][Option D a b]String",
        "package": "easyplot",
        "partial": "Gnuplot",
        "signature": "Gnuplot D[Option][Option D x y]String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Gnuplot3D",
      "description": {
        "fct-descr": "\u003cp\u003eplots a custom function passed to Gnuplot (like \u003ccode\u003ex*y\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Gnuplot3D [Option] [Option3D x y z] String",
        "fct-source": "src/Graphics-EasyPlot.html#Graph3D",
        "fct-type": "function",
        "title": "Gnuplot3D"
      },
      "index": {
        "description": "plots custom function passed to Gnuplot like",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Gnuplot3D",
        "normalized": "Gnuplot D[Option][Option D a b c]String",
        "package": "easyplot",
        "partial": "Gnuplot",
        "signature": "Gnuplot D[Option][Option D x y z]String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Green",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Green",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Green",
        "normalized": "",
        "package": "easyplot",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Grey",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Grey",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Grey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Grey",
        "normalized": "",
        "package": "easyplot",
        "partial": "Grey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Impulses",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Impulses",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "function",
        "title": "Impulses"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Impulses",
        "normalized": "",
        "package": "easyplot",
        "partial": "Impulses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Interactive",
      "description": {
        "fct-descr": "\u003cp\u003ekeeps gnuplot open, so that you can interact with the plot (only usefull with \u003ccode\u003e\u003ca\u003eX11\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Interactive",
        "fct-source": "src/Graphics-EasyPlot.html#GnuplotOption",
        "fct-type": "function",
        "title": "Interactive"
      },
      "index": {
        "description": "keeps gnuplot open so that you can interact with the plot only usefull with X11",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Interactive",
        "normalized": "",
        "package": "easyplot",
        "partial": "Interactive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:JPEG",
      "description": {
        "fct-descr": "\u003cp\u003eOutput into a JPEG file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "JPEG FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "JPEG"
      },
      "index": {
        "description": "Output into JPEG file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "JPEG",
        "normalized": "",
        "package": "easyplot",
        "partial": "JPEG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Latex",
      "description": {
        "fct-descr": "\u003cp\u003eOutput as LaTeX.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Latex FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "Latex"
      },
      "index": {
        "description": "Output as LaTeX",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Latex",
        "normalized": "",
        "package": "easyplot",
        "partial": "Latex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightBlue",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "LightBlue",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "LightBlue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "LightBlue",
        "normalized": "",
        "package": "easyplot",
        "partial": "Light Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightGreen",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "LightGreen",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "LightGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "LightGreen",
        "normalized": "",
        "package": "easyplot",
        "partial": "Light Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightMagenta",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "LightMagenta",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "LightMagenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "LightMagenta",
        "normalized": "",
        "package": "easyplot",
        "partial": "Light Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:LightRed",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "LightRed",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "LightRed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "LightRed",
        "normalized": "",
        "package": "easyplot",
        "partial": "Light Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Lines",
      "description": {
        "fct-descr": "\u003cp\u003epoints in the plot are interconnected by lines.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Lines",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "function",
        "title": "Lines"
      },
      "index": {
        "description": "points in the plot are interconnected by lines",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Lines",
        "normalized": "",
        "package": "easyplot",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Linespoints",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Linespoints",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "function",
        "title": "Linespoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Linespoints",
        "normalized": "",
        "package": "easyplot",
        "partial": "Linespoints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Magenta",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Magenta",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Magenta",
        "normalized": "",
        "package": "easyplot",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Orange",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Orange",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Orange",
        "normalized": "",
        "package": "easyplot",
        "partial": "Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PDF",
      "description": {
        "fct-descr": "\u003cp\u003eOutput as Portable Document Format into a file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "PDF FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "PDF"
      },
      "index": {
        "description": "Output as Portable Document Format into file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "PDF",
        "normalized": "",
        "package": "easyplot",
        "partial": "PDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PNG",
      "description": {
        "fct-descr": "\u003cp\u003eOutput as Portable Network Graphic into file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "PNG FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "PNG"
      },
      "index": {
        "description": "Output as Portable Network Graphic into file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "PNG",
        "normalized": "",
        "package": "easyplot",
        "partial": "PNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:PS",
      "description": {
        "fct-descr": "\u003cp\u003eOutput into a Postscript file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "PS FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "PS"
      },
      "index": {
        "description": "Output into Postscript file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "PS",
        "normalized": "",
        "package": "easyplot",
        "partial": "PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Points",
      "description": {
        "fct-descr": "\u003cp\u003edata points are little cross symbols.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Points",
        "fct-source": "src/Graphics-EasyPlot.html#Style",
        "fct-type": "function",
        "title": "Points"
      },
      "index": {
        "description": "data points are little cross symbols",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Points",
        "normalized": "",
        "package": "easyplot",
        "partial": "Points",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RGB",
      "description": {
        "fct-descr": "\u003cp\u003ea custom color\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "RGB Int Int Int",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "custom color",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "RGB",
        "normalized": "",
        "package": "easyplot",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Range",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function for the specified x range\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Range x x",
        "fct-source": "src/Graphics-EasyPlot.html#Option2D",
        "fct-type": "function",
        "title": "Range"
      },
      "index": {
        "description": "Plots the function for the specified range",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Range",
        "normalized": "",
        "package": "easyplot",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RangeX",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function for the specified x range\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "RangeX x x",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "RangeX"
      },
      "index": {
        "description": "Plots the function for the specified range",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "RangeX",
        "normalized": "",
        "package": "easyplot",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:RangeY",
      "description": {
        "fct-descr": "\u003cp\u003ePlots the function for the specified y range\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "RangeY y y",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "RangeY"
      },
      "index": {
        "description": "Plots the function for the specified range",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "RangeY",
        "normalized": "",
        "package": "easyplot",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Red",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Red",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Red",
        "normalized": "",
        "package": "easyplot",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:SVG",
      "description": {
        "fct-descr": "\u003cp\u003eOutput as Scalable Vector Graphic into a file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "SVG FilePath",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "SVG"
      },
      "index": {
        "description": "Output as Scalable Vector Graphic into file",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "SVG",
        "normalized": "",
        "package": "easyplot",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Step",
      "description": {
        "fct-descr": "\u003cp\u003eUses the given step-size for plotting along the x-axis\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Step x",
        "fct-source": "src/Graphics-EasyPlot.html#Option2D",
        "fct-type": "function",
        "title": "Step"
      },
      "index": {
        "description": "Uses the given step-size for plotting along the x-axis",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Step",
        "normalized": "",
        "package": "easyplot",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:StepX",
      "description": {
        "fct-descr": "\u003cp\u003eUses the given step-size for plotting along the x-axis\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "StepX x",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "StepX"
      },
      "index": {
        "description": "Uses the given step-size for plotting along the x-axis",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "StepX",
        "normalized": "",
        "package": "easyplot",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:StepY",
      "description": {
        "fct-descr": "\u003cp\u003eUses the given step-size for plotting along the y-axis\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "StepY y",
        "fct-source": "src/Graphics-EasyPlot.html#Option3D",
        "fct-type": "function",
        "title": "StepY"
      },
      "index": {
        "description": "Uses the given step-size for plotting along the y-axis",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "StepY",
        "normalized": "",
        "package": "easyplot",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Style",
      "description": {
        "fct-descr": "\u003cp\u003eThe style for a graph.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Style Style",
        "fct-source": "src/Graphics-EasyPlot.html#Option",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "The style for graph",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Style",
        "normalized": "",
        "package": "easyplot",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Title",
      "description": {
        "fct-descr": "\u003cp\u003eThe title for a graph in a plot (or a filename like \u003ccode\u003eplot1.dat\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Title String",
        "fct-source": "src/Graphics-EasyPlot.html#Option",
        "fct-type": "function",
        "title": "Title"
      },
      "index": {
        "description": "The title for graph in plot or filename like plot1.dat",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Title",
        "normalized": "",
        "package": "easyplot",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Violet",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Violet",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Violet",
        "normalized": "",
        "package": "easyplot",
        "partial": "Violet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:White",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "White",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "White",
        "normalized": "",
        "package": "easyplot",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Windows",
      "description": {
        "fct-descr": "\u003cp\u003eOutput for MS Windows.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Windows",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "Windows"
      },
      "index": {
        "description": "Output for MS Windows",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Windows",
        "normalized": "",
        "package": "easyplot",
        "partial": "Windows",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:X11",
      "description": {
        "fct-descr": "\u003cp\u003eOutput to the X Window System.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "X11",
        "fct-source": "src/Graphics-EasyPlot.html#TerminalType",
        "fct-type": "function",
        "title": "X11"
      },
      "index": {
        "description": "Output to the Window System",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "X11",
        "normalized": "",
        "package": "easyplot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:Yellow",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "Yellow",
        "fct-source": "src/Graphics-EasyPlot.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "Yellow",
        "normalized": "",
        "package": "easyplot",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:plot",
      "description": {
        "fct-descr": "\u003cp\u003eDo a plot to the terminal (i.e. a window will open and your plot can be seen)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "plot",
        "fct-source": "src/Graphics-EasyPlot.html#plot",
        "fct-type": "method",
        "title": "plot"
      },
      "index": {
        "description": "Do plot to the terminal i.e window will open and your plot can be seen",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "plot",
        "normalized": "",
        "package": "easyplot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyplot/docs/Graphics-EasyPlot.html#v:plot-39-",
      "description": {
        "fct-module": "Graphics.EasyPlot",
        "fct-package": "easyplot",
        "fct-signature": "[GnuplotOption] -\u003e TerminalType -\u003e a -\u003e IO Bool",
        "fct-source": "src/Graphics-EasyPlot.html#plot%27",
        "fct-type": "method",
        "title": "plot'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyPlot",
        "module": "Graphics.EasyPlot",
        "name": "plot'",
        "normalized": "[GnuplotOption]-\u003eTerminalType-\u003ea-\u003eIO Bool",
        "package": "easyplot",
        "partial": "",
        "signature": "[GnuplotOption]-\u003eTerminalType-\u003ea-\u003eIO Bool"
      }
    }
  }
]