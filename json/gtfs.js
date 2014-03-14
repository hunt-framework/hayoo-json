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
        "word": "gtfs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing GTFS files.\n\u003c/p\u003e\u003cp\u003eBesides these functions, this module provides many orphan\n instances of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eParseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GTFS.Parse",
          "name": "Parse",
          "package": "gtfs",
          "source": "src/Data-GTFS-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing GTFS files Besides these functions this module provides many orphan instances of Field and ParseRow",
          "hierarchy": "Data GTFS Parse",
          "module": "Data.GTFS.Parse",
          "name": "Parse",
          "package": "gtfs",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an entire feed directory.\n\u003c/p\u003e\u003cp\u003eEach individual file is read and parsed only when its field in \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFeed\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n is forced.  The usual caveats of lazy I/O apply.  Parsing within a file\n is not lazy.\n\u003c/p\u003e\u003cp\u003eAlternatives to this function include \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseFile\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparseRow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.GTFS.Parse",
          "name": "parseFeed",
          "package": "gtfs",
          "signature": "FilePath -\u003e IO Feed",
          "source": "src/Data-GTFS-Parse.html#parseFeed",
          "type": "function"
        },
        "index": {
          "description": "Parse an entire feed directory Each individual file is read and parsed only when its field in Feed is forced The usual caveats of lazy apply Parsing within file is not lazy Alternatives to this function include parseFile and parseRow",
          "hierarchy": "Data GTFS Parse",
          "module": "Data.GTFS.Parse",
          "name": "parseFeed",
          "normalized": "FilePath-\u003eIO Feed",
          "package": "gtfs",
          "partial": "Feed",
          "signature": "FilePath-\u003eIO Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#v:parseFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single GTFS data file.\n\u003c/p\u003e\u003cp\u003eSince some files are optional, this produces an empty list\n if the file does not exist.\n\u003c/p\u003e",
          "module": "Data.GTFS.Parse",
          "name": "parseFile",
          "package": "gtfs",
          "signature": "FilePath -\u003e IO [a]",
          "source": "src/Data-GTFS-Parse.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Parse single GTFS data file Since some files are optional this produces an empty list if the file does not exist",
          "hierarchy": "Data GTFS Parse",
          "module": "Data.GTFS.Parse",
          "name": "parseFile",
          "normalized": "FilePath-\u003eIO[a]",
          "package": "gtfs",
          "partial": "File",
          "signature": "FilePath-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Parse.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes in a GTFS feed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.GTFS.Types",
          "name": "Types",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types in GTFS feed",
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Types",
          "package": "gtfs",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Agency",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Agency",
          "package": "gtfs",
          "partial": "Agency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Agency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "AgencyID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#AgencyID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "AgencyID",
          "package": "gtfs",
          "partial": "Agency ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:AgencyID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "BlockID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#BlockID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "BlockID",
          "package": "gtfs",
          "partial": "Block ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:BlockID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Calendar",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Calendar",
          "package": "gtfs",
          "partial": "Calendar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Calendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "CalendarDate",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#CalendarDate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "CalendarDate",
          "package": "gtfs",
          "partial": "Calendar Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:CalendarDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Color",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Color",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Color",
          "package": "gtfs",
          "partial": "Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Currency",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Currency",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Currency",
          "package": "gtfs",
          "partial": "Currency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Currency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYear, month, day.\n\u003c/p\u003e",
          "module": "Data.GTFS.Types",
          "name": "Date",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Date",
          "type": "data"
        },
        "index": {
          "description": "Year month day",
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Date",
          "package": "gtfs",
          "partial": "Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "DirectionID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#DirectionID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "DirectionID",
          "package": "gtfs",
          "partial": "Direction ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:DirectionID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Distance",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Distance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Distance",
          "package": "gtfs",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ExceptionType",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#ExceptionType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ExceptionType",
          "package": "gtfs",
          "partial": "Exception Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ExceptionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "FareAttribute",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "FareAttribute",
          "package": "gtfs",
          "partial": "Fare Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "FareID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#FareID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "FareID",
          "package": "gtfs",
          "partial": "Fare ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "FareRule",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "FareRule",
          "package": "gtfs",
          "partial": "Fare Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:FareRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Feed",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Feed",
          "package": "gtfs",
          "partial": "Feed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Frequency",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Frequency",
          "package": "gtfs",
          "partial": "Frequency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Language",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Language",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Language",
          "package": "gtfs",
          "partial": "Language",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "LatLon",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#LatLon",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "LatLon",
          "package": "gtfs",
          "partial": "Lat Lon",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:LatLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "LocationType",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#LocationType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "LocationType",
          "package": "gtfs",
          "partial": "Location Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:LocationType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "OnOffType",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#OnOffType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "OnOffType",
          "package": "gtfs",
          "partial": "On Off Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:OnOffType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "PaymentMethod",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#PaymentMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "PaymentMethod",
          "package": "gtfs",
          "partial": "Payment Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:PaymentMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Phone",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Phone",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Phone",
          "package": "gtfs",
          "partial": "Phone",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Phone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Price",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Price",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Price",
          "package": "gtfs",
          "partial": "Price",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Price"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Route",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Route",
          "package": "gtfs",
          "partial": "Route",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "RouteID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#RouteID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "RouteID",
          "package": "gtfs",
          "partial": "Route ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:RouteID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "RouteType",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "RouteType",
          "package": "gtfs",
          "partial": "Route Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:RouteType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Seconds",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Seconds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Seconds",
          "package": "gtfs",
          "partial": "Seconds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Sequence",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Sequence",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Sequence",
          "package": "gtfs",
          "partial": "Sequence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ServiceFlag",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#ServiceFlag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ServiceFlag",
          "package": "gtfs",
          "partial": "Service Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ServiceFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ServiceID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#ServiceID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ServiceID",
          "package": "gtfs",
          "partial": "Service ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ServiceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Shape",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Shape",
          "package": "gtfs",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ShapeID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#ShapeID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ShapeID",
          "package": "gtfs",
          "partial": "Shape ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ShapeID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Stop",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Stop",
          "package": "gtfs",
          "partial": "Stop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "StopID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#StopID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "StopID",
          "package": "gtfs",
          "partial": "Stop ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:StopID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "StopTime",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "StopTime",
          "package": "gtfs",
          "partial": "Stop Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:StopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHour, minute, second.\n\u003c/p\u003e\u003cp\u003eHours over 23 are legal, representing the next day\n relative to the start of a trip.\n\u003c/p\u003e",
          "module": "Data.GTFS.Types",
          "name": "Time",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Time",
          "type": "data"
        },
        "index": {
          "description": "Hour minute second Hours over are legal representing the next day relative to the start of trip",
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Time",
          "package": "gtfs",
          "partial": "Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Timezone",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Timezone",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Timezone",
          "package": "gtfs",
          "partial": "Timezone",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Timezone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Transfer",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Transfer",
          "package": "gtfs",
          "partial": "Transfer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "TransferLimit",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#TransferLimit",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "TransferLimit",
          "package": "gtfs",
          "partial": "Transfer Limit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TransferLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "TransferType",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#TransferType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "TransferType",
          "package": "gtfs",
          "partial": "Transfer Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TransferType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Trip",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Trip",
          "package": "gtfs",
          "partial": "Trip",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:Trip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "TripID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#TripID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "TripID",
          "package": "gtfs",
          "partial": "Trip ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:TripID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "URL",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#URL",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "URL",
          "package": "gtfs",
          "partial": "URL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ZoneID",
          "package": "gtfs",
          "source": "src/Data-GTFS-Types.html#ZoneID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ZoneID",
          "package": "gtfs",
          "partial": "Zone ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#t:ZoneID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Agency",
          "package": "gtfs",
          "signature": "Agency",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Agency",
          "package": "gtfs",
          "partial": "Agency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Agency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Bus",
          "package": "gtfs",
          "signature": "Bus",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Bus",
          "package": "gtfs",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "CableCar",
          "package": "gtfs",
          "signature": "CableCar",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "CableCar",
          "package": "gtfs",
          "partial": "Cable Car",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:CableCar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Calendar",
          "package": "gtfs",
          "signature": "Calendar",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Calendar",
          "package": "gtfs",
          "partial": "Calendar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Calendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "CalendarDate",
          "package": "gtfs",
          "signature": "CalendarDate",
          "source": "src/Data-GTFS-Types.html#CalendarDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "CalendarDate",
          "package": "gtfs",
          "partial": "Calendar Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:CalendarDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Date",
          "package": "gtfs",
          "signature": "Date Int Int Int",
          "source": "src/Data-GTFS-Types.html#Date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Date",
          "package": "gtfs",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "DirectionA",
          "package": "gtfs",
          "signature": "DirectionA",
          "source": "src/Data-GTFS-Types.html#DirectionID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "DirectionA",
          "package": "gtfs",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:DirectionA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "DirectionB",
          "package": "gtfs",
          "signature": "DirectionB",
          "source": "src/Data-GTFS-Types.html#DirectionID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "DirectionB",
          "package": "gtfs",
          "partial": "Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:DirectionB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "FareAttribute",
          "package": "gtfs",
          "signature": "FareAttribute",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "FareAttribute",
          "package": "gtfs",
          "partial": "Fare Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:FareAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "FareRule",
          "package": "gtfs",
          "signature": "FareRule",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "FareRule",
          "package": "gtfs",
          "partial": "Fare Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:FareRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Feed",
          "package": "gtfs",
          "signature": "Feed",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Feed",
          "package": "gtfs",
          "partial": "Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Ferry",
          "package": "gtfs",
          "signature": "Ferry",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Ferry",
          "package": "gtfs",
          "partial": "Ferry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Ferry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Frequency",
          "package": "gtfs",
          "signature": "Frequency",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Frequency",
          "package": "gtfs",
          "partial": "Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Funicular",
          "package": "gtfs",
          "signature": "Funicular",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Funicular",
          "package": "gtfs",
          "partial": "Funicular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Funicular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Gondola",
          "package": "gtfs",
          "signature": "Gondola",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Gondola",
          "package": "gtfs",
          "partial": "Gondola",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Gondola"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "HasService",
          "package": "gtfs",
          "signature": "HasService",
          "source": "src/Data-GTFS-Types.html#ServiceFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "HasService",
          "package": "gtfs",
          "partial": "Has Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:HasService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "LocStation",
          "package": "gtfs",
          "signature": "LocStation",
          "source": "src/Data-GTFS-Types.html#LocationType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "LocStation",
          "package": "gtfs",
          "partial": "Loc Station",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:LocStation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "LocStop",
          "package": "gtfs",
          "signature": "LocStop",
          "source": "src/Data-GTFS-Types.html#LocationType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "LocStop",
          "package": "gtfs",
          "partial": "Loc Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:LocStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Metro",
          "package": "gtfs",
          "signature": "Metro",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Metro",
          "package": "gtfs",
          "partial": "Metro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Metro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "MinimumTransfer",
          "package": "gtfs",
          "signature": "MinimumTransfer",
          "source": "src/Data-GTFS-Types.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "MinimumTransfer",
          "package": "gtfs",
          "partial": "Minimum Transfer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MinimumTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "MustAskDriver",
          "package": "gtfs",
          "signature": "MustAskDriver",
          "source": "src/Data-GTFS-Types.html#OnOffType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "MustAskDriver",
          "package": "gtfs",
          "partial": "Must Ask Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MustAskDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "MustPhone",
          "package": "gtfs",
          "signature": "MustPhone",
          "source": "src/Data-GTFS-Types.html#OnOffType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "MustPhone",
          "package": "gtfs",
          "partial": "Must Phone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:MustPhone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "NoException",
          "package": "gtfs",
          "signature": "NoException",
          "source": "src/Data-GTFS-Types.html#ExceptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "NoException",
          "package": "gtfs",
          "partial": "No Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "NoService",
          "package": "gtfs",
          "signature": "NoService",
          "source": "src/Data-GTFS-Types.html#ServiceFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "NoService",
          "package": "gtfs",
          "partial": "No Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "NoTransfer",
          "package": "gtfs",
          "signature": "NoTransfer",
          "source": "src/Data-GTFS-Types.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "NoTransfer",
          "package": "gtfs",
          "partial": "No Transfer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NoTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "NotAvailable",
          "package": "gtfs",
          "signature": "NotAvailable",
          "source": "src/Data-GTFS-Types.html#OnOffType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "NotAvailable",
          "package": "gtfs",
          "partial": "Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:NotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "PayBeforeBoarding",
          "package": "gtfs",
          "signature": "PayBeforeBoarding",
          "source": "src/Data-GTFS-Types.html#PaymentMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "PayBeforeBoarding",
          "package": "gtfs",
          "partial": "Pay Before Boarding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:PayBeforeBoarding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "PayOnBoard",
          "package": "gtfs",
          "signature": "PayOnBoard",
          "source": "src/Data-GTFS-Types.html#PaymentMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "PayOnBoard",
          "package": "gtfs",
          "partial": "Pay On Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:PayOnBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Rail",
          "package": "gtfs",
          "signature": "Rail",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Rail",
          "package": "gtfs",
          "partial": "Rail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Rail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "RecommendedTransfer",
          "package": "gtfs",
          "signature": "RecommendedTransfer",
          "source": "src/Data-GTFS-Types.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "RecommendedTransfer",
          "package": "gtfs",
          "partial": "Recommended Transfer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:RecommendedTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "RegularlyScheduled",
          "package": "gtfs",
          "signature": "RegularlyScheduled",
          "source": "src/Data-GTFS-Types.html#OnOffType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "RegularlyScheduled",
          "package": "gtfs",
          "partial": "Regularly Scheduled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:RegularlyScheduled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Route",
          "package": "gtfs",
          "signature": "Route",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Route",
          "package": "gtfs",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ServiceAdded",
          "package": "gtfs",
          "signature": "ServiceAdded",
          "source": "src/Data-GTFS-Types.html#ExceptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ServiceAdded",
          "package": "gtfs",
          "partial": "Service Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:ServiceAdded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "ServiceRemoved",
          "package": "gtfs",
          "signature": "ServiceRemoved",
          "source": "src/Data-GTFS-Types.html#ExceptionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "ServiceRemoved",
          "package": "gtfs",
          "partial": "Service Removed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:ServiceRemoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Shape",
          "package": "gtfs",
          "signature": "Shape",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Shape",
          "package": "gtfs",
          "partial": "Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Stop",
          "package": "gtfs",
          "signature": "Stop",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Stop",
          "package": "gtfs",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "StopTime",
          "package": "gtfs",
          "signature": "StopTime",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "StopTime",
          "package": "gtfs",
          "partial": "Stop Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:StopTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Time",
          "package": "gtfs",
          "signature": "Time Int Int Int",
          "source": "src/Data-GTFS-Types.html#Time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Time",
          "package": "gtfs",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "TimedTransfer",
          "package": "gtfs",
          "signature": "TimedTransfer",
          "source": "src/Data-GTFS-Types.html#TransferType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "TimedTransfer",
          "package": "gtfs",
          "partial": "Timed Transfer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:TimedTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Tram",
          "package": "gtfs",
          "signature": "Tram",
          "source": "src/Data-GTFS-Types.html#RouteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Tram",
          "package": "gtfs",
          "partial": "Tram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Tram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Transfer",
          "package": "gtfs",
          "signature": "Transfer",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Transfer",
          "package": "gtfs",
          "partial": "Transfer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Transfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "Trip",
          "package": "gtfs",
          "signature": "Trip",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "Trip",
          "package": "gtfs",
          "partial": "Trip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:Trip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_id",
          "package": "gtfs",
          "signature": "Maybe AgencyID",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_lang",
          "package": "gtfs",
          "signature": "Maybe Language",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_lang",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_name",
          "package": "gtfs",
          "signature": "String",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_name",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_phone",
          "package": "gtfs",
          "signature": "Maybe Phone",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_phone",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_phone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_timezone",
          "package": "gtfs",
          "signature": "Timezone",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_timezone",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_timezone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "a_agency_url",
          "package": "gtfs",
          "signature": "URL",
          "source": "src/Data-GTFS-Types.html#Agency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "a_agency_url",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:a_agency_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_end_date",
          "package": "gtfs",
          "signature": "Date",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_end_date",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_end_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_friday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_friday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_monday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_monday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_saturday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_saturday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_service_id",
          "package": "gtfs",
          "signature": "ServiceID",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_service_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_service_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_start_date",
          "package": "gtfs",
          "signature": "Date",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_start_date",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_start_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_sunday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_sunday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_thursday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_thursday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_tuesday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_tuesday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "c_wednesday",
          "package": "gtfs",
          "signature": "ServiceFlag",
          "source": "src/Data-GTFS-Types.html#Calendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "c_wednesday",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:c_wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "cd_date",
          "package": "gtfs",
          "signature": "Date",
          "source": "src/Data-GTFS-Types.html#CalendarDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "cd_date",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "cd_exception_type",
          "package": "gtfs",
          "signature": "ExceptionType",
          "source": "src/Data-GTFS-Types.html#CalendarDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "cd_exception_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_exception_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "cd_service_id",
          "package": "gtfs",
          "signature": "ServiceID",
          "source": "src/Data-GTFS-Types.html#CalendarDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "cd_service_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:cd_service_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_agency",
          "package": "gtfs",
          "signature": "[Agency]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_agency",
          "normalized": "[Agency]",
          "package": "gtfs",
          "signature": "[Agency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_agency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_calendar",
          "package": "gtfs",
          "signature": "[Calendar]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_calendar",
          "normalized": "[Calendar]",
          "package": "gtfs",
          "signature": "[Calendar]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_calendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_calendar_dates",
          "package": "gtfs",
          "signature": "[CalendarDate]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_calendar_dates",
          "normalized": "[CalendarDate]",
          "package": "gtfs",
          "signature": "[CalendarDate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_calendar_dates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_fare_attributes",
          "package": "gtfs",
          "signature": "[FareAttribute]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_fare_attributes",
          "normalized": "[FareAttribute]",
          "package": "gtfs",
          "signature": "[FareAttribute]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_fare_attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_fare_rules",
          "package": "gtfs",
          "signature": "[FareRule]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_fare_rules",
          "normalized": "[FareRule]",
          "package": "gtfs",
          "signature": "[FareRule]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_fare_rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_frequencies",
          "package": "gtfs",
          "signature": "[Frequency]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_frequencies",
          "normalized": "[Frequency]",
          "package": "gtfs",
          "signature": "[Frequency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_frequencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_routes",
          "package": "gtfs",
          "signature": "[Route]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_routes",
          "normalized": "[Route]",
          "package": "gtfs",
          "signature": "[Route]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_routes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_shapes",
          "package": "gtfs",
          "signature": "[Shape]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_shapes",
          "normalized": "[Shape]",
          "package": "gtfs",
          "signature": "[Shape]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_shapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_stop_times",
          "package": "gtfs",
          "signature": "[StopTime]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_stop_times",
          "normalized": "[StopTime]",
          "package": "gtfs",
          "signature": "[StopTime]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_stop_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_stops",
          "package": "gtfs",
          "signature": "[Stop]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_stops",
          "normalized": "[Stop]",
          "package": "gtfs",
          "signature": "[Stop]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_stops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_transfers",
          "package": "gtfs",
          "signature": "[Transfer]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_transfers",
          "normalized": "[Transfer]",
          "package": "gtfs",
          "signature": "[Transfer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_transfers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "f_trips",
          "package": "gtfs",
          "signature": "[Trip]",
          "source": "src/Data-GTFS-Types.html#Feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "f_trips",
          "normalized": "[Trip]",
          "package": "gtfs",
          "signature": "[Trip]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:f_trips"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_currency_type",
          "package": "gtfs",
          "signature": "Currency",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_currency_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_currency_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_fare_id",
          "package": "gtfs",
          "signature": "FareID",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_fare_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_fare_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_payment_method",
          "package": "gtfs",
          "signature": "PaymentMethod",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_payment_method",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_payment_method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_price",
          "package": "gtfs",
          "signature": "Price",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_price",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_price"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_transfer_duration",
          "package": "gtfs",
          "signature": "Maybe Seconds",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_transfer_duration",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_transfer_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fa_transfers",
          "package": "gtfs",
          "signature": "TransferLimit",
          "source": "src/Data-GTFS-Types.html#FareAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fa_transfers",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fa_transfers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fq_end_time",
          "package": "gtfs",
          "signature": "Time",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fq_end_time",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_end_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fq_headway_secs",
          "package": "gtfs",
          "signature": "Seconds",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fq_headway_secs",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_headway_secs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fq_start_time",
          "package": "gtfs",
          "signature": "Time",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fq_start_time",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_start_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fq_trip_id",
          "package": "gtfs",
          "signature": "TripID",
          "source": "src/Data-GTFS-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fq_trip_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fq_trip_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fr_contains_id",
          "package": "gtfs",
          "signature": "Maybe ZoneID",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fr_contains_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_contains_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fr_destination_id",
          "package": "gtfs",
          "signature": "Maybe ZoneID",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fr_destination_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_destination_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fr_fare_id",
          "package": "gtfs",
          "signature": "FareID",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fr_fare_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_fare_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fr_origin_id",
          "package": "gtfs",
          "signature": "Maybe ZoneID",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fr_origin_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_origin_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "fr_route_id",
          "package": "gtfs",
          "signature": "Maybe RouteID",
          "source": "src/Data-GTFS-Types.html#FareRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "fr_route_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:fr_route_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_agency_id",
          "package": "gtfs",
          "signature": "Maybe AgencyID",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_agency_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_agency_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_color",
          "package": "gtfs",
          "signature": "Maybe Color",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_color",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_desc",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_desc",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_id",
          "package": "gtfs",
          "signature": "RouteID",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_long_name",
          "package": "gtfs",
          "signature": "String",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_long_name",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_long_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_short_name",
          "package": "gtfs",
          "signature": "String",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_short_name",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_short_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_text_color",
          "package": "gtfs",
          "signature": "Maybe Color",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_text_color",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_text_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_type",
          "package": "gtfs",
          "signature": "RouteType",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "r_route_url",
          "package": "gtfs",
          "signature": "Maybe URL",
          "source": "src/Data-GTFS-Types.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "r_route_url",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:r_route_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_location_type",
          "package": "gtfs",
          "signature": "Maybe LocationType",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_location_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_location_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_parent_station",
          "package": "gtfs",
          "signature": "Maybe StopID",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_parent_station",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_parent_station"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_code",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_code",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_desc",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_desc",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_id",
          "package": "gtfs",
          "signature": "StopID",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_lat",
          "package": "gtfs",
          "signature": "LatLon",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_lat",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_lat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_lon",
          "package": "gtfs",
          "signature": "LatLon",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_lon",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_lon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_name",
          "package": "gtfs",
          "signature": "String",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_name",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_stop_url",
          "package": "gtfs",
          "signature": "Maybe URL",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_stop_url",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_stop_url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "s_zone_id",
          "package": "gtfs",
          "signature": "Maybe ZoneID",
          "source": "src/Data-GTFS-Types.html#Stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "s_zone_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:s_zone_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "sh_shape_dist_traveled",
          "package": "gtfs",
          "signature": "Maybe Distance",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "sh_shape_dist_traveled",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_dist_traveled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "sh_shape_id",
          "package": "gtfs",
          "signature": "ShapeID",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "sh_shape_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_lat",
          "package": "gtfs",
          "signature": "LatLon",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_lat",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_lat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_lon",
          "package": "gtfs",
          "signature": "LatLon",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_lon",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_lon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_sequence",
          "package": "gtfs",
          "signature": "Sequence",
          "source": "src/Data-GTFS-Types.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "sh_shape_pt_sequence",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:sh_shape_pt_sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_arrival_time",
          "package": "gtfs",
          "signature": "Time",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_arrival_time",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_arrival_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_departure_time",
          "package": "gtfs",
          "signature": "Time",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_departure_time",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_departure_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_drop_off_type",
          "package": "gtfs",
          "signature": "Maybe OnOffType",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_drop_off_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_drop_off_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_pickup_type",
          "package": "gtfs",
          "signature": "Maybe OnOffType",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_pickup_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_pickup_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_shape_dist_traveled",
          "package": "gtfs",
          "signature": "Maybe Distance",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_shape_dist_traveled",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_shape_dist_traveled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_stop_headsign",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_stop_headsign",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_headsign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_stop_id",
          "package": "gtfs",
          "signature": "StopID",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_stop_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_stop_sequence",
          "package": "gtfs",
          "signature": "Sequence",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_stop_sequence",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_stop_sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "st_trip_id",
          "package": "gtfs",
          "signature": "TripID",
          "source": "src/Data-GTFS-Types.html#StopTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "st_trip_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:st_trip_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_block_id",
          "package": "gtfs",
          "signature": "Maybe BlockID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_block_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_block_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_direction_id",
          "package": "gtfs",
          "signature": "Maybe DirectionID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_direction_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_direction_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_route_id",
          "package": "gtfs",
          "signature": "RouteID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_route_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_route_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_service_id",
          "package": "gtfs",
          "signature": "ServiceID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_service_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_service_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_shape_id",
          "package": "gtfs",
          "signature": "Maybe ShapeID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_shape_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_shape_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_trip_headsign",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_trip_headsign",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_headsign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_trip_id",
          "package": "gtfs",
          "signature": "TripID",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_trip_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "t_trip_short_name",
          "package": "gtfs",
          "signature": "Maybe String",
          "source": "src/Data-GTFS-Types.html#Trip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "t_trip_short_name",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:t_trip_short_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "x_from_stop_id",
          "package": "gtfs",
          "signature": "StopID",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "x_from_stop_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_from_stop_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "x_min_transfer_time",
          "package": "gtfs",
          "signature": "Maybe Seconds",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "x_min_transfer_time",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_min_transfer_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "x_to_stop_id",
          "package": "gtfs",
          "signature": "StopID",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "x_to_stop_id",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_to_stop_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.GTFS.Types",
          "name": "x_transfer_type",
          "package": "gtfs",
          "signature": "TransferType",
          "source": "src/Data-GTFS-Types.html#Transfer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data GTFS Types",
          "module": "Data.GTFS.Types",
          "name": "x_transfer_type",
          "package": "gtfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gtfs/docs/Data-GTFS-Types.html#v:x_transfer_type"
      }
    }
  ]
]