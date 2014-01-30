[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a parameter to a SQL query.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple-Param.html",
        "fct-type": "module",
        "title": "Param"
      },
      "index": {
        "description": "The Param typeclass for rendering parameter to SQL query",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Param",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eHow to render an element when substituting it into a query.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple-Param.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "How to render an element when substituting it into query",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Action",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be used as a single parameter to a SQL query.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-MySQL-Simple-Param.html#Param",
        "fct-type": "class",
        "title": "Param"
      },
      "index": {
        "description": "type that may be used as single parameter to SQL query",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Param",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#v:Escape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape and enclose in quotes before substituting. Use for all\n text-like types, and anything else that may contain unsafe\n characters when rendered.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "Escape ByteString",
        "fct-source": "src/Database-MySQL-Simple-Param.html#Action",
        "fct-type": "function",
        "title": "Escape"
      },
      "index": {
        "description": "Escape and enclose in quotes before substituting Use for all text-like types and anything else that may contain unsafe characters when rendered",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Escape",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Escape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#v:Many",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a series of rendering actions.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "Many [Action]",
        "fct-source": "src/Database-MySQL-Simple-Param.html#Action",
        "fct-type": "function",
        "title": "Many"
      },
      "index": {
        "description": "Concatenate series of rendering actions",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Many",
        "normalized": "Many[Action]",
        "package": "mysql-simple",
        "partial": "Many",
        "signature": "Many[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#v:Plain",
      "description": {
        "fct-descr": "\u003cp\u003eRender without escaping or quoting. Use for non-text types\n such as numbers, when you are \u003cem\u003ecertain\u003c/em\u003e that they will not\n introduce formatting vulnerabilities via use of characters such\n as spaces or \"\u003ccode\u003e'\u003c/code\u003e\".\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "Plain Builder",
        "fct-source": "src/Database-MySQL-Simple-Param.html#Action",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "Render without escaping or quoting Use for non-text types such as numbers when you are certain that they will not introduce formatting vulnerabilities via use of characters such as spaces or",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "Plain",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#v:inQuotes",
      "description": {
        "fct-descr": "\u003cp\u003eSurround a string with single-quote characters: \"\u003ccode\u003e'\u003c/code\u003e\"\n\u003c/p\u003e\u003cp\u003eThis function \u003cem\u003edoes not\u003c/em\u003e perform any other escaping.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "Builder -\u003e Builder",
        "fct-source": "src/Database-MySQL-Simple-Param.html#inQuotes",
        "fct-type": "function",
        "title": "inQuotes"
      },
      "index": {
        "description": "Surround string with single-quote characters This function does not perform any other escaping",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "inQuotes",
        "normalized": "Builder-\u003eBuilder",
        "package": "mysql-simple",
        "partial": "Quotes",
        "signature": "Builder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Param.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a value for substitution into a query string.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Param",
        "fct-package": "mysql-simple",
        "fct-signature": "a -\u003e Action",
        "fct-source": "src/Database-MySQL-Simple-Param.html#render",
        "fct-type": "method",
        "title": "render"
      },
      "index": {
        "description": "Prepare value for substitution into query string",
        "hierarchy": "Database MySQL Simple Param",
        "module": "Database.MySQL.Simple.Param",
        "name": "render",
        "normalized": "a-\u003eAction",
        "package": "mysql-simple",
        "partial": "",
        "signature": "a-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryParams.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eQueryParams\u003c/a\u003e\u003c/code\u003e typeclass, for rendering a collection of\n parameters to a SQL query.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple.QueryParams",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple-QueryParams.html",
        "fct-type": "module",
        "title": "QueryParams"
      },
      "index": {
        "description": "The QueryParams typeclass for rendering collection of parameters to SQL query Predefined instances are provided for tuples containing up to ten elements",
        "hierarchy": "Database MySQL Simple QueryParams",
        "module": "Database.MySQL.Simple.QueryParams",
        "name": "QueryParams",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryParams.html#t:QueryParams",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be turned into a list of rendering\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.QueryParams",
        "fct-package": "mysql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-MySQL-Simple-QueryParams.html#QueryParams",
        "fct-type": "class",
        "title": "QueryParams"
      },
      "index": {
        "description": "collection type that can be turned into list of rendering Action Instances should use the render method of the Param class to perform conversion of each element of the collection",
        "hierarchy": "Database MySQL Simple QueryParams",
        "module": "Database.MySQL.Simple.QueryParams",
        "name": "QueryParams",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryParams.html#v:renderParams",
      "description": {
        "fct-descr": "\u003cp\u003eRender a collection of values.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.QueryParams",
        "fct-package": "mysql-simple",
        "fct-signature": "a -\u003e [Action]",
        "fct-source": "src/Database-MySQL-Simple-QueryParams.html#renderParams",
        "fct-type": "method",
        "title": "renderParams"
      },
      "index": {
        "description": "Render collection of values",
        "hierarchy": "Database MySQL Simple QueryParams",
        "module": "Database.MySQL.Simple.QueryParams",
        "name": "renderParams",
        "normalized": "a-\u003e[Action]",
        "package": "mysql-simple",
        "partial": "Params",
        "signature": "a-\u003e[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryResults.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e typeclass, for converting a row of results\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003ePredefined instances are provided for tuples containing up to ten\n elements.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple.QueryResults",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple-QueryResults.html",
        "fct-type": "module",
        "title": "QueryResults"
      },
      "index": {
        "description": "The QueryResults typeclass for converting row of results returned by SQL query into more useful Haskell representation Predefined instances are provided for tuples containing up to ten elements",
        "hierarchy": "Database MySQL Simple QueryResults",
        "module": "Database.MySQL.Simple.QueryResults",
        "name": "QueryResults",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryResults.html#t:QueryResults",
      "description": {
        "fct-descr": "\u003cp\u003eA collection type that can be converted from a list of strings.\n\u003c/p\u003e\u003cp\u003eInstances should use the \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e class\n to perform conversion of each element of the collection.\n\u003c/p\u003e\u003cp\u003eThis example instance demonstrates how to convert a two-column row\n into a Haskell pair. Each field in the metadata is paired up with\n each value from the row, and the two are passed to \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n instance (\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e a, \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e b) =\u003e \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e (a,b) where\n     \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e [fa,fb] [va,vb] = (a,b)\n         where !a = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fa va\n               !b = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fb vb\n     \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e fs vs  = \u003ccode\u003e\u003ca\u003econvertError\u003c/a\u003e\u003c/code\u003e fs vs 2\n\u003c/pre\u003e\u003cp\u003eNotice that this instance evaluates each element to WHNF before\n constructing the pair. By doing this, we guarantee two important\n properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Keep resource usage under control by preventing the construction\n   of potentially long-lived thunks.\n\u003c/li\u003e\u003cli\u003e Ensure that any \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e that might arise is thrown\n   immediately, rather than some place later in application code\n   that cannot handle it.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eYou can also declare Haskell types of your own to be instances of\n \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\ndata User = User { firstName :: String, lastName :: String }\n\ninstance \u003ccode\u003e\u003ca\u003eQueryResults\u003c/a\u003e\u003c/code\u003e User where\n    \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e [fa,fb] [va,vb] = User \u003ca\u003e$\u003c/a\u003e a \u003ca\u003e*\u003c/a\u003e b\n        where !a = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fa va\n              !b = \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e fb vb\n    \u003ccode\u003e\u003ca\u003econvertResults\u003c/a\u003e\u003c/code\u003e fs vs  = \u003ccode\u003e\u003ca\u003econvertError\u003c/a\u003e\u003c/code\u003e fs vs 2\n\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple.QueryResults",
        "fct-package": "mysql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-MySQL-Simple-QueryResults.html#QueryResults",
        "fct-type": "class",
        "title": "QueryResults"
      },
      "index": {
        "description": "collection type that can be converted from list of strings Instances should use the convert method of the Result class to perform conversion of each element of the collection This example instance demonstrates how to convert two-column row into Haskell pair Each field in the metadata is paired up with each value from the row and the two are passed to convert instance Result Result QueryResults where convertResults fa fb va vb where convert fa va convert fb vb convertResults fs vs convertError fs vs Notice that this instance evaluates each element to WHNF before constructing the pair By doing this we guarantee two important properties Keep resource usage under control by preventing the construction of potentially long-lived thunks Ensure that any ResultError that might arise is thrown immediately rather than some place later in application code that cannot handle it You can also declare Haskell types of your own to be instances of QueryResults data User User firstName String lastName String instance QueryResults User where convertResults fa fb va vb User where convert fa va convert fb vb convertResults fs vs convertError fs vs",
        "hierarchy": "Database MySQL Simple QueryResults",
        "module": "Database.MySQL.Simple.QueryResults",
        "name": "QueryResults",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryResults.html#v:convertError",
      "description": {
        "fct-descr": "\u003cp\u003eThrow a \u003ccode\u003e\u003ca\u003eConversionFailed\u003c/a\u003e\u003c/code\u003e exception, indicating a mismatch\n between the number of columns in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e and row, and the\n number in the collection to be converted to.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.QueryResults",
        "fct-package": "mysql-simple",
        "fct-signature": "[Field]-\u003e [Maybe ByteString]-\u003e Int-\u003e a",
        "fct-type": "function",
        "title": "convertError"
      },
      "index": {
        "description": "Throw ConversionFailed exception indicating mismatch between the number of columns in the Field and row and the number in the collection to be converted to",
        "hierarchy": "Database MySQL Simple QueryResults",
        "module": "Database.MySQL.Simple.QueryResults",
        "name": "convertError",
        "normalized": "[Field]-\u003e[Maybe ByteString]-\u003eInt-\u003ea",
        "package": "mysql-simple",
        "partial": "Error",
        "signature": "[Field]-\u003e[Maybe ByteString]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-QueryResults.html#v:convertResults",
      "description": {
        "fct-descr": "\u003cp\u003eConvert values from a row into a Haskell collection.\n\u003c/p\u003e\u003cp\u003eThis function will throw a \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e if conversion of the\n collection fails.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.QueryResults",
        "fct-package": "mysql-simple",
        "fct-signature": "[Field] -\u003e [Maybe ByteString] -\u003e a",
        "fct-source": "src/Database-MySQL-Simple-QueryResults.html#convertResults",
        "fct-type": "method",
        "title": "convertResults"
      },
      "index": {
        "description": "Convert values from row into Haskell collection This function will throw ResultError if conversion of the collection fails",
        "hierarchy": "Database MySQL Simple QueryResults",
        "module": "Database.MySQL.Simple.QueryResults",
        "name": "convertResults",
        "normalized": "[Field]-\u003e[Maybe ByteString]-\u003ea",
        "package": "mysql-simple",
        "partial": "Results",
        "signature": "[Field]-\u003e[Maybe ByteString]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e typeclass, for converting a single value in a row\n returned by a SQL query into a more useful Haskell representation.\n\u003c/p\u003e\u003cp\u003eA Haskell numeric type is considered to be compatible with all\n MySQL numeric types that are less accurate than it. For instance,\n the Haskell \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type is compatible with the MySQL \u003ccode\u003e\u003ca\u003eLong\u003c/a\u003e\u003c/code\u003e type\n because it can represent a \u003ccode\u003e\u003ca\u003eLong\u003c/a\u003e\u003c/code\u003e exactly. On the other hand, since\n a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e might lose precision if representing a \u003ccode\u003e\u003ca\u003eLongLong\u003c/a\u003e\u003c/code\u003e, the\n two are \u003cem\u003enot\u003c/em\u003e considered compatible.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple-Result.html",
        "fct-type": "module",
        "title": "Result"
      },
      "index": {
        "description": "The Result typeclass for converting single value in row returned by SQL query into more useful Haskell representation Haskell numeric type is considered to be compatible with all MySQL numeric types that are less accurate than it For instance the Haskell Double type is compatible with the MySQL Long type because it can represent Long exactly On the other hand since Double might lose precision if representing LongLong the two are not considered compatible",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "Result",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eA type that may be converted from a SQL type.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "class",
        "fct-source": "src/Database-MySQL-Simple-Result.html#Result",
        "fct-type": "class",
        "title": "Result"
      },
      "index": {
        "description": "type that may be converted from SQL type",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "Result",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "ResultError",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:ConversionFailed",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL value could not be parsed, or could not\n be represented as a valid Haskell value, or an\n unexpected low-level error occurred (e.g. mismatch\n between metadata and actual data in a row).\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "ConversionFailed",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "ConversionFailed"
      },
      "index": {
        "description": "The SQL value could not be parsed or could not be represented as valid Haskell value or an unexpected low-level error occurred e.g mismatch between metadata and actual data in row",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "ConversionFailed",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Conversion Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:Incompatible",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQL and Haskell types are not compatible.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "Incompatible",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "Incompatible"
      },
      "index": {
        "description": "The SQL and Haskell types are not compatible",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "Incompatible",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Incompatible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:UnexpectedNull",
      "description": {
        "fct-descr": "\u003cp\u003eA SQL \u003ccode\u003eNULL\u003c/code\u003e was encountered when the Haskell\n type did not permit it.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "UnexpectedNull",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "UnexpectedNull"
      },
      "index": {
        "description": "SQL NULL was encountered when the Haskell type did not permit it",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "UnexpectedNull",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Unexpected Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:convert",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a SQL value to a Haskell value.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e if conversion fails.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "Field -\u003e Maybe ByteString -\u003e a",
        "fct-source": "src/Database-MySQL-Simple-Result.html#convert",
        "fct-type": "method",
        "title": "convert"
      },
      "index": {
        "description": "Convert SQL value to Haskell value Throws ResultError if conversion fails",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "convert",
        "normalized": "Field-\u003eMaybe ByteString-\u003ea",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Field-\u003eMaybe ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:errHaskellType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "errHaskellType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "errHaskellType",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Haskell Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:errMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "errMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "errMessage",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Result.html#v:errSQLType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple.Result",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "function",
        "title": "errSQLType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Result",
        "module": "Database.MySQL.Simple.Result",
        "name": "errSQLType",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "SQLType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Basic types",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Types",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a mostly-binary string to be escaped in hexadecimal.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Wrap mostly-binary string to be escaped in hexadecimal",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Binary",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (In [3,4,5])\n\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#In",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in In",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "In",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#t:Null",
      "description": {
        "fct-descr": "\u003cp\u003eA placeholder for the SQL \u003ccode\u003eNULL\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Null",
        "fct-type": "data",
        "title": "Null"
      },
      "index": {
        "description": "placeholder for the SQL NULL value",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.MySQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Query",
        "fct-type": "newtype",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.MySQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:Binary",
      "description": {
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "Binary a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Binary",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:In",
      "description": {
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "In a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#In",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "In",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:Null",
      "description": {
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "Null",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Null",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Null",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:Only",
      "description": {
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Only",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:Query",
      "description": {
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "Query",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "Query",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "fromOnly",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple-Types.html#v:fromQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple.Types",
        "fct-package": "mysql-simple",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Query",
        "fct-type": "function",
        "title": "fromQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple Types",
        "module": "Database.MySQL.Simple.Types",
        "name": "fromQuery",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA mid-level client library for the MySQL database, aimed at ease of\n use and high performance.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "module",
        "fct-source": "src/Database-MySQL-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "mid-level client library for the MySQL database aimed at ease of use and high performance",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a mostly-binary string to be escaped in hexadecimal.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Wrap mostly-binary string to be escaped in hexadecimal",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Binary",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:ConnectInfo",
      "description": {
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eConnection to a MySQL database.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection to MySQL database",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Connection",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:FormatError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e could not be formatted correctly.\n This may occur if the number of '\u003ccode\u003e?\u003c/code\u003e' characters in the query\n string does not match the number of parameters provided.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple.html#FormatError",
        "fct-type": "data",
        "title": "FormatError"
      },
      "index": {
        "description": "Exception thrown if Query could not be formatted correctly This may occur if the number of characters in the query string does not match the number of parameters provided",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "FormatError",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Format Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:In",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a list of values for use in an \u003ccode\u003eIN\u003c/code\u003e clause.  Replaces a\n single \"\u003ccode\u003e?\u003c/code\u003e\" character with a parenthesized list of rendered\n values.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e query c \"select * from whatever where id in ?\" (In [3,4,5])\n\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#In",
        "fct-type": "newtype",
        "title": "In"
      },
      "index": {
        "description": "Wrap list of values for use in an IN clause Replaces single character with parenthesized list of rendered values Example query select from whatever where id in In",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "In",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:Only",
      "description": {
        "fct-descr": "\u003cp\u003eA single-value \"collection\".\n\u003c/p\u003e\u003cp\u003eThis is useful if you need to supply a single parameter to a SQL\n query, or extract a single column from a SQL result.\n\u003c/p\u003e\u003cp\u003eParameter example:\n\u003c/p\u003e\u003cpre\u003equery c \"select x from scores where x \u003e ?\" (\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e (42::Int))\u003c/pre\u003e\u003cp\u003eResult example:\n\u003c/p\u003e\u003cpre\u003exs \u003c- query_ c \"select id from users\"\nforM_ xs $ \\(\u003ccode\u003e\u003ca\u003eOnly\u003c/a\u003e\u003c/code\u003e id) -\u003e {- ... -}\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "newtype",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "newtype",
        "title": "Only"
      },
      "index": {
        "description": "single-value collection This is useful if you need to supply single parameter to SQL query or extract single column from SQL result Parameter example query select from scores where Only Int Result example xs query select id from users forM xs Only id",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Only",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query string. This type is intended to make it difficult to\n construct a SQL query by concatenating string fragments, as that is\n an extremely common way to accidentally introduce SQL injection\n vulnerabilities into an application.\n\u003c/p\u003e\u003cp\u003eThis type is an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, so the easiest way to\n construct a query is to enable the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language\n extension and then simply write the query in double quotes.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n\n import Database.MySQL.Simple\n\n q :: Query\n q = \"select ?\"\n\u003c/pre\u003e\u003cp\u003eThe underlying type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, and literal Haskell strings\n that contain Unicode characters will be correctly transformed to\n UTF-8.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query string This type is intended to make it difficult to construct SQL query by concatenating string fragments as that is an extremely common way to accidentally introduce SQL injection vulnerabilities into an application This type is an instance of IsString so the easiest way to construct query is to enable the OverloadedStrings language extension and then simply write the query in double quotes LANGUAGE OverloadedStrings import Database.MySQL.Simple Query select The underlying type is ByteString and literal Haskell strings that contain Unicode characters will be correctly transformed to UTF-8",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Query",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:QueryError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e is used to perform an \u003ccode\u003eINSERT\u003c/code\u003e-like\n operation, or \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e is used to perform a \u003ccode\u003eSELECT\u003c/code\u003e-like operation.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple.html#QueryError",
        "fct-type": "data",
        "title": "QueryError"
      },
      "index": {
        "description": "Exception thrown if query is used to perform an INSERT like operation or execute is used to perform SELECT like operation",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "QueryError",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Query Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#t:ResultError",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown if conversion from a SQL value to a Haskell\n value fails.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "data",
        "fct-source": "src/Database-MySQL-Simple-Result.html#ResultError",
        "fct-type": "data",
        "title": "ResultError"
      },
      "index": {
        "description": "Exception thrown if conversion from SQL value to Haskell value fails",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "ResultError",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Result Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:Binary",
      "description": {
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Binary a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Binary",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:ConnectInfo",
      "description": {
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "ConnectInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "ConnectInfo",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:In",
      "description": {
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "In a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#In",
        "fct-type": "function",
        "title": "In"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "In",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:Only",
      "description": {
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Only",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "Only"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "Only",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:autocommit",
      "description": {
        "fct-descr": "\u003cp\u003eTurn autocommit on or off.\n\u003c/p\u003e\u003cp\u003eBy default, MySQL runs with autocommit mode enabled. In this mode,\n as soon as you modify a table, MySQL stores your modification\n permanently.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Bool -\u003e IO ()",
        "fct-type": "function",
        "title": "autocommit"
      },
      "index": {
        "description": "Turn autocommit on or off By default MySQL runs with autocommit mode enabled In this mode as soon as you modify table MySQL stores your modification permanently",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "autocommit",
        "normalized": "Connection-\u003eBool-\u003eIO()",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eClose a connection, and mark any outstanding \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e as\n invalid.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Close connection and mark any outstanding Result as invalid",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit the current transaction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "Commit the current transaction",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "commit",
        "normalized": "Connection-\u003eIO()",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to a database.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "ConnectInfo -\u003e IO Connection",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Connect to database",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connect",
        "normalized": "ConnectInfo-\u003eIO Connection",
        "package": "mysql-simple",
        "partial": "",
        "signature": "ConnectInfo-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectDatabase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectDatabase",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectHost"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectHost",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "[Option]",
        "fct-type": "function",
        "title": "connectOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectOptions",
        "normalized": "[Option]",
        "package": "mysql-simple",
        "partial": "Options",
        "signature": "[Option]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectPassword",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "FilePath",
        "fct-type": "function",
        "title": "connectPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectPath",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Word16",
        "fct-type": "function",
        "title": "connectPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectPort",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectSSL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Maybe SSLInfo",
        "fct-type": "function",
        "title": "connectSSL"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectSSL",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "SSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:connectUser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "connectUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "connectUser",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:defaultConnectInfo",
      "description": {
        "fct-descr": "\u003cp\u003eDefault information for setting up a connection.\n\u003c/p\u003e\u003cp\u003eDefaults are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Server on \u003ccode\u003elocalhost\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e User \u003ccode\u003eroot\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e No password\n\u003c/li\u003e\u003cli\u003e Database \u003ccode\u003etest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Character set \u003ccode\u003eutf8\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse as in the following example:\n\u003c/p\u003e\u003cpre\u003e connect defaultConnectInfo { connectHost = \"db.example.com\" }\n\u003c/pre\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "ConnectInfo",
        "fct-type": "function",
        "title": "defaultConnectInfo"
      },
      "index": {
        "description": "Default information for setting up connection Defaults are as follows Server on localhost User root No password Database test Character set utf8 Use as in the following example connect defaultConnectInfo connectHost db.example.com",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "defaultConnectInfo",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Connect Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO Int64",
        "fct-source": "src/Database-MySQL-Simple.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute an INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "execute",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO Int",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:executeMany",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a multi-row \u003ccode\u003eINSERT\u003c/code\u003e, \u003ccode\u003eUPDATE\u003c/code\u003e, or other SQL query that is not\n expected to return results.\n\u003c/p\u003e\u003cp\u003eReturns the number of rows affected.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query could not be formatted correctly.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e [q] -\u003e IO Int64",
        "fct-source": "src/Database-MySQL-Simple.html#executeMany",
        "fct-type": "function",
        "title": "executeMany"
      },
      "index": {
        "description": "Execute multi-row INSERT UPDATE or other SQL query that is not expected to return results Returns the number of rows affected Throws FormatError if the query could not be formatted correctly",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "executeMany",
        "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO Int",
        "package": "mysql-simple",
        "partial": "Many",
        "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:execute_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO Int64",
        "fct-source": "src/Database-MySQL-Simple.html#execute_",
        "fct-type": "function",
        "title": "execute_"
      },
      "index": {
        "description": "version of execute that does not perform query substitution",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "execute_",
        "normalized": "Connection-\u003eQuery-\u003eIO Int",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. Results are streamed incrementally from the server, and\n consumed via a left fold.\n\u003c/p\u003e\u003cp\u003eThe result consumer must be carefully written to execute\n quickly. If the consumer is slow, server resources will be tied up,\n and other clients may not be able to update the tables from which\n the results are being streamed.\n\u003c/p\u003e\u003cp\u003eWhen dealing with small results, it may be simpler (and perhaps\n faster) to use \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThis fold is \u003cem\u003enot\u003c/em\u003e strict. The stream consumer is responsible for\n forcing the evaluation of its result to avoid space leaks.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e q-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results Results are streamed incrementally from the server and consumed via left fold The result consumer must be carefully written to execute quickly If the consumer is slow server resources will be tied up and other clients may not be able to update the tables from which the results are being streamed When dealing with small results it may be simpler and perhaps faster to use query instead This fold is not strict The stream consumer is responsible for forcing the evaluation of its result to avoid space leaks Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "fold",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eb-\u003e(b-\u003ec-\u003eIO b)-\u003eIO b",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:fold_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e a-\u003e (a -\u003e r -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "fold_"
      },
      "index": {
        "description": "version of fold that does not perform query substitution",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "fold_",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003eb-\u003eIO a)-\u003eIO a",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003ea-\u003e(a-\u003er-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:forEach",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e that does not transform a state value.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e q-\u003e (r -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "forEach"
      },
      "index": {
        "description": "version of fold that does not transform state value",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "forEach",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003e(b-\u003eIO())-\u003eIO()",
        "package": "mysql-simple",
        "partial": "Each",
        "signature": "Connection-\u003eQuery-\u003eq-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:forEach_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eforEach\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection-\u003e Query-\u003e (r -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "forEach_"
      },
      "index": {
        "description": "version of forEach that does not perform query substitution",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "forEach_",
        "normalized": "Connection-\u003eQuery-\u003e(a-\u003eIO())-\u003eIO()",
        "package": "mysql-simple",
        "partial": "Each",
        "signature": "Connection-\u003eQuery-\u003e(r-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:formatMany",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a query string with a variable number of rows.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eThe query string must contain exactly one substitution group,\n identified by the SQL keyword \"\u003ccode\u003eVALUES\u003c/code\u003e\" (case insensitive)\n followed by an \"\u003ccode\u003e(\u003c/code\u003e\" character, a series of one or more \"\u003ccode\u003e?\u003c/code\u003e\"\n characters separated by commas, and a \"\u003ccode\u003e)\u003c/code\u003e\" character. White\n space in a substitution group is permitted.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e [q] -\u003e IO ByteString",
        "fct-source": "src/Database-MySQL-Simple.html#formatMany",
        "fct-type": "function",
        "title": "formatMany"
      },
      "index": {
        "description": "Format query string with variable number of rows This function is exposed to help with debugging and logging Do not use it to prepare queries for execution The query string must contain exactly one substitution group identified by the SQL keyword VALUES case insensitive followed by an character series of one or more characters separated by commas and character White space in substitution group is permitted Throws FormatError if the query string could not be formatted correctly",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "formatMany",
        "normalized": "Connection-\u003eQuery-\u003e[a]-\u003eIO ByteString",
        "package": "mysql-simple",
        "partial": "Many",
        "signature": "Connection-\u003eQuery-\u003e[q]-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:formatQuery",
      "description": {
        "fct-descr": "\u003cp\u003eFormat a query string.\n\u003c/p\u003e\u003cp\u003eThis function is exposed to help with debugging and logging. Do not\n use it to prepare queries for execution.\n\u003c/p\u003e\u003cp\u003eString parameters are escaped according to the character set in use\n on the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e if the query string could not be formatted\n correctly.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO ByteString",
        "fct-source": "src/Database-MySQL-Simple.html#formatQuery",
        "fct-type": "function",
        "title": "formatQuery"
      },
      "index": {
        "description": "Format query string This function is exposed to help with debugging and logging Do not use it to prepare queries for execution String parameters are escaped according to the character set in use on the Connection Throws FormatError if the query string could not be formatted correctly",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "formatQuery",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO ByteString",
        "package": "mysql-simple",
        "partial": "Query",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:fromOnly",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "a",
        "fct-source": "src/Database-MySQL-Simple-Types.html#Only",
        "fct-type": "function",
        "title": "fromOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "fromOnly",
        "normalized": "",
        "package": "mysql-simple",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:insertID",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the value generated for an \u003ccode\u003eAUTO_INCREMENT\u003c/code\u003e column by the\n previous \u003ccode\u003eINSERT\u003c/code\u003e or \u003ccode\u003eUPDATE\u003c/code\u003e statement.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://dev.mysql.com/doc/refman/5.5/en/mysql-insert-id.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e IO Word64",
        "fct-type": "function",
        "title": "insertID"
      },
      "index": {
        "description": "Return the value generated for an AUTO INCREMENT column by the previous INSERT or UPDATE statement See http dev.mysql.com doc refman en mysql-insert-id.html",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "insertID",
        "normalized": "Connection-\u003eIO Word",
        "package": "mysql-simple",
        "partial": "ID",
        "signature": "Connection-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a \u003ccode\u003eSELECT\u003c/code\u003e or other SQL query that is expected to return\n results. All results are retrieved and converted before this\n function returns.\n\u003c/p\u003e\u003cp\u003eWhen processing large results, this function will consume a lot of\n client-side memory.  Consider using \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eExceptions that may be thrown:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eFormatError\u003c/a\u003e\u003c/code\u003e: the query string could not be formatted correctly.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eQueryError\u003c/a\u003e\u003c/code\u003e: the result contains no columns (i.e. you should be\n   using \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResultError\u003c/a\u003e\u003c/code\u003e: result conversion failed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e q -\u003e IO [r]",
        "fct-source": "src/Database-MySQL-Simple.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Perform SELECT or other SQL query that is expected to return results All results are retrieved and converted before this function returns When processing large results this function will consume lot of client-side memory Consider using fold instead Exceptions that may be thrown FormatError the query string could not be formatted correctly QueryError the result contains no columns i.e you should be using execute instead of query ResultError result conversion failed",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "query",
        "normalized": "Connection-\u003eQuery-\u003ea-\u003eIO[b]",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eq-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:query_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e that does not perform query substitution.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e Query -\u003e IO [r]",
        "fct-source": "src/Database-MySQL-Simple.html#query_",
        "fct-type": "function",
        "title": "query_"
      },
      "index": {
        "description": "version of query that does not perform query substitution",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "query_",
        "normalized": "Connection-\u003eQuery-\u003eIO[a]",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eQuery-\u003eIO[r]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:rollback",
      "description": {
        "fct-descr": "\u003cp\u003eRoll back the current transaction.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-type": "function",
        "title": "rollback"
      },
      "index": {
        "description": "Roll back the current transaction",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "rollback",
        "normalized": "Connection-\u003eIO()",
        "package": "mysql-simple",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mysql-simple/docs/Database-MySQL-Simple.html#v:withTransaction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action inside a SQL transaction.\n\u003c/p\u003e\u003cp\u003eThis function initiates a transaction with a \"\u003ccode\u003ebegin\n transaction\u003c/code\u003e\" statement, then executes the supplied action.  If\n the action succeeds, the transaction will be completed with\n \u003ccode\u003e\u003ca\u003ecommit\u003c/a\u003e\u003c/code\u003e before this function returns.\n\u003c/p\u003e\u003cp\u003eIf the action throws \u003cem\u003eany\u003c/em\u003e kind of exception (not just a\n MySQL-related exception), the transaction will be rolled back using\n \u003ccode\u003e\u003ca\u003erollback\u003c/a\u003e\u003c/code\u003e, then the exception will be rethrown.\n\u003c/p\u003e",
        "fct-module": "Database.MySQL.Simple",
        "fct-package": "mysql-simple",
        "fct-signature": "Connection -\u003e IO a -\u003e IO a",
        "fct-source": "src/Database-MySQL-Simple.html#withTransaction",
        "fct-type": "function",
        "title": "withTransaction"
      },
      "index": {
        "description": "Execute an action inside SQL transaction This function initiates transaction with begin transaction statement then executes the supplied action If the action succeeds the transaction will be completed with commit before this function returns If the action throws any kind of exception not just MySQL-related exception the transaction will be rolled back using rollback then the exception will be rethrown",
        "hierarchy": "Database MySQL Simple",
        "module": "Database.MySQL.Simple",
        "name": "withTransaction",
        "normalized": "Connection-\u003eIO a-\u003eIO a",
        "package": "mysql-simple",
        "partial": "Transaction",
        "signature": "Connection-\u003eIO a-\u003eIO a"
      }
    }
  }
]