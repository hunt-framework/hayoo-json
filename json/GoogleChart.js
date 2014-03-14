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
        "word": "GoogleChart"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is for generating web-based charts using Google's Chart API:\n\u003ca\u003ehttp://code.google.com/apis/chart/\u003c/a\u003e.  Its output is URLs that will resolve\nto a PNG image of the resulting chart.\n\u003c/p\u003e\u003cp\u003eMost of the functions in this module, with names like \u003ccode\u003esetFoo\u003c/code\u003e, take a \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e\nas an argument and produce a new \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e with the specified attribute added.\nThese calls are designed to be chained together.  See the example below.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003es are represented as a hierarchy of type classes so that parameters\nthat only affect a specific chart type are only available to that chart type.\n\u003c/p\u003e\u003cpre\u003e\nputStrLn \"URL for your chart:\"\nputStrLn $ \u003ccode\u003e\u003ca\u003echartURL\u003c/a\u003e\u003c/code\u003e $\n  \u003ccode\u003e\u003ca\u003esetSize\u003c/a\u003e\u003c/code\u003e 400 257 $\n  \u003ccode\u003e\u003ca\u003esetTitle\u003c/a\u003e\u003c/code\u003e \"My Chart\" $\n  \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eencodeDataSimple\u003c/a\u003e\u003c/code\u003e [[1..20]]) $\n  \u003ccode\u003e\u003ca\u003esetLegend\u003c/a\u003e\u003c/code\u003e [\"1 to 20\"] $\n  \u003ccode\u003e\u003ca\u003enewLineChart\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThis produces:\n\u003ca\u003ehttp://chart.apis.google.com/chart?chs=400x257&chtt=My+Chart&chd=s%3aBCDEFGHIJKLMNOPQRSTU&chdl=1+to+20&cht=lc\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRemaining features to implement:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e lxy line charts\n\u003c/li\u003e\u003cli\u003e chbh bar charts\n\u003c/li\u003e\u003cli\u003e scatter plots\n\u003c/li\u003e\u003cli\u003e background/fill colors\n\u003c/li\u003e\u003cli\u003e all style attributes\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.Google.Chart",
          "name": "Chart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html",
          "type": "module"
        },
        "index": {
          "description": "This module is for generating web-based charts using Google Chart API http code.google.com apis chart Its output is URLs that will resolve to PNG image of the resulting chart Most of the functions in this module with names like setFoo take Chart as an argument and produce new Chart with the specified attribute added These calls are designed to be chained together See the example below Chart are represented as hierarchy of type classes so that parameters that only affect specific chart type are only available to that chart type putStrLn URL for your chart putStrLn chartURL setSize setTitle My Chart setData encodeDataSimple setLegend to newLineChart This produces http chart.apis.google.com chart chs x257 chtt My Chart chd aBCDEFGHIJKLMNOPQRSTU chdl to cht lc Remaining features to implement lxy line charts chbh bar charts scatter plots background fill colors all style attributes",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Chart",
          "package": "GoogleChart",
          "partial": "Chart",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText alignment for labels on an axis.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "AxisAlignment",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#AxisAlignment",
          "type": "data"
        },
        "index": {
          "description": "Text alignment for labels on an axis",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisAlignment",
          "package": "GoogleChart",
          "partial": "Axis Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAxisLabelChart represents charts that can display axis labels.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "AxisLabelChart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#AxisLabelChart",
          "type": "class"
        },
        "index": {
          "description": "AxisLabelChart represents charts that can display axis labels",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisLabelChart",
          "package": "GoogleChart",
          "partial": "Axis Label Chart",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisLabelChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to display an axis.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "AxisType",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#AxisType",
          "type": "data"
        },
        "index": {
          "description": "Where to display an axis",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisType",
          "package": "GoogleChart",
          "partial": "Axis Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:AxisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "BarChart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#BarChart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "BarChart",
          "package": "GoogleChart",
          "partial": "Bar Chart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:BarChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "BarStyle",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#BarStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "BarStyle",
          "package": "GoogleChart",
          "partial": "Bar Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:BarStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class underneath all Charts.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "Chart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#Chart",
          "type": "class"
        },
        "index": {
          "description": "The type class underneath all Charts",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Chart",
          "package": "GoogleChart",
          "partial": "Chart",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:Chart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the encoding methods produce \u003ccode\u003e\u003ca\u003eChartData\u003c/a\u003e\u003c/code\u003e, which is usable by \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "ChartData",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#ChartData",
          "type": "data"
        },
        "index": {
          "description": "All the encoding methods produce ChartData which is usable by setData",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "ChartData",
          "package": "GoogleChart",
          "partial": "Chart Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:ChartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLegendChart represents charts that can display legends with \u003ccode\u003e\u003ca\u003esetLegend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "LegendChart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#LegendChart",
          "type": "class"
        },
        "index": {
          "description": "LegendChart represents charts that can display legends with setLegend",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "LegendChart",
          "package": "GoogleChart",
          "partial": "Legend Chart",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:LegendChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "LineChart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#LineChart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "LineChart",
          "package": "GoogleChart",
          "partial": "Line Chart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:LineChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Orientation",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#Orientation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Orientation",
          "package": "GoogleChart",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "PieChart",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#PieChart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "PieChart",
          "package": "GoogleChart",
          "partial": "Pie Chart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:PieChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "PieStyle",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#PieStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "PieStyle",
          "package": "GoogleChart",
          "partial": "Pie Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:PieStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVenn diagram data is specified in a particular format.  There should be\n exactly seven data values, which represent, in order:\n   circle A size, circle B size, circle C size,\n   A/B overlap, A/C overlap, B/C overlap,\n   A/B/C overlap.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "VennDiagram",
          "package": "GoogleChart",
          "source": "src/Graphics-Google-Chart.html#VennDiagram",
          "type": "data"
        },
        "index": {
          "description": "Venn diagram data is specified in particular format There should be exactly seven data values which represent in order circle size circle size circle size overlap overlap overlap overlap",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "VennDiagram",
          "package": "GoogleChart",
          "partial": "Venn Diagram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#t:VennDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AlignCenter",
          "package": "GoogleChart",
          "signature": "AlignCenter",
          "source": "src/Graphics-Google-Chart.html#AxisAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AlignCenter",
          "package": "GoogleChart",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AlignLeft",
          "package": "GoogleChart",
          "signature": "AlignLeft",
          "source": "src/Graphics-Google-Chart.html#AxisAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AlignLeft",
          "package": "GoogleChart",
          "partial": "Align Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AlignRight",
          "package": "GoogleChart",
          "signature": "AlignRight",
          "source": "src/Graphics-Google-Chart.html#AxisAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AlignRight",
          "package": "GoogleChart",
          "partial": "Align Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AxisBottom",
          "package": "GoogleChart",
          "signature": "AxisBottom",
          "source": "src/Graphics-Google-Chart.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisBottom",
          "package": "GoogleChart",
          "partial": "Axis Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AxisLeft",
          "package": "GoogleChart",
          "signature": "AxisLeft",
          "source": "src/Graphics-Google-Chart.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisLeft",
          "package": "GoogleChart",
          "partial": "Axis Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AxisRight",
          "package": "GoogleChart",
          "signature": "AxisRight",
          "source": "src/Graphics-Google-Chart.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisRight",
          "package": "GoogleChart",
          "partial": "Axis Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "AxisTop",
          "package": "GoogleChart",
          "signature": "AxisTop",
          "source": "src/Graphics-Google-Chart.html#AxisType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "AxisTop",
          "package": "GoogleChart",
          "partial": "Axis Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:AxisTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Grouped",
          "package": "GoogleChart",
          "signature": "Grouped",
          "source": "src/Graphics-Google-Chart.html#BarStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Grouped",
          "package": "GoogleChart",
          "partial": "Grouped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Grouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Horizontal",
          "package": "GoogleChart",
          "signature": "Horizontal",
          "source": "src/Graphics-Google-Chart.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Horizontal",
          "package": "GoogleChart",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Horizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Pie2D",
          "package": "GoogleChart",
          "signature": "Pie2D",
          "source": "src/Graphics-Google-Chart.html#PieStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Pie2D",
          "package": "GoogleChart",
          "partial": "Pie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Pie2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Pie3D",
          "package": "GoogleChart",
          "signature": "Pie3D",
          "source": "src/Graphics-Google-Chart.html#PieStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Pie3D",
          "package": "GoogleChart",
          "partial": "Pie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Pie3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Stacked",
          "package": "GoogleChart",
          "signature": "Stacked",
          "source": "src/Graphics-Google-Chart.html#BarStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Stacked",
          "package": "GoogleChart",
          "partial": "Stacked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Stacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "Vertical",
          "package": "GoogleChart",
          "signature": "Vertical",
          "source": "src/Graphics-Google-Chart.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "Vertical",
          "package": "GoogleChart",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the URL used to show the chart.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "chartURL",
          "package": "GoogleChart",
          "signature": "c -\u003e String",
          "source": "src/Graphics-Google-Chart.html#chartURL",
          "type": "function"
        },
        "index": {
          "description": "Construct the URL used to show the chart",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "chartURL",
          "normalized": "a-\u003eString",
          "package": "GoogleChart",
          "partial": "URL",
          "signature": "c-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:chartURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode data using the \"extended\" encoding, which maps each input value\n to a two-character pair in base 64.  This has more resolution than text\n encoding and is more compact.  Input values must be in the range \u003ccode\u003e0 \u003c= x \u003c=\n 4095\u003c/code\u003e.  Values outside the valid input range will be considered missing\n data.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataExtended",
          "package": "GoogleChart",
          "signature": "[[Int]] -\u003e ChartData",
          "source": "src/Graphics-Google-Chart.html#encodeDataExtended",
          "type": "function"
        },
        "index": {
          "description": "Encode data using the extended encoding which maps each input value to two-character pair in base This has more resolution than text encoding and is more compact Input values must be in the range Values outside the valid input range will be considered missing data",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataExtended",
          "normalized": "[[Int]]-\u003eChartData",
          "package": "GoogleChart",
          "partial": "Data Extended",
          "signature": "[[Int]]-\u003eChartData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode data using the \"simple\" encoding, which maps each input value\n to a single letter in the URL.  This produces minimal URLs but doesn't have\n as lot of resolution.  Input values must be in the range \u003ccode\u003e0 \u003c= x \u003c= 61\u003c/code\u003e.\n Values outside the valid input range will be considered missing data.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataSimple",
          "package": "GoogleChart",
          "signature": "[[Int]] -\u003e ChartData",
          "source": "src/Graphics-Google-Chart.html#encodeDataSimple",
          "type": "function"
        },
        "index": {
          "description": "Encode data using the simple encoding which maps each input value to single letter in the URL This produces minimal URLs but doesn have as lot of resolution Input values must be in the range Values outside the valid input range will be considered missing data",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataSimple",
          "normalized": "[[Int]]-\u003eChartData",
          "package": "GoogleChart",
          "partial": "Data Simple",
          "signature": "[[Int]]-\u003eChartData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode data using the \"text\" encoding, which maps each input value to\n its string representation (e.g. \"3.4\") in the URL.  This has more\n resolution than simple encoding but produces larger URLs.  Input values must\n be in the range \u003ccode\u003e0 \u003c= x \u003c= 100\u003c/code\u003e.  Values outside the valid input range will\n be considered missing data.  Values with more than one decimal place of\n resolution will be rounded.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataText",
          "package": "GoogleChart",
          "signature": "[[a]] -\u003e ChartData",
          "source": "src/Graphics-Google-Chart.html#encodeDataText",
          "type": "function"
        },
        "index": {
          "description": "Encode data using the text encoding which maps each input value to its string representation e.g in the URL This has more resolution than simple encoding but produces larger URLs Input values must be in the range Values outside the valid input range will be considered missing data Values with more than one decimal place of resolution will be rounded",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "encodeDataText",
          "normalized": "[[a]]-\u003eChartData",
          "package": "GoogleChart",
          "partial": "Data Text",
          "signature": "[[a]]-\u003eChartData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:encodeDataText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "newBarChart",
          "package": "GoogleChart",
          "signature": "Orientation -\u003e BarStyle -\u003e BarChart",
          "source": "src/Graphics-Google-Chart.html#newBarChart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "newBarChart",
          "normalized": "Orientation-\u003eBarStyle-\u003eBarChart",
          "package": "GoogleChart",
          "partial": "Bar Chart",
          "signature": "Orientation-\u003eBarStyle-\u003eBarChart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newBarChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "newLineChart",
          "package": "GoogleChart",
          "signature": "LineChart",
          "source": "src/Graphics-Google-Chart.html#newLineChart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "newLineChart",
          "package": "GoogleChart",
          "partial": "Line Chart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newLineChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "newPieChart",
          "package": "GoogleChart",
          "signature": "PieStyle -\u003e PieChart",
          "source": "src/Graphics-Google-Chart.html#newPieChart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "newPieChart",
          "normalized": "PieStyle-\u003ePieChart",
          "package": "GoogleChart",
          "partial": "Pie Chart",
          "signature": "PieStyle-\u003ePieChart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newPieChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Google.Chart",
          "name": "newVennDiagram",
          "package": "GoogleChart",
          "signature": "VennDiagram",
          "source": "src/Graphics-Google-Chart.html#newVennDiagram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "newVennDiagram",
          "package": "GoogleChart",
          "partial": "Venn Diagram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:newVennDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet axis label positions.  The nth list of Ints in the argument sets the\n positions for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  An empty list\n skips setting position for the corresponding axis.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setAxisLabelPositions",
          "package": "GoogleChart",
          "signature": "[[Int]] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setAxisLabelPositions",
          "type": "function"
        },
        "index": {
          "description": "Set axis label positions The nth list of Ints in the argument sets the positions for the nth axis specified with setAxisTypes An empty list skips setting position for the corresponding axis",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setAxisLabelPositions",
          "normalized": "[[Int]]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Axis Label Positions",
          "signature": "[[Int]]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisLabelPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet axis labels.  The nth list of strings in the argument sets the labels\n for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  An empty list of strings\n skips labelling the corresponding axis.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setAxisLabels",
          "package": "GoogleChart",
          "signature": "[[String]] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setAxisLabels",
          "type": "function"
        },
        "index": {
          "description": "Set axis labels The nth list of strings in the argument sets the labels for the nth axis specified with setAxisTypes An empty list of strings skips labelling the corresponding axis",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setAxisLabels",
          "normalized": "[[String]]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Axis Labels",
          "signature": "[[String]]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet axis ranges.  The nth pair of Ints in the argument sets the range\n for the nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setAxisRanges",
          "package": "GoogleChart",
          "signature": "[(Int, Int)] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setAxisRanges",
          "type": "function"
        },
        "index": {
          "description": "Set axis ranges The nth pair of Ints in the argument sets the range for the nth axis specified with setAxisTypes",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setAxisRanges",
          "normalized": "[(Int,Int)]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Axis Ranges",
          "signature": "[(Int,Int)]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet axis styles.  The nth element in the argument sets the style for the\n nth axis specified with \u003ccode\u003e\u003ca\u003esetAxisTypes\u003c/a\u003e\u003c/code\u003e.  Each style is a tuple of\n (color, font size, text alignment).\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setAxisStyles",
          "package": "GoogleChart",
          "signature": "[(String, Int, AxisAlignment)] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setAxisStyles",
          "type": "function"
        },
        "index": {
          "description": "Set axis styles The nth element in the argument sets the style for the nth axis specified with setAxisTypes Each style is tuple of color font size text alignment",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setAxisStyles",
          "normalized": "[(String,Int,AxisAlignment)]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Axis Styles",
          "signature": "[(String,Int,AxisAlignment)]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet which axes to display.  Repeating an \u003ccode\u003e\u003ca\u003eAxisType\u003c/a\u003e\u003c/code\u003e produces multiple\n sets of labels on that axis.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setAxisTypes",
          "package": "GoogleChart",
          "signature": "[AxisType] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setAxisTypes",
          "type": "function"
        },
        "index": {
          "description": "Set which axes to display Repeating an AxisType produces multiple sets of labels on that axis",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setAxisTypes",
          "normalized": "[AxisType]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Axis Types",
          "signature": "[AxisType]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setAxisTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the data displayed by the chart.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setData",
          "package": "GoogleChart",
          "signature": "ChartData -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setData",
          "type": "function"
        },
        "index": {
          "description": "Set the data displayed by the chart",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setData",
          "normalized": "ChartData-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Data",
          "signature": "ChartData-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet data set colors.  The nth color specified here colors the nth data\n set in the \u003ccode\u003e\u003ca\u003eChartData\u003c/a\u003e\u003c/code\u003e passed to \u003ccode\u003e\u003ca\u003esetData\u003c/a\u003e\u003c/code\u003e.  See\n \u003ca\u003ehttp://code.google.com/apis/chart/#line_bar_pie_colors\u003c/a\u003e for more\n information.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setDataColors",
          "package": "GoogleChart",
          "signature": "[String] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setDataColors",
          "type": "function"
        },
        "index": {
          "description": "Set data set colors The nth color specified here colors the nth data set in the ChartData passed to setData See http code.google.com apis chart line bar pie colors for more information",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setDataColors",
          "normalized": "[String]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Data Colors",
          "signature": "[String]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setDataColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet labels for the different data points on the chart.\n Specify missing values by passing an empty string.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setLabels",
          "package": "GoogleChart",
          "signature": "[String] -\u003e PieChart -\u003e PieChart",
          "source": "src/Graphics-Google-Chart.html#setLabels",
          "type": "function"
        },
        "index": {
          "description": "Set labels for the different data points on the chart Specify missing values by passing an empty string",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setLabels",
          "normalized": "[String]-\u003ePieChart-\u003ePieChart",
          "package": "GoogleChart",
          "partial": "Labels",
          "signature": "[String]-\u003ePieChart-\u003ePieChart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the legend for the corresponding data sets.  The colors are taken\n from the data set colors.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setLegend",
          "package": "GoogleChart",
          "signature": "[String] -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setLegend",
          "type": "function"
        },
        "index": {
          "description": "Set the legend for the corresponding data sets The colors are taken from the data set colors",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setLegend",
          "normalized": "[String]-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Legend",
          "signature": "[String]-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the width and height, in pixels, of the resulting image.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setSize",
          "package": "GoogleChart",
          "signature": "Int -\u003e Int -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setSize",
          "type": "function"
        },
        "index": {
          "description": "Set the width and height in pixels of the resulting image",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setSize",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Size",
          "signature": "Int-\u003eInt-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the title of the chart.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setTitle",
          "package": "GoogleChart",
          "signature": "String -\u003e c -\u003e c",
          "source": "src/Graphics-Google-Chart.html#setTitle",
          "type": "function"
        },
        "index": {
          "description": "Set the title of the chart",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setTitle",
          "normalized": "String-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Title",
          "signature": "String-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet options for the display of the title of the chart.\n\u003c/p\u003e",
          "module": "Graphics.Google.Chart",
          "name": "setTitleOpts",
          "package": "GoogleChart",
          "signature": "String-\u003e Int-\u003e c-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Set options for the display of the title of the chart",
          "hierarchy": "Graphics Google Chart",
          "module": "Graphics.Google.Chart",
          "name": "setTitleOpts",
          "normalized": "String-\u003eInt-\u003ea-\u003ea",
          "package": "GoogleChart",
          "partial": "Title Opts",
          "signature": "String-\u003eInt-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GoogleChart/docs/Graphics-Google-Chart.html#v:setTitleOpts"
      }
    }
  ]
]