[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is used to make database queries based on the\n DataTables request. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "module",
        "fct-source": "src/Yesod-DataTables-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "This module is used to make database queries based on the DataTables request",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "Query",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:ColumnName",
      "description": {
        "fct-descr": "\u003cp\u003eName of DataTables grid column \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "type",
        "fct-source": "src/Yesod-DataTables-Request.html#ColumnName",
        "fct-type": "type",
        "title": "ColumnName"
      },
      "index": {
        "description": "Name of DataTables grid column",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "ColumnName",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Column Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:DataTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe functions in a DataTable define how search strings, column sorting,\n filtering and value fetching is implemented.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "data",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "data",
        "title": "DataTable"
      },
      "index": {
        "description": "The functions in DataTable define how search strings column sorting filtering and value fetching is implemented",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "DataTable",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Data Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#t:RegexFlag",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for indicating whether a search string is a regular\n expression.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "type",
        "fct-source": "src/Yesod-DataTables-Query.html#RegexFlag",
        "fct-type": "type",
        "title": "RegexFlag"
      },
      "index": {
        "description": "Type synonym for indicating whether search string is regular expression",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "RegexFlag",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Regex Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:DataTable",
      "description": {
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "DataTable",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "DataTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "DataTable",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Data Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dataTableSelect",
      "description": {
        "fct-descr": "\u003cp\u003eselects records from database and populates the grid columns using \n callback functions (which can issue follow-up queries)\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "DataTable val -\u003e Request -\u003e m Reply",
        "fct-source": "src/Yesod-DataTables-Query.html#dataTableSelect",
        "fct-type": "function",
        "title": "dataTableSelect"
      },
      "index": {
        "description": "selects records from database and populates the grid columns using callback functions which can issue follow-up queries",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dataTableSelect",
        "normalized": "DataTable a-\u003eRequest-\u003eb Reply",
        "package": "yesod-datatables",
        "partial": "Table Select",
        "signature": "DataTable val-\u003eRequest-\u003em Reply"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtColumnSearch",
      "description": {
        "fct-descr": "\u003cp\u003emapping a column search to filters\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "ColumnName -\u003e Text -\u003e RegexFlag -\u003e [Filter val]",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtColumnSearch"
      },
      "index": {
        "description": "mapping column search to filters",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtColumnSearch",
        "normalized": "ColumnName-\u003eText-\u003eRegexFlag-\u003e[Filter a]",
        "package": "yesod-datatables",
        "partial": "Column Search",
        "signature": "ColumnName-\u003eText-\u003eRegexFlag-\u003e[Filter val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtFilters",
      "description": {
        "fct-descr": "\u003cp\u003efilters that are always applied\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "[Filter val]",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtFilters"
      },
      "index": {
        "description": "filters that are always applied",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtFilters",
        "normalized": "[Filter a]",
        "package": "yesod-datatables",
        "partial": "Filters",
        "signature": "[Filter val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtGlobalSearch",
      "description": {
        "fct-descr": "\u003cp\u003emapping global search field to filters\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "Text -\u003e RegexFlag -\u003e [Filter val]",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtGlobalSearch"
      },
      "index": {
        "description": "mapping global search field to filters",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtGlobalSearch",
        "normalized": "Text-\u003eRegexFlag-\u003e[Filter a]",
        "package": "yesod-datatables",
        "partial": "Global Search",
        "signature": "Text-\u003eRegexFlag-\u003e[Filter val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtRowId",
      "description": {
        "fct-descr": "\u003cp\u003emapping entity to a row identifier\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "Entity val -\u003e m Text",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtRowId"
      },
      "index": {
        "description": "mapping entity to row identifier",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtRowId",
        "normalized": "Entity a-\u003eb Text",
        "package": "yesod-datatables",
        "partial": "Row Id",
        "signature": "Entity val-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtSort",
      "description": {
        "fct-descr": "\u003cp\u003emapping sorting instructions to select options\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "[(ColumnName, SortDir)] -\u003e [SelectOpt val]",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtSort"
      },
      "index": {
        "description": "mapping sorting instructions to select options",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtSort",
        "normalized": "[(ColumnName,SortDir)]-\u003e[SelectOpt a]",
        "package": "yesod-datatables",
        "partial": "Sort",
        "signature": "[(ColumnName,SortDir)]-\u003e[SelectOpt val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Query.html#v:dtValue",
      "description": {
        "fct-descr": "\u003cp\u003emapping column name and entity to a textual value\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Query",
        "fct-package": "yesod-datatables",
        "fct-signature": "ColumnName -\u003e Entity val -\u003e m Text",
        "fct-source": "src/Yesod-DataTables-Query.html#DataTable",
        "fct-type": "function",
        "title": "dtValue"
      },
      "index": {
        "description": "mapping column name and entity to textual value",
        "hierarchy": "Yesod DataTables Query",
        "module": "Yesod.DataTables.Query",
        "name": "dtValue",
        "normalized": "ColumnName-\u003eEntity a-\u003eb Text",
        "package": "yesod-datatables",
        "partial": "Value",
        "signature": "ColumnName-\u003eEntity val-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables reply formatting.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "module",
        "fct-source": "src/Yesod-DataTables-Reply.html",
        "fct-type": "module",
        "title": "Reply"
      },
      "index": {
        "description": "DataTables reply formatting",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "Reply",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#t:Reply",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for holding the reply to DataTables jQuery plugin.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "data",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "data",
        "title": "Reply"
      },
      "index": {
        "description": "Container for holding the reply to DataTables jQuery plugin",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "Reply",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:Reply",
      "description": {
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Reply",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "function",
        "title": "Reply"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "Reply",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:formatReply",
      "description": {
        "fct-descr": "\u003cp\u003eTranslates the reply object to a JSON value that DataTables javascript\n plugin expects.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Reply -\u003e Value",
        "fct-source": "src/Yesod-DataTables-Reply.html#formatReply",
        "fct-type": "function",
        "title": "formatReply"
      },
      "index": {
        "description": "Translates the reply object to JSON value that DataTables javascript plugin expects",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "formatReply",
        "normalized": "Reply-\u003eValue",
        "package": "yesod-datatables",
        "partial": "Reply",
        "signature": "Reply-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyEcho",
      "description": {
        "fct-descr": "\u003cp\u003eAn unaltered copy of \u003ccode\u003esEcho\u003c/code\u003e sent from the client side. \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "function",
        "title": "replyEcho"
      },
      "index": {
        "description": "An unaltered copy of sEcho sent from the client side",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "replyEcho",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Echo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyNumDisplayRecords",
      "description": {
        "fct-descr": "\u003cp\u003eTotal records, after filtering (i.e. the total number of records \n after filtering has been applied - not just the number of records \n being returned in this result set).                             \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "function",
        "title": "replyNumDisplayRecords"
      },
      "index": {
        "description": "Total records after filtering i.e the total number of records after filtering has been applied not just the number of records being returned in this result set",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "replyNumDisplayRecords",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Num Display Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyNumRecords",
      "description": {
        "fct-descr": "\u003cp\u003eTotal records, before filtering \n (i.e. the total number of records in the database).\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "function",
        "title": "replyNumRecords"
      },
      "index": {
        "description": "Total records before filtering i.e the total number of records in the database",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "replyNumRecords",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Num Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Reply.html#v:replyRecords",
      "description": {
        "fct-descr": "\u003cp\u003eAn array of JSON objects, one for each record.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Reply",
        "fct-package": "yesod-datatables",
        "fct-signature": "Value",
        "fct-source": "src/Yesod-DataTables-Reply.html#Reply",
        "fct-type": "function",
        "title": "replyRecords"
      },
      "index": {
        "description": "An array of JSON objects one for each record",
        "hierarchy": "Yesod DataTables Reply",
        "module": "Yesod.DataTables.Reply",
        "name": "replyRecords",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables request parsing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "module",
        "fct-source": "src/Yesod-DataTables-Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "DataTables request parsing",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "Request",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:Column",
      "description": {
        "fct-descr": "\u003cp\u003einformation about grid column \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "data",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "data",
        "title": "Column"
      },
      "index": {
        "description": "information about grid column",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "Column",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:ColumnName",
      "description": {
        "fct-descr": "\u003cp\u003eName of DataTables grid column \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "type",
        "fct-source": "src/Yesod-DataTables-Request.html#ColumnName",
        "fct-type": "type",
        "title": "ColumnName"
      },
      "index": {
        "description": "Name of DataTables grid column",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "ColumnName",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Column Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eDataTables grid server-side request\n (see \u003ca\u003ehttp://datatables.net/usage/server-side\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "data",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "DataTables grid server-side request see http datatables.net usage server-side",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "Request",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#t:SortDir",
      "description": {
        "fct-descr": "\u003cp\u003eenum for sSortDir_(int) \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "data",
        "fct-source": "src/Yesod-DataTables-Request.html#SortDir",
        "fct-type": "data",
        "title": "SortDir"
      },
      "index": {
        "description": "enum for sSortDir int",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "SortDir",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Sort Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:Column",
      "description": {
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Column",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "Column",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:Request",
      "description": {
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Request",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "Request",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:SortAsc",
      "description": {
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "SortAsc",
        "fct-source": "src/Yesod-DataTables-Request.html#SortDir",
        "fct-type": "function",
        "title": "SortAsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "SortAsc",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Sort Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:SortDesc",
      "description": {
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "SortDesc",
        "fct-source": "src/Yesod-DataTables-Request.html#SortDir",
        "fct-type": "function",
        "title": "SortDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "SortDesc",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Sort Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colName",
      "description": {
        "fct-descr": "\u003cp\u003ecolumn name (client-side also expects the data in a field with the\n same name \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "column name client-side also expects the data in field with the same name",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "colName",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearch",
      "description": {
        "fct-descr": "\u003cp\u003ecolumn-specific search query  \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "colSearch"
      },
      "index": {
        "description": "column-specific search query",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "colSearch",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearchRegex",
      "description": {
        "fct-descr": "\u003cp\u003ewhether search query should be interpreted as a regular expression\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Bool",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "colSearchRegex"
      },
      "index": {
        "description": "whether search query should be interpreted as regular expression",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "colSearchRegex",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Search Regex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSearchable",
      "description": {
        "fct-descr": "\u003cp\u003ewhether searching is enabled at client-side\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Bool",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "colSearchable"
      },
      "index": {
        "description": "whether searching is enabled at client-side",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "colSearchable",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Searchable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:colSortable",
      "description": {
        "fct-descr": "\u003cp\u003ewhether sorting is enabled at client-side\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Bool",
        "fct-source": "src/Yesod-DataTables-Request.html#Column",
        "fct-type": "function",
        "title": "colSortable"
      },
      "index": {
        "description": "whether sorting is enabled at client-side",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "colSortable",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Sortable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:parseRequest",
      "description": {
        "fct-descr": "\u003cp\u003eTries to parse DataTables request\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "[(ParamName, ParamValue)] -\u003e Maybe Request",
        "fct-source": "src/Yesod-DataTables-Request.html#parseRequest",
        "fct-type": "function",
        "title": "parseRequest"
      },
      "index": {
        "description": "Tries to parse DataTables request",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "parseRequest",
        "normalized": "[(ParamName,ParamValue)]-\u003eMaybe Request",
        "package": "yesod-datatables",
        "partial": "Request",
        "signature": "[(ParamName,ParamValue)]-\u003eMaybe Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqColumns",
      "description": {
        "fct-descr": "\u003cp\u003ecolumns that the client-side knows about\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "[Column]",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqColumns"
      },
      "index": {
        "description": "columns that the client-side knows about",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqColumns",
        "normalized": "[Column]",
        "package": "yesod-datatables",
        "partial": "Columns",
        "signature": "[Column]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqDisplayLength",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of records that the table can display in the current draw. It is expected that the number of records returned will be equal to this number, unless the server has fewer records to return.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqDisplayLength"
      },
      "index": {
        "description": "Number of records that the table can display in the current draw It is expected that the number of records returned will be equal to this number unless the server has fewer records to return",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqDisplayLength",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Display Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqDisplayStart",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay start point in the current data set.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqDisplayStart"
      },
      "index": {
        "description": "Display start point in the current data set",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqDisplayStart",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Display Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqEcho",
      "description": {
        "fct-descr": "\u003cp\u003eInformation for DataTables to use for rendering (do not alter).\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Int",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqEcho"
      },
      "index": {
        "description": "Information for DataTables to use for rendering do not alter",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqEcho",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Echo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSearch",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal search field\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqSearch"
      },
      "index": {
        "description": "Global search field",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqSearch",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSearchRegex",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the global filter should be treated as a regular expression for advanced filtering, false if not.\n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "Bool",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqSearchRegex"
      },
      "index": {
        "description": "True if the global filter should be treated as regular expression for advanced filtering false if not",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqSearchRegex",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Search Regex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables-Request.html#v:reqSort",
      "description": {
        "fct-descr": "\u003cp\u003eresult set sorting instructions \n\u003c/p\u003e",
        "fct-module": "Yesod.DataTables.Request",
        "fct-package": "yesod-datatables",
        "fct-signature": "[(ColumnName, SortDir)]",
        "fct-source": "src/Yesod-DataTables-Request.html#Request",
        "fct-type": "function",
        "title": "reqSort"
      },
      "index": {
        "description": "result set sorting instructions",
        "hierarchy": "Yesod DataTables Request",
        "module": "Yesod.DataTables.Request",
        "name": "reqSort",
        "normalized": "[(ColumnName,SortDir)]",
        "package": "yesod-datatables",
        "partial": "Sort",
        "signature": "[(ColumnName,SortDir)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-datatables/docs/Yesod-DataTables.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataTables (\u003ca\u003ehttp://datatables.net\u003c/a\u003e) is a capable plugin for jQuery \n Javascript library. This Haskell library contains routines for implementing\n server-side processing (e.g. request parsing and response formatting) for\n DataTables with Yesod platform.\n\u003c/p\u003e\u003cp\u003eSee the example at \u003ca\u003ehttp://yesod-datatables-example.herokuapp.com\u003c/a\u003e .\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.DataTables",
        "fct-package": "yesod-datatables",
        "fct-signature": "module",
        "fct-source": "src/Yesod-DataTables.html",
        "fct-type": "module",
        "title": "DataTables"
      },
      "index": {
        "description": "DataTables http datatables.net is capable plugin for jQuery Javascript library This Haskell library contains routines for implementing server-side processing e.g request parsing and response formatting for DataTables with Yesod platform See the example at http yesod-datatables-example.herokuapp.com",
        "hierarchy": "Yesod DataTables",
        "module": "Yesod.DataTables",
        "name": "DataTables",
        "normalized": "",
        "package": "yesod-datatables",
        "partial": "Data Tables",
        "signature": ""
      }
    }
  }
]