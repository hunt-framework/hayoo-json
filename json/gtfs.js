[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing GTFS files.\n\u003c/p\u003e\u003cp\u003eBesides these functions, this module provides many orphan\n instances of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GTFS.Parse",
        "fct-package": "gtfs",
        "fct-signature": "module",
        "fct-source": "src/Data-GTFS-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Parsing GTFS files Besides these functions this module provides many orphan instances of Field and ParseRow",
        "hierarchy": "Data GTFS Parse",
        "module": "Data.GTFS.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "gtfs",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#v:parseFeed",
      "description": {
        "fct-descr": "\u003cp\u003eParse an entire feed directory.\n\u003c/p\u003e\u003cp\u003eEach individual file is read and parsed only when its field in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFeed\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n is forced.  The usual caveats of lazy I/O apply.  Parsing within a file\n is not lazy.\n\u003c/p\u003e\u003cp\u003eAlternatives to this function include \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.GTFS.Parse",
        "fct-package": "gtfs",
        "fct-signature": "FilePath -\u003e IO Feed",
        "fct-source": "src/Data-GTFS-Parse.html#parseFeed",
        "fct-type": "function",
        "title": "parseFeed"
      },
      "index": {
        "description": "Parse an entire feed directory Each individual file is read and parsed only when its field in Feed is forced The usual caveats of lazy apply Parsing within file is not lazy Alternatives to this function include parseFile and parseRow",
        "hierarchy": "Data GTFS Parse",
        "module": "Data.GTFS.Parse",
        "name": "parseFeed",
        "normalized": "FilePath-\u003eIO Feed",
        "package": "gtfs",
        "partial": "Feed",
        "signature": "FilePath-\u003eIO Feed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single GTFS data file.\n\u003c/p\u003e\u003cp\u003eSince some files are optional, this produces an empty list\n if the file does not exist.\n\u003c/p\u003e",
        "fct-module": "Data.GTFS.Parse",
        "fct-package": "gtfs",
        "fct-signature": "FilePath -\u003e IO [a]",
        "fct-source": "src/Data-GTFS-Parse.html#parseFile",
        "fct-type": "function",
        "title": "parseFile"
      },
      "index": {
        "description": "Parse single GTFS data file Since some files are optional this produces an empty list if the file does not exist",
        "hierarchy": "Data GTFS Parse",
        "module": "Data.GTFS.Parse",
        "name": "parseFile",
        "normalized": "FilePath-\u003eIO[a]",
        "package": "gtfs",
        "partial": "File",
        "signature": "FilePath-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes in a GTFS feed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "module",
        "fct-source": "src/Data-GTFS-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types in GTFS feed",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Types",
        "normalized": "",
        "package": "gtfs",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Agency",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "data",
        "title": "Agency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Agency",
        "normalized": "",
        "package": "gtfs",
        "partial": "Agency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:AgencyID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#AgencyID",
        "fct-type": "type",
        "title": "AgencyID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "AgencyID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Agency ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:BlockID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#BlockID",
        "fct-type": "type",
        "title": "BlockID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "BlockID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Block ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Calendar",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "data",
        "title": "Calendar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Calendar",
        "normalized": "",
        "package": "gtfs",
        "partial": "Calendar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:CalendarDate",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#CalendarDate",
        "fct-type": "data",
        "title": "CalendarDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "CalendarDate",
        "normalized": "",
        "package": "gtfs",
        "partial": "Calendar Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Color",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Color",
        "fct-type": "type",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Color",
        "normalized": "",
        "package": "gtfs",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Currency",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Currency",
        "fct-type": "type",
        "title": "Currency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Currency",
        "normalized": "",
        "package": "gtfs",
        "partial": "Currency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Date",
      "description": {
        "fct-descr": "\u003cp\u003eYear, month, day.\n\u003c/p\u003e",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Date",
        "fct-type": "data",
        "title": "Date"
      },
      "index": {
        "description": "Year month day",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Date",
        "normalized": "",
        "package": "gtfs",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:DirectionID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#DirectionID",
        "fct-type": "data",
        "title": "DirectionID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "DirectionID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Direction ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Distance",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Distance",
        "fct-type": "type",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Distance",
        "normalized": "",
        "package": "gtfs",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ExceptionType",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#ExceptionType",
        "fct-type": "data",
        "title": "ExceptionType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ExceptionType",
        "normalized": "",
        "package": "gtfs",
        "partial": "Exception Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareAttribute",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "data",
        "title": "FareAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "FareAttribute",
        "normalized": "",
        "package": "gtfs",
        "partial": "Fare Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#FareID",
        "fct-type": "type",
        "title": "FareID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "FareID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Fare ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareRule",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "data",
        "title": "FareRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "FareRule",
        "normalized": "",
        "package": "gtfs",
        "partial": "Fare Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Feed",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "data",
        "title": "Feed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Feed",
        "normalized": "",
        "package": "gtfs",
        "partial": "Feed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Frequency",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "data",
        "title": "Frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Frequency",
        "normalized": "",
        "package": "gtfs",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Language",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Language",
        "fct-type": "type",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Language",
        "normalized": "",
        "package": "gtfs",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:LatLon",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#LatLon",
        "fct-type": "type",
        "title": "LatLon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "LatLon",
        "normalized": "",
        "package": "gtfs",
        "partial": "Lat Lon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:LocationType",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#LocationType",
        "fct-type": "data",
        "title": "LocationType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "LocationType",
        "normalized": "",
        "package": "gtfs",
        "partial": "Location Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:OnOffType",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#OnOffType",
        "fct-type": "data",
        "title": "OnOffType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "OnOffType",
        "normalized": "",
        "package": "gtfs",
        "partial": "On Off Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:PaymentMethod",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#PaymentMethod",
        "fct-type": "data",
        "title": "PaymentMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "PaymentMethod",
        "normalized": "",
        "package": "gtfs",
        "partial": "Payment Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Phone",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Phone",
        "fct-type": "type",
        "title": "Phone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Phone",
        "normalized": "",
        "package": "gtfs",
        "partial": "Phone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Price",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Price",
        "fct-type": "type",
        "title": "Price"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Price",
        "normalized": "",
        "package": "gtfs",
        "partial": "Price",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Route",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "data",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Route",
        "normalized": "",
        "package": "gtfs",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:RouteID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#RouteID",
        "fct-type": "type",
        "title": "RouteID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "RouteID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Route ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:RouteType",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "data",
        "title": "RouteType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "RouteType",
        "normalized": "",
        "package": "gtfs",
        "partial": "Route Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Seconds",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Seconds",
        "fct-type": "type",
        "title": "Seconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Seconds",
        "normalized": "",
        "package": "gtfs",
        "partial": "Seconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Sequence",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Sequence",
        "fct-type": "type",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Sequence",
        "normalized": "",
        "package": "gtfs",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ServiceFlag",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#ServiceFlag",
        "fct-type": "data",
        "title": "ServiceFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ServiceFlag",
        "normalized": "",
        "package": "gtfs",
        "partial": "Service Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ServiceID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#ServiceID",
        "fct-type": "type",
        "title": "ServiceID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ServiceID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Service ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Shape",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "data",
        "title": "Shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Shape",
        "normalized": "",
        "package": "gtfs",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ShapeID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#ShapeID",
        "fct-type": "type",
        "title": "ShapeID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ShapeID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Shape ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Stop",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "data",
        "title": "Stop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Stop",
        "normalized": "",
        "package": "gtfs",
        "partial": "Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:StopID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#StopID",
        "fct-type": "type",
        "title": "StopID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "StopID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Stop ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:StopTime",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "data",
        "title": "StopTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "StopTime",
        "normalized": "",
        "package": "gtfs",
        "partial": "Stop Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eHour, minute, second.\n\u003c/p\u003e\u003cp\u003eHours over 23 are legal, representing the next day\n relative to the start of a trip.\n\u003c/p\u003e",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Time",
        "fct-type": "data",
        "title": "Time"
      },
      "index": {
        "description": "Hour minute second Hours over are legal representing the next day relative to the start of trip",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Time",
        "normalized": "",
        "package": "gtfs",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Timezone",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#Timezone",
        "fct-type": "type",
        "title": "Timezone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Timezone",
        "normalized": "",
        "package": "gtfs",
        "partial": "Timezone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Transfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "data",
        "title": "Transfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Transfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TransferLimit",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#TransferLimit",
        "fct-type": "type",
        "title": "TransferLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "TransferLimit",
        "normalized": "",
        "package": "gtfs",
        "partial": "Transfer Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TransferType",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#TransferType",
        "fct-type": "data",
        "title": "TransferType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "TransferType",
        "normalized": "",
        "package": "gtfs",
        "partial": "Transfer Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Trip",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "data",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "data",
        "title": "Trip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Trip",
        "normalized": "",
        "package": "gtfs",
        "partial": "Trip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TripID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#TripID",
        "fct-type": "type",
        "title": "TripID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "TripID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Trip ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:URL",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#URL",
        "fct-type": "type",
        "title": "URL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "URL",
        "normalized": "",
        "package": "gtfs",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ZoneID",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "type",
        "fct-source": "src/Data-GTFS-Types.html#ZoneID",
        "fct-type": "type",
        "title": "ZoneID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ZoneID",
        "normalized": "",
        "package": "gtfs",
        "partial": "Zone ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Agency",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Agency",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "Agency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Agency",
        "normalized": "",
        "package": "gtfs",
        "partial": "Agency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Bus",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Bus",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Bus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Bus",
        "normalized": "",
        "package": "gtfs",
        "partial": "Bus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:CableCar",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "CableCar",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "CableCar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "CableCar",
        "normalized": "",
        "package": "gtfs",
        "partial": "Cable Car",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Calendar",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Calendar",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "Calendar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Calendar",
        "normalized": "",
        "package": "gtfs",
        "partial": "Calendar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:CalendarDate",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "CalendarDate",
        "fct-source": "src/Data-GTFS-Types.html#CalendarDate",
        "fct-type": "function",
        "title": "CalendarDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "CalendarDate",
        "normalized": "",
        "package": "gtfs",
        "partial": "Calendar Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Date",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Date Int Int Int",
        "fct-source": "src/Data-GTFS-Types.html#Date",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Date",
        "normalized": "",
        "package": "gtfs",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:DirectionA",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "DirectionA",
        "fct-source": "src/Data-GTFS-Types.html#DirectionID",
        "fct-type": "function",
        "title": "DirectionA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "DirectionA",
        "normalized": "",
        "package": "gtfs",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:DirectionB",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "DirectionB",
        "fct-source": "src/Data-GTFS-Types.html#DirectionID",
        "fct-type": "function",
        "title": "DirectionB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "DirectionB",
        "normalized": "",
        "package": "gtfs",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:FareAttribute",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "FareAttribute",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "FareAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "FareAttribute",
        "normalized": "",
        "package": "gtfs",
        "partial": "Fare Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:FareRule",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "FareRule",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "FareRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "FareRule",
        "normalized": "",
        "package": "gtfs",
        "partial": "Fare Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Feed",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Feed",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "Feed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Feed",
        "normalized": "",
        "package": "gtfs",
        "partial": "Feed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Ferry",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Ferry",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Ferry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Ferry",
        "normalized": "",
        "package": "gtfs",
        "partial": "Ferry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Frequency",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Frequency",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "function",
        "title": "Frequency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Frequency",
        "normalized": "",
        "package": "gtfs",
        "partial": "Frequency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Funicular",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Funicular",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Funicular"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Funicular",
        "normalized": "",
        "package": "gtfs",
        "partial": "Funicular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Gondola",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Gondola",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Gondola"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Gondola",
        "normalized": "",
        "package": "gtfs",
        "partial": "Gondola",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:HasService",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "HasService",
        "fct-source": "src/Data-GTFS-Types.html#ServiceFlag",
        "fct-type": "function",
        "title": "HasService"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "HasService",
        "normalized": "",
        "package": "gtfs",
        "partial": "Has Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:LocStation",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LocStation",
        "fct-source": "src/Data-GTFS-Types.html#LocationType",
        "fct-type": "function",
        "title": "LocStation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "LocStation",
        "normalized": "",
        "package": "gtfs",
        "partial": "Loc Station",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:LocStop",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LocStop",
        "fct-source": "src/Data-GTFS-Types.html#LocationType",
        "fct-type": "function",
        "title": "LocStop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "LocStop",
        "normalized": "",
        "package": "gtfs",
        "partial": "Loc Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Metro",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Metro",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Metro"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Metro",
        "normalized": "",
        "package": "gtfs",
        "partial": "Metro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MinimumTransfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "MinimumTransfer",
        "fct-source": "src/Data-GTFS-Types.html#TransferType",
        "fct-type": "function",
        "title": "MinimumTransfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "MinimumTransfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "Minimum Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MustAskDriver",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "MustAskDriver",
        "fct-source": "src/Data-GTFS-Types.html#OnOffType",
        "fct-type": "function",
        "title": "MustAskDriver"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "MustAskDriver",
        "normalized": "",
        "package": "gtfs",
        "partial": "Must Ask Driver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MustPhone",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "MustPhone",
        "fct-source": "src/Data-GTFS-Types.html#OnOffType",
        "fct-type": "function",
        "title": "MustPhone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "MustPhone",
        "normalized": "",
        "package": "gtfs",
        "partial": "Must Phone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoException",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "NoException",
        "fct-source": "src/Data-GTFS-Types.html#ExceptionType",
        "fct-type": "function",
        "title": "NoException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "NoException",
        "normalized": "",
        "package": "gtfs",
        "partial": "No Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoService",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "NoService",
        "fct-source": "src/Data-GTFS-Types.html#ServiceFlag",
        "fct-type": "function",
        "title": "NoService"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "NoService",
        "normalized": "",
        "package": "gtfs",
        "partial": "No Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoTransfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "NoTransfer",
        "fct-source": "src/Data-GTFS-Types.html#TransferType",
        "fct-type": "function",
        "title": "NoTransfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "NoTransfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "No Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NotAvailable",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "NotAvailable",
        "fct-source": "src/Data-GTFS-Types.html#OnOffType",
        "fct-type": "function",
        "title": "NotAvailable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "NotAvailable",
        "normalized": "",
        "package": "gtfs",
        "partial": "Not Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:PayBeforeBoarding",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "PayBeforeBoarding",
        "fct-source": "src/Data-GTFS-Types.html#PaymentMethod",
        "fct-type": "function",
        "title": "PayBeforeBoarding"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "PayBeforeBoarding",
        "normalized": "",
        "package": "gtfs",
        "partial": "Pay Before Boarding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:PayOnBoard",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "PayOnBoard",
        "fct-source": "src/Data-GTFS-Types.html#PaymentMethod",
        "fct-type": "function",
        "title": "PayOnBoard"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "PayOnBoard",
        "normalized": "",
        "package": "gtfs",
        "partial": "Pay On Board",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Rail",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Rail",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Rail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Rail",
        "normalized": "",
        "package": "gtfs",
        "partial": "Rail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:RecommendedTransfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "RecommendedTransfer",
        "fct-source": "src/Data-GTFS-Types.html#TransferType",
        "fct-type": "function",
        "title": "RecommendedTransfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "RecommendedTransfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "Recommended Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:RegularlyScheduled",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "RegularlyScheduled",
        "fct-source": "src/Data-GTFS-Types.html#OnOffType",
        "fct-type": "function",
        "title": "RegularlyScheduled"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "RegularlyScheduled",
        "normalized": "",
        "package": "gtfs",
        "partial": "Regularly Scheduled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Route",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Route",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Route",
        "normalized": "",
        "package": "gtfs",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:ServiceAdded",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceAdded",
        "fct-source": "src/Data-GTFS-Types.html#ExceptionType",
        "fct-type": "function",
        "title": "ServiceAdded"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ServiceAdded",
        "normalized": "",
        "package": "gtfs",
        "partial": "Service Added",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:ServiceRemoved",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceRemoved",
        "fct-source": "src/Data-GTFS-Types.html#ExceptionType",
        "fct-type": "function",
        "title": "ServiceRemoved"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "ServiceRemoved",
        "normalized": "",
        "package": "gtfs",
        "partial": "Service Removed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Shape",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Shape",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "Shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Shape",
        "normalized": "",
        "package": "gtfs",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Stop",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Stop",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "Stop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Stop",
        "normalized": "",
        "package": "gtfs",
        "partial": "Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:StopTime",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "StopTime",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "StopTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "StopTime",
        "normalized": "",
        "package": "gtfs",
        "partial": "Stop Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Time",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Time Int Int Int",
        "fct-source": "src/Data-GTFS-Types.html#Time",
        "fct-type": "function",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Time",
        "normalized": "",
        "package": "gtfs",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:TimedTransfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TimedTransfer",
        "fct-source": "src/Data-GTFS-Types.html#TransferType",
        "fct-type": "function",
        "title": "TimedTransfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "TimedTransfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "Timed Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Tram",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Tram",
        "fct-source": "src/Data-GTFS-Types.html#RouteType",
        "fct-type": "function",
        "title": "Tram"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Tram",
        "normalized": "",
        "package": "gtfs",
        "partial": "Tram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Transfer",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Transfer",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "function",
        "title": "Transfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Transfer",
        "normalized": "",
        "package": "gtfs",
        "partial": "Transfer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Trip",
      "description": {
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Trip",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "Trip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "Trip",
        "normalized": "",
        "package": "gtfs",
        "partial": "Trip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe AgencyID",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_lang",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Language",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_lang"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_lang",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "String",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_name",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_phone",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Phone",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_phone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_phone",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_timezone",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Timezone",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_timezone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_timezone",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_url",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "URL",
        "fct-source": "src/Data-GTFS-Types.html#Agency",
        "fct-type": "function",
        "title": "a_agency_url"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "a_agency_url",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_end_date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Date",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_end_date"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_end_date",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_friday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_friday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_friday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_monday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_monday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_monday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_saturday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_saturday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_saturday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_service_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceID",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_service_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_service_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_start_date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Date",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_start_date"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_start_date",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_sunday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_sunday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_sunday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_thursday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_thursday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_thursday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_tuesday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_tuesday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_tuesday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_wednesday",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceFlag",
        "fct-source": "src/Data-GTFS-Types.html#Calendar",
        "fct-type": "function",
        "title": "c_wednesday"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "c_wednesday",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Date",
        "fct-source": "src/Data-GTFS-Types.html#CalendarDate",
        "fct-type": "function",
        "title": "cd_date"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "cd_date",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_exception_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ExceptionType",
        "fct-source": "src/Data-GTFS-Types.html#CalendarDate",
        "fct-type": "function",
        "title": "cd_exception_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "cd_exception_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_service_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceID",
        "fct-source": "src/Data-GTFS-Types.html#CalendarDate",
        "fct-type": "function",
        "title": "cd_service_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "cd_service_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_agency",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Agency]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_agency"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_agency",
        "normalized": "[Agency]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Agency]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_calendar",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Calendar]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_calendar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_calendar",
        "normalized": "[Calendar]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Calendar]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_calendar_dates",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[CalendarDate]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_calendar_dates"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_calendar_dates",
        "normalized": "[CalendarDate]",
        "package": "gtfs",
        "partial": "",
        "signature": "[CalendarDate]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_fare_attributes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[FareAttribute]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_fare_attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_fare_attributes",
        "normalized": "[FareAttribute]",
        "package": "gtfs",
        "partial": "",
        "signature": "[FareAttribute]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_fare_rules",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[FareRule]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_fare_rules"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_fare_rules",
        "normalized": "[FareRule]",
        "package": "gtfs",
        "partial": "",
        "signature": "[FareRule]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_frequencies",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Frequency]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_frequencies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_frequencies",
        "normalized": "[Frequency]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Frequency]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_routes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Route]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_routes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_routes",
        "normalized": "[Route]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Route]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_shapes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Shape]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_shapes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_shapes",
        "normalized": "[Shape]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Shape]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_stop_times",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[StopTime]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_stop_times"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_stop_times",
        "normalized": "[StopTime]",
        "package": "gtfs",
        "partial": "",
        "signature": "[StopTime]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_stops",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Stop]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_stops"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_stops",
        "normalized": "[Stop]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Stop]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_transfers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Transfer]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_transfers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_transfers",
        "normalized": "[Transfer]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Transfer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_trips",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "[Trip]",
        "fct-source": "src/Data-GTFS-Types.html#Feed",
        "fct-type": "function",
        "title": "f_trips"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "f_trips",
        "normalized": "[Trip]",
        "package": "gtfs",
        "partial": "",
        "signature": "[Trip]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_currency_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Currency",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_currency_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_currency_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_fare_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "FareID",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_fare_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_fare_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_payment_method",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "PaymentMethod",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_payment_method"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_payment_method",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_price",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Price",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_price"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_price",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_transfer_duration",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Seconds",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_transfer_duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_transfer_duration",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_transfers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TransferLimit",
        "fct-source": "src/Data-GTFS-Types.html#FareAttribute",
        "fct-type": "function",
        "title": "fa_transfers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fa_transfers",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_end_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Time",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "function",
        "title": "fq_end_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fq_end_time",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_headway_secs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Seconds",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "function",
        "title": "fq_headway_secs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fq_headway_secs",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_start_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Time",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "function",
        "title": "fq_start_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fq_start_time",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_trip_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TripID",
        "fct-source": "src/Data-GTFS-Types.html#Frequency",
        "fct-type": "function",
        "title": "fq_trip_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fq_trip_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_contains_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe ZoneID",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "fr_contains_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fr_contains_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_destination_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe ZoneID",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "fr_destination_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fr_destination_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_fare_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "FareID",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "fr_fare_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fr_fare_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_origin_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe ZoneID",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "fr_origin_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fr_origin_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_route_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe RouteID",
        "fct-source": "src/Data-GTFS-Types.html#FareRule",
        "fct-type": "function",
        "title": "fr_route_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "fr_route_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_agency_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe AgencyID",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_agency_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_agency_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_color",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_desc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_desc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_desc",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "RouteID",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_long_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "String",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_long_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_long_name",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_short_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "String",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_short_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_short_name",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_text_color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_text_color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_text_color",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "RouteType",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_url",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe URL",
        "fct-source": "src/Data-GTFS-Types.html#Route",
        "fct-type": "function",
        "title": "r_route_url"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "r_route_url",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_location_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe LocationType",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_location_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_location_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_parent_station",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe StopID",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_parent_station"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_parent_station",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_code",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_code"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_code",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_desc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_desc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_desc",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "StopID",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_lat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LatLon",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_lat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_lat",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_lon",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LatLon",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_lon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_lon",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "String",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_name",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_url",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe URL",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_stop_url"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_stop_url",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_zone_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe ZoneID",
        "fct-source": "src/Data-GTFS-Types.html#Stop",
        "fct-type": "function",
        "title": "s_zone_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "s_zone_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_dist_traveled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Distance",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "sh_shape_dist_traveled"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "sh_shape_dist_traveled",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ShapeID",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "sh_shape_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "sh_shape_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_lat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LatLon",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "sh_shape_pt_lat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "sh_shape_pt_lat",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_lon",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "LatLon",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "sh_shape_pt_lon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "sh_shape_pt_lon",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Sequence",
        "fct-source": "src/Data-GTFS-Types.html#Shape",
        "fct-type": "function",
        "title": "sh_shape_pt_sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "sh_shape_pt_sequence",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_arrival_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Time",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_arrival_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_arrival_time",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_departure_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Time",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_departure_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_departure_time",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_drop_off_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe OnOffType",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_drop_off_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_drop_off_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_pickup_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe OnOffType",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_pickup_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_pickup_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_shape_dist_traveled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Distance",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_shape_dist_traveled"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_shape_dist_traveled",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_headsign",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_stop_headsign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_stop_headsign",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "StopID",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_stop_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_stop_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Sequence",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_stop_sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_stop_sequence",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_trip_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TripID",
        "fct-source": "src/Data-GTFS-Types.html#StopTime",
        "fct-type": "function",
        "title": "st_trip_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "st_trip_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_block_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe BlockID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_block_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_block_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_direction_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe DirectionID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_direction_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_direction_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_route_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "RouteID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_route_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_route_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_service_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "ServiceID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_service_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_service_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_shape_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe ShapeID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_shape_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_shape_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_headsign",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_trip_headsign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_trip_headsign",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TripID",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_trip_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_trip_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_short_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe String",
        "fct-source": "src/Data-GTFS-Types.html#Trip",
        "fct-type": "function",
        "title": "t_trip_short_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "t_trip_short_name",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_from_stop_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "StopID",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "function",
        "title": "x_from_stop_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "x_from_stop_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_min_transfer_time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "Maybe Seconds",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "function",
        "title": "x_min_transfer_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "x_min_transfer_time",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_to_stop_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "StopID",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "function",
        "title": "x_to_stop_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "x_to_stop_id",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_transfer_type",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.GTFS.Types",
        "fct-package": "gtfs",
        "fct-signature": "TransferType",
        "fct-source": "src/Data-GTFS-Types.html#Transfer",
        "fct-type": "function",
        "title": "x_transfer_type"
      },
      "index": {
        "description": "",
        "hierarchy": "Data GTFS Types",
        "module": "Data.GTFS.Types",
        "name": "x_transfer_type",
        "normalized": "",
        "package": "gtfs",
        "partial": "",
        "signature": ""
      }
    }
  }
]