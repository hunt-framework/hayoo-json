[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eUsage:\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBasic interface consists of the following six lenses: \u003ccode\u003e\u003ca\u003eyears\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003emonths\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edays\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehours\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminutes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eseconds\u003c/a\u003e\u003c/code\u003e with which you can\naccess the corresponding \"fields\" of \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e in\na unified way. Also, use \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etime\u003c/a\u003e\u003c/code\u003e if you want to access the\n\u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e parts as a whole.\n\u003c/p\u003e\u003cp\u003eLet's assume the following definitions:\n\u003c/p\u003e\u003cpre\u003eimport Control.Lens\nimport Data.Time\nimport Data.Time.Lens\n\naDay :: Day\naDay = fromGregorian 2013 08 22\n\naLocal :: LocalTime\naLocal = LocalTime aDay (TimeOfDay 13 45 28)\n\naUTC :: UTCTime\naUTC = UTCTime aDay 7458.9\n\u003c/pre\u003e\u003cp\u003eThen you can use the above lenses as follows:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal ^. years\n\u003c/code\u003e\u003c/strong\u003e2013\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC ^. months\n\u003c/code\u003e\u003c/strong\u003e8\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaDay ^. days\n\u003c/code\u003e\u003c/strong\u003e22\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & time .~ midnight\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 00:00:00\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & days .~ 1 & months .~ 1\n\u003c/code\u003e\u003c/strong\u003e2013-01-01 02:04:18.9 UTC\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & hours +~ 1            -- But see the note below!\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 14:45:28\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eA note about invalid values and lens laws.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e these lenses provide the most\nstraightforward implementation: via 'toGregorian'/'fromGregorian'\nin the case of \u003ccode\u003e\u003ca\u003eyears\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emonths\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edays\u003c/a\u003e\u003c/code\u003e; and directly to the\nfields of \u003ccode\u003e\u003ca\u003eTimeOfDay\u003c/a\u003e\u003c/code\u003e in the case of \u003ccode\u003e\u003ca\u003ehours\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eminutes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eseconds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhich means, on one hand, that the date \"parts\" will be clipped\nto valid values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & months +~ 12\n\u003c/code\u003e\u003c/strong\u003e2013-12-22 13:45:28        -- instead of: 2014-08-22 13:45:28\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & days +~ 100\n\u003c/code\u003e\u003c/strong\u003e2013-08-31 02:04:18.9 UTC  -- instead of: 2013-11-30 02:04:18.9 UTC\n\u003c/pre\u003e\u003cp\u003eAnd on the other hand, that the time \"parts\" will not roll over\nand produce invalid values:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & minutes +~ 120\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 13:165:28       -- instead of: 2013-08-22 15:45:28\n\u003c/pre\u003e\u003cp\u003eAlso, this means that the date lenses are not proper lenses: they\nonly satisfy the lens laws when used with valid values for the\ngiven fields.\n\u003c/p\u003e\u003cp\u003eBasically, avoid setting/modifying the date-time values directly\nvia these lenses if you cannot be sure that the result is a valid\nvalue. Instead use the \u003ccode\u003e\u003ca\u003eFlexibleDateTime\u003c/a\u003e\u003c/code\u003e mechanism and the\n\u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e isomorphism, which correctly rolls over:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT.months +~ 12\n\u003c/code\u003e\u003c/strong\u003e2014-08-22 13:45:28\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaUTC & flexDT.days +~ 100\n\u003c/code\u003e\u003c/strong\u003e2013-11-30 02:04:18.9 UTC\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT.minutes +~ 120\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 15:45:28\n\u003c/pre\u003e\u003cp\u003eIf you need to set multiple fields try to make only one round-trip\nvia flexDT:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eaLocal & flexDT %~ ((days +~ 7) . (hours +~ 2))\n\u003c/code\u003e\u003c/strong\u003e2013-08-22 13:45:28\n\u003c/pre\u003e\u003cp\u003eNote that even with \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e we completely ignore all the issues\naround daylight saving time and leap seconds. If your code has to\nbe correct wrt. DST, do all the computations in \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and convert\nto local time only for output. If you need to be correct wrt. leap\nseconds, then... Well, then I don't know. :)\n\u003c/p\u003e\u003cp\u003eAnd while this doesn't strictly belong to this package, here's a\ncomplete example of working with daylight saving time:\n\u003c/p\u003e\u003cpre\u003edstExample :: IO ()\ndstExample = do\n  let baseT = UTCTime (fromGregorian 2013 10 26) 0\n\n      printInLocal :: UTCTime -\u003e IO ()\n      printInLocal t = do\n        tz \u003c- getTimeZone t\n        print (tz, t ^. utcInTZ tz)\n\n  printInLocal baseT\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 0) . (minutes +~ 5))\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 1) . (minutes +~ 5))\n  printInLocal $ baseT & flexDT %~ ((days +~ 1) . (hours +~ 2) . (minutes +~ 5))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edstExample\n\u003c/code\u003e\u003c/strong\u003e(CEST,2013-10-26 02:00:00)\n(CEST,2013-10-27 02:05:00)\n(CET,2013-10-27 02:05:00)\n(CET,2013-10-27 03:05:00)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "module",
        "fct-source": "src/Data-Time-Lens.html",
        "fct-type": "module",
        "title": "Lens"
      },
      "index": {
        "description": "Usage Basic interface consists of the following six lenses years months days hours minutes and seconds with which you can access the corresponding fields of LocalTime and UTCTime in unified way Also use date and time if you want to access the Day and TimeOfDay parts as whole Let assume the following definitions import Control.Lens import Data.Time import Data.Time.Lens aDay Day aDay fromGregorian aLocal LocalTime aLocal LocalTime aDay TimeOfDay aUTC UTCTime aUTC UTCTime aDay Then you can use the above lenses as follows aLocal years aUTC months aDay days aLocal time midnight aUTC days months UTC aLocal hours But see the note below note about invalid values and lens laws For LocalTime and UTCTime these lenses provide the most straightforward implementation via toGregorian fromGregorian in the case of years months and days and directly to the fields of TimeOfDay in the case of hours minutes and seconds Which means on one hand that the date parts will be clipped to valid values aLocal months instead of aUTC days UTC instead of UTC And on the other hand that the time parts will not roll over and produce invalid values aLocal minutes instead of Also this means that the date lenses are not proper lenses they only satisfy the lens laws when used with valid values for the given fields Basically avoid setting modifying the date-time values directly via these lenses if you cannot be sure that the result is valid value Instead use the FlexibleDateTime mechanism and the flexDT isomorphism which correctly rolls over aLocal flexDT.months aUTC flexDT.days UTC aLocal flexDT.minutes If you need to set multiple fields try to make only one round-trip via flexDT aLocal flexDT days hours Note that even with flexDT we completely ignore all the issues around daylight saving time and leap seconds If your code has to be correct wrt DST do all the computations in UTCTime and convert to local time only for output If you need to be correct wrt leap seconds then Well then don know And while this doesn strictly belong to this package here complete example of working with daylight saving time dstExample IO dstExample do let baseT UTCTime fromGregorian printInLocal UTCTime IO printInLocal do tz getTimeZone print tz utcInTZ tz printInLocal baseT printInLocal baseT flexDT days hours minutes printInLocal baseT flexDT days hours minutes printInLocal baseT flexDT days hours minutes dstExample CEST CEST CET CET",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "Lens",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:Dateable",
      "description": {
        "fct-descr": "\u003cp\u003eType class that defines access to the \"date\" part of a type.\n\u003c/p\u003e\u003cp\u003eYou can implement either of the two methods.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "class",
        "fct-source": "src/Data-Time-Lens.html#Dateable",
        "fct-type": "class",
        "title": "Dateable"
      },
      "index": {
        "description": "Type class that defines access to the date part of type You can implement either of the two methods",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "Dateable",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Dateable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexDate",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "data",
        "fct-source": "src/Data-Time-Lens.html#FlexDate",
        "fct-type": "data",
        "title": "FlexDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexDate",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexDateTime",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "data",
        "fct-source": "src/Data-Time-Lens.html#FlexDateTime",
        "fct-type": "data",
        "title": "FlexDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexDateTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexTime",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Time-Lens.html#FlexTime",
        "fct-type": "newtype",
        "title": "FlexTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleDate",
      "description": {
        "fct-descr": "\u003cp\u003eType class to provide correct roll-over behavior for date lenses.\n\u003c/p\u003e\u003cp\u003eUsed exactly as \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e, but for values that have only \"date\"\n and no \"time\" part.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "class",
        "fct-source": "src/Data-Time-Lens.html#FlexibleDate",
        "fct-type": "class",
        "title": "FlexibleDate"
      },
      "index": {
        "description": "Type class to provide correct roll-over behavior for date lenses Used exactly as flexDT but for values that have only date and no time part",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexibleDate",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flexible Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleDateTime",
      "description": {
        "fct-descr": "\u003cp\u003eType class to provide correct roll-over behavior for date-time lenses.\n\u003c/p\u003e\u003cp\u003eSee examples in the general overview part.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "class",
        "fct-source": "src/Data-Time-Lens.html#FlexibleDateTime",
        "fct-type": "class",
        "title": "FlexibleDateTime"
      },
      "index": {
        "description": "Type class to provide correct roll-over behavior for date-time lenses See examples in the general overview part",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexibleDateTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flexible Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:FlexibleTime",
      "description": {
        "fct-descr": "\u003cp\u003eType class to provide correct roll-over behavior for time lenses.\n\u003c/p\u003e\u003cp\u003eUsed exactly as \u003ccode\u003e\u003ca\u003eflexDT\u003c/a\u003e\u003c/code\u003e, but for values that have only \"time\"\n and no \"date\" part.\n\u003c/p\u003e\u003cp\u003eIf the time rolls-over more than 24 hours the day carry is\n discarded. Ex.:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet t = TimeOfDay 1 12 3\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et\n\u003c/code\u003e\u003c/strong\u003e01:12:03\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003et & flexT.seconds +~ (-7200)\n\u003c/code\u003e\u003c/strong\u003e23:12:03\n\u003c/pre\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "class",
        "fct-source": "src/Data-Time-Lens.html#FlexibleTime",
        "fct-type": "class",
        "title": "FlexibleTime"
      },
      "index": {
        "description": "Type class to provide correct roll-over behavior for time lenses Used exactly as flexDT but for values that have only time and no date part If the time rolls-over more than hours the day carry is discarded Ex let TimeOfDay flexT.seconds",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexibleTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flexible Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#t:Timeable",
      "description": {
        "fct-descr": "\u003cp\u003eType class that defines access to the \"time\" part of a type.\n\u003c/p\u003e\u003cp\u003eYou only need to define one of the two methods, whichever is more\n natural.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "class",
        "fct-source": "src/Data-Time-Lens.html#Timeable",
        "fct-type": "class",
        "title": "Timeable"
      },
      "index": {
        "description": "Type class that defines access to the time part of type You only need to define one of the two methods whichever is more natural",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "Timeable",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Timeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexDate",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "FlexDate",
        "fct-source": "src/Data-Time-Lens.html#FlexDate",
        "fct-type": "function",
        "title": "FlexDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexDate",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexDateTime",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "FlexDateTime",
        "fct-source": "src/Data-Time-Lens.html#FlexDateTime",
        "fct-type": "function",
        "title": "FlexDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexDateTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:FlexTime",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "FlexTime TimeOfDay",
        "fct-source": "src/Data-Time-Lens.html#FlexTime",
        "fct-type": "function",
        "title": "FlexTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "FlexTime",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:_dateFlex",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a FlexDate",
        "fct-source": "src/Data-Time-Lens.html#_dateFlex",
        "fct-type": "method",
        "title": "_dateFlex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "_dateFlex",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Flex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:date",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a Day",
        "fct-source": "src/Data-Time-Lens.html#date",
        "fct-type": "method",
        "title": "date"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "date",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:days",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the day value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. The updated\n day value will be clipped to a valid day value in the given\n year-month.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' d Int",
        "fct-source": "src/Data-Time-Lens.html#days",
        "fct-type": "function",
        "title": "days"
      },
      "index": {
        "description": "Lens into the day value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values The updated day value will be clipped to valid day value in the given year-month",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "days",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexD",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a FlexDate",
        "fct-source": "src/Data-Time-Lens.html#flexD",
        "fct-type": "method",
        "title": "flexD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexD",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDT",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a FlexDateTime",
        "fct-source": "src/Data-Time-Lens.html#flexDT",
        "fct-type": "method",
        "title": "flexDT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexDT",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "FlexDate",
        "fct-source": "src/Data-Time-Lens.html#FlexDateTime",
        "fct-type": "function",
        "title": "flexDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexDate",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexDay",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Int",
        "fct-source": "src/Data-Time-Lens.html#FlexDate",
        "fct-type": "function",
        "title": "flexDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexDay",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexMonth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Int",
        "fct-source": "src/Data-Time-Lens.html#FlexDate",
        "fct-type": "function",
        "title": "flexMonth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexMonth",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexT",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a FlexTime",
        "fct-source": "src/Data-Time-Lens.html#flexT",
        "fct-type": "method",
        "title": "flexT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexT",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexTOD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "TimeOfDay",
        "fct-source": "src/Data-Time-Lens.html#FlexDateTime",
        "fct-type": "function",
        "title": "flexTOD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexTOD",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "TOD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:flexYear",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Integer",
        "fct-source": "src/Data-Time-Lens.html#FlexDate",
        "fct-type": "function",
        "title": "flexYear"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "flexYear",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:gregorianDate",
      "description": {
        "fct-descr": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e as a triple of (year,month,day) in Gregorian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description at the definition of \u003ccode\u003e\u003ca\u003efromGregorian\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003etoGregorian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Iso' Day (Integer, Int, Int)",
        "fct-source": "src/Data-Time-Lens.html#gregorianDate",
        "fct-type": "function",
        "title": "gregorianDate"
      },
      "index": {
        "description": "View Day as triple of year month day in Gregorian calendar See the description at the definition of fromGregorian toGregorian",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "gregorianDate",
        "normalized": "Iso' Day(Integer,Int,Int)",
        "package": "lens-datetime",
        "partial": "Date",
        "signature": "Iso' Day(Integer,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:hours",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the hour value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' t Int",
        "fct-source": "src/Data-Time-Lens.html#hours",
        "fct-type": "function",
        "title": "hours"
      },
      "index": {
        "description": "Lens into the hour value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "hours",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:julianDT",
      "description": {
        "fct-descr": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e as a fractional day in the modified Julian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description of \u003ccode\u003e\u003ca\u003eModifiedJulianDay\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etimeOfDayToDayFraction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Iso' LocalTime Rational",
        "fct-source": "src/Data-Time-Lens.html#julianDT",
        "fct-type": "function",
        "title": "julianDT"
      },
      "index": {
        "description": "View LocalTime as fractional day in the modified Julian calendar See the description of ModifiedJulianDay and timeOfDayToDayFraction",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "julianDT",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:julianDay",
      "description": {
        "fct-descr": "\u003cp\u003eView \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e day number in the Julian calendar.\n\u003c/p\u003e\u003cp\u003eSee the description at the definition of \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Iso' Day Integer",
        "fct-source": "src/Data-Time-Lens.html#julianDay",
        "fct-type": "function",
        "title": "julianDay"
      },
      "index": {
        "description": "View Day as an Integer day number in the Julian calendar See the description at the definition of Day",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "julianDay",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:minutes",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the minute value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' t Int",
        "fct-source": "src/Data-Time-Lens.html#minutes",
        "fct-type": "function",
        "title": "minutes"
      },
      "index": {
        "description": "Lens into the minute value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "minutes",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:months",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the month value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. The updated\n month value will be clipped to a valid month value. Also note that\n the day value might also be modified (clipped to a valid day in\n that month).\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' d Int",
        "fct-source": "src/Data-Time-Lens.html#months",
        "fct-type": "function",
        "title": "months"
      },
      "index": {
        "description": "Lens into the month value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values The updated month value will be clipped to valid month value Also note that the day value might also be modified clipped to valid day in that month",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "months",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:seconds",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the second value of a \u003ccode\u003e\u003ca\u003eTimeable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e: it only obeys the\n lens laws if used with valid values.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' t Pico",
        "fct-source": "src/Data-Time-Lens.html#seconds",
        "fct-type": "function",
        "title": "seconds"
      },
      "index": {
        "description": "Lens into the second value of Timeable Warning this is not proper lens for UTCTime it only obeys the lens laws if used with valid values",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "seconds",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:time",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a TimeOfDay",
        "fct-source": "src/Data-Time-Lens.html#time",
        "fct-type": "method",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "time",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:timeAsDiff",
      "description": {
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' a DiffTime",
        "fct-source": "src/Data-Time-Lens.html#timeAsDiff",
        "fct-type": "method",
        "title": "timeAsDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "timeAsDiff",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "As Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:utcAsLocal",
      "description": {
        "fct-descr": "\u003cp\u003eTrivial isomorphism between \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe view \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e values as being in the UTC time zone. This is\n \u003ccode\u003e\u003ca\u003eutcInTZ\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003eutc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Iso' UTCTime LocalTime",
        "fct-source": "src/Data-Time-Lens.html#utcAsLocal",
        "fct-type": "function",
        "title": "utcAsLocal"
      },
      "index": {
        "description": "Trivial isomorphism between UTCTime and LocalTime We view LocalTime values as being in the UTC time zone This is utcInTZ applied to utc",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "utcAsLocal",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "As Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:utcInTZ",
      "description": {
        "fct-descr": "\u003cp\u003eIsomorphism between \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e for the given\n \u003ccode\u003e\u003ca\u003eTimeZone\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "TimeZone -\u003e Iso' UTCTime LocalTime",
        "fct-source": "src/Data-Time-Lens.html#utcInTZ",
        "fct-type": "function",
        "title": "utcInTZ"
      },
      "index": {
        "description": "Isomorphism between UTCTime and LocalTime for the given TimeZone",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "utcInTZ",
        "normalized": "TimeZone-\u003eIso' UTCTime LocalTime",
        "package": "lens-datetime",
        "partial": "In TZ",
        "signature": "TimeZone-\u003eIso' UTCTime LocalTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lens-datetime/docs/Data-Time-Lens.html#v:years",
      "description": {
        "fct-descr": "\u003cp\u003eLens into the year value of a \u003ccode\u003e\u003ca\u003eDateable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWarning: this is not a proper lens for \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e:\n it only obeys the lens laws if used with valid values. When the\n year value in a date is modified the month and day values might\n also change. This happens when the original date was a February\n 29th and we change to a non-leap year.\n\u003c/p\u003e",
        "fct-module": "Data.Time.Lens",
        "fct-package": "lens-datetime",
        "fct-signature": "Lens' d Integer",
        "fct-source": "src/Data-Time-Lens.html#years",
        "fct-type": "function",
        "title": "years"
      },
      "index": {
        "description": "Lens into the year value of Dateable Warning this is not proper lens for LocalTime and UTCTime it only obeys the lens laws if used with valid values When the year value in date is modified the month and day values might also change This happens when the original date was February th and we change to non-leap year",
        "hierarchy": "Data Time Lens",
        "module": "Data.Time.Lens",
        "name": "years",
        "normalized": "",
        "package": "lens-datetime",
        "partial": "",
        "signature": ""
      }
    }
  }
]