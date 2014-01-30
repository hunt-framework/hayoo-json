[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI-DriverUtils.html",
        "fct-type": "module",
        "title": "DriverUtils"
      },
      "index": {
        "description": "Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "DriverUtils",
        "normalized": "",
        "package": "hdbi",
        "partial": "Driver Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#t:ChildList",
      "description": {
        "fct-descr": "\u003cp\u003eList of weak pointers to childs with concurrent access\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-DriverUtils.html#ChildList",
        "fct-type": "data",
        "title": "ChildList"
      },
      "index": {
        "description": "List of weak pointers to childs with concurrent access",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "ChildList",
        "normalized": "",
        "package": "hdbi",
        "partial": "Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:ChildList",
      "description": {
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "ChildList",
        "fct-source": "src/Database-HDBI-DriverUtils.html#ChildList",
        "fct-type": "function",
        "title": "ChildList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "ChildList",
        "normalized": "",
        "package": "hdbi",
        "partial": "Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:addChild",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a new child to the existing list.  Also takes care of registering\na finalizer for it, to remove it from the list when possible. \n\u003c/p\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "ChildList stmt -\u003e stmt -\u003e IO ()",
        "fct-source": "src/Database-HDBI-DriverUtils.html#addChild",
        "fct-type": "function",
        "title": "addChild"
      },
      "index": {
        "description": "Adds new child to the existing list Also takes care of registering finalizer for it to remove it from the list when possible",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "addChild",
        "normalized": "ChildList a-\u003ea-\u003eIO()",
        "package": "hdbi",
        "partial": "Child",
        "signature": "ChildList stmt-\u003estmt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clCounter",
      "description": {
        "fct-descr": "\u003cp\u003eLittle hackish child counter,\n need to wait all child\n finalizers in \u003ccode\u003e\u003ca\u003ecloseAllChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "TVar Int",
        "fct-source": "src/Database-HDBI-DriverUtils.html#ChildList",
        "fct-type": "function",
        "title": "clCounter"
      },
      "index": {
        "description": "Little hackish child counter need to wait all child finalizers in closeAllChildren",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "clCounter",
        "normalized": "",
        "package": "hdbi",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "TVar (IntMap (Weak stmt))",
        "fct-source": "src/Database-HDBI-DriverUtils.html#ChildList",
        "fct-type": "function",
        "title": "clList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "clList",
        "normalized": "",
        "package": "hdbi",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clNextKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "MVar Int",
        "fct-source": "src/Database-HDBI-DriverUtils.html#ChildList",
        "fct-type": "function",
        "title": "clNextKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "clNextKey",
        "normalized": "",
        "package": "hdbi",
        "partial": "Next Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:closeAllChildren",
      "description": {
        "fct-descr": "\u003cp\u003eClose all children.  Intended to be called by the \u003ccode\u003edisconnect\u003c/code\u003e function\nin \u003ccode\u003eConnection\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere may be a potential race condition wherein a call to newSth at the same\ntime as a call to this function may result in the new child not being closed.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "ChildList stmt -\u003e IO ()",
        "fct-source": "src/Database-HDBI-DriverUtils.html#closeAllChildren",
        "fct-type": "function",
        "title": "closeAllChildren"
      },
      "index": {
        "description": "Close all children Intended to be called by the disconnect function in Connection There may be potential race condition wherein call to newSth at the same time as call to this function may result in the new child not being closed",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "closeAllChildren",
        "normalized": "ChildList a-\u003eIO()",
        "package": "hdbi",
        "partial": "All Children",
        "signature": "ChildList stmt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:newChildList",
      "description": {
        "fct-descr": "\u003cp\u003enew empty child list\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.DriverUtils",
        "fct-package": "hdbi",
        "fct-signature": "IO (ChildList stmt)",
        "fct-source": "src/Database-HDBI-DriverUtils.html#newChildList",
        "fct-type": "function",
        "title": "newChildList"
      },
      "index": {
        "description": "new empty child list",
        "hierarchy": "Database HDBI DriverUtils",
        "module": "Database.HDBI.DriverUtils",
        "name": "newChildList",
        "normalized": "",
        "package": "hdbi",
        "partial": "Child List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI-Formaters.html",
        "fct-type": "module",
        "title": "Formaters"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "Formaters",
        "normalized": "",
        "package": "hdbi",
        "partial": "Formaters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatBitField",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "Word64 -\u003e String",
        "fct-source": "src/Database-HDBI-Formaters.html#formatBitField",
        "fct-type": "function",
        "title": "formatBitField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "formatBitField",
        "normalized": "Word-\u003eString",
        "package": "hdbi",
        "partial": "Bit Field",
        "signature": "Word-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoDay",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "Day -\u003e String",
        "fct-source": "src/Database-HDBI-Formaters.html#formatIsoDay",
        "fct-type": "function",
        "title": "formatIsoDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "formatIsoDay",
        "normalized": "Day-\u003eString",
        "package": "hdbi",
        "partial": "Iso Day",
        "signature": "Day-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoLocalTime",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "LocalTime -\u003e String",
        "fct-source": "src/Database-HDBI-Formaters.html#formatIsoLocalTime",
        "fct-type": "function",
        "title": "formatIsoLocalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "formatIsoLocalTime",
        "normalized": "LocalTime-\u003eString",
        "package": "hdbi",
        "partial": "Iso Local Time",
        "signature": "LocalTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoTimeOfDay",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "TimeOfDay -\u003e String",
        "fct-source": "src/Database-HDBI-Formaters.html#formatIsoTimeOfDay",
        "fct-type": "function",
        "title": "formatIsoTimeOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "formatIsoTimeOfDay",
        "normalized": "TimeOfDay-\u003eString",
        "package": "hdbi",
        "partial": "Iso Time Of Day",
        "signature": "TimeOfDay-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoUTCTime",
      "description": {
        "fct-module": "Database.HDBI.Formaters",
        "fct-package": "hdbi",
        "fct-signature": "UTCTime -\u003e String",
        "fct-source": "src/Database-HDBI-Formaters.html#formatIsoUTCTime",
        "fct-type": "function",
        "title": "formatIsoUTCTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Formaters",
        "module": "Database.HDBI.Formaters",
        "name": "formatIsoUTCTime",
        "normalized": "UTCTime-\u003eString",
        "package": "hdbi",
        "partial": "Iso UTCTime",
        "signature": "UTCTime-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#",
      "description": {
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI-Parsers.html",
        "fct-type": "module",
        "title": "Parsers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "Parsers",
        "normalized": "",
        "package": "hdbi",
        "partial": "Parsers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseBitField",
      "description": {
        "fct-descr": "\u003cp\u003eParse bit field literal in format ''b'00101011'''. Takes just last 64 bits\n of input, other bits are ignored\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "Parser Word64",
        "fct-source": "src/Database-HDBI-Parsers.html#parseBitField",
        "fct-type": "function",
        "title": "parseBitField"
      },
      "index": {
        "description": "Parse bit field literal in format Takes just last bits of input other bits are ignored",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "parseBitField",
        "normalized": "",
        "package": "hdbi",
        "partial": "Bit Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoDay",
      "description": {
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "Parser Day",
        "fct-source": "src/Database-HDBI-Parsers.html#parseIsoDay",
        "fct-type": "function",
        "title": "parseIsoDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "parseIsoDay",
        "normalized": "",
        "package": "hdbi",
        "partial": "Iso Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoLocalTime",
      "description": {
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "Parser LocalTime",
        "fct-source": "src/Database-HDBI-Parsers.html#parseIsoLocalTime",
        "fct-type": "function",
        "title": "parseIsoLocalTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "parseIsoLocalTime",
        "normalized": "",
        "package": "hdbi",
        "partial": "Iso Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoTimeOfDay",
      "description": {
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "Parser TimeOfDay",
        "fct-source": "src/Database-HDBI-Parsers.html#parseIsoTimeOfDay",
        "fct-type": "function",
        "title": "parseIsoTimeOfDay"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "parseIsoTimeOfDay",
        "normalized": "",
        "package": "hdbi",
        "partial": "Iso Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoZonedTime",
      "description": {
        "fct-module": "Database.HDBI.Parsers",
        "fct-package": "hdbi",
        "fct-signature": "Parser ZonedTime",
        "fct-source": "src/Database-HDBI-Parsers.html#parseIsoZonedTime",
        "fct-type": "function",
        "title": "parseIsoZonedTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Parsers",
        "module": "Database.HDBI.Parsers",
        "name": "parseIsoZonedTime",
        "normalized": "",
        "package": "hdbi",
        "partial": "Iso Zoned Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI-SqlValue.html",
        "fct-type": "module",
        "title": "SqlValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlValue",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:BitField",
      "description": {
        "fct-descr": "\u003cp\u003eAuxiliary type to represent bit field outside of SqlValue\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "newtype",
        "fct-source": "src/Database-HDBI-SqlValue.html#BitField",
        "fct-type": "newtype",
        "title": "BitField"
      },
      "index": {
        "description": "Auxiliary type to represent bit field outside of SqlValue",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "BitField",
        "normalized": "",
        "package": "hdbi",
        "partial": "Bit Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ConvertError",
      "description": {
        "fct-descr": "\u003cp\u003eConvertion error description. Used in \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "data",
        "title": "ConvertError"
      },
      "index": {
        "description": "Convertion error description Used in FromSql typeclass",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ConvertError",
        "normalized": "",
        "package": "hdbi",
        "partial": "Convert Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:FromRow",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-SqlValue.html#FromRow",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "FromRow",
        "normalized": "",
        "package": "hdbi",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:FromSql",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-SqlValue.html#FromSql",
        "fct-type": "class",
        "title": "FromSql"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "FromSql",
        "normalized": "",
        "package": "hdbi",
        "partial": "From Sql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:SqlValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is the main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWHAT IS SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSqlValue is an intermediate type to store\u003cem\u003erecevie data to\u003c/em\u003efrom the\ndatabase. Every database driver will do it's best to properly convert any\nSqlValue to the database record's field, and properly convert the record's field\nto SqlValue back.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e has predefined \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToSql\u003c/a\u003e\u003c/code\u003e instances for many Haskell's\ntypes. Any Haskell's type can be converted to the \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e\nfunction. There is no safeToSql function because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails. Also, any\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e type can be converted to almost any Haskell's type as well. Not any\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e can be converted back to Haskell's type, so there is \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e\nfunction to do that safely. There is also unsafe \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e function of caurse.\n\u003c/p\u003e\u003cp\u003eYou can sure, that \u003ccode\u003efromSql . toSql == id\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSQLVALUE CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructors is the MINIMAL set of constructors, required to\nrepresent the most wide range of native database types.\n\u003c/p\u003e\u003cp\u003eFor example, there is FLOAT native database type and DOUBLE, but any DOUBLE can\ncarry any FLOAT value, so there is no need to create \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructor to\nrepresent FLOAT type, we can do it with Double. But there is DECIMAL database\ntype, representing arbitrary precision value which can be carried just by\n\u003ccode\u003e\u003ca\u003eDecimal\u003c/a\u003e\u003c/code\u003e Haskell's type, so we need a constructor for it.\n\u003c/p\u003e\u003cp\u003eThere is no SqlRational any more, because there is no one database which have\nnative Rational type. This is the key idea: if database can not store this type\nnatively we will not create \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e clause for it.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructor is documented or self-explaining to understand what\nit is needed for.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e'ToSql' and 'FromSql' INSTANCES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe key idea is to do the most obvious conversion between types only if it is\nnot ambiguous. For example, the most obvious conversion of \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e\nis just truncate the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, the most obvious conversion of String to\n\u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e is to try read the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as date and time. But there is no obvious\nway to convert \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e, so if you will try to convert (\u003ccode\u003e\u003ca\u003eSqlInteger\u003c/a\u003e\u003c/code\u003e\n44) to date you will fail. User must handle this cases properly converting\nvalues with right way. It is not very good idea to silently perform strange and\nambiguous convertions between absolutely different data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may be sometimes an error during conversion.  For instance, if you have an\n\u003ccode\u003e\u003ca\u003eSqlText\u003c/a\u003e\u003c/code\u003e and attempting to convert it to an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, but it doesn't parse as\nan \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, you will get an error.  This will be indicated as an exception\nusing \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSTORING SQLVALUE TO DATABASE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e can be converted to \u003ccode\u003eText\u003c/code\u003e and then readed from \u003ccode\u003eText\u003c/code\u003e back. This\nis guaranteed by tests, so the database driver's author can use it to store and\nread data through \u003ccode\u003eText\u003c/code\u003e for types which is not supported by the database\nnatively.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTEXT AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe are using lazy Text everywhere because it is faster than \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and has\nbuilders. Strict text can be converted to one-chanked lazy text with O(1)\ncomplexity, but lazy to strict converts with O(n) complexity, so it is logical\nto use lazy Text.\n\u003c/p\u003e\u003cp\u003eWe are not using ByteString as text encoded in UTF-8, ByteStrings are just\nsequences of bytes. We are using strict ByteStrings because HDBI drivers uses\nthem to pass the ByteString to the C library as \u003ccode\u003eCString\u003c/code\u003e, so it must be strict.\n\u003c/p\u003e\u003cp\u003eWe are not using \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as data of query or as query itself because it is not\neffective in memory and cpu.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDATE AND TIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe are not using time with timezone, because there is no one database working\nwith it natively except PostgreSQL, but the documentations of PostgreSQL says\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTo address these difficulties, we recommend using date\u003c/em\u003etime types that contain\nboth date and time when using time zones. We do not recommend using the type\ntime with time zone (though it is supported by PostgreSQL for legacy\napplications and for compliance with the SQL standard). PostgreSQL assumes your\nlocal time zone for any type containing only date or time./\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use time with timezone.\n\u003c/p\u003e\u003cp\u003eWe are using \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003eTimeWithTimezone\u003c/code\u003e because no one database\nactually save timezone information. All databases just convert datetime to\n\u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e when save data and convert UTCTime back to LOCAL SERVER TIMEZONE when\nreturning the data. So it is logical to work with timezones on the haskell side.\n\u003c/p\u003e\u003cp\u003eTime intervals are not widely supported, actually just in PostgreSQL and\nOracle. So, if you need them you can serialize throgh \u003ccode\u003e\u003ca\u003eSqlText\u003c/a\u003e\u003c/code\u003e by hands, or\nwrite your own \u003ccode\u003e\u003ca\u003eToSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e instances to do that more convenient.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, are equal.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "data",
        "title": "SqlValue"
      },
      "index": {
        "description": "SqlValue is the main type for expressing Haskell values to SQL databases WHAT IS SQLVALUE SqlValue is an intermediate type to store recevie data to from the database Every database driver will do it best to properly convert any SqlValue to the database record field and properly convert the record field to SqlValue back The SqlValue has predefined FromSql and ToSql instances for many Haskell types Any Haskell type can be converted to the SqlValue with toSql function There is no safeToSql function because toSql never fails Also any SqlValue type can be converted to almost any Haskell type as well Not any SqlValue can be converted back to Haskell type so there is safeFromSql function to do that safely There is also unsafe toSql function of caurse You can sure that fromSql toSql id SQLVALUE CONSTRUCTORS SqlValue constructors is the MINIMAL set of constructors required to represent the most wide range of native database types For example there is FLOAT native database type and DOUBLE but any DOUBLE can carry any FLOAT value so there is no need to create SqlValue constructor to represent FLOAT type we can do it with Double But there is DECIMAL database type representing arbitrary precision value which can be carried just by Decimal Haskell type so we need constructor for it There is no SqlRational any more because there is no one database which have native Rational type This is the key idea if database can not store this type natively we will not create SqlValue clause for it Each SqlValue constructor is documented or self-explaining to understand what it is needed for ToSql and FromSql INSTANCES The key idea is to do the most obvious conversion between types only if it is not ambiguous For example the most obvious conversion of Double to Int32 is just truncate the Double the most obvious conversion of String to UTCTime is to try read the String as date and time But there is no obvious way to convert Int32 to UTCTime so if you will try to convert SqlInteger to date you will fail User must handle this cases properly converting values with right way It is not very good idea to silently perform strange and ambiguous convertions between absolutely different data types ERROR CONDITIONS There may be sometimes an error during conversion For instance if you have an SqlText and attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception using fromSql or Left result using safeFromSql STORING SQLVALUE TO DATABASE Any SqlValue can be converted to Text and then readed from Text back This is guaranteed by tests so the database driver author can use it to store and read data through Text for types which is not supported by the database natively TEXT AND BYTESTRINGS We are using lazy Text everywhere because it is faster than String and has builders Strict text can be converted to one-chanked lazy text with complexity but lazy to strict converts with complexity so it is logical to use lazy Text We are not using ByteString as text encoded in UTF-8 ByteStrings are just sequences of bytes We are using strict ByteStrings because HDBI drivers uses them to pass the ByteString to the library as CString so it must be strict We are not using String as data of query or as query itself because it is not effective in memory and cpu DATE AND TIME We are not using time with timezone because there is no one database working with it natively except PostgreSQL but the documentations of PostgreSQL says To address these difficulties we recommend using date time types that contain both date and time when using time zones We do not recommend using the type time with time zone though it is supported by PostgreSQL for legacy applications and for compliance with the SQL standard PostgreSQL assumes your local time zone for any type containing only date or time This is not recomended to use time with timezone We are using UTCTime instead of TimeWithTimezone because no one database actually save timezone information All databases just convert datetime to UTCTime when save data and convert UTCTime back to LOCAL SERVER TIMEZONE when returning the data So it is logical to work with timezones on the haskell side Time intervals are not widely supported actually just in PostgreSQL and Oracle So if you need them you can serialize throgh SqlText by hands or write your own ToSql and FromSql instances to do that more convenient EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to String are equal",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlValue",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ToRow",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-SqlValue.html#ToRow",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ToRow",
        "normalized": "",
        "package": "hdbi",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ToSql",
      "description": {
        "fct-descr": "\u003cp\u003eAll types must convert to SqlValue safely and unambiguously. That's why\n there is no ''safeToSql'' method\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-SqlValue.html#ToSql",
        "fct-type": "class",
        "title": "ToSql"
      },
      "index": {
        "description": "All types must convert to SqlValue safely and unambiguously That why there is no safeToSql method",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ToSql",
        "normalized": "",
        "package": "hdbi",
        "partial": "To Sql",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:BitField",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "BitField",
        "fct-source": "src/Database-HDBI-SqlValue.html#BitField",
        "fct-type": "function",
        "title": "BitField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "BitField",
        "normalized": "",
        "package": "hdbi",
        "partial": "Bit Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ConvertError",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "ConvertError",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "function",
        "title": "ConvertError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ConvertError",
        "normalized": "",
        "package": "hdbi",
        "partial": "Convert Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:IncompatibleTypes",
      "description": {
        "fct-descr": "\u003cp\u003eType names must unique. Expecting names are generated by (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e)\n function\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "IncompatibleTypes",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "function",
        "title": "IncompatibleTypes"
      },
      "index": {
        "description": "Type names must unique Expecting names are generated by show typeOf function",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "IncompatibleTypes",
        "normalized": "",
        "package": "hdbi",
        "partial": "Incompatible Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBitField",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent bit field with 64 bits\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlBitField BitField",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBitField"
      },
      "index": {
        "description": "Represent bit field with bits",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlBitField",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Bit Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBlob",
      "description": {
        "fct-descr": "\u003cp\u003eBlob field in the database. This field can not be implicitly converted\n to any other type because it is just an array of bytes, not an UTF-8\n encoded string.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlBlob ByteString",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBlob"
      },
      "index": {
        "description": "Blob field in the database This field can not be implicitly converted to any other type because it is just an array of bytes not an UTF-8 encoded string",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlBlob",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBool",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlBool Bool",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlBool",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlDecimal",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary precision DECIMAL value\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlDecimal Decimal",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDecimal"
      },
      "index": {
        "description": "Arbitrary precision DECIMAL value",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlDecimal",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlDouble",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlDouble Double",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlDouble",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlInteger",
      "description": {
        "fct-descr": "\u003cp\u003eAny Integer, including Int32, Int64 and Words.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlInteger Integer",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlInteger"
      },
      "index": {
        "description": "Any Integer including Int32 Int64 and Words",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlInteger",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalDate",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlLocalDate Day",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalDate"
      },
      "index": {
        "description": "Local YYYY-MM-DD no timezone",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlLocalDate",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Local Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalTime",
      "description": {
        "fct-descr": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlLocalTime LocalTime",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTime"
      },
      "index": {
        "description": "Local YYYY-MM-DD HH MM SS no timezone",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlLocalTime",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Local Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalTimeOfDay",
      "description": {
        "fct-descr": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlLocalTimeOfDay TimeOfDay",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlLocalTimeOfDay"
      },
      "index": {
        "description": "Local HH MM SS no timezone",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlLocalTimeOfDay",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Local Time Of Day",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlNull",
      "description": {
        "fct-descr": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlNull",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlNull"
      },
      "index": {
        "description": "NULL in SQL or Nothing in Haskell",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlNull",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlText",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlText Text",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlText",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlUTCTime",
      "description": {
        "fct-descr": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlUTCTime UTCTime",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUTCTime"
      },
      "index": {
        "description": "UTC YYYY-MM-DD HH MM SS",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlUTCTime",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql UTCTime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlUUID",
      "description": {
        "fct-descr": "\u003cp\u003eUUID value http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eUUID\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlUUID UUID",
        "fct-source": "src/Database-HDBI-SqlValue.html#SqlValue",
        "fct-type": "function",
        "title": "SqlUUID"
      },
      "index": {
        "description": "UUID value http en.wikipedia.org wiki UUID",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "SqlUUID",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceFromType",
      "description": {
        "fct-descr": "\u003cp\u003ename of type trying to convert\n from.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "function",
        "title": "ceFromType"
      },
      "index": {
        "description": "name of type trying to convert from",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ceFromType",
        "normalized": "",
        "package": "hdbi",
        "partial": "From Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceReason",
      "description": {
        "fct-descr": "\u003cp\u003eDetailed description of convertion error\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "function",
        "title": "ceReason"
      },
      "index": {
        "description": "Detailed description of convertion error",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ceReason",
        "normalized": "",
        "package": "hdbi",
        "partial": "Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceToType",
      "description": {
        "fct-descr": "\u003cp\u003ename of target type.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBI-SqlValue.html#ConvertError",
        "fct-type": "function",
        "title": "ceToType"
      },
      "index": {
        "description": "name of target type",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "ceToType",
        "normalized": "",
        "package": "hdbi",
        "partial": "To Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:fromRow",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e a",
        "fct-source": "src/Database-HDBI-SqlValue.html#fromRow",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "fromRow",
        "normalized": "[SqlValue]-\u003ea",
        "package": "hdbi",
        "partial": "Row",
        "signature": "[SqlValue]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:fromSql",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe method, throws \u003ccode\u003e\u003ca\u003eConvertError\u003c/a\u003e\u003c/code\u003e if convertion failed. Has default\n implementation.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlValue -\u003e a",
        "fct-source": "src/Database-HDBI-SqlValue.html#fromSql",
        "fct-type": "method",
        "title": "fromSql"
      },
      "index": {
        "description": "Unsafe method throws ConvertError if convertion failed Has default implementation",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "fromSql",
        "normalized": "SqlValue-\u003ea",
        "package": "hdbi",
        "partial": "Sql",
        "signature": "SqlValue-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003ecreates row of one element\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "a -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "creates row of one element",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "one",
        "normalized": "a-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "a-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:oneb",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "ByteString -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#oneb",
        "fct-type": "function",
        "title": "oneb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "oneb",
        "normalized": "ByteString-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "ByteString-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onebl",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "ByteString -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#onebl",
        "fct-type": "function",
        "title": "onebl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "onebl",
        "normalized": "ByteString-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "ByteString-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:oned",
      "description": {
        "fct-descr": "\u003cp\u003ecreate row of one Double element\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "Double -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#oned",
        "fct-type": "function",
        "title": "oned"
      },
      "index": {
        "description": "create row of one Double element",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "oned",
        "normalized": "Double-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "Double-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onei",
      "description": {
        "fct-descr": "\u003cp\u003ecreate row of one Integer element\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "Integer -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#onei",
        "fct-type": "function",
        "title": "onei"
      },
      "index": {
        "description": "create row of one Integer element",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "onei",
        "normalized": "Integer-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "Integer-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onet",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "Text -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#onet",
        "fct-type": "function",
        "title": "onet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "onet",
        "normalized": "Text-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "Text-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onetl",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "Text -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#onetl",
        "fct-type": "function",
        "title": "onetl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "onetl",
        "normalized": "Text-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "",
        "signature": "Text-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeFromRow",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Either ConvertError a",
        "fct-source": "src/Database-HDBI-SqlValue.html#safeFromRow",
        "fct-type": "method",
        "title": "safeFromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "safeFromRow",
        "normalized": "[SqlValue]-\u003eEither ConvertError a",
        "package": "hdbi",
        "partial": "From Row",
        "signature": "[SqlValue]-\u003eEither ConvertError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeFromSql",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "SqlValue -\u003e Either ConvertError a",
        "fct-source": "src/Database-HDBI-SqlValue.html#safeFromSql",
        "fct-type": "method",
        "title": "safeFromSql"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "safeFromSql",
        "normalized": "SqlValue-\u003eEither ConvertError a",
        "package": "hdbi",
        "partial": "From Sql",
        "signature": "SqlValue-\u003eEither ConvertError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeUnOne",
      "description": {
        "fct-descr": "\u003cp\u003eunwrap the row of one element safely\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Either ConvertError a",
        "fct-source": "src/Database-HDBI-SqlValue.html#safeUnOne",
        "fct-type": "function",
        "title": "safeUnOne"
      },
      "index": {
        "description": "unwrap the row of one element safely",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "safeUnOne",
        "normalized": "[SqlValue]-\u003eEither ConvertError a",
        "package": "hdbi",
        "partial": "Un One",
        "signature": "[SqlValue]-\u003eEither ConvertError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:toRow",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "a -\u003e [SqlValue]",
        "fct-source": "src/Database-HDBI-SqlValue.html#toRow",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "toRow",
        "normalized": "a-\u003e[SqlValue]",
        "package": "hdbi",
        "partial": "Row",
        "signature": "a-\u003e[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:toSql",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "a -\u003e SqlValue",
        "fct-source": "src/Database-HDBI-SqlValue.html#toSql",
        "fct-type": "method",
        "title": "toSql"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "toSql",
        "normalized": "a-\u003eSqlValue",
        "package": "hdbi",
        "partial": "Sql",
        "signature": "a-\u003eSqlValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unBitField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "Word64",
        "fct-source": "src/Database-HDBI-SqlValue.html#BitField",
        "fct-type": "function",
        "title": "unBitField"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unBitField",
        "normalized": "",
        "package": "hdbi",
        "partial": "Bit Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unone",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003esafeUnOne\u003c/a\u003e\u003c/code\u003e but throws an exception if not converted\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e a",
        "fct-source": "src/Database-HDBI-SqlValue.html#unone",
        "fct-type": "function",
        "title": "unone"
      },
      "index": {
        "description": "same as safeUnOne but throws an exception if not converted",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unone",
        "normalized": "[SqlValue]-\u003ea",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unoneb",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e ByteString",
        "fct-source": "src/Database-HDBI-SqlValue.html#unoneb",
        "fct-type": "function",
        "title": "unoneb"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unoneb",
        "normalized": "[SqlValue]-\u003eByteString",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonebl",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e ByteString",
        "fct-source": "src/Database-HDBI-SqlValue.html#unonebl",
        "fct-type": "function",
        "title": "unonebl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unonebl",
        "normalized": "[SqlValue]-\u003eByteString",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unoned",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Double",
        "fct-source": "src/Database-HDBI-SqlValue.html#unoned",
        "fct-type": "function",
        "title": "unoned"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unoned",
        "normalized": "[SqlValue]-\u003eDouble",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonei",
      "description": {
        "fct-descr": "\u003cp\u003eunwrap row of one Integer\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Integer",
        "fct-source": "src/Database-HDBI-SqlValue.html#unonei",
        "fct-type": "function",
        "title": "unonei"
      },
      "index": {
        "description": "unwrap row of one Integer",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unonei",
        "normalized": "[SqlValue]-\u003eInteger",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonet",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Text",
        "fct-source": "src/Database-HDBI-SqlValue.html#unonet",
        "fct-type": "function",
        "title": "unonet"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unonet",
        "normalized": "[SqlValue]-\u003eText",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonetl",
      "description": {
        "fct-module": "Database.HDBI.SqlValue",
        "fct-package": "hdbi",
        "fct-signature": "[SqlValue] -\u003e Text",
        "fct-source": "src/Database-HDBI-SqlValue.html#unonetl",
        "fct-type": "function",
        "title": "unonetl"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI SqlValue",
        "module": "Database.HDBI.SqlValue",
        "name": "unonetl",
        "normalized": "[SqlValue]-\u003eText",
        "package": "hdbi",
        "partial": "",
        "signature": "[SqlValue]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for HDBI.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for HDBI Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "Types",
        "normalized": "",
        "package": "hdbi",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:ConnStatus",
      "description": {
        "fct-descr": "\u003cp\u003eConnection status\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-Types.html#ConnStatus",
        "fct-type": "data",
        "title": "ConnStatus"
      },
      "index": {
        "description": "Connection status",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnStatus",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:ConnWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eWrapps the specific connection. You can write database-independent code\n mixing it with database-dependent using \u003ccode\u003e\u003ca\u003ecastConnection\u003c/a\u003e\u003c/code\u003e function to cast\n Wrapper to specific connection type, if you need.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-Types.html#ConnWrapper",
        "fct-type": "data",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "Wrapps the specific connection You can write database-independent code mixing it with database-dependent using castConnection function to cast Wrapper to specific connection type if you need",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass to abstract the working with connection.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-Types.html#Connection",
        "fct-type": "class",
        "title": "Connection"
      },
      "index": {
        "description": "Typeclass to abstract the working with connection",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "Connection",
        "normalized": "",
        "package": "hdbi",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003esafe newtype wrapper for queries. Just lazy Text inside.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "newtype",
        "fct-source": "src/Database-HDBI-Types.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "safe newtype wrapper for queries Just lazy Text inside",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "Query",
        "normalized": "",
        "package": "hdbi",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003eError throwing by driver when database operation fails\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-Types.html#SqlError",
        "fct-type": "data",
        "title": "SqlError"
      },
      "index": {
        "description": "Error throwing by driver when database operation fails",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003eStatement prepared on database side or just in memory\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "class",
        "fct-source": "src/Database-HDBI-Types.html#Statement",
        "fct-type": "class",
        "title": "Statement"
      },
      "index": {
        "description": "Statement prepared on database side or just in memory",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "Statement",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:StatementStatus",
      "description": {
        "fct-descr": "\u003cp\u003eStatement's status returning by function \u003ccode\u003e\u003ca\u003estatementStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-Types.html#StatementStatus",
        "fct-type": "data",
        "title": "StatementStatus"
      },
      "index": {
        "description": "Statement status returning by function statementStatus",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StatementStatus",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:StmtWrapper",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around some specific \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e instance to write\n database-independent code\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "data",
        "fct-source": "src/Database-HDBI-Types.html#StmtWrapper",
        "fct-type": "data",
        "title": "StmtWrapper"
      },
      "index": {
        "description": "Wrapper around some specific Statement instance to write database-independent code",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StmtWrapper",
        "normalized": "",
        "package": "hdbi",
        "partial": "Stmt Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnBad",
      "description": {
        "fct-descr": "\u003cp\u003eConnection is in some bad state\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "ConnBad",
        "fct-source": "src/Database-HDBI-Types.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnBad"
      },
      "index": {
        "description": "Connection is in some bad state",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnBad",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn Bad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnDisconnected",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessfully disconnected, all\n statements must be closed at this state\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "ConnDisconnected",
        "fct-source": "src/Database-HDBI-Types.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnDisconnected"
      },
      "index": {
        "description": "Successfully disconnected all statements must be closed at this state",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnDisconnected",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn Disconnected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnOK",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessfully connected\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "ConnOK",
        "fct-source": "src/Database-HDBI-Types.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnOK"
      },
      "index": {
        "description": "Successfully connected",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnOK",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnWrapper",
      "description": {
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "ConnWrapper conn",
        "fct-source": "src/Database-HDBI-Types.html#ConnWrapper",
        "fct-type": "function",
        "title": "ConnWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "ConnWrapper",
        "normalized": "",
        "package": "hdbi",
        "partial": "Conn Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:Query",
      "description": {
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "Query",
        "fct-source": "src/Database-HDBI-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "Query",
        "normalized": "",
        "package": "hdbi",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:SqlDriverError",
      "description": {
        "fct-descr": "\u003cp\u003eDriver-specific operational error\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "SqlDriverError",
        "fct-source": "src/Database-HDBI-Types.html#SqlError",
        "fct-type": "function",
        "title": "SqlDriverError"
      },
      "index": {
        "description": "Driver-specific operational error",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "SqlDriverError",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Driver Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:SqlError",
      "description": {
        "fct-descr": "\u003cp\u003eInternal database error\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "SqlError",
        "fct-source": "src/Database-HDBI-Types.html#SqlError",
        "fct-type": "function",
        "title": "SqlError"
      },
      "index": {
        "description": "Internal database error",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "SqlError",
        "normalized": "",
        "package": "hdbi",
        "partial": "Sql Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementExecuted",
      "description": {
        "fct-descr": "\u003cp\u003eExpression executed, now you can fetch the rows \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StatementExecuted",
        "fct-source": "src/Database-HDBI-Types.html#StatementStatus",
        "fct-type": "function",
        "title": "StatementExecuted"
      },
      "index": {
        "description": "Expression executed now you can fetch the rows Statement",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StatementExecuted",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement Executed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementFetched",
      "description": {
        "fct-descr": "\u003cp\u003eFetching is done, no more rows can be queried\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StatementFetched",
        "fct-source": "src/Database-HDBI-Types.html#StatementStatus",
        "fct-type": "function",
        "title": "StatementFetched"
      },
      "index": {
        "description": "Fetching is done no more rows can be queried",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StatementFetched",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement Fetched",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementFinished",
      "description": {
        "fct-descr": "\u003cp\u003eFinished, no more actions with this statement\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StatementFinished",
        "fct-source": "src/Database-HDBI-Types.html#StatementStatus",
        "fct-type": "function",
        "title": "StatementFinished"
      },
      "index": {
        "description": "Finished no more actions with this statement",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StatementFinished",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementNew",
      "description": {
        "fct-descr": "\u003cp\u003eNewly created statement\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StatementNew",
        "fct-source": "src/Database-HDBI-Types.html#StatementStatus",
        "fct-type": "function",
        "title": "StatementNew"
      },
      "index": {
        "description": "Newly created statement",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StatementNew",
        "normalized": "",
        "package": "hdbi",
        "partial": "Statement New",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StmtWrapper",
      "description": {
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StmtWrapper stmt",
        "fct-source": "src/Database-HDBI-Types.html#StmtWrapper",
        "fct-type": "function",
        "title": "StmtWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "StmtWrapper",
        "normalized": "",
        "package": "hdbi",
        "partial": "Stmt Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:begin",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly start the transaction. Without starting the transaction you\n can not commit or rollback it. HDBI does not check if transaction started\n or not, this is the application's resposibility.\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003estart\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#begin",
        "fct-type": "method",
        "title": "begin"
      },
      "index": {
        "description": "Explicitly start the transaction Without starting the transaction you can not commit or rollback it HDBI does not check if transaction started or not this is the application resposibility This is not recomended to use start by hands use withTransaction instead",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "begin",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:castConnection",
      "description": {
        "fct-descr": "\u003cp\u003eCast wrapped connection to the specific connection type using \u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e. You can write database-specific code safely casting wrapped\n connection to specific type dynamically.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "ConnWrapper -\u003e Maybe conn",
        "fct-source": "src/Database-HDBI-Types.html#castConnection",
        "fct-type": "function",
        "title": "castConnection"
      },
      "index": {
        "description": "Cast wrapped connection to the specific connection type using cast of Typeable You can write database-specific code safely casting wrapped connection to specific type dynamically",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "castConnection",
        "normalized": "ConnWrapper-\u003eMaybe a",
        "package": "hdbi",
        "partial": "Connection",
        "signature": "ConnWrapper-\u003eMaybe conn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:castStatement",
      "description": {
        "fct-descr": "\u003cp\u003eCast wrapped statement to specific type.  You can write database-specific\n code safely casting wrapped statement to specific type dynamically.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "StmtWrapper -\u003e Maybe stmt",
        "fct-source": "src/Database-HDBI-Types.html#castStatement",
        "fct-type": "function",
        "title": "castStatement"
      },
      "index": {
        "description": "Cast wrapped statement to specific type You can write database-specific code safely casting wrapped statement to specific type dynamically",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "castStatement",
        "normalized": "StmtWrapper-\u003eMaybe a",
        "package": "hdbi",
        "partial": "Statement",
        "signature": "StmtWrapper-\u003eMaybe stmt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:clone",
      "description": {
        "fct-descr": "\u003cp\u003eClone the database connection. Return new connection with the same\n settings\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO conn",
        "fct-source": "src/Database-HDBI-Types.html#clone",
        "fct-type": "method",
        "title": "clone"
      },
      "index": {
        "description": "Clone the database connection Return new connection with the same settings",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "clone",
        "normalized": "a-\u003eIO a",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eIO conn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eExplicitly commit started transaction. You must \u003ccode\u003estart\u003c/code\u003e the transaction\n before \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#commit",
        "fct-type": "method",
        "title": "commit"
      },
      "index": {
        "description": "Explicitly commit started transaction You must start the transaction before commit This is not recomended to use commit by hands use withTransaction instead",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "commit",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:connStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current status of connection\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO ConnStatus",
        "fct-source": "src/Database-HDBI-Types.html#connStatus",
        "fct-type": "method",
        "title": "connStatus"
      },
      "index": {
        "description": "Return the current status of connection",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "connStatus",
        "normalized": "a-\u003eIO ConnStatus",
        "package": "hdbi",
        "partial": "Status",
        "signature": "conn-\u003eIO ConnStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:dbTransactionSupport",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the current database supports transactions. If False, then\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e should be expected to raise errors.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e Bool",
        "fct-source": "src/Database-HDBI-Types.html#dbTransactionSupport",
        "fct-type": "method",
        "title": "dbTransactionSupport"
      },
      "index": {
        "description": "Whether or not the current database supports transactions If False then commit and rollback should be expected to raise errors",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "dbTransactionSupport",
        "normalized": "a-\u003eBool",
        "package": "hdbi",
        "partial": "Transaction Support",
        "signature": "conn-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnection from the database. Every opened statement must be finished\n after this method executed.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#disconnect",
        "fct-type": "method",
        "title": "disconnect"
      },
      "index": {
        "description": "Disconnection from the database Every opened statement must be finished after this method executed",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "disconnect",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute single query with parameters. In query each parameter must be\n replaced with ''?'' placeholder. This rule is true for every database, even\n for PostgreSQL which uses placeholders like ''$1''. Application must ensure\n that the count of placeholders is equal to count of parameter, it is likely\n cause an error if it is not.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e row -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#execute",
        "fct-type": "method",
        "title": "execute"
      },
      "index": {
        "description": "Execute single query with parameters In query each parameter must be replaced with placeholder This rule is true for every database even for PostgreSQL which uses placeholders like Application must ensure that the count of placeholders is equal to count of parameter it is likely cause an error if it is not",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "execute",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "stmt-\u003erow-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute one query many times with a list of paramters. Has default\n implementation through \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e [row] -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#executeMany",
        "fct-type": "method",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute one query many times with list of paramters Has default implementation through execute",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "executeMany",
        "normalized": "a-\u003e[b]-\u003eIO()",
        "package": "hdbi",
        "partial": "Many",
        "signature": "stmt-\u003e[row]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:fetch",
      "description": {
        "fct-descr": "\u003cp\u003eFetch next row from the executed statement. Return Nothing when there is\n no more results acceptable. Each call return next row from the result.\n\u003c/p\u003e\u003cp\u003eUPDATE INSERT and DELETE queries will likely return Nothing.\n\u003c/p\u003e\u003cp\u003eNOTE: You still need to explicitly finish the statement after receiving\n Nothing, unlike with old HDBC interface.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO (Maybe row)",
        "fct-source": "src/Database-HDBI-Types.html#fetch",
        "fct-type": "method",
        "title": "fetch"
      },
      "index": {
        "description": "Fetch next row from the executed statement Return Nothing when there is no more results acceptable Each call return next row from the result UPDATE INSERT and DELETE queries will likely return Nothing NOTE You still need to explicitly finish the statement after receiving Nothing unlike with old HDBC interface",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "fetch",
        "normalized": "a-\u003eIO(Maybe b)",
        "package": "hdbi",
        "partial": "",
        "signature": "stmt-\u003eIO(Maybe row)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:fetchAll",
      "description": {
        "fct-descr": "\u003cp\u003eOptional method to strictly fetch all rows from statement. Has default\n implementation through \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO (Seq row)",
        "fct-source": "src/Database-HDBI-Types.html#fetchAll",
        "fct-type": "method",
        "title": "fetchAll"
      },
      "index": {
        "description": "Optional method to strictly fetch all rows from statement Has default implementation through fetch",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "fetchAll",
        "normalized": "a-\u003eIO(Seq b)",
        "package": "hdbi",
        "partial": "All",
        "signature": "stmt-\u003eIO(Seq row)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:finish",
      "description": {
        "fct-descr": "\u003cp\u003eFinish statement and remove database-specific pointer. No any actions may\n be proceeded after closing the statement, excpet \u003ccode\u003e\u003ca\u003estatementStatus\u003c/a\u003e\u003c/code\u003e which\n will return \u003ccode\u003e\u003ca\u003eStatementFinished\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#finish",
        "fct-type": "method",
        "title": "finish"
      },
      "index": {
        "description": "Finish statement and remove database-specific pointer No any actions may be proceeded after closing the statement excpet statementStatus which will return StatementFinished and reset",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "finish",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "stmt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:getColumnNames",
      "description": {
        "fct-descr": "\u003cp\u003eReturn list of column names of the result.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO [Text]",
        "fct-source": "src/Database-HDBI-Types.html#getColumnNames",
        "fct-type": "method",
        "title": "getColumnNames"
      },
      "index": {
        "description": "Return list of column names of the result",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "getColumnNames",
        "normalized": "a-\u003eIO[Text]",
        "package": "hdbi",
        "partial": "Column Names",
        "signature": "stmt-\u003eIO[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:getColumnsCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of columns representing the result. Has default\n implementation through \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO Int",
        "fct-source": "src/Database-HDBI-Types.html#getColumnsCount",
        "fct-type": "method",
        "title": "getColumnsCount"
      },
      "index": {
        "description": "Return the number of columns representing the result Has default implementation through getColumnNames",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "getColumnsCount",
        "normalized": "a-\u003eIO Int",
        "package": "hdbi",
        "partial": "Columns Count",
        "signature": "stmt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:hdbiDriverName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the HDBI driver module for this connection. Ideally would be\n the same as the database name portion of the Cabal package name.  For\n instance, \"sqlite3\" or \"postgresql\".  This is the layer that is bound most\n tightly to HDBI\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e String",
        "fct-source": "src/Database-HDBI-Types.html#hdbiDriverName",
        "fct-type": "method",
        "title": "hdbiDriverName"
      },
      "index": {
        "description": "The name of the HDBI driver module for this connection Ideally would be the same as the database name portion of the Cabal package name For instance sqlite3 or postgresql This is the layer that is bound most tightly to HDBI",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "hdbiDriverName",
        "normalized": "a-\u003eString",
        "package": "hdbi",
        "partial": "Driver Name",
        "signature": "conn-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:inTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if current connection is in transaction state. Return True if\n transaction is started. Each driver implements it with it's own way: some\n RDBMS has API to check transaction state (like PostgreSQL), some has no\n (like Sqlite3).\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO Bool",
        "fct-source": "src/Database-HDBI-Types.html#inTransaction",
        "fct-type": "method",
        "title": "inTransaction"
      },
      "index": {
        "description": "Check if current connection is in transaction state Return True if transaction is started Each driver implements it with it own way some RDBMS has API to check transaction state like PostgreSQL some has no like Sqlite3",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "inTransaction",
        "normalized": "a-\u003eIO Bool",
        "package": "hdbi",
        "partial": "Transaction",
        "signature": "conn-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:originalQuery",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the original query the statement was prepared from.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e Query",
        "fct-source": "src/Database-HDBI-Types.html#originalQuery",
        "fct-type": "method",
        "title": "originalQuery"
      },
      "index": {
        "description": "Return the original query the statement was prepared from",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "originalQuery",
        "normalized": "a-\u003eQuery",
        "package": "hdbi",
        "partial": "Query",
        "signature": "stmt-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:prepare",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare the statement. Some databases has no feature of preparing\n statements (PostgreSQL can just prepare named statements), so each driver\n behaves it's own way.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e Query -\u003e IO (ConnStatement conn)",
        "fct-source": "src/Database-HDBI-Types.html#prepare",
        "fct-type": "method",
        "title": "prepare"
      },
      "index": {
        "description": "Prepare the statement Some databases has no feature of preparing statements PostgreSQL can just prepare named statements so each driver behaves it own way",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "prepare",
        "normalized": "a-\u003eQuery-\u003eIO(ConnStatement a)",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eQuery-\u003eIO(ConnStatement conn)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:reset",
      "description": {
        "fct-descr": "\u003cp\u003eReset statement to it's initial state, just like after \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#reset",
        "fct-type": "method",
        "title": "reset"
      },
      "index": {
        "description": "Reset statement to it initial state just like after prepare",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "reset",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "stmt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRollback the transaction's state. You must \u003ccode\u003estart\u003c/code\u003e the transaction before\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#rollback",
        "fct-type": "method",
        "title": "rollback"
      },
      "index": {
        "description": "Rollback the transaction state You must start the transaction before rollback This is not recomended to use rollback by hands use withTransaction instead",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "rollback",
        "normalized": "a-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun query and safely finalize statement after that. Has default\n implementation through \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e Query -\u003e row -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#run",
        "fct-type": "method",
        "title": "run"
      },
      "index": {
        "description": "Run query and safely finalize statement after that Has default implementation through execute",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "run",
        "normalized": "a-\u003eQuery-\u003eb-\u003eIO()",
        "package": "hdbi",
        "partial": "",
        "signature": "conn-\u003eQuery-\u003erow-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetch",
      "description": {
        "fct-descr": "\u003cp\u003eRun query and return first row\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "con -\u003e Query -\u003e params -\u003e IO (Maybe row)",
        "fct-source": "src/Database-HDBI-Types.html#runFetch",
        "fct-type": "function",
        "title": "runFetch"
      },
      "index": {
        "description": "Run query and return first row",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "runFetch",
        "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Maybe c)",
        "package": "hdbi",
        "partial": "Fetch",
        "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Maybe row)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetchAll",
      "description": {
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "con -\u003e Query -\u003e params -\u003e IO (Seq row)",
        "fct-source": "src/Database-HDBI-Types.html#runFetchAll",
        "fct-type": "function",
        "title": "runFetchAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "runFetchAll",
        "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Seq c)",
        "package": "hdbi",
        "partial": "Fetch All",
        "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Seq row)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetchOne",
      "description": {
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "con -\u003e Query -\u003e params -\u003e IO (Maybe col)",
        "fct-source": "src/Database-HDBI-Types.html#runFetchOne",
        "fct-type": "function",
        "title": "runFetchOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "runFetchOne",
        "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Maybe c)",
        "package": "hdbi",
        "partial": "Fetch One",
        "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Maybe col)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute query with set of parameters. Has default implementation through\n \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e Query -\u003e [row] -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#runMany",
        "fct-type": "method",
        "title": "runMany"
      },
      "index": {
        "description": "Execute query with set of parameters Has default implementation through executeMany",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "runMany",
        "normalized": "a-\u003eQuery-\u003e[b]-\u003eIO()",
        "package": "hdbi",
        "partial": "Many",
        "signature": "conn-\u003eQuery-\u003e[row]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRun raw query. Many databases has an ablility to run a raw queries\n separated by semicolon. Implementation of this method must use this\n ability.\n Has default implementation through \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e Query -\u003e IO ()",
        "fct-source": "src/Database-HDBI-Types.html#runRaw",
        "fct-type": "method",
        "title": "runRaw"
      },
      "index": {
        "description": "Run raw query Many databases has an ablility to run raw queries separated by semicolon Implementation of this method must use this ability Has default implementation through run",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "runRaw",
        "normalized": "a-\u003eQuery-\u003eIO()",
        "package": "hdbi",
        "partial": "Raw",
        "signature": "conn-\u003eQuery-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:seErrorCode",
      "description": {
        "fct-descr": "\u003cp\u003eLow level database-specific error code\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBI-Types.html#SqlError",
        "fct-type": "function",
        "title": "seErrorCode"
      },
      "index": {
        "description": "Low level database-specific error code",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "seErrorCode",
        "normalized": "",
        "package": "hdbi",
        "partial": "Error Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:seErrorMsg",
      "description": {
        "fct-descr": "\u003cp\u003eError description\n\u003c/p\u003e\u003cp\u003eError description from the database client library\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "String",
        "fct-source": "src/Database-HDBI-Types.html#SqlError",
        "fct-type": "function",
        "title": "seErrorMsg"
      },
      "index": {
        "description": "Error description Error description from the database client library",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "seErrorMsg",
        "normalized": "",
        "package": "hdbi",
        "partial": "Error Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:statementStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current statement's status.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "stmt -\u003e IO StatementStatus",
        "fct-source": "src/Database-HDBI-Types.html#statementStatus",
        "fct-type": "method",
        "title": "statementStatus"
      },
      "index": {
        "description": "Return the current statement status",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "statementStatus",
        "normalized": "a-\u003eIO StatementStatus",
        "package": "hdbi",
        "partial": "Status",
        "signature": "stmt-\u003eIO StatementStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:unQuery",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap query to lazy Text\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "Text",
        "fct-source": "src/Database-HDBI-Types.html#Query",
        "fct-type": "function",
        "title": "unQuery"
      },
      "index": {
        "description": "Unwrap query to lazy Text",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "unQuery",
        "normalized": "",
        "package": "hdbi",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:withStatement",
      "description": {
        "fct-descr": "\u003cp\u003eCreate statement and execute monadic action using\nit. Safely finalize Statement after action is done.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn-\u003e Query-\u003e (stmt -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withStatement"
      },
      "index": {
        "description": "Create statement and execute monadic action using it Safely finalize Statement after action is done",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "withStatement",
        "normalized": "a-\u003eQuery-\u003e(b-\u003eIO c)-\u003eIO c",
        "package": "hdbi",
        "partial": "Statement",
        "signature": "conn-\u003eQuery-\u003e(stmt-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute some code.  If any uncaught exception occurs, run\n\u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e and re-raise it.  Otherwise, run \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and return.\n\u003c/p\u003e\u003cp\u003eThis function, therefore, encapsulates the logical property that a transaction\nis all about: all or nothing.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e object passed in is passed directly to the specified function\nas a convenience.\n\u003c/p\u003e\u003cp\u003eThis function traps \u003cem\u003eall\u003c/em\u003e uncaught exceptions, not just \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.  Therefore,\nyou will get a rollback for any exception that you don't handle.  That's\nprobably what you want anyway.\n\u003c/p\u003e\u003cp\u003eIf there was an error while running \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, this error will not be\nreported since the original exception will be propogated back.  (You'd probably\nlike to know about the root cause for all of this anyway.)  Feedback\non this behavior is solicited.\n\u003c/p\u003e",
        "fct-module": "Database.HDBI.Types",
        "fct-package": "hdbi",
        "fct-signature": "conn -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-HDBI-Types.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute some code If any uncaught exception occurs run rollback and re-raise it Otherwise run commit and return This function therefore encapsulates the logical property that transaction is all about all or nothing The Connection object passed in is passed directly to the specified function as convenience This function traps all uncaught exceptions not just SqlError Therefore you will get rollback for any exception that you don handle That probably what you want anyway If there was an error while running rollback this error will not be reported since the original exception will be propogated back You probably like to know about the root cause for all of this anyway Feedback on this behavior is solicited",
        "hierarchy": "Database HDBI Types",
        "module": "Database.HDBI.Types",
        "name": "withTransaction",
        "normalized": "a-\u003eIO b-\u003eIO b",
        "package": "hdbi",
        "partial": "Transaction",
        "signature": "conn-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI.html#",
      "description": {
        "fct-module": "Database.HDBI",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Database-HDBI.html",
        "fct-type": "module",
        "title": "HDBI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database HDBI",
        "module": "Database.HDBI",
        "name": "HDBI",
        "normalized": "",
        "package": "hdbi",
        "partial": "HDBI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#",
      "description": {
        "fct-module": "Language.Haskell.TH.HDBI",
        "fct-package": "hdbi",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-HDBI.html",
        "fct-type": "module",
        "title": "HDBI"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell TH HDBI",
        "module": "Language.Haskell.TH.HDBI",
        "name": "HDBI",
        "normalized": "",
        "package": "hdbi",
        "partial": "HDBI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#v:deriveFromRow",
      "description": {
        "fct-module": "Language.Haskell.TH.HDBI",
        "fct-package": "hdbi",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Language-Haskell-TH-HDBI.html#deriveFromRow",
        "fct-type": "function",
        "title": "deriveFromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell TH HDBI",
        "module": "Language.Haskell.TH.HDBI",
        "name": "deriveFromRow",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "hdbi",
        "partial": "From Row",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#v:deriveToRow",
      "description": {
        "fct-descr": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e instance for any data with one constructor or for newtype\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.HDBI",
        "fct-package": "hdbi",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Language-Haskell-TH-HDBI.html#deriveToRow",
        "fct-type": "function",
        "title": "deriveToRow"
      },
      "index": {
        "description": "Derive ToRow instance for any data with one constructor or for newtype",
        "hierarchy": "Language Haskell TH HDBI",
        "module": "Language.Haskell.TH.HDBI",
        "name": "deriveToRow",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "hdbi",
        "partial": "To Row",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  }
]