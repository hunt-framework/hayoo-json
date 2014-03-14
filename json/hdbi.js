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
        "word": "hdbi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "DriverUtils",
          "package": "hdbi",
          "source": "src/Database-HDBI-DriverUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "DriverUtils",
          "package": "hdbi",
          "partial": "Driver Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of weak pointers to childs with concurrent access\n\u003c/p\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "ChildList",
          "package": "hdbi",
          "source": "src/Database-HDBI-DriverUtils.html#ChildList",
          "type": "data"
        },
        "index": {
          "description": "List of weak pointers to childs with concurrent access",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "ChildList",
          "package": "hdbi",
          "partial": "Child List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#t:ChildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.DriverUtils",
          "name": "ChildList",
          "package": "hdbi",
          "signature": "ChildList",
          "source": "src/Database-HDBI-DriverUtils.html#ChildList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "ChildList",
          "package": "hdbi",
          "partial": "Child List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:ChildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a new child to the existing list.  Also takes care of registering\na finalizer for it, to remove it from the list when possible. \n\u003c/p\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "addChild",
          "package": "hdbi",
          "signature": "ChildList stmt -\u003e stmt -\u003e IO ()",
          "source": "src/Database-HDBI-DriverUtils.html#addChild",
          "type": "function"
        },
        "index": {
          "description": "Adds new child to the existing list Also takes care of registering finalizer for it to remove it from the list when possible",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "addChild",
          "normalized": "ChildList a-\u003ea-\u003eIO()",
          "package": "hdbi",
          "partial": "Child",
          "signature": "ChildList stmt-\u003estmt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:addChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLittle hackish child counter,\n need to wait all child\n finalizers in \u003ccode\u003e\u003ca\u003ecloseAllChildren\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "clCounter",
          "package": "hdbi",
          "signature": "TVar Int",
          "source": "src/Database-HDBI-DriverUtils.html#ChildList",
          "type": "function"
        },
        "index": {
          "description": "Little hackish child counter need to wait all child finalizers in closeAllChildren",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "clCounter",
          "package": "hdbi",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.DriverUtils",
          "name": "clList",
          "package": "hdbi",
          "signature": "TVar (IntMap (Weak stmt))",
          "source": "src/Database-HDBI-DriverUtils.html#ChildList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "clList",
          "package": "hdbi",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.DriverUtils",
          "name": "clNextKey",
          "package": "hdbi",
          "signature": "MVar Int",
          "source": "src/Database-HDBI-DriverUtils.html#ChildList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "clNextKey",
          "package": "hdbi",
          "partial": "Next Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:clNextKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose all children.  Intended to be called by the \u003ccode\u003edisconnect\u003c/code\u003e function\nin \u003ccode\u003eConnection\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere may be a potential race condition wherein a call to newSth at the same\ntime as a call to this function may result in the new child not being closed.\n\u003c/p\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "closeAllChildren",
          "package": "hdbi",
          "signature": "ChildList stmt -\u003e IO ()",
          "source": "src/Database-HDBI-DriverUtils.html#closeAllChildren",
          "type": "function"
        },
        "index": {
          "description": "Close all children Intended to be called by the disconnect function in Connection There may be potential race condition wherein call to newSth at the same time as call to this function may result in the new child not being closed",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "closeAllChildren",
          "normalized": "ChildList a-\u003eIO()",
          "package": "hdbi",
          "partial": "All Children",
          "signature": "ChildList stmt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:closeAllChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enew empty child list\n\u003c/p\u003e",
          "module": "Database.HDBI.DriverUtils",
          "name": "newChildList",
          "package": "hdbi",
          "signature": "IO (ChildList stmt)",
          "source": "src/Database-HDBI-DriverUtils.html#newChildList",
          "type": "function"
        },
        "index": {
          "description": "new empty child list",
          "hierarchy": "Database HDBI DriverUtils",
          "module": "Database.HDBI.DriverUtils",
          "name": "newChildList",
          "package": "hdbi",
          "partial": "Child List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-DriverUtils.html#v:newChildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "Formaters",
          "package": "hdbi",
          "source": "src/Database-HDBI-Formaters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "Formaters",
          "package": "hdbi",
          "partial": "Formaters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "formatBitField",
          "package": "hdbi",
          "signature": "Word64 -\u003e String",
          "source": "src/Database-HDBI-Formaters.html#formatBitField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "formatBitField",
          "normalized": "Word-\u003eString",
          "package": "hdbi",
          "partial": "Bit Field",
          "signature": "Word-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatBitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoDay",
          "package": "hdbi",
          "signature": "Day -\u003e String",
          "source": "src/Database-HDBI-Formaters.html#formatIsoDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoDay",
          "normalized": "Day-\u003eString",
          "package": "hdbi",
          "partial": "Iso Day",
          "signature": "Day-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoLocalTime",
          "package": "hdbi",
          "signature": "LocalTime -\u003e String",
          "source": "src/Database-HDBI-Formaters.html#formatIsoLocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoLocalTime",
          "normalized": "LocalTime-\u003eString",
          "package": "hdbi",
          "partial": "Iso Local Time",
          "signature": "LocalTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoTimeOfDay",
          "package": "hdbi",
          "signature": "TimeOfDay -\u003e String",
          "source": "src/Database-HDBI-Formaters.html#formatIsoTimeOfDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoTimeOfDay",
          "normalized": "TimeOfDay-\u003eString",
          "package": "hdbi",
          "partial": "Iso Time Of Day",
          "signature": "TimeOfDay-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoUTCTime",
          "package": "hdbi",
          "signature": "UTCTime -\u003e String",
          "source": "src/Database-HDBI-Formaters.html#formatIsoUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Formaters",
          "module": "Database.HDBI.Formaters",
          "name": "formatIsoUTCTime",
          "normalized": "UTCTime-\u003eString",
          "package": "hdbi",
          "partial": "Iso UTCTime",
          "signature": "UTCTime-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Formaters.html#v:formatIsoUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Parsers",
          "name": "Parsers",
          "package": "hdbi",
          "source": "src/Database-HDBI-Parsers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "Parsers",
          "package": "hdbi",
          "partial": "Parsers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse bit field literal in format ''b'00101011'''. Takes just last 64 bits\n of input, other bits are ignored\n\u003c/p\u003e",
          "module": "Database.HDBI.Parsers",
          "name": "parseBitField",
          "package": "hdbi",
          "signature": "Parser Word64",
          "source": "src/Database-HDBI-Parsers.html#parseBitField",
          "type": "function"
        },
        "index": {
          "description": "Parse bit field literal in format Takes just last bits of input other bits are ignored",
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "parseBitField",
          "package": "hdbi",
          "partial": "Bit Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseBitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoDay",
          "package": "hdbi",
          "signature": "Parser Day",
          "source": "src/Database-HDBI-Parsers.html#parseIsoDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoDay",
          "package": "hdbi",
          "partial": "Iso Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoLocalTime",
          "package": "hdbi",
          "signature": "Parser LocalTime",
          "source": "src/Database-HDBI-Parsers.html#parseIsoLocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoLocalTime",
          "package": "hdbi",
          "partial": "Iso Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoTimeOfDay",
          "package": "hdbi",
          "signature": "Parser TimeOfDay",
          "source": "src/Database-HDBI-Parsers.html#parseIsoTimeOfDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoTimeOfDay",
          "package": "hdbi",
          "partial": "Iso Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoZonedTime",
          "package": "hdbi",
          "signature": "Parser ZonedTime",
          "source": "src/Database-HDBI-Parsers.html#parseIsoZonedTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Parsers",
          "module": "Database.HDBI.Parsers",
          "name": "parseIsoZonedTime",
          "package": "hdbi",
          "partial": "Iso Zoned Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Parsers.html#v:parseIsoZonedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "SqlValue",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlValue",
          "package": "hdbi",
          "partial": "Sql Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxiliary type to represent bit field outside of SqlValue\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "BitField",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#BitField",
          "type": "newtype"
        },
        "index": {
          "description": "Auxiliary type to represent bit field outside of SqlValue",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "BitField",
          "package": "hdbi",
          "partial": "Bit Field",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:BitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvertion error description. Used in \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "ConvertError",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "data"
        },
        "index": {
          "description": "Convertion error description Used in FromSql typeclass",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ConvertError",
          "package": "hdbi",
          "partial": "Convert Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ConvertError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "FromRow",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#FromRow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "FromRow",
          "package": "hdbi",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "FromSql",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#FromSql",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "FromSql",
          "package": "hdbi",
          "partial": "From Sql",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:FromSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e is the main type for expressing Haskell values to SQL databases.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWHAT IS SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSqlValue is an intermediate type to store\u003cem\u003erecevie data to\u003c/em\u003efrom the\ndatabase. Every database driver will do it's best to properly convert any\nSqlValue to the database record's field, and properly convert the record's field\nto SqlValue back.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e has predefined \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eToSql\u003c/a\u003e\u003c/code\u003e instances for many Haskell's\ntypes. Any Haskell's type can be converted to the \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e\nfunction. There is no safeToSql function because \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e never fails. Also, any\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e type can be converted to almost any Haskell's type as well. Not any\n\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e can be converted back to Haskell's type, so there is \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e\nfunction to do that safely. There is also unsafe \u003ccode\u003e\u003ca\u003etoSql\u003c/a\u003e\u003c/code\u003e function of caurse.\n\u003c/p\u003e\u003cp\u003eYou can sure, that \u003ccode\u003efromSql . toSql == id\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSQLVALUE CONSTRUCTORS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructors is the MINIMAL set of constructors, required to\nrepresent the most wide range of native database types.\n\u003c/p\u003e\u003cp\u003eFor example, there is FLOAT native database type and DOUBLE, but any DOUBLE can\ncarry any FLOAT value, so there is no need to create \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructor to\nrepresent FLOAT type, we can do it with Double. But there is DECIMAL database\ntype, representing arbitrary precision value which can be carried just by\n\u003ccode\u003e\u003ca\u003eDecimal\u003c/a\u003e\u003c/code\u003e Haskell's type, so we need a constructor for it.\n\u003c/p\u003e\u003cp\u003eThere is no SqlRational any more, because there is no one database which have\nnative Rational type. This is the key idea: if database can not store this type\nnatively we will not create \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e clause for it.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e constructor is documented or self-explaining to understand what\nit is needed for.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e'ToSql' and 'FromSql' INSTANCES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe key idea is to do the most obvious conversion between types only if it is\nnot ambiguous. For example, the most obvious conversion of \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e\nis just truncate the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, the most obvious conversion of String to\n\u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e is to try read the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as date and time. But there is no obvious\nway to convert \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e, so if you will try to convert (\u003ccode\u003e\u003ca\u003eSqlInteger\u003c/a\u003e\u003c/code\u003e\n44) to date you will fail. User must handle this cases properly converting\nvalues with right way. It is not very good idea to silently perform strange and\nambiguous convertions between absolutely different data types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eERROR CONDITIONS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThere may be sometimes an error during conversion.  For instance, if you have an\n\u003ccode\u003e\u003ca\u003eSqlText\u003c/a\u003e\u003c/code\u003e and attempting to convert it to an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, but it doesn't parse as\nan \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, you will get an error.  This will be indicated as an exception\nusing \u003ccode\u003e\u003ca\u003efromSql\u003c/a\u003e\u003c/code\u003e, or a Left result using \u003ccode\u003e\u003ca\u003esafeFromSql\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSTORING SQLVALUE TO DATABASE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eSqlValue\u003c/a\u003e\u003c/code\u003e can be converted to \u003ccode\u003eText\u003c/code\u003e and then readed from \u003ccode\u003eText\u003c/code\u003e back. This\nis guaranteed by tests, so the database driver's author can use it to store and\nread data through \u003ccode\u003eText\u003c/code\u003e for types which is not supported by the database\nnatively.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTEXT AND BYTESTRINGS\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe are using lazy Text everywhere because it is faster than \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and has\nbuilders. Strict text can be converted to one-chanked lazy text with O(1)\ncomplexity, but lazy to strict converts with O(n) complexity, so it is logical\nto use lazy Text.\n\u003c/p\u003e\u003cp\u003eWe are not using ByteString as text encoded in UTF-8, ByteStrings are just\nsequences of bytes. We are using strict ByteStrings because HDBI drivers uses\nthem to pass the ByteString to the C library as \u003ccode\u003eCString\u003c/code\u003e, so it must be strict.\n\u003c/p\u003e\u003cp\u003eWe are not using \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as data of query or as query itself because it is not\neffective in memory and cpu.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDATE AND TIME\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWe are not using time with timezone, because there is no one database working\nwith it natively except PostgreSQL, but the documentations of PostgreSQL says\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTo address these difficulties, we recommend using date\u003c/em\u003etime types that contain\nboth date and time when using time zones. We do not recommend using the type\ntime with time zone (though it is supported by PostgreSQL for legacy\napplications and for compliance with the SQL standard). PostgreSQL assumes your\nlocal time zone for any type containing only date or time./\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use time with timezone.\n\u003c/p\u003e\u003cp\u003eWe are using \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003eTimeWithTimezone\u003c/code\u003e because no one database\nactually save timezone information. All databases just convert datetime to\n\u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e when save data and convert UTCTime back to LOCAL SERVER TIMEZONE when\nreturning the data. So it is logical to work with timezones on the haskell side.\n\u003c/p\u003e\u003cp\u003eTime intervals are not widely supported, actually just in PostgreSQL and\nOracle. So, if you need them you can serialize throgh \u003ccode\u003e\u003ca\u003eSqlText\u003c/a\u003e\u003c/code\u003e by hands, or\nwrite your own \u003ccode\u003e\u003ca\u003eToSql\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromSql\u003c/a\u003e\u003c/code\u003e instances to do that more convenient.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEQUALITY OF SQLVALUE\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTwo SqlValues are considered to be equal if one of these hold.  The\nfirst comparison that can be made is controlling; if none of these\ncomparisons can be made, then they are not equal:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Both are NULL\n\u003c/li\u003e\u003cli\u003e Both represent the same type and the encapsulated values are considered equal\n   by applying (==) to them\n\u003c/li\u003e\u003cli\u003e The values of each, when converted to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, are equal.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlValue",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "data"
        },
        "index": {
          "description": "SqlValue is the main type for expressing Haskell values to SQL databases WHAT IS SQLVALUE SqlValue is an intermediate type to store recevie data to from the database Every database driver will do it best to properly convert any SqlValue to the database record field and properly convert the record field to SqlValue back The SqlValue has predefined FromSql and ToSql instances for many Haskell types Any Haskell type can be converted to the SqlValue with toSql function There is no safeToSql function because toSql never fails Also any SqlValue type can be converted to almost any Haskell type as well Not any SqlValue can be converted back to Haskell type so there is safeFromSql function to do that safely There is also unsafe toSql function of caurse You can sure that fromSql toSql id SQLVALUE CONSTRUCTORS SqlValue constructors is the MINIMAL set of constructors required to represent the most wide range of native database types For example there is FLOAT native database type and DOUBLE but any DOUBLE can carry any FLOAT value so there is no need to create SqlValue constructor to represent FLOAT type we can do it with Double But there is DECIMAL database type representing arbitrary precision value which can be carried just by Decimal Haskell type so we need constructor for it There is no SqlRational any more because there is no one database which have native Rational type This is the key idea if database can not store this type natively we will not create SqlValue clause for it Each SqlValue constructor is documented or self-explaining to understand what it is needed for ToSql and FromSql INSTANCES The key idea is to do the most obvious conversion between types only if it is not ambiguous For example the most obvious conversion of Double to Int32 is just truncate the Double the most obvious conversion of String to UTCTime is to try read the String as date and time But there is no obvious way to convert Int32 to UTCTime so if you will try to convert SqlInteger to date you will fail User must handle this cases properly converting values with right way It is not very good idea to silently perform strange and ambiguous convertions between absolutely different data types ERROR CONDITIONS There may be sometimes an error during conversion For instance if you have an SqlText and attempting to convert it to an Integer but it doesn parse as an Integer you will get an error This will be indicated as an exception using fromSql or Left result using safeFromSql STORING SQLVALUE TO DATABASE Any SqlValue can be converted to Text and then readed from Text back This is guaranteed by tests so the database driver author can use it to store and read data through Text for types which is not supported by the database natively TEXT AND BYTESTRINGS We are using lazy Text everywhere because it is faster than String and has builders Strict text can be converted to one-chanked lazy text with complexity but lazy to strict converts with complexity so it is logical to use lazy Text We are not using ByteString as text encoded in UTF-8 ByteStrings are just sequences of bytes We are using strict ByteStrings because HDBI drivers uses them to pass the ByteString to the library as CString so it must be strict We are not using String as data of query or as query itself because it is not effective in memory and cpu DATE AND TIME We are not using time with timezone because there is no one database working with it natively except PostgreSQL but the documentations of PostgreSQL says To address these difficulties we recommend using date time types that contain both date and time when using time zones We do not recommend using the type time with time zone though it is supported by PostgreSQL for legacy applications and for compliance with the SQL standard PostgreSQL assumes your local time zone for any type containing only date or time This is not recomended to use time with timezone We are using UTCTime instead of TimeWithTimezone because no one database actually save timezone information All databases just convert datetime to UTCTime when save data and convert UTCTime back to LOCAL SERVER TIMEZONE when returning the data So it is logical to work with timezones on the haskell side Time intervals are not widely supported actually just in PostgreSQL and Oracle So if you need them you can serialize throgh SqlText by hands or write your own ToSql and FromSql instances to do that more convenient EQUALITY OF SQLVALUE Two SqlValues are considered to be equal if one of these hold The first comparison that can be made is controlling if none of these comparisons can be made then they are not equal Both are NULL Both represent the same type and the encapsulated values are considered equal by applying to them The values of each when converted to String are equal",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlValue",
          "package": "hdbi",
          "partial": "Sql Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:SqlValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "ToRow",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#ToRow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ToRow",
          "package": "hdbi",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll types must convert to SqlValue safely and unambiguously. That's why\n there is no ''safeToSql'' method\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "ToSql",
          "package": "hdbi",
          "source": "src/Database-HDBI-SqlValue.html#ToSql",
          "type": "class"
        },
        "index": {
          "description": "All types must convert to SqlValue safely and unambiguously That why there is no safeToSql method",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ToSql",
          "package": "hdbi",
          "partial": "To Sql",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#t:ToSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "BitField",
          "package": "hdbi",
          "signature": "BitField",
          "source": "src/Database-HDBI-SqlValue.html#BitField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "BitField",
          "package": "hdbi",
          "partial": "Bit Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:BitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "ConvertError",
          "package": "hdbi",
          "signature": "ConvertError",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ConvertError",
          "package": "hdbi",
          "partial": "Convert Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ConvertError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType names must unique. Expecting names are generated by (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e)\n function\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "IncompatibleTypes",
          "package": "hdbi",
          "signature": "IncompatibleTypes",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "function"
        },
        "index": {
          "description": "Type names must unique Expecting names are generated by show typeOf function",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "IncompatibleTypes",
          "package": "hdbi",
          "partial": "Incompatible Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:IncompatibleTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent bit field with 64 bits\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBitField",
          "package": "hdbi",
          "signature": "SqlBitField BitField",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Represent bit field with bits",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBitField",
          "package": "hdbi",
          "partial": "Sql Bit Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlob field in the database. This field can not be implicitly converted\n to any other type because it is just an array of bytes, not an UTF-8\n encoded string.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBlob",
          "package": "hdbi",
          "signature": "SqlBlob ByteString",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Blob field in the database This field can not be implicitly converted to any other type because it is just an array of bytes not an UTF-8 encoded string",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBlob",
          "package": "hdbi",
          "partial": "Sql Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBool",
          "package": "hdbi",
          "signature": "SqlBool Bool",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlBool",
          "package": "hdbi",
          "partial": "Sql Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary precision DECIMAL value\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlDecimal",
          "package": "hdbi",
          "signature": "SqlDecimal Decimal",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Arbitrary precision DECIMAL value",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlDecimal",
          "package": "hdbi",
          "partial": "Sql Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "SqlDouble",
          "package": "hdbi",
          "signature": "SqlDouble Double",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlDouble",
          "package": "hdbi",
          "partial": "Sql Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny Integer, including Int32, Int64 and Words.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlInteger",
          "package": "hdbi",
          "signature": "SqlInteger Integer",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Any Integer including Int32 Int64 and Words",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlInteger",
          "package": "hdbi",
          "partial": "Sql Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal YYYY-MM-DD (no timezone)\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalDate",
          "package": "hdbi",
          "signature": "SqlLocalDate Day",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Local YYYY-MM-DD no timezone",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalDate",
          "package": "hdbi",
          "partial": "Sql Local Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal YYYY-MM-DD HH:MM:SS (no timezone)\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalTime",
          "package": "hdbi",
          "signature": "SqlLocalTime LocalTime",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Local YYYY-MM-DD HH MM SS no timezone",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalTime",
          "package": "hdbi",
          "partial": "Sql Local Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal HH:MM:SS (no timezone)\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalTimeOfDay",
          "package": "hdbi",
          "signature": "SqlLocalTimeOfDay TimeOfDay",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "Local HH MM SS no timezone",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlLocalTimeOfDay",
          "package": "hdbi",
          "partial": "Sql Local Time Of Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlLocalTimeOfDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNULL in SQL or Nothing in Haskell\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlNull",
          "package": "hdbi",
          "signature": "SqlNull",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "NULL in SQL or Nothing in Haskell",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlNull",
          "package": "hdbi",
          "partial": "Sql Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "SqlText",
          "package": "hdbi",
          "signature": "SqlText Text",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlText",
          "package": "hdbi",
          "partial": "Sql Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTC YYYY-MM-DD HH:MM:SS\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlUTCTime",
          "package": "hdbi",
          "signature": "SqlUTCTime UTCTime",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "UTC YYYY-MM-DD HH MM SS",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlUTCTime",
          "package": "hdbi",
          "partial": "Sql UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUUID value http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eUUID\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlUUID",
          "package": "hdbi",
          "signature": "SqlUUID UUID",
          "source": "src/Database-HDBI-SqlValue.html#SqlValue",
          "type": "function"
        },
        "index": {
          "description": "UUID value http en.wikipedia.org wiki UUID",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "SqlUUID",
          "package": "hdbi",
          "partial": "Sql UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:SqlUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of type trying to convert\n from.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "ceFromType",
          "package": "hdbi",
          "signature": "String",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "function"
        },
        "index": {
          "description": "name of type trying to convert from",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ceFromType",
          "package": "hdbi",
          "partial": "From Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed description of convertion error\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "ceReason",
          "package": "hdbi",
          "signature": "String",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "function"
        },
        "index": {
          "description": "Detailed description of convertion error",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ceReason",
          "package": "hdbi",
          "partial": "Reason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of target type.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "ceToType",
          "package": "hdbi",
          "signature": "String",
          "source": "src/Database-HDBI-SqlValue.html#ConvertError",
          "type": "function"
        },
        "index": {
          "description": "name of target type",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "ceToType",
          "package": "hdbi",
          "partial": "To Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:ceToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "fromRow",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e a",
          "source": "src/Database-HDBI-SqlValue.html#fromRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "fromRow",
          "normalized": "[SqlValue]-\u003ea",
          "package": "hdbi",
          "partial": "Row",
          "signature": "[SqlValue]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:fromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe method, throws \u003ccode\u003e\u003ca\u003eConvertError\u003c/a\u003e\u003c/code\u003e if convertion failed. Has default\n implementation.\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "fromSql",
          "package": "hdbi",
          "signature": "SqlValue -\u003e a",
          "source": "src/Database-HDBI-SqlValue.html#fromSql",
          "type": "method"
        },
        "index": {
          "description": "Unsafe method throws ConvertError if convertion failed Has default implementation",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "fromSql",
          "normalized": "SqlValue-\u003ea",
          "package": "hdbi",
          "partial": "Sql",
          "signature": "SqlValue-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:fromSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates row of one element\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "one",
          "package": "hdbi",
          "signature": "a -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#one",
          "type": "function"
        },
        "index": {
          "description": "creates row of one element",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "one",
          "normalized": "a-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "a-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "oneb",
          "package": "hdbi",
          "signature": "ByteString -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#oneb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "oneb",
          "normalized": "ByteString-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "ByteString-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:oneb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "onebl",
          "package": "hdbi",
          "signature": "ByteString -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#onebl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "onebl",
          "normalized": "ByteString-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "ByteString-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onebl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate row of one Double element\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "oned",
          "package": "hdbi",
          "signature": "Double -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#oned",
          "type": "function"
        },
        "index": {
          "description": "create row of one Double element",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "oned",
          "normalized": "Double-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "Double-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:oned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate row of one Integer element\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "onei",
          "package": "hdbi",
          "signature": "Integer -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#onei",
          "type": "function"
        },
        "index": {
          "description": "create row of one Integer element",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "onei",
          "normalized": "Integer-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "Integer-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "onet",
          "package": "hdbi",
          "signature": "Text -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#onet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "onet",
          "normalized": "Text-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "Text-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "onetl",
          "package": "hdbi",
          "signature": "Text -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#onetl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "onetl",
          "normalized": "Text-\u003e[SqlValue]",
          "package": "hdbi",
          "signature": "Text-\u003e[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:onetl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "safeFromRow",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Either ConvertError a",
          "source": "src/Database-HDBI-SqlValue.html#safeFromRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "safeFromRow",
          "normalized": "[SqlValue]-\u003eEither ConvertError a",
          "package": "hdbi",
          "partial": "From Row",
          "signature": "[SqlValue]-\u003eEither ConvertError a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeFromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "safeFromSql",
          "package": "hdbi",
          "signature": "SqlValue -\u003e Either ConvertError a",
          "source": "src/Database-HDBI-SqlValue.html#safeFromSql",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "safeFromSql",
          "normalized": "SqlValue-\u003eEither ConvertError a",
          "package": "hdbi",
          "partial": "From Sql",
          "signature": "SqlValue-\u003eEither ConvertError a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeFromSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunwrap the row of one element safely\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "safeUnOne",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Either ConvertError a",
          "source": "src/Database-HDBI-SqlValue.html#safeUnOne",
          "type": "function"
        },
        "index": {
          "description": "unwrap the row of one element safely",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "safeUnOne",
          "normalized": "[SqlValue]-\u003eEither ConvertError a",
          "package": "hdbi",
          "partial": "Un One",
          "signature": "[SqlValue]-\u003eEither ConvertError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:safeUnOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "toRow",
          "package": "hdbi",
          "signature": "a -\u003e [SqlValue]",
          "source": "src/Database-HDBI-SqlValue.html#toRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "toRow",
          "normalized": "a-\u003e[SqlValue]",
          "package": "hdbi",
          "partial": "Row",
          "signature": "a-\u003e[SqlValue]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "toSql",
          "package": "hdbi",
          "signature": "a -\u003e SqlValue",
          "source": "src/Database-HDBI-SqlValue.html#toSql",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "toSql",
          "normalized": "a-\u003eSqlValue",
          "package": "hdbi",
          "partial": "Sql",
          "signature": "a-\u003eSqlValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:toSql"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unBitField",
          "package": "hdbi",
          "signature": "Word64",
          "source": "src/Database-HDBI-SqlValue.html#BitField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unBitField",
          "package": "hdbi",
          "partial": "Bit Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unBitField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003esafeUnOne\u003c/a\u003e\u003c/code\u003e but throws an exception if not converted\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "unone",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e a",
          "source": "src/Database-HDBI-SqlValue.html#unone",
          "type": "function"
        },
        "index": {
          "description": "same as safeUnOne but throws an exception if not converted",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unone",
          "normalized": "[SqlValue]-\u003ea",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unoneb",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e ByteString",
          "source": "src/Database-HDBI-SqlValue.html#unoneb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unoneb",
          "normalized": "[SqlValue]-\u003eByteString",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unoneb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unonebl",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e ByteString",
          "source": "src/Database-HDBI-SqlValue.html#unonebl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unonebl",
          "normalized": "[SqlValue]-\u003eByteString",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonebl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unoned",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Double",
          "source": "src/Database-HDBI-SqlValue.html#unoned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unoned",
          "normalized": "[SqlValue]-\u003eDouble",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unoned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunwrap row of one Integer\n\u003c/p\u003e",
          "module": "Database.HDBI.SqlValue",
          "name": "unonei",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Integer",
          "source": "src/Database-HDBI-SqlValue.html#unonei",
          "type": "function"
        },
        "index": {
          "description": "unwrap row of one Integer",
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unonei",
          "normalized": "[SqlValue]-\u003eInteger",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unonet",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Text",
          "source": "src/Database-HDBI-SqlValue.html#unonet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unonet",
          "normalized": "[SqlValue]-\u003eText",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.SqlValue",
          "name": "unonetl",
          "package": "hdbi",
          "signature": "[SqlValue] -\u003e Text",
          "source": "src/Database-HDBI-SqlValue.html#unonetl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI SqlValue",
          "module": "Database.HDBI.SqlValue",
          "name": "unonetl",
          "normalized": "[SqlValue]-\u003eText",
          "package": "hdbi",
          "signature": "[SqlValue]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-SqlValue.html#v:unonetl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for HDBI.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HDBI.Types",
          "name": "Types",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for HDBI Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "Types",
          "package": "hdbi",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection status\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "ConnStatus",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#ConnStatus",
          "type": "data"
        },
        "index": {
          "description": "Connection status",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnStatus",
          "package": "hdbi",
          "partial": "Conn Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:ConnStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapps the specific connection. You can write database-independent code\n mixing it with database-dependent using \u003ccode\u003e\u003ca\u003ecastConnection\u003c/a\u003e\u003c/code\u003e function to cast\n Wrapper to specific connection type, if you need.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "ConnWrapper",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#ConnWrapper",
          "type": "data"
        },
        "index": {
          "description": "Wrapps the specific connection You can write database-independent code mixing it with database-dependent using castConnection function to cast Wrapper to specific connection type if you need",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnWrapper",
          "package": "hdbi",
          "partial": "Conn Wrapper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:ConnWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass to abstract the working with connection.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "Connection",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#Connection",
          "type": "class"
        },
        "index": {
          "description": "Typeclass to abstract the working with connection",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "Connection",
          "package": "hdbi",
          "partial": "Connection",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esafe newtype wrapper for queries. Just lazy Text inside.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "Query",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "safe newtype wrapper for queries Just lazy Text inside",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "Query",
          "package": "hdbi",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError throwing by driver when database operation fails\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "SqlError",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#SqlError",
          "type": "data"
        },
        "index": {
          "description": "Error throwing by driver when database operation fails",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "SqlError",
          "package": "hdbi",
          "partial": "Sql Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement prepared on database side or just in memory\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "Statement",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#Statement",
          "type": "class"
        },
        "index": {
          "description": "Statement prepared on database side or just in memory",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "Statement",
          "package": "hdbi",
          "partial": "Statement",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatement's status returning by function \u003ccode\u003e\u003ca\u003estatementStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StatementStatus",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#StatementStatus",
          "type": "data"
        },
        "index": {
          "description": "Statement status returning by function statementStatus",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StatementStatus",
          "package": "hdbi",
          "partial": "Statement Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:StatementStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around some specific \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e instance to write\n database-independent code\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StmtWrapper",
          "package": "hdbi",
          "source": "src/Database-HDBI-Types.html#StmtWrapper",
          "type": "data"
        },
        "index": {
          "description": "Wrapper around some specific Statement instance to write database-independent code",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StmtWrapper",
          "package": "hdbi",
          "partial": "Stmt Wrapper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#t:StmtWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection is in some bad state\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "ConnBad",
          "package": "hdbi",
          "signature": "ConnBad",
          "source": "src/Database-HDBI-Types.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Connection is in some bad state",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnBad",
          "package": "hdbi",
          "partial": "Conn Bad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessfully disconnected, all\n statements must be closed at this state\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "ConnDisconnected",
          "package": "hdbi",
          "signature": "ConnDisconnected",
          "source": "src/Database-HDBI-Types.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Successfully disconnected all statements must be closed at this state",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnDisconnected",
          "package": "hdbi",
          "partial": "Conn Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessfully connected\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "ConnOK",
          "package": "hdbi",
          "signature": "ConnOK",
          "source": "src/Database-HDBI-Types.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Successfully connected",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnOK",
          "package": "hdbi",
          "partial": "Conn OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Types",
          "name": "ConnWrapper",
          "package": "hdbi",
          "signature": "ConnWrapper conn",
          "source": "src/Database-HDBI-Types.html#ConnWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "ConnWrapper",
          "package": "hdbi",
          "partial": "Conn Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:ConnWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Types",
          "name": "Query",
          "package": "hdbi",
          "signature": "Query",
          "source": "src/Database-HDBI-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "Query",
          "package": "hdbi",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDriver-specific operational error\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "SqlDriverError",
          "package": "hdbi",
          "signature": "SqlDriverError",
          "source": "src/Database-HDBI-Types.html#SqlError",
          "type": "function"
        },
        "index": {
          "description": "Driver-specific operational error",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "SqlDriverError",
          "package": "hdbi",
          "partial": "Sql Driver Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:SqlDriverError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal database error\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "SqlError",
          "package": "hdbi",
          "signature": "SqlError",
          "source": "src/Database-HDBI-Types.html#SqlError",
          "type": "function"
        },
        "index": {
          "description": "Internal database error",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "SqlError",
          "package": "hdbi",
          "partial": "Sql Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:SqlError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression executed, now you can fetch the rows \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StatementExecuted",
          "package": "hdbi",
          "signature": "StatementExecuted",
          "source": "src/Database-HDBI-Types.html#StatementStatus",
          "type": "function"
        },
        "index": {
          "description": "Expression executed now you can fetch the rows Statement",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StatementExecuted",
          "package": "hdbi",
          "partial": "Statement Executed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementExecuted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetching is done, no more rows can be queried\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StatementFetched",
          "package": "hdbi",
          "signature": "StatementFetched",
          "source": "src/Database-HDBI-Types.html#StatementStatus",
          "type": "function"
        },
        "index": {
          "description": "Fetching is done no more rows can be queried",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StatementFetched",
          "package": "hdbi",
          "partial": "Statement Fetched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementFetched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinished, no more actions with this statement\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StatementFinished",
          "package": "hdbi",
          "signature": "StatementFinished",
          "source": "src/Database-HDBI-Types.html#StatementStatus",
          "type": "function"
        },
        "index": {
          "description": "Finished no more actions with this statement",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StatementFinished",
          "package": "hdbi",
          "partial": "Statement Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewly created statement\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "StatementNew",
          "package": "hdbi",
          "signature": "StatementNew",
          "source": "src/Database-HDBI-Types.html#StatementStatus",
          "type": "function"
        },
        "index": {
          "description": "Newly created statement",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StatementNew",
          "package": "hdbi",
          "partial": "Statement New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StatementNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Types",
          "name": "StmtWrapper",
          "package": "hdbi",
          "signature": "StmtWrapper stmt",
          "source": "src/Database-HDBI-Types.html#StmtWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "StmtWrapper",
          "package": "hdbi",
          "partial": "Stmt Wrapper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:StmtWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly start the transaction. Without starting the transaction you\n can not commit or rollback it. HDBI does not check if transaction started\n or not, this is the application's resposibility.\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003estart\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "begin",
          "package": "hdbi",
          "signature": "conn -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#begin",
          "type": "method"
        },
        "index": {
          "description": "Explicitly start the transaction Without starting the transaction you can not commit or rollback it HDBI does not check if transaction started or not this is the application resposibility This is not recomended to use start by hands use withTransaction instead",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "begin",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "conn-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast wrapped connection to the specific connection type using \u003ccode\u003e\u003ca\u003ecast\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e. You can write database-specific code safely casting wrapped\n connection to specific type dynamically.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "castConnection",
          "package": "hdbi",
          "signature": "ConnWrapper -\u003e Maybe conn",
          "source": "src/Database-HDBI-Types.html#castConnection",
          "type": "function"
        },
        "index": {
          "description": "Cast wrapped connection to the specific connection type using cast of Typeable You can write database-specific code safely casting wrapped connection to specific type dynamically",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "castConnection",
          "normalized": "ConnWrapper-\u003eMaybe a",
          "package": "hdbi",
          "partial": "Connection",
          "signature": "ConnWrapper-\u003eMaybe conn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:castConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast wrapped statement to specific type.  You can write database-specific\n code safely casting wrapped statement to specific type dynamically.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "castStatement",
          "package": "hdbi",
          "signature": "StmtWrapper -\u003e Maybe stmt",
          "source": "src/Database-HDBI-Types.html#castStatement",
          "type": "function"
        },
        "index": {
          "description": "Cast wrapped statement to specific type You can write database-specific code safely casting wrapped statement to specific type dynamically",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "castStatement",
          "normalized": "StmtWrapper-\u003eMaybe a",
          "package": "hdbi",
          "partial": "Statement",
          "signature": "StmtWrapper-\u003eMaybe stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:castStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClone the database connection. Return new connection with the same\n settings\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "clone",
          "package": "hdbi",
          "signature": "conn -\u003e IO conn",
          "source": "src/Database-HDBI-Types.html#clone",
          "type": "method"
        },
        "index": {
          "description": "Clone the database connection Return new connection with the same settings",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "clone",
          "normalized": "a-\u003eIO a",
          "package": "hdbi",
          "signature": "conn-\u003eIO conn",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly commit started transaction. You must \u003ccode\u003estart\u003c/code\u003e the transaction\n before \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "commit",
          "package": "hdbi",
          "signature": "conn -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#commit",
          "type": "method"
        },
        "index": {
          "description": "Explicitly commit started transaction You must start the transaction before commit This is not recomended to use commit by hands use withTransaction instead",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "commit",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "conn-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current status of connection\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "connStatus",
          "package": "hdbi",
          "signature": "conn -\u003e IO ConnStatus",
          "source": "src/Database-HDBI-Types.html#connStatus",
          "type": "method"
        },
        "index": {
          "description": "Return the current status of connection",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "connStatus",
          "normalized": "a-\u003eIO ConnStatus",
          "package": "hdbi",
          "partial": "Status",
          "signature": "conn-\u003eIO ConnStatus",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:connStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the current database supports transactions. If False, then\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e should be expected to raise errors.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "dbTransactionSupport",
          "package": "hdbi",
          "signature": "conn -\u003e Bool",
          "source": "src/Database-HDBI-Types.html#dbTransactionSupport",
          "type": "method"
        },
        "index": {
          "description": "Whether or not the current database supports transactions If False then commit and rollback should be expected to raise errors",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "dbTransactionSupport",
          "normalized": "a-\u003eBool",
          "package": "hdbi",
          "partial": "Transaction Support",
          "signature": "conn-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:dbTransactionSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnection from the database. Every opened statement must be finished\n after this method executed.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "disconnect",
          "package": "hdbi",
          "signature": "conn -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#disconnect",
          "type": "method"
        },
        "index": {
          "description": "Disconnection from the database Every opened statement must be finished after this method executed",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "disconnect",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "conn-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute single query with parameters. In query each parameter must be\n replaced with ''?'' placeholder. This rule is true for every database, even\n for PostgreSQL which uses placeholders like ''$1''. Application must ensure\n that the count of placeholders is equal to count of parameter, it is likely\n cause an error if it is not.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "execute",
          "package": "hdbi",
          "signature": "stmt -\u003e row -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#execute",
          "type": "method"
        },
        "index": {
          "description": "Execute single query with parameters In query each parameter must be replaced with placeholder This rule is true for every database even for PostgreSQL which uses placeholders like Application must ensure that the count of placeholders is equal to count of parameter it is likely cause an error if it is not",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "execute",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "hdbi",
          "signature": "stmt-\u003erow-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute one query many times with a list of paramters. Has default\n implementation through \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "executeMany",
          "package": "hdbi",
          "signature": "stmt -\u003e [row] -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#executeMany",
          "type": "method"
        },
        "index": {
          "description": "Execute one query many times with list of paramters Has default implementation through execute",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "executeMany",
          "normalized": "a-\u003e[b]-\u003eIO()",
          "package": "hdbi",
          "partial": "Many",
          "signature": "stmt-\u003e[row]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:executeMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch next row from the executed statement. Return Nothing when there is\n no more results acceptable. Each call return next row from the result.\n\u003c/p\u003e\u003cp\u003eUPDATE INSERT and DELETE queries will likely return Nothing.\n\u003c/p\u003e\u003cp\u003eNOTE: You still need to explicitly finish the statement after receiving\n Nothing, unlike with old HDBC interface.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "fetch",
          "package": "hdbi",
          "signature": "stmt -\u003e IO (Maybe row)",
          "source": "src/Database-HDBI-Types.html#fetch",
          "type": "method"
        },
        "index": {
          "description": "Fetch next row from the executed statement Return Nothing when there is no more results acceptable Each call return next row from the result UPDATE INSERT and DELETE queries will likely return Nothing NOTE You still need to explicitly finish the statement after receiving Nothing unlike with old HDBC interface",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "fetch",
          "normalized": "a-\u003eIO(Maybe b)",
          "package": "hdbi",
          "signature": "stmt-\u003eIO(Maybe row)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional method to strictly fetch all rows from statement. Has default\n implementation through \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "fetchAll",
          "package": "hdbi",
          "signature": "stmt -\u003e IO (Seq row)",
          "source": "src/Database-HDBI-Types.html#fetchAll",
          "type": "method"
        },
        "index": {
          "description": "Optional method to strictly fetch all rows from statement Has default implementation through fetch",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "fetchAll",
          "normalized": "a-\u003eIO(Seq b)",
          "package": "hdbi",
          "partial": "All",
          "signature": "stmt-\u003eIO(Seq row)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:fetchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish statement and remove database-specific pointer. No any actions may\n be proceeded after closing the statement, excpet \u003ccode\u003e\u003ca\u003estatementStatus\u003c/a\u003e\u003c/code\u003e which\n will return \u003ccode\u003e\u003ca\u003eStatementFinished\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "finish",
          "package": "hdbi",
          "signature": "stmt -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#finish",
          "type": "method"
        },
        "index": {
          "description": "Finish statement and remove database-specific pointer No any actions may be proceeded after closing the statement excpet statementStatus which will return StatementFinished and reset",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "finish",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "stmt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn list of column names of the result.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "getColumnNames",
          "package": "hdbi",
          "signature": "stmt -\u003e IO [Text]",
          "source": "src/Database-HDBI-Types.html#getColumnNames",
          "type": "method"
        },
        "index": {
          "description": "Return list of column names of the result",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "getColumnNames",
          "normalized": "a-\u003eIO[Text]",
          "package": "hdbi",
          "partial": "Column Names",
          "signature": "stmt-\u003eIO[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:getColumnNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of columns representing the result. Has default\n implementation through \u003ccode\u003e\u003ca\u003egetColumnNames\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "getColumnsCount",
          "package": "hdbi",
          "signature": "stmt -\u003e IO Int",
          "source": "src/Database-HDBI-Types.html#getColumnsCount",
          "type": "method"
        },
        "index": {
          "description": "Return the number of columns representing the result Has default implementation through getColumnNames",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "getColumnsCount",
          "normalized": "a-\u003eIO Int",
          "package": "hdbi",
          "partial": "Columns Count",
          "signature": "stmt-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:getColumnsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the HDBI driver module for this connection. Ideally would be\n the same as the database name portion of the Cabal package name.  For\n instance, \"sqlite3\" or \"postgresql\".  This is the layer that is bound most\n tightly to HDBI\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "hdbiDriverName",
          "package": "hdbi",
          "signature": "conn -\u003e String",
          "source": "src/Database-HDBI-Types.html#hdbiDriverName",
          "type": "method"
        },
        "index": {
          "description": "The name of the HDBI driver module for this connection Ideally would be the same as the database name portion of the Cabal package name For instance sqlite3 or postgresql This is the layer that is bound most tightly to HDBI",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "hdbiDriverName",
          "normalized": "a-\u003eString",
          "package": "hdbi",
          "partial": "Driver Name",
          "signature": "conn-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:hdbiDriverName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if current connection is in transaction state. Return True if\n transaction is started. Each driver implements it with it's own way: some\n RDBMS has API to check transaction state (like PostgreSQL), some has no\n (like Sqlite3).\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "inTransaction",
          "package": "hdbi",
          "signature": "conn -\u003e IO Bool",
          "source": "src/Database-HDBI-Types.html#inTransaction",
          "type": "method"
        },
        "index": {
          "description": "Check if current connection is in transaction state Return True if transaction is started Each driver implements it with it own way some RDBMS has API to check transaction state like PostgreSQL some has no like Sqlite3",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "inTransaction",
          "normalized": "a-\u003eIO Bool",
          "package": "hdbi",
          "partial": "Transaction",
          "signature": "conn-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:inTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the original query the statement was prepared from.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "originalQuery",
          "package": "hdbi",
          "signature": "stmt -\u003e Query",
          "source": "src/Database-HDBI-Types.html#originalQuery",
          "type": "method"
        },
        "index": {
          "description": "Return the original query the statement was prepared from",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "originalQuery",
          "normalized": "a-\u003eQuery",
          "package": "hdbi",
          "partial": "Query",
          "signature": "stmt-\u003eQuery",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:originalQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare the statement. Some databases has no feature of preparing\n statements (PostgreSQL can just prepare named statements), so each driver\n behaves it's own way.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "prepare",
          "package": "hdbi",
          "signature": "conn -\u003e Query -\u003e IO (ConnStatement conn)",
          "source": "src/Database-HDBI-Types.html#prepare",
          "type": "method"
        },
        "index": {
          "description": "Prepare the statement Some databases has no feature of preparing statements PostgreSQL can just prepare named statements so each driver behaves it own way",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "prepare",
          "normalized": "a-\u003eQuery-\u003eIO(ConnStatement a)",
          "package": "hdbi",
          "signature": "conn-\u003eQuery-\u003eIO(ConnStatement conn)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset statement to it's initial state, just like after \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "reset",
          "package": "hdbi",
          "signature": "stmt -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#reset",
          "type": "method"
        },
        "index": {
          "description": "Reset statement to it initial state just like after prepare",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "reset",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "stmt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRollback the transaction's state. You must \u003ccode\u003estart\u003c/code\u003e the transaction before\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is not recomended to use \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e by hands, use \u003ccode\u003e\u003ca\u003ewithTransaction\u003c/a\u003e\u003c/code\u003e\n instead\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "rollback",
          "package": "hdbi",
          "signature": "conn -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#rollback",
          "type": "method"
        },
        "index": {
          "description": "Rollback the transaction state You must start the transaction before rollback This is not recomended to use rollback by hands use withTransaction instead",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "rollback",
          "normalized": "a-\u003eIO()",
          "package": "hdbi",
          "signature": "conn-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun query and safely finalize statement after that. Has default\n implementation through \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "run",
          "package": "hdbi",
          "signature": "conn -\u003e Query -\u003e row -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#run",
          "type": "method"
        },
        "index": {
          "description": "Run query and safely finalize statement after that Has default implementation through execute",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "run",
          "normalized": "a-\u003eQuery-\u003eb-\u003eIO()",
          "package": "hdbi",
          "signature": "conn-\u003eQuery-\u003erow-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun query and return first row\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "runFetch",
          "package": "hdbi",
          "signature": "con -\u003e Query -\u003e params -\u003e IO (Maybe row)",
          "source": "src/Database-HDBI-Types.html#runFetch",
          "type": "function"
        },
        "index": {
          "description": "Run query and return first row",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "runFetch",
          "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Maybe c)",
          "package": "hdbi",
          "partial": "Fetch",
          "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Maybe row)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Types",
          "name": "runFetchAll",
          "package": "hdbi",
          "signature": "con -\u003e Query -\u003e params -\u003e IO (Seq row)",
          "source": "src/Database-HDBI-Types.html#runFetchAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "runFetchAll",
          "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Seq c)",
          "package": "hdbi",
          "partial": "Fetch All",
          "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Seq row)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI.Types",
          "name": "runFetchOne",
          "package": "hdbi",
          "signature": "con -\u003e Query -\u003e params -\u003e IO (Maybe col)",
          "source": "src/Database-HDBI-Types.html#runFetchOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "runFetchOne",
          "normalized": "a-\u003eQuery-\u003eb-\u003eIO(Maybe c)",
          "package": "hdbi",
          "partial": "Fetch One",
          "signature": "con-\u003eQuery-\u003eparams-\u003eIO(Maybe col)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runFetchOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute query with set of parameters. Has default implementation through\n \u003ccode\u003e\u003ca\u003eexecuteMany\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "runMany",
          "package": "hdbi",
          "signature": "conn -\u003e Query -\u003e [row] -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#runMany",
          "type": "method"
        },
        "index": {
          "description": "Execute query with set of parameters Has default implementation through executeMany",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "runMany",
          "normalized": "a-\u003eQuery-\u003e[b]-\u003eIO()",
          "package": "hdbi",
          "partial": "Many",
          "signature": "conn-\u003eQuery-\u003e[row]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun raw query. Many databases has an ablility to run a raw queries\n separated by semicolon. Implementation of this method must use this\n ability.\n Has default implementation through \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "runRaw",
          "package": "hdbi",
          "signature": "conn -\u003e Query -\u003e IO ()",
          "source": "src/Database-HDBI-Types.html#runRaw",
          "type": "method"
        },
        "index": {
          "description": "Run raw query Many databases has an ablility to run raw queries separated by semicolon Implementation of this method must use this ability Has default implementation through run",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "runRaw",
          "normalized": "a-\u003eQuery-\u003eIO()",
          "package": "hdbi",
          "partial": "Raw",
          "signature": "conn-\u003eQuery-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:runRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow level database-specific error code\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "seErrorCode",
          "package": "hdbi",
          "signature": "String",
          "source": "src/Database-HDBI-Types.html#SqlError",
          "type": "function"
        },
        "index": {
          "description": "Low level database-specific error code",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "seErrorCode",
          "package": "hdbi",
          "partial": "Error Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:seErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError description\n\u003c/p\u003e\u003cp\u003eError description from the database client library\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "seErrorMsg",
          "package": "hdbi",
          "signature": "String",
          "source": "src/Database-HDBI-Types.html#SqlError",
          "type": "function"
        },
        "index": {
          "description": "Error description Error description from the database client library",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "seErrorMsg",
          "package": "hdbi",
          "partial": "Error Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:seErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current statement's status.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "statementStatus",
          "package": "hdbi",
          "signature": "stmt -\u003e IO StatementStatus",
          "source": "src/Database-HDBI-Types.html#statementStatus",
          "type": "method"
        },
        "index": {
          "description": "Return the current statement status",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "statementStatus",
          "normalized": "a-\u003eIO StatementStatus",
          "package": "hdbi",
          "partial": "Status",
          "signature": "stmt-\u003eIO StatementStatus",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:statementStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap query to lazy Text\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "unQuery",
          "package": "hdbi",
          "signature": "Text",
          "source": "src/Database-HDBI-Types.html#Query",
          "type": "function"
        },
        "index": {
          "description": "Unwrap query to lazy Text",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "unQuery",
          "package": "hdbi",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:unQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate statement and execute monadic action using\nit. Safely finalize Statement after action is done.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "withStatement",
          "package": "hdbi",
          "signature": "conn-\u003e Query-\u003e (stmt -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create statement and execute monadic action using it Safely finalize Statement after action is done",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "withStatement",
          "normalized": "a-\u003eQuery-\u003e(b-\u003eIO c)-\u003eIO c",
          "package": "hdbi",
          "partial": "Statement",
          "signature": "conn-\u003eQuery-\u003e(stmt-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:withStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute some code.  If any uncaught exception occurs, run\n\u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e and re-raise it.  Otherwise, run \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e and return.\n\u003c/p\u003e\u003cp\u003eThis function, therefore, encapsulates the logical property that a transaction\nis all about: all or nothing.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e object passed in is passed directly to the specified function\nas a convenience.\n\u003c/p\u003e\u003cp\u003eThis function traps \u003cem\u003eall\u003c/em\u003e uncaught exceptions, not just \u003ccode\u003e\u003ca\u003eSqlError\u003c/a\u003e\u003c/code\u003e.  Therefore,\nyou will get a rollback for any exception that you don't handle.  That's\nprobably what you want anyway.\n\u003c/p\u003e\u003cp\u003eIf there was an error while running \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, this error will not be\nreported since the original exception will be propogated back.  (You'd probably\nlike to know about the root cause for all of this anyway.)  Feedback\non this behavior is solicited.\n\u003c/p\u003e",
          "module": "Database.HDBI.Types",
          "name": "withTransaction",
          "package": "hdbi",
          "signature": "conn -\u003e IO a -\u003e IO a",
          "source": "src/Database-HDBI-Types.html#withTransaction",
          "type": "function"
        },
        "index": {
          "description": "Execute some code If any uncaught exception occurs run rollback and re-raise it Otherwise run commit and return This function therefore encapsulates the logical property that transaction is all about all or nothing The Connection object passed in is passed directly to the specified function as convenience This function traps all uncaught exceptions not just SqlError Therefore you will get rollback for any exception that you don handle That probably what you want anyway If there was an error while running rollback this error will not be reported since the original exception will be propogated back You probably like to know about the root cause for all of this anyway Feedback on this behavior is solicited",
          "hierarchy": "Database HDBI Types",
          "module": "Database.HDBI.Types",
          "name": "withTransaction",
          "normalized": "a-\u003eIO b-\u003eIO b",
          "package": "hdbi",
          "partial": "Transaction",
          "signature": "conn-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI-Types.html#v:withTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HDBI",
          "name": "HDBI",
          "package": "hdbi",
          "source": "src/Database-HDBI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database HDBI",
          "module": "Database.HDBI",
          "name": "HDBI",
          "package": "hdbi",
          "partial": "HDBI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Database-HDBI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.HDBI",
          "name": "HDBI",
          "package": "hdbi",
          "source": "src/Language-Haskell-TH-HDBI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH HDBI",
          "module": "Language.Haskell.TH.HDBI",
          "name": "HDBI",
          "package": "hdbi",
          "partial": "HDBI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.HDBI",
          "name": "deriveFromRow",
          "package": "hdbi",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-HDBI.html#deriveFromRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH HDBI",
          "module": "Language.Haskell.TH.HDBI",
          "name": "deriveFromRow",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "hdbi",
          "partial": "From Row",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#v:deriveFromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e instance for any data with one constructor or for newtype\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.HDBI",
          "name": "deriveToRow",
          "package": "hdbi",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-HDBI.html#deriveToRow",
          "type": "function"
        },
        "index": {
          "description": "Derive ToRow instance for any data with one constructor or for newtype",
          "hierarchy": "Language Haskell TH HDBI",
          "module": "Language.Haskell.TH.HDBI",
          "name": "deriveToRow",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "hdbi",
          "partial": "To Row",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi/docs/Language-Haskell-TH-HDBI.html#v:deriveToRow"
      }
    }
  ]
]