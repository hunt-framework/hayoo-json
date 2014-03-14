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
        "word": "xdot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAfter an xdot file has been opened using GraphViz, its drawing operations\n   can be parsed using this module.\n\u003c/p\u003e\u003cpre\u003e xDotText \u003c- L.readFile \"example.xdot\"\n let xDotGraph = parseDotGraph xDotText :: G.DotGraph String\n let operations = getOperations xDotGraph\n\u003c/pre\u003e\u003cp\u003exdot files can be created using the dot binary from the Graphviz package:\n\u003c/p\u003e\u003cpre\u003e $ cat example.dot\n digraph {\n     0 [label=\"\"];\n     1 [label=\":\"];\n     0 -\u003e 1 [label=\"[1..]\"];\n }\n $ dot -Txdot example.dot \u003e example.xdot\n\u003c/pre\u003e\u003cp\u003eOr you can skip saving an xdot file and use a dot file directly:\n\u003c/p\u003e\u003cpre\u003e $ dotText \u003c- L.readFile \"example.dot\"\n $ let dotGraph = parseDotGraph dotText :: G.DotGraph String\n $ xDotGraph \u003c- graphvizWithHandle Dot dotGraph XDot hGetDot :: IO (G.DotGraph String)\n $ getOperations xDotGraph\n [ (None,Color {rgba = (1.0,1.0,1.0,1.0), filled = False})\n , (None,Color {rgba = (1.0,1.0,1.0,1.0), filled = True})\n , (None,Polygon {points = [(0.0,-1.0),(0.0,130.0),(55.0,130.0),(55.0,-1.0)], filled = True})\n , (Node \"0\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"0\",Ellipse {xy = (27.0,112.0), w = 27.0, h = 18.0, filled = False})\n , (Node \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"1\",Ellipse {xy = (27.0,19.0), w = 27.0, h = 19.0, filled = False})\n , (Node \"1\",Font {size = 14.0, name = \"Times-Roman\"})\n , (Node \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Node \"1\",Text {baseline = (27.0,15.0), alignment = CenterAlign, width = 4.0, text = \":\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",BSpline {points = [(27.0,94.0),(27.0,81.0),(27.0,63.0),(27.0,48.0)], filled = False})\n , (Edge \"0\" \"1\",Style {style = \"solid\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = True})\n , (Edge \"0\" \"1\",Polygon {points = [(31.0,48.0),(27.0,38.0),(24.0,48.0)], filled = True})\n , (Edge \"0\" \"1\",Font {size = 14.0, name = \"Times-Roman\"})\n , (Edge \"0\" \"1\",Color {rgba = (0.0,0.0,0.0,1.0), filled = False})\n , (Edge \"0\" \"1\",Text {baseline = (39.0,62.0), alignment = CenterAlign, width = 24.0, text = \"[1..]\"})\n ]\n\u003c/pre\u003e\u003cp\u003eThe following imports are needed for this:\n\u003c/p\u003e\u003cpre\u003e import Data.GraphViz\n import Data.GraphViz.Commands.IO\n import qualified Data.Text.Lazy.IO as L\n import qualified Data.GraphViz.Types.Generalised as G\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Graphics.XDot.Parser",
          "name": "Parser",
          "package": "xdot",
          "source": "src/Graphics-XDot-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "After an xdot file has been opened using GraphViz its drawing operations can be parsed using this module xDotText L.readFile example.xdot let xDotGraph parseDotGraph xDotText G.DotGraph String let operations getOperations xDotGraph xdot files can be created using the dot binary from the Graphviz package cat example.dot digraph label label label dot Txdot example.dot example.xdot Or you can skip saving an xdot file and use dot file directly dotText L.readFile example.dot let dotGraph parseDotGraph dotText G.DotGraph String xDotGraph graphvizWithHandle Dot dotGraph XDot hGetDot IO G.DotGraph String getOperations xDotGraph None Color rgba filled False None Color rgba filled True None Polygon points filled True Node Color rgba filled False Node Ellipse xy filled False Node Color rgba filled False Node Ellipse xy filled False Node Font size name Times-Roman Node Color rgba filled False Node Text baseline alignment CenterAlign width text Edge Color rgba filled False Edge BSpline points filled False Edge Style style solid Edge Color rgba filled False Edge Color rgba filled True Edge Polygon points filled True Edge Font size name Times-Roman Edge Color rgba filled False Edge Text baseline alignment CenterAlign width text The following imports are needed for this import Data.GraphViz import Data.GraphViz.Commands.IO import qualified Data.Text.Lazy.IO as import qualified Data.GraphViz.Types.Generalised as",
          "hierarchy": "Graphics XDot Parser",
          "module": "Graphics.XDot.Parser",
          "name": "Parser",
          "package": "xdot",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the dimensions of all nodes and edges in the graph.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Parser",
          "name": "getDimensions",
          "package": "xdot",
          "signature": "DotGraph a -\u003e [(Object a, Rectangle)]",
          "source": "src/Graphics-XDot-Parser.html#getDimensions",
          "type": "function"
        },
        "index": {
          "description": "Extract the dimensions of all nodes and edges in the graph",
          "hierarchy": "Graphics XDot Parser",
          "module": "Graphics.XDot.Parser",
          "name": "getDimensions",
          "normalized": "DotGraph a-\u003e[(Object a,Rectangle)]",
          "package": "xdot",
          "partial": "Dimensions",
          "signature": "DotGraph a-\u003e[(Object a,Rectangle)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all operations of an xdot graph and connect them to the node they\n   belong to, if any.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Parser",
          "name": "getOperations",
          "package": "xdot",
          "signature": "DotGraph a -\u003e [(Object a, Operation)]",
          "source": "src/Graphics-XDot-Parser.html#getOperations",
          "type": "function"
        },
        "index": {
          "description": "Extract all operations of an xdot graph and connect them to the node they belong to if any",
          "hierarchy": "Graphics XDot Parser",
          "module": "Graphics.XDot.Parser",
          "name": "getOperations",
          "normalized": "DotGraph a-\u003e[(Object a,Operation)]",
          "package": "xdot",
          "partial": "Operations",
          "signature": "DotGraph a-\u003e[(Object a,Operation)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getOperations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the dimensions of the graph when drawn.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Parser",
          "name": "getSize",
          "package": "xdot",
          "signature": "DotGraph a -\u003e Rectangle",
          "source": "src/Graphics-XDot-Parser.html#getSize",
          "type": "function"
        },
        "index": {
          "description": "Extract the dimensions of the graph when drawn",
          "hierarchy": "Graphics XDot Parser",
          "module": "Graphics.XDot.Parser",
          "name": "getSize",
          "normalized": "DotGraph a-\u003eRectangle",
          "package": "xdot",
          "partial": "Size",
          "signature": "DotGraph a-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Parser.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains various types used to represent xdot parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Types",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains various types used to represent xdot parameters",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Types",
          "package": "xdot",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of text.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Alignment",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Alignment of text",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Alignment",
          "package": "xdot",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object an operation can belong to.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Object",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html#Object",
          "type": "data"
        },
        "index": {
          "description": "An object an operation can belong to",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Object",
          "package": "xdot",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrawing operations supported by xdot. See\n   \u003ca\u003ehttp://www.graphviz.org/doc/info/output.html#d:xdot\u003c/a\u003e for more information\n\u003c/p\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Operation",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "data"
        },
        "index": {
          "description": "Drawing operations supported by xdot See http www.graphviz.org doc info output.html xdot for more information",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Operation",
          "package": "xdot",
          "partial": "Operation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Operation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple point, consisting of an x and y position.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Point",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html#Point",
          "type": "type"
        },
        "index": {
          "description": "simple point consisting of an and position",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Point",
          "package": "xdot",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle, x and y position, width and height.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Types",
          "name": "Rectangle",
          "package": "xdot",
          "source": "src/Graphics-XDot-Types.html#Rectangle",
          "type": "type"
        },
        "index": {
          "description": "rectangle and position width and height",
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Rectangle",
          "package": "xdot",
          "partial": "Rectangle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "BSpline",
          "package": "xdot",
          "signature": "BSpline",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "BSpline",
          "package": "xdot",
          "partial": "BSpline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:BSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "CenterAlign",
          "package": "xdot",
          "signature": "CenterAlign",
          "source": "src/Graphics-XDot-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "CenterAlign",
          "package": "xdot",
          "partial": "Center Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:CenterAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Color",
          "package": "xdot",
          "signature": "Color",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Color",
          "package": "xdot",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Edge",
          "package": "xdot",
          "signature": "Edge n n",
          "source": "src/Graphics-XDot-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Edge",
          "package": "xdot",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Ellipse",
          "package": "xdot",
          "signature": "Ellipse",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Ellipse",
          "package": "xdot",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Font",
          "package": "xdot",
          "signature": "Font",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Font",
          "package": "xdot",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "FontCharacteristics",
          "package": "xdot",
          "signature": "FontCharacteristics",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "FontCharacteristics",
          "package": "xdot",
          "partial": "Font Characteristics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:FontCharacteristics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Image",
          "package": "xdot",
          "signature": "Image",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Image",
          "package": "xdot",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "LeftAlign",
          "package": "xdot",
          "signature": "LeftAlign",
          "source": "src/Graphics-XDot-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "LeftAlign",
          "package": "xdot",
          "partial": "Left Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:LeftAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Node",
          "package": "xdot",
          "signature": "Node n",
          "source": "src/Graphics-XDot-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Node",
          "package": "xdot",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "None",
          "package": "xdot",
          "signature": "None",
          "source": "src/Graphics-XDot-Types.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "None",
          "package": "xdot",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Polygon",
          "package": "xdot",
          "signature": "Polygon",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Polygon",
          "package": "xdot",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Polyline",
          "package": "xdot",
          "signature": "Polyline",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Polyline",
          "package": "xdot",
          "partial": "Polyline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Polyline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "RightAlign",
          "package": "xdot",
          "signature": "RightAlign",
          "source": "src/Graphics-XDot-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "RightAlign",
          "package": "xdot",
          "partial": "Right Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:RightAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Style",
          "package": "xdot",
          "signature": "Style",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Style",
          "package": "xdot",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "Text",
          "package": "xdot",
          "signature": "Text",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "Text",
          "package": "xdot",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "alignment",
          "package": "xdot",
          "signature": "Alignment",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "alignment",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "baseline",
          "package": "xdot",
          "signature": "Point",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "baseline",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:baseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "bold",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "bold",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "filled",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "filled",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:filled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "h",
          "package": "xdot",
          "signature": "Double",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "h",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:h"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "italic",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "italic",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "name",
          "package": "xdot",
          "signature": "String",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "name",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "points",
          "package": "xdot",
          "signature": "[Point]",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "points",
          "normalized": "[Point]",
          "package": "xdot",
          "signature": "[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "rgba",
          "package": "xdot",
          "signature": "(Double, Double, Double, Double)",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "rgba",
          "normalized": "(Double,Double,Double,Double)",
          "package": "xdot",
          "signature": "(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:rgba"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "size",
          "package": "xdot",
          "signature": "Double",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "size",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "strikethrough",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "strikethrough",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:strikethrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "style",
          "package": "xdot",
          "signature": "String",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "style",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "subscript",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "subscript",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "superscript",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "superscript",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:superscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "text",
          "package": "xdot",
          "signature": "String",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "text",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "underline",
          "package": "xdot",
          "signature": "Bool",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "underline",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "w",
          "package": "xdot",
          "signature": "Double",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "w",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "width",
          "package": "xdot",
          "signature": "Double",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "width",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.XDot.Types",
          "name": "xy",
          "package": "xdot",
          "signature": "Point",
          "source": "src/Graphics-XDot-Types.html#Operation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics XDot Types",
          "module": "Graphics.XDot.Types",
          "name": "xy",
          "package": "xdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Types.html#v:xy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module draws the operations of an xdot graph using Cairo and Pango on a\n   Gtk canvas.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.XDot.Viewer",
          "name": "Viewer",
          "package": "xdot",
          "source": "src/Graphics-XDot-Viewer.html",
          "type": "module"
        },
        "index": {
          "description": "This module draws the operations of an xdot graph using Cairo and Pango on Gtk canvas",
          "hierarchy": "Graphics XDot Viewer",
          "module": "Graphics.XDot.Viewer",
          "name": "Viewer",
          "package": "xdot",
          "partial": "Viewer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Viewer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an xdot graph, possibly highlighting a node.\n\u003c/p\u003e",
          "module": "Graphics.XDot.Viewer",
          "name": "drawAll",
          "package": "xdot",
          "signature": "Object t-\u003e Rectangle-\u003e [(Object t, Operation)]-\u003e Render [(Object t, Rectangle)]",
          "type": "function"
        },
        "index": {
          "description": "Draw an xdot graph possibly highlighting node",
          "hierarchy": "Graphics XDot Viewer",
          "module": "Graphics.XDot.Viewer",
          "name": "drawAll",
          "normalized": "Object a-\u003eRectangle-\u003e[(Object a,Operation)]-\u003eRender[(Object a,Rectangle)]",
          "package": "xdot",
          "partial": "All",
          "signature": "Object t-\u003eRectangle-\u003e[(Object t,Operation)]-\u003eRender[(Object t,Rectangle)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xdot/docs/Graphics-XDot-Viewer.html#v:drawAll"
      }
    }
  ]
]