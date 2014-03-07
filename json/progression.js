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
        "word": "progression"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exposing the configuration for progression.\n\u003c/p\u003e\u003cp\u003eEach item is either a Maybe type or a list.  The values Nothing or the empty\n list indicate a lack of preference and will be over-ridden by the other setting\n in an mappend; settings can be joined together using their monoid instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "source": "src/Progression-Config.html",
          "type": "module"
        },
        "index": {
          "description": "module exposing the configuration for progression Each item is either Maybe type or list The values Nothing or the empty list indicate lack of preference and will be over-ridden by the other setting in an mappend settings can be joined together using their monoid instances",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that holds the value for a mean with bounds.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "BoundedMean",
          "package": "progression",
          "source": "src/Progression-Config.html#BoundedMean",
          "type": "data"
        },
        "index": {
          "description": "type that holds the value for mean with bounds",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "BoundedMean",
          "package": "progression",
          "partial": "Bounded Mean",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:BoundedMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mode (RunAndGraph, by default), the run settings and the graph settings.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "source": "src/Progression-Config.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The mode RunAndGraph by default the run settings and the graph settings",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity functor\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "Definite",
          "package": "progression",
          "source": "src/Progression-Config.html#Definite",
          "type": "newtype"
        },
        "index": {
          "description": "The identity functor",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Definite",
          "package": "progression",
          "partial": "Definite",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome data that is ready to graph.  There are the group labels (groups on the\n x-axis) which will be plotted in the order given in the list, sub-group labels\n (either bar colours or lines), and a function that gets the data for a given\n group label and sub-group label.\n\u003c/p\u003e\u003cp\u003eIt is expected that \u003ccode\u003e\u003ca\u003egraphData\u003c/a\u003e\u003c/code\u003e will only ever be called with combinations of\n the labels in the attached lists, but that it should return a sensible (i.e.\n non-bottom) value in all these cases.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "GraphData",
          "package": "progression",
          "source": "src/Progression-Config.html#GraphData",
          "type": "data"
        },
        "index": {
          "description": "Some data that is ready to graph There are the group labels groups on the x-axis which will be plotted in the order given in the list sub-group labels either bar colours or lines and function that gets the data for given group label and sub-group label It is expected that graphData will only ever be called with combinations of the labels in the attached lists but that it should return sensible i.e non-bottom value in all these cases",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphData",
          "package": "progression",
          "partial": "Graph Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function for mapping raw data (i.e. read from CSV files) into data arranged\n for plotting.\n\u003c/p\u003e\u003cp\u003eThe first parameter is the name of the version most recently recorded, or\n (if just graphing is taking place) the name of the first version listed by the\n user.\n\u003c/p\u003e\u003cp\u003eThe second parameter is a map from version name (e.g. fused-memo) to: a map from benchmark name\n (e.g. calculate-primes) to the recorded mean.\n\u003c/p\u003e\u003cp\u003eThe return is the arranged \u003ccode\u003e\u003ca\u003eGraphData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default is a composition of \u003ccode\u003e\u003ca\u003egroupBench\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "GraphDataMapping",
          "package": "progression",
          "source": "src/Progression-Config.html#GraphDataMapping",
          "type": "type"
        },
        "index": {
          "description": "function for mapping raw data i.e read from CSV files into data arranged for plotting The first parameter is the name of the version most recently recorded or if just graphing is taking place the name of the first version listed by the user The second parameter is map from version name e.g fused-memo to map from benchmark name e.g calculate-primes to the recorded mean The return is the arranged GraphData The default is composition of groupBench and normalise",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphDataMapping",
          "package": "progression",
          "partial": "Graph Data Mapping",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphDataMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe settings for plotting graphs; which labels (besides the one created by\n the current run, if applicable) to feature in the graph, and where to store\n the file (plot.png, by default).\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "GraphSettings",
          "package": "progression",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "data"
        },
        "index": {
          "description": "The settings for plotting graphs which labels besides the one created by the current run if applicable to feature in the graph and where to store the file plot.png by default",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphSettings",
          "package": "progression",
          "partial": "Graph Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a graph; lines or bars\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "GraphType",
          "package": "progression",
          "source": "src/Progression-Config.html#GraphType",
          "type": "data"
        },
        "index": {
          "description": "The type of graph lines or bars",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphType",
          "package": "progression",
          "partial": "Graph Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GraphType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a particular group on the x-axis; depending on your choice, this\n could be a benchmark name or a version name.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "GroupName",
          "package": "progression",
          "source": "src/Progression-Config.html#GroupName",
          "type": "newtype"
        },
        "index": {
          "description": "The name of particular group on the x-axis depending on your choice this could be benchmark name or version name",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GroupName",
          "package": "progression",
          "partial": "Group Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:GroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe mode; just running and recording a benchmark, just graphing existing results,\n or running a benchmark and produce a graph (the default).\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "Mode",
          "package": "progression",
          "source": "src/Progression-Config.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "The mode just running and recording benchmark just graphing existing results or running benchmark and produce graph the default",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Mode",
          "package": "progression",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe settings for running benchmarks; which prefixes to run (empty list means\n no preference, i.e. all -- not none) and where to put the result.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "RunSettings",
          "package": "progression",
          "source": "src/Progression-Config.html#RunSettings",
          "type": "data"
        },
        "index": {
          "description": "The settings for running benchmarks which prefixes to run empty list means no preference i.e all not none and where to put the result",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "RunSettings",
          "package": "progression",
          "partial": "Run Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:RunSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a particular element of a group (for line graphs this is the name\n of the line; for bar charts this is a particular recurring bar colour).\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "SubGroupName",
          "package": "progression",
          "source": "src/Progression-Config.html#SubGroupName",
          "type": "newtype"
        },
        "index": {
          "description": "The name of particular element of group for line graphs this is the name of the line for bar charts this is particular recurring bar colour",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "SubGroupName",
          "package": "progression",
          "partial": "Sub Group Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#t:SubGroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "BoundedMean",
          "package": "progression",
          "signature": "BoundedMean",
          "source": "src/Progression-Config.html#BoundedMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "BoundedMean",
          "package": "progression",
          "partial": "Bounded Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:BoundedMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "signature": "Config",
          "source": "src/Progression-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Config",
          "package": "progression",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "Definite",
          "package": "progression",
          "signature": "Definite",
          "source": "src/Progression-Config.html#Definite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "Definite",
          "package": "progression",
          "partial": "Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:Definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "GraphData",
          "package": "progression",
          "signature": "GraphData",
          "source": "src/Progression-Config.html#GraphData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphData",
          "package": "progression",
          "partial": "Graph Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "GraphSettings",
          "package": "progression",
          "signature": "GraphSettings",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphSettings",
          "package": "progression",
          "partial": "Graph Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "GraphTypeBars",
          "package": "progression",
          "signature": "GraphTypeBars",
          "source": "src/Progression-Config.html#GraphType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphTypeBars",
          "package": "progression",
          "partial": "Graph Type Bars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphTypeBars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "GraphTypeLines",
          "package": "progression",
          "signature": "GraphTypeLines",
          "source": "src/Progression-Config.html#GraphType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GraphTypeLines",
          "package": "progression",
          "partial": "Graph Type Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GraphTypeLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "GroupName",
          "package": "progression",
          "signature": "GroupName",
          "source": "src/Progression-Config.html#GroupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "GroupName",
          "package": "progression",
          "partial": "Group Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:GroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "JustGraph",
          "package": "progression",
          "signature": "JustGraph",
          "source": "src/Progression-Config.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "JustGraph",
          "package": "progression",
          "partial": "Just Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:JustGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "JustRun",
          "package": "progression",
          "signature": "JustRun",
          "source": "src/Progression-Config.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "JustRun",
          "package": "progression",
          "partial": "Just Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:JustRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "RunAndGraph",
          "package": "progression",
          "signature": "RunAndGraph",
          "source": "src/Progression-Config.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "RunAndGraph",
          "package": "progression",
          "partial": "Run And Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:RunAndGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "RunSettings",
          "package": "progression",
          "signature": "RunSettings",
          "source": "src/Progression-Config.html#RunSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "RunSettings",
          "package": "progression",
          "partial": "Run Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:RunSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "SubGroupName",
          "package": "progression",
          "signature": "SubGroupName",
          "source": "src/Progression-Config.html#SubGroupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "SubGroupName",
          "package": "progression",
          "partial": "Sub Group Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:SubGroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "cfgGraph",
          "package": "progression",
          "signature": "GraphSettings Maybe",
          "source": "src/Progression-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "cfgGraph",
          "package": "progression",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "cfgMode",
          "package": "progression",
          "signature": "Maybe Mode",
          "source": "src/Progression-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "cfgMode",
          "package": "progression",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "cfgRun",
          "package": "progression",
          "signature": "RunSettings",
          "source": "src/Progression-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "cfgRun",
          "package": "progression",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:cfgRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "definite",
          "package": "progression",
          "signature": "a",
          "source": "src/Progression-Config.html#Definite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "definite",
          "package": "progression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:definite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphCompareTo",
          "package": "progression",
          "signature": "m [String]",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphCompareTo",
          "normalized": "a[String]",
          "package": "progression",
          "partial": "Compare To",
          "signature": "m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphCompareTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphData",
          "package": "progression",
          "signature": "GroupName -\u003e SubGroupName -\u003e BoundedMean",
          "source": "src/Progression-Config.html#GraphData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphData",
          "normalized": "GroupName-\u003eSubGroupName-\u003eBoundedMean",
          "package": "progression",
          "partial": "Data",
          "signature": "GroupName-\u003eSubGroupName-\u003eBoundedMean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphFilename",
          "package": "progression",
          "signature": "m String",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphFilename",
          "package": "progression",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphGroup",
          "package": "progression",
          "signature": "m GraphDataMapping",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphGroup",
          "package": "progression",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphLogY",
          "package": "progression",
          "signature": "m Bool",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphLogY",
          "package": "progression",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphLogY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphSize",
          "package": "progression",
          "signature": "m (Int, Int)",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphSize",
          "normalized": "a(Int,Int)",
          "package": "progression",
          "partial": "Size",
          "signature": "m(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "graphType",
          "package": "progression",
          "signature": "m GraphType",
          "source": "src/Progression-Config.html#GraphSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "graphType",
          "package": "progression",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:graphType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that turns benchmarks into major groups, versions into sub-groups,\n and brings the name of the latest version to the head of the sub-group list.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "groupBench",
          "package": "progression",
          "signature": "GraphDataMapping",
          "source": "src/Progression-Config.html#groupBench",
          "type": "function"
        },
        "index": {
          "description": "function that turns benchmarks into major groups versions into sub-groups and brings the name of the latest version to the head of the sub-group list",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "groupBench",
          "package": "progression",
          "partial": "Bench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupBench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "groupLabels",
          "package": "progression",
          "signature": "[GroupName]",
          "source": "src/Progression-Config.html#GraphData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "groupLabels",
          "normalized": "[GroupName]",
          "package": "progression",
          "partial": "Labels",
          "signature": "[GroupName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "groupName",
          "package": "progression",
          "signature": "String",
          "source": "src/Progression-Config.html#GroupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "groupName",
          "package": "progression",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that turns versions into major groups, benchmarks into sub-groups,\n and brings the name of the latest version to the head of the group list.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "groupVersion",
          "package": "progression",
          "signature": "GraphDataMapping",
          "source": "src/Progression-Config.html#groupVersion",
          "type": "function"
        },
        "index": {
          "description": "function that turns versions into major groups benchmarks into sub-groups and brings the name of the latest version to the head of the group list",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "groupVersion",
          "package": "progression",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:groupVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "mean",
          "package": "progression",
          "signature": "Double",
          "source": "src/Progression-Config.html#BoundedMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "mean",
          "package": "progression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "meanLB",
          "package": "progression",
          "signature": "Double",
          "source": "src/Progression-Config.html#BoundedMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "meanLB",
          "package": "progression",
          "partial": "LB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:meanLB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "meanUB",
          "package": "progression",
          "signature": "Double",
          "source": "src/Progression-Config.html#BoundedMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "meanUB",
          "package": "progression",
          "partial": "UB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:meanUB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that normalises the given data (second parameter) by dividing by the time taken by\n the given version (first parameter).  Benchmarks where the divisor is zero or\n missing have their times left untouched.\n\u003c/p\u003e\u003cp\u003eThis is intended to be applied before \u003ccode\u003e\u003ca\u003egroupBench\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egroupVersion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "normalise",
          "package": "progression",
          "signature": "String -\u003e Map String (Map String BoundedMean) -\u003e Map String (Map String BoundedMean)",
          "source": "src/Progression-Config.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "function that normalises the given data second parameter by dividing by the time taken by the given version first parameter Benchmarks where the divisor is zero or missing have their times left untouched This is intended to be applied before groupBench or groupVersion",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "normalise",
          "normalized": "String-\u003eMap String(Map String BoundedMean)-\u003eMap String(Map String BoundedMean)",
          "package": "progression",
          "signature": "String-\u003eMap String(Map String BoundedMean)-\u003eMap String(Map String BoundedMean)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "override",
          "package": "progression",
          "signature": "GraphSettings Definite -\u003e GraphSettings Maybe -\u003e GraphSettings Definite",
          "source": "src/Progression-Config.html#override",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "override",
          "normalized": "GraphSettings Definite-\u003eGraphSettings Maybe-\u003eGraphSettings Definite",
          "package": "progression",
          "signature": "GraphSettings Definite-\u003eGraphSettings Maybe-\u003eGraphSettings Definite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:override"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses the given arguments (got from getArgs, typically) to adjust the\n given default configuration, returning the resulting configuration.  Exits the\n whole program with an error if there is a problem, or if the user specified\n \u003ccode\u003e-h\u003c/code\u003e (in which case it exits after printing the options).\n\u003c/p\u003e",
          "module": "Progression.Config",
          "name": "processArgs",
          "package": "progression",
          "signature": "Config -\u003e [String] -\u003e IO Config",
          "source": "src/Progression-Config.html#processArgs",
          "type": "function"
        },
        "index": {
          "description": "Processes the given arguments got from getArgs typically to adjust the given default configuration returning the resulting configuration Exits the whole program with an error if there is problem or if the user specified in which case it exits after printing the options",
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "processArgs",
          "normalized": "Config-\u003e[String]-\u003eIO Config",
          "package": "progression",
          "partial": "Args",
          "signature": "Config-\u003e[String]-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:processArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "runPrefixes",
          "package": "progression",
          "signature": "[String]",
          "source": "src/Progression-Config.html#RunSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "runPrefixes",
          "normalized": "[String]",
          "package": "progression",
          "partial": "Prefixes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:runPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "runStoreAs",
          "package": "progression",
          "signature": "Maybe String",
          "source": "src/Progression-Config.html#RunSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "runStoreAs",
          "package": "progression",
          "partial": "Store As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:runStoreAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "subGroupLabels",
          "package": "progression",
          "signature": "[SubGroupName]",
          "source": "src/Progression-Config.html#GraphData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "subGroupLabels",
          "normalized": "[SubGroupName]",
          "package": "progression",
          "partial": "Group Labels",
          "signature": "[SubGroupName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:subGroupLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Progression.Config",
          "name": "subGroupName",
          "package": "progression",
          "signature": "String",
          "source": "src/Progression-Config.html#SubGroupName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Progression Config",
          "module": "Progression.Config",
          "name": "subGroupName",
          "package": "progression",
          "partial": "Group Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Config.html#v:subGroupName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helper functions for dealing with the results (CSV) files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Progression.Files",
          "name": "Files",
          "package": "progression",
          "source": "src/Progression-Files.html",
          "type": "module"
        },
        "index": {
          "description": "Some helper functions for dealing with the results CSV files",
          "hierarchy": "Progression Files",
          "module": "Progression.Files",
          "name": "Files",
          "package": "progression",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all the results files in the working directory, and returns a list of\n their labels.\n\u003c/p\u003e",
          "module": "Progression.Files",
          "name": "findResultFiles",
          "package": "progression",
          "signature": "IO [String]",
          "source": "src/Progression-Files.html#findResultFiles",
          "type": "function"
        },
        "index": {
          "description": "Finds all the results files in the working directory and returns list of their labels",
          "hierarchy": "Progression Files",
          "module": "Progression.Files",
          "name": "findResultFiles",
          "normalized": "IO[String]",
          "package": "progression",
          "partial": "Result Files",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#v:findResultFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a label for a result-set, turns it into a CSV file name.\n\u003c/p\u003e\u003cp\u003eCurrently this is done by prepending \"bench-\" and appending \".csv\".\n\u003c/p\u003e",
          "module": "Progression.Files",
          "name": "makeFileName",
          "package": "progression",
          "signature": "String -\u003e FilePath",
          "source": "src/Progression-Files.html#makeFileName",
          "type": "function"
        },
        "index": {
          "description": "Given label for result-set turns it into CSV file name Currently this is done by prepending bench and appending csv",
          "hierarchy": "Progression Files",
          "module": "Progression.Files",
          "name": "makeFileName",
          "normalized": "String-\u003eFilePath",
          "package": "progression",
          "partial": "File Name",
          "signature": "String-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Files.html#v:makeFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe primary module in Progression; contains methods that you can use as the\n main method of your wrapper program.  Typically, to use Progression, you create\n a Haskell program that defines/imports the benchmarks, and passes them to the\n \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e method below.  You then compile that program and run it to record\n and graph your benchmarks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Progression.Main",
          "name": "Main",
          "package": "progression",
          "source": "src/Progression-Main.html",
          "type": "module"
        },
        "index": {
          "description": "The primary module in Progression contains methods that you can use as the main method of your wrapper program Typically to use Progression you create Haskell program that defines imports the benchmarks and passes them to the defaultMain method below You then compile that program and run it to record and graph your benchmarks",
          "hierarchy": "Progression Main",
          "module": "Progression.Main",
          "name": "Main",
          "package": "progression",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the given benchmark (which is likely a benchmark group) and runs it\n as part of Progression, recording the results and producing graphs.  The Benchmark\n type is imported from the Criterion library, so see the documentation for Criterion\n to find out what can be benchmarked and any issues that might arise in the benchmarking.\n\u003c/p\u003e\u003cp\u003eThis function will process the command-line arguments of the program, consuming\n any progression arguments, and passing any arguments that occur after a \"--\"\n argument on to Criterion.  If you want to perform further argument processing,\n it is best to do this before the call, and wrap the call in \u003ccode\u003e\u003ca\u003ewithArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Progression.Main",
          "name": "defaultMain",
          "package": "progression",
          "signature": "Benchmark -\u003e IO ()",
          "source": "src/Progression-Main.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "Takes the given benchmark which is likely benchmark group and runs it as part of Progression recording the results and producing graphs The Benchmark type is imported from the Criterion library so see the documentation for Criterion to find out what can be benchmarked and any issues that might arise in the benchmarking This function will process the command-line arguments of the program consuming any progression arguments and passing any arguments that occur after argument on to Criterion If you want to perform further argument processing it is best to do this before the call and wrap the call in withArgs",
          "hierarchy": "Progression Main",
          "module": "Progression.Main",
          "name": "defaultMain",
          "normalized": "Benchmark-\u003eIO()",
          "package": "progression",
          "partial": "Main",
          "signature": "Benchmark-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e but you can specify the default configuration.  Command-line\n argument processing is still performed, and command-line settings will take\n precedence over the config passed in.\n\u003c/p\u003e",
          "module": "Progression.Main",
          "name": "defaultMainWith",
          "package": "progression",
          "signature": "Config -\u003e Benchmark -\u003e IO ()",
          "source": "src/Progression-Main.html#defaultMainWith",
          "type": "function"
        },
        "index": {
          "description": "Like defaultMain but you can specify the default configuration Command-line argument processing is still performed and command-line settings will take precedence over the config passed in",
          "hierarchy": "Progression Main",
          "module": "Progression.Main",
          "name": "defaultMainWith",
          "normalized": "Config-\u003eBenchmark-\u003eIO()",
          "package": "progression",
          "partial": "Main With",
          "signature": "Config-\u003eBenchmark-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Main.html#v:defaultMainWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA helper module for plotting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Progression.Plot",
          "name": "Plot",
          "package": "progression",
          "source": "src/Progression-Plot.html",
          "type": "module"
        },
        "index": {
          "description": "helper module for plotting",
          "hierarchy": "Progression Plot",
          "module": "Progression.Plot",
          "name": "Plot",
          "package": "progression",
          "partial": "Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Plot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlots to the given destination file (using its extension as the terminal type),\n the given list of labels in the settings.  The first parameter is the one passed\n to the \u003ccode\u003e\u003ca\u003egraphData\u003c/a\u003e\u003c/code\u003e function (the most recent benchmark).\n\u003c/p\u003e",
          "module": "Progression.Plot",
          "name": "plotMulti",
          "package": "progression",
          "signature": "String -\u003e GraphSettings Definite -\u003e IO ()",
          "source": "src/Progression-Plot.html#plotMulti",
          "type": "function"
        },
        "index": {
          "description": "Plots to the given destination file using its extension as the terminal type the given list of labels in the settings The first parameter is the one passed to the graphData function the most recent benchmark",
          "hierarchy": "Progression Plot",
          "module": "Progression.Plot",
          "name": "plotMulti",
          "normalized": "String-\u003eGraphSettings Definite-\u003eIO()",
          "package": "progression",
          "partial": "Multi",
          "signature": "String-\u003eGraphSettings Definite-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/progression/docs/Progression-Plot.html#v:plotMulti"
      }
    }
  ]
]