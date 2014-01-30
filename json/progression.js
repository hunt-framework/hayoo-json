[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exposing the configuration for progression.\n\u003c/p\u003e\u003cp\u003eEach item is either a Maybe type or a list.  The values Nothing or the empty\n list indicate a lack of preference and will be over-ridden by the other setting\n in an mappend; settings can be joined together using their monoid instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "module",
        "fct-source": "src/Progression-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "module exposing the configuration for progression Each item is either Maybe type or list The values Nothing or the empty list indicate lack of preference and will be over-ridden by the other setting in an mappend settings can be joined together using their monoid instances",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Config",
        "normalized": "",
        "package": "progression",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:BoundedMean",
      "description": {
        "fct-descr": "\u003cp\u003eA type that holds the value for a mean with bounds.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#BoundedMean",
        "fct-type": "data",
        "title": "BoundedMean"
      },
      "index": {
        "description": "type that holds the value for mean with bounds",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "BoundedMean",
        "normalized": "",
        "package": "progression",
        "partial": "Bounded Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eThe mode (RunAndGraph, by default), the run settings and the graph settings.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "The mode RunAndGraph by default the run settings and the graph settings",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Config",
        "normalized": "",
        "package": "progression",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Definite",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity functor\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "newtype",
        "fct-source": "src/Progression-Config.html#Definite",
        "fct-type": "newtype",
        "title": "Definite"
      },
      "index": {
        "description": "The identity functor",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Definite",
        "normalized": "",
        "package": "progression",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphData",
      "description": {
        "fct-descr": "\u003cp\u003eSome data that is ready to graph.  There are the group labels (groups on the\n x-axis) which will be plotted in the order given in the list, sub-group labels\n (either bar colours or lines), and a function that gets the data for a given\n group label and sub-group label.\n\u003c/p\u003e\u003cp\u003eIt is expected that \u003ccode\u003e\u003ca\u003egraphData\u003c/a\u003e\u003c/code\u003e will only ever be called with combinations of\n the labels in the attached lists, but that it should return a sensible (i.e.\n non-bottom) value in all these cases.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#GraphData",
        "fct-type": "data",
        "title": "GraphData"
      },
      "index": {
        "description": "Some data that is ready to graph There are the group labels groups on the x-axis which will be plotted in the order given in the list sub-group labels either bar colours or lines and function that gets the data for given group label and sub-group label It is expected that graphData will only ever be called with combinations of the labels in the attached lists but that it should return sensible i.e non-bottom value in all these cases",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphData",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphDataMapping",
      "description": {
        "fct-descr": "\u003cp\u003eA function for mapping raw data (i.e. read from CSV files) into data arranged\n for plotting.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the name of the version most recently recorded, or\n (if just graphing is taking place) the name of the first version listed by the\n user.\n\u003c/p\u003e\u003cp\u003eThe second parameter is a map from version name (e.g. fused-memo) to: a map from benchmark name\n (e.g. calculate-primes) to the recorded mean.\n\u003c/p\u003e\u003cp\u003eThe return is the arranged \u003ccode\u003e\u003ca\u003eGraphData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default is a composition of \u003ccode\u003e\u003ca\u003egroupBench\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "type",
        "fct-source": "src/Progression-Config.html#GraphDataMapping",
        "fct-type": "type",
        "title": "GraphDataMapping"
      },
      "index": {
        "description": "function for mapping raw data i.e read from CSV files into data arranged for plotting The first parameter is the name of the version most recently recorded or if just graphing is taking place the name of the first version listed by the user The second parameter is map from version name e.g fused-memo to map from benchmark name e.g calculate-primes to the recorded mean The return is the arranged GraphData The default is composition of groupBench and normalise",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphDataMapping",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Data Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphSettings",
      "description": {
        "fct-descr": "\u003cp\u003eThe settings for plotting graphs; which labels (besides the one created by\n the current run, if applicable) to feature in the graph, and where to store\n the file (plot.png, by default).\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "data",
        "title": "GraphSettings"
      },
      "index": {
        "description": "The settings for plotting graphs which labels besides the one created by the current run if applicable to feature in the graph and where to store the file plot.png by default",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphSettings",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a graph; lines or bars\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#GraphType",
        "fct-type": "data",
        "title": "GraphType"
      },
      "index": {
        "description": "The type of graph lines or bars",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphType",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GroupName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a particular group on the x-axis; depending on your choice, this\n could be a benchmark name or a version name.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "newtype",
        "fct-source": "src/Progression-Config.html#GroupName",
        "fct-type": "newtype",
        "title": "GroupName"
      },
      "index": {
        "description": "The name of particular group on the x-axis depending on your choice this could be benchmark name or version name",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GroupName",
        "normalized": "",
        "package": "progression",
        "partial": "Group Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe mode; just running and recording a benchmark, just graphing existing results,\n or running a benchmark and produce a graph (the default).\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "The mode just running and recording benchmark just graphing existing results or running benchmark and produce graph the default",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Mode",
        "normalized": "",
        "package": "progression",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:RunSettings",
      "description": {
        "fct-descr": "\u003cp\u003eThe settings for running benchmarks; which prefixes to run (empty list means\n no preference, i.e. all -- not none) and where to put the result.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "data",
        "fct-source": "src/Progression-Config.html#RunSettings",
        "fct-type": "data",
        "title": "RunSettings"
      },
      "index": {
        "description": "The settings for running benchmarks which prefixes to run empty list means no preference i.e all not none and where to put the result",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "RunSettings",
        "normalized": "",
        "package": "progression",
        "partial": "Run Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:SubGroupName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a particular element of a group (for line graphs this is the name\n of the line; for bar charts this is a particular recurring bar colour).\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "newtype",
        "fct-source": "src/Progression-Config.html#SubGroupName",
        "fct-type": "newtype",
        "title": "SubGroupName"
      },
      "index": {
        "description": "The name of particular element of group for line graphs this is the name of the line for bar charts this is particular recurring bar colour",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "SubGroupName",
        "normalized": "",
        "package": "progression",
        "partial": "Sub Group Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:BoundedMean",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "BoundedMean",
        "fct-source": "src/Progression-Config.html#BoundedMean",
        "fct-type": "function",
        "title": "BoundedMean"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "BoundedMean",
        "normalized": "",
        "package": "progression",
        "partial": "Bounded Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:Config",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Config",
        "fct-source": "src/Progression-Config.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Config",
        "normalized": "",
        "package": "progression",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:Definite",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Definite",
        "fct-source": "src/Progression-Config.html#Definite",
        "fct-type": "function",
        "title": "Definite"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "Definite",
        "normalized": "",
        "package": "progression",
        "partial": "Definite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphData",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphData",
        "fct-source": "src/Progression-Config.html#GraphData",
        "fct-type": "function",
        "title": "GraphData"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphData",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphSettings",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphSettings",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "GraphSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphSettings",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphTypeBars",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphTypeBars",
        "fct-source": "src/Progression-Config.html#GraphType",
        "fct-type": "function",
        "title": "GraphTypeBars"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphTypeBars",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Type Bars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphTypeLines",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphTypeLines",
        "fct-source": "src/Progression-Config.html#GraphType",
        "fct-type": "function",
        "title": "GraphTypeLines"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GraphTypeLines",
        "normalized": "",
        "package": "progression",
        "partial": "Graph Type Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GroupName",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GroupName",
        "fct-source": "src/Progression-Config.html#GroupName",
        "fct-type": "function",
        "title": "GroupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "GroupName",
        "normalized": "",
        "package": "progression",
        "partial": "Group Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:JustGraph",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "JustGraph",
        "fct-source": "src/Progression-Config.html#Mode",
        "fct-type": "function",
        "title": "JustGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "JustGraph",
        "normalized": "",
        "package": "progression",
        "partial": "Just Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:JustRun",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "JustRun",
        "fct-source": "src/Progression-Config.html#Mode",
        "fct-type": "function",
        "title": "JustRun"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "JustRun",
        "normalized": "",
        "package": "progression",
        "partial": "Just Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:RunAndGraph",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "RunAndGraph",
        "fct-source": "src/Progression-Config.html#Mode",
        "fct-type": "function",
        "title": "RunAndGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "RunAndGraph",
        "normalized": "",
        "package": "progression",
        "partial": "Run And Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:RunSettings",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "RunSettings",
        "fct-source": "src/Progression-Config.html#RunSettings",
        "fct-type": "function",
        "title": "RunSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "RunSettings",
        "normalized": "",
        "package": "progression",
        "partial": "Run Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:SubGroupName",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "SubGroupName",
        "fct-source": "src/Progression-Config.html#SubGroupName",
        "fct-type": "function",
        "title": "SubGroupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "SubGroupName",
        "normalized": "",
        "package": "progression",
        "partial": "Sub Group Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgGraph",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphSettings Maybe",
        "fct-source": "src/Progression-Config.html#Config",
        "fct-type": "function",
        "title": "cfgGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "cfgGraph",
        "normalized": "",
        "package": "progression",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Maybe Mode",
        "fct-source": "src/Progression-Config.html#Config",
        "fct-type": "function",
        "title": "cfgMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "cfgMode",
        "normalized": "",
        "package": "progression",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgRun",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "RunSettings",
        "fct-source": "src/Progression-Config.html#Config",
        "fct-type": "function",
        "title": "cfgRun"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "cfgRun",
        "normalized": "",
        "package": "progression",
        "partial": "Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:definite",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "a",
        "fct-source": "src/Progression-Config.html#Definite",
        "fct-type": "function",
        "title": "definite"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "definite",
        "normalized": "",
        "package": "progression",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphCompareTo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m [String]",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphCompareTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphCompareTo",
        "normalized": "a[String]",
        "package": "progression",
        "partial": "Compare To",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GroupName -\u003e SubGroupName -\u003e BoundedMean",
        "fct-source": "src/Progression-Config.html#GraphData",
        "fct-type": "function",
        "title": "graphData"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphData",
        "normalized": "GroupName-\u003eSubGroupName-\u003eBoundedMean",
        "package": "progression",
        "partial": "Data",
        "signature": "GroupName-\u003eSubGroupName-\u003eBoundedMean"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphFilename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m String",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphFilename",
        "normalized": "",
        "package": "progression",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphGroup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m GraphDataMapping",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphGroup",
        "normalized": "",
        "package": "progression",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphLogY",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m Bool",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphLogY"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphLogY",
        "normalized": "",
        "package": "progression",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m (Int, Int)",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphSize",
        "normalized": "a(Int,Int)",
        "package": "progression",
        "partial": "Size",
        "signature": "m(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "m GraphType",
        "fct-source": "src/Progression-Config.html#GraphSettings",
        "fct-type": "function",
        "title": "graphType"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "graphType",
        "normalized": "",
        "package": "progression",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupBench",
      "description": {
        "fct-descr": "\u003cp\u003eA function that turns benchmarks into major groups, versions into sub-groups,\n and brings the name of the latest version to the head of the sub-group list.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphDataMapping",
        "fct-source": "src/Progression-Config.html#groupBench",
        "fct-type": "function",
        "title": "groupBench"
      },
      "index": {
        "description": "function that turns benchmarks into major groups versions into sub-groups and brings the name of the latest version to the head of the sub-group list",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "groupBench",
        "normalized": "",
        "package": "progression",
        "partial": "Bench",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupLabels",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "[GroupName]",
        "fct-source": "src/Progression-Config.html#GraphData",
        "fct-type": "function",
        "title": "groupLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "groupLabels",
        "normalized": "[GroupName]",
        "package": "progression",
        "partial": "Labels",
        "signature": "[GroupName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "String",
        "fct-source": "src/Progression-Config.html#GroupName",
        "fct-type": "function",
        "title": "groupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "groupName",
        "normalized": "",
        "package": "progression",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupVersion",
      "description": {
        "fct-descr": "\u003cp\u003eA function that turns versions into major groups, benchmarks into sub-groups,\n and brings the name of the latest version to the head of the group list.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphDataMapping",
        "fct-source": "src/Progression-Config.html#groupVersion",
        "fct-type": "function",
        "title": "groupVersion"
      },
      "index": {
        "description": "function that turns versions into major groups benchmarks into sub-groups and brings the name of the latest version to the head of the group list",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "groupVersion",
        "normalized": "",
        "package": "progression",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:mean",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Double",
        "fct-source": "src/Progression-Config.html#BoundedMean",
        "fct-type": "function",
        "title": "mean"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "mean",
        "normalized": "",
        "package": "progression",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:meanLB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Double",
        "fct-source": "src/Progression-Config.html#BoundedMean",
        "fct-type": "function",
        "title": "meanLB"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "meanLB",
        "normalized": "",
        "package": "progression",
        "partial": "LB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:meanUB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Double",
        "fct-source": "src/Progression-Config.html#BoundedMean",
        "fct-type": "function",
        "title": "meanUB"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "meanUB",
        "normalized": "",
        "package": "progression",
        "partial": "UB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:normalise",
      "description": {
        "fct-descr": "\u003cp\u003eA function that normalises the given data (second parameter) by dividing by the time taken by\n the given version (first parameter).  Benchmarks where the divisor is zero or\n missing have their times left untouched.\n\u003c/p\u003e\u003cp\u003eThis is intended to be applied before \u003ccode\u003e\u003ca\u003egroupBench\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egroupVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "String -\u003e Map String (Map String BoundedMean) -\u003e Map String (Map String BoundedMean)",
        "fct-source": "src/Progression-Config.html#normalise",
        "fct-type": "function",
        "title": "normalise"
      },
      "index": {
        "description": "function that normalises the given data second parameter by dividing by the time taken by the given version first parameter Benchmarks where the divisor is zero or missing have their times left untouched This is intended to be applied before groupBench or groupVersion",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "normalise",
        "normalized": "String-\u003eMap String(Map String BoundedMean)-\u003eMap String(Map String BoundedMean)",
        "package": "progression",
        "partial": "",
        "signature": "String-\u003eMap String(Map String BoundedMean)-\u003eMap String(Map String BoundedMean)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:override",
      "description": {
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "GraphSettings Definite -\u003e GraphSettings Maybe -\u003e GraphSettings Definite",
        "fct-source": "src/Progression-Config.html#override",
        "fct-type": "function",
        "title": "override"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "override",
        "normalized": "GraphSettings Definite-\u003eGraphSettings Maybe-\u003eGraphSettings Definite",
        "package": "progression",
        "partial": "",
        "signature": "GraphSettings Definite-\u003eGraphSettings Maybe-\u003eGraphSettings Definite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:processArgs",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses the given arguments (got from getArgs, typically) to adjust the\n given default configuration, returning the resulting configuration.  Exits the\n whole program with an error if there is a problem, or if the user specified\n \u003ccode\u003e-h\u003c/code\u003e (in which case it exits after printing the options).\n\u003c/p\u003e",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Config -\u003e [String] -\u003e IO Config",
        "fct-source": "src/Progression-Config.html#processArgs",
        "fct-type": "function",
        "title": "processArgs"
      },
      "index": {
        "description": "Processes the given arguments got from getArgs typically to adjust the given default configuration returning the resulting configuration Exits the whole program with an error if there is problem or if the user specified in which case it exits after printing the options",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "processArgs",
        "normalized": "Config-\u003e[String]-\u003eIO Config",
        "package": "progression",
        "partial": "Args",
        "signature": "Config-\u003e[String]-\u003eIO Config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:runPrefixes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "[String]",
        "fct-source": "src/Progression-Config.html#RunSettings",
        "fct-type": "function",
        "title": "runPrefixes"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "runPrefixes",
        "normalized": "[String]",
        "package": "progression",
        "partial": "Prefixes",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:runStoreAs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "Maybe String",
        "fct-source": "src/Progression-Config.html#RunSettings",
        "fct-type": "function",
        "title": "runStoreAs"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "runStoreAs",
        "normalized": "",
        "package": "progression",
        "partial": "Store As",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:subGroupLabels",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "[SubGroupName]",
        "fct-source": "src/Progression-Config.html#GraphData",
        "fct-type": "function",
        "title": "subGroupLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "subGroupLabels",
        "normalized": "[SubGroupName]",
        "package": "progression",
        "partial": "Group Labels",
        "signature": "[SubGroupName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:subGroupName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Progression.Config",
        "fct-package": "progression",
        "fct-signature": "String",
        "fct-source": "src/Progression-Config.html#SubGroupName",
        "fct-type": "function",
        "title": "subGroupName"
      },
      "index": {
        "description": "",
        "hierarchy": "Progression Config",
        "module": "Progression.Config",
        "name": "subGroupName",
        "normalized": "",
        "package": "progression",
        "partial": "Group Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helper functions for dealing with the results (CSV) files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Progression.Files",
        "fct-package": "progression",
        "fct-signature": "module",
        "fct-source": "src/Progression-Files.html",
        "fct-type": "module",
        "title": "Files"
      },
      "index": {
        "description": "Some helper functions for dealing with the results CSV files",
        "hierarchy": "Progression Files",
        "module": "Progression.Files",
        "name": "Files",
        "normalized": "",
        "package": "progression",
        "partial": "Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#v:findResultFiles",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all the results files in the working directory, and returns a list of\n their labels.\n\u003c/p\u003e",
        "fct-module": "Progression.Files",
        "fct-package": "progression",
        "fct-signature": "IO [String]",
        "fct-source": "src/Progression-Files.html#findResultFiles",
        "fct-type": "function",
        "title": "findResultFiles"
      },
      "index": {
        "description": "Finds all the results files in the working directory and returns list of their labels",
        "hierarchy": "Progression Files",
        "module": "Progression.Files",
        "name": "findResultFiles",
        "normalized": "IO[String]",
        "package": "progression",
        "partial": "Result Files",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#v:makeFileName",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a label for a result-set, turns it into a CSV file name.\n\u003c/p\u003e\u003cp\u003eCurrently this is done by prepending \"bench-\" and appending \".csv\".\n\u003c/p\u003e",
        "fct-module": "Progression.Files",
        "fct-package": "progression",
        "fct-signature": "String -\u003e FilePath",
        "fct-source": "src/Progression-Files.html#makeFileName",
        "fct-type": "function",
        "title": "makeFileName"
      },
      "index": {
        "description": "Given label for result-set turns it into CSV file name Currently this is done by prepending bench and appending csv",
        "hierarchy": "Progression Files",
        "module": "Progression.Files",
        "name": "makeFileName",
        "normalized": "String-\u003eFilePath",
        "package": "progression",
        "partial": "File Name",
        "signature": "String-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primary module in Progression; contains methods that you can use as the\n main method of your wrapper program.  Typically, to use Progression, you create\n a Haskell program that defines/imports the benchmarks, and passes them to the\n \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e method below.  You then compile that program and run it to record\n and graph your benchmarks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Progression.Main",
        "fct-package": "progression",
        "fct-signature": "module",
        "fct-source": "src/Progression-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "The primary module in Progression contains methods that you can use as the main method of your wrapper program Typically to use Progression you create Haskell program that defines imports the benchmarks and passes them to the defaultMain method below You then compile that program and run it to record and graph your benchmarks",
        "hierarchy": "Progression Main",
        "module": "Progression.Main",
        "name": "Main",
        "normalized": "",
        "package": "progression",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#v:defaultMain",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the given benchmark (which is likely a benchmark group) and runs it\n as part of Progression, recording the results and producing graphs.  The Benchmark\n type is imported from the Criterion library, so see the documentation for Criterion\n to find out what can be benchmarked and any issues that might arise in the benchmarking.\n\u003c/p\u003e\u003cp\u003eThis function will process the command-line arguments of the program, consuming\n any progression arguments, and passing any arguments that occur after a \"--\"\n argument on to Criterion.  If you want to perform further argument processing,\n it is best to do this before the call, and wrap the call in \u003ccode\u003e\u003ca\u003ewithArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Progression.Main",
        "fct-package": "progression",
        "fct-signature": "Benchmark -\u003e IO ()",
        "fct-source": "src/Progression-Main.html#defaultMain",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "Takes the given benchmark which is likely benchmark group and runs it as part of Progression recording the results and producing graphs The Benchmark type is imported from the Criterion library so see the documentation for Criterion to find out what can be benchmarked and any issues that might arise in the benchmarking This function will process the command-line arguments of the program consuming any progression arguments and passing any arguments that occur after argument on to Criterion If you want to perform further argument processing it is best to do this before the call and wrap the call in withArgs",
        "hierarchy": "Progression Main",
        "module": "Progression.Main",
        "name": "defaultMain",
        "normalized": "Benchmark-\u003eIO()",
        "package": "progression",
        "partial": "Main",
        "signature": "Benchmark-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#v:defaultMainWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but you can specify the default configuration.  Command-line\n argument processing is still performed, and command-line settings will take\n precedence over the config passed in.\n\u003c/p\u003e",
        "fct-module": "Progression.Main",
        "fct-package": "progression",
        "fct-signature": "Config -\u003e Benchmark -\u003e IO ()",
        "fct-source": "src/Progression-Main.html#defaultMainWith",
        "fct-type": "function",
        "title": "defaultMainWith"
      },
      "index": {
        "description": "Like defaultMain but you can specify the default configuration Command-line argument processing is still performed and command-line settings will take precedence over the config passed in",
        "hierarchy": "Progression Main",
        "module": "Progression.Main",
        "name": "defaultMainWith",
        "normalized": "Config-\u003eBenchmark-\u003eIO()",
        "package": "progression",
        "partial": "Main With",
        "signature": "Config-\u003eBenchmark-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Plot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module for plotting.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Progression.Plot",
        "fct-package": "progression",
        "fct-signature": "module",
        "fct-source": "src/Progression-Plot.html",
        "fct-type": "module",
        "title": "Plot"
      },
      "index": {
        "description": "helper module for plotting",
        "hierarchy": "Progression Plot",
        "module": "Progression.Plot",
        "name": "Plot",
        "normalized": "",
        "package": "progression",
        "partial": "Plot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Plot.html#v:plotMulti",
      "description": {
        "fct-descr": "\u003cp\u003ePlots to the given destination file (using its extension as the terminal type),\n the given list of labels in the settings.  The first parameter is the one passed\n to the \u003ccode\u003e\u003ca\u003egraphData\u003c/a\u003e\u003c/code\u003e function (the most recent benchmark).\n\u003c/p\u003e",
        "fct-module": "Progression.Plot",
        "fct-package": "progression",
        "fct-signature": "String -\u003e GraphSettings Definite -\u003e IO ()",
        "fct-source": "src/Progression-Plot.html#plotMulti",
        "fct-type": "function",
        "title": "plotMulti"
      },
      "index": {
        "description": "Plots to the given destination file using its extension as the terminal type the given list of labels in the settings The first parameter is the one passed to the graphData function the most recent benchmark",
        "hierarchy": "Progression Plot",
        "module": "Progression.Plot",
        "name": "plotMulti",
        "normalized": "String-\u003eGraphSettings Definite-\u003eIO()",
        "package": "progression",
        "partial": "Multi",
        "signature": "String-\u003eGraphSettings Definite-\u003eIO()"
      }
    }
  }
]