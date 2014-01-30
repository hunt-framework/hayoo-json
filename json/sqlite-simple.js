[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e typeclass, for converting a single value in a row\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003eA Haskell numeric type is considered to be compatible with all\n SQLite numeric types that are less accurate than it. For instance,\n the Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type is compatible with the SQLite's 32-bit\n \u003ccode\u003eInt\u003c/code\u003e type because it can represent a \u003ccode\u003eInt\u003c/code\u003e exactly. On the other hand,\n since a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e might lose precision if representing a 64-bit \u003ccode\u003eBigInt\u003c/code\u003e,\n the two are \u003cem\u003enot\u003c/em\u003e considered compatible.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-FromField.html",
        "fct-type": "module",
        "title": "FromField"
      },
      "index": {
        "description": "The FromField typeclass for converting single value in row returned by SQL query into more useful Haskell representation Haskell numeric type is considered to be compatible with all SQLite numeric types that are less accurate than it For instance the Haskell Double type is compatible with the SQLite bit Int type because it can represent Int exactly On the other hand since Double might lose precision if representing bit BigInt the two are not considered compatible",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "FromField",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "From Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Field represents metadata about particular field",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "Field",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:FieldParser",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "type",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#FieldParser",
        "fct-type": "type",
        "title": "FieldParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "FieldParser",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Field Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:FromField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be converted from a SQL type.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#FromField",
        "fct-type": "class",
        "title": "FromField"
      },
      "index": {
        "description": "type that may be converted from SQL type",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "FromField",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "From Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "ResultError",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:ConversionFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL value could not be parsed, or could not\n be represented as a valid Haskell value, or an\n unexpected low-level error occurred (e.g. mismatch\n between metadata and actual data in a row).\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "ConversionFailed",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "ConversionFailed"
      },
      "index": {
        "description": "The SQL value could not be parsed or could not be represented as valid Haskell value or an unexpected low-level error occurred e.g mismatch between metadata and actual data in row",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "ConversionFailed",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Conversion Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:Incompatible",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL and Haskell types are not compatible.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "Incompatible",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "Incompatible"
      },
      "index": {
        "description": "The SQL and Haskell types are not compatible",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "Incompatible",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Incompatible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:UnexpectedNull",
      "description": {
        "fct-descr": "\u003cp\u003eA SQL \u003ccode\u003eNULL\u003c/code\u003e was encountered when the Haskell\n type did not permit it.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "UnexpectedNull",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "UnexpectedNull"
      },
      "index": {
        "description": "SQL NULL was encountered when the Haskell type did not permit it",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "UnexpectedNull",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Unexpected Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errHaskellType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errHaskellType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "errHaskellType",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Haskell Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "errMessage",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errSQLType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "function",
        "title": "errSQLType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "errSQLType",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:fieldData",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the actual SQL data for a database field.  This allows\n user-defined \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e instances to access the SQL data\n associated with a field being parsed.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "Field -\u003e SQLData",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#fieldData",
        "fct-type": "function",
        "title": "fieldData"
      },
      "index": {
        "description": "Return the actual SQL data for database field This allows user-defined FromField instances to access the SQL data associated with field being parsed",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "fieldData",
        "normalized": "Field-\u003eSQLData",
        "package": "sqlite-simple",
        "partial": "Data",
        "signature": "Field-\u003eSQLData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:fromField",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a SQL value to a Haskell value.\n\u003c/p\u003e\u003cp\u003eReturns a list of exceptions if the conversion fails.  In the case of\n library instances,  this will usually be a single \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  but\n may be a \u003ccode\u003eUnicodeException\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementations of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e should not retain any references to\n the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e nor the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments after the result has\n been evaluated to WHNF.  Such a reference causes the entire\n \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be retained.\n\u003c/p\u003e\u003cp\u003eFor example,  the instance for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e to avoid\n such a reference,  and that using bytestring functions such as \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e alone will also trigger this memory leak.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "FieldParser a",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#fromField",
        "fct-type": "method",
        "title": "fromField"
      },
      "index": {
        "description": "Convert SQL value to Haskell value Returns list of exceptions if the conversion fails In the case of library instances this will usually be single ResultError but may be UnicodeException Implementations of fromField should not retain any references to the Field nor the ByteString arguments after the result has been evaluated to WHNF Such reference causes the entire LibPQ Result to be retained For example the instance for ByteString uses copy to avoid such reference and that using bytestring functions such as drop and takeWhile alone will also trigger this memory leak",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "fromField",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:returnError",
      "description": {
        "fct-descr": "\u003cp\u003eGiven one of the constructors from \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  the field,\n   and an \u003ccode\u003e\u003ca\u003eerrMessage\u003c/a\u003e\u003c/code\u003e,  this fills in the other fields in the\n   exception value and returns it in a 'Left . SomeException'\n   constructor.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromField",
        "fct-package": "sqlite-simple",
        "fct-signature": "(String -\u003e String -\u003e String -\u003e err) -\u003e Field -\u003e String -\u003e Ok a",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#returnError",
        "fct-type": "function",
        "title": "returnError"
      },
      "index": {
        "description": "Given one of the constructors from ResultError the field and an errMessage this fills in the other fields in the exception value and returns it in Left SomeException constructor",
        "hierarchy": "Database SQLite Simple FromField",
        "module": "Database.SQLite.Simple.FromField",
        "name": "returnError",
        "normalized": "(String-\u003eString-\u003eString-\u003ea)-\u003eField-\u003eString-\u003eOk b",
        "package": "sqlite-simple",
        "partial": "Error",
        "signature": "(String-\u003eString-\u003eString-\u003eerr)-\u003eField-\u003eString-\u003eOk a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e typeclass, for converting a row of results\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html",
        "fct-type": "module",
        "title": "FromRow"
      },
      "index": {
        "description": "The FromRow typeclass for converting row of results returned by SQL query into more useful Haskell representation Predefined instances are provided for tuples containing up to ten elements",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "FromRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can defined outside of sqlite-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote the caveats associated with user-defined implementations of\n \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#FromRow",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can defined outside of sqlite-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note the caveats associated with user-defined implementations of fromRow",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "FromRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#t:RowParser",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#RowParser",
        "fct-type": "data",
        "title": "RowParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "RowParser",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:field",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "field",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:fieldWith",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "FieldParser a -\u003e RowParser a",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#fieldWith",
        "fct-type": "function",
        "title": "fieldWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "fieldWith",
        "normalized": "FieldParser a-\u003eRowParser a",
        "package": "sqlite-simple",
        "partial": "With",
        "signature": "FieldParser a-\u003eRowParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:fromRow",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#fromRow",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "fromRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:numFieldsRemaining",
      "description": {
        "fct-module": "Database.SQLite.Simple.FromRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "RowParser Int",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#numFieldsRemaining",
        "fct-type": "function",
        "title": "numFieldsRemaining"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple FromRow",
        "module": "Database.SQLite.Simple.FromRow",
        "name": "numFieldsRemaining",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Fields Remaining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.  This interface is less stable and can change at any time.\n In particular this means that while the rest of the sqlite-simple\n package endeavors to follow the package versioning policy,  this module\n does not.  Also, at the moment there are things in here that aren't\n particularly internal and are exported elsewhere;  these will eventually\n disappear from this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal bits This interface is less stable and can change at any time In particular this means that while the rest of the sqlite-simple package endeavors to follow the package versioning policy this module does not Also at the moment there are things in here that aren particularly internal and are exported elsewhere these will eventually disappear from this module",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eConnection to an open database.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003econnectionHandle\u003c/a\u003e\u003c/code\u003e to gain access to the underlying\n \u003ca\u003ehttp://hackage.haskell.org/package/direct-sqlite\u003c/a\u003e connection.\n This may be useful if you need to access some direct-sqlite\n functionality that's not exposed in the sqlite-simple API.  This\n should be a safe thing to do although mixing both APIs is\n discouraged.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "newtype",
        "title": "Connection"
      },
      "index": {
        "description": "Connection to an open database You can use connectionHandle to gain access to the underlying http hackage.haskell.org package direct-sqlite connection This may be useful if you need to access some direct-sqlite functionality that not exposed in the sqlite-simple API This should be safe thing to do although mixing both APIs is discouraged",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Connection",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Field represents metadata about particular field",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Field",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:Row",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Row",
        "fct-type": "newtype",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Row",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:RowParser",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#RowParser",
        "fct-type": "newtype",
        "title": "RowParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "RowParser",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Connection",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Connection",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Field",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "Field",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Field",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:RP",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "RP",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#RowParser",
        "fct-type": "function",
        "title": "RP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "RP",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "RP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Row",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "Row",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Row",
        "fct-type": "function",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "Row",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:column",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "!Int",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "column",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:connectionHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "Database",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "connectionHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "connectionHandle",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:gettypename",
      "description": {
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLData -\u003e ByteString",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#gettypename",
        "fct-type": "function",
        "title": "gettypename"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "gettypename",
        "normalized": "SQLData-\u003eByteString",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "SQLData-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLData",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Field",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "result",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:rowresult",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "[SQLData]",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Row",
        "fct-type": "function",
        "title": "rowresult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "rowresult",
        "normalized": "[SQLData]",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "[SQLData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:unRP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Internal",
        "fct-package": "sqlite-simple",
        "fct-signature": "ReaderT Row (StateT Int Ok) a",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#RowParser",
        "fct-type": "function",
        "title": "unRP"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Internal",
        "module": "Database.SQLite.Simple.Internal",
        "name": "unRP",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "RP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOk\u003c/a\u003e\u003c/code\u003e type is a simple error handler,  basically equivalent to\n \u003ccode\u003eEither [SomeException]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne of the primary reasons why this type  was introduced is that\n \u003ccode\u003eEither SomeException\u003c/code\u003e had not been provided an instance for \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n and it would have been a bad idea to provide an orphaned instance for a\n commonly-used type and typeclass included in \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtending the failure case to a list of \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003es enables a\n more sensible \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance definitions:   \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e concatinates\n the list of exceptions when both cases fail,  and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is defined as\n 'Errors []'.   Though \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e one could pick one of two exceptions, and\n throw away the other,  and have \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e provide a generic exception,\n this avoids cases where \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e overrides a more informative exception\n and allows you to see all the different ways your computation has failed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-Ok.html",
        "fct-type": "module",
        "title": "Ok"
      },
      "index": {
        "description": "The Ok type is simple error handler basically equivalent to Either SomeException One of the primary reasons why this type was introduced is that Either SomeException had not been provided an instance for Alternative and it would have been bad idea to provide an orphaned instance for commonly-used type and typeclass included in base Extending the failure case to list of SomeException enables more sensible Alternative instance definitions concatinates the list of exceptions when both cases fail and empty is defined as Errors Though one could pick one of two exceptions and throw away the other and have empty provide generic exception this avoids cases where empty overrides more informative exception and allows you to see all the different ways your computation has failed",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#t:ManyErrors",
      "description": {
        "fct-descr": "\u003cp\u003ea way to reify a list of exceptions into a single exception\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Ok.html#ManyErrors",
        "fct-type": "newtype",
        "title": "ManyErrors"
      },
      "index": {
        "description": "way to reify list of exceptions into single exception",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "ManyErrors",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Many Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#t:Ok",
      "description": {
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Ok.html#Ok",
        "fct-type": "data",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:Errors",
      "description": {
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "Errors [SomeException]",
        "fct-source": "src/Database-SQLite-Simple-Ok.html#Ok",
        "fct-type": "function",
        "title": "Errors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "Errors",
        "normalized": "Errors[SomeException]",
        "package": "sqlite-simple",
        "partial": "Errors",
        "signature": "Errors[SomeException]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:ManyErrors",
      "description": {
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "ManyErrors [SomeException]",
        "fct-source": "src/Database-SQLite-Simple-Ok.html#ManyErrors",
        "fct-type": "function",
        "title": "ManyErrors"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "ManyErrors",
        "normalized": "ManyErrors[SomeException]",
        "package": "sqlite-simple",
        "partial": "Many Errors",
        "signature": "ManyErrors[SomeException]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:Ok",
      "description": {
        "fct-module": "Database.SQLite.Simple.Ok",
        "fct-package": "sqlite-simple",
        "fct-signature": "Ok !a",
        "fct-source": "src/Database-SQLite-Simple-Ok.html#Ok",
        "fct-type": "function",
        "title": "Ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Ok",
        "module": "Database.SQLite.Simple.Ok",
        "name": "Ok",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a parameter to an SQLite\n value to be bound as a SQL query parameter.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.ToField",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-ToField.html",
        "fct-type": "module",
        "title": "ToField"
      },
      "index": {
        "description": "The ToField typeclass for rendering parameter to an SQLite value to be bound as SQL query parameter",
        "hierarchy": "Database SQLite Simple ToField",
        "module": "Database.SQLite.Simple.ToField",
        "name": "ToField",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "To Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#t:ToField",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be used as a single parameter to a SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.ToField",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-ToField.html#ToField",
        "fct-type": "class",
        "title": "ToField"
      },
      "index": {
        "description": "type that may be used as single parameter to SQL query",
        "hierarchy": "Database SQLite Simple ToField",
        "module": "Database.SQLite.Simple.ToField",
        "name": "ToField",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "To Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#v:toField",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a value for substitution into a query string.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.ToField",
        "fct-package": "sqlite-simple",
        "fct-signature": "a -\u003e SQLData",
        "fct-source": "src/Database-SQLite-Simple-ToField.html#toField",
        "fct-type": "method",
        "title": "toField"
      },
      "index": {
        "description": "Prepare value for substitution into query string",
        "hierarchy": "Database SQLite Simple ToField",
        "module": "Database.SQLite.Simple.ToField",
        "name": "toField",
        "normalized": "a-\u003eSQLData",
        "package": "sqlite-simple",
        "partial": "Field",
        "signature": "a-\u003eSQLData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a collection of\n parameters to a SQL query.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.ToRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-ToRow.html",
        "fct-type": "module",
        "title": "ToRow"
      },
      "index": {
        "description": "The ToRow typeclass for rendering collection of parameters to SQL query Predefined instances are provided for tuples containing up to ten elements",
        "hierarchy": "Database SQLite Simple ToRow",
        "module": "Database.SQLite.Simple.ToRow",
        "name": "ToRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of SQLData\n elements.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.ToRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-ToRow.html#ToRow",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of SQLData elements",
        "hierarchy": "Database SQLite Simple ToRow",
        "module": "Database.SQLite.Simple.ToRow",
        "name": "ToRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#v:toRow",
      "description": {
        "fct-descr": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.ToRow",
        "fct-package": "sqlite-simple",
        "fct-signature": "a -\u003e [SQLData]",
        "fct-source": "src/Database-SQLite-Simple-ToRow.html#toRow",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "ToField collection of values",
        "hierarchy": "Database SQLite Simple ToRow",
        "module": "Database.SQLite.Simple.ToRow",
        "name": "toRow",
        "normalized": "a-\u003e[SQLData]",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": "a-\u003e[SQLData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module for sqlite-simple.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Top-level module for sqlite-simple",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Types",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Types.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": ":.",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Null",
      "description": {
        "fct-descr": "\u003cp\u003eA placeholder for the SQL \u003ccode\u003eNULL\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Null",
        "fct-type": "data",
        "title": "Null"
      },
      "index": {
        "description": "placeholder for the SQL NULL value",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.SQLite.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003eText\u003c/code\u003e, and literal Haskell strings that\n contain Unicode characters will be correctly transformed to UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.SQLite.Simple Query select The underlying type is Text and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v::.",
      "description": {
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "h :. t",
        "fct-source": "src/Database-SQLite-Simple-Types.html#%3A.",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": ":.",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Null",
      "description": {
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "Null",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Null",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Only",
      "description": {
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Query",
      "description": {
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "Query",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "fromOnly",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple.Types",
        "fct-package": "sqlite-simple",
        "fct-signature": "Text",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "fromQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple Types",
        "module": "Database.SQLite.Simple.Types",
        "name": "fromQuery",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLite-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-Types.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": ":.",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ColumnIndex",
      "description": {
        "fct-descr": "\u003cp\u003eIndex of a column in a result set. Column indices start from 0.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple.html#ColumnIndex",
        "fct-type": "newtype",
        "title": "ColumnIndex"
      },
      "index": {
        "description": "Index of column in result set Column indices start from",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "ColumnIndex",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Column Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eConnection to an open database.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003econnectionHandle\u003c/a\u003e\u003c/code\u003e to gain access to the underlying\n \u003ca\u003ehttp://hackage.haskell.org/package/direct-sqlite\u003c/a\u003e connection.\n This may be useful if you need to access some direct-sqlite\n functionality that's not exposed in the sqlite-simple API.  This\n should be a safe thing to do although mixing both APIs is\n discouraged.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "newtype",
        "title": "Connection"
      },
      "index": {
        "description": "Connection to an open database You can use connectionHandle to gain access to the underlying http hackage.haskell.org package direct-sqlite connection This may be useful if you need to access some direct-sqlite functionality that not exposed in the sqlite-simple API This should be safe thing to do although mixing both APIs is discouraged",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Connection",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:FormatError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e was malformed.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple.html#FormatError",
        "fct-type": "data",
        "title": "FormatError"
      },
      "index": {
        "description": "Exception thrown if Query was malformed This may occur if the number of characters in the query string does not match the number of parameters provided",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "FormatError",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:FromRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can defined outside of sqlite-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote the caveats associated with user-defined implementations of\n \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#FromRow",
        "fct-type": "class",
        "title": "FromRow"
      },
      "index": {
        "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can defined outside of sqlite-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note the caveats associated with user-defined implementations of fromRow",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "FromRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "From Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Only",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.SQLite.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003eText\u003c/code\u003e, and literal Haskell strings that\n contain Unicode characters will be correctly transformed to UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.SQLite.Simple Query select The underlying type is Text and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Query",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple-FromField.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "ResultError",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:SQLData",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SQLData"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLData",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003eAn SQLite prepared statement.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLite-Simple.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "An SQLite prepared statement",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Statement",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ToRow",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of SQLData\n elements.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-SQLite-Simple-ToRow.html#ToRow",
        "fct-type": "class",
        "title": "ToRow"
      },
      "index": {
        "description": "collection type that can be turned into list of SQLData elements",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "ToRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "To Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v::.",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "h :. t",
        "fct-source": "src/Database-SQLite-Simple-Types.html#%3A.",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": ":.",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:ColumnIndex",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "ColumnIndex ColumnIndex",
        "fct-source": "src/Database-SQLite-Simple.html#ColumnIndex",
        "fct-type": "function",
        "title": "ColumnIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "ColumnIndex",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Column Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Connection",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Connection",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Only",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Only",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Query",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Query",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "Query",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLBlob",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLBlob !ByteString",
        "fct-type": "function",
        "title": "SQLBlob"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLBlob",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLBlob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLFloat",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLFloat !Double",
        "fct-type": "function",
        "title": "SQLFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLFloat",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLInteger",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLInteger !Int64",
        "fct-type": "function",
        "title": "SQLInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLInteger",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLNull",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLNull",
        "fct-type": "function",
        "title": "SQLNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLNull",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLText",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "SQLText !Text",
        "fct-type": "function",
        "title": "SQLText"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "SQLText",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "SQLText",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eBinds parameters to a prepared statement. Once \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the statement must be reset with the \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e function before it can be\n executed again by calling \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e params -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "Binds parameters to prepared statement Once nextRow returns Nothing the statement must be reset with the reset function before it can be executed again by calling nextRow",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "bind",
        "normalized": "Statement-\u003ea-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Statement-\u003eparams-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a database connection.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close database connection",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:closeStatement",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a prepared statement.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#closeStatement",
        "fct-type": "function",
        "title": "closeStatement"
      },
      "index": {
        "description": "Closes prepared statement",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "closeStatement",
        "normalized": "Statement-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "Statement",
        "signature": "Statement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:columnName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the name of a a particular column in the result set of a\n \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e.  Throws an \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e if the colum index is out\n of bounds.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.sqlite.org/c3ref/column_name.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e ColumnIndex -\u003e IO Text",
        "fct-source": "src/Database-SQLite-Simple.html#columnName",
        "fct-type": "function",
        "title": "columnName"
      },
      "index": {
        "description": "Return the name of particular column in the result set of Statement Throws an ArrayException if the colum index is out of bounds http www.sqlite.org c3ref column name.html",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "columnName",
        "normalized": "Statement-\u003eColumnIndex-\u003eIO Text",
        "package": "sqlite-simple",
        "partial": "Name",
        "signature": "Statement-\u003eColumnIndex-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:connectionHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Database",
        "fct-source": "src/Database-SQLite-Simple-Internal.html#Connection",
        "fct-type": "function",
        "title": "connectionHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "connectionHandle",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute an INSERT UPDATE or other SQL query that is not expected to return results Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "execute",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "version of execute that does not perform query substitution",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "execute_",
        "normalized": "Connection-\u003eQuery-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:field",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "field",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return results.\n Results are converted and fed into the \u003ccode\u003eaction\u003c/code\u003e callback as they are being\n retrieved from the database.\n\u003c/p\u003e\u003cp\u003eThis allows gives the possibility of processing results in constant space\n (for instance writing them to disk).\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string mismatched with given arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-SQLite-Simple.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results Results are converted and fed into the action callback as they are being retrieved from the database This allows gives the possibility of processing results in constant space for instance writing them to disk Exceptions that may be thrown FormatError the query string mismatched with given arguments ResultError result conversion failed",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "fold",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fold_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e which does not perform parameter substitution.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-SQLite-Simple.html#fold_",
        "fct-type": "function",
        "title": "fold_"
      },
      "index": {
        "description": "version of fold which does not perform parameter substitution",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "fold_",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "fromOnly",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Text",
        "fct-source": "src/Database-SQLite-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "fromQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "fromQuery",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromRow",
      "description": {
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "RowParser a",
        "fct-source": "src/Database-SQLite-Simple-FromRow.html#fromRow",
        "fct-type": "method",
        "title": "fromRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "fromRow",
        "normalized": "",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:lastInsertRowId",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the rowid of the most recent successful INSERT on the\n given database connection.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003ehttp://www.sqlite.org/c3ref/last_insert_rowid.html\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e IO Int64",
        "fct-source": "src/Database-SQLite-Simple.html#lastInsertRowId",
        "fct-type": "function",
        "title": "lastInsertRowId"
      },
      "index": {
        "description": "Returns the rowid of the most recent successful INSERT on the given database connection See also http www.sqlite.org c3ref last insert rowid.html",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "lastInsertRowId",
        "normalized": "Connection-\u003eIO Int",
        "package": "sqlite-simple",
        "partial": "Insert Row Id",
        "signature": "Connection-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:nextRow",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the next row from the prepared statement.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e IO (Maybe r)",
        "fct-source": "src/Database-SQLite-Simple.html#nextRow",
        "fct-type": "function",
        "title": "nextRow"
      },
      "index": {
        "description": "Extracts the next row from the prepared statement",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "nextRow",
        "normalized": "Statement-\u003eIO(Maybe a)",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": "Statement-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a database connection to a given file.  Will throw an\n exception if it cannot connect.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e must be closed with a call to \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you specify \":memory:\" or an empty string as the input filename,\n then a private, temporary in-memory database is created for the\n connection.  This database will vanish when you close the\n connection.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "String -\u003e IO Connection",
        "fct-source": "src/Database-SQLite-Simple.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Open database connection to given file Will throw an exception if it cannot connect Every open must be closed with call to close If you specify memory or an empty string as the input filename then private temporary in-memory database is created for the connection This database will vanish when you close the connection",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "open",
        "normalized": "String-\u003eIO Connection",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "String-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:openStatement",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a prepared statement. A prepared statement must always be closed with\n a corresponding call to \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e before closing the connection. Use\n \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e to iterate on the values returned. Once \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, you need to invoke \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e before reexecuting the statement again\n with \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO Statement",
        "fct-source": "src/Database-SQLite-Simple.html#openStatement",
        "fct-type": "function",
        "title": "openStatement"
      },
      "index": {
        "description": "Opens prepared statement prepared statement must always be closed with corresponding call to closeStatement before closing the connection Use nextRow to iterate on the values returned Once nextRow returns Nothing you need to invoke reset before reexecuting the statement again with nextRow",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "openStatement",
        "normalized": "Connection-\u003eQuery-\u003eIO Statement",
        "package": "sqlite-simple",
        "partial": "Statement",
        "signature": "Connection-\u003eQuery-\u003eIO Statement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. All results are retrieved and converted before this\n function returns.\n\u003c/p\u003e\u003cp\u003eWhen processing large results, this function will consume a lot of\n client-side memory.  Consider using \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string mismatched with given arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO [r]",
        "fct-source": "src/Database-SQLite-Simple.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results All results are retrieved and converted before this function returns When processing large results this function will consume lot of client-side memory Consider using fold instead Exceptions that may be thrown FormatError the query string mismatched with given arguments ResultError result conversion failed",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "query",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO[b]",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO [r]",
        "fct-source": "src/Database-SQLite-Simple.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "version of query that does not perform query substitution",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "query_",
        "normalized": "Connection-\u003eQuery-\u003eIO[a]",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:reset",
      "description": {
        "fct-descr": "\u003cp\u003eResets a statement. This does not reset bound parameters, if any, but\n allows the statement to be reexecuted again by invoking \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#reset",
        "fct-type": "function",
        "title": "reset"
      },
      "index": {
        "description": "Resets statement This does not reset bound parameters if any but allows the statement to be reexecuted again by invoking nextRow",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "reset",
        "normalized": "Statement-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "",
        "signature": "Statement-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:setTrace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ca\u003ehttp://www.sqlite.org/c3ref/profile.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eEnable/disable tracing of SQL execution.  Tracing can be disabled\n by setting \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the logger callback.\n\u003c/p\u003e\u003cp\u003eWarning: If the logger callback throws an exception, your whole\n program may crash.  Enable only for debugging!\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Maybe (Text -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Database-SQLite-Simple.html#setTrace",
        "fct-type": "function",
        "title": "setTrace"
      },
      "index": {
        "description": "http www.sqlite.org c3ref profile.html Enable disable tracing of SQL execution Tracing can be disabled by setting Nothing as the logger callback Warning If the logger callback throws an exception your whole program may crash Enable only for debugging",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "setTrace",
        "normalized": "Connection-\u003eMaybe(Text-\u003eIO())-\u003eIO()",
        "package": "sqlite-simple",
        "partial": "Trace",
        "signature": "Connection-\u003eMaybe(Text-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:toRow",
      "description": {
        "fct-descr": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "a -\u003e [SQLData]",
        "fct-source": "src/Database-SQLite-Simple-ToRow.html#toRow",
        "fct-type": "method",
        "title": "toRow"
      },
      "index": {
        "description": "ToField collection of values",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "toRow",
        "normalized": "a-\u003e[SQLData]",
        "package": "sqlite-simple",
        "partial": "Row",
        "signature": "a-\u003e[SQLData]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withBind",
      "description": {
        "fct-descr": "\u003cp\u003eBinds parameters to a prepared statement, and \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003es the statement when\n the callback completes, even in the presence of exceptions.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ewithBind\u003c/a\u003e\u003c/code\u003e to reuse prepared statements.  Because it \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003es the\n statement \u003cem\u003eafter\u003c/em\u003e each usage, it avoids a pitfall involving implicit\n transactions.  SQLite creates an implicit transaction if you don't say\n \u003ccode\u003eBEGIN\u003c/code\u003e explicitly, and does not commit it until all active statements are\n finished with either \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Statement -\u003e params -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-SQLite-Simple.html#withBind",
        "fct-type": "function",
        "title": "withBind"
      },
      "index": {
        "description": "Binds parameters to prepared statement and reset the statement when the callback completes even in the presence of exceptions Use withBind to reuse prepared statements Because it reset the statement after each usage it avoids pitfall involving implicit transactions SQLite creates an implicit transaction if you don say BEGIN explicitly and does not commit it until all active statements are finished with either reset or closeStatement",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "withBind",
        "normalized": "Statement-\u003ea-\u003eIO b-\u003eIO b",
        "package": "sqlite-simple",
        "partial": "Bind",
        "signature": "Statement-\u003eparams-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withConnection",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a database connection, executes an action using this connection, and\n closes the connection, even in the presence of exceptions.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "String -\u003e (Connection -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-SQLite-Simple.html#withConnection",
        "fct-type": "function",
        "title": "withConnection"
      },
      "index": {
        "description": "Opens database connection executes an action using this connection and closes the connection even in the presence of exceptions",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "withConnection",
        "normalized": "String-\u003e(Connection-\u003eIO a)-\u003eIO a",
        "package": "sqlite-simple",
        "partial": "Connection",
        "signature": "String-\u003e(Connection-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withStatement",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a prepared statement, executes an action using this statement, and\n closes the statement, even in the presence of exceptions.\n\u003c/p\u003e",
        "fct-module": "Database.SQLite.Simple",
        "fct-package": "sqlite-simple",
        "fct-signature": "Connection -\u003e Query -\u003e (Statement -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Database-SQLite-Simple.html#withStatement",
        "fct-type": "function",
        "title": "withStatement"
      },
      "index": {
        "description": "Opens prepared statement executes an action using this statement and closes the statement even in the presence of exceptions",
        "hierarchy": "Database SQLite Simple",
        "module": "Database.SQLite.Simple",
        "name": "withStatement",
        "normalized": "Connection-\u003eQuery-\u003e(Statement-\u003eIO a)-\u003eIO a",
        "package": "sqlite-simple",
        "partial": "Statement",
        "signature": "Connection-\u003eQuery-\u003e(Statement-\u003eIO a)-\u003eIO a"
      }
    }
  }
]