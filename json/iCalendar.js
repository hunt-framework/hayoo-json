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
        "word": "iCalendar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Parser",
          "name": "Parser",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "Parser",
          "package": "iCalendar",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions for decoding \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Parser",
          "name": "DecodingFunctions",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Parser-Common.html#DecodingFunctions",
          "type": "data"
        },
        "index": {
          "description": "Functions for decoding ByteString into Text",
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "DecodingFunctions",
          "package": "iCalendar",
          "partial": "Decoding Functions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#t:DecodingFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Parser",
          "name": "DecodingFunctions",
          "package": "iCalendar",
          "signature": "DecodingFunctions",
          "source": "src/Text-ICalendar-Parser-Common.html#DecodingFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "DecodingFunctions",
          "package": "iCalendar",
          "partial": "Decoding Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:DecodingFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Parser",
          "name": "dfBS2IText",
          "package": "iCalendar",
          "signature": "ByteString -\u003e CI Text",
          "source": "src/Text-ICalendar-Parser-Common.html#DecodingFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "dfBS2IText",
          "normalized": "ByteString-\u003eCI Text",
          "package": "iCalendar",
          "partial": "BS IText",
          "signature": "ByteString-\u003eCI Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:dfBS2IText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Parser",
          "name": "dfBS2Text",
          "package": "iCalendar",
          "signature": "ByteString -\u003e Text",
          "source": "src/Text-ICalendar-Parser-Common.html#DecodingFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "dfBS2Text",
          "normalized": "ByteString-\u003eText",
          "package": "iCalendar",
          "partial": "BS Text",
          "signature": "ByteString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:dfBS2Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use parseICalendar instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated synonym for parseICalendar\n\u003c/p\u003e",
          "module": "Text.ICalendar.Parser",
          "name": "parseICal",
          "package": "iCalendar",
          "signature": "DecodingFunctions -\u003e FilePath -\u003e ByteString -\u003e Either String ([VCalendar], [String])",
          "source": "src/Text-ICalendar-Parser.html#parseICal",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseICalendar instead Deprecated synonym for parseICalendar",
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "parseICal",
          "normalized": "DecodingFunctions-\u003eFilePath-\u003eByteString-\u003eEither String([VCalendar],[String])",
          "package": "iCalendar",
          "partial": "ICal",
          "signature": "DecodingFunctions-\u003eFilePath-\u003eByteString-\u003eEither String([VCalendar],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:parseICal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use parseICalendarFile instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated synonym for parseICalendarFile\n\u003c/p\u003e",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalFile",
          "package": "iCalendar",
          "signature": "DecodingFunctions -\u003e FilePath -\u003e IO (Either String ([VCalendar], [String]))",
          "source": "src/Text-ICalendar-Parser.html#parseICalFile",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseICalendarFile instead Deprecated synonym for parseICalendarFile",
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalFile",
          "normalized": "DecodingFunctions-\u003eFilePath-\u003eIO(Either String([VCalendar],[String]))",
          "package": "iCalendar",
          "partial": "ICal File",
          "signature": "DecodingFunctions-\u003eFilePath-\u003eIO(Either String([VCalendar],[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:parseICalFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a ByteString containing iCalendar data.\n\u003c/p\u003e\u003cp\u003eReturns either an error, or a tuple of the result and a list of warnings.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalendar",
          "package": "iCalendar",
          "signature": "DecodingFunctions-\u003e FilePath-\u003e ByteString-\u003e Either String ([VCalendar], [String])",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString containing iCalendar data Returns either an error or tuple of the result and list of warnings",
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalendar",
          "normalized": "DecodingFunctions-\u003eFilePath-\u003eByteString-\u003eEither String([VCalendar],[String])",
          "package": "iCalendar",
          "partial": "ICalendar",
          "signature": "DecodingFunctions-\u003eFilePath-\u003eByteString-\u003eEither String([VCalendar],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:parseICalendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an iCalendar file.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalendarFile",
          "package": "iCalendar",
          "signature": "DecodingFunctions -\u003e FilePath -\u003e IO (Either String ([VCalendar], [String]))",
          "source": "src/Text-ICalendar-Parser.html#parseICalendarFile",
          "type": "function"
        },
        "index": {
          "description": "Parse an iCalendar file",
          "hierarchy": "Text ICalendar Parser",
          "module": "Text.ICalendar.Parser",
          "name": "parseICalendarFile",
          "normalized": "DecodingFunctions-\u003eFilePath-\u003eIO(Either String([VCalendar],[String]))",
          "package": "iCalendar",
          "partial": "ICalendar File",
          "signature": "DecodingFunctions-\u003eFilePath-\u003eIO(Either String([VCalendar],[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Parser.html#v:parseICalendarFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Printer",
          "name": "Printer",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "Printer",
          "package": "iCalendar",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions for encoding into bytestring builders.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Printer",
          "name": "EncodingFunctions",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Printer.html#EncodingFunctions",
          "type": "data"
        },
        "index": {
          "description": "Functions for encoding into bytestring builders",
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "EncodingFunctions",
          "package": "iCalendar",
          "partial": "Encoding Functions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#t:EncodingFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Printer",
          "name": "EncodingFunctions",
          "package": "iCalendar",
          "signature": "EncodingFunctions",
          "source": "src/Text-ICalendar-Printer.html#EncodingFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "EncodingFunctions",
          "package": "iCalendar",
          "partial": "Encoding Functions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#v:EncodingFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Printer",
          "name": "efChar2Bu",
          "package": "iCalendar",
          "signature": "Char -\u003e Builder",
          "source": "src/Text-ICalendar-Printer.html#EncodingFunctions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "efChar2Bu",
          "normalized": "Char-\u003eBuilder",
          "package": "iCalendar",
          "partial": "Char Bu",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#v:efChar2Bu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many octets the character is encoded.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Printer",
          "name": "efChar2Len",
          "package": "iCalendar",
          "signature": "Char -\u003e Int",
          "source": "src/Text-ICalendar-Printer.html#EncodingFunctions",
          "type": "function"
        },
        "index": {
          "description": "How many octets the character is encoded",
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "efChar2Len",
          "normalized": "Char-\u003eInt",
          "package": "iCalendar",
          "partial": "Char Len",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#v:efChar2Len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use printICalendar instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated synonym for printICalendar\n\u003c/p\u003e",
          "module": "Text.ICalendar.Printer",
          "name": "printICal",
          "package": "iCalendar",
          "signature": "EncodingFunctions -\u003e VCalendar -\u003e ByteString",
          "source": "src/Text-ICalendar-Printer.html#printICal",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use printICalendar instead Deprecated synonym for printICalendar",
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "printICal",
          "normalized": "EncodingFunctions-\u003eVCalendar-\u003eByteString",
          "package": "iCalendar",
          "partial": "ICal",
          "signature": "EncodingFunctions-\u003eVCalendar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#v:printICal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a VCalendar object to a ByteString.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Printer",
          "name": "printICalendar",
          "package": "iCalendar",
          "signature": "EncodingFunctions -\u003e VCalendar -\u003e ByteString",
          "source": "src/Text-ICalendar-Printer.html#printICalendar",
          "type": "function"
        },
        "index": {
          "description": "Print VCalendar object to ByteString",
          "hierarchy": "Text ICalendar Printer",
          "module": "Text.ICalendar.Printer",
          "name": "printICalendar",
          "normalized": "EncodingFunctions-\u003eVCalendar-\u003eByteString",
          "package": "iCalendar",
          "partial": "ICalendar",
          "signature": "EncodingFunctions-\u003eVCalendar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Printer.html#v:printICalendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eICalendar types, based on RFC5545.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Types",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html",
          "type": "module"
        },
        "index": {
          "description": "ICalendar types based on RFC5545",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Types",
          "package": "iCalendar",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlarm Trigger Relationship. 3.2.14.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "AlarmTriggerRelationship",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#AlarmTriggerRelationship",
          "type": "data"
        },
        "index": {
          "description": "Alarm Trigger Relationship",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "AlarmTriggerRelationship",
          "package": "iCalendar",
          "partial": "Alarm Trigger Relationship",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:AlarmTriggerRelationship"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttachment. 3.8.1.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Attachment",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "data"
        },
        "index": {
          "description": "Attachment",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Attachment",
          "package": "iCalendar",
          "partial": "Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttendee. 3.8.4.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Attendee",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "data"
        },
        "index": {
          "description": "Attendee",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Attendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Attendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalendar User Type. 3.2.3.\n\u003c/p\u003e\u003cp\u003eUnrecognized CUTypeX MUST be treated as Unknown.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "CUType",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "data"
        },
        "index": {
          "description": "Calendar User Type Unrecognized CUTypeX MUST be treated as Unknown",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CUType",
          "package": "iCalendar",
          "partial": "CUType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:CUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CalAddress",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#CalAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CalAddress",
          "package": "iCalendar",
          "partial": "Cal Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:CalAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategories. 3.8.1.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Categories",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Categories",
          "type": "data"
        },
        "index": {
          "description": "Categories",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Categories",
          "package": "iCalendar",
          "partial": "Categories",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassification. 3.8.1.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Class",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Class",
          "type": "data"
        },
        "index": {
          "description": "Classification",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Class",
          "package": "iCalendar",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassification value. 3.8.1.3.\n Unrecognized ClassValueX MUST be treated as Private.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "ClassValue",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#ClassValue",
          "type": "data"
        },
        "index": {
          "description": "Classification value Unrecognized ClassValueX MUST be treated as Private",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ClassValue",
          "package": "iCalendar",
          "partial": "Class Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:ClassValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment. 3.8.1.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Comment",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "data"
        },
        "index": {
          "description": "Comment",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Comment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time Completed. 3.8.2.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Completed",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Completed",
          "type": "data"
        },
        "index": {
          "description": "Date-Time Completed",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Completed",
          "package": "iCalendar",
          "partial": "Completed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContact. 3.8.4.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Contact",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "data"
        },
        "index": {
          "description": "Contact",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Contact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Contact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time Created. 3.8.7.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Created",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Created",
          "type": "data"
        },
        "index": {
          "description": "Date-Time Created",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Created",
          "package": "iCalendar",
          "partial": "Created",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time End. 3.8.2.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "DTEnd",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "data"
        },
        "index": {
          "description": "Date-Time End",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTEnd",
          "package": "iCalendar",
          "partial": "DTEnd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:DTEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time Stamp. 3.8.7.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "DTStamp",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#DTStamp",
          "type": "data"
        },
        "index": {
          "description": "Date-Time Stamp",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:DTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time Start. 3.8.2.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "DTStart",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "data"
        },
        "index": {
          "description": "Date-Time Start",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:DTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate. 3.3.4\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Date",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Date",
          "type": "data"
        },
        "index": {
          "description": "Date",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Date",
          "package": "iCalendar",
          "partial": "Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time value. 3.3.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "DateTime",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "data"
        },
        "index": {
          "description": "Date-Time value",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DateTime",
          "package": "iCalendar",
          "partial": "Date Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:DateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription. 3.8.1.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Description",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "data"
        },
        "index": {
          "description": "Description",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Description",
          "package": "iCalendar",
          "partial": "Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate-Time Due. 3.8.2.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Due",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "data"
        },
        "index": {
          "description": "Date-Time Due",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Due",
          "package": "iCalendar",
          "partial": "Due",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Due"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration value. 3.3.6.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Duration",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "data"
        },
        "index": {
          "description": "Duration value",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Duration",
          "package": "iCalendar",
          "partial": "Duration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration property. 3.8.2.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "DurationProp",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#DurationProp",
          "type": "data"
        },
        "index": {
          "description": "Duration property",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DurationProp",
          "package": "iCalendar",
          "partial": "Duration Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:DurationProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus, but only for Events. 3.8.1.11.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "EventStatus",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#EventStatus",
          "type": "data"
        },
        "index": {
          "description": "Status but only for Events",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "EventStatus",
          "package": "iCalendar",
          "partial": "Event Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:EventStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException Date-Times. 3.8.5.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "ExDate",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "data"
        },
        "index": {
          "description": "Exception Date-Times",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ExDate",
          "package": "iCalendar",
          "partial": "Ex Date",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:ExDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree/Busy Time Type. 3.2.9.\n\u003c/p\u003e\u003cp\u003eUnrecognized FBTypeX MUST be treated as Busy.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "FBType",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "data"
        },
        "index": {
          "description": "Free Busy Time Type Unrecognized FBTypeX MUST be treated as Busy",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FBType",
          "package": "iCalendar",
          "partial": "FBType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:FBType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "FreeBusy",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#FreeBusy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FreeBusy",
          "package": "iCalendar",
          "partial": "Free Busy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:FreeBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrequency in recurrences. 3.3.10.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Frequency",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "data"
        },
        "index": {
          "description": "Frequency in recurrences",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Frequency",
          "package": "iCalendar",
          "partial": "Frequency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeographic Position. 3.8.1.6.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Geo",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Geo",
          "type": "data"
        },
        "index": {
          "description": "Geographic Position",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Geo",
          "package": "iCalendar",
          "partial": "Geo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion. 3.7.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "ICalVersion",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "data"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ICalVersion",
          "package": "iCalendar",
          "partial": "ICal Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:ICalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus, but only for Journals. 3.8.1.11.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "JournalStatus",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#JournalStatus",
          "type": "data"
        },
        "index": {
          "description": "Status but only for Journals",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "JournalStatus",
          "package": "iCalendar",
          "partial": "Journal Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:JournalStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Language",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Language",
          "type": "newtype"
        },
        "index": {
          "description": "Language",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Language",
          "package": "iCalendar",
          "partial": "Language",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast Modified. 3.8.7.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "LastModified",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#LastModified",
          "type": "data"
        },
        "index": {
          "description": "Last Modified",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "LastModified",
          "package": "iCalendar",
          "partial": "Last Modified",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:LastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation. 3.8.1.7.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Location",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "data"
        },
        "index": {
          "description": "Location",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Location",
          "package": "iCalendar",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethod. 3.7.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Method",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "Method",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Method",
          "package": "iCalendar",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrganizer. 3.8.4.3.\n\u003c/p\u003e\u003cp\u003eTODO: CAL-ADDRESS-related properties.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Organizer",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "data"
        },
        "index": {
          "description": "Organizer TODO CAL-ADDRESS-related properties",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Organizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Organizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne other parameter, either x-param or iana-param.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "OtherParam",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#OtherParam",
          "type": "data"
        },
        "index": {
          "description": "One other parameter either x-param or iana-param",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherParam",
          "package": "iCalendar",
          "partial": "Other Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:OtherParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther parameters, either x-param or other iana-param.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "OtherParams",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#OtherParams",
          "type": "data"
        },
        "index": {
          "description": "Other parameters either x-param or other iana-param",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherParams",
          "package": "iCalendar",
          "partial": "Other Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:OtherParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny other property.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "OtherProperty",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#OtherProperty",
          "type": "data"
        },
        "index": {
          "description": "Any other property",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherProperty",
          "package": "iCalendar",
          "partial": "Other Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:OtherProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParticipation Status. 3.2.12.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "PartStat",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "data"
        },
        "index": {
          "description": "Participation Status",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PartStat",
          "package": "iCalendar",
          "partial": "Part Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:PartStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePercent complete. 3.8.1.8.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "PercentComplete",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#PercentComplete",
          "type": "data"
        },
        "index": {
          "description": "Percent complete",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PercentComplete",
          "package": "iCalendar",
          "partial": "Percent Complete",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:PercentComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriod of time. 3.3.9.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Period",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Period",
          "type": "data"
        },
        "index": {
          "description": "Period of time",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Period",
          "package": "iCalendar",
          "partial": "Period",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriority. 3.8.1.9.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Priority",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Priority",
          "type": "data"
        },
        "index": {
          "description": "Priority",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Priority",
          "package": "iCalendar",
          "partial": "Priority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct Identifier. 3.7.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "ProdId",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#ProdId",
          "type": "data"
        },
        "index": {
          "description": "Product Identifier",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ProdId",
          "package": "iCalendar",
          "partial": "Prod Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:ProdId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurrence Date-Times. 3.8.5.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RDate",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "data"
        },
        "index": {
          "description": "Recurrence Date-Times",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RDate",
          "package": "iCalendar",
          "partial": "RDate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurrence Rule. 3.8.5.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RRule",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RRule",
          "type": "data"
        },
        "index": {
          "description": "Recurrence Rule",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurrence Identifier Range. 3.2.13\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Range",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Range",
          "type": "data"
        },
        "index": {
          "description": "Recurrence Identifier Range",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Range",
          "package": "iCalendar",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecur value. 3.3.10.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Recur",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "data"
        },
        "index": {
          "description": "Recur value",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Recur",
          "package": "iCalendar",
          "partial": "Recur",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Recur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurrence ID. 3.8.4.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceId",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "data"
        },
        "index": {
          "description": "Recurrence ID",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceId",
          "package": "iCalendar",
          "partial": "Recurrence Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RecurrenceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelated To. 3.8.4.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RelatedTo",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RelatedTo",
          "type": "data"
        },
        "index": {
          "description": "Related To",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RelatedTo",
          "package": "iCalendar",
          "partial": "Related To",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RelatedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelationship Type. 3.2.15.\n\u003c/p\u003e\u003cp\u003eUnrecognized RelationshipTypeX values MUST be treated as Parent.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RelationshipType",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RelationshipType",
          "type": "data"
        },
        "index": {
          "description": "Relationship Type Unrecognized RelationshipTypeX values MUST be treated as Parent",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RelationshipType",
          "package": "iCalendar",
          "partial": "Relationship Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RelationshipType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat count. 3.8.6.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Repeat",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Repeat",
          "type": "data"
        },
        "index": {
          "description": "Repeat count",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Repeat",
          "package": "iCalendar",
          "partial": "Repeat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest Status. 3.8.8.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "RequestStatus",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "data"
        },
        "index": {
          "description": "Request Status",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RequestStatus",
          "package": "iCalendar",
          "partial": "Request Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:RequestStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResources. 3.8.1.10.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Resources",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "data"
        },
        "index": {
          "description": "Resources",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Resources",
          "package": "iCalendar",
          "partial": "Resources",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRole. 3.2.16.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Role",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "data"
        },
        "index": {
          "description": "Role",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Role",
          "package": "iCalendar",
          "partial": "Role",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalendar Scale. 3.7.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Scale",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Scale",
          "type": "data"
        },
        "index": {
          "description": "Calendar Scale",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Scale",
          "package": "iCalendar",
          "partial": "Scale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence number. 3.8.7.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Sequence",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Sequence",
          "type": "data"
        },
        "index": {
          "description": "Sequence number",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Sequence",
          "package": "iCalendar",
          "partial": "Sequence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Sign",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Sign",
          "type": "data"
        },
        "index": {
          "description": "Sign",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Sign",
          "package": "iCalendar",
          "partial": "Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSummary. 3.8.1.12.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Summary",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "Summary",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Summary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime Zone Identifier. 3.8.3.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TZID",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TZID",
          "type": "data"
        },
        "index": {
          "description": "Time Zone Identifier",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZID",
          "package": "iCalendar",
          "partial": "TZID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TZID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime Zone Name. 3.8.3.2.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TZName",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TZName",
          "type": "data"
        },
        "index": {
          "description": "Time Zone Name",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZName",
          "package": "iCalendar",
          "partial": "TZName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TZName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime zone property, also 3.6.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TZProp",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "data"
        },
        "index": {
          "description": "Time zone property also",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZProp",
          "package": "iCalendar",
          "partial": "TZProp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TZProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime Zone URL. 3.8.3.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TZUrl",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TZUrl",
          "type": "data"
        },
        "index": {
          "description": "Time Zone URL",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZUrl",
          "package": "iCalendar",
          "partial": "TZUrl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TZUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime Transparency. 3.8.2.7.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TimeTransparency",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TimeTransparency",
          "type": "data"
        },
        "index": {
          "description": "Time Transparency",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TimeTransparency",
          "package": "iCalendar",
          "partial": "Time Transparency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TimeTransparency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus, but only for TODOs. 3.8.1.11.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "TodoStatus",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "data"
        },
        "index": {
          "description": "Status but only for TODOs",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TodoStatus",
          "package": "iCalendar",
          "partial": "Todo Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:TodoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger. 3.8.6.3.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Trigger",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "data"
        },
        "index": {
          "description": "Trigger",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Trigger",
          "package": "iCalendar",
          "partial": "Trigger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique Identifier. 3.8.4.7.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "UID",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#UID",
          "type": "data"
        },
        "index": {
          "description": "Unique Identifier",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform Resource Locator. 3.8.4.6.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "URL",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#URL",
          "type": "data"
        },
        "index": {
          "description": "Uniform Resource Locator",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "URL",
          "package": "iCalendar",
          "partial": "URL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTC Offset. 3.3.14, 3.8.3.4, and 3.8.3.3. (unified-ish)\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "UTCOffset",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#UTCOffset",
          "type": "data"
        },
        "index": {
          "description": "UTC Offset and unified-ish",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCOffset",
          "package": "iCalendar",
          "partial": "UTCOffset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:UTCOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriod of time which must be UTC, as in FreeBusy. 3.3.9.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriod",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#UTCPeriod",
          "type": "data"
        },
        "index": {
          "description": "Period of time which must be UTC as in FreeBusy",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriod",
          "package": "iCalendar",
          "partial": "UTCPeriod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:UTCPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVAlarm component. 3.6.6.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VAlarm",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "data"
        },
        "index": {
          "description": "VAlarm component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VAlarm",
          "package": "iCalendar",
          "partial": "VAlarm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VAlarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVCalendar component. 3.4.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VCalendar",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "data"
        },
        "index": {
          "description": "VCalendar component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VCalendar",
          "package": "iCalendar",
          "partial": "VCalendar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VCalendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent Component. 3.6.1.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VEvent",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "data"
        },
        "index": {
          "description": "Event Component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VEvent",
          "package": "iCalendar",
          "partial": "VEvent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree/Busy Component. 3.6.4\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VFreeBusy",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "data"
        },
        "index": {
          "description": "Free Busy Component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VFreeBusy",
          "package": "iCalendar",
          "partial": "VFree Busy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VFreeBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJournal Component. 3.6.3\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VJournal",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "data"
        },
        "index": {
          "description": "Journal Component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VJournal",
          "package": "iCalendar",
          "partial": "VJournal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny other component not recognized.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VOther",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VOther",
          "type": "data"
        },
        "index": {
          "description": "Any other component not recognized",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VOther",
          "package": "iCalendar",
          "partial": "VOther",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime Zone Component. 3.6.5.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VTimeZone",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "data"
        },
        "index": {
          "description": "Time Zone Component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VTimeZone",
          "package": "iCalendar",
          "partial": "VTime Zone",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo-Do Component. 3.6.2\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "VTodo",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "data"
        },
        "index": {
          "description": "To-Do Component",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VTodo",
          "package": "iCalendar",
          "partial": "VTodo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:VTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeekday, in recurrences. 3.3.10.\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "Weekday",
          "package": "iCalendar",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "data"
        },
        "index": {
          "description": "Weekday in recurrences",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Weekday",
          "package": "iCalendar",
          "partial": "Weekday",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#t:Weekday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Accepted",
          "package": "iCalendar",
          "signature": "Accepted",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Accepted",
          "package": "iCalendar",
          "partial": "Accepted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Accepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Attendee",
          "package": "iCalendar",
          "signature": "Attendee",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Attendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Attendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "BinaryAttachment",
          "package": "iCalendar",
          "signature": "BinaryAttachment",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "BinaryAttachment",
          "package": "iCalendar",
          "partial": "Binary Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:BinaryAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Busy",
          "package": "iCalendar",
          "signature": "Busy",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Busy",
          "package": "iCalendar",
          "partial": "Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Busy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "BusyTentative",
          "package": "iCalendar",
          "signature": "BusyTentative",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "BusyTentative",
          "package": "iCalendar",
          "partial": "Busy Tentative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:BusyTentative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "BusyUnavailable",
          "package": "iCalendar",
          "signature": "BusyUnavailable",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "BusyUnavailable",
          "package": "iCalendar",
          "partial": "Busy Unavailable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:BusyUnavailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CUTypeX",
          "package": "iCalendar",
          "signature": "CUTypeX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CUTypeX",
          "package": "iCalendar",
          "partial": "CUType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:CUTypeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CancelledEvent",
          "package": "iCalendar",
          "signature": "CancelledEvent",
          "source": "src/Text-ICalendar-Types.html#EventStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CancelledEvent",
          "package": "iCalendar",
          "partial": "Cancelled Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:CancelledEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CancelledJournal",
          "package": "iCalendar",
          "signature": "CancelledJournal",
          "source": "src/Text-ICalendar-Types.html#JournalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CancelledJournal",
          "package": "iCalendar",
          "partial": "Cancelled Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:CancelledJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CancelledTodo",
          "package": "iCalendar",
          "signature": "CancelledTodo",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CancelledTodo",
          "package": "iCalendar",
          "partial": "Cancelled Todo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:CancelledTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Categories",
          "package": "iCalendar",
          "signature": "Categories",
          "source": "src/Text-ICalendar-Types.html#Categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Categories",
          "package": "iCalendar",
          "partial": "Categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Chair",
          "package": "iCalendar",
          "signature": "Chair",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Chair",
          "package": "iCalendar",
          "partial": "Chair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Chair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Child",
          "package": "iCalendar",
          "signature": "Child",
          "source": "src/Text-ICalendar-Types.html#RelationshipType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Child",
          "package": "iCalendar",
          "partial": "Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Class",
          "package": "iCalendar",
          "signature": "Class",
          "source": "src/Text-ICalendar-Types.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Class",
          "package": "iCalendar",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ClassValueX",
          "package": "iCalendar",
          "signature": "ClassValueX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#ClassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ClassValueX",
          "package": "iCalendar",
          "partial": "Class Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ClassValueX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Comment",
          "package": "iCalendar",
          "signature": "Comment",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Comment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Completed",
          "package": "iCalendar",
          "signature": "Completed",
          "source": "src/Text-ICalendar-Types.html#Completed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Completed",
          "package": "iCalendar",
          "partial": "Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Completed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "CompletedTodo",
          "package": "iCalendar",
          "signature": "CompletedTodo",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "CompletedTodo",
          "package": "iCalendar",
          "partial": "Completed Todo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:CompletedTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Confidential",
          "package": "iCalendar",
          "signature": "Confidential",
          "source": "src/Text-ICalendar-Types.html#ClassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Confidential",
          "package": "iCalendar",
          "partial": "Confidential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Confidential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ConfirmedEvent",
          "package": "iCalendar",
          "signature": "ConfirmedEvent",
          "source": "src/Text-ICalendar-Types.html#EventStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ConfirmedEvent",
          "package": "iCalendar",
          "partial": "Confirmed Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ConfirmedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Contact",
          "package": "iCalendar",
          "signature": "Contact",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Contact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Contact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Created",
          "package": "iCalendar",
          "signature": "Created",
          "source": "src/Text-ICalendar-Types.html#Created",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Created",
          "package": "iCalendar",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Created"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DTEndDate",
          "package": "iCalendar",
          "signature": "DTEndDate",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTEndDate",
          "package": "iCalendar",
          "partial": "DTEnd Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DTEndDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DTEndDateTime",
          "package": "iCalendar",
          "signature": "DTEndDateTime",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTEndDateTime",
          "package": "iCalendar",
          "partial": "DTEnd Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DTEndDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DTStamp",
          "package": "iCalendar",
          "signature": "DTStamp",
          "source": "src/Text-ICalendar-Types.html#DTStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DTStartDate",
          "package": "iCalendar",
          "signature": "DTStartDate",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTStartDate",
          "package": "iCalendar",
          "partial": "DTStart Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DTStartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DTStartDateTime",
          "package": "iCalendar",
          "signature": "DTStartDateTime",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DTStartDateTime",
          "package": "iCalendar",
          "partial": "DTStart Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DTStartDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Daily",
          "package": "iCalendar",
          "signature": "Daily",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Daily",
          "package": "iCalendar",
          "partial": "Daily",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Daily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Date",
          "package": "iCalendar",
          "signature": "Date",
          "source": "src/Text-ICalendar-Types.html#Date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Date",
          "package": "iCalendar",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Declined",
          "package": "iCalendar",
          "signature": "Declined",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Declined",
          "package": "iCalendar",
          "partial": "Declined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Declined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Delegated",
          "package": "iCalendar",
          "signature": "Delegated",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Delegated",
          "package": "iCalendar",
          "partial": "Delegated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Delegated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Description",
          "package": "iCalendar",
          "signature": "Description",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Description",
          "package": "iCalendar",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DraftJournal",
          "package": "iCalendar",
          "signature": "DraftJournal",
          "source": "src/Text-ICalendar-Types.html#JournalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DraftJournal",
          "package": "iCalendar",
          "partial": "Draft Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DraftJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DueDate",
          "package": "iCalendar",
          "signature": "DueDate",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DueDate",
          "package": "iCalendar",
          "partial": "Due Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DueDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DueDateTime",
          "package": "iCalendar",
          "signature": "DueDateTime",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DueDateTime",
          "package": "iCalendar",
          "partial": "Due Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DueDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DurationDate",
          "package": "iCalendar",
          "signature": "DurationDate",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DurationDate",
          "package": "iCalendar",
          "partial": "Duration Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DurationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DurationProp",
          "package": "iCalendar",
          "signature": "DurationProp",
          "source": "src/Text-ICalendar-Types.html#DurationProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DurationProp",
          "package": "iCalendar",
          "partial": "Duration Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DurationProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DurationTime",
          "package": "iCalendar",
          "signature": "DurationTime",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DurationTime",
          "package": "iCalendar",
          "partial": "Duration Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DurationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "DurationWeek",
          "package": "iCalendar",
          "signature": "DurationWeek",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "DurationWeek",
          "package": "iCalendar",
          "partial": "Duration Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:DurationWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "End",
          "package": "iCalendar",
          "signature": "End",
          "source": "src/Text-ICalendar-Types.html#AlarmTriggerRelationship",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "End",
          "package": "iCalendar",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ExDateTimes",
          "package": "iCalendar",
          "signature": "ExDateTimes",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ExDateTimes",
          "package": "iCalendar",
          "partial": "Ex Date Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ExDateTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ExDates",
          "package": "iCalendar",
          "signature": "ExDates",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ExDates",
          "package": "iCalendar",
          "partial": "Ex Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ExDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "FBTypeX",
          "package": "iCalendar",
          "signature": "FBTypeX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FBTypeX",
          "package": "iCalendar",
          "partial": "FBType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:FBTypeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "FinalJournal",
          "package": "iCalendar",
          "signature": "FinalJournal",
          "source": "src/Text-ICalendar-Types.html#JournalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FinalJournal",
          "package": "iCalendar",
          "partial": "Final Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:FinalJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "FloatingDateTime",
          "package": "iCalendar",
          "signature": "FloatingDateTime",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FloatingDateTime",
          "package": "iCalendar",
          "partial": "Floating Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:FloatingDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Free",
          "package": "iCalendar",
          "signature": "Free",
          "source": "src/Text-ICalendar-Types.html#FBType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Free",
          "package": "iCalendar",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "FreeBusy",
          "package": "iCalendar",
          "signature": "FreeBusy",
          "source": "src/Text-ICalendar-Types.html#FreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "FreeBusy",
          "package": "iCalendar",
          "partial": "Free Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:FreeBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Friday",
          "package": "iCalendar",
          "signature": "Friday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Friday",
          "package": "iCalendar",
          "partial": "Friday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Friday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Geo",
          "package": "iCalendar",
          "signature": "Geo",
          "source": "src/Text-ICalendar-Types.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Geo",
          "package": "iCalendar",
          "partial": "Geo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Group",
          "package": "iCalendar",
          "signature": "Group",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Group",
          "package": "iCalendar",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Hourly",
          "package": "iCalendar",
          "signature": "Hourly",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Hourly",
          "package": "iCalendar",
          "partial": "Hourly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Hourly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "InProcess",
          "package": "iCalendar",
          "signature": "InProcess",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "InProcess",
          "package": "iCalendar",
          "partial": "In Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:InProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "InProcessTodo",
          "package": "iCalendar",
          "signature": "InProcessTodo",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "InProcessTodo",
          "package": "iCalendar",
          "partial": "In Process Todo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:InProcessTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Individual",
          "package": "iCalendar",
          "signature": "Individual",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Individual",
          "package": "iCalendar",
          "partial": "Individual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Individual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Language",
          "package": "iCalendar",
          "signature": "Language (CI Text)",
          "source": "src/Text-ICalendar-Types.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Language",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "LastModified",
          "package": "iCalendar",
          "signature": "LastModified",
          "source": "src/Text-ICalendar-Types.html#LastModified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "LastModified",
          "package": "iCalendar",
          "partial": "Last Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:LastModified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Location",
          "package": "iCalendar",
          "signature": "Location",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Location",
          "package": "iCalendar",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "MaxICalVersion",
          "package": "iCalendar",
          "signature": "MaxICalVersion",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "MaxICalVersion",
          "package": "iCalendar",
          "partial": "Max ICal Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:MaxICalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Method",
          "package": "iCalendar",
          "signature": "Method",
          "source": "src/Text-ICalendar-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Method",
          "package": "iCalendar",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "MinMaxICalVersion",
          "package": "iCalendar",
          "signature": "MinMaxICalVersion",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "MinMaxICalVersion",
          "package": "iCalendar",
          "partial": "Min Max ICal Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:MinMaxICalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Minutely",
          "package": "iCalendar",
          "signature": "Minutely",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Minutely",
          "package": "iCalendar",
          "partial": "Minutely",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Minutely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Monday",
          "package": "iCalendar",
          "signature": "Monday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Monday",
          "package": "iCalendar",
          "partial": "Monday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Monday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Monthly",
          "package": "iCalendar",
          "signature": "Monthly",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Monthly",
          "package": "iCalendar",
          "partial": "Monthly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Monthly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Negative",
          "package": "iCalendar",
          "signature": "Negative",
          "source": "src/Text-ICalendar-Types.html#Sign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Negative",
          "package": "iCalendar",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "NonParticipant",
          "package": "iCalendar",
          "signature": "NonParticipant",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "NonParticipant",
          "package": "iCalendar",
          "partial": "Non Participant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:NonParticipant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Opaque",
          "package": "iCalendar",
          "signature": "Opaque",
          "source": "src/Text-ICalendar-Types.html#TimeTransparency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Opaque",
          "package": "iCalendar",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "OptParticipant",
          "package": "iCalendar",
          "signature": "OptParticipant",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OptParticipant",
          "package": "iCalendar",
          "partial": "Opt Participant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:OptParticipant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Organizer",
          "package": "iCalendar",
          "signature": "Organizer",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Organizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Organizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "OtherParam",
          "package": "iCalendar",
          "signature": "OtherParam (CI Text) [Text]",
          "source": "src/Text-ICalendar-Types.html#OtherParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherParam",
          "normalized": "OtherParam(CI Text)[Text]",
          "package": "iCalendar",
          "partial": "Other Param",
          "signature": "OtherParam(CI Text)[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:OtherParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "OtherParams",
          "package": "iCalendar",
          "signature": "OtherParams (Set OtherParam)",
          "source": "src/Text-ICalendar-Types.html#OtherParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherParams",
          "package": "iCalendar",
          "partial": "Other Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:OtherParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "OtherProperty",
          "package": "iCalendar",
          "signature": "OtherProperty",
          "source": "src/Text-ICalendar-Types.html#OtherProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "OtherProperty",
          "package": "iCalendar",
          "partial": "Other Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:OtherProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Parent",
          "package": "iCalendar",
          "signature": "Parent",
          "source": "src/Text-ICalendar-Types.html#RelationshipType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Parent",
          "package": "iCalendar",
          "partial": "Parent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PartStatCompleted",
          "package": "iCalendar",
          "signature": "PartStatCompleted",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PartStatCompleted",
          "package": "iCalendar",
          "partial": "Part Stat Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PartStatCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PartStatNeedsAction",
          "package": "iCalendar",
          "signature": "PartStatNeedsAction",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PartStatNeedsAction",
          "package": "iCalendar",
          "partial": "Part Stat Needs Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PartStatNeedsAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PartStatX",
          "package": "iCalendar",
          "signature": "PartStatX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PartStatX",
          "package": "iCalendar",
          "partial": "Part Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PartStatX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PercentComplete",
          "package": "iCalendar",
          "signature": "PercentComplete",
          "source": "src/Text-ICalendar-Types.html#PercentComplete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PercentComplete",
          "package": "iCalendar",
          "partial": "Percent Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PercentComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PeriodDates",
          "package": "iCalendar",
          "signature": "PeriodDates DateTime DateTime",
          "source": "src/Text-ICalendar-Types.html#Period",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PeriodDates",
          "package": "iCalendar",
          "partial": "Period Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PeriodDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "PeriodDuration",
          "package": "iCalendar",
          "signature": "PeriodDuration DateTime Duration",
          "source": "src/Text-ICalendar-Types.html#Period",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "PeriodDuration",
          "package": "iCalendar",
          "partial": "Period Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:PeriodDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Positive",
          "package": "iCalendar",
          "signature": "Positive",
          "source": "src/Text-ICalendar-Types.html#Sign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Positive",
          "package": "iCalendar",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Priority",
          "package": "iCalendar",
          "signature": "Priority",
          "source": "src/Text-ICalendar-Types.html#Priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Priority",
          "package": "iCalendar",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Private",
          "package": "iCalendar",
          "signature": "Private",
          "source": "src/Text-ICalendar-Types.html#ClassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Private",
          "package": "iCalendar",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ProdId",
          "package": "iCalendar",
          "signature": "ProdId",
          "source": "src/Text-ICalendar-Types.html#ProdId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ProdId",
          "package": "iCalendar",
          "partial": "Prod Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ProdId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Public",
          "package": "iCalendar",
          "signature": "Public",
          "source": "src/Text-ICalendar-Types.html#ClassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Public",
          "package": "iCalendar",
          "partial": "Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Public"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RDateDateTimes",
          "package": "iCalendar",
          "signature": "RDateDateTimes",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RDateDateTimes",
          "package": "iCalendar",
          "partial": "RDate Date Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RDateDateTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RDateDates",
          "package": "iCalendar",
          "signature": "RDateDates",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RDateDates",
          "package": "iCalendar",
          "partial": "RDate Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RDateDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RDatePeriods",
          "package": "iCalendar",
          "signature": "RDatePeriods",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RDatePeriods",
          "package": "iCalendar",
          "partial": "RDate Periods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RDatePeriods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RRule",
          "package": "iCalendar",
          "signature": "RRule",
          "source": "src/Text-ICalendar-Types.html#RRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Recur",
          "package": "iCalendar",
          "signature": "Recur",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Recur",
          "package": "iCalendar",
          "partial": "Recur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Recur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceIdDate",
          "package": "iCalendar",
          "signature": "RecurrenceIdDate",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceIdDate",
          "package": "iCalendar",
          "partial": "Recurrence Id Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RecurrenceIdDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceIdDateTime",
          "package": "iCalendar",
          "signature": "RecurrenceIdDateTime",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RecurrenceIdDateTime",
          "package": "iCalendar",
          "partial": "Recurrence Id Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RecurrenceIdDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RelatedTo",
          "package": "iCalendar",
          "signature": "RelatedTo",
          "source": "src/Text-ICalendar-Types.html#RelatedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RelatedTo",
          "package": "iCalendar",
          "partial": "Related To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RelatedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RelationshipTypeX",
          "package": "iCalendar",
          "signature": "RelationshipTypeX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#RelationshipType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RelationshipTypeX",
          "package": "iCalendar",
          "partial": "Relationship Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RelationshipTypeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Repeat",
          "package": "iCalendar",
          "signature": "Repeat",
          "source": "src/Text-ICalendar-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Repeat",
          "package": "iCalendar",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ReqParticipant",
          "package": "iCalendar",
          "signature": "ReqParticipant",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ReqParticipant",
          "package": "iCalendar",
          "partial": "Req Participant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ReqParticipant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RequestStatus",
          "package": "iCalendar",
          "signature": "RequestStatus",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RequestStatus",
          "package": "iCalendar",
          "partial": "Request Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RequestStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Resource",
          "package": "iCalendar",
          "signature": "Resource",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Resource",
          "package": "iCalendar",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Resources",
          "package": "iCalendar",
          "signature": "Resources",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Resources",
          "package": "iCalendar",
          "partial": "Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Resources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "RoleX",
          "package": "iCalendar",
          "signature": "RoleX (CI Text)",
          "source": "src/Text-ICalendar-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "RoleX",
          "package": "iCalendar",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:RoleX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Room",
          "package": "iCalendar",
          "signature": "Room",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Room",
          "package": "iCalendar",
          "partial": "Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Room"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Saturday",
          "package": "iCalendar",
          "signature": "Saturday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Saturday",
          "package": "iCalendar",
          "partial": "Saturday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Saturday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Scale",
          "package": "iCalendar",
          "signature": "Scale",
          "source": "src/Text-ICalendar-Types.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Scale",
          "package": "iCalendar",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Secondly",
          "package": "iCalendar",
          "signature": "Secondly",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Secondly",
          "package": "iCalendar",
          "partial": "Secondly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Secondly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Sequence",
          "package": "iCalendar",
          "signature": "Sequence",
          "source": "src/Text-ICalendar-Types.html#Sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Sequence",
          "package": "iCalendar",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Sibling",
          "package": "iCalendar",
          "signature": "Sibling",
          "source": "src/Text-ICalendar-Types.html#RelationshipType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Sibling",
          "package": "iCalendar",
          "partial": "Sibling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Sibling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Start",
          "package": "iCalendar",
          "signature": "Start",
          "source": "src/Text-ICalendar-Types.html#AlarmTriggerRelationship",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Start",
          "package": "iCalendar",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Summary",
          "package": "iCalendar",
          "signature": "Summary",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Summary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Sunday",
          "package": "iCalendar",
          "signature": "Sunday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Sunday",
          "package": "iCalendar",
          "partial": "Sunday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Sunday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TZID",
          "package": "iCalendar",
          "signature": "TZID",
          "source": "src/Text-ICalendar-Types.html#TZID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZID",
          "package": "iCalendar",
          "partial": "TZID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TZID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TZName",
          "package": "iCalendar",
          "signature": "TZName",
          "source": "src/Text-ICalendar-Types.html#TZName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZName",
          "package": "iCalendar",
          "partial": "TZName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TZName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TZProp",
          "package": "iCalendar",
          "signature": "TZProp",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZProp",
          "package": "iCalendar",
          "partial": "TZProp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TZProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TZUrl",
          "package": "iCalendar",
          "signature": "TZUrl",
          "source": "src/Text-ICalendar-Types.html#TZUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TZUrl",
          "package": "iCalendar",
          "partial": "TZUrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TZUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Tentative",
          "package": "iCalendar",
          "signature": "Tentative",
          "source": "src/Text-ICalendar-Types.html#PartStat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Tentative",
          "package": "iCalendar",
          "partial": "Tentative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Tentative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TentativeEvent",
          "package": "iCalendar",
          "signature": "TentativeEvent",
          "source": "src/Text-ICalendar-Types.html#EventStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TentativeEvent",
          "package": "iCalendar",
          "partial": "Tentative Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TentativeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ThisAndFuture",
          "package": "iCalendar",
          "signature": "ThisAndFuture",
          "source": "src/Text-ICalendar-Types.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ThisAndFuture",
          "package": "iCalendar",
          "partial": "This And Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ThisAndFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ThisAndPrior",
          "package": "iCalendar",
          "signature": "ThisAndPrior",
          "source": "src/Text-ICalendar-Types.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ThisAndPrior",
          "package": "iCalendar",
          "partial": "This And Prior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ThisAndPrior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Thursday",
          "package": "iCalendar",
          "signature": "Thursday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Thursday",
          "package": "iCalendar",
          "partial": "Thursday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Thursday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TodoNeedsAction",
          "package": "iCalendar",
          "signature": "TodoNeedsAction",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TodoNeedsAction",
          "package": "iCalendar",
          "partial": "Todo Needs Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TodoNeedsAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Transparent",
          "package": "iCalendar",
          "signature": "Transparent",
          "source": "src/Text-ICalendar-Types.html#TimeTransparency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Transparent",
          "package": "iCalendar",
          "partial": "Transparent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TriggerDateTime",
          "package": "iCalendar",
          "signature": "TriggerDateTime",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TriggerDateTime",
          "package": "iCalendar",
          "partial": "Trigger Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TriggerDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "TriggerDuration",
          "package": "iCalendar",
          "signature": "TriggerDuration",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "TriggerDuration",
          "package": "iCalendar",
          "partial": "Trigger Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:TriggerDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Tuesday",
          "package": "iCalendar",
          "signature": "Tuesday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Tuesday",
          "package": "iCalendar",
          "partial": "Tuesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Tuesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UID",
          "package": "iCalendar",
          "signature": "UID",
          "source": "src/Text-ICalendar-Types.html#UID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "URL",
          "package": "iCalendar",
          "signature": "URL",
          "source": "src/Text-ICalendar-Types.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "URL",
          "package": "iCalendar",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UTCDateTime",
          "package": "iCalendar",
          "signature": "UTCDateTime",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCDateTime",
          "package": "iCalendar",
          "partial": "UTCDate Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UTCDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UTCOffset",
          "package": "iCalendar",
          "signature": "UTCOffset",
          "source": "src/Text-ICalendar-Types.html#UTCOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCOffset",
          "package": "iCalendar",
          "partial": "UTCOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UTCOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriodDates",
          "package": "iCalendar",
          "signature": "UTCPeriodDates UTCTime UTCTime",
          "source": "src/Text-ICalendar-Types.html#UTCPeriod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriodDates",
          "package": "iCalendar",
          "partial": "UTCPeriod Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UTCPeriodDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriodDuration",
          "package": "iCalendar",
          "signature": "UTCPeriodDuration UTCTime Duration",
          "source": "src/Text-ICalendar-Types.html#UTCPeriod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UTCPeriodDuration",
          "package": "iCalendar",
          "partial": "UTCPeriod Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UTCPeriodDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Unknown",
          "package": "iCalendar",
          "signature": "Unknown",
          "source": "src/Text-ICalendar-Types.html#CUType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Unknown",
          "package": "iCalendar",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "UriAttachment",
          "package": "iCalendar",
          "signature": "UriAttachment",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "UriAttachment",
          "package": "iCalendar",
          "partial": "Uri Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:UriAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VAlarmAudio",
          "package": "iCalendar",
          "signature": "VAlarmAudio",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VAlarmAudio",
          "package": "iCalendar",
          "partial": "VAlarm Audio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VAlarmAudio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VAlarmDisplay",
          "package": "iCalendar",
          "signature": "VAlarmDisplay",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VAlarmDisplay",
          "package": "iCalendar",
          "partial": "VAlarm Display",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VAlarmDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VAlarmEmail",
          "package": "iCalendar",
          "signature": "VAlarmEmail",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VAlarmEmail",
          "package": "iCalendar",
          "partial": "VAlarm Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VAlarmEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VAlarmX",
          "package": "iCalendar",
          "signature": "VAlarmX",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VAlarmX",
          "package": "iCalendar",
          "partial": "VAlarm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VAlarmX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VCalendar",
          "package": "iCalendar",
          "signature": "VCalendar",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VCalendar",
          "package": "iCalendar",
          "partial": "VCalendar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VCalendar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VEvent",
          "package": "iCalendar",
          "signature": "VEvent",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VEvent",
          "package": "iCalendar",
          "partial": "VEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VFreeBusy",
          "package": "iCalendar",
          "signature": "VFreeBusy",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VFreeBusy",
          "package": "iCalendar",
          "partial": "VFree Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VFreeBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VJournal",
          "package": "iCalendar",
          "signature": "VJournal",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VJournal",
          "package": "iCalendar",
          "partial": "VJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VOther",
          "package": "iCalendar",
          "signature": "VOther",
          "source": "src/Text-ICalendar-Types.html#VOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VOther",
          "package": "iCalendar",
          "partial": "VOther",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VTimeZone",
          "package": "iCalendar",
          "signature": "VTimeZone",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VTimeZone",
          "package": "iCalendar",
          "partial": "VTime Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "VTodo",
          "package": "iCalendar",
          "signature": "VTodo",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "VTodo",
          "package": "iCalendar",
          "partial": "VTodo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:VTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Wednesday",
          "package": "iCalendar",
          "signature": "Wednesday",
          "source": "src/Text-ICalendar-Types.html#Weekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Wednesday",
          "package": "iCalendar",
          "partial": "Wednesday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Wednesday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Weekly",
          "package": "iCalendar",
          "signature": "Weekly",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Weekly",
          "package": "iCalendar",
          "partial": "Weekly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Weekly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "Yearly",
          "package": "iCalendar",
          "signature": "Yearly",
          "source": "src/Text-ICalendar-Types.html#Frequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "Yearly",
          "package": "iCalendar",
          "partial": "Yearly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:Yearly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "ZonedDateTime",
          "package": "iCalendar",
          "signature": "ZonedDateTime",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "ZonedDateTime",
          "package": "iCalendar",
          "partial": "Zoned Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:ZonedDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attachContent",
          "package": "iCalendar",
          "signature": "ByteString",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attachContent",
          "package": "iCalendar",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attachContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attachFmtType",
          "package": "iCalendar",
          "signature": "Maybe MIMEType",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attachFmtType",
          "package": "iCalendar",
          "partial": "Fmt Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attachFmtType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attachOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attachOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attachOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attachUri",
          "package": "iCalendar",
          "signature": "URI",
          "source": "src/Text-ICalendar-Types.html#Attachment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attachUri",
          "package": "iCalendar",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attachUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeCN",
          "package": "iCalendar",
          "signature": "Maybe Text",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeCN",
          "package": "iCalendar",
          "partial": "CN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeCN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eIndividual\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "attendeeCUType",
          "package": "iCalendar",
          "signature": "CUType",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "description": "def Individual",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeCUType",
          "package": "iCalendar",
          "partial": "CUType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeCUType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeDelFrom",
          "package": "iCalendar",
          "signature": "Set CalAddress",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeDelFrom",
          "package": "iCalendar",
          "partial": "Del From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeDelFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeDelTo",
          "package": "iCalendar",
          "signature": "Set CalAddress",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeDelTo",
          "package": "iCalendar",
          "partial": "Del To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeDelTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeDir",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeDir",
          "package": "iCalendar",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeMember",
          "package": "iCalendar",
          "signature": "Set CalAddress",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeMember",
          "package": "iCalendar",
          "partial": "Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePartStatNeedsAction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "attendeePartStat",
          "package": "iCalendar",
          "signature": "PartStat",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "description": "def PartStatNeedsAction",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeePartStat",
          "package": "iCalendar",
          "partial": "Part Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeePartStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeRSVP",
          "package": "iCalendar",
          "signature": "Bool",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeRSVP",
          "package": "iCalendar",
          "partial": "RSVP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeRSVP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eReqParticipant\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "attendeeRole",
          "package": "iCalendar",
          "signature": "Role",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "description": "def ReqParticipant",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeRole",
          "package": "iCalendar",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeSentBy",
          "package": "iCalendar",
          "signature": "Maybe CalAddress",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeSentBy",
          "package": "iCalendar",
          "partial": "Sent By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeSentBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "attendeeValue",
          "package": "iCalendar",
          "signature": "CalAddress",
          "source": "src/Text-ICalendar-Types.html#Attendee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "attendeeValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:attendeeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "categoriesLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "categoriesLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:categoriesLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "categoriesOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "categoriesOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:categoriesOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "categoriesValues",
          "package": "iCalendar",
          "signature": "Set Text",
          "source": "src/Text-ICalendar-Types.html#Categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "categoriesValues",
          "package": "iCalendar",
          "partial": "Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:categoriesValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "classOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "classOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:classOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "classValue",
          "package": "iCalendar",
          "signature": "ClassValue",
          "source": "src/Text-ICalendar-Types.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "classValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:classValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "commentAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "commentAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:commentAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "commentLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "commentLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:commentLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "commentOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "commentOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:commentOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "commentValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "commentValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:commentValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "completedOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Completed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "completedOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:completedOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "completedValue",
          "package": "iCalendar",
          "signature": "DateTime",
          "source": "src/Text-ICalendar-Types.html#Completed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "completedValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:completedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "contactAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "contactAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:contactAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "contactLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "contactLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:contactLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "contactOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "contactOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:contactOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "contactValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#Contact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "contactValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:contactValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "createdOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Created",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "createdOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:createdOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "createdValue",
          "package": "iCalendar",
          "signature": "UTCTime",
          "source": "src/Text-ICalendar-Types.html#Created",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "createdValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:createdValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dateTimeFloating",
          "package": "iCalendar",
          "signature": "LocalTime",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dateTimeFloating",
          "package": "iCalendar",
          "partial": "Time Floating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dateTimeFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dateTimeUTC",
          "package": "iCalendar",
          "signature": "UTCTime",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dateTimeUTC",
          "package": "iCalendar",
          "partial": "Time UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dateTimeUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dateTimeZone",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#DateTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dateTimeZone",
          "package": "iCalendar",
          "partial": "Time Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dateTimeZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dateValue",
          "package": "iCalendar",
          "signature": "Day",
          "source": "src/Text-ICalendar-Types.html#Date",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dateValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "descriptionAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "descriptionAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:descriptionAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "descriptionLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "descriptionLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:descriptionLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "descriptionOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "descriptionOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:descriptionOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "descriptionValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#Description",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "descriptionValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:descriptionValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtEndDateTimeValue",
          "package": "iCalendar",
          "signature": "DateTime",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtEndDateTimeValue",
          "package": "iCalendar",
          "partial": "End Date Time Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtEndDateTimeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtEndDateValue",
          "package": "iCalendar",
          "signature": "Date",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtEndDateValue",
          "package": "iCalendar",
          "partial": "End Date Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtEndDateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtEndOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#DTEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtEndOther",
          "package": "iCalendar",
          "partial": "End Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtEndOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtStampOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#DTStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtStampOther",
          "package": "iCalendar",
          "partial": "Stamp Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtStampOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtStampValue",
          "package": "iCalendar",
          "signature": "UTCTime",
          "source": "src/Text-ICalendar-Types.html#DTStamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtStampValue",
          "package": "iCalendar",
          "partial": "Stamp Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtStampValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtStartDateTimeValue",
          "package": "iCalendar",
          "signature": "DateTime",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtStartDateTimeValue",
          "package": "iCalendar",
          "partial": "Start Date Time Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtStartDateTimeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtStartDateValue",
          "package": "iCalendar",
          "signature": "Date",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtStartDateValue",
          "package": "iCalendar",
          "partial": "Start Date Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtStartDateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dtStartOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#DTStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dtStartOther",
          "package": "iCalendar",
          "partial": "Start Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dtStartOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dueDateTimeValue",
          "package": "iCalendar",
          "signature": "DateTime",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dueDateTimeValue",
          "package": "iCalendar",
          "partial": "Date Time Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dueDateTimeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dueDateValue",
          "package": "iCalendar",
          "signature": "Date",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dueDateValue",
          "package": "iCalendar",
          "partial": "Date Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dueDateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "dueOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Due",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "dueOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:dueOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durDay",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durDay",
          "package": "iCalendar",
          "partial": "Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durHour",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durHour",
          "package": "iCalendar",
          "partial": "Hour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durMinute",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durMinute",
          "package": "iCalendar",
          "partial": "Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durSecond",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durSecond",
          "package": "iCalendar",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePositive\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "durSign",
          "package": "iCalendar",
          "signature": "Sign",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "description": "def Positive",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durSign",
          "package": "iCalendar",
          "partial": "Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durWeek",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durWeek",
          "package": "iCalendar",
          "partial": "Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durationOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#DurationProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durationOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durationOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "durationValue",
          "package": "iCalendar",
          "signature": "Duration",
          "source": "src/Text-ICalendar-Types.html#DurationProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "durationValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:durationValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "eventStatusOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#EventStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "eventStatusOther",
          "package": "iCalendar",
          "partial": "Status Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:eventStatusOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "exDateOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "exDateOther",
          "package": "iCalendar",
          "partial": "Date Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:exDateOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "exDateTimes",
          "package": "iCalendar",
          "signature": "Set DateTime",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "exDateTimes",
          "package": "iCalendar",
          "partial": "Date Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:exDateTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "exDates",
          "package": "iCalendar",
          "signature": "Set Date",
          "source": "src/Text-ICalendar-Types.html#ExDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "exDates",
          "package": "iCalendar",
          "partial": "Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:exDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "freeBusyOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#FreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "freeBusyOther",
          "package": "iCalendar",
          "partial": "Busy Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:freeBusyOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "freeBusyPeriods",
          "package": "iCalendar",
          "signature": "Set UTCPeriod",
          "source": "src/Text-ICalendar-Types.html#FreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "freeBusyPeriods",
          "package": "iCalendar",
          "partial": "Busy Periods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:freeBusyPeriods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "freeBusyType",
          "package": "iCalendar",
          "signature": "FBType",
          "source": "src/Text-ICalendar-Types.html#FreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "freeBusyType",
          "package": "iCalendar",
          "partial": "Busy Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:freeBusyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "geoLat",
          "package": "iCalendar",
          "signature": "Float",
          "source": "src/Text-ICalendar-Types.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "geoLat",
          "package": "iCalendar",
          "partial": "Lat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:geoLat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "geoLong",
          "package": "iCalendar",
          "signature": "Float",
          "source": "src/Text-ICalendar-Types.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "geoLong",
          "package": "iCalendar",
          "partial": "Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:geoLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "geoOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Geo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "geoOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:geoOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "journalStatusOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#JournalStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "journalStatusOther",
          "package": "iCalendar",
          "partial": "Status Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:journalStatusOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "lastModifiedOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#LastModified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "lastModifiedOther",
          "package": "iCalendar",
          "partial": "Modified Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:lastModifiedOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "lastModifiedValue",
          "package": "iCalendar",
          "signature": "UTCTime",
          "source": "src/Text-ICalendar-Types.html#LastModified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "lastModifiedValue",
          "package": "iCalendar",
          "partial": "Modified Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:lastModifiedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "locationAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "locationAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:locationAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "locationLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "locationLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:locationLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "locationOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "locationOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:locationOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "locationValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "locationValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:locationValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "methodOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "methodOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:methodOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "methodValue",
          "package": "iCalendar",
          "signature": "CI Text",
          "source": "src/Text-ICalendar-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "methodValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:methodValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerCN",
          "package": "iCalendar",
          "signature": "Maybe Text",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerCN",
          "package": "iCalendar",
          "partial": "CN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerCN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerDir",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerDir",
          "package": "iCalendar",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerSentBy",
          "package": "iCalendar",
          "signature": "Maybe CalAddress",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerSentBy",
          "package": "iCalendar",
          "partial": "Sent By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerSentBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "organizerValue",
          "package": "iCalendar",
          "signature": "CalAddress",
          "source": "src/Text-ICalendar-Types.html#Organizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "organizerValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:organizerValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "otherName",
          "package": "iCalendar",
          "signature": "CI Text",
          "source": "src/Text-ICalendar-Types.html#OtherProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "otherName",
          "package": "iCalendar",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:otherName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "otherParams",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#OtherProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "otherParams",
          "package": "iCalendar",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:otherParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "otherValue",
          "package": "iCalendar",
          "signature": "ByteString",
          "source": "src/Text-ICalendar-Types.html#OtherProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "otherValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:otherValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "percentCompleteOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#PercentComplete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "percentCompleteOther",
          "package": "iCalendar",
          "partial": "Complete Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:percentCompleteOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "percentCompleteValue",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#PercentComplete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "percentCompleteValue",
          "package": "iCalendar",
          "partial": "Complete Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:percentCompleteValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "priorityOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "priorityOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:priorityOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "priorityValue",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Priority",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "priorityValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:priorityValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "prodIdOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#ProdId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "prodIdOther",
          "package": "iCalendar",
          "partial": "Id Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:prodIdOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "prodIdValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#ProdId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "prodIdValue",
          "package": "iCalendar",
          "partial": "Id Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:prodIdValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rDateDateTimes",
          "package": "iCalendar",
          "signature": "Set DateTime",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rDateDateTimes",
          "package": "iCalendar",
          "partial": "Date Date Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rDateDateTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rDateDates",
          "package": "iCalendar",
          "signature": "Set Date",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rDateDates",
          "package": "iCalendar",
          "partial": "Date Dates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rDateDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rDateOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rDateOther",
          "package": "iCalendar",
          "partial": "Date Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rDateOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rDatePeriods",
          "package": "iCalendar",
          "signature": "Set Period",
          "source": "src/Text-ICalendar-Types.html#RDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rDatePeriods",
          "package": "iCalendar",
          "partial": "Date Periods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rDatePeriods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rRuleOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#RRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rRuleOther",
          "package": "iCalendar",
          "partial": "Rule Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rRuleOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "rRuleValue",
          "package": "iCalendar",
          "signature": "Recur",
          "source": "src/Text-ICalendar-Types.html#RRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "rRuleValue",
          "package": "iCalendar",
          "partial": "Rule Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:rRuleValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByDay",
          "package": "iCalendar",
          "signature": "[Either (Int, Weekday) Weekday]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByDay",
          "normalized": "[Either(Int,Weekday)Weekday]",
          "package": "iCalendar",
          "partial": "By Day",
          "signature": "[Either(Int,Weekday)Weekday]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByHour",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByHour",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Hour",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByHour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByMinute",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByMinute",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Minute",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByMonth",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByMonth",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Month",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByMonthDay",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByMonthDay",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Month Day",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByMonthDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurBySecond",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurBySecond",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Second",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurBySecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurBySetPos",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurBySetPos",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Set Pos",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurBySetPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByWeekNo",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByWeekNo",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Week No",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByWeekNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurByYearDay",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurByYearDay",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "By Year Day",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurByYearDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurFreq",
          "package": "iCalendar",
          "signature": "Frequency",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurFreq",
          "package": "iCalendar",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurInterval",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurInterval",
          "package": "iCalendar",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurUntilCount",
          "package": "iCalendar",
          "signature": "Maybe (Either (Either Date DateTime) Int)",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurUntilCount",
          "package": "iCalendar",
          "partial": "Until Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurUntilCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurWkSt",
          "package": "iCalendar",
          "signature": "Weekday",
          "source": "src/Text-ICalendar-Types.html#Recur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurWkSt",
          "package": "iCalendar",
          "partial": "Wk St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurWkSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdDate",
          "package": "iCalendar",
          "signature": "Date",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdDate",
          "package": "iCalendar",
          "partial": "Id Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurrenceIdDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdDateTime",
          "package": "iCalendar",
          "signature": "DateTime",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdDateTime",
          "package": "iCalendar",
          "partial": "Id Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurrenceIdDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdOther",
          "package": "iCalendar",
          "partial": "Id Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurrenceIdOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdRange",
          "package": "iCalendar",
          "signature": "Maybe Range",
          "source": "src/Text-ICalendar-Types.html#RecurrenceId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "recurrenceIdRange",
          "package": "iCalendar",
          "partial": "Id Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:recurrenceIdRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "relatedToOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#RelatedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "relatedToOther",
          "package": "iCalendar",
          "partial": "To Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:relatedToOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "relatedToType",
          "package": "iCalendar",
          "signature": "RelationshipType",
          "source": "src/Text-ICalendar-Types.html#RelatedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "relatedToType",
          "package": "iCalendar",
          "partial": "To Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:relatedToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "relatedToValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#RelatedTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "relatedToValue",
          "package": "iCalendar",
          "partial": "To Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:relatedToValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "repeatOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "repeatOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:repeatOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "repeatValue",
          "package": "iCalendar",
          "signature": "Integer",
          "source": "src/Text-ICalendar-Types.html#Repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "repeatValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:repeatValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "requestStatusCode",
          "package": "iCalendar",
          "signature": "[Int]",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "requestStatusCode",
          "normalized": "[Int]",
          "package": "iCalendar",
          "partial": "Status Code",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:requestStatusCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "requestStatusDesc",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "requestStatusDesc",
          "package": "iCalendar",
          "partial": "Status Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:requestStatusDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "requestStatusExt",
          "package": "iCalendar",
          "signature": "Maybe Text",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "requestStatusExt",
          "package": "iCalendar",
          "partial": "Status Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:requestStatusExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "requestStatusLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "requestStatusLanguage",
          "package": "iCalendar",
          "partial": "Status Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:requestStatusLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "requestStatusOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#RequestStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "requestStatusOther",
          "package": "iCalendar",
          "partial": "Status Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:requestStatusOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "resourcesAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "resourcesAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:resourcesAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "resourcesLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "resourcesLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:resourcesLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "resourcesOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "resourcesOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:resourcesOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "resourcesValue",
          "package": "iCalendar",
          "signature": "Set Text",
          "source": "src/Text-ICalendar-Types.html#Resources",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "resourcesValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:resourcesValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "scaleOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "scaleOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:scaleOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "scaleValue",
          "package": "iCalendar",
          "signature": "CI Text",
          "source": "src/Text-ICalendar-Types.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "scaleValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:scaleValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "sequenceOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "sequenceOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:sequenceOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "sequenceValue",
          "package": "iCalendar",
          "signature": "Integer",
          "source": "src/Text-ICalendar-Types.html#Sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "sequenceValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:sequenceValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "summaryAltRep",
          "package": "iCalendar",
          "signature": "Maybe URI",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "summaryAltRep",
          "package": "iCalendar",
          "partial": "Alt Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:summaryAltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "summaryLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "summaryLanguage",
          "package": "iCalendar",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:summaryLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "summaryOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "summaryOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:summaryOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "summaryValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#Summary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "summaryValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:summaryValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "timeTransparencyOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#TimeTransparency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "timeTransparencyOther",
          "package": "iCalendar",
          "partial": "Transparency Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:timeTransparencyOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "todoStatusOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#TodoStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "todoStatusOther",
          "package": "iCalendar",
          "partial": "Status Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:todoStatusOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "triggerDateTime",
          "package": "iCalendar",
          "signature": "UTCTime",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "triggerDateTime",
          "package": "iCalendar",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:triggerDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "triggerDuration",
          "package": "iCalendar",
          "signature": "Duration",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "triggerDuration",
          "package": "iCalendar",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:triggerDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "triggerOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "triggerOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:triggerOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "triggerRelated",
          "package": "iCalendar",
          "signature": "AlarmTriggerRelationship",
          "source": "src/Text-ICalendar-Types.html#Trigger",
          "type": "function"
        },
        "index": {
          "description": "def Start",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "triggerRelated",
          "package": "iCalendar",
          "partial": "Related",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:triggerRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzNameLanguage",
          "package": "iCalendar",
          "signature": "Maybe Language",
          "source": "src/Text-ICalendar-Types.html#TZName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzNameLanguage",
          "package": "iCalendar",
          "partial": "Name Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzNameLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzNameOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#TZName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzNameOther",
          "package": "iCalendar",
          "partial": "Name Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzNameOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzNameValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#TZName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzNameValue",
          "package": "iCalendar",
          "partial": "Name Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzNameValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzUrlOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#TZUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzUrlOther",
          "package": "iCalendar",
          "partial": "Url Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzUrlOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzUrlValue",
          "package": "iCalendar",
          "signature": "URI",
          "source": "src/Text-ICalendar-Types.html#TZUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzUrlValue",
          "package": "iCalendar",
          "partial": "Url Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzUrlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzidGlobal",
          "package": "iCalendar",
          "signature": "Bool",
          "source": "src/Text-ICalendar-Types.html#TZID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzidGlobal",
          "package": "iCalendar",
          "partial": "Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzidGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzidOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#TZID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzidOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzidOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzidValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#TZID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzidValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzidValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpComment",
          "package": "iCalendar",
          "signature": "Set Comment",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpComment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpDTStart",
          "package": "iCalendar",
          "signature": "DTStart",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpDTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpDTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpRDate",
          "package": "iCalendar",
          "signature": "Set RDate",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpRDate",
          "package": "iCalendar",
          "partial": "RDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpRDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpRRule",
          "package": "iCalendar",
          "signature": "Set RRule",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpRRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpRRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpTZName",
          "package": "iCalendar",
          "signature": "Set TZName",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpTZName",
          "package": "iCalendar",
          "partial": "TZName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpTZName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpTZOffsetFrom",
          "package": "iCalendar",
          "signature": "UTCOffset",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpTZOffsetFrom",
          "package": "iCalendar",
          "partial": "TZOffset From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpTZOffsetFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "tzpTZOffsetTo",
          "package": "iCalendar",
          "signature": "UTCOffset",
          "source": "src/Text-ICalendar-Types.html#TZProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "tzpTZOffsetTo",
          "package": "iCalendar",
          "partial": "TZOffset To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:tzpTZOffsetTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "uidOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#UID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "uidOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:uidOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "uidValue",
          "package": "iCalendar",
          "signature": "Text",
          "source": "src/Text-ICalendar-Types.html#UID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "uidValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:uidValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "urlOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "urlOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:urlOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "urlValue",
          "package": "iCalendar",
          "signature": "URI",
          "source": "src/Text-ICalendar-Types.html#URL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "urlValue",
          "package": "iCalendar",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:urlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "utcOffsetOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#UTCOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "utcOffsetOther",
          "package": "iCalendar",
          "partial": "Offset Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:utcOffsetOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of seconds away from UTC\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "utcOffsetValue",
          "package": "iCalendar",
          "signature": "Int",
          "source": "src/Text-ICalendar-Types.html#UTCOffset",
          "type": "function"
        },
        "index": {
          "description": "Number of seconds away from UTC",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "utcOffsetValue",
          "package": "iCalendar",
          "partial": "Offset Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:utcOffsetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaAction",
          "package": "iCalendar",
          "signature": "CI Text",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaAction",
          "package": "iCalendar",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaActionOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaActionOther",
          "package": "iCalendar",
          "partial": "Action Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaActionOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaAttendee",
          "package": "iCalendar",
          "signature": "Set Attendee",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaAttendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaAttendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaAudioAttach",
          "package": "iCalendar",
          "signature": "Maybe Attachment",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaAudioAttach",
          "package": "iCalendar",
          "partial": "Audio Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaAudioAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaDescription",
          "package": "iCalendar",
          "signature": "Description",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaDescription",
          "package": "iCalendar",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaDuration",
          "package": "iCalendar",
          "signature": "Maybe DurationProp",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaDuration",
          "package": "iCalendar",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaMailAttach",
          "package": "iCalendar",
          "signature": "Set Attachment",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaMailAttach",
          "package": "iCalendar",
          "partial": "Mail Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaMailAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vaRepeat",
          "package": "iCalendar",
          "signature": "Repeat",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaRepeat",
          "package": "iCalendar",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaSummary",
          "package": "iCalendar",
          "signature": "Summary",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaSummary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vaTrigger",
          "package": "iCalendar",
          "signature": "Trigger",
          "source": "src/Text-ICalendar-Types.html#VAlarm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vaTrigger",
          "package": "iCalendar",
          "partial": "Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vaTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap (UID-value, Maybe RecurrenceID-value) VEvent\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vcEvents",
          "package": "iCalendar",
          "signature": "Map (Text, Maybe (Either Date DateTime)) VEvent",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "description": "Map UID-value Maybe RecurrenceID-value VEvent",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcEvents",
          "normalized": "Map(Text,Maybe(Either Date DateTime))VEvent",
          "package": "iCalendar",
          "partial": "Events",
          "signature": "Map(Text,Maybe(Either Date DateTime))VEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap UID-value VFreeBusy\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vcFreeBusys",
          "package": "iCalendar",
          "signature": "Map Text VFreeBusy",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "description": "Map UID-value VFreeBusy",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcFreeBusys",
          "package": "iCalendar",
          "partial": "Free Busys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcFreeBusys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap (UID-value, Maybe RecurrenceID-value) VJournal\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vcJournals",
          "package": "iCalendar",
          "signature": "Map (Text, Maybe (Either Date DateTime)) VJournal",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "description": "Map UID-value Maybe RecurrenceID-value VJournal",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcJournals",
          "normalized": "Map(Text,Maybe(Either Date DateTime))VJournal",
          "package": "iCalendar",
          "partial": "Journals",
          "signature": "Map(Text,Maybe(Either Date DateTime))VJournal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcJournals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcMethod",
          "package": "iCalendar",
          "signature": "Maybe Method",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcMethod",
          "package": "iCalendar",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcOtherComps",
          "package": "iCalendar",
          "signature": "Set VOther",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcOtherComps",
          "package": "iCalendar",
          "partial": "Other Comps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcOtherComps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcProdId",
          "package": "iCalendar",
          "signature": "ProdId",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcProdId",
          "package": "iCalendar",
          "partial": "Prod Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcProdId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcScale",
          "package": "iCalendar",
          "signature": "Scale",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcScale",
          "package": "iCalendar",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap TZID-value VTimeZone\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vcTimeZones",
          "package": "iCalendar",
          "signature": "Map Text VTimeZone",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "description": "Map TZID-value VTimeZone",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcTimeZones",
          "package": "iCalendar",
          "partial": "Time Zones",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcTimeZones"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap (UID-value, Maybe RecurrenceID-value) VTodo\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vcTodos",
          "package": "iCalendar",
          "signature": "Map (Text, Maybe (Either Date DateTime)) VTodo",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "description": "Map UID-value Maybe RecurrenceID-value VTodo",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcTodos",
          "normalized": "Map(Text,Maybe(Either Date DateTime))VTodo",
          "package": "iCalendar",
          "partial": "Todos",
          "signature": "Map(Text,Maybe(Either Date DateTime))VTodo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vcVersion",
          "package": "iCalendar",
          "signature": "ICalVersion",
          "source": "src/Text-ICalendar-Types.html#VCalendar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vcVersion",
          "package": "iCalendar",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vcVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veAlarms",
          "package": "iCalendar",
          "signature": "Set VAlarm",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veAlarms",
          "package": "iCalendar",
          "partial": "Alarms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veAlarms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veAttach",
          "package": "iCalendar",
          "signature": "Set Attachment",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veAttach",
          "package": "iCalendar",
          "partial": "Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veAttendee",
          "package": "iCalendar",
          "signature": "Set Attendee",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veAttendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veAttendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veCategories",
          "package": "iCalendar",
          "signature": "Set Categories",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veCategories",
          "package": "iCalendar",
          "partial": "Categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePublic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "veClass",
          "package": "iCalendar",
          "signature": "Class",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "description": "def Public",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veClass",
          "package": "iCalendar",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veComment",
          "package": "iCalendar",
          "signature": "Set Comment",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veComment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veContact",
          "package": "iCalendar",
          "signature": "Set Contact",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veContact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veContact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veCreated",
          "package": "iCalendar",
          "signature": "Maybe Created",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veCreated",
          "package": "iCalendar",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veDTEndDuration",
          "package": "iCalendar",
          "signature": "Maybe (Either DTEnd DurationProp)",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veDTEndDuration",
          "package": "iCalendar",
          "partial": "DTEnd Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veDTEndDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veDTStamp",
          "package": "iCalendar",
          "signature": "DTStamp",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veDTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veDTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veDTStart",
          "package": "iCalendar",
          "signature": "Maybe DTStart",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veDTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veDTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veDescription",
          "package": "iCalendar",
          "signature": "Maybe Description",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veDescription",
          "package": "iCalendar",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veExDate",
          "package": "iCalendar",
          "signature": "Set ExDate",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veExDate",
          "package": "iCalendar",
          "partial": "Ex Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veExDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veGeo",
          "package": "iCalendar",
          "signature": "Maybe Geo",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veGeo",
          "package": "iCalendar",
          "partial": "Geo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veGeo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veLastMod",
          "package": "iCalendar",
          "signature": "Maybe LastModified",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veLastMod",
          "package": "iCalendar",
          "partial": "Last Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veLastMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veLocation",
          "package": "iCalendar",
          "signature": "Maybe Location",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veLocation",
          "package": "iCalendar",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veOrganizer",
          "package": "iCalendar",
          "signature": "Maybe Organizer",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veOrganizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veOrganizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vePriority",
          "package": "iCalendar",
          "signature": "Priority",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vePriority",
          "package": "iCalendar",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vePriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veRDate",
          "package": "iCalendar",
          "signature": "Set RDate",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veRDate",
          "package": "iCalendar",
          "partial": "RDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veRDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veRRule",
          "package": "iCalendar",
          "signature": "Set RRule",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veRRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veRRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veRStatus",
          "package": "iCalendar",
          "signature": "Set RequestStatus",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veRStatus",
          "package": "iCalendar",
          "partial": "RStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veRStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veRecurId",
          "package": "iCalendar",
          "signature": "Maybe RecurrenceId",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veRecurId",
          "package": "iCalendar",
          "partial": "Recur Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veRecurId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veRelated",
          "package": "iCalendar",
          "signature": "Set RelatedTo",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veRelated",
          "package": "iCalendar",
          "partial": "Related",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veResources",
          "package": "iCalendar",
          "signature": "Set Resources",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veResources",
          "package": "iCalendar",
          "partial": "Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "veSeq",
          "package": "iCalendar",
          "signature": "Sequence",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veSeq",
          "package": "iCalendar",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veStatus",
          "package": "iCalendar",
          "signature": "Maybe EventStatus",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veStatus",
          "package": "iCalendar",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veSummary",
          "package": "iCalendar",
          "signature": "Maybe Summary",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veSummary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eOpaque\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "veTransp",
          "package": "iCalendar",
          "signature": "TimeTransparency",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "description": "def Opaque",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veTransp",
          "package": "iCalendar",
          "partial": "Transp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veTransp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veUID",
          "package": "iCalendar",
          "signature": "UID",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veUID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "veUrl",
          "package": "iCalendar",
          "signature": "Maybe URL",
          "source": "src/Text-ICalendar-Types.html#VEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "veUrl",
          "package": "iCalendar",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:veUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "versionMax",
          "package": "iCalendar",
          "signature": "Version",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "versionMax",
          "package": "iCalendar",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:versionMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "versionMin",
          "package": "iCalendar",
          "signature": "Version",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "versionMin",
          "package": "iCalendar",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:versionMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "versionOther",
          "package": "iCalendar",
          "signature": "OtherParams",
          "source": "src/Text-ICalendar-Types.html#ICalVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "versionOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:versionOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbAttendee",
          "package": "iCalendar",
          "signature": "Set Attendee",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbAttendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbAttendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbComment",
          "package": "iCalendar",
          "signature": "Set Comment",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbComment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbContact",
          "package": "iCalendar",
          "signature": "Maybe Contact",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbContact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbContact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbDTEnd",
          "package": "iCalendar",
          "signature": "Maybe DTEnd",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbDTEnd",
          "package": "iCalendar",
          "partial": "DTEnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbDTEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbDTStamp",
          "package": "iCalendar",
          "signature": "DTStamp",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbDTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbDTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbDTStart",
          "package": "iCalendar",
          "signature": "Maybe DTStart",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbDTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbDTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbFreeBusy",
          "package": "iCalendar",
          "signature": "Set FreeBusy",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbFreeBusy",
          "package": "iCalendar",
          "partial": "Free Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbFreeBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbOrganizer",
          "package": "iCalendar",
          "signature": "Maybe Organizer",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbOrganizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbOrganizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbRStatus",
          "package": "iCalendar",
          "signature": "Set RequestStatus",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbRStatus",
          "package": "iCalendar",
          "partial": "RStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbRStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbUID",
          "package": "iCalendar",
          "signature": "UID",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbUID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vfbUrl",
          "package": "iCalendar",
          "signature": "Maybe URL",
          "source": "src/Text-ICalendar-Types.html#VFreeBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vfbUrl",
          "package": "iCalendar",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vfbUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjAttach",
          "package": "iCalendar",
          "signature": "Set Attachment",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjAttach",
          "package": "iCalendar",
          "partial": "Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjAttendee",
          "package": "iCalendar",
          "signature": "Set Attendee",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjAttendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjAttendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjCategories",
          "package": "iCalendar",
          "signature": "Set Categories",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjCategories",
          "package": "iCalendar",
          "partial": "Categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePublic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vjClass",
          "package": "iCalendar",
          "signature": "Class",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "description": "def Public",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjClass",
          "package": "iCalendar",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjComment",
          "package": "iCalendar",
          "signature": "Set Comment",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjComment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjContact",
          "package": "iCalendar",
          "signature": "Set Contact",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjContact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjContact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjCreated",
          "package": "iCalendar",
          "signature": "Maybe Created",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjCreated",
          "package": "iCalendar",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjDTStamp",
          "package": "iCalendar",
          "signature": "DTStamp",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjDTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjDTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjDTStart",
          "package": "iCalendar",
          "signature": "Maybe DTStart",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjDTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjDTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjDescription",
          "package": "iCalendar",
          "signature": "Set Description",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjDescription",
          "package": "iCalendar",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjExDate",
          "package": "iCalendar",
          "signature": "Set ExDate",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjExDate",
          "package": "iCalendar",
          "partial": "Ex Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjExDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjLastMod",
          "package": "iCalendar",
          "signature": "Maybe LastModified",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjLastMod",
          "package": "iCalendar",
          "partial": "Last Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjLastMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjOrganizer",
          "package": "iCalendar",
          "signature": "Maybe Organizer",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjOrganizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjOrganizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjRDate",
          "package": "iCalendar",
          "signature": "Set RDate",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjRDate",
          "package": "iCalendar",
          "partial": "RDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjRDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjRRule",
          "package": "iCalendar",
          "signature": "Set RRule",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjRRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjRRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjRStatus",
          "package": "iCalendar",
          "signature": "Set RequestStatus",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjRStatus",
          "package": "iCalendar",
          "partial": "RStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjRStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjRecurId",
          "package": "iCalendar",
          "signature": "Maybe RecurrenceId",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjRecurId",
          "package": "iCalendar",
          "partial": "Recur Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjRecurId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjRelated",
          "package": "iCalendar",
          "signature": "Set RelatedTo",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjRelated",
          "package": "iCalendar",
          "partial": "Related",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vjSeq",
          "package": "iCalendar",
          "signature": "Sequence",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjSeq",
          "package": "iCalendar",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjStatus",
          "package": "iCalendar",
          "signature": "Maybe JournalStatus",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjStatus",
          "package": "iCalendar",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjSummary",
          "package": "iCalendar",
          "signature": "Maybe Summary",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjSummary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjUID",
          "package": "iCalendar",
          "signature": "UID",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjUID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vjUrl",
          "package": "iCalendar",
          "signature": "Maybe URL",
          "source": "src/Text-ICalendar-Types.html#VJournal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vjUrl",
          "package": "iCalendar",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vjUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "voName",
          "package": "iCalendar",
          "signature": "CI Text",
          "source": "src/Text-ICalendar-Types.html#VOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "voName",
          "package": "iCalendar",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:voName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "voProps",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "voProps",
          "package": "iCalendar",
          "partial": "Props",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:voProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtAlarms",
          "package": "iCalendar",
          "signature": "Set VAlarm",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtAlarms",
          "package": "iCalendar",
          "partial": "Alarms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtAlarms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtAttach",
          "package": "iCalendar",
          "signature": "Set Attachment",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtAttach",
          "package": "iCalendar",
          "partial": "Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtAttendee",
          "package": "iCalendar",
          "signature": "Set Attendee",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtAttendee",
          "package": "iCalendar",
          "partial": "Attendee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtAttendee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtCategories",
          "package": "iCalendar",
          "signature": "Set Categories",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtCategories",
          "package": "iCalendar",
          "partial": "Categories",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ePublic\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vtClass",
          "package": "iCalendar",
          "signature": "Class",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "description": "def Public",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtClass",
          "package": "iCalendar",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtComment",
          "package": "iCalendar",
          "signature": "Set Comment",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtComment",
          "package": "iCalendar",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtCompleted",
          "package": "iCalendar",
          "signature": "Maybe Completed",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtCompleted",
          "package": "iCalendar",
          "partial": "Completed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtContact",
          "package": "iCalendar",
          "signature": "Set Contact",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtContact",
          "package": "iCalendar",
          "partial": "Contact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtContact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtCreated",
          "package": "iCalendar",
          "signature": "Maybe Created",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtCreated",
          "package": "iCalendar",
          "partial": "Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtDTStamp",
          "package": "iCalendar",
          "signature": "DTStamp",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtDTStamp",
          "package": "iCalendar",
          "partial": "DTStamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtDTStamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtDTStart",
          "package": "iCalendar",
          "signature": "Maybe DTStart",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtDTStart",
          "package": "iCalendar",
          "partial": "DTStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtDTStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtDescription",
          "package": "iCalendar",
          "signature": "Maybe Description",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtDescription",
          "package": "iCalendar",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtDueDuration",
          "package": "iCalendar",
          "signature": "Maybe (Either Due DurationProp)",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtDueDuration",
          "package": "iCalendar",
          "partial": "Due Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtDueDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtExDate",
          "package": "iCalendar",
          "signature": "Set ExDate",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtExDate",
          "package": "iCalendar",
          "partial": "Ex Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtExDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtGeo",
          "package": "iCalendar",
          "signature": "Maybe Geo",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtGeo",
          "package": "iCalendar",
          "partial": "Geo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtGeo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtLastMod",
          "package": "iCalendar",
          "signature": "Maybe LastModified",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtLastMod",
          "package": "iCalendar",
          "partial": "Last Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtLastMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtLocation",
          "package": "iCalendar",
          "signature": "Maybe Location",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtLocation",
          "package": "iCalendar",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtOrganizer",
          "package": "iCalendar",
          "signature": "Maybe Organizer",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtOrganizer",
          "package": "iCalendar",
          "partial": "Organizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtOrganizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtPercent",
          "package": "iCalendar",
          "signature": "Maybe PercentComplete",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtPercent",
          "package": "iCalendar",
          "partial": "Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vtPriority",
          "package": "iCalendar",
          "signature": "Priority",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtPriority",
          "package": "iCalendar",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtRDate",
          "package": "iCalendar",
          "signature": "Set RDate",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtRDate",
          "package": "iCalendar",
          "partial": "RDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtRDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtRRule",
          "package": "iCalendar",
          "signature": "Set RRule",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtRRule",
          "package": "iCalendar",
          "partial": "RRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtRRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtRStatus",
          "package": "iCalendar",
          "signature": "Set RequestStatus",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtRStatus",
          "package": "iCalendar",
          "partial": "RStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtRStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtRecurId",
          "package": "iCalendar",
          "signature": "Maybe RecurrenceId",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtRecurId",
          "package": "iCalendar",
          "partial": "Recur Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtRecurId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtRelated",
          "package": "iCalendar",
          "signature": "Set RelatedTo",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtRelated",
          "package": "iCalendar",
          "partial": "Related",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtRelated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtResources",
          "package": "iCalendar",
          "signature": "Set Resources",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtResources",
          "package": "iCalendar",
          "partial": "Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e = 0\n\u003c/p\u003e",
          "module": "Text.ICalendar.Types",
          "name": "vtSeq",
          "package": "iCalendar",
          "signature": "Sequence",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "description": "def",
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtSeq",
          "package": "iCalendar",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtStatus",
          "package": "iCalendar",
          "signature": "Maybe TodoStatus",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtStatus",
          "package": "iCalendar",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtSummary",
          "package": "iCalendar",
          "signature": "Maybe Summary",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtSummary",
          "package": "iCalendar",
          "partial": "Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtUID",
          "package": "iCalendar",
          "signature": "UID",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtUID",
          "package": "iCalendar",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtUrl",
          "package": "iCalendar",
          "signature": "Maybe URL",
          "source": "src/Text-ICalendar-Types.html#VTodo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtUrl",
          "package": "iCalendar",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzDaylightC",
          "package": "iCalendar",
          "signature": "Set TZProp",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzDaylightC",
          "package": "iCalendar",
          "partial": "Daylight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzDaylightC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzId",
          "package": "iCalendar",
          "signature": "TZID",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzId",
          "package": "iCalendar",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzLastMod",
          "package": "iCalendar",
          "signature": "Maybe LastModified",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzLastMod",
          "package": "iCalendar",
          "partial": "Last Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzLastMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzOther",
          "package": "iCalendar",
          "signature": "Set OtherProperty",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzOther",
          "package": "iCalendar",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzStandardC",
          "package": "iCalendar",
          "signature": "Set TZProp",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzStandardC",
          "package": "iCalendar",
          "partial": "Standard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzStandardC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar.Types",
          "name": "vtzUrl",
          "package": "iCalendar",
          "signature": "Maybe TZUrl",
          "source": "src/Text-ICalendar-Types.html#VTimeZone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ICalendar Types",
          "module": "Text.ICalendar.Types",
          "name": "vtzUrl",
          "package": "iCalendar",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar-Types.html#v:vtzUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ICalendar",
          "name": "ICalendar",
          "package": "iCalendar",
          "source": "src/Text-ICalendar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ICalendar",
          "module": "Text.ICalendar",
          "name": "ICalendar",
          "package": "iCalendar",
          "partial": "ICalendar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iCalendar/docs/Text-ICalendar.html#"
      }
    }
  ]
]