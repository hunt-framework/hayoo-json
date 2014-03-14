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
        "word": "lens-datetime"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eUsage:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBasic interface consists of the following six lenses: \u003ccode\u003e\u003ca\u003eyears\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003emonths\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edays\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehours\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminutes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eseconds\u003c/a\u003e\u003c/code\u003e with which you can\naccess the corresponding \"fields\" of \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e in\na unified way. Also, use \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etime\u003c/a\u003e\u003c/code\u003e if you want to access the\n\u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e parts as a whole.\n\u003c/p\u003e\u003cp\u003eLet's assume the following definitions:\n\u003c/p\u003e\u003cpre\u003eimport Control.Lens\nimport Data.Time\nimport Data.Time.Lens\n\naDay :: Day\naDay = fromGregorian 2013 08 22\n\naLocal :: LocalTime\naLocal = LocalTime aDay (TimeOfDay 13 45 28)\n\naUTC :: UTCTime\naUTC = UTCTime aDay 7458.9\n\u003c/pre\u003e\u003cp\u003eThen you can use the above lenses as follows:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal ^. years\n\u003c/code\u003e\u003c/strong\u003e2013\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC ^. months\n\u003c/code\u003e\u003c/strong\u003e8\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaDay ^. days\n\u003c/code\u003e\u003c/strong\u003e22\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & time .~ midnight\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 00:00:00\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & days .~ 1 & months .~ 1\n\u003c/code\u003e\u003c/strong\u003e2013-01-01 02:04:18.9 UTC\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & hours +~ 1            -- But see the note below!\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 14:45:28\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eA note about invalid values and lens laws.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e these lenses provide the most\nstraightforward implementation: via 'toGregorian'/'fromGregorian'\nin the case of \u003ccode\u003e\u003ca\u003eyears\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emonths\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edays\u003c/a\u003e\u003c/code\u003e; and directly to the\nfields of \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e in the case of \u003ccode\u003e\u003ca\u003ehours\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminutes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eseconds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhich means, on one hand, that the date \"parts\" will be clipped\nto valid values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & months +~ 12\n\u003c/code\u003e\u003c/strong\u003e2013-12-22 13:45:28        -- instead of: 2014-08-22 13:45:28\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & days +~ 100\n\u003c/code\u003e\u003c/strong\u003e2013-08-31 02:04:18.9 UTC  -- instead of: 2013-11-30 02:04:18.9 UTC\n\u003c/pre\u003e\u003cp\u003eAnd on the other hand, that the time \"parts\" will not roll over\nand produce invalid values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & minutes +~ 120\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 13:165:28       -- instead of: 2013-08-22 15:45:28\n\u003c/pre\u003e\u003cp\u003eAlso, this means that the date lenses are not proper lenses: they\nonly satisfy the lens laws when used with valid values for the\ngiven fields.\n\u003c/p\u003e\u003cp\u003eBasically, avoid setting/modifying the date-time values directly\nvia these lenses if you cannot be sure that the result is a valid\nvalue. Instead use the \u003ccode\u003e\u003ca\u003eFlexibleDateTime\u003c/a\u003e\u003c/code\u003e mechanism and the\n\u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e isomorphism, which correctly rolls over:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT.months +~ 12\n\u003c/code\u003e\u003c/strong\u003e2014-08-22 13:45:28\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & flexDT.days +~ 100\n\u003c/code\u003e\u003c/strong\u003e2013-11-30 02:04:18.9 UTC\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT.minutes +~ 120\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 15:45:28\n\u003c/pre\u003e\u003cp\u003eIf you need to set multiple fields try to make only one round-trip\nvia flexDT:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT %~ ((days +~ 7) . (hours +~ 2))\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 13:45:28\n\u003c/pre\u003e\u003cp\u003eNote that even with \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e we completely ignore all the issues\naround daylight saving time and leap seconds. If your code has to\nbe correct wrt. DST, do all the computations in \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and convert\nto local time only for output. If you need to be correct wrt. leap\nseconds, then... Well, then I don't know. :)\n\u003c/p\u003e\u003cp\u003eAnd while this doesn't strictly belong to this package, here's a\ncomplete example of working with daylight saving time:\n\u003c/p\u003e\u003cpre\u003edstExample :: IO ()\ndstExample = do\n  let baseT = UTCTime (fromGregorian 2013 10 26) 0\n\n      printInLocal :: UTCTime -\u003e IO ()\n      printInLocal t = do\n        tz \u003c- getTimeZone t\n        print (tz, t ^. utcInTZ tz)\n\n  printInLocal baseT\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 0) . (minutes +~ 5))\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 1) . (minutes +~ 5))\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 2) . (minutes +~ 5))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edstExample\n\u003c/code\u003e\u003c/strong\u003e(CEST,2013-10-26 02:00:00)\n(CEST,2013-10-27 02:05:00)\n(CET,2013-10-27 02:05:00)\n(CET,2013-10-27 03:05:00)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Lens",
          "name": "Lens",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "Usage Basic interface consists of the following six lenses years months days hours minutes and seconds with which you can access the corresponding fields of LocalTime and UTCTime in unified way Also use date and time if you want to access the Day and TimeOfDay parts as whole Let assume the following definitions import Control.Lens import Data.Time import Data.Time.Lens aDay Day aDay fromGregorian aLocal LocalTime aLocal LocalTime aDay TimeOfDay aUTC UTCTime aUTC UTCTime aDay Then you can use the above lenses as follows aLocal years aUTC months aDay days aLocal time midnight aUTC days months UTC aLocal hours But see the note below note about invalid values and lens laws For LocalTime and UTCTime these lenses provide the most straightforward implementation via toGregorian fromGregorian in the case of years months and days and directly to the fields of TimeOfDay in the case of hours minutes and seconds Which means on one hand that the date parts will be clipped to valid values aLocal months instead of aUTC days UTC instead of UTC And on the other hand that the time parts will not roll over and produce invalid values aLocal minutes instead of Also this means that the date lenses are not proper lenses they only satisfy the lens laws when used with valid values for the given fields Basically avoid setting modifying the date-time values directly via these lenses if you cannot be sure that the result is valid value Instead use the FlexibleDateTime mechanism and the flexDT isomorphism which correctly rolls over aLocal flexDT.months aUTC flexDT.days UTC aLocal flexDT.minutes If you need to set multiple fields try to make only one round-trip via flexDT aLocal flexDT days hours Note that even with flexDT we completely ignore all the issues around daylight saving time and leap seconds If your code has to be correct wrt DST do all the computations in UTCTime and convert to local time only for output If you need to be correct wrt leap seconds then Well then don know And while this doesn strictly belong to this package here complete example of working with daylight saving time dstExample IO dstExample do let baseT UTCTime fromGregorian printInLocal UTCTime IO printInLocal do tz getTimeZone print tz utcInTZ tz printInLocal baseT printInLocal baseT flexDT days hours minutes printInLocal baseT flexDT days hours minutes printInLocal baseT flexDT days hours minutes dstExample CEST CEST CET CET",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "Lens",
          "package": "lens-datetime",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that defines access to the \"date\" part of a type.\n\u003c/p\u003e\u003cp\u003eYou can implement either of the two methods.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "Dateable",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#Dateable",
          "type": "class"
        },
        "index": {
          "description": "Type class that defines access to the date part of type You can implement either of the two methods",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "Dateable",
          "package": "lens-datetime",
          "partial": "Dateable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:Dateable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexDate",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexDate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexDate",
          "package": "lens-datetime",
          "partial": "Flex Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexDateTime",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexDateTime",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexDateTime",
          "package": "lens-datetime",
          "partial": "Flex Date Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexTime",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexTime",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexTime",
          "package": "lens-datetime",
          "partial": "Flex Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class to provide correct roll-over behavior for date lenses.\n\u003c/p\u003e\u003cp\u003eUsed exactly as \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e, but for values that have only \"date\"\n and no \"time\" part.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "FlexibleDate",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexibleDate",
          "type": "class"
        },
        "index": {
          "description": "Type class to provide correct roll-over behavior for date lenses Used exactly as flexDT but for values that have only date and no time part",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexibleDate",
          "package": "lens-datetime",
          "partial": "Flexible Date",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class to provide correct roll-over behavior for date-time lenses.\n\u003c/p\u003e\u003cp\u003eSee examples in the general overview part.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "FlexibleDateTime",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexibleDateTime",
          "type": "class"
        },
        "index": {
          "description": "Type class to provide correct roll-over behavior for date-time lenses See examples in the general overview part",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexibleDateTime",
          "package": "lens-datetime",
          "partial": "Flexible Date Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class to provide correct roll-over behavior for time lenses.\n\u003c/p\u003e\u003cp\u003eUsed exactly as \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e, but for values that have only \"time\"\n and no \"date\" part.\n\u003c/p\u003e\u003cp\u003eIf the time rolls-over more than 24 hours the day carry is\n discarded. Ex.:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet t = TimeOfDay 1 12 3\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et\n\u003c/code\u003e\u003c/strong\u003e01:12:03\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et & flexT.seconds +~ (-7200)\n\u003c/code\u003e\u003c/strong\u003e23:12:03\n\u003c/pre\u003e",
          "module": "Data.Time.Lens",
          "name": "FlexibleTime",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#FlexibleTime",
          "type": "class"
        },
        "index": {
          "description": "Type class to provide correct roll-over behavior for time lenses Used exactly as flexDT but for values that have only time and no date part If the time rolls-over more than hours the day carry is discarded Ex let TimeOfDay flexT.seconds",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexibleTime",
          "package": "lens-datetime",
          "partial": "Flexible Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that defines access to the \"time\" part of a type.\n\u003c/p\u003e\u003cp\u003eYou only need to define one of the two methods, whichever is more\n natural.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "Timeable",
          "package": "lens-datetime",
          "source": "src/Data-Time-Lens.html#Timeable",
          "type": "class"
        },
        "index": {
          "description": "Type class that defines access to the time part of type You only need to define one of the two methods whichever is more natural",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "Timeable",
          "package": "lens-datetime",
          "partial": "Timeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:Timeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexDate",
          "package": "lens-datetime",
          "signature": "FlexDate",
          "source": "src/Data-Time-Lens.html#FlexDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexDate",
          "package": "lens-datetime",
          "partial": "Flex Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexDateTime",
          "package": "lens-datetime",
          "signature": "FlexDateTime",
          "source": "src/Data-Time-Lens.html#FlexDateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexDateTime",
          "package": "lens-datetime",
          "partial": "Flex Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "FlexTime",
          "package": "lens-datetime",
          "signature": "FlexTime TimeOfDay",
          "source": "src/Data-Time-Lens.html#FlexTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "FlexTime",
          "package": "lens-datetime",
          "partial": "Flex Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "_dateFlex",
          "package": "lens-datetime",
          "signature": "Lens' a FlexDate",
          "source": "src/Data-Time-Lens.html#_dateFlex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "_dateFlex",
          "package": "lens-datetime",
          "partial": "Flex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:_dateFlex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "date",
          "package": "lens-datetime",
          "signature": "Lens' a Day",
          "source": "src/Data-Time-Lens.html#date",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "date",
          "package": "lens-datetime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the day value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. The updated\n day value will be clipped to a valid day value in the given\n year-month.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "days",
          "package": "lens-datetime",
          "signature": "Lens' d Int",
          "source": "src/Data-Time-Lens.html#days",
          "type": "function"
        },
        "index": {
          "description": "Lens into the day value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values The updated day value will be clipped to valid day value in the given year-month",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "days",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:days"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexD",
          "package": "lens-datetime",
          "signature": "Lens' a FlexDate",
          "source": "src/Data-Time-Lens.html#flexD",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexD",
          "package": "lens-datetime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexDT",
          "package": "lens-datetime",
          "signature": "Lens' a FlexDateTime",
          "source": "src/Data-Time-Lens.html#flexDT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexDT",
          "package": "lens-datetime",
          "partial": "DT",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexDate",
          "package": "lens-datetime",
          "signature": "FlexDate",
          "source": "src/Data-Time-Lens.html#FlexDateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexDate",
          "package": "lens-datetime",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexDay",
          "package": "lens-datetime",
          "signature": "Int",
          "source": "src/Data-Time-Lens.html#FlexDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexDay",
          "package": "lens-datetime",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexMonth",
          "package": "lens-datetime",
          "signature": "Int",
          "source": "src/Data-Time-Lens.html#FlexDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexMonth",
          "package": "lens-datetime",
          "partial": "Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexT",
          "package": "lens-datetime",
          "signature": "Lens' a FlexTime",
          "source": "src/Data-Time-Lens.html#flexT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexT",
          "package": "lens-datetime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexTOD",
          "package": "lens-datetime",
          "signature": "TimeOfDay",
          "source": "src/Data-Time-Lens.html#FlexDateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexTOD",
          "package": "lens-datetime",
          "partial": "TOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexTOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "flexYear",
          "package": "lens-datetime",
          "signature": "Integer",
          "source": "src/Data-Time-Lens.html#FlexDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "flexYear",
          "package": "lens-datetime",
          "partial": "Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e as a triple of (year,month,day) in Gregorian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description at the definition of \u003ccode\u003e\u003ca\u003efromGregorian\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003etoGregorian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "gregorianDate",
          "package": "lens-datetime",
          "signature": "Iso' Day (Integer, Int, Int)",
          "source": "src/Data-Time-Lens.html#gregorianDate",
          "type": "function"
        },
        "index": {
          "description": "View Day as triple of year month day in Gregorian calendar See the description at the definition of fromGregorian toGregorian",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "gregorianDate",
          "normalized": "Iso' Day(Integer,Int,Int)",
          "package": "lens-datetime",
          "partial": "Date",
          "signature": "Iso' Day(Integer,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:gregorianDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the hour value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "hours",
          "package": "lens-datetime",
          "signature": "Lens' t Int",
          "source": "src/Data-Time-Lens.html#hours",
          "type": "function"
        },
        "index": {
          "description": "Lens into the hour value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "hours",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e as a fractional day in the modified Julian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description of \u003ccode\u003e\u003ca\u003eModifiedJulianDay\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etimeOfDayToDayFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "julianDT",
          "package": "lens-datetime",
          "signature": "Iso' LocalTime Rational",
          "source": "src/Data-Time-Lens.html#julianDT",
          "type": "function"
        },
        "index": {
          "description": "View LocalTime as fractional day in the modified Julian calendar See the description of ModifiedJulianDay and timeOfDayToDayFraction",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "julianDT",
          "package": "lens-datetime",
          "partial": "DT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:julianDT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e day number in the Julian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description at the definition of \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "julianDay",
          "package": "lens-datetime",
          "signature": "Iso' Day Integer",
          "source": "src/Data-Time-Lens.html#julianDay",
          "type": "function"
        },
        "index": {
          "description": "View Day as an Integer day number in the Julian calendar See the description at the definition of Day",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "julianDay",
          "package": "lens-datetime",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:julianDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the minute value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "minutes",
          "package": "lens-datetime",
          "signature": "Lens' t Int",
          "source": "src/Data-Time-Lens.html#minutes",
          "type": "function"
        },
        "index": {
          "description": "Lens into the minute value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "minutes",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the month value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. The updated\n month value will be clipped to a valid month value. Also note that\n the day value might also be modified (clipped to a valid day in\n that month).\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "months",
          "package": "lens-datetime",
          "signature": "Lens' d Int",
          "source": "src/Data-Time-Lens.html#months",
          "type": "function"
        },
        "index": {
          "description": "Lens into the month value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values The updated month value will be clipped to valid month value Also note that the day value might also be modified clipped to valid day in that month",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "months",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:months"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the second value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "seconds",
          "package": "lens-datetime",
          "signature": "Lens' t Pico",
          "source": "src/Data-Time-Lens.html#seconds",
          "type": "function"
        },
        "index": {
          "description": "Lens into the second value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "seconds",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "time",
          "package": "lens-datetime",
          "signature": "Lens' a TimeOfDay",
          "source": "src/Data-Time-Lens.html#time",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "time",
          "package": "lens-datetime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Lens",
          "name": "timeAsDiff",
          "package": "lens-datetime",
          "signature": "Lens' a DiffTime",
          "source": "src/Data-Time-Lens.html#timeAsDiff",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "timeAsDiff",
          "package": "lens-datetime",
          "partial": "As Diff",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:timeAsDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrivial isomorphism between \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe view \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e values as being in the UTC time zone. This is\n \u003ccode\u003e\u003ca\u003eutcInTZ\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003eutc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "utcAsLocal",
          "package": "lens-datetime",
          "signature": "Iso' UTCTime LocalTime",
          "source": "src/Data-Time-Lens.html#utcAsLocal",
          "type": "function"
        },
        "index": {
          "description": "Trivial isomorphism between UTCTime and LocalTime We view LocalTime values as being in the UTC time zone This is utcInTZ applied to utc",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "utcAsLocal",
          "package": "lens-datetime",
          "partial": "As Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:utcAsLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphism between \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e for the given\n \u003ccode\u003e\u003ca\u003eTimeZone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "utcInTZ",
          "package": "lens-datetime",
          "signature": "TimeZone -\u003e Iso' UTCTime LocalTime",
          "source": "src/Data-Time-Lens.html#utcInTZ",
          "type": "function"
        },
        "index": {
          "description": "Isomorphism between UTCTime and LocalTime for the given TimeZone",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "utcInTZ",
          "normalized": "TimeZone-\u003eIso' UTCTime LocalTime",
          "package": "lens-datetime",
          "partial": "In TZ",
          "signature": "TimeZone-\u003eIso' UTCTime LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:utcInTZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens into the year value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. When the\n year value in a date is modified the month and day values might\n also change. This happens when the original date was a February\n 29th and we change to a non-leap year.\n\u003c/p\u003e",
          "module": "Data.Time.Lens",
          "name": "years",
          "package": "lens-datetime",
          "signature": "Lens' d Integer",
          "source": "src/Data-Time-Lens.html#years",
          "type": "function"
        },
        "index": {
          "description": "Lens into the year value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values When the year value in date is modified the month and day values might also change This happens when the original date was February th and we change to non-leap year",
          "hierarchy": "Data Time Lens",
          "module": "Data.Time.Lens",
          "name": "years",
          "package": "lens-datetime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:years"
      }
    }
  ]
]