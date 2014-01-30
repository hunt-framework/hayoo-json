[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for generating web-based charts using Google's Chart API:\n\u003ca\u003ehttp://code.google.com/apis/chart/\u003c/a\u003e.  Its output is URLs that will resolve\nto a PNG image of the resulting chart.\n\u003c/p\u003e\u003cp\u003eMost of the functions in this module, with names like \u003ccode\u003esetFoo\u003c/code\u003e, take a \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e\nas an argument and produce a new \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e with the specified attribute added.\nThese calls are designed to be chained together.  See the example below.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003es are represented as a hierarchy of type classes so that parameters\nthat only affect a specific chart type are only available to that chart type.\n\u003c/p\u003e\u003cpre\u003e\nputStrLn \"URL for your chart:\"\nputStrLn $ \u003ccode\u003e\u003ca\u003echartURL\u003c/a\u003e\u003c/code\u003e $\n  \u003ccode\u003e\u003ca\u003esetSize\u003c/a\u003e\u003c/code\u003e 400 257 $\n  \u003ccode\u003e\u003ca\u003esetTitle\u003c/a\u003e\u003c/code\u003e \"My Chart\" $\n  \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eencodeDataSimple\u003c/a\u003e\u003c/code\u003e [[1..20]]) $\n  \u003ccode\u003e\u003ca\u003esetLegend\u003c/a\u003e\u003c/code\u003e [\"1 to 20\"] $\n  \u003ccode\u003e\u003ca\u003enewLineChart\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThis produces:\n\u003ca\u003ehttp://chart.apis.google.com/chart?chs=400x257&chtt=My+Chart&chd=s%3aBCDEFGHIJKLMNOPQRSTU&chdl=1+to+20&cht=lc\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRemaining features to implement:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e lxy line charts\n\u003c/li\u003e\u003cli\u003e chbh bar charts\n\u003c/li\u003e\u003cli\u003e scatter plots\n\u003c/li\u003e\u003cli\u003e background/fill colors\n\u003c/li\u003e\u003cli\u003e all style attributes\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Google-Chart.html",
        "fct-type": "module",
        "title": "Chart"
      },
      "index": {
        "description": "This module is for generating web-based charts using Google Chart API http code.google.com apis chart Its output is URLs that will resolve to PNG image of the resulting chart Most of the functions in this module with names like setFoo take Chart as an argument and produce new Chart with the specified attribute added These calls are designed to be chained together See the example below Chart are represented as hierarchy of type classes so that parameters that only affect specific chart type are only available to that chart type putStrLn URL for your chart putStrLn chartURL setSize setTitle My Chart setData encodeDataSimple setLegend to newLineChart This produces http chart.apis.google.com chart chs x257 chtt My Chart chd aBCDEFGHIJKLMNOPQRSTU chdl to cht lc Remaining features to implement lxy line charts chbh bar charts scatter plots background fill colors all style attributes",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Chart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eText alignment for labels on an axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#AxisAlignment",
        "fct-type": "data",
        "title": "AxisAlignment"
      },
      "index": {
        "description": "Text alignment for labels on an axis",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisAlignment",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisLabelChart",
      "description": {
        "fct-descr": "\u003cp\u003eAxisLabelChart represents charts that can display axis labels.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Google-Chart.html#AxisLabelChart",
        "fct-type": "class",
        "title": "AxisLabelChart"
      },
      "index": {
        "description": "AxisLabelChart represents charts that can display axis labels",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisLabelChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Label Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisType",
      "description": {
        "fct-descr": "\u003cp\u003eWhere to display an axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#AxisType",
        "fct-type": "data",
        "title": "AxisType"
      },
      "index": {
        "description": "Where to display an axis",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisType",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:BarChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#BarChart",
        "fct-type": "data",
        "title": "BarChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "BarChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Bar Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:BarStyle",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#BarStyle",
        "fct-type": "data",
        "title": "BarStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "BarStyle",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Bar Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:Chart",
      "description": {
        "fct-descr": "\u003cp\u003eThe type class underneath all Charts.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Google-Chart.html#Chart",
        "fct-type": "class",
        "title": "Chart"
      },
      "index": {
        "description": "The type class underneath all Charts",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Chart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:ChartData",
      "description": {
        "fct-descr": "\u003cp\u003eAll the encoding methods produce \u003ccode\u003e\u003ca\u003eChartData\u003c/a\u003e\u003c/code\u003e, which is usable by \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#ChartData",
        "fct-type": "data",
        "title": "ChartData"
      },
      "index": {
        "description": "All the encoding methods produce ChartData which is usable by setData",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "ChartData",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Chart Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:LegendChart",
      "description": {
        "fct-descr": "\u003cp\u003eLegendChart represents charts that can display legends with \u003ccode\u003e\u003ca\u003esetLegend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "class",
        "fct-source": "src/Graphics-Google-Chart.html#LegendChart",
        "fct-type": "class",
        "title": "LegendChart"
      },
      "index": {
        "description": "LegendChart represents charts that can display legends with setLegend",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "LegendChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Legend Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:LineChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#LineChart",
        "fct-type": "data",
        "title": "LineChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "LineChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Line Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:Orientation",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#Orientation",
        "fct-type": "data",
        "title": "Orientation"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Orientation",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Orientation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:PieChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#PieChart",
        "fct-type": "data",
        "title": "PieChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "PieChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Pie Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:PieStyle",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#PieStyle",
        "fct-type": "data",
        "title": "PieStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "PieStyle",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Pie Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:VennDiagram",
      "description": {
        "fct-descr": "\u003cp\u003eVenn diagram data is specified in a particular format.  There should be\n exactly seven data values, which represent, in order:\n   circle A size, circle B size, circle C size,\n   A/B overlap, A/C overlap, B/C overlap,\n   A/B/C overlap.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Google-Chart.html#VennDiagram",
        "fct-type": "data",
        "title": "VennDiagram"
      },
      "index": {
        "description": "Venn diagram data is specified in particular format There should be exactly seven data values which represent in order circle size circle size circle size overlap overlap overlap overlap",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "VennDiagram",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Venn Diagram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignCenter",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AlignCenter",
        "fct-source": "src/Graphics-Google-Chart.html#AxisAlignment",
        "fct-type": "function",
        "title": "AlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AlignCenter",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Align Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignLeft",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AlignLeft",
        "fct-source": "src/Graphics-Google-Chart.html#AxisAlignment",
        "fct-type": "function",
        "title": "AlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AlignLeft",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Align Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignRight",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AlignRight",
        "fct-source": "src/Graphics-Google-Chart.html#AxisAlignment",
        "fct-type": "function",
        "title": "AlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AlignRight",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Align Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisBottom",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AxisBottom",
        "fct-source": "src/Graphics-Google-Chart.html#AxisType",
        "fct-type": "function",
        "title": "AxisBottom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisBottom",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisLeft",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AxisLeft",
        "fct-source": "src/Graphics-Google-Chart.html#AxisType",
        "fct-type": "function",
        "title": "AxisLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisLeft",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisRight",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AxisRight",
        "fct-source": "src/Graphics-Google-Chart.html#AxisType",
        "fct-type": "function",
        "title": "AxisRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisRight",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisTop",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "AxisTop",
        "fct-source": "src/Graphics-Google-Chart.html#AxisType",
        "fct-type": "function",
        "title": "AxisTop"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "AxisTop",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Axis Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Grouped",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Grouped",
        "fct-source": "src/Graphics-Google-Chart.html#BarStyle",
        "fct-type": "function",
        "title": "Grouped"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Grouped",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Grouped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Horizontal",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Horizontal",
        "fct-source": "src/Graphics-Google-Chart.html#Orientation",
        "fct-type": "function",
        "title": "Horizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Horizontal",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Pie2D",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Pie2D",
        "fct-source": "src/Graphics-Google-Chart.html#PieStyle",
        "fct-type": "function",
        "title": "Pie2D"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Pie2D",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Pie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Pie3D",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Pie3D",
        "fct-source": "src/Graphics-Google-Chart.html#PieStyle",
        "fct-type": "function",
        "title": "Pie3D"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Pie3D",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Pie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Stacked",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Stacked",
        "fct-source": "src/Graphics-Google-Chart.html#BarStyle",
        "fct-type": "function",
        "title": "Stacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Stacked",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Stacked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Vertical",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Vertical",
        "fct-source": "src/Graphics-Google-Chart.html#Orientation",
        "fct-type": "function",
        "title": "Vertical"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "Vertical",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Vertical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:chartURL",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the URL used to show the chart.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "c -\u003e String",
        "fct-source": "src/Graphics-Google-Chart.html#chartURL",
        "fct-type": "function",
        "title": "chartURL"
      },
      "index": {
        "description": "Construct the URL used to show the chart",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "chartURL",
        "normalized": "a-\u003eString",
        "package": "GoogleChart",
        "partial": "URL",
        "signature": "c-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataExtended",
      "description": {
        "fct-descr": "\u003cp\u003eEncode data using the \"extended\" encoding, which maps each input value\n to a two-character pair in base 64.  This has more resolution than text\n encoding and is more compact.  Input values must be in the range \u003ccode\u003e0 \u003c= x \u003c=\n 4095\u003c/code\u003e.  Values outside the valid input range will be considered missing\n data.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[[Int]] -\u003e ChartData",
        "fct-source": "src/Graphics-Google-Chart.html#encodeDataExtended",
        "fct-type": "function",
        "title": "encodeDataExtended"
      },
      "index": {
        "description": "Encode data using the extended encoding which maps each input value to two-character pair in base This has more resolution than text encoding and is more compact Input values must be in the range Values outside the valid input range will be considered missing data",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "encodeDataExtended",
        "normalized": "[[Int]]-\u003eChartData",
        "package": "GoogleChart",
        "partial": "Data Extended",
        "signature": "[[Int]]-\u003eChartData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataSimple",
      "description": {
        "fct-descr": "\u003cp\u003eEncode data using the \"simple\" encoding, which maps each input value\n to a single letter in the URL.  This produces minimal URLs but doesn't have\n as lot of resolution.  Input values must be in the range \u003ccode\u003e0 \u003c= x \u003c= 61\u003c/code\u003e.\n Values outside the valid input range will be considered missing data.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[[Int]] -\u003e ChartData",
        "fct-source": "src/Graphics-Google-Chart.html#encodeDataSimple",
        "fct-type": "function",
        "title": "encodeDataSimple"
      },
      "index": {
        "description": "Encode data using the simple encoding which maps each input value to single letter in the URL This produces minimal URLs but doesn have as lot of resolution Input values must be in the range Values outside the valid input range will be considered missing data",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "encodeDataSimple",
        "normalized": "[[Int]]-\u003eChartData",
        "package": "GoogleChart",
        "partial": "Data Simple",
        "signature": "[[Int]]-\u003eChartData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataText",
      "description": {
        "fct-descr": "\u003cp\u003eEncode data using the \"text\" encoding, which maps each input value to\n its string representation (e.g. \"3.4\") in the URL.  This has more\n resolution than simple encoding but produces larger URLs.  Input values must\n be in the range \u003ccode\u003e0 \u003c= x \u003c= 100\u003c/code\u003e.  Values outside the valid input range will\n be considered missing data.  Values with more than one decimal place of\n resolution will be rounded.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[[a]] -\u003e ChartData",
        "fct-source": "src/Graphics-Google-Chart.html#encodeDataText",
        "fct-type": "function",
        "title": "encodeDataText"
      },
      "index": {
        "description": "Encode data using the text encoding which maps each input value to its string representation e.g in the URL This has more resolution than simple encoding but produces larger URLs Input values must be in the range Values outside the valid input range will be considered missing data Values with more than one decimal place of resolution will be rounded",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "encodeDataText",
        "normalized": "[[a]]-\u003eChartData",
        "package": "GoogleChart",
        "partial": "Data Text",
        "signature": "[[a]]-\u003eChartData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newBarChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Orientation -\u003e BarStyle -\u003e BarChart",
        "fct-source": "src/Graphics-Google-Chart.html#newBarChart",
        "fct-type": "function",
        "title": "newBarChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "newBarChart",
        "normalized": "Orientation-\u003eBarStyle-\u003eBarChart",
        "package": "GoogleChart",
        "partial": "Bar Chart",
        "signature": "Orientation-\u003eBarStyle-\u003eBarChart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newLineChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "LineChart",
        "fct-source": "src/Graphics-Google-Chart.html#newLineChart",
        "fct-type": "function",
        "title": "newLineChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "newLineChart",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Line Chart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newPieChart",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "PieStyle -\u003e PieChart",
        "fct-source": "src/Graphics-Google-Chart.html#newPieChart",
        "fct-type": "function",
        "title": "newPieChart"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "newPieChart",
        "normalized": "PieStyle-\u003ePieChart",
        "package": "GoogleChart",
        "partial": "Pie Chart",
        "signature": "PieStyle-\u003ePieChart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newVennDiagram",
      "description": {
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "VennDiagram",
        "fct-source": "src/Graphics-Google-Chart.html#newVennDiagram",
        "fct-type": "function",
        "title": "newVennDiagram"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "newVennDiagram",
        "normalized": "",
        "package": "GoogleChart",
        "partial": "Venn Diagram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisLabelPositions",
      "description": {
        "fct-descr": "\u003cp\u003eSet axis label positions.  The nth list of Ints in the argument sets the\n positions for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  An empty list\n skips setting position for the corresponding axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[[Int]] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setAxisLabelPositions",
        "fct-type": "function",
        "title": "setAxisLabelPositions"
      },
      "index": {
        "description": "Set axis label positions The nth list of Ints in the argument sets the positions for the nth axis specified with setAxisTypes An empty list skips setting position for the corresponding axis",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setAxisLabelPositions",
        "normalized": "[[Int]]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Axis Label Positions",
        "signature": "[[Int]]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisLabels",
      "description": {
        "fct-descr": "\u003cp\u003eSet axis labels.  The nth list of strings in the argument sets the labels\n for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  An empty list of strings\n skips labelling the corresponding axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[[String]] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setAxisLabels",
        "fct-type": "function",
        "title": "setAxisLabels"
      },
      "index": {
        "description": "Set axis labels The nth list of strings in the argument sets the labels for the nth axis specified with setAxisTypes An empty list of strings skips labelling the corresponding axis",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setAxisLabels",
        "normalized": "[[String]]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Axis Labels",
        "signature": "[[String]]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisRanges",
      "description": {
        "fct-descr": "\u003cp\u003eSet axis ranges.  The nth pair of Ints in the argument sets the range\n for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[(Int, Int)] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setAxisRanges",
        "fct-type": "function",
        "title": "setAxisRanges"
      },
      "index": {
        "description": "Set axis ranges The nth pair of Ints in the argument sets the range for the nth axis specified with setAxisTypes",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setAxisRanges",
        "normalized": "[(Int,Int)]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Axis Ranges",
        "signature": "[(Int,Int)]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisStyles",
      "description": {
        "fct-descr": "\u003cp\u003eSet axis styles.  The nth element in the argument sets the style for the\n nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  Each style is a tuple of\n (color, font size, text alignment).\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[(String, Int, AxisAlignment)] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setAxisStyles",
        "fct-type": "function",
        "title": "setAxisStyles"
      },
      "index": {
        "description": "Set axis styles The nth element in the argument sets the style for the nth axis specified with setAxisTypes Each style is tuple of color font size text alignment",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setAxisStyles",
        "normalized": "[(String,Int,AxisAlignment)]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Axis Styles",
        "signature": "[(String,Int,AxisAlignment)]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisTypes",
      "description": {
        "fct-descr": "\u003cp\u003eSet which axes to display.  Repeating an \u003ccode\u003e\u003ca\u003eAxisType\u003c/a\u003e\u003c/code\u003e produces multiple\n sets of labels on that axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[AxisType] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setAxisTypes",
        "fct-type": "function",
        "title": "setAxisTypes"
      },
      "index": {
        "description": "Set which axes to display Repeating an AxisType produces multiple sets of labels on that axis",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setAxisTypes",
        "normalized": "[AxisType]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Axis Types",
        "signature": "[AxisType]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setData",
      "description": {
        "fct-descr": "\u003cp\u003eSet the data displayed by the chart.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "ChartData -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setData",
        "fct-type": "function",
        "title": "setData"
      },
      "index": {
        "description": "Set the data displayed by the chart",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setData",
        "normalized": "ChartData-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Data",
        "signature": "ChartData-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setDataColors",
      "description": {
        "fct-descr": "\u003cp\u003eSet data set colors.  The nth color specified here colors the nth data\n set in the \u003ccode\u003e\u003ca\u003eChartData\u003c/a\u003e\u003c/code\u003e passed to \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e.  See\n \u003ca\u003ehttp://code.google.com/apis/chart/#line_bar_pie_colors\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[String] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setDataColors",
        "fct-type": "function",
        "title": "setDataColors"
      },
      "index": {
        "description": "Set data set colors The nth color specified here colors the nth data set in the ChartData passed to setData See http code.google.com apis chart line bar pie colors for more information",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setDataColors",
        "normalized": "[String]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Data Colors",
        "signature": "[String]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setLabels",
      "description": {
        "fct-descr": "\u003cp\u003eSet labels for the different data points on the chart.\n Specify missing values by passing an empty string.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[String] -\u003e PieChart -\u003e PieChart",
        "fct-source": "src/Graphics-Google-Chart.html#setLabels",
        "fct-type": "function",
        "title": "setLabels"
      },
      "index": {
        "description": "Set labels for the different data points on the chart Specify missing values by passing an empty string",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setLabels",
        "normalized": "[String]-\u003ePieChart-\u003ePieChart",
        "package": "GoogleChart",
        "partial": "Labels",
        "signature": "[String]-\u003ePieChart-\u003ePieChart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setLegend",
      "description": {
        "fct-descr": "\u003cp\u003eSet the legend for the corresponding data sets.  The colors are taken\n from the data set colors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "[String] -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setLegend",
        "fct-type": "function",
        "title": "setLegend"
      },
      "index": {
        "description": "Set the legend for the corresponding data sets The colors are taken from the data set colors",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setLegend",
        "normalized": "[String]-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Legend",
        "signature": "[String]-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setSize",
      "description": {
        "fct-descr": "\u003cp\u003eSet the width and height, in pixels, of the resulting image.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "Int -\u003e Int -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setSize",
        "fct-type": "function",
        "title": "setSize"
      },
      "index": {
        "description": "Set the width and height in pixels of the resulting image",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setSize",
        "normalized": "Int-\u003eInt-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Size",
        "signature": "Int-\u003eInt-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setTitle",
      "description": {
        "fct-descr": "\u003cp\u003eSet the title of the chart.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "String -\u003e c -\u003e c",
        "fct-source": "src/Graphics-Google-Chart.html#setTitle",
        "fct-type": "function",
        "title": "setTitle"
      },
      "index": {
        "description": "Set the title of the chart",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setTitle",
        "normalized": "String-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Title",
        "signature": "String-\u003ec-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setTitleOpts",
      "description": {
        "fct-descr": "\u003cp\u003eSet options for the display of the title of the chart.\n\u003c/p\u003e",
        "fct-module": "Graphics.Google.Chart",
        "fct-package": "GoogleChart",
        "fct-signature": "String-\u003e Int-\u003e c-\u003e c",
        "fct-type": "function",
        "title": "setTitleOpts"
      },
      "index": {
        "description": "Set options for the display of the title of the chart",
        "hierarchy": "Graphics Google Chart",
        "module": "Graphics.Google.Chart",
        "name": "setTitleOpts",
        "normalized": "String-\u003eInt-\u003ea-\u003ea",
        "package": "GoogleChart",
        "partial": "Title Opts",
        "signature": "String-\u003eInt-\u003ec-\u003ec"
      }
    }
  }
]