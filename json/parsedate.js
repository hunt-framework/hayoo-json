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
        "word": "parsedate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Time.Parse",
          "name": "Parse",
          "package": "parsedate",
          "source": "src/System-Time-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Time Parse",
          "module": "System.Time.Parse",
          "name": "Parse",
          "package": "parsedate",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parsedate/docs/System-Time-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a date string as formatted by \u003ccode\u003e\u003ca\u003eformatCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eCalendarTime\u003c/a\u003e\u003c/code\u003e will only have those fields set that\n   are represented by a format specifier in the format string, and those\n   fields will be set to the values given in the date string.\n   If the same field is specified multiple times, the rightmost\n   occurence takes precedence.\n\u003c/p\u003e\u003cp\u003eThe resulting date is not neccessarily a valid date. For example,\n   if there is no day of the week specifier in the format string,\n   the value of \u003ccode\u003e\u003ca\u003ectWDay\u003c/a\u003e\u003c/code\u003e will most likely be invalid.\n\u003c/p\u003e\u003cp\u003eFormat specifiers are % followed by some character. All other\n   characters are treated literally. Whitespace in the format string\n   matches zero or more arbitrary whitespace characters.\n\u003c/p\u003e\u003cp\u003eFormat specifiers marked with * are matched, but do not set any\n   field in the output.\n\u003c/p\u003e\u003cp\u003eSome of the format specifiers are marked as space-padded or \n   zero-padded. Regardless of this, space-padded, zero-padded \n   or unpadded inputs are accepted. Note that strings using \n   unpadded fields without separating the fields may cause\n   strange parsing.\n\u003c/p\u003e\u003cp\u003eSupported format specfiers:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e%%\u003c/dt\u003e\u003cdd\u003e   a % character.\n\u003c/dd\u003e\u003cdt\u003e%a\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated weekday name (Sun ... Sat)\n\u003c/dd\u003e\u003cdt\u003e%A\u003c/dt\u003e\u003cdd\u003e   locale's full weekday name (Sunday .. Saturday)\n\u003c/dd\u003e\u003cdt\u003e%b\u003c/dt\u003e\u003cdd\u003e   locale's abbreviated month name (Jan..Dec)\n\u003c/dd\u003e\u003cdt\u003e%B\u003c/dt\u003e\u003cdd\u003e   locale's full month name (January..December)\n\u003c/dd\u003e\u003cdt\u003e%c\u003c/dt\u003e\u003cdd\u003e   locale's date and time format (Thu Mar 25 17:47:03 CET 2004)\n\u003c/dd\u003e\u003cdt\u003e%C\u003c/dt\u003e\u003cdd\u003e   century [00-99]\n\u003c/dd\u003e\u003cdt\u003e%d\u003c/dt\u003e\u003cdd\u003e   day of month, zero padded (01..31)\n\u003c/dd\u003e\u003cdt\u003e%D\u003c/dt\u003e\u003cdd\u003e   date (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%e\u003c/dt\u003e\u003cdd\u003e   day of month, space padded ( 1..31)\n\u003c/dd\u003e\u003cdt\u003e%h\u003c/dt\u003e\u003cdd\u003e   same as %b\n\u003c/dd\u003e\u003cdt\u003e%H\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, zero padded (00..23)\n\u003c/dd\u003e\u003cdt\u003e%I\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%j\u003c/dt\u003e\u003cdd\u003e   day of the year, zero padded (001..366)\n\u003c/dd\u003e\u003cdt\u003e%k\u003c/dt\u003e\u003cdd\u003e   hour, 24-hour clock, space padded ( 0..23)\n\u003c/dd\u003e\u003cdt\u003e%l\u003c/dt\u003e\u003cdd\u003e   hour, 12-hour clock, space padded ( 1..12)\n\u003c/dd\u003e\u003cdt\u003e%m\u003c/dt\u003e\u003cdd\u003e   month, zero padded (01..12)\n\u003c/dd\u003e\u003cdt\u003e%M\u003c/dt\u003e\u003cdd\u003e   minute, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%n\u003c/dt\u003e\u003cdd\u003e   a newline character\n\u003c/dd\u003e\u003cdt\u003e%p\u003c/dt\u003e\u003cdd\u003e   locale's AM or PM indicator\n\u003c/dd\u003e\u003cdt\u003e%r\u003c/dt\u003e\u003cdd\u003e   locale's 12-hour time format (hh:mm:ss AM/PM)\n\u003c/dd\u003e\u003cdt\u003e%R\u003c/dt\u003e\u003cdd\u003e   hours and minutes, 24-hour clock (hh:mm)\n\u003c/dd\u003e\u003cdt\u003e%s\u003c/dt\u003e\u003cdd\u003e   * seconds since '00:00:00 1970-01-01 UTC'\n\u003c/dd\u003e\u003cdt\u003e%S\u003c/dt\u003e\u003cdd\u003e   seconds, zero padded (00..59)\n\u003c/dd\u003e\u003cdt\u003e%t\u003c/dt\u003e\u003cdd\u003e   a horizontal tab character\n\u003c/dd\u003e\u003cdt\u003e%T\u003c/dt\u003e\u003cdd\u003e   time, 24-hour clock (hh:mm:ss)\n\u003c/dd\u003e\u003cdt\u003e%u\u003c/dt\u003e\u003cdd\u003e   numeric day of the week (1=Monday, 7=Sunday)\n\u003c/dd\u003e\u003cdt\u003e%U\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Sunday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%V\u003c/dt\u003e\u003cdd\u003e   * week number (as per ISO-8601),\n             week 1 is the first week with a Thursday,\n             zero padded, (01-53)\n\u003c/dd\u003e\u003cdt\u003e%w\u003c/dt\u003e\u003cdd\u003e   numeric day of the week, (0=Sunday, 6=Monday)\n\u003c/dd\u003e\u003cdt\u003e%W\u003c/dt\u003e\u003cdd\u003e   * week number, weeks starting on Monday, zero padded (01-53)\n\u003c/dd\u003e\u003cdt\u003e%x\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing dates (%m/%d/%y)\n\u003c/dd\u003e\u003cdt\u003e%X\u003c/dt\u003e\u003cdd\u003e   locale's preferred way of printing time. (%H:%M:%S)\n\u003c/dd\u003e\u003cdt\u003e%y\u003c/dt\u003e\u003cdd\u003e   year, within century, zero padded (00..99)\n\u003c/dd\u003e\u003cdt\u003e%Y\u003c/dt\u003e\u003cdd\u003e   year, including century. Not padded \n           (this is probably a bug, but formatCalendarTime does\n           it this way). (0-9999)\n\u003c/dd\u003e\u003cdt\u003e%Z\u003c/dt\u003e\u003cdd\u003e   time zone abbreviation (e.g. CET) or RFC-822 style numeric \n           timezone (-0500)\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Time.Parse",
          "name": "parseCalendarTime",
          "package": "parsedate",
          "signature": "TimeLocale-\u003e String-\u003e String-\u003e Maybe CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Parse date string as formatted by formatCalendarTime The resulting CalendarTime will only have those fields set that are represented by format specifier in the format string and those fields will be set to the values given in the date string If the same field is specified multiple times the rightmost occurence takes precedence The resulting date is not neccessarily valid date For example if there is no day of the week specifier in the format string the value of ctWDay will most likely be invalid Format specifiers are followed by some character All other characters are treated literally Whitespace in the format string matches zero or more arbitrary whitespace characters Format specifiers marked with are matched but do not set any field in the output Some of the format specifiers are marked as space-padded or zero-padded Regardless of this space-padded zero-padded or unpadded inputs are accepted Note that strings using unpadded fields without separating the fields may cause strange parsing Supported format specfiers character locale abbreviated weekday name Sun Sat locale full weekday name Sunday Saturday locale abbreviated month name Jan..Dec locale full month name January..December locale date and time format Thu Mar CET century day of month zero padded date day of month space padded same as hour hour clock zero padded hour hour clock zero padded day of the year zero padded hour hour clock space padded hour hour clock space padded month zero padded minute zero padded newline character locale AM or PM indicator locale hour time format hh mm ss AM PM hours and minutes hour clock hh mm seconds since UTC seconds zero padded horizontal tab character time hour clock hh mm ss numeric day of the week Monday Sunday week number weeks starting on Sunday zero padded week number as per ISO-8601 week is the first week with Thursday zero padded numeric day of the week Sunday Monday week number weeks starting on Monday zero padded locale preferred way of printing dates locale preferred way of printing time year within century zero padded year including century Not padded this is probably bug but formatCalendarTime does it this way time zone abbreviation e.g CET or RFC-822 style numeric timezone",
          "hierarchy": "System Time Parse",
          "module": "System.Time.Parse",
          "name": "parseCalendarTime",
          "normalized": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime",
          "package": "parsedate",
          "partial": "Calendar Time",
          "signature": "TimeLocale-\u003eString-\u003eString-\u003eMaybe CalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsedate/docs/System-Time-Parse.html#v:parseCalendarTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Parsec combinator version of \u003ccode\u003e\u003ca\u003eparseCalendarTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Time.Parse",
          "name": "parsecCalendarTime",
          "package": "parsedate",
          "signature": "TimeLocale-\u003e String-\u003e Parser CalendarTime",
          "type": "function"
        },
        "index": {
          "description": "Parsec combinator version of parseCalendarTime",
          "hierarchy": "System Time Parse",
          "module": "System.Time.Parse",
          "name": "parsecCalendarTime",
          "normalized": "TimeLocale-\u003eString-\u003eParser CalendarTime",
          "package": "parsedate",
          "partial": "Calendar Time",
          "signature": "TimeLocale-\u003eString-\u003eParser CalendarTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parsedate/docs/System-Time-Parse.html#v:parsecCalendarTime"
      }
    }
  ]
]