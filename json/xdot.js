[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAfter an xdot file has been opened using GraphViz, its drawing operations\n   can be parsed using this module.\n\u003c/p\u003e\u003cpre\u003e xDotText \u003c- L.readFile \"example.xdot\"\n let xDotGraph = parseDotGraph xDotText :: G.DotGraph String\n let operations = getOperations xDotGraph\n\u003c/pre\u003e\u003cp\u003exdot files can be created using the dot binary from the Graphviz package:\n\u003c/p\u003e\u003cpre\u003e $ cat example.dot\n digraph {\n     0 [label=\"\"];\n     1 [label=\":\"];\n     0 -\u003e 1 [label=\"[1..]\"];\n }\n $ dot -Txdot example.dot \u003e example.xdot\n\u003c/pre\u003e\u003cp\u003eOr you can skip saving an xdot file and use a dot file directly:\n\u003c/p\u003e\u003cpre\u003e $ dotText \u003c- L.readFile \"example.dot\"\n $ let dotGraph = parseDotGraph dotText :: G.DotGraph String\n $ xDotGraph \u003c- graphvizWithHandle Dot dotGraph XDot hGetDot :: IO (G.DotGraph String)\n $ getOperations xDotGraph\n [ (None,Color {rgba = (1.0,1.0,1.0,1.0), filled = False})\n , (None,Color {rgba = (1.0,1.0,1.0,1.0), filled = True})\n , (None,Polygon {points = [(0.0,-1.0),(0.0,130.0),(55.0,130.0),(55.0,-1.0)], filled = True})\n , (Node \"0\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"0\",Ellipse {xy = (27.0,112.0), w = 27.0, h = 18.0, filled = False})\n , (Node \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"1\",Ellipse {xy = (27.0,19.0), w = 27.0, h = 19.0, filled = False})\n , (Node \"1\",Font {size = 14.0, name = \"Times-Roman\"})\n , (Node \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"1\",Text {baseline = (27.0,15.0), alignment = CenterAlign, width = 4.0, text = \":\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",BSpline {points = [(27.0,94.0),(27.0,81.0),(27.0,63.0),(27.0,48.0)], filled = False})\n , (Edge \"0\" \"1\",Style {style = \"solid\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = True})\n , (Edge \"0\" \"1\",Polygon {points = [(31.0,48.0),(27.0,38.0),(24.0,48.0)], filled = True})\n , (Edge \"0\" \"1\",Font {size = 14.0, name = \"Times-Roman\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",Text {baseline = (39.0,62.0), alignment = CenterAlign, width = 24.0, text = \"[1..]\"})\n ]\n\u003c/pre\u003e\u003cp\u003eThe following imports are needed for this:\n\u003c/p\u003e\u003cpre\u003e import Data.GraphViz\n import Data.GraphViz.Commands.IO\n import qualified Data.Text.Lazy.IO as L\n import qualified Data.GraphViz.Types.Generalised as G\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Graphics.XDot.Parser",
        "fct-package": "xdot",
        "fct-signature": "module",
        "fct-source": "src/Graphics-XDot-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "After an xdot file has been opened using GraphViz its drawing operations can be parsed using this module xDotText L.readFile example.xdot let xDotGraph parseDotGraph xDotText G.DotGraph String let operations getOperations xDotGraph xdot files can be created using the dot binary from the Graphviz package cat example.dot digraph label label label dot Txdot example.dot example.xdot Or you can skip saving an xdot file and use dot file directly dotText L.readFile example.dot let dotGraph parseDotGraph dotText G.DotGraph String xDotGraph graphvizWithHandle Dot dotGraph XDot hGetDot IO G.DotGraph String getOperations xDotGraph None Color rgba filled False None Color rgba filled True None Polygon points filled True Node Color rgba filled False Node Ellipse xy filled False Node Color rgba filled False Node Ellipse xy filled False Node Font size name Times-Roman Node Color rgba filled False Node Text baseline alignment CenterAlign width text Edge Color rgba filled False Edge BSpline points filled False Edge Style style solid Edge Color rgba filled False Edge Color rgba filled True Edge Polygon points filled True Edge Font size name Times-Roman Edge Color rgba filled False Edge Text baseline alignment CenterAlign width text The following imports are needed for this import Data.GraphViz import Data.GraphViz.Commands.IO import qualified Data.Text.Lazy.IO as import qualified Data.GraphViz.Types.Generalised as",
        "hierarchy": "Graphics XDot Parser",
        "module": "Graphics.XDot.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "xdot",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getDimensions",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the dimensions of all nodes and edges in the graph.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Parser",
        "fct-package": "xdot",
        "fct-signature": "DotGraph a -\u003e [(Object a, Rectangle)]",
        "fct-source": "src/Graphics-XDot-Parser.html#getDimensions",
        "fct-type": "function",
        "title": "getDimensions"
      },
      "index": {
        "description": "Extract the dimensions of all nodes and edges in the graph",
        "hierarchy": "Graphics XDot Parser",
        "module": "Graphics.XDot.Parser",
        "name": "getDimensions",
        "normalized": "DotGraph a-\u003e[(Object a,Rectangle)]",
        "package": "xdot",
        "partial": "Dimensions",
        "signature": "DotGraph a-\u003e[(Object a,Rectangle)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getOperations",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all operations of an xdot graph and connect them to the node they\n   belong to, if any.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Parser",
        "fct-package": "xdot",
        "fct-signature": "DotGraph a -\u003e [(Object a, Operation)]",
        "fct-source": "src/Graphics-XDot-Parser.html#getOperations",
        "fct-type": "function",
        "title": "getOperations"
      },
      "index": {
        "description": "Extract all operations of an xdot graph and connect them to the node they belong to if any",
        "hierarchy": "Graphics XDot Parser",
        "module": "Graphics.XDot.Parser",
        "name": "getOperations",
        "normalized": "DotGraph a-\u003e[(Object a,Operation)]",
        "package": "xdot",
        "partial": "Operations",
        "signature": "DotGraph a-\u003e[(Object a,Operation)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getSize",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the dimensions of the graph when drawn.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Parser",
        "fct-package": "xdot",
        "fct-signature": "DotGraph a -\u003e Rectangle",
        "fct-source": "src/Graphics-XDot-Parser.html#getSize",
        "fct-type": "function",
        "title": "getSize"
      },
      "index": {
        "description": "Extract the dimensions of the graph when drawn",
        "hierarchy": "Graphics XDot Parser",
        "module": "Graphics.XDot.Parser",
        "name": "getSize",
        "normalized": "DotGraph a-\u003eRectangle",
        "package": "xdot",
        "partial": "Size",
        "signature": "DotGraph a-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains various types used to represent xdot parameters.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "module",
        "fct-source": "src/Graphics-XDot-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module contains various types used to represent xdot parameters",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Types",
        "normalized": "",
        "package": "xdot",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Alignment",
      "description": {
        "fct-descr": "\u003cp\u003eAlignment of text.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XDot-Types.html#Alignment",
        "fct-type": "data",
        "title": "Alignment"
      },
      "index": {
        "description": "Alignment of text",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Alignment",
        "normalized": "",
        "package": "xdot",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eAn object an operation can belong to.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XDot-Types.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "An object an operation can belong to",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Object",
        "normalized": "",
        "package": "xdot",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Operation",
      "description": {
        "fct-descr": "\u003cp\u003eDrawing operations supported by xdot. See\n   \u003ca\u003ehttp://www.graphviz.org/doc/info/output.html#d:xdot\u003c/a\u003e for more information\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "data",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "data",
        "title": "Operation"
      },
      "index": {
        "description": "Drawing operations supported by xdot See http www.graphviz.org doc info output.html xdot for more information",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Operation",
        "normalized": "",
        "package": "xdot",
        "partial": "Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA simple point, consisting of an x and y position.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "type",
        "fct-source": "src/Graphics-XDot-Types.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "simple point consisting of an and position",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Point",
        "normalized": "",
        "package": "xdot",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangle, x and y position, width and height.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "type",
        "fct-source": "src/Graphics-XDot-Types.html#Rectangle",
        "fct-type": "type",
        "title": "Rectangle"
      },
      "index": {
        "description": "rectangle and position width and height",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Rectangle",
        "normalized": "",
        "package": "xdot",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:BSpline",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "BSpline",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "BSpline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "BSpline",
        "normalized": "",
        "package": "xdot",
        "partial": "BSpline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:CenterAlign",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "CenterAlign",
        "fct-source": "src/Graphics-XDot-Types.html#Alignment",
        "fct-type": "function",
        "title": "CenterAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "CenterAlign",
        "normalized": "",
        "package": "xdot",
        "partial": "Center Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Color",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Color",
        "normalized": "",
        "package": "xdot",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Edge",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Edge n n",
        "fct-source": "src/Graphics-XDot-Types.html#Object",
        "fct-type": "function",
        "title": "Edge"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Edge",
        "normalized": "",
        "package": "xdot",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Ellipse",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Ellipse",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Ellipse"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Ellipse",
        "normalized": "",
        "package": "xdot",
        "partial": "Ellipse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Font",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Font",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Font",
        "normalized": "",
        "package": "xdot",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:FontCharacteristics",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "FontCharacteristics",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "FontCharacteristics"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "FontCharacteristics",
        "normalized": "",
        "package": "xdot",
        "partial": "Font Characteristics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Image",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Image",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Image",
        "normalized": "",
        "package": "xdot",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:LeftAlign",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "LeftAlign",
        "fct-source": "src/Graphics-XDot-Types.html#Alignment",
        "fct-type": "function",
        "title": "LeftAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "LeftAlign",
        "normalized": "",
        "package": "xdot",
        "partial": "Left Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Node",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Node n",
        "fct-source": "src/Graphics-XDot-Types.html#Object",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Node",
        "normalized": "",
        "package": "xdot",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:None",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "None",
        "fct-source": "src/Graphics-XDot-Types.html#Object",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "None",
        "normalized": "",
        "package": "xdot",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Polygon",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Polygon",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Polygon",
        "normalized": "",
        "package": "xdot",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Polyline",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Polyline",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Polyline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Polyline",
        "normalized": "",
        "package": "xdot",
        "partial": "Polyline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:RightAlign",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "RightAlign",
        "fct-source": "src/Graphics-XDot-Types.html#Alignment",
        "fct-type": "function",
        "title": "RightAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "RightAlign",
        "normalized": "",
        "package": "xdot",
        "partial": "Right Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Style",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Style",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Style",
        "normalized": "",
        "package": "xdot",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Text",
      "description": {
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Text",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "Text",
        "normalized": "",
        "package": "xdot",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:alignment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "alignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "alignment",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:baseline",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Point",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "baseline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "baseline",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:bold",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "bold",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:filled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "filled"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "filled",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:h",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "h"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "h",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:italic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "italic"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "italic",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "String",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "name",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:points",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "[Point]",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "points"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "points",
        "normalized": "[Point]",
        "package": "xdot",
        "partial": "",
        "signature": "[Point]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:rgba",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "(Double, Double, Double, Double)",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "rgba"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "rgba",
        "normalized": "(Double,Double,Double,Double)",
        "package": "xdot",
        "partial": "",
        "signature": "(Double,Double,Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "size",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:strikethrough",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "strikethrough"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "strikethrough",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:style",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "String",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "style",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:subscript",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "subscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "subscript",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:superscript",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "superscript"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "superscript",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:text",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "String",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "text",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:underline",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "underline"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "underline",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:w",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "w"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "w",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:width",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Double",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "width",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:xy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.XDot.Types",
        "fct-package": "xdot",
        "fct-signature": "Point",
        "fct-source": "src/Graphics-XDot-Types.html#Operation",
        "fct-type": "function",
        "title": "xy"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics XDot Types",
        "module": "Graphics.XDot.Types",
        "name": "xy",
        "normalized": "",
        "package": "xdot",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Viewer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module draws the operations of an xdot graph using Cairo and Pango on a\n   Gtk canvas.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.XDot.Viewer",
        "fct-package": "xdot",
        "fct-signature": "module",
        "fct-source": "src/Graphics-XDot-Viewer.html",
        "fct-type": "module",
        "title": "Viewer"
      },
      "index": {
        "description": "This module draws the operations of an xdot graph using Cairo and Pango on Gtk canvas",
        "hierarchy": "Graphics XDot Viewer",
        "module": "Graphics.XDot.Viewer",
        "name": "Viewer",
        "normalized": "",
        "package": "xdot",
        "partial": "Viewer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Viewer.html#v:drawAll",
      "description": {
        "fct-descr": "\u003cp\u003eDraw an xdot graph, possibly highlighting a node.\n\u003c/p\u003e",
        "fct-module": "Graphics.XDot.Viewer",
        "fct-package": "xdot",
        "fct-signature": "Object t-\u003e Rectangle-\u003e [(Object t, Operation)]-\u003e Render [(Object t, Rectangle)]",
        "fct-type": "function",
        "title": "drawAll"
      },
      "index": {
        "description": "Draw an xdot graph possibly highlighting node",
        "hierarchy": "Graphics XDot Viewer",
        "module": "Graphics.XDot.Viewer",
        "name": "drawAll",
        "normalized": "Object a-\u003eRectangle-\u003e[(Object a,Operation)]-\u003eRender[(Object a,Rectangle)]",
        "package": "xdot",
        "partial": "All",
        "signature": "Object t-\u003eRectangle-\u003e[(Object t,Operation)]-\u003eRender[(Object t,Rectangle)]"
      }
    }
  }
]