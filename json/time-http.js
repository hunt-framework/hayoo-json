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
        "word": "time-http"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for ANSI C's date and time strings.\n\u003c/p\u003e\u003cp\u003eANSI C's \u003ccode\u003ectime(3)\u003c/code\u003e/\u003ccode\u003easctime(3)\u003c/code\u003e format looks like:\n\u003c/p\u003e\u003cpre\u003eWdy Mon [D]D HH:MM:SS YYYY\u003c/pre\u003e\u003cp\u003eThe exact syntax is as follows:\n\u003c/p\u003e\u003cpre\u003e date-time ::= wday SP month SP day SP time SP year\n wday      ::= \"Mon\" | \"Tue\" | \"Wed\" | \"Thu\"\n             | \"Fri\" | \"Sat\" | \"Sun\"\n month     ::= \"Jan\" | \"Feb\" | \"Mar\" | \"Apr\"\n             | \"May\" | \"Jun\" | \"Jul\" | \"Aug\"\n             | \"Sep\" | \"Oct\" | \"Nov\" | \"Dec\"\n day       ::= 2DIGIT | SP 1DIGIT\n time      ::= 2DIGIT ':' 2DIGIT [':' 2DIGIT]\n year      ::= 4DIGIT\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.C",
          "name": "C",
          "package": "time-http",
          "source": "src/Data-Time-Format-C.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for ANSI date and time strings ANSI ctime asctime format looks like Wdy Mon HH MM SS YYYY The exact syntax is as follows date-time wday SP month SP day SP time SP year wday Mon Tue Wed Thu Fri Sat Sun month Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec day DIGIT SP DIGIT time DIGIT DIGIT DIGIT year DIGIT",
          "hierarchy": "Data Time Format C",
          "module": "Data.Time.Format.C",
          "name": "C",
          "package": "time-http",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-C.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phantom type for conversions between ANSI C's date and time\n strings and \u003ccode\u003e\u003ca\u003eLocalTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econvertSuccess (Tagged (LocalTime (ModifiedJulianDay 49662) (TimeOfDay 8 49 37)) :: Tagged C LocalTime)\n\u003c/code\u003e\u003c/strong\u003e\"Sun Nov  6 08:49:37 1994\"\n\u003c/pre\u003e",
          "module": "Data.Time.Format.C",
          "name": "C",
          "package": "time-http",
          "source": "src/Data-Time-Format-C.html#C",
          "type": "data"
        },
        "index": {
          "description": "The phantom type for conversions between ANSI date and time strings and LocalTime convertSuccess Tagged LocalTime ModifiedJulianDay TimeOfDay Tagged LocalTime Sun Nov",
          "hierarchy": "Data Time Format C",
          "module": "Data.Time.Format.C",
          "name": "C",
          "package": "time-http",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-C.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse and format HTTP/1.1 date\n and time strings\n (\u003ca\u003ehttp://tools.ietf.org/html/rfc2616#section-3.3\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe HTTP/1.1 specification (RFC 2616) says that HTTP/1.1 clients\n and servers which parse the date value MUST accept all the\n following formats, though they MUST only generate the RFC 1123\n format for representing HTTP-date values in header fields:\n\u003c/p\u003e\u003cpre\u003e Sun, 06 Nov 1994 08:49:37 GMT  ; RFC 822, updated by RFC 1123\n Sunday, 06-Nov-94 08:49:37 GMT ; RFC 850, obsoleted by RFC 1036\n Sun Nov  6 08:49:37 1994       ; ANSI C's asctime() format\n\u003c/pre\u003e\u003cp\u003eIt also says that all HTTP date/time stamps MUST be represented in\n Greenwich Mean Time (GMT), without exception. For the purposes of\n HTTP, GMT is exactly equal to UTC (Coordinated Universal\n Time). This is indicated in the first two formats by the inclusion\n of \u003ccode\u003e\"GMT\"\u003c/code\u003e as the three-letter abbreviation for time zone, and\n MUST be assumed when reading the asctime format.\n\u003c/p\u003e\u003cpre\u003e HTTP-date    = rfc1123-date | rfc850-date | asctime-date\n rfc1123-date = wkday \",\" SP date1 SP time SP \"GMT\"\n rfc850-date  = weekday \",\" SP date2 SP time SP \"GMT\"\n asctime-date = wkday SP date3 SP time SP 4DIGIT\n date1        = 2DIGIT SP month SP 4DIGIT\n                ; day month year (e.g., 02 Jun 1982)\n date2        = 2DIGIT \"-\" month \"-\" 2DIGIT\n                ; day-month-year (e.g., 02-Jun-82)\n date3        = month SP ( 2DIGIT | ( SP 1DIGIT ))\n                ; month day (e.g., Jun  2)\n time         = 2DIGIT \":\" 2DIGIT \":\" 2DIGIT\n                ; 00:00:00 - 23:59:59\n wkday        = \"Mon\" | \"Tue\" | \"Wed\"\n              | \"Thu\" | \"Fri\" | \"Sat\" | \"Sun\"\n weekday      = \"Monday\" | \"Tuesday\" | \"Wednesday\"\n              | \"Thursday\" | \"Friday\" | \"Saturday\" | \"Sunday\"\n month        = \"Jan\" | \"Feb\" | \"Mar\" | \"Apr\"\n              | \"May\" | \"Jun\" | \"Jul\" | \"Aug\"\n              | \"Sep\" | \"Oct\" | \"Nov\" | \"Dec\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.HTTP",
          "name": "HTTP",
          "package": "time-http",
          "source": "src/Data-Time-Format-HTTP.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse and format HTTP date and time strings http tools.ietf.org html rfc2616 section-3.3 The HTTP specification RFC says that HTTP clients and servers which parse the date value MUST accept all the following formats though they MUST only generate the RFC format for representing HTTP-date values in header fields Sun Nov GMT RFC updated by RFC Sunday Nov-94 GMT RFC obsoleted by RFC Sun Nov ANSI asctime format It also says that all HTTP date time stamps MUST be represented in Greenwich Mean Time GMT without exception For the purposes of HTTP GMT is exactly equal to UTC Coordinated Universal Time This is indicated in the first two formats by the inclusion of GMT as the three-letter abbreviation for time zone and MUST be assumed when reading the asctime format HTTP-date rfc1123-date rfc850-date asctime-date rfc1123-date wkday SP date1 SP time SP GMT rfc850-date weekday SP date2 SP time SP GMT asctime-date wkday SP date3 SP time SP DIGIT date1 DIGIT SP month SP DIGIT day month year e.g Jun date2 DIGIT month DIGIT day-month-year e.g Jun-82 date3 month SP DIGIT SP DIGIT month day e.g Jun time DIGIT DIGIT DIGIT wkday Mon Tue Wed Thu Fri Sat Sun weekday Monday Tuesday Wednesday Thursday Friday Saturday Sunday month Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec",
          "hierarchy": "Data Time Format HTTP",
          "module": "Data.Time.Format.HTTP",
          "name": "HTTP",
          "package": "time-http",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phantom type for conversions between HTTP/1.1 date and time\n strings and \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econvertSuccess (Tagged (UTCTime (ModifiedJulianDay 49662) 31777) :: Tagged HTTP UTCTime)\n\u003c/code\u003e\u003c/strong\u003e\"Sun, 06 Nov 1994 08:49:37 GMT\"\n\u003c/pre\u003e",
          "module": "Data.Time.Format.HTTP",
          "name": "HTTP",
          "package": "time-http",
          "source": "src/Data-Time-Format-HTTP.html#HTTP",
          "type": "data"
        },
        "index": {
          "description": "The phantom type for conversions between HTTP date and time strings and UTCTime convertSuccess Tagged UTCTime ModifiedJulianDay Tagged HTTP UTCTime Sun Nov GMT",
          "hierarchy": "Data Time Format HTTP",
          "module": "Data.Time.Format.HTTP",
          "name": "HTTP",
          "package": "time-http",
          "partial": "HTTP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-HTTP.html#t:HTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse and format RFC 1123 date\n and time strings (\u003ca\u003ehttp://tools.ietf.org/html/rfc1123#page-55\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe format is basically the same as RFC 822, but the syntax for\n \u003ccode\u003edate\u003c/code\u003e is changed from:\n\u003c/p\u003e\u003cpre\u003e year ::= 2DIGIT\n\u003c/pre\u003e\u003cp\u003eto:\n\u003c/p\u003e\u003cpre\u003e year ::= 4DIGIT\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.RFC1123",
          "name": "RFC1123",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC1123.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse and format RFC date and time strings http tools.ietf.org html rfc1123 page-55 The format is basically the same as RFC but the syntax for date is changed from year DIGIT to year DIGIT",
          "hierarchy": "Data Time Format RFC1123",
          "module": "Data.Time.Format.RFC1123",
          "name": "RFC1123",
          "package": "time-http",
          "partial": "RFC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC1123.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phantom type for conversions between RFC 1123 date and time\n strings and \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econvertSuccess (Tagged (ZonedTime (LocalTime (ModifiedJulianDay 49662) (TimeOfDay 8 49 37)) utc) :: Tagged RFC1123 ZonedTime)\n\u003c/code\u003e\u003c/strong\u003e\"Sun, 06 Nov 1994 08:49:37 GMT\"\n\u003c/pre\u003e",
          "module": "Data.Time.Format.RFC1123",
          "name": "RFC1123",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC1123.html#RFC1123",
          "type": "data"
        },
        "index": {
          "description": "The phantom type for conversions between RFC date and time strings and ZonedTime convertSuccess Tagged ZonedTime LocalTime ModifiedJulianDay TimeOfDay utc Tagged RFC1123 ZonedTime Sun Nov GMT",
          "hierarchy": "Data Time Format RFC1123",
          "module": "Data.Time.Format.RFC1123",
          "name": "RFC1123",
          "package": "time-http",
          "partial": "RFC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC1123.html#t:RFC1123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse and format RFC 733 date\n and time strings (\u003ca\u003ehttp://tools.ietf.org/html/rfc733#appendix-E\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe syntax is as follows:\n\u003c/p\u003e\u003cpre\u003e date-time   ::= [ day-of-week \", \" ] date SP time (\"-\" | SP) zone\n day-of-week ::= \"Monday\"    | \"Mon\" | \"Tuesday\"  | \"Tue\"\n               | \"Wednesday\" | \"Wed\" | \"Thursday\" | \"Thu\"\n               | \"Friday\"    | \"Fri\" | \"Saturday\" | \"Sat\"\n               | \"Sunday\"    | \"Sun\"\n date        ::= day (\"-\" | SP) month (\"-\" | SP) year\n day         ::= 2DIGIT\n year        ::= 2DIGIT | 4DIGIT\n month       ::= \"January\"   | \"Jan\" | \"February\" | \"Feb\"\n               | \"March\"     | \"Mar\" | \"April\"    | \"Apr\"\n               | \"May\"               | \"June\"     | \"Jun\"\n               | \"July\"      | \"Jul\" | \"August\"   | \"Aug\"\n               | \"September\" | \"Sep\" | \"October\"  | \"Oct\"\n               | \"November\"  | \"Nov\" | \"December\" | \"Dec\"\n time        ::= hour [ \":\" ] minute [ [ \":\" ] second ]\n hour        ::= 2DIGIT\n minute      ::= 2DIGIT\n second      ::= 2DIGIT\n zone        ::= \"GMT\"              ; Universal Time\n               | \"NST\"              ; Newfoundland: -3:30\n               | \"AST\" | \"ADT\"      ; Atlantic    :  -4 /  -3\n               | \"EST\" | \"EDT\"      ; Eastern     :  -5 /  -4\n               | \"CST\" | \"CDT\"      ; Central     :  -6 /  -5\n               | \"MST\" | \"MDT\"      ; Mountain    :  -7 /  -6\n               | \"PST\" | \"PDT\"      ; Pacific     :  -8 /  -7\n               | \"YST\" | \"YDT\"      ; Yukon       :  -9 /  -8\n               | \"HST\" | \"HDT\"      ; Haw/Ala     : -10 /  -9\n               | \"BST\" | \"BDT\"      ; Bering      : -11 / -10\n               | \"Z\"                ; GMT\n               | \"A\"                ;  -1\n               | \"M\"                ; -12\n               | \"N\"                ;  +1\n               | \"Y\"                ; +12\n               | (\"+\" | \"-\") 4DIGIT ; Local diff: HHMM\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.RFC733",
          "name": "RFC733",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC733.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse and format RFC date and time strings http tools.ietf.org html rfc733 appendix-E The syntax is as follows date-time day-of-week date SP time SP zone day-of-week Monday Mon Tuesday Tue Wednesday Wed Thursday Thu Friday Fri Saturday Sat Sunday Sun date day SP month SP year day DIGIT year DIGIT DIGIT month January Jan February Feb March Mar April Apr May June Jun July Jul August Aug September Sep October Oct November Nov December Dec time hour minute second hour DIGIT minute DIGIT second DIGIT zone GMT Universal Time NST Newfoundland AST ADT Atlantic EST EDT Eastern CST CDT Central MST MDT Mountain PST PDT Pacific YST YDT Yukon HST HDT Haw Ala BST BDT Bering GMT DIGIT Local diff HHMM",
          "hierarchy": "Data Time Format RFC733",
          "module": "Data.Time.Format.RFC733",
          "name": "RFC733",
          "package": "time-http",
          "partial": "RFC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC733.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phantom type for conversions between RFC 733 date and time\n strings and \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econvertSuccess (Tagged (ZonedTime (LocalTime (ModifiedJulianDay 49662) (TimeOfDay 8 49 37)) utc) :: Tagged RFC733 ZonedTime)\n\u003c/code\u003e\u003c/strong\u003e\"Sunday, 06-Nov-1994 08:49:37 GMT\"\n\u003c/pre\u003e",
          "module": "Data.Time.Format.RFC733",
          "name": "RFC733",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC733.html#RFC733",
          "type": "data"
        },
        "index": {
          "description": "The phantom type for conversions between RFC date and time strings and ZonedTime convertSuccess Tagged ZonedTime LocalTime ModifiedJulianDay TimeOfDay utc Tagged RFC733 ZonedTime Sunday Nov-1994 GMT",
          "hierarchy": "Data Time Format RFC733",
          "module": "Data.Time.Format.RFC733",
          "name": "RFC733",
          "package": "time-http",
          "partial": "RFC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC733.html#t:RFC733"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse and format RFC 822 date\n and time strings (\u003ca\u003ehttp://tools.ietf.org/html/rfc822#section-5\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe syntax is as follows:\n\u003c/p\u003e\u003cpre\u003e date-time   ::= [ day-of-week \", \" ] date SP time SP zone\n day-of-week ::= \"Mon\" | \"Tue\" | \"Wed\" | \"Thu\"\n               | \"Fri\" | \"Sat\" | \"Sun\"\n date        ::= day SP month SP year\n day         ::= 2DIGIT\n year        ::= 2DIGIT             ; Yes, only 2 digits.\n month       ::= \"Jan\" | \"Feb\" | \"Mar\" | \"Apr\"\n               | \"May\" | \"Jun\" | \"Jul\" | \"Aug\"\n               | \"Sep\" | \"Oct\" | \"Nov\" | \"Dec\"\n time        ::= hour \":\" minute [ \":\" second ]\n hour        ::= 2DIGIT\n minute      ::= 2DIGIT\n second      ::= 2DIGIT\n zone        ::= \"UT\"  | \"GMT\"      ; Universal Time\n               | \"EST\" | \"EDT\"      ; Eastern : -5 / -4\n               | \"CST\" | \"CDT\"      ; Central : -6 / -5\n               | \"MST\" | \"MDT\"      ; Mountain: -7 / -6\n               | \"PST\" | \"PDT\"      ; Pacific : -8 / -7\n               | \"Z\"                ; UT\n               | \"A\"                ;  -1\n               | \"M\"                ; -12\n               | \"N\"                ;  +1\n               | \"Y\"                ; +12\n               | (\"+\" | \"-\") 4DIGIT ; Local diff: HHMM\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Time.Format.RFC822",
          "name": "RFC822",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC822.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse and format RFC date and time strings http tools.ietf.org html rfc822 section-5 The syntax is as follows date-time day-of-week date SP time SP zone day-of-week Mon Tue Wed Thu Fri Sat Sun date day SP month SP year day DIGIT year DIGIT Yes only digits month Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec time hour minute second hour DIGIT minute DIGIT second DIGIT zone UT GMT Universal Time EST EDT Eastern CST CDT Central MST MDT Mountain PST PDT Pacific UT DIGIT Local diff HHMM",
          "hierarchy": "Data Time Format RFC822",
          "module": "Data.Time.Format.RFC822",
          "name": "RFC822",
          "package": "time-http",
          "partial": "RFC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC822.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe phantom type for conversions between RFC 822 date and time\n strings and \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econvertAttempt (Tagged (ZonedTime (LocalTime (ModifiedJulianDay 49662) (TimeOfDay 8 49 37)) utc) :: Tagged RFC822 ZonedTime)\n\u003c/code\u003e\u003c/strong\u003eSuccess \"Sun, 06 Nov 94 08:49:37 GMT\"\n\u003c/pre\u003e\u003cp\u003eNote that RFC 822 has a Y2K problem so converting \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e whose\n gregorian year is earlier than 1900 or from 2000 onward results in\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eConvertBoundsException\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDay\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e RFC822 \u003ccode\u003e\u003ca\u003eZonedTime\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Time.Format.RFC822",
          "name": "RFC822",
          "package": "time-http",
          "source": "src/Data-Time-Format-RFC822.html#RFC822",
          "type": "data"
        },
        "index": {
          "description": "The phantom type for conversions between RFC date and time strings and ZonedTime convertAttempt Tagged ZonedTime LocalTime ModifiedJulianDay TimeOfDay utc Tagged RFC822 ZonedTime Success Sun Nov GMT Note that RFC has Y2K problem so converting ZonedTime whose gregorian year is earlier than or from onward results in ConvertBoundsException Day Tagged RFC822 ZonedTime",
          "hierarchy": "Data Time Format RFC822",
          "module": "Data.Time.Format.RFC822",
          "name": "RFC822",
          "package": "time-http",
          "partial": "RFC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/time-http/docs/Data-Time-Format-RFC822.html#t:RFC822"
      }
    }
  ]
]