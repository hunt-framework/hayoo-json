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
        "word": "SQLDeps"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core engine for keeping track of computations and their dependencies. Check the Example.hs for\nan example use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "Engine",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Engine.html",
          "type": "module"
        },
        "index": {
          "description": "The core engine for keeping track of computations and their dependencies Check the Example.hs for an example use",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "Engine",
          "package": "SQLDeps",
          "partial": "Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique identifier given by the user to a computation\n\u003c/p\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "CompId",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Engine.html#CompId",
          "type": "type"
        },
        "index": {
          "description": "Unique identifier given by the user to computation",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "CompId",
          "package": "SQLDeps",
          "partial": "Comp Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#t:CompId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe engines monad, keeping track of queries, dependencies, computations\n and the connection\n\u003c/p\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "DepsM",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Engine.html#DepsM",
          "type": "type"
        },
        "index": {
          "description": "The engines monad keeping track of queries dependencies computations and the connection",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "DepsM",
          "package": "SQLDeps",
          "partial": "Deps",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#t:DepsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an update/insert query on the database. All depending computations\n will be run after the update/insert is commited.\n\u003c/p\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "change",
          "package": "SQLDeps",
          "signature": "Upsert -\u003e DepsM conn ()",
          "source": "src/Database-SQLDeps-Engine.html#change",
          "type": "function"
        },
        "index": {
          "description": "Run an update insert query on the database All depending computations will be run after the update insert is commited",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "change",
          "normalized": "Upsert-\u003eDepsM a()",
          "package": "SQLDeps",
          "signature": "Upsert-\u003eDepsM conn()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a query and register it's parent computation. Important: Keep the CompId unique for\n every unique computation, otherwise you will run into errors\n\u003c/p\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "query",
          "package": "SQLDeps",
          "signature": "Select -\u003e CompId -\u003e DepsM conn () -\u003e DepsM conn [[SqlValue]]",
          "source": "src/Database-SQLDeps-Engine.html#query",
          "type": "function"
        },
        "index": {
          "description": "Run query and register it parent computation Important Keep the CompId unique for every unique computation otherwise you will run into errors",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "query",
          "normalized": "Select-\u003eCompId-\u003eDepsM a()-\u003eDepsM a[[SqlValue]]",
          "package": "SQLDeps",
          "signature": "Select-\u003eCompId-\u003eDepsM conn()-\u003eDepsM conn[[SqlValue]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart the frameworks engine with a given HDBC-Connection\n\u003c/p\u003e",
          "module": "Database.SQLDeps.Engine",
          "name": "runEngine",
          "package": "SQLDeps",
          "signature": "conn -\u003e DepsM conn a -\u003e IO a",
          "source": "src/Database-SQLDeps-Engine.html#runEngine",
          "type": "function"
        },
        "index": {
          "description": "Start the frameworks engine with given HDBC-Connection",
          "hierarchy": "Database SQLDeps Engine",
          "module": "Database.SQLDeps.Engine",
          "name": "runEngine",
          "normalized": "a-\u003eDepsM a b-\u003eIO b",
          "package": "SQLDeps",
          "partial": "Engine",
          "signature": "conn-\u003eDepsM conn a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Engine.html#v:runEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple type definitions for SQLDeps\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLDeps.Types",
          "name": "Types",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Simple type definitions for SQLDeps",
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Types",
          "package": "SQLDeps",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "FieldName",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#FieldName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "FieldName",
          "package": "SQLDeps",
          "partial": "Field Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:FieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "FieldVal",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#FieldVal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "FieldVal",
          "package": "SQLDeps",
          "partial": "Field Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:FieldVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Filter",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#Filter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Filter",
          "package": "SQLDeps",
          "partial": "Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Select",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#Select",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Select",
          "package": "SQLDeps",
          "partial": "Select",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "TableName",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#TableName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "TableName",
          "package": "SQLDeps",
          "partial": "Table Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:TableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Upsert",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps-Types.html#Upsert",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Upsert",
          "package": "SQLDeps",
          "partial": "Upsert",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#t:Upsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "EqualTo",
          "package": "SQLDeps",
          "signature": "EqualTo FieldName FieldVal",
          "source": "src/Database-SQLDeps-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "EqualTo",
          "package": "SQLDeps",
          "partial": "Equal To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:EqualTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Insert",
          "package": "SQLDeps",
          "signature": "Insert TableName [(FieldName, FieldVal)]",
          "source": "src/Database-SQLDeps-Types.html#Upsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Insert",
          "normalized": "Insert TableName[(FieldName,FieldVal)]",
          "package": "SQLDeps",
          "partial": "Insert",
          "signature": "Insert TableName[(FieldName,FieldVal)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "IntVal",
          "package": "SQLDeps",
          "signature": "IntVal Int",
          "source": "src/Database-SQLDeps-Types.html#FieldVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "IntVal",
          "package": "SQLDeps",
          "partial": "Int Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:IntVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "LargerThan",
          "package": "SQLDeps",
          "signature": "LargerThan FieldName FieldVal",
          "source": "src/Database-SQLDeps-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "LargerThan",
          "package": "SQLDeps",
          "partial": "Larger Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:LargerThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Select",
          "package": "SQLDeps",
          "signature": "Select [FieldName] [TableName] [Filter]",
          "source": "src/Database-SQLDeps-Types.html#Select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Select",
          "normalized": "Select[FieldName][TableName][Filter]",
          "package": "SQLDeps",
          "partial": "Select",
          "signature": "Select[FieldName][TableName][Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "SmallerThan",
          "package": "SQLDeps",
          "signature": "SmallerThan FieldName FieldVal",
          "source": "src/Database-SQLDeps-Types.html#Filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "SmallerThan",
          "package": "SQLDeps",
          "partial": "Smaller Than",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:SmallerThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "StrVal",
          "package": "SQLDeps",
          "signature": "StrVal String",
          "source": "src/Database-SQLDeps-Types.html#FieldVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "StrVal",
          "package": "SQLDeps",
          "partial": "Str Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:StrVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.SQLDeps.Types",
          "name": "Update",
          "package": "SQLDeps",
          "signature": "Update TableName [(FieldName, FieldVal)] [Filter]",
          "source": "src/Database-SQLDeps-Types.html#Upsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database SQLDeps Types",
          "module": "Database.SQLDeps.Types",
          "name": "Update",
          "normalized": "Update TableName[(FieldName,FieldVal)][Filter]",
          "package": "SQLDeps",
          "partial": "Update",
          "signature": "Update TableName[(FieldName,FieldVal)][Filter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps-Types.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexport public modules\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.SQLDeps",
          "name": "SQLDeps",
          "package": "SQLDeps",
          "source": "src/Database-SQLDeps.html",
          "type": "module"
        },
        "index": {
          "description": "Reexport public modules",
          "hierarchy": "Database SQLDeps",
          "module": "Database.SQLDeps",
          "name": "SQLDeps",
          "package": "SQLDeps",
          "partial": "SQLDeps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SQLDeps/docs/Database-SQLDeps.html#"
      }
    }
  ]
]