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
        "word": "hs-gchart"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the Haskell data model for the Google Chart API.\n\u003c/p\u003e\u003cp\u003eMore details about the API and parameters can be found at :\n\u003ca\u003ehttp://code.google.com/apis/chart/image_charts.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSome chart types are not supported yet:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Box Charts \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/compound_charts.html#box_charts\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Candlestick Charts \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/compound_charts.html#candlestick_charts\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Compound Charts \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/compound_charts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Dynamic Icons \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/dynamic_icons.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Map Charts \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/map_charts.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSome parameters are not supported yet:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Text and Data Value Markers \u003ca\u003ehttp://code.google.com/apis/chart/docs/chart_params.html#gcharts_data_point_labels\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Shape offset feature for shape markers  \u003ca\u003ehttp://code.google.com/apis/chart/docs/chart_params.html#gcharts_shape_markers\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Bug in \u003ccode\u003e\u003ca\u003eBarChartWidthSpacing\u003c/a\u003e\u003c/code\u003e. Not fully accurate\n\u003c/li\u003e\u003cli\u003e Modfy FillType to conform to new API \u003ca\u003ehttp://code.google.com/apis/chart/docs/chart_params.html#gcharts_gradient_fills\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Dynamic icon type \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/dynamic_icons.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Geographic area \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/map_charts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Vertical slice filling \u003ca\u003ehttp://code.google.com/apis/chart/docs/chart_params.html#gcharts_line_fills\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Bar chart zero line \u003ca\u003ehttp://code.google.com/apis/chart/docs/gallery/bar_charts.html#chp\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Types",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the Haskell data model for the Google Chart API More details about the API and parameters can be found at http code.google.com apis chart image charts.html Some chart types are not supported yet Box Charts http code.google.com apis chart docs gallery compound charts.html box charts Candlestick Charts http code.google.com apis chart docs gallery compound charts.html candlestick charts Compound Charts http code.google.com apis chart docs gallery compound charts.html Dynamic Icons http code.google.com apis chart docs gallery dynamic icons.html Map Charts http code.google.com apis chart docs gallery map charts.html Some parameters are not supported yet Text and Data Value Markers http code.google.com apis chart docs chart params.html gcharts data point labels Shape offset feature for shape markers http code.google.com apis chart docs chart params.html gcharts shape markers Bug in BarChartWidthSpacing Not fully accurate Modfy FillType to conform to new API http code.google.com apis chart docs chart params.html gcharts gradient fills Dynamic icon type http code.google.com apis chart docs gallery dynamic icons.html Geographic area http code.google.com apis chart docs gallery map charts.html Vertical slice filling http code.google.com apis chart docs chart params.html gcharts line fills Bar chart zero line http code.google.com apis chart docs gallery bar charts.html chp",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Types",
          "package": "hs-gchart",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngle of the gradient between 0 (horizontal) and 90\n (vertical). Applicable to \u003ccode\u003e\u003ca\u003eLinearGradient\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLinearStripes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Angle",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Angle",
          "type": "type"
        },
        "index": {
          "description": "Angle of the gradient between horizontal and vertical Applicable to LinearGradient and LinearStripes",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Angle",
          "package": "hs-gchart",
          "partial": "Angle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type to abstract over all kinds of ChartMarker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AnyChartMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AnyChartMarker",
          "type": "data"
        },
        "index": {
          "description": "Data type to abstract over all kinds of ChartMarker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AnyChartMarker",
          "package": "hs-gchart",
          "partial": "Any Chart Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AnyChartMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisible axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Axis",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "data"
        },
        "index": {
          "description": "Visible axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Axis",
          "package": "hs-gchart",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e Labels.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisLabel",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisLabel",
          "type": "type"
        },
        "index": {
          "description": "Axis Labels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisLabel",
          "package": "hs-gchart",
          "partial": "Axis Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e Label Positions.\n\u003c/p\u003e\u003cp\u003eLabels with a specified position of 0 are placed at the bottom of the y- or\nr-axis, or at the left of the x- or t-axis.\n\u003c/p\u003e\u003cp\u003eLabels with a specified position of 100 are placed at the top of the y- or\nr-axis, or at the right of the x- or t-axis.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisPosition",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisPosition",
          "type": "type"
        },
        "index": {
          "description": "Axis Label Positions Labels with specified position of are placed at the bottom of the or r-axis or at the left of the or t-axis Labels with specified position of are placed at the top of the or r-axis or at the right of the or t-axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisPosition",
          "package": "hs-gchart",
          "partial": "Axis Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e Range\n\u003c/p\u003e\u003cp\u003eThe range is specifies with a tuple containing the start and end values. An\noptional interval value can be specified.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisRange",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisRange",
          "type": "data"
        },
        "index": {
          "description": "Axis Range The range is specifies with tuple containing the start and end values An optional interval value can be specified",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisRange",
          "package": "hs-gchart",
          "partial": "Axis Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e style\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyle",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "data"
        },
        "index": {
          "description": "Axis style",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyle",
          "package": "hs-gchart",
          "partial": "Axis Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e labels. Applies to \u003ccode\u003e\u003ca\u003eAxisStyle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleAlignment",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisStyleAlignment",
          "type": "data"
        },
        "index": {
          "description": "Alignment of Axis labels Applies to AxisStyle",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleAlignment",
          "package": "hs-gchart",
          "partial": "Axis Style Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisStyleAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#AxisType",
          "type": "data"
        },
        "index": {
          "description": "Type of Axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisType",
          "package": "hs-gchart",
          "partial": "Axis Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:AxisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar Width and Spacing.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarChartWidthSpacing",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#BarChartWidthSpacing",
          "type": "type"
        },
        "index": {
          "description": "Bar Width and Spacing",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarChartWidthSpacing",
          "package": "hs-gchart",
          "partial": "Bar Chart Width Spacing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:BarChartWidthSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar and Group Spacing\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarGroupSpacing",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#BarGroupSpacing",
          "type": "data"
        },
        "index": {
          "description": "Bar and Group Spacing",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarGroupSpacing",
          "package": "hs-gchart",
          "partial": "Bar Group Spacing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:BarGroupSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar Width\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarWidth",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#BarWidth",
          "type": "data"
        },
        "index": {
          "description": "Bar Width",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarWidth",
          "package": "hs-gchart",
          "partial": "Bar Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:BarWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Chart",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "data"
        },
        "index": {
          "description": "Data type for the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Chart",
          "package": "hs-gchart",
          "partial": "Chart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Chart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e for chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartAxes",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartAxes",
          "type": "type"
        },
        "index": {
          "description": "List of Axis for chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartAxes",
          "package": "hs-gchart",
          "partial": "Chart Axes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart colors specified as a list of \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e values for each data point.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartColors",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartColors",
          "type": "data"
        },
        "index": {
          "description": "Chart colors specified as list of Color values for each data point",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartColors",
          "package": "hs-gchart",
          "partial": "Chart Colors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart data along with encoding. XY data for is encoded a pair of\n consecutive data sets\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartData",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartData",
          "type": "data"
        },
        "index": {
          "description": "Chart data along with encoding XY data for is encoded pair of consecutive data sets",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartData",
          "package": "hs-gchart",
          "partial": "Chart Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass abstracting the numeric data that can be encoded.\n This helps in passing Int and Float values as chart data, which\n are then encoded correctly\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartDataEncodable",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartDataEncodable",
          "type": "class"
        },
        "index": {
          "description": "Typeclass abstracting the numeric data that can be encoded This helps in passing Int and Float values as chart data which are then encoded correctly",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartDataEncodable",
          "package": "hs-gchart",
          "partial": "Chart Data Encodable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartDataEncodable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of Data scaling values\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartDataScales",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartDataScales",
          "type": "data"
        },
        "index": {
          "description": "List of Data scaling values",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartDataScales",
          "package": "hs-gchart",
          "partial": "Chart Data Scales",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartDataScales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart fills, as a list of \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartFills",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartFills",
          "type": "type"
        },
        "index": {
          "description": "Chart fills as list of Fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartFills",
          "package": "hs-gchart",
          "partial": "Chart Fills",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartFills"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrid Lines for Chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartGrid",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "data"
        },
        "index": {
          "description": "Grid Lines for Chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartGrid",
          "package": "hs-gchart",
          "partial": "Chart Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass abstracting all the fields in a chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartItem",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartItem",
          "type": "class"
        },
        "index": {
          "description": "Typeclass abstracting all the fields in chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartItem",
          "package": "hs-gchart",
          "partial": "Chart Item",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart Label Data. Applies to \u003ccode\u003e\u003ca\u003eQRCode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartLabelData",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartLabelData",
          "type": "data"
        },
        "index": {
          "description": "Chart Label Data Applies to QRCode",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartLabelData",
          "package": "hs-gchart",
          "partial": "Chart Label Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartLabelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels for Pie Chart and Google-o-meter.\n Specify a list with a single label for Google-o-meter\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartLabels",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartLabels",
          "type": "data"
        },
        "index": {
          "description": "Labels for Pie Chart and Google-o-meter Specify list with single label for Google-o-meter",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartLabels",
          "package": "hs-gchart",
          "partial": "Chart Labels",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart legend\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartLegend",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartLegend",
          "type": "data"
        },
        "index": {
          "description": "Chart legend",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartLegend",
          "package": "hs-gchart",
          "partial": "Chart Legend",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartLineStyles",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartLineStyles",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartLineStyles",
          "package": "hs-gchart",
          "partial": "Chart Line Styles",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartLineStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart monad which wraps a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad in turn\n to keep track of the chart state and make it convenient\n to update it\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartM",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartM",
          "type": "type"
        },
        "index": {
          "description": "Chart monad which wraps State monad in turn to keep track of the chart state and make it convenient to update it",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartM",
          "package": "hs-gchart",
          "partial": "Chart",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart Margins. All margin values specified are the minimum margins around\n the plot area, in pixels.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartMargins",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "data"
        },
        "index": {
          "description": "Chart Margins All margin values specified are the minimum margins around the plot area in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartMargins",
          "package": "hs-gchart",
          "partial": "Chart Margins",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartMargins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass to abstract over different chart markers\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartMarker",
          "type": "class"
        },
        "index": {
          "description": "Typeclass to abstract over different chart markers",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartMarker",
          "package": "hs-gchart",
          "partial": "Chart Marker",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartMarkers",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartMarkers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartMarkers",
          "package": "hs-gchart",
          "partial": "Chart Markers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartMarkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the chart. width and height specified in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartSize",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartSize",
          "type": "data"
        },
        "index": {
          "description": "Size of the chart width and height specified in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartSize",
          "package": "hs-gchart",
          "partial": "Chart Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartTitle",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartTitle",
          "type": "data"
        },
        "index": {
          "description": "Title of the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartTitle",
          "package": "hs-gchart",
          "partial": "Chart Title",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart type\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ChartType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "data"
        },
        "index": {
          "description": "Chart type",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartType",
          "package": "hs-gchart",
          "partial": "Chart Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ChartType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor data specified as a hex string\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Color",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Color",
          "type": "type"
        },
        "index": {
          "description": "Color data specified as hex string",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Color",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData scaling expressed as (\u003ccode\u003eseries_min\u003c/code\u003e,\u003ccode\u003eseries_max\u003c/code\u003e). Applies to text encoding only\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataScale",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#DataScale",
          "type": "type"
        },
        "index": {
          "description": "Data scaling expressed as series min series max Applies to text encoding only",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataScale",
          "package": "hs-gchart",
          "partial": "Data Scale",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:DataScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl drawing of \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e. Applicable to \u003ccode\u003e\u003ca\u003eAxisStyle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DrawingControl",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#DrawingControl",
          "type": "data"
        },
        "index": {
          "description": "Control drawing of Axis Applicable to AxisStyle",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DrawingControl",
          "package": "hs-gchart",
          "partial": "Drawing Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:DrawingControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError Correction Level for QR Code\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ErrorCorrectionLevel",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ErrorCorrectionLevel",
          "type": "data"
        },
        "index": {
          "description": "Error Correction Level for QR Code",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ErrorCorrectionLevel",
          "package": "hs-gchart",
          "partial": "Error Correction Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ErrorCorrectionLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor for a chart fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Fill",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Fill",
          "type": "data"
        },
        "index": {
          "description": "Constructor for chart fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Fill",
          "package": "hs-gchart",
          "partial": "Fill",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the kind of fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "FillKind",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#FillKind",
          "type": "data"
        },
        "index": {
          "description": "Specifies the kind of fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "FillKind",
          "package": "hs-gchart",
          "partial": "Fill Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:FillKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the type of fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "FillType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#FillType",
          "type": "data"
        },
        "index": {
          "description": "Specifies the type of fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "FillType",
          "package": "hs-gchart",
          "partial": "Fill Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:FillType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinancial Marker, for line charts and vertical bar charts\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "FinancialMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "data"
        },
        "index": {
          "description": "Financial Marker for line charts and vertical bar charts",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "FinancialMarker",
          "package": "hs-gchart",
          "partial": "Financial Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:FinancialMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont size in pixels. Applicable to \u003ccode\u003e\u003ca\u003eAxisStyle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChartTitle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "FontSize",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#FontSize",
          "type": "type"
        },
        "index": {
          "description": "Font size in pixels Applicable to AxisStyle and ChartTitle",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "FontSize",
          "package": "hs-gchart",
          "partial": "Font Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:FontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition of legend on chart. Applies to \u003ccode\u003e\u003ca\u003eChartLegend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendPosition",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "data"
        },
        "index": {
          "description": "Position of legend on chart Applies to ChartLegend",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendPosition",
          "package": "hs-gchart",
          "partial": "Legend Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LegendPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Fill Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineFillMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LineFillMarker",
          "type": "data"
        },
        "index": {
          "description": "Line Fill Marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineFillMarker",
          "package": "hs-gchart",
          "partial": "Line Fill Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LineFillMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine fill type for \u003ccode\u003eLineFill\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineFillType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LineFillType",
          "type": "data"
        },
        "index": {
          "description": "Line fill type for LineFill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineFillType",
          "package": "hs-gchart",
          "partial": "Line Fill Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LineFillType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "data"
        },
        "index": {
          "description": "Line Marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineMarker",
          "package": "hs-gchart",
          "partial": "Line Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LineMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Style. Applicable for line charts\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineStyle",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LineStyle",
          "type": "data"
        },
        "index": {
          "description": "Line Style Applicable for line charts",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineStyle",
          "package": "hs-gchart",
          "partial": "Line Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich points in a series to use to draw the line.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineWhichPoints",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#LineWhichPoints",
          "type": "data"
        },
        "index": {
          "description": "Which points in series to use to draw the line",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineWhichPoints",
          "package": "hs-gchart",
          "partial": "Line Which Points",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:LineWhichPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData point value of \u003ccode\u003e\u003ca\u003eShapeMarker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "MarkerDataPoint",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "data"
        },
        "index": {
          "description": "Data point value of ShapeMarker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "MarkerDataPoint",
          "package": "hs-gchart",
          "partial": "Marker Data Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:MarkerDataPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies at what point the color is pure. In this parameter, 0 specifies\n the right-most chart position and 1 specifies the left-most chart\n position. Applicable to \u003ccode\u003e\u003ca\u003eLinearGradient\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Offset",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Offset",
          "type": "type"
        },
        "index": {
          "description": "Specifies at what point the color is pure In this parameter specifies the right-most chart position and specifies the left-most chart position Applicable to LinearGradient",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Offset",
          "package": "hs-gchart",
          "partial": "Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePie Chart Orientation. Applicable only to Pie Charts,\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "PieChartOrientation",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#PieChartOrientation",
          "type": "data"
        },
        "index": {
          "description": "Pie Chart Orientation Applicable only to Pie Charts",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "PieChartOrientation",
          "package": "hs-gchart",
          "partial": "Pie Chart Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:PieChartOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQR Code Output Encoding\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "QREncoding",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#QREncoding",
          "type": "data"
        },
        "index": {
          "description": "QR Code Output Encoding",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "QREncoding",
          "package": "hs-gchart",
          "partial": "QREncoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:QREncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#RangeMarker",
          "type": "data"
        },
        "index": {
          "description": "Range Marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarker",
          "package": "hs-gchart",
          "partial": "Range Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:RangeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRangeMarker\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#RangeMarkerType",
          "type": "data"
        },
        "index": {
          "description": "RangeMarker type",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerType",
          "package": "hs-gchart",
          "partial": "Range Marker Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:RangeMarkerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeMarker",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "data"
        },
        "index": {
          "description": "Shape Marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeMarker",
          "package": "hs-gchart",
          "partial": "Shape Marker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ShapeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape type of \u003ccode\u003e\u003ca\u003eShapeMarker\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeType",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "data"
        },
        "index": {
          "description": "Shape type of ShapeMarker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeType",
          "package": "hs-gchart",
          "partial": "Shape Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:ShapeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of the stripe. must be between 0 and 1, where 1 is the full width of\n the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Width",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart-Types.html#Width",
          "type": "type"
        },
        "index": {
          "description": "Width of the stripe must be between and where is the full width of the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Width",
          "package": "hs-gchart",
          "partial": "Width",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "AnyChartMarker",
          "package": "hs-gchart",
          "signature": "AnyChartMarker w",
          "source": "src/Graphics-GChart-Types.html#AnyChartMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AnyChartMarker",
          "package": "hs-gchart",
          "partial": "Any Chart Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AnyChartMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChart area fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Area",
          "package": "hs-gchart",
          "signature": "Area",
          "source": "src/Graphics-GChart-Types.html#FillType",
          "type": "function"
        },
        "index": {
          "description": "Chart area fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Area",
          "package": "hs-gchart",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Area"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatic resizing\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Automatic",
          "package": "hs-gchart",
          "signature": "Automatic",
          "source": "src/Graphics-GChart-Types.html#BarWidth",
          "type": "function"
        },
        "index": {
          "description": "Automatic resizing",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Automatic",
          "package": "hs-gchart",
          "partial": "Automatic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Axis",
          "package": "hs-gchart",
          "signature": "Axis",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Axis",
          "package": "hs-gchart",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Axis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom x-axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisBottom",
          "package": "hs-gchart",
          "signature": "AxisBottom",
          "source": "src/Graphics-GChart-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "description": "Bottom x-axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisBottom",
          "package": "hs-gchart",
          "partial": "Axis Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft y-axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisLeft",
          "package": "hs-gchart",
          "signature": "AxisLeft",
          "source": "src/Graphics-GChart-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "description": "Left y-axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisLeft",
          "package": "hs-gchart",
          "partial": "Axis Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight y-axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisRight",
          "package": "hs-gchart",
          "signature": "AxisRight",
          "source": "src/Graphics-GChart-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "description": "Right y-axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisRight",
          "package": "hs-gchart",
          "partial": "Axis Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentered labels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleCenter",
          "package": "hs-gchart",
          "signature": "AxisStyleCenter",
          "source": "src/Graphics-GChart-Types.html#AxisStyleAlignment",
          "type": "function"
        },
        "index": {
          "description": "Centered labels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleCenter",
          "package": "hs-gchart",
          "partial": "Axis Style Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisStyleCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft aligned labels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleLeft",
          "package": "hs-gchart",
          "signature": "AxisStyleLeft",
          "source": "src/Graphics-GChart-Types.html#AxisStyleAlignment",
          "type": "function"
        },
        "index": {
          "description": "Left aligned labels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleLeft",
          "package": "hs-gchart",
          "partial": "Axis Style Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisStyleLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight aligned labels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleRight",
          "package": "hs-gchart",
          "signature": "AxisStyleRight",
          "source": "src/Graphics-GChart-Types.html#AxisStyleAlignment",
          "type": "function"
        },
        "index": {
          "description": "Right aligned labels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisStyleRight",
          "package": "hs-gchart",
          "partial": "Axis Style Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisStyleRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop x-axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "AxisTop",
          "package": "hs-gchart",
          "signature": "AxisTop",
          "source": "src/Graphics-GChart-Types.html#AxisType",
          "type": "function"
        },
        "index": {
          "description": "Top x-axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "AxisTop",
          "package": "hs-gchart",
          "partial": "Axis Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:AxisTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackground fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Background",
          "package": "hs-gchart",
          "signature": "Background",
          "source": "src/Graphics-GChart-Types.html#FillType",
          "type": "function"
        },
        "index": {
          "description": "Background fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Background",
          "package": "hs-gchart",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal bar chart w/ grouped bars\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarHorizontalGrouped",
          "package": "hs-gchart",
          "signature": "BarHorizontalGrouped",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Horizontal bar chart grouped bars",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarHorizontalGrouped",
          "package": "hs-gchart",
          "partial": "Bar Horizontal Grouped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:BarHorizontalGrouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal bar chart w/ stacked bars\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarHorizontalStacked",
          "package": "hs-gchart",
          "signature": "BarHorizontalStacked",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Horizontal bar chart stacked bars",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarHorizontalStacked",
          "package": "hs-gchart",
          "partial": "Bar Horizontal Stacked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:BarHorizontalStacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical bar chart w/ grouped bars\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarVerticalGrouped",
          "package": "hs-gchart",
          "signature": "BarVerticalGrouped",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Vertical bar chart grouped bars",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarVerticalGrouped",
          "package": "hs-gchart",
          "partial": "Bar Vertical Grouped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:BarVerticalGrouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical bar chart w/ stacked bars\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarVerticalStacked",
          "package": "hs-gchart",
          "signature": "BarVerticalStacked",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Vertical bar chart stacked bars",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarVerticalStacked",
          "package": "hs-gchart",
          "partial": "Bar Vertical Stacked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:BarVerticalStacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBar width in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "BarWidth",
          "package": "hs-gchart",
          "signature": "BarWidth Int",
          "source": "src/Graphics-GChart-Types.html#BarWidth",
          "type": "function"
        },
        "index": {
          "description": "Bar width in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "BarWidth",
          "package": "hs-gchart",
          "partial": "Bar Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:BarWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "CDS",
          "package": "hs-gchart",
          "signature": "CDS [DataScale]",
          "source": "src/Graphics-GChart-Types.html#ChartDataScales",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "CDS",
          "normalized": "CDS[DataScale]",
          "package": "hs-gchart",
          "partial": "CDS",
          "signature": "CDS[DataScale]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:CDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Chart",
          "package": "hs-gchart",
          "signature": "Chart",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Chart",
          "package": "hs-gchart",
          "partial": "Chart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Chart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartColors",
          "package": "hs-gchart",
          "signature": "ChartColors [Color]",
          "source": "src/Graphics-GChart-Types.html#ChartColors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartColors",
          "normalized": "ChartColors[Color]",
          "package": "hs-gchart",
          "partial": "Chart Colors",
          "signature": "ChartColors[Color]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ChartColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartGrid",
          "package": "hs-gchart",
          "signature": "ChartGrid",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartGrid",
          "package": "hs-gchart",
          "partial": "Chart Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ChartGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartLabels",
          "package": "hs-gchart",
          "signature": "ChartLabels [String]",
          "source": "src/Graphics-GChart-Types.html#ChartLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartLabels",
          "normalized": "ChartLabels[String]",
          "package": "hs-gchart",
          "partial": "Chart Labels",
          "signature": "ChartLabels[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ChartLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartMargins",
          "package": "hs-gchart",
          "signature": "ChartMargins",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartMargins",
          "package": "hs-gchart",
          "partial": "Chart Margins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ChartMargins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ChartTitle",
          "package": "hs-gchart",
          "signature": "ChartTitle",
          "source": "src/Graphics-GChart-Types.html#ChartTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ChartTitle",
          "package": "hs-gchart",
          "partial": "Chart Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ChartTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific data point in the dataset. Use a\n decimal value to interpolate between two points\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataPoint",
          "package": "hs-gchart",
          "signature": "DataPoint Float",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "function"
        },
        "index": {
          "description": "specific data point in the dataset Use decimal value to interpolate between two points",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataPoint",
          "package": "hs-gchart",
          "partial": "Data Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DataPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a marker on each data point\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEvery",
          "package": "hs-gchart",
          "signature": "DataPointEvery",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "function"
        },
        "index": {
          "description": "Draw marker on each data point",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEvery",
          "package": "hs-gchart",
          "partial": "Data Point Every",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DataPointEvery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a marker on every n-th data point\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEveryN",
          "package": "hs-gchart",
          "signature": "DataPointEveryN Int",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "function"
        },
        "index": {
          "description": "Draw marker on every n-th data point",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEveryN",
          "package": "hs-gchart",
          "partial": "Data Point Every",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DataPointEveryN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(x,y), n\u003c/code\u003e draw a marker on every n-th\n data point in a range, where x is the\n first data point in the range, and y is\n the last data point in the range\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEveryNRange",
          "package": "hs-gchart",
          "signature": "DataPointEveryNRange (Int, Int) Int",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "function"
        },
        "index": {
          "description": "draw marker on every n-th data point in range where is the first data point in the range and is the last data point in the range",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataPointEveryNRange",
          "normalized": "DataPointEveryNRange(Int,Int)Int",
          "package": "hs-gchart",
          "partial": "Data Point Every NRange",
          "signature": "DataPointEveryNRange(Int,Int)Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DataPointEveryNRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edraw a marker at a specific point\n (x,y). Specify the coordinates as floating\n point values, where 0:0 is the bottom left\n corner of the chart, 0.5:0.5 is the center of\n the chart, and 1:1 is the top right corner of\n the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DataPointXY",
          "package": "hs-gchart",
          "signature": "DataPointXY (Float, Float)",
          "source": "src/Graphics-GChart-Types.html#MarkerDataPoint",
          "type": "function"
        },
        "index": {
          "description": "draw marker at specific point Specify the coordinates as floating point values where is the bottom left corner of the chart is the center of the chart and is the top right corner of the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DataPointXY",
          "normalized": "DataPointXY(Float,Float)",
          "package": "hs-gchart",
          "partial": "Data Point XY",
          "signature": "DataPointXY(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DataPointXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw axis lines only\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DrawLines",
          "package": "hs-gchart",
          "signature": "DrawLines",
          "source": "src/Graphics-GChart-Types.html#DrawingControl",
          "type": "function"
        },
        "index": {
          "description": "Draw axis lines only",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DrawLines",
          "package": "hs-gchart",
          "partial": "Draw Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DrawLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw axis lines and tick marks\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DrawLinesTicks",
          "package": "hs-gchart",
          "signature": "DrawLinesTicks",
          "source": "src/Graphics-GChart-Types.html#DrawingControl",
          "type": "function"
        },
        "index": {
          "description": "Draw axis lines and tick marks",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DrawLinesTicks",
          "package": "hs-gchart",
          "partial": "Draw Lines Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DrawLinesTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw tick marks only\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "DrawTicks",
          "package": "hs-gchart",
          "signature": "DrawTicks",
          "source": "src/Graphics-GChart-Types.html#DrawingControl",
          "type": "function"
        },
        "index": {
          "description": "Draw tick marks only",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "DrawTicks",
          "package": "hs-gchart",
          "partial": "Draw Ticks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:DrawTicks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elets you specify integer values from 0-4095, inclusive\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Extended",
          "package": "hs-gchart",
          "signature": "Extended [[Int]]",
          "source": "src/Graphics-GChart-Types.html#ChartData",
          "type": "function"
        },
        "index": {
          "description": "lets you specify integer values from inclusive",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Extended",
          "normalized": "Extended[[Int]]",
          "package": "hs-gchart",
          "partial": "Extended",
          "signature": "Extended[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "FM",
          "package": "hs-gchart",
          "signature": "FM",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "FM",
          "package": "hs-gchart",
          "partial": "FM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:FM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Fill",
          "package": "hs-gchart",
          "signature": "Fill FillKind FillType",
          "source": "src/Graphics-GChart-Types.html#Fill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Fill",
          "package": "hs-gchart",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed spacing values in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Fixed",
          "package": "hs-gchart",
          "signature": "Fixed (Int, Int)",
          "source": "src/Graphics-GChart-Types.html#BarGroupSpacing",
          "type": "function"
        },
        "index": {
          "description": "Fixed spacing values in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Fixed",
          "normalized": "Fixed(Int,Int)",
          "package": "hs-gchart",
          "partial": "Fixed",
          "signature": "Fixed(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormula Chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Formula",
          "package": "hs-gchart",
          "signature": "Formula",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Formula Chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Formula",
          "package": "hs-gchart",
          "partial": "Formula",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Formula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoogle-o-meter\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "GoogleOMeter",
          "package": "hs-gchart",
          "signature": "GoogleOMeter",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Google-o-meter",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "GoogleOMeter",
          "package": "hs-gchart",
          "partial": "Google OMeter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:GoogleOMeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecovery of up to 30% data loss\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "H'",
          "package": "hs-gchart",
          "signature": "H'",
          "source": "src/Graphics-GChart-Types.html#ErrorCorrectionLevel",
          "type": "function"
        },
        "index": {
          "description": "recovery of up to data loss",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "H'",
          "package": "hs-gchart",
          "partial": "H'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:H-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal line across the chart at specified height\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "HorizontalLine",
          "package": "hs-gchart",
          "signature": "HorizontalLine",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Horizontal line across the chart at specified height",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "HorizontalLine",
          "package": "hs-gchart",
          "partial": "Horizontal Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:HorizontalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal line through the specified data marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "HorizontalLineFull",
          "package": "hs-gchart",
          "signature": "HorizontalLineFull",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Horizontal line through the specified data marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "HorizontalLineFull",
          "package": "hs-gchart",
          "partial": "Horizontal Line Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:HorizontalLineFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "ISO8859_1",
          "package": "hs-gchart",
          "signature": "ISO8859_1",
          "source": "src/Graphics-GChart-Types.html#QREncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ISO8859_1",
          "package": "hs-gchart",
          "partial": "ISO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ISO8859_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecovery of up to 7% data loss\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "L'",
          "package": "hs-gchart",
          "signature": "L'",
          "source": "src/Graphics-GChart-Types.html#ErrorCorrectionLevel",
          "type": "function"
        },
        "index": {
          "description": "recovery of up to data loss",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "L'",
          "package": "hs-gchart",
          "partial": "L'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:L-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "LM",
          "package": "hs-gchart",
          "signature": "LM",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LM",
          "package": "hs-gchart",
          "partial": "LM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "LS",
          "package": "hs-gchart",
          "signature": "LS",
          "source": "src/Graphics-GChart-Types.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LS",
          "package": "hs-gchart",
          "partial": "LS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Legend",
          "package": "hs-gchart",
          "signature": "Legend [String] (Maybe LegendPosition)",
          "source": "src/Graphics-GChart-Types.html#ChartLegend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Legend",
          "normalized": "Legend[String](Maybe LegendPosition)",
          "package": "hs-gchart",
          "partial": "Legend",
          "signature": "Legend[String](Maybe LegendPosition)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom of chart, horizontally\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendBottom",
          "package": "hs-gchart",
          "signature": "LegendBottom",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Bottom of chart horizontally",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendBottom",
          "package": "hs-gchart",
          "partial": "Legend Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight of chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendLeft",
          "package": "hs-gchart",
          "signature": "LegendLeft",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Right of chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendLeft",
          "package": "hs-gchart",
          "partial": "Legend Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft of chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendRight",
          "package": "hs-gchart",
          "signature": "LegendRight",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Left of chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendRight",
          "package": "hs-gchart",
          "partial": "Legend Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop of chart, horizontally\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendTop",
          "package": "hs-gchart",
          "signature": "LegendTop",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Top of chart horizontally",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendTop",
          "package": "hs-gchart",
          "partial": "Legend Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom of chart, vertically\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendVBottom",
          "package": "hs-gchart",
          "signature": "LegendVBottom",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Bottom of chart vertically",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendVBottom",
          "package": "hs-gchart",
          "partial": "Legend VBottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendVBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom of chart, vertically\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LegendVTop",
          "package": "hs-gchart",
          "signature": "LegendVTop",
          "source": "src/Graphics-GChart-Types.html#LegendPosition",
          "type": "function"
        },
        "index": {
          "description": "Bottom of chart vertically",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LegendVTop",
          "package": "hs-gchart",
          "partial": "Legend VTop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LegendVTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Line",
          "package": "hs-gchart",
          "signature": "Line",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Line Chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Line",
          "package": "hs-gchart",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine fill between a start index and end index\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineFillBetween",
          "package": "hs-gchart",
          "signature": "LineFillBetween Int Int",
          "source": "src/Graphics-GChart-Types.html#LineFillType",
          "type": "function"
        },
        "index": {
          "description": "Line fill between start index and end index",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineFillBetween",
          "package": "hs-gchart",
          "partial": "Line Fill Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LineFillBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine fill starting from a start index\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineFillFrom",
          "package": "hs-gchart",
          "signature": "LineFillFrom Int",
          "source": "src/Graphics-GChart-Types.html#LineFillType",
          "type": "function"
        },
        "index": {
          "description": "Line fill starting from start index",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineFillFrom",
          "package": "hs-gchart",
          "partial": "Line Fill From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LineFillFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "LineFillMarker",
          "package": "hs-gchart",
          "signature": "LineFillMarker LineFillType Color",
          "source": "src/Graphics-GChart-Types.html#LineFillMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineFillMarker",
          "package": "hs-gchart",
          "partial": "Line Fill Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LineFillMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Chart w/ XY co-ordinates\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LineXY",
          "package": "hs-gchart",
          "signature": "LineXY",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Line Chart XY co-ordinates",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LineXY",
          "package": "hs-gchart",
          "partial": "Line XY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LineXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear Gradient\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LinearGradient",
          "package": "hs-gchart",
          "signature": "LinearGradient Angle [(Color, Offset)]",
          "source": "src/Graphics-GChart-Types.html#FillKind",
          "type": "function"
        },
        "index": {
          "description": "Linear Gradient",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LinearGradient",
          "normalized": "LinearGradient Angle[(Color,Offset)]",
          "package": "hs-gchart",
          "partial": "Linear Gradient",
          "signature": "LinearGradient Angle[(Color,Offset)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LinearGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear Stripes\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "LinearStripes",
          "package": "hs-gchart",
          "signature": "LinearStripes Angle [(Color, Width)]",
          "source": "src/Graphics-GChart-Types.html#FillKind",
          "type": "function"
        },
        "index": {
          "description": "Linear Stripes",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "LinearStripes",
          "normalized": "LinearStripes Angle[(Color,Width)]",
          "package": "hs-gchart",
          "partial": "Linear Stripes",
          "signature": "LinearStripes Angle[(Color,Width)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:LinearStripes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecovery of up to 15% data loss\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "M'",
          "package": "hs-gchart",
          "signature": "M'",
          "source": "src/Graphics-GChart-Types.html#ErrorCorrectionLevel",
          "type": "function"
        },
        "index": {
          "description": "recovery of up to data loss",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "M'",
          "package": "hs-gchart",
          "partial": "M'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:M-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "PCO",
          "package": "hs-gchart",
          "signature": "PCO Float",
          "source": "src/Graphics-GChart-Types.html#PieChartOrientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "PCO",
          "package": "hs-gchart",
          "partial": "PCO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:PCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo dimensional pie chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Pie",
          "package": "hs-gchart",
          "signature": "Pie",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Two dimensional pie chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Pie",
          "package": "hs-gchart",
          "partial": "Pie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Pie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree dimensional pie chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Pie3D",
          "package": "hs-gchart",
          "signature": "Pie3D",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Three dimensional pie chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Pie3D",
          "package": "hs-gchart",
          "partial": "Pie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Pie3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcentric pie chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "PieConcentric",
          "package": "hs-gchart",
          "signature": "PieConcentric",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Concentric pie chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "PieConcentric",
          "package": "hs-gchart",
          "partial": "Pie Concentric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:PieConcentric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(start,end) indicating a specific range of points\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Points",
          "package": "hs-gchart",
          "signature": "Points (Maybe Float, Maybe Float)",
          "source": "src/Graphics-GChart-Types.html#LineWhichPoints",
          "type": "function"
        },
        "index": {
          "description": "start end indicating specific range of points",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Points",
          "normalized": "Points(Maybe Float,Maybe Float)",
          "package": "hs-gchart",
          "partial": "Points",
          "signature": "Points(Maybe Float,Maybe Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse all the points in the series.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "PointsAll",
          "package": "hs-gchart",
          "signature": "PointsAll",
          "source": "src/Graphics-GChart-Types.html#LineWhichPoints",
          "type": "function"
        },
        "index": {
          "description": "Use all the points in the series",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "PointsAll",
          "package": "hs-gchart",
          "partial": "Points All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:PointsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecovery of up to 25% data loss\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Q'",
          "package": "hs-gchart",
          "signature": "Q'",
          "source": "src/Graphics-GChart-Types.html#ErrorCorrectionLevel",
          "type": "function"
        },
        "index": {
          "description": "recovery of up to data loss",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Q'",
          "package": "hs-gchart",
          "partial": "Q'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Q-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQR Codes\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "QRCode",
          "package": "hs-gchart",
          "signature": "QRCode",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "QR Codes",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "QRCode",
          "package": "hs-gchart",
          "partial": "QRCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:QRCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError Correction Level and Margin (as no. of rows)\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "QRLabelData",
          "package": "hs-gchart",
          "signature": "QRLabelData ErrorCorrectionLevel Int",
          "source": "src/Graphics-GChart-Types.html#ChartLabelData",
          "type": "function"
        },
        "index": {
          "description": "Error Correction Level and Margin as no of rows",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "QRLabelData",
          "package": "hs-gchart",
          "partial": "QRLabel Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:QRLabelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "RM",
          "package": "hs-gchart",
          "signature": "RM",
          "source": "src/Graphics-GChart-Types.html#RangeMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RM",
          "package": "hs-gchart",
          "partial": "RM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:RM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadar Chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Radar",
          "package": "hs-gchart",
          "signature": "Radar",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Radar Chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Radar",
          "package": "hs-gchart",
          "partial": "Radar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Radar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadar Chart, connects points with curved lines\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "RadarCurvedLines",
          "package": "hs-gchart",
          "signature": "RadarCurvedLines",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Radar Chart connects points with curved lines",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RadarCurvedLines",
          "package": "hs-gchart",
          "partial": "Radar Curved Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:RadarCurvedLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Range",
          "package": "hs-gchart",
          "signature": "Range (Float, Float) (Maybe Float)",
          "source": "src/Graphics-GChart-Types.html#AxisRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Range",
          "normalized": "Range(Float,Float)(Maybe Float)",
          "package": "hs-gchart",
          "partial": "Range",
          "signature": "Range(Float,Float)(Maybe Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehorizontal range\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerHorizontal",
          "package": "hs-gchart",
          "signature": "RangeMarkerHorizontal",
          "source": "src/Graphics-GChart-Types.html#RangeMarkerType",
          "type": "function"
        },
        "index": {
          "description": "horizontal range",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerHorizontal",
          "package": "hs-gchart",
          "partial": "Range Marker Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:RangeMarkerHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evertical range\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerVertical",
          "package": "hs-gchart",
          "signature": "RangeMarkerVertical",
          "source": "src/Graphics-GChart-Types.html#RangeMarkerType",
          "type": "function"
        },
        "index": {
          "description": "vertical range",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "RangeMarkerVertical",
          "package": "hs-gchart",
          "partial": "Range Marker Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:RangeMarkerVertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative values as percentages\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Relative",
          "package": "hs-gchart",
          "signature": "Relative (Float, Float)",
          "source": "src/Graphics-GChart-Types.html#BarGroupSpacing",
          "type": "function"
        },
        "index": {
          "description": "Relative values as percentages",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Relative",
          "normalized": "Relative(Float,Float)",
          "package": "hs-gchart",
          "partial": "Relative",
          "signature": "Relative(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "SM",
          "package": "hs-gchart",
          "signature": "SM",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "SM",
          "package": "hs-gchart",
          "partial": "SM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:SM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScatter Plot\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ScatterPlot",
          "package": "hs-gchart",
          "signature": "ScatterPlot",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Scatter Plot",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ScatterPlot",
          "package": "hs-gchart",
          "partial": "Scatter Plot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ScatterPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrow\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeArrow",
          "package": "hs-gchart",
          "signature": "ShapeArrow",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Arrow",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeArrow",
          "package": "hs-gchart",
          "partial": "Shape Arrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircle\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeCircle",
          "package": "hs-gchart",
          "signature": "ShapeCircle",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Circle",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeCircle",
          "package": "hs-gchart",
          "partial": "Shape Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeCross",
          "package": "hs-gchart",
          "signature": "ShapeCross",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Cross",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeCross",
          "package": "hs-gchart",
          "partial": "Shape Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiamond\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeDiamond",
          "package": "hs-gchart",
          "signature": "ShapeDiamond",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Diamond",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeDiamond",
          "package": "hs-gchart",
          "partial": "Shape Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError Bar Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeErrorBarMarker",
          "package": "hs-gchart",
          "signature": "ShapeErrorBarMarker",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Error Bar Marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeErrorBarMarker",
          "package": "hs-gchart",
          "partial": "Shape Error Bar Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeErrorBarMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRectangle\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeRectangle",
          "package": "hs-gchart",
          "signature": "ShapeRectangle",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Rectangle",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeRectangle",
          "package": "hs-gchart",
          "partial": "Shape Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquare\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeSquare",
          "package": "hs-gchart",
          "signature": "ShapeSquare",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Square",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeSquare",
          "package": "hs-gchart",
          "partial": "Shape Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX shape\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "ShapeX",
          "package": "hs-gchart",
          "signature": "ShapeX",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "shape",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "ShapeX",
          "package": "hs-gchart",
          "partial": "Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:ShapeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Shift_JIS",
          "package": "hs-gchart",
          "signature": "Shift_JIS",
          "source": "src/Graphics-GChart-Types.html#QREncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Shift_JIS",
          "package": "hs-gchart",
          "partial": "Shift JIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Shift_JIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elets you specify integer values from 0-61, inclusive\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Simple",
          "package": "hs-gchart",
          "signature": "Simple [[Int]]",
          "source": "src/Graphics-GChart-Types.html#ChartData",
          "type": "function"
        },
        "index": {
          "description": "lets you specify integer values from inclusive",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Simple",
          "normalized": "Simple[[Int]]",
          "package": "hs-gchart",
          "partial": "Simple",
          "signature": "Simple[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Size",
          "package": "hs-gchart",
          "signature": "Size Int Int",
          "source": "src/Graphics-GChart-Types.html#ChartSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Size",
          "package": "hs-gchart",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolid Fill\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Solid",
          "package": "hs-gchart",
          "signature": "Solid Color",
          "source": "src/Graphics-GChart-Types.html#FillKind",
          "type": "function"
        },
        "index": {
          "description": "Solid Fill",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Solid",
          "package": "hs-gchart",
          "partial": "Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSparklines\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Sparklines",
          "package": "hs-gchart",
          "signature": "Sparklines",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Sparklines",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Sparklines",
          "package": "hs-gchart",
          "partial": "Sparklines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Sparklines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "Style",
          "package": "hs-gchart",
          "signature": "Style",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Style",
          "package": "hs-gchart",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esupports floating point numbers from 0-100, inclusive\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Text",
          "package": "hs-gchart",
          "signature": "Text [[Float]]",
          "source": "src/Graphics-GChart-Types.html#ChartData",
          "type": "function"
        },
        "index": {
          "description": "supports floating point numbers from inclusive",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Text",
          "normalized": "Text[[Float]]",
          "package": "hs-gchart",
          "partial": "Text",
          "signature": "Text[[Float]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply transparency to whole chart (applicable to \u003ccode\u003e\u003ca\u003eSolid\u003c/a\u003e\u003c/code\u003e fill only)\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Transparent",
          "package": "hs-gchart",
          "signature": "Transparent",
          "source": "src/Graphics-GChart-Types.html#FillType",
          "type": "function"
        },
        "index": {
          "description": "Apply transparency to whole chart applicable to Solid fill only",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Transparent",
          "package": "hs-gchart",
          "partial": "Transparent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "UTF8",
          "package": "hs-gchart",
          "signature": "UTF8",
          "source": "src/Graphics-GChart-Types.html#QREncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "UTF8",
          "package": "hs-gchart",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVenn Diagram\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "Venn",
          "package": "hs-gchart",
          "signature": "Venn",
          "source": "src/Graphics-GChart-Types.html#ChartType",
          "type": "function"
        },
        "index": {
          "description": "Venn Diagram",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "Venn",
          "package": "hs-gchart",
          "partial": "Venn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:Venn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical line from x-axis to data point\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "VerticalLine",
          "package": "hs-gchart",
          "signature": "VerticalLine",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Vertical line from x-axis to data point",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "VerticalLine",
          "package": "hs-gchart",
          "partial": "Vertical Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:VerticalLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical line across the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "VerticalLineFull",
          "package": "hs-gchart",
          "signature": "VerticalLineFull",
          "source": "src/Graphics-GChart-Types.html#ShapeType",
          "type": "function"
        },
        "index": {
          "description": "Vertical line across the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "VerticalLineFull",
          "package": "hs-gchart",
          "partial": "Vertical Line Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:VerticalLineFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the array of numeric data to the existing chart data.\n Throws a error if the data passed in doesnt match with the\n current data encoding format.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "addEncodedChartData",
          "package": "hs-gchart",
          "signature": "[a] -\u003e ChartData -\u003e ChartData",
          "source": "src/Graphics-GChart-Types.html#addEncodedChartData",
          "type": "method"
        },
        "index": {
          "description": "Adds the array of numeric data to the existing chart data Throws error if the data passed in doesnt match with the current data encoding format",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "addEncodedChartData",
          "normalized": "[a]-\u003eChartData-\u003eChartData",
          "package": "hs-gchart",
          "partial": "Encoded Chart Data",
          "signature": "[a]-\u003eChartData-\u003eChartData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:addEncodedChartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisColor",
          "package": "hs-gchart",
          "signature": "Color",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisColor",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisDrawingControl",
          "package": "hs-gchart",
          "signature": "Maybe DrawingControl",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisDrawingControl",
          "package": "hs-gchart",
          "partial": "Drawing Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisDrawingControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisFontSize",
          "package": "hs-gchart",
          "signature": "Maybe FontSize",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisFontSize",
          "package": "hs-gchart",
          "partial": "Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisLabels",
          "package": "hs-gchart",
          "signature": "Maybe [AxisLabel]",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisLabels",
          "normalized": "Maybe[AxisLabel]",
          "package": "hs-gchart",
          "partial": "Labels",
          "signature": "Maybe[AxisLabel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisPositions",
          "package": "hs-gchart",
          "signature": "Maybe [AxisPosition]",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisPositions",
          "normalized": "Maybe[AxisPosition]",
          "package": "hs-gchart",
          "partial": "Positions",
          "signature": "Maybe[AxisPosition]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisRange",
          "package": "hs-gchart",
          "signature": "Maybe AxisRange",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisRange",
          "package": "hs-gchart",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisStyle",
          "package": "hs-gchart",
          "signature": "Maybe AxisStyle",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisStyle",
          "package": "hs-gchart",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisStyleAlign",
          "package": "hs-gchart",
          "signature": "Maybe AxisStyleAlignment",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisStyleAlign",
          "package": "hs-gchart",
          "partial": "Style Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisStyleAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "axisType",
          "package": "hs-gchart",
          "signature": "AxisType",
          "source": "src/Graphics-GChart-Types.html#Axis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "axisType",
          "package": "hs-gchart",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:axisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "barChartWidthSpacing",
          "package": "hs-gchart",
          "signature": "Maybe BarChartWidthSpacing",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "barChartWidthSpacing",
          "package": "hs-gchart",
          "partial": "Chart Width Spacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:barChartWidthSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elength of blank segment\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "blankSegmentLength",
          "package": "hs-gchart",
          "signature": "Maybe Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "length of blank segment",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "blankSegmentLength",
          "package": "hs-gchart",
          "partial": "Segment Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:blankSegmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBottom margin around plot area\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "bottomMargin",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "description": "Bottom margin around plot area",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "bottomMargin",
          "package": "hs-gchart",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:bottomMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartAxes",
          "package": "hs-gchart",
          "signature": "Maybe ChartAxes",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartAxes",
          "package": "hs-gchart",
          "partial": "Axes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartAxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartColors",
          "package": "hs-gchart",
          "signature": "Maybe ChartColors",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartColors",
          "package": "hs-gchart",
          "partial": "Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartData",
          "package": "hs-gchart",
          "signature": "Maybe ChartData",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartData",
          "package": "hs-gchart",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartDataScales",
          "package": "hs-gchart",
          "signature": "Maybe ChartDataScales",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartDataScales",
          "package": "hs-gchart",
          "partial": "Data Scales",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartDataScales"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartFills",
          "package": "hs-gchart",
          "signature": "Maybe ChartFills",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartFills",
          "package": "hs-gchart",
          "partial": "Fills",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartFills"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartGrid",
          "package": "hs-gchart",
          "signature": "Maybe ChartGrid",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartGrid",
          "package": "hs-gchart",
          "partial": "Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartLabelData",
          "package": "hs-gchart",
          "signature": "Maybe ChartLabelData",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartLabelData",
          "package": "hs-gchart",
          "partial": "Label Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartLabelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartLabels",
          "package": "hs-gchart",
          "signature": "Maybe ChartLabels",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartLabels",
          "package": "hs-gchart",
          "partial": "Labels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartLegend",
          "package": "hs-gchart",
          "signature": "Maybe ChartLegend",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartLegend",
          "package": "hs-gchart",
          "partial": "Legend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartLineStyles",
          "package": "hs-gchart",
          "signature": "Maybe ChartLineStyles",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartLineStyles",
          "package": "hs-gchart",
          "partial": "Line Styles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartLineStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartMargins",
          "package": "hs-gchart",
          "signature": "Maybe ChartMargins",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartMargins",
          "package": "hs-gchart",
          "partial": "Margins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartMargins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartMarkers",
          "package": "hs-gchart",
          "signature": "Maybe ChartMarkers",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartMarkers",
          "package": "hs-gchart",
          "partial": "Markers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartMarkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartSize",
          "package": "hs-gchart",
          "signature": "Maybe ChartSize",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartSize",
          "package": "hs-gchart",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartTitle",
          "package": "hs-gchart",
          "signature": "Maybe ChartTitle",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartTitle",
          "package": "hs-gchart",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "chartType",
          "package": "hs-gchart",
          "signature": "ChartType",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "chartType",
          "package": "hs-gchart",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:chartType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for an axis\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultAxis",
          "package": "hs-gchart",
          "signature": "Axis",
          "source": "src/Graphics-GChart-Types.html#defaultAxis",
          "type": "function"
        },
        "index": {
          "description": "Default value for an axis",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultAxis",
          "package": "hs-gchart",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for a chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultChart",
          "package": "hs-gchart",
          "signature": "Chart",
          "source": "src/Graphics-GChart-Types.html#defaultChart",
          "type": "function"
        },
        "index": {
          "description": "Default value for chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultChart",
          "package": "hs-gchart",
          "partial": "Chart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultChart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value of a financial marker. Make sure you change the value of \u003ccode\u003efinanceDataSetIdx\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultFinancialMarker",
          "package": "hs-gchart",
          "signature": "FinancialMarker",
          "source": "src/Graphics-GChart-Types.html#defaultFinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Default value of financial marker Make sure you change the value of financeDataSetIdx",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultFinancialMarker",
          "package": "hs-gchart",
          "partial": "Financial Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultFinancialMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for a chart grid\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultGrid",
          "package": "hs-gchart",
          "signature": "ChartGrid",
          "source": "src/Graphics-GChart-Types.html#defaultGrid",
          "type": "function"
        },
        "index": {
          "description": "Default value for chart grid",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultGrid",
          "package": "hs-gchart",
          "partial": "Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value of a line marker. Make sure you change the value of \u003ccode\u003elineDataSetIdx\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultLineMarker",
          "package": "hs-gchart",
          "signature": "LineMarker",
          "source": "src/Graphics-GChart-Types.html#defaultLineMarker",
          "type": "function"
        },
        "index": {
          "description": "Default value of line marker Make sure you change the value of lineDataSetIdx",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultLineMarker",
          "package": "hs-gchart",
          "partial": "Line Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultLineMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value of a line style\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultLineStyle",
          "package": "hs-gchart",
          "signature": "LineStyle",
          "source": "src/Graphics-GChart-Types.html#defaultLineStyle",
          "type": "function"
        },
        "index": {
          "description": "Default value of line style",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultLineStyle",
          "package": "hs-gchart",
          "partial": "Line Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultLineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault chart label data for QR Encoding\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultQREncodingLabelData",
          "package": "hs-gchart",
          "signature": "ChartLabelData",
          "source": "src/Graphics-GChart-Types.html#defaultQREncodingLabelData",
          "type": "function"
        },
        "index": {
          "description": "Default chart label data for QR Encoding",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultQREncodingLabelData",
          "package": "hs-gchart",
          "partial": "QREncoding Label Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultQREncodingLabelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value of range marker\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultRangeMarker",
          "package": "hs-gchart",
          "signature": "RangeMarker",
          "source": "src/Graphics-GChart-Types.html#defaultRangeMarker",
          "type": "function"
        },
        "index": {
          "description": "Default value of range marker",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultRangeMarker",
          "package": "hs-gchart",
          "partial": "Range Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultRangeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value of a shape marker. Make sure you change the value of \u003ccode\u003eshapeDataSetIdx\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultShapeMarker",
          "package": "hs-gchart",
          "signature": "ShapeMarker",
          "source": "src/Graphics-GChart-Types.html#defaultShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Default value of shape marker Make sure you change the value of shapeDataSetIdx",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultShapeMarker",
          "package": "hs-gchart",
          "partial": "Shape Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultShapeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value for bar and group spacing in bar chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "defaultSpacing",
          "package": "hs-gchart",
          "signature": "BarGroupSpacing",
          "source": "src/Graphics-GChart-Types.html#defaultSpacing",
          "type": "function"
        },
        "index": {
          "description": "Default value for bar and group spacing in bar chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "defaultSpacing",
          "package": "hs-gchart",
          "partial": "Spacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:defaultSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode the field into a list string params that can\n then be converted into a query string URL\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "encode",
          "package": "hs-gchart",
          "signature": "c -\u003e [(String, String)]",
          "source": "src/Graphics-GChart-Types.html#encode",
          "type": "method"
        },
        "index": {
          "description": "encode the field into list string params that can then be converted into query string URL",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "encode",
          "normalized": "a-\u003e[(String,String)]",
          "package": "hs-gchart",
          "signature": "c-\u003e[(String,String)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "encodeChartMarker",
          "package": "hs-gchart",
          "signature": "a -\u003e String",
          "source": "src/Graphics-GChart-Types.html#encodeChartMarker",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "encodeChartMarker",
          "normalized": "a-\u003eString",
          "package": "hs-gchart",
          "partial": "Chart Marker",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:encodeChartMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinance Marker color\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "financeColor",
          "package": "hs-gchart",
          "signature": "Color",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Finance Marker color",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "financeColor",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:financeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData point value\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "financeDataPoint",
          "package": "hs-gchart",
          "signature": "MarkerDataPoint",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Data point value",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "financeDataPoint",
          "package": "hs-gchart",
          "partial": "Data Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:financeDataPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData Set Index\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "financeDataSetIdx",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Data Set Index",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "financeDataSetIdx",
          "package": "hs-gchart",
          "partial": "Data Set Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:financeDataSetIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriority of drawing. Can be one of -1,0,1\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "financePriority",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Priority of drawing Can be one of",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "financePriority",
          "package": "hs-gchart",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:financePriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "financeSize",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#FinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Size in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "financeSize",
          "package": "hs-gchart",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:financeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft margin around plot area\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "leftMargin",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "description": "Left margin around plot area",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "leftMargin",
          "package": "hs-gchart",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:leftMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum width and height  of legend\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "legendMargins",
          "package": "hs-gchart",
          "signature": "Maybe (Int, Int)",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "description": "Minimum width and height of legend",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "legendMargins",
          "normalized": "Maybe(Int,Int)",
          "package": "hs-gchart",
          "partial": "Margins",
          "signature": "Maybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:legendMargins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Marker Color\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineColor",
          "package": "hs-gchart",
          "signature": "Color",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "description": "Line Marker Color",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineColor",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData set index\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineDataSetIdx",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "description": "Data set index",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineDataSetIdx",
          "package": "hs-gchart",
          "partial": "Data Set Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineDataSetIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elength of line segment\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineSegmentLength",
          "package": "hs-gchart",
          "signature": "Maybe Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "length of line segment",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineSegmentLength",
          "package": "hs-gchart",
          "partial": "Segment Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineSegmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of line in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineSize",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "description": "Width of line in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineSize",
          "package": "hs-gchart",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of Blank Segment\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleBlankSegment",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#LineStyle",
          "type": "function"
        },
        "index": {
          "description": "Length of Blank Segment",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleBlankSegment",
          "package": "hs-gchart",
          "partial": "Style Blank Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineStyleBlankSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of Line Segment\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleLineSegment",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#LineStyle",
          "type": "function"
        },
        "index": {
          "description": "Length of Line Segment",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleLineSegment",
          "package": "hs-gchart",
          "partial": "Style Line Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineStyleLineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThickness\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleThickness",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#LineStyle",
          "type": "function"
        },
        "index": {
          "description": "Thickness",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineStyleThickness",
          "package": "hs-gchart",
          "partial": "Style Thickness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineStyleThickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich points to draw the line markers on\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineWhichPoints",
          "package": "hs-gchart",
          "signature": "LineWhichPoints",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "description": "Which points to draw the line markers on",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineWhichPoints",
          "package": "hs-gchart",
          "partial": "Which Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineWhichPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point between -1 and 1 indicating\n the layer on which to draw.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "lineZorder",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#LineMarker",
          "type": "function"
        },
        "index": {
          "description": "Floating point between and indicating the layer on which to draw",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "lineZorder",
          "package": "hs-gchart",
          "partial": "Zorder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:lineZorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "pieChartOrientation",
          "package": "hs-gchart",
          "signature": "Maybe PieChartOrientation",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "pieChartOrientation",
          "package": "hs-gchart",
          "partial": "Chart Orientation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:pieChartOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "qrEncoding",
          "package": "hs-gchart",
          "signature": "Maybe QREncoding",
          "source": "src/Graphics-GChart-Types.html#Chart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "qrEncoding",
          "package": "hs-gchart",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:qrEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange marker color\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerColor",
          "package": "hs-gchart",
          "signature": "Color",
          "source": "src/Graphics-GChart-Types.html#RangeMarker",
          "type": "function"
        },
        "index": {
          "description": "Range marker color",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerColor",
          "package": "hs-gchart",
          "partial": "Marker Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:rangeMarkerColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(start,end) range. \u003c/code\u003eFor\n horizontal range markers, the\n (start,end) value is a position on\n the y-axis, where 0.00 is the\n bottom of the chart, and 1.00 is\n the top of the chart. For vertical\n range markers, the (start,end)\n value is a position on the x-axis,\n where 0.00 is the left of the\n chart, and 1.00 is the right of the\n chart.\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerRange",
          "package": "hs-gchart",
          "signature": "(Float, Float)",
          "source": "src/Graphics-GChart-Types.html#RangeMarker",
          "type": "function"
        },
        "index": {
          "description": "start end range For horizontal range markers the start end value is position on the y-axis where is the bottom of the chart and is the top of the chart For vertical range markers the start end value is position on the x-axis where is the left of the chart and is the right of the chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerRange",
          "normalized": "(Float,Float)",
          "package": "hs-gchart",
          "partial": "Marker Range",
          "signature": "(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:rangeMarkerRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange marker type\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerType",
          "package": "hs-gchart",
          "signature": "RangeMarkerType",
          "source": "src/Graphics-GChart-Types.html#RangeMarker",
          "type": "function"
        },
        "index": {
          "description": "Range marker type",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "rangeMarkerType",
          "package": "hs-gchart",
          "partial": "Marker Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:rangeMarkerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight margin around plot area\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "rightMargin",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "description": "Right margin around plot area",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "rightMargin",
          "package": "hs-gchart",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:rightMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esets the item in a chart\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "set",
          "package": "hs-gchart",
          "signature": "c -\u003e ChartM ()",
          "source": "src/Graphics-GChart-Types.html#set",
          "type": "method"
        },
        "index": {
          "description": "sets the item in chart",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "set",
          "normalized": "a-\u003eChartM()",
          "package": "hs-gchart",
          "signature": "c-\u003eChartM()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape Marker color\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeColor",
          "package": "hs-gchart",
          "signature": "Color",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Shape Marker color",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeColor",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData point value\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeDataPoints",
          "package": "hs-gchart",
          "signature": "MarkerDataPoint",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Data point value",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeDataPoints",
          "package": "hs-gchart",
          "partial": "Data Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeDataPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData Set Index\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeDataSetIdx",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Data Set Index",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeDataSetIdx",
          "package": "hs-gchart",
          "partial": "Data Set Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeDataSetIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize in pixels\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeSize",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Size in pixels",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeSize",
          "package": "hs-gchart",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape type\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeType",
          "package": "hs-gchart",
          "signature": "ShapeType",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Shape type",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeType",
          "package": "hs-gchart",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional width used for certain shapes\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeWidth",
          "package": "hs-gchart",
          "signature": "Maybe Int",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Optional width used for certain shapes",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeWidth",
          "package": "hs-gchart",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe layer on which to draw the\n marker. This is a floating point\n number from -1.0 to 1.0,\n inclusive, where -1.0 is the\n bottom and 1.0 is the top\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "shapeZorder",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#ShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "The layer on which to draw the marker This is floating point number from to inclusive where is the bottom and is the top",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "shapeZorder",
          "package": "hs-gchart",
          "partial": "Zorder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:shapeZorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GChart.Types",
          "name": "tickMarkColor",
          "package": "hs-gchart",
          "signature": "Maybe Color",
          "source": "src/Graphics-GChart-Types.html#AxisStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "tickMarkColor",
          "package": "hs-gchart",
          "partial": "Mark Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:tickMarkColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle Color\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "titleColor",
          "package": "hs-gchart",
          "signature": "Maybe Color",
          "source": "src/Graphics-GChart-Types.html#ChartTitle",
          "type": "function"
        },
        "index": {
          "description": "Title Color",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "titleColor",
          "package": "hs-gchart",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:titleColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle Font Size\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "titleFontSize",
          "package": "hs-gchart",
          "signature": "Maybe FontSize",
          "source": "src/Graphics-GChart-Types.html#ChartTitle",
          "type": "function"
        },
        "index": {
          "description": "Title Font Size",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "titleFontSize",
          "package": "hs-gchart",
          "partial": "Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:titleFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "titleStr",
          "package": "hs-gchart",
          "signature": "String",
          "source": "src/Graphics-GChart-Types.html#ChartTitle",
          "type": "function"
        },
        "index": {
          "description": "Title",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "titleStr",
          "package": "hs-gchart",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:titleStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop margin around plot area\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "topMargin",
          "package": "hs-gchart",
          "signature": "Int",
          "source": "src/Graphics-GChart-Types.html#ChartMargins",
          "type": "function"
        },
        "index": {
          "description": "Top margin around plot area",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "topMargin",
          "package": "hs-gchart",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:topMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ex-axis step size (0-100)\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "xAxisStep",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "x-axis step size",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "xAxisStep",
          "package": "hs-gchart",
          "partial": "Axis Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:xAxisStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ex axis offset\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "xOffset",
          "package": "hs-gchart",
          "signature": "Maybe Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "axis offset",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "xOffset",
          "package": "hs-gchart",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:xOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ey-axis step size (0-100)\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "yAxisStep",
          "package": "hs-gchart",
          "signature": "Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "y-axis step size",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "yAxisStep",
          "package": "hs-gchart",
          "partial": "Axis Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:yAxisStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ey axis offset\n\u003c/p\u003e",
          "module": "Graphics.GChart.Types",
          "name": "yOffset",
          "package": "hs-gchart",
          "signature": "Maybe Float",
          "source": "src/Graphics-GChart-Types.html#ChartGrid",
          "type": "function"
        },
        "index": {
          "description": "axis offset",
          "hierarchy": "Graphics GChart Types",
          "module": "Graphics.GChart.Types",
          "name": "yOffset",
          "package": "hs-gchart",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart-Types.html#v:yOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImport this module to generate charts using the Google Chart API.\n\u003c/p\u003e\u003cp\u003eFor more information about the Google Chart API, refer to\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chart API Intro \u003ca\u003ehttp://code.google.com/apis/chart/image_charts.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e Getting Started \u003ca\u003ehttp://code.google.com/apis/chart/docs/making_charts.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor documentation full Haskell data model, refer to \u003ca\u003eGraphics.GChart.Types\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eHere is an example to use the functions in the module to generate a chart URL :\n\u003c/p\u003e\u003cpre\u003e\ngeneratePieChart = getChartUrl $ do setChartSize 640 400\n                                 setChartType Pie\n                                 setChartTitle \"Test\"\n                                 addChartData  ([1,2,3,4,5]::[Int])\n                                 addColor \"FF0000\"\n                                 setLegend $ legend [\"t1\",\"t2\", \"t3\",\"t4\",\"t5\"]\n                                 setLabels $ [\"Test 1\", \"Test 2\", \"Test 3\", \"Test 4\", \"Test 5\"]\n\u003c/pre\u003e\u003cp\u003eFor examples, refer to \u003ccode\u003eExamples.hs\u003c/code\u003e in the source tarball, or download it\ndirectly from Github :\n\u003ca\u003ehttp://github.com/deepakjois/hs-gchart/blob/master/examples/Examples.hs\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe module constists of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Smart Constructors - to make it convenient to construct data types\n\u003c/li\u003e\u003cli\u003e Functions to set chart data\n\u003c/li\u003e\u003cli\u003e Functions to retrieve chart data in form of URL or Haskell data type\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.GChart",
          "name": "GChart",
          "package": "hs-gchart",
          "source": "src/Graphics-GChart.html",
          "type": "module"
        },
        "index": {
          "description": "Import this module to generate charts using the Google Chart API For more information about the Google Chart API refer to Chart API Intro http code.google.com apis chart image charts.html Getting Started http code.google.com apis chart docs making charts.html For documentation full Haskell data model refer to Graphics.GChart.Types Here is an example to use the functions in the module to generate chart URL generatePieChart getChartUrl do setChartSize setChartType Pie setChartTitle Test addChartData Int addColor FF0000 setLegend legend t1 t2 t3 t4 t5 setLabels Test Test Test Test Test For examples refer to Examples.hs in the source tarball or download it directly from Github http github.com deepakjois hs-gchart blob master examples Examples.hs The module constists of Smart Constructors to make it convenient to construct data types Functions to set chart data Functions to retrieve chart data in form of URL or Haskell data type",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "GChart",
          "package": "hs-gchart",
          "partial": "GChart",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an \u003ccode\u003e\u003ca\u003eAxis\u003c/a\u003e\u003c/code\u003e to the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addAxis",
          "package": "hs-gchart",
          "signature": "Axis -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addAxis",
          "type": "function"
        },
        "index": {
          "description": "Add an Axis to the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addAxis",
          "normalized": "Axis-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Axis",
          "signature": "Axis-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd data to chart. Make sure you have set the data encoding using\n \u003ccode\u003e\u003ca\u003esetDataEncoding\u003c/a\u003e\u003c/code\u003e before calling this function, otherwise it may generate\n gibberish, or throw an error\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addChartData",
          "package": "hs-gchart",
          "signature": "[a] -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addChartData",
          "type": "function"
        },
        "index": {
          "description": "Add data to chart Make sure you have set the data encoding using setDataEncoding before calling this function otherwise it may generate gibberish or throw an error",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addChartData",
          "normalized": "[a]-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Data",
          "signature": "[a]-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addChartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003eaddChartData\u003c/a\u003e\u003c/code\u003e, but for XY datasets for line XY chart etc\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addChartDataXY",
          "package": "hs-gchart",
          "signature": "[(a, a)] -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addChartDataXY",
          "type": "function"
        },
        "index": {
          "description": "Works like addChartData but for XY datasets for line XY chart etc",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addChartDataXY",
          "normalized": "[(a,a)]-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Data XY",
          "signature": "[(a,a)]-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addChartDataXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a color to the chart. This color will be added to the list \u003ccode\u003e\u003ca\u003eChartColors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMake sure you do not include a call to \u003ccode\u003e\u003ca\u003esetColors\u003c/a\u003e\u003c/code\u003e at any time after a call to\n\u003ccode\u003e\u003ca\u003eaddColor\u003c/a\u003e\u003c/code\u003e, since this will lead to all previous values being erased.\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addColor",
          "package": "hs-gchart",
          "signature": "Color -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addColor",
          "type": "function"
        },
        "index": {
          "description": "Add color to the chart This color will be added to the list ChartColors Make sure you do not include call to setColors at any time after call to addColor since this will lead to all previous values being erased",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addColor",
          "normalized": "Color-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Color",
          "signature": "Color-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a scale to chart.If more than one scale is added, it applies\n the scale in order to each data series\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addDataScale",
          "package": "hs-gchart",
          "signature": "DataScale -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addDataScale",
          "type": "function"
        },
        "index": {
          "description": "Add scale to chart.If more than one scale is added it applies the scale in order to each data series",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addDataScale",
          "normalized": "DataScale-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Data Scale",
          "signature": "DataScale-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addDataScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eFill\u003c/a\u003e\u003c/code\u003e to the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addFill",
          "package": "hs-gchart",
          "signature": "Fill -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addFill",
          "type": "function"
        },
        "index": {
          "description": "Add Fill to the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addFill",
          "normalized": "Fill-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Fill",
          "signature": "Fill-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a financial marker. Use \u003ccode\u003e\u003ca\u003emakeFinancialMarker\u003c/a\u003e\u003c/code\u003e smart constructor when\n calling this function. If value of data set index is not specified when using\n \u003ccode\u003e\u003ca\u003emakeFinancialMarker\u003c/a\u003e\u003c/code\u003e, it automatically adds a data index to refer to the latest\n data set\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addFinancialMarker",
          "package": "hs-gchart",
          "signature": "FinancialMarker -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addFinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Adds financial marker Use makeFinancialMarker smart constructor when calling this function If value of data set index is not specified when using makeFinancialMarker it automatically adds data index to refer to the latest data set",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addFinancialMarker",
          "normalized": "FinancialMarker-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Financial Marker",
          "signature": "FinancialMarker-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addFinancialMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a line fill to the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addLineFill",
          "package": "hs-gchart",
          "signature": "LineFillType -\u003e Color -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addLineFill",
          "type": "function"
        },
        "index": {
          "description": "Adds line fill to the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addLineFill",
          "normalized": "LineFillType-\u003eColor-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Line Fill",
          "signature": "LineFillType-\u003eColor-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addLineFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a line marker. Use \u003ccode\u003e\u003ca\u003emakeLineMarker\u003c/a\u003e\u003c/code\u003e smart constructor when calling\n this function. If value of data set index is not specified when using\n \u003ccode\u003e\u003ca\u003emakeLineMarker\u003c/a\u003e\u003c/code\u003e, it automatically adds a data index to refer to the\n latest data set\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addLineMarker",
          "package": "hs-gchart",
          "signature": "LineMarker -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addLineMarker",
          "type": "function"
        },
        "index": {
          "description": "Adds line marker Use makeLineMarker smart constructor when calling this function If value of data set index is not specified when using makeLineMarker it automatically adds data index to refer to the latest data set",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addLineMarker",
          "normalized": "LineMarker-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Line Marker",
          "signature": "LineMarker-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addLineMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd line style\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addLineStyle",
          "package": "hs-gchart",
          "signature": "LineStyle -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addLineStyle",
          "type": "function"
        },
        "index": {
          "description": "Add line style",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addLineStyle",
          "normalized": "LineStyle-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Line Style",
          "signature": "LineStyle-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addLineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a range marker. You can use \u003ccode\u003e\u003ca\u003emakeRangeMarker\u003c/a\u003e\u003c/code\u003e smart constructor when\n calling this function\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addRangeMarker",
          "package": "hs-gchart",
          "signature": "RangeMarker -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addRangeMarker",
          "type": "function"
        },
        "index": {
          "description": "Adds range marker You can use makeRangeMarker smart constructor when calling this function",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addRangeMarker",
          "normalized": "RangeMarker-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Range Marker",
          "signature": "RangeMarker-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addRangeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a shape marker. Use \u003ccode\u003e\u003ca\u003emakeShapeMarker\u003c/a\u003e\u003c/code\u003e smart constructor when calling\n this function If value of data set index is not specified when using\n \u003ccode\u003e\u003ca\u003emakeShapeMarker\u003c/a\u003e\u003c/code\u003e, it automatically adds a data index to refer to the latest\n data set\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "addShapeMarker",
          "package": "hs-gchart",
          "signature": "ShapeMarker -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#addShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Adds shape marker Use makeShapeMarker smart constructor when calling this function If value of data set index is not specified when using makeShapeMarker it automatically adds data index to refer to the latest data set",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "addShapeMarker",
          "normalized": "ShapeMarker-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Shape Marker",
          "signature": "ShapeMarker-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:addShapeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet automatic bar width for bar chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "automatic",
          "package": "hs-gchart",
          "signature": "BarChartWidthSpacing",
          "source": "src/Graphics-GChart.html#automatic",
          "type": "function"
        },
        "index": {
          "description": "Set automatic bar width for bar chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "automatic",
          "package": "hs-gchart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet automatic bar width for bar chart, with spacing values\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "automaticWithSpacing",
          "package": "hs-gchart",
          "signature": "Int -\u003e Int -\u003e BarChartWidthSpacing",
          "source": "src/Graphics-GChart.html#automaticWithSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set automatic bar width for bar chart with spacing values",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "automaticWithSpacing",
          "normalized": "Int-\u003eInt-\u003eBarChartWidthSpacing",
          "package": "hs-gchart",
          "partial": "With Spacing",
          "signature": "Int-\u003eInt-\u003eBarChartWidthSpacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:automaticWithSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet bar width for chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "barwidth",
          "package": "hs-gchart",
          "signature": "Int -\u003e BarChartWidthSpacing",
          "source": "src/Graphics-GChart.html#barwidth",
          "type": "function"
        },
        "index": {
          "description": "Set bar width for chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "barwidth",
          "normalized": "Int-\u003eBarChartWidthSpacing",
          "package": "hs-gchart",
          "signature": "Int-\u003eBarChartWidthSpacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:barwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet bar width and spacing for chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "barwidthspacing",
          "package": "hs-gchart",
          "signature": "Int -\u003e Int -\u003e Int -\u003e BarChartWidthSpacing",
          "source": "src/Graphics-GChart.html#barwidthspacing",
          "type": "function"
        },
        "index": {
          "description": "Set bar width and spacing for chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "barwidthspacing",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eBarChartWidthSpacing",
          "package": "hs-gchart",
          "signature": "Int-\u003eInt-\u003eInt-\u003eBarChartWidthSpacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:barwidthspacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a value of type \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e to a URL\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "convertToUrl",
          "package": "hs-gchart",
          "signature": "Chart -\u003e String",
          "source": "src/Graphics-GChart.html#convertToUrl",
          "type": "function"
        },
        "index": {
          "description": "Converts value of type Chart to URL",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "convertToUrl",
          "normalized": "Chart-\u003eString",
          "package": "hs-gchart",
          "partial": "To Url",
          "signature": "Chart-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:convertToUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to specify the \u003ccode\u003e\u003ca\u003eExtended\u003c/a\u003e\u003c/code\u003e encoding for the \u003ccode\u003e\u003ca\u003esetDataEncoding\u003c/a\u003e\u003c/code\u003e\n  function.\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "extended",
          "package": "hs-gchart",
          "signature": "ChartData",
          "source": "src/Graphics-GChart.html#extended",
          "type": "function"
        },
        "index": {
          "description": "Use this to specify the Extended encoding for the setDataEncoding function",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "extended",
          "package": "hs-gchart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the data out of the monad and returns a value of type \u003ccode\u003e\u003ca\u003eChart\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "getChartData",
          "package": "hs-gchart",
          "signature": "ChartM () -\u003e Chart",
          "source": "src/Graphics-GChart.html#getChartData",
          "type": "function"
        },
        "index": {
          "description": "Extracts the data out of the monad and returns value of type Chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "getChartData",
          "normalized": "ChartM()-\u003eChart",
          "package": "hs-gchart",
          "partial": "Chart Data",
          "signature": "ChartM()-\u003eChart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:getChartData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the data out of the monad and returns a URL string for the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "getChartUrl",
          "package": "hs-gchart",
          "signature": "ChartM () -\u003e String",
          "source": "src/Graphics-GChart.html#getChartUrl",
          "type": "function"
        },
        "index": {
          "description": "Extracts the data out of the monad and returns URL string for the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "getChartUrl",
          "normalized": "ChartM()-\u003eString",
          "package": "hs-gchart",
          "partial": "Chart Url",
          "signature": "ChartM()-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:getChartUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerates a \u003ccode\u003e\u003ca\u003eChartLegend\u003c/a\u003e\u003c/code\u003e from a list of labels\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "legend",
          "package": "hs-gchart",
          "signature": "[String] -\u003e ChartLegend",
          "source": "src/Graphics-GChart.html#legend",
          "type": "function"
        },
        "index": {
          "description": "generates ChartLegend from list of labels",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "legend",
          "normalized": "[String]-\u003eChartLegend",
          "package": "hs-gchart",
          "signature": "[String]-\u003eChartLegend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerats a \u003ccode\u003e\u003ca\u003eChartLegend\u003c/a\u003e\u003c/code\u003e from a list of lables and a \u003ccode\u003e\u003ca\u003eLegendPosition\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "legendWithPosition",
          "package": "hs-gchart",
          "signature": "[String] -\u003e LegendPosition -\u003e ChartLegend",
          "source": "src/Graphics-GChart.html#legendWithPosition",
          "type": "function"
        },
        "index": {
          "description": "generats ChartLegend from list of lables and LegendPosition",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "legendWithPosition",
          "normalized": "[String]-\u003eLegendPosition-\u003eChartLegend",
          "package": "hs-gchart",
          "partial": "With Position",
          "signature": "[String]-\u003eLegendPosition-\u003eChartLegend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:legendWithPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a default axis. Use this to override the fields with your own\n values. For e.g :\n\u003c/p\u003e\u003cpre\u003e\nmakeAxis { \u003ccode\u003e\u003ca\u003eaxisType\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eAxisTop\u003c/a\u003e\u003c/code\u003e,\n           \u003ccode\u003e\u003ca\u003eaxisLabels\u003c/a\u003e\u003c/code\u003e = [\"0\",\"50\",\"100\"] }\n\u003c/pre\u003e",
          "module": "Graphics.GChart",
          "name": "makeAxis",
          "package": "hs-gchart",
          "signature": "Axis",
          "source": "src/Graphics-GChart.html#makeAxis",
          "type": "function"
        },
        "index": {
          "description": "returns default axis Use this to override the fields with your own values For e.g makeAxis axisType AxisTop axisLabels",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeAxis",
          "package": "hs-gchart",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinancial Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "makeFinancialMarker",
          "package": "hs-gchart",
          "signature": "FinancialMarker",
          "source": "src/Graphics-GChart.html#makeFinancialMarker",
          "type": "function"
        },
        "index": {
          "description": "Financial Marker",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeFinancialMarker",
          "package": "hs-gchart",
          "partial": "Financial Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeFinancialMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a default axis. Use this to override the fields with your own\n values. For e.g :\n\u003c/p\u003e\u003cpre\u003e\nmakeGrid { \u003ccode\u003e\u003ca\u003exAxisStep\u003c/a\u003e\u003c/code\u003e = 10,\n           \u003ccode\u003e\u003ca\u003eyAxisStep\u003c/a\u003e\u003c/code\u003e = 10,\n            xOffset = Just 5 }\n\u003c/pre\u003e",
          "module": "Graphics.GChart",
          "name": "makeGrid",
          "package": "hs-gchart",
          "signature": "ChartGrid",
          "source": "src/Graphics-GChart.html#makeGrid",
          "type": "function"
        },
        "index": {
          "description": "returns default axis Use this to override the fields with your own values For e.g makeGrid xAxisStep yAxisStep xOffset Just",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeGrid",
          "package": "hs-gchart",
          "partial": "Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "makeLineMarker",
          "package": "hs-gchart",
          "signature": "LineMarker",
          "source": "src/Graphics-GChart.html#makeLineMarker",
          "type": "function"
        },
        "index": {
          "description": "Line Marker",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeLineMarker",
          "package": "hs-gchart",
          "partial": "Line Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeLineMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine Style\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "makeLineStyle",
          "package": "hs-gchart",
          "signature": "LineStyle",
          "source": "src/Graphics-GChart.html#makeLineStyle",
          "type": "function"
        },
        "index": {
          "description": "Line Style",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeLineStyle",
          "package": "hs-gchart",
          "partial": "Line Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeLineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "makeRangeMarker",
          "package": "hs-gchart",
          "signature": "RangeMarker",
          "source": "src/Graphics-GChart.html#makeRangeMarker",
          "type": "function"
        },
        "index": {
          "description": "Range Marker",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeRangeMarker",
          "package": "hs-gchart",
          "partial": "Range Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeRangeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape Marker\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "makeShapeMarker",
          "package": "hs-gchart",
          "signature": "ShapeMarker",
          "source": "src/Graphics-GChart.html#makeShapeMarker",
          "type": "function"
        },
        "index": {
          "description": "Shape Marker",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "makeShapeMarker",
          "package": "hs-gchart",
          "partial": "Shape Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:makeShapeMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet relative spacing\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "relative",
          "package": "hs-gchart",
          "signature": "Float -\u003e Float -\u003e BarChartWidthSpacing",
          "source": "src/Graphics-GChart.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Set relative spacing",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "relative",
          "normalized": "Float-\u003eFloat-\u003eBarChartWidthSpacing",
          "package": "hs-gchart",
          "signature": "Float-\u003eFloat-\u003eBarChartWidthSpacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet bar and width spacing\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setBarWidthSpacing",
          "package": "hs-gchart",
          "signature": "BarChartWidthSpacing -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setBarWidthSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set bar and width spacing",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setBarWidthSpacing",
          "normalized": "BarChartWidthSpacing-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Bar Width Spacing",
          "signature": "BarChartWidthSpacing-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setBarWidthSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet chart height only. Applicable to \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e charts\n This will set the width to 0 which will automatically\n be excluded when the data is being encoded\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartHeight",
          "package": "hs-gchart",
          "signature": "Int -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartHeight",
          "type": "function"
        },
        "index": {
          "description": "Set chart height only Applicable to Formula charts This will set the width to which will automatically be excluded when the data is being encoded",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartHeight",
          "normalized": "Int-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Height",
          "signature": "Int-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chart size by passing the width and the height in pixels\n For e.g : \u003ccode\u003esetChartSize 320 200\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartSize",
          "package": "hs-gchart",
          "signature": "Int -\u003e Int -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartSize",
          "type": "function"
        },
        "index": {
          "description": "Set the chart size by passing the width and the height in pixels For e.g setChartSize",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartSize",
          "normalized": "Int-\u003eInt-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Size",
          "signature": "Int-\u003eInt-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chart title by passing a \u003ccode\u003e\u003ca\u003eChartTitle\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartTitle",
          "package": "hs-gchart",
          "signature": "String -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartTitle",
          "type": "function"
        },
        "index": {
          "description": "Set the chart title by passing ChartTitle",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartTitle",
          "normalized": "String-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Title",
          "signature": "String-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chart title with a color\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartTitleWithColor",
          "package": "hs-gchart",
          "signature": "String -\u003e Color -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartTitleWithColor",
          "type": "function"
        },
        "index": {
          "description": "Set the chart title with color",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartTitleWithColor",
          "normalized": "String-\u003eColor-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Title With Color",
          "signature": "String-\u003eColor-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartTitleWithColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chart title with color and font size\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartTitleWithColorAndFontSize",
          "package": "hs-gchart",
          "signature": "String -\u003e Color -\u003e FontSize -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartTitleWithColorAndFontSize",
          "type": "function"
        },
        "index": {
          "description": "Set the chart title with color and font size",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartTitleWithColorAndFontSize",
          "normalized": "String-\u003eColor-\u003eFontSize-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Title With Color And Font Size",
          "signature": "String-\u003eColor-\u003eFontSize-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartTitleWithColorAndFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the chart type by passing a \u003ccode\u003e\u003ca\u003eChartType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setChartType",
          "package": "hs-gchart",
          "signature": "ChartType -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setChartType",
          "type": "function"
        },
        "index": {
          "description": "Set the chart type by passing ChartType",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setChartType",
          "normalized": "ChartType-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Chart Type",
          "signature": "ChartType-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setChartType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass a list of colors corresponding to the datasets in the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setColors",
          "package": "hs-gchart",
          "signature": "[Color] -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setColors",
          "type": "function"
        },
        "index": {
          "description": "Pass list of colors corresponding to the datasets in the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setColors",
          "normalized": "[Color]-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Colors",
          "signature": "[Color]-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this with \u003ccode\u003e\u003ca\u003esimple\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eextended\u003c/a\u003e\u003c/code\u003e to specify the encoding. For e.g\n\u003c/p\u003e\u003cpre\u003e\nsetDataEncoding simple\n\u003c/pre\u003e\u003cp\u003eMake sure you pass in values of the right type, Int for simple and extended\nencoding, and Float for text encoding.\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setDataEncoding",
          "package": "hs-gchart",
          "signature": "ChartData -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setDataEncoding",
          "type": "function"
        },
        "index": {
          "description": "Use this with simple text or extended to specify the encoding For e.g setDataEncoding simple Make sure you pass in values of the right type Int for simple and extended encoding and Float for text encoding",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setDataEncoding",
          "normalized": "ChartData-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Data Encoding",
          "signature": "ChartData-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setDataEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet formula. Applies only to \u003ccode\u003e\u003ca\u003eFormula\u003c/a\u003e\u003c/code\u003e charts\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setFormula",
          "package": "hs-gchart",
          "signature": "String -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setFormula",
          "type": "function"
        },
        "index": {
          "description": "Set formula Applies only to Formula charts",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setFormula",
          "normalized": "String-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Formula",
          "signature": "String-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a \u003ccode\u003e\u003ca\u003eChartGrid\u003c/a\u003e\u003c/code\u003e for the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setGrid",
          "package": "hs-gchart",
          "signature": "ChartGrid -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setGrid",
          "type": "function"
        },
        "index": {
          "description": "Set ChartGrid for the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setGrid",
          "normalized": "ChartGrid-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Grid",
          "signature": "ChartGrid-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet label for a chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setLabel",
          "package": "hs-gchart",
          "signature": "String -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setLabel",
          "type": "function"
        },
        "index": {
          "description": "Set label for chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setLabel",
          "normalized": "String-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Label",
          "signature": "String-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet labels for the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setLabels",
          "package": "hs-gchart",
          "signature": "[String] -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setLabels",
          "type": "function"
        },
        "index": {
          "description": "Set labels for the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setLabels",
          "normalized": "[String]-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Labels",
          "signature": "[String]-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a Legend for the chart\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setLegend",
          "package": "hs-gchart",
          "signature": "ChartLegend -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setLegend",
          "type": "function"
        },
        "index": {
          "description": "Set Legend for the chart",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setLegend",
          "normalized": "ChartLegend-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Legend",
          "signature": "ChartLegend-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setLegend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet pie chart orientation in radians\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setPieChartOrientation",
          "package": "hs-gchart",
          "signature": "Float -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setPieChartOrientation",
          "type": "function"
        },
        "index": {
          "description": "Set pie chart orientation in radians",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setPieChartOrientation",
          "normalized": "Float-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "Pie Chart Orientation",
          "signature": "Float-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setPieChartOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet QR code output encoding. Valid for \u003ccode\u003e\u003ca\u003eQRCode\u003c/a\u003e\u003c/code\u003e only\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setQREncoding",
          "package": "hs-gchart",
          "signature": "QREncoding -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setQREncoding",
          "type": "function"
        },
        "index": {
          "description": "Set QR code output encoding Valid for QRCode only",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setQREncoding",
          "normalized": "QREncoding-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "QREncoding",
          "signature": "QREncoding-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setQREncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the error correction level for \u003ccode\u003e\u003ca\u003eQRCode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setQRErrorCorrection",
          "package": "hs-gchart",
          "signature": "ErrorCorrectionLevel -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setQRErrorCorrection",
          "type": "function"
        },
        "index": {
          "description": "Sets the error correction level for QRCode",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setQRErrorCorrection",
          "normalized": "ErrorCorrectionLevel-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "QRError Correction",
          "signature": "ErrorCorrectionLevel-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setQRErrorCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the width (in rows) of the white border around the data portion of the \u003ccode\u003e\u003ca\u003eQRCode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "setQRWidth",
          "package": "hs-gchart",
          "signature": "Int -\u003e ChartM ()",
          "source": "src/Graphics-GChart.html#setQRWidth",
          "type": "function"
        },
        "index": {
          "description": "Sets the width in rows of the white border around the data portion of the QRCode",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "setQRWidth",
          "normalized": "Int-\u003eChartM()",
          "package": "hs-gchart",
          "partial": "QRWidth",
          "signature": "Int-\u003eChartM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:setQRWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to specify the \u003ccode\u003e\u003ca\u003eSimple\u003c/a\u003e\u003c/code\u003e encoding for the \u003ccode\u003e\u003ca\u003esetDataEncoding\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "simple",
          "package": "hs-gchart",
          "signature": "ChartData",
          "source": "src/Graphics-GChart.html#simple",
          "type": "function"
        },
        "index": {
          "description": "Use this to specify the Simple encoding for the setDataEncoding function",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "simple",
          "package": "hs-gchart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerates a \u003ccode\u003e\u003ca\u003eSolid\u003c/a\u003e\u003c/code\u003e fill from a hex color value\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "solid",
          "package": "hs-gchart",
          "signature": "Color -\u003e FillType -\u003e Fill",
          "source": "src/Graphics-GChart.html#solid",
          "type": "function"
        },
        "index": {
          "description": "generates Solid fill from hex color value",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "solid",
          "normalized": "Color-\u003eFillType-\u003eFill",
          "package": "hs-gchart",
          "signature": "Color-\u003eFillType-\u003eFill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this to specify the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e encoding for the \u003ccode\u003e\u003ca\u003esetDataEncoding\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Graphics.GChart",
          "name": "text",
          "package": "hs-gchart",
          "signature": "ChartData",
          "source": "src/Graphics-GChart.html#text",
          "type": "function"
        },
        "index": {
          "description": "Use this to specify the Text encoding for the setDataEncoding function",
          "hierarchy": "Graphics GChart",
          "module": "Graphics.GChart",
          "name": "text",
          "package": "hs-gchart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-gchart/docs/Graphics-GChart.html#v:text"
      }
    }
  ]
]