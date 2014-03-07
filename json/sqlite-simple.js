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
        "word": "sqlite-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e typeclass, for converting a single value in a row\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003eA Haskell numeric type is considered to be compatible with all\n SQLite numeric types that are less accurate than it. For instance,\n the Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type is compatible with the SQLite's 32-bit\n \u003ccode\u003eInt\u003c/code\u003e type because it can represent a \u003ccode\u003eInt\u003c/code\u003e exactly. On the other hand,\n since a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e might lose precision if representing a 64-bit \u003ccode\u003eBigInt\u003c/code\u003e,\n the two are \u003cem\u003enot\u003c/em\u003e considered compatible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "FromField",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromField.html",
          "type": "module"
        },
        "index": {
          "description": "The FromField typeclass for converting single value in row returned by SQL query into more useful Haskell representation Haskell numeric type is considered to be compatible with all SQLite numeric types that are less accurate than it For instance the Haskell Double type is compatible with the SQLite bit Int type because it can represent Int exactly On the other hand since Double might lose precision if representing bit BigInt the two are not considered compatible",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "FromField",
          "package": "sqlite-simple",
          "partial": "From Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "Field",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Field represents metadata about particular field",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "Field",
          "package": "sqlite-simple",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromField",
          "name": "FieldParser",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromField.html#FieldParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "FieldParser",
          "package": "sqlite-simple",
          "partial": "Field Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:FieldParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that may be converted from a SQL type.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "FromField",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromField.html#FromField",
          "type": "class"
        },
        "index": {
          "description": "type that may be converted from SQL type",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "FromField",
          "package": "sqlite-simple",
          "partial": "From Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:FromField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "ResultError",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if conversion from SQL value to Haskell value fails",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "ResultError",
          "package": "sqlite-simple",
          "partial": "Result Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#t:ResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SQL value could not be parsed, or could not\n be represented as a valid Haskell value, or an\n unexpected low-level error occurred (e.g. mismatch\n between metadata and actual data in a row).\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "ConversionFailed",
          "package": "sqlite-simple",
          "signature": "ConversionFailed",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "The SQL value could not be parsed or could not be represented as valid Haskell value or an unexpected low-level error occurred e.g mismatch between metadata and actual data in row",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "ConversionFailed",
          "package": "sqlite-simple",
          "partial": "Conversion Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:ConversionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SQL and Haskell types are not compatible.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "Incompatible",
          "package": "sqlite-simple",
          "signature": "Incompatible",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "The SQL and Haskell types are not compatible",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "Incompatible",
          "package": "sqlite-simple",
          "partial": "Incompatible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:Incompatible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SQL \u003ccode\u003eNULL\u003c/code\u003e was encountered when the Haskell\n type did not permit it.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "UnexpectedNull",
          "package": "sqlite-simple",
          "signature": "UnexpectedNull",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "description": "SQL NULL was encountered when the Haskell type did not permit it",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "UnexpectedNull",
          "package": "sqlite-simple",
          "partial": "Unexpected Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:UnexpectedNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromField",
          "name": "errHaskellType",
          "package": "sqlite-simple",
          "signature": "String",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "errHaskellType",
          "package": "sqlite-simple",
          "partial": "Haskell Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errHaskellType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromField",
          "name": "errMessage",
          "package": "sqlite-simple",
          "signature": "String",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "errMessage",
          "package": "sqlite-simple",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromField",
          "name": "errSQLType",
          "package": "sqlite-simple",
          "signature": "String",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "errSQLType",
          "package": "sqlite-simple",
          "partial": "SQLType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:errSQLType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the actual SQL data for a database field.  This allows\n user-defined \u003ccode\u003e\u003ca\u003eFromField\u003c/a\u003e\u003c/code\u003e instances to access the SQL data\n associated with a field being parsed.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "fieldData",
          "package": "sqlite-simple",
          "signature": "Field -\u003e SQLData",
          "source": "src/Database-SQLite-Simple-FromField.html#fieldData",
          "type": "function"
        },
        "index": {
          "description": "Return the actual SQL data for database field This allows user-defined FromField instances to access the SQL data associated with field being parsed",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "fieldData",
          "normalized": "Field-\u003eSQLData",
          "package": "sqlite-simple",
          "partial": "Data",
          "signature": "Field-\u003eSQLData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:fieldData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a SQL value to a Haskell value.\n\u003c/p\u003e\u003cp\u003eReturns a list of exceptions if the conversion fails.  In the case of\n library instances,  this will usually be a single \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  but\n may be a \u003ccode\u003eUnicodeException\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementations of \u003ccode\u003e\u003ca\u003efromField\u003c/a\u003e\u003c/code\u003e should not retain any references to\n the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e nor the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e arguments after the result has\n been evaluated to WHNF.  Such a reference causes the entire\n \u003ccode\u003eLibPQ.\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to be retained.\n\u003c/p\u003e\u003cp\u003eFor example,  the instance for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e to avoid\n such a reference,  and that using bytestring functions such as \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e alone will also trigger this memory leak.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "fromField",
          "package": "sqlite-simple",
          "signature": "FieldParser a",
          "source": "src/Database-SQLite-Simple-FromField.html#fromField",
          "type": "method"
        },
        "index": {
          "description": "Convert SQL value to Haskell value Returns list of exceptions if the conversion fails In the case of library instances this will usually be single ResultError but may be UnicodeException Implementations of fromField should not retain any references to the Field nor the ByteString arguments after the result has been evaluated to WHNF Such reference causes the entire LibPQ Result to be retained For example the instance for ByteString uses copy to avoid such reference and that using bytestring functions such as drop and takeWhile alone will also trigger this memory leak",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "fromField",
          "package": "sqlite-simple",
          "partial": "Field",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:fromField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven one of the constructors from \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e,  the field,\n   and an \u003ccode\u003e\u003ca\u003eerrMessage\u003c/a\u003e\u003c/code\u003e,  this fills in the other fields in the\n   exception value and returns it in a 'Left . SomeException'\n   constructor.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromField",
          "name": "returnError",
          "package": "sqlite-simple",
          "signature": "(String -\u003e String -\u003e String -\u003e err) -\u003e Field -\u003e String -\u003e Ok a",
          "source": "src/Database-SQLite-Simple-FromField.html#returnError",
          "type": "function"
        },
        "index": {
          "description": "Given one of the constructors from ResultError the field and an errMessage this fills in the other fields in the exception value and returns it in Left SomeException constructor",
          "hierarchy": "Database SQLite Simple FromField",
          "module": "Database.SQLite.Simple.FromField",
          "name": "returnError",
          "normalized": "(String-\u003eString-\u003eString-\u003ea)-\u003eField-\u003eString-\u003eOk b",
          "package": "sqlite-simple",
          "partial": "Error",
          "signature": "(String-\u003eString-\u003eString-\u003eerr)-\u003eField-\u003eString-\u003eOk a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromField.html#v:returnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e typeclass, for converting a row of results\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "FromRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromRow.html",
          "type": "module"
        },
        "index": {
          "description": "The FromRow typeclass for converting row of results returned by SQL query into more useful Haskell representation Predefined instances are provided for tuples containing up to ten elements",
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "FromRow",
          "package": "sqlite-simple",
          "partial": "From Row",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can defined outside of sqlite-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote the caveats associated with user-defined implementations of\n \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "FromRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromRow.html#FromRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can defined outside of sqlite-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note the caveats associated with user-defined implementations of fromRow",
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "FromRow",
          "package": "sqlite-simple",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromRow",
          "name": "RowParser",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "RowParser",
          "package": "sqlite-simple",
          "partial": "Row Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#t:RowParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.FromRow\",\"Database.SQLite.Simple\"]",
          "name": "field",
          "package": "sqlite-simple",
          "signature": "RowParser a",
          "source": "src/Database-SQLite-Simple-FromRow.html#field",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:field\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:field\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "field",
          "package": "sqlite-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromRow",
          "name": "fieldWith",
          "package": "sqlite-simple",
          "signature": "FieldParser a -\u003e RowParser a",
          "source": "src/Database-SQLite-Simple-FromRow.html#fieldWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "fieldWith",
          "normalized": "FieldParser a-\u003eRowParser a",
          "package": "sqlite-simple",
          "partial": "With",
          "signature": "FieldParser a-\u003eRowParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:fieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromRow",
          "name": "fromRow",
          "package": "sqlite-simple",
          "signature": "RowParser a",
          "source": "src/Database-SQLite-Simple-FromRow.html#fromRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "fromRow",
          "package": "sqlite-simple",
          "partial": "Row",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:fromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.FromRow",
          "name": "numFieldsRemaining",
          "package": "sqlite-simple",
          "signature": "RowParser Int",
          "source": "src/Database-SQLite-Simple-FromRow.html#numFieldsRemaining",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple FromRow",
          "module": "Database.SQLite.Simple.FromRow",
          "name": "numFieldsRemaining",
          "package": "sqlite-simple",
          "partial": "Fields Remaining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-FromRow.html#v:numFieldsRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal bits.  This interface is less stable and can change at any time.\n In particular this means that while the rest of the sqlite-simple\n package endeavors to follow the package versioning policy,  this module\n does not.  Also, at the moment there are things in here that aren't\n particularly internal and are exported elsewhere;  these will eventually\n disappear from this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Internal",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal bits This interface is less stable and can change at any time In particular this means that while the rest of the sqlite-simple package endeavors to follow the package versioning policy this module does not Also at the moment there are things in here that aren particularly internal and are exported elsewhere these will eventually disappear from this module",
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Internal",
          "package": "sqlite-simple",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "ColumnOutOfBounds",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#ColumnOutOfBounds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "ColumnOutOfBounds",
          "package": "sqlite-simple",
          "partial": "Column Out Of Bounds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:ColumnOutOfBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection to an open database.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003econnectionHandle\u003c/a\u003e\u003c/code\u003e to gain access to the underlying\n \u003ca\u003ehttp://hackage.haskell.org/package/direct-sqlite\u003c/a\u003e connection.\n This may be useful if you need to access some direct-sqlite\n functionality that's not exposed in the sqlite-simple API.  This\n should be a safe thing to do although mixing both APIs is\n discouraged.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Connection",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#Connection",
          "type": "newtype"
        },
        "index": {
          "description": "Connection to an open database You can use connectionHandle to gain access to the underlying http hackage.haskell.org package direct-sqlite connection This may be useful if you need to access some direct-sqlite functionality that not exposed in the sqlite-simple API This should be safe thing to do although mixing both APIs is discouraged",
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Connection",
          "package": "sqlite-simple",
          "partial": "Connection",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Field represents metadata about a particular field\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Field",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Field represents metadata about particular field",
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Field",
          "package": "sqlite-simple",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParseRO",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParseRO",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParseRO",
          "package": "sqlite-simple",
          "partial": "Row Parse RO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:RowParseRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParser",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParser",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParser",
          "package": "sqlite-simple",
          "partial": "Row Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#t:RowParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "ColumnOutOfBounds",
          "package": "sqlite-simple",
          "signature": "ColumnOutOfBounds",
          "source": "src/Database-SQLite-Simple-Internal.html#ColumnOutOfBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "ColumnOutOfBounds",
          "package": "sqlite-simple",
          "partial": "Column Out Of Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:ColumnOutOfBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Internal\",\"Database.SQLite.Simple\"]",
          "name": "Connection",
          "package": "sqlite-simple",
          "signature": "Connection",
          "source": "src/Database-SQLite-Simple-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Connection\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Connection\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Connection",
          "package": "sqlite-simple",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "Field",
          "package": "sqlite-simple",
          "signature": "Field",
          "source": "src/Database-SQLite-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "Field",
          "package": "sqlite-simple",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "RP",
          "package": "sqlite-simple",
          "signature": "RP",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "RP",
          "package": "sqlite-simple",
          "partial": "RP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:RP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParseRO",
          "package": "sqlite-simple",
          "signature": "RowParseRO",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParseRO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "RowParseRO",
          "package": "sqlite-simple",
          "partial": "Row Parse RO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:RowParseRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "column",
          "package": "sqlite-simple",
          "signature": "Int",
          "source": "src/Database-SQLite-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "column",
          "package": "sqlite-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Internal\",\"Database.SQLite.Simple\"]",
          "name": "connectionHandle",
          "package": "sqlite-simple",
          "signature": "Database",
          "source": "src/Database-SQLite-Simple-Internal.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:connectionHandle\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:connectionHandle\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "connectionHandle",
          "package": "sqlite-simple",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:connectionHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "errorColumnIndex",
          "package": "sqlite-simple",
          "signature": "Int",
          "source": "src/Database-SQLite-Simple-Internal.html#ColumnOutOfBounds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "errorColumnIndex",
          "package": "sqlite-simple",
          "partial": "Column Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:errorColumnIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "gettypename",
          "package": "sqlite-simple",
          "signature": "SQLData -\u003e ByteString",
          "source": "src/Database-SQLite-Simple-Internal.html#gettypename",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "gettypename",
          "normalized": "SQLData-\u003eByteString",
          "package": "sqlite-simple",
          "signature": "SQLData-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:gettypename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "nColumns",
          "package": "sqlite-simple",
          "signature": "Int",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParseRO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "nColumns",
          "package": "sqlite-simple",
          "partial": "Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:nColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "result",
          "package": "sqlite-simple",
          "signature": "SQLData",
          "source": "src/Database-SQLite-Simple-Internal.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "result",
          "package": "sqlite-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Internal",
          "name": "unRP",
          "package": "sqlite-simple",
          "signature": "ReaderT RowParseRO (StateT (Int, [SQLData]) Ok) a",
          "source": "src/Database-SQLite-Simple-Internal.html#RowParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Internal",
          "module": "Database.SQLite.Simple.Internal",
          "name": "unRP",
          "normalized": "ReaderT RowParseRO(StateT(Int,[SQLData])Ok)a",
          "package": "sqlite-simple",
          "partial": "RP",
          "signature": "ReaderT RowParseRO(StateT(Int,[SQLData])Ok)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Internal.html#v:unRP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOk\u003c/a\u003e\u003c/code\u003e type is a simple error handler,  basically equivalent to\n \u003ccode\u003eEither [SomeException]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne of the primary reasons why this type  was introduced is that\n \u003ccode\u003eEither SomeException\u003c/code\u003e had not been provided an instance for \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n and it would have been a bad idea to provide an orphaned instance for a\n commonly-used type and typeclass included in \u003ccode\u003ebase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtending the failure case to a list of \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003es enables a\n more sensible \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance definitions:   \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e concatinates\n the list of exceptions when both cases fail,  and \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e is defined as\n 'Errors []'.   Though \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e one could pick one of two exceptions, and\n throw away the other,  and have \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e provide a generic exception,\n this avoids cases where \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e overrides a more informative exception\n and allows you to see all the different ways your computation has failed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Ok.html",
          "type": "module"
        },
        "index": {
          "description": "The Ok type is simple error handler basically equivalent to Either SomeException One of the primary reasons why this type was introduced is that Either SomeException had not been provided an instance for Alternative and it would have been bad idea to provide an orphaned instance for commonly-used type and typeclass included in base Extending the failure case to list of SomeException enables more sensible Alternative instance definitions concatinates the list of exceptions when both cases fail and empty is defined as Errors Though one could pick one of two exceptions and throw away the other and have empty provide generic exception this avoids cases where empty overrides more informative exception and allows you to see all the different ways your computation has failed",
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "partial": "Ok",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea way to reify a list of exceptions into a single exception\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Ok",
          "name": "ManyErrors",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Ok.html#ManyErrors",
          "type": "newtype"
        },
        "index": {
          "description": "way to reify list of exceptions into single exception",
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "ManyErrors",
          "package": "sqlite-simple",
          "partial": "Many Errors",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#t:ManyErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Ok.html#Ok",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "partial": "Ok",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#t:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Ok",
          "name": "Errors",
          "package": "sqlite-simple",
          "signature": "Errors [SomeException]",
          "source": "src/Database-SQLite-Simple-Ok.html#Ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "Errors",
          "normalized": "Errors[SomeException]",
          "package": "sqlite-simple",
          "partial": "Errors",
          "signature": "Errors[SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Ok",
          "name": "ManyErrors",
          "package": "sqlite-simple",
          "signature": "ManyErrors [SomeException]",
          "source": "src/Database-SQLite-Simple-Ok.html#ManyErrors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "ManyErrors",
          "normalized": "ManyErrors[SomeException]",
          "package": "sqlite-simple",
          "partial": "Many Errors",
          "signature": "ManyErrors[SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:ManyErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "signature": "Ok !a",
          "source": "src/Database-SQLite-Simple-Ok.html#Ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Ok",
          "module": "Database.SQLite.Simple.Ok",
          "name": "Ok",
          "package": "sqlite-simple",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Ok.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapted from Leon P Smith's code for SQLite.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://sqlite.org/lang_datefunc.html\u003c/a\u003e for date formats used in SQLite.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "Implementation",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html",
          "type": "module"
        },
        "index": {
          "description": "Adapted from Leon Smith code for SQLite See http sqlite.org lang datefunc.html for date formats used in SQLite",
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "Implementation",
          "package": "sqlite-simple",
          "partial": "Implementation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "dayToBuilder",
          "package": "sqlite-simple",
          "signature": "Day -\u003e Builder",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#dayToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "dayToBuilder",
          "normalized": "Day-\u003eBuilder",
          "package": "sqlite-simple",
          "partial": "To Builder",
          "signature": "Day-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:dayToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "parseDay",
          "package": "sqlite-simple",
          "signature": "Text -\u003e Either String Day",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#parseDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "parseDay",
          "normalized": "Text-\u003eEither String Day",
          "package": "sqlite-simple",
          "partial": "Day",
          "signature": "Text-\u003eEither String Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:parseDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "parseUTCTime",
          "package": "sqlite-simple",
          "signature": "Text -\u003e Either String UTCTime",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#parseUTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "parseUTCTime",
          "normalized": "Text-\u003eEither String UTCTime",
          "package": "sqlite-simple",
          "partial": "UTCTime",
          "signature": "Text-\u003eEither String UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:parseUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "timeOfDayToBuilder",
          "package": "sqlite-simple",
          "signature": "TimeOfDay -\u003e Builder",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#timeOfDayToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "timeOfDayToBuilder",
          "normalized": "TimeOfDay-\u003eBuilder",
          "package": "sqlite-simple",
          "partial": "Of Day To Builder",
          "signature": "TimeOfDay-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:timeOfDayToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "timeZoneToBuilder",
          "package": "sqlite-simple",
          "signature": "TimeZone -\u003e Builder",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#timeZoneToBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "timeZoneToBuilder",
          "normalized": "TimeZone-\u003eBuilder",
          "package": "sqlite-simple",
          "partial": "Zone To Builder",
          "signature": "TimeZone-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:timeZoneToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput YYYY-MM-DD HH:MM:SS with an optional .SSS fraction part.\n Explicit timezone attribute is not appended as per SQLite3's\n datetime conventions.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "utcTimeToBuilder",
          "package": "sqlite-simple",
          "signature": "UTCTime -\u003e Builder",
          "source": "src/Database-SQLite-Simple-Time-Implementation.html#utcTimeToBuilder",
          "type": "function"
        },
        "index": {
          "description": "Output YYYY-MM-DD HH MM SS with an optional SSS fraction part Explicit timezone attribute is not appended as per SQLite3 datetime conventions",
          "hierarchy": "Database SQLite Simple Time Implementation",
          "module": "Database.SQLite.Simple.Time.Implementation",
          "name": "utcTimeToBuilder",
          "normalized": "UTCTime-\u003eBuilder",
          "package": "sqlite-simple",
          "partial": "Time To Builder",
          "signature": "UTCTime-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time-Implementation.html#v:utcTimeToBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversions to/from Haskell \u003ccode\u003eUTCTime\u003c/code\u003e and \u003ccode\u003eDay\u003c/code\u003e types for SQLite3.\n Offers better performance than direct use of time package's\n 'read'/'show' functionality.\n\u003c/p\u003e\u003cp\u003eThe parsers are heavily adapted for the specific variant of ISO 8601 that\n SQLite uses,  and the printers attempt to duplicate this syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.Time",
          "name": "Time",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Time.html",
          "type": "module"
        },
        "index": {
          "description": "Conversions to from Haskell UTCTime and Day types for SQLite3 Offers better performance than direct use of time package read show functionality The parsers are heavily adapted for the specific variant of ISO that SQLite uses and the printers attempt to duplicate this syntax",
          "hierarchy": "Database SQLite Simple Time",
          "module": "Database.SQLite.Simple.Time",
          "name": "Time",
          "package": "sqlite-simple",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToField\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a parameter to an SQLite\n value to be bound as a SQL query parameter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.ToField",
          "name": "ToField",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-ToField.html",
          "type": "module"
        },
        "index": {
          "description": "The ToField typeclass for rendering parameter to an SQLite value to be bound as SQL query parameter",
          "hierarchy": "Database SQLite Simple ToField",
          "module": "Database.SQLite.Simple.ToField",
          "name": "ToField",
          "package": "sqlite-simple",
          "partial": "To Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that may be used as a single parameter to a SQL query.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.ToField",
          "name": "ToField",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-ToField.html#ToField",
          "type": "class"
        },
        "index": {
          "description": "type that may be used as single parameter to SQL query",
          "hierarchy": "Database SQLite Simple ToField",
          "module": "Database.SQLite.Simple.ToField",
          "name": "ToField",
          "package": "sqlite-simple",
          "partial": "To Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#t:ToField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a value for substitution into a query string.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.ToField",
          "name": "toField",
          "package": "sqlite-simple",
          "signature": "a -\u003e SQLData",
          "source": "src/Database-SQLite-Simple-ToField.html#toField",
          "type": "method"
        },
        "index": {
          "description": "Prepare value for substitution into query string",
          "hierarchy": "Database SQLite Simple ToField",
          "module": "Database.SQLite.Simple.ToField",
          "name": "toField",
          "normalized": "a-\u003eSQLData",
          "package": "sqlite-simple",
          "partial": "Field",
          "signature": "a-\u003eSQLData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToField.html#v:toField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eToRow\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a collection of\n parameters to a SQL query.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "ToRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-ToRow.html",
          "type": "module"
        },
        "index": {
          "description": "The ToRow typeclass for rendering collection of parameters to SQL query Predefined instances are provided for tuples containing up to ten elements",
          "hierarchy": "Database SQLite Simple ToRow",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "ToRow",
          "package": "sqlite-simple",
          "partial": "To Row",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be turned into a list of SQLData\n elements.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "ToRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-ToRow.html#ToRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be turned into list of SQLData elements",
          "hierarchy": "Database SQLite Simple ToRow",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "ToRow",
          "package": "sqlite-simple",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "toRow",
          "package": "sqlite-simple",
          "signature": "a -\u003e [SQLData]",
          "source": "src/Database-SQLite-Simple-ToRow.html#toRow",
          "type": "method"
        },
        "index": {
          "description": "ToField collection of values",
          "hierarchy": "Database SQLite Simple ToRow",
          "module": "Database.SQLite.Simple.ToRow",
          "name": "toRow",
          "normalized": "a-\u003e[SQLData]",
          "package": "sqlite-simple",
          "partial": "Row",
          "signature": "a-\u003e[SQLData]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-ToRow.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module for sqlite-simple.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLite.Simple.Types",
          "name": "Types",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Top-level module for sqlite-simple",
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Types",
          "package": "sqlite-simple",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
          "module": "Database.SQLite.Simple.Types",
          "name": ":.",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": ":.",
          "package": "sqlite-simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA placeholder for the SQL \u003ccode\u003eNULL\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Types",
          "name": "Null",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#Null",
          "type": "data"
        },
        "index": {
          "description": "placeholder for the SQL NULL value",
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Null",
          "package": "sqlite-simple",
          "partial": "Null",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Database.SQLite.Simple.Types",
          "name": "Only",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Only",
          "package": "sqlite-simple",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.SQLite.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003eText\u003c/code\u003e, and literal Haskell strings that\n contain Unicode characters will be correctly transformed to UTF-8.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple.Types",
          "name": "Query",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.SQLite.Simple Query select The underlying type is Text and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Query",
          "package": "sqlite-simple",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Types\",\"Database.SQLite.Simple\"]",
          "name": ":.",
          "package": "sqlite-simple",
          "signature": "h :. t",
          "source": "src/Database-SQLite-Simple-Types.html#%3A.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v::.\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v::.\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": ":.",
          "package": "sqlite-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple.Types",
          "name": "Null",
          "package": "sqlite-simple",
          "signature": "Null",
          "source": "src/Database-SQLite-Simple-Types.html#Null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Null",
          "package": "sqlite-simple",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Types\",\"Database.SQLite.Simple\"]",
          "name": "Only",
          "package": "sqlite-simple",
          "signature": "Only",
          "source": "src/Database-SQLite-Simple-Types.html#Only",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Only\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Only\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Only",
          "package": "sqlite-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Types\",\"Database.SQLite.Simple\"]",
          "name": "Query",
          "package": "sqlite-simple",
          "signature": "Query",
          "source": "src/Database-SQLite-Simple-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Query\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:Query\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "Query",
          "package": "sqlite-simple",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Types\",\"Database.SQLite.Simple\"]",
          "name": "fromOnly",
          "package": "sqlite-simple",
          "signature": "a",
          "source": "src/Database-SQLite-Simple-Types.html#Only",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromOnly\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromOnly\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "fromOnly",
          "package": "sqlite-simple",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.SQLite.Simple.Types\",\"Database.SQLite.Simple\"]",
          "name": "fromQuery",
          "package": "sqlite-simple",
          "signature": "Text",
          "source": "src/Database-SQLite-Simple-Types.html#Query",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromQuery\",\"http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromQuery\"]"
        },
        "index": {
          "hierarchy": "Database SQLite Simple Types",
          "module": "Database.SQLite.Simple.Types",
          "name": "fromQuery",
          "package": "sqlite-simple",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple-Types.html#v:fromQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "Simple",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "Simple",
          "package": "sqlite-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composite type to parse your custom data structures without\n having to define dummy newtype wrappers every time.\n\u003c/p\u003e\u003cpre\u003e instance FromRow MyData where ...\n\u003c/pre\u003e\u003cpre\u003e instance FromRow MyData2 where ...\n\u003c/pre\u003e\u003cp\u003ethen I can do the following for free:\n\u003c/p\u003e\u003cpre\u003e\n res \u003c- query' c \u003ca\u003e...\u003c/a\u003e\n forM res $ \\(MyData{..} :. MyData2{..}) -\u003e do\n   ....\n\u003c/pre\u003e",
          "module": "Database.SQLite.Simple",
          "name": ":.",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#%3A.",
          "type": "data"
        },
        "index": {
          "description": "composite type to parse your custom data structures without having to define dummy newtype wrappers every time instance FromRow MyData where instance FromRow MyData2 where then can do the following for free res query forM res MyData MyData2 do",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": ":.",
          "package": "sqlite-simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex of a column in a result set. Column indices start from 0.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "ColumnIndex",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple.html#ColumnIndex",
          "type": "newtype"
        },
        "index": {
          "description": "Index of column in result set Column indices start from",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "ColumnIndex",
          "package": "sqlite-simple",
          "partial": "Column Index",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ColumnIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection to an open database.\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003econnectionHandle\u003c/a\u003e\u003c/code\u003e to gain access to the underlying\n \u003ca\u003ehttp://hackage.haskell.org/package/direct-sqlite\u003c/a\u003e connection.\n This may be useful if you need to access some direct-sqlite\n functionality that's not exposed in the sqlite-simple API.  This\n should be a safe thing to do although mixing both APIs is\n discouraged.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "Connection",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Internal.html#Connection",
          "type": "newtype"
        },
        "index": {
          "description": "Connection to an open database You can use connectionHandle to gain access to the underlying http hackage.haskell.org package direct-sqlite connection This may be useful if you need to access some direct-sqlite functionality that not exposed in the sqlite-simple API This should be safe thing to do although mixing both APIs is discouraged",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "Connection",
          "package": "sqlite-simple",
          "partial": "Connection",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e was malformed.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "FormatError",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple.html#FormatError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if Query was malformed This may occur if the number of characters in the query string does not match the number of parameters provided",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "FormatError",
          "package": "sqlite-simple",
          "partial": "Format Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:FormatError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be converted from a sequence of fields.\n Instances are provided for tuples up to 10 elements and lists of any length.\n\u003c/p\u003e\u003cp\u003eNote that instances can defined outside of sqlite-simple,  which is\n often useful.   For example, here's an instance for a user-defined pair:\n\u003c/p\u003e\u003cpre\u003edata User = User { name :: String, fileQuota :: Int }\n\ninstance \u003ccode\u003e\u003ca\u003eFromRow\u003c/a\u003e\u003c/code\u003e User where\n     fromRow = User \u003c$\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \u003c*\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe number of calls to \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e must match the number of fields returned\n in a single row of the query result.  Otherwise,  a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e\n exception will be thrown.\n\u003c/p\u003e\u003cp\u003eNote the caveats associated with user-defined implementations of\n \u003ccode\u003e\u003ca\u003efromRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "FromRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromRow.html#FromRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be converted from sequence of fields Instances are provided for tuples up to elements and lists of any length Note that instances can defined outside of sqlite-simple which is often useful For example here an instance for user-defined pair data User User name String fileQuota Int instance FromRow User where fromRow User field field The number of calls to field must match the number of fields returned in single row of the query result Otherwise ConversionFailed exception will be thrown Note the caveats associated with user-defined implementations of fromRow",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "FromRow",
          "package": "sqlite-simple",
          "partial": "From Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:FromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
          "module": "Database.SQLite.Simple",
          "name": "Only",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#Only",
          "type": "newtype"
        },
        "index": {
          "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "Only",
          "package": "sqlite-simple",
          "partial": "Only",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.SQLite.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003eText\u003c/code\u003e, and literal Haskell strings that\n contain Unicode characters will be correctly transformed to UTF-8.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "Query",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-Types.html#Query",
          "type": "newtype"
        },
        "index": {
          "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.SQLite.Simple Query select The underlying type is Text and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "Query",
          "package": "sqlite-simple",
          "partial": "Query",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "ResultError",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-FromField.html#ResultError",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown if conversion from SQL value to Haskell value fails",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "ResultError",
          "package": "sqlite-simple",
          "partial": "Result Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ResultError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLData",
          "package": "sqlite-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLData",
          "package": "sqlite-simple",
          "partial": "SQLData",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:SQLData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SQLite prepared statement.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "Statement",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "An SQLite prepared statement",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "Statement",
          "package": "sqlite-simple",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection type that can be turned into a list of SQLData\n elements.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "ToRow",
          "package": "sqlite-simple",
          "source": "src/Database-SQLite-Simple-ToRow.html#ToRow",
          "type": "class"
        },
        "index": {
          "description": "collection type that can be turned into list of SQLData elements",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "ToRow",
          "package": "sqlite-simple",
          "partial": "To Row",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#t:ToRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "ColumnIndex",
          "package": "sqlite-simple",
          "signature": "ColumnIndex ColumnIndex",
          "source": "src/Database-SQLite-Simple.html#ColumnIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "ColumnIndex",
          "package": "sqlite-simple",
          "partial": "Column Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:ColumnIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLBlob",
          "package": "sqlite-simple",
          "signature": "SQLBlob !ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLBlob",
          "package": "sqlite-simple",
          "partial": "SQLBlob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLFloat",
          "package": "sqlite-simple",
          "signature": "SQLFloat !Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLFloat",
          "package": "sqlite-simple",
          "partial": "SQLFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLInteger",
          "package": "sqlite-simple",
          "signature": "SQLInteger !Int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLInteger",
          "package": "sqlite-simple",
          "partial": "SQLInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLNull",
          "package": "sqlite-simple",
          "signature": "SQLNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLNull",
          "package": "sqlite-simple",
          "partial": "SQLNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "SQLText",
          "package": "sqlite-simple",
          "signature": "SQLText !Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "SQLText",
          "package": "sqlite-simple",
          "partial": "SQLText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:SQLText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds parameters to a prepared statement. Once \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the statement must be reset with the \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e function before it can be\n executed again by calling \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "bind",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e params -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#bind",
          "type": "function"
        },
        "index": {
          "description": "Binds parameters to prepared statement Once nextRow returns Nothing the statement must be reset with the reset function before it can be executed again by calling nextRow",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "bind",
          "normalized": "Statement-\u003ea-\u003eIO()",
          "package": "sqlite-simple",
          "signature": "Statement-\u003eparams-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a database connection.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "close",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close database connection",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a prepared statement.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "closeStatement",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#closeStatement",
          "type": "function"
        },
        "index": {
          "description": "Closes prepared statement",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "closeStatement",
          "normalized": "Statement-\u003eIO()",
          "package": "sqlite-simple",
          "partial": "Statement",
          "signature": "Statement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:closeStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of a a particular column in the result set of a\n \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e.  Throws an \u003ccode\u003e\u003ca\u003eArrayException\u003c/a\u003e\u003c/code\u003e if the colum index is out\n of bounds.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.sqlite.org/c3ref/column_name.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "columnName",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e ColumnIndex -\u003e IO Text",
          "source": "src/Database-SQLite-Simple.html#columnName",
          "type": "function"
        },
        "index": {
          "description": "Return the name of particular column in the result set of Statement Throws an ArrayException if the colum index is out of bounds http www.sqlite.org c3ref column name.html",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "columnName",
          "normalized": "Statement-\u003eColumnIndex-\u003eIO Text",
          "package": "sqlite-simple",
          "partial": "Name",
          "signature": "Statement-\u003eColumnIndex-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:columnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "execute",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e q -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Execute an INSERT UPDATE or other SQL query that is not expected to return results Throws FormatError if the query could not be formatted correctly",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "execute",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO()",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003eq-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "execute_",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#execute_",
          "type": "function"
        },
        "index": {
          "description": "version of execute that does not perform query substitution",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "execute_",
          "normalized": "Connection-\u003eQuery-\u003eIO()",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:execute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return results.\n Results are converted and fed into the \u003ccode\u003eaction\u003c/code\u003e callback as they are being\n retrieved from the database.\n\u003c/p\u003e\u003cp\u003eThis allows gives the possibility of processing results in constant space\n (for instance writing them to disk).\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string mismatched with given arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.SQLite.Simple",
          "name": "fold",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e params -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
          "source": "src/Database-SQLite-Simple.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Perform SELECT or other SQL query that is expected to return results Results are converted and fed into the action callback as they are being retrieved from the database This allows gives the possibility of processing results in constant space for instance writing them to disk Exceptions that may be thrown FormatError the query string mismatched with given arguments ResultError result conversion failed",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "fold",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003eparams-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e which does not perform parameter substitution.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "fold_",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e a -\u003e (a -\u003e row -\u003e IO a) -\u003e IO a",
          "source": "src/Database-SQLite-Simple.html#fold_",
          "type": "function"
        },
        "index": {
          "description": "version of fold which does not perform parameter substitution",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "fold_",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003erow-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLite.Simple",
          "name": "fromRow",
          "package": "sqlite-simple",
          "signature": "RowParser a",
          "source": "src/Database-SQLite-Simple-FromRow.html#fromRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "fromRow",
          "package": "sqlite-simple",
          "partial": "Row",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:fromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the rowid of the most recent successful INSERT on the\n given database connection.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003ehttp://www.sqlite.org/c3ref/last_insert_rowid.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "lastInsertRowId",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e IO Int64",
          "source": "src/Database-SQLite-Simple.html#lastInsertRowId",
          "type": "function"
        },
        "index": {
          "description": "Returns the rowid of the most recent successful INSERT on the given database connection See also http www.sqlite.org c3ref last insert rowid.html",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "lastInsertRowId",
          "normalized": "Connection-\u003eIO Int",
          "package": "sqlite-simple",
          "partial": "Insert Row Id",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:lastInsertRowId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the next row from the prepared statement.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "nextRow",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e IO (Maybe r)",
          "source": "src/Database-SQLite-Simple.html#nextRow",
          "type": "function"
        },
        "index": {
          "description": "Extracts the next row from the prepared statement",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "nextRow",
          "normalized": "Statement-\u003eIO(Maybe a)",
          "package": "sqlite-simple",
          "partial": "Row",
          "signature": "Statement-\u003eIO(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:nextRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a database connection to a given file.  Will throw an\n exception if it cannot connect.\n\u003c/p\u003e\u003cp\u003eEvery \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e must be closed with a call to \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you specify \":memory:\" or an empty string as the input filename,\n then a private, temporary in-memory database is created for the\n connection.  This database will vanish when you close the\n connection.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "open",
          "package": "sqlite-simple",
          "signature": "String -\u003e IO Connection",
          "source": "src/Database-SQLite-Simple.html#open",
          "type": "function"
        },
        "index": {
          "description": "Open database connection to given file Will throw an exception if it cannot connect Every open must be closed with call to close If you specify memory or an empty string as the input filename then private temporary in-memory database is created for the connection This database will vanish when you close the connection",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "open",
          "normalized": "String-\u003eIO Connection",
          "package": "sqlite-simple",
          "signature": "String-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a prepared statement. A prepared statement must always be closed with\n a corresponding call to \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e before closing the connection. Use\n \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e to iterate on the values returned. Once \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, you need to invoke \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e before reexecuting the statement again\n with \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "openStatement",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e IO Statement",
          "source": "src/Database-SQLite-Simple.html#openStatement",
          "type": "function"
        },
        "index": {
          "description": "Opens prepared statement prepared statement must always be closed with corresponding call to closeStatement before closing the connection Use nextRow to iterate on the values returned Once nextRow returns Nothing you need to invoke reset before reexecuting the statement again with nextRow",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "openStatement",
          "normalized": "Connection-\u003eQuery-\u003eIO Statement",
          "package": "sqlite-simple",
          "partial": "Statement",
          "signature": "Connection-\u003eQuery-\u003eIO Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:openStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. All results are retrieved and converted before this\n function returns.\n\u003c/p\u003e\u003cp\u003eWhen processing large results, this function will consume a lot of\n client-side memory.  Consider using \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string mismatched with given arguments.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.SQLite.Simple",
          "name": "query",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e q -\u003e IO [r]",
          "source": "src/Database-SQLite-Simple.html#query",
          "type": "function"
        },
        "index": {
          "description": "Perform SELECT or other SQL query that is expected to return results All results are retrieved and converted before this function returns When processing large results this function will consume lot of client-side memory Consider using fold instead Exceptions that may be thrown FormatError the query string mismatched with given arguments ResultError result conversion failed",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "query",
          "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO[b]",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003eq-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "query_",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e IO [r]",
          "source": "src/Database-SQLite-Simple.html#query_",
          "type": "function"
        },
        "index": {
          "description": "version of query that does not perform query substitution",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "query_",
          "normalized": "Connection-\u003eQuery-\u003eIO[a]",
          "package": "sqlite-simple",
          "signature": "Connection-\u003eQuery-\u003eIO[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:query_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets a statement. This does not reset bound parameters, if any, but\n allows the statement to be reexecuted again by invoking \u003ccode\u003e\u003ca\u003enextRow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "reset",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#reset",
          "type": "function"
        },
        "index": {
          "description": "Resets statement This does not reset bound parameters if any but allows the statement to be reexecuted again by invoking nextRow",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "reset",
          "normalized": "Statement-\u003eIO()",
          "package": "sqlite-simple",
          "signature": "Statement-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ehttp://www.sqlite.org/c3ref/profile.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eEnable/disable tracing of SQL execution.  Tracing can be disabled\n by setting \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e as the logger callback.\n\u003c/p\u003e\u003cp\u003eWarning: If the logger callback throws an exception, your whole\n program may crash.  Enable only for debugging!\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "setTrace",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Maybe (Text -\u003e IO ()) -\u003e IO ()",
          "source": "src/Database-SQLite-Simple.html#setTrace",
          "type": "function"
        },
        "index": {
          "description": "http www.sqlite.org c3ref profile.html Enable disable tracing of SQL execution Tracing can be disabled by setting Nothing as the logger callback Warning If the logger callback throws an exception your whole program may crash Enable only for debugging",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "setTrace",
          "normalized": "Connection-\u003eMaybe(Text-\u003eIO())-\u003eIO()",
          "package": "sqlite-simple",
          "partial": "Trace",
          "signature": "Connection-\u003eMaybe(Text-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:setTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToField a collection of values.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "toRow",
          "package": "sqlite-simple",
          "signature": "a -\u003e [SQLData]",
          "source": "src/Database-SQLite-Simple-ToRow.html#toRow",
          "type": "method"
        },
        "index": {
          "description": "ToField collection of values",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "toRow",
          "normalized": "a-\u003e[SQLData]",
          "package": "sqlite-simple",
          "partial": "Row",
          "signature": "a-\u003e[SQLData]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds parameters to a prepared statement, and \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003es the statement when\n the callback completes, even in the presence of exceptions.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ewithBind\u003c/a\u003e\u003c/code\u003e to reuse prepared statements.  Because it \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003es the\n statement \u003cem\u003eafter\u003c/em\u003e each usage, it avoids a pitfall involving implicit\n transactions.  SQLite creates an implicit transaction if you don't say\n \u003ccode\u003eBEGIN\u003c/code\u003e explicitly, and does not commit it until all active statements are\n finished with either \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecloseStatement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "withBind",
          "package": "sqlite-simple",
          "signature": "Statement -\u003e params -\u003e IO a -\u003e IO a",
          "source": "src/Database-SQLite-Simple.html#withBind",
          "type": "function"
        },
        "index": {
          "description": "Binds parameters to prepared statement and reset the statement when the callback completes even in the presence of exceptions Use withBind to reuse prepared statements Because it reset the statement after each usage it avoids pitfall involving implicit transactions SQLite creates an implicit transaction if you don say BEGIN explicitly and does not commit it until all active statements are finished with either reset or closeStatement",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "withBind",
          "normalized": "Statement-\u003ea-\u003eIO b-\u003eIO b",
          "package": "sqlite-simple",
          "partial": "Bind",
          "signature": "Statement-\u003eparams-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a database connection, executes an action using this connection, and\n closes the connection, even in the presence of exceptions.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "withConnection",
          "package": "sqlite-simple",
          "signature": "String -\u003e (Connection -\u003e IO a) -\u003e IO a",
          "source": "src/Database-SQLite-Simple.html#withConnection",
          "type": "function"
        },
        "index": {
          "description": "Opens database connection executes an action using this connection and closes the connection even in the presence of exceptions",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "withConnection",
          "normalized": "String-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "package": "sqlite-simple",
          "partial": "Connection",
          "signature": "String-\u003e(Connection-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a prepared statement, executes an action using this statement, and\n closes the statement, even in the presence of exceptions.\n\u003c/p\u003e",
          "module": "Database.SQLite.Simple",
          "name": "withStatement",
          "package": "sqlite-simple",
          "signature": "Connection -\u003e Query -\u003e (Statement -\u003e IO a) -\u003e IO a",
          "source": "src/Database-SQLite-Simple.html#withStatement",
          "type": "function"
        },
        "index": {
          "description": "Opens prepared statement executes an action using this statement and closes the statement even in the presence of exceptions",
          "hierarchy": "Database SQLite Simple",
          "module": "Database.SQLite.Simple",
          "name": "withStatement",
          "normalized": "Connection-\u003eQuery-\u003e(Statement-\u003eIO a)-\u003eIO a",
          "package": "sqlite-simple",
          "partial": "Statement",
          "signature": "Connection-\u003eQuery-\u003e(Statement-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sqlite-simple/docs/Database-SQLite-Simple.html#v:withStatement"
      }
    }
  ]
]