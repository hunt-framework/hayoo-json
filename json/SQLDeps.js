[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core engine for keeping track of computations and their dependencies. Check the Example.hs for\nan example use.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLDeps-Engine.html",
        "fct-type": "module",
        "title": "Engine"
      },
      "index": {
        "description": "The core engine for keeping track of computations and their dependencies Check the Example.hs for an example use",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "Engine",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#t:CompId",
      "description": {
        "fct-descr": "\u003cp\u003eUnique identifier given by the user to a computation\n\u003c/p\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "type",
        "fct-source": "src/Database-SQLDeps-Engine.html#CompId",
        "fct-type": "type",
        "title": "CompId"
      },
      "index": {
        "description": "Unique identifier given by the user to computation",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "CompId",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Comp Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#t:DepsM",
      "description": {
        "fct-descr": "\u003cp\u003eThe engines monad, keeping track of queries, dependencies, computations\n and the connection\n\u003c/p\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "type",
        "fct-source": "src/Database-SQLDeps-Engine.html#DepsM",
        "fct-type": "type",
        "title": "DepsM"
      },
      "index": {
        "description": "The engines monad keeping track of queries dependencies computations and the connection",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "DepsM",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Deps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:change",
      "description": {
        "fct-descr": "\u003cp\u003eRun an update/insert query on the database. All depending computations\n will be run after the update/insert is commited.\n\u003c/p\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "Upsert -\u003e DepsM conn ()",
        "fct-source": "src/Database-SQLDeps-Engine.html#change",
        "fct-type": "function",
        "title": "change"
      },
      "index": {
        "description": "Run an update insert query on the database All depending computations will be run after the update insert is commited",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "change",
        "normalized": "Upsert-\u003eDepsM a()",
        "package": "SQLDeps",
        "partial": "",
        "signature": "Upsert-\u003eDepsM conn()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eRun a query and register it's parent computation. Important: Keep the CompId unique for\n every unique computation, otherwise you will run into errors\n\u003c/p\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "Select -\u003e CompId -\u003e DepsM conn () -\u003e DepsM conn [[SqlValue]]",
        "fct-source": "src/Database-SQLDeps-Engine.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Run query and register it parent computation Important Keep the CompId unique for every unique computation otherwise you will run into errors",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "query",
        "normalized": "Select-\u003eCompId-\u003eDepsM a()-\u003eDepsM a[[SqlValue]]",
        "package": "SQLDeps",
        "partial": "",
        "signature": "Select-\u003eCompId-\u003eDepsM conn()-\u003eDepsM conn[[SqlValue]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:runEngine",
      "description": {
        "fct-descr": "\u003cp\u003eStart the frameworks engine with a given HDBC-Connection\n\u003c/p\u003e",
        "fct-module": "Database.SQLDeps.Engine",
        "fct-package": "SQLDeps",
        "fct-signature": "conn -\u003e DepsM conn a -\u003e IO a",
        "fct-source": "src/Database-SQLDeps-Engine.html#runEngine",
        "fct-type": "function",
        "title": "runEngine"
      },
      "index": {
        "description": "Start the frameworks engine with given HDBC-Connection",
        "hierarchy": "Database SQLDeps Engine",
        "module": "Database.SQLDeps.Engine",
        "name": "runEngine",
        "normalized": "a-\u003eDepsM a b-\u003eIO b",
        "package": "SQLDeps",
        "partial": "Engine",
        "signature": "conn-\u003eDepsM conn a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type definitions for SQLDeps\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLDeps-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Simple type definitions for SQLDeps",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Types",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:FieldName",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "type",
        "fct-source": "src/Database-SQLDeps-Types.html#FieldName",
        "fct-type": "type",
        "title": "FieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "FieldName",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:FieldVal",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLDeps-Types.html#FieldVal",
        "fct-type": "data",
        "title": "FieldVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "FieldVal",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Field Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Filter",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLDeps-Types.html#Filter",
        "fct-type": "data",
        "title": "Filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Filter",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Select",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLDeps-Types.html#Select",
        "fct-type": "data",
        "title": "Select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Select",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:TableName",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "type",
        "fct-source": "src/Database-SQLDeps-Types.html#TableName",
        "fct-type": "type",
        "title": "TableName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "TableName",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Table Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Upsert",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "data",
        "fct-source": "src/Database-SQLDeps-Types.html#Upsert",
        "fct-type": "data",
        "title": "Upsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Upsert",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Upsert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:EqualTo",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "EqualTo FieldName FieldVal",
        "fct-source": "src/Database-SQLDeps-Types.html#Filter",
        "fct-type": "function",
        "title": "EqualTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "EqualTo",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Equal To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Insert",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "Insert TableName [(FieldName, FieldVal)]",
        "fct-source": "src/Database-SQLDeps-Types.html#Upsert",
        "fct-type": "function",
        "title": "Insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Insert",
        "normalized": "Insert TableName[(FieldName,FieldVal)]",
        "package": "SQLDeps",
        "partial": "Insert",
        "signature": "Insert TableName[(FieldName,FieldVal)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:IntVal",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "IntVal Int",
        "fct-source": "src/Database-SQLDeps-Types.html#FieldVal",
        "fct-type": "function",
        "title": "IntVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "IntVal",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Int Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:LargerThan",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "LargerThan FieldName FieldVal",
        "fct-source": "src/Database-SQLDeps-Types.html#Filter",
        "fct-type": "function",
        "title": "LargerThan"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "LargerThan",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Larger Than",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Select",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "Select [FieldName] [TableName] [Filter]",
        "fct-source": "src/Database-SQLDeps-Types.html#Select",
        "fct-type": "function",
        "title": "Select"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Select",
        "normalized": "Select[FieldName][TableName][Filter]",
        "package": "SQLDeps",
        "partial": "Select",
        "signature": "Select[FieldName][TableName][Filter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:SmallerThan",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "SmallerThan FieldName FieldVal",
        "fct-source": "src/Database-SQLDeps-Types.html#Filter",
        "fct-type": "function",
        "title": "SmallerThan"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "SmallerThan",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Smaller Than",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:StrVal",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "StrVal String",
        "fct-source": "src/Database-SQLDeps-Types.html#FieldVal",
        "fct-type": "function",
        "title": "StrVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "StrVal",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "Str Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Update",
      "description": {
        "fct-module": "Database.SQLDeps.Types",
        "fct-package": "SQLDeps",
        "fct-signature": "Update TableName [(FieldName, FieldVal)] [Filter]",
        "fct-source": "src/Database-SQLDeps-Types.html#Upsert",
        "fct-type": "function",
        "title": "Update"
      },
      "index": {
        "description": "",
        "hierarchy": "Database SQLDeps Types",
        "module": "Database.SQLDeps.Types",
        "name": "Update",
        "normalized": "Update TableName[(FieldName,FieldVal)][Filter]",
        "package": "SQLDeps",
        "partial": "Update",
        "signature": "Update TableName[(FieldName,FieldVal)][Filter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexport public modules\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.SQLDeps",
        "fct-package": "SQLDeps",
        "fct-signature": "module",
        "fct-source": "src/Database-SQLDeps.html",
        "fct-type": "module",
        "title": "SQLDeps"
      },
      "index": {
        "description": "Reexport public modules",
        "hierarchy": "Database SQLDeps",
        "module": "Database.SQLDeps",
        "name": "SQLDeps",
        "normalized": "",
        "package": "SQLDeps",
        "partial": "SQLDeps",
        "signature": ""
      }
    }
  }
]