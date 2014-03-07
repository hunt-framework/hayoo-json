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
        "word": "planar-graph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation-AsciiCode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation AsciiCode",
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "partial": "Ascii Code",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-AsciiCode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII_CODE is a human-readable variant of\n \u003ca\u003eData.Graph.Planar.Serialisation.PlanarCode\u003c/a\u003e.  The same caveats\n regarding loops apply, but it is only able to represent graphs with\n \u003ccode\u003e\u003c=26\u003c/code\u003e nodes.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation-AsciiCode.html#AsciiCode",
          "type": "data"
        },
        "index": {
          "description": "ASCII CODE is human-readable variant of Data.Graph.Planar.Serialisation.PlanarCode The same caveats regarding loops apply but it is only able to represent graphs with nodes",
          "hierarchy": "Data Graph Planar Serialisation AsciiCode",
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "partial": "Ascii Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-AsciiCode.html#t:AsciiCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "signature": "AsciiCode",
          "source": "src/Data-Graph-Planar-Serialisation-AsciiCode.html#AsciiCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation AsciiCode",
          "module": "Data.Graph.Planar.Serialisation.AsciiCode",
          "name": "AsciiCode",
          "package": "planar-graph",
          "partial": "Ascii Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-AsciiCode.html#v:AsciiCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation-PlanarCode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation PlanarCode",
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "partial": "Planar Code",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-PlanarCode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePLANAR_CODE is the most common encoding for planar graphs, and is\n supported by various generation and visualisation tools.  It is a\n binary format and not intended to be human-readable.\n\u003c/p\u003e\u003cp\u003eThe default encoding only supports graphs with \u003ccode\u003e\u003c256\u003c/code\u003e nodes, and\n takes \u003ccode\u003e2*|E|+|N|+1\u003c/code\u003e bytes per graph.\n\u003c/p\u003e\u003cp\u003ePlease note that PLANAR_CODE is \u003cem\u003enot\u003c/em\u003e suitable for graphs with\n multiple loops on vertices (multiple edges with distinct endpoints\n however are catered for).  As such, no guarantees are made about what\n happens with multiple loops.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation-PlanarCode.html#PlanarCode",
          "type": "data"
        },
        "index": {
          "description": "PLANAR CODE is the most common encoding for planar graphs and is supported by various generation and visualisation tools It is binary format and not intended to be human-readable The default encoding only supports graphs with nodes and takes bytes per graph Please note that PLANAR CODE is not suitable for graphs with multiple loops on vertices multiple edges with distinct endpoints however are catered for As such no guarantees are made about what happens with multiple loops",
          "hierarchy": "Data Graph Planar Serialisation PlanarCode",
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "partial": "Planar Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-PlanarCode.html#t:PlanarCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "signature": "PlanarCode",
          "source": "src/Data-Graph-Planar-Serialisation-PlanarCode.html#PlanarCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation PlanarCode",
          "module": "Data.Graph.Planar.Serialisation.PlanarCode",
          "name": "PlanarCode",
          "package": "planar-graph",
          "partial": "Planar Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation-PlanarCode.html#v:PlanarCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation",
          "name": "Serialisation",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "Serialisation",
          "package": "planar-graph",
          "partial": "Serialisation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class covering the different ways of encoding and decoding\n   planar graphs from binary data.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "PlanarEncoding",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#PlanarEncoding",
          "type": "class"
        },
        "index": {
          "description": "class covering the different ways of encoding and decoding planar graphs from binary data",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "PlanarEncoding",
          "package": "planar-graph",
          "partial": "Planar Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#t:PlanarEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead in a file containing encoded graphs.  The \u003ccode\u003e\u003ca\u003ePlanarEncoding\u003c/a\u003e\u003c/code\u003e\n   argument is only used for its \u003cem\u003etype\u003c/em\u003e to determine which parser to\n   use.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "decodePlanarFile",
          "package": "planar-graph",
          "signature": "ser -\u003e FilePath -\u003e IO [PlanarGraph (NLabel ser) (ELabel ser)]",
          "source": "src/Data-Graph-Planar-Serialisation.html#decodePlanarFile",
          "type": "function"
        },
        "index": {
          "description": "Read in file containing encoded graphs The PlanarEncoding argument is only used for its type to determine which parser to use",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "decodePlanarFile",
          "normalized": "a-\u003eFilePath-\u003eIO[PlanarGraph(NLabel a)(ELabel a)]",
          "package": "planar-graph",
          "partial": "Planar File",
          "signature": "ser-\u003eFilePath-\u003eIO[PlanarGraph(NLabel ser)(ELabel ser)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:decodePlanarFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a list of planar graphs to file using the specified\n   encoding.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "encodePlanarFile",
          "package": "planar-graph",
          "signature": "ser -\u003e FilePath -\u003e [PlanarGraph (NLabel ser) (ELabel ser)] -\u003e IO Int",
          "source": "src/Data-Graph-Planar-Serialisation.html#encodePlanarFile",
          "type": "function"
        },
        "index": {
          "description": "Encode list of planar graphs to file using the specified encoding",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "encodePlanarFile",
          "normalized": "a-\u003eFilePath-\u003e[PlanarGraph(NLabel a)(ELabel a)]-\u003eIO Int",
          "package": "planar-graph",
          "partial": "Planar File",
          "signature": "ser-\u003eFilePath-\u003e[PlanarGraph(NLabel ser)(ELabel ser)]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:encodePlanarFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a list of planar graphs to file using the specified\n   encoding, with the serialisation traversing from the an\n   optionally specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "encodePlanarFileFrom",
          "package": "planar-graph",
          "signature": "ser -\u003e FilePath -\u003e [(Maybe Edge, PlanarGraph (NLabel ser) (ELabel ser))] -\u003e IO Int",
          "source": "src/Data-Graph-Planar-Serialisation.html#encodePlanarFileFrom",
          "type": "function"
        },
        "index": {
          "description": "Encode list of planar graphs to file using the specified encoding with the serialisation traversing from the an optionally specified edge",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "encodePlanarFileFrom",
          "normalized": "a-\u003eFilePath-\u003e[(Maybe Edge,PlanarGraph(NLabel a)(ELabel a))]-\u003eIO Int",
          "package": "planar-graph",
          "partial": "Planar File From",
          "signature": "ser-\u003eFilePath-\u003e[(Maybe Edge,PlanarGraph(NLabel ser)(ELabel ser))]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:encodePlanarFileFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to parse a header; if none exists, this should return\n   an appropriate default (if allowable).  Should also parse\n   trailing newlines if appropriate.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "getName",
          "package": "planar-graph",
          "signature": "Parser ser",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#getName",
          "type": "method"
        },
        "index": {
          "description": "Attempt to parse header if none exists this should return an appropriate default if allowable Should also parse trailing newlines if appropriate",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "getName",
          "package": "planar-graph",
          "partial": "Name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation",
          "name": "getSG",
          "package": "planar-graph",
          "signature": "ser -\u003e Parser (SerialisedGraph (NLabel ser) (ELabel ser))",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#getSG",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "getSG",
          "normalized": "a-\u003eParser(SerialisedGraph(NLabel a)(ELabel a))",
          "package": "planar-graph",
          "partial": "SG",
          "signature": "ser-\u003eParser(SerialisedGraph(NLabel ser)(ELabel ser))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:getSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the required header if appropriate; otherwise return an\n   empty \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.  Should end in a newline if appropriate.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "putName",
          "package": "planar-graph",
          "signature": "ser -\u003e Builder",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#putName",
          "type": "method"
        },
        "index": {
          "description": "Print the required header if appropriate otherwise return an empty Builder Should end in newline if appropriate",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "putName",
          "normalized": "a-\u003eBuilder",
          "package": "planar-graph",
          "partial": "Name",
          "signature": "ser-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:putName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Planar.Serialisation",
          "name": "putSG",
          "package": "planar-graph",
          "signature": "ser -\u003e ((Int, Int), SerialisedGraph (NLabel ser) (ELabel ser)) -\u003e Builder",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#putSG",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "putSG",
          "normalized": "a-\u003e((Int,Int),SerialisedGraph(NLabel a)(ELabel a))-\u003eBuilder",
          "package": "planar-graph",
          "partial": "SG",
          "signature": "ser-\u003e((Int,Int),SerialisedGraph(NLabel ser)(ELabel ser))-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:putSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs each graph on a new line?\n\u003c/p\u003e",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "sepByNewline",
          "package": "planar-graph",
          "signature": "ser -\u003e Bool",
          "source": "src/Data-Graph-Planar-Serialisation-Internal.html#sepByNewline",
          "type": "method"
        },
        "index": {
          "description": "Is each graph on new line",
          "hierarchy": "Data Graph Planar Serialisation",
          "module": "Data.Graph.Planar.Serialisation",
          "name": "sepByNewline",
          "normalized": "a-\u003eBool",
          "package": "planar-graph",
          "partial": "By Newline",
          "signature": "ser-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar-Serialisation.html#v:sepByNewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlanar graphs are graphs that can be embedded onto a surface\n   (i.e. they can be drawn on that surface without any edges crossing).\n   As such, it is preferable to use a dedicated data structure for them\n   that has information about how to achieve this embedding rather than a\n   standard graph data structure.\n\u003c/p\u003e\u003cp\u003e(Please note however that this implementation has only been tested\n   in terms of the embedding being on the unit sphere or disc; whether\n   it works or not as-is on any other type of surface is unknown.)\n\u003c/p\u003e\u003cp\u003eThe implementation here is loosely based upon that found in\n   \u003cem\u003eplantri\u003c/em\u003e by Gunnar Brinkmann and Brendan McKay:\n   \u003ca\u003ehttp://cs.anu.edu.au/~bdm/plantri/\u003c/a\u003e (which is similar in concept\n   to a doubly-connected edge list).  The main differences are (if my\n   understanding of the C code is correct):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e plantri uses arrays (technically it uses one big array that it\n     continually mutates); planar-graph uses Maps (thus making it\n     easier to grow/shrink graphs).\n\u003c/li\u003e\u003cli\u003e plantri doesn't explicitly store nodes, just edges.\n\u003c/li\u003e\u003cli\u003e plantri utilises pointers, avoiding extra lookups.\n\u003c/li\u003e\u003cli\u003e Each edge stores in plantri has the face it is on, but only after\n     they are explicitly calculated.  In planar-graph, \u003ccode\u003egetFaces\u003c/code\u003e instead\n     returns a Map for the faces.\n\u003c/li\u003e\u003cli\u003e plantri doesn't allow labels.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn particular, all edges - even undirected ones - are stored as two\n   opposing directed half-edges.  As such, care should be taken when\n   dealing with edges.  Also, the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e\n   identifiers are all abstract, and as such cannot be constructed\n   directly.\n\u003c/p\u003e\u003cp\u003eAll returned \u003ccode\u003e\u003ca\u003eCList\u003c/a\u003e\u003c/code\u003es represent values in a clockwise fashion\n   (relative to the \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e in question).\n\u003c/p\u003e\u003cp\u003eCare should also be taken when dealing with more than one connected\n   component, as there is no fixed embedding of multiple graphs on the\n   same surface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Planar",
          "name": "Planar",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html",
          "type": "module"
        },
        "index": {
          "description": "Planar graphs are graphs that can be embedded onto surface i.e they can be drawn on that surface without any edges crossing As such it is preferable to use dedicated data structure for them that has information about how to achieve this embedding rather than standard graph data structure Please note however that this implementation has only been tested in terms of the embedding being on the unit sphere or disc whether it works or not as-is on any other type of surface is unknown The implementation here is loosely based upon that found in plantri by Gunnar Brinkmann and Brendan McKay http cs.anu.edu.au bdm plantri which is similar in concept to doubly-connected edge list The main differences are if my understanding of the code is correct plantri uses arrays technically it uses one big array that it continually mutates planar-graph uses Maps thus making it easier to grow shrink graphs plantri doesn explicitly store nodes just edges plantri utilises pointers avoiding extra lookups Each edge stores in plantri has the face it is on but only after they are explicitly calculated In planar-graph getFaces instead returns Map for the faces plantri doesn allow labels In particular all edges even undirected ones are stored as two opposing directed half-edges As such care should be taken when dealing with edges Also the Node Edge and Face identifiers are all abstract and as such cannot be constructed directly All returned CList represent values in clockwise fashion relative to the Node or Face in question Care should also be taken when dealing with more than one connected component as there is no fixed embedding of multiple graphs on the same surface",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Planar",
          "package": "planar-graph",
          "partial": "Planar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of an edge.  Note that an explicit\n   identifier is used for each edge rather than just using the two\n   nodes that the edge connects.  This is required in case more than\n   one edge connects two nodes as we need to be able to distinguish\n   them.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "Edge",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of an edge Note that an explicit identifier is used for each edge rather than just using the two nodes that the edge connects This is required in case more than one edge connects two nodes as we need to be able to distinguish them",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Edge",
          "package": "planar-graph",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification of where to place a new edge on a node in clockwise order.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "EdgePos",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#EdgePos",
          "type": "data"
        },
        "index": {
          "description": "Specification of where to place new edge on node in clockwise order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "EdgePos",
          "package": "planar-graph",
          "partial": "Edge Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:EdgePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a face.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "Face",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#Face",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of face",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Face",
          "package": "planar-graph",
          "partial": "Face",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:Face"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a particular \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "FaceInfo",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#FaceInfo",
          "type": "data"
        },
        "index": {
          "description": "Information about particular Face",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "FaceInfo",
          "package": "planar-graph",
          "partial": "Face Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:FaceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the faces in a planar graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "FaceMap",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#FaceMap",
          "type": "type"
        },
        "index": {
          "description": "Information about the faces in planar graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "FaceMap",
          "package": "planar-graph",
          "partial": "Face Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:FaceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify part of a graph found by traversing it.  For nodes,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003evisited\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etraversed\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e; the same\n   is true for edges \u003cem\u003eexcept\u003c/em\u003e when \u003ccode\u003e\u003ca\u003espanningTraversal\u003c/a\u003e\u003c/code\u003e is used.  In\n   that case, \u003ccode\u003e\u003ca\u003etraversed\u003c/a\u003e\u003c/code\u003e may contain a sub-set of \u003ccode\u003e\u003ca\u003evisited\u003c/a\u003e\u003c/code\u003e (and if\n   they aren't equal, \u003ccode\u003e\u003ca\u003eanyMissing\u003c/a\u003e\u003c/code\u003e will be \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "GraphTraversal",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#GraphTraversal",
          "type": "type"
        },
        "index": {
          "description": "Specify part of graph found by traversing it For nodes visited fromList toList traversed the same is true for edges except when spanningTraversal is used In that case traversed may contain sub-set of visited and if they aren equal anyMissing will be True",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "GraphTraversal",
          "package": "planar-graph",
          "partial": "Graph Traversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:GraphTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a node.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "Node",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#Node",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of node",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Node",
          "package": "planar-graph",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe overall planar graph data structure.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "PlanarGraph",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#PlanarGraph",
          "type": "data"
        },
        "index": {
          "description": "The overall planar graph data structure",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "PlanarGraph",
          "package": "planar-graph",
          "partial": "Planar Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:PlanarGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe definition of a more compact, serialised form of a planar\n   graph.  The various fields correspond to:\n\u003c/p\u003e\u003cpre\u003e [( node index\n  , node label\n  , [( edge index\n     , node index that this edge points to\n     , edge label\n     , inverse edge index\n    )]\n )]\n\n\u003c/pre\u003e\u003cp\u003eThe list of edges should be in clockwise order around the node.\n\u003c/p\u003e\u003cp\u003eNote that there will be twice as many edges lists as the \u003cem\u003esize\u003c/em\u003e;\n   that's because each edge is listed twice.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "SerialisedGraph",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#SerialisedGraph",
          "type": "type"
        },
        "index": {
          "description": "The definition of more compact serialised form of planar graph The various fields correspond to node index node label edge index node index that this edge points to edge label inverse edge index The list of edges should be in clockwise order around the node Note that there will be twice as many edges lists as the size that because each edge is listed twice",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "SerialisedGraph",
          "package": "planar-graph",
          "partial": "Serialised Graph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:SerialisedGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent ways of traversing through a graph.\n\u003c/p\u003e\u003cp\u003eTo assist in visualising how the traversals differ, sample traversals\nwill be provided for the following graph:\n\u003c/p\u003e\u003cpre\u003e                                =====\n                               (  1  )\n                                =====\n                                  |\n                                a |\n                                  |\n                                =====\n                               (  2  )\n                                =====\n                                / | \\\n                        b      /  |  \\      c\n                 /-------------   |   -------------\\\n                /                 |                 \\\n             =====              d |                =====\n            (  3  )               |               (  5  )\n             =====              =====              =====\n               |               (  4  )             /   \\\n               |                =====             /     \\\n               |                  |              /       \\\n             e |                f |           g /         \\ h\n               |                  |            /           \\\n               |                  |           |             |\n               |                 /            |             |\n               |                /             |             |\n             =====             /           =====           =====\n            (  6  )-----------/           (  7  )         (  8  )\n             =====                         =====           =====\n\n\u003c/pre\u003e\u003cp\u003eEach traversal shall start at the edge labelled \u003cem\u003ea\u003c/em\u003e: note that\nwhenever an edge is traversed, it immediately also traverses its\ninverse.\n\u003c/p\u003e\u003cp\u003eIn particular, note where the node labelled \u003cem\u003e4\u003c/em\u003e and its two adjacent\nedges are found.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "Traversal",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#Traversal",
          "type": "data"
        },
        "index": {
          "description": "Different ways of traversing through graph To assist in visualising how the traversals differ sample traversals will be provided for the following graph Each traversal shall start at the edge labelled note that whenever an edge is traversed it immediately also traverses its inverse In particular note where the node labelled and its two adjacent edges are found",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Traversal",
          "package": "planar-graph",
          "partial": "Traversal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe values found whilst traversing.  See \u003ccode\u003e\u003ca\u003eGraphTraversal\u003c/a\u003e\u003c/code\u003e for\n   more specific information.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "TraversedValues",
          "package": "planar-graph",
          "source": "src/Data-Graph-Planar.html#TraversedValues",
          "type": "data"
        },
        "index": {
          "description": "The values found whilst traversing See GraphTraversal for more specific information",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "TraversedValues",
          "package": "planar-graph",
          "partial": "Traversed Values",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#t:TraversedValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new edge should be placed after the specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "AfterEdge",
          "package": "planar-graph",
          "signature": "AfterEdge !Edge",
          "source": "src/Data-Graph-Planar.html#EdgePos",
          "type": "function"
        },
        "index": {
          "description": "The new edge should be placed after the specified edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "AfterEdge",
          "package": "planar-graph",
          "partial": "After Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:AfterEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new edge can be placed anywhere.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "Anywhere",
          "package": "planar-graph",
          "signature": "Anywhere",
          "source": "src/Data-Graph-Planar.html#EdgePos",
          "type": "function"
        },
        "index": {
          "description": "The new edge can be placed anywhere",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "Anywhere",
          "package": "planar-graph",
          "partial": "Anywhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:Anywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe new edge should be placed before the specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "BeforeEdge",
          "package": "planar-graph",
          "signature": "BeforeEdge !Edge",
          "source": "src/Data-Graph-Planar.html#EdgePos",
          "type": "function"
        },
        "index": {
          "description": "The new edge should be placed before the specified edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "BeforeEdge",
          "package": "planar-graph",
          "partial": "Before Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:BeforeEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an edge between two nodes \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003et\u003c/code\u003e.  In reality, since all\n     edges are duplicated (see \u003ccode\u003e\u003ca\u003einverseEdge\u003c/a\u003e\u003c/code\u003e), two half-edges are\n     inserted, and the identifiers of both are returned.\n\u003c/p\u003e\u003cp\u003eFor functions such as \u003ccode\u003e\u003ca\u003eedges\u003c/a\u003e\u003c/code\u003e, the first added half-edge is\n     assumed to be the \u003cem\u003eprimary\u003c/em\u003e one.\n\u003c/p\u003e\u003cp\u003eIf either node does not currently have any edges, then its\n     corresponding \u003ccode\u003e\u003ca\u003eEdgePos\u003c/a\u003e\u003c/code\u003e value is ignored.  An \u003ccode\u003e\u003ca\u003eEdgePos\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eAnywhere\u003c/a\u003e\u003c/code\u003e\n     will place the edge before (i.e. anti-clockwise) of the last edge\n     added to that node.\n\u003c/p\u003e\u003cp\u003eFor example, let \u003ccode\u003eg\u003c/code\u003e refer to the following graph (where\n     \u003ccode\u003en1\u003c/code\u003e, etc. are both the labels and the variable names):\n\u003c/p\u003e\u003cpre\u003e     ====                    ====\n    ( n1 )                  ( n2 )\n     ====                    ====\n\n\n\n\n\n                             ====\n                            ( n3 )\n                             ====\n\u003c/pre\u003e\u003cp\u003eWe can add an edge between \u003ccode\u003en1\u003c/code\u003e and \u003ccode\u003en2\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003eAnywhere\u003c/a\u003e\u003c/code\u003e as the\n     \u003ccode\u003e\u003ca\u003eEdgePos\u003c/a\u003e\u003c/code\u003e since there are currently no edges on either node):\n\u003c/p\u003e\u003cpre\u003e ((e1,e2),g') = addEdge n1 Anywhere n2 Anywhere \"e1\" \"e2\" g\n\u003c/pre\u003e\u003cp\u003eThis will result in the following graph:\n\u003c/p\u003e\u003cpre\u003e                  e2\n     ====  \u003c---------------  ====\n    ( n1 )                  ( n2 )\n     ====  ---------------\u003e  ====\n                  e1\n\n\n\n\n                             ====\n                            ( n3 )\n                             ====\n\u003c/pre\u003e\u003cp\u003eIf we want to add edges between \u003ccode\u003en2\u003c/code\u003e and \u003ccode\u003en3\u003c/code\u003e, we have three\n     options for the location on \u003ccode\u003en2\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Use \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAnywhere\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e: since there is only one other edge, it makes no\n       difference in terms of the embedding where the second edge goes.\n\u003c/li\u003e\u003cli\u003e Put the new edge \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBeforeEdge\u003c/a\u003e\u003c/code\u003e e2\u003c/code\u003e (going clockwise around \u003ccode\u003en2\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Put the new edge \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAfterEdge\u003c/a\u003e\u003c/code\u003e e2\u003c/code\u003e (going clockwise around \u003ccode\u003en2\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSince \u003ccode\u003en2\u003c/code\u003e currently only has one edge, all three \u003ccode\u003e\u003ca\u003eEdgePos\u003c/a\u003e\u003c/code\u003e values\n     will result in the same graph, so we can arbitrarily pick one:\n\u003c/p\u003e\u003cpre\u003e ((e3,e4),g'') = addEdge n2 (BeforeEdge e2) n3 Anywhere \"e3\" \"e4\" g'\n\u003c/pre\u003e\u003cp\u003eHowever, with more edges care must be taken on which \u003ccode\u003e\u003ca\u003eEdgePos\u003c/a\u003e\u003c/code\u003e\n     value is used.  The resulting graph is:\n\u003c/p\u003e\u003cpre\u003e                  e2\n     ====  \u003c---------------  ====\n    ( n1 )                  ( n2 )\n     ====  ---------------\u003e  ====\n                  e1         |  ^\n                             |  |\n                          e3 |  | e4\n                             |  |\n                             v  |\n                             ====\n                            ( n3 )\n                             ====\n\u003c/pre\u003e\u003cp\u003eThe same graph (up to the actual \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e values; so it won't satisfy\n     \u003ccode\u003e==\u003c/code\u003e) would have been obtained with:\n\u003c/p\u003e\u003cpre\u003e ((e4,e3), g'') = addEdge n3 Anywhere n2 (BeforeEdge e2) \"e4\" \"e3\" g'\n\u003c/pre\u003e\u003cp\u003e(Note, however, that now \u003ccode\u003e\u003ca\u003eedges\u003c/a\u003e\u003c/code\u003e will return \u003ccode\u003ee4\u003c/code\u003e rather than\n     \u003ccode\u003ee3\u003c/code\u003e as it is considered to be the primary edge.)\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "addEdge",
          "package": "planar-graph",
          "signature": "Node-\u003e EdgePos-\u003e Node-\u003e EdgePos-\u003e e-\u003e e-\u003e PlanarGraph n e-\u003e ((Edge, Edge), PlanarGraph n e)",
          "type": "function"
        },
        "index": {
          "description": "Add an edge between two nodes and In reality since all edges are duplicated see inverseEdge two half-edges are inserted and the identifiers of both are returned For functions such as edges the first added half-edge is assumed to be the primary one If either node does not currently have any edges then its corresponding EdgePos value is ignored An EdgePos of Anywhere will place the edge before i.e anti-clockwise of the last edge added to that node For example let refer to the following graph where n1 etc are both the labels and the variable names n1 n2 n3 We can add an edge between n1 and n2 using Anywhere as the EdgePos since there are currently no edges on either node e1 e2 addEdge n1 Anywhere n2 Anywhere e1 e2 This will result in the following graph e2 n1 n2 e1 n3 If we want to add edges between n2 and n3 we have three options for the location on n2 Use Anywhere since there is only one other edge it makes no difference in terms of the embedding where the second edge goes Put the new edge BeforeEdge e2 going clockwise around n2 Put the new edge AfterEdge e2 going clockwise around n2 Since n2 currently only has one edge all three EdgePos values will result in the same graph so we can arbitrarily pick one e3 e4 addEdge n2 BeforeEdge e2 n3 Anywhere e3 e4 However with more edges care must be taken on which EdgePos value is used The resulting graph is e2 n1 n2 e1 e3 e4 n3 The same graph up to the actual Edge values so it won satisfy would have been obtained with e4 e3 addEdge n3 Anywhere n2 BeforeEdge e2 e4 e3 Note however that now edges will return e4 rather than e3 as it is considered to be the primary edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "addEdge",
          "normalized": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ea-\u003ea-\u003ePlanarGraph b a-\u003e((Edge,Edge),PlanarGraph b a)",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ee-\u003ee-\u003ePlanarGraph n e-\u003e((Edge,Edge),PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:addEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eaddEdge\u003c/a\u003e\u003c/code\u003e, but the edges are meant to be undirected so\n   use the same label for both.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "addEdgeUndirected",
          "package": "planar-graph",
          "signature": "Node -\u003e EdgePos -\u003e Node -\u003e EdgePos -\u003e e -\u003e PlanarGraph n e -\u003e (Edge, PlanarGraph n e)",
          "source": "src/Data-Graph-Planar.html#addEdgeUndirected",
          "type": "function"
        },
        "index": {
          "description": "As with addEdge but the edges are meant to be undirected so use the same label for both",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "addEdgeUndirected",
          "normalized": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ea-\u003ePlanarGraph b a-\u003e(Edge,PlanarGraph b a)",
          "package": "planar-graph",
          "partial": "Edge Undirected",
          "signature": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ee-\u003ePlanarGraph n e-\u003e(Edge,PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:addEdgeUndirected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a node with the provided label to the graph, returning the\n   updated graph and the node identifier.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "addNode",
          "package": "planar-graph",
          "signature": "n -\u003e PlanarGraph n e -\u003e (Node, PlanarGraph n e)",
          "source": "src/Data-Graph-Planar.html#addNode",
          "type": "function"
        },
        "index": {
          "description": "Add node with the provided label to the graph returning the updated graph and the node identifier",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "addNode",
          "normalized": "a-\u003ePlanarGraph a b-\u003e(Node,PlanarGraph a b)",
          "package": "planar-graph",
          "partial": "Node",
          "signature": "n-\u003ePlanarGraph n e-\u003e(Node,PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:addNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eaddEdge\u003c/a\u003e\u003c/code\u003e, but both labels are set to \u003ccode\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "addUEdge",
          "package": "planar-graph",
          "signature": "Node -\u003e EdgePos -\u003e Node -\u003e EdgePos -\u003e PlanarGraph n e -\u003e ((Edge, Edge), PlanarGraph n e)",
          "source": "src/Data-Graph-Planar.html#addUEdge",
          "type": "function"
        },
        "index": {
          "description": "As with addEdge but both labels are set to mempty",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "addUEdge",
          "normalized": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ePlanarGraph a b-\u003e((Edge,Edge),PlanarGraph a b)",
          "package": "planar-graph",
          "partial": "UEdge",
          "signature": "Node-\u003eEdgePos-\u003eNode-\u003eEdgePos-\u003ePlanarGraph n e-\u003e((Edge,Edge),PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:addUEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eaddNode\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e as the label.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "addUNode",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e (Node, PlanarGraph n e)",
          "source": "src/Data-Graph-Planar.html#addUNode",
          "type": "function"
        },
        "index": {
          "description": "As with addNode but uses mempty as the label",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "addUNode",
          "normalized": "PlanarGraph a b-\u003e(Node,PlanarGraph a b)",
          "package": "planar-graph",
          "partial": "UNode",
          "signature": "PlanarGraph n e-\u003e(Node,PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:addUNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe adjoining \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003es.  Will have repeats if the \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003es are\n   adjacent over more than one \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "adjoiningFaces",
          "package": "planar-graph",
          "signature": "FaceInfo -\u003e CList Face",
          "source": "src/Data-Graph-Planar.html#adjoiningFaces",
          "type": "function"
        },
        "index": {
          "description": "The adjoining Face Will have repeats if the Face are adjacent over more than one Edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "adjoiningFaces",
          "normalized": "FaceInfo-\u003eCList Face",
          "package": "planar-graph",
          "partial": "Faces",
          "signature": "FaceInfo-\u003eCList Face",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:adjoiningFaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the label of the specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "adjustEdgeLabel",
          "package": "planar-graph",
          "signature": "(e -\u003e e) -\u003e Edge -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#adjustEdgeLabel",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the label of the specified edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "adjustEdgeLabel",
          "normalized": "(a-\u003ea)-\u003eEdge-\u003ePlanarGraph b a-\u003ePlanarGraph b a",
          "package": "planar-graph",
          "partial": "Edge Label",
          "signature": "(e-\u003ee)-\u003eEdge-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:adjustEdgeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the label of the specified node.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "adjustNodeLabel",
          "package": "planar-graph",
          "signature": "(n -\u003e n) -\u003e Node -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#adjustNodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the label of the specified node",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "adjustNodeLabel",
          "normalized": "(a-\u003ea)-\u003eNode-\u003ePlanarGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "partial": "Node Label",
          "signature": "(n-\u003en)-\u003eNode-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:adjustNodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default, the traversals do so in a clockwise fashion, just as\n   the outgoing edges are defined for each node.  This lets you\n   specify that an anti-clockwise traversal should be done instead.\n\u003c/p\u003e\u003cp\u003eThis is not computationally any more expensive than clockwise\n   traversals.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "antiClockwiseTraversal",
          "package": "planar-graph",
          "signature": "Traversal -\u003e Traversal",
          "source": "src/Data-Graph-Planar.html#antiClockwiseTraversal",
          "type": "function"
        },
        "index": {
          "description": "By default the traversals do so in clockwise fashion just as the outgoing edges are defined for each node This lets you specify that an anti-clockwise traversal should be done instead This is not computationally any more expensive than clockwise traversals",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "antiClockwiseTraversal",
          "normalized": "Traversal-\u003eTraversal",
          "package": "planar-graph",
          "partial": "Clockwise Traversal",
          "signature": "Traversal-\u003eTraversal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:antiClockwiseTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDid we skip any edges?\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "anyMissing",
          "package": "planar-graph",
          "signature": "TraversedValues a -\u003e Bool",
          "source": "src/Data-Graph-Planar.html#anyMissing",
          "type": "function"
        },
        "index": {
          "description": "Did we skip any edges",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "anyMissing",
          "normalized": "TraversedValues a-\u003eBool",
          "package": "planar-graph",
          "partial": "Missing",
          "signature": "TraversedValues a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:anyMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA breadth-first traversal on the sample graph would visit the\n     nodes and edges in the following order:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003enodes\u003c/em\u003e:\u003c/dt\u003e\u003cdd\u003e 1 2 5 4 3 8 7 6\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eedges\u003c/em\u003e:\u003c/dt\u003e\u003cdd\u003e a c d b h g f e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003espanningTraversal\u003c/a\u003e\u003c/code\u003e was used, then the edge \u003cem\u003ee\u003c/em\u003e wouldn't be\n     traversed; if \u003ccode\u003e\u003ca\u003eantiClockwiseTraversal\u003c/a\u003e\u003c/code\u003e was also used, then\n     instead \u003cem\u003ef\u003c/em\u003e wouldn't be traversed.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "breadthFirst",
          "package": "planar-graph",
          "signature": "Traversal",
          "source": "src/Data-Graph-Planar.html#breadthFirst",
          "type": "function"
        },
        "index": {
          "description": "breadth-first traversal on the sample graph would visit the nodes and edges in the following order nodes edges If spanningTraversal was used then the edge wouldn be traversed if antiClockwiseTraversal was also used then instead wouldn be traversed",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "breadthFirst",
          "package": "planar-graph",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:breadthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if this graph is the canonical representative of the\n   isomorphic class (defined as such by having a breadth-first\n   serialisation via \u003ccode\u003e\u003ca\u003eserialiseBFS\u003c/a\u003e\u003c/code\u003e that is \u003ccode\u003e\u003c=\u003c/code\u003e any other such\n   serialisation).\n\u003c/p\u003e\u003cp\u003eThe function specifies all possible starting edges for the\n   traversal (it is safe to leave the specified edge being returned\n   by this function).  If there are no known unique aspects of this\n   graph that could be used to minimise \"uniqueness\", then use the\n   \u003ccode\u003e\u003ca\u003ehalfEdges\u003c/a\u003e\u003c/code\u003e function (note: you probably do \u003cem\u003enot\u003c/em\u003e want to use\n   \u003ccode\u003e\u003ca\u003eedges\u003c/a\u003e\u003c/code\u003e if the graph is undirected).\n\u003c/p\u003e\u003cp\u003eNote that this really only makes sense for graphs of type\n   \u003ccode\u003ePlanarGraph () ()\u003c/code\u003e, unless you are sure that the labels won't\n   affect the comparisons.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "canonicalExampleBy",
          "package": "planar-graph",
          "signature": "(PlanarGraph n e -\u003e [Edge]) -\u003e Edge -\u003e PlanarGraph n e -\u003e Bool",
          "source": "src/Data-Graph-Planar.html#canonicalExampleBy",
          "type": "function"
        },
        "index": {
          "description": "Determine if this graph is the canonical representative of the isomorphic class defined as such by having breadth-first serialisation via serialiseBFS that is any other such serialisation The function specifies all possible starting edges for the traversal it is safe to leave the specified edge being returned by this function If there are no known unique aspects of this graph that could be used to minimise uniqueness then use the halfEdges function note you probably do not want to use edges if the graph is undirected Note that this really only makes sense for graphs of type PlanarGraph unless you are sure that the labels won affect the comparisons",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "canonicalExampleBy",
          "normalized": "(PlanarGraph a b-\u003e[Edge])-\u003eEdge-\u003ePlanarGraph a b-\u003eBool",
          "package": "planar-graph",
          "partial": "Example By",
          "signature": "(PlanarGraph n e-\u003e[Edge])-\u003eEdge-\u003ePlanarGraph n e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:canonicalExampleBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a \u003ccode\u003e\u003ca\u003ebreadthFirst\u003c/a\u003e\u003c/code\u003e traversal to find all the connected\n   components.  The node and edge identifiers for each component are\n   re-numbered.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "connectedComponents",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(PlanarGraph n e, (Node -\u003e Node, Edge -\u003e Edge))]",
          "source": "src/Data-Graph-Planar.html#connectedComponents",
          "type": "function"
        },
        "index": {
          "description": "Use breadthFirst traversal to find all the connected components The node and edge identifiers for each component are re-numbered",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "connectedComponents",
          "normalized": "PlanarGraph a b-\u003e[(PlanarGraph a b,(Node-\u003eNode,Edge-\u003eEdge))]",
          "package": "planar-graph",
          "partial": "Components",
          "signature": "PlanarGraph n e-\u003e[(PlanarGraph n e,(Node-\u003eNode,Edge-\u003eEdge))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:connectedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges the two nodes adjoined by this edge, and delete all edges\n   between them.  The provided function is to decide what the label\n   for the resulting node should be (if the edge goes from \u003ccode\u003ef\u003c/code\u003e to\n   \u003ccode\u003et\u003c/code\u003e, then the function is \u003ccode\u003efLabel -\u003e tLabel -\u003e newLabel\u003c/code\u003e).  The\n   \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e value for the merged node is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efromNode\u003c/a\u003e\u003c/code\u003e pg e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this may result in multiple edges between the new node\n   and another node if it is adjacent to both nodes being merged.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "contractEdge",
          "package": "planar-graph",
          "signature": "Edge -\u003e (n -\u003e n -\u003e n) -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#contractEdge",
          "type": "function"
        },
        "index": {
          "description": "Merges the two nodes adjoined by this edge and delete all edges between them The provided function is to decide what the label for the resulting node should be if the edge goes from to then the function is fLabel tLabel newLabel The Node value for the merged node is fromNode pg Note that this may result in multiple edges between the new node and another node if it is adjacent to both nodes being merged",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "contractEdge",
          "normalized": "Edge-\u003e(a-\u003ea-\u003ea)-\u003ePlanarGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "Edge-\u003e(n-\u003en-\u003en)-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:contractEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the edge and its inverse from the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "deleteEdge",
          "package": "planar-graph",
          "signature": "Edge -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#deleteEdge",
          "type": "function"
        },
        "index": {
          "description": "Delete the edge and its inverse from the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "deleteEdge",
          "normalized": "Edge-\u003ePlanarGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "Edge-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:deleteEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the node and all adjacent edges from the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "deleteNode",
          "package": "planar-graph",
          "signature": "Node -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#deleteNode",
          "type": "function"
        },
        "index": {
          "description": "Delete the node and all adjacent edges from the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "deleteNode",
          "normalized": "Node-\u003ePlanarGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "partial": "Node",
          "signature": "Node-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:deleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA depth-first traversal on the sample graph would visit the nodes\n     and edges in the following order:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003enodes\u003c/em\u003e:\u003c/dt\u003e\u003cdd\u003e 1 2 5 8 7 4 6 3\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eedges\u003c/em\u003e:\u003c/dt\u003e\u003cdd\u003e a c h g d f e b\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003espanningTraversal\u003c/a\u003e\u003c/code\u003e was used, then the edge \u003cem\u003eb\u003c/em\u003e wouldn't be\n     traversed; if \u003ccode\u003e\u003ca\u003eantiClockwiseTraversal\u003c/a\u003e\u003c/code\u003e was also used then instead\n     \u003cem\u003ed\u003c/em\u003e wouldn't be traversed.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "depthFirst",
          "package": "planar-graph",
          "signature": "Traversal",
          "source": "src/Data-Graph-Planar.html#depthFirst",
          "type": "function"
        },
        "index": {
          "description": "depth-first traversal on the sample graph would visit the nodes and edges in the following order nodes edges If spanningTraversal was used then the edge wouldn be traversed if antiClockwiseTraversal was also used then instead wouldn be traversed",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "depthFirst",
          "package": "planar-graph",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:depthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the graph from its serialised form.  Assumes that the\n   graph is valid.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "deserialise",
          "package": "planar-graph",
          "signature": "SerialisedGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#deserialise",
          "type": "function"
        },
        "index": {
          "description": "Creates the graph from its serialised form Assumes that the graph is valid",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "deserialise",
          "normalized": "SerialisedGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "signature": "SerialisedGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:deserialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es that make up the face, its\n   inverse and the \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e on the other side\n   of that \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "edgeCrossings",
          "package": "planar-graph",
          "signature": "FaceInfo -\u003e CList ((Edge, Edge), Face)",
          "source": "src/Data-Graph-Planar.html#edgeCrossings",
          "type": "function"
        },
        "index": {
          "description": "The Edge that make up the face its inverse and the Face on the other side of that Edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "edgeCrossings",
          "normalized": "FaceInfo-\u003eCList((Edge,Edge),Face)",
          "package": "planar-graph",
          "partial": "Crossings",
          "signature": "FaceInfo-\u003eCList((Edge,Edge),Face)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:edgeCrossings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the label for the specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "edgeLabel",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e e",
          "source": "src/Data-Graph-Planar.html#edgeLabel",
          "type": "function"
        },
        "index": {
          "description": "Return the label for the specified edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "edgeLabel",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eb",
          "package": "planar-graph",
          "partial": "Label",
          "signature": "PlanarGraph n e-\u003eEdge-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:edgeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the primary edges in the graph returned in arbitrary order.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "edges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [Edge]",
          "source": "src/Data-Graph-Planar.html#edges",
          "type": "function"
        },
        "index": {
          "description": "All the primary edges in the graph returned in arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "edges",
          "normalized": "PlanarGraph a b-\u003e[Edge]",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eedges\u003c/a\u003e\u003c/code\u003e that returns the pair of nodes that form the\n   primary edges.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "edgesBetween",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(Node, Node)]",
          "source": "src/Data-Graph-Planar.html#edgesBetween",
          "type": "function"
        },
        "index": {
          "description": "variant of edges that returns the pair of nodes that form the primary edges",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "edgesBetween",
          "normalized": "PlanarGraph a b-\u003e[(Node,Node)]",
          "package": "planar-graph",
          "partial": "Between",
          "signature": "PlanarGraph n e-\u003e[(Node,Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:edgesBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an empty planar graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "empty",
          "package": "planar-graph",
          "signature": "PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Constructs an empty planar graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "empty",
          "package": "planar-graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003es that make up the face.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "faceEdges",
          "package": "planar-graph",
          "signature": "FaceInfo -\u003e CList Edge",
          "source": "src/Data-Graph-Planar.html#faceEdges",
          "type": "function"
        },
        "index": {
          "description": "The Edge that make up the face",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "faceEdges",
          "normalized": "FaceInfo-\u003eCList Edge",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "FaceInfo-\u003eCList Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:faceEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that make up the face.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "faceNodes",
          "package": "planar-graph",
          "signature": "FaceInfo -\u003e CList Node",
          "source": "src/Data-Graph-Planar.html#faceNodes",
          "type": "function"
        },
        "index": {
          "description": "The Node that make up the face",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "faceNodes",
          "normalized": "FaceInfo-\u003eCList Node",
          "package": "planar-graph",
          "partial": "Nodes",
          "signature": "FaceInfo-\u003eCList Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:faceNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e which this \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e is coming from.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "fromNode",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Node",
          "source": "src/Data-Graph-Planar.html#fromNode",
          "type": "function"
        },
        "index": {
          "description": "The Node which this Edge is coming from",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "fromNode",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eNode",
          "package": "planar-graph",
          "partial": "Node",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:fromNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all nodes and edges in the same face as the provided edge\n   (including that edge); assumes the edge is part of the graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "getFace",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e ([Node], [Edge])",
          "source": "src/Data-Graph-Planar.html#getFace",
          "type": "function"
        },
        "index": {
          "description": "Returns all nodes and edges in the same face as the provided edge including that edge assumes the edge is part of the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "getFace",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003e([Node],[Edge])",
          "package": "planar-graph",
          "partial": "Face",
          "signature": "PlanarGraph n e-\u003eEdge-\u003e([Node],[Edge])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:getFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all faces in the planar graph.  A face is defined by\n    traversing along the right-hand-side of edges, e.g.:\n\u003c/p\u003e\u003cpre\u003e\n           o-----------------------------\u003eo\n           ^..............................|\n           |..............................|\n           |..............FACE............|\n           |..............................|\n           |..............................v\n           o\u003c-----------------------------o\n\n\u003c/pre\u003e\u003cp\u003e(with the inverse edges all being on the outside of the edges\n   shown).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "getFaces",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e FaceMap",
          "source": "src/Data-Graph-Planar.html#getFaces",
          "type": "function"
        },
        "index": {
          "description": "Finds all faces in the planar graph face is defined by traversing along the right-hand-side of edges e.g FACE with the inverse edges all being on the outside of the edges shown",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "getFaces",
          "normalized": "PlanarGraph a b-\u003eFaceMap",
          "package": "planar-graph",
          "partial": "Faces",
          "signature": "PlanarGraph n e-\u003eFaceMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:getFaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the half-edges (thus also including inverses) in the graph\n   (in some arbitrary order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "halfEdges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [Edge]",
          "source": "src/Data-Graph-Planar.html#halfEdges",
          "type": "function"
        },
        "index": {
          "description": "All the half-edges thus also including inverses in the graph in some arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "halfEdges",
          "normalized": "PlanarGraph a b-\u003e[Edge]",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "PlanarGraph n e-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:halfEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ehalfEdges\u003c/a\u003e\u003c/code\u003e that returns the pair of nodes that form an\n   edge rather than its unique identifier (again including inverse\n   edges).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "halfEdgesBetween",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(Node, Node)]",
          "source": "src/Data-Graph-Planar.html#halfEdgesBetween",
          "type": "function"
        },
        "index": {
          "description": "variant of halfEdges that returns the pair of nodes that form an edge rather than its unique identifier again including inverse edges",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "halfEdgesBetween",
          "normalized": "PlanarGraph a b-\u003e[(Node,Node)]",
          "package": "planar-graph",
          "partial": "Edges Between",
          "signature": "PlanarGraph n e-\u003e[(Node,Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:halfEdgesBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this edge still in the graph?\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "hasEdge",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Bool",
          "source": "src/Data-Graph-Planar.html#hasEdge",
          "type": "function"
        },
        "index": {
          "description": "Is this edge still in the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "hasEdge",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eBool",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:hasEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this node still in the graph?\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "hasNode",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Node -\u003e Bool",
          "source": "src/Data-Graph-Planar.html#hasNode",
          "type": "function"
        },
        "index": {
          "description": "Is this node still in the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "hasNode",
          "normalized": "PlanarGraph a b-\u003eNode-\u003eBool",
          "package": "planar-graph",
          "partial": "Node",
          "signature": "PlanarGraph n e-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:hasNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all incoming edges for the specified node, travelling\n   clockwise around the node.  It assumes the node is indeed in the\n   graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "incomingEdges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Node -\u003e CList Edge",
          "source": "src/Data-Graph-Planar.html#incomingEdges",
          "type": "function"
        },
        "index": {
          "description": "Returns all incoming edges for the specified node travelling clockwise around the node It assumes the node is indeed in the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "incomingEdges",
          "normalized": "PlanarGraph a b-\u003eNode-\u003eCList Edge",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "PlanarGraph n e-\u003eNode-\u003eCList Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:incomingEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e that is an inverse to this one; i.e.:\n\u003c/p\u003e\u003cpre\u003e fromNode pg e == toNode pg $ inverseEdge pg e\n toNode pg e == fromNode pg $ inverseEdge pg e\n\u003c/pre\u003e",
          "module": "Data.Graph.Planar",
          "name": "inverseEdge",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Edge",
          "source": "src/Data-Graph-Planar.html#inverseEdge",
          "type": "function"
        },
        "index": {
          "description": "The Edge that is an inverse to this one i.e fromNode pg toNode pg inverseEdge pg toNode pg fromNode pg inverseEdge pg",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "inverseEdge",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eEdge",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eEdge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:inverseEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the graph is empty.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "isEmpty",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Bool",
          "source": "src/Data-Graph-Planar.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Determines if the graph is empty",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "isEmpty",
          "normalized": "PlanarGraph a b-\u003eBool",
          "package": "planar-graph",
          "partial": "Empty",
          "signature": "PlanarGraph n e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the primary edges and their labels in the graph (in some\n   arbitrary order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "labEdges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(Edge, e)]",
          "source": "src/Data-Graph-Planar.html#labEdges",
          "type": "function"
        },
        "index": {
          "description": "All the primary edges and their labels in the graph in some arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "labEdges",
          "normalized": "PlanarGraph a b-\u003e[(Edge,b)]",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "PlanarGraph n e-\u003e[(Edge,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:labEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eedgesBetween\u003c/a\u003e\u003c/code\u003e but including the labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "labEdgesBetween",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [((Node, Node), e)]",
          "source": "src/Data-Graph-Planar.html#labEdgesBetween",
          "type": "function"
        },
        "index": {
          "description": "As with edgesBetween but including the labels",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "labEdgesBetween",
          "normalized": "PlanarGraph a b-\u003e[((Node,Node),b)]",
          "package": "planar-graph",
          "partial": "Edges Between",
          "signature": "PlanarGraph n e-\u003e[((Node,Node),e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:labEdgesBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the half-edges and their labels in the graph (in some\n   arbitrary order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "labHalfEdges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(Edge, e)]",
          "source": "src/Data-Graph-Planar.html#labHalfEdges",
          "type": "function"
        },
        "index": {
          "description": "All the half-edges and their labels in the graph in some arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "labHalfEdges",
          "normalized": "PlanarGraph a b-\u003e[(Edge,b)]",
          "package": "planar-graph",
          "partial": "Half Edges",
          "signature": "PlanarGraph n e-\u003e[(Edge,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:labHalfEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ehalfEdgesBetween\u003c/a\u003e\u003c/code\u003e, but including the labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "labHalfEdgesBetween",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [((Node, Node), e)]",
          "source": "src/Data-Graph-Planar.html#labHalfEdgesBetween",
          "type": "function"
        },
        "index": {
          "description": "As with halfEdgesBetween but including the labels",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "labHalfEdgesBetween",
          "normalized": "PlanarGraph a b-\u003e[((Node,Node),b)]",
          "package": "planar-graph",
          "partial": "Half Edges Between",
          "signature": "PlanarGraph n e-\u003e[((Node,Node),e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:labHalfEdgesBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the nodes and their labels in the graph (in some arbitrary\n   order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "labNodes",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [(Node, n)]",
          "source": "src/Data-Graph-Planar.html#labNodes",
          "type": "function"
        },
        "index": {
          "description": "All the nodes and their labels in the graph in some arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "labNodes",
          "normalized": "PlanarGraph a b-\u003e[(Node,a)]",
          "package": "planar-graph",
          "partial": "Nodes",
          "signature": "PlanarGraph n e-\u003e[(Node,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:labNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the dual of a planar graph.  If actual node and edge\n   labels are required, use \u003ccode\u003e\u003ca\u003etoDual\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "makeDual",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e PlanarGraph () ()",
          "source": "src/Data-Graph-Planar.html#makeDual",
          "type": "function"
        },
        "index": {
          "description": "Create the dual of planar graph If actual node and edge labels are required use toDual",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "makeDual",
          "normalized": "PlanarGraph a b-\u003ePlanarGraph()()",
          "package": "planar-graph",
          "partial": "Dual",
          "signature": "PlanarGraph n e-\u003ePlanarGraph()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:makeDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a mapping function over the edge labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "mapEdges",
          "package": "planar-graph",
          "signature": "(e -\u003e e') -\u003e PlanarGraph n e -\u003e PlanarGraph n e'",
          "source": "src/Data-Graph-Planar.html#mapEdges",
          "type": "function"
        },
        "index": {
          "description": "Apply mapping function over the edge labels",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "mapEdges",
          "normalized": "(a-\u003eb)-\u003ePlanarGraph c a-\u003ePlanarGraph c b",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "(e-\u003ee')-\u003ePlanarGraph n e-\u003ePlanarGraph n e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:mapEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a mapping function over the node labels.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "mapNodes",
          "package": "planar-graph",
          "signature": "(n -\u003e n') -\u003e PlanarGraph n e -\u003e PlanarGraph n' e",
          "source": "src/Data-Graph-Planar.html#mapNodes",
          "type": "function"
        },
        "index": {
          "description": "Apply mapping function over the node labels",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "mapNodes",
          "normalized": "(a-\u003eb)-\u003ePlanarGraph a c-\u003ePlanarGraph b c",
          "package": "planar-graph",
          "partial": "Nodes",
          "signature": "(n-\u003en')-\u003ePlanarGraph n e-\u003ePlanarGraph n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:mapNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge all the provided planar graphs together into one large\n   graph, and provide translation functions for every graph in the\n   list (the first pair in this list is just \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emergeGraphs\u003c/a\u003e\u003c/code\u003e for more information.  For best performance,\n   the graphs should be decreasing in size/order.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "mergeAllGraphs",
          "package": "planar-graph",
          "signature": "[PlanarGraph n e] -\u003e (PlanarGraph n e, [(Node -\u003e Node, Edge -\u003e Edge)])",
          "source": "src/Data-Graph-Planar.html#mergeAllGraphs",
          "type": "function"
        },
        "index": {
          "description": "Merge all the provided planar graphs together into one large graph and provide translation functions for every graph in the list the first pair in this list is just id id See mergeGraphs for more information For best performance the graphs should be decreasing in size order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "mergeAllGraphs",
          "normalized": "[PlanarGraph a b]-\u003e(PlanarGraph a b,[(Node-\u003eNode,Edge-\u003eEdge)])",
          "package": "planar-graph",
          "partial": "All Graphs",
          "signature": "[PlanarGraph n e]-\u003e(PlanarGraph n e,[(Node-\u003eNode,Edge-\u003eEdge)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:mergeAllGraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the results from \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e into one traversal (i.e. you\n   don't care about individual components).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "mergeGraphTraversals",
          "package": "planar-graph",
          "signature": "[GraphTraversal] -\u003e GraphTraversal",
          "source": "src/Data-Graph-Planar.html#mergeGraphTraversals",
          "type": "function"
        },
        "index": {
          "description": "Merge the results from traverse into one traversal i.e you don care about individual components",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "mergeGraphTraversals",
          "normalized": "[GraphTraversal]-\u003eGraphTraversal",
          "package": "planar-graph",
          "partial": "Graph Traversals",
          "signature": "[GraphTraversal]-\u003eGraphTraversal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:mergeGraphTraversals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emergeGraphs pg1 pg2\u003c/code\u003e creates a disjoint union between \u003ccode\u003epg1\u003c/code\u003e and\n   \u003ccode\u003epg2\u003c/code\u003e (i.e. puts them into the same graph but disconnected).\n   This is used when they were created independently and thus\n   probably have clashing \u003ccode\u003eNode\u003c/code\u003e and \u003ccode\u003eEdge\u003c/code\u003e values.  For best\n   performance, \u003ccode\u003epg1\u003c/code\u003e should be larger than \u003ccode\u003epg2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlong with the merged graph, two functions are returned: they\n   respectively convert Node and Edge values from \u003ccode\u003epg2\u003c/code\u003e to those\n   found in the merged graph.\n\u003c/p\u003e\u003cp\u003ePlease note that these functions are \u003cem\u003epartial\u003c/em\u003e and should only be\n   used for the Node and Edge identifiers from \u003ccode\u003epg2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "mergeGraphs",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e PlanarGraph n e -\u003e (PlanarGraph n e, Node -\u003e Node, Edge -\u003e Edge)",
          "source": "src/Data-Graph-Planar.html#mergeGraphs",
          "type": "function"
        },
        "index": {
          "description": "mergeGraphs pg1 pg2 creates disjoint union between pg1 and pg2 i.e puts them into the same graph but disconnected This is used when they were created independently and thus probably have clashing Node and Edge values For best performance pg1 should be larger than pg2 Along with the merged graph two functions are returned they respectively convert Node and Edge values from pg2 to those found in the merged graph Please note that these functions are partial and should only be used for the Node and Edge identifiers from pg2",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "mergeGraphs",
          "normalized": "PlanarGraph a b-\u003ePlanarGraph a b-\u003e(PlanarGraph a b,Node-\u003eNode,Edge-\u003eEdge)",
          "package": "planar-graph",
          "partial": "Graphs",
          "signature": "PlanarGraph n e-\u003ePlanarGraph n e-\u003e(PlanarGraph n e,Node-\u003eNode,Edge-\u003eEdge)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:mergeGraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003es that are connected to this \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e with an edge (in\n   clockwise order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "neighbours",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Node -\u003e CList Node",
          "source": "src/Data-Graph-Planar.html#neighbours",
          "type": "function"
        },
        "index": {
          "description": "The Node that are connected to this Node with an edge in clockwise order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "neighbours",
          "normalized": "PlanarGraph a b-\u003eNode-\u003eCList Node",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003eNode-\u003eCList Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e going clockwise around the \u003ccode\u003e\u003ca\u003efromNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "nextEdge",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Edge",
          "source": "src/Data-Graph-Planar.html#nextEdge",
          "type": "function"
        },
        "index": {
          "description": "The next Edge going clockwise around the fromNode",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "nextEdge",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eEdge",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eEdge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:nextEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the label for the specified node.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "nodeLabel",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Node -\u003e n",
          "source": "src/Data-Graph-Planar.html#nodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Returns the label for the specified node",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "nodeLabel",
          "normalized": "PlanarGraph a b-\u003eNode-\u003ea",
          "package": "planar-graph",
          "partial": "Label",
          "signature": "PlanarGraph n e-\u003eNode-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:nodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the nodes in the graph (in some arbitrary order).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "nodes",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e [Node]",
          "source": "src/Data-Graph-Planar.html#nodes",
          "type": "function"
        },
        "index": {
          "description": "All the nodes in the graph in some arbitrary order",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "nodes",
          "normalized": "PlanarGraph a b-\u003e[Node]",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out all those graphs for which \u003ccode\u003e\u003ca\u003ecanonicalExampleBy\u003c/a\u003e\u003c/code\u003e isn't True.\n\u003c/p\u003e\u003cp\u003eFor this function to be correct, no two \u003ccode\u003e(Edge, PlanarGraph n e)\u003c/code\u003e\n   pairs should have the same result from \u003ccode\u003e\u003ca\u003eserialiseBFS\u003c/a\u003e\u003c/code\u003e.  For\n   example, consider the following graph \u003cem\u003eg\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e\n                 e1\n      ===== \u003c--------- =====\n     (     )---------\u003e(     )\n      =====          / =====\n      | ^           / /| | ^\n      | |          / /   | |\n      | |         / /    | |\n      | |        / /     | |\n      | |       / /      | |\n      | |      / /       | |\n      | |     / /        | |\n      | |    / /         | |\n      | |   / /          | |\n      v | |/ /           v |\n      ===== /          =====\n     (     )\u003c---------(     )\n      ===== ---------\u003e =====\n                 e2\n\n\u003c/pre\u003e\u003cp\u003eThen \u003ccode\u003eonlyCanonicalExamples \u003ccode\u003e\u003ca\u003ehalfEdges\u003c/a\u003e\u003c/code\u003e [(e1,g), (e2,g)]\u003c/code\u003e will\n   return both graphs, even though they represent the same graph.\n\u003c/p\u003e\u003cp\u003eNote that this really only makes sense for graphs of type\n   \u003ccode\u003ePlanarGraph () ()\u003c/code\u003e, unless you are sure that the labels won't\n   affect the comparisons.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "onlyCanonicalExamples",
          "package": "planar-graph",
          "signature": "(PlanarGraph n e -\u003e [Edge]) -\u003e [(Edge, PlanarGraph n e)] -\u003e [(Edge, PlanarGraph n e)]",
          "source": "src/Data-Graph-Planar.html#onlyCanonicalExamples",
          "type": "function"
        },
        "index": {
          "description": "Filter out all those graphs for which canonicalExampleBy isn True For this function to be correct no two Edge PlanarGraph pairs should have the same result from serialiseBFS For example consider the following graph e1 e2 Then onlyCanonicalExamples halfEdges e1 e2 will return both graphs even though they represent the same graph Note that this really only makes sense for graphs of type PlanarGraph unless you are sure that the labels won affect the comparisons",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "onlyCanonicalExamples",
          "normalized": "(PlanarGraph a b-\u003e[Edge])-\u003e[(Edge,PlanarGraph a b)]-\u003e[(Edge,PlanarGraph a b)]",
          "package": "planar-graph",
          "partial": "Canonical Examples",
          "signature": "(PlanarGraph n e-\u003e[Edge])-\u003e[(Edge,PlanarGraph n e)]-\u003e[(Edge,PlanarGraph n e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:onlyCanonicalExamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of nodes in the graph (i.e. \u003ccode\u003elength . nodes\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "order",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Int",
          "source": "src/Data-Graph-Planar.html#order",
          "type": "function"
        },
        "index": {
          "description": "The number of nodes in the graph i.e length nodes",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "order",
          "normalized": "PlanarGraph a b-\u003eInt",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all outgoing edges for the specified node, travelling\n   clockwise around the node.  It assumes the node is indeed in the\n   graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "outgoingEdges",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Node -\u003e CList Edge",
          "source": "src/Data-Graph-Planar.html#outgoingEdges",
          "type": "function"
        },
        "index": {
          "description": "Returns all outgoing edges for the specified node travelling clockwise around the node It assumes the node is indeed in the graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "outgoingEdges",
          "normalized": "PlanarGraph a b-\u003eNode-\u003eCList Edge",
          "package": "planar-graph",
          "partial": "Edges",
          "signature": "PlanarGraph n e-\u003eNode-\u003eCList Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:outgoingEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print the graph.  Note that this loses a lot of\n   information, such as edge inverses, etc.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "prettify",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e String",
          "source": "src/Data-Graph-Planar.html#prettify",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print the graph Note that this loses lot of information such as edge inverses etc",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "prettify",
          "normalized": "PlanarGraph a b-\u003eString",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:prettify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print the graph to stdout.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "prettyPrint",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e IO ()",
          "source": "src/Data-Graph-Planar.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print the graph to stdout",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "prettyPrint",
          "normalized": "PlanarGraph a b-\u003eIO()",
          "package": "planar-graph",
          "partial": "Print",
          "signature": "PlanarGraph n e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe previous \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e going clockwise around the \u003ccode\u003e\u003ca\u003efromNode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "prevEdge",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Edge",
          "source": "src/Data-Graph-Planar.html#prevEdge",
          "type": "function"
        },
        "index": {
          "description": "The previous Edge going clockwise around the fromNode",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "prevEdge",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eEdge",
          "package": "planar-graph",
          "partial": "Edge",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eEdge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:prevEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a re-numbering of the identifiers in this graph using the\n   specified traversal and optionally starting from a specified\n   edge.\n\u003c/p\u003e\u003cp\u003eIf there is only one connected component in the graph and the\n   same edge is specified each time (relative to the location in the\n   graph), then the re-numbering is \u003cem\u003ecanonical\u003c/em\u003e: that is, it can be\n   used to compare whether two graphs constructed via separate paths\n   (and thus using different identifiers) are indeed the same.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "renumber",
          "package": "planar-graph",
          "signature": "Traversal -\u003e PlanarGraph n e -\u003e Maybe Edge -\u003e (PlanarGraph n e, (Node -\u003e Node, Edge -\u003e Edge))",
          "source": "src/Data-Graph-Planar.html#renumber",
          "type": "function"
        },
        "index": {
          "description": "Perform re-numbering of the identifiers in this graph using the specified traversal and optionally starting from specified edge If there is only one connected component in the graph and the same edge is specified each time relative to the location in the graph then the re-numbering is canonical that is it can be used to compare whether two graphs constructed via separate paths and thus using different identifiers are indeed the same",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "renumber",
          "normalized": "Traversal-\u003ePlanarGraph a b-\u003eMaybe Edge-\u003e(PlanarGraph a b,(Node-\u003eNode,Edge-\u003eEdge))",
          "package": "planar-graph",
          "signature": "Traversal-\u003ePlanarGraph n e-\u003eMaybe Edge-\u003e(PlanarGraph n e,(Node-\u003eNode,Edge-\u003eEdge))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:renumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eserialiseBFS\u003c/a\u003e\u003c/code\u003e with no specified edge.  Also added\n   are the \u003ccode\u003e\u003ca\u003eorder\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e of the graph.\n\u003c/p\u003e\u003cp\u003eThis function is mainly intended for use by the\n   \u003ca\u003eData.Graph.Planar.Serialisation\u003c/a\u003e module.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "serialTraversal",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e ((Int, Int), SerialisedGraph n e)",
          "source": "src/Data-Graph-Planar.html#serialTraversal",
          "type": "function"
        },
        "index": {
          "description": "An alias for serialiseBFS with no specified edge Also added are the order and size of the graph This function is mainly intended for use by the Data.Graph.Planar.Serialisation module",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "serialTraversal",
          "normalized": "PlanarGraph a b-\u003e((Int,Int),SerialisedGraph a b)",
          "package": "planar-graph",
          "partial": "Traversal",
          "signature": "PlanarGraph n e-\u003e((Int,Int),SerialisedGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:serialTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the serialised form of this graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "serialise",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e SerialisedGraph n e",
          "source": "src/Data-Graph-Planar.html#serialise",
          "type": "function"
        },
        "index": {
          "description": "Create the serialised form of this graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "serialise",
          "normalized": "PlanarGraph a b-\u003eSerialisedGraph a b",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003eSerialisedGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:serialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a breadth-first traversal serialisation of the provided\n   graph.  If an edge is provided, then it is the first edge and its\n   \u003ccode\u003e\u003ca\u003efromNode\u003c/a\u003e\u003c/code\u003e is the first node; if no edge is provided then an\n   arbitrary edge is chosen.\n\u003c/p\u003e\u003cp\u003eUp to the choice of starting edge, the returned \u003ccode\u003e\u003ca\u003eSerialisedGraph\u003c/a\u003e\u003c/code\u003e\n   should be unique no matter how the graph was constructed.\n\u003c/p\u003e\u003cp\u003eNote that only one connected component is used: this is because\n   if there is more than one component then the serialisation is\n   \u003cem\u003enot\u003c/em\u003e unique (due to how to choose the ordering of the\n   components).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "serialiseBFS",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Maybe Edge -\u003e SerialisedGraph n e",
          "source": "src/Data-Graph-Planar.html#serialiseBFS",
          "type": "function"
        },
        "index": {
          "description": "Perform breadth-first traversal serialisation of the provided graph If an edge is provided then it is the first edge and its fromNode is the first node if no edge is provided then an arbitrary edge is chosen Up to the choice of starting edge the returned SerialisedGraph should be unique no matter how the graph was constructed Note that only one connected component is used this is because if there is more than one component then the serialisation is not unique due to how to choose the ordering of the components",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "serialiseBFS",
          "normalized": "PlanarGraph a b-\u003eMaybe Edge-\u003eSerialisedGraph a b",
          "package": "planar-graph",
          "partial": "BFS",
          "signature": "PlanarGraph n e-\u003eMaybe Edge-\u003eSerialisedGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:serialiseBFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the label of the specified edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "setEdgeLabel",
          "package": "planar-graph",
          "signature": "e -\u003e Edge -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#setEdgeLabel",
          "type": "function"
        },
        "index": {
          "description": "Set the label of the specified edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "setEdgeLabel",
          "normalized": "a-\u003eEdge-\u003ePlanarGraph b a-\u003ePlanarGraph b a",
          "package": "planar-graph",
          "partial": "Edge Label",
          "signature": "e-\u003eEdge-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:setEdgeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the label of the specified node.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "setNodeLabel",
          "package": "planar-graph",
          "signature": "n -\u003e Node -\u003e PlanarGraph n e -\u003e PlanarGraph n e",
          "source": "src/Data-Graph-Planar.html#setNodeLabel",
          "type": "function"
        },
        "index": {
          "description": "Set the label of the specified node",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "setNodeLabel",
          "normalized": "a-\u003eNode-\u003ePlanarGraph a b-\u003ePlanarGraph a b",
          "package": "planar-graph",
          "partial": "Node Label",
          "signature": "n-\u003eNode-\u003ePlanarGraph n e-\u003ePlanarGraph n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:setNodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of edges in the graph (i.e. \u003ccode\u003elength . edges\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "size",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Int",
          "source": "src/Data-Graph-Planar.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of edges in the graph i.e length edges",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "size",
          "normalized": "PlanarGraph a b-\u003eInt",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a traversal suitable for a spanning tree.  In this case,\n   edges that reach a node that has already been visited won't be\n   traversed.\n\u003c/p\u003e\u003cp\u003eThis \u003cem\u003edoes\u003c/em\u003e make getting each connected component more expensive.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "spanningTraversal",
          "package": "planar-graph",
          "signature": "Traversal -\u003e Traversal",
          "source": "src/Data-Graph-Planar.html#spanningTraversal",
          "type": "function"
        },
        "index": {
          "description": "Perform traversal suitable for spanning tree In this case edges that reach node that has already been visited won be traversed This does make getting each connected component more expensive",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "spanningTraversal",
          "normalized": "Traversal-\u003eTraversal",
          "package": "planar-graph",
          "partial": "Traversal",
          "signature": "Traversal-\u003eTraversal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:spanningTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the planar graph corresponding to the dual of the face\n   relationships.  The usage of \u003ccode\u003e\u003ca\u003eFaceMap\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003ePlanarGraph\u003c/a\u003e\u003c/code\u003e\n   is to allow you to use the \u003ccode\u003e\u003ca\u003eFaceMap\u003c/a\u003e\u003c/code\u003e for constructing the\n   label-creation functions if you so wish.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003eeLabel\u003c/code\u003e for edge labels takes the \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e that the\n   edge comes from, the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e belonging to that \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e that it is\n   crossing and then the \u003ccode\u003e\u003ca\u003eFace\u003c/a\u003e\u003c/code\u003e that it is going to.  For example:\n\u003c/p\u003e\u003cpre\u003e                  ....              ....\u003e\n                      ...\u003e =====....\n                          (#####)\n                           =====\n                            | ^  e2\n                            | |\n                            | |\n              face1         | |      face2\n                            | |\n                            | |\n                            | |\n                        e1  v |\n                           =====\n                          (#####)\n                        ...===== \u003c..\n                    \u003c...            ....\n                                        ...\n\u003c/pre\u003e\u003cp\u003eHere, the edge in the dual graph going from \u003cem\u003eface1\u003c/em\u003e to \u003cem\u003eface2\u003c/em\u003e\n   will have a label of \"\u003ccode\u003eeLabel face1 e1 face2\u003c/code\u003e\", and the edge\n   going from \u003cem\u003eface2\u003c/em\u003e to \u003cem\u003eface1\u003c/em\u003e will have a label of \"\u003ccode\u003eeLabel\n   face2 e2 face1\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eThe returned functions are a mapping from the faces in the\n   \u003ccode\u003e\u003ca\u003eFaceMap\u003c/a\u003e\u003c/code\u003e to the nodes in the dual graph, and the edges in the\n   original graph to the edge in the dual that crosses it (e.g. in\n   the above diagram, \u003cem\u003ee1\u003c/em\u003e will have a mapping to the edge from\n   \u003cem\u003eface1\u003c/em\u003e to \u003cem\u003eface2\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "toDual",
          "package": "planar-graph",
          "signature": "(Face -\u003e n) -\u003e (Face -\u003e Edge -\u003e Face -\u003e e) -\u003e FaceMap -\u003e ((Face -\u003e Node, Edge -\u003e Edge), PlanarGraph n e)",
          "source": "src/Data-Graph-Planar.html#toDual",
          "type": "function"
        },
        "index": {
          "description": "Create the planar graph corresponding to the dual of the face relationships The usage of FaceMap rather than PlanarGraph is to allow you to use the FaceMap for constructing the label-creation functions if you so wish The function eLabel for edge labels takes the Face that the edge comes from the Edge belonging to that Face that it is crossing and then the Face that it is going to For example e2 face1 face2 e1 Here the edge in the dual graph going from face1 to face2 will have label of eLabel face1 e1 face2 and the edge going from face2 to face1 will have label of eLabel face2 e2 face1 The returned functions are mapping from the faces in the FaceMap to the nodes in the dual graph and the edges in the original graph to the edge in the dual that crosses it e.g in the above diagram e1 will have mapping to the edge from face1 to face2",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "toDual",
          "normalized": "(Face-\u003ea)-\u003e(Face-\u003eEdge-\u003eFace-\u003eb)-\u003eFaceMap-\u003e((Face-\u003eNode,Edge-\u003eEdge),PlanarGraph a b)",
          "package": "planar-graph",
          "partial": "Dual",
          "signature": "(Face-\u003en)-\u003e(Face-\u003eEdge-\u003eFace-\u003ee)-\u003eFaceMap-\u003e((Face-\u003eNode,Edge-\u003eEdge),PlanarGraph n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:toDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e which this \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e is going to.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "toNode",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e Edge -\u003e Node",
          "source": "src/Data-Graph-Planar.html#toNode",
          "type": "function"
        },
        "index": {
          "description": "The Node which this Edge is going to",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "toNode",
          "normalized": "PlanarGraph a b-\u003eEdge-\u003eNode",
          "package": "planar-graph",
          "partial": "Node",
          "signature": "PlanarGraph n e-\u003eEdge-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:toNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse through a graph, and return each connected component\n   found.  If an edge is specified, start with that edge and then\n   for subsequent components (if there are any) arbitrarily pick\n   edges to start with; if no edge is provided than start at an\n   arbitrary edge.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "traverse",
          "package": "planar-graph",
          "signature": "Traversal -\u003e PlanarGraph n e -\u003e Maybe Edge -\u003e [GraphTraversal]",
          "source": "src/Data-Graph-Planar.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Traverse through graph and return each connected component found If an edge is specified start with that edge and then for subsequent components if there are any arbitrarily pick edges to start with if no edge is provided than start at an arbitrary edge",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "traverse",
          "normalized": "Traversal-\u003ePlanarGraph a b-\u003eMaybe Edge-\u003e[GraphTraversal]",
          "package": "planar-graph",
          "signature": "Traversal-\u003ePlanarGraph n e-\u003eMaybe Edge-\u003e[GraphTraversal]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe order in which values are\n   encountered.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "traversed",
          "package": "planar-graph",
          "signature": "TraversedValues a -\u003e Seq a",
          "source": "src/Data-Graph-Planar.html#traversed",
          "type": "function"
        },
        "index": {
          "description": "The order in which values are encountered",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "traversed",
          "normalized": "TraversedValues a-\u003eSeq a",
          "package": "planar-graph",
          "signature": "TraversedValues a-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:traversed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all labels from this graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "unlabel",
          "package": "planar-graph",
          "signature": "PlanarGraph n e -\u003e PlanarGraph () ()",
          "source": "src/Data-Graph-Planar.html#unlabel",
          "type": "function"
        },
        "index": {
          "description": "Remove all labels from this graph",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "unlabel",
          "normalized": "PlanarGraph a b-\u003ePlanarGraph()()",
          "package": "planar-graph",
          "signature": "PlanarGraph n e-\u003ePlanarGraph()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:unlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll values encountered.\n\u003c/p\u003e",
          "module": "Data.Graph.Planar",
          "name": "visited",
          "package": "planar-graph",
          "signature": "TraversedValues a -\u003e Set a",
          "source": "src/Data-Graph-Planar.html#visited",
          "type": "function"
        },
        "index": {
          "description": "All values encountered",
          "hierarchy": "Data Graph Planar",
          "module": "Data.Graph.Planar",
          "name": "visited",
          "normalized": "TraversedValues a-\u003eSet a",
          "package": "planar-graph",
          "signature": "TraversedValues a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/planar-graph/docs/Data-Graph-Planar.html#v:visited"
      }
    }
  ]
]