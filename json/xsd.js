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
        "word": "xsd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXSD \u003ccode\u003edateTime\u003c/code\u003e data structure \u003ca\u003ehttp://www.w3.org/TR/xmlschema-2/#dateTime\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "DateTime",
          "package": "xsd",
          "source": "src/Text-XML-XSD-DateTime.html",
          "type": "module"
        },
        "index": {
          "description": "XSD dateTime data structure http www.w3.org TR xmlschema-2 dateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "DateTime",
          "package": "xsd",
          "partial": "Date Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXSD \u003ccode\u003edateTime\u003c/code\u003e data structure\n \u003ca\u003ehttp://www.w3.org/TR/xmlschema-2/#dateTime\u003c/a\u003e. Briefly, a \u003ccode\u003edateTime\u003c/code\u003e\n uses the Gregorian calendar and may or may not have an associated\n timezone. If it has a timezone, then the canonical representation\n of that date time is in UTC.\n\u003c/p\u003e\u003cp\u003eNote, it is not possible to establish a total order on \u003ccode\u003edateTime\u003c/code\u003e\n since non-timezoned are considered to belong to some unspecified\n timezone.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "DateTime",
          "package": "xsd",
          "source": "src/Text-XML-XSD-DateTime.html#DateTime",
          "type": "data"
        },
        "index": {
          "description": "XSD dateTime data structure http www.w3.org TR xmlschema-2 dateTime Briefly dateTime uses the Gregorian calendar and may or may not have an associated timezone If it has timezone then the canonical representation of that date time is in UTC Note it is not possible to establish total order on dateTime since non-timezoned are considered to belong to some unspecified timezone",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "DateTime",
          "package": "xsd",
          "partial": "Date Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#t:DateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD.DateTime",
          "name": "DtUnzoned",
          "package": "xsd",
          "signature": "DtUnzoned LocalTime",
          "source": "src/Text-XML-XSD-DateTime.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "DtUnzoned",
          "package": "xsd",
          "partial": "Dt Unzoned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:DtUnzoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD.DateTime",
          "name": "DtZoned",
          "package": "xsd",
          "signature": "DtZoned UTCTime",
          "source": "src/Text-XML-XSD-DateTime.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "DtZoned",
          "package": "xsd",
          "partial": "Dt Zoned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:DtZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism that parses the string into a \u003ccode\u003eDateTime\u003c/code\u003e and converts the\n \u003ccode\u003eDateTime\u003c/code\u003e into a string.\n\u003c/p\u003e\u003cpre\u003eJust (DtZoned t) == (dateTime # fromUTCTime t) ^? dateTime\u003c/pre\u003e\u003cpre\u003eJust (DtUnzoned t) == (dateTime # fromLocalTime t) ^? dateTime\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:10:10-05:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2009-10-10T08:10:10Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2119-10-10T03:10:10.4-13:26\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2119-10-10T16:36:10.4Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"0009-10-10T03:10:10.783952+14:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 0009-10-09T13:10:10.783952Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:10:10Z\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2009-10-10T03:10:10Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"-2009-05-10T21:08:59+05:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust -2009-05-10T16:08:59Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"-19399-12-31T13:10:10-14:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust -19398-01-01T03:10:10Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-12-31T13:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2009-12-31T13:10:10\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2012-10-15T24:00:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2012-10-16T00:00:00\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2002-10-10T12:00:00+05:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2002-10-10T07:00:00Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2002-10-10T00:00:00+05:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 2002-10-09T19:00:00Z\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"-0001-10-10T00:00:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 000-1-10-10T00:00:00\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"0001-10-10T00:00:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eJust 0001-10-10T00:00:00\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:10:10-05\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:10:10+14:50\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:10:1\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T03:1:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T0:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-1T10:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-1-10T10:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"209-10-10T03:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-10-10T24:10:10\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"0000-01-01T00:00:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"2009-13-01T00:00:00\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"+2009-10-01T04:20:40\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\"002009-10-01T04:20:40\" ^? dateTime\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edateTime # fromUTCTime (mkUTC 2119 10 10 16 36 10.4)\n\u003c/code\u003e\u003c/strong\u003e\"2119-10-10T16:36:10.4Z\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edateTime # fromZonedTime (mkZoned 2010 04 07 13 47 20.001 2 0)\n\u003c/code\u003e\u003c/strong\u003e\"2010-04-07T11:47:20.001Z\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edateTime # fromLocalTime (mkLocal 13 2 4 20 20 20)\n\u003c/code\u003e\u003c/strong\u003e\"0013-02-04T20:20:20\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(dateTime #) `fmap` (\"2010-04-07T13:47:20.001+02:00\" ^? dateTime) --  issue 2\n\u003c/code\u003e\u003c/strong\u003eJust \"2010-04-07T11:47:20.001Z\"\n\u003c/pre\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "dateTime",
          "package": "xsd",
          "signature": "Prism' Text DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#dateTime",
          "type": "function"
        },
        "index": {
          "description": "prism that parses the string into DateTime and converts the DateTime into string Just DtZoned dateTime fromUTCTime dateTime Just DtUnzoned dateTime fromLocalTime dateTime T03 dateTime Just T08 T03 dateTime Just T16 T03 dateTime Just T13 T03 dateTime Just T03 T21 dateTime Just T16 T13 dateTime Just T03 T13 dateTime Just T13 T24 dateTime Just T00 T12 dateTime Just T07 T00 dateTime Just T19 T00 dateTime Just T00 T00 dateTime Just T00 T03 dateTime Nothing T03 dateTime Nothing T03 dateTime Nothing T03 dateTime Nothing T0 dateTime Nothing T10 dateTime Nothing T10 dateTime Nothing T03 dateTime Nothing T24 dateTime Nothing T00 dateTime Nothing T00 dateTime Nothing T04 dateTime Nothing T04 dateTime Nothing dateTime fromUTCTime mkUTC T16 dateTime fromZonedTime mkZoned T11 dateTime fromLocalTime mkLocal T20 dateTime fmap T13 dateTime issue Just T11",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "dateTime",
          "package": "xsd",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:dateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the string into a \u003ccode\u003edateTime\u003c/code\u003e or may fail with a parse error.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "dateTime'",
          "package": "xsd",
          "signature": "Text -\u003e Either String DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#dateTime%27",
          "type": "function"
        },
        "index": {
          "description": "Parses the string into dateTime or may fail with parse error",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "dateTime'",
          "normalized": "Text-\u003eEither String DateTime",
          "package": "xsd",
          "partial": "Time'",
          "signature": "Text-\u003eEither String DateTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:dateTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduction on a \u003ccode\u003eDateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "fold",
          "package": "xsd",
          "signature": "(LocalTime -\u003e a) -\u003e (UTCTime -\u003e a) -\u003e DateTime -\u003e a",
          "source": "src/Text-XML-XSD-DateTime.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Reduction on DateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "fold",
          "normalized": "(LocalTime-\u003ea)-\u003e(UTCTime-\u003ea)-\u003eDateTime-\u003ea",
          "package": "xsd",
          "signature": "(LocalTime-\u003ea)-\u003e(UTCTime-\u003ea)-\u003eDateTime-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a local time to a non-timezoned \u003ccode\u003edateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromLocalTime",
          "package": "xsd",
          "signature": "LocalTime -\u003e DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#fromLocalTime",
          "type": "function"
        },
        "index": {
          "description": "Converts local time to non-timezoned dateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromLocalTime",
          "normalized": "LocalTime-\u003eDateTime",
          "package": "xsd",
          "partial": "Local Time",
          "signature": "LocalTime-\u003eDateTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:fromLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a UTC time to a timezoned \u003ccode\u003edateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromUTCTime",
          "package": "xsd",
          "signature": "UTCTime -\u003e DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#fromUTCTime",
          "type": "function"
        },
        "index": {
          "description": "Converts UTC time to timezoned dateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromUTCTime",
          "normalized": "UTCTime-\u003eDateTime",
          "package": "xsd",
          "partial": "UTCTime",
          "signature": "UTCTime-\u003eDateTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:fromUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a zoned time to a \u003ccode\u003edateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromZonedTime",
          "package": "xsd",
          "signature": "ZonedTime -\u003e DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#fromZonedTime",
          "type": "function"
        },
        "index": {
          "description": "Converts zoned time to dateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "fromZonedTime",
          "normalized": "ZonedTime-\u003eDateTime",
          "package": "xsd",
          "partial": "Zoned Time",
          "signature": "ZonedTime-\u003eDateTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:fromZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the given \u003ccode\u003edateTime\u003c/code\u003e is non-timezoned.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "isUnzoned",
          "package": "xsd",
          "signature": "DateTime -\u003e Bool",
          "source": "src/Text-XML-XSD-DateTime.html#isUnzoned",
          "type": "function"
        },
        "index": {
          "description": "Whether the given dateTime is non-timezoned",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "isUnzoned",
          "normalized": "DateTime-\u003eBool",
          "package": "xsd",
          "partial": "Unzoned",
          "signature": "DateTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:isUnzoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the given \u003ccode\u003edateTime\u003c/code\u003e is timezoned.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "isZoned",
          "package": "xsd",
          "signature": "DateTime -\u003e Bool",
          "source": "src/Text-XML-XSD-DateTime.html#isZoned",
          "type": "function"
        },
        "index": {
          "description": "Whether the given dateTime is timezoned",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "isZoned",
          "normalized": "DateTime-\u003eBool",
          "package": "xsd",
          "partial": "Zoned",
          "signature": "DateTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:isZoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe isomorphism between a \u003ccode\u003eDateTime\u003c/code\u003e and \u003ccode\u003eEither UTCTime LocalTime\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "isoEither",
          "package": "xsd",
          "signature": "Iso' (Either UTCTime LocalTime) DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#isoEither",
          "type": "function"
        },
        "index": {
          "description": "The isomorphism between DateTime and Either UTCTime LocalTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "isoEither",
          "package": "xsd",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:isoEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe isomorphism between a \u003ccode\u003eDateTime\u003c/code\u003e and \u003ccode\u003eEither LocalTime UTCTime\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "isoEither'",
          "package": "xsd",
          "signature": "Iso' (Either LocalTime UTCTime) DateTime",
          "source": "src/Text-XML-XSD-DateTime.html#isoEither%27",
          "type": "function"
        },
        "index": {
          "description": "The isomorphism between DateTime and Either LocalTime UTCTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "isoEither'",
          "package": "xsd",
          "partial": "Either'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:isoEither-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the string in a \u003ccode\u003edateTime\u003c/code\u003e then converts to a local time\n time and may fail.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "localTime",
          "package": "xsd",
          "signature": "Text -\u003e Maybe LocalTime",
          "source": "src/Text-XML-XSD-DateTime.html#localTime",
          "type": "function"
        },
        "index": {
          "description": "Parses the string in dateTime then converts to local time time and may fail",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "localTime",
          "normalized": "Text-\u003eMaybe LocalTime",
          "package": "xsd",
          "partial": "Time",
          "signature": "Text-\u003eMaybe LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:localTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the string in a \u003ccode\u003edateTime\u003c/code\u003e then converts to a local time\n and may fail with a parse error.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "localTime'",
          "package": "xsd",
          "signature": "Text -\u003e Either String LocalTime",
          "source": "src/Text-XML-XSD-DateTime.html#localTime%27",
          "type": "function"
        },
        "index": {
          "description": "Parses the string in dateTime then converts to local time and may fail with parse error",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "localTime'",
          "normalized": "Text-\u003eEither String LocalTime",
          "package": "xsd",
          "partial": "Time'",
          "signature": "Text-\u003eEither String LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:localTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism that views the \u003ccode\u003eLocalTime\u003c/code\u003e component of a \u003ccode\u003eDateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "pLocalTime",
          "package": "xsd",
          "signature": "Prism' DateTime LocalTime",
          "source": "src/Text-XML-XSD-DateTime.html#pLocalTime",
          "type": "function"
        },
        "index": {
          "description": "prism that views the LocalTime component of DateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "pLocalTime",
          "package": "xsd",
          "partial": "Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:pLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism that views the \u003ccode\u003eUTCTime\u003c/code\u003e component of a \u003ccode\u003eDateTime\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "pUTCTime",
          "package": "xsd",
          "signature": "Prism' DateTime UTCTime",
          "source": "src/Text-XML-XSD-DateTime.html#pUTCTime",
          "type": "function"
        },
        "index": {
          "description": "prism that views the UTCTime component of DateTime",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "pUTCTime",
          "package": "xsd",
          "partial": "UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:pUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to convert a \u003ccode\u003edateTime\u003c/code\u003e to a local time. The attempt\n fails if the given \u003ccode\u003edateTime\u003c/code\u003e is timezoned.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "toLocalTime",
          "package": "xsd",
          "signature": "DateTime -\u003e Maybe LocalTime",
          "source": "src/Text-XML-XSD-DateTime.html#toLocalTime",
          "type": "function"
        },
        "index": {
          "description": "Attempts to convert dateTime to local time The attempt fails if the given dateTime is timezoned",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "toLocalTime",
          "normalized": "DateTime-\u003eMaybe LocalTime",
          "package": "xsd",
          "partial": "Local Time",
          "signature": "DateTime-\u003eMaybe LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:toLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to convert a \u003ccode\u003edateTime\u003c/code\u003e to a UTC time. The attempt fails\n if the given \u003ccode\u003edateTime\u003c/code\u003e is non-timezoned.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "toUTCTime",
          "package": "xsd",
          "signature": "DateTime -\u003e Maybe UTCTime",
          "source": "src/Text-XML-XSD-DateTime.html#toUTCTime",
          "type": "function"
        },
        "index": {
          "description": "Attempts to convert dateTime to UTC time The attempt fails if the given dateTime is non-timezoned",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "toUTCTime",
          "normalized": "DateTime-\u003eMaybe UTCTime",
          "package": "xsd",
          "partial": "UTCTime",
          "signature": "DateTime-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:toUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the string in a \u003ccode\u003edateTime\u003c/code\u003e then converts to a UTC time and\n may fail.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "utcTime",
          "package": "xsd",
          "signature": "Text -\u003e Maybe UTCTime",
          "source": "src/Text-XML-XSD-DateTime.html#utcTime",
          "type": "function"
        },
        "index": {
          "description": "Parses the string in dateTime then converts to UTC time and may fail",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "utcTime",
          "normalized": "Text-\u003eMaybe UTCTime",
          "package": "xsd",
          "partial": "Time",
          "signature": "Text-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:utcTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the string in a \u003ccode\u003edateTime\u003c/code\u003e then converts to a UTC time and\n may fail with a parse error.\n\u003c/p\u003e",
          "module": "Text.XML.XSD.DateTime",
          "name": "utcTime'",
          "package": "xsd",
          "signature": "Text -\u003e Either String UTCTime",
          "source": "src/Text-XML-XSD-DateTime.html#utcTime%27",
          "type": "function"
        },
        "index": {
          "description": "Parses the string in dateTime then converts to UTC time and may fail with parse error",
          "hierarchy": "Text XML XSD DateTime",
          "module": "Text.XML.XSD.DateTime",
          "name": "utcTime'",
          "normalized": "Text-\u003eEither String UTCTime",
          "package": "xsd",
          "partial": "Time'",
          "signature": "Text-\u003eEither String UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD-DateTime.html#v:utcTime-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "XSD",
          "package": "xsd",
          "source": "src/Text-XML-XSD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "XSD",
          "package": "xsd",
          "partial": "XSD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "Atto",
          "package": "xsd",
          "source": "src/Text-XML-XSD.html#Atto",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "Atto",
          "package": "xsd",
          "partial": "Atto",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#t:Atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "E18",
          "package": "xsd",
          "source": "src/Text-XML-XSD.html#E18",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "E18",
          "package": "xsd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#t:E18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "boolean",
          "package": "xsd",
          "signature": "Text -\u003e Either String Bool",
          "source": "src/Text-XML-XSD.html#boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "boolean",
          "normalized": "Text-\u003eEither String Bool",
          "package": "xsd",
          "signature": "Text-\u003eEither String Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "byte",
          "package": "xsd",
          "signature": "Text -\u003e Either String Int8",
          "source": "src/Text-XML-XSD.html#byte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "byte",
          "normalized": "Text-\u003eEither String Int",
          "package": "xsd",
          "signature": "Text-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:byte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "decimal",
          "package": "xsd",
          "signature": "Text -\u003e Either String Atto",
          "source": "src/Text-XML-XSD.html#decimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "decimal",
          "normalized": "Text-\u003eEither String Atto",
          "package": "xsd",
          "signature": "Text-\u003eEither String Atto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "double",
          "package": "xsd",
          "signature": "Text -\u003e Either String Double",
          "source": "src/Text-XML-XSD.html#double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "double",
          "normalized": "Text-\u003eEither String Double",
          "package": "xsd",
          "signature": "Text-\u003eEither String Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "fastDouble",
          "package": "xsd",
          "signature": "Text -\u003e Either String Double",
          "source": "src/Text-XML-XSD.html#fastDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "fastDouble",
          "normalized": "Text-\u003eEither String Double",
          "package": "xsd",
          "partial": "Double",
          "signature": "Text-\u003eEither String Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:fastDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "float",
          "package": "xsd",
          "signature": "Text -\u003e Either String Float",
          "source": "src/Text-XML-XSD.html#float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "float",
          "normalized": "Text-\u003eEither String Float",
          "package": "xsd",
          "signature": "Text-\u003eEither String Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "int",
          "package": "xsd",
          "signature": "Text -\u003e Either String Int32",
          "source": "src/Text-XML-XSD.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "int",
          "normalized": "Text-\u003eEither String Int",
          "package": "xsd",
          "signature": "Text-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "integer",
          "package": "xsd",
          "signature": "Text -\u003e Either String a",
          "source": "src/Text-XML-XSD.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "integer",
          "normalized": "Text-\u003eEither String a",
          "package": "xsd",
          "signature": "Text-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "long",
          "package": "xsd",
          "signature": "Text -\u003e Either String Int64",
          "source": "src/Text-XML-XSD.html#long",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "long",
          "normalized": "Text-\u003eEither String Int",
          "package": "xsd",
          "signature": "Text-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "short",
          "package": "xsd",
          "signature": "Text -\u003e Either String Int16",
          "source": "src/Text-XML-XSD.html#short",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "short",
          "normalized": "Text-\u003eEither String Int",
          "package": "xsd",
          "signature": "Text-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "toBoolean",
          "package": "xsd",
          "signature": "Bool -\u003e Text",
          "source": "src/Text-XML-XSD.html#toBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "toBoolean",
          "normalized": "Bool-\u003eText",
          "package": "xsd",
          "partial": "Boolean",
          "signature": "Bool-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:toBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "toSigned",
          "package": "xsd",
          "signature": "a -\u003e Text",
          "source": "src/Text-XML-XSD.html#toSigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "toSigned",
          "normalized": "a-\u003eText",
          "package": "xsd",
          "partial": "Signed",
          "signature": "a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:toSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "unsignedByte",
          "package": "xsd",
          "signature": "Text -\u003e Either String Word8",
          "source": "src/Text-XML-XSD.html#unsignedByte",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "unsignedByte",
          "normalized": "Text-\u003eEither String Word",
          "package": "xsd",
          "partial": "Byte",
          "signature": "Text-\u003eEither String Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:unsignedByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "unsignedInt",
          "package": "xsd",
          "signature": "Text -\u003e Either String Word32",
          "source": "src/Text-XML-XSD.html#unsignedInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "unsignedInt",
          "normalized": "Text-\u003eEither String Word",
          "package": "xsd",
          "partial": "Int",
          "signature": "Text-\u003eEither String Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:unsignedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat XSD calls \u003ccode\u003enonNegativeInteger\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.XSD",
          "name": "unsignedInteger",
          "package": "xsd",
          "signature": "Text -\u003e Either String a",
          "source": "src/Text-XML-XSD.html#unsignedInteger",
          "type": "function"
        },
        "index": {
          "description": "What XSD calls nonNegativeInteger",
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "unsignedInteger",
          "normalized": "Text-\u003eEither String a",
          "package": "xsd",
          "partial": "Integer",
          "signature": "Text-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:unsignedInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "unsignedLong",
          "package": "xsd",
          "signature": "Text -\u003e Either String Word64",
          "source": "src/Text-XML-XSD.html#unsignedLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "unsignedLong",
          "normalized": "Text-\u003eEither String Word",
          "package": "xsd",
          "partial": "Long",
          "signature": "Text-\u003eEither String Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:unsignedLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.XSD",
          "name": "unsignedShort",
          "package": "xsd",
          "signature": "Text -\u003e Either String Word16",
          "source": "src/Text-XML-XSD.html#unsignedShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML XSD",
          "module": "Text.XML.XSD",
          "name": "unsignedShort",
          "normalized": "Text-\u003eEither String Word",
          "package": "xsd",
          "partial": "Short",
          "signature": "Text-\u003eEither String Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xsd/docs/Text-XML-XSD.html#v:unsignedShort"
      }
    }
  ]
]