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
        "word": "yesod-datatables"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is used to make database queries based on the\n DataTables request. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "Query",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Query.html",
          "type": "module"
        },
        "index": {
          "description": "This module is used to make database queries based on the DataTables request",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "Query",
          "package": "yesod-datatables",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of DataTables grid column \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "ColumnName",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html#ColumnName",
          "type": "type"
        },
        "index": {
          "description": "Name of DataTables grid column",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "ColumnName",
          "package": "yesod-datatables",
          "partial": "Column Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:ColumnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions in a DataTable define how search strings, column sorting,\n filtering and value fetching is implemented.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "DataTable",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "data"
        },
        "index": {
          "description": "The functions in DataTable define how search strings column sorting filtering and value fetching is implemented",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "DataTable",
          "package": "yesod-datatables",
          "partial": "Data Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:DataTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for indicating whether a search string is a regular\n expression.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "RegexFlag",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Query.html#RegexFlag",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for indicating whether search string is regular expression",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "RegexFlag",
          "package": "yesod-datatables",
          "partial": "Regex Flag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:RegexFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Query",
          "name": "DataTable",
          "package": "yesod-datatables",
          "signature": "DataTable",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "DataTable",
          "package": "yesod-datatables",
          "partial": "Data Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:DataTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects records from database and populates the grid columns using \n callback functions (which can issue follow-up queries)\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dataTableSelect",
          "package": "yesod-datatables",
          "signature": "DataTable val -\u003e Request -\u003e m Reply",
          "source": "src/Yesod-DataTables-Query.html#dataTableSelect",
          "type": "function"
        },
        "index": {
          "description": "selects records from database and populates the grid columns using callback functions which can issue follow-up queries",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dataTableSelect",
          "normalized": "DataTable a-\u003eRequest-\u003eb Reply",
          "package": "yesod-datatables",
          "partial": "Table Select",
          "signature": "DataTable val-\u003eRequest-\u003em Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dataTableSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapping a column search to filters\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtColumnSearch",
          "package": "yesod-datatables",
          "signature": "ColumnName -\u003e Text -\u003e RegexFlag -\u003e [Filter val]",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "mapping column search to filters",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtColumnSearch",
          "normalized": "ColumnName-\u003eText-\u003eRegexFlag-\u003e[Filter a]",
          "package": "yesod-datatables",
          "partial": "Column Search",
          "signature": "ColumnName-\u003eText-\u003eRegexFlag-\u003e[Filter val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtColumnSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilters that are always applied\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtFilters",
          "package": "yesod-datatables",
          "signature": "[Filter val]",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "filters that are always applied",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtFilters",
          "normalized": "[Filter a]",
          "package": "yesod-datatables",
          "partial": "Filters",
          "signature": "[Filter val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapping global search field to filters\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtGlobalSearch",
          "package": "yesod-datatables",
          "signature": "Text -\u003e RegexFlag -\u003e [Filter val]",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "mapping global search field to filters",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtGlobalSearch",
          "normalized": "Text-\u003eRegexFlag-\u003e[Filter a]",
          "package": "yesod-datatables",
          "partial": "Global Search",
          "signature": "Text-\u003eRegexFlag-\u003e[Filter val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtGlobalSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapping entity to a row identifier\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtRowId",
          "package": "yesod-datatables",
          "signature": "Entity val -\u003e m Text",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "mapping entity to row identifier",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtRowId",
          "normalized": "Entity a-\u003eb Text",
          "package": "yesod-datatables",
          "partial": "Row Id",
          "signature": "Entity val-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtRowId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapping sorting instructions to select options\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtSort",
          "package": "yesod-datatables",
          "signature": "[(ColumnName, SortDir)] -\u003e [SelectOpt val]",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "mapping sorting instructions to select options",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtSort",
          "normalized": "[(ColumnName,SortDir)]-\u003e[SelectOpt a]",
          "package": "yesod-datatables",
          "partial": "Sort",
          "signature": "[(ColumnName,SortDir)]-\u003e[SelectOpt val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapping column name and entity to a textual value\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Query",
          "name": "dtValue",
          "package": "yesod-datatables",
          "signature": "ColumnName -\u003e Entity val -\u003e m Text",
          "source": "src/Yesod-DataTables-Query.html#DataTable",
          "type": "function"
        },
        "index": {
          "description": "mapping column name and entity to textual value",
          "hierarchy": "Yesod DataTables Query",
          "module": "Yesod.DataTables.Query",
          "name": "dtValue",
          "normalized": "ColumnName-\u003eEntity a-\u003eb Text",
          "package": "yesod-datatables",
          "partial": "Value",
          "signature": "ColumnName-\u003eEntity val-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables reply formatting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Reply.html",
          "type": "module"
        },
        "index": {
          "description": "DataTables reply formatting",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "partial": "Reply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for holding the reply to DataTables jQuery plugin.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "Container for holding the reply to DataTables jQuery plugin",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "signature": "Reply",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "Reply",
          "package": "yesod-datatables",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates the reply object to a JSON value that DataTables javascript\n plugin expects.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "formatReply",
          "package": "yesod-datatables",
          "signature": "Reply -\u003e Value",
          "source": "src/Yesod-DataTables-Reply.html#formatReply",
          "type": "function"
        },
        "index": {
          "description": "Translates the reply object to JSON value that DataTables javascript plugin expects",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "formatReply",
          "normalized": "Reply-\u003eValue",
          "package": "yesod-datatables",
          "partial": "Reply",
          "signature": "Reply-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:formatReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unaltered copy of \u003ccode\u003esEcho\u003c/code\u003e sent from the client side. \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "replyEcho",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "function"
        },
        "index": {
          "description": "An unaltered copy of sEcho sent from the client side",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "replyEcho",
          "package": "yesod-datatables",
          "partial": "Echo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal records, after filtering (i.e. the total number of records \n after filtering has been applied - not just the number of records \n being returned in this result set).                             \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "replyNumDisplayRecords",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "function"
        },
        "index": {
          "description": "Total records after filtering i.e the total number of records after filtering has been applied not just the number of records being returned in this result set",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "replyNumDisplayRecords",
          "package": "yesod-datatables",
          "partial": "Num Display Records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyNumDisplayRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal records, before filtering \n (i.e. the total number of records in the database).\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "replyNumRecords",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "function"
        },
        "index": {
          "description": "Total records before filtering i.e the total number of records in the database",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "replyNumRecords",
          "package": "yesod-datatables",
          "partial": "Num Records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyNumRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of JSON objects, one for each record.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Reply",
          "name": "replyRecords",
          "package": "yesod-datatables",
          "signature": "Value",
          "source": "src/Yesod-DataTables-Reply.html#Reply",
          "type": "function"
        },
        "index": {
          "description": "An array of JSON objects one for each record",
          "hierarchy": "Yesod DataTables Reply",
          "module": "Yesod.DataTables.Reply",
          "name": "replyRecords",
          "package": "yesod-datatables",
          "partial": "Records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables request parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html",
          "type": "module"
        },
        "index": {
          "description": "DataTables request parsing",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einformation about grid column \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "Column",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "data"
        },
        "index": {
          "description": "information about grid column",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "Column",
          "package": "yesod-datatables",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of DataTables grid column \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "ColumnName",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html#ColumnName",
          "type": "type"
        },
        "index": {
          "description": "Name of DataTables grid column",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "ColumnName",
          "package": "yesod-datatables",
          "partial": "Column Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:ColumnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDataTables grid server-side request\n (see \u003ca\u003ehttp://datatables.net/usage/server-side\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "data"
        },
        "index": {
          "description": "DataTables grid server-side request see http datatables.net usage server-side",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenum for sSortDir_(int) \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "SortDir",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables-Request.html#SortDir",
          "type": "data"
        },
        "index": {
          "description": "enum for sSortDir int",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "SortDir",
          "package": "yesod-datatables",
          "partial": "Sort Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:SortDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Request",
          "name": "Column",
          "package": "yesod-datatables",
          "signature": "Column",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "Column",
          "package": "yesod-datatables",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "signature": "Request",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "Request",
          "package": "yesod-datatables",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Request",
          "name": "SortAsc",
          "package": "yesod-datatables",
          "signature": "SortAsc",
          "source": "src/Yesod-DataTables-Request.html#SortDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "SortAsc",
          "package": "yesod-datatables",
          "partial": "Sort Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:SortAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.DataTables.Request",
          "name": "SortDesc",
          "package": "yesod-datatables",
          "signature": "SortDesc",
          "source": "src/Yesod-DataTables-Request.html#SortDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "SortDesc",
          "package": "yesod-datatables",
          "partial": "Sort Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:SortDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumn name (client-side also expects the data in a field with the\n same name \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "colName",
          "package": "yesod-datatables",
          "signature": "Text",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "description": "column name client-side also expects the data in field with the same name",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "colName",
          "package": "yesod-datatables",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumn-specific search query  \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "colSearch",
          "package": "yesod-datatables",
          "signature": "Text",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "description": "column-specific search query",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "colSearch",
          "package": "yesod-datatables",
          "partial": "Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether search query should be interpreted as a regular expression\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "colSearchRegex",
          "package": "yesod-datatables",
          "signature": "Bool",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "description": "whether search query should be interpreted as regular expression",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "colSearchRegex",
          "package": "yesod-datatables",
          "partial": "Search Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearchRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether searching is enabled at client-side\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "colSearchable",
          "package": "yesod-datatables",
          "signature": "Bool",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "description": "whether searching is enabled at client-side",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "colSearchable",
          "package": "yesod-datatables",
          "partial": "Searchable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether sorting is enabled at client-side\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "colSortable",
          "package": "yesod-datatables",
          "signature": "Bool",
          "source": "src/Yesod-DataTables-Request.html#Column",
          "type": "function"
        },
        "index": {
          "description": "whether sorting is enabled at client-side",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "colSortable",
          "package": "yesod-datatables",
          "partial": "Sortable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSortable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to parse DataTables request\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "parseRequest",
          "package": "yesod-datatables",
          "signature": "[(ParamName, ParamValue)] -\u003e Maybe Request",
          "source": "src/Yesod-DataTables-Request.html#parseRequest",
          "type": "function"
        },
        "index": {
          "description": "Tries to parse DataTables request",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "parseRequest",
          "normalized": "[(ParamName,ParamValue)]-\u003eMaybe Request",
          "package": "yesod-datatables",
          "partial": "Request",
          "signature": "[(ParamName,ParamValue)]-\u003eMaybe Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:parseRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecolumns that the client-side knows about\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqColumns",
          "package": "yesod-datatables",
          "signature": "[Column]",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "columns that the client-side knows about",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqColumns",
          "normalized": "[Column]",
          "package": "yesod-datatables",
          "partial": "Columns",
          "signature": "[Column]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of records that the table can display in the current draw. It is expected that the number of records returned will be equal to this number, unless the server has fewer records to return.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqDisplayLength",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Number of records that the table can display in the current draw It is expected that the number of records returned will be equal to this number unless the server has fewer records to return",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqDisplayLength",
          "package": "yesod-datatables",
          "partial": "Display Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqDisplayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay start point in the current data set.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqDisplayStart",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Display start point in the current data set",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqDisplayStart",
          "package": "yesod-datatables",
          "partial": "Display Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqDisplayStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation for DataTables to use for rendering (do not alter).\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqEcho",
          "package": "yesod-datatables",
          "signature": "Int",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Information for DataTables to use for rendering do not alter",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqEcho",
          "package": "yesod-datatables",
          "partial": "Echo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqEcho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal search field\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqSearch",
          "package": "yesod-datatables",
          "signature": "Text",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "Global search field",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqSearch",
          "package": "yesod-datatables",
          "partial": "Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the global filter should be treated as a regular expression for advanced filtering, false if not.\n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqSearchRegex",
          "package": "yesod-datatables",
          "signature": "Bool",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "True if the global filter should be treated as regular expression for advanced filtering false if not",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqSearchRegex",
          "package": "yesod-datatables",
          "partial": "Search Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSearchRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eresult set sorting instructions \n\u003c/p\u003e",
          "module": "Yesod.DataTables.Request",
          "name": "reqSort",
          "package": "yesod-datatables",
          "signature": "[(ColumnName, SortDir)]",
          "source": "src/Yesod-DataTables-Request.html#Request",
          "type": "function"
        },
        "index": {
          "description": "result set sorting instructions",
          "hierarchy": "Yesod DataTables Request",
          "module": "Yesod.DataTables.Request",
          "name": "reqSort",
          "normalized": "[(ColumnName,SortDir)]",
          "package": "yesod-datatables",
          "partial": "Sort",
          "signature": "[(ColumnName,SortDir)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables (\u003ca\u003ehttp://datatables.net\u003c/a\u003e) is a capable plugin for jQuery \n Javascript library. This Haskell library contains routines for implementing\n server-side processing (e.g. request parsing and response formatting) for\n DataTables with Yesod platform.\n\u003c/p\u003e\u003cp\u003eSee the example at \u003ca\u003ehttp://yesod-datatables-example.herokuapp.com\u003c/a\u003e .\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.DataTables",
          "name": "DataTables",
          "package": "yesod-datatables",
          "source": "src/Yesod-DataTables.html",
          "type": "module"
        },
        "index": {
          "description": "DataTables http datatables.net is capable plugin for jQuery Javascript library This Haskell library contains routines for implementing server-side processing e.g request parsing and response formatting for DataTables with Yesod platform See the example at http yesod-datatables-example.herokuapp.com",
          "hierarchy": "Yesod DataTables",
          "module": "Yesod.DataTables",
          "name": "DataTables",
          "package": "yesod-datatables",
          "partial": "Data Tables",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables.html#"
      }
    }
  ]
]