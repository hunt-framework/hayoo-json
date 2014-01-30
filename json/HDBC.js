[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions of, and utilities for, specifying what type of data is represented\nby a column.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-ColTypes.html",
        "fct-type": "module",
        "title": "ColTypes"
      },
      "index": {
        "description": "Definitions of and utilities for specifying what type of data is represented by column Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "ColTypes",
        "normalized": "",
        "package": "HDBC",
        "partial": "Col Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#t:SqlColDesc",
      "description": {
        "fct-descr": "\u003cp\u003eThe description of a column.\n\u003c/p\u003e\u003cp\u003eFields are Nothing if the database backend cannot supply the\nrequested information.\n\u003c/p\u003e\u003cp\u003eThe colSize field works like this:\n\u003c/p\u003e\u003cp\u003eFor character types, the maximum width of the column.  For numeric\ntypes, the total number of digits allowed.  See the ODBC manual for more.\n\u003c/p\u003e\u003cp\u003eThe colOctetLength field is defined for character and binary types, and\ngives the number of bytes the column requires, regardless of encoding.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "data",
        "title": "SqlColDesc"
      },
      "index": {
        "description": "The description of column Fields are Nothing if the database backend cannot supply the requested information The colSize field works like this For character types the maximum width of the column For numeric types the total number of digits allowed See the ODBC manual for more The colOctetLength field is defined for character and binary types and gives the number of bytes the column requires regardless of encoding",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlColDesc",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Col Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#t:SqlInterval",
      "description": {
        "fct-descr": "\u003cp\u003eThe different types of intervals in SQL. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "data",
        "title": "SqlInterval"
      },
      "index": {
        "description": "The different types of intervals in SQL",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlInterval",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#t:SqlTypeId",
      "description": {
        "fct-descr": "\u003cp\u003eThe type identifier for a given column. \n\u003c/p\u003e\u003cp\u003eThis represents the type of data stored in the column in the underlying\nSQL engine.  It does not form the entire column type; see \u003ccode\u003e\u003ca\u003eSqlColDesc\u003c/a\u003e\u003c/code\u003e for\nthat.\n\u003c/p\u003e\u003cp\u003eThese types correspond mainly to those defined by ODBC. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "data",
        "title": "SqlTypeId"
      },
      "index": {
        "description": "The type identifier for given column This represents the type of data stored in the column in the underlying SQL engine It does not form the entire column type see SqlColDesc for that These types correspond mainly to those defined by ODBC",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTypeId",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Type Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlBigIntT",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit integer values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlBigIntT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlBigIntT"
      },
      "index": {
        "description": "bit integer values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlBigIntT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Big Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlBinaryT",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-length binary data\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlBinaryT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlBinaryT"
      },
      "index": {
        "description": "Fixed-length binary data",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlBinaryT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlBitT",
      "description": {
        "fct-descr": "\u003cp\u003eA single bit\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlBitT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlBitT"
      },
      "index": {
        "description": "single bit",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlBitT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlCharT",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-width character strings\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlCharT"
      },
      "index": {
        "description": "Fixed-width character strings",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlColDesc",
      "description": {
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlColDesc",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "SqlColDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlColDesc",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Col Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlDateT",
      "description": {
        "fct-descr": "\u003cp\u003eA date\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlDateT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlDateT"
      },
      "index": {
        "description": "date",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlDateT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlDecimalT",
      "description": {
        "fct-descr": "\u003cp\u003eSigned exact values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlDecimalT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlDecimalT"
      },
      "index": {
        "description": "Signed exact values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlDecimalT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlDoubleT",
      "description": {
        "fct-descr": "\u003cp\u003eSigned inexact double-precision values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlDoubleT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlDoubleT"
      },
      "index": {
        "description": "Signed inexact double-precision values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlDoubleT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlFloatT",
      "description": {
        "fct-descr": "\u003cp\u003eSigned inexact floating-point values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlFloatT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlFloatT"
      },
      "index": {
        "description": "Signed inexact floating-point values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlFloatT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlGUIDT",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal unique identifier\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlGUIDT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlGUIDT"
      },
      "index": {
        "description": "Global unique identifier",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlGUIDT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql GUIDT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntegerT",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit integer values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntegerT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlIntegerT"
      },
      "index": {
        "description": "bit integer values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntegerT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalDayT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in days\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalDayT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalDayT"
      },
      "index": {
        "description": "Difference in days",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalDayT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalDayToHourT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in days+hours\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalDayToHourT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalDayToHourT"
      },
      "index": {
        "description": "Difference in days hours",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalDayToHourT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Day To Hour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalDayToMinuteT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in days+minutes\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalDayToMinuteT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalDayToMinuteT"
      },
      "index": {
        "description": "Difference in days minutes",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalDayToMinuteT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Day To Minute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalDayToSecondT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in days+seconds\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalDayToSecondT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalDayToSecondT"
      },
      "index": {
        "description": "Difference in days seconds",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalDayToSecondT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Day To Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalHourT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in hours\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalHourT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalHourT"
      },
      "index": {
        "description": "Difference in hours",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalHourT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Hour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalHourToMinuteT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in hours+minutes\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalHourToMinuteT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalHourToMinuteT"
      },
      "index": {
        "description": "Difference in hours minutes",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalHourToMinuteT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Hour To Minute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalHourToSecondT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in hours+seconds\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalHourToSecondT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalHourToSecondT"
      },
      "index": {
        "description": "Difference in hours seconds",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalHourToSecondT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Hour To Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalMinuteT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in minutes\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalMinuteT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalMinuteT"
      },
      "index": {
        "description": "Difference in minutes",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalMinuteT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Minute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalMinuteToSecondT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in minutes+seconds\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalMinuteToSecondT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalMinuteToSecondT"
      },
      "index": {
        "description": "Difference in minutes seconds",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalMinuteToSecondT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Minute To Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalMonthT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in months\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalMonthT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalMonthT"
      },
      "index": {
        "description": "Difference in months",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalMonthT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalSecondT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in seconds\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalSecondT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalSecondT"
      },
      "index": {
        "description": "Difference in seconds",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalSecondT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalT",
      "description": {
        "fct-descr": "\u003cp\u003eA time or date difference\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalT SqlInterval",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlIntervalT"
      },
      "index": {
        "description": "time or date difference",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalYearT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in years\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalYearT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalYearT"
      },
      "index": {
        "description": "Difference in years",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalYearT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Year",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlIntervalYearToMonthT",
      "description": {
        "fct-descr": "\u003cp\u003eDifference in years+months\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlIntervalYearToMonthT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlInterval",
        "fct-type": "function",
        "title": "SqlIntervalYearToMonthT"
      },
      "index": {
        "description": "Difference in years months",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlIntervalYearToMonthT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Interval Year To Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlLongVarBinaryT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-length binary data, max length implementation dependant\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlLongVarBinaryT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlLongVarBinaryT"
      },
      "index": {
        "description": "Variable-length binary data max length implementation dependant",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlLongVarBinaryT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Long Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlLongVarCharT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-width character strings, max length implementation dependant\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlLongVarCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlLongVarCharT"
      },
      "index": {
        "description": "Variable-width character strings max length implementation dependant",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlLongVarCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Long Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlNumericT",
      "description": {
        "fct-descr": "\u003cp\u003eSigned exact integer values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlNumericT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlNumericT"
      },
      "index": {
        "description": "Signed exact integer values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlNumericT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlRealT",
      "description": {
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlRealT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlRealT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlRealT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlSmallIntT",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit integer values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlSmallIntT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlSmallIntT"
      },
      "index": {
        "description": "bit integer values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlSmallIntT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Small Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlTimeT",
      "description": {
        "fct-descr": "\u003cp\u003eA time, no timezone\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlTimeT"
      },
      "index": {
        "description": "time no timezone",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTimeT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlTimeWithZoneT",
      "description": {
        "fct-descr": "\u003cp\u003eA time, with timezone\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeWithZoneT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlTimeWithZoneT"
      },
      "index": {
        "description": "time with timezone",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTimeWithZoneT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time With Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlTimestampT",
      "description": {
        "fct-descr": "\u003cp\u003eCombined date and time, no timezone\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimestampT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlTimestampT"
      },
      "index": {
        "description": "Combined date and time no timezone",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTimestampT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlTimestampWithZoneT",
      "description": {
        "fct-descr": "\u003cp\u003eCombined date and time, with timezone\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimestampWithZoneT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlTimestampWithZoneT"
      },
      "index": {
        "description": "Combined date and time with timezone",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTimestampWithZoneT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Timestamp With Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlTinyIntT",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit integer values\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTinyIntT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlTinyIntT"
      },
      "index": {
        "description": "bit integer values",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlTinyIntT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Tiny Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlUTCDateTimeT",
      "description": {
        "fct-descr": "\u003cp\u003eUTC date/time\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCDateTimeT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlUTCDateTimeT"
      },
      "index": {
        "description": "UTC date time",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlUTCDateTimeT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCDate Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlUTCTimeT",
      "description": {
        "fct-descr": "\u003cp\u003eUTC time\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCTimeT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlUTCTimeT"
      },
      "index": {
        "description": "UTC time",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlUTCTimeT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlUnknownT",
      "description": {
        "fct-descr": "\u003cp\u003eA type not represented here; implementation-specific information in the String\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlUnknownT String",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlUnknownT"
      },
      "index": {
        "description": "type not represented here implementation-specific information in the String",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlUnknownT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlVarBinaryT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-length binary data\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlVarBinaryT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlVarBinaryT"
      },
      "index": {
        "description": "Variable-length binary data",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlVarBinaryT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Var Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlVarCharT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-width character strings\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlVarCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlVarCharT"
      },
      "index": {
        "description": "Variable-width character strings",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlVarCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlWCharT",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-width Unicode strings\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlWCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlWCharT"
      },
      "index": {
        "description": "Fixed-width Unicode strings",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlWCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql WChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlWLongVarCharT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-width Unicode strings, max length implementation dependant\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlWLongVarCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlWLongVarCharT"
      },
      "index": {
        "description": "Variable-width Unicode strings max length implementation dependant",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlWLongVarCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql WLong Var Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:SqlWVarCharT",
      "description": {
        "fct-descr": "\u003cp\u003eVariable-width Unicode strings\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlWVarCharT",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlTypeId",
        "fct-type": "function",
        "title": "SqlWVarCharT"
      },
      "index": {
        "description": "Variable-width Unicode strings",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "SqlWVarCharT",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql WVar Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:colDecDigits",
      "description": {
        "fct-descr": "\u003cp\u003eDigits to the right of the period\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "colDecDigits"
      },
      "index": {
        "description": "Digits to the right of the period",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "colDecDigits",
        "normalized": "",
        "package": "HDBC",
        "partial": "Dec Digits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:colNullable",
      "description": {
        "fct-descr": "\u003cp\u003eWhether NULL is acceptable\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "colNullable"
      },
      "index": {
        "description": "Whether NULL is acceptable",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "colNullable",
        "normalized": "",
        "package": "HDBC",
        "partial": "Nullable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:colOctetLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum size in octets\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "colOctetLength"
      },
      "index": {
        "description": "The maximum size in octets",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "colOctetLength",
        "normalized": "",
        "package": "HDBC",
        "partial": "Octet Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:colSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of a column\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "colSize"
      },
      "index": {
        "description": "The size of column",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "colSize",
        "normalized": "",
        "package": "HDBC",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-ColTypes.html#v:colType",
      "description": {
        "fct-descr": "\u003cp\u003eType of data stored here\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.ColTypes",
        "fct-package": "HDBC",
        "fct-signature": "SqlTypeId",
        "fct-source": "src/Database-HDBC-ColTypes.html#SqlColDesc",
        "fct-type": "function",
        "title": "colType"
      },
      "index": {
        "description": "Type of data stored here",
        "hierarchy": "Database HDBC ColTypes",
        "module": "Database.HDBC.ColTypes",
        "name": "colType",
        "normalized": "",
        "package": "HDBC",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-DriverUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for database backend drivers.\n\u003c/p\u003e\u003cp\u003ePlease note: this module is intended for authors of database driver libraries\nonly.  Authors of applications using HDBC should use \u003ccode\u003e\u003ca\u003eHDBC\u003c/a\u003e\u003c/code\u003e\nexclusively.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.DriverUtils",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-DriverUtils.html",
        "fct-type": "module",
        "title": "DriverUtils"
      },
      "index": {
        "description": "Utilities for database backend drivers Please note this module is intended for authors of database driver libraries only Authors of applications using HDBC should use HDBC exclusively Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBC DriverUtils",
        "module": "Database.HDBC.DriverUtils",
        "name": "DriverUtils",
        "normalized": "",
        "package": "HDBC",
        "partial": "Driver Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-DriverUtils.html#t:ChildList",
      "description": {
        "fct-module": "Database.HDBC.DriverUtils",
        "fct-package": "HDBC",
        "fct-signature": "type",
        "fct-source": "src/Database-HDBC-DriverUtils.html#ChildList",
        "fct-type": "type",
        "title": "ChildList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC DriverUtils",
        "module": "Database.HDBC.DriverUtils",
        "name": "ChildList",
        "normalized": "",
        "package": "HDBC",
        "partial": "Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-DriverUtils.html#v:addChild",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new child to the existing list.  Also takes care of registering\na finalizer for it, to remove it from the list when possible. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.DriverUtils",
        "fct-package": "HDBC",
        "fct-signature": "ChildList -\u003e Statement -\u003e IO ()",
        "fct-source": "src/Database-HDBC-DriverUtils.html#addChild",
        "fct-type": "function",
        "title": "addChild"
      },
      "index": {
        "description": "Adds new child to the existing list Also takes care of registering finalizer for it to remove it from the list when possible",
        "hierarchy": "Database HDBC DriverUtils",
        "module": "Database.HDBC.DriverUtils",
        "name": "addChild",
        "normalized": "ChildList-\u003eStatement-\u003eIO()",
        "package": "HDBC",
        "partial": "Child",
        "signature": "ChildList-\u003eStatement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-DriverUtils.html#v:closeAllChildren",
      "description": {
        "fct-descr": "\u003cp\u003eClose all children.  Intended to be called by the \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e function\nin \u003ccode\u003eConnection\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThere may be a potential race condition wherein a call to newSth at the same\ntime as a call to this function may result in the new child not being closed.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.DriverUtils",
        "fct-package": "HDBC",
        "fct-signature": "ChildList -\u003e IO ()",
        "fct-source": "src/Database-HDBC-DriverUtils.html#closeAllChildren",
        "fct-type": "function",
        "title": "closeAllChildren"
      },
      "index": {
        "description": "Close all children Intended to be called by the disconnect function in Connection There may be potential race condition wherein call to newSth at the same time as call to this function may result in the new child not being closed",
        "hierarchy": "Database HDBC DriverUtils",
        "module": "Database.HDBC.DriverUtils",
        "name": "closeAllChildren",
        "normalized": "ChildList-\u003eIO()",
        "package": "HDBC",
        "partial": "All Children",
        "signature": "ChildList-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Locale.html#",
      "description": {
        "fct-module": "Database.HDBC.Locale",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-Locale.html",
        "fct-type": "module",
        "title": "Locale"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Locale",
        "module": "Database.HDBC.Locale",
        "name": "Locale",
        "normalized": "",
        "package": "HDBC",
        "partial": "Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Locale.html#v:defaultTimeLocale",
      "description": {
        "fct-module": "Database.HDBC.Locale",
        "fct-package": "HDBC",
        "fct-signature": "TimeLocale",
        "fct-type": "function",
        "title": "defaultTimeLocale"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Locale",
        "module": "Database.HDBC.Locale",
        "name": "defaultTimeLocale",
        "normalized": "",
        "package": "HDBC",
        "partial": "Time Locale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Locale.html#v:iso8601DateFormat",
      "description": {
        "fct-descr": "\u003cp\u003eAs the semantic of System.Locale.iso8601DateFormat has changed with\n   old-locale-1.0.0.2 in a non-compatible way, we now define our own\n   (compatible) version of it.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Locale",
        "fct-package": "HDBC",
        "fct-signature": "Maybe String -\u003e String",
        "fct-source": "src/Database-HDBC-Locale.html#iso8601DateFormat",
        "fct-type": "function",
        "title": "iso8601DateFormat"
      },
      "index": {
        "description": "As the semantic of System.Locale.iso8601DateFormat has changed with old-locale-1.0.0.2 in non-compatible way we now define our own compatible version of it",
        "hierarchy": "Database HDBC Locale",
        "module": "Database.HDBC.Locale",
        "name": "iso8601DateFormat",
        "normalized": "Maybe String-\u003eString",
        "package": "HDBC",
        "partial": "Date Format",
        "signature": "Maybe String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-SqlValue.html",
        "fct-type": "module",
        "title": "SqlValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlValue",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#t:SqlValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is he main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eINTRODUCTION TO SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis type is used to marshall Haskell data to and from database APIs.\nHDBC driver interfaces will do their best to use the most accurate and\nefficient way to send a particular value to the database server.\n\u003c/p\u003e\u003cp\u003eValues read back from the server are constructed with the most appropriate \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e\nconstructor.  \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e \ncan then be used to convert them into whatever type\nis needed locally in Haskell.\n\u003c/p\u003e\u003cp\u003eMost people will use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead of manipulating\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEASY CONVERSIONS BETWEEN HASKELL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eConversions are powerful; for instance, you can call \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e on a SqlInt32\nand get a String or a Double out of it.  This class attempts to Do\nThe Right Thing whenever possible, and will raise an error when asked to\ndo something incorrect.  In particular, when converting to any type\nexcept a Maybe, \u003ccode\u003e\u003ca\u003eSqlNull\u003c/a\u003e\u003c/code\u003e as the input will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eConversions are implemented in terms of the \u003ca\u003eData.Convertible\u003c/a\u003e module, part of the\nconvertible package.  You can refer to its documentation, and import that module,\nif you wish to parse the Left result from \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e yourself, or write your\nown conversion instances.\n\u003c/p\u003e\u003cp\u003eHere are some notes about conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fractions of a second are not preserved on time values\n\u003c/li\u003e\u003cli\u003e There is no \u003ccode\u003esafeToSql\u003c/code\u003e because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eiToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may sometimes be an error during conversion.  For instance, if you have a\n\u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e and are attempting to convert it to an Integer, but it doesn't parse as\nan Integer, you will get an error.  This will be indicated as an exception if using\n\u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result if using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSPECIAL NOTE ON POSIXTIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e is converted to \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e by\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e.  HDBC cannot differentiate between \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e\nsince they are the same underlying type.  You must construct \u003ccode\u003e\u003ca\u003eSqlPOSIXTime\u003c/a\u003e\u003c/code\u003e\nmanually or via \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ca\u003eSqlUTCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDETAILS ON SQL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHDBC database backends are expected to marshal date and time data back and\nforth using the appropriate representation for the underlying database engine.\nDatabases such as PostgreSQL with builtin date and time types should see automatic\nconversion between these Haskell types to database types.  Other databases will be\npresented with an integer or a string.  Care should be taken to use the same type on\nthe Haskell side as you use on the database side.  For instance, if your database\ntype lacks timezone information, you ought not to use ZonedTime, but\ninstead LocalTime or UTCTime.  Database type systems are not always as rich\nas Haskell.  For instance, for data stored in a TIMESTAMP\nWITHOUT TIME ZONE column, HDBC may not be able to tell if it is intended\nas UTCTime or LocalTime data, and will happily convert it to both, \nupon your request.  It is\nyour responsibility to ensure that you treat timezone issues with due care.\n\u003c/p\u003e\u003cp\u003eThis behavior also exists for other types.  For instance, many databases do not\nhave a Rational type, so they will just use the show function and\nstore a Rational as a string.\n\u003c/p\u003e\u003cp\u003eThe conversion between Haskell types and database types is complex,\nand generic code in HDBC or its backends cannot possibly accomodate\nevery possible situation.  In some cases, you may be best served by converting your\nHaskell type to a String, and passing that to the database.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUNICODE AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBeginning with HDBC v2.0, interactions with a database are presumed to occur in UTF-8.\n\u003c/p\u003e\u003cp\u003eTo accomplish this, whenever a ByteString must be converted to or from a String,\nthe ByteString is assumed to be in UTF-8 encoding, and will be decoded or encoded\nas appropriate.  Database drivers will generally present text or string data they have\nreceived from the database as a SqlValue holding a ByteString, which \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will\nautomatically convert to a String, and thus automatically decode UTF-8, when\nyou need it.  In the other direction, database drivers will generally convert\na \u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e to a ByteString in UTF-8 encoding before passing it to the\ndatabase engine.\n\u003c/p\u003e\u003cp\u003eIf you are handling some sort of binary data that is not in UTF-8, you can of course\nwork with the ByteString directly, which will bypass any conversion.\n\u003c/p\u003e\u003cp\u003eDue to lack of support by database engines, lazy ByteStrings are not passed to database\ndrivers.  When you use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e on a lazy ByteString, it will be converted to a strict\nByteString for storage.  Similarly, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will convert a strict ByteString to\na lazy ByteString if you demand it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a string, are equal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSTRING VERSIONS OF TIMES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eDefault string representations are given as comments below where such are non-obvious.\nThese are used for \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e when a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is desired.  They are also defaults for\nrepresenting data to SQL backends, though individual backends may override them\nwhen a different format is demanded by the underlying database.  Date and time formats\nuse ISO8601 date format, with HH:MM:SS added for time, and -HHMM added for timezone\noffsets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDEPRECATED CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlEpochTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSqlTimeDiff\u003c/a\u003e\u003c/code\u003e are no longer created automatically by any\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e functions or database backends.  They may still be manually\nconstructed, but are\nexpected to be removed in a future version.  Although these two constructures will\nbe removed, support for marshalling to and from the old System.Time data will be\nmaintained as long as System.Time is, simply using the newer data types for conversion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "data",
        "title": "SqlValue"
      },
      "index": {
        "description": "SqlValue is he main type for expressing Haskell values to SQL databases INTRODUCTION TO SQLVALUE This type is used to marshall Haskell data to and from database APIs HDBC driver interfaces will do their best to use the most accurate and efficient way to send particular value to the database server Values read back from the server are constructed with the most appropriate SqlValue constructor fromSql or safeFromSql can then be used to convert them into whatever type is needed locally in Haskell Most people will use toSql and fromSql instead of manipulating SqlValue directly EASY CONVERSIONS BETWEEN HASKELL TYPES Conversions are powerful for instance you can call fromSql on SqlInt32 and get String or Double out of it This class attempts to Do The Right Thing whenever possible and will raise an error when asked to do something incorrect In particular when converting to any type except Maybe SqlNull as the input will cause an error to be raised Conversions are implemented in terms of the Data.Convertible module part of the convertible package You can refer to its documentation and import that module if you wish to parse the Left result from safeFromSql yourself or write your own conversion instances Here are some notes about conversion Fractions of second are not preserved on time values There is no safeToSql because toSql never fails See also toSql safeFromSql fromSql nToSql iToSql posixToSql ERROR CONDITIONS There may sometimes be an error during conversion For instance if you have SqlString and are attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception if using fromSql or Left result if using safeFromSql SPECIAL NOTE ON POSIXTIME Note that NominalDiffTime or POSIXTime is converted to SqlDiffTime by toSql HDBC cannot differentiate between NominalDiffTime and POSIXTime since they are the same underlying type You must construct SqlPOSIXTime manually or via posixToSql or use SqlUTCTime DETAILS ON SQL TYPES HDBC database backends are expected to marshal date and time data back and forth using the appropriate representation for the underlying database engine Databases such as PostgreSQL with builtin date and time types should see automatic conversion between these Haskell types to database types Other databases will be presented with an integer or string Care should be taken to use the same type on the Haskell side as you use on the database side For instance if your database type lacks timezone information you ought not to use ZonedTime but instead LocalTime or UTCTime Database type systems are not always as rich as Haskell For instance for data stored in TIMESTAMP WITHOUT TIME ZONE column HDBC may not be able to tell if it is intended as UTCTime or LocalTime data and will happily convert it to both upon your request It is your responsibility to ensure that you treat timezone issues with due care This behavior also exists for other types For instance many databases do not have Rational type so they will just use the show function and store Rational as string The conversion between Haskell types and database types is complex and generic code in HDBC or its backends cannot possibly accomodate every possible situation In some cases you may be best served by converting your Haskell type to String and passing that to the database UNICODE AND BYTESTRINGS Beginning with HDBC v2.0 interactions with database are presumed to occur in UTF-8 To accomplish this whenever ByteString must be converted to or from String the ByteString is assumed to be in UTF-8 encoding and will be decoded or encoded as appropriate Database drivers will generally present text or string data they have received from the database as SqlValue holding ByteString which fromSql will automatically convert to String and thus automatically decode UTF-8 when you need it In the other direction database drivers will generally convert SqlString to ByteString in UTF-8 encoding before passing it to the database engine If you are handling some sort of binary data that is not in UTF-8 you can of course work with the ByteString directly which will bypass any conversion Due to lack of support by database engines lazy ByteStrings are not passed to database drivers When you use toSql on lazy ByteString it will be converted to strict ByteString for storage Similarly fromSql will convert strict ByteString to lazy ByteString if you demand it EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to string are equal STRING VERSIONS OF TIMES Default string representations are given as comments below where such are non-obvious These are used for fromSql when String is desired They are also defaults for representing data to SQL backends though individual backends may override them when different format is demanded by the underlying database Date and time formats use ISO8601 date format with HH MM SS added for time and HHMM added for timezone offsets DEPRECATED CONSTRUCTORS SqlEpochTime and SqlTimeDiff are no longer created automatically by any toSql or fromSql functions or database backends They may still be manually constructed but are expected to be removed in future version Although these two constructures will be removed support for marshalling to and from the old System.Time data will be maintained as long as System.Time is simply using the newer data types for conversion",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlValue",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlBool",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlBool Bool",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlBool",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlByteString",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlByteString ByteString",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlByteString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlChar Char",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlChar",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003eCalendar diff between seconds.  Rendered as Integer when converted to String, but greater precision may be preserved for other types or to underlying database.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlDiffTime NominalDiffTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDiffTime"
      },
      "index": {
        "description": "Calendar diff between seconds Rendered as Integer when converted to String but greater precision may be preserved for other types or to underlying database",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlDiffTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Diff Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlDouble Double",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlDouble",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlEpochTime",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of ClockTime or CalendarTime.  Use SqlPOSIXTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlEpochTime Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlEpochTime"
      },
      "index": {
        "description": "DEPRECATED Representation of ClockTime or CalendarTime Use SqlPOSIXTime instead",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlEpochTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Epoch Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlInt32",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt32 Int32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlInt32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlInt64",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt64 Int64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlInt64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlInteger Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlInteger",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlLocalDate",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalDate Day",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalDate"
      },
      "index": {
        "description": "Local YYYY-MM-DD no timezone",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlLocalDate",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTime LocalTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS no timezone",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlLocalTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTimeOfDay TimeOfDay",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS no timezone",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlNull",
      "description": {
        "fct-descr": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlNull",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlNull"
      },
      "index": {
        "description": "NULL in SQL or Nothing in Haskell",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlNull",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlPOSIXTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime as seconds since midnight Jan 1 1970 UTC.  Integer rendering as for \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlPOSIXTime POSIXTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlPOSIXTime"
      },
      "index": {
        "description": "Time as seconds since midnight Jan UTC Integer rendering as for SqlDiffTime",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlPOSIXTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql POSIXTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlRational",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlRational Rational",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlRational",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlString",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlString String",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlTimeDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of TimeDiff.  Use SqlDiffTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeDiff Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlTimeDiff"
      },
      "index": {
        "description": "DEPRECATED Representation of TimeDiff Use SqlDiffTime instead",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlTimeDiff",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCTime UTCTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUTCTime"
      },
      "index": {
        "description": "UTC YYYY-MM-DD HH MM SS",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlUTCTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlWord32",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord32 Word32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlWord32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlWord64",
      "description": {
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord64 Word64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlWord64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlZonedLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS -HHMM.  Converts to and from (TimeOfDay, TimeZone).\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedLocalTimeOfDay TimeOfDay TimeZone",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS HHMM Converts to and from TimeOfDay TimeZone",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlZonedLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:SqlZonedTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS -HHMM.  Considered equal if both convert to the same UTC time.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedTime ZonedTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS HHMM Considered equal if both convert to the same UTC time",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "SqlZonedTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:fromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Any problem is indicated by\n   calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e a",
        "fct-source": "src/Database-HDBC-SqlValue.html#fromSql",
        "fct-type": "function",
        "title": "fromSql"
      },
      "index": {
        "description": "Convert from an SqlValue to Haskell value Any problem is indicated by calling error This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "fromSql",
        "normalized": "SqlValue-\u003ea",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:iToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for using numeric literals in your program. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "Int -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#iToSql",
        "fct-type": "function",
        "title": "iToSql"
      },
      "index": {
        "description": "Convenience function for using numeric literals in your program",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "iToSql",
        "normalized": "Int-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "Int-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:nToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any Integral type to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e by using toInteger. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#nToSql",
        "fct-type": "function",
        "title": "nToSql"
      },
      "index": {
        "description": "Converts any Integral type to SqlValue by using toInteger",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "nToSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:posixToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for converting \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e, because\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e cannot do the correct thing in this instance. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "POSIXTime -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#posixToSql",
        "fct-type": "function",
        "title": "posixToSql"
      },
      "index": {
        "description": "Convenience function for converting POSIXTime to SqlValue because toSql cannot do the correct thing in this instance",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "posixToSql",
        "normalized": "POSIXTime-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "POSIXTime-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:safeFromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConversions to and from \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es and standard Haskell types.\n\u003c/p\u003e\u003cp\u003eThis function converts from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Many people will use the simpler\n   \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e ConvertResult a",
        "fct-source": "src/Database-HDBC-SqlValue.html#safeFromSql",
        "fct-type": "function",
        "title": "safeFromSql"
      },
      "index": {
        "description": "Conversions to and from SqlValue and standard Haskell types This function converts from an SqlValue to Haskell value Many people will use the simpler fromSql instead This function is simply restricted-type wrapper around safeConvert",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "safeFromSql",
        "normalized": "SqlValue-\u003eConvertResult a",
        "package": "HDBC",
        "partial": "From Sql",
        "signature": "SqlValue-\u003eConvertResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-SqlValue.html#v:toSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e.  This function is simply\na restricted-type wrapper around \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.SqlValue",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#toSql",
        "fct-type": "function",
        "title": "toSql"
      },
      "index": {
        "description": "Convert value to an SqlValue This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC SqlValue",
        "module": "Database.HDBC.SqlValue",
        "name": "toSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-Statement.html",
        "fct-type": "module",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#t:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003eThe main HDBC exception object.  As much information as possible\nis passed from the database through to the application through this object.\n\u003c/p\u003e\u003cp\u003eErrors generated in the Haskell layer will have seNativeError set to -1.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "The main HDBC exception object As much information as possible is passed from the database through to the application through this object Errors generated in the Haskell layer will have seNativeError set to",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#t:SqlValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is he main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eINTRODUCTION TO SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis type is used to marshall Haskell data to and from database APIs.\nHDBC driver interfaces will do their best to use the most accurate and\nefficient way to send a particular value to the database server.\n\u003c/p\u003e\u003cp\u003eValues read back from the server are constructed with the most appropriate \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e\nconstructor.  \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e \ncan then be used to convert them into whatever type\nis needed locally in Haskell.\n\u003c/p\u003e\u003cp\u003eMost people will use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead of manipulating\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEASY CONVERSIONS BETWEEN HASKELL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eConversions are powerful; for instance, you can call \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e on a SqlInt32\nand get a String or a Double out of it.  This class attempts to Do\nThe Right Thing whenever possible, and will raise an error when asked to\ndo something incorrect.  In particular, when converting to any type\nexcept a Maybe, \u003ccode\u003e\u003ca\u003eSqlNull\u003c/a\u003e\u003c/code\u003e as the input will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eConversions are implemented in terms of the \u003ca\u003eData.Convertible\u003c/a\u003e module, part of the\nconvertible package.  You can refer to its documentation, and import that module,\nif you wish to parse the Left result from \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e yourself, or write your\nown conversion instances.\n\u003c/p\u003e\u003cp\u003eHere are some notes about conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fractions of a second are not preserved on time values\n\u003c/li\u003e\u003cli\u003e There is no \u003ccode\u003esafeToSql\u003c/code\u003e because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eiToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may sometimes be an error during conversion.  For instance, if you have a\n\u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e and are attempting to convert it to an Integer, but it doesn't parse as\nan Integer, you will get an error.  This will be indicated as an exception if using\n\u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result if using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSPECIAL NOTE ON POSIXTIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e is converted to \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e by\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e.  HDBC cannot differentiate between \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e\nsince they are the same underlying type.  You must construct \u003ccode\u003e\u003ca\u003eSqlPOSIXTime\u003c/a\u003e\u003c/code\u003e\nmanually or via \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ca\u003eSqlUTCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDETAILS ON SQL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHDBC database backends are expected to marshal date and time data back and\nforth using the appropriate representation for the underlying database engine.\nDatabases such as PostgreSQL with builtin date and time types should see automatic\nconversion between these Haskell types to database types.  Other databases will be\npresented with an integer or a string.  Care should be taken to use the same type on\nthe Haskell side as you use on the database side.  For instance, if your database\ntype lacks timezone information, you ought not to use ZonedTime, but\ninstead LocalTime or UTCTime.  Database type systems are not always as rich\nas Haskell.  For instance, for data stored in a TIMESTAMP\nWITHOUT TIME ZONE column, HDBC may not be able to tell if it is intended\nas UTCTime or LocalTime data, and will happily convert it to both, \nupon your request.  It is\nyour responsibility to ensure that you treat timezone issues with due care.\n\u003c/p\u003e\u003cp\u003eThis behavior also exists for other types.  For instance, many databases do not\nhave a Rational type, so they will just use the show function and\nstore a Rational as a string.\n\u003c/p\u003e\u003cp\u003eThe conversion between Haskell types and database types is complex,\nand generic code in HDBC or its backends cannot possibly accomodate\nevery possible situation.  In some cases, you may be best served by converting your\nHaskell type to a String, and passing that to the database.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUNICODE AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBeginning with HDBC v2.0, interactions with a database are presumed to occur in UTF-8.\n\u003c/p\u003e\u003cp\u003eTo accomplish this, whenever a ByteString must be converted to or from a String,\nthe ByteString is assumed to be in UTF-8 encoding, and will be decoded or encoded\nas appropriate.  Database drivers will generally present text or string data they have\nreceived from the database as a SqlValue holding a ByteString, which \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will\nautomatically convert to a String, and thus automatically decode UTF-8, when\nyou need it.  In the other direction, database drivers will generally convert\na \u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e to a ByteString in UTF-8 encoding before passing it to the\ndatabase engine.\n\u003c/p\u003e\u003cp\u003eIf you are handling some sort of binary data that is not in UTF-8, you can of course\nwork with the ByteString directly, which will bypass any conversion.\n\u003c/p\u003e\u003cp\u003eDue to lack of support by database engines, lazy ByteStrings are not passed to database\ndrivers.  When you use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e on a lazy ByteString, it will be converted to a strict\nByteString for storage.  Similarly, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will convert a strict ByteString to\na lazy ByteString if you demand it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a string, are equal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSTRING VERSIONS OF TIMES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eDefault string representations are given as comments below where such are non-obvious.\nThese are used for \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e when a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is desired.  They are also defaults for\nrepresenting data to SQL backends, though individual backends may override them\nwhen a different format is demanded by the underlying database.  Date and time formats\nuse ISO8601 date format, with HH:MM:SS added for time, and -HHMM added for timezone\noffsets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDEPRECATED CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlEpochTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSqlTimeDiff\u003c/a\u003e\u003c/code\u003e are no longer created automatically by any\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e functions or database backends.  They may still be manually\nconstructed, but are\nexpected to be removed in a future version.  Although these two constructures will\nbe removed, support for marshalling to and from the old System.Time data will be\nmaintained as long as System.Time is, simply using the newer data types for conversion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "data",
        "title": "SqlValue"
      },
      "index": {
        "description": "SqlValue is he main type for expressing Haskell values to SQL databases INTRODUCTION TO SQLVALUE This type is used to marshall Haskell data to and from database APIs HDBC driver interfaces will do their best to use the most accurate and efficient way to send particular value to the database server Values read back from the server are constructed with the most appropriate SqlValue constructor fromSql or safeFromSql can then be used to convert them into whatever type is needed locally in Haskell Most people will use toSql and fromSql instead of manipulating SqlValue directly EASY CONVERSIONS BETWEEN HASKELL TYPES Conversions are powerful for instance you can call fromSql on SqlInt32 and get String or Double out of it This class attempts to Do The Right Thing whenever possible and will raise an error when asked to do something incorrect In particular when converting to any type except Maybe SqlNull as the input will cause an error to be raised Conversions are implemented in terms of the Data.Convertible module part of the convertible package You can refer to its documentation and import that module if you wish to parse the Left result from safeFromSql yourself or write your own conversion instances Here are some notes about conversion Fractions of second are not preserved on time values There is no safeToSql because toSql never fails See also toSql safeFromSql fromSql nToSql iToSql posixToSql ERROR CONDITIONS There may sometimes be an error during conversion For instance if you have SqlString and are attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception if using fromSql or Left result if using safeFromSql SPECIAL NOTE ON POSIXTIME Note that NominalDiffTime or POSIXTime is converted to SqlDiffTime by toSql HDBC cannot differentiate between NominalDiffTime and POSIXTime since they are the same underlying type You must construct SqlPOSIXTime manually or via posixToSql or use SqlUTCTime DETAILS ON SQL TYPES HDBC database backends are expected to marshal date and time data back and forth using the appropriate representation for the underlying database engine Databases such as PostgreSQL with builtin date and time types should see automatic conversion between these Haskell types to database types Other databases will be presented with an integer or string Care should be taken to use the same type on the Haskell side as you use on the database side For instance if your database type lacks timezone information you ought not to use ZonedTime but instead LocalTime or UTCTime Database type systems are not always as rich as Haskell For instance for data stored in TIMESTAMP WITHOUT TIME ZONE column HDBC may not be able to tell if it is intended as UTCTime or LocalTime data and will happily convert it to both upon your request It is your responsibility to ensure that you treat timezone issues with due care This behavior also exists for other types For instance many databases do not have Rational type so they will just use the show function and store Rational as string The conversion between Haskell types and database types is complex and generic code in HDBC or its backends cannot possibly accomodate every possible situation In some cases you may be best served by converting your Haskell type to String and passing that to the database UNICODE AND BYTESTRINGS Beginning with HDBC v2.0 interactions with database are presumed to occur in UTF-8 To accomplish this whenever ByteString must be converted to or from String the ByteString is assumed to be in UTF-8 encoding and will be decoded or encoded as appropriate Database drivers will generally present text or string data they have received from the database as SqlValue holding ByteString which fromSql will automatically convert to String and thus automatically decode UTF-8 when you need it In the other direction database drivers will generally convert SqlString to ByteString in UTF-8 encoding before passing it to the database engine If you are handling some sort of binary data that is not in UTF-8 you can of course work with the ByteString directly which will bypass any conversion Due to lack of support by database engines lazy ByteStrings are not passed to database drivers When you use toSql on lazy ByteString it will be converted to strict ByteString for storage Similarly fromSql will convert strict ByteString to lazy ByteString if you demand it EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to string are equal STRING VERSIONS OF TIMES Default string representations are given as comments below where such are non-obvious These are used for fromSql when String is desired They are also defaults for representing data to SQL backends though individual backends may override them when different format is demanded by the underlying database Date and time formats use ISO8601 date format with HH MM SS added for time and HHMM added for timezone offsets DEPRECATED CONSTRUCTORS SqlEpochTime and SqlTimeDiff are no longer created automatically by any toSql or fromSql functions or database backends They may still be manually constructed but are expected to be removed in future version Although these two constructures will be removed support for marshalling to and from the old System.Time data will be maintained as long as System.Time is simply using the newer data types for conversion",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlValue",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#t:Statement",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlBool",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlBool Bool",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlBool",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlByteString",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlByteString ByteString",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlByteString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlChar Char",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlChar",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003eCalendar diff between seconds.  Rendered as Integer when converted to String, but greater precision may be preserved for other types or to underlying database.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlDiffTime NominalDiffTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDiffTime"
      },
      "index": {
        "description": "Calendar diff between seconds Rendered as Integer when converted to String but greater precision may be preserved for other types or to underlying database",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlDiffTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Diff Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlDouble Double",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlDouble",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlEpochTime",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of ClockTime or CalendarTime.  Use SqlPOSIXTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlEpochTime Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlEpochTime"
      },
      "index": {
        "description": "DEPRECATED Representation of ClockTime or CalendarTime Use SqlPOSIXTime instead",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlEpochTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Epoch Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlError",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlInt32",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt32 Int32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlInt32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlInt64",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt64 Int64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlInt64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlInteger Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlInteger",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlLocalDate",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalDate Day",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalDate"
      },
      "index": {
        "description": "Local YYYY-MM-DD no timezone",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlLocalDate",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTime LocalTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS no timezone",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlLocalTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTimeOfDay TimeOfDay",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS no timezone",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlNull",
      "description": {
        "fct-descr": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlNull",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlNull"
      },
      "index": {
        "description": "NULL in SQL or Nothing in Haskell",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlNull",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlPOSIXTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime as seconds since midnight Jan 1 1970 UTC.  Integer rendering as for \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlPOSIXTime POSIXTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlPOSIXTime"
      },
      "index": {
        "description": "Time as seconds since midnight Jan UTC Integer rendering as for SqlDiffTime",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlPOSIXTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql POSIXTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlRational",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlRational Rational",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlRational",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlString",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlString String",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlTimeDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of TimeDiff.  Use SqlDiffTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeDiff Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlTimeDiff"
      },
      "index": {
        "description": "DEPRECATED Representation of TimeDiff Use SqlDiffTime instead",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlTimeDiff",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCTime UTCTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUTCTime"
      },
      "index": {
        "description": "UTC YYYY-MM-DD HH MM SS",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlUTCTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlWord32",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord32 Word32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlWord32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlWord64",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord64 Word64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlWord64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlZonedLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS -HHMM.  Converts to and from (TimeOfDay, TimeZone).\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedLocalTimeOfDay TimeOfDay TimeZone",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS HHMM Converts to and from TimeOfDay TimeZone",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlZonedLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:SqlZonedTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS -HHMM.  Considered equal if both convert to the same UTC time.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedTime ZonedTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS HHMM Considered equal if both convert to the same UTC time",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "SqlZonedTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:Statement",
      "description": {
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "Statement",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:describeResult",
      "description": {
        "fct-descr": "\u003cp\u003eObtain information about the columns in the result set.\n          Must be run only after \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.  The String in the result\n          set is the column name.\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n          as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n          before you see them.\n\u003c/p\u003e\u003cp\u003ePlease see caveats under \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e for information\n          on the column name field here.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "IO [(String, SqlColDesc)]",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "describeResult"
      },
      "index": {
        "description": "Obtain information about the columns in the result set Must be run only after execute The String in the result set is the column name You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them Please see caveats under getColumnNames for information on the column name field here",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "describeResult",
        "normalized": "IO[(String,SqlColDesc)]",
        "package": "HDBC",
        "partial": "Result",
        "signature": "IO[(String,SqlColDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the prepared statement, passing in the given positional\n        parameters (that should take the place of the question marks\n        in the call to \u003ccode\u003eprepare\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor non-SELECT queries, the return value is the number of\n        rows modified, if known.  If no rows were modified, you get 0.\n        If the value is unknown, you get -1.  All current HDBC drivers\n        support this function and should never return -1.\n\u003c/p\u003e\u003cp\u003eFor SELECT queries, you will always get 0.\n\u003c/p\u003e\u003cp\u003eThis function should automatically call finish() to finish the previous\n        execution, if necessary.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "[SqlValue] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute the prepared statement passing in the given positional parameters that should take the place of the question marks in the call to prepare For non-SELECT queries the return value is the number of rows modified if known If no rows were modified you get If the value is unknown you get All current HDBC drivers support this function and should never return For SELECT queries you will always get This function should automatically call finish to finish the previous execution if necessary",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "execute",
        "normalized": "[SqlValue]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "",
        "signature": "[SqlValue]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the query with many rows. \n        The return value is the return value from the final row \n        as if you had called \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e\u003cp\u003eDue to optimizations that are possible due to different\n        databases and driver designs, this can often be significantly\n        faster than using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e multiple times since queries\n        need to be compiled only once.\n\u003c/p\u003e\u003cp\u003eThis is most useful for non-SELECT statements. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "[[SqlValue]] -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute the query with many rows The return value is the return value from the final row as if you had called execute on it Due to optimizations that are possible due to different databases and driver designs this can often be significantly faster than using execute multiple times since queries need to be compiled only once This is most useful for non-SELECT statements",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "executeMany",
        "normalized": "[[SqlValue]]-\u003eIO()",
        "package": "HDBC",
        "partial": "Many",
        "signature": "[[SqlValue]]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the statement as-is, without supplying any\n        positional parameters.  This is intended for statements for\n        which the results aren't interesting or present (e.g., DDL or\n        DML commands).  If your query contains placeholders, this will\n        certainly fail; use \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "executeRaw"
      },
      "index": {
        "description": "Execute the statement as-is without supplying any positional parameters This is intended for statements for which the results aren interesting or present e.g DDL or DML commands If your query contains placeholders this will certainly fail use execute instead",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "executeRaw",
        "normalized": "IO()",
        "package": "HDBC",
        "partial": "Raw",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:fetchRow",
      "description": {
        "fct-descr": "\u003cp\u003eFetches one row from the DB.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there\n        are no more rows.  Will automatically call \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e when\n        the last row is read. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "IO (Maybe [SqlValue])",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "fetchRow"
      },
      "index": {
        "description": "Fetches one row from the DB Returns Nothing if there are no more rows Will automatically call finish when the last row is read",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "fetchRow",
        "normalized": "IO(Maybe[SqlValue])",
        "package": "HDBC",
        "partial": "Row",
        "signature": "IO(Maybe[SqlValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:finish",
      "description": {
        "fct-descr": "\u003cp\u003eAbort a query in progress -- usually not needed. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "finish"
      },
      "index": {
        "description": "Abort query in progress usually not needed",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "finish",
        "normalized": "IO()",
        "package": "HDBC",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:fromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Any problem is indicated by\n   calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e a",
        "fct-source": "src/Database-HDBC-SqlValue.html#fromSql",
        "fct-type": "function",
        "title": "fromSql"
      },
      "index": {
        "description": "Convert from an SqlValue to Haskell value Any problem is indicated by calling error This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "fromSql",
        "normalized": "SqlValue-\u003ea",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:getColumnNames",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of the column names in the result.\n        For maximum portability, you should not assume that\n        information is available until after an \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e function\n        has been run.\n\u003c/p\u003e\u003cp\u003eInformation is returned here directly as returned\n        by the underlying database layer.  Note that different\n        databases have different rules about capitalization\n        of return values and about representation of names\n        of columns that are not simple columns.  For this reason,\n        it is suggested that you treat this information for\n        display purposes only.  Failing that, you should convert\n        to lower (or upper) case, and use \u003ccode\u003eAS\u003c/code\u003e clauses for\n        anything other than simple columns.\n\u003c/p\u003e\u003cp\u003eA simple getColumnNames implementation could simply\n        apply \u003ccode\u003emap fst\u003c/code\u003e to the return value of \u003ccode\u003e\u003ca\u003edescribeResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "IO [String]",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "getColumnNames"
      },
      "index": {
        "description": "Returns list of the column names in the result For maximum portability you should not assume that information is available until after an execute function has been run Information is returned here directly as returned by the underlying database layer Note that different databases have different rules about capitalization of return values and about representation of names of columns that are not simple columns For this reason it is suggested that you treat this information for display purposes only Failing that you should convert to lower or upper case and use AS clauses for anything other than simple columns simple getColumnNames implementation could simply apply map fst to the return value of describeResult",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "getColumnNames",
        "normalized": "IO[String]",
        "package": "HDBC",
        "partial": "Column Names",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:iToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for using numeric literals in your program. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "Int -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#iToSql",
        "fct-type": "function",
        "title": "iToSql"
      },
      "index": {
        "description": "Convenience function for using numeric literals in your program",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "iToSql",
        "normalized": "Int-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "Int-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:nToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any Integral type to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e by using toInteger. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#nToSql",
        "fct-type": "function",
        "title": "nToSql"
      },
      "index": {
        "description": "Converts any Integral type to SqlValue by using toInteger",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "nToSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:originalQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe original query that this \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e was prepared\n          with. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "originalQuery"
      },
      "index": {
        "description": "The original query that this Statement was prepared with",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "originalQuery",
        "normalized": "",
        "package": "HDBC",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:posixToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for converting \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e, because\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e cannot do the correct thing in this instance. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "POSIXTime -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#posixToSql",
        "fct-type": "function",
        "title": "posixToSql"
      },
      "index": {
        "description": "Convenience function for converting POSIXTime to SqlValue because toSql cannot do the correct thing in this instance",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "posixToSql",
        "normalized": "POSIXTime-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "POSIXTime-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:safeFromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConversions to and from \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es and standard Haskell types.\n\u003c/p\u003e\u003cp\u003eThis function converts from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Many people will use the simpler\n   \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e ConvertResult a",
        "fct-source": "src/Database-HDBC-SqlValue.html#safeFromSql",
        "fct-type": "function",
        "title": "safeFromSql"
      },
      "index": {
        "description": "Conversions to and from SqlValue and standard Haskell types This function converts from an SqlValue to Haskell value Many people will use the simpler fromSql instead This function is simply restricted-type wrapper around safeConvert",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "safeFromSql",
        "normalized": "SqlValue-\u003eConvertResult a",
        "package": "HDBC",
        "partial": "From Sql",
        "signature": "SqlValue-\u003eConvertResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "HDBC",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "seNativeError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "seState",
        "normalized": "",
        "package": "HDBC",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Statement.html#v:toSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e.  This function is simply\na restricted-type wrapper around \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Statement",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#toSql",
        "fct-type": "function",
        "title": "toSql"
      },
      "index": {
        "description": "Convert value to an SqlValue This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC Statement",
        "module": "Database.HDBC.Statement",
        "name": "toSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for HDBC.\n\u003c/p\u003e\u003cp\u003ePlease note: this module is intended for authors of database driver libraries\nonly.  Authors of applications using HDBC should use \u003ccode\u003e\u003ca\u003eHDBC\u003c/a\u003e\u003c/code\u003e\nexclusively.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for HDBC Please note this module is intended for authors of database driver libraries only Authors of applications using HDBC should use HDBC exclusively Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "Types",
        "normalized": "",
        "package": "HDBC",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#t:ConnWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes, it is annoying to use typeclasses with Haskell's type system.\nIn those situations, you can use a ConnWrapper.  You can create one with:\n\u003c/p\u003e\u003cpre\u003elet wrapped = ConnWrapper iconn\n\u003c/pre\u003e\u003cp\u003eYou can then use this directly, since a ConnWrapper is also an\n\u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e.  However, you will not be able to use private database\nfunctions on it.\n\u003c/p\u003e\u003cp\u003eOr, you can use \u003ccode\u003e\u003ca\u003ewithWConn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Types.html#ConnWrapper",
        "fct-type": "data",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "Sometimes it is annoying to use typeclasses with Haskell type system In those situations you can use ConnWrapper You can create one with let wrapped ConnWrapper iconn You can then use this directly since ConnWrapper is also an IConnection However you will not be able to use private database functions on it Or you can use withWConn",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "HDBC",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#t:IConnection",
      "description": {
        "fct-descr": "\u003cp\u003eMain database handle object.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e object is created by specific functions in the module for an\nindividual database.  That is, the connect function -- which creates\nthis object -- is not standardized through the HDBC interface.\n\u003c/p\u003e\u003cp\u003eA connection is closed by a call to \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA call to \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e is required to make sure that your changes get committed\nto the database.  In other words, HDBC has \u003cem\u003eno support for autocommit\u003c/em\u003e, which\nwe consider an outdated notion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBC-Types.html#IConnection",
        "fct-type": "class",
        "title": "IConnection"
      },
      "index": {
        "description": "Main database handle object An IConnection object is created by specific functions in the module for an individual database That is the connect function which creates this object is not standardized through the HDBC interface connection is closed by call to disconnect call to commit is required to make sure that your changes get committed to the database In other words HDBC has no support for autocommit which we consider an outdated notion",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "IConnection",
        "normalized": "",
        "package": "HDBC",
        "partial": "IConnection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#t:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003eThe main HDBC exception object.  As much information as possible\nis passed from the database through to the application through this object.\n\u003c/p\u003e\u003cp\u003eErrors generated in the Haskell layer will have seNativeError set to -1.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "The main HDBC exception object As much information as possible is passed from the database through to the application through this object Errors generated in the Haskell layer will have seNativeError set to",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#t:SqlValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is he main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eINTRODUCTION TO SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis type is used to marshall Haskell data to and from database APIs.\nHDBC driver interfaces will do their best to use the most accurate and\nefficient way to send a particular value to the database server.\n\u003c/p\u003e\u003cp\u003eValues read back from the server are constructed with the most appropriate \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e\nconstructor.  \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e \ncan then be used to convert them into whatever type\nis needed locally in Haskell.\n\u003c/p\u003e\u003cp\u003eMost people will use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead of manipulating\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEASY CONVERSIONS BETWEEN HASKELL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eConversions are powerful; for instance, you can call \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e on a SqlInt32\nand get a String or a Double out of it.  This class attempts to Do\nThe Right Thing whenever possible, and will raise an error when asked to\ndo something incorrect.  In particular, when converting to any type\nexcept a Maybe, \u003ccode\u003e\u003ca\u003eSqlNull\u003c/a\u003e\u003c/code\u003e as the input will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eConversions are implemented in terms of the \u003ca\u003eData.Convertible\u003c/a\u003e module, part of the\nconvertible package.  You can refer to its documentation, and import that module,\nif you wish to parse the Left result from \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e yourself, or write your\nown conversion instances.\n\u003c/p\u003e\u003cp\u003eHere are some notes about conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fractions of a second are not preserved on time values\n\u003c/li\u003e\u003cli\u003e There is no \u003ccode\u003esafeToSql\u003c/code\u003e because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eiToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may sometimes be an error during conversion.  For instance, if you have a\n\u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e and are attempting to convert it to an Integer, but it doesn't parse as\nan Integer, you will get an error.  This will be indicated as an exception if using\n\u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result if using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSPECIAL NOTE ON POSIXTIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e is converted to \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e by\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e.  HDBC cannot differentiate between \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e\nsince they are the same underlying type.  You must construct \u003ccode\u003e\u003ca\u003eSqlPOSIXTime\u003c/a\u003e\u003c/code\u003e\nmanually or via \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ca\u003eSqlUTCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDETAILS ON SQL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHDBC database backends are expected to marshal date and time data back and\nforth using the appropriate representation for the underlying database engine.\nDatabases such as PostgreSQL with builtin date and time types should see automatic\nconversion between these Haskell types to database types.  Other databases will be\npresented with an integer or a string.  Care should be taken to use the same type on\nthe Haskell side as you use on the database side.  For instance, if your database\ntype lacks timezone information, you ought not to use ZonedTime, but\ninstead LocalTime or UTCTime.  Database type systems are not always as rich\nas Haskell.  For instance, for data stored in a TIMESTAMP\nWITHOUT TIME ZONE column, HDBC may not be able to tell if it is intended\nas UTCTime or LocalTime data, and will happily convert it to both, \nupon your request.  It is\nyour responsibility to ensure that you treat timezone issues with due care.\n\u003c/p\u003e\u003cp\u003eThis behavior also exists for other types.  For instance, many databases do not\nhave a Rational type, so they will just use the show function and\nstore a Rational as a string.\n\u003c/p\u003e\u003cp\u003eThe conversion between Haskell types and database types is complex,\nand generic code in HDBC or its backends cannot possibly accomodate\nevery possible situation.  In some cases, you may be best served by converting your\nHaskell type to a String, and passing that to the database.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUNICODE AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBeginning with HDBC v2.0, interactions with a database are presumed to occur in UTF-8.\n\u003c/p\u003e\u003cp\u003eTo accomplish this, whenever a ByteString must be converted to or from a String,\nthe ByteString is assumed to be in UTF-8 encoding, and will be decoded or encoded\nas appropriate.  Database drivers will generally present text or string data they have\nreceived from the database as a SqlValue holding a ByteString, which \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will\nautomatically convert to a String, and thus automatically decode UTF-8, when\nyou need it.  In the other direction, database drivers will generally convert\na \u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e to a ByteString in UTF-8 encoding before passing it to the\ndatabase engine.\n\u003c/p\u003e\u003cp\u003eIf you are handling some sort of binary data that is not in UTF-8, you can of course\nwork with the ByteString directly, which will bypass any conversion.\n\u003c/p\u003e\u003cp\u003eDue to lack of support by database engines, lazy ByteStrings are not passed to database\ndrivers.  When you use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e on a lazy ByteString, it will be converted to a strict\nByteString for storage.  Similarly, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will convert a strict ByteString to\na lazy ByteString if you demand it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a string, are equal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSTRING VERSIONS OF TIMES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eDefault string representations are given as comments below where such are non-obvious.\nThese are used for \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e when a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is desired.  They are also defaults for\nrepresenting data to SQL backends, though individual backends may override them\nwhen a different format is demanded by the underlying database.  Date and time formats\nuse ISO8601 date format, with HH:MM:SS added for time, and -HHMM added for timezone\noffsets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDEPRECATED CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlEpochTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSqlTimeDiff\u003c/a\u003e\u003c/code\u003e are no longer created automatically by any\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e functions or database backends.  They may still be manually\nconstructed, but are\nexpected to be removed in a future version.  Although these two constructures will\nbe removed, support for marshalling to and from the old System.Time data will be\nmaintained as long as System.Time is, simply using the newer data types for conversion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "data",
        "title": "SqlValue"
      },
      "index": {
        "description": "SqlValue is he main type for expressing Haskell values to SQL databases INTRODUCTION TO SQLVALUE This type is used to marshall Haskell data to and from database APIs HDBC driver interfaces will do their best to use the most accurate and efficient way to send particular value to the database server Values read back from the server are constructed with the most appropriate SqlValue constructor fromSql or safeFromSql can then be used to convert them into whatever type is needed locally in Haskell Most people will use toSql and fromSql instead of manipulating SqlValue directly EASY CONVERSIONS BETWEEN HASKELL TYPES Conversions are powerful for instance you can call fromSql on SqlInt32 and get String or Double out of it This class attempts to Do The Right Thing whenever possible and will raise an error when asked to do something incorrect In particular when converting to any type except Maybe SqlNull as the input will cause an error to be raised Conversions are implemented in terms of the Data.Convertible module part of the convertible package You can refer to its documentation and import that module if you wish to parse the Left result from safeFromSql yourself or write your own conversion instances Here are some notes about conversion Fractions of second are not preserved on time values There is no safeToSql because toSql never fails See also toSql safeFromSql fromSql nToSql iToSql posixToSql ERROR CONDITIONS There may sometimes be an error during conversion For instance if you have SqlString and are attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception if using fromSql or Left result if using safeFromSql SPECIAL NOTE ON POSIXTIME Note that NominalDiffTime or POSIXTime is converted to SqlDiffTime by toSql HDBC cannot differentiate between NominalDiffTime and POSIXTime since they are the same underlying type You must construct SqlPOSIXTime manually or via posixToSql or use SqlUTCTime DETAILS ON SQL TYPES HDBC database backends are expected to marshal date and time data back and forth using the appropriate representation for the underlying database engine Databases such as PostgreSQL with builtin date and time types should see automatic conversion between these Haskell types to database types Other databases will be presented with an integer or string Care should be taken to use the same type on the Haskell side as you use on the database side For instance if your database type lacks timezone information you ought not to use ZonedTime but instead LocalTime or UTCTime Database type systems are not always as rich as Haskell For instance for data stored in TIMESTAMP WITHOUT TIME ZONE column HDBC may not be able to tell if it is intended as UTCTime or LocalTime data and will happily convert it to both upon your request It is your responsibility to ensure that you treat timezone issues with due care This behavior also exists for other types For instance many databases do not have Rational type so they will just use the show function and store Rational as string The conversion between Haskell types and database types is complex and generic code in HDBC or its backends cannot possibly accomodate every possible situation In some cases you may be best served by converting your Haskell type to String and passing that to the database UNICODE AND BYTESTRINGS Beginning with HDBC v2.0 interactions with database are presumed to occur in UTF-8 To accomplish this whenever ByteString must be converted to or from String the ByteString is assumed to be in UTF-8 encoding and will be decoded or encoded as appropriate Database drivers will generally present text or string data they have received from the database as SqlValue holding ByteString which fromSql will automatically convert to String and thus automatically decode UTF-8 when you need it In the other direction database drivers will generally convert SqlString to ByteString in UTF-8 encoding before passing it to the database engine If you are handling some sort of binary data that is not in UTF-8 you can of course work with the ByteString directly which will bypass any conversion Due to lack of support by database engines lazy ByteStrings are not passed to database drivers When you use toSql on lazy ByteString it will be converted to strict ByteString for storage Similarly fromSql will convert strict ByteString to lazy ByteString if you demand it EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to string are equal STRING VERSIONS OF TIMES Default string representations are given as comments below where such are non-obvious These are used for fromSql when String is desired They are also defaults for representing data to SQL backends though individual backends may override them when different format is demanded by the underlying database Date and time formats use ISO8601 date format with HH MM SS added for time and HHMM added for timezone offsets DEPRECATED CONSTRUCTORS SqlEpochTime and SqlTimeDiff are no longer created automatically by any toSql or fromSql functions or database backends They may still be manually constructed but are expected to be removed in future version Although these two constructures will be removed support for marshalling to and from the old System.Time data will be maintained as long as System.Time is simply using the newer data types for conversion",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlValue",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#t:Statement",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:ConnWrapper",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "ConnWrapper conn",
        "fct-source": "src/Database-HDBC-Types.html#ConnWrapper",
        "fct-type": "function",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "HDBC",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlBool",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlBool Bool",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlBool",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlByteString",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlByteString ByteString",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlByteString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlChar Char",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlChar",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003eCalendar diff between seconds.  Rendered as Integer when converted to String, but greater precision may be preserved for other types or to underlying database.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlDiffTime NominalDiffTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDiffTime"
      },
      "index": {
        "description": "Calendar diff between seconds Rendered as Integer when converted to String but greater precision may be preserved for other types or to underlying database",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlDiffTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Diff Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlDouble Double",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlDouble",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlEpochTime",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of ClockTime or CalendarTime.  Use SqlPOSIXTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlEpochTime Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlEpochTime"
      },
      "index": {
        "description": "DEPRECATED Representation of ClockTime or CalendarTime Use SqlPOSIXTime instead",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlEpochTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Epoch Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlError",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlInt32",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt32 Int32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlInt32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlInt64",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt64 Int64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlInt64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlInteger Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlInteger",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlLocalDate",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalDate Day",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalDate"
      },
      "index": {
        "description": "Local YYYY-MM-DD no timezone",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlLocalDate",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTime LocalTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS no timezone",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlLocalTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTimeOfDay TimeOfDay",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS no timezone",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlNull",
      "description": {
        "fct-descr": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlNull",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlNull"
      },
      "index": {
        "description": "NULL in SQL or Nothing in Haskell",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlNull",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlPOSIXTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime as seconds since midnight Jan 1 1970 UTC.  Integer rendering as for \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlPOSIXTime POSIXTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlPOSIXTime"
      },
      "index": {
        "description": "Time as seconds since midnight Jan UTC Integer rendering as for SqlDiffTime",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlPOSIXTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql POSIXTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlRational",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlRational Rational",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlRational",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlString",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlString String",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlTimeDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of TimeDiff.  Use SqlDiffTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeDiff Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlTimeDiff"
      },
      "index": {
        "description": "DEPRECATED Representation of TimeDiff Use SqlDiffTime instead",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlTimeDiff",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCTime UTCTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUTCTime"
      },
      "index": {
        "description": "UTC YYYY-MM-DD HH MM SS",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlUTCTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlWord32",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord32 Word32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlWord32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlWord64",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord64 Word64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlWord64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlZonedLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS -HHMM.  Converts to and from (TimeOfDay, TimeZone).\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedLocalTimeOfDay TimeOfDay TimeZone",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS HHMM Converts to and from TimeOfDay TimeZone",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlZonedLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:SqlZonedTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS -HHMM.  Considered equal if both convert to the same UTC time.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedTime ZonedTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS HHMM Considered equal if both convert to the same UTC time",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "SqlZonedTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:Statement",
      "description": {
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "Statement",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:clone",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003eConnection\u003c/code\u003e object, pointed at the same\n                   server as this object is.  This will generally establish\n                   a separate physical connection.\n\u003c/p\u003e\u003cp\u003eWhen you wish to establish multiple connections to a single\n                   server, the correct way to do so is to establish the\n                   first connection with the driver-specific connection\n                   function, and then clone it for each additional connection.\n\u003c/p\u003e\u003cp\u003eThis can be important when a database doesn't provide\n                   much thread support itself, and the HDBC driver module\n                   must serialize access to a particular database.\n\u003c/p\u003e\u003cp\u003eThis can also be a handy utility function whenever you\n                   need a separate connection to whatever database you are\n                   connected to already. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO conn",
        "fct-source": "src/Database-HDBC-Types.html#clone",
        "fct-type": "method",
        "title": "clone"
      },
      "index": {
        "description": "Create new Connection object pointed at the same server as this object is This will generally establish separate physical connection When you wish to establish multiple connections to single server the correct way to do so is to establish the first connection with the driver-specific connection function and then clone it for each additional connection This can be important when database doesn provide much thread support itself and the HDBC driver module must serialize access to particular database This can also be handy utility function whenever you need separate connection to whatever database you are connected to already",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "clone",
        "normalized": "a-\u003eIO a",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO conn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit any pending data to the database.\n\u003c/p\u003e\u003cp\u003eRequired to make any changes take effect. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#commit",
        "fct-type": "method",
        "title": "commit"
      },
      "index": {
        "description": "Commit any pending data to the database Required to make any changes take effect",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "commit",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:dbServerVer",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the database server, if available. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#dbServerVer",
        "fct-type": "method",
        "title": "dbServerVer"
      },
      "index": {
        "description": "The version of the database server if available",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "dbServerVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Server Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:dbTransactionSupport",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the current database supports transactions.\n                   If False, then \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e should be expected\n                   to raise errors.\n\u003c/p\u003e\u003cp\u003eMySQL is the only commonly-used database that is known\n                   to not support transactions entirely.  Please see\n                   the MySQL notes in the ODBC driver for more information. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e Bool",
        "fct-source": "src/Database-HDBC-Types.html#dbTransactionSupport",
        "fct-type": "method",
        "title": "dbTransactionSupport"
      },
      "index": {
        "description": "Whether or not the current database supports transactions If False then commit and rollback should be expected to raise errors MySQL is the only commonly-used database that is known to not support transactions entirely Please see the MySQL notes in the ODBC driver for more information",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "dbTransactionSupport",
        "normalized": "a-\u003eBool",
        "package": "HDBC",
        "partial": "Transaction Support",
        "signature": "conn-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:describeResult",
      "description": {
        "fct-descr": "\u003cp\u003eObtain information about the columns in the result set.\n          Must be run only after \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.  The String in the result\n          set is the column name.\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n          as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n          before you see them.\n\u003c/p\u003e\u003cp\u003ePlease see caveats under \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e for information\n          on the column name field here.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "IO [(String, SqlColDesc)]",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "describeResult"
      },
      "index": {
        "description": "Obtain information about the columns in the result set Must be run only after execute The String in the result set is the column name You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them Please see caveats under getColumnNames for information on the column name field here",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "describeResult",
        "normalized": "IO[(String,SqlColDesc)]",
        "package": "HDBC",
        "partial": "Result",
        "signature": "IO[(String,SqlColDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:describeTable",
      "description": {
        "fct-descr": "\u003cp\u003eObtain information about the columns in a specific\n                   table.  The String in the result\n                   set is the column name.\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n                   as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n                   before you see them.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO [(String, SqlColDesc)]",
        "fct-source": "src/Database-HDBC-Types.html#describeTable",
        "fct-type": "method",
        "title": "describeTable"
      },
      "index": {
        "description": "Obtain information about the columns in specific table The String in the result set is the column name You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "describeTable",
        "normalized": "a-\u003eString-\u003eIO[(String,SqlColDesc)]",
        "package": "HDBC",
        "partial": "Table",
        "signature": "conn-\u003eString-\u003eIO[(String,SqlColDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnect from the remote database.\n\u003c/p\u003e\u003cp\u003eYou do not need to explicitly close an IConnection object, but you may do so if\nyou so desire.  If you don't, the object will disconnect from the database\nin a sane way when it is garbage-collected.  However, a disconnection may\nraise an error, so you are encouraged to explicitly call \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e.  Also,\ngarbage collection may not run when the program terminates, and some databases\nreally like an explicit disconnect.\n\u003c/p\u003e\u003cp\u003eSo, bottom line is, you're best off calling \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e directly, but the\nworld won't end if you forget.\n\u003c/p\u003e\u003cp\u003eThis function discards any data not committed already.  Database driver\nimplementators should explicitly call \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e if their databases don't\ndo this automatically on disconnect.\n\u003c/p\u003e\u003cp\u003eBad Things (TM) could happen if you call this while you have \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003es \nactive.  In more precise language, the results in such situations are undefined\nand vary by database.  So don't do it.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#disconnect",
        "fct-type": "method",
        "title": "disconnect"
      },
      "index": {
        "description": "Disconnect from the remote database You do not need to explicitly close an IConnection object but you may do so if you so desire If you don the object will disconnect from the database in sane way when it is garbage-collected However disconnection may raise an error so you are encouraged to explicitly call disconnect Also garbage collection may not run when the program terminates and some databases really like an explicit disconnect So bottom line is you re best off calling disconnect directly but the world won end if you forget This function discards any data not committed already Database driver implementators should explicitly call rollback if their databases don do this automatically on disconnect Bad Things TM could happen if you call this while you have Statement active In more precise language the results in such situations are undefined and vary by database So don do it",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "disconnect",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the prepared statement, passing in the given positional\n        parameters (that should take the place of the question marks\n        in the call to \u003ccode\u003eprepare\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor non-SELECT queries, the return value is the number of\n        rows modified, if known.  If no rows were modified, you get 0.\n        If the value is unknown, you get -1.  All current HDBC drivers\n        support this function and should never return -1.\n\u003c/p\u003e\u003cp\u003eFor SELECT queries, you will always get 0.\n\u003c/p\u003e\u003cp\u003eThis function should automatically call finish() to finish the previous\n        execution, if necessary.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "[SqlValue] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute the prepared statement passing in the given positional parameters that should take the place of the question marks in the call to prepare For non-SELECT queries the return value is the number of rows modified if known If no rows were modified you get If the value is unknown you get All current HDBC drivers support this function and should never return For SELECT queries you will always get This function should automatically call finish to finish the previous execution if necessary",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "execute",
        "normalized": "[SqlValue]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "",
        "signature": "[SqlValue]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the query with many rows. \n        The return value is the return value from the final row \n        as if you had called \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e\u003cp\u003eDue to optimizations that are possible due to different\n        databases and driver designs, this can often be significantly\n        faster than using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e multiple times since queries\n        need to be compiled only once.\n\u003c/p\u003e\u003cp\u003eThis is most useful for non-SELECT statements. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "[[SqlValue]] -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute the query with many rows The return value is the return value from the final row as if you had called execute on it Due to optimizations that are possible due to different databases and driver designs this can often be significantly faster than using execute multiple times since queries need to be compiled only once This is most useful for non-SELECT statements",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "executeMany",
        "normalized": "[[SqlValue]]-\u003eIO()",
        "package": "HDBC",
        "partial": "Many",
        "signature": "[[SqlValue]]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the statement as-is, without supplying any\n        positional parameters.  This is intended for statements for\n        which the results aren't interesting or present (e.g., DDL or\n        DML commands).  If your query contains placeholders, this will\n        certainly fail; use \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "executeRaw"
      },
      "index": {
        "description": "Execute the statement as-is without supplying any positional parameters This is intended for statements for which the results aren interesting or present e.g DDL or DML commands If your query contains placeholders this will certainly fail use execute instead",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "executeRaw",
        "normalized": "IO()",
        "package": "HDBC",
        "partial": "Raw",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:fetchRow",
      "description": {
        "fct-descr": "\u003cp\u003eFetches one row from the DB.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there\n        are no more rows.  Will automatically call \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e when\n        the last row is read. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "IO (Maybe [SqlValue])",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "fetchRow"
      },
      "index": {
        "description": "Fetches one row from the DB Returns Nothing if there are no more rows Will automatically call finish when the last row is read",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "fetchRow",
        "normalized": "IO(Maybe[SqlValue])",
        "package": "HDBC",
        "partial": "Row",
        "signature": "IO(Maybe[SqlValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:finish",
      "description": {
        "fct-descr": "\u003cp\u003eAbort a query in progress -- usually not needed. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "finish"
      },
      "index": {
        "description": "Abort query in progress usually not needed",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "finish",
        "normalized": "IO()",
        "package": "HDBC",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:fromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Any problem is indicated by\n   calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e a",
        "fct-source": "src/Database-HDBC-SqlValue.html#fromSql",
        "fct-type": "function",
        "title": "fromSql"
      },
      "index": {
        "description": "Convert from an SqlValue to Haskell value Any problem is indicated by calling error This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "fromSql",
        "normalized": "SqlValue-\u003ea",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:getColumnNames",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of the column names in the result.\n        For maximum portability, you should not assume that\n        information is available until after an \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e function\n        has been run.\n\u003c/p\u003e\u003cp\u003eInformation is returned here directly as returned\n        by the underlying database layer.  Note that different\n        databases have different rules about capitalization\n        of return values and about representation of names\n        of columns that are not simple columns.  For this reason,\n        it is suggested that you treat this information for\n        display purposes only.  Failing that, you should convert\n        to lower (or upper) case, and use \u003ccode\u003eAS\u003c/code\u003e clauses for\n        anything other than simple columns.\n\u003c/p\u003e\u003cp\u003eA simple getColumnNames implementation could simply\n        apply \u003ccode\u003emap fst\u003c/code\u003e to the return value of \u003ccode\u003e\u003ca\u003edescribeResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "IO [String]",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "getColumnNames"
      },
      "index": {
        "description": "Returns list of the column names in the result For maximum portability you should not assume that information is available until after an execute function has been run Information is returned here directly as returned by the underlying database layer Note that different databases have different rules about capitalization of return values and about representation of names of columns that are not simple columns For this reason it is suggested that you treat this information for display purposes only Failing that you should convert to lower or upper case and use AS clauses for anything other than simple columns simple getColumnNames implementation could simply apply map fst to the return value of describeResult",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "getColumnNames",
        "normalized": "IO[String]",
        "package": "HDBC",
        "partial": "Column Names",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:getTables",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of all tables accessible by the current\n                   connection, excluding special meta-tables (system tables).\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n                   as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n                   before you see them.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO [String]",
        "fct-source": "src/Database-HDBC-Types.html#getTables",
        "fct-type": "method",
        "title": "getTables"
      },
      "index": {
        "description": "The names of all tables accessible by the current connection excluding special meta-tables system tables You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "getTables",
        "normalized": "a-\u003eIO[String]",
        "package": "HDBC",
        "partial": "Tables",
        "signature": "conn-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:hdbcClientVer",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the C (or whatever) client library\n                   that the HDBC driver module is bound to.  The meaning\n                   of this is driver-specific.  For an ODBC or similar\n                   proxying driver, this should be the version of the\n                   ODBC library, not the eventual DB client driver. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#hdbcClientVer",
        "fct-type": "method",
        "title": "hdbcClientVer"
      },
      "index": {
        "description": "The version of the or whatever client library that the HDBC driver module is bound to The meaning of this is driver-specific For an ODBC or similar proxying driver this should be the version of the ODBC library not the eventual DB client driver",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "hdbcClientVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:hdbcDriverName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the HDBC driver module for this connection.\n                   Ideally would be the same as the database name portion\n                   of the Cabal package name.  For instance, \"sqlite3\"\n                   or \"odbc\".  This is the layer that is bound most\n                   tightly to HDBC. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#hdbcDriverName",
        "fct-type": "method",
        "title": "hdbcDriverName"
      },
      "index": {
        "description": "The name of the HDBC driver module for this connection Ideally would be the same as the database name portion of the Cabal package name For instance sqlite3 or odbc This is the layer that is bound most tightly to HDBC",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "hdbcDriverName",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Driver Name",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:iToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for using numeric literals in your program. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "Int -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#iToSql",
        "fct-type": "function",
        "title": "iToSql"
      },
      "index": {
        "description": "Convenience function for using numeric literals in your program",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "iToSql",
        "normalized": "Int-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "Int-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:nToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any Integral type to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e by using toInteger. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#nToSql",
        "fct-type": "function",
        "title": "nToSql"
      },
      "index": {
        "description": "Converts any Integral type to SqlValue by using toInteger",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "nToSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:originalQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe original query that this \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e was prepared\n          with. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "function",
        "title": "originalQuery"
      },
      "index": {
        "description": "The original query that this Statement was prepared with",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "originalQuery",
        "normalized": "",
        "package": "HDBC",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:posixToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for converting \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e, because\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e cannot do the correct thing in this instance. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "POSIXTime -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#posixToSql",
        "fct-type": "function",
        "title": "posixToSql"
      },
      "index": {
        "description": "Convenience function for converting POSIXTime to SqlValue because toSql cannot do the correct thing in this instance",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "posixToSql",
        "normalized": "POSIXTime-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "POSIXTime-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:prepare",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares a statement for execution. \n\u003c/p\u003e\u003cp\u003eQuestion marks in the statement will be replaced by\n                   positional parameters in a later call to \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePlease note that, depending on the database\n                   and the driver, errors in your SQL may be raised\n                   either here or by \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.  Make sure you\n                   handle exceptions both places if necessary. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO Statement",
        "fct-source": "src/Database-HDBC-Types.html#prepare",
        "fct-type": "method",
        "title": "prepare"
      },
      "index": {
        "description": "Prepares statement for execution Question marks in the statement will be replaced by positional parameters in later call to execute Please note that depending on the database and the driver errors in your SQL may be raised either here or by execute Make sure you handle exceptions both places if necessary",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "prepare",
        "normalized": "a-\u003eString-\u003eIO Statement",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eString-\u003eIO Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:proxiedClientName",
      "description": {
        "fct-descr": "\u003cp\u003eIn the case of a system such as ODBC, the name of\n                   the database client/server in use, if available.\n                   For others,\n                   identical to \u003ccode\u003e\u003ca\u003ehdbcDriverName\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#proxiedClientName",
        "fct-type": "method",
        "title": "proxiedClientName"
      },
      "index": {
        "description": "In the case of system such as ODBC the name of the database client server in use if available For others identical to hdbcDriverName",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "proxiedClientName",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Name",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:proxiedClientVer",
      "description": {
        "fct-descr": "\u003cp\u003eIn the case of a system such as ODBC, the version of\n                   the database client in use, if available.  For others,\n                   identical to \u003ccode\u003e\u003ca\u003ehdbcClientVer\u003c/a\u003e\u003c/code\u003e. This is the next layer\n                   out past the HDBC driver. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#proxiedClientVer",
        "fct-type": "method",
        "title": "proxiedClientVer"
      },
      "index": {
        "description": "In the case of system such as ODBC the version of the database client in use if available For others identical to hdbcClientVer This is the next layer out past the HDBC driver",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "proxiedClientVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back to the state the database was in prior to the\n                   last \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#rollback",
        "fct-type": "method",
        "title": "rollback"
      },
      "index": {
        "description": "Roll back to the state the database was in prior to the last commit or rollback",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "rollback",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a single SQL query.  Returns the number\n                   of rows modified (see \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e for details).\n                   The second parameter is a list\n                   of replacement values, if any. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e [SqlValue] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Types.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "Execute single SQL query Returns the number of rows modified see execute for details The second parameter is list of replacement values if any",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "run",
        "normalized": "a-\u003eString-\u003e[SqlValue]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eString-\u003e[SqlValue]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:runRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an SQL string, which may contain multiple\n                   queries. This is intended for situations where you\n                   need to run DML or DDL queries and aren't\n                   interested in results. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#runRaw",
        "fct-type": "method",
        "title": "runRaw"
      },
      "index": {
        "description": "Execute an SQL string which may contain multiple queries This is intended for situations where you need to run DML or DDL queries and aren interested in results",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "runRaw",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "HDBC",
        "partial": "Raw",
        "signature": "conn-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:safeFromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConversions to and from \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es and standard Haskell types.\n\u003c/p\u003e\u003cp\u003eThis function converts from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Many people will use the simpler\n   \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e ConvertResult a",
        "fct-source": "src/Database-HDBC-SqlValue.html#safeFromSql",
        "fct-type": "function",
        "title": "safeFromSql"
      },
      "index": {
        "description": "Conversions to and from SqlValue and standard Haskell types This function converts from an SqlValue to Haskell value Many people will use the simpler fromSql instead This function is simply restricted-type wrapper around safeConvert",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "safeFromSql",
        "normalized": "SqlValue-\u003eConvertResult a",
        "package": "HDBC",
        "partial": "From Sql",
        "signature": "SqlValue-\u003eConvertResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "HDBC",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "seNativeError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "seState",
        "normalized": "",
        "package": "HDBC",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:toSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e.  This function is simply\na restricted-type wrapper around \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#toSql",
        "fct-type": "function",
        "title": "toSql"
      },
      "index": {
        "description": "Convert value to an SqlValue This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "toSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC-Types.html#v:withWConn",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eConnWrapper\u003c/a\u003e\u003c/code\u003e and pass the embedded \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e to\na function.  Example:\n\u003c/p\u003e\u003cpre\u003ewithWConn wrapped run $ \"SELECT * from foo where bar = 1\" []\n\u003c/pre\u003e",
        "fct-module": "Database.HDBC.Types",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e b) -\u003e b",
        "fct-source": "src/Database-HDBC-Types.html#withWConn",
        "fct-type": "function",
        "title": "withWConn"
      },
      "index": {
        "description": "Unwrap ConnWrapper and pass the embedded IConnection to function Example withWConn wrapped run SELECT from foo where bar",
        "hierarchy": "Database HDBC Types",
        "module": "Database.HDBC.Types",
        "name": "withWConn",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "HDBC",
        "partial": "WConn",
        "signature": "conn-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWelcome to HDBC, the Haskell Database Connectivity library.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBC.html",
        "fct-type": "module",
        "title": "HDBC"
      },
      "index": {
        "description": "Welcome to HDBC the Haskell Database Connectivity library Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "HDBC",
        "normalized": "",
        "package": "HDBC",
        "partial": "HDBC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#t:ConnWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes, it is annoying to use typeclasses with Haskell's type system.\nIn those situations, you can use a ConnWrapper.  You can create one with:\n\u003c/p\u003e\u003cpre\u003elet wrapped = ConnWrapper iconn\n\u003c/pre\u003e\u003cp\u003eYou can then use this directly, since a ConnWrapper is also an\n\u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e.  However, you will not be able to use private database\nfunctions on it.\n\u003c/p\u003e\u003cp\u003eOr, you can use \u003ccode\u003e\u003ca\u003ewithWConn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Types.html#ConnWrapper",
        "fct-type": "data",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "Sometimes it is annoying to use typeclasses with Haskell type system In those situations you can use ConnWrapper You can create one with let wrapped ConnWrapper iconn You can then use this directly since ConnWrapper is also an IConnection However you will not be able to use private database functions on it Or you can use withWConn",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "HDBC",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#t:IConnection",
      "description": {
        "fct-descr": "\u003cp\u003eMain database handle object.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e object is created by specific functions in the module for an\nindividual database.  That is, the connect function -- which creates\nthis object -- is not standardized through the HDBC interface.\n\u003c/p\u003e\u003cp\u003eA connection is closed by a call to \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA call to \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e is required to make sure that your changes get committed\nto the database.  In other words, HDBC has \u003cem\u003eno support for autocommit\u003c/em\u003e, which\nwe consider an outdated notion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBC-Types.html#IConnection",
        "fct-type": "class",
        "title": "IConnection"
      },
      "index": {
        "description": "Main database handle object An IConnection object is created by specific functions in the module for an individual database That is the connect function which creates this object is not standardized through the HDBC interface connection is closed by call to disconnect call to commit is required to make sure that your changes get committed to the database In other words HDBC has no support for autocommit which we consider an outdated notion",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "IConnection",
        "normalized": "",
        "package": "HDBC",
        "partial": "IConnection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#t:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003eThe main HDBC exception object.  As much information as possible\nis passed from the database through to the application through this object.\n\u003c/p\u003e\u003cp\u003eErrors generated in the Haskell layer will have seNativeError set to -1.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "The main HDBC exception object As much information as possible is passed from the database through to the application through this object Errors generated in the Haskell layer will have seNativeError set to",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#t:SqlValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is he main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eINTRODUCTION TO SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThis type is used to marshall Haskell data to and from database APIs.\nHDBC driver interfaces will do their best to use the most accurate and\nefficient way to send a particular value to the database server.\n\u003c/p\u003e\u003cp\u003eValues read back from the server are constructed with the most appropriate \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e\nconstructor.  \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e \ncan then be used to convert them into whatever type\nis needed locally in Haskell.\n\u003c/p\u003e\u003cp\u003eMost people will use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead of manipulating\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es directly.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEASY CONVERSIONS BETWEEN HASKELL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eConversions are powerful; for instance, you can call \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e on a SqlInt32\nand get a String or a Double out of it.  This class attempts to Do\nThe Right Thing whenever possible, and will raise an error when asked to\ndo something incorrect.  In particular, when converting to any type\nexcept a Maybe, \u003ccode\u003e\u003ca\u003eSqlNull\u003c/a\u003e\u003c/code\u003e as the input will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eConversions are implemented in terms of the \u003ca\u003eData.Convertible\u003c/a\u003e module, part of the\nconvertible package.  You can refer to its documentation, and import that module,\nif you wish to parse the Left result from \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e yourself, or write your\nown conversion instances.\n\u003c/p\u003e\u003cp\u003eHere are some notes about conversion:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Fractions of a second are not preserved on time values\n\u003c/li\u003e\u003cli\u003e There is no \u003ccode\u003esafeToSql\u003c/code\u003e because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eiToSql\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may sometimes be an error during conversion.  For instance, if you have a\n\u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e and are attempting to convert it to an Integer, but it doesn't parse as\nan Integer, you will get an error.  This will be indicated as an exception if using\n\u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result if using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSPECIAL NOTE ON POSIXTIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e is converted to \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e by\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e.  HDBC cannot differentiate between \u003ccode\u003e\u003ca\u003eNominalDiffTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e\nsince they are the same underlying type.  You must construct \u003ccode\u003e\u003ca\u003eSqlPOSIXTime\u003c/a\u003e\u003c/code\u003e\nmanually or via \u003ccode\u003e\u003ca\u003eposixToSql\u003c/a\u003e\u003c/code\u003e, or use \u003ccode\u003e\u003ca\u003eSqlUTCTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDETAILS ON SQL TYPES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHDBC database backends are expected to marshal date and time data back and\nforth using the appropriate representation for the underlying database engine.\nDatabases such as PostgreSQL with builtin date and time types should see automatic\nconversion between these Haskell types to database types.  Other databases will be\npresented with an integer or a string.  Care should be taken to use the same type on\nthe Haskell side as you use on the database side.  For instance, if your database\ntype lacks timezone information, you ought not to use ZonedTime, but\ninstead LocalTime or UTCTime.  Database type systems are not always as rich\nas Haskell.  For instance, for data stored in a TIMESTAMP\nWITHOUT TIME ZONE column, HDBC may not be able to tell if it is intended\nas UTCTime or LocalTime data, and will happily convert it to both, \nupon your request.  It is\nyour responsibility to ensure that you treat timezone issues with due care.\n\u003c/p\u003e\u003cp\u003eThis behavior also exists for other types.  For instance, many databases do not\nhave a Rational type, so they will just use the show function and\nstore a Rational as a string.\n\u003c/p\u003e\u003cp\u003eThe conversion between Haskell types and database types is complex,\nand generic code in HDBC or its backends cannot possibly accomodate\nevery possible situation.  In some cases, you may be best served by converting your\nHaskell type to a String, and passing that to the database.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUNICODE AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBeginning with HDBC v2.0, interactions with a database are presumed to occur in UTF-8.\n\u003c/p\u003e\u003cp\u003eTo accomplish this, whenever a ByteString must be converted to or from a String,\nthe ByteString is assumed to be in UTF-8 encoding, and will be decoded or encoded\nas appropriate.  Database drivers will generally present text or string data they have\nreceived from the database as a SqlValue holding a ByteString, which \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will\nautomatically convert to a String, and thus automatically decode UTF-8, when\nyou need it.  In the other direction, database drivers will generally convert\na \u003ccode\u003e\u003ca\u003eSqlString\u003c/a\u003e\u003c/code\u003e to a ByteString in UTF-8 encoding before passing it to the\ndatabase engine.\n\u003c/p\u003e\u003cp\u003eIf you are handling some sort of binary data that is not in UTF-8, you can of course\nwork with the ByteString directly, which will bypass any conversion.\n\u003c/p\u003e\u003cp\u003eDue to lack of support by database engines, lazy ByteStrings are not passed to database\ndrivers.  When you use \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e on a lazy ByteString, it will be converted to a strict\nByteString for storage.  Similarly, \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e will convert a strict ByteString to\na lazy ByteString if you demand it.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a string, are equal.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSTRING VERSIONS OF TIMES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eDefault string representations are given as comments below where such are non-obvious.\nThese are used for \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e when a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is desired.  They are also defaults for\nrepresenting data to SQL backends, though individual backends may override them\nwhen a different format is demanded by the underlying database.  Date and time formats\nuse ISO8601 date format, with HH:MM:SS added for time, and -HHMM added for timezone\noffsets.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDEPRECATED CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlEpochTime\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSqlTimeDiff\u003c/a\u003e\u003c/code\u003e are no longer created automatically by any\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e functions or database backends.  They may still be manually\nconstructed, but are\nexpected to be removed in a future version.  Although these two constructures will\nbe removed, support for marshalling to and from the old System.Time data will be\nmaintained as long as System.Time is, simply using the newer data types for conversion.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "data",
        "title": "SqlValue"
      },
      "index": {
        "description": "SqlValue is he main type for expressing Haskell values to SQL databases INTRODUCTION TO SQLVALUE This type is used to marshall Haskell data to and from database APIs HDBC driver interfaces will do their best to use the most accurate and efficient way to send particular value to the database server Values read back from the server are constructed with the most appropriate SqlValue constructor fromSql or safeFromSql can then be used to convert them into whatever type is needed locally in Haskell Most people will use toSql and fromSql instead of manipulating SqlValue directly EASY CONVERSIONS BETWEEN HASKELL TYPES Conversions are powerful for instance you can call fromSql on SqlInt32 and get String or Double out of it This class attempts to Do The Right Thing whenever possible and will raise an error when asked to do something incorrect In particular when converting to any type except Maybe SqlNull as the input will cause an error to be raised Conversions are implemented in terms of the Data.Convertible module part of the convertible package You can refer to its documentation and import that module if you wish to parse the Left result from safeFromSql yourself or write your own conversion instances Here are some notes about conversion Fractions of second are not preserved on time values There is no safeToSql because toSql never fails See also toSql safeFromSql fromSql nToSql iToSql posixToSql ERROR CONDITIONS There may sometimes be an error during conversion For instance if you have SqlString and are attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception if using fromSql or Left result if using safeFromSql SPECIAL NOTE ON POSIXTIME Note that NominalDiffTime or POSIXTime is converted to SqlDiffTime by toSql HDBC cannot differentiate between NominalDiffTime and POSIXTime since they are the same underlying type You must construct SqlPOSIXTime manually or via posixToSql or use SqlUTCTime DETAILS ON SQL TYPES HDBC database backends are expected to marshal date and time data back and forth using the appropriate representation for the underlying database engine Databases such as PostgreSQL with builtin date and time types should see automatic conversion between these Haskell types to database types Other databases will be presented with an integer or string Care should be taken to use the same type on the Haskell side as you use on the database side For instance if your database type lacks timezone information you ought not to use ZonedTime but instead LocalTime or UTCTime Database type systems are not always as rich as Haskell For instance for data stored in TIMESTAMP WITHOUT TIME ZONE column HDBC may not be able to tell if it is intended as UTCTime or LocalTime data and will happily convert it to both upon your request It is your responsibility to ensure that you treat timezone issues with due care This behavior also exists for other types For instance many databases do not have Rational type so they will just use the show function and store Rational as string The conversion between Haskell types and database types is complex and generic code in HDBC or its backends cannot possibly accomodate every possible situation In some cases you may be best served by converting your Haskell type to String and passing that to the database UNICODE AND BYTESTRINGS Beginning with HDBC v2.0 interactions with database are presumed to occur in UTF-8 To accomplish this whenever ByteString must be converted to or from String the ByteString is assumed to be in UTF-8 encoding and will be decoded or encoded as appropriate Database drivers will generally present text or string data they have received from the database as SqlValue holding ByteString which fromSql will automatically convert to String and thus automatically decode UTF-8 when you need it In the other direction database drivers will generally convert SqlString to ByteString in UTF-8 encoding before passing it to the database engine If you are handling some sort of binary data that is not in UTF-8 you can of course work with the ByteString directly which will bypass any conversion Due to lack of support by database engines lazy ByteStrings are not passed to database drivers When you use toSql on lazy ByteString it will be converted to strict ByteString for storage Similarly fromSql will convert strict ByteString to lazy ByteString if you demand it EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to string are equal STRING VERSIONS OF TIMES Default string representations are given as comments below where such are non-obvious These are used for fromSql when String is desired They are also defaults for representing data to SQL backends though individual backends may override them when different format is demanded by the underlying database Date and time formats use ISO8601 date format with HH MM SS added for time and HHMM added for timezone offsets DEPRECATED CONSTRUCTORS SqlEpochTime and SqlTimeDiff are no longer created automatically by any toSql or fromSql functions or database backends They may still be manually constructed but are expected to be removed in future version Although these two constructures will be removed support for marshalling to and from the old System.Time data will be maintained as long as System.Time is simply using the newer data types for conversion",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlValue",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#t:Statement",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBC-Statement.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "Statement",
        "normalized": "",
        "package": "HDBC",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:ConnWrapper",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "ConnWrapper conn",
        "fct-source": "src/Database-HDBC-Types.html#ConnWrapper",
        "fct-type": "function",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "HDBC",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlBool",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlBool Bool",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlBool",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlByteString",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlByteString ByteString",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlByteString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlChar",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlChar Char",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlChar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlChar",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlDiffTime",
      "description": {
        "fct-descr": "\u003cp\u003eCalendar diff between seconds.  Rendered as Integer when converted to String, but greater precision may be preserved for other types or to underlying database.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlDiffTime NominalDiffTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDiffTime"
      },
      "index": {
        "description": "Calendar diff between seconds Rendered as Integer when converted to String but greater precision may be preserved for other types or to underlying database",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlDiffTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Diff Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlDouble Double",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlDouble",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlEpochTime",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of ClockTime or CalendarTime.  Use SqlPOSIXTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlEpochTime Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlEpochTime"
      },
      "index": {
        "description": "DEPRECATED Representation of ClockTime or CalendarTime Use SqlPOSIXTime instead",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlEpochTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Epoch Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlError",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlInt32",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt32 Int32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlInt32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlInt64",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlInt64 Int64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlInt64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlInteger",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlInteger Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlInteger",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlLocalDate",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalDate Day",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalDate"
      },
      "index": {
        "description": "Local YYYY-MM-DD no timezone",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlLocalDate",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTime LocalTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS no timezone",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlLocalTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlLocalTimeOfDay TimeOfDay",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS no timezone",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlNull",
      "description": {
        "fct-descr": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlNull",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlNull"
      },
      "index": {
        "description": "NULL in SQL or Nothing in Haskell",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlNull",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlPOSIXTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime as seconds since midnight Jan 1 1970 UTC.  Integer rendering as for \u003ccode\u003e\u003ca\u003eSqlDiffTime\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlPOSIXTime POSIXTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlPOSIXTime"
      },
      "index": {
        "description": "Time as seconds since midnight Jan UTC Integer rendering as for SqlDiffTime",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlPOSIXTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql POSIXTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlRational",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlRational Rational",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlRational"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlRational",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlString",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlString String",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlString",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlTimeDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDEPRECATED Representation of TimeDiff.  Use SqlDiffTime instead.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlTimeDiff Integer",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlTimeDiff"
      },
      "index": {
        "description": "DEPRECATED Representation of TimeDiff Use SqlDiffTime instead",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlTimeDiff",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Time Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlUTCTime UTCTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUTCTime"
      },
      "index": {
        "description": "UTC YYYY-MM-DD HH MM SS",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlUTCTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlWord32",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord32 Word32",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlWord32",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlWord64",
      "description": {
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlWord64 Word64",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlWord64",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlZonedLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS -HHMM.  Converts to and from (TimeOfDay, TimeZone).\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedLocalTimeOfDay TimeOfDay TimeZone",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS HHMM Converts to and from TimeOfDay TimeZone",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlZonedLocalTimeOfDay",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:SqlZonedTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS -HHMM.  Considered equal if both convert to the same UTC time.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlZonedTime ZonedTime",
        "fct-source": "src/Database-HDBC-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlZonedTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS HHMM Considered equal if both convert to the same UTC time",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "SqlZonedTime",
        "normalized": "",
        "package": "HDBC",
        "partial": "Sql Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:catchSql",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the given IO action.\n\u003c/p\u003e\u003cp\u003eIf it raises a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e, then execute the supplied handler and return its\nreturn value.  Otherwise, proceed as normal. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "IO a -\u003e (SqlError -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-HDBC-Utils.html#catchSql",
        "fct-type": "function",
        "title": "catchSql"
      },
      "index": {
        "description": "Execute the given IO action If it raises SqlError then execute the supplied handler and return its return value Otherwise proceed as normal",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "catchSql",
        "normalized": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "IO a-\u003e(SqlError-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:clone",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003eConnection\u003c/code\u003e object, pointed at the same\n                   server as this object is.  This will generally establish\n                   a separate physical connection.\n\u003c/p\u003e\u003cp\u003eWhen you wish to establish multiple connections to a single\n                   server, the correct way to do so is to establish the\n                   first connection with the driver-specific connection\n                   function, and then clone it for each additional connection.\n\u003c/p\u003e\u003cp\u003eThis can be important when a database doesn't provide\n                   much thread support itself, and the HDBC driver module\n                   must serialize access to a particular database.\n\u003c/p\u003e\u003cp\u003eThis can also be a handy utility function whenever you\n                   need a separate connection to whatever database you are\n                   connected to already. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO conn",
        "fct-source": "src/Database-HDBC-Types.html#clone",
        "fct-type": "method",
        "title": "clone"
      },
      "index": {
        "description": "Create new Connection object pointed at the same server as this object is This will generally establish separate physical connection When you wish to establish multiple connections to single server the correct way to do so is to establish the first connection with the driver-specific connection function and then clone it for each additional connection This can be important when database doesn provide much thread support itself and the HDBC driver module must serialize access to particular database This can also be handy utility function whenever you need separate connection to whatever database you are connected to already",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "clone",
        "normalized": "a-\u003eIO a",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO conn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit any pending data to the database.\n\u003c/p\u003e\u003cp\u003eRequired to make any changes take effect. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#commit",
        "fct-type": "method",
        "title": "commit"
      },
      "index": {
        "description": "Commit any pending data to the database Required to make any changes take effect",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "commit",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:dbServerVer",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the database server, if available. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#dbServerVer",
        "fct-type": "method",
        "title": "dbServerVer"
      },
      "index": {
        "description": "The version of the database server if available",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "dbServerVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Server Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:dbTransactionSupport",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the current database supports transactions.\n                   If False, then \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e should be expected\n                   to raise errors.\n\u003c/p\u003e\u003cp\u003eMySQL is the only commonly-used database that is known\n                   to not support transactions entirely.  Please see\n                   the MySQL notes in the ODBC driver for more information. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e Bool",
        "fct-source": "src/Database-HDBC-Types.html#dbTransactionSupport",
        "fct-type": "method",
        "title": "dbTransactionSupport"
      },
      "index": {
        "description": "Whether or not the current database supports transactions If False then commit and rollback should be expected to raise errors MySQL is the only commonly-used database that is known to not support transactions entirely Please see the MySQL notes in the ODBC driver for more information",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "dbTransactionSupport",
        "normalized": "a-\u003eBool",
        "package": "HDBC",
        "partial": "Transaction Support",
        "signature": "conn-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:describeResult",
      "description": {
        "fct-descr": "\u003cp\u003eObtain information about the columns in the result set.\n          Must be run only after \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.  The String in the result\n          set is the column name.\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n          as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n          before you see them.\n\u003c/p\u003e\u003cp\u003ePlease see caveats under \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e for information\n          on the column name field here.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [(String, SqlColDesc)]",
        "fct-source": "src/Database-HDBC-Statement.html#describeResult",
        "fct-type": "function",
        "title": "describeResult"
      },
      "index": {
        "description": "Obtain information about the columns in the result set Must be run only after execute The String in the result set is the column name You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them Please see caveats under getColumnNames for information on the column name field here",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "describeResult",
        "normalized": "Statement-\u003eIO[(String,SqlColDesc)]",
        "package": "HDBC",
        "partial": "Result",
        "signature": "Statement-\u003eIO[(String,SqlColDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:describeTable",
      "description": {
        "fct-descr": "\u003cp\u003eObtain information about the columns in a specific\n                   table.  The String in the result\n                   set is the column name.\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n                   as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n                   before you see them.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO [(String, SqlColDesc)]",
        "fct-source": "src/Database-HDBC-Types.html#describeTable",
        "fct-type": "method",
        "title": "describeTable"
      },
      "index": {
        "description": "Obtain information about the columns in specific table The String in the result set is the column name You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "describeTable",
        "normalized": "a-\u003eString-\u003eIO[(String,SqlColDesc)]",
        "package": "HDBC",
        "partial": "Table",
        "signature": "conn-\u003eString-\u003eIO[(String,SqlColDesc)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnect from the remote database.\n\u003c/p\u003e\u003cp\u003eYou do not need to explicitly close an IConnection object, but you may do so if\nyou so desire.  If you don't, the object will disconnect from the database\nin a sane way when it is garbage-collected.  However, a disconnection may\nraise an error, so you are encouraged to explicitly call \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e.  Also,\ngarbage collection may not run when the program terminates, and some databases\nreally like an explicit disconnect.\n\u003c/p\u003e\u003cp\u003eSo, bottom line is, you're best off calling \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e directly, but the\nworld won't end if you forget.\n\u003c/p\u003e\u003cp\u003eThis function discards any data not committed already.  Database driver\nimplementators should explicitly call \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e if their databases don't\ndo this automatically on disconnect.\n\u003c/p\u003e\u003cp\u003eBad Things (TM) could happen if you call this while you have \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003es \nactive.  In more precise language, the results in such situations are undefined\nand vary by database.  So don't do it.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#disconnect",
        "fct-type": "method",
        "title": "disconnect"
      },
      "index": {
        "description": "Disconnect from the remote database You do not need to explicitly close an IConnection object but you may do so if you so desire If you don the object will disconnect from the database in sane way when it is garbage-collected However disconnection may raise an error so you are encouraged to explicitly call disconnect Also garbage collection may not run when the program terminates and some databases really like an explicit disconnect So bottom line is you re best off calling disconnect directly but the world won end if you forget This function discards any data not committed already Database driver implementators should explicitly call rollback if their databases don do this automatically on disconnect Bad Things TM could happen if you call this while you have Statement active In more precise language the results in such situations are undefined and vary by database So don do it",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "disconnect",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the prepared statement, passing in the given positional\n        parameters (that should take the place of the question marks\n        in the call to \u003ccode\u003eprepare\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor non-SELECT queries, the return value is the number of\n        rows modified, if known.  If no rows were modified, you get 0.\n        If the value is unknown, you get -1.  All current HDBC drivers\n        support this function and should never return -1.\n\u003c/p\u003e\u003cp\u003eFor SELECT queries, you will always get 0.\n\u003c/p\u003e\u003cp\u003eThis function should automatically call finish() to finish the previous\n        execution, if necessary.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e [SqlValue] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Statement.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute the prepared statement passing in the given positional parameters that should take the place of the question marks in the call to prepare For non-SELECT queries the return value is the number of rows modified if known If no rows were modified you get If the value is unknown you get All current HDBC drivers support this function and should never return For SELECT queries you will always get This function should automatically call finish to finish the previous execution if necessary",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "execute",
        "normalized": "Statement-\u003e[SqlValue]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "",
        "signature": "Statement-\u003e[SqlValue]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the query with many rows. \n        The return value is the return value from the final row \n        as if you had called \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e\u003cp\u003eDue to optimizations that are possible due to different\n        databases and driver designs, this can often be significantly\n        faster than using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e multiple times since queries\n        need to be compiled only once.\n\u003c/p\u003e\u003cp\u003eThis is most useful for non-SELECT statements. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e [[SqlValue]] -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#executeMany",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute the query with many rows The return value is the return value from the final row as if you had called execute on it Due to optimizations that are possible due to different databases and driver designs this can often be significantly faster than using execute multiple times since queries need to be compiled only once This is most useful for non-SELECT statements",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "executeMany",
        "normalized": "Statement-\u003e[[SqlValue]]-\u003eIO()",
        "package": "HDBC",
        "partial": "Many",
        "signature": "Statement-\u003e[[SqlValue]]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:executeRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the statement as-is, without supplying any\n        positional parameters.  This is intended for statements for\n        which the results aren't interesting or present (e.g., DDL or\n        DML commands).  If your query contains placeholders, this will\n        certainly fail; use \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#executeRaw",
        "fct-type": "function",
        "title": "executeRaw"
      },
      "index": {
        "description": "Execute the statement as-is without supplying any positional parameters This is intended for statements for which the results aren interesting or present e.g DDL or DML commands If your query contains placeholders this will certainly fail use execute instead",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "executeRaw",
        "normalized": "Statement-\u003eIO()",
        "package": "HDBC",
        "partial": "Raw",
        "signature": "Statement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRows",
      "description": {
        "fct-descr": "\u003cp\u003eLazily fetch all rows from an executed \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou can think of this as hGetContents applied to a database result set.\n\u003c/p\u003e\u003cp\u003eThe result of this is a lazy list, and each new row will be read, lazily, from\nthe database as the list is processed.\n\u003c/p\u003e\u003cp\u003eWhen you have exhausted the list, the \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e will be \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e\u003cp\u003ePlease note that the careless use of this function can lead to some unpleasant\nbehavior.  In particular, if you have not consumed the entire list, then\nattempt to \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e or re-execute the statement, and then attempt to consume\nmore elements from the list, the result will almost certainly not be what\nyou want.\n\u003c/p\u003e\u003cp\u003eBut then, similar caveats apply with hGetContents.\n\u003c/p\u003e\u003cp\u003eBottom line: this is a very convenient abstraction; use it wisely.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e if you need something that is strict, without\nall these caveats.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[SqlValue]]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRows",
        "fct-type": "function",
        "title": "fetchAllRows"
      },
      "index": {
        "description": "Lazily fetch all rows from an executed Statement You can think of this as hGetContents applied to database result set The result of this is lazy list and each new row will be read lazily from the database as the list is processed When you have exhausted the list the Statement will be finish ed Please note that the careless use of this function can lead to some unpleasant behavior In particular if you have not consumed the entire list then attempt to finish or re-execute the statement and then attempt to consume more elements from the list the result will almost certainly not be what you want But then similar caveats apply with hGetContents Bottom line this is very convenient abstraction use it wisely Use fetchAllRows if you need something that is strict without all these caveats",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRows",
        "normalized": "Statement-\u003eIO[[SqlValue]]",
        "package": "HDBC",
        "partial": "All Rows",
        "signature": "Statement-\u003eIO[[SqlValue]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRows-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efetchAllRows\u003c/a\u003e\u003c/code\u003e.  Does not have the side-effects\nof \u003ccode\u003e\u003ca\u003efetchAllRows\u003c/a\u003e\u003c/code\u003e, but forces the entire result set to be buffered\nin memory. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[SqlValue]]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRows%27",
        "fct-type": "function",
        "title": "fetchAllRows'"
      },
      "index": {
        "description": "Strict version of fetchAllRows Does not have the side-effects of fetchAllRows but forces the entire result set to be buffered in memory",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRows'",
        "normalized": "Statement-\u003eIO[[SqlValue]]",
        "package": "HDBC",
        "partial": "All Rows'",
        "signature": "Statement-\u003eIO[[SqlValue]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRowsAL",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efetchAllRows\u003c/a\u003e\u003c/code\u003e, but instead of returning a list for each\nrow, return an association list for each row, from column name to value.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003efetchRowAL\u003c/a\u003e\u003c/code\u003e for more details. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[(String, SqlValue)]]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRowsAL",
        "fct-type": "function",
        "title": "fetchAllRowsAL"
      },
      "index": {
        "description": "Like fetchAllRows but instead of returning list for each row return an association list for each row from column name to value See fetchRowAL for more details",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRowsAL",
        "normalized": "Statement-\u003eIO[[(String,SqlValue)]]",
        "package": "HDBC",
        "partial": "All Rows AL",
        "signature": "Statement-\u003eIO[[(String,SqlValue)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRowsAL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efetchAllRowsAL\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[(String, SqlValue)]]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRowsAL%27",
        "fct-type": "function",
        "title": "fetchAllRowsAL'"
      },
      "index": {
        "description": "Strict version of fetchAllRowsAL",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRowsAL'",
        "normalized": "Statement-\u003eIO[[(String,SqlValue)]]",
        "package": "HDBC",
        "partial": "All Rows AL'",
        "signature": "Statement-\u003eIO[[(String,SqlValue)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRowsMap",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efetchAllRowsAL\u003c/a\u003e\u003c/code\u003e, but return a list of Maps instead of a list of\nassociation lists. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [Map String SqlValue]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRowsMap",
        "fct-type": "function",
        "title": "fetchAllRowsMap"
      },
      "index": {
        "description": "Like fetchAllRowsAL but return list of Maps instead of list of association lists",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRowsMap",
        "normalized": "Statement-\u003eIO[Map String SqlValue]",
        "package": "HDBC",
        "partial": "All Rows Map",
        "signature": "Statement-\u003eIO[Map String SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchAllRowsMap-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efetchAllRowsMap\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [Map String SqlValue]",
        "fct-source": "src/Database-HDBC-Utils.html#fetchAllRowsMap%27",
        "fct-type": "function",
        "title": "fetchAllRowsMap'"
      },
      "index": {
        "description": "Strict version of fetchAllRowsMap",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchAllRowsMap'",
        "normalized": "Statement-\u003eIO[Map String SqlValue]",
        "package": "HDBC",
        "partial": "All Rows Map'",
        "signature": "Statement-\u003eIO[Map String SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchRow",
      "description": {
        "fct-descr": "\u003cp\u003eFetches one row from the DB.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there\n        are no more rows.  Will automatically call \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e when\n        the last row is read. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO (Maybe [SqlValue])",
        "fct-source": "src/Database-HDBC-Statement.html#fetchRow",
        "fct-type": "function",
        "title": "fetchRow"
      },
      "index": {
        "description": "Fetches one row from the DB Returns Nothing if there are no more rows Will automatically call finish when the last row is read",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchRow",
        "normalized": "Statement-\u003eIO(Maybe[SqlValue])",
        "package": "HDBC",
        "partial": "Row",
        "signature": "Statement-\u003eIO(Maybe[SqlValue])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchRowAL",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efetchRow\u003c/a\u003e\u003c/code\u003e, but instead of returning a list, return an association\nlist from column name to value.\n\u003c/p\u003e\u003cp\u003eThe keys of the column names are lowercase versions of the data returned\nby \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e.  Please heed the warnings there.  Additionally,\nresults are undefined if multiple columns are returned with identical names.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO (Maybe [(String, SqlValue)])",
        "fct-source": "src/Database-HDBC-Utils.html#fetchRowAL",
        "fct-type": "function",
        "title": "fetchRowAL"
      },
      "index": {
        "description": "Like fetchRow but instead of returning list return an association list from column name to value The keys of the column names are lowercase versions of the data returned by getColumnNames Please heed the warnings there Additionally results are undefined if multiple columns are returned with identical names",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchRowAL",
        "normalized": "Statement-\u003eIO(Maybe[(String,SqlValue)])",
        "package": "HDBC",
        "partial": "Row AL",
        "signature": "Statement-\u003eIO(Maybe[(String,SqlValue)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fetchRowMap",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efetchRowAL\u003c/a\u003e\u003c/code\u003e, but return a Map instead of an association list.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO (Maybe (Map String SqlValue))",
        "fct-source": "src/Database-HDBC-Utils.html#fetchRowMap",
        "fct-type": "function",
        "title": "fetchRowMap"
      },
      "index": {
        "description": "Similar to fetchRowAL but return Map instead of an association list",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fetchRowMap",
        "normalized": "Statement-\u003eIO(Maybe(Map String SqlValue))",
        "package": "HDBC",
        "partial": "Row Map",
        "signature": "Statement-\u003eIO(Maybe(Map String SqlValue))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:finish",
      "description": {
        "fct-descr": "\u003cp\u003eAbort a query in progress -- usually not needed. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Statement.html#finish",
        "fct-type": "function",
        "title": "finish"
      },
      "index": {
        "description": "Abort query in progress usually not needed",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "finish",
        "normalized": "Statement-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "Statement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:fromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Any problem is indicated by\n   calling \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e a",
        "fct-source": "src/Database-HDBC-SqlValue.html#fromSql",
        "fct-type": "function",
        "title": "fromSql"
      },
      "index": {
        "description": "Convert from an SqlValue to Haskell value Any problem is indicated by calling error This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "fromSql",
        "normalized": "SqlValue-\u003ea",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:getColumnNames",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of the column names in the result.\n        For maximum portability, you should not assume that\n        information is available until after an \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e function\n        has been run.\n\u003c/p\u003e\u003cp\u003eInformation is returned here directly as returned\n        by the underlying database layer.  Note that different\n        databases have different rules about capitalization\n        of return values and about representation of names\n        of columns that are not simple columns.  For this reason,\n        it is suggested that you treat this information for\n        display purposes only.  Failing that, you should convert\n        to lower (or upper) case, and use \u003ccode\u003eAS\u003c/code\u003e clauses for\n        anything other than simple columns.\n\u003c/p\u003e\u003cp\u003eA simple getColumnNames implementation could simply\n        apply \u003ccode\u003emap fst\u003c/code\u003e to the return value of \u003ccode\u003e\u003ca\u003edescribeResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [String]",
        "fct-source": "src/Database-HDBC-Statement.html#getColumnNames",
        "fct-type": "function",
        "title": "getColumnNames"
      },
      "index": {
        "description": "Returns list of the column names in the result For maximum portability you should not assume that information is available until after an execute function has been run Information is returned here directly as returned by the underlying database layer Note that different databases have different rules about capitalization of return values and about representation of names of columns that are not simple columns For this reason it is suggested that you treat this information for display purposes only Failing that you should convert to lower or upper case and use AS clauses for anything other than simple columns simple getColumnNames implementation could simply apply map fst to the return value of describeResult",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "getColumnNames",
        "normalized": "Statement-\u003eIO[String]",
        "package": "HDBC",
        "partial": "Column Names",
        "signature": "Statement-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:getTables",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of all tables accessible by the current\n                   connection, excluding special meta-tables (system tables).\n\u003c/p\u003e\u003cp\u003eYou should expect this to be returned in the same manner\n                   as a result from \u003ccode\u003e\u003ca\u003efetchAllRows'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAll results should be converted to lowercase for you\n                   before you see them.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO [String]",
        "fct-source": "src/Database-HDBC-Types.html#getTables",
        "fct-type": "method",
        "title": "getTables"
      },
      "index": {
        "description": "The names of all tables accessible by the current connection excluding special meta-tables system tables You should expect this to be returned in the same manner as result from fetchAllRows All results should be converted to lowercase for you before you see them",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "getTables",
        "normalized": "a-\u003eIO[String]",
        "package": "HDBC",
        "partial": "Tables",
        "signature": "conn-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:handleSql",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecatchSql\u003c/a\u003e\u003c/code\u003e, with the order of arguments reversed. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "(SqlError -\u003e IO a) -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-HDBC-Utils.html#handleSql",
        "fct-type": "function",
        "title": "handleSql"
      },
      "index": {
        "description": "Like catchSql with the order of arguments reversed",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "handleSql",
        "normalized": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "(SqlError-\u003eIO a)-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:handleSqlError",
      "description": {
        "fct-descr": "\u003cp\u003eCatches \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003es, and re-raises them as IO errors with fail.\nUseful if you don't care to catch SQL errors, but want to see a sane\nerror message if one happens.  One would often use this as a high-level\nwrapper around SQL calls. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Database-HDBC-Utils.html#handleSqlError",
        "fct-type": "function",
        "title": "handleSqlError"
      },
      "index": {
        "description": "Catches SqlError and re-raises them as IO errors with fail Useful if you don care to catch SQL errors but want to see sane error message if one happens One would often use this as high-level wrapper around SQL calls",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "handleSqlError",
        "normalized": "IO a-\u003eIO a",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:hdbcClientVer",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the C (or whatever) client library\n                   that the HDBC driver module is bound to.  The meaning\n                   of this is driver-specific.  For an ODBC or similar\n                   proxying driver, this should be the version of the\n                   ODBC library, not the eventual DB client driver. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#hdbcClientVer",
        "fct-type": "method",
        "title": "hdbcClientVer"
      },
      "index": {
        "description": "The version of the or whatever client library that the HDBC driver module is bound to The meaning of this is driver-specific For an ODBC or similar proxying driver this should be the version of the ODBC library not the eventual DB client driver",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "hdbcClientVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:hdbcDriverName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the HDBC driver module for this connection.\n                   Ideally would be the same as the database name portion\n                   of the Cabal package name.  For instance, \"sqlite3\"\n                   or \"odbc\".  This is the layer that is bound most\n                   tightly to HDBC. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#hdbcDriverName",
        "fct-type": "method",
        "title": "hdbcDriverName"
      },
      "index": {
        "description": "The name of the HDBC driver module for this connection Ideally would be the same as the database name portion of the Cabal package name For instance sqlite3 or odbc This is the layer that is bound most tightly to HDBC",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "hdbcDriverName",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Driver Name",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:iToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for using numeric literals in your program. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Int -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#iToSql",
        "fct-type": "function",
        "title": "iToSql"
      },
      "index": {
        "description": "Convenience function for using numeric literals in your program",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "iToSql",
        "normalized": "Int-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "Int-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:nToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any Integral type to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e by using toInteger. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#nToSql",
        "fct-type": "function",
        "title": "nToSql"
      },
      "index": {
        "description": "Converts any Integral type to SqlValue by using toInteger",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "nToSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:originalQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe original query that this \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e was prepared\n          with. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e String",
        "fct-source": "src/Database-HDBC-Statement.html#originalQuery",
        "fct-type": "function",
        "title": "originalQuery"
      },
      "index": {
        "description": "The original query that this Statement was prepared with",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "originalQuery",
        "normalized": "Statement-\u003eString",
        "package": "HDBC",
        "partial": "Query",
        "signature": "Statement-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:posixToSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function for converting \u003ccode\u003e\u003ca\u003ePOSIXTime\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e, because\n\u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e cannot do the correct thing in this instance. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "POSIXTime -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#posixToSql",
        "fct-type": "function",
        "title": "posixToSql"
      },
      "index": {
        "description": "Convenience function for converting POSIXTime to SqlValue because toSql cannot do the correct thing in this instance",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "posixToSql",
        "normalized": "POSIXTime-\u003eSqlValue",
        "package": "HDBC",
        "partial": "To Sql",
        "signature": "POSIXTime-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:prepare",
      "description": {
        "fct-descr": "\u003cp\u003ePrepares a statement for execution. \n\u003c/p\u003e\u003cp\u003eQuestion marks in the statement will be replaced by\n                   positional parameters in a later call to \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePlease note that, depending on the database\n                   and the driver, errors in your SQL may be raised\n                   either here or by \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.  Make sure you\n                   handle exceptions both places if necessary. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO Statement",
        "fct-source": "src/Database-HDBC-Types.html#prepare",
        "fct-type": "method",
        "title": "prepare"
      },
      "index": {
        "description": "Prepares statement for execution Question marks in the statement will be replaced by positional parameters in later call to execute Please note that depending on the database and the driver errors in your SQL may be raised either here or by execute Make sure you handle exceptions both places if necessary",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "prepare",
        "normalized": "a-\u003eString-\u003eIO Statement",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eString-\u003eIO Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:proxiedClientName",
      "description": {
        "fct-descr": "\u003cp\u003eIn the case of a system such as ODBC, the name of\n                   the database client/server in use, if available.\n                   For others,\n                   identical to \u003ccode\u003e\u003ca\u003ehdbcDriverName\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#proxiedClientName",
        "fct-type": "method",
        "title": "proxiedClientName"
      },
      "index": {
        "description": "In the case of system such as ODBC the name of the database client server in use if available For others identical to hdbcDriverName",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "proxiedClientName",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Name",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:proxiedClientVer",
      "description": {
        "fct-descr": "\u003cp\u003eIn the case of a system such as ODBC, the version of\n                   the database client in use, if available.  For others,\n                   identical to \u003ccode\u003e\u003ca\u003ehdbcClientVer\u003c/a\u003e\u003c/code\u003e. This is the next layer\n                   out past the HDBC driver. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBC-Types.html#proxiedClientVer",
        "fct-type": "method",
        "title": "proxiedClientVer"
      },
      "index": {
        "description": "In the case of system such as ODBC the version of the database client in use if available For others identical to hdbcClientVer This is the next layer out past the HDBC driver",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "proxiedClientVer",
        "normalized": "a-\u003eString",
        "package": "HDBC",
        "partial": "Client Ver",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:quickQuery",
      "description": {
        "fct-descr": "\u003cp\u003eA quick way to do a query.  Similar to preparing, executing, and\nthen calling \u003ccode\u003e\u003ca\u003efetchAllRows\u003c/a\u003e\u003c/code\u003e on a statement. See also \u003ccode\u003e\u003ca\u003equickQuery'\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e [SqlValue] -\u003e IO [[SqlValue]]",
        "fct-source": "src/Database-HDBC-Utils.html#quickQuery",
        "fct-type": "function",
        "title": "quickQuery"
      },
      "index": {
        "description": "quick way to do query Similar to preparing executing and then calling fetchAllRows on statement See also quickQuery",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "quickQuery",
        "normalized": "a-\u003eString-\u003e[SqlValue]-\u003eIO[[SqlValue]]",
        "package": "HDBC",
        "partial": "Query",
        "signature": "conn-\u003eString-\u003e[SqlValue]-\u003eIO[[SqlValue]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:quickQuery-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003equickQuery\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e [SqlValue] -\u003e IO [[SqlValue]]",
        "fct-source": "src/Database-HDBC-Utils.html#quickQuery%27",
        "fct-type": "function",
        "title": "quickQuery'"
      },
      "index": {
        "description": "Strict version of quickQuery",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "quickQuery'",
        "normalized": "a-\u003eString-\u003e[SqlValue]-\u003eIO[[SqlValue]]",
        "package": "HDBC",
        "partial": "Query'",
        "signature": "conn-\u003eString-\u003e[SqlValue]-\u003eIO[[SqlValue]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back to the state the database was in prior to the\n                   last \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#rollback",
        "fct-type": "method",
        "title": "rollback"
      },
      "index": {
        "description": "Roll back to the state the database was in prior to the last commit or rollback",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "rollback",
        "normalized": "a-\u003eIO()",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a single SQL query.  Returns the number\n                   of rows modified (see \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e for details).\n                   The second parameter is a list\n                   of replacement values, if any. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e [SqlValue] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Types.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "Execute single SQL query Returns the number of rows modified see execute for details The second parameter is list of replacement values if any",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "run",
        "normalized": "a-\u003eString-\u003e[SqlValue]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "",
        "signature": "conn-\u003eString-\u003e[SqlValue]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:runRaw",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an SQL string, which may contain multiple\n                   queries. This is intended for situations where you\n                   need to run DML or DDL queries and aren't\n                   interested in results. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Types.html#runRaw",
        "fct-type": "method",
        "title": "runRaw"
      },
      "index": {
        "description": "Execute an SQL string which may contain multiple queries This is intended for situations where you need to run DML or DDL queries and aren interested in results",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "runRaw",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "HDBC",
        "partial": "Raw",
        "signature": "conn-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sExecute",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e, but take a list of Maybe Strings instead of\n   \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e [Maybe String] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Utils.html#sExecute",
        "fct-type": "function",
        "title": "sExecute"
      },
      "index": {
        "description": "Like execute but take list of Maybe Strings instead of SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sExecute",
        "normalized": "Statement-\u003e[Maybe String]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "Execute",
        "signature": "Statement-\u003e[Maybe String]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sExecuteMany",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e, but take a list of Maybe Strings instead of\n   \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e [[Maybe String]] -\u003e IO ()",
        "fct-source": "src/Database-HDBC-Utils.html#sExecuteMany",
        "fct-type": "function",
        "title": "sExecuteMany"
      },
      "index": {
        "description": "Like executeMany but take list of Maybe Strings instead of SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sExecuteMany",
        "normalized": "Statement-\u003e[[Maybe String]]-\u003eIO()",
        "package": "HDBC",
        "partial": "Execute Many",
        "signature": "Statement-\u003e[[Maybe String]]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sFetchAllRows",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efetchAllRows\u003c/a\u003e\u003c/code\u003e, but return Maybe Strings instead of \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[Maybe String]]",
        "fct-source": "src/Database-HDBC-Utils.html#sFetchAllRows",
        "fct-type": "function",
        "title": "sFetchAllRows"
      },
      "index": {
        "description": "Like fetchAllRows but return Maybe Strings instead of SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sFetchAllRows",
        "normalized": "Statement-\u003eIO[[Maybe String]]",
        "package": "HDBC",
        "partial": "Fetch All Rows",
        "signature": "Statement-\u003eIO[[Maybe String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sFetchAllRows-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esFetchAllRows\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO [[Maybe String]]",
        "fct-source": "src/Database-HDBC-Utils.html#sFetchAllRows%27",
        "fct-type": "function",
        "title": "sFetchAllRows'"
      },
      "index": {
        "description": "Strict version of sFetchAllRows",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sFetchAllRows'",
        "normalized": "Statement-\u003eIO[[Maybe String]]",
        "package": "HDBC",
        "partial": "Fetch All Rows'",
        "signature": "Statement-\u003eIO[[Maybe String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sFetchRow",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efetchRow\u003c/a\u003e\u003c/code\u003e, but return a list of Maybe Strings instead of\n   \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Statement -\u003e IO (Maybe [Maybe String])",
        "fct-source": "src/Database-HDBC-Utils.html#sFetchRow",
        "fct-type": "function",
        "title": "sFetchRow"
      },
      "index": {
        "description": "Like fetchRow but return list of Maybe Strings instead of SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sFetchRow",
        "normalized": "Statement-\u003eIO(Maybe[Maybe String])",
        "package": "HDBC",
        "partial": "Fetch Row",
        "signature": "Statement-\u003eIO(Maybe[Maybe String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sRun",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, but take a list of Maybe Strings instead of \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e String -\u003e [Maybe String] -\u003e IO Integer",
        "fct-source": "src/Database-HDBC-Utils.html#sRun",
        "fct-type": "function",
        "title": "sRun"
      },
      "index": {
        "description": "Like run but take list of Maybe Strings instead of SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sRun",
        "normalized": "a-\u003eString-\u003e[Maybe String]-\u003eIO Integer",
        "package": "HDBC",
        "partial": "Run",
        "signature": "conn-\u003eString-\u003e[Maybe String]-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:safeFromSql",
      "description": {
        "fct-descr": "\u003cp\u003eConversions to and from \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003es and standard Haskell types.\n\u003c/p\u003e\u003cp\u003eThis function converts from an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e to a Haskell value.  Many people will use the simpler\n   \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e instead.  This function is simply a restricted-type wrapper around\n   \u003ccode\u003e\u003ca\u003esafeConvert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlValue -\u003e ConvertResult a",
        "fct-source": "src/Database-HDBC-SqlValue.html#safeFromSql",
        "fct-type": "function",
        "title": "safeFromSql"
      },
      "index": {
        "description": "Conversions to and from SqlValue and standard Haskell types This function converts from an SqlValue to Haskell value Many people will use the simpler fromSql instead This function is simply restricted-type wrapper around safeConvert",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "safeFromSql",
        "normalized": "SqlValue-\u003eConvertResult a",
        "package": "HDBC",
        "partial": "From Sql",
        "signature": "SqlValue-\u003eConvertResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:seErrorMsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "HDBC",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:seNativeError",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "Int",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seNativeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "seNativeError",
        "normalized": "",
        "package": "HDBC",
        "partial": "Native Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:seState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBC-Statement.html#SqlError",
        "fct-type": "function",
        "title": "seState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "seState",
        "normalized": "",
        "package": "HDBC",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:sqlExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Exception, return Just SqlError if it was an SqlError, or Nothing\notherwise. Useful with functions like catchJust. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlError -\u003e Maybe SqlError",
        "fct-source": "src/Database-HDBC-Utils.html#sqlExceptions",
        "fct-type": "function",
        "title": "sqlExceptions"
      },
      "index": {
        "description": "Given an Exception return Just SqlError if it was an SqlError or Nothing otherwise Useful with functions like catchJust",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "sqlExceptions",
        "normalized": "SqlError-\u003eMaybe SqlError",
        "package": "HDBC",
        "partial": "Exceptions",
        "signature": "SqlError-\u003eMaybe SqlError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:throwSqlError",
      "description": {
        "fct-descr": "\u003cp\u003eA utility function to throw a \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.  The mechanics of throwing\nsuch a thing differ between GHC 6.8.x, Hugs, and GHC 6.10.  This function\ntakes care of the special cases to make it simpler.\n\u003c/p\u003e\u003cp\u003eWith GHC 6.10, it is a type-restricted alias for throw.  On all other systems,\nit is a type-restricted alias for throwDyn. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "SqlError -\u003e IO a",
        "fct-source": "src/Database-HDBC-Utils.html#throwSqlError",
        "fct-type": "function",
        "title": "throwSqlError"
      },
      "index": {
        "description": "utility function to throw SqlError The mechanics of throwing such thing differ between GHC Hugs and GHC This function takes care of the special cases to make it simpler With GHC it is type-restricted alias for throw On all other systems it is type-restricted alias for throwDyn",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "throwSqlError",
        "normalized": "SqlError-\u003eIO a",
        "package": "HDBC",
        "partial": "Sql Error",
        "signature": "SqlError-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:toSql",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value to an \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e.  This function is simply\na restricted-type wrapper around \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.  See extended notes on \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBC-SqlValue.html#toSql",
        "fct-type": "function",
        "title": "toSql"
      },
      "index": {
        "description": "Convert value to an SqlValue This function is simply restricted-type wrapper around convert See extended notes on SqlValue",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "toSql",
        "normalized": "a-\u003eSqlValue",
        "package": "HDBC",
        "partial": "Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute some code.  If any uncaught exception occurs, run\n\u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e and re-raise it.  Otherwise, run \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and return.\n\u003c/p\u003e\u003cp\u003eThis function, therefore, encapsulates the logical property that a transaction\nis all about: all or nothing.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e object passed in is passed directly to the specified\nfunction as a convenience.\n\u003c/p\u003e\u003cp\u003eThis function traps \u003cem\u003eall\u003c/em\u003e uncaught exceptions, not just SqlErrors.  Therefore,\nyou will get a rollback for any exception that you don't handle.  That's\nprobably what you want anyway.\n\u003c/p\u003e\u003cp\u003eSince all operations in HDBC are done in a transaction, this function doesn't\nissue an explicit \"begin\" to the server.  You should ideally have\ncalled \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e before\ncalling this function.  If you haven't, this function will commit or rollback\nmore than just the changes made in the included action.\n\u003c/p\u003e\u003cp\u003eIf there was an error while running \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, this error will not be\nreported since the original exception will be propogated back.  (You'd probably\nlike to know about the root cause for all of this anyway.)  Feedback\non this behavior is solicited.\n\u003c/p\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e (conn -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-HDBC-Utils.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute some code If any uncaught exception occurs run rollback and re-raise it Otherwise run commit and return This function therefore encapsulates the logical property that transaction is all about all or nothing The IConnection object passed in is passed directly to the specified function as convenience This function traps all uncaught exceptions not just SqlErrors Therefore you will get rollback for any exception that you don handle That probably what you want anyway Since all operations in HDBC are done in transaction this function doesn issue an explicit begin to the server You should ideally have called commit or rollback before calling this function If you haven this function will commit or rollback more than just the changes made in the included action If there was an error while running rollback this error will not be reported since the original exception will be propogated back You probably like to know about the root cause for all of this anyway Feedback on this behavior is solicited",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "withTransaction",
        "normalized": "a-\u003e(a-\u003eIO b)-\u003eIO b",
        "package": "HDBC",
        "partial": "Transaction",
        "signature": "conn-\u003e(conn-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HDBC/docs/Database-HDBC.html#v:withWConn",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eConnWrapper\u003c/a\u003e\u003c/code\u003e and pass the embedded \u003ccode\u003e\u003ca\u003eIConnection\u003c/a\u003e\u003c/code\u003e to\na function.  Example:\n\u003c/p\u003e\u003cpre\u003ewithWConn wrapped run $ \"SELECT * from foo where bar = 1\" []\n\u003c/pre\u003e",
        "fct-module": "Database.HDBC",
        "fct-package": "HDBC",
        "fct-signature": "conn -\u003e b) -\u003e b",
        "fct-source": "src/Database-HDBC-Types.html#withWConn",
        "fct-type": "function",
        "title": "withWConn"
      },
      "index": {
        "description": "Unwrap ConnWrapper and pass the embedded IConnection to function Example withWConn wrapped run SELECT from foo where bar",
        "hierarchy": "Database HDBC",
        "module": "Database.HDBC",
        "name": "withWConn",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "HDBC",
        "partial": "WConn",
        "signature": "conn-\u003eb)-\u003eb"
      }
    }
  }
]