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
        "word": "uni-uDrawGraph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDaVinciBasic contains the code to do the following things:\n (1) get daVinci going (it calls it via a ChildProcess).\n (2) open new contexts.\n (3) pass on events and sort answers out for particular\n     contexts.\n It uses the DaVinciTypes module to parse the different\n results, but makes minimal attempts to interpret the\n different datatypes (the main reason for doing so is\n to interpret DaVinciAnswer to work out what to do\n with a particular answer).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "UDrawGraph.Basic",
          "name": "Basic",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "DaVinciBasic contains the code to do the following things get daVinci going it calls it via ChildProcess open new contexts pass on events and sort answers out for particular contexts It uses the DaVinciTypes module to parse the different results but makes minimal attempts to interpret the different datatypes the main reason for doing so is to interpret DaVinciAnswer to work out what to do with particular answer",
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "Basic",
          "package": "uni-uDrawGraph",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "Context",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Basic.html#Context",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "Context",
          "package": "uni-uDrawGraph",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "daVinciVersion",
          "package": "uni-uDrawGraph",
          "signature": "Maybe String",
          "source": "src/UDrawGraph-Basic.html#daVinciVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "daVinciVersion",
          "package": "uni-uDrawGraph",
          "partial": "Vinci Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:daVinciVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "doInContext",
          "package": "uni-uDrawGraph",
          "signature": "DaVinciCmd -\u003e Context -\u003e IO ()",
          "source": "src/UDrawGraph-Basic.html#doInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "doInContext",
          "normalized": "DaVinciCmd-\u003eContext-\u003eIO()",
          "package": "uni-uDrawGraph",
          "partial": "In Context",
          "signature": "DaVinciCmd-\u003eContext-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:doInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "doInContextGeneral",
          "package": "uni-uDrawGraph",
          "signature": "DaVinciCmd -\u003e Context -\u003e IO DaVinciAnswer",
          "source": "src/UDrawGraph-Basic.html#doInContextGeneral",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "doInContextGeneral",
          "normalized": "DaVinciCmd-\u003eContext-\u003eIO DaVinciAnswer",
          "package": "uni-uDrawGraph",
          "partial": "In Context General",
          "signature": "DaVinciCmd-\u003eContext-\u003eIO DaVinciAnswer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:doInContextGeneral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "exitDaVinci",
          "package": "uni-uDrawGraph",
          "signature": "Context -\u003e IO ()",
          "source": "src/UDrawGraph-Basic.html#exitDaVinci",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "exitDaVinci",
          "normalized": "Context-\u003eIO()",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci",
          "signature": "Context-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:exitDaVinci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "newContext",
          "package": "uni-uDrawGraph",
          "signature": "(DaVinciAnswer -\u003e IO ()) -\u003e IO Context",
          "source": "src/UDrawGraph-Basic.html#newContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "newContext",
          "normalized": "(DaVinciAnswer-\u003eIO())-\u003eIO Context",
          "package": "uni-uDrawGraph",
          "partial": "Context",
          "signature": "(DaVinciAnswer-\u003eIO())-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:newContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "newEdgeId",
          "package": "uni-uDrawGraph",
          "signature": "Context -\u003e IO EdgeId",
          "source": "src/UDrawGraph-Basic.html#newEdgeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "newEdgeId",
          "normalized": "Context-\u003eIO EdgeId",
          "package": "uni-uDrawGraph",
          "partial": "Edge Id",
          "signature": "Context-\u003eIO EdgeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:newEdgeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "newMenuId",
          "package": "uni-uDrawGraph",
          "signature": "Context -\u003e IO MenuId",
          "source": "src/UDrawGraph-Basic.html#newMenuId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "newMenuId",
          "normalized": "Context-\u003eIO MenuId",
          "package": "uni-uDrawGraph",
          "partial": "Menu Id",
          "signature": "Context-\u003eIO MenuId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:newMenuId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "newNodeId",
          "package": "uni-uDrawGraph",
          "signature": "Context -\u003e IO NodeId",
          "source": "src/UDrawGraph-Basic.html#newNodeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "newNodeId",
          "normalized": "Context-\u003eIO NodeId",
          "package": "uni-uDrawGraph",
          "partial": "Node Id",
          "signature": "Context-\u003eIO NodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:newNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "newType",
          "package": "uni-uDrawGraph",
          "signature": "Context -\u003e IO Type",
          "source": "src/UDrawGraph-Basic.html#newType",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "newType",
          "normalized": "Context-\u003eIO Type",
          "package": "uni-uDrawGraph",
          "partial": "Type",
          "signature": "Context-\u003eIO Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:newType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Basic",
          "name": "withHandler",
          "package": "uni-uDrawGraph",
          "signature": "(DaVinciAnswer -\u003e IO ()) -\u003e Context -\u003e IO a -\u003e IO a",
          "source": "src/UDrawGraph-Basic.html#withHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Basic",
          "module": "UDrawGraph.Basic",
          "name": "withHandler",
          "normalized": "(DaVinciAnswer-\u003eIO())-\u003eContext-\u003eIO a-\u003eIO a",
          "package": "uni-uDrawGraph",
          "partial": "Handler",
          "signature": "(DaVinciAnswer-\u003eIO())-\u003eContext-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Basic.html#v:withHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the implementation of modules GraphDisp and GraphConfigure for\n daVinci.   See those files for explanation of the names.\n We encode, for example, the type parameter node as DaVinciNode,\n and so on for other type parameters, prefixing with \"DaVinci\" and\n capitalising the next letter.  But the only variable you should normally\n need from this module is \u003ccode\u003e\u003ca\u003edaVinciSort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "UDrawGraph.Graph",
          "name": "Graph",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "This is the implementation of modules GraphDisp and GraphConfigure for daVinci See those files for explanation of the names We encode for example the type parameter node as DaVinciNode and so on for other type parameters prefixing with DaVinci and capitalising the next letter But the only variable you should normally need from this module is daVinciSort",
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "Graph",
          "package": "uni-uDrawGraph",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArc",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciArc",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArc",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Arc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArcType",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciArcType",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArcType",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Arc Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciArcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArcTypeParms",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciArcTypeParms",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciArcTypeParms",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Arc Type Parms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciArcTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciGraph",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciGraph",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciGraph",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciGraphParms",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciGraphParms",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciGraphParms",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Graph Parms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciGraphParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNode",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNode",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTiresomely we need to make the \"real\" node type untyped.\n This is so that the interactor which handles drag-and-drop\n can get the type out without knowing what it is.\n\u003c/p\u003e",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNodeType",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciNodeType",
          "type": "data"
        },
        "index": {
          "description": "Tiresomely we need to make the real node type untyped This is so that the interactor which handles drag-and-drop can get the type out without knowing what it is",
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNodeType",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Node Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciNodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNodeTypeParms",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Graph.html#DaVinciNodeTypeParms",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "DaVinciNodeTypeParms",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Node Type Parms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#t:DaVinciNodeTypeParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "daVinciSort",
          "package": "uni-uDrawGraph",
          "signature": "Graph DaVinciGraph DaVinciGraphParms DaVinciNode DaVinciNodeType DaVinciNodeTypeParms DaVinciArc DaVinciArcType DaVinciArcTypeParms",
          "source": "src/UDrawGraph-Graph.html#daVinciSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "daVinciSort",
          "package": "uni-uDrawGraph",
          "partial": "Vinci Sort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#v:daVinciSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Graph",
          "name": "getDaVinciGraphContext",
          "package": "uni-uDrawGraph",
          "signature": "DaVinciGraph -\u003e Context",
          "source": "src/UDrawGraph-Graph.html#getDaVinciGraphContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Graph",
          "module": "UDrawGraph.Graph",
          "name": "getDaVinciGraphContext",
          "normalized": "DaVinciGraph-\u003eContext",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Graph Context",
          "signature": "DaVinciGraph-\u003eContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Graph.html#v:getDaVinciGraphContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file was taken from Sven Panne's page on 31st July 2001.\n I have since changed it a little.  The version before these\n changes may be found in DaVinciTypes.hs.orig.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "UDrawGraph.Types",
          "name": "Types",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This file was taken from Sven Panne page on st July have since changed it little The version before these changes may be found in DaVinciTypes.hs.orig",
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Types",
          "package": "uni-uDrawGraph",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AbstractionMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AbstractionMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "Abstraction Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:AbstractionMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AppMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AppMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "App Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:AppMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AttrChange",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#AttrChange",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AttrChange",
          "package": "uni-uDrawGraph",
          "partial": "Attr Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:AttrChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Attribute",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Attribute",
          "package": "uni-uDrawGraph",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Btype",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Btype",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Btype",
          "package": "uni-uDrawGraph",
          "partial": "Btype",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Btype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ContextId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#ContextId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ContextId",
          "package": "uni-uDrawGraph",
          "partial": "Context Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:ContextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DaVinciAnswer",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DaVinciAnswer",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Answer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:DaVinciAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DaVinciCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DaVinciCmd",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:DaVinciCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Direction",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Direction",
          "package": "uni-uDrawGraph",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DragAndDropCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DragAndDropCmd",
          "package": "uni-uDrawGraph",
          "partial": "Drag And Drop Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:DragAndDropCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Edge",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Edge",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Edge",
          "package": "uni-uDrawGraph",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#EdgeId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeId",
          "package": "uni-uDrawGraph",
          "partial": "Edge Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:EdgeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeUpdate",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#EdgeUpdate",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeUpdate",
          "package": "uni-uDrawGraph",
          "partial": "Edge Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:EdgeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FileMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FileMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "File Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:FileMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Filename",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Filename",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Filename",
          "package": "uni-uDrawGraph",
          "partial": "Filename",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "GraphCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "GraphCmd",
          "package": "uni-uDrawGraph",
          "partial": "Graph Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:GraphCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "IconEntry",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#IconEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "IconEntry",
          "package": "uni-uDrawGraph",
          "partial": "Icon Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:IconEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "IconId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#IconId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "IconId",
          "package": "uni-uDrawGraph",
          "partial": "Icon Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:IconId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "LayoutMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#LayoutMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "LayoutMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "Layout Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:LayoutMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuAcc",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuAcc",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuAcc",
          "package": "uni-uDrawGraph",
          "partial": "Menu Acc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuEntry",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuEntry",
          "package": "uni-uDrawGraph",
          "partial": "Menu Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuId",
          "package": "uni-uDrawGraph",
          "partial": "Menu Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuLabel",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuLabel",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuLabel",
          "package": "uni-uDrawGraph",
          "partial": "Menu Label",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuMne",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuMne",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuMne",
          "package": "uni-uDrawGraph",
          "partial": "Menu Mne",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuMne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuMod",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuMod",
          "package": "uni-uDrawGraph",
          "partial": "Menu Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MenuMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MixedUpdate",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MixedUpdate",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MixedUpdate",
          "package": "uni-uDrawGraph",
          "partial": "Mixed Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MixedUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MultiCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#MultiCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MultiCmd",
          "package": "uni-uDrawGraph",
          "partial": "Multi Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:MultiCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NavigationMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NavigationMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "Navigation Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:NavigationMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Node",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Node",
          "package": "uni-uDrawGraph",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#NodeId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeId",
          "package": "uni-uDrawGraph",
          "partial": "Node Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeUpdate",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#NodeUpdate",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeUpdate",
          "package": "uni-uDrawGraph",
          "partial": "Node Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:NodeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Orient",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Orient",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Orient",
          "package": "uni-uDrawGraph",
          "partial": "Orient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Orient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SetCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SetCmd",
          "package": "uni-uDrawGraph",
          "partial": "Set Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:SetCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SpecialCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SpecialCmd",
          "package": "uni-uDrawGraph",
          "partial": "Special Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:SpecialCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "TclCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#TclCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "TclCmd",
          "package": "uni-uDrawGraph",
          "partial": "Tcl Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:TclCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Type",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#Type",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Type",
          "package": "uni-uDrawGraph",
          "partial": "Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "TypeChange",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#TypeChange",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "TypeChange",
          "package": "uni-uDrawGraph",
          "partial": "Type Change",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:TypeChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ViewMenuCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ViewMenuCmd",
          "package": "uni-uDrawGraph",
          "partial": "View Menu Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:ViewMenuCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "VisualCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#VisualCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "VisualCmd",
          "package": "uni-uDrawGraph",
          "partial": "Visual Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:VisualCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "VisualRule",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#VisualRule",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "VisualRule",
          "package": "uni-uDrawGraph",
          "partial": "Visual Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:VisualRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "WindowCmd",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "data"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "WindowCmd",
          "package": "uni-uDrawGraph",
          "partial": "Window Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:WindowCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "WindowId",
          "package": "uni-uDrawGraph",
          "source": "src/UDrawGraph-Types.html#WindowId",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "WindowId",
          "package": "uni-uDrawGraph",
          "partial": "Window Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#t:WindowId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "A",
          "package": "uni-uDrawGraph",
          "signature": "A String String",
          "source": "src/UDrawGraph-Types.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "A",
          "package": "uni-uDrawGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Abstraction",
          "package": "uni-uDrawGraph",
          "signature": "Abstraction AbstractionMenuCmd",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Abstraction",
          "package": "uni-uDrawGraph",
          "partial": "Abstraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Abstraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Activate",
          "package": "uni-uDrawGraph",
          "signature": "Activate",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Activate",
          "package": "uni-uDrawGraph",
          "partial": "Activate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Activate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ActivateIcons",
          "package": "uni-uDrawGraph",
          "signature": "ActivateIcons [IconId]",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ActivateIcons",
          "normalized": "ActivateIcons[IconId]",
          "package": "uni-uDrawGraph",
          "partial": "Activate Icons",
          "signature": "ActivateIcons[IconId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ActivateIcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ActivateMenus",
          "package": "uni-uDrawGraph",
          "signature": "ActivateMenus [MenuId]",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ActivateMenus",
          "normalized": "ActivateMenus[MenuId]",
          "package": "uni-uDrawGraph",
          "partial": "Activate Menus",
          "signature": "ActivateMenus[MenuId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ActivateMenus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AddRules",
          "package": "uni-uDrawGraph",
          "signature": "AddRules [VisualRule]",
          "source": "src/UDrawGraph-Types.html#VisualCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AddRules",
          "normalized": "AddRules[VisualRule]",
          "package": "uni-uDrawGraph",
          "partial": "Add Rules",
          "signature": "AddRules[VisualRule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:AddRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Alternate",
          "package": "uni-uDrawGraph",
          "signature": "Alternate",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Alternate",
          "package": "uni-uDrawGraph",
          "partial": "Alternate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Alternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AnimationSpeed",
          "package": "uni-uDrawGraph",
          "signature": "AnimationSpeed Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AnimationSpeed",
          "package": "uni-uDrawGraph",
          "partial": "Animation Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:AnimationSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "AppMenu",
          "package": "uni-uDrawGraph",
          "signature": "AppMenu AppMenuCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "AppMenu",
          "package": "uni-uDrawGraph",
          "partial": "App Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:AppMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "BlankIconEntry",
          "package": "uni-uDrawGraph",
          "signature": "BlankIconEntry",
          "source": "src/UDrawGraph-Types.html#IconEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "BlankIconEntry",
          "package": "uni-uDrawGraph",
          "partial": "Blank Icon Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:BlankIconEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "BlankMenuEntry",
          "package": "uni-uDrawGraph",
          "signature": "BlankMenuEntry",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "BlankMenuEntry",
          "package": "uni-uDrawGraph",
          "partial": "Blank Menu Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:BlankMenuEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "BottomUp",
          "package": "uni-uDrawGraph",
          "signature": "BottomUp",
          "source": "src/UDrawGraph-Types.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "BottomUp",
          "package": "uni-uDrawGraph",
          "partial": "Bottom Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:BottomUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "BrowserAnswer",
          "package": "uni-uDrawGraph",
          "signature": "BrowserAnswer String String",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "BrowserAnswer",
          "package": "uni-uDrawGraph",
          "partial": "Browser Answer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:BrowserAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Bt",
          "package": "uni-uDrawGraph",
          "signature": "Bt String String String",
          "source": "src/UDrawGraph-Types.html#Btype",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Bt",
          "package": "uni-uDrawGraph",
          "partial": "Bt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Bt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ChangeAttr",
          "package": "uni-uDrawGraph",
          "signature": "ChangeAttr [AttrChange]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ChangeAttr",
          "normalized": "ChangeAttr[AttrChange]",
          "package": "uni-uDrawGraph",
          "partial": "Change Attr",
          "signature": "ChangeAttr[AttrChange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ChangeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ChangeType",
          "package": "uni-uDrawGraph",
          "signature": "ChangeType [TypeChange]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ChangeType",
          "normalized": "ChangeType[TypeChange]",
          "package": "uni-uDrawGraph",
          "partial": "Change Type",
          "signature": "ChangeType[TypeChange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ChangeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ClearGraph",
          "package": "uni-uDrawGraph",
          "signature": "ClearGraph",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ClearGraph",
          "package": "uni-uDrawGraph",
          "partial": "Clear Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ClearGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Close",
          "package": "uni-uDrawGraph",
          "signature": "Close",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Close",
          "package": "uni-uDrawGraph",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CloseWindow",
          "package": "uni-uDrawGraph",
          "signature": "CloseWindow WindowId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CloseWindow",
          "package": "uni-uDrawGraph",
          "partial": "Close Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CloseWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Closed",
          "package": "uni-uDrawGraph",
          "signature": "Closed",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Closed",
          "package": "uni-uDrawGraph",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CommunicationError",
          "package": "uni-uDrawGraph",
          "signature": "CommunicationError String",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CommunicationError",
          "package": "uni-uDrawGraph",
          "partial": "Communication Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CommunicationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CompactAll",
          "package": "uni-uDrawGraph",
          "signature": "CompactAll",
          "source": "src/UDrawGraph-Types.html#LayoutMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CompactAll",
          "package": "uni-uDrawGraph",
          "partial": "Compact All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CompactAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Context",
          "package": "uni-uDrawGraph",
          "signature": "Context ContextId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Context",
          "package": "uni-uDrawGraph",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ContextId",
          "package": "uni-uDrawGraph",
          "signature": "ContextId String",
          "source": "src/UDrawGraph-Types.html#ContextId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ContextId",
          "package": "uni-uDrawGraph",
          "partial": "Context Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ContextId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ContextWindow",
          "package": "uni-uDrawGraph",
          "signature": "ContextWindow ContextId WindowId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ContextWindow",
          "package": "uni-uDrawGraph",
          "partial": "Context Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ContextWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Control",
          "package": "uni-uDrawGraph",
          "signature": "Control",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Control",
          "package": "uni-uDrawGraph",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ControlFileEvents",
          "package": "uni-uDrawGraph",
          "signature": "ControlFileEvents",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ControlFileEvents",
          "package": "uni-uDrawGraph",
          "partial": "Control File Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ControlFileEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CreateEdge",
          "package": "uni-uDrawGraph",
          "signature": "CreateEdge NodeId NodeId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CreateEdge",
          "package": "uni-uDrawGraph",
          "partial": "Create Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CreateEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CreateIcons",
          "package": "uni-uDrawGraph",
          "signature": "CreateIcons [IconEntry]",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CreateIcons",
          "normalized": "CreateIcons[IconEntry]",
          "package": "uni-uDrawGraph",
          "partial": "Create Icons",
          "signature": "CreateIcons[IconEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CreateIcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CreateMenus",
          "package": "uni-uDrawGraph",
          "signature": "CreateMenus [MenuEntry]",
          "source": "src/UDrawGraph-Types.html#AppMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CreateMenus",
          "normalized": "CreateMenus[MenuEntry]",
          "package": "uni-uDrawGraph",
          "partial": "Create Menus",
          "signature": "CreateMenus[MenuEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CreateMenus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CreateNode",
          "package": "uni-uDrawGraph",
          "signature": "CreateNode",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CreateNode",
          "package": "uni-uDrawGraph",
          "partial": "Create Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CreateNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "CreateNodeAndEdge",
          "package": "uni-uDrawGraph",
          "signature": "CreateNodeAndEdge NodeId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "CreateNodeAndEdge",
          "package": "uni-uDrawGraph",
          "partial": "Create Node And Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:CreateNodeAndEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DVEval",
          "package": "uni-uDrawGraph",
          "signature": "DVEval String",
          "source": "src/UDrawGraph-Types.html#TclCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DVEval",
          "package": "uni-uDrawGraph",
          "partial": "DVEval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DVEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DVLeft",
          "package": "uni-uDrawGraph",
          "signature": "DVLeft",
          "source": "src/UDrawGraph-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DVLeft",
          "package": "uni-uDrawGraph",
          "partial": "DVLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DVLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DVNothing",
          "package": "uni-uDrawGraph",
          "signature": "DVNothing",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DVNothing",
          "package": "uni-uDrawGraph",
          "partial": "DVNothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DVNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DVRight",
          "package": "uni-uDrawGraph",
          "signature": "DVRight",
          "source": "src/UDrawGraph-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DVRight",
          "package": "uni-uDrawGraph",
          "partial": "DVRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DVRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DVSet",
          "package": "uni-uDrawGraph",
          "signature": "DVSet SetCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DVSet",
          "package": "uni-uDrawGraph",
          "partial": "DVSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DVSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DaVinciInfo",
          "package": "uni-uDrawGraph",
          "signature": "DaVinciInfo",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DaVinciInfo",
          "package": "uni-uDrawGraph",
          "partial": "Da Vinci Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DaVinciInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Deactivate",
          "package": "uni-uDrawGraph",
          "signature": "Deactivate",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Deactivate",
          "package": "uni-uDrawGraph",
          "partial": "Deactivate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Deactivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Deiconify",
          "package": "uni-uDrawGraph",
          "signature": "Deiconify",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Deiconify",
          "package": "uni-uDrawGraph",
          "partial": "Deiconify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Deiconify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DeleteEdge",
          "package": "uni-uDrawGraph",
          "signature": "DeleteEdge EdgeId",
          "source": "src/UDrawGraph-Types.html#EdgeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DeleteEdge",
          "package": "uni-uDrawGraph",
          "partial": "Delete Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DeleteEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DeleteNode",
          "package": "uni-uDrawGraph",
          "signature": "DeleteNode NodeId",
          "source": "src/UDrawGraph-Types.html#NodeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DeleteNode",
          "package": "uni-uDrawGraph",
          "partial": "Delete Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DeleteNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Disconnect",
          "package": "uni-uDrawGraph",
          "signature": "Disconnect",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Disconnect",
          "package": "uni-uDrawGraph",
          "partial": "Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Down",
          "package": "uni-uDrawGraph",
          "signature": "Down",
          "source": "src/UDrawGraph-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Down",
          "package": "uni-uDrawGraph",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DragAndDrop",
          "package": "uni-uDrawGraph",
          "signature": "DragAndDrop DragAndDropCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DragAndDrop",
          "package": "uni-uDrawGraph",
          "partial": "Drag And Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DragAndDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DragAndDropOn",
          "package": "uni-uDrawGraph",
          "signature": "DragAndDropOn",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DragAndDropOn",
          "package": "uni-uDrawGraph",
          "partial": "Drag And Drop On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DragAndDropOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DraggingOff",
          "package": "uni-uDrawGraph",
          "signature": "DraggingOff",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DraggingOff",
          "package": "uni-uDrawGraph",
          "partial": "Dragging Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DraggingOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DraggingOn",
          "package": "uni-uDrawGraph",
          "signature": "DraggingOn",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DraggingOn",
          "package": "uni-uDrawGraph",
          "partial": "Dragging On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DraggingOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "DropNode",
          "package": "uni-uDrawGraph",
          "signature": "DropNode NodeId ContextId WindowId NodeId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "DropNode",
          "package": "uni-uDrawGraph",
          "partial": "Drop Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:DropNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "E",
          "package": "uni-uDrawGraph",
          "signature": "E EdgeId Type [Attribute] Node",
          "source": "src/UDrawGraph-Types.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "E",
          "normalized": "E EdgeId Type[Attribute]Node",
          "package": "uni-uDrawGraph",
          "signature": "E EdgeId Type[Attribute]Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ER",
          "package": "uni-uDrawGraph",
          "signature": "ER Type [Attribute]",
          "source": "src/UDrawGraph-Types.html#VisualRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ER",
          "normalized": "ER Type[Attribute]",
          "package": "uni-uDrawGraph",
          "partial": "ER",
          "signature": "ER Type[Attribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EU",
          "package": "uni-uDrawGraph",
          "signature": "EU EdgeUpdate",
          "source": "src/UDrawGraph-Types.html#MixedUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EU",
          "package": "uni-uDrawGraph",
          "partial": "EU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Edge",
          "package": "uni-uDrawGraph",
          "signature": "Edge EdgeId [Attribute]",
          "source": "src/UDrawGraph-Types.html#AttrChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Edge",
          "normalized": "Edge EdgeId[Attribute]",
          "package": "uni-uDrawGraph",
          "partial": "Edge",
          "signature": "Edge EdgeId[Attribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeDoubleClick",
          "package": "uni-uDrawGraph",
          "signature": "EdgeDoubleClick",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeDoubleClick",
          "package": "uni-uDrawGraph",
          "partial": "Edge Double Click",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EdgeDoubleClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeId",
          "package": "uni-uDrawGraph",
          "signature": "EdgeId String",
          "source": "src/UDrawGraph-Types.html#EdgeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeId",
          "package": "uni-uDrawGraph",
          "partial": "Edge Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EdgeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeSelectionLabel",
          "package": "uni-uDrawGraph",
          "signature": "EdgeSelectionLabel EdgeId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeSelectionLabel",
          "package": "uni-uDrawGraph",
          "partial": "Edge Selection Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EdgeSelectionLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeSelectionLabels",
          "package": "uni-uDrawGraph",
          "signature": "EdgeSelectionLabels NodeId NodeId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeSelectionLabels",
          "package": "uni-uDrawGraph",
          "partial": "Edge Selection Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EdgeSelectionLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EdgeType",
          "package": "uni-uDrawGraph",
          "signature": "EdgeType EdgeId Type",
          "source": "src/UDrawGraph-Types.html#TypeChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EdgeType",
          "package": "uni-uDrawGraph",
          "partial": "Edge Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EdgeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "EvalFile",
          "package": "uni-uDrawGraph",
          "signature": "EvalFile Filename",
          "source": "src/UDrawGraph-Types.html#TclCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "EvalFile",
          "package": "uni-uDrawGraph",
          "partial": "Eval File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:EvalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Exit",
          "package": "uni-uDrawGraph",
          "signature": "Exit",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Exit",
          "package": "uni-uDrawGraph",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "File",
          "package": "uni-uDrawGraph",
          "signature": "File FileMenuCmd",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "File",
          "package": "uni-uDrawGraph",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FileBrowser",
          "package": "uni-uDrawGraph",
          "signature": "FileBrowser Bool String String String String [Btype] Bool",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FileBrowser",
          "normalized": "FileBrowser Bool String String String String[Btype]Bool",
          "package": "uni-uDrawGraph",
          "partial": "File Browser",
          "signature": "FileBrowser Bool String String String String[Btype]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FileBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Filename",
          "package": "uni-uDrawGraph",
          "signature": "Filename String",
          "source": "src/UDrawGraph-Types.html#Filename",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Filename",
          "package": "uni-uDrawGraph",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Find",
          "package": "uni-uDrawGraph",
          "signature": "Find (Maybe (String, Bool, Bool))",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Find",
          "normalized": "Find(Maybe(String,Bool,Bool))",
          "package": "uni-uDrawGraph",
          "partial": "Find",
          "signature": "Find(Maybe(String,Bool,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FitScaleToWindow",
          "package": "uni-uDrawGraph",
          "signature": "FitScaleToWindow",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FitScaleToWindow",
          "package": "uni-uDrawGraph",
          "partial": "Fit Scale To Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FitScaleToWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FocusNode",
          "package": "uni-uDrawGraph",
          "signature": "FocusNode NodeId",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FocusNode",
          "package": "uni-uDrawGraph",
          "partial": "Focus Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FocusNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FocusNodeAnimated",
          "package": "uni-uDrawGraph",
          "signature": "FocusNodeAnimated NodeId",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FocusNodeAnimated",
          "package": "uni-uDrawGraph",
          "partial": "Focus Node Animated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FocusNodeAnimated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FontSize",
          "package": "uni-uDrawGraph",
          "signature": "FontSize Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FontSize",
          "package": "uni-uDrawGraph",
          "partial": "Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "FullScale",
          "package": "uni-uDrawGraph",
          "signature": "FullScale",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "FullScale",
          "package": "uni-uDrawGraph",
          "partial": "Full Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:FullScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "GapHeight",
          "package": "uni-uDrawGraph",
          "signature": "GapHeight Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "GapHeight",
          "package": "uni-uDrawGraph",
          "partial": "Gap Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:GapHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "GapWidth",
          "package": "uni-uDrawGraph",
          "signature": "GapWidth Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "GapWidth",
          "package": "uni-uDrawGraph",
          "partial": "Gap Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:GapWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Graph",
          "package": "uni-uDrawGraph",
          "signature": "Graph GraphCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Graph",
          "package": "uni-uDrawGraph",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "GraphInfo",
          "package": "uni-uDrawGraph",
          "signature": "GraphInfo",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "GraphInfo",
          "package": "uni-uDrawGraph",
          "partial": "Graph Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:GraphInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "HideEdges",
          "package": "uni-uDrawGraph",
          "signature": "HideEdges [NodeId]",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "HideEdges",
          "normalized": "HideEdges[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Hide Edges",
          "signature": "HideEdges[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:HideEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "HideSubgraph",
          "package": "uni-uDrawGraph",
          "signature": "HideSubgraph [NodeId]",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "HideSubgraph",
          "normalized": "HideSubgraph[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Hide Subgraph",
          "signature": "HideSubgraph[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:HideSubgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "IconEntry",
          "package": "uni-uDrawGraph",
          "signature": "IconEntry IconId Filename String",
          "source": "src/UDrawGraph-Types.html#IconEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "IconEntry",
          "package": "uni-uDrawGraph",
          "partial": "Icon Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:IconEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "IconId",
          "package": "uni-uDrawGraph",
          "signature": "IconId String",
          "source": "src/UDrawGraph-Types.html#IconId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "IconId",
          "package": "uni-uDrawGraph",
          "partial": "Icon Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:IconId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "IconSelection",
          "package": "uni-uDrawGraph",
          "signature": "IconSelection IconId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "IconSelection",
          "package": "uni-uDrawGraph",
          "partial": "Icon Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:IconSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Iconify",
          "package": "uni-uDrawGraph",
          "signature": "Iconify",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Iconify",
          "package": "uni-uDrawGraph",
          "partial": "Iconify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Iconify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ImproveAll",
          "package": "uni-uDrawGraph",
          "signature": "ImproveAll",
          "source": "src/UDrawGraph-Types.html#LayoutMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ImproveAll",
          "package": "uni-uDrawGraph",
          "partial": "Improve All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ImproveAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ImproveVisible",
          "package": "uni-uDrawGraph",
          "signature": "ImproveVisible",
          "source": "src/UDrawGraph-Types.html#LayoutMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ImproveVisible",
          "package": "uni-uDrawGraph",
          "partial": "Improve Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ImproveVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "KeepNodesAtLevels",
          "package": "uni-uDrawGraph",
          "signature": "KeepNodesAtLevels Bool",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "KeepNodesAtLevels",
          "package": "uni-uDrawGraph",
          "partial": "Keep Nodes At Levels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:KeepNodesAtLevels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Layout",
          "package": "uni-uDrawGraph",
          "signature": "Layout LayoutMenuCmd",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Layout",
          "package": "uni-uDrawGraph",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "LayoutAccuracy",
          "package": "uni-uDrawGraph",
          "signature": "LayoutAccuracy Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "LayoutAccuracy",
          "package": "uni-uDrawGraph",
          "partial": "Layout Accuracy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:LayoutAccuracy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "LeftRight",
          "package": "uni-uDrawGraph",
          "signature": "LeftRight",
          "source": "src/UDrawGraph-Types.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "LeftRight",
          "package": "uni-uDrawGraph",
          "partial": "Left Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:LeftRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "M",
          "package": "uni-uDrawGraph",
          "signature": "M [MenuEntry]",
          "source": "src/UDrawGraph-Types.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "M",
          "normalized": "M[MenuEntry]",
          "package": "uni-uDrawGraph",
          "signature": "M[MenuEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Menu",
          "package": "uni-uDrawGraph",
          "signature": "Menu MenuCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Menu",
          "package": "uni-uDrawGraph",
          "partial": "Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Menu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuAcc",
          "package": "uni-uDrawGraph",
          "signature": "MenuAcc String",
          "source": "src/UDrawGraph-Types.html#MenuAcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuAcc",
          "package": "uni-uDrawGraph",
          "partial": "Menu Acc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuEntry",
          "package": "uni-uDrawGraph",
          "signature": "MenuEntry MenuId MenuLabel",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuEntry",
          "package": "uni-uDrawGraph",
          "partial": "Menu Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuEntryDisabled",
          "package": "uni-uDrawGraph",
          "signature": "MenuEntryDisabled MenuId MenuLabel",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuEntryDisabled",
          "package": "uni-uDrawGraph",
          "partial": "Menu Entry Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuEntryDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuEntryMne",
          "package": "uni-uDrawGraph",
          "signature": "MenuEntryMne MenuId MenuLabel MenuMne MenuMod MenuAcc",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuEntryMne",
          "package": "uni-uDrawGraph",
          "partial": "Menu Entry Mne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuEntryMne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuId",
          "package": "uni-uDrawGraph",
          "signature": "MenuId String",
          "source": "src/UDrawGraph-Types.html#MenuId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuId",
          "package": "uni-uDrawGraph",
          "partial": "Menu Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuLabel",
          "package": "uni-uDrawGraph",
          "signature": "MenuLabel String",
          "source": "src/UDrawGraph-Types.html#MenuLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuLabel",
          "package": "uni-uDrawGraph",
          "partial": "Menu Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuMne",
          "package": "uni-uDrawGraph",
          "signature": "MenuMne String",
          "source": "src/UDrawGraph-Types.html#MenuMne",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuMne",
          "package": "uni-uDrawGraph",
          "partial": "Menu Mne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuMne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MenuSelection",
          "package": "uni-uDrawGraph",
          "signature": "MenuSelection MenuId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MenuSelection",
          "package": "uni-uDrawGraph",
          "partial": "Menu Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MenuSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Meta",
          "package": "uni-uDrawGraph",
          "signature": "Meta",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Meta",
          "package": "uni-uDrawGraph",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Multi",
          "package": "uni-uDrawGraph",
          "signature": "Multi MultiCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Multi",
          "package": "uni-uDrawGraph",
          "partial": "Multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "MultiEdgeGap",
          "package": "uni-uDrawGraph",
          "signature": "MultiEdgeGap Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "MultiEdgeGap",
          "package": "uni-uDrawGraph",
          "partial": "Multi Edge Gap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:MultiEdgeGap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "N",
          "package": "uni-uDrawGraph",
          "signature": "N NodeId Type [Attribute] [Edge]",
          "source": "src/UDrawGraph-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "N",
          "normalized": "N NodeId Type[Attribute][Edge]",
          "package": "uni-uDrawGraph",
          "signature": "N NodeId Type[Attribute][Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NR",
          "package": "uni-uDrawGraph",
          "signature": "NR Type [Attribute]",
          "source": "src/UDrawGraph-Types.html#VisualRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NR",
          "normalized": "NR Type[Attribute]",
          "package": "uni-uDrawGraph",
          "partial": "NR",
          "signature": "NR Type[Attribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NU",
          "package": "uni-uDrawGraph",
          "signature": "NU NodeUpdate",
          "source": "src/UDrawGraph-Types.html#MixedUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NU",
          "package": "uni-uDrawGraph",
          "partial": "NU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Navigation",
          "package": "uni-uDrawGraph",
          "signature": "Navigation NavigationMenuCmd",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Navigation",
          "package": "uni-uDrawGraph",
          "partial": "Navigation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Navigation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Navigator",
          "package": "uni-uDrawGraph",
          "signature": "Navigator (Maybe (NodeId, Direction, Bool))",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Navigator",
          "normalized": "Navigator(Maybe(NodeId,Direction,Bool))",
          "package": "uni-uDrawGraph",
          "partial": "Navigator",
          "signature": "Navigator(Maybe(NodeId,Direction,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Navigator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "New",
          "package": "uni-uDrawGraph",
          "signature": "New [Node]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "New",
          "normalized": "New[Node]",
          "package": "uni-uDrawGraph",
          "partial": "New",
          "signature": "New[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:New"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewContext",
          "package": "uni-uDrawGraph",
          "signature": "NewContext",
          "source": "src/UDrawGraph-Types.html#MultiCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewContext",
          "package": "uni-uDrawGraph",
          "partial": "New Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewEdge",
          "package": "uni-uDrawGraph",
          "signature": "NewEdge EdgeId Type [Attribute] NodeId NodeId",
          "source": "src/UDrawGraph-Types.html#EdgeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewEdge",
          "normalized": "NewEdge EdgeId Type[Attribute]NodeId NodeId",
          "package": "uni-uDrawGraph",
          "partial": "New Edge",
          "signature": "NewEdge EdgeId Type[Attribute]NodeId NodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewEdgeAndNodeAtCoord",
          "package": "uni-uDrawGraph",
          "signature": "NewEdgeAndNodeAtCoord NodeUpdate EdgeUpdate",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewEdgeAndNodeAtCoord",
          "package": "uni-uDrawGraph",
          "partial": "New Edge And Node At Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewEdgeAndNodeAtCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewEdgeBehind",
          "package": "uni-uDrawGraph",
          "signature": "NewEdgeBehind EdgeId EdgeId Type [Attribute] NodeId NodeId",
          "source": "src/UDrawGraph-Types.html#EdgeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewEdgeBehind",
          "normalized": "NewEdgeBehind EdgeId EdgeId Type[Attribute]NodeId NodeId",
          "package": "uni-uDrawGraph",
          "partial": "New Edge Behind",
          "signature": "NewEdgeBehind EdgeId EdgeId Type[Attribute]NodeId NodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewEdgeBehind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewNode",
          "package": "uni-uDrawGraph",
          "signature": "NewNode NodeId Type [Attribute]",
          "source": "src/UDrawGraph-Types.html#NodeUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewNode",
          "normalized": "NewNode NodeId Type[Attribute]",
          "package": "uni-uDrawGraph",
          "partial": "New Node",
          "signature": "NewNode NodeId Type[Attribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewNodeAtCoord",
          "package": "uni-uDrawGraph",
          "signature": "NewNodeAtCoord NodeUpdate",
          "source": "src/UDrawGraph-Types.html#DragAndDropCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewNodeAtCoord",
          "package": "uni-uDrawGraph",
          "partial": "New Node At Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewNodeAtCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewPlaced",
          "package": "uni-uDrawGraph",
          "signature": "NewPlaced [Node]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewPlaced",
          "normalized": "NewPlaced[Node]",
          "package": "uni-uDrawGraph",
          "partial": "New Placed",
          "signature": "NewPlaced[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewPlaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NewRules",
          "package": "uni-uDrawGraph",
          "signature": "NewRules [VisualRule]",
          "source": "src/UDrawGraph-Types.html#VisualCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NewRules",
          "normalized": "NewRules[VisualRule]",
          "package": "uni-uDrawGraph",
          "partial": "New Rules",
          "signature": "NewRules[VisualRule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NewRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NoCache",
          "package": "uni-uDrawGraph",
          "signature": "NoCache Bool",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NoCache",
          "package": "uni-uDrawGraph",
          "partial": "No Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NoCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Node",
          "package": "uni-uDrawGraph",
          "signature": "Node NodeId [Attribute]",
          "source": "src/UDrawGraph-Types.html#AttrChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Node",
          "normalized": "Node NodeId[Attribute]",
          "package": "uni-uDrawGraph",
          "partial": "Node",
          "signature": "Node NodeId[Attribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeDoubleClick",
          "package": "uni-uDrawGraph",
          "signature": "NodeDoubleClick",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeDoubleClick",
          "package": "uni-uDrawGraph",
          "partial": "Node Double Click",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NodeDoubleClick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeId",
          "package": "uni-uDrawGraph",
          "signature": "NodeId String",
          "source": "src/UDrawGraph-Types.html#NodeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeId",
          "package": "uni-uDrawGraph",
          "partial": "Node Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeSelectionsLabels",
          "package": "uni-uDrawGraph",
          "signature": "NodeSelectionsLabels [NodeId]",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeSelectionsLabels",
          "normalized": "NodeSelectionsLabels[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Node Selections Labels",
          "signature": "NodeSelectionsLabels[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NodeSelectionsLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "NodeType",
          "package": "uni-uDrawGraph",
          "signature": "NodeType NodeId Type",
          "source": "src/UDrawGraph-Types.html#TypeChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "NodeType",
          "package": "uni-uDrawGraph",
          "partial": "Node Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:NodeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "None",
          "package": "uni-uDrawGraph",
          "signature": "None",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "None",
          "package": "uni-uDrawGraph",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Ok",
          "package": "uni-uDrawGraph",
          "signature": "Ok",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Ok",
          "package": "uni-uDrawGraph",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenContext",
          "package": "uni-uDrawGraph",
          "signature": "OpenContext ContextId",
          "source": "src/UDrawGraph-Types.html#MultiCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenContext",
          "package": "uni-uDrawGraph",
          "partial": "Open Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenGraph",
          "package": "uni-uDrawGraph",
          "signature": "OpenGraph Filename",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenGraph",
          "package": "uni-uDrawGraph",
          "partial": "Open Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenGraphPlaced",
          "package": "uni-uDrawGraph",
          "signature": "OpenGraphPlaced Filename",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenGraphPlaced",
          "package": "uni-uDrawGraph",
          "partial": "Open Graph Placed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenGraphPlaced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenNewView",
          "package": "uni-uDrawGraph",
          "signature": "OpenNewView",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenNewView",
          "package": "uni-uDrawGraph",
          "partial": "Open New View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenNewView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenStatus",
          "package": "uni-uDrawGraph",
          "signature": "OpenStatus Filename",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenStatus",
          "package": "uni-uDrawGraph",
          "partial": "Open Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenSurveyView",
          "package": "uni-uDrawGraph",
          "signature": "OpenSurveyView",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenSurveyView",
          "package": "uni-uDrawGraph",
          "partial": "Open Survey View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenSurveyView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "OpenWindow",
          "package": "uni-uDrawGraph",
          "signature": "OpenWindow",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "OpenWindow",
          "package": "uni-uDrawGraph",
          "partial": "Open Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:OpenWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Orientation",
          "package": "uni-uDrawGraph",
          "signature": "Orientation Orient",
          "source": "src/UDrawGraph-Types.html#LayoutMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Orientation",
          "package": "uni-uDrawGraph",
          "partial": "Orientation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "PopupSelectionEdge",
          "package": "uni-uDrawGraph",
          "signature": "PopupSelectionEdge EdgeId MenuId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "PopupSelectionEdge",
          "package": "uni-uDrawGraph",
          "partial": "Popup Selection Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:PopupSelectionEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "PopupSelectionNode",
          "package": "uni-uDrawGraph",
          "signature": "PopupSelectionNode NodeId MenuId",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "PopupSelectionNode",
          "package": "uni-uDrawGraph",
          "partial": "Popup Selection Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:PopupSelectionNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Position",
          "package": "uni-uDrawGraph",
          "signature": "Position Int Int",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Position",
          "package": "uni-uDrawGraph",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Print",
          "package": "uni-uDrawGraph",
          "signature": "Print (Maybe Filename)",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Print",
          "package": "uni-uDrawGraph",
          "partial": "Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Quit",
          "package": "uni-uDrawGraph",
          "signature": "Quit",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Quit",
          "package": "uni-uDrawGraph",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "R",
          "package": "uni-uDrawGraph",
          "signature": "R NodeId",
          "source": "src/UDrawGraph-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "R",
          "package": "uni-uDrawGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Raise",
          "package": "uni-uDrawGraph",
          "signature": "Raise",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Raise",
          "package": "uni-uDrawGraph",
          "partial": "Raise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "RestoreAllEdges",
          "package": "uni-uDrawGraph",
          "signature": "RestoreAllEdges",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "RestoreAllEdges",
          "package": "uni-uDrawGraph",
          "partial": "Restore All Edges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:RestoreAllEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "RestoreAllSubgraphs",
          "package": "uni-uDrawGraph",
          "signature": "RestoreAllSubgraphs",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "RestoreAllSubgraphs",
          "package": "uni-uDrawGraph",
          "partial": "Restore All Subgraphs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:RestoreAllSubgraphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "RightLeft",
          "package": "uni-uDrawGraph",
          "signature": "RightLeft",
          "source": "src/UDrawGraph-Types.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "RightLeft",
          "package": "uni-uDrawGraph",
          "partial": "Right Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:RightLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "RulesFirst",
          "package": "uni-uDrawGraph",
          "signature": "RulesFirst Bool",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "RulesFirst",
          "package": "uni-uDrawGraph",
          "partial": "Rules First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:RulesFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SaveGraph",
          "package": "uni-uDrawGraph",
          "signature": "SaveGraph Filename",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SaveGraph",
          "package": "uni-uDrawGraph",
          "partial": "Save Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SaveGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SaveStatus",
          "package": "uni-uDrawGraph",
          "signature": "SaveStatus Filename",
          "source": "src/UDrawGraph-Types.html#FileMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SaveStatus",
          "package": "uni-uDrawGraph",
          "partial": "Save Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SaveStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Scale",
          "package": "uni-uDrawGraph",
          "signature": "Scale (Maybe Int)",
          "source": "src/UDrawGraph-Types.html#ViewMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Scale",
          "package": "uni-uDrawGraph",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ScrollingOnSelection",
          "package": "uni-uDrawGraph",
          "signature": "ScrollingOnSelection Bool",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ScrollingOnSelection",
          "package": "uni-uDrawGraph",
          "partial": "Scrolling On Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ScrollingOnSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectChildren",
          "package": "uni-uDrawGraph",
          "signature": "SelectChildren [NodeId]",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectChildren",
          "normalized": "SelectChildren[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Select Children",
          "signature": "SelectChildren[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectChilds",
          "package": "uni-uDrawGraph",
          "signature": "SelectChilds [NodeId]",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectChilds",
          "normalized": "SelectChilds[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Select Childs",
          "signature": "SelectChilds[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectChilds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectEdge",
          "package": "uni-uDrawGraph",
          "signature": "SelectEdge EdgeId",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectEdge",
          "package": "uni-uDrawGraph",
          "partial": "Select Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectNodes",
          "package": "uni-uDrawGraph",
          "signature": "SelectNodes [NodeId]",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectNodes",
          "normalized": "SelectNodes[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Select Nodes",
          "signature": "SelectNodes[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectParents",
          "package": "uni-uDrawGraph",
          "signature": "SelectParents [NodeId]",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectParents",
          "normalized": "SelectParents[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Select Parents",
          "signature": "SelectParents[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelectSiblings",
          "package": "uni-uDrawGraph",
          "signature": "SelectSiblings [NodeId]",
          "source": "src/UDrawGraph-Types.html#NavigationMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelectSiblings",
          "normalized": "SelectSiblings[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Select Siblings",
          "signature": "SelectSiblings[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelectSiblings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SelfEdgeRadius",
          "package": "uni-uDrawGraph",
          "signature": "SelfEdgeRadius Int",
          "source": "src/UDrawGraph-Types.html#SetCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SelfEdgeRadius",
          "package": "uni-uDrawGraph",
          "partial": "Self Edge Radius",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SelfEdgeRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SetContext",
          "package": "uni-uDrawGraph",
          "signature": "SetContext ContextId",
          "source": "src/UDrawGraph-Types.html#MultiCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SetContext",
          "package": "uni-uDrawGraph",
          "partial": "Set Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SetContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SetContextWindow",
          "package": "uni-uDrawGraph",
          "signature": "SetContextWindow ContextId WindowId",
          "source": "src/UDrawGraph-Types.html#MultiCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SetContextWindow",
          "package": "uni-uDrawGraph",
          "partial": "Set Context Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SetContextWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Shift",
          "package": "uni-uDrawGraph",
          "signature": "Shift",
          "source": "src/UDrawGraph-Types.html#MenuMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Shift",
          "package": "uni-uDrawGraph",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ShowEdges",
          "package": "uni-uDrawGraph",
          "signature": "ShowEdges [NodeId]",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ShowEdges",
          "normalized": "ShowEdges[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Show Edges",
          "signature": "ShowEdges[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ShowEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ShowMessage",
          "package": "uni-uDrawGraph",
          "signature": "ShowMessage String",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ShowMessage",
          "package": "uni-uDrawGraph",
          "partial": "Show Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ShowMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ShowStatus",
          "package": "uni-uDrawGraph",
          "signature": "ShowStatus String",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ShowStatus",
          "package": "uni-uDrawGraph",
          "partial": "Show Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ShowStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ShowSubgraph",
          "package": "uni-uDrawGraph",
          "signature": "ShowSubgraph [NodeId]",
          "source": "src/UDrawGraph-Types.html#AbstractionMenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ShowSubgraph",
          "normalized": "ShowSubgraph[NodeId]",
          "package": "uni-uDrawGraph",
          "partial": "Show Subgraph",
          "signature": "ShowSubgraph[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ShowSubgraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "ShowUrl",
          "package": "uni-uDrawGraph",
          "signature": "ShowUrl String",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "ShowUrl",
          "package": "uni-uDrawGraph",
          "partial": "Show Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:ShowUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Size",
          "package": "uni-uDrawGraph",
          "signature": "Size Int Int",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Size",
          "package": "uni-uDrawGraph",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Special",
          "package": "uni-uDrawGraph",
          "signature": "Special SpecialCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Special",
          "package": "uni-uDrawGraph",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntry",
          "package": "uni-uDrawGraph",
          "signature": "SubmenuEntry MenuId MenuLabel [MenuEntry]",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntry",
          "normalized": "SubmenuEntry MenuId MenuLabel[MenuEntry]",
          "package": "uni-uDrawGraph",
          "partial": "Submenu Entry",
          "signature": "SubmenuEntry MenuId MenuLabel[MenuEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SubmenuEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntryDisabled",
          "package": "uni-uDrawGraph",
          "signature": "SubmenuEntryDisabled MenuId MenuLabel [MenuEntry]",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntryDisabled",
          "normalized": "SubmenuEntryDisabled MenuId MenuLabel[MenuEntry]",
          "package": "uni-uDrawGraph",
          "partial": "Submenu Entry Disabled",
          "signature": "SubmenuEntryDisabled MenuId MenuLabel[MenuEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SubmenuEntryDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntryMne",
          "package": "uni-uDrawGraph",
          "signature": "SubmenuEntryMne MenuId MenuLabel [MenuEntry] MenuMne",
          "source": "src/UDrawGraph-Types.html#MenuEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "SubmenuEntryMne",
          "normalized": "SubmenuEntryMne MenuId MenuLabel[MenuEntry]MenuMne",
          "package": "uni-uDrawGraph",
          "partial": "Submenu Entry Mne",
          "signature": "SubmenuEntryMne MenuId MenuLabel[MenuEntry]MenuMne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:SubmenuEntryMne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Tcl",
          "package": "uni-uDrawGraph",
          "signature": "Tcl TclCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Tcl",
          "package": "uni-uDrawGraph",
          "partial": "Tcl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Tcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "TclAnswer",
          "package": "uni-uDrawGraph",
          "signature": "TclAnswer String",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "TclAnswer",
          "package": "uni-uDrawGraph",
          "partial": "Tcl Answer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:TclAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Title",
          "package": "uni-uDrawGraph",
          "signature": "Title String",
          "source": "src/UDrawGraph-Types.html#WindowCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Title",
          "package": "uni-uDrawGraph",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "TopDown",
          "package": "uni-uDrawGraph",
          "signature": "TopDown",
          "source": "src/UDrawGraph-Types.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "TopDown",
          "package": "uni-uDrawGraph",
          "partial": "Top Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:TopDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Type",
          "package": "uni-uDrawGraph",
          "signature": "Type String",
          "source": "src/UDrawGraph-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Type",
          "package": "uni-uDrawGraph",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Up",
          "package": "uni-uDrawGraph",
          "signature": "Up",
          "source": "src/UDrawGraph-Types.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Up",
          "package": "uni-uDrawGraph",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Update",
          "package": "uni-uDrawGraph",
          "signature": "Update [NodeUpdate] [EdgeUpdate]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Update",
          "normalized": "Update[NodeUpdate][EdgeUpdate]",
          "package": "uni-uDrawGraph",
          "partial": "Update",
          "signature": "Update[NodeUpdate][EdgeUpdate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "UpdateAndChangeAttr",
          "package": "uni-uDrawGraph",
          "signature": "UpdateAndChangeAttr [NodeUpdate] [EdgeUpdate] [AttrChange]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "UpdateAndChangeAttr",
          "normalized": "UpdateAndChangeAttr[NodeUpdate][EdgeUpdate][AttrChange]",
          "package": "uni-uDrawGraph",
          "partial": "Update And Change Attr",
          "signature": "UpdateAndChangeAttr[NodeUpdate][EdgeUpdate][AttrChange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:UpdateAndChangeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "UpdateAndChangeAttrMixed",
          "package": "uni-uDrawGraph",
          "signature": "UpdateAndChangeAttrMixed [MixedUpdate] [AttrChange]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "UpdateAndChangeAttrMixed",
          "normalized": "UpdateAndChangeAttrMixed[MixedUpdate][AttrChange]",
          "package": "uni-uDrawGraph",
          "partial": "Update And Change Attr Mixed",
          "signature": "UpdateAndChangeAttrMixed[MixedUpdate][AttrChange]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:UpdateAndChangeAttrMixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "UpdateMixed",
          "package": "uni-uDrawGraph",
          "signature": "UpdateMixed [MixedUpdate]",
          "source": "src/UDrawGraph-Types.html#GraphCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "UpdateMixed",
          "normalized": "UpdateMixed[MixedUpdate]",
          "package": "uni-uDrawGraph",
          "partial": "Update Mixed",
          "signature": "UpdateMixed[MixedUpdate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:UpdateMixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Version",
          "package": "uni-uDrawGraph",
          "signature": "Version",
          "source": "src/UDrawGraph-Types.html#SpecialCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Version",
          "package": "uni-uDrawGraph",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Versioned",
          "package": "uni-uDrawGraph",
          "signature": "Versioned String",
          "source": "src/UDrawGraph-Types.html#DaVinciAnswer",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Versioned",
          "package": "uni-uDrawGraph",
          "partial": "Versioned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Versioned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "View",
          "package": "uni-uDrawGraph",
          "signature": "View ViewMenuCmd",
          "source": "src/UDrawGraph-Types.html#MenuCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "View",
          "package": "uni-uDrawGraph",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Visual",
          "package": "uni-uDrawGraph",
          "signature": "Visual VisualCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Visual",
          "package": "uni-uDrawGraph",
          "partial": "Visual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Visual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "Window",
          "package": "uni-uDrawGraph",
          "signature": "Window WindowCmd",
          "source": "src/UDrawGraph-Types.html#DaVinciCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "Window",
          "package": "uni-uDrawGraph",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "UDrawGraph.Types",
          "name": "WindowId",
          "package": "uni-uDrawGraph",
          "signature": "WindowId String",
          "source": "src/UDrawGraph-Types.html#WindowId",
          "type": "function"
        },
        "index": {
          "hierarchy": "UDrawGraph Types",
          "module": "UDrawGraph.Types",
          "name": "WindowId",
          "package": "uni-uDrawGraph",
          "partial": "Window Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-uDrawGraph/docs/UDrawGraph-Types.html#v:WindowId"
      }
    }
  ]
]