[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides some half-ready solutions to visualise heap\nprofiles both during and after execution with the help of OpenGL.  All\nthe rendering functions will fill the viewport if the model view\nmatrix is the identity (they also change the matrix), assuming the\nprojection matrix is the following:\n\u003c/p\u003e\u003cpre\u003e\n matrixMode $= Projection\n loadIdentity\n translate $ Vector3 (-1) (-1) 0\n scale 2 2 1\n\u003c/pre\u003e\u003cp\u003eIn other words, these functions fill the unit square at the origin. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "module",
        "fct-source": "src/Profiling-Heap-OpenGL.html",
        "fct-type": "module",
        "title": "OpenGL"
      },
      "index": {
        "description": "This module provides some half-ready solutions to visualise heap profiles both during and after execution with the help of OpenGL All the rendering functions will fill the viewport if the model view matrix is the identity they also change the matrix assuming the projection matrix is the following matrixMode Projection loadIdentity translate Vector3 scale In other words these functions fill the unit square at the origin",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "OpenGL",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Open GL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:GraphData",
      "description": {
        "fct-descr": "\u003cp\u003eAn optimised graph rendering designed to be easily updated when a\nnew sample arrives. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Heap-OpenGL.html#GraphData",
        "fct-type": "data",
        "title": "GraphData"
      },
      "index": {
        "description": "An optimised graph rendering designed to be easily updated when new sample arrives",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "GraphData",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Graph Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:GraphMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible ways of displaying heap profiles. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Heap-OpenGL.html#GraphMode",
        "fct-type": "data",
        "title": "GraphMode"
      },
      "index": {
        "description": "The possible ways of displaying heap profiles",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "GraphMode",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Graph Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#t:SamplePair",
      "description": {
        "fct-descr": "\u003cp\u003eTwo heap profile samples which contain the exact same cost centres\nin the exact same order. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "data",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "data",
        "title": "SamplePair"
      },
      "index": {
        "description": "Two heap profile samples which contain the exact same cost centres in the exact same order",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "SamplePair",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Sample Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:Accumulated",
      "description": {
        "fct-descr": "\u003cp\u003eCost centres are stacked on top of each other without\n overlapping.\n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "Accumulated",
        "fct-source": "src/Profiling-Heap-OpenGL.html#GraphMode",
        "fct-type": "function",
        "title": "Accumulated"
      },
      "index": {
        "description": "Cost centres are stacked on top of each other without overlapping",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "Accumulated",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Accumulated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:SP",
      "description": {
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "SP",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "function",
        "title": "SP"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "SP",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "SP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:Separate",
      "description": {
        "fct-descr": "\u003cp\u003eEach cost centre yields a separate line graph on the same\n scale.\n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "Separate",
        "fct-source": "src/Profiling-Heap-OpenGL.html#GraphMode",
        "fct-type": "function",
        "title": "Separate"
      },
      "index": {
        "description": "Each cost centre yields separate line graph on the same scale",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "Separate",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Separate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:addSample",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrating a new sample into the list of merged sample pairs we\nhave so far.  The input list should start with the latest sample, and\nthe new sample pair will be the head of the result. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "[SamplePair] -\u003e (Time, ProfileSample) -\u003e [SamplePair]",
        "fct-source": "src/Profiling-Heap-OpenGL.html#addSample",
        "fct-type": "function",
        "title": "addSample"
      },
      "index": {
        "description": "Integrating new sample into the list of merged sample pairs we have so far The input list should start with the latest sample and the new sample pair will be the head of the result",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "addSample",
        "normalized": "[SamplePair]-\u003e(Time,ProfileSample)-\u003e[SamplePair]",
        "package": "hp2any-graph",
        "partial": "Sample",
        "signature": "[SamplePair]-\u003e(Time,ProfileSample)-\u003e[SamplePair]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:backgroundColour",
      "description": {
        "fct-descr": "\u003cp\u003eThe colour of the background (white).  It is not a member of\n\u003ccode\u003e\u003ca\u003ecolours\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "Color3 GLubyte",
        "fct-source": "src/Profiling-Heap-OpenGL.html#backgroundColour",
        "fct-type": "function",
        "title": "backgroundColour"
      },
      "index": {
        "description": "The colour of the background white It is not member of colours",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "backgroundColour",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Colour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:colours",
      "description": {
        "fct-descr": "\u003cp\u003eA list of highly different colours, where the differences diminish\nas we advance in the list.  The first element is black, and there is\nno white. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "[Color3 GLubyte]",
        "fct-source": "src/Profiling-Heap-OpenGL.html#colours",
        "fct-type": "function",
        "title": "colours"
      },
      "index": {
        "description": "list of highly different colours where the differences diminish as we advance in the list The first element is black and there is no white",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "colours",
        "normalized": "[Color GLubyte]",
        "package": "hp2any-graph",
        "partial": "",
        "signature": "[Color GLubyte]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:emptyGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty rendering. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphData",
        "fct-source": "src/Profiling-Heap-OpenGL.html#emptyGraph",
        "fct-type": "function",
        "title": "emptyGraph"
      },
      "index": {
        "description": "An empty rendering",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "emptyGraph",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:graphNames",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of cost centres in a graph rendering. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphData -\u003e IntMap String",
        "fct-source": "src/Profiling-Heap-OpenGL.html#graphNames",
        "fct-type": "function",
        "title": "graphNames"
      },
      "index": {
        "description": "The names of cost centres in graph rendering",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "graphNames",
        "normalized": "GraphData-\u003eIntMap String",
        "package": "hp2any-graph",
        "partial": "Names",
        "signature": "GraphData-\u003eIntMap String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:growGraph",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrate a new sample in an extensible graph. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphData -\u003e SinkInput -\u003e IO GraphData",
        "fct-source": "src/Profiling-Heap-OpenGL.html#growGraph",
        "fct-type": "function",
        "title": "growGraph"
      },
      "index": {
        "description": "Integrate new sample in an extensible graph",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "growGraph",
        "normalized": "GraphData-\u003eSinkInput-\u003eIO GraphData",
        "package": "hp2any-graph",
        "partial": "Graph",
        "signature": "GraphData-\u003eSinkInput-\u003eIO GraphData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:nextGraphMode",
      "description": {
        "fct-descr": "\u003cp\u003eA cyclic successor function for graph modes. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphMode -\u003e GraphMode",
        "fct-source": "src/Profiling-Heap-OpenGL.html#nextGraphMode",
        "fct-type": "function",
        "title": "nextGraphMode"
      },
      "index": {
        "description": "cyclic successor function for graph modes",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "nextGraphMode",
        "normalized": "GraphMode-\u003eGraphMode",
        "package": "hp2any-graph",
        "partial": "Graph Mode",
        "signature": "GraphMode-\u003eGraphMode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:otherColour",
      "description": {
        "fct-descr": "\u003cp\u003eThe colour used for unimportant cost centres (black).  It is the\nfirst element of \u003ccode\u003e\u003ca\u003ecolours\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "Color3 GLubyte",
        "fct-source": "src/Profiling-Heap-OpenGL.html#otherColour",
        "fct-type": "function",
        "title": "otherColour"
      },
      "index": {
        "description": "The colour used for unimportant cost centres black It is the first element of colours",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "otherColour",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Colour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:prepareSamples",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a list of sample pairs where each cost centre is paired up\nwith the consecutive one, so it is easier to render them.  Cost\ncentres with small costs (below \u003ccode\u003ecostLimit\u003c/code\u003e) are lumped together under\nidentifier 0, reserved for \"Other\". \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "p -\u003e [SamplePair]",
        "fct-source": "src/Profiling-Heap-OpenGL.html#prepareSamples",
        "fct-type": "function",
        "title": "prepareSamples"
      },
      "index": {
        "description": "Create list of sample pairs where each cost centre is paired up with the consecutive one so it is easier to render them Cost centres with small costs below costLimit are lumped together under identifier reserved for Other",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "prepareSamples",
        "normalized": "a-\u003e[SamplePair]",
        "package": "hp2any-graph",
        "partial": "Samples",
        "signature": "p-\u003e[SamplePair]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:renderGraph",
      "description": {
        "fct-descr": "\u003cp\u003eRender a stream in the given graph mode. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphMode -\u003e GraphData -\u003e IO ()",
        "fct-source": "src/Profiling-Heap-OpenGL.html#renderGraph",
        "fct-type": "function",
        "title": "renderGraph"
      },
      "index": {
        "description": "Render stream in the given graph mode",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "renderGraph",
        "normalized": "GraphMode-\u003eGraphData-\u003eIO()",
        "package": "hp2any-graph",
        "partial": "Graph",
        "signature": "GraphMode-\u003eGraphData-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:renderSamples",
      "description": {
        "fct-descr": "\u003cp\u003eRender a given list of prepared samples in the given mode.  The\nthird argument is the maximum time of the graph, which affects\nhorizontal scaling. \n\u003c/p\u003e",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "GraphMode -\u003e [SamplePair] -\u003e Time -\u003e IO ()",
        "fct-source": "src/Profiling-Heap-OpenGL.html#renderSamples",
        "fct-type": "function",
        "title": "renderSamples"
      },
      "index": {
        "description": "Render given list of prepared samples in the given mode The third argument is the maximum time of the graph which affects horizontal scaling",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "renderSamples",
        "normalized": "GraphMode-\u003e[SamplePair]-\u003eTime-\u003eIO()",
        "package": "hp2any-graph",
        "partial": "Samples",
        "signature": "GraphMode-\u003e[SamplePair]-\u003eTime-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spData1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "!ProfileSample",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "function",
        "title": "spData1"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "spData1",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spData2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "!ProfileSample",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "function",
        "title": "spData2"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "spData2",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spTime1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "!Time",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "function",
        "title": "spTime1"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "spTime1",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hp2any-graph/docs/Profiling-Heap-OpenGL.html#v:spTime2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Profiling.Heap.OpenGL",
        "fct-package": "hp2any-graph",
        "fct-signature": "!Time",
        "fct-source": "src/Profiling-Heap-OpenGL.html#SamplePair",
        "fct-type": "function",
        "title": "spTime2"
      },
      "index": {
        "description": "",
        "hierarchy": "Profiling Heap OpenGL",
        "module": "Profiling.Heap.OpenGL",
        "name": "spTime2",
        "normalized": "",
        "package": "hp2any-graph",
        "partial": "Time",
        "signature": ""
      }
    }
  }
]