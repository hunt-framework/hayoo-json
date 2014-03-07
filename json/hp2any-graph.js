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
        "word": "hp2any-graph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some half-ready solutions to visualise heap\nprofiles both during and after execution with the help of OpenGL.  All\nthe rendering functions will fill the viewport if the model view\nmatrix is the identity (they also change the matrix), assuming the\nprojection matrix is the following:\n\u003c/p\u003e\u003cpre\u003e\n matrixMode $= Projection\n loadIdentity\n translate $ Vector3 (-1) (-1) 0\n scale 2 2 1\n\u003c/pre\u003e\u003cp\u003eIn other words, these functions fill the unit square at the origin. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "OpenGL",
          "package": "hp2any-graph",
          "source": "src/Profiling-Heap-OpenGL.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides some half-ready solutions to visualise heap profiles both during and after execution with the help of OpenGL All the rendering functions will fill the viewport if the model view matrix is the identity they also change the matrix assuming the projection matrix is the following matrixMode Projection loadIdentity translate Vector3 scale In other words these functions fill the unit square at the origin",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "OpenGL",
          "package": "hp2any-graph",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optimised graph rendering designed to be easily updated when a\nnew sample arrives. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "GraphData",
          "package": "hp2any-graph",
          "source": "src/Profiling-Heap-OpenGL.html#GraphData",
          "type": "data"
        },
        "index": {
          "description": "An optimised graph rendering designed to be easily updated when new sample arrives",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "GraphData",
          "package": "hp2any-graph",
          "partial": "Graph Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:GraphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible ways of displaying heap profiles. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "GraphMode",
          "package": "hp2any-graph",
          "source": "src/Profiling-Heap-OpenGL.html#GraphMode",
          "type": "data"
        },
        "index": {
          "description": "The possible ways of displaying heap profiles",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "GraphMode",
          "package": "hp2any-graph",
          "partial": "Graph Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:GraphMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo heap profile samples which contain the exact same cost centres\nin the exact same order. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "SamplePair",
          "package": "hp2any-graph",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "data"
        },
        "index": {
          "description": "Two heap profile samples which contain the exact same cost centres in the exact same order",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "SamplePair",
          "package": "hp2any-graph",
          "partial": "Sample Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:SamplePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost centres are stacked on top of each other without\n overlapping.\n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "Accumulated",
          "package": "hp2any-graph",
          "signature": "Accumulated",
          "source": "src/Profiling-Heap-OpenGL.html#GraphMode",
          "type": "function"
        },
        "index": {
          "description": "Cost centres are stacked on top of each other without overlapping",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "Accumulated",
          "package": "hp2any-graph",
          "partial": "Accumulated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:Accumulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.OpenGL",
          "name": "SP",
          "package": "hp2any-graph",
          "signature": "SP",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "SP",
          "package": "hp2any-graph",
          "partial": "SP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:SP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach cost centre yields a separate line graph on the same\n scale.\n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "Separate",
          "package": "hp2any-graph",
          "signature": "Separate",
          "source": "src/Profiling-Heap-OpenGL.html#GraphMode",
          "type": "function"
        },
        "index": {
          "description": "Each cost centre yields separate line graph on the same scale",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "Separate",
          "package": "hp2any-graph",
          "partial": "Separate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:Separate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrating a new sample into the list of merged sample pairs we\nhave so far.  The input list should start with the latest sample, and\nthe new sample pair will be the head of the result. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "addSample",
          "package": "hp2any-graph",
          "signature": "[SamplePair] -\u003e (Time, ProfileSample) -\u003e [SamplePair]",
          "source": "src/Profiling-Heap-OpenGL.html#addSample",
          "type": "function"
        },
        "index": {
          "description": "Integrating new sample into the list of merged sample pairs we have so far The input list should start with the latest sample and the new sample pair will be the head of the result",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "addSample",
          "normalized": "[SamplePair]-\u003e(Time,ProfileSample)-\u003e[SamplePair]",
          "package": "hp2any-graph",
          "partial": "Sample",
          "signature": "[SamplePair]-\u003e(Time,ProfileSample)-\u003e[SamplePair]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:addSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colour of the background (white).  It is not a member of\n\u003ccode\u003e\u003ca\u003ecolours\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "backgroundColour",
          "package": "hp2any-graph",
          "signature": "Color3 GLubyte",
          "source": "src/Profiling-Heap-OpenGL.html#backgroundColour",
          "type": "function"
        },
        "index": {
          "description": "The colour of the background white It is not member of colours",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "backgroundColour",
          "package": "hp2any-graph",
          "partial": "Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:backgroundColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of highly different colours, where the differences diminish\nas we advance in the list.  The first element is black, and there is\nno white. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "colours",
          "package": "hp2any-graph",
          "signature": "[Color3 GLubyte]",
          "source": "src/Profiling-Heap-OpenGL.html#colours",
          "type": "function"
        },
        "index": {
          "description": "list of highly different colours where the differences diminish as we advance in the list The first element is black and there is no white",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "colours",
          "normalized": "[Color GLubyte]",
          "package": "hp2any-graph",
          "signature": "[Color GLubyte]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:colours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty rendering. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "emptyGraph",
          "package": "hp2any-graph",
          "signature": "GraphData",
          "source": "src/Profiling-Heap-OpenGL.html#emptyGraph",
          "type": "function"
        },
        "index": {
          "description": "An empty rendering",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "emptyGraph",
          "package": "hp2any-graph",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:emptyGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe names of cost centres in a graph rendering. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "graphNames",
          "package": "hp2any-graph",
          "signature": "GraphData -\u003e IntMap String",
          "source": "src/Profiling-Heap-OpenGL.html#graphNames",
          "type": "function"
        },
        "index": {
          "description": "The names of cost centres in graph rendering",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "graphNames",
          "normalized": "GraphData-\u003eIntMap String",
          "package": "hp2any-graph",
          "partial": "Names",
          "signature": "GraphData-\u003eIntMap String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:graphNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrate a new sample in an extensible graph. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "growGraph",
          "package": "hp2any-graph",
          "signature": "GraphData -\u003e SinkInput -\u003e IO GraphData",
          "source": "src/Profiling-Heap-OpenGL.html#growGraph",
          "type": "function"
        },
        "index": {
          "description": "Integrate new sample in an extensible graph",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "growGraph",
          "normalized": "GraphData-\u003eSinkInput-\u003eIO GraphData",
          "package": "hp2any-graph",
          "partial": "Graph",
          "signature": "GraphData-\u003eSinkInput-\u003eIO GraphData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:growGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cyclic successor function for graph modes. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "nextGraphMode",
          "package": "hp2any-graph",
          "signature": "GraphMode -\u003e GraphMode",
          "source": "src/Profiling-Heap-OpenGL.html#nextGraphMode",
          "type": "function"
        },
        "index": {
          "description": "cyclic successor function for graph modes",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "nextGraphMode",
          "normalized": "GraphMode-\u003eGraphMode",
          "package": "hp2any-graph",
          "partial": "Graph Mode",
          "signature": "GraphMode-\u003eGraphMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:nextGraphMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colour used for unimportant cost centres (black).  It is the\nfirst element of \u003ccode\u003e\u003ca\u003ecolours\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "otherColour",
          "package": "hp2any-graph",
          "signature": "Color3 GLubyte",
          "source": "src/Profiling-Heap-OpenGL.html#otherColour",
          "type": "function"
        },
        "index": {
          "description": "The colour used for unimportant cost centres black It is the first element of colours",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "otherColour",
          "package": "hp2any-graph",
          "partial": "Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:otherColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of sample pairs where each cost centre is paired up\nwith the consecutive one, so it is easier to render them.  Cost\ncentres with small costs (below \u003ccode\u003ecostLimit\u003c/code\u003e) are lumped together under\nidentifier 0, reserved for \"Other\". \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "prepareSamples",
          "package": "hp2any-graph",
          "signature": "p -\u003e [SamplePair]",
          "source": "src/Profiling-Heap-OpenGL.html#prepareSamples",
          "type": "function"
        },
        "index": {
          "description": "Create list of sample pairs where each cost centre is paired up with the consecutive one so it is easier to render them Cost centres with small costs below costLimit are lumped together under identifier reserved for Other",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "prepareSamples",
          "normalized": "a-\u003e[SamplePair]",
          "package": "hp2any-graph",
          "partial": "Samples",
          "signature": "p-\u003e[SamplePair]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:prepareSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a stream in the given graph mode. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "renderGraph",
          "package": "hp2any-graph",
          "signature": "GraphMode -\u003e GraphData -\u003e IO ()",
          "source": "src/Profiling-Heap-OpenGL.html#renderGraph",
          "type": "function"
        },
        "index": {
          "description": "Render stream in the given graph mode",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "renderGraph",
          "normalized": "GraphMode-\u003eGraphData-\u003eIO()",
          "package": "hp2any-graph",
          "partial": "Graph",
          "signature": "GraphMode-\u003eGraphData-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:renderGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a given list of prepared samples in the given mode.  The\nthird argument is the maximum time of the graph, which affects\nhorizontal scaling. \n\u003c/p\u003e",
          "module": "Profiling.Heap.OpenGL",
          "name": "renderSamples",
          "package": "hp2any-graph",
          "signature": "GraphMode -\u003e [SamplePair] -\u003e Time -\u003e IO ()",
          "source": "src/Profiling-Heap-OpenGL.html#renderSamples",
          "type": "function"
        },
        "index": {
          "description": "Render given list of prepared samples in the given mode The third argument is the maximum time of the graph which affects horizontal scaling",
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "renderSamples",
          "normalized": "GraphMode-\u003e[SamplePair]-\u003eTime-\u003eIO()",
          "package": "hp2any-graph",
          "partial": "Samples",
          "signature": "GraphMode-\u003e[SamplePair]-\u003eTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:renderSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.OpenGL",
          "name": "spData1",
          "package": "hp2any-graph",
          "signature": "ProfileSample",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "spData1",
          "package": "hp2any-graph",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spData1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.OpenGL",
          "name": "spData2",
          "package": "hp2any-graph",
          "signature": "ProfileSample",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "spData2",
          "package": "hp2any-graph",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spData2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.OpenGL",
          "name": "spTime1",
          "package": "hp2any-graph",
          "signature": "Time",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "spTime1",
          "package": "hp2any-graph",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spTime1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.OpenGL",
          "name": "spTime2",
          "package": "hp2any-graph",
          "signature": "Time",
          "source": "src/Profiling-Heap-OpenGL.html#SamplePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap OpenGL",
          "module": "Profiling.Heap.OpenGL",
          "name": "spTime2",
          "package": "hp2any-graph",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spTime2"
      }
    }
  ]
]