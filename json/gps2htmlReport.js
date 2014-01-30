[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-DrawOsm.html#",
      "description": {
        "fct-module": "Data.GPS.Gps2HtmlReport.DrawOsm",
        "fct-package": "gps2htmlReport",
        "fct-signature": "module",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-DrawOsm.html",
        "fct-type": "module",
        "title": "DrawOsm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GPS Gps2HtmlReport DrawOsm",
        "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
        "name": "DrawOsm",
        "normalized": "",
        "package": "gps2htmlReport",
        "partial": "Draw Osm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-DrawOsm.html#v:generateOsmMap",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the destination directory for the web content,\n the (Trail WptType), and uses the DrawOsm functions\n to generate an `osm.png' file showing the trail.\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.DrawOsm",
        "fct-package": "gps2htmlReport",
        "fct-signature": "String -\u003e [WptType] -\u003e IO ()",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-DrawOsm.html#generateOsmMap",
        "fct-type": "function",
        "title": "generateOsmMap"
      },
      "index": {
        "description": "Takes the destination directory for the web content the Trail WptType and uses the DrawOsm functions to generate an osm.png file showing the trail",
        "hierarchy": "Data GPS Gps2HtmlReport DrawOsm",
        "module": "Data.GPS.Gps2HtmlReport.DrawOsm",
        "name": "generateOsmMap",
        "normalized": "String-\u003e[WptType]-\u003eIO()",
        "package": "gps2htmlReport",
        "partial": "Osm Map",
        "signature": "String-\u003e[WptType]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eHTMLGenerator\u003c/code\u003e module generates the HTML content for the index.html generated\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
        "fct-package": "gps2htmlReport",
        "fct-signature": "module",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-HTMLGenerator.html",
        "fct-type": "module",
        "title": "HTMLGenerator"
      },
      "index": {
        "description": "The HTMLGenerator module generates the HTML content for the index.html generated",
        "hierarchy": "Data GPS Gps2HtmlReport HTMLGenerator",
        "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
        "name": "HTMLGenerator",
        "normalized": "",
        "package": "gps2htmlReport",
        "partial": "HTMLGenerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#v:generateHtmlPage",
      "description": {
        "fct-descr": "\u003cp\u003eTakes all the WayPoints and generates the HTML file\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e Html",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-HTMLGenerator.html#generateHtmlPage",
        "fct-type": "function",
        "title": "generateHtmlPage"
      },
      "index": {
        "description": "Takes all the WayPoints and generates the HTML file",
        "hierarchy": "Data GPS Gps2HtmlReport HTMLGenerator",
        "module": "Data.GPS.Gps2HtmlReport.HTMLGenerator",
        "name": "generateHtmlPage",
        "normalized": "[WptType]-\u003eHtml",
        "package": "gps2htmlReport",
        "partial": "Html Page",
        "signature": "[WptType]-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses the JourneyStats module to generate\n the statistics about the journey WayPoints, then\n uses the Cairo bindings to generate the charts\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "fct-package": "gps2htmlReport",
        "fct-signature": "module",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html",
        "fct-type": "module",
        "title": "JourneyCharts"
      },
      "index": {
        "description": "This module uses the JourneyStats module to generate the statistics about the journey WayPoints then uses the Cairo bindings to generate the charts",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
        "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "name": "JourneyCharts",
        "normalized": "",
        "package": "gps2htmlReport",
        "partial": "Journey Charts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:chart1",
      "description": {
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e (String, OutputType -\u003e Renderable ())",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#chart1",
        "fct-type": "function",
        "title": "chart1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
        "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "name": "chart1",
        "normalized": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
        "package": "gps2htmlReport",
        "partial": "",
        "signature": "[WptType]-\u003e(String,OutputType-\u003eRenderable())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:chart2",
      "description": {
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e (String, OutputType -\u003e Renderable ())",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#chart2",
        "fct-type": "function",
        "title": "chart2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
        "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "name": "chart2",
        "normalized": "[WptType]-\u003e(String,OutputType-\u003eRenderable())",
        "package": "gps2htmlReport",
        "partial": "",
        "signature": "[WptType]-\u003e(String,OutputType-\u003eRenderable())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyCharts.html#v:renderToPng",
      "description": {
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "fct-package": "gps2htmlReport",
        "fct-signature": "(t, OutputType -\u003e Renderable a) -\u003e FilePath -\u003e IO (PickFn a)",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyCharts.html#renderToPng",
        "fct-type": "function",
        "title": "renderToPng"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyCharts",
        "module": "Data.GPS.Gps2HtmlReport.JourneyCharts",
        "name": "renderToPng",
        "normalized": "(a,OutputType-\u003eRenderable b)-\u003eFilePath-\u003eIO(PickFn b)",
        "package": "gps2htmlReport",
        "partial": "To Png",
        "signature": "(t,OutputType-\u003eRenderable a)-\u003eFilePath-\u003eIO(PickFn a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the JourneyCharts and HTMLGenerator \n modules with statistics for the charts, and the journey statistics\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "module",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html",
        "fct-type": "module",
        "title": "JourneyStats"
      },
      "index": {
        "description": "This module provides the JourneyCharts and HTMLGenerator modules with statistics for the charts and the journey statistics",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "JourneyStats",
        "normalized": "",
        "package": "gps2htmlReport",
        "partial": "Journey Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:accumDistance",
      "description": {
        "fct-descr": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,JourneyDistanceAtPoint)\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e Double -\u003e [(LocalTime, Distance)]",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#accumDistance",
        "fct-type": "function",
        "title": "accumDistance"
      },
      "index": {
        "description": "Takes all WayPoints and creates list of tuples containing TimeStamp JourneyDistanceAtPoint",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "accumDistance",
        "normalized": "[WptType]-\u003eDouble-\u003e[(LocalTime,Distance)]",
        "package": "gps2htmlReport",
        "partial": "Distance",
        "signature": "[WptType]-\u003eDouble-\u003e[(LocalTime,Distance)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:avrSpeedOverTime",
      "description": {
        "fct-descr": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,AvrSpeedAtThisPoint)\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[(LocalTime, Speed)] -\u003e Double -\u003e Double -\u003e [(LocalTime, Speed)] -\u003e [(LocalTime, Speed)]",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#avrSpeedOverTime",
        "fct-type": "function",
        "title": "avrSpeedOverTime"
      },
      "index": {
        "description": "Takes all WayPoints and creates list of tuples containing TimeStamp AvrSpeedAtThisPoint",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "avrSpeedOverTime",
        "normalized": "[(LocalTime,Speed)]-\u003eDouble-\u003eDouble-\u003e[(LocalTime,Speed)]-\u003e[(LocalTime,Speed)]",
        "package": "gps2htmlReport",
        "partial": "Speed Over Time",
        "signature": "[(LocalTime,Speed)]-\u003eDouble-\u003eDouble-\u003e[(LocalTime,Speed)]-\u003e[(LocalTime,Speed)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:dateOfJourney",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the date of the journey (from the first WayPoint)\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[a] -\u003e Maybe Day",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#dateOfJourney",
        "fct-type": "function",
        "title": "dateOfJourney"
      },
      "index": {
        "description": "Extracts the date of the journey from the first WayPoint",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "dateOfJourney",
        "normalized": "[a]-\u003eMaybe Day",
        "package": "gps2htmlReport",
        "partial": "Of Journey",
        "signature": "[a]-\u003eMaybe Day"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:findPoint",
      "description": {
        "fct-descr": "\u003cp\u003eTakes all WayPoints, an element in wptType, and an Eq function, returning a single WayPoint\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e WptType -\u003e (WptType -\u003e Maybe Double) -\u003e (Double -\u003e Double -\u003e Bool) -\u003e Maybe (LocalTime, Double)",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#findPoint",
        "fct-type": "function",
        "title": "findPoint"
      },
      "index": {
        "description": "Takes all WayPoints an element in wptType and an Eq function returning single WayPoint",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "findPoint",
        "normalized": "[WptType]-\u003eWptType-\u003e(WptType-\u003eMaybe Double)-\u003e(Double-\u003eDouble-\u003eBool)-\u003eMaybe(LocalTime,Double)",
        "package": "gps2htmlReport",
        "partial": "Point",
        "signature": "[WptType]-\u003eWptType-\u003e(WptType-\u003eMaybe Double)-\u003e(Double-\u003eDouble-\u003eBool)-\u003eMaybe(LocalTime,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:journeyDistance",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the total journey distance\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[a] -\u003e Distance",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#journeyDistance",
        "fct-type": "function",
        "title": "journeyDistance"
      },
      "index": {
        "description": "Calculates the total journey distance",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "journeyDistance",
        "normalized": "[a]-\u003eDistance",
        "package": "gps2htmlReport",
        "partial": "Distance",
        "signature": "[a]-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:journeyTime",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the total journey time\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[a] -\u003e NominalDiffTime",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#journeyTime",
        "fct-type": "function",
        "title": "journeyTime"
      },
      "index": {
        "description": "Calculates the total journey time",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "journeyTime",
        "normalized": "[a]-\u003eNominalDiffTime",
        "package": "gps2htmlReport",
        "partial": "Time",
        "signature": "[a]-\u003eNominalDiffTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:maxSpeed",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the maximum speed\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e Speed",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#maxSpeed",
        "fct-type": "function",
        "title": "maxSpeed"
      },
      "index": {
        "description": "Calculates the maximum speed",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "maxSpeed",
        "normalized": "[WptType]-\u003eSpeed",
        "package": "gps2htmlReport",
        "partial": "Speed",
        "signature": "[WptType]-\u003eSpeed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:meanElevation",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the average elevation throughout the journey\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[a] -\u003e Double",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#meanElevation",
        "fct-type": "function",
        "title": "meanElevation"
      },
      "index": {
        "description": "Calculates the average elevation throughout the journey",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "meanElevation",
        "normalized": "[a]-\u003eDouble",
        "package": "gps2htmlReport",
        "partial": "Elevation",
        "signature": "[a]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:meanJourneySpeed",
      "description": {
        "fct-descr": "\u003cp\u003eCalculates the average speed of the journey\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[a] -\u003e Distance",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#meanJourneySpeed",
        "fct-type": "function",
        "title": "meanJourneySpeed"
      },
      "index": {
        "description": "Calculates the average speed of the journey",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "meanJourneySpeed",
        "normalized": "[a]-\u003eDistance",
        "package": "gps2htmlReport",
        "partial": "Journey Speed",
        "signature": "[a]-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gps2htmlReport/docs/Data-GPS-Gps2HtmlReport-JourneyStats.html#v:ptsElevation",
      "description": {
        "fct-descr": "\u003cp\u003eTakes all WayPoints, and creates a list of tuples containing (TimeStamp,Elevation)\n\u003c/p\u003e",
        "fct-module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "fct-package": "gps2htmlReport",
        "fct-signature": "[WptType] -\u003e [(LocalTime, Double)]",
        "fct-source": "src/Data-GPS-Gps2HtmlReport-JourneyStats.html#ptsElevation",
        "fct-type": "function",
        "title": "ptsElevation"
      },
      "index": {
        "description": "Takes all WayPoints and creates list of tuples containing TimeStamp Elevation",
        "hierarchy": "Data GPS Gps2HtmlReport JourneyStats",
        "module": "Data.GPS.Gps2HtmlReport.JourneyStats",
        "name": "ptsElevation",
        "normalized": "[WptType]-\u003e[(LocalTime,Double)]",
        "package": "gps2htmlReport",
        "partial": "Elevation",
        "signature": "[WptType]-\u003e[(LocalTime,Double)]"
      }
    }
  }
]