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
        "word": "gps2htmlReport"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
          "name": "DrawOsm",
          "package": "gps2htmlReport",
          "source": "src/Data-GPS-Gps2HtmlReport-DrawOsm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data GPS Gps2HtmlReport DrawOsm",
          "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
          "name": "DrawOsm",
          "package": "gps2htmlReport",
          "partial": "Draw Osm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-DrawOsm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the destination directory for the web content,\n the (Trail WptType), and uses the DrawOsm functions\n to generate an `osm.png' file showing the trail.\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
          "name": "generateOsmMap",
          "package": "gps2htmlReport",
          "signature": "String -\u003e [WptType] -\u003e IO ()",
          "source": "src/Data-GPS-Gps2HtmlReport-DrawOsm.html#generateOsmMap",
          "type": "function"
        },
        "index": {
          "description": "Takes the destination directory for the web content the Trail WptType and uses the DrawOsm functions to generate an osm.png file showing the trail",
          "hierarchy": "Data GPS Gps2HtmlReport DrawOsm",
          "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
          "name": "generateOsmMap",
          "normalized": "String-\u003e[WptType]-\u003eIO()",
          "package": "gps2htmlReport",
          "partial": "Osm Map",
          "signature": "String-\u003e[WptType]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-DrawOsm.html#v:generateOsmMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eHTMLGenerator\u003c/code\u003e module generates the HTML content for the index.html generated\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
          "name": "HTMLGenerator",
          "package": "gps2htmlReport",
          "source": "src/Data-GPS-Gps2HtmlReport-HTMLGenerator.html",
          "type": "module"
        },
        "index": {
          "description": "The HTMLGenerator module generates the HTML content for the index.html generated",
          "hierarchy": "Data GPS Gps2HtmlReport HTMLGenerator",
          "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
          "name": "HTMLGenerator",
          "package": "gps2htmlReport",
          "partial": "HTMLGenerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes all the WayPoints and generates the HTML file\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
          "name": "generateHtmlPage",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e Html",
          "source": "src/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#generateHtmlPage",
          "type": "function"
        },
        "index": {
          "description": "Takes all the WayPoints and generates the HTML file",
          "hierarchy": "Data GPS Gps2HtmlReport HTMLGenerator",
          "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
          "name": "generateHtmlPage",
          "normalized": "[WptType]-\u003eHtml",
          "package": "gps2htmlReport",
          "partial": "Html Page",
          "signature": "[WptType]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#v:generateHtmlPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses the JourneyStats module to generate\n the statistics about the journey WayPoints, then\n uses the Cairo bindings to generate the charts\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "JourneyCharts",
          "package": "gps2htmlReport",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses the JourneyStats module to generate the statistics about the journey WayPoints then uses the Cairo bindings to generate the charts",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "JourneyCharts",
          "package": "gps2htmlReport",
          "partial": "Journey Charts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "chart1",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e (String, OutputType -\u003e Renderable ())",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#chart1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "chart1",
          "normalized": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
          "package": "gps2htmlReport",
          "signature": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:chart1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "chart2",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e (String, OutputType -\u003e Renderable ())",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#chart2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "chart2",
          "normalized": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
          "package": "gps2htmlReport",
          "signature": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:chart2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "renderToPng",
          "package": "gps2htmlReport",
          "signature": "(t, OutputType -\u003e Renderable a) -\u003e FilePath -\u003e IO (PickFn a)",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#renderToPng",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
          "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
          "name": "renderToPng",
          "normalized": "(a,OutputType-\u003eRenderable b)-\u003eFilePath-\u003eIO(PickFn b)",
          "package": "gps2htmlReport",
          "partial": "To Png",
          "signature": "(t,OutputType-\u003eRenderable a)-\u003eFilePath-\u003eIO(PickFn a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:renderToPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the JourneyCharts and HTMLGenerator \n modules with statistics for the charts, and the journey statistics\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "JourneyStats",
          "package": "gps2htmlReport",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the JourneyCharts and HTMLGenerator modules with statistics for the charts and the journey statistics",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "JourneyStats",
          "package": "gps2htmlReport",
          "partial": "Journey Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,JourneyDistanceAtPoint)\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "accumDistance",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e Double -\u003e [(LocalTime, Distance)]",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#accumDistance",
          "type": "function"
        },
        "index": {
          "description": "Takes all WayPoints and creates list of tuples containing TimeStamp JourneyDistanceAtPoint",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "accumDistance",
          "normalized": "[WptType]-\u003eDouble-\u003e[(LocalTime,Distance)]",
          "package": "gps2htmlReport",
          "partial": "Distance",
          "signature": "[WptType]-\u003eDouble-\u003e[(LocalTime,Distance)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:accumDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,AvrSpeedAtThisPoint)\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "avrSpeedOverTime",
          "package": "gps2htmlReport",
          "signature": "[(LocalTime, Speed)] -\u003e Double -\u003e Double -\u003e [(LocalTime, Speed)] -\u003e [(LocalTime, Speed)]",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#avrSpeedOverTime",
          "type": "function"
        },
        "index": {
          "description": "Takes all WayPoints and creates list of tuples containing TimeStamp AvrSpeedAtThisPoint",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "avrSpeedOverTime",
          "normalized": "[(LocalTime,Speed)]-\u003eDouble-\u003eDouble-\u003e[(LocalTime,Speed)]-\u003e[(LocalTime,Speed)]",
          "package": "gps2htmlReport",
          "partial": "Speed Over Time",
          "signature": "[(LocalTime,Speed)]-\u003eDouble-\u003eDouble-\u003e[(LocalTime,Speed)]-\u003e[(LocalTime,Speed)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:avrSpeedOverTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the date of the journey (from the first WayPoint)\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "dateOfJourney",
          "package": "gps2htmlReport",
          "signature": "[a] -\u003e Maybe Day",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#dateOfJourney",
          "type": "function"
        },
        "index": {
          "description": "Extracts the date of the journey from the first WayPoint",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "dateOfJourney",
          "normalized": "[a]-\u003eMaybe Day",
          "package": "gps2htmlReport",
          "partial": "Of Journey",
          "signature": "[a]-\u003eMaybe Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:dateOfJourney"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes all WayPoints, an element in wptType, and an Eq function, returning a single WayPoint\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "findPoint",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e WptType -\u003e (WptType -\u003e Maybe Double) -\u003e (Double -\u003e Double -\u003e Bool) -\u003e Maybe (LocalTime, Double)",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#findPoint",
          "type": "function"
        },
        "index": {
          "description": "Takes all WayPoints an element in wptType and an Eq function returning single WayPoint",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "findPoint",
          "normalized": "[WptType]-\u003eWptType-\u003e(WptType-\u003eMaybe Double)-\u003e(Double-\u003eDouble-\u003eBool)-\u003eMaybe(LocalTime,Double)",
          "package": "gps2htmlReport",
          "partial": "Point",
          "signature": "[WptType]-\u003eWptType-\u003e(WptType-\u003eMaybe Double)-\u003e(Double-\u003eDouble-\u003eBool)-\u003eMaybe(LocalTime,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:findPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the total journey distance\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "journeyDistance",
          "package": "gps2htmlReport",
          "signature": "[a] -\u003e Distance",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#journeyDistance",
          "type": "function"
        },
        "index": {
          "description": "Calculates the total journey distance",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "journeyDistance",
          "normalized": "[a]-\u003eDistance",
          "package": "gps2htmlReport",
          "partial": "Distance",
          "signature": "[a]-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:journeyDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the total journey time\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "journeyTime",
          "package": "gps2htmlReport",
          "signature": "[a] -\u003e NominalDiffTime",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#journeyTime",
          "type": "function"
        },
        "index": {
          "description": "Calculates the total journey time",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "journeyTime",
          "normalized": "[a]-\u003eNominalDiffTime",
          "package": "gps2htmlReport",
          "partial": "Time",
          "signature": "[a]-\u003eNominalDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:journeyTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the maximum speed\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "maxSpeed",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e Speed",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#maxSpeed",
          "type": "function"
        },
        "index": {
          "description": "Calculates the maximum speed",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "maxSpeed",
          "normalized": "[WptType]-\u003eSpeed",
          "package": "gps2htmlReport",
          "partial": "Speed",
          "signature": "[WptType]-\u003eSpeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:maxSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average elevation throughout the journey\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "meanElevation",
          "package": "gps2htmlReport",
          "signature": "[a] -\u003e Double",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#meanElevation",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average elevation throughout the journey",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "meanElevation",
          "normalized": "[a]-\u003eDouble",
          "package": "gps2htmlReport",
          "partial": "Elevation",
          "signature": "[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:meanElevation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the average speed of the journey\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "meanJourneySpeed",
          "package": "gps2htmlReport",
          "signature": "[a] -\u003e Distance",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#meanJourneySpeed",
          "type": "function"
        },
        "index": {
          "description": "Calculates the average speed of the journey",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "meanJourneySpeed",
          "normalized": "[a]-\u003eDistance",
          "package": "gps2htmlReport",
          "partial": "Journey Speed",
          "signature": "[a]-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:meanJourneySpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,Elevation)\n\u003c/p\u003e",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "ptsElevation",
          "package": "gps2htmlReport",
          "signature": "[WptType] -\u003e [(LocalTime, Double)]",
          "source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#ptsElevation",
          "type": "function"
        },
        "index": {
          "description": "Takes all WayPoints and creates list of tuples containing TimeStamp Elevation",
          "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
          "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
          "name": "ptsElevation",
          "normalized": "[WptType]-\u003e[(LocalTime,Double)]",
          "package": "gps2htmlReport",
          "partial": "Elevation",
          "signature": "[WptType]-\u003e[(LocalTime,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:ptsElevation"
      }
    }
  ]
]